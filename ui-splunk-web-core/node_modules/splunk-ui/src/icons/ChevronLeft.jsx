import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function ChevronLeft(props) {
    return (
        <SVG
            screenReaderText={_('Chevron Left')}
            viewBox="0 0 885 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M751.027 1500L0 750 750 0l134.59 134.59L269.177 750l615.41 615.41" />
        </SVG>
    );
}
