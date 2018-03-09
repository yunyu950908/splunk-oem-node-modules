import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Search(props) {
    return (
        <SVG
            screenReaderText={_('Search')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1476.69 1268.412l-340.795-340.795c56.048-92.285 88.43-200.177 88.43-314.948C1224.324 277.195 947.634.506 612.16.506S0 277.197 0 612.67c0 335.472 276.69 612.16 612.162 612.16 114.77 0 222.663-32.385 314.948-88.43l340.795 340.796c30.406 30.405 75 30.405 105.406 0l103.38-103.378c30.405-30.406 30.405-75 0-105.406zM156.08 612.67c0-248.312 207.77-456.082 456.082-456.082 248.31 0 456.08 207.77 456.08 456.08 0 248.312-207.77 456.082-456.08 456.082-248.31 0-456.08-207.77-456.08-456.08z" />
        </SVG>
    );
}
