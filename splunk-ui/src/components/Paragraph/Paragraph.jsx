import React from 'react';
import PropTypes from 'prop-types';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Paragraph.css';

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
    /** @docs-ignore */
    children: PropTypes.node,
};

const defaultProps = {
};

export default function Paragraph(props) {
    const { children, className, ...otherProps } = props;
    return (
        <p
            className={toClassName(css.main, className)}
            {...otherProps}
        >
            {children}
        </p>
    );
}

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;
