import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Document(props) {
    return (
        <SVG
            screenReaderText={_('Document')}
            viewBox="0 0 1275 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 1500V0h975l300 300v1200H0zM900 134.59V375h247.603L900 134.59zM148.973 150v1201.027H1125V450H825V150H148.973z" />
        </SVG>
    );
}
