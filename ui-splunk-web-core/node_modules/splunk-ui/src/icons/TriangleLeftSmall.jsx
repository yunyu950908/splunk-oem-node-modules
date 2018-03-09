import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleLeftSmall(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Left Small')}
            viewBox="0 0 677 1062"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M44 604l458 397c17.333 14.667 30.5 25.5 39.5 32.5s19.333 13.5 31 19.5c11.667 6 22.167 9 31.5 9 21.333 0 38.833-6.833 52.5-20.5 13.667-13.667 20.5-31.167 20.5-52.5V71c0-21.333-6.833-38.5-20.5-51.5S625.333 0 604 0c-28 0-59.333 14.333-94 43L44 458c-17.333 16-29 28.833-35 38.5-6 9.667-9 21.167-9 34.5 0 11.333 3 21.833 9 31.5 6 9.667 17.667 23.5 35 41.5z" />
        </SVG>
    );
}
