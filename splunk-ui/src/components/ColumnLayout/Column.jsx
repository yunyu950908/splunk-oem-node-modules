import React from 'react';
import PropTypes from 'prop-types';
import { defaults } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Column.css';

const propTypes = {
    /** @docs-ignore. */
    children: PropTypes.node,
    /** An additional className. */
    className: PropTypes.string,
    /** @docs-ignore. This prop must only inherit from parent component */
    gutter: PropTypes.number,
    /** The number of columns the element should span. */
    span: PropTypes.number,
    /** @docs-ignore. This prop should be calculated and set by parent component */
    isFirstChild: PropTypes.bool,
    /** @docs-ignore. This prop should be calculated and set by parent component */
    isLastChild: PropTypes.bool,
    /** @docs-ignore. */
    style: PropTypes.object,
};

const defaultProps = {
    span: 1,
};

export default function Column(props) {
    const {
        children,
        className,
        gutter,
        span,
        isFirstChild,
        isLastChild,
        style,

        ...otherProps
    } = props;

    const width = gutter ?
        `calc((100% - ${11 * gutter}px) * ${span / 12} + (${gutter}px * ${span - 1}))` :
        `${(100 / 12) * span}%`;

    const calcStyle = {
        marginLeft: isFirstChild ? undefined : gutter / 2,
        marginRight: isLastChild ? undefined : gutter / 2,
        flex: `${span} ${span} auto`, // may accomodate small rounding errors and dividers
        width,
    };

    return (
        <div
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
            style={defaults({}, style, calcStyle)}
        >
            {children}
        </div>
    );
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;
