import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Pencil(props) {
    return (
        <SVG
            screenReaderText={_('Pencil')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1403.425 105.822C1478.425 179.795 1500 300 1500 375L450 1425 0 1500l75-450L1125 0c75 0 184.932 9.247 278.425 105.822zM225 1374.658h188.014c-6.165-79.11-32.877-128.425-94.52-193.15-61.645-56.508-111.987-84.248-193.152-94.522L124.315 1275c42.123 23.63 75 58.562 100.685 99.658z" />
        </SVG>
    );
}
