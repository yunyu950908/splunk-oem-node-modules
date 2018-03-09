import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function FullscreenExit(props) {
    return (
        <SVG
            screenReaderText={_('Fullscreen Exit')}
            viewBox="0 0 1500 1499"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M853.625.026h185.705l-1.026 459.644h460.67L1500 645.375 852.6 646.4 853.624.027zM646.375 1499H460.67v-459.644L0 1040.382V854.677l646.375-2.052V1499z" />
        </SVG>
    );
}
