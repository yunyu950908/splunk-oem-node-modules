import React, { PropTypes } from 'react';
import ControlGroup from 'splunk-ui/components/ControlGroup';
import Message from 'splunk-ui/components/Message';

// This component is mainly used for showing form validation errors/warnings.

const FormMessage = ({
    active,
    type,
    message,
}) => (
    active ? (
        <ControlGroup label="" controlsLayout="none">
            <Message type={type}>{message}</Message>
        </ControlGroup>
    ) : null);

FormMessage.propTypes = {
    active: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default FormMessage;