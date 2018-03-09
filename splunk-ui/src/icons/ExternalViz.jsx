import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import Puzzle from 'splunk-ui/icons/Puzzle';

export default function ExternalViz(props) {
    return (
        <Puzzle
            screenReaderText={_('External Visualization')}
            {...createTestHook(__filename)}
            {...props}
        />
    );
}
