import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ReportPivot(props) {
    return (
        <SVG
            screenReaderText={_('Report Pivot')}
            viewBox="0 0 1275 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M633.904 1035.616l98.63 98.63h-394.52V741.782h-145.89l199.314-199.314L585.616 741.78H436.644v293.836h197.26zm-98.63-493.15h395.548v394.52h151.027l-198.288 197.26-203.425-197.26h152.055V644.178H633.904l-98.63-101.712zM0 1500V0h975l300 300v1200H0zM900 134.59V375h247.603L900 134.59zM148.973 150v1201.027H1125V450H825V150H148.973z" />
        </SVG>
    );
}
