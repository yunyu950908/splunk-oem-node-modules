/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Table from 'splunk-ui/components/Table';

const data = [
    { name: 'Rylan', email: 'Angelita_Weimann42@gmail.com' },
    { name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com' },
    { name: 'Estevan', email: 'Aimee7@hotmail.com' },
    { name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com' },
    { name: 'Tressa', email: 'Yadira1@hotmail.com' },
];

describe('Table', () => {
    let wrapper;

    beforeEach(() => {
        const element = (
            <Table stripeRows>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {data.map(row => (
                        <Table.Row key={row.email}>
                            <Table.Cell>{row.name}</Table.Cell>
                            <Table.Cell>{row.email}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
        wrapper = mount(element);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('renders', () => {
        assert.ok(wrapper);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Table stripeRows>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    {false}
                    {null}
                    {undefined}
                </Table.Head>
                <Table.Body>
                    {false}
                    {null}
                    {undefined}
                    <Table.Row key="first">
                        <Table.Cell>Lorem</Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                        {false}
                        {null}
                        {undefined}
                    </Table.Row>
                </Table.Body>
            </Table>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
