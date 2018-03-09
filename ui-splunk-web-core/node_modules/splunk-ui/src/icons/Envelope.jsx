import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Envelope(props) {
    return (
        <SVG
            screenReaderText={_('Envelope')}
            viewBox="0 0 1500 973"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 150V0h1500v150L771.575 440.753c-15.068 6.165-30.137 6.165-45.205 0L0 150zm0 72.432l727.397 290.753c15.07 6.164 30.137 6.164 45.206 0L1500 222.432v750H0v-750z" />
        </SVG>
    );
}
