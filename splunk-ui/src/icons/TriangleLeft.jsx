import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleLeft(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Left')}
            viewBox="0 0 1480 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1349 1489L58 835c-38.667-20-58-48.333-58-85s19.333-65 58-85L1349 11c14-7.333 29.333-11 46-11 24 0 44.167 8.5 60.5 25.5S1480 65 1480 93v1314c0 28-8.167 50.5-24.5 67.5S1419 1500 1395 1500c-14.667 0-30-3.667-46-11z" />
        </SVG>
    );
}
