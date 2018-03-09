import React, { Component } from 'react';
import Button from 'splunk-ui/components/Button';
import Dropdown from 'splunk-ui/components/Dropdown';
import Switch from 'splunk-ui/components/Switch';

export default class extends Component {
    constructor(...args) {
        super(...args);
        this.state = { selected: false };
    }

    render() {
        const toggle = <Button id="toggle" />;

        return (
            <div>
                <Switch
                    id="outside" appearance="toggle" value="Switch"
                    onClick={() => {
                        this.setState({ selected: !this.state.selected });
                    }}
                    selected={this.state.selected}
                >Switch</Switch>
                <Dropdown toggle={toggle}>
                    <div id="inside">Test</div>
                </Dropdown>
            </div>
        );
    }
}
