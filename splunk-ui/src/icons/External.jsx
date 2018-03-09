import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function External(props) {
    return (
        <SVG
            screenReaderText={_('External')}
            viewBox="0 0 1500 1499"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1500 1125h-189.04v185.96H189.04V189.04H375V0H0v1500h1500v-375zm0-1125H723.288v190.068h469.52l-666.78 648.288 133.56 134.59 650.344-665.754v469.52l189.04 1.028L1500 0z" />
        </SVG>
    );
}
