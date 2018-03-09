import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleUp(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Up')}
            viewBox="0 0 1460 1480"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M11 1349c-7.333 16-11 31.333-11 46 0 24 8.5 44.167 25.5 60.5S65 1480 93 1480h1274c28 0 50.5-8.167 67.5-24.5s25.5-36.5 25.5-60.5c0-14.667-3.667-30-11-46L815 58c-18.667-38.667-47-58-85-58s-66.333 19.333-85 58L11 1349z" />
        </SVG>
    );
}
