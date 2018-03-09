/* global browser, $ */
/* eslint-env mocha */

import { assert } from 'chai';
import { component, isIE } from 'splunk-ui-functional-test-runner/lib/client/util';

function open() {
    const $button = $('#color button');
    $button.click();
    const popover = component('Popover');
    browser.waitForVisible(popover);
    const $popover = $(popover);
    const $input = $popover.$('input');
    const $inputButton = $popover.$$('[data-role="textbox"] button')[1];
    const $swatches = [1, 2].map(i => $popover.$(`ul li:nth-child(${i}) button`));
    return { $button, $input, $inputButton, $popover, popover, $swatches };
}

function getBackgroundColor($element) {
    return $element.getCssProperty('background-color').parsed.hex;
}

describe('Color', () => {
    it('Opens on click, focus is on color input and swatches appear as expected', () => {
        const { $button, $input, $popover, $swatches, popover } = open();
        assert.equal(getBackgroundColor($button), '#000000', 'button has correct default color');
        assert.equal($input.getValue(), '000000', 'input reflects default color with leading # stripped');
        assert.isTrue(browser.hasFocus($swatches[0].selector), 'first swatch should have focus');
        assert.lengthOf($popover.$$('ul li button'), 2, 'has two color swatches');
        assert.equal(getBackgroundColor($swatches[0]), '#cccccc', 'first swatch matches order of palette defined');
        assert.equal(getBackgroundColor($swatches[1]), '#000000', 'second swatch matches order of palette defined');
        $('body').click();
        browser.waitUntil(() => !browser.isVisible(popover));
    });
    it('Selecting second color swatch behaves as expected', () => {
        const { $button, popover, $swatches } = open();
        $swatches[1].click();
        assert.equal(getBackgroundColor($button), '#000000', 'button has selected color');
        browser.waitUntil(() => !browser.isVisible(popover));
        assert.isTrue(browser.hasFocus($button.selector), 'button activator has focus');
    });
    it('Entering a custom color and clicking on the body sets the color', () => {
        const { $button, $input, $inputButton, popover } = open();
        $input.clearElement();
        $input.setValue('666666');
        assert.equal(getBackgroundColor($inputButton), '#666666', 'input button relects custom color');
        $('body').click();
        browser.waitUntil(() => !browser.isVisible(popover));
        assert.equal(getBackgroundColor($button), '#666666', 'button relects custom color');
    });
    it('Entering a custom color and clicking on the adjacent input button sets the color', () => {
        const { $button, $input, $inputButton, popover } = open();
        $input.clearElement();
        $input.setValue('ebb7d0');
        $inputButton.click();
        browser.waitUntil(() => !browser.isVisible(popover));
        assert.equal(getBackgroundColor($button), '#ebb7d0', 'button relects custom color');
        assert.isTrue(browser.hasFocus($button.selector), 'button activator has focus');
    });
    it('Entering a custom color followed by the ESC key does not set the color', () => {
        const { $button, $input, popover } = open();
        $input.clearElement();
        $input.setValue('d85e3d');
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(popover));
        const color = getBackgroundColor($button);
        assert.equal(color, '#000000', 'active color has not changed');
    });

    // TODO: investigate why this one isn't working on IE
    if (!isIE()) {
        it('Entering a custom color followed by the ENTER key sets the color', () => {
            const { $button, $input, popover } = open();
            $input.setValue('956e96');
            browser.keys('Enter');
            browser.waitUntil(() => !browser.isVisible(popover));
            const color = getBackgroundColor($button);
            assert.equal(color, '#956e96', 'button relects new color');
        });
    }
});
