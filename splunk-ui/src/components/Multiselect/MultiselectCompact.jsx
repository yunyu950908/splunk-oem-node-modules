import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import {
    extend,
    find,
    forEachRight,
    defer,
    has,
    isUndefined,
    noop,
    omit,
    pick,
    uniq,
    without,
} from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import filterUtil from 'splunk-ui/util/filter';
import guid from 'splunk-ui/util/guid';
import { _ } from 'splunk-ui/util/i18n';
import { keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Button from 'splunk-ui/components/Button';
import Link from 'splunk-ui/components/Link';
import Dropdown from 'splunk-ui/components/Dropdown';
import ResultsMenu from 'splunk-ui/components/ResultsMenu';
import Text from 'splunk-ui/components/Text';
import Option from './Option';
import css from './MultiselectCompact.css';

class Compact extends Component {
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
         * Style properties to apply to the Menu. */
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

    static Divider = ResultsMenu.Divider;
    static Heading = ResultsMenu.Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'values');

        this.state = {
            open: false,
            textHasFocus: false,
            menuId: guid(),
            values: props.defaultValues || [],
            activeIndex: 0,
            filterKeyword: '',
            el: null,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValues')) {
            invariant('Multiselect defaultValues prop is not compatible with value prop.');
        }

        if (__DEV__ && this.isControlled() && props.onChange === noop) {
            invariant(`Multiselect onChange prop is required. This must update the value prop
                to retain user input.`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'values')) {
            invariant(`Cannot change Multiselect from an uncontrolled component to a
                controlled one. Prop 'values' is not valid in subsequent updates if not provided in
                the initial props.`);
        }

        if (__DEV__ && nextProps.defaultValues !== this.props.defaultValues) {
            invariant('Cannot change Multiselect defaultValues after set.');
        }
    }

    getCurrentValues() {
        return this.isControlled() ? this.props.values : this.state.values;
    }

    isControlled() {
        return this.controlledExternally;
    }

    /**
    * Place focus on the text input.
    */
    focus() {
        if (this.state.dropdown) {
            this.state.dropdown.focus();
        }
    }

    toggleValue(e, value) {
        const values = this.getCurrentValues();
        const currentIndex = this.getCurrentValues().indexOf(value);
        let newValues;

        if (currentIndex >= 0) {
            newValues = [...values.slice(0, currentIndex), ...values.slice(currentIndex + 1)];
        } else {
            newValues = values.concat([value]);
        }

        if (!this.isControlled()) {
            this.setState({
                values: newValues,
                open: true,
            });
        }

        this.props.onChange(e, { values: newValues });
    }

    removeValue(e, value) {
        const values = without(this.getCurrentValues(), value);

        if (!this.isControlled()) {
            this.setState({ values });
        }

        this.props.onChange(e, { values });
    }

    handleSelectAll = (e) => {
        const values = uniq((this.getCurrentValues()).concat(this.displayedValues));

        if (!this.isControlled()) {
            this.setState({ values });
        }

        this.props.onChange(e, { values });
    }

    handleClearAll = (e) => {
        // Clear the filtered items, items when filtering. Else clear all the items.
        const values = this.state.filterKeyword ?
            without(this.getCurrentValues(), ...this.displayedValues) : [];

        if (!this.isControlled()) {
            this.setState({ values });
        }

        this.props.onChange(e, { values });
    }

    handleRequestRemove = (e, { value }) => {
        defer(() => this.removeValue(e, value)); // allow the event to bubble before removing.
    }

    handleTextKeyDown = (e) => {
        if (keycode(e) === 'tab') {
            e.preventDefault();
        }

        if (e.shiftKey || e.metaKey || e.ctrlKey) {
            return;
        }

        if (keycode(e) === 'down') {
            e.preventDefault();

            this.setState({
                activeIndex: Math.min(this.state.activeIndex + 1,
                    this.availableOptionCount - 1),
            });
        }

        if (keycode(e) === 'up') {
            e.preventDefault();
            this.setState({
                activeIndex: Math.max(this.state.activeIndex - 1, 0),
            });
        }

        if (keycode(e) === 'enter' && !isUndefined(this.activeValue) && this.state.open) {
            this.toggleValue(e, this.activeValue);
        }
    }

    handleMenuOptionClick = (e, { value }) => {
        e.preventDefault();
        this.toggleValue(e, value);
    }

    handleTextChange = (e, { value }) => {
        this.setState({
            filterKeyword: value,
            open: true,
            activeIndex: 0,
        });

        this.props.onFilterChange(e, { keyword: value });
    }

    handleTextFocus = () => {
        this.setState({
            textHasFocus: true,
        });
    }

    handleTextBlur = () => {
        this.setState({
            textHasFocus: false,
        });
    }

    handleRequestOpen = (e) => {
        this.setState({
            open: true,
            activeIndex: 0,
            topValues: this.getCurrentValues(),
            filterKeyword: '',
        });

        this.props.onFilterChange(e, { keyword: '' });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }

    handleMount = (container) => {
        this.setState({
            dropdown: container,
        });
    }

    handleActiveOptionMount = (c) => {
        if (c) {
            c.scrollIntoViewIfNeeded();
        }
    }

    renderControls({ placement, hasChildren }) {
        const selectControls = (
            <div className={css.toggleAllControls} data-placement={placement} key="selectAll">
                <Link
                    onClick={this.handleSelectAll}
                    className={css.selectAll}
                    disabled={!(this.availableOptionCount - this.selectedOptionCount)}
                >
                    {this.state.filterKeyword ? _('Select All Matches') : _('Select All') }
                </Link>
                <Link
                    onClick={this.handleClearAll}
                    disabled={!this.selectedOptionCount}
                >
                    {this.state.filterKeyword ? _('Clear All Matches') : _('Clear All') }
                </Link>
            </div>
        );

        /* eslint-disable jsx-a11y/tabindex-no-positive */
        return (
            <div key="controls">
                {placement === 'above' && hasChildren && selectControls}
                <div
                    key="filter"
                    className={css.filter}
                    data-placement={placement}
                >
                    <Text
                        value={this.state.filterKeyword}
                        appearance="search"
                        onChange={this.handleTextChange}
                        onKeyDown={this.handleTextKeyDown}
                        onKeyUp={this.handleTextKeyUp}
                        onFocus={this.handleTextFocus}
                        onBlur={this.handleTextBlur}
                        placeholder={_('filter')}
                        tabIndex={1}
                        ref={c => this.input = c}
                    />
                </div>
                {placement !== 'above' && hasChildren && selectControls}
            </div>
        );
        /* eslint-enable jsx-a11y/tabindex-no-positive */
    }

    renderMenu = ({ anchorWidth, maxHeight, placement }) => {
        const { filterKeyword, menuId, textHasFocus, topValues } = this.state;
        const { allowNewValues, controlledFilter } = this.props;
        const currentValues = this.getCurrentValues();

        this.availableOptionCount = 0;
        this.selectedOptionCount = 0;
        this.activeValue = undefined;

        let foundExactMatch;
        let childrenTopCount = 0;

        let children = Children.toArray(this.props.children).reduce((acc, item, i) => {
            if (!item.props || !has(item.props, 'value')) { // ignore Headings and Dividers
                acc.push(item);
                return acc;
            }

            // Find out if the search string exactly matches a value
            if (item.props.value === this.state.filterKeyword) {
                foundExactMatch = true;
            }

            // Format the Menu.Item
            const clonedItem = cloneElement(item, {
                key: item.key || i,
                onClick: this.handleMenuOptionClick,
                selectable: false,
                selected: currentValues && currentValues.indexOf(item.props.value) >= 0,
                compact: true,
            });

            // Move previously selected items to the top section
            if (topValues && topValues.indexOf(item.props.value) >= 0) {
                if (childrenTopCount === 0) {
                    acc.splice(childrenTopCount, 0, <ResultsMenu.Divider key="topDivider" />);
                }
                acc.splice(childrenTopCount, 0, clonedItem);

                childrenTopCount += 1;
            } else {
                acc.push(clonedItem);
            }

            return acc;
        }, []);


        // Add missing items
        forEachRight(currentValues, (value, i) => {
            const matchedItem = find(children, item => item.props && item.props.value === value);
            if (!matchedItem) {
                if (value === this.state.filterKeyword) {
                    foundExactMatch = true;
                }

                const isTopValue = topValues && topValues.indexOf(value) >= 0;

                children.splice(isTopValue ? 0 : childrenTopCount + 1, 0,
                    <Option
                        label={String(value)}
                        value={value}
                        key={`missing-value-${i}`}
                        onClick={this.handleMenuOptionClick}
                        compact
                        selected
                    />,
                );
                if (isTopValue) {
                    childrenTopCount += 1;
                }
            }
        });

        // Filter the items
        children = controlledFilter ? children : filterUtil.filterByKeywords(
            children,
            filterKeyword,
            (item) => {
                // Return the filtering value
                if (item.type === Option) {
                    return item.props.label;
                }
                return null;
            },
        );

        // Add the option to add the new value
        if (allowNewValues && !foundExactMatch && filterKeyword) {
            children.splice(childrenTopCount, 0, (
                <Option
                    label={`${filterKeyword} (new value)`}
                    value={filterKeyword}
                    key="newValue"
                    compact
                    onClick={this.handleMenuOptionClick}
                />
            ));
        }

        // Highlight the selected Items and remove hidden
        children = children.reduce((acc, item) => {
            if (!has(item.props, 'value')) { // ignore Dividers & Headings
                acc.push(item);
                return acc;
            }

            // Ignore any hidden items
            if (item.props && item.props.hidden) {
                return acc;
            }

            const active = this.availableOptionCount === this.state.activeIndex;
            this.availableOptionCount += 1;

            this.selectedOptionCount += item.props.selected ? 1 : 0;

            if (!active || !textHasFocus) {
                acc.push(item);
                return acc;
            }

            if (!item.props.disabled) {
                this.activeValue = item.props.value;
            }

            const clonedItem = cloneElement(item, {
                active,
                id: `${menuId}-active`,
                ref: this.handleActiveOptionMount,
            });

            acc.push(clonedItem);
            return acc;
        }, []);

        this.displayedValues = children.reduce((acc, item) => {
            if (item.props && item.props.value) {
                acc.push(item.props.value);
            }
            return acc;
        }, []);

        return (
            <ResultsMenu
                childrenStart={this.renderControls({ placement, hasChildren: !!children.length })}
                placement={placement}
                maxHeight={maxHeight}
                isLoading={this.props.isLoadingOptions}
                {...pick(this.props, 'noOptionsMessage',
                    'footerMessage', 'animateLoading', 'loadingMessage')}
                style={extend({ width: Math.max(anchorWidth, 200) }, this.props.menuStyle)}
            >
                {children}
            </ResultsMenu>
        );
    }

    render() {
        const {
            children,
            className,
            describedBy,
            disabled,
            error,
            inline,
            placeholder,
            scrollContainer,
            size,
            ...otherProps
        } = this.props;

        // Generate buttonLabels
        const currentValues = this.getCurrentValues();
        const childrenArray = Children.toArray(children);
        const buttonLabel = currentValues.map((value) => {
            const matchedItem = find(childrenArray, item => item.props.value === value);
            return matchedItem ? matchedItem.props.label : value;
        }).join(_(', '));

        const toggle = (
            <Button
                label={buttonLabel || placeholder}
                error={error}
                inline={inline}
                size={size}
                disabled={disabled || null}
                isMenu
            >
                {!!currentValues.length &&
                    <span className={css.count} data-role="count">
                        ({currentValues.length})
                    </span>}
            </Button>
        );

        return (
            <Dropdown
                className={toClassName(css.main, className)}
                closeReasons={['clickAway', 'escapeKey', 'offScreen', 'toggleClick']}
                inline={inline}
                toggle={toggle}
                {...createTestHook(__filename)}
                {...omit(otherProps,
                    'allowNewValues',
                    'animateLoading',
                    'controlledFilter',
                    'defaultValues',
                    'footerMessage',
                    'isLoadingOptions',
                    'menuStyle',
                    'noOptionsMessage',
                    'onChange',
                    'onFilterChange',
                    'values',
                )}
                onClick={disabled ? null : this.handleClick}
                onRequestOpen={this.handleRequestOpen}
                onRequestClose={this.handleRequestClose}
                open={this.state.open}
                repositionMode="flip"
                scrollContainer={scrollContainer}
                defaultPlacement="vertical"
                canCoverAnchor={window.innerHeight < 500}
                ref={this.handleMount}
                aria-describedby={describedBy}
            >
                {this.renderMenu}
            </Dropdown>
        );
    }
}

export default Compact;
