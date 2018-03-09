import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Pivot(props) {
    return (
        <SVG
            screenReaderText={_('Pivot')}
            viewBox="0 0 1500 1127"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1311.986 826.027V77.055c0-22.603-7.19-41.096-21.575-55.48C1276.028 7.192 1257.535 0 1234.933 0L525 1.027l225 225h336.986v600H900l300 300 300-300h-188.014zm-900 78.083V297.945L600 301.027l-300-300-300 300h186.986v747.946c0 22.602 7.192 41.095 21.576 55.48 14.383 14.383 32.876 21.574 55.48 21.574L975 1122.945 750 901.027l-338.014 3.083z" />
        </SVG>
    );
}
