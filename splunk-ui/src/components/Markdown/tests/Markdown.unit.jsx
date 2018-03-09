/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';

import Code from 'splunk-ui/components/Code';
import Heading from 'splunk-ui/components/Heading';
import Link from 'splunk-ui/components/Link';
import List from 'splunk-ui/components/List';
import P from 'splunk-ui/components/Paragraph';
import Markdown from 'splunk-ui/components/Markdown';

const cases = {
    bulletList: `
- Item 1
- Item 2
- Item 3
`,
    code: `
\`\`\`clike
var someCode = "isHere";
function goWild () {
  console.log('woof');
}
\`\`\`
`,
    codeLiteral: `
Code \`var someCode = "isHere"\` like this
`,
    heading: `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
`,
    html: `
<div></div>
`,
    link: '[Github](https://github.com)',
    ordererdList: `
1. Item 1
2. Item 2
3. Item 2
`,
    paragraph: 'nothing suspecious here',
};

describe('Markdown', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders paragraph correctly', () => {
        wrapper = mount(<Markdown text={cases.paragraph} />);
        assert.lengthOf(wrapper.find(P), 1);
    });
    it('renders bullet list correctly', () => {
        wrapper = mount(<Markdown text={cases.bulletList} />);
        const list = wrapper.find(List);
        assert.ok(list, 'has <List>');
        assert.equal(list.prop('type'), 'disc', 'with prop type="disc"');
        assert.lengthOf(list.find(List.Item), 3, 'has 3 <List.Item> inside');
    });
    it('renders ordered list correctly', () => {
        wrapper = mount(<Markdown text={cases.ordererdList} />);
        const list = wrapper.find(List);
        assert.ok(list, 'has <List>');
        assert.equal(list.prop('type'), 'decimal', 'with prop type="decimal"');
        assert.lengthOf(list.find(List.Item), 3, 'has 3 <List.Item> inside');
    });
    it('renders code block correctly', () => {
        wrapper = mount(<Markdown text={cases.code} />);
        const codeBlock = wrapper.find(Code);
        assert.ok(codeBlock);
        assert.equal(codeBlock.prop('language'), 'clike', 'with proper lang');
    });
    it('renders code literal correctly', () => {
        wrapper = mount(<Markdown text={cases.codeLiteral} />);
        const code = wrapper.find('code');
        assert.ok(code);
        assert.lengthOf(code, 1, 'has 1 <code>');
    });
    it('renders headings correctly', () => {
        wrapper = mount(<Markdown text={cases.heading} />);
        const headings = wrapper.find(Heading);
        assert.lengthOf(headings, 5, 'renders 5 <Heading>s');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 1), 1, 'has 1 level 1');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 2), 1, 'has 1 level 2');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 3), 1, 'has 1 level 3');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 4), 1, 'has 1 level 4');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 5), 1, 'has 1 level 5');
    });
    it('renders link correctly', () => {
        wrapper = mount(<Markdown text={cases.link} />);
        const link = wrapper.find(Link);
        assert.lengthOf(link, 1, 'has 1 <Link>');
        assert.equal(link.prop('to'), 'https://github.com');
        assert.equal(link.text(), 'Github');
    });
    it('escapes html contents', () => {
        wrapper = mount(<Markdown text={cases.html} />);
        assert.equal(wrapper.text().trim(), cases.html.trim());
    });
});
