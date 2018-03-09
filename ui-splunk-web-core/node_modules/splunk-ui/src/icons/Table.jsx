import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Table(props) {
    return (
        <SVG
            screenReaderText={_('Table')}
            viewBox="0 0 1500 1303"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 0v1302.796h1500V0H0zm195.42 194.527h327.483V455.98h-326.59l-.894-261.453zm391.73 0h326.592V455.98h-325.7l-.89-261.453zm390.84 0h326.59V455.98H978.883l-.893-261.453zm-782.57 325.7h327.483v261.45h-326.59l-.894-261.45zm391.73 0h326.592v261.45h-325.7l-.89-261.45zm390.84 0h326.59v261.45H978.883l-.893-261.45zM195.42 845.924h327.483v261.452h-326.59l-.894-261.452zm391.73 0h326.592v261.452h-325.7l-.89-261.452zm390.84 0h326.59v261.452H978.883l-.893-261.452z" />
        </SVG>
    );
}
