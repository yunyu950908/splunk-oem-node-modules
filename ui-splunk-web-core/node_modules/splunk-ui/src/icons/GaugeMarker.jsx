import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function GaugeMarker(props) {
    return (
        <SVG
            screenReaderText={_('Gauge Marker')}
            viewBox="0 0 584 1502"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M438 76.027h146C584 31.85 553 0 510 0H74C31 0 0 31.85 0 76.027V1425c0 44.178 31 76.027 74 76.027h436c43 0 74-31.85 74-76.027H438c-43 0-74-31.85-74-75s31-75 74-75h146v-148.973H366c-43 0-74-31.85-74-75s31-75 74-75h218v-150H438c-43 0-74-31.85-74-75s31-75 74-75h146v-150H366c-43 0-74-31.85-74-75s31-75 74-75h218v-150H438c-43 0-74-31.85-74-75s31-75 74-75z" />
        </SVG>
    );
}
