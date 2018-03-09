import React, { Component } from 'react';
import Color from 'splunk-ui/components/Color';

class Example extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            value: '#000000',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ value }) {
        this.setState({ value });
    }

    render() {
        return (
            <Color
                id="color"
                value={this.state.value}
                onChange={this.handleChange}
                palette={['#CCCCCC', '#000000']}
            />
        );
    }
}

export default Example;
