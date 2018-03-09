import React, { PropTypes } from 'react';
import Button from 'splunk-ui/components/Button';
import Close from 'splunk-ui/icons/Close';
import { createTestHook } from 'util/test_support';

const DeleteButton = ({ onClick }) => (
    <Button
        size="small"
        icon={<Close />}
        appearance="pill"
        onClick={onClick}
        style={{
            flexGrow: '0',
            marginLeft: '5px',
        }}
        {...createTestHook(module.id)}
    />
);

DeleteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
