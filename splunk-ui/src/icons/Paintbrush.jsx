import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Paintbrush(props) {
    return (
        <SVG
            screenReaderText={_('Paintbrush')}
            viewBox="0 0 1500 1446"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M910.387 862.09l567.21-684c18.33-15 22.403-33 22.403-52-1.018-19-4.073-38-22.403-54l-49.898-47c-14.258-19-34.625-26-52.955-25-20.366-1-37.678 6-54.99 25l-689.41 562c-69.245 56-134.418 170-144.602 230 73.32 0 190.428 112 193.483 191 60.082-16 173.116-77 231.16-146zm-538.697 554c98.778-28 223.015-146 223.015-263 0-130-91.65-219-223.015-219-156.822 0-202.647 118-223.014 219-34.623 175-148.676 152-148.676 260 0 29 48.88 32 74.338 32 62.118 0 192.464 1 297.352-29z" />
        </SVG>
    );
}
