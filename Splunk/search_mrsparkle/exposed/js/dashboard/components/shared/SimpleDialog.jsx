import _ from 'underscore';
import React, { Component } from 'react';
import Button from 'splunk-ui/components/Button';
import Modal from 'splunk-ui/components/Modal';
import { createTestHook } from 'util/test_support';

class SimpleDialog extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: props.open,
        };
        this.close = this.close.bind(this);
        this.apply = this.apply.bind(this);
    }

    close() {
        this.setState({
            open: false,
        });
        this.props.onClose(this);
    }

    apply() {
        this.props.onApply(this);
    }

    render() {
        const defaultCancelLabel = _('Cancel').t();
        const defaultOkLabel = _('OK').t();
        return (
            <Modal onRequestClose={this.close} open={this.state.open} {...createTestHook(module.id)}>
                <Modal.Header title={this.props.title} onRequestClose={this.close} />
                <Modal.Body>
                    <div style={{ width: this.props.width }}>
                        {this.props.children}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={this.close}
                        label={this.props.cancelLabel || defaultCancelLabel}
                    />
                    <Button
                        appearance="primary"
                        onClick={this.apply}
                        label={this.props.okLabel || defaultOkLabel}
                    />
                </Modal.Footer>
            </Modal>
        );
    }
}

SimpleDialog.propTypes = {
    open: React.PropTypes.bool,
    title: React.PropTypes.string.isRequired,
    okLabel: React.PropTypes.string,
    cancelLabel: React.PropTypes.string,
    onClose: React.PropTypes.func.isRequired,
    onApply: React.PropTypes.func.isRequired,
    children: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.arrayOf(React.PropTypes.node),
    ]).isRequired,
    width: React.PropTypes.number,
};

SimpleDialog.defaultProps = {
    open: true,
    okLabel: _('Save').t(),
    cancelLabel: _('Cancel').t(),
    width: 460,
};

export default SimpleDialog;
