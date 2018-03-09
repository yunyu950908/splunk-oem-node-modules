import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Code(props) {
    return (
        <SVG
            screenReaderText={_('Code')}
            viewBox="0 0 1500 1288"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M952.678 0H763.84l-267.3 1368h188.84L952.677 0zM1029 382v118c0 11 4 20 11 27l171 176c3 2 4 5 4 8s-1 6-4 8l-171 176c-7 7-11 16-11 27v117c0 29 21 45 48 45 22 0 48-11 69-33l299-307c10-10 14-21 14-33s-4-24-14-33l-298-308c-21-22-48-32-70-32-27 0-48 15-48 44zm-599-33c0-29-21-44-48-44-22 0-49 10-70 32L14 645c-9 9-14 21-14 33s5 23 14 33l299 307c21 22 47 33 69 33 27 0 48-16 48-45V889c0-11-4-20-11-27L248 686c-2-2-4-5-4-8s2-6 4-8l171-176c7-7 11-16 11-27V349z" />
        </SVG>
    );
}
