import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import Clear from 'splunk-ui/icons/Clear';

export default function Close(props) {
    return (
        <Clear
            screenReaderText={_('Close')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
