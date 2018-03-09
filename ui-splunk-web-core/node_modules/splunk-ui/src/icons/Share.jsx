import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Share(props) {
    return (
        <SVG
            screenReaderText={_('Share')}
            viewBox="0 0 1500 1287"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M909.777 0L1500 590.223l-591.415 590.222-128.776-131.16 368.44-368.442-423.29-1.193c-148.648 0-276.033 52.862-382.154 158.585-106.12 105.724-159.58 233.307-160.374 382.75v65.58H0v-64.387c0-131.16 32.393-252.385 97.178-363.672C161.963 747.218 250 659.18 361.288 594.396 472.576 529.61 593.8 497.218 724.96 497.218l423.29 1.192-368.44-368.442L909.776 0z" />
        </SVG>
    );
}
