import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { has, isFinite, noop } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Inner from './Inner';
import css from './Scroll.css';

class Scroll extends Component {
    static propTypes = {
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        component: PropTypes.string,
        /** A callback for when an animated update completes. Ensure the animate prop is set back to
         * false and return control to the user. */
        onScrollComplete: PropTypes.func,
        /** A callback for when the scroll position changes. */
        onScroll: PropTypes.func,
        /** prevent mouseWheel events from scrolling the page or other containers. 'window' only
        * stops the window from scrolling by removing the scroll bars, which has better performance
        * but can affect layout. */
        stopScrollPropagation: PropTypes.oneOf([true, false, 'window']),
    };

    static defaultProps = {
        component: 'div',
        onScroll: noop,
        onScrollComplete: noop,
        stopScrollPropagation: false,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            animating: false,
            currentLeft: 0,
            currentTop: 0,
            targetLeft: 0,
            targetTop: 0,
        };

        this.topControlledExternally = has(props, 'top');
        this.leftControlledExternally = has(props, 'left');
    }

    /** Get a reference to the container element. */
    getEl() {
        return this.inner.getEl();
    }

    /** Scroll to a specfic position.  */
    scrollTo({ left, top }) {
        const needsChange = (isFinite(left) && left !== this.state.currentLeft) ||
            (isFinite(top) && top !== this.state.currentTop);

        if (!needsChange) {
            return;
        }

        this.setState({
            animating: true,
            targetLeft: left,
            targetTop: top,
        });
    }

    handleMount = (inner) => {
        this.inner = inner;
    }

    handleRest = () => {
        this.setState({
            animating: false,
            targetLeft: undefined,
            targetTop: undefined,
        });

        this.props.onScrollComplete();
    }

    handleScroll = (e) => {
        this.setState({
            currentLeft: e.currentTarget.scrollLeft,
            currentTop: e.currentTarget.scrollTop,
        });

        this.props.onScroll(e);
    }

    renderInner = ({ left, top }) => {
        const {
            children,
            className,
            onScrollComplete, // eslint-disable-line no-unused-vars
            ...otherProps
        } = this.props;

        const { animating } = this.state;

        return (
            <Inner
                {...createTestHook(__filename)}
                {...otherProps}
                className={toClassName(css.main, className)}
                key="inner"
                top={animating ? top : undefined}
                left={animating ? left : undefined}
                ref={this.handleMount}
                onScroll={this.handleScroll}
            >
                {children}
            </Inner>
        );
    }

    render() {
        const targetStyle = {};

        if (this.state.animating && isFinite(this.state.targetLeft)) {
            targetStyle.left = spring(this.state.targetLeft, { precision: 10 });
        } else {
            targetStyle.left = this.state.currentLeft;
        }
        if (this.state.animating && isFinite(this.state.targetTop)) {
            targetStyle.top = spring(this.state.targetTop, { precision: 10 });
        } else {
            targetStyle.top = this.state.currentTop;
        }

        return (
            <Motion
                defaultStyle={{ left: 0, top: 0 }}
                style={targetStyle}
                onRest={this.handleRest}
            >
                {this.renderInner}
            </Motion>
        );
    }
}

export default Scroll;
