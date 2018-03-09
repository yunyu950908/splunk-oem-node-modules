import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ChartColumn(props) {
    return (
        <SVG
            screenReaderText={_('Column Chart')}
            viewBox="0 0 1418 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1042.808 1500h375V0h-375v1500zm-525 0h376.028V375H517.808v1125zM0 1500h371.918V752.055H0V1500z" />
        </SVG>
    );
}
