import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import TriangleRight from 'splunk-ui/icons/TriangleRight';

export default function Play(props) {
    return (
        <TriangleRight
            screenReaderText={_('Play')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
