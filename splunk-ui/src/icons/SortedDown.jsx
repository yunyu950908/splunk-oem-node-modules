import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function SortedDown(props) {
    return (
        <SVG
            screenReaderText={_('Sorted Down')}
            viewBox="0 0 933 1499"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 1032.616l466.438 466.44 466.44-467.467-134.59-133.563-331.85 331.85-331.85-331.85" />
        </SVG>
    );
}
