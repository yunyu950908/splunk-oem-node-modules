import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isFinite, keys, noop, omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Scroll.css';

class Inner extends Component {
    static propTypes = {
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        component: PropTypes.string,
        /** The scrollLeft to set on Mount .*/
        defaultLeft: PropTypes.number,
        /** The scrollTop to set on Mount. */
        defaultTop: PropTypes.number,
        /** If set, scroll to this position on update. If null, ignore.*/
        left: PropTypes.number,
        /** prevent mouseWheel events from scrolling the page or other containers. */
        stopScrollPropagation: PropTypes.oneOf([true, false, 'window']),
        /** A callback for when the scroll position changes. */
        onScroll: PropTypes.func,
        /** If set, scroll to this position on update. If null, ignore. */
        top: PropTypes.number,
    };

    static defaultProps = {
        component: 'div',
        defaultLeft: 0,
        defaultTop: 0,
        onScroll: noop,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {};
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.containerEl && !prevState.containerEl) {
            this.state.containerEl.scrollTop = this.props.defaultTop;
            this.state.containerEl.scrollLeft = this.props.defaultLeft;
        }

        if (isFinite(this.props.top)) {
            this.state.containerEl.scrollTop = this.props.top;
        }
        if (isFinite(this.props.left)) {
            this.state.containerEl.scrollLeft = this.props.left;
        }
    }

    /** get a reference to the container element */
    getEl() {
        return this.el;
    }

    handleWheel = (e) => {
        const el = this.state.containerEl;

        // if the element is scrollable in both directions, it's not safe to stop propagation.
        if (el.clientWidth !== el.scrollWidth && el.clientHeight !== el.scrollHeight) {
            return;
        }

        if (el.clientWidth !== el.scrollWidth) {
            if (e.deltaX < 0 && el.scrollLeft < Math.abs(e.deltaX)) {
                el.scrollLeft = 0;
                e.stopPropagation();
                e.preventDefault();
                return;
            }

            const maxLeft = el.scrollWidth - el.clientWidth;
            if (e.deltaX && e.deltaX + el.scrollLeft > maxLeft) {
                el.scrollLeft = maxLeft;
                e.stopPropagation();
                e.preventDefault();
            }
        }

        if (el.clientHeight !== el.scrollHeight) {
            if (e.deltaY < 0 && el.scrollTop < Math.abs(e.deltaY)) {
                el.scrollTop = 0;
                e.stopPropagation();
                e.preventDefault();
                return;
            }

            const maxTop = el.scrollHeight - el.clientHeight;
            if (e.deltaY && e.deltaY + el.scrollTop > maxTop) {
                el.scrollTop = maxTop;
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }

    handleMount = (containerEl) => {
        this.el = containerEl; // This must be set on this to be available to getEl() on Mount
        this.setState({ containerEl });
    }

    handleMouseEnter = () => {
        this.defaultWindowOverflowX = document.body.style.overflowX;
        this.defaultWindowOverflowY = document.body.style.overflowY;

        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'hidden';
    }

    handleMouseLeave = () => {
        document.body.style.overflowX = this.defaultWindowOverflowX;
        document.body.style.overflowY = this.defaultWindowOverflowY;
    }

    render() {
        const {
            children,
            className,
            onScroll,
            stopScrollPropagation,
        } = this.props;

        return (
            <this.props.component
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...omit(this.props, keys(Inner.propTypes))}
                ref={this.handleMount}
                onWheel={stopScrollPropagation === true && this.handleWheel}
                onMouseEnter={stopScrollPropagation === 'window' && this.handleMouseEnter}
                onMouseLeave={stopScrollPropagation === 'window' && this.handleMouseLeave}
                onScroll={onScroll}
            >
                {children}
            </this.props.component>
        );
    }
}

export default Inner;
