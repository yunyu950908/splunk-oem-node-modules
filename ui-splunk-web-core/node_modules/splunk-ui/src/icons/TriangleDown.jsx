import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleDown(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Down')}
            viewBox="0 0 1460 1480"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M645 1422L11 131C3.667 115 0 99.667 0 85c0-24 8.5-44.167 25.5-60.5S65 0 93 0h1274c28 0 50.5 8.167 67.5 24.5S1460 61 1460 85c0 14.667-3.667 30-11 46L815 1422c-18.667 38.667-47 58-85 58s-66.333-19.333-85-58z" />
        </SVG>
    );
}
