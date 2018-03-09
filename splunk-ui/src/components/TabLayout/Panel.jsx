import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './TabLayout.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /** See Icon documention for more information. */
    icon: PropTypes.node,
    /** The text shown in the button. */
    label: PropTypes.string,
    /** A unique id for this panel and used by the TabLayout to keep track of the open panel. */
    panelId: PropTypes.string.isRequired,
};

const defaultProps = {
};

function Panel(props) {
    const { children, className, panelId } = props;
    return (
        <div
            className={toClassName(css.panel, className)}
            data-panel-id={panelId}
            {...createTestHook(__filename)}
            {...omit(props, Object.keys(propTypes))}
        >
            {children}
        </div>
    );
}

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
