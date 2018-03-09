import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, omit } from 'lodash';
import { _ } from 'splunk-ui/util/i18n';
import Menu from 'splunk-ui/components/Menu';
import Compact from './MultiselectCompact';
import Normal from './MultiselectNormal';
import Option from './Option';

class Multiselect extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        /**
        * Allow the user to add arbitrary values.
        */
        allowNewValues: PropTypes.bool,
        /**
         * When compact, options are shown as checkboxes and the input is a single line. This is
         * useful when placing the Multiselect in a horizontal bar, such as a filter.
         */
        compact: PropTypes.bool,
        /**
         * `children` should be `Multiselect.Option`, `Multiselect.Heading`, or
         * `Multiselect.Divider`.
         **/
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /** If true, this component will not handle filtering. The parent must update the
         * Options based on the onFilterChange value. */
        controlledFilter: PropTypes.bool,
        /**
        * Set this property instead of value to keep the value uncontrolled.
        */
        defaultValues: PropTypes.array,
       /**
        * The id of the description. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's help component.
        */
        describedBy: PropTypes.string,
        /** Disable adding and removing. */
        disabled: PropTypes.bool,
        /** Display as in an error. */
        error: PropTypes.bool,
        /**
         * The footer message can show additional information, such as a truncation message.
         */
        footerMessage: PropTypes.node,
        /** Make the control an inline block with variable width. */
        inline: PropTypes.bool,
        /*
         * Whether or not to show the loading message and/or wait spinner. It's recommended to
         * remove the old children while loading new children to ensure the loading message is
         * not hidden.
         */
        isLoadingOptions: PropTypes.bool,
        /**
        * The id of the label. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's label.
        */
        labelledBy: PropTypes.string,
        /**
         * The loading message to show when isLoadingOptions. */
        loadingMessage: PropTypes.node,
        /**
         * Style properties to apply to the Menu. This is primarily used to override the width of
         * the menu should it need to be wider than the toggle Button. */
        menuStyle: PropTypes.object,
        /**
         * The noOptionsMessage is shown when there are no children and not loading, such as when
         * there are no Options matching the filter. This can be customized to the type of content,
         * such as "No matching dashboards"; insert other content, such as an error message; or
         * communicate a minimum number of chararters to enter to see results. */
        noOptionsMessage: PropTypes.node,
        /**
        * A callback to receive the change events.  If values is set, this callback is required.
        * This must set the values prop to retain the change.
        */
        onChange: PropTypes.func,
        /**
        * A callback with the change event and value of the filter box. Providing this callback and
        * setting controlledFilter to true enables you to filter and update the children by other
        * criteria.
        */
        onFilterChange: PropTypes.func,
        /**
        * If 'value' is undefined or don't match an item, the Button will display this text.
        */
        placeholder: PropTypes.string,
        /**
         * The container with which the popover must scroll to stay aligned with the anchor.
         */
        scrollContainer: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        /** The overall size of the control. */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
         * Value will be matched to one of the children to deduce the label and/or icon for the
         * toggle.
         */
        values: PropTypes.array,
    };

    static defaultProps = {
        animateLoading: false,
        allowNewValues: false,
        compact: false,
        disabled: false,
        inline: false,
        isLoadingOptions: false,
        menuStyle: {},
        noOptionsMessage: _('No matches'),
        onChange: noop,
        onFilterChange: noop,
        placeholder: _('Select...'),
        scrollContainer: 'window',
        size: 'medium',
    };

    static Option = Option;
    static Heading = Menu.Heading;
    static Divider = Menu.Divider;

    render() {
        const Tag = this.props.compact ? Compact : Normal;

        return <Tag {...omit(this.props, 'compact')} />;
    }
}

export default Multiselect;
