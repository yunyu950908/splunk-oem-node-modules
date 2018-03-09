import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function SortedUp(props) {
    return (
        <SVG
            screenReaderText={_('Sorted Up')}
            viewBox="0 0 933 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 466.438L466.438 0l466.44 467.466-134.59 133.56-331.85-331.848-331.85 331.85L0 466.438z" />
        </SVG>
    );
}
