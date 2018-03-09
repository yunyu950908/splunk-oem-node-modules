/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Multiselect from 'splunk-ui/components/Multiselect';

describe('Multiselect Compact', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    describe('uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Multiselect defaultValues={['1', '2']} compact>
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
            assert.equal(wrapper.find('Button').text(), 'Up, Down(2)');
        });
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Multiselect compact>
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
