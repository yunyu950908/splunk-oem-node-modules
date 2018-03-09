import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Tab from './Tab';
import css from './TabBar.css';

function noop() {}

const propTypes = {
    /**
     * `children` should be `TabBar.Tab`.
     **/
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /** A callback that receives the event and data (selectedTabId). */
    onChange: PropTypes.func.isRequired,
    /** The `tabId` of the `TabBar.Tab` to activate. */
    activeTabId: PropTypes.any,
};

const defaultProps = {
    onChange: noop,
};

function TabBar(props) {
    const { activeTabId, className, children, onChange } = props;
    const classes = toClassName(css.main, className);
    const clonedChildren = Children.toArray(children)
        .filter(isValidElement)
        .map(child => cloneElement(child, {
            onClick: (e, data) => {
                onChange(e, { selectedTabId: data.tabId });
            },
            active: activeTabId === child.props.tabId,
        }));
    return (
        <ul
            className={classes}
            {...createTestHook(__filename)}
            {...omit(props, Object.keys(propTypes))}
        >
            {clonedChildren}
        </ul>
    );
}

TabBar.propTypes = propTypes;
TabBar.defaultProps = defaultProps;
TabBar.Tab = Tab;

export default TabBar;
