/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from 'splunk-ui-functional-test-runner/lib/client/util';

function assertPanelOpen(panelId) {
    assert.isTrue(browser.$(`#panel_${panelId}_content`).isVisible());
}

function assertPanelClosed(panelId) {
    assert.isFalse(browser.$(`#panel_${panelId}_content`).isVisible());
}

function waitUntilPanelClosed(panelId) {
    browser.waitUntil(() => !browser.$(`#panel_${panelId}_content`).isVisible());
}

describe('Multiple CollapsiblePanels', () => {
    it('can be opened and closed clicking', () => {
        browser.click('#panel_1 > button');
        assertPanelOpen(1);
        assertPanelClosed(2);
        assertPanelClosed(3);
        browser.click('#panel_2 > button');
        assertPanelOpen(1);
        assertPanelOpen(2);
        assertPanelClosed(3);
        browser.click('#panel_1 > button');
        browser.click('#panel_2 > button');
        waitUntilPanelClosed(1);
        waitUntilPanelClosed(2);
        assertPanelClosed(3);
        browser.click('#panel_3 > button');
        assertPanelClosed(1);
        assertPanelClosed(2);
        assertPanelOpen(3);
    });

    it('can be opened and closed with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab', 'Tab', 'Enter']);
        assertPanelClosed(1);
        assertPanelOpen(2);
        assertPanelClosed(3);
        browser.keys(['Enter', 'Tab', 'Enter']);
        assertPanelClosed(1);
        waitUntilPanelClosed(2);
        assertPanelOpen(3);
    });

    it('keeps focus on the Header button after opening', () => {
        browser.click('#panel_1 > button');
        assert.isTrue(browser.hasFocus('#panel_1 > button'));
    });
});
