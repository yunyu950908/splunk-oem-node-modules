import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import LocationMarker from 'splunk-ui/icons/LocationMarker';

export default function Map(props) {
    return (
        <LocationMarker
            screenReaderText={_('Map')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
