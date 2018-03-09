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

describe('Basic Accordion', () => {
    it('starts with panel 2 open and the rest closed.', () => {
        assertPanelClosed(1);
        assertPanelOpen(2);
        assertPanelClosed(3);
    });

    it('opens panel 1 when clicked on', () => {
        browser.click('#panel_1 > button');
        waitUntilPanelClosed(2);
        assertPanelOpen(1);
        assertPanelClosed(2);
        assertPanelClosed(3);
    });

    it('can open panel 1 with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab', 'Enter']);
        waitUntilPanelClosed(2);
        assertPanelOpen(1);
        assertPanelClosed(2);
        assertPanelClosed(3);
    });
});
