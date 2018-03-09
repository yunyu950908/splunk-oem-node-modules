/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import TabLayout from 'splunk-ui/components/TabLayout';

describe('TabLayout', () => {
    let wrapper;
    const handleChange = spy();

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleChange.reset();
    });

    function clickTab(idx) {
        wrapper.find('button').at(idx).simulate('click');
    }

    function assertTabActive(idx) {
        assert.isTrue(wrapper.find('Tab').at(idx).prop('active'), `Tab ${idx} is active`);
    }

    function assertPanelVisible(id) {
        assert.equal(wrapper.find('Panel').at(0).prop('panelId'), id, `Panel ${id} is visible`);
    }

    describe('Uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <TabLayout defaultActivePanelId="one" onChange={handleChange}>
                    <TabLayout.Panel label="One" panelId="one">
                        Lorem ipsum dolor sit amet, consectetur adipiscing In dictum
                        metus enim, ac ullamcorper ante condimentum at. Pellentesque habitant morbi
                        tristique senectus et netus et
                    </TabLayout.Panel>
                    <TabLayout.Panel label="Two" panelId="two">
                        Pellentesque habitant morbi tristique senectus et netus et
                        Lorem ipsum dolor sit amet, consectetur adipiscing In dictum
                        metus enim, ac ullamcorper ante condimentum at.
                    </TabLayout.Panel>
                </TabLayout>,
            );
        });
        it('renders', () => {
            assert.ok(wrapper);
        });
        it('tab one active', () => {
            assertTabActive(0);
            assertPanelVisible('one');
        });
        it('fires callback', () => {
            clickTab(1);
            assert.ok(handleChange.calledOnce);
        });
        it('tab change', () => {
            clickTab(1);
            assertTabActive(1);
            assertPanelVisible('two');
        });
    });

    describe('Controlled', () => {
        beforeEach(() => {
            wrapper = mount(
                <TabLayout activePanelId="one" onChange={handleChange}>
                    <TabLayout.Panel label="One" panelId="one">
                        Lorem ipsum dolor sit amet, consectetur adipiscing In dictum
                        metus enim, ac ullamcorper ante condimentum at. Pellentesque habitant morbi
                        tristique senectus et netus et
                    </TabLayout.Panel>
                    <TabLayout.Panel label="Two" panelId="two">
                        Pellentesque habitant morbi tristique senectus et netus et
                        Lorem ipsum dolor sit amet, consectetur adipiscing In dictum
                        metus enim, ac ullamcorper ante condimentum at.
                    </TabLayout.Panel>
                </TabLayout>,
            );
        });
        it('tab one active', () => {
            assertTabActive(0);
            assertPanelVisible('one');
        });
        it('fires callback', () => {
            clickTab(1);
            assert.ok(handleChange.calledOnce);
        });
        it('tab is not changed on click', () => {
            clickTab(1);
            assertTabActive(0);
            assertPanelVisible('one');
        });
        it('renders', () => {
            assert.ok(wrapper);
        });
        it('throws if the `activePanelId` cannot be found', () => {
            assert.throws(() => wrapper.setProps({ activePanelId: 'hidden' }));
        });
    });
    it('should handle invalid values in children correctly', () => {
        const element = (
            <TabLayout activePanelId="one" onChange={handleChange}>
                <TabLayout.Panel label="One" panelId="one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing In dictum
                    metus enim, ac ullamcorper ante condimentum at. Pellentesque habitant morbi
                    tristique senectus et netus et
                </TabLayout.Panel>
                {false}
                {null}
                {undefined}
                {' '}
                word
                <TabLayout.Panel label="Two" panelId="two">
                    Pellentesque habitant morbi tristique senectus et netus et
                    Lorem ipsum dolor sit amet, consectetur adipiscing In dictum
                    metus enim, ac ullamcorper ante condimentum at.
                </TabLayout.Panel>
            </TabLayout>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
