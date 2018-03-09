import React, { PropTypes } from 'react';
import Button from 'splunk-ui/components/Button';
import X from 'splunk-ui/icons/X';

const DeleteButton = ({ onClick }) => (
    <Button
        icon={<X />}
        appearance="pill"
        onClick={onClick}
        style={{
            flexGrow: '0',
            paddingLeft: '5px',
            paddingRight: '5px',
        }}
    />
);

DeleteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
