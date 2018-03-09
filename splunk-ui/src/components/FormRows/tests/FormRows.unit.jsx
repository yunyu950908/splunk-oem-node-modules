/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FormRows from 'splunk-ui/components/FormRows';

describe('FormRows', () => {
    const handleChange = spy();

    afterEach(() => {
        handleChange.reset();
    });

    it('renders', () => {
        const wrapper = mount(
            <FormRows>
                <FormRows.Row
                    key="row1"
                    index={0}
                >
                    <div> Less is more! </div>
                </FormRows.Row>
                <FormRows.Row
                    key="row2"
                    index={1}
                >
                    <div> More is more! </div>
                </FormRows.Row>
            </FormRows>,
        );
        assert.ok(wrapper);
    });

    it('onRequestAdd fires callback', () => {
        const wrapper = mount((
            <FormRows
                onRequestAdd={handleChange}
            />
        ));
        const addButton = wrapper.find('button');
        addButton.simulate('click');
        assert.isTrue(handleChange.calledOnce);
    });

    it('onRequestRemove fires callback', () => {
        const wrapper = mount(
            <FormRows>
                <FormRows.Row
                    key="rowGuy"
                    index={0}
                    onRequestRemove={handleChange}
                >
                    <div>Lorem ipsum</div>
                </FormRows.Row>
            </FormRows>,
        );
        const addButton = wrapper.childAt(0).find('button');
        addButton.simulate('click');
        assert.isTrue(handleChange.calledOnce);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <FormRows>
                {undefined}
                {false}
                <FormRows.Row
                    key="rowGuy"
                    index={0}
                    onRequestRemove={handleChange}
                >
                    <div>Lorem ipsum</div>
                </FormRows.Row>
                {null}
                {' '}
                word
            </FormRows>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
});
