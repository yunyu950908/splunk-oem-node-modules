import React from 'react';
import PropTypes from 'prop-types';
import { _ } from 'splunk-ui/util/i18n';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Close from 'splunk-ui/icons/Close';
import css from './CloseButton.css';

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
    screenReaderText: PropTypes.string,
};

const defaultProps = {
    screenReaderText: _('Close'),
};

export default function CloseButton(props) {
    const { className, screenReaderText, ...other } = props;

    return (
        <button
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...other}
        >
            <Close inline={false} screenReaderText={screenReaderText} />
        </button>
    );
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
