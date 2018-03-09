import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import ChevronDown from 'splunk-ui/icons/ChevronDown';

export default function Cancel(props) {
    return (
        <ChevronDown
            screenReaderText={_('(Menu)')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
