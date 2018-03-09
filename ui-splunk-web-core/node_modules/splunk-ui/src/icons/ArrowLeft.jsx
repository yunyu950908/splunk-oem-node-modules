import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ArrowLeft(props) {
    return (
        <SVG
            screenReaderText={_('Arrow Left')}
            viewBox="0 0 1500 1311"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M655.48 1310.96L0 655.48 656.507 0l133.56 134.59L363.7 560.96l1136.3 1.026v189.04L363.7 750l426.368 426.37" />
        </SVG>
    );
}
