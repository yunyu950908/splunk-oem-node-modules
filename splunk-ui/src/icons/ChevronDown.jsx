import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function ChevronDown(props) {
    return (
        <SVG
            screenReaderText={_('Chevron Down')}
            viewBox="0 0 1500 885"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1500 134.59l-750 750L0 133.56 134.59 0 750 615.41 1365.41 0" />
        </SVG>
    );
}
