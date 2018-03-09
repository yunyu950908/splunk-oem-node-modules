/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { $component, component } from 'splunk-ui-functional-test-runner/lib/client/util';

describe('Select', () => {
    it('Opens on click, focus is on filter input', () => {
        const select = $component('Select');
        select.click();

        const popover = component('Popover');
        browser.waitForVisible(popover);

        const filterInput = browser.$(popover).$('div[class^="filter_Select"] input');
        assert.isTrue(browser.hasFocus(filterInput.selector));
    });

    it('Opens on click, has buttons with text', () => {
        const select = $component('Select');
        select.click();

        const popover = component('Popover');
        browser.waitForVisible(popover);

        const buttons = browser.$(popover).$$('button');
        assert.lengthOf(buttons, 2, 'Correct number of buttons');

        buttons[1].click();
        browser.waitForVisible(popover, 5000, true);
        assert.equal(select.$('button').getText(), 'Right', 'Selected item reflected in button');
    });
});
