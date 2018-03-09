/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Paginator from 'splunk-ui/components/Paginator';
import PaginatorButton from 'splunk-ui/components/Paginator/PaginatorButton';

describe('Paginator', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Paginator current={1} totalPages={100} />);
        assert.ok(wrapper);
    });

    it('renders the correct number of links when numPageLinks is greater than total pages', () => {
        const wrapper = mount(<Paginator totalPages={5} numPageLinks={10} current={5} />);
        assert.lengthOf(wrapper.find(PaginatorButton), 7); // 5 pages plus 2 for forward and back.
    });
});
