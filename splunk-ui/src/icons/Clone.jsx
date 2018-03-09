import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Clone(props) {
    return (
        <SVG
            screenReaderText={_('Clone')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M189.04 1310.96H1125V1500H0V375h189.04v935.96zM375 0h1125v1125H375V0zm935.96 935.96V189.04H564.04v746.92h746.92z" />
        </SVG>
    );
}
