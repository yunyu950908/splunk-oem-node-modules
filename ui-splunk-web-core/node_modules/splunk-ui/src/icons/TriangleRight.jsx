import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleRight(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Right')}
            viewBox="0 0 1480 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1422 835L131 1489c-16 7.333-31.333 11-46 11-24 0-44.167-8.5-60.5-25.5S0 1435 0 1407V93c0-28 8.167-50.5 24.5-67.5S61 0 85 0c16.667 0 32 3.667 46 11l1291 654c38.667 20 58 48.333 58 85s-19.333 65-58 85z" />
        </SVG>
    );
}
