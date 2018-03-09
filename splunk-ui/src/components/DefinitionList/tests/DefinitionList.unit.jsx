/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import DL from 'splunk-ui/components/DefinitionList';
import Link from 'splunk-ui/components/Link';
import P from 'splunk-ui/components/Paragraph';

describe('DefinitionList', () => {
    it('renders', () => {
        const wrapper = mount(
            <DL>
                <DL.Term>First Item</DL.Term>
                <DL.Description>
                    Description: <Link to="https://duckduckgo.com/">Go to DuckDuckGo</Link>
                </DL.Description>
                <DL.Term>Another Item</DL.Term>
                <DL.Description>
                    <P>Description</P>
                    <P>Description</P>
                </DL.Description>
                <DL.Term>Third Item</DL.Term>
                <DL.Description>Description</DL.Description>
                <DL.Term>Last Item</DL.Term>
                <DL.Description>Description</DL.Description>
            </DL>,
        );
        assert.ok(wrapper);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <DL>
                <DL.Term id="first_item">First Item</DL.Term>
                {undefined}
                <DL.Description id="first_description">Description</DL.Description>
                {false}
                {null}
                {' '}
                word
            </DL>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
});
