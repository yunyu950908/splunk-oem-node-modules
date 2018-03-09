/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Button from 'splunk-ui/components/Button';

describe('Button', () => {
    let wrapper;
    const handleClick = spy();

    beforeEach(() => {
        wrapper = mount(
            <Button
                label="World"
                onClick={handleClick}
            />,
        );
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleClick.reset();
    });

    it('renders a label', () => {
        assert.equal(wrapper.text(), 'World');
    });

    it('renders a `button` element', () => {
        assert.isTrue(wrapper.find('button').exists());
    });

    it('renders an `a` element when the `to` prop is provided', () => {
        wrapper = mount(<Button label="Hello" to="World" />);
        assert.isTrue(wrapper.find('a').exists());
    });

    it('invokes the `onClick` callback when clicked', () => {
        wrapper.simulate('click');
        assert.isTrue(handleClick.calledOnce);
    });
});
