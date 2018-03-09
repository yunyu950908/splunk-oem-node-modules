import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Heading.css';

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
    /** @docs-ignore */
    children: PropTypes.node,
};

/**
 * A non-interactive menu item used to separate and label groups of menu items.
 */
function Heading(props) {
    const { className, children, ...otherProps } = props;
    return (
        <li
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {children}
        </li>
    );
}

Heading.propTypes = propTypes;

/* Remove consecutive items with filterConsecutive = true (Dividers and Headings) */
Heading.filterConsecutive = true;
/* Remove the item if it is the last item after filtering. */
Heading.filterLast = true;

export default Heading;
