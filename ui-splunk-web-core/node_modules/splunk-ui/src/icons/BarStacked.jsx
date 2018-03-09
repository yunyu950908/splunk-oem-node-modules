import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function BarStacked(props) {
    return (
        <SVG
            screenReaderText={_('Bar Stacked')}
            viewBox="0 0 1200 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M675 0v1500h525V0H675zM0 525v975h525V525H0zm750 900V525h375v900H750zm-675 0v-375h375v375H75z" />
        </SVG>
    );
}
