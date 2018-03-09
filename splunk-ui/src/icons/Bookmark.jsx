import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Bookmark(props) {
    return (
        <SVG
            screenReaderText={_('Bookmark')}
            viewBox="0 0 594 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 1500V75.254c0-21.695 7.12-39.66 21.356-53.898C35.593 7.12 53.56 0 75.254 0h443.39c21.695 0 39.66 7.12 53.898 21.356 14.238 14.237 21.356 32.203 21.356 53.898V1500l-296.95-296.95L0 1500z" />
        </SVG>
    );
}
