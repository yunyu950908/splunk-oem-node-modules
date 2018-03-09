import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ChartArea(props) {
    return (
        <SVG
            screenReaderText={_('Area Chart')}
            viewBox="0 0 1500 1230"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1500 1229.795H0v-288.7l170.548-213.698c11.644-15.068 27.055-19.863 46.233-14.383l201.37 57.534c21.234 6.85 38.014.685 50.343-18.493L820.89 216.78c6.85-10.958 16.096-17.98 27.74-21.06 11.644-3.083 23.288-1.542 34.932 4.622l214.726 115.07c17.123 9.588 33.904 7.533 50.342-6.165L1500 0v1229.795z" />
        </SVG>
    );
}
