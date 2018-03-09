/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('Nested Dropdown', () => {
    it('nested Dropdown closes correctly', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestDropdown');
        browser.$('#nestToggle').click();
        browser.waitForVisible('#inside');

        browser.$('#nestToggle').click();
        browser.waitUntil(() => !browser.isVisible('#inside'));
        browser.$('#topToggle').click();
        browser.waitUntil(() => !browser.isVisible('#nestDropdown'));
    });

    it('Esc key closes focused Dropdown', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestDropdown');
        browser.$('#nestToggle').click();
        browser.waitForVisible('#inside');
        browser.keys('Escape');

        browser.waitUntil(() => !browser.isVisible('#inside'));
        assert.isTrue(browser.hasFocus('#nestToggle'));

        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible('#nestDropdown'));
        assert.isTrue(browser.hasFocus('#topToggle'));
    });

    it('Closing topmost Dropdown closes nested', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestDropdown');
        browser.$('#nestToggle').click();
        browser.waitForVisible('#inside');

        browser.$('#topToggle').click();
        browser.waitUntil(() => !browser.isVisible('#inside'));
        browser.waitUntil(() => !browser.isVisible('#nestDropdown'));
    });

    it('Clicking background closes both Dropdowns', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestDropdown');
        browser.$('#nestToggle').click();
        browser.waitForVisible('#inside');

        browser.$('body').click();
        browser.waitUntil(() => !browser.isVisible('#inside'));
        browser.waitUntil(() => !browser.isVisible('#nestDropdown'));
    });
});
