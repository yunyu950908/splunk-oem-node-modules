import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Lightbulb(props) {
    return (
        <SVG
            screenReaderText={_('Lightbulb')}
            viewBox="0 0 929 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M94.257 728.716L208.784 845.27c96.284 107.433 75 284.798 75 284.798h362.838s8.108-215.88 72.973-272.636l50.675-44.594c91.216-81.08 158.108-209.797 158.108-348.65C928.378 207.77 720.608 0 464.188 0 207.77 0 0 207.77 0 464.19c0 98.31 41.554 189.526 94.257 264.526zM648.65 1278.04H280.742V1425c0 43.58 31.42 75 75 75H573.65c43.58 0 75-31.42 75-75v-146.96z" />
        </SVG>
    );
}
