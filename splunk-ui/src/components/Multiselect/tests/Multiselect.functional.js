/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('Basic Multiselect', () => {
    // SUI-498: Multiselect should clear the filter text on blur
    // Note that the fix implemented for this clears the text on focus, not on blur
    it('Clears incomplete filter on focus', () => {
        const multiselect = browser.$('#multiselect');

        multiselect.click();
        browser.keys('hello');
        browser.keys('Tab');

        multiselect.click();
        assert.equal(multiselect.$('input').getValue(), '');
    });

    // SUI-517: Disabled option in Select/Multiselect/ComboBox can be selected using the keyboard
    it('Prevents selection of disabled items using keyboard', () => {
        const multiselect = browser.$('#multiselect');

        multiselect.click();
        browser.keys(['ArrowDown', 'Enter']); // second item is disabled
        assert.lengthOf(multiselect.$$('button'), 0);
    });

    // SUI-386: Cannot select Multiselect items with a click
    it('Can select items with a click', () => {
        const multiselect = browser.$('#multiselect');

        multiselect.click();
        assert.lengthOf(multiselect.$$('button'), 0);

        browser.$('[data-id="multiselect_option_two"]').click();
        assert.lengthOf(multiselect.$$('button'), 1);
    });

    // SUI-446: not able to click and add new value
    it('Allows clicking on new values, adds them', () => {
        const multiselect = browser.$('#multiselect');

        multiselect.click();
        assert.lengthOf(multiselect.$$('button'), 0);

        browser.keys('hello');

        browser.$('[value="hello"] button').click();
        assert.lengthOf(multiselect.$$('button'), 1);
    });

    it('Closes on escape key', () => {
        const multiselect = browser.$('#multiselect');

        multiselect.click();
        const option = browser.$('[data-id="multiselect_option_two"]');
        assert.isTrue(option.isVisible());

        browser.keys('Escape');
        browser.waitUntil(() => !option.isVisible());
    });
});
