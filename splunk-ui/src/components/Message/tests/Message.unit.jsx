/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Message from 'splunk-ui/components/Message';

describe('Message', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Message icon="alert" />);
        assert.ok(wrapper);
    });
});
