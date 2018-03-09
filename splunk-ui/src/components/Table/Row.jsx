import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import ChevronDown from 'splunk-ui/icons/ChevronDown';
import ChevronRight from 'splunk-ui/icons/ChevronRight';
import Cell from './Cell';
import css from './Row.css';

const propTypes = {
    /**
     * `children` should be `Table.Cell`.
     **/
    children: PropTypes.node,
    /** @docs-ignore. */
    className: PropTypes.string,
    /** @docs-ignore. */
    expandable: PropTypes.bool,
    /** @docs-ignore. */
    expanded: PropTypes.bool,
    /**
     * An optional row that will be displayed when this row is expanded.
     */
    expansionRow: PropTypes.node,
    /** @docs-ignore. */
    onExpansion: PropTypes.func,
    /** @docs-ignore. */
    stripe: PropTypes.oneOf(['odd', 'even', 'none']),
};

const defaultProps = {
    stripe: 'none',
    onExpansion() {},
};

function Row(props) {
    const {
        children,
        className,
        expandable,
        expanded,
        expansionRow,
        onExpansion,
        stripe,
        ...otherProps
    } = props;

    return (
        <tr
            className={toClassName(css[stripe], className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {expandable && expansionRow && (
                <Cell
                    className={css.expansionCell}
                    onClick={onExpansion}
                    tabIndex="0"
                    rowSpan={expanded ? 2 : null}
                >
                    <span style={{ float: 'right' }}>
                        {expanded ? <ChevronDown /> : <ChevronRight />}
                    </span>
                </Cell>
            )}
            {expandable && !expansionRow && <Cell className={css.disabledExpansionCell} />}
            {children}
        </tr>
    );
}

Row.splunkUiType = 'Table.Row';
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;
