/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Number from 'splunk-ui/components/Number';

describe('Number', () => {
    it('renders', () => {
        const wrapper = mount(<Number />);
        assert.ok(wrapper);
    });

    describe('Uncontrolled', () => {
        let wrapper = null;
        const handleChange = spy();

        beforeEach(() => {
            wrapper = mount(
                <Number onChange={handleChange} defaultValue={2} />,
            );
            assert.ok(wrapper);
        });

        afterEach(() => {
            handleChange.reset();
            wrapper.unmount();
            wrapper = null;
        });

        it('honors the defaultValue', () => {
            assert.equal(wrapper.find('input').prop('value'), 2, 'The value is set to the default');
        });

        it('handles state changes internally', () => {
            wrapper.find('input').simulate('change', { target: { value: '300' } });
            assert.equal(wrapper.state('stringValue'), '300');
        });

        it('increments', () => {
            wrapper.find('button').at(0).simulate('click');
            assert.equal(wrapper.state('stringValue'), '3');
        });

        it('decrements', () => {
            wrapper.find('button').at(1).simulate('click');
            assert.equal(wrapper.state('stringValue'), '1');
        });

        it('throws when trying to set value', () => {
            assert.throws(() => wrapper.setProps({ value: 1 }));
        });

        it('throws when trying to change the defaultValue', () => {
            assert.throws(() => wrapper.setProps({ defaultValue: 1 }));
        });
    });

    describe('Limits', () => {
        let wrapper = null;
        const handleChange = spy();
        beforeEach(() => {
            wrapper = mount(
                <Number
                    onChange={handleChange}
                    min={-1}
                    max={1}
                    step={0.3}
                    defaultValue={0}
                />,
            );
            assert.ok(wrapper);
        });

        afterEach(() => {
            handleChange.reset();
            wrapper.unmount();
            wrapper = null;
        });

        it('max is applied', () => {
            wrapper.find('input').simulate('change', { target: { value: '300' } });
            assert.equal(wrapper.state('value'), 1);
            assert.equal(wrapper.state('stringValue'), '300');
            wrapper.find('input').simulate('blur');
            assert.equal(wrapper.state('stringValue'), '1', 'string value updates on blur');
        });

        it('min is applied', () => {
            wrapper.find('input').simulate('change', { target: { value: '-300' } });
            assert.equal(wrapper.state('value'), -1);
            assert.equal(wrapper.state('stringValue'), '-300');
            wrapper.find('input').simulate('blur');
            assert.equal(wrapper.state('stringValue'), '-1', 'string value updates on blur');
        });

        it('increments by step', () => {
            wrapper.find('button').at(0).simulate('click');
            assert.equal(wrapper.state('stringValue'), '0.3');
        });

        it('decrements by step', () => {
            wrapper.find('button').at(1).simulate('click');
            assert.equal(wrapper.state('stringValue'), '-0.3');
        });

        it('increments to max', () => {
            const button = wrapper.find('button').at(0);
            button.simulate('click').simulate('click').simulate('click').simulate('click');
            assert.equal(wrapper.state('stringValue'), '1');
        });

        it('decrements to min', () => {
            const button = wrapper.find('button').at(1);
            button.simulate('click').simulate('click').simulate('click').simulate('click');
            assert.equal(wrapper.state('stringValue'), '-1');
        });
    });

    describe('Controlled', () => {
        let wrapper = null;
        const handleChange = spy();
        beforeEach(() => {
            wrapper = mount(
                <Number onChange={handleChange} value={2} min={-1} max={1} />,
            );
            assert.ok(wrapper);
        });

        afterEach(() => {
            handleChange.reset();
            wrapper.unmount();
            wrapper = null;
        });

        it('honors the value', () => {
            assert.equal(wrapper.state('stringValue'), '2');
        });

        it('invokes the onChange handler with limits applied', () => {
            wrapper.find('input').simulate('change', { target: { value: '-300' } });
            assert.isTrue(handleChange.calledOnce, 'callback is called');
            assert.equal(handleChange.args[0][1].value, -1, 'min is applied');
        });
    });


    describe('rounding', () => {
        it('rounds to decimal', () => {
            const wrapper = mount(<Number roundTo={2} />);
            wrapper.find('input').simulate('change', { target: { value: '3.0555' } });
            assert.equal(wrapper.state('value'), 3.06);
        });
        it('rounds to integer', () => {
            const wrapper = mount(<Number roundTo={0} />);
            wrapper.find('input').simulate('change', { target: { value: '3.0555' } });
            assert.equal(wrapper.state('value'), 3);
        });
        it('rounds to hundreds', () => {
            const wrapper = mount(<Number roundTo={-2} />);
            wrapper.find('input').simulate('change', { target: { value: '1355' } });
            assert.equal(wrapper.state('value'), 1400);
        });
    });
});
