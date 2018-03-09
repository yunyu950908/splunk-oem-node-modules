import React, { Component } from 'react';
import Number from 'splunk-ui/components/Number';

class Example extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            value: null, // default empty
        };
    }

    handleChange = (e, { value }) => {
        this.setState({ value });
    }

    render() {
        return <Number id="number" value={this.state.value} onChange={this.handleChange} inline />;
    }
}

export default Example;
