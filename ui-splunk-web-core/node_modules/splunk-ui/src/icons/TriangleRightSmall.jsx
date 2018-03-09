import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleRightSmall(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Right Small')}
            viewBox="0 0 677 1062"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M175 1001l458-397c17.333-18 29-31.833 35-41.5 6-9.667 9-20.167 9-31.5 0-13.333-3-24.833-9-34.5-6-9.667-17.667-22.5-35-38.5L167 43C132.333 14.333 101 0 73 0 51.667 0 34.167 6.5 20.5 19.5 6.833 32.5 0 49.667 0 71v918c0 21.333 6.833 38.833 20.5 52.5 13.667 13.667 31.167 20.5 52.5 20.5 13.333 0 27.333-4.833 42-14.5 14.667-9.667 34.667-25.167 60-46.5z" />
        </SVG>
    );
}
