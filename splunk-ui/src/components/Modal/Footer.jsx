import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import css from './Footer.css';

const pTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
};


/**
 * A styled container for modal footer content.
 */
function Footer(props) {
    const { children, className, ...otherProps } = props;

    return (
        <Box
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {children}
        </Box>
    );
}

Footer.propTypes = pTypes;
export default Footer;
