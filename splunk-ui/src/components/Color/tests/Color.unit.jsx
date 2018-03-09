/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Color from 'splunk-ui/components/Color';

describe('Color', () => {
    let wrapper;
    const handleChange = spy();

    afterEach(() => {
        wrapper.unmount();
        handleChange.reset();
    });

    function getDropdownContainer() {
        return document.querySelector(
            'div[data-component="splunk-ui:/components/Popover/Popover"]');
    }

    function dispatchClickEvent(element) {
        let event;
        if (document.MouseEvent) {
            event = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
        } else {
            event = document.createEvent('MouseEvents');
            event.initMouseEvent(
                'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        element.dispatchEvent(event);
    }

    function clickToggle() {
        wrapper.find('button').at(0).simulate('click');
    }

    function clickOnPaletteSwatch(idx) {
        const container = getDropdownContainer();
        const swatch = container.querySelectorAll('li button')[idx];
        dispatchClickEvent(swatch);
    }

    function assertBasicOpenClose() {
        clickToggle();
        assert.isTrue(wrapper.find('Dropdown').prop('open'), 'Color picker is open');
        clickToggle();
        assert.isFalse(wrapper.find('Dropdown').prop('open'), 'Color picker is closed');
    }

    function assertToggleHasCorrectColor(color) {
        assert.equal(wrapper.find('button').at(0).text(), color, 'Has correct color');
    }

    function assertPaletteSwatchSelection(swatchIDX, color) {
        clickToggle();
        clickOnPaletteSwatch(swatchIDX);
        assert.isTrue(handleChange.calledOnce, 'onChange called once');
        assert.equal(handleChange.args[0][0].value, color, 'onChange called with correct value');
    }

    describe('Uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Color
                    defaultValue="#000000"
                    onChange={handleChange}
                    palette={[
                        '#CCCCCC', '#FFFFFF', '#000000',
                    ]}
                />,
            );
        });
        it('renders', () => {
            assert.ok(wrapper);
        });
        it('basic lifecycle', () => {
            assertToggleHasCorrectColor('#000000');
            assertBasicOpenClose();
        });
        it('palette interaction', () => {
            assertPaletteSwatchSelection(0, '#CCCCCC');
            assertToggleHasCorrectColor('#CCCCCC');
        });
    });

    describe('Controlled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Color
                    value="#000000"
                    onChange={handleChange}
                    palette={[
                        '#CCCCCC', '#FFFFFF', '#000000',
                    ]}
                />,
            );
        });
        it('renders', () => {
            assert.ok(wrapper);
        });
        it('basic lifecycle', () => {
            assertToggleHasCorrectColor('#000000');
            assertBasicOpenClose();
        });
        it('palette interaction', () => {
            assertPaletteSwatchSelection(0, '#CCCCCC');
        });
    });
});
