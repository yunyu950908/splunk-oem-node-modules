import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import BoxFilled from 'splunk-ui/icons/BoxFilled';

export default function Stop(props) {
    return (
        <BoxFilled
            screenReaderText={_('Stop')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
