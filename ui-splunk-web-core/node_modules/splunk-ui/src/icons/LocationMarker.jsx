import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function LocationMarker(props) {
    return (
        <SVG
            screenReaderText={_('Location Marker')}
            viewBox="0 0 949 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M475 0c133 0 247 52 334 141 87 87 140 200 140 334 0 228-122 482-239 692-68 121-148 220-235 333-183-228-301-430-399-673C26 707 0 588 0 475c0-134 53-247 141-334C228 52 341 0 475 0zm0 737c141 0 254-114 254-254 0-149-113-259-254-259-149 0-259 110-259 259 0 140 110 254 259 254z" />
        </SVG>
    );
}
