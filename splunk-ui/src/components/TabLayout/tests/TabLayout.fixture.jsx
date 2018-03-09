import React, { Component } from 'react';
import TabLayout from 'splunk-ui/components/TabLayout';

class Basic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { activePanelId: 'one' };
    }

    handleChange = (e, data) => {
        this.setState({ activePanelId: data.activePanelId });
    }

    render() {
        return (
            <TabLayout id="tablayout" activePanelId={this.state.activePanelId} onChange={this.handleChange}>
                <TabLayout.Panel label="One" panelId="one">
                    One
                </TabLayout.Panel>
                <TabLayout.Panel label="Two" panelId="two">
                    Two
                </TabLayout.Panel>
                <TabLayout.Panel label="Three" panelId="three">
                    Three
                </TabLayout.Panel>
            </TabLayout>
        );
    }
}

export default Basic;
