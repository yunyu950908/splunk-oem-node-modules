import React from 'react';
import PropTypes from 'prop-types';
import { extend } from 'lodash';
import toClassName from 'splunk-ui/util/toClassName';
import Item from './Item';
import css from './List.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    type: PropTypes.oneOf(['disc', 'decimal', 'lower-alpha', 'upper-alpha']),
    /** @docs-ignore */
    style: PropTypes.object,
};

const defaultProps = {
    type: 'disc',
};

export default function List(props) {
    const { children, className, style, type, ...otherProps } = props;
    const Comp = type === 'disc' ? 'ul' : 'ol';
    return (
        <Comp
            className={toClassName(css.main, className)}
            style={extend({ listStyleType: type }, style)}
            {...otherProps}
        >
            {children}
        </Comp>
    );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

List.Item = Item;
