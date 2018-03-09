import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function List(props) {
    return (
        <SVG
            screenReaderText={_('List')}
            viewBox="0 0 1500 1055"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M375 .96V190h1125V.96H375zm0 431.506v189.04h1125v-189.04H375zM375 865v189.04h1125V865H375zM0 95.48C0 157.122 32.877 190 94.52 190c61.644 0 94.52-32.877 94.52-94.52 0-61.644-32.876-94.52-94.52-94.52C32.878.96 0 33.835 0 95.48zm0 431.506c0 61.644 32.877 94.52 94.52 94.52 61.644 0 94.52-32.876 94.52-94.52s-32.876-94.52-94.52-94.52c-61.643 0-94.52 32.876-94.52 94.52zM0 959.52c0 61.644 32.877 94.52 94.52 94.52 61.644 0 94.52-32.876 94.52-94.52 0-61.643-32.876-94.52-94.52-94.52C32.878 865 0 897.877 0 959.52z" />
        </SVG>
    );
}
