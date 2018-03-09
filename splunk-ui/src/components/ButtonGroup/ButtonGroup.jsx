import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { extend } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import css from './ButtonGroup.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /** @docs-ignore */
    inline: PropTypes.bool,
};

const defaultProps = {
    inline: true,
};

/**
 * `ButtonGroup` handles the styling of appending and prepending buttons in a row.
 */
export default function ButtonGroup(props) {
    const { children, className, ...otherProps } = props;

    const childrenCleaned = Children.toArray(children)
        .filter(isValidElement)
        .map((item, i, { length }) => cloneElement(item, {
            prepend: i > 0,
            append: i < length - 1,
            key: item.key || i,
            inline: false,
            style: extend({ width: 'auto' }, item.style),
        }));

    return (
        <Box
            flex
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {childrenCleaned}
        </Box>
    );
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
