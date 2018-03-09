import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Plus(props) {
    return (
        <SVG
            screenReaderText={_('Plus')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M843.943 655.03L1500 656.058V844.97H843.943V1500H655.03V844.97L0 843.942V655.03h655.03V0h188.913" />
        </SVG>
    );
}
