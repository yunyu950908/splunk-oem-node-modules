/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Menu from 'splunk-ui/components/Menu';

describe('Menu', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Menu />);
        assert.ok(wrapper);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Menu>
                {' '}
                word
                <Menu.Item label="Lorem" />
                {false}
                <Menu.Item label="Ipsum" />
                {undefined}
                {null}
                {' '}
                word
            </Menu>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
});
