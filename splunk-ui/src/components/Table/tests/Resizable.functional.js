/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE, resetFocus } from 'splunk-ui-functional-test-runner/lib/client/util';

function elements() {
    const $table = browser.$('#table table');
    const $th1 = browser.$('#name');
    const $th1ResizeHandle = browser.$('#name button');
    const $th2 = browser.$('#age');
    return { $table, $th1, $th1ResizeHandle, $th2 };
}

describe('Table Resizable', () => {
    it('handles keyboard resize', () => {
        resetFocus();
        const { $table, $th2 } = elements();

        const initialTableWidth = $table.getElementSize().width;
        const initialCell1Width = $th2.getElementSize().width;

        browser.keys(['Tab', 'Tab', 'ArrowRight', 'ArrowRight']);
        browser.waitUntil(() => $table.getElementSize().width > initialTableWidth);

        const endTableWidth = $table.getElementSize().width;
        const endCell1Width = $th2.getElementSize().width;

        assert.isTrue(initialCell1Width > 0, 'Width detected correctly');
        assert.isTrue(initialTableWidth < endTableWidth, 'Table Resized');
        assert.isTrue(initialCell1Width < endCell1Width, 'Head Cell Resized');
    });

    if (!isIE()) {
        it('handles drag resize', () => {
            const { $table, $th1, $th1ResizeHandle } = elements();

            const initialTableWidth = $table.getElementSize().width;
            const initialCell1Width = $th1.getElementSize().width;
            const moveAmount = 50;

            $th1ResizeHandle.moveToObject(4, 4);
            browser.buttonDown();
            browser.moveTo(null, moveAmount, 0);
            browser.buttonUp();

            const endTableWidth = $table.getElementSize().width;
            const endCell1Width = $th1.getElementSize().width;

            assert.isTrue(initialCell1Width > 0, 'Width detected correctly');
            assert.equal(initialTableWidth + moveAmount, endTableWidth, 'Table Resized');
            assert.equal(initialCell1Width + moveAmount, endCell1Width, 'Head Cell Resized');
        });
    }
});
