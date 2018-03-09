/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Select from 'splunk-ui/components/Select';

const buttonId = 'splunk-ui:/components/Button/Button';

describe('Select', () => {
    let container;
    let wrapper;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        wrapper = mount((
            <Select>
                <Select.Option label="One" value={1} />
                <Select.Option label="Two" value={2} />
                {false && <Select.Option label="hidden" value="hidden" id="hidden" />}
            </Select>
        ), {
            attachTo: container,
        });
        assert.ok(wrapper);
    });

    afterEach(() => {
        container.remove();
        wrapper.unmount();
        container = null;
        wrapper = null;
    });

    it('opens when toggle is clicked', () => {
        assert.isFalse(wrapper.state('open'));
        wrapper.find('Button').simulate('click');
        assert.isTrue(wrapper.state('open'));
    });

    it('closes and shifts focus to toggle when closed by click on toggle', () => {
        wrapper.setState({ open: true });
        assert.isTrue(wrapper.state('open'));
        wrapper.find('Button').simulate('click');
        assert.isFalse(wrapper.state('open'));
        assert.equal(document.activeElement.dataset.component, buttonId);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Select>
                <Select.Option
                    label="Up"
                    value="1"
                />
                {false}
                <Select.Option
                    label="Up and Down"
                    value="8"
                />
                {undefined}
                {null}
                <Select.Option
                    label="Down and Under"
                    value="3"
                />
                {' '}
                word
            </Select>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
