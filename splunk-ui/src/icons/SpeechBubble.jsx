import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function SpeechBubble(props) {
    return (
        <SVG
            screenReaderText={_('Speech Bubble')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M153.082 0h1193.836c44.52 0 81.164 14.15 109.93 42.453C1485.617 70.755 1500 106.806 1500 150.606v879.38c0 43.8-14.384 79.852-43.15 108.154-28.768 28.302-65.412 42.453-109.932 42.453h-115.07L784.933 1500l117.123-319.407H153.082c-44.52 0-81.164-14.15-109.93-42.453C14.383 1109.838 0 1073.787 0 1029.987v-879.38c0-43.8 14.384-79.852 43.15-108.154C71.92 14.15 108.563 0 153.083 0zM1275 368.935V221.36H225v147.575h1050zm0 295.15V516.508H225v147.574h1050zM225 811.657v147.574h900V811.658H225z" />
        </SVG>
    );
}
