/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import ColumnLayout from 'splunk-ui/components/ColumnLayout';

describe('ColumnLayout', () => {
    it('renders', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4}>col 1</ColumnLayout.Column>
                    <ColumnLayout.Column span={4}>col 2</ColumnLayout.Column>
                    <ColumnLayout.Column span={4}>col 3</ColumnLayout.Column>
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);

        assert.ok(wrapper);
        assert.lengthOf(wrapper.children(), 1);

        const row = wrapper.childAt(0);
        assert.ok(row.is(ColumnLayout.Row));
        assert.lengthOf(row.children(), 3);

        for (let i = 1; i <= 3; i += 1) {
            const col = row.childAt(i - 1);
            assert.ok(col.is(ColumnLayout.Column));
            assert.equal(col.text(), `col ${i}`);
        }
    });

    it('show gutters', () => {
        const element = (
            <ColumnLayout gutter={1}>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={6} />
                    <ColumnLayout.Column span={6} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        const rows = wrapper.find(ColumnLayout.Row);
        assert.lengthOf(rows, 3);

        for (let i = 1; i <= 3; i += 1) {
            const row = rows.at(i - 1);
            assert.lengthOf(row.children(), i);
            assert.equal(row.prop('gutter'), 1);
            assert.equal(row.prop('isFirstChild'), i === 1);
            assert.equal(row.prop('isLastChild'), i === 3);

            for (let j = 1; j <= i; j += 1) {
                const col = row.childAt(j - 1);
                assert.equal(col.prop('gutter'), 1);
                assert.equal(col.prop('isFirstChild'), j === 1);
                assert.equal(col.prop('isLastChild'), j === i);
            }
        }
    });

    it('show dividers', () => {
        const element = (
            <ColumnLayout divider="vertical">
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={6} />
                    <ColumnLayout.Column span={6} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);

        const rows = wrapper.find(ColumnLayout.Row);
        assert.lengthOf(rows, 3);

        for (let i = 1; i <= 3; i += 1) {
            const row = rows.at(i - 1);
            /* Dividers are extra children inserted between the Columns defined above */
            assert.lengthOf(row.children(), (i * 2) - 1);
        }
    });

    it('sets isFirstChild and isLastChild', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={6} />
                    <ColumnLayout.Column span={6} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        const rows = wrapper.find(ColumnLayout.Row);
        assert.lengthOf(rows, 3);

        for (let i = 1; i <= 3; i += 1) {
            const row = rows.at(i - 1);
            assert.lengthOf(row.children(), i);
            assert.equal(row.prop('isFirstChild'), i === 1);
            assert.equal(row.prop('isLastChild'), i === 3);

            for (let j = 1; j <= i; j += 1) {
                const col = row.childAt(j - 1);
                assert.equal(col.prop('isFirstChild'), j === 1);
                assert.equal(col.prop('isLastChild'), j === i);
            }
        }
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                {false}
                {undefined}
                {null}
                {' '}
                word
            </ColumnLayout>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('should handle invalid values in `Row` children correctly', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                    {false}
                    {undefined}
                    {null}
                    {' '}
                    word
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('should handle invalid values in `Column` children correctly', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12}>
                        {false}
                        {undefined}
                        {null}
                        {' '}
                        word
                    </ColumnLayout.Column>
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
});
