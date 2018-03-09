import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';

const propTypes = {
    /** @docs-ignore. */
    children: PropTypes.node,
};

function Footer(props) {
    const { children, ...other } = props;
    return (
        <tfoot {...createTestHook(__filename)} {...other}>
            {children}
        </tfoot>
    );
}

Footer.splunkUiType = 'Table.Footer';
Footer.propTypes = propTypes;
export default Footer;
