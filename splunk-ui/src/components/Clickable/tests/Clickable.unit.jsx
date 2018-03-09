/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Clickable from 'splunk-ui/components/Clickable';

describe('Clickable', () => {
    it('renders', () => {
        const wrapper = mount(<Clickable />);
        assert.ok(wrapper);
    });

    it('should have type="button" if it is button', () => {
        const disabled = mount(<Clickable disabled />);
        assert.equal(disabled.find('button').prop('type'), 'button');
    });

    it('should overwrite button type if needed', () => {
        const wrapper = mount(<Clickable disabled type="saywhat" />);
        assert.equal(wrapper.find('button').prop('type'), 'saywhat');
    });
});
