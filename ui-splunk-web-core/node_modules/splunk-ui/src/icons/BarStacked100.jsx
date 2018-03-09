import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function BarStacked100(props) {
    return (
        <SVG
            screenReaderText={_('Bar Stacked 100')}
            viewBox="0 0 1200 1500"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 1500V0h525v1500H0zm675 0V0h525v1500H675zm75-975v900h375V525H750zM75 825v600h375V825H75z" />
        </SVG>
    );
}
