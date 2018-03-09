/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import CloseButton from 'splunk-ui/components/CloseButton';

describe('CloseButton', () => {
    it('renders correctly', () => {
        const wrapper = mount(<CloseButton />);
        assert.ok(wrapper);
    });
});
