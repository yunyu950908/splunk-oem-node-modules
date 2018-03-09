import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function HamburgerMenu(props) {
    return (
        <SVG
            screenReaderText={_('Hamburger Menu')}
            viewBox="0 0 1500 1054"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 189.04V0h1500v189.04H0zM0 620.55v-189.04h1500v189.04H0zm0 432.534v-189.04h1500v189.04H0z" />
        </SVG>
    );
}
