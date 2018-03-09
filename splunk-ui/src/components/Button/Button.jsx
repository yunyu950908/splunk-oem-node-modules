import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString, noop } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Clickable from 'splunk-ui/components/Clickable';
import Caret from 'splunk-ui/icons/Caret';
import css from './Button.css';

/**
* Button can be used for links to another page (<a href="page">) or clickable actions
* (<button>). Button will automatically select an appropriate tag.
*/
class Button extends Component {
    static propTypes = {
        /** Action is not normally used, but can be usefiul when composing or for testing. */
        action: PropTypes.string,
        /** Change the style of the button. */
        appearance: PropTypes.oneOf(['default', 'primary', 'pill']),
        /** Remove the right border and border-radius to allow things to append to the button. */
        append: PropTypes.bool,
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore An additional className to add to the button. */
        className: PropTypes.string,
        /** Add a disabled attribute and prevent clicking. */
        disabled: PropTypes.bool,
        /** Turn the button red. Consider the need for other indications of the error, such as a
         * text message, to meet accessibility requirements. */
        error: PropTypes.bool,
        /** The text shown on the button. */
        label: PropTypes.string,
        /** See Icon documention for more information. */
        icon: PropTypes.node,
        /**
        * Setting inline to false will remove the right margin and ensure the button
        * fills the width of it's container.
        */
        inline: PropTypes.bool,
        /** Show the chevron-down icon or appropriate menu indicator. */
        isMenu: PropTypes.bool,
        /** Callback will not be called when there the button is disabled. */
        onClick: PropTypes.func,
        /** Open  the 'to' link in a new tab. An icon will indicate as such */
        openInNewContext: PropTypes.bool,
        /** Remove the left border and border-radius to allow things to prepend to the button. */
        prepend: PropTypes.bool,
        /** Add the styles to appear selected. */
        selected: PropTypes.bool,
        /** The size of the button. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** A url for a link. If set, an <a> tag will be used instead of <button>. */
        to: PropTypes.string,
        /** Value is not normally used, but can be usefiul when composing in some cases. */
        value: PropTypes.any,
    };

    static defaultProps = {
        appearance: 'default',
        append: false,
        disabled: false,
        error: false,
        inline: true,
        isMenu: false,
        onClick: noop,
        openInNewContext: false,
        prepend: false,
        selected: false,
        size: 'medium',
    };

    /**
    * Place focus on the button.
    */
    focus() {
        this.component.focus();
    }

    handleClick = (e) => {
        const { label, icon, value, action, onClick } = this.props;
        onClick(e, { label, icon, value, action });
    }

    render() {
        const {
            action,
            appearance,
            append,
            className,
            error,
            icon,
            inline,
            isMenu,
            prepend,
            selected,
            size,
            value,
            ...otherProps
        } = this.props;

        let { children, label } = this.props;
        if (!label && isString(children)) {
            label = children;
            children = null;
        }

        return (
            <Clickable
                {...createTestHook(__filename)}
                {...otherProps}
                className={toClassName(css[appearance], className)}
                contentWrapperClassName={css.contentWrapper}
                data-action={action}
                data-appearance={appearance}
                data-append={append || null}
                data-inline={inline || null}
                data-prepend={prepend || null}
                data-selected={selected || null}
                data-is-menu={isMenu || null}
                aria-invalid={error || null}
                data-size={size}
                data-value={value}
                onClick={this.handleClick}
                ref={c => this.component = c}
                screenReaderContent={selected ? '(Selected)' : null}
            >
                {icon && <span className={css.icon}>{icon}</span>}
                {label && <span className={css.label}>{label}</span>}
                {children}
                {isMenu && <Caret screenReaderText={null} />}
            </Clickable>
        );
    }
}

export default Button;
