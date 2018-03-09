/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Link from 'splunk-ui/components/Link';

describe('Link', () => {
    it('renders children correctly', () => {
        const wrapper = mount(<Link to="/home">Go Home</Link>);
        assert.equal(wrapper.text(), 'Go Home');
    });

    it('renders with the correct href', () => {
        const wrapper = mount(<Link to="/home">Go Home</Link>);
        assert.equal(wrapper.find('a').prop('href'), '/home');
    });

    it('accepts a user defined className', () => {
        const wrapper = mount(<Link to="/home" className="testing">Go Home</Link>);
        assert(wrapper.find('a').hasClass('testing'));
    });
});
