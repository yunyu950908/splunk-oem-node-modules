import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function BoxFilled(props) {
    return (
        <SVG
            screenReaderText={_('Box Filled')}
            {...createTestHook(__filename)}
            {...props}
        >
            <rect x="0" y="0" width="100%" height="100%" />
        </SVG>
    );
}
