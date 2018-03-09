import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { delay } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Heading from './Heading';
import css from './Concertina.css';

function noop() {}

class Panel extends Component {
    static propTypes = {
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /** Content to place to the right of the title */
        description: PropTypes.node,
        /** @docs-ignore */
        onHeadingClick: PropTypes.func,
        /** @docs-ignore */
        onChange: PropTypes.func,
        /** @docs-ignore */
        panelId: PropTypes.number,
        /** @docs-ignore */
        style: PropTypes.object,
        /** The panel can be in an warning or error state. */
        status: PropTypes.oneOf(['normal', 'warning', 'error']),
        /**
         * The content of this Panel's title bar.
         */
        title: PropTypes.node.isRequired,
    };

    static defaultProps = {
        onHeadingClick: noop,
        onChange: noop,
        status: 'normal',
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {};
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.children !== prevProps.children || !prevState.containerEl) {
            this.measureHeight();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    delayUpdate() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = delay(this.measureHeight, 300);
    }

    measureHeight = (e) => {
        this.delayUpdate();

        if (!this.state.containerEl) {
            return;
        }

        const newHeight = this.state.containerEl.clientHeight;

        if (newHeight === this.lastHeight) {
            return;
        }

        const data = {
            id: this.props.panelId,
            height: this.state.containerEl.offsetHeight,
            headingHeight: this.state.containerEl.offsetHeight - this.state.bodyEl.offsetHeight,
        };

        this.lastHeight = newHeight;

        this.props.onChange(e, data);
    }

    focus() {
        this.state.heading.focus();
    }

    handleMount = (containerEl) => {
        this.setState({ containerEl });
    }

    handleHeadingMount = (heading) => {
        this.setState({ heading });
    }

    handleBodyMount = (bodyEl) => {
        this.setState({ bodyEl });
    }

    render() {
        const {
            children,
            className,
            description,
            onHeadingClick,
            onChange, // eslint-disable-line no-unused-vars
            panelId,
            status,
            style,
            title,
            ...otherProps
        } = this.props;

        return (
            <div
                className={toClassName(css.panel, className)}
                ref={this.handleMount}
                data-status={status}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                <Heading
                    onClick={onHeadingClick}
                    ref={this.handleHeadingMount}
                    description={description}
                    panelId={panelId}
                    position="inner"
                    data-status={status === 'normal' ? null : status}
                >
                    {title}
                </Heading>
                <EventListener
                    target={window}
                    onResize={this.measureHeight}
                />
                <div className={css.bodyEl} style={style} ref={this.handleBodyMount} >
                    {children}
                </div>
            </div>
        );
    }
}

export default Panel;
