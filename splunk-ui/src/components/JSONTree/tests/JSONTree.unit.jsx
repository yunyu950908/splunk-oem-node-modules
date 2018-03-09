/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import JSONTree from 'splunk-ui/components/JSONTree';
import css from 'splunk-ui/components/JSONTree/JSONTreeNode.css';

const sampleObj = {
    a: 1,
    b: [1, 2, 3],
    c: {
        d: 'this',
        e: ['is', 'a', 'test'],
    },
    f: true,
};

describe('JSONTree', () => {
    it('render json', () => {
        const wrapper = mount(<JSONTree json={sampleObj} />);
        assert.ok(wrapper);
        assert.lengthOf(wrapper.find(`.${css.number}`), 4);
        assert.lengthOf(wrapper.find(`.${css.string}`), 4);
        assert.lengthOf(wrapper.find(`.${css.boolean}`), 1);
    });
});
