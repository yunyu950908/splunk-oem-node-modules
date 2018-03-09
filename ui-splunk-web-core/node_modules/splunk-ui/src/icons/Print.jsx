import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Print(props) {
    return (
        <SVG
            screenReaderText={_('Print')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1500 525h-375V0H375v525H0v675h300v300h900v-300h300V525zm-450 150v150H900V675h150zm260.96 0v150h-150V675h150zM1050 975v375H450V975h600z" />
        </SVG>
    );
}
