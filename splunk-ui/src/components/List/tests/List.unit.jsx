/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import List from 'splunk-ui/components/List';

describe('List', () => {
    it('renders', () => {
        const wrapper = mount(<List />);
        assert.ok(wrapper);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <List>
                <List.Item>Hello</List.Item>
                {false}
                <List.Item>World</List.Item>
                {undefined}
                {null}
                {' '}
                word
            </List>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
    it('has unordered list for for default type', () => {
        const element = (
            <List>
                <List.Item>Hello</List.Item>
            </List>
        );
        const wrapper = mount(element);
        const ul = wrapper.find('ul');
        assert.equal(ul.length, 1);
    });
    it('has unordered list for for disc type', () => {
        const element = (
            <List type="disc">
                <List.Item>Hello</List.Item>
            </List>
        );
        const wrapper = mount(element);
        const ul = wrapper.find('ul');
        assert.equal(ul.length, 1);
    });
    it('has ordered list for for decimal type', () => {
        const element = (
            <List type="decimal">
                <List.Item>Hello</List.Item>
            </List>
        );
        const wrapper = mount(element);
        const ol = wrapper.find('ol');
        assert.equal(ol.length, 1);
    });
    it('has ordered list for for lower-alpha type', () => {
        const element = (
            <List type="lower-alpha">
                <List.Item>Hello</List.Item>
            </List>
        );
        const wrapper = mount(element);
        const ol = wrapper.find('ol');
        assert.equal(ol.length, 1);
    });
    it('has ordered list for for upper-alpha type', () => {
        const element = (
            <List type="upper-alpha">
                <List.Item>Hello</List.Item>
            </List>
        );
        const wrapper = mount(element);
        const ol = wrapper.find('ol');
        assert.equal(ol.length, 1);
    });
});
