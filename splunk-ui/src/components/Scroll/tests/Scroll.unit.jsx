/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Scroll from 'splunk-ui/components/Scroll';

describe('Scroll', () => {
    it('renders', () => {
        const wrapper = mount(<Scroll />);
        assert.ok(wrapper);
    });
});
