import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { spring } from 'react-motion';
import { defer, keys, noop, omit } from 'lodash';
import { handleTab, takeFocus } from 'splunk-ui/util/focus';

import ModalLayer from 'splunk-ui/components/ModalLayer';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import css from './Modal.css';

class Modal extends Component {
    static propTypes = {
        /**
        * Any renderable children can be passed to the modal.
        *
        * To take advantage of the default Splunk modal styles, use the
        * Modal.Header, Modal.Body, and Modal.Footer.
        */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /**
         * A function that will be called when a close event occurs. The callback will be passed a
         * reason (either 'escapeKey' or 'clickAway') and the event.
         *
         * Generally, this callback should be used to toggle the `open` prop.
         */
        onRequestClose: PropTypes.func,
        /**
         * True if this modal is currently open, otherwise false.
         */
        open: PropTypes.bool,
        /** @docs-ignore */
        style: PropTypes.object,
    };

    static defaultProps = {
        onRequestClose: noop,
        open: false,
        style: {},
    };

    static Header = Header;

    static Body = Body;

    static Footer = Footer;

    static getDefaultMotionStyle() {
        return {
            top: 0,
            opacity: 0,
        };
    }

    getMotionStyle = () => {
        const { open } = this.props;
        if (open) {
            return {
                top: spring(40, { precision: 1 }),
                opacity: spring(1, { precision: 1 }),
            };
        }
        return {
            top: spring(0, { precision: 1 }),
            opacity: spring(0, { precision: 1 }),
        };
    };

    handleModalMount = (element) => {
        this.el = element;
        if (element) {
            defer(takeFocus, element, 'container');
        }
    };

    handleModalKeyDown = (e) => {
        handleTab(this.el, e);
    };

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    renderModal = (intepolatedStyle) => {
        const { style, className, children } = this.props;
        const { top, opacity } = intepolatedStyle;
        return (
            <div
                ref={this.handleModalMount}
                className={toClassName(css.modal, className)}
                style={{ ...style, top, opacity }}
                tabIndex={-1}
                onKeyDown={this.handleModalKeyDown}
                role="dialog"
                {...createTestHook(__filename)}
                {...omit(this.props, keys(Modal.propTypes))}
            >
                {children}
            </div>
        );
    }
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    render() {
        const { open, onRequestClose } = this.props;
        return (
            <ModalLayer
                open={open}
                getDefaultMotionStyle={Modal.getDefaultMotionStyle}
                renderModal={this.renderModal}
                getMotionStyle={this.getMotionStyle}
                onRequestClose={onRequestClose}
            />
        );
    }
}

export default Modal;
