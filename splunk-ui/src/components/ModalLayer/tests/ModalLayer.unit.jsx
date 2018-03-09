/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import ModalLayer from 'splunk-ui/components/ModalLayer';

describe('ModalLayer', () => {
    it('renders', () => {
        const wrapper = mount(<ModalLayer />);
        assert.ok(wrapper);
    });
});
