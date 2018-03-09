import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import ChartLine from 'splunk-ui/icons/ChartLine';

export default function Activity(props) {
    return (
        <ChartLine
            screenReaderText={_('Activity')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
