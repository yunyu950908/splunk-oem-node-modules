import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import classnames from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import css from './StaticContent.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /** When true, display as inline-block with auto width. */
    inline: PropTypes.bool,
    /** The small size will align with small Text, Select and other controls. */
    size: PropTypes.oneOf(['small', 'medium']),
};

const defaultProps = {
    inline: false,
    size: 'medium',
};

/** This component is intended for use in a control group,
*   either to display a static value or between two controls.
*/
export default function StaticContent(props) {
    const { children, className, size, ...otherProps } = props;
    return (
        <Box
            className={classnames(css.main, className)}
            data-size={size}
            {...createTestHook(__filename, props)}
            {...otherProps}
        >
            {children}
        </Box>
    );
}

StaticContent.propTypes = propTypes;
StaticContent.defaultProps = defaultProps;
