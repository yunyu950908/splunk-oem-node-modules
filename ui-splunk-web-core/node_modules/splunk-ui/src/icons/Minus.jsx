import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function Minus(props) {
    return (
        <SVG
            screenReaderText={_('Minus')}
            viewBox="0 0 1500 190"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 0l1500 1.027v188.91L0 188.913" />
        </SVG>
    );
}
