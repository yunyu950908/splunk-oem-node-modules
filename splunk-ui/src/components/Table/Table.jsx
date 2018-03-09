import React, { cloneElement, Children, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { debounce, has, indexOf, isNumber, pick, noop, omit, throttle } from 'lodash';
import dom from 'splunk-ui/util/dom';
import { invariant } from 'splunk-ui/util/errorHandling';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';

// Exposed as static members of the Table class
import Body from './Body';
import Cell from './Cell';
import Footer from './Footer';
import Head from './Head';
import HeadCell from './HeadCell';
import Row from './Row';

// Internal Helper Modules
import HeadTable from './HeadTable';
import css from './Table.css';

class Table extends Component {
    static propTypes = {
        /**
         * `children` should be `Table.Head`, `Table.Body`, or `Table.Footer`.
         */
        children: PropTypes.node,
        /** @docs-ignore. */
        className: PropTypes.string,
        /**
         * Sets the offset from the top of the window. Only applies when headType
         * is 'docked'
         */
        dockOffset: PropTypes.number,
        /**
         * Sets the table head type:
         *     * docked - The head will dock against the window
         *     * fixed - The head will be fixed in the table. The table can scroll
         *          independently from the head.
         *     * inline - The head is not fixed, but will scroll with the rest of
         *          rest of the table.
         */
        headType: PropTypes.oneOf(['docked', 'fixed', 'inline']),
        /**
         * Style specification for the inner container (which is the scrolling container).
         */
        innerStyle: PropTypes.object,
        /**
         * Callback invoked when a scoll event occurs on the inner (scrolling) container.
         */
        onScroll: PropTypes.func,
        /**
         * Style specification for the outer container.
         */
        outerStyle: PropTypes.object,
        /**
         * Adds a column to the table with an expansion button for each row that has expansion
         * content. Supported values:
         *
         * * `single` - Only one row can be expanded at a time. If another expansion button is
         * clicked, the currently expanded row will close and the new one will open.
         * * `multi` - Allows mulitple rows to be expanded at the same time.
         * * `none` - No row expansion (default).
         */
        rowExpansion: PropTypes.oneOf(['single', 'multi', 'none']),
        /**
         * Alternate rows are given a darker background to improve readability.
         */
        stripeRows: PropTypes.bool,
        /* @docs-ignore */
        style: (props) => { // eslint-disable-line consistent-return
            if (has(props, 'style')) {
                return new Error('Table does not support the "style" prop. Use "innerStyle", "outerStyle", or "tableStyle" instead.'); // eslint-disable-line max-len
            }
        },
        /**
         * The style attribute for the table. This is primarily useful for setting the table-layout
         * property.
         */
        tableStyle: PropTypes.object,
        /**
         * event handler for handle the re order action of Table. The function is passed an
         * options object with `fromIndex` and `toIndex`.
         */
        onRequestMoveColumn: PropTypes.func,
        /**
         * event handler for resize of columns.
         */
        onRequestResizeColumn: PropTypes.func,
    };

    static defaultProps = {
        dockOffset: 0,
        headType: 'inline',
        innerStyle: {},
        onScroll: noop,
        outerStyle: {},
        rowExpansion: 'none',
    };

    static Head = Head;
    static Body = Body;
    static Footer = Footer;
    static Row = Row;
    static Cell = Cell;
    static HeadCell = HeadCell;


    /**
     * @private
     * @docs-ignore
     * Returns and object describing the focus state of the provided `head`.
     * @param head - A reference to a mounted `Head` component.
     * @returns {Object} focusState - An object containing a target (either 'headCell' or
     * 'resizeButton') and an index.
     */
    static getHeadFocusState(head) { // eslint-disable-line consistent-return
        const headCells = head.getEl().children[0].children;
        const activeHeadCellIndex = indexOf(headCells, document.activeElement);
        if (activeHeadCellIndex > -1) {
            return {
                target: 'headCell',
                index: activeHeadCellIndex,
            };
        }
        const resizeButtons = head.getEl().querySelectorAll('[data-cell-role=resize]');
        const activeResizeButtonIndex = indexOf(resizeButtons, document.activeElement);
        if (activeResizeButtonIndex > -1) {
            return {
                target: 'resizeButton',
                index: activeResizeButtonIndex,
            };
        }
    }

    /**
     * @private
     * @docs-ignore
     * Applies the provided `headFocusState` to the provided `head`.
     * @param head - A reference to a mounted `Head` component.
     * @param {Object} headFocusState
     * @param {String} headFocusState.target - Focus can be applied to a 'headCell' or a
     * 'resizeButton'.
     * @param {Number} headFocusState.index - The index of the element to set focus on.
     */
    static applyHeadFocusState(head, { target, index }) {
        if (__DEV__) {
            if (!['headCell', 'resizeButton'].includes(target)) {
                invariant(`Invalid target ${target} provided to Table.applyHeadFocusState.`);
            }
            if (!isNumber(index) || index < 0) {
                invariant(`Invalid index ${index} provided to Table.applyHeadFocusState.`);
            }
        }
        let targetEl;
        if (target === 'headCell') {
            targetEl = head.getEl().children[0].children[index];
        } else if (target === 'resizeButton') {
            targetEl = head.getEl().querySelectorAll('[data-cell-role=resize]')[index];
        }

        if (__DEV__ && !targetEl) {
            invariant('Target dom element not found in applyHeadFocusState.');
        }
        if (targetEl) {
            targetEl.focus();
        }
    }

    constructor(...args) {
        super(...args);
        this.handleScroll = throttle(this.updateDockedHeadState, 0);
        this.handleResize = throttle(this.updateDockedHeadState, 50);
        this.updateDragPositon = throttle(this.updateDragPositon, 100, { trailing: false });
        this.componentDidMount = debounce(this.updateDockedHeadState);
        this.componentWillReceiveProps = debounce(this.updateDockedHeadState);
        this.state = {
            dragPosition: null,
        };
    }

    componentWillUnmount() {
        this.handleScroll.cancel();
        this.handleResize.cancel();
        this.componentDidMount.cancel();
        this.componentWillReceiveProps.cancel();
        this.cleanupDrag();
    }

    createHead(base) {
        const { onRequestMoveColumn, onRequestResizeColumn, rowExpansion } = this.props;
        const headCells = Children.toArray(base.props.children).filter(isValidElement);

        return cloneElement(base, {
            ref: this.handleHeadMount,
            onRequestMoveColumn,
            onRequestResizeColumn,
            onRequestDragStart: onRequestMoveColumn && this.handleDragStart,
            dragPosition: this.state.dragPosition,
            hasInfoColumn: rowExpansion !== 'none',
        }, headCells);
    }

    createBody(base) {
        const bodyProps = pick(this.props, 'stripeRows', 'rowExpansion');
        return cloneElement(base, bodyProps);
    }

    isInline() {
        return this.props.headType === 'inline';
    }

    isDocked() {
        return this.props.headType === 'docked';
    }

    isFixed() {
        return this.props.headType === 'fixed';
    }

    showDocked() {
        if (!this.isDocked() || !this.table || !this.head) {
            return false;
        }
        const { dockOffset } = this.props;
        const tableTop = dom.offset(this.table).top;
        return window.pageYOffset >= tableTop - dockOffset;
    }

    showFixed() {
        return this.head && this.isFixed();
    }

    updateDockedHeadState = () => {
        if (this.isInline()) {
            return;
        }
        const { tableContainer, head, table } = this;

        const cellWidths = head.getCellWidths();
        const headHeight = head.getClientHeight();
        const tableTopWrtWindow = (dom.offset(table).top - window.pageYOffset - headHeight)
            + table.clientHeight;
        const top = (tableTopWrtWindow < 0 ? tableTopWrtWindow : 0) + this.props.dockOffset;
        this.setState({
            width: tableContainer.clientWidth,
            tableWidth: table.clientWidth,
            cellWidths,
            top,
        });
    }

    handleContainerScroll = (...args) => {
        this.props.onScroll(...args);
        if (this.isFixed() || this.isDocked()) {
            this.setState({
                horizontalOffset: -this.tableContainer.scrollLeft,
            });
        }
    }

    handleDragStart = () => {
        window.addEventListener('dragenter', this.handleDragEnter);
        window.addEventListener('dragover', this.handleDragOver);
        window.addEventListener('drop', this.handleDrop);
        window.addEventListener('dragend', this.handleDragEnd);
    };

    handleDragOver = (e) => {
        e.preventDefault(); // necessary for the drop event to fire
        e.dataTransfer.dropEffect = 'move';
        this.updateDragPositon(e.clientX);
    };

    handleDragEnter = (e) => {
        e.preventDefault(); // necessary for the drop event to fire
        this.setState({ dragPosition: e.clientX });
    };

    handleDragEnd = () => {
        this.setState({ dragPosition: null });
        this.cleanupDrag();
    };

    handleDrop = (e) => {
        e.preventDefault(); // necessary to prevent cell from animating to original position;
    };

    handleHeadMount = (comp) => {
        this.head = comp;
    };

    handleHeadTableMount = (headTable) => {
        if (headTable) {
            // On mount, focus the applicable docked head cell if a primary head cell was focused.
            if (this.headFocusState) {
                Table.applyHeadFocusState(headTable.getHead(), this.headFocusState);
                this.headFocusState = null;
            }
        } else {
            // On unmount, focus the applicable primary head cell if a docked head cell was focused.
            const focusState = Table.getHeadFocusState(this.headTable.getHead());
            if (focusState) {
                Table.applyHeadFocusState(this.head, focusState);
            }
        }
        this.headTable = headTable;
    }

    updateDragPositon(dragPosition) {
        this.setState({ dragPosition });
    }

    cleanupDrag() {
        window.removeEventListener('dragenter', this.handleDragEnter);
        window.removeEventListener('dragover', this.handleDragOver);
        window.removeEventListener('drop', this.handleDrop);
        window.removeEventListener('dragend', this.handleDragEnd);
        this.updateDragPositon.cancel(); // cancel throttle
    }

    renderHeadTable(tHead, isFixedColumn) {
        const showDocked = this.showDocked();
        if (this.showFixed() || showDocked) {
            if (showDocked) {
                // Save the current head focus state so that it can be applied to the docked version
                // after the `HeadTable` mounts.
                this.headFocusState = Table.getHeadFocusState(this.head);
            }
            return (
                <HeadTable
                    headType={this.props.headType}
                    tHead={tHead}
                    {...this.state}
                    tableStyle={this.props.tableStyle}
                    isFixedColumn={isFixedColumn}
                    ref={this.handleHeadTableMount}
                />
            );
        }
        return false;
    }

    render() {
        const {
            children,
            className,
            innerStyle,
            outerStyle,
            onRequestResizeColumn,
            tableStyle,
        } = this.props;

        let tHead;
        let tBody;
        let tFooter;
        let isFixedColumn = !!onRequestResizeColumn;

        Children.forEach(children, (child) => {
            const { splunkUiType } = child.type;
            if (splunkUiType === 'Table.Head') {
                tHead = this.createHead(child);

                if (!isFixedColumn) {
                    // if all the HeadCells are fixed width, then the table is fixed.
                    isFixedColumn = !Children.toArray(child.props.children)
                        .filter(isValidElement)
                        .some(th => !has(th.props, 'width'));
                }
            } else if (splunkUiType === 'Table.Body') {
                tBody = this.createBody(child);
            } else if (splunkUiType === 'Table.Footer') {
                tFooter = child;
            }
        });

        const headTable = this.renderHeadTable(tHead, isFixedColumn);
        if (headTable) {
            // When a `headTable` is used, suppress focus interactions in the primary `Head`. Focus
            // interactions will be handled by the overlaid `headTable` instead.
            const headCells = Children.map(tHead.props.children, cell => cloneElement(cell, {
                allowFocus: false,
            }));
            tHead = cloneElement(tHead, {}, headCells);
        }
        return (
            <div
                className={toClassName(css.main, className)}
                style={outerStyle}
                {...createTestHook(__filename)}
                {...omit(this.props, Object.keys(Table.propTypes))}
            >
                <EventListener
                    target="window"
                    onScroll={this.handleScroll}
                    onResize={this.handleResize}
                />
                {headTable}
                <div
                    onScroll={this.handleContainerScroll}
                    ref={el => this.tableContainer = el}
                    className={css.tableContainer}
                    style={innerStyle}
                >
                    <table
                        ref={el => this.table = el}
                        className={css.table}
                        style={tableStyle}
                        data-fixed-column={isFixedColumn ? 'true' : undefined}
                    >
                        {tHead}
                        {tFooter}
                        {tBody}
                    </table>
                </div>
            </div>
        );
    }
}
export default Table;
