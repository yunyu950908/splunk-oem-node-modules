/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import ControlGroup from 'splunk-ui/components/ControlGroup';
import StaticContent from 'splunk-ui/components/StaticContent';

describe('StaticContent', () => {
    it('renders, with string', () => {
        const wrapper = shallow(
            <ControlGroup>
                <StaticContent> Hello, world! </StaticContent>
            </ControlGroup>,
        );
        assert.ok(wrapper);
    });
    it('supports elements as child', () => {
        const wrapper = shallow(
            <ControlGroup>
                <StaticContent><div /></StaticContent>
            </ControlGroup>,
        );
        assert.ok(wrapper);
    });
});
