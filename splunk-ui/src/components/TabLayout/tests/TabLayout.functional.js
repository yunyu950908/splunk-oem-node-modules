/* global browser, $ */
/* eslint-env mocha */

import { assert } from 'chai';
import { $component, isIE } from 'splunk-ui-functional-test-runner/lib/client/util';

function elements() {
    const $tabLayout = $('#tablayout');
    const $panel = $component('TabLayout/Panel');
    const $tabs = [1, 2, 3].map(i => $tabLayout.$(`ul li:nth-child(${i}) button`));
    return { $tabLayout, $panel, $tabs };
}

describe('TabLayout', () => {
    it('reflects default activation', () => {
        const { $panel, $tabs } = elements();
        const $tab1 = $tabs[0];
        assert.equal($panel.getHTML(false), 'One', 'panel reflects selected tab');
        assert.isFalse($tab1.isEnabled(), 'first tab is disabled');
    });

    it('handles click based selection', () => {
        const { $panel, $tabs } = elements();
        const $tab2 = $tabs[1];
        $tab2.click();
        assert.isFalse($tab2.isEnabled(), 'second tab is disabled');
        assert.equal($panel.getHTML(false), 'Two', 'panel reflects selected tab');
        const $tab3 = $tabs[2];
        $tab3.click();
        assert.isFalse($tab3.isEnabled(), 'third tab is disabled');
        assert.equal($panel.getHTML(false), 'Three', 'panel reflects selected tab');
    });

    // Waiting for SUI-642
    if (!isIE()) {
        it('has correct keyboard focus model', () => {
            const { $tabs } = elements();
            const $tab1 = $tabs[0];
            const $tab2 = $tabs[1];
            const $tab3 = $tabs[2];
            $tab2.click();
            browser.keys('Tab');
            assert.isTrue(browser.hasFocus($tab3.selector), 'Third tab has focus');
            browser.keys(['Shift', 'Tab', 'NULL']); // release the modifier via NULL
            assert.isTrue(browser.hasFocus($tab1.selector), 'First tab has focus');
        });

        it('handles keyboard based selection', () => {
            const { $tabs } = elements();
            $tabs[1].click();
            $tabs[0].click();
            browser.keys('Tab');
            browser.keys('Enter');
            assert.isFalse($tabs[1].isEnabled(), 'second tab is selected');
            browser.keys('Tab');
            browser.keys('Enter');
            assert.isFalse($tabs[2].isEnabled(), 'third tab is selected');
        });
    }
});
