import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Tiles(props) {
    return (
        <SVG
            screenReaderText={_('Tiles')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 600V1.027L600 0v598.973L0 600zm0 900V901.027L600 900v598.973L0 1500zm900-900V1.027L1500 0v598.973L900 600zm0 900V901.027L1500 900v598.973L900 1500z" />
        </SVG>
    );
}
