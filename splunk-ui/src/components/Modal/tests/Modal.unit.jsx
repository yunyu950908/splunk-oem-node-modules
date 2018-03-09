/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Modal from 'splunk-ui/components/Modal';

describe('Modal', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Modal />);
        assert.ok(wrapper);
    });
});
