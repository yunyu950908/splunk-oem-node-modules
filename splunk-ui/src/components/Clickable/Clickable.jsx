import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import External from 'splunk-ui/icons/External';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';
import css from './Clickable.css';


/**
 * Clickable is a utility to abstract `<a>` and `<button>` tags. It is up to the implementer to
 * set styles for appropriate appearance, including focus and hover styles. It has several
 * accessibility, security, usability and developer convenience features:
 *
 * * A link can be disabled.
 * * Users can hold modifier keys to open links in a new window, even when clicks normally
 *   preventDefault.
 * * Links that open a new context (new tab) are always given a standard icon.
 * * Links that go to a different server and open a new context do not pass referrer information.
 * * Normalizes Firefox buttons styles.
 * * Screenreader content can be defined in a prop.
 */
class Clickable extends Component {
    static propTypes = {
        children: PropTypes.node,
        /** An additional className. */
        className: PropTypes.string,
        /**
        * In some cases it may be necessary to add a inner wrapper and className to the contents,
        * particularly to apply flex properties that cannot be applied to buttons.
        */
        contentWrapperClassName: PropTypes.string,
        /** Add a disabled attribute and prevent clicking. */
        disabled: PropTypes.bool,
        /** A class to set on the icon wrapper.  */
        newContextIconClassName: PropTypes.string,
        /** Open  the 'to' link in a new tab. An icon will indicate as such */
        openInNewContext: PropTypes.bool,
        /**
        * The onClick event handler will be ignored if ctrl or meta keys are pressed and
        * `to` is defined, which allows the link to open in a new context.
        */
        onClick: PropTypes.func,
        /** Text or elements to show to screen readers. */
        screenReaderContent: PropTypes.node,
        /**
         * A url for a link. If set and not disabled, an <a> tag will be used instead of <button>.
         */
        to: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        newContextIconClassName: css.newContext,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        if (__DEV__ && has(props, 'href')) {
            invariant('Use Clickable\'s "to" prop instead of "href".');
        }
    }

    /**
    * Place focus on the element.
    */
    focus() {
        this.el.focus();
    }

    handleOnClick = (e) => {
        // when user command-click on mac or ctrl-click on other platforms, and
        // Tag is an <a>, let the click pass through, let the <a> to achieve user's
        // intent of 'open in new context'
        // on mac, ctrl-click will be caught and open option menu even before hitting
        // the DOM, so we're safe to check both metaKey and ctrlKey here
        // without platform sniffing
        if ((e.metaKey || e.ctrlKey) && this.props.to) {
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {
            className,
            contentWrapperClassName,
            to,
            openInNewContext,
            newContextIconClassName,
            children,
            screenReaderContent,
            ...otherProps
        } = this.props;

        let Tag;

        // Only set the href attribute when enabled, and therefore using an <a> tag
        if (to && !otherProps.disabled) {
            Tag = 'a';
            otherProps.href = to;
        } else {
            Tag = 'button';
            otherProps.type = otherProps.type || 'button';
        }

        if (to && openInNewContext) {
            otherProps.target = '_blank';
            if (/^http/.test(to)) {
                otherProps.rel = 'noopener noreferrer';
            }
        }

        const externalIcon = openInNewContext && (
            <span className={newContextIconClassName}>
                <External size={0.8} style={{ verticalAlign: 'baseline' }} />
            </span>
        );
        return (
            <Tag
                className={toClassName(css.main, className)}
                ref={el => this.el = el}
                onClick={this.handleOnClick}
                {...createTestHook(__filename)}
                {...omit(otherProps, 'onClick')}
            >
                {contentWrapperClassName && (<span className={contentWrapperClassName}>
                    {children}
                    {externalIcon}
                </span>)}
                {!contentWrapperClassName && children}
                {!contentWrapperClassName && externalIcon}

                {screenReaderContent &&
                    (<ScreenReaderContent>{screenReaderContent}</ScreenReaderContent>)}
            </Tag>
        );
    }
}

export default Clickable;
