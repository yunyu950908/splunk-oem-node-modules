import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, omit } from 'lodash';

import { Motion, spring } from 'react-motion';
import RenderToLayer from 'splunk-ui/components/RenderToLayer';

import css from './ModalLayer.css';

class ModalLayer extends Component {
    static propTypes = {
        /** @docs-ignore */
        className: PropTypes.string,
        /**
         * A function that returns a default style object for react-motion. The values will be
         * used as initial values.
         */
        getDefaultMotionStyle: PropTypes.func,
        /**
         * A function that returns a react-motion style object. The resulting interpolated style
         * will be passed to `renderModal`.
         */
        getMotionStyle: PropTypes.func,
        /**
         * A function that will be called when a close event occurs.
         * The callback will be passed a reason (either 'escapeKey' or 'clickAway') and the event
         */
        onRequestClose: PropTypes.func,
        /**
         * Function that renders the modal.
         * @param {Object} intepolatedStyle - The current style object as interpolated by
         * react-motion.
         * @return {PropTypes.node}
         */
        renderModal: PropTypes.func.isRequired,
        /**
         * Indicates whether to add an overlay mask on the whole page, blocking other interactions
         * while the Modal is open.
         */
        useLayerForClickAway: PropTypes.bool,
        /**
         * Indicates whether the modal is currently open.
         */
        open: PropTypes.bool,
    };

    static defaultProps = {
        getDefaultMotionStyle: () => ({}),
        open: false,
        renderModal: noop,
        useLayerForClickAway: true,
        getMotionStyle: () => ({}),
        onRequestClose: noop,
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            animating: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.open !== nextProps.open) {
            this.setState({
                animating: true,
            });
        }
    }

    handleClickAway = (event) => {
        this.props.onRequestClose({ reason: 'clickAway', event });
    }

    handleAnimationEnd = () => {
        this.setState({
            animating: false,
        });
    }

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    renderLayer = () => {
        const {
            getMotionStyle,
            getDefaultMotionStyle,
            renderModal,
            useLayerForClickAway,
        } = this.props;
        const open = this.props.open || this.state.animating;
        return (
            <Motion
                defaultStyle={{
                    ...getDefaultMotionStyle(),
                    overlayOpacity: 0,
                }}
                style={{
                    ...getMotionStyle(),
                    overlayOpacity: spring(this.props.open ? 1 : 0, { precision: 1 }),
                }}
                onRest={this.handleAnimationEnd}
            >
                {intepolatedStyle => (
                    <div>
                        {renderModal(omit(intepolatedStyle, 'overlayOpacity'))}
                        {open && useLayerForClickAway && (
                            <div
                                className={css.overlay}
                                onClick={this.handleClickAway}
                                style={{ opacity: intepolatedStyle.overlayOpacity }}
                            />
                        )}
                    </div>
                )}
            </Motion>
        );
    };
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    render() {
        return (
            <RenderToLayer
                open={this.props.open || this.state.animating}
                closeReasons={['escapeKey']}
                render={this.renderLayer}
                onRequestClose={this.props.onRequestClose}
                useLayerForClickAway={false}
            />
        );
    }
}

export default ModalLayer;
