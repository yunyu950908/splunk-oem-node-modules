/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Progress from 'splunk-ui/components/Progress';

describe('Progress', () => {
    it('renders empty without percentage', () => {
        const wrapper = mount(<Progress />);
        assert.ok(wrapper);
        assert.equal(wrapper.find('Box').children().length, 0);
    });
    it('renders with percentage', () => {
        const wrapper = mount(<Progress percentage={30} />);
        assert.equal(wrapper.find('Box').children().length, 1);
    });
    it('updates', () => {
        const wrapper = mount(<Progress />);
        assert.equal(wrapper.find('Box').children().length, 0);
        wrapper.setProps({ percentage: 0 });
        assert.equal(wrapper.find('Box').children().length, 1);
        wrapper.setProps({ percentage: 30 });
        assert.equal(wrapper.find('Box').children().length, 1);
    });
});
