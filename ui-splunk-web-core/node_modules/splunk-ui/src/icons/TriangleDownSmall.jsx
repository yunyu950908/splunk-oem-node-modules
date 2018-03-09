import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleDownSmall(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Down Small')}
            viewBox="0 0 1063 677"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M458.024 633l-397-458c-35-41-61-72-61-102-1-43 30-73 73-73h918c43 0 71 30 71 73 0 30-13 58-43 94l-415 466c-32 35-47 44-73 44-22 0-37-9-73-44z" />
        </SVG>
    );
}
