import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ArrowRight(props) {
    return (
        <SVG
            screenReaderText={_('Arrow Right')}
            viewBox="0 0 1500 1311"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M844.52 0L1500 655.48l-656.507 655.48-133.56-134.59L1136.3 750 0 748.973v-189.04l1136.3 1.026-426.368-426.37" />
        </SVG>
    );
}
