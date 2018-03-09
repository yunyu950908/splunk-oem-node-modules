import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { has, merge, noop, omit } from 'lodash';
import { _ } from 'splunk-ui/util/i18n';
import { keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';
import Sort from 'splunk-ui/icons/Sort';
import SortedDown from 'splunk-ui/icons/SortedDown';
import SortedUp from 'splunk-ui/icons/SortedUp';
import css from './HeadCell.css';

class HeadCell extends Component {
    static splunkUiType = 'Table.HeadCell';

    static propTypes = {
        /** Align the text in the label. */
        align: PropTypes.oneOf(['left', 'center', 'right']),
        /**
         * @docs-ignore
         * Used internally to suppress focus when this `HeadCell` is superseded by one in an
         * overlaid `HeadTable` for user interactions.
         */
        allowFocus: PropTypes.bool,
        /** @docs-ignore. */
        children: PropTypes.node,
        /** @docs-ignore. */
        className: PropTypes.string,
        /* @docs-ignore The index of the cell, skipping the info column. */
        index: PropTypes.number,
        /**
         * An id that will be returned in the draggable, sort and resize events.
         */
        columnId: PropTypes.any,
        /**
         * A callback invoked when this head cell is clicked. If provided, this HeadCell will be
         * sortable and render the appropriate user interface.
         */
        onSort: PropTypes.func,
        /**
         * @docs-ignore. This will be passed through, and will work as expected.
         */
        onKeyDown: PropTypes.func,
        /** @docs-ignore. */
        onRequestDragStart: PropTypes.func,
        /** @docs-ignore. */
        onRequestMoveColumn: PropTypes.func,
        /** @docs-ignore. */
        onRequestResize: (props) => { // eslint-disable-line consistent-return
            if (has(props, 'onRequestResize') && !props.truncate) {
                return new Error('HeadCell does not support truncate=false with resizable columns.'); // eslint-disable-line max-len
            }
        },
        /**
         * Allow the user to resize the column when onRequestResize is passed to the `Table`. Set
         * resizable to false to prevent some columns for resizing.
         */
        resizable: PropTypes.bool,
        /**
         * The current sort direction of this column.
         */
        sortDir: PropTypes.oneOf(['asc', 'desc', 'none']),
        /**
         * The `sortKey` will be passed in the data object to the `onSort` callback, if provided.
         */
        sortKey: PropTypes.string,
        /** @docs-ignore. */
        showGuideline: PropTypes.oneOf(['none', 'before', 'after']),
        /**
         * Truncate the text in the label. `truncate=false` is not compatible with `Table`'s
         * `onRequestResize`.
         */
        truncate: PropTypes.bool,
        /**
         * The width of the column in pixels.
         */
        width: PropTypes.number,
    };

    static defaultProps = {
        align: 'left',
        allowFocus: true,
        onKeyDown: noop,
        sortDir: 'none',
        resizable: true,
        showGuideline: 'none',
        truncate: true,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            resizing: false,
            isDragging: false,
            showGuideline: 'none',
        };
    }

    componentWillUnmount() {
        this.cleanupDrag();
    }

    handleClick = (e) => {
        // ignore clicks on the resize handle
        if (e.target.getAttribute('data-cell-role') !== 'resize') {
            const { sortKey, sortDir, id, index, columnId } = this.props;
            this.props.onSort(e, { sortKey, sortDir, id, columnId, index });
        }
    };

    handleKeyDown = (e) => {
        const { columnId, index, onKeyDown, onRequestMoveColumn } = this.props;

        if (e.target.getAttribute('data-cell-role') !== 'resize') {
            if (keycode(e) === 'enter') {
                this.handleClick(e);
            } else if (keycode(e) === 'left' && onRequestMoveColumn && index > 0) {
                onRequestMoveColumn({
                    fromIndex: index,
                    toIndex: index - 1,
                    columnId,
                });
            } else if (keycode(e) === 'right' && onRequestMoveColumn) {
                onRequestMoveColumn({
                    fromIndex: index,
                    toIndex: index + 1,
                    columnId,
                });
            }
        }
        if (onKeyDown) {
            onKeyDown(e, { index, columnId });
        }
    };

    handleResizeKeyDown = (e) => {
        const { index, columnId, id } = this.props;

        if (keycode(e) === 'left') {
            const newWidth = Math.max(this.props.width - 10, 20);
            this.props.onRequestResize(e, { index, columnId, id, width: newWidth });
        }
        if (keycode(e) === 'right') {
            const newWidth = this.props.width + 10;
            this.props.onRequestResize(e, { index, columnId, id, width: newWidth });
        }
    };

    handleStartResize = (e) => {
        e.preventDefault(); // prevent text selection
        this.setState({
            startClientX: e.clientX,
            startWidth: this.props.width,
            resizing: true,
        });
    };

    handleResize = (e) => {
        const { startClientX, startWidth } = this.state;
        const { index, columnId, id } = this.props;

        const change = startClientX - e.clientX;
        const width = Math.max(startWidth - change, 16);
        this.props.onRequestResize(e, { index, columnId, id, width });
    };

    handleEndResize = () => {
        this.setState({
            resizing: false,
        });
    };

    handleDragStart = (e) => {
        if (e.dataTransfer.setDragImage) { // not supported in IE11
            const rect = this.innerEl.parentElement.getBoundingClientRect();

            this.cloneEl = this.innerEl.cloneNode(true);
            this.cloneEl.style.width = `${rect.width}px`;
            this.cloneEl.style.height = `${rect.height}px`;
            this.cloneEl.setAttribute('data-helper', 'true');
            document.body.appendChild(this.cloneEl);

            e.dataTransfer.setDragImage(this.cloneEl, e.clientX - rect.left, e.clientY - rect.top);
            this.setState({ isDragging: true });
        }
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', this.innerEl.textContent); // Required for Firefox

        this.props.onRequestDragStart(this.props.index, this.props.columnId);
    };

    handleDragEnd = () => {
        this.cleanupDrag();
        this.setState({ isDragging: false });
        this.props.onRequestDragStart(this.props.index);
    };

    cleanupDrag() {
        if (this.cloneEl) {
            if (this.cloneEl.remove) {
                this.cloneEl.remove();
            } else {
                this.cloneEl.parentNode.removeChild(this.cloneEl); // IE
            }
            this.cloneEl = null;
        }
    }

    render() {
        const {
            align,
            allowFocus,
            children,
            className,
            onSort,
            onRequestDragStart,
            onRequestResize,
            resizable,
            sortDir,
            showGuideline,
            style,
            truncate,
            width,
        } = this.props;

        const draggable = !!onRequestDragStart;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <th
                style={merge(style, { width })}
                className={toClassName(css.main, className)}
                onClick={onSort && this.handleClick}
                data-dragging={this.state.isDragging ? 'true' : undefined}
                tabIndex={allowFocus && (draggable || onSort) && 0}
                {...createTestHook(__filename)}
                {...omit(this.props, Object.keys(HeadCell.propTypes))}
                onKeyDown={(draggable || onSort) && this.handleKeyDown}
            >
                <div
                    className={css.inner}
                    draggable={draggable || undefined}
                    onDragStart={draggable && this.handleDragStart}
                    onDragEnd={draggable && this.handleDragEnd}
                    ref={el => this.innerEl = el}
                    data-text-align={align}
                    data-draggable={draggable || undefined}
                >
                    {onRequestResize && resizable && allowFocus && (
                        <button
                            className={css.resize}
                            onMouseDown={this.handleStartResize}
                            onKeyDown={this.handleResizeKeyDown}
                            data-cell-role="resize"
                        />
                    )}
                    {this.state.resizing && (
                        <EventListener
                            target="window"
                            onMouseUp={this.handleEndResize}
                            onMouseMove={this.handleResize}
                        />
                    )}
                    {draggable && (
                        <div className={css.drag}>
                            <ScreenReaderContent>
                                {_('Press left or right arrow key to reorder the columns.')}
                            </ScreenReaderContent>
                        </div>
                    )}
                    <span
                        className={css.label}
                        data-text-align={align}
                        data-sortable={!!onSort || undefined}
                        data-truncate={truncate || undefined}
                    >
                        {children}

                        {onSort && (
                            <span className={css.sortIcon}>
                                {sortDir === 'none' && <Sort />}
                                {sortDir === 'asc' && <SortedUp />}
                                {sortDir === 'desc' && <SortedDown />}
                            </span>
                        )}
                    </span>
                </div>
                {showGuideline !== 'none' && (
                    <div className={css.guideLine} data-position={showGuideline} />
                )}
            </th>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
}

export default HeadCell;
