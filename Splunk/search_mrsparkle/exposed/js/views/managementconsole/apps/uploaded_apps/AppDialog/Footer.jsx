import { createTestHook } from 'util/test_support';
import React, { PropTypes } from 'react';
import Modal from 'splunk-ui/components/Modal';

// Since this component only has the render function,
// it has been written as a React Pure Component
const Footer = props =>
    <Modal.Footer {...createTestHook(module.id)}>
        {props.children}
    </Modal.Footer>;

Footer.propTypes = {
    children: PropTypes.node,
};

Footer.defaultProps = {
    children: undefined,
};

export default Footer;
