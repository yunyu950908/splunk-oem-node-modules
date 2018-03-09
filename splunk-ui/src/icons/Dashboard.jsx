import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Dashboard(props) {
    return (
        <SVG
            screenReaderText={_('Dashboard')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M450 375h75v975h-75V375zM0 0h1500v1500H0V0zm1350 300V150H150v150h1200zm0 1050V375H150v975h1200z" />
        </SVG>
    );
}
