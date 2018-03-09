import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Fullscreen(props) {
    return (
        <SVG
            screenReaderText={_('Fullscreen')}
            viewBox="0 0 1111 1103"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M185.705 457.592H0v645.35l645.35-1.027V916.21l-460.67 1.027 1.025-459.645zM923.393 645.35h185.704L1110.123 0 463.748 1.026l1.026 185.705 458.62-1.025V645.35z" />
        </SVG>
    );
}
