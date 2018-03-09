/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import SlidingPanels from 'splunk-ui/components/SlidingPanels';

describe('SlidingPanels', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <SlidingPanels activePanelId="one">
                <SlidingPanels.Panel panelId="one">Hello World!</SlidingPanels.Panel>
                <SlidingPanels.Panel panelId="two">Goodbye!</SlidingPanels.Panel>
            </SlidingPanels>,
        );
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('throws when the `activePanelId` is not found', () => {
        assert.throws(() => wrapper.setProps({ activePanelId: 'hidden' }));
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <SlidingPanels activePanelId="one">
                {false}
                {null}
                {undefined}
                {' '}
                word
                <SlidingPanels.Panel panelId="one">Hello World!</SlidingPanels.Panel>
                <SlidingPanels.Panel panelId="two">Goodbye!</SlidingPanels.Panel>
            </SlidingPanels>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
