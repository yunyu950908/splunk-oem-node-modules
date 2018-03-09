import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ChartBar(props) {
    return (
        <SVG
            screenReaderText={_('Bar Chart')}
            viewBox="0 0 1500 1418"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1500 .082H0v375h1500v-375zm-375 523.973H0v376.027h1125V524.055zm-375 521.918H0v371.917h750v-371.917z" />
        </SVG>
    );
}
