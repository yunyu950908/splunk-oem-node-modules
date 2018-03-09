import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function ChevronRight(props) {
    return (
        <SVG
            screenReaderText={_('Chevron Right')}
            viewBox="0 0 885 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M134.59 0l750 750-751.028 750L0 1365.41 615.41 750 0 134.59" />
        </SVG>
    );
}
