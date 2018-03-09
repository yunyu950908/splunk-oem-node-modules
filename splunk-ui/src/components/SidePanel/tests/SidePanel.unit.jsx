/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import SidePanel from 'splunk-ui/components/SidePanel';

describe('SidePanel', () => {
    it('renders', () => {
        const wrapper = mount(<SidePanel />);
        assert.ok(wrapper);
    });
});
