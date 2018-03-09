import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ChartLine(props) {
    return (
        <SVG
            screenReaderText={_('Line Chart')}
            viewBox="0 0 1500 1194"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M629.795 731L477.74 308c-25.685-71-116.096-70-141.78 0L205.48 673c-2.055 4-6.17 7-11.302 7H0v184h305.137c19.52 0 35.96-11 42.123-29l41.096-117c7.192-18 29.795-18 36.986 0l152.055 422c25.685 71 116.096 71 141.78 0l242.467-677c7.192-18 29.794-18 36.986 0l133.562 372c6.164 18 22.603 29 42.123 29H1500V680h-214.726c-5.137 0-9.247-3-11.3-7L1051.026 54c-25.685-71-116.095-71-141.78 0L666.78 731c-7.19 18-29.794 18-36.985 0z" />
        </SVG>
    );
}
