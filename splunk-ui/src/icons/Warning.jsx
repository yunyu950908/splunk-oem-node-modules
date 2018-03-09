import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function AlertTriangle(props) {
    return (
        <SVG
            screenReaderText={_('Warning')}
            viewBox="0 0 1500 1383"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M670.61 54.172L10.274 1259.962C2.802 1273.973 0 1289.853 0 1302.928c0 43.897 33.624 79.39 86.862 79.39h1326.276c53.238 0 86.862-35.493 86.862-79.39 0-13.076-2.802-29.888-10.274-42.964L829.39 54.173C808.842 16.812 780.822 0 750 0c-30.822 0-59.776 18.68-79.39 54.172zm23.35 372.665h110.212c54.172 0 92.466 42.03 84.06 95.268l-43.898 395.08c-5.604 33.624-31.756 56.04-66.314 56.04h-60.71c-34.558 0-60.71-22.416-66.314-56.04L609.9 522.106c-9.34-53.238 28.954-95.268 84.06-95.268zM750 1245.953c-56.04 0-101.806-45.766-101.806-102.74 0-56.04 45.766-101.806 101.806-101.806s102.74 43.898 102.74 101.806c0 56.974-46.7 102.74-102.74 102.74z" />
        </SVG>
    );
}
