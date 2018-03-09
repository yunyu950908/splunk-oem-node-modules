/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { keycode } from 'splunk-ui/util/keyboard';
import ComboBox from 'splunk-ui/components/ComboBox';

describe('ComboBox', () => {
    let wrapper;
    let input;
    const handleChange = spy();

    afterEach(() => {
        input = null;
        wrapper.unmount();
        wrapper = null;
        handleChange.reset();
    });

    describe('uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <ComboBox onChange={handleChange}>
                    <ComboBox.Option value="one" />
                    <ComboBox.Option value="two" />
                    <ComboBox.Option value="three" />
                </ComboBox>,
            );
            assert.ok(wrapper);
            input = wrapper.find('input');
        });

        it('opens when input is focused', () => {
            assert.isFalse(wrapper.state('open'));
            input.simulate('focus');
            assert.isTrue(wrapper.state('open'));
        });

        it('closes when item is selected', () => {
            input.simulate('focus');
            input.simulate('keyDown', { keyCode: keycode('down') });
            input.simulate('keyDown', { keyCode: keycode('enter') });
            assert.isFalse(wrapper.state('open'));
        });

        it('can be navigated with the keyboard', () => {
            input.simulate('focus');
            assert.equal(wrapper.state('activeIndex'), 0);
            input.simulate('keyDown', { keyCode: keycode('down') });
            assert.equal(wrapper.state('activeIndex'), 1);
            input.simulate('keyDown', { keyCode: keycode('down') });
            assert.equal(wrapper.state('activeIndex'), 2);
            input.simulate('keyDown', { keyCode: keycode('down') });
            assert.equal(wrapper.state('activeIndex'), 2); // Stays at bottom

            input.simulate('keyDown', { keyCode: keycode('up') });
            assert.equal(wrapper.state('activeIndex'), 1);
            input.simulate('keyDown', { keyCode: keycode('up') });
            assert.equal(wrapper.state('activeIndex'), 0);

            input.simulate('keyDown', { keyCode: keycode('up') });
            assert.equal(wrapper.state('activeIndex'), 0); // Stays at top
        });

        it('sets the active value on enter', () => {
            input.simulate('focus');
            input.simulate('keyDown', { keyCode: keycode('enter') });
            assert.isTrue(handleChange.calledOnce);
            assert.equal(handleChange.args[0][1].value, 'one');
        });

        it('handles `false` correctly in `children`', () => {
            assert.isFalse(wrapper.find('#should_not_be_rendered').exists());
        });

        it('throws if convert to controlled', () => {
            assert.throws(() => wrapper.setProps({ value: 'x' }));
        });
    });

    describe('controlled value', () => {
        beforeEach(() => {
            wrapper = mount(
                <ComboBox value="" onChange={handleChange}>
                    <ComboBox.Option value="one" />
                    <ComboBox.Option value="two" />
                    <ComboBox.Option value="three" />
                </ComboBox>,
            );
            assert.ok(wrapper);
            input = wrapper.find('input');
        });

        it('honors the value prop', () => {
            assert.equal(input.get(0).value, '');
        });

        it('can be updated with the value prop', () => {
            wrapper.setProps({ value: 'testing' });
            assert.equal(input.get(0).value, 'testing');
        });

        it('triggers the onChange callback', () => {
            input.simulate('change', { target: { value: 'testing' } });
            assert.isTrue(handleChange.calledOnce);
            assert.equal(handleChange.args[0][1].value, 'testing');
        });
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <ComboBox onChange={handleChange}>
                {undefined}
                <ComboBox.Option value="one" />
                {null}
                <ComboBox.Option value="two" />
                {false}
                {' '}
                word
            </ComboBox>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
