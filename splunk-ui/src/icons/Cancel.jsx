import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import Clear from 'splunk-ui/icons/Clear';

export default function Cancel(props) {
    return (
        <Clear
            screenReaderText={_('Cancel')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
