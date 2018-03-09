/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { component } from 'splunk-ui-functional-test-runner/lib/client/util';

function open() {
    browser.$('#opener').click();
    browser.waitForExist('#modal', 10000);
}

function waitForModalRemoval() {
    browser.waitForExist('#modal', 10000, true);
}

function modalOpenState() {
    return browser.$('#modal').getAttribute('data-open');
}

describe('Basic Modal', () => {
    it('creates and displays expected', () => {
        assert.isFalse(browser.isExisting('#modal'), 'modal does not exist');
        open();
        assert.isTrue(browser.isExisting('#modal'), 'modal exists');
        assert.isTrue(browser.isVisible('#modal'), 'modal is visible');
    });
    it('closes when ESC key used', () => {
        open();
        browser.keys('Escape');
        waitForModalRemoval();
        assert.isFalse(browser.isExisting('#modal'), 'modal has been removed');
    });
    it('closes on body click', () => {
        open();
        browser.$('body').click();
        waitForModalRemoval();
        assert.isFalse(browser.isExisting('#modal'), 'modal has been removed');
    });
    it('closes when header close icon clicked', () => {
        open();
        browser.$('#modal button').click();
        waitForModalRemoval();
        assert.isFalse(browser.isExisting('#modal'), 'modal has been removed');
    });
    it('does not close when modal body content clicked', () => {
        open();
        browser.$('#list').click();
        assert.equal(browser.$('#modal').getAttribute('data-open'), 'true',
            'modal internal open state has not changed');
        assert.isTrue(browser.isExisting('#modal'), 'modal has not been removed');
    });
    it('focuses on first focusable element on Tab key', () => {
        open();
        browser.keys('Tab');
        assert.isTrue(browser.hasFocus('#modal button'), 'nested content has focus');
    });
    it('does not close with select item click', () => {
        const popover = component('Popover');
        open();
        browser.$('#select').click();
        browser.waitForVisible(popover);
        const $button = browser.$(popover).$('button');
        $button.click();
        assert.equal(modalOpenState(), 'true',
            'modal internal open state has not changed');
    });
    it('does not close when select closed with ESC key', () => {
        const popover = component('Popover');
        open();
        browser.$('#select').click();
        browser.waitForVisible(popover);
        browser.keys('Escape');
        assert.equal(modalOpenState(), 'true',
            'modal internal open state has not changed');
    });
});
