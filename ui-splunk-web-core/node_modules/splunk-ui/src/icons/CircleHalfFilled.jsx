import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function CircleHalfFilled(props) {
    return (
        <SVG
            screenReaderText={_('Circle Half Filled')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M750 0C648.667 0 552 19 460 57s-172.667 91.667-242 161S95 368 57 460 0 648.667 0 750s19 198 57 290 91.667 172.667 161 242 150 123 242 161 188.667 57 290 57 198-19 290-57 172.667-91.667 242-161c68-70.667 121.333-152 160-244s58-188 58-288-19.333-196-58-288-92-173.333-160-244c-69.333-69.333-150-123-242-161S851.333 0 750 0zm0 184c76.667 0 149.5 14.5 218.5 43.5S1098.333 297.333 1151 350c51.333 52.667 91.667 113.667 121 183s44 141.667 44 217H184c0-76.667 14.333-149.5 43-218.5S296.333 402 349 350c52.667-52.667 113.5-93.5 182.5-122.5S673.333 184 750 184z" />
        </SVG>
    );
}
