import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

export default function Pause(props) {
    return (
        <SVG
            screenReaderText={_('Pause')}
            viewBox="0 0 1095 1423"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 .81V1423h365V.81H0zm730 0V1423h365V.81H730z" />
        </SVG>
    );
}
