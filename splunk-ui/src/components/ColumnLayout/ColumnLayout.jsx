import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';

import Row from './Row';
import Column from './Column';
import css from './ColumnLayout.css';

/**
 * `ColumnLayout` provides simple API for laying out content into columns. It is based on flexbox
 * and has 12 columns.
 */
export default class ColumnLayout extends Component {
    static propTypes = {
        /** `children` must be `ColumnLayout.Row` elements */
        children: PropTypes.node,
        /** @docs-ignore. */
        className: PropTypes.string,
        /** Show dividers between columns */
        divider: PropTypes.oneOf(['none', 'vertical', 'horizontal']),
        /** Set gutter width in pixels. */
        gutter: PropTypes.number,
    };

    static defaultProps = {
        divider: 'none',
        gutter: 30,
    };

    static Row = Row;
    static Column = Column;

    cloneRow = (row, idx) => {
        const { gutter, divider, children } = this.props;
        const isFirstChild = (idx === 0);
        const isLastChild = (idx === Children.count(children) - 1);
        return cloneElement(row, { gutter, divider: divider === 'vertical', isFirstChild, isLastChild });
    }

    insertDividers = (acc, row, idx, original) => {
        acc.push(row);
        if (this.props.divider === 'horizontal' && (idx < original.length - 1)) {
            acc.push(<div className={css.divider} key={`${idx}-divider`} />);
        }
        return acc;
    };

    render() {
        const {
            children,
            className,
        } = this.props;

        const childrenCloned = Children.toArray(children)
            .filter(isValidElement)
            .map(this.cloneRow)
            .reduce(this.insertDividers, []);

        return (
            <div
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...omit(this.props, Object.keys(ColumnLayout.propTypes))}
            >
                {childrenCloned}
            </div>
        );
    }
}
