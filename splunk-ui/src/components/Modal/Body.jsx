import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import css from './Body.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
};


/**
 * A styled container for modal body content.
 */
function Body(props) {
    const { className, children, ...other } = props;
    return (
        <Box
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...other}
        >
            {children}
        </Box>
    );
}

Body.propTypes = propTypes;
export default Body;
