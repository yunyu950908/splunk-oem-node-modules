import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Text(props) {
    return (
        <SVG
            screenReaderText={_('Text')}
            viewBox="0 0 1500 1498"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1500 0H0v377.823h188.912v-188.91h467.126l-.86 1120.122h-189.06v188.912h566.736v-188.912H844.088l.862-1120.123h466.138v188.91H1500" />
        </SVG>
    );
}
