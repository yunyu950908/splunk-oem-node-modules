import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Check(props) {
    return (
        <SVG
            screenReaderText={_('Check')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M536.3 1278.364L1500 121.514 1354.11.283 513.7 1010.212l-391.44-319.52L0 837.61" />
        </SVG>
    );
}
