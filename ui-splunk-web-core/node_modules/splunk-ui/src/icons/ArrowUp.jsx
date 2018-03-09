import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ArrowUp(props) {
    return (
        <SVG
            screenReaderText={_('Arrow Up')}
            viewBox="0 0 1311 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 655.48L655.48 0l655.48 656.507-134.59 133.56L750 363.7 748.973 1500h-189.04l1.026-1136.3-426.37 426.368" />
        </SVG>
    );
}
