import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ArrowDown(props) {
    return (
        <SVG
            screenReaderText={_('Arrow Down')}
            viewBox="0 0 1311 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1310.96 844.52L655.48 1500 0 843.493l134.59-133.56L560.96 1136.3 561.985 0h189.04L750 1136.3l426.37-426.368" />
        </SVG>
    );
}
