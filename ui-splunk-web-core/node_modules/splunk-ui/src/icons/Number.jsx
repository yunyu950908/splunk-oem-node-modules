import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Number(props) {
    return (
        <SVG
            screenReaderText={_('Number')}
            viewBox="0 0 1202 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M262.706 1500l75.206-351.305h338.942L605.77 1500h193.68l72.116-351.305h324.52v-141.14H897.32l98.903-483.173h205.013v-139.08h-178.228L1101.305 0h-192.65l-76.237 385.302H489.354L567.65 0H373.97l-76.236 385.302H0v139.08h269.918l-97.87 483.173H0v141.14h144.23L73.147 1500h189.56zM462.57 524.382H804.6l-96.84 483.173H365.727l96.84-483.173z" />
        </SVG>
    );
}
