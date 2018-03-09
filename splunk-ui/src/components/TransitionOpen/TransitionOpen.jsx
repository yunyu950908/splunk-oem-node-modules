import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { keys, noop, omit } from 'lodash';
import { takeFocus, handleTab } from 'splunk-ui/util/focus';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './TransitionOpen.css';

class TransitionOpen extends Component {
    static propTypes = {
        animation: PropTypes.oneOf([
            'slideFromTop',
            'slideFromRight',
            'slideFromBottom',
            'slideFromLeft',
            'expandHeight',
            'expandWidth',
        ]),
        animateOnMount: PropTypes.bool,
        children: PropTypes.node,
        innerClassName: PropTypes.string,
        innerStyle: PropTypes.object,
        onAnimationEnd: PropTypes.func,
        /** Whether the component is currently open or not */
        open: PropTypes.bool,
        outerClassName: PropTypes.string,
        outerStyle: PropTypes.object,
        /**
         * Keep focus within `TransitionOpen` while open.
         */
        retainFocus: PropTypes.bool,
        /**
         * When true, the `TransitionOpen` will automatically take focus when 'open' changes to
         * true.
         */
        takeFocus: PropTypes.bool,
    };

    static defaultProps = {
        animation: 'expandHeight',
        animateOnMount: false,
        innerStyle: {},
        onAnimationEnd: noop,
        open: false,
        outerStyle: {},
        retainFocus: false,
        takeFocus: false,
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            value: null,
            animating: props.animateOnMount ? props.open : false,
            innerEl: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.open !== nextProps.open) {
            this.setState({
                animating: true,
            });
        }
    }

    handleMount = (el) => {
        const { animation } = this.props;
        let value;


        if (el) {
            if (this.props.takeFocus) {
                takeFocus(el, 'container');
            }

            switch (animation) {
                case 'slideFromTop':
                case 'slideFromBottom':
                case 'expandHeight':
                    value = el.clientHeight;
                    break;
                case 'slideFromLeft':
                case 'slideFromRight':
                case 'expandWidth':
                    value = el.clientWidth;
                    break;
                default:
                    // Intentionally left empty.
            }
        }
        this.setState({
            value,
            innerEl: el,
        });
    }

    handleRest = () => {
        this.setState({
            animating: false,
        });
        this.props.onAnimationEnd();
    }

    handleTab = (e) => {
        handleTab(this.state.innerEl, e);
    }

    internalRender = ({ value }) => {
        const {
            animation,
            children,
            innerClassName,
            innerStyle,
            open,
            outerClassName,
            outerStyle,
        } = this.props;
        const { animating } = this.state;
        const offset = this.state.value - value;
        const mainClassName = open && !animating ? css.open : css.notOpen;
        let transform;
        let dimension;

        if (animating) {
            switch (animation) {
                case 'slideFromTop':
                    transform = `translateY(-${offset}px)`;
                    dimension = 'height';
                    break;
                case 'slideFromBottom':
                    dimension = 'height';
                    break;
                case 'slideFromLeft':
                    transform = `translateX(${-offset}px)`;
                    dimension = 'width';
                    break;
                case 'slideFromRight':
                    dimension = 'width';
                    break;
                case 'expandHeight':
                    dimension = 'height';
                    break;
                case 'expandWidth':
                    dimension = 'width';
                    break;
                default:
                    // Intentionally left empty.
            }
        }

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <div
                className={toClassName(mainClassName, outerClassName)}
                {...createTestHook(__filename)}
                style={{ ...outerStyle, [dimension]: value }}
            >
                {(open || animating) && (
                    <div
                        {...omit(this.props, keys(TransitionOpen.propTypes))}
                        ref={this.handleMount}
                        tabIndex={-1}
                        className={toClassName(css.inner, innerClassName)}
                        onKeyDown={this.props.retainFocus ? this.handleTab : null}
                        style={{ ...innerStyle, transform }}
                    >
                        {children}
                    </div>
                )}
            </div>
        );
    }

    render() {
        const { open } = this.props;
        const { value } = this.state;
        return (
            <Motion
                onRest={this.handleRest}
                style={{ value: spring(open ? value : 0, { precision: 1 }) }}
            >
                {this.internalRender}
            </Motion>
        );
    }
}

export default TransitionOpen;
