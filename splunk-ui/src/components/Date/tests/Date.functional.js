/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { $component, component, resetFocus } from 'splunk-ui-functional-test-runner/lib/client/util';

describe('Date', () => {
    it('Opens calendar on click, closes on external click', () => {
        const $date = $component('Date');
        assert.isFalse($component('Calendar').isExisting());
        $date.click();
        assert.isTrue(browser.waitUntil(() => $component('Calendar').isVisible()));
        browser.$('body').click();
        browser.waitUntil(() => !browser.isVisible(component('Calendar')));
    });

    it('Moves to next month on button click', () => {
        const $date = $component('Date');
        $date.click();
        assert.isTrue(browser.waitUntil(() => $component('Calendar').isVisible()));
        const $nextButton = browser.$('[data-role="nextMonth"]');
        const oldHeader = browser.$('[data-role="header"]').getText();
        $nextButton.click();
        const newHeader = browser.$('[data-role="header"]').getText();
        assert.notEqual(oldHeader, newHeader);
    });

    it('Opens calender on tab, closes on esc', () => {
        resetFocus();
        assert.isFalse($component('Calendar').isExisting());
        browser.keys('Tab');
        assert.isTrue(browser.waitUntil(() => $component('Calendar').isVisible()));
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(component('Calendar')));
    });
});
