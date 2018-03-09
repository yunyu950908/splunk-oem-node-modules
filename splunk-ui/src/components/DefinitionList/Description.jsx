import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Description.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
};

/**
 * Container component for the description of `DefinitionList.Term`.
 */
export default function Description(props) {
    const { children, className, ...otherProps } = props;

    return (
        <dd
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {children}
        </dd>
    );
}

Description.propTypes = propTypes;
