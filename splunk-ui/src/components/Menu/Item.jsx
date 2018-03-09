import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { invariant } from 'splunk-ui/util/errorHandling';
import { _ } from 'splunk-ui/util/i18n';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Clickable from 'splunk-ui/components/Clickable';
import Check from 'splunk-ui/icons/Check';
import ChevronRight from 'splunk-ui/icons/ChevronRight';
import css from './Item.css';

class Item extends Component {
    static propTypes = {
        /**
         * Active shows a temporary selected state similar to focus. This is used when filtering the
         * menu items in Multiselect, Select and ComboBox and navigating with arrows.
         */
        active: PropTypes.bool,
        /** @docs-ignore */
        children: PropTypes.any,
        /** @docs-ignore */
        className: PropTypes.string,
        /**
        * Additional information to explain the option, such as "Recommended".
        */
        description: PropTypes.string,
        /**
        * The description text may appear to the right of the label or under the label.
        */
        descriptionPosition: PropTypes.oneOf(['right', 'bottom']),
        /**
        * If disabled=true, the item is grayed out and cannot be clicked.
        */
        disabled: PropTypes.bool,
        /**
        * And icon to the right to show there is a submenu.
        */
        hasSubmenu: PropTypes.bool,
        /**
        * An icon to insert before the label.
        */
        icon: PropTypes.node,
        /**
        * The text to show for the item.
        */
        label: PropTypes.string.isRequired,
        /**
        * Callback for click events.
        */
        onClick: PropTypes.func,
        /**
        * To open the link in a new window, set openInNewContext to true. An icon will be added
        * indicating the the behavior.
        */
        openInNewContext: PropTypes.bool,
        /**
        * If selectable is true, whitespace will be left where the checkmark can be shown.
        */
        selectable: PropTypes.bool,
        /**
        * If selectable is true, whitespace will be left where the checkmark can be shown.
        */
        selectableAppearance: PropTypes.oneOf(['checkmark', 'checkbox']),
        /**
        * If selected is true, a checkmark will show the item is selected.
        */
        selected: PropTypes.bool,
        /* A url or path to link to.  */
        to: PropTypes.string,
        /**
        * If truncate=false, wrapping will be disabled and any additional text will be ellipsised.
        */
        truncate: PropTypes.bool,
    }

    static defaultProps = {
        active: false,
        descriptionPosition: 'bottom',
        disabled: false,
        hasSubmenu: false,
        openInNewContext: false,
        selectable: false,
        selectableAppearance: 'checkmark',
        selected: false,
        truncate: false,
    }

    static validateProps(props) {
        if (__DEV__ && props.truncate && props.descriptionPosition === 'right') {
            invariant('truncate is not compatible with descriptions on the right');
        }
    }

    constructor(props, ...rest) {
        super(props, ...rest);

        Item.validateProps(props);
    }

    componentWillReceiveProps(nextProps) {
        Item.validateProps(nextProps);
    }

    scrollIntoViewIfNeeded() {
        const parentEl = this.el.offsetParent;
        if (!parentEl) return;

        // Below the bottom of the container.
        if (parentEl.scrollTop + parentEl.clientHeight < this.el.offsetTop + this.el.clientHeight) {
            parentEl.scrollTop = (this.el.offsetTop + this.el.clientHeight) - parentEl.clientHeight;

        // Above the top of the container.
        } else if (parentEl.scrollTop > this.el.offsetTop) {
            parentEl.scrollTop = this.el.offsetTop;
        }
    }

    render() {
        const {
            active,
            children,
            className,
            hasSubmenu,
            selectable,
            selectableAppearance,
            selected,
            icon,
            description,
            disabled,
            label,
            onClick,
            to,
            truncate,
            descriptionPosition,
            openInNewContext,
            ...other
        } = this.props;

        return (
            <li
                className={css.item}
                ref={el => this.el = el}
                {...createTestHook(__filename)}
                {...other}
            >
                <Clickable
                    className={toClassName(css.link, className)}
                    data-selectable={selectable || selected}
                    data-selectable-appearance={selectableAppearance}
                    data-selected={selected}
                    data-has-icon={!!icon}
                    data-truncation={truncate}
                    data-active={active ? true : null}
                    disabled={disabled}
                    onClick={onClick}
                    to={to}
                    title={truncate ? this.props.label : null}
                    openInNewContext={openInNewContext}
                >
                    {selected && selectableAppearance === 'checkmark' && (
                        <div className={css.itemSelectedIcon}>
                            <Check screenReaderText={_('Selected')} size={0.85} />
                        </div>
                    )}
                    {selectable && selectableAppearance === 'checkbox' && (
                        <div className={css.itemCheckbox}>
                            {selected && (
                                <Check
                                    screenReaderText={_('Selected')}
                                    inline={false}
                                    size={0.85}
                                />
                            )}
                        </div>
                    )}
                    {hasSubmenu && (
                        <span className={css.submenu}>
                            <ChevronRight />
                        </span>
                    )}
                    {description && descriptionPosition === 'right' && (
                        <span className={css.itemDescriptionRight}>
                            {description}
                        </span>
                    )}
                    <span className={css.label}>
                        {icon && (
                            <span className={css.itemIcon}>
                                {icon}
                            </span>
                        )}
                        {label}
                        {children}
                    </span>
                    {description && descriptionPosition === 'bottom' && (
                        <span className={css.itemDescriptionBottom}>
                            {description}
                        </span>
                    )}
                </Clickable>
            </li>
        );
    }
}
export default Item;
