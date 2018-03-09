/* global browser */
/* eslint-env mocha */

describe('Basic Dropdown', () => {
    // SUI-381 Dropdowns do not trigger a close when clicking certain elements
    it('closes on clickAway, even for dynamic elements', () => {
        browser.$('#toggle').click();
        browser.waitForVisible('#inside');

        browser.$('#outside').click();
        browser.waitUntil(() => !browser.$('#inside').isVisible());
    });
});
