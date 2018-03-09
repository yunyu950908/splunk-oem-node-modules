import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, noop, omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import ModalLayer from 'splunk-ui/components/ModalLayer';
import TransitionOpen from 'splunk-ui/components/TransitionOpen';

import css from './SidePanel.css';

const animationMap = {
    left: 'slideFromLeft',
    right: 'slideFromRight',
    top: 'slideFromTop',
    bottom: 'slideFromBottom',
};

class SidePanel extends Component {
    static propTypes = {
        /**
         * The position of the panel on the screen.
         */
        dockPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        /**
         * The inner element can control the width of the side bar when placed left or right, and
         * the height when placed top or bottom.
         */
        innerClassName: PropTypes.string,
        /**
         * The inner element can control the width of the side bar when placed left or right, and
         * the height when placed top or bottom.
         */
        innerStyle: PropTypes.object,
        /**
         * A function that will be called when a close event occurs. The callback will be passed a
         * reason and the event.
         *
         * Generally, this callback should be used to togle the `open` prop.
         */
        onRequestClose: PropTypes.func,
        /**
         * Indicates the current open state of the panel.
         */
        open: PropTypes.bool,
        /**
         * The outer element grows to the width of the side bar when placed left or right, or
         * the height when placed top or bottom. It has minimal styles:
         * a white background and a box shadow. Adding styles to this container
         * could be useful when the sidebar should be shorter than the width or height of the page,
         * or multiple sidebars are shown.
         */
        outerClassName: PropTypes.string,
        /**
         * The outer element grows to the width of the side bar when placed left or right, or
         * the height when placed top or bottom. It has minimal styles:
         * a white background and a box shadow. Adding styles to this container
         * could be useful when the sidebar should be shorter than the width or height of the page,
         * or multiple sidebars are shown.
         */
        outerStyle: PropTypes.object,
        /**
         * Indicates whether to add an overlay mask on the whole page, blocking other interactions
         * while the panel is open.
         */
        useLayerForClickAway: PropTypes.bool,
    };

    static defaultProps = {
        open: false,
        dockPosition: 'right',
        onRequestClose: noop,
        useLayerForClickAway: true,
    };

    renderModal = () => {
        const {
            children,
            dockPosition,
            innerClassName,
            innerStyle,
            outerClassName,
            outerStyle,
        } = this.props;

        return (
            <TransitionOpen
                animation={animationMap[dockPosition]}
                animateOnMount
                innerClassName={toClassName(css[`${dockPosition}Inner`], innerClassName)}
                innerStyle={innerStyle}
                open={this.props.open}
                outerClassName={toClassName(css[`${dockPosition}Panel`], outerClassName)}
                outerStyle={outerStyle}
                retainFocus
                role="dialog"
                takeFocus
                tabIndex={-1}
                {...createTestHook(__filename)}
                {...omit(this.props, keys(SidePanel.propTypes))}
            >
                {children}
            </TransitionOpen>
        );
    };

    render() {
        const { open, onRequestClose, useLayerForClickAway } = this.props;
        return (
            <ModalLayer
                open={open}
                onRequestClose={onRequestClose}
                renderModal={this.renderModal}
                useLayerForClickAway={useLayerForClickAway}
            />
        );
    }
}

export default SidePanel;
