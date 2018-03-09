import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Menu from 'splunk-ui/components/Menu';

class Option extends Component {
    static propTypes = {
        /** @docs-ignore */
        active: PropTypes.bool,
        /**
        * Additional information to explain the option, such as "Recommended".
        */
        description: PropTypes.string,
        /**
        * The description text may appear to the right of the label or under the label.
        */
        descriptionPosition: PropTypes.oneOf(['right', 'bottom']),
        /**
        * If disabled=true, the option is grayed out and cannot be clicked.
        */
        disabled: PropTypes.bool,
        /**
        * Adding hidden options can be useful for resolving the selected display label and icon,
        * when the option should not be in the list. This scenario can arise when Select's filter is
        * controlled, because the selected item may be filtered out; and when a legacy option is
        * valid, but should no longer be displayed as a selectable option.
        */
        hidden: PropTypes.bool,
        /**
        * The icon to show before the label. See the Icon component for more information.
        */
        icon: PropTypes.node,
        /**
        * The text to show for the option.
        */
        label: PropTypes.string.isRequired,
        /** @docs-ignore */
        onClick: PropTypes.func,
        /** @docs-ignore */
        selected: PropTypes.bool,
        /**
        * If truncate=false, wrapping will be disabled and any additional text will be ellipsised.
        */
        truncate: PropTypes.bool,
        /**
        * The label and/or icon will be placed on the Control's toggle if it matches this value.
        */
        value: PropTypes.any.isRequired,
    }

    static defaultProps = {
        active: false,
        descriptionPosition: 'bottom',
        disabled: false,
        hidden: false,
        onClick: noop,
        selected: false,
        truncate: false,
    }

    scrollIntoViewIfNeeded() {
        this.c.scrollIntoViewIfNeeded();
    }

    handleClick = (e) => {
        const { onClick, value, disabled } = this.props;
        if (!disabled) {
            onClick(e, { value });
        }
    }

    render() {
        return (
            <Menu.Item
                ref={c => this.c = c}
                {...createTestHook(__filename)}
                selectable
                {...this.props}
                onClick={this.handleClick}
            />
        );
    }
}
export default Option;
