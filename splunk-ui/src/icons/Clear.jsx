import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Clear(props) {
    return (
        <SVG
            screenReaderText={_('Clear')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M918.315 750.645L1500 1332.33 1332.33 1500 750.645 918.315 167.67 1500 0 1332.33l581.685-582.975L0 167.67 167.67 0l582.975 581.685L1332.33 0 1500 167.67" />
        </SVG>
    );
}
