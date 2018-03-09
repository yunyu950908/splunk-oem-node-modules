import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Motion, TransitionMotion, spring } from 'react-motion';
import { keys, noop, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import toClassName from 'splunk-ui/util/toClassName';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Box from 'splunk-ui/components/Box';
import Panel from './Panel';
import css from './SlidingPanels.css';

class SlidingPanels extends Component {
    static propTypes = {
        activePanelId: PropTypes.any.isRequired,
        /** @docs-ignore. */
        children: PropTypes.node.isRequired,
        innerClassName: PropTypes.string,
        innerStyle: PropTypes.object,
        onAnimationEnd: PropTypes.func,
        outerClassName: PropTypes.string,
        outerStyle: PropTypes.object,
        transition: PropTypes.oneOf(['forward', 'backward']),
    };

    static defaultProps = {
        onAnimationEnd: noop,
        transition: 'forward',
    };

    static Panel = Panel;

    constructor(...args) {
        super(...args);
        this.state = {
            animating: false,
            height: null,
            width: null,
            slidingId: 0,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.activePanelId !== nextProps.activePanelId) {
            // instead of using panelId, assign each sliding event an id and
            // use it as the key to make sure new panelA will transit as expeced if
            // old panelA has not fully left yet
            this.setState({
                animating: true,
                panelLoading: true,
                slidingId: this.state.slidingId + 1,
            });
        }
    }

    panelInstances = {}

    willEnter = () => ({
        translateX: 1,
    })

    willLeave = () => ({
        translateX: spring(-1, { precision: 1 }),
    })

    handlePanelMount = (panel) => {
        this.panelInstances[panel.props.panelId] = panel;

        if (panel.props.panelId === this.props.activePanelId) {
            this.setState({
                activePanel: panel,
                panelLoading: false,
            });
        }
    }

    handlePanelUnmount = (panel) => {
        this.panelInstances[panel.props.panelId] = null;
    }

    handleAnimationEnd = () => {
        this.setState({
            animating: false,
        });
        this.props.onAnimationEnd();
    }

    renderPanel = (transitionStyle, idx, maxWidth) => {
        const {
            key,
            data: {
                currentPanel,
            },
            style: {
                translateX,
            },
        } = transitionStyle;
        const { transition } = this.props;

        const offset = translateX * maxWidth * (transition === 'forward' ? 1 : -1);
        const panelStyle = this.state.animating ? {
            transform: `translateX(${offset}px)`,
        } : {};

        return cloneElement(currentPanel, {
            className: toClassName(
                currentPanel.className,
                idx > 0 && css.comingPanel,
            ),
            key,
            style: { ...currentPanel.props.style, ...panelStyle },
            onMount: this.handlePanelMount,
            onUnmount: this.handlePanelUnmount,
        });
    }

    renderInnerContainer = (styles) => {
        const { innerClassName, innerStyle } = this.props;
        const maxWidth = styles
            .map((s) => {
                const currentPanel = this.panelInstances[s.data.currentPanel.props.panelId];
                return currentPanel ? currentPanel.getWidth() : 0;
            })
            .reduce((max, current) => Math.max(max, current), 0);
        return (
            <div style={innerStyle} className={innerClassName}>
                {styles.map((ts, idx) => this.renderPanel(ts, idx, maxWidth))}
            </div>
        );
    }

    renderOuterContainer = (interpolatedOuterStyle) => {
        const { activePanelId, children, outerClassName, outerStyle } = this.props;
        const { animating, slidingId } = this.state;
        const style = {
            ...outerStyle,
            ...(animating ? interpolatedOuterStyle : {}),
        };
        let currentPanel;
        Children.forEach(children, (child) => {
            if (isValidElement(child) && child.props.panelId === activePanelId) {
                currentPanel = child;
            }
        });
        if (__DEV__ && !currentPanel) {
            invariant(`Invalid \`activePanelId\` in \`SlidingPanels\`. \`activePanelId\` must match
                a \`Panel\`.`);
        }

        const transitionStyle = {
            key: slidingId.toString(16),
            data: {
                currentPanel,
            },
            style: {
                translateX: spring(0, { precision: 0.01 }),
            },
        };

        return (
            <Box
                className={toClassName(css.main, outerClassName)}
                style={style}
                {...createTestHook(__filename)}
                {...omit(this.props, keys(SlidingPanels.propTypes))}
            >
                <TransitionMotion
                    willEnter={this.willEnter}
                    willLeave={this.willLeave}
                    styles={[transitionStyle]}
                >
                    {this.renderInnerContainer}
                </TransitionMotion>
            </Box>
        );
    }

    render() {
        const { activePanel, panelLoading } = this.state;
        const width = activePanel ? activePanel.getWidth() : null;
        const height = activePanel ? activePanel.getHeight() : null;

        // When a new panel is loading, the activePanel is about to be removed. The height and/or
        // width of that panel may have changed since the last render. To ensure that the next
        // panel animates from the current height and width (rather than the previously loaded one),
        // we must set the style with numbers that will not be interpolated.
        const style = panelLoading ? {
            width,
            height,
        } : {
            width: spring(width, { precision: 1 }),
            height: spring(height, { precision: 1 }),
        };

        return (
            <Motion
                style={style}
                onRest={this.handleAnimationEnd}
            >
                {this.renderOuterContainer}
            </Motion>
        );
    }
}

export default SlidingPanels;
