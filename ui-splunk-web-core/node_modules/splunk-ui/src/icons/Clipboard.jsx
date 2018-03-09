import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Clipboard(props) {
    return (
        <SVG
            screenReaderText={_('Clipboard')}
            viewBox="0 0 1275 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M491.096 0h289.726c28.082 0 47.945 12.33 59.59 36.986l56.506 111.987h302.055c21.917 0 40.068 7.19 54.452 21.575C1267.808 184.932 1275 203.082 1275 225v1198.973c0 21.917-7.192 40.068-21.575 54.452-14.384 14.383-32.535 21.575-54.452 21.575H76.027c-21.917 0-40.068-7.192-54.452-21.575C7.192 1464.04 0 1445.89 0 1423.973V225c0-21.918 7.192-40.068 21.575-54.452 14.384-14.384 32.535-21.575 54.452-21.575H375l56.507-111.987C443.15 12.33 463.014 0 491.097 0zM1050 300H225v225h825V300z" />
        </SVG>
    );
}
