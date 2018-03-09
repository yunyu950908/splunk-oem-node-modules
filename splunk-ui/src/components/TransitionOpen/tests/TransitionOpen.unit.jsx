/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import TransitionOpen from 'splunk-ui/components/TransitionOpen';

describe('TransitionOpen', () => {
    it('renders', () => {
        const wrapper = mount(<TransitionOpen />);
        assert.ok(wrapper);
    });
});
