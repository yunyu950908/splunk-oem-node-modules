/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import RadioList from 'splunk-ui/components/RadioList';

describe('RadioList', () => {
    let wrapper;
    const handleChange = sinon.spy();

    afterEach(() => {
        handleChange.reset();
        wrapper.unmount();
        wrapper = null;
    });

    describe('uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <RadioList defaultValue={3}>
                    <RadioList.Option value={1}>One</RadioList.Option>
                    <RadioList.Option value={2}>Two</RadioList.Option>
                    <RadioList.Option value={3}>Three Three Three</RadioList.Option>
                    <RadioList.Option value={4}>Four</RadioList.Option>
                </RadioList>,
            );
            assert.ok(wrapper);
        });

        it('sets default', () => {
            const selected = wrapper.find('Option').at(2).find('button[aria-checked=true]');
            assert.equal(selected.length, 1);
        });

        it('updates state', () => {
            const newOption = wrapper.find('Option').at(0).find('button');
            newOption.simulate('click');
            assert.equal(newOption.prop('aria-checked'), true);
        });

        it('handles `false` children correctly', () => {
            assert.isFalse(wrapper.find('#hidden').exists());
        });

        it('throws if update defaultValue', () => {
            assert.throws(() => wrapper.setProps({ defaultValue: 4 }));
        });

        it('throws if convert to controlled', () => {
            assert.throws(() => wrapper.setProps({ value: 4 }));
        });
    });

    describe('controlled', () => {
        beforeEach(() => {
            wrapper = mount(
                <RadioList value={3} onChange={handleChange}>
                    <RadioList.Option value={1}>One</RadioList.Option>
                    <RadioList.Option value={2}>Two</RadioList.Option>
                    <RadioList.Option value={3}>Three Three Three</RadioList.Option>
                    <RadioList.Option value={4}>Four</RadioList.Option>
                </RadioList>,
            );
            assert.ok(wrapper);
        });

        it('click events trigger callbacks', () => {
            wrapper.find('button').first().simulate('click');
            assert(handleChange.calledOnce,
                'The onChange handler is called exactly once');
        });

        it('can update value', () => {
            wrapper.setProps({ value: 1 });
            assert.equal(wrapper.prop('value'), 1);
            const selected = wrapper.find('Option').at(0).find('button[aria-checked=true]');
            assert.equal(selected.length, 1);
        });
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <RadioList value={3} onChange={handleChange}>
                <RadioList.Option value={1}>One</RadioList.Option>
                {null}
                <RadioList.Option value={2}>Two</RadioList.Option>
                <RadioList.Option value={3}>Three Three Three</RadioList.Option>
                {false}
                <RadioList.Option value={4}>Four</RadioList.Option>
                {undefined}
                {' '}
                word
            </RadioList>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
