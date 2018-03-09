/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import TabBar from 'splunk-ui/components/TabBar';

describe('TabBar', () => {
    let wrapper;
    const handleChange = spy();
    beforeEach(() => {
        wrapper = mount(
            <TabBar onChange={handleChange} activeTabId="one">
                <TabBar.Tab label="One" tabId="one" />
                <TabBar.Tab label="Two" tabId="two" />
            </TabBar>,
        );
    });
    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleChange.reset();
    });
    it('renders', () => {
        assert.ok(wrapper);
    });
    it('fires callback', () => {
        wrapper.find('button').at(1).simulate('click');
        assert.ok(handleChange.calledOnce);
        assert.equal(handleChange.args[0][1].selectedTabId, 'two');
    });
    it('prop change', () => {
        const secondTab = wrapper.find('Tab').at(1);
        wrapper.setProps({ activeTabId: 'two' });
        assert.ok(secondTab.prop('active'));
        assert.equal(secondTab.prop('tabId'), 'two');
    });
    it('should handle invalid values in children correctly', () => {
        const element = (
            <TabBar onChange={handleChange} activeTabId="one">
                {null}
                {undefined}
                <TabBar.Tab label="One" tabId="one" />
                <TabBar.Tab label="Two" tabId="two" />
                {false}
                {' '}
                word
            </TabBar>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
