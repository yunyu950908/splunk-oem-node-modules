// Originally adapted from:
// https://github.com/callemall/material-ui/blob/master/src/internal/RenderToLayer.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { unstable_renderSubtreeIntoContainer, unmountComponentAtNode } from 'react-dom'; // eslint-disable-line
import EventListener from 'react-event-listener';
import { includes, last, noop, remove } from 'lodash';
import { keycode } from 'splunk-ui/util/keyboard';

// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
class RenderToLayer extends Component {
    static possibleCloseReasons = [
        'escapeKey',
        'clickAway',
    ];

    static propTypes = {
        closeReasons: PropTypes.arrayOf(PropTypes.oneOf(RenderToLayer.possibleCloseReasons)),
        /**
         * Invoked when a potential close event occurs. The function is passed a data object
         * containing the event and a reason. Possible reasons are `escapeKey` and `clickAway`.
         */
        onRequestClose: PropTypes.func,
        /**
         * Whether the component is currently open.
         */
        open: PropTypes.bool,
        /**
         * The render function for the detached sub-tree.
         */
        render: PropTypes.func.isRequired,
        /**
         * Whether to use a div layer to catch clickAway events. Otherwise, the window is used.
         */
        useLayerForClickAway: PropTypes.bool,
    };

    static defaultProps = {
        closeReasons: RenderToLayer.possibleCloseReasons,
        onRequestClose: noop,
        open: false,
        useLayerForClickAway: true,
    };

    /**
     * @private
     * RenderToLayer.instanceStack keeps track of the current instances of RenderToLayer. This is
     * used by RenderToLayer#handleKeyDown to determine if the escapeKey event should be handled by
     * the current instance. Only the topmost RenderToLayer instance should honor the escapeKey.
     */
    static instanceStack = [];

    componentDidMount() {
        this.renderLayer();
    }

    componentDidUpdate() {
        this.renderLayer();
    }

    componentWillUnmount() {
        this.unrenderLayer();
    }

    onClickLayer = (event) => {
        this.layerClickEvent = event;
    }

    onClickAway = (event) => {
        // clicks inside the layer should not be considered clickAways
        if (!this.props.open || !includes(this.props.closeReasons, 'clickAway')) {
            return;
        }

        // when useLayerForClickAway, ignore events not directly on the layer.
        if (this.props.useLayerForClickAway && event.target !== this.layer) {
            return;
        }

        if (!this.props.useLayerForClickAway) {
            // ignore events bubbling through this or higher layers
            const thisIndex = RenderToLayer.instanceStack.indexOf(this);
            const topLayers = RenderToLayer.instanceStack.slice(thisIndex);
            const caughtEvents = topLayers.map(layer => layer.layerClickEvent);
            if (caughtEvents.indexOf(event) >= 0) {
                return;
            }
        }

        this.props.onRequestClose({ event, reason: 'clickAway' });
    }

    handleKeyDown = (event) => {
        if (this.props.open &&
            keycode(event) === 'esc' &&
            last(RenderToLayer.instanceStack) === this &&
            includes(this.props.closeReasons, 'escapeKey')
        ) {
            this.props.onRequestClose({ event, reason: 'escapeKey' });
        }
    }

    unrenderLayer() {
        window.clearTimeout(this.addListenersTimeout);
        window.clearTimeout(this.pushToStackTimeout);
        remove(RenderToLayer.instanceStack, this);
        if (!this.layer) {
            return;
        }

        if (this.props.useLayerForClickAway) {
            this.layer.style.position = 'relative';
            this.layer.removeEventListener('touchstart', this.onClickAway);
            this.layer.removeEventListener('click', this.onClickAway);
        } else {
            this.layer.removeEventListener('click', this.onClickLayer);
            window.removeEventListener('touchstart', this.onClickAway);
            window.removeEventListener('click', this.onClickAway);
        }

        unmountComponentAtNode(this.layer);
        document.body.removeChild(this.layer);
        this.layer = null;
    }

    /**
     * By calling this method in componentDidMount() and
     * componentDidUpdate(), you're effectively creating a "wormhole" that
     * funnels React's hierarchical updates through to a DOM node on an
     * entirely different part of the page.
     */
    renderLayer() {
        const {
            closeReasons,
            open,
            render,
        } = this.props;
        if (open) {
            if (!this.layer) {
                this.layer = document.createElement('div');
                document.body.appendChild(this.layer);
                if (closeReasons.length) {
                    RenderToLayer.instanceStack.push(this);
                }
                if (this.props.useLayerForClickAway) {
                    this.layer.addEventListener('touchstart', this.onClickAway);
                    this.layer.addEventListener('click', this.onClickAway);
                    this.layer.style.position = 'fixed';
                    this.layer.style.top = 0;
                    this.layer.style.bottom = 0;
                    this.layer.style.left = 0;
                    this.layer.style.right = 0;
                } else {
                    this.addListenersTimeout = setTimeout(() => {
                        this.layer.addEventListener('click', this.onClickLayer);
                        window.addEventListener('touchstart', this.onClickAway);
                        window.addEventListener('click', this.onClickAway);
                    }, 0);
                }
            }

            const layerElement = render();
            this.layerElement = unstable_renderSubtreeIntoContainer(this, layerElement, this.layer);
        } else {
            this.unrenderLayer();
        }
    }

    render() {
        return (
            <EventListener
                target="window"
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

export default RenderToLayer;
