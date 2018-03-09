import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Lock(props) {
    return (
        <SVG
            screenReaderText={_('Lock')}
            viewBox="0 0 1332 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1130.068 686.15h126.69c21.62 0 39.526 7.093 53.715 21.282 14.19 14.19 21.284 32.095 21.284 53.717V1425c0 21.622-7.095 39.527-21.284 53.716-14.19 14.19-32.095 21.284-53.716 21.284H75c-21.622 0-39.527-7.095-53.716-21.284C7.094 1464.526 0 1446.622 0 1425V761.15c0-21.623 7.095-39.528 21.284-53.718C35.474 693.242 53.378 686.15 75 686.15h126.69V464.19c0-83.11 20.945-160.305 62.837-231.59C306.42 161.32 363.007 104.73 434.29 62.84 505.575 20.946 582.77 0 665.88 0s160.304 20.946 231.588 62.838c71.284 41.892 127.872 98.48 169.764 169.763 41.892 71.285 62.838 148.48 62.838 231.59v221.96zm-222.973 0l1.013-221.96c.676-65.54-23.142-122.298-71.453-170.27-48.31-47.974-105.236-71.96-170.777-71.96-65.54 0-122.297 23.986-170.27 71.96-47.973 47.972-71.96 104.73-71.96 170.27v221.96h483.447z" />
        </SVG>
    );
}
