/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import ScreenReaderContent from 'splunk-ui/components/ScreenReaderContent';

describe('ScreenReaderContent', () => {
    it('renders text to the dom', () => {
        const wrapper = mount(<ScreenReaderContent>Testing</ScreenReaderContent>);
        assert.equal(wrapper.text(), 'Testing');
    });
});
