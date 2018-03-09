import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function CircleFilled(props) {
    return (
        <SVG
            screenReaderText={_('Circle Filled')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M750 0C648.667 0 552 19 460 57s-172.667 91.667-242 161S95 368 57 460 0 648.667 0 750s19 198 57 290 91.667 172.667 161 242 150 123 242 161 188.667 57 290 57 198-19 290-57 172.667-91.667 242-161c68-70.667 121.333-152 160-244s58-188 58-288-19.333-196-58-288-92-173.333-160-244c-69.333-69.333-150-123-242-161S851.333 0 750 0z" />
        </SVG>
    );
}
