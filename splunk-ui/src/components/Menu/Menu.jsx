import React, { Children, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { getSortedTabableElements, handleTab } from 'splunk-ui/util/focus';
import { keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Scroll from 'splunk-ui/components/Scroll';
import Heading from './Heading';
import Item from './Item';
import Divider from './Divider';
import css from './Menu.css';

class Menu extends Component {
    static propTypes = {
        /**
         * `children` should be `Menu.Item`, `Menu.Heading`, or `Menu.Divider`.
         **/
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /**
         * Keep focus within the menu while navigating by keyboard. Tabbing from the last item
         * returns user to the first item.
         */
        retainFocus: PropTypes.bool,
        /**
         * Prevents scrolling from propogating to the parent container(s) when the top or bottom of
         * the `Menu` is reached.
         */
        stopScrollPropagation: PropTypes.bool,
    };

    static defaultProps = {
        retainFocus: true,
        stopScrollPropagation: false,
    };

    static Item = Item;
    static Divider = Divider;
    static Heading = Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {};

        this.handleMount = this.handleMount.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    getEl() {
        return this.state.containerEl;
    }

    handleMount(scrollContainer) {
        // TODO: consider adding methods to Scroll for this to avoid using findDOMNode.
        this.setState({ containerEl: findDOMNode(scrollContainer) });
    }

    handleKeyDown(e) {
        if (keycode(e) === 'tab' && this.props.retainFocus) {
            handleTab(this.state.containerEl, e);
            return;
        }

        if (keycode(e) !== 'down' && keycode(e) !== 'up') {
            return;
        }

        const tabbableElements = getSortedTabableElements(this.state.containerEl);
        const currentIndex = tabbableElements.indexOf(e.target);

        if (currentIndex === -1) {
            return;
        }

        if (keycode(e) === 'up' && currentIndex > 0) {
            tabbableElements[currentIndex - 1].focus();
        } else if (keycode(e) === 'down' && currentIndex < tabbableElements.length - 1) {
            tabbableElements[currentIndex + 1].focus();
        }
        e.preventDefault();
    }

    render() {
        const {
            children,
            className,
            retainFocus, // eslint-disable-line no-unused-vars
            stopScrollPropagation,
            ...otherProps
        } = this.props;

        const ComponentType = stopScrollPropagation ? Scroll : 'ul';
        const syntheticScrollProps = stopScrollPropagation ? {
            component: 'ul',
            stopScrollPropagation: true,
        } : {};


        const childrenCleaned = Children.toArray(children)
            .filter(isValidElement)
            .reduce((acc, item, index, original) => {
                /* Filter out initial Dividers
                 * Requires reduce() over filter() because a Heading may have been
                 * before the Divider.
                 */
                if (item.type.filterFirst && acc.length === 0) {
                    return acc;
                }

                // Filter out consecutive Dividers and Headings
                if (item.type.filterConsecutive
                    && original.length > (index + 1)
                    && original[index + 1].type.filterConsecutive) {
                    return acc;
                }

                // Filter out last Dividers and Headings
                if (item.type.filterLast && index === (original.length - 1)) {
                    return acc;
                }

                acc.push(item);
                return acc;
            }, []);

        return (
            <ComponentType
                className={toClassName(css.main, className)}
                ref={this.handleMount}
                onKeyDown={this.handleKeyDown}
                {...syntheticScrollProps}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {childrenCleaned}
            </ComponentType>
        );
    }

}

export default Menu;
