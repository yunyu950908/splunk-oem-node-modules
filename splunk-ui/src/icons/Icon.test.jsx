/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Flag from 'splunk-ui/icons/Flag';

describe('Icon', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Flag />);
        assert.ok(wrapper);
    });
});
