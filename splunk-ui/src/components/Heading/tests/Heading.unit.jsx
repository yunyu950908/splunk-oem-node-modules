/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Heading from 'splunk-ui/components/Heading';

describe('Heading', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Heading level={1}>Hello World</Heading>);
        assert.equal(wrapper.text(), 'Hello World');
    });
});
