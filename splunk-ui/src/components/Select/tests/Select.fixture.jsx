import React from 'react';
import Select from 'splunk-ui/components/Select';

export default () => (
    <Select filter>
        <Select.Option
            label="Up"
            value="1"
        />
        <Select.Option
            label="Right"
            value="2"
        />
    </Select>
);
