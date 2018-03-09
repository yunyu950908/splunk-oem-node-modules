/* eslint-env mocha */

import React from 'react';
import Promise from 'core-js/es6/promise';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Button from 'splunk-ui/components/Button';
import Popover from 'splunk-ui/components/Popover';

const popoverSelector = '[data-component="splunk-ui:/components/Popover/Popover"]';

describe('Popover', () => {
    function focusOrTimeout() {
        let l;
        return new Promise((f) => {
            l = f;
            setTimeout(f, 1000);
            document.addEventListener('focus', l, true);
        }).then(() => {
            document.removeEventListener('focus', l);
        });
    }

    it('renders', () => {
        const wrapper = mount(<Popover name="World" />);
        assert.ok(wrapper);
        wrapper.unmount();
    });

    it('first element takes focus', () => {
        const anchor = mount(<a href="">Anchor</a>);
        const wrapper = mount(
            <Popover open takeFocus anchor={anchor.instance()}>
                <Button>1</Button>
                <Button>2</Button>
            </Popover>,
        );

        return focusOrTimeout().then(() => {
            const menu = document.querySelector(popoverSelector);
            assert.isTrue(menu.contains(document.activeElement));
            assert.ok(document.activeElement.webkitMatchesSelector(':first-child'));
            wrapper.unmount();
        });
    });

    it('container takes focus', () => {
        const anchor = mount(<a href="">Anchor</a>);
        const wrapper = mount(<Popover open takeFocus anchor={anchor.instance()} />);
        return focusOrTimeout().then(() => {
            const menu = document.querySelector(popoverSelector);
            assert.equal(menu.firstChild, document.activeElement);
            wrapper.unmount();
        });
    });

    it('does not container takes focus', () => {
        const anchor = mount(<a href="">Anchor</a>);
        const wrapper = mount(<Popover open anchor={anchor.instance()} />);
        return focusOrTimeout().then(() => {
            const menu = document.querySelector(popoverSelector);
            assert.notEqual(menu.firstChild, document.activeElement);
            wrapper.unmount();
        });
    });
});
