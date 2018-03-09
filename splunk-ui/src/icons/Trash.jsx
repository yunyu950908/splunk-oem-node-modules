import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Trash(props) {
    return (
        <SVG
            screenReaderText={_('Trash')}
            viewBox="0 0 1350 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1273.973 150H900V76.027C900 31.85 868.15 0 823.973 0H526.027C481.85 0 450 31.85 450 76.027V150H76.027C31.85 150 0 181.85 0 225v150h1350V226.027c0-44.178-31.85-76.027-76.027-76.027zM150 523.973v900c0 44.178 31.85 76.027 76.027 76.027h897.946c44.178 0 76.027-31.85 76.027-76.027v-900H150z" />
        </SVG>
    );
}
