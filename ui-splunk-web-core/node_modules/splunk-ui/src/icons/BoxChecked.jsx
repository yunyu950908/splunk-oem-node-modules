import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function BoxChecked(props) {
    return (
        <SVG
            screenReaderText={_('Box Checked')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 153.082v1193.836C0 1435.274 64.726 1500 153.082 1500h1193.836c88.356 0 153.082-64.726 153.082-153.082V153.082C1500 64.726 1435.274 0 1346.918 0H153.082C64.726 0 0 64.726 0 153.082zm585.616 855.822L1097.26 268.15c46.233-66.78 124.315-80.136 188.014-35.958 64.726 45.205 79.11 123.287 32.877 190.068L719.18 1286.3c-27.74 40.07-66.78 60.618-107.877 61.645-38.012 3.082-78.08-12.33-108.903-43.15l-308.22-309.247c-56.506-56.507-57.533-136.644-2.054-192.123 55.48-55.48 136.644-54.452 192.124 2.054l201.37 203.424z" />
        </SVG>
    );
}
