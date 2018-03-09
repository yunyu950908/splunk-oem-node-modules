import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Flag(props) {
    return (
        <SVG
            screenReaderText={_('Flag')}
            viewBox="0 0 1463 1387"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1421.796 259.515c29.483-13.314 51.356 6.658 36.14 33.287-94.153 139.802-176.893 243.464-240.612 315.743-65.62 74.18-121.732 123.635-167.382 152.166-94.152 58.965-155.97 39.944-208.277 0-28.53-15.216-54.21-38.992-84.642-60.866-54.21-45.65-133.144-62.768-239.66-23.776-56.11 23.776-120.782 65.622-202.57 134.096l146.46 576.327H294.82L0 211.965l149.312-52.307C327.156 28.414 441.28-11.53 523.07 2.737c78.935 16.167 127.438 81.788 182.598 147.41 55.16 67.523 120.78 142.655 228.248 174.99 102.712 33.286 252.975 25.678 487.88-65.622z" />
        </SVG>
    );
}
