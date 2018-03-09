/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import ResultsMenu from 'splunk-ui/components/ResultsMenu';

describe('ResultsMenu', () => {
    it('renders', () => {
        const wrapper = mount(<ResultsMenu />);
        assert.ok(wrapper);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <ResultsMenu>
                <ResultsMenu.Item label="Lorem" />
                {false}
                <ResultsMenu.Item label="Ipsum" />
                {undefined}
                {null}
                {' '}
                word
            </ResultsMenu>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
});
