import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { extend } from 'lodash';
import css from './Table.css';

/**
 * @private
 * HeadTable is an internal component that provides a detached table head that can
 * then be positioned in different ways outside of the main table.
 */
class HeadTable extends Component {
    static propTypes = {
        tHead: PropTypes.element.isRequired,
        width: PropTypes.number.isRequired,
        tableWidth: PropTypes.number.isRequired,
        cellWidths: PropTypes.arrayOf(PropTypes.number).isRequired,
        top: PropTypes.number.isRequired,
        horizontalOffset: PropTypes.number,
        headType: PropTypes.oneOf(['docked', 'fixed']).isRequired,
        tableStyle: PropTypes.object,
        isFixedColumn: PropTypes.bool,
    };

    static defaultProps = {
        horizontalOffset: 0,
    };

    getHead() {
        return this.head;
    }

    handleHeadMount = (head) => {
        this.head = head;
    };

    render() {
        const {
            tHead,
            isFixedColumn,
            width,
            tableWidth,
            cellWidths,
            top,
            horizontalOffset,
            headType,
            tableStyle,
        } = this.props;

        const isDocked = headType === 'docked';

        // Set the widths of the head cells if not fixed column
        const cells = isFixedColumn ? tHead.props.children : Children.toArray(tHead.props.children)
            .filter(isValidElement)
            .map((cell, i) => cloneElement(cell, {
                style: extend({}, cell.props.style, {
                    width: cellWidths[i],
                }),
            }));
        const clonedTHead = cloneElement(tHead, {
            ref: this.handleHeadMount,
        }, cells);

        return (
            <div
                className={isDocked ? css.dockedHeadContainer : css.fixedHeadContainer}
                style={{ top, width }}
                {...createTestHook(__filename)}
            >
                <table
                    className={isDocked ? css.dockedHeadTable : css.fixedHeadTable}
                    style={extend({}, tableStyle, {
                        marginLeft: horizontalOffset,
                        width: isFixedColumn ? undefined : tableWidth,
                    })}
                    data-fixed-column={isFixedColumn ? 'true' : undefined}
                >
                    {clonedTHead}
                </table>
            </div>
        );
    }
}

export default HeadTable;
