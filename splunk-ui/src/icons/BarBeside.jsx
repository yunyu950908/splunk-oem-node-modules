import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function BarBeside(props) {
    return (
        <SVG
            screenReaderText={_('Bar Beside')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1163.014 300H1500v1200H825V0h338.014v300zm-75 1125V75H900v1350h188.014zM340.068 525H675v975H0V975h340.067V525zm-76.027 900v-375H73.974v375H264.04z" />
        </SVG>
    );
}
