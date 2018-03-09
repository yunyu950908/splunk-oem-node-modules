/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE, resetFocus } from 'splunk-ui-functional-test-runner/lib/client/util';

function elements() {
    const $table = browser.$('#table table');
    const $thName = browser.$('#name');
    const $thNameResizeHandle = browser.$('#name button');
    const $thStatus = browser.$('#status');
    const $thState = browser.$('#birthState');
    return { $table, $thName, $thNameResizeHandle, $thStatus, $thState };
}

describe('Table Complex', () => {
    it('handles keyboard resize', () => {
        resetFocus();
        const { $table, $thStatus } = elements();

        $thStatus.waitForVisible();

        const initialTableWidth = $table.getElementSize().width;
        const initialCell1Width = $thStatus.getElementSize().width;

        browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'ArrowRight', 'ArrowRight']);
        browser.waitUntil(() => $table.getElementSize().width > initialTableWidth);

        const endTableWidth = $table.getElementSize().width;
        const endCell1Width = $thStatus.getElementSize().width;

        assert.isTrue(initialCell1Width > 0, 'Width detected correctly');
        assert.isTrue(initialTableWidth < endTableWidth, 'Table Resized');
        assert.isTrue(initialCell1Width < endCell1Width, 'Head Cell Resized');
    });

    it('handles keyboard reorder', () => {
        browser.waitForVisible('#status');
        assert.isTrue(browser.$('#status:nth-child(3)').isVisible(), 'Column is in original position');

        resetFocus();
        browser.keys(['Tab', 'Tab', 'Tab', 'ArrowRight', 'ArrowRight']);

        assert.isTrue(browser.$('#status:nth-child(5)').isVisible(), 'Column is in new position');
    });

    it('handles sort', () => {
        const { $thState } = elements();

        browser.waitForVisible('[id="amelia@hotmail.com"]');

        // Sort by name by default
        assert.isTrue(browser.$('[id="amelia@hotmail.com"]:nth-child(2)').isVisible(), 'Row is in second position');

        // Sorted by state
        $thState.click();
        assert.isTrue(browser.$('[id="amelia@hotmail.com"]:nth-child(10)').isVisible(), 'Row is in last position');

        // Sorted by state reversed
        $thState.click();
        assert.isTrue(browser.$('[id="amelia@hotmail.com"]:nth-child(1)').isVisible(), 'Row is in first position');
    });

    it('handles expand', () => {
        const $row1Expand = browser.$('[id="amelia@hotmail.com"] td:first-child');
        const $row1Expanded = browser.$('[id="amelia@hotmail.com-expansion"]');
        const $row2Expand = browser.$('[id="adrian7456@gmail.com"] td:first-child');
        const $row2Expanded = browser.$('[id="adrian7456@gmail.com-expansion"]');

        $row1Expand.waitForVisible();

        // Expand First Row
        assert.equal(browser.$$('[data-role="expandedRow"]').length, 0, 'No row is expanded');
        $row1Expand.click();
        assert.isTrue($row1Expanded.waitForVisible(), 'Row is expanded');

        // Expand Second Row
        $row2Expand.click();
        assert.isTrue($row2Expanded.waitForVisible(), 'Row 2 expanded');
        assert.isFalse($row1Expanded.isVisible(), 'Row 1 collapses');

        // Expand Second Row
        $row2Expand.click();
        assert.isTrue($row2Expanded.waitForVisible(500, true), 'Expanded row collapses');
    });


    if (!isIE()) {
        it('handles drag resize', () => {
            const { $table, $thName, $thNameResizeHandle } = elements();

            const initialTableWidth = $table.getElementSize().width;
            const initialCell1Width = $thName.getElementSize().width;
            const moveAmount = 50;

            $thNameResizeHandle.moveToObject(4, 4);
            browser.buttonDown();
            browser.moveTo(null, moveAmount, 0);
            browser.buttonUp();

            const endTableWidth = $table.getElementSize().width;
            const endCell1Width = $thName.getElementSize().width;

            assert.isTrue(initialCell1Width > 0, 'Width detected correctly');
            assert.equal(initialTableWidth + moveAmount, endTableWidth, 'Table Resized');
            assert.equal(initialCell1Width + moveAmount, endCell1Width, 'Head Cell Resized');
        });
    }
});
