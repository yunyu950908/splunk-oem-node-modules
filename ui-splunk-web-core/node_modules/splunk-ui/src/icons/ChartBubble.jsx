import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function ChartBubble(props) {
    return (
        <SVG
            screenReaderText={_('Bubble Chart')}
            viewBox="0 0 1450 1468"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M232.24 636.394C103.55 636.394 0 741.957 0 871.65c0 128.685 103.552 232.237 232.24 232.237 129.69 0 235.253-103.552 235.253-232.238 0-129.693-105.563-235.256-235.254-235.256zm135.722 585.12c-68.364 0-123.66 55.296-123.66 123.66 0 67.36 55.296 122.654 123.66 122.654 68.365 0 123.66-55.294 123.66-122.654 0-68.364-55.295-123.66-123.66-123.66zM981.232 0c-256.366 0-465.48 210.12-465.48 470.51 0 256.367 209.114 465.482 465.48 465.482 259.385 0 468.5-209.115 468.5-465.483 0-260.39-209.115-470.51-468.5-470.51z" />
        </SVG>
    );
}
