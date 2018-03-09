import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'splunk-ui/components/Switch';

const propTypes = {
     /** @docs-ignore. This will be be passed to the Switch component untouched. */
    children: PropTypes.node,
    /**
     * The selectable value. If this matches the ControlRadioList value, the item is selceted.
     */
    value: PropTypes.any.isRequired,
};

function Option(props) {
    const { children, ...switchProps } = props;
    return <Switch appearance="radio" {...switchProps}>{children}</Switch>;
}

Option.propTypes = propTypes;
export default Option;
