import React from 'react';
import PropTypes from 'prop-types';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Item.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
};

/**
 * A container for items of a `List`.
 */
export default function Item(props) {
    const { children, className, ...otherProps } = props;

    return (
        <li
            className={toClassName(css.main, className)}
            {...otherProps}
        >
            {children}
        </li>
    );
}

Item.propTypes = propTypes;
