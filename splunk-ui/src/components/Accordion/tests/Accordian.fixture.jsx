import React, { Component } from 'react';
import Accordion from 'splunk-ui/components/Accordion';
import ControlGroup from 'splunk-ui/components/ControlGroup';
import P from 'splunk-ui/components/Paragraph';
import Select from 'splunk-ui/components/Select';
import Multiselect from 'splunk-ui/components/Multiselect';
import Text from 'splunk-ui/components/Text';
import { lorem } from 'splunk-ui/fixtures/text';

class Controlled extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            openPanelId: 2,
        };
    }

    handleChange = (e, { panelId }) => {
        this.setState({ openPanelId: panelId });
    }

    render() {
        const { openPanelId } = this.state;
        return (
            <Accordion openPanelId={openPanelId} onChange={this.handleChange}>
                <Accordion.Panel panelId={1} id="panel_1" title="Panel 1">
                    <P id="panel_1_content">
                        {lorem}
                    </P>
                </Accordion.Panel>
                <Accordion.Panel panelId={2} id="panel_2" title="Panel 2">
                    <div id="panel_2_content">
                        <P>
                            {lorem}
                        </P>
                        <ControlGroup label="First Name">
                            <Text />
                        </ControlGroup>
                        <ControlGroup
                            label="Last Name"
                            controlsLayout="fillJoin"
                            tooltip="More information..."
                        >
                            <Text />
                        </ControlGroup>
                        <ControlGroup label="Office">
                            <Select defaultValue="sf">
                                <Select.Option
                                    label="San Francisco"
                                    value="sf"
                                />
                                <Select.Option
                                    label="Cupertino"
                                    value="cu"
                                />
                            </Select>
                        </ControlGroup>
                        <ControlGroup label="Office Multiselect">
                            <Multiselect defaultValue={['sf']}>
                                <Multiselect.Option
                                    label="San Francisco"
                                    value="sf"
                                />
                                <Multiselect.Option
                                    label="Cupertino"
                                    value="cu"
                                />
                            </Multiselect>
                        </ControlGroup>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel panelId={3} id="panel_3" title="Panel 3">
                    <P id="panel_3_content">
                        {lorem}
                    </P>
                </Accordion.Panel>
            </Accordion>
        );
    }
}

export default Controlled;
