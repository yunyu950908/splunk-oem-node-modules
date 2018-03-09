import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function TriangleUpSmall(props) {
    return (
        <SVG
            screenReaderText={_('Triangle Up Small')}
            viewBox="0 0 1062 677"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1001 502L604 44c-18-17.333-31.833-29-41.5-35-9.667-6-20.167-9-31.5-9-13.333 0-24.833 3-34.5 9-9.667 6-22.5 17.667-38.5 35L43 510c-28.667 34.667-43 66-43 94 0 21.333 6.5 38.833 19.5 52.5C32.5 670.167 49.667 677 71 677h918c21.333 0 38.833-6.833 52.5-20.5 13.667-13.667 20.5-31.167 20.5-52.5 0-13.333-4.833-27.333-14.5-42-9.667-14.667-25.167-34.667-46.5-60z" />
        </SVG>
    );
}
