import { createTestHook } from 'util/test_support';
import React, { PropTypes } from 'react';
import Modal from 'splunk-ui/components/Modal';
import Body from './Body';
import Footer from './Footer';

// Since this component only has the render function,
// it has been written as a React Pure Component
const AppDialog = props =>
    <Modal
        open={props.open}
        onRequestClose={props.onRequestClose}
        style={{ width: '500px' }}
        {...createTestHook(module.id, props.dialogType)}
    >
        <Modal.Header
            title={props.title}
            onRequestClose={props.onRequestClose}
        />
        {props.children}
    </Modal>;

AppDialog.Footer = Footer;
AppDialog.Body = Body;

AppDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
    onRequestClose: PropTypes.func,
    dialogType: PropTypes.string,
};

AppDialog.defaultProps = {
    title: undefined,
    children: undefined,
    onRequestClose: undefined,
    dialogType: undefined,
};

export default AppDialog;
