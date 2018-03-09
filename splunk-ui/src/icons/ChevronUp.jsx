import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function ChevronUp(props) {
    return (
        <SVG
            screenReaderText={_('Chevron Up')}
            viewBox="0 0 1500 885"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 750L750 0l750 751.027-134.59 133.562L750 269.177l-615.41 615.41" />
        </SVG>
    );
}
