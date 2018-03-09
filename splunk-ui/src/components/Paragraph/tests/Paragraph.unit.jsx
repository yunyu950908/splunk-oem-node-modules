/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { lorem } from 'splunk-ui/fixtures/text';
import Link from 'splunk-ui/components/Link';
import Paragraph from 'splunk-ui/components/Paragraph';

describe('Paragraph', () => {
    it('renders children correctly', () => {
        const wrapper = mount(<Paragraph>{lorem}</Paragraph>);
        assert.equal(wrapper.text(), lorem);
    });

    it('handles links within text correctly', () => {
        const wrapper = mount(
            <Paragraph>
                Find a <Link to="http://www.duckduckgo.com">Duck</Link>!
            </Paragraph>,
        );
        assert.equal(wrapper.text(), 'Find a Duck!');
        assert.isTrue(wrapper.find('Link').exists());
        assert.equal(wrapper.find('Link').props().to, 'http://www.duckduckgo.com');
    });

    it('handles attributes correctly', () => {
        const wrapper = mount(<Paragraph data-test>{lorem}</Paragraph>);
        assert.isTrue(wrapper.find('[data-test]').exists());
    });
});
