/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Text from 'splunk-ui/components/Text';

describe('Text', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Text />);
        assert.ok(wrapper);
    });

    it('invokes the onChange callback', () => {
        const handleChange = sinon.spy();
        const input = mount(<Text onChange={handleChange} value="" />).find('input');
        input.simulate('change', { target: { value: 'hello' } });
        assert(handleChange.calledOnce, 'The onChange handler is called exactly once');
        assert.equal(handleChange.args[0][1].value, 'hello',
            'The onChange handler is passed the new value');
    });

    it('callback can update value', () => {
        let input;
        const handleChange = sinon.spy((e, { value }) => input.setProps({ value }));
        input = mount(<Text onChange={handleChange} value="" />);

        input.find('input').simulate('change', { target: { value: 'hello' } });

        assert.equal(input.find('input').get(0).value, 'hello',
            'The user can update the controlled field value');
    });

    it('sets default value', () => {
        const input = mount(<Text defaultValue="goodbye" />);
        assert.equal(input.find('input').get(0).value, 'goodbye',
            'The default value populates the field');
    });

    it('invokes the onChange callback', () => {
        const input = mount(<Text defaultValue="goodbye" />).find('input');
        input.simulate('change', { target: { value: 'hello' } });
        assert.equal(input.get(0).value, 'hello',
            'The user can update the uncontrolled field value');
    });

    it('throws if mixing controlled and uncontrolled', () => {
        const handleChange = sinon.spy();
        assert.throws(() => mount(
            <Text value="goodbye" onChange={handleChange} defaultValue="hello" />,
        ));
    });

    it('throws if update defaultValue', () => {
        const input = mount(<Text defaultValue="hello" />);
        assert.throws(() => input.setProps({ defaultValue: 'goodbye' }));
    });
});
