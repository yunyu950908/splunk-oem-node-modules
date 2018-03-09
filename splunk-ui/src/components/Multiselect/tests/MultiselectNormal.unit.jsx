/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { keycode } from 'splunk-ui/util/keyboard';
import Multiselect from 'splunk-ui/components/Multiselect';

describe('Multiselect Normal', () => {
    let wrapper;
    const handleChange = spy();

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleChange.reset();
    });

    describe('uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Multiselect defaultValues={['1', '2']}>
                    <Multiselect.Option
                        label="Up"
                        value="1"
                    />
                    <Multiselect.Option
                        label="Up and Down"
                        value="8"
                    />
                    <Multiselect.Divider />
                    <Multiselect.Option
                        label="Down"
                        value="2"
                    />
                    <Multiselect.Option
                        label="Down and Under"
                        value="3"
                    />
                </Multiselect>,
            );
            assert.ok(wrapper);
        });

        it('renders', () => {
            assert.ok(wrapper);
        });

        it('sets default', () => {
            assert.equal(wrapper.find('Item').length, 2);
        });

        it('adds items on enter', () => {
            const input = wrapper.find('input');
            const initialButtonCount = wrapper.find('Item').length;

            input.simulate('change', { target: { value: 'Up' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.equal(wrapper.find('Item').length, initialButtonCount + 1);
        });

        it('removes item on item click', (done) => {
            const initialButtonCount = wrapper.find('Item').length;
            wrapper.find('Item').find('Clickable').at(0).simulate('click');

            /* The button removal is deferred to allow the event to bubble properly,
             * So this test must also be deferred */
            setTimeout(() => {
                assert.equal(wrapper.find('Item').length, initialButtonCount - 1);
                done();
            }, 0);
        });

        it('doesn\'t add arbitrary values', () => {
            const input = wrapper.find('input');
            const initialButtonCount = wrapper.find('Button').length;

            input.simulate('change', { target: { value: 'not-an-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.equal(wrapper.find('Button').length, initialButtonCount);
        });

        it('throws if update defaultValues', () => {
            assert.throws(() => wrapper.setProps({ defaultValues: [8] }));
        });

        it('throws if convert to controlled', () => {
            assert.throws(() => wrapper.setProps({ values: [8] }));
        });
    });

    describe('allow new values', () => {
        beforeEach(() => {
            wrapper = mount(
                <Multiselect defaultValues={['1', '2']} allowNewValues>
                    <Multiselect.Option
                        label="Up"
                        value="1"
                    />
                    <Multiselect.Option
                        label="Up and Down"
                        value="8"
                    />
                    <Multiselect.Divider />
                    <Multiselect.Option
                        label="Down"
                        value="2"
                    />
                    <Multiselect.Option
                        label="Down and Under"
                        value="3"
                    />
                </Multiselect>,
            );
            assert.ok(wrapper);
        });

        it('renders', () => {
            assert.ok(wrapper);
        });

        it('adds arbitrary values', () => {
            const input = wrapper.find('input');
            const initialButtonCount = wrapper.find('Item').length;

            input.simulate('change', { target: { value: 'not-an-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.equal(wrapper.find('Item').length, initialButtonCount + 1);
        });

        it('doesn\'t allow a new value to be added twice', () => {
            const input = wrapper.find('input');
            const initialButtonCount = wrapper.find('Item').length;

            input.simulate('change', { target: { value: 'user-added-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.equal(wrapper.find('Item').length, initialButtonCount + 1);

            input.simulate('change', { target: { value: 'user-added-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.equal(wrapper.find('Item').length, initialButtonCount + 1);
        });
    });


    describe('controlled', () => {
        beforeEach(() => {
            wrapper = mount((
                <Multiselect values={['1', '2']} onChange={handleChange}>
                    <Multiselect.Option
                        label="Up"
                        value="1"
                    />
                    <Multiselect.Option
                        label="Up and Down"
                        value="8"
                    />
                    <Multiselect.Divider />
                    <Multiselect.Option
                        label="Down"
                        value="2"
                    />
                    <Multiselect.Option
                        label="Down and Under"
                        value="3"
                    />
                </Multiselect>
            ));
            assert.ok(wrapper);
        });

        it('change triggers callback', () => {
            const input = wrapper.find('input');

            input.simulate('change', { target: { value: 'Up' } });
            assert.equal(handleChange.callCount, 0,
                'input change does not trigger onChange');

            input.simulate('keyDown', { keyCode: keycode('enter') });
            assert(handleChange.calledOnce,
                'The onChange handler is called exactly once');
        });

        it('can update value', () => {
            wrapper.setProps({ values: ['8'] });
            assert.equal(wrapper.find('Item').length, 1);
        });
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Multiselect onChange={handleChange}>
                <Multiselect.Option
                    label="Up"
                    value="1"
                />
                {false}
                <Multiselect.Option
                    label="Up and Down"
                    value="8"
                />
                {undefined}
                {null}
                <Multiselect.Option
                    label="Down and Under"
                    value="3"
                />
                {' '}
                word
            </Multiselect>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
