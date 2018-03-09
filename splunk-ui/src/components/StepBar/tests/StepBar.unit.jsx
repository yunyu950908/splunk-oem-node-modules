/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import StepBar from 'splunk-ui/components/StepBar';

describe('StepBar', () => {
    it('step selection 0', () => {
        const wrapper = mount(
            <StepBar activeStepId={0}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>,
        );
        const steps = wrapper.find('Step');
        const step1 = steps.at(0);
        assert.equal(step1.prop('status'), 'active', 'step 1 is status active');
        assert.isFalse(step1.prop('isLast'), 'step 1 is not last');
        const step2 = steps.at(1);
        assert.equal(step2.prop('status'), 'next', 'step 2 is status next');
        assert.isFalse(step1.prop('isLast'), 'step 2 is not last');
        const step3 = steps.at(2);
        assert.equal(step3.prop('status'), 'next', 'step 3 is status next');
        assert.isTrue(step3.prop('isLast'), 'step 3 is last');
    });

    it('step selection 1', () => {
        const wrapper = mount(
            <StepBar activeStepId={1}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>,
        );
        const steps = wrapper.find('Step');
        const step1 = steps.at(0);
        assert.equal(step1.prop('status'), 'prev', 'step 1 is status prev');
        assert.isFalse(step1.prop('isLast'), 'step 1 is not last');
        const step2 = steps.at(1);
        assert.equal(step2.prop('status'), 'active', 'step 2 is status active');
        assert.isFalse(step1.prop('isLast'), 'step 2 is not last');
        const step3 = steps.at(2);
        assert.equal(step3.prop('status'), 'next', 'step 3 is status next');
        assert.isTrue(step3.prop('isLast'), 'step 3 is last');
    });

    it('step selection 2', () => {
        const wrapper = mount(
            <StepBar activeStepId={2}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>,
        );
        const steps = wrapper.find('Step');
        const step1 = steps.at(0);
        assert.equal(step1.prop('status'), 'prev', 'step 1 is status prev');
        assert.isFalse(step1.prop('isLast'), 'step 1 is not last');
        const step2 = steps.at(1);
        assert.equal(step2.prop('status'), 'prev', 'step 2 is status active');
        assert.isFalse(step1.prop('isLast'), 'step 2 is not last');
        const step3 = steps.at(2);
        assert.equal(step3.prop('status'), 'active', 'step 3 is status next');
        assert.isTrue(step3.prop('isLast'), 'step 3 is last');
    });

    it('handles `false` children correctly', () => {
        const wrapper = mount(
            <StepBar activeStepId={2}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                {false && <StepBar.Step id="hidden" label="Hidden" />}
            </StepBar>,
        );
        assert.isFalse(wrapper.find('#hidden').exists());
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <StepBar activeStepId={2}>
                <StepBar.Step label="One" />
                {null}
                {undefined}
                <StepBar.Step label="Two" />
                {false}
                {' '}
                word
            </StepBar>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('has correctly derived aria attributes', () => {
        const wrapper = mount(
            <StepBar activeStepId={1}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>,
        );
        const ul = wrapper.find('ul');
        assert.equal(ul.prop('aria-valuemin'), '1', 'aria min value correct');
        assert.equal(ul.prop('aria-valuemax'), '3', 'aria max value correct');
        assert.equal(ul.prop('aria-valuenow'), '2', 'aria now value correct');
    });
});
