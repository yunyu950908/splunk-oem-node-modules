import _ from 'underscore';
import React, { PropTypes } from 'react';
import TransitionOpen from 'splunk-ui/components/TransitionOpen';
import Button from 'splunk-ui/components/Button';
import ChevronDown from 'splunk-ui/icons/ChevronDown';
import ChevronRight from 'splunk-ui/icons/ChevronRight';
import { createTestHook } from 'util/test_support';

const buttonStyles = {
    paddingLeft: '0',
    paddingRight: '0',
};

class AdvancedSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: props.active,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            active: !this.state.active,
        });
    }

    render() {
        return (
            <div {...createTestHook(module.id)}>
                <Button
                    icon={this.state.active ? <ChevronDown /> : <ChevronRight />}
                    appearance="pill"
                    label={_('Advanced').t()}
                    style={buttonStyles}
                    onClick={this.onClick}
                    {...createTestHook(null, 'advancedToggle')}
                />
                <TransitionOpen animation="slideFromTop" open={this.state.active}>
                    {this.props.children}
                </TransitionOpen>
            </div>
        );
    }
}

AdvancedSection.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AdvancedSection;
