import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { defaults, omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Row.css';

export default class Row extends Component {
    static propTypes = {
        /** Set vertical alignment of columns in a row */
        alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
        /** `children` must be `ColumnLayout.Column` elements */
        children: (props) => { // eslint-disable-line consistent-return
            if (props.children) {
                const total = Children.toArray(props.children).filter(isValidElement)
                    .reduce((sum, child) => sum + child.props.span, 0);

                if (total > 0 && total < 12) {
                    return new Error(`Column spans must add up to 12. Current total is ${total}`);
                }
            }
        },
        /** @docs-ignore. */
        className: PropTypes.string,
        /** @docs-ignore. This prop must only inherit from parent component */
        divider: PropTypes.bool,
        /** @docs-ignore. This prop must only inherit from parent component */
        gutter: PropTypes.number,
        /** @docs-ignore. This prop should be calculated and set by parent component */
        isFirstChild: PropTypes.bool,
        /** @docs-ignore. This prop should be calculated and set by parent component */
        isLastChild: PropTypes.bool,
        /** @docs-ignore. */
        style: PropTypes.object,
    };

    static defaultProps = {
        alignItems: 'stretch',
    };

    cloneColumn = (column, idx) => {
        const { gutter, children } = this.props;
        const isFirstChild = (idx === 0);
        const isLastChild = (idx === Children.count(children) - 1);
        return cloneElement(column, { gutter, isFirstChild, isLastChild });
    };

    insertDividers = (acc, row, idx, original) => {
        acc.push(row);
        if (this.props.divider && (idx < original.length - 1)) {
            acc.push(<div className={css.divider} key={`${idx}-divider`} />);
        }
        return acc;
    };

    render() {
        const {
            alignItems,
            children,
            className,
            gutter,
            isFirstChild,
            isLastChild,
            style,
            ...otherProps
        } = this.props;

        const gutterStyle = {
            marginTop: isFirstChild ? undefined : gutter / 2,
            marginBottom: isLastChild ? undefined : gutter / 2,
        };

        const childrenCloned = Children.toArray(children)
            .filter(isValidElement)
            .map(this.cloneColumn)
            .reduce(this.insertDividers, []);

        return (
            <div
                className={toClassName(css.main, className)}
                style={defaults({}, style, gutterStyle)}
                data-align-items={alignItems}
                {...createTestHook(__filename)}
                {...omit(otherProps, 'divider')}
            >
                {childrenCloned}
            </div>
        );
    }
}
