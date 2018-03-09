import React, { Component } from 'react';
import Button from 'splunk-ui/components/Button';
import Link from 'splunk-ui/components/Link';
import List from 'splunk-ui/components/List';
import Modal from 'splunk-ui/components/Modal';
import P from 'splunk-ui/components/Paragraph';
import Select from 'splunk-ui/components/Select';

class Basic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    handleRequestOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <div>
                <Button id="opener" onClick={this.handleRequestOpen} label="Open" />
                <Modal id="modal" onRequestClose={this.handleRequestClose} open={this.state.open} data-open={this.state.open}>
                    <Modal.Header title="Header" onRequestClose={this.handleRequestClose} />
                    <Modal.Body>
                        <P>
                            <Link id="link" to="https://duckduckgo.com">
                                Go to DuckDuckGo
                            </Link>
                            <List id="list">
                                <List.Item>Lorem ipsum dolor sit amet</List.Item>
                                <List.Item>Excepteur sint occaecat cupidatat non</List.Item>
                                <List.Item>Sed ut perspiciatis unde omnis</List.Item>
                            </List>
                            <Select id="select">
                                <Select.Option label="One" value="1" />
                                <Select.Option label="Two" value="2" />
                            </Select>
                        </P>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Basic;
