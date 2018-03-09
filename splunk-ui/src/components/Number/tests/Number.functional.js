/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

function elements() {
    const $number = browser.$('#number');
    const $input = $number.$('input');
    const $buttons = $number.$$('button');
    const $upButton = $buttons[0];
    const $downButton = $buttons[1];
    return { $number, $input, $buttons, $upButton, $downButton };
}

describe('Number', () => {
    it('supports up/down of value using arrow key', () => {
        const { $input } = elements();
        $input.click();
        assert.equal($input.getValue(), '', 'input has initial empty value');
        browser.keys('Up arrow');
        assert.equal($input.getValue(), '1', 'input has first step value');
        browser.keys('Down arrow');
        assert.equal($input.getValue(), '0', 'input has initial value');
    });
});
