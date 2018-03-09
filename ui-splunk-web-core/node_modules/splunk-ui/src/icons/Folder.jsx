import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Folder(props) {
    return (
        <SVG
            screenReaderText={_('Folder')}
            viewBox="0 0 1500 1089"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1442.506 151.888h-955.95V54.92c0-12.014-6.007-24.886-12.014-33.467C462.53 6.865 447.942.858 429.062.858h-375C24.886.858 0 24.028 0 54.92v979.12c0 30.89 24.886 54.06 54.062 54.06h1388.444c32.608 0 57.494-23.17 57.494-54.06V209.38c0-34.325-24.886-57.494-57.494-57.494z" />
        </SVG>
    );
}
