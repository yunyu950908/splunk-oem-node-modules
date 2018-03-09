import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit, noop } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Panel.css';

/**
 * Container for arbitrary content.
 */
class Panel extends Component {
    static propTypes = {
        /** @docs-ignore. */
        className: PropTypes.string,
        /**
         * A unique id for this panel and used by the SlidingPanels to keep track of the open panel.
         */
        panelId: PropTypes.any.isRequired,
        /**
         * @docs-ignore.
         * Used internally, func passed in from outer place will be overwritten
         * by SlidingPanels during rendering
         */
        onMount: PropTypes.func,
        /**
         * @docs-ignore.
         * Used internally, func passed in from outer place will be overwritten
         * by SlidingPanels during rendering
         */
        onUnmount: PropTypes.func,

    }

    static defaultProps = {
        onMount: noop,
        onUnmount: noop,
    }

    componentDidMount() {
        this.props.onMount(this);
    }

    componentWillUnmount() {
        this.props.onUnmount(this);
    }

    getEl() {
        return this.el;
    }

    getHeight() {
        return this.el.clientHeight;
    }

    getWidth() {
        return this.el.clientWidth;
    }

    render() {
        const { className, panelId } = this.props;
        return (
            <div
                className={toClassName(css.main, className)}
                data-panel-id={panelId}
                {...createTestHook(__filename)}
                {...omit(this.props, keys(Panel.propTypes))}
                ref={el => this.el = el}
            />
        );
    }
}

export default Panel;
