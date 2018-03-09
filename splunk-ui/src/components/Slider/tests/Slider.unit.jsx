/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Slider from 'splunk-ui/components/Slider';

describe('Slider', () => {
    it('renders', () => {
        const wrapper = mount(<Slider defaultValue={1} />);
        assert.ok(wrapper);
    });

    it('sets state to selected on click', () => {
        const wrapper = mount(<Slider defaultValue={1} />);
        const clickPosition = 0;
        wrapper.simulate('click', { clientX: clickPosition });
        assert.equal(wrapper.state('position'), clickPosition);
    });

    it('value increases on right arrow key', () => {
        const wrapper = mount(<Slider defaultValue={1} />);
        const sliderThumb = wrapper.find('[tabIndex="0"]');
        const originalValue = wrapper.state('value');
        sliderThumb.simulate('keydown', { keyCode: 39 });
        assert.ok(originalValue + 1 === wrapper.state('value'));
    });

    it('verify roundTo function', () => {
        const wrapper = mount(<Slider defaultValue={3} step={0.1} />);
        const slider = wrapper.getNode();
        const rounded = slider.roundValue(4.485921);
        assert.equal(rounded, 4.5);
    });
});
