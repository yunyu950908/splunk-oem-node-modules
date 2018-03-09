import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, noop } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Link from 'splunk-ui/components/Link';
import Popover from 'splunk-ui/components/Popover';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';
import css from './Tooltip.css';

/**
 * The Tooltip component wraps arbitrary content to be displayed when the target element is hovered
 * or focused.
 */
class Tooltip extends Component {
    static propTypes = {
       /**
        * Provide children to replace the default superscript question mark.
        * For accessibility, ensure the child can take focus.
        */
        children: PropTypes.node,
       /** @docs-ignore. */
        className: PropTypes.string,
       /**
        * The content of the tooltip.
        */
        content: PropTypes.node.isRequired,
        /**
         * The default placement of the `Tooltip`. It may render in a different location if there is
         * not enough space in the default direction.
         */
        defaultPlacement: PropTypes.oneOf(['above', 'below', 'left', 'right']),
       /**
        * Set inline to false when adding a tooltip to a block element.
        */
        inline: PropTypes.bool,
       /**
        * Callback function fired when the popover is requested to be closed.
        *
        * @param {event} event
        * @param {object} data
        * @param {string} data.reason The reason for the close request.
        */
        onRequestClose: PropTypes.func,
       /**
        * Callback function fired when the popover is requested to be opened.
        *
        * @param {event} event
        * @param {object} data
        * @param {string} data.reason The reason for the open request.
        */
        onRequestOpen: PropTypes.func,
       /**
        * Whether or not the tooltip is shown. Setting this value makes the property controlled.
        * The onRequestClose and onRequestOpen callbacks are usually used .
        */
        open: PropTypes.bool,
    };

    static defaultProps = {
        defaultPlacement: 'above',
        inline: true,
        onRequestClose: noop,
        onRequestOpen: noop,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'open');

        this.state = {
            open: false,
            anchor: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'open')) {
            invariant(`Cannot change Tooltip from an uncontrolled component to a controlled
                one. Prop 'open' is not valid in subsequent updates if not provided in the initial
                props.`);
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleMount = (el) => {
        this.setState({
            anchor: el,
        });
    }

    handleRequestOpen(e, data) {
        if (!this.isControlled()) {
            this.setState({
                open: true,
            });
        }
        this.props.onRequestOpen(e, data);
    }

    handleRequestClose(e, data) {
        if (!this.isControlled()) {
            this.setState({
                open: false,
            });
        }

        this.props.onRequestClose(e, data);
    }

    handleMouseEnter = (e) => {
        this.handleRequestOpen(e, { reason: 'mouseEnterToggle' });
    }

    handleFocus = (e) => {
        this.handleRequestOpen(e, { reason: 'focusToggle' });
    }

    handleMouseLeave = (e) => {
        this.handleRequestClose(e, { reason: 'mouseLeaveToggle' });
    }

    handleBlur = (e) => {
        this.handleRequestClose(e, { reason: 'blurToggle' });
    }

    render() {
        const {
            children,
            className,
            content,
            inline,
            onRequestClose, // eslint-disable-line no-unused-vars
            onRequestOpen, // eslint-disable-line no-unused-vars
            open,
            defaultPlacement,
            ...otherProps
        } = this.props;
        const { anchor } = this.state;

        return (
            <span
                className={toClassName(inline ? css.inline : css.main, className)}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                <span
                    className={inline ? css.toggleInline : css.toggle}
                    onFocus={this.handleFocus}
                    onMouseEnter={this.handleMouseEnter}
                    onBlur={this.handleBlur}
                    onMouseLeave={this.handleMouseLeave}
                    ref={this.handleMount}
                    data-tooltip-role="toggle"
                >
                    {children || (
                        <Link
                            className={css.link}
                            aria-hidden="true"
                        >
                            ?
                        </Link>
                    )}
                    <ScreenReaderContent>{content}</ScreenReaderContent>
                </span>
                <Popover
                    anchor={anchor}
                    appearance="dark"
                    closeReasons={[]}
                    defaultPlacement={defaultPlacement}
                    open={!!anchor && this.isControlled() ? open : this.state.open}
                >
                    <div className={css.content}>{content}</div>
                </Popover>
            </span>
        );
    }
}
export default Tooltip;
