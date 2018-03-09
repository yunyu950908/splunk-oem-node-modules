/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Box from 'splunk-ui/components/Box';

describe('Box', () => {
    it('renders children correctly', () => {
        const wrapper = mount(<Box>Hello World</Box>);
        assert.equal(wrapper.text(), 'Hello World');
    });

    it('passses props through', () => {
        const wrapper = mount(<Box className="test">Hello World</Box>);
        assert.isTrue(wrapper.find('div').hasClass('test'));
    });
});
