import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import Document from 'splunk-ui/icons/Document';

export default function Report(props) {
    return (
        <Document
            screenReaderText={_('Report')}
            {...createTestHook(__filename)}
            {...props}
        />);
}
