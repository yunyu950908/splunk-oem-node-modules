import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { findIndex, keys, map, omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Info from 'splunk-ui/icons/Info';

import Row from './Row';
import HeadCell from './HeadCell';
import css from './Head.css';

class Head extends Component {
    static splunkUiType = 'Table.Head';

    static propTypes = {
        /**
         * `children` should be `Table.HeadCell`.
         */
        children: (props) => { // eslint-disable-line consistent-return
            if (props.onRequestResizeColumn) {
                const hasChildWithoutWidth = Children.toArray(props.children).filter(isValidElement)
                    .some(child => !child.props.width);

                if (hasChildWithoutWidth) {
                    return new Error('Every Table.HeadCell must have a width prop when using onRequestResizeColumn.');
                }
            }
        },
        /** @docs-ignore. */
        dragPosition: PropTypes.number,
        /** @docs-ignore. */
        hasInfoColumn: PropTypes.bool,
        /** @docs-ignore. */
        onRequestMoveColumn: PropTypes.func,
        /** @docs-ignore. */
        onRequestResize: PropTypes.func,
        /** @docs-ignore. */
        onRequestDragStart: PropTypes.func,
        /** @docs-ignore. */
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            draggingIndex: undefined, // the item being reordered
        };
    }

    componentWillUnmount() {
        this.cleanupDrag();
    }

    onRequestMoveColumn = ({ columnId, fromIndex, toIndex }) => {
        if (toIndex < this.props.children.length) { // HeadCell never requests less than zero
            this.props.onRequestMoveColumn({
                fromIndex,
                toIndex,
                columnId,
            });
        }
    };

    getCellWidths() {
        const headRowCells = this.el
            .firstElementChild
            .children;
        return map(headRowCells, (el) => {
            const computedStyle = window.getComputedStyle(el);
            return el.clientWidth -
                parseFloat(computedStyle.getPropertyValue('padding-right')) -
                parseFloat(computedStyle.getPropertyValue('padding-left'));
        });
    }

    getClientHeight() {
        return this.el.clientHeight;
    }

    getEl() {
        return this.el;
    }

    handleMount = (el) => {
        this.el = el;
    };

    cleanupDrag() {
        window.removeEventListener('dragend', this.handleDragEnd);
        this.cells = null;
    }

    calculateGuideIndex() {
        const { dragPosition, hasInfoColumn } = this.props;

        if (this.props.dragPosition === null || !this.el) {
            return -1;
        }

        this.cells = Array.prototype.slice.call(this.el.firstElementChild.children)
            .slice(hasInfoColumn ? 1 : 0);

        const overIndex = findIndex(this.cells, (cell) => {
            const rect = cell.getBoundingClientRect();
            return dragPosition > rect.left && dragPosition < rect.right;
        });

        if (overIndex === -1) {
            // must be too far left or right;
            const rect = this.el.getBoundingClientRect();
            return (dragPosition < rect.left ? 0 : this.cells.length);
        }

        const cellRect = this.cells[overIndex].getBoundingClientRect();
        const onLeftSide = dragPosition < (cellRect.left + (cellRect.width / 2));

        return (onLeftSide ? overIndex : overIndex + 1);
    }

    handleDragStart = (draggingIndex, draggingColumnId) => {
        this.setState({ draggingIndex, draggingColumnId });
        window.addEventListener('dragend', this.handleDragEnd);
        this.props.onRequestDragStart();
    };

    handleDragEnd = () => {
        const { draggingIndex, draggingColumnId } = this.state;
        const guidelineIndex = this.calculateGuideIndex();

        // The new index is not necessarily the same as the guidelineIndex
        const toIndex = draggingIndex < guidelineIndex ? guidelineIndex - 1 : guidelineIndex;

        if (draggingIndex !== toIndex) {
            this.props.onRequestMoveColumn({
                fromIndex: draggingIndex,
                toIndex,
                columnId: draggingColumnId,
            });
        }
        this.cleanupDrag();
    };

    render() {
        const {
            children,
            className,
            hasInfoColumn,
            onRequestMoveColumn,
            onRequestResizeColumn,
            ...otherProps
        } = this.props;
        const guidelineIndex = this.calculateGuideIndex();

        const clonedChildren = Children.toArray(children).map((child, index, original) => {
            let showGuideline = 'none';

            if (guidelineIndex === original.length && index + 1 === original.length) {
                showGuideline = 'after';
            } else if (guidelineIndex === index) {
                showGuideline = 'before';
            }

            return cloneElement(child, {
                index,
                showGuideline,
                onRequestResize: onRequestResizeColumn,
                onRequestDragStart: onRequestMoveColumn && this.handleDragStart,
                onRequestMoveColumn: onRequestMoveColumn && this.onRequestMoveColumn,
            }, child.props.children);
        });

        return (
            <thead
                ref={this.handleMount}
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...omit(otherProps, keys(Head.propTypes))}
            >
                <Row>
                    {hasInfoColumn && (
                        <HeadCell
                            key="more_info_head_cell"
                            align="right"
                            width={35}
                            resizable={false}
                        >
                            <Info />
                        </HeadCell>
                    )}
                    {clonedChildren}
                </Row>
            </thead>
        );
    }
}

export default Head;
