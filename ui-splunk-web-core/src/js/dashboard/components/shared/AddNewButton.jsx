import _ from 'underscore';
import React, { PropTypes } from 'react';
import Button from 'splunk-ui/components/Button';
import Plus from 'splunk-ui/icons/Plus';

const AddNewButton = ({
    onClick,
    error,
}) =>
    <Button
        icon={<Plus />}
        appearance="pill"
        label={_('Add New').t()}
        onClick={onClick}
        error={error}
    />;

AddNewButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

AddNewButton.defaultProps = {
    error: false,
};

export default AddNewButton;
