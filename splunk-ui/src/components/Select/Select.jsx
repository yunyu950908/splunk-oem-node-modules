import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has, noop, omit, pick } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import filterUtil from 'splunk-ui/util/filter';
import { _ } from 'splunk-ui/util/i18n';
import { keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import { isIE11 } from 'splunk-ui/util/userAgent';
import Button from 'splunk-ui/components/Button';
import Dropdown from 'splunk-ui/components/Dropdown';
import Link from 'splunk-ui/components/Link';
import ResultsMenu from 'splunk-ui/components/ResultsMenu';
import Text from 'splunk-ui/components/Text';
import Caret from 'splunk-ui/icons/Caret';
import Option from './Option';
import css from './Select.css';

class Select extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        /** Change the style of the button or link. */
        appearance: PropTypes.oneOf(['default', 'link', 'primary', 'pill']),
        /**
        * Remove rounding from the left side of the toggle.
        */
        append: PropTypes.bool,
        /**
         * `children` should be `Select.Option`, `Select.Header`, or `Select.Divider`.
         */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /**
        * Set this property instead of value to keep the value uncontrolled.
        */
        defaultValue: PropTypes.any,
        /**
        * The id of the description. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's help component.
        */
        describedBy: PropTypes.string,
        /**
        * disabled to toggle.
        */
        disabled: PropTypes.bool,
        /**
        * Highlight the field as having an error. The button will turn red.
        */
        error: PropTypes.bool,
        /**
        * Whether to show the filter box. When true, the children are automatically
        * filtered based on the label. When controlled, the parent component must provide a
        * onFilterChange callback and update the children. This can also be used to fetch new
        * results. */
        filter: PropTypes.oneOf([false, true, 'controlled']),
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
        menuStyle: PropTypes.object,
        /**
         * The noOptionsMessage is shown when there are no children and not loading, such as when
         * there are no Options matching the filter. This can be customized to the type of content,
         * such as "No matching dashboards"; insert other content, such as an error message; or
         * communicate a minimum number of chararters to enter to see results. */
        noOptionsMessage: PropTypes.node,
        /**
        * A callback to receive the change events.
        * If value is set, this callback is required. This must set the value prop to retain the
        * change.
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
        * When used outside of a control group, it can be useful to include the label on the toggle.
        */
        prefixLabel: PropTypes.string,
        /**
        * Remove rounding from the left side of the toggle.
        */
        prepend: PropTypes.bool,
        /**
         * The container with which the popover must scroll to stay aligned with the anchor.
         */
        scrollContainer: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        /** The size of the toggle. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
        * Value will be matched to one of the children to deduce the label and/or icon for the
        * toggle.
        */
        value: PropTypes.any,
    };

    static defaultProps = {
        animateLoading: false,
        appearance: 'default',
        append: false,
        children: [],
        disabled: false,
        error: false,
        filter: false,
        inline: true,
        isLoadingOptions: false,
        menuStyle: {},
        noOptionsMessage: _('No matches'),
        onFilterChange: noop,
        onChange: noop,
        placeholder: _('Select...'),
        prepend: false,
        scrollContainer: 'window',
        size: 'medium',
    };

    static Option = Option;

    static Divider = ResultsMenu.Divider;
    static Heading = ResultsMenu.Heading;

    static validateAppearance(props) {
        if (__DEV__ && props.appearance === 'link') {
            if (props.error) {
                invariant('The link appearance does not support error');
            }

            if (props.append) {
                invariant('The link appearance does not support append');
            }

            if (props.prepend) {
                invariant('The link appearance does not support prepend');
            }

            if (props.size !== 'medium') {
                invariant('The link appearance does not support size');
            }
        }
    }

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        this.state = {
            value: props.defaultValue || '',
            open: false,
            filterKeyword: this.props.filter ? '' : null,
            activeIndex: 0,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('Select defaultValue prop is not compatible with value prop.');
        }

        if (__DEV__ && this.isControlled() && props.onChange === noop) {
            invariant(`Select onChange prop is required. This must update the value prop
                to retain user input.`);
        }

        Select.validateAppearance(props);
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change Select from an uncontrolled component to a controlled
                one. Prop 'value' is not valid in subsequent updates if not provided in the initial
                props.`);
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            invariant('Cannot change Select defaultValue after set.');
        }

        Select.validateAppearance(nextProps);
    }

    getCurrentValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleActiveOptionMount = (comp) => {
        if (comp) {
            comp.scrollIntoViewIfNeeded();
        }
    }

    handleTextKeyDown = (e) => {
        if (keycode(e) === 'tab') {
            e.preventDefault();
            return;
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

        if (keycode(e) === 'enter' && this.activeValue) {
            e.preventDefault();
            this.selectValue(e, { value: this.activeValue });
        }
    }

    handleTextChange = (e, data) => {
        e.preventDefault();

        this.setState({
            activeIndex: 0,
            filterKeyword: data.value,
            open: true,
        });

        this.props.onFilterChange(e, { keyword: data.value });
    }

    handleTextKeyUp = (e) => {
        if (keycode(e) === 'tab') {
            e.preventDefault();
        }
    }

    /**
    * Place focus on the toggle.
    */
    focus() {
        if (this.dropdown) {
            this.dropdown.focus();
        }
    }

    handleItemClick = (e, { value }) => {
        this.selectValue(e, { value });
    }

    handleRequestOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
            filterKeyword: '',
            activeIndex: 0,
        });
    }

    selectValue(e, { value }) {
        if (!this.isControlled()) {
            this.setState({ value });
        }

        this.handleRequestClose();

        this.focus();

        if (this.getCurrentValue() !== value) {
            this.props.onChange(e, { value });
        }
    }

    filterChildren = (items, keyword) => {
        const filtered = filterUtil.filterByKeywords(items, keyword, (item) => {
            if (item.props && item.props.label) {
                return item.props.label;
            }
            return null;
        });
        return filtered;
    };

    // Setup Filter
    renderFilter() {
        /* eslint-disable jsx-a11y/tabindex-no-positive */
        return this.props.filter ? (
            <div
                key="filter"
                className={css.filter}
                data-placement={this.props.placement}
            >
                <Text
                    value={this.state.filterKeyword}
                    appearance="search"
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleTextKeyDown}
                    onKeyUp={this.handleTextKeyUp}
                    placeholder={_('filter')}
                    tabIndex={1}
                />
            </div>
        ) : null;
        /* eslint-enable jsx-a11y/tabindex-no-positive */
    }

    render() {
        const {
            appearance,
            children,
            className,
            describedBy,
            disabled,
            error,
            filter,
            inline,
            isLoadingOptions,
            menuStyle,
            placeholder,
            scrollContainer,
        } = this.props;

        const { filterKeyword, open } = this.state;

        let label;
        let icon;
        const childrenCleaned = Children.toArray(children)
            .filter(isValidElement)
            .map((item) => {
                if (!item.props || !has(item.props, 'value')) { // ignore Headings and Dividers
                    return item;
                }

                const selected = item.props.value === this.getCurrentValue();

                // If selected, set up the label and icon for the toggle button.
                if (selected) {
                    label = has(item.props, 'label') ? item.props.label : item.props.value;
                    icon = item.props.icon;
                    if (this.props.prefixLabel) {
                        label = `${this.props.prefixLabel}: ${label}`;
                    }
                }

                if (item.props.hidden) {
                    return null;
                }

                return cloneElement(item, {
                    selected,
                    selectable: true,
                });
            });

        const childrenFiltered = filterKeyword && filter === true && childrenCleaned ?
            this.filterChildren(childrenCleaned, filterKeyword) : childrenCleaned;

        // Setup Children
        const childrenCloned = Children.map(childrenFiltered, (item, i) => {
            const clonedItem = cloneElement(item, {
                key: item.key || i,
                onClick: has(item.props, 'value') ? this.handleItemClick : undefined,
            });
            return clonedItem;
        });

        // Hightlight Active
        this.availableOptionCount = 0;
        this.activeValue = undefined;

        const highlightActive = (item) => {
            if (!has(item.props, 'active')) { // ignore Headings and Dividers
                return item;
            }

            const active = this.availableOptionCount === this.state.activeIndex;
            this.availableOptionCount += 1;

            if (!active) {
                return item;
            }
            if (!item.props.disabled) {
                this.activeValue = item.props.value;
            }

            return cloneElement(item, {
                ref: this.handleActiveOptionMount,
                active: true,
            });
        };
        const finalChildren = filter ? Children.map(childrenCloned, highlightActive)
             : childrenCloned;


        const toggle = appearance === 'link' ?
            (<Link
                label={label || placeholder}
                disabled={disabled}
            >
                {!!icon && <span className={css.linkIcon}>{icon}</span>}
                {label || placeholder}
                <span className={css.linkCaret}><Caret screenReaderText={null} /></span>
            </Link>)
            :
            (<Button
                error={error}
                icon={icon}
                inline={false}
                isMenu
                label={label || placeholder}
                {...pick(this.props, 'appearance', 'append', 'disabled', 'prepend', 'size')}
            />);

        const createMenu = ({ anchorWidth, maxHeight, placement }) => (
            <ResultsMenu
                childrenStart={this.renderFilter()}
                maxHeight={maxHeight}
                placement={placement}
                isLoading={isLoadingOptions}
                {...pick(this.props, 'noOptionsMessage',
                    'footerMessage', 'animateLoading', 'loadingMessage')}
                style={{
                    minWidth: isIE11() && anchorWidth < 300 ? 300 : anchorWidth,
                    maxWidth: Math.max(anchorWidth, 300),
                    ...menuStyle,
                }}
            >
                {finalChildren}
            </ResultsMenu>
        );

        return (
            <Dropdown
                toggle={toggle}
                inline={appearance === 'link' || inline}
                open={open}
                retainFocus={!filter}
                className={toClassName(css.main, className)}
                closeReasons={['clickAway', 'escapeKey', 'offScreen', 'toggleClick']}
                onRequestClose={this.handleRequestClose}
                onRequestOpen={this.handleRequestOpen}
                aria-describedby={describedBy}
                data-select-appearance={appearance}
                defaultPlacement={filter ? 'vertical' : undefined}
                canCoverAnchor={window.innerHeight < 500}
                ref={c => this.dropdown = c}
                scrollContainer={scrollContainer}
                {...createTestHook(__filename)}
                {...omit(this.props, Object.keys(Select.propTypes))}
            >
                {createMenu}
            </Dropdown>
        );
    }
}

export default Select;
