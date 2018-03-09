import _ from 'underscore';
import { createTestHook } from 'util/test_support';
import React, { PropTypes } from 'react';
import Modal from 'splunk-ui/components/Modal';
import Message from 'splunk-ui/components/Message';

const STRINGS = {
    GENERIC_ERROR: _('Unknown failure: Contact your administrator for details or try again later.').t(),
};

// Since this component only has the render function,
// it has been written as a React Pure Component
const Body = props =>
    <Modal.Body {...createTestHook(module.id)}>
        { props.status &&
            <Message
                type={props.status}
            >
                {props.responseMessage || STRINGS.GENERIC_ERROR}
            </Message>
        }
        {props.children}
    </Modal.Body>;

Body.propTypes = {
    status: PropTypes.string,
    responseMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    children: PropTypes.node,
};

Body.defaultProps = {
    status: undefined,
    responseMessage: '',
    children: undefined,
};

export default Body;
