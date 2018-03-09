import _ from 'underscore';
import React, { PropTypes } from 'react';
import Button from 'splunk-ui/components/Button';
import Plus from 'splunk-ui/icons/Plus';
import { createTestHook } from 'util/test_support';

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
        {...createTestHook(module.id)}
    />;

AddNewButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

AddNewButton.defaultProps = {
    error: false,
};

export default AddNewButton;
