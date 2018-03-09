import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Data(props) {
    return (
        <SVG
            screenReaderText={_('Data')}
            viewBox="0 0 1445 1495"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1436.404 230.31C1436.404 109.096 1112.916 0 722.16 0 332.39 0 8.902 109.095 8.902 230.31c0 121.217 323.488 228.29 713.256 228.29 389.767 0 714.244-107.073 714.244-228.29zM578.717 598C251.272 577.797 0 489.916 0 382.84l1.98 879.83c0 120.205 321.508 232.33 720.18 232.33 398.67 0 722.158-112.125 722.158-232.33V384.86c-3.957 108.086-246.325 195.968-577.727 214.15L578.718 598z" />
        </SVG>
    );
}
