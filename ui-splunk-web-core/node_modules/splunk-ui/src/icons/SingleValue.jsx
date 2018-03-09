import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function SingleValue(props) {
    return (
        <SVG
            screenReaderText={_('Single Value')}
            viewBox="0 0 1500 1053"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M438.7 822.945H9.246L0 697.603 435.616 0h212.672v661.644h118.15v161.3h-118.15v229.11h-209.59v-229.11zM989.383 335.96h-201.37l-3.082-5.138C780.822 145.89 916.438 0 1129.11 0c213.698 0 336.986 118.15 336.986 301.027 0 125.343-58.562 200.343-219.863 382.192l-169.52 204.45v6.166H1500v158.22H805.48V915.41l320.547-361.643c96.576-114.04 131.507-186.986 131.507-252.74 0-84.246-43.15-139.726-128.424-139.726-90.41 0-139.726 72.947-139.726 174.66zm-553.768-58.563l-23.63 47.26-220.89 336.987H438.7V279.452l-3.084-2.055z" />
        </SVG>
    );
}
