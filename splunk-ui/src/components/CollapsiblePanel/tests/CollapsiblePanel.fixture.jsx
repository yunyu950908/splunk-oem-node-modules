import React, { Component } from 'react';
import { includes, without } from 'lodash';
import CollapsiblePanel from 'splunk-ui/components/CollapsiblePanel';
import { lorem } from 'splunk-ui/fixtures/text';

class BasicControlled extends Component {
    constructor(...args) {
        super(...args);
        this.state = { open: [] };
    }

    handleRequestClose = ({ panelId }) => {
        this.setState({ open: without(this.state.open, panelId) });
    }

    handleRequestOpen = ({ panelId }) => {
        this.setState({ open: this.state.open.concat(panelId) });
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <CollapsiblePanel
                    panelId={1}
                    title="Panel 1"
                    onRequestClose={this.handleRequestClose}
                    onRequestOpen={this.handleRequestOpen}
                    open={includes(open, 1)}
                    id="panel_1"
                >
                    <div id="panel_1_content">{lorem}</div>
                </CollapsiblePanel>
                <CollapsiblePanel
                    panelId={2}
                    title="Panel 2"
                    onRequestClose={this.handleRequestClose}
                    onRequestOpen={this.handleRequestOpen}
                    open={includes(open, 2)}
                    id="panel_2"
                >
                    <div id="panel_2_content">{lorem}</div>
                </CollapsiblePanel>
                <CollapsiblePanel
                    panelId={3}
                    title="Panel 3"
                    onRequestClose={this.handleRequestClose}
                    onRequestOpen={this.handleRequestOpen}
                    open={includes(open, 3)}
                    id="panel_3"
                >
                    <div id="panel_3_content">{lorem}</div>
                </CollapsiblePanel>
            </div>
        );
    }
}

export default BasicControlled;
