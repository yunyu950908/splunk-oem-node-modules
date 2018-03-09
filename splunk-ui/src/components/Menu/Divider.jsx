import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Divider.css';

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
};

/**
 * A non-interactive menu item used to visually separate groups of items in the menu.
 */
function Divider(props) {
    const { className, ...otherProps } = props;

    return (
        <li
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        />
    );
}

export default Divider;

/* Remove the item if it is the first item after filtering */
Divider.filterFirst = true;
/* Remove consecutive items with filterConsecutive = true (Dividers and Headings) */
Divider.filterConsecutive = true;
/* Remove the item if it is the last item after filtering. */
Divider.filterLast = true;

Divider.propTypes = propTypes;
