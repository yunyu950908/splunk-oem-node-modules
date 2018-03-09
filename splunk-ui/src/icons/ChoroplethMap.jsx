import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function ChoroplethMap(props) {
    return (
        <SVG
            screenReaderText={_('Choropleth Map')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1226.712 817.808V1500H0V0h821l-.81 408.904" />
            <path opacity="0.5" d="M1499.643 1500V2.994L821.19 0v1500" />
        </SVG>
    );
}
