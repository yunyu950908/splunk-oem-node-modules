import React from 'react';
import Multiselect from 'splunk-ui/components/Multiselect';

export default () => (
    <Multiselect id="multiselect" allowNewValues>
        <Multiselect.Option data-id="multiselect_option_two" label="Two" value="2" />
        <Multiselect.Option label="Three" value="3" disabled />
        <Multiselect.Option label="One" value="1" />
    </Multiselect>
);
