import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import ErrorIcon from 'splunk-ui/icons/Error';
import WarningIcon from 'splunk-ui/icons/Warning';
import SuccessIcon from 'splunk-ui/icons/Success';
import InfoCircleIcon from 'splunk-ui/icons/InfoCircle';
import css from './Message.css';

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
    /** @docs-ignore */
    children: PropTypes.node,
    /** The severity or type of warning */
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

const defaultProps = {
    type: 'warning',
};

export default function Message(props) {
    const { type, children, className, ...otherProps } = props;
    const Icon = {
        info: InfoCircleIcon,
        success: SuccessIcon,
        warning: WarningIcon,
        error: ErrorIcon,
    }[type];

    return (
        <Box
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <span className={css[type]}>
                <Icon size={1.6} />
            </span>
            {children}
        </Box>
    );
}

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;
