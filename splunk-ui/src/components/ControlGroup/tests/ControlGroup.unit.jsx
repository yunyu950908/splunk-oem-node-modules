/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import ControlGroup from 'splunk-ui/components/ControlGroup';

describe('ControlGroup', () => {
    it('renders correctly', () => {
        const wrapper = mount(<ControlGroup />);
        assert.ok(wrapper);
    });
    it('supports elements as children', () => {
        const wrapper = mount(<ControlGroup><div /></ControlGroup>);
        assert.ok(wrapper);
    });
    it('supports strings as children', () => {
        const wrapper = mount(<ControlGroup>Hello</ControlGroup>);
        assert.ok(wrapper);
    });
});
