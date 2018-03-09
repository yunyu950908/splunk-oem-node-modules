import React, { Component } from 'react';
import { find } from 'lodash';
import Table from 'splunk-ui/components/Table';
import DL from 'splunk-ui/components/DefinitionList';

export default class ReorderColumns extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            headers: [
                { label: 'Name', key: 'name', align: 'left', width: 200, minWidth: 80 },
                { label: 'Status', key: 'status', align: 'center', width: 80, minWidth: 40 },
                { label: 'Birth State', key: 'birthState', align: 'center', width: 80, minWidth: 40 },
                { label: 'Age', key: 'age', align: 'right', width: 80, minWidth: 40 },
                { label: 'Email Address', key: 'email', align: 'left', width: 400, minWidth: 120 },
            ],
            data: [
                { name: 'Rylan', status: 'single', birthState: 'HI', age: 12, email: 'rylan_Weimann42@gmail.com' },
                { name: 'Amelia', status: 'married', birthState: 'UT', age: 23, email: 'amelia@hotmail.com' },
                { name: 'Estevan', status: 'single', birthState: 'NY', age: 19, email: 'Aimee7@hotmail.com' },
                { name: 'Florence', status: 'single', birthState: 'AZ', age: 20, email: 'Jarrod.Bernier13@yahoo.com' },
                { name: 'Tressa', status: 'married', birthState: 'CA', age: 22, email: 'yadira1@hotmail.com' },
                { name: 'Bernice', status: 'single', birthState: 'TX', age: 17, email: 'bernice.Gilbert@gmail.com' },
                { name: 'Adrian', status: 'married', birthState: 'MA', age: 23, email: 'adrian7456@gmail.com' },
                { name: 'Ester', status: 'single', birthState: 'NY', age: 88, email: 'esternyc@gmail.com' },
                { name: 'Andrew', status: 'single', birthState: 'NM', age: 16, email: 'andrew.fillmore2@gmail.com' },
                { name: 'Felix', status: 'married', birthState: 'AL', age: 36, email: 'felixfelix@hotmail.com' },
            ],
            sortKey: 'name',
            sortDir: 'asc',
        };
    }

    getExpansionRow(row) {
        const id = `${row.email}-expansion`;

        return (
            <Table.Row key={id} id={id} data-role="expandedRow">
                <Table.Cell style={{ borderTop: 'none' }} colSpan={this.state.headers.length}>
                    <DL>
                        <DL.Term>Name</DL.Term>
                        <DL.Description>{row.name}</DL.Description>
                        <DL.Term>Email</DL.Term>
                        <DL.Description>{row.email}</DL.Description>
                    </DL>
                </Table.Cell>
            </Table.Row>
        );
    }

    handlerRequestMoveColumn = ({ fromIndex, toIndex }) => {
        const headers = [...this.state.headers]; // clone
        const headerToMove = headers[fromIndex];

        const insertionIndex = toIndex < fromIndex ? toIndex : toIndex + 1;
        headers.splice(insertionIndex, 0, headerToMove);

        const removalIndex = toIndex < fromIndex ? fromIndex + 1 : fromIndex;
        headers.splice(removalIndex, 1);

        this.setState({ headers });
    };

    handleSort = (e, { sortKey }) => {
        const prevSortKey = this.state.sortKey;
        const prevSortDir = prevSortKey === sortKey ? this.state.sortDir : 'none';
        const nextSortDir = prevSortDir === 'asc' ? 'desc' : 'asc';
        this.setState({
            sortKey,
            sortDir: nextSortDir,
        });
    }
    handleResizeColumn = (event, { columnId, index, width }) => {
        const headers = [...this.state.headers];

        // min and max widths can be controlled in the callback.
        const selectedColumn = find(headers, { key: columnId });

        const widthAboveMinimum = Math.max(width, selectedColumn.minWidth);

        headers[index].width = widthAboveMinimum;

        this.setState({ headers });
    };

    render() {
        const { headers, data, sortKey, sortDir } = this.state;

        return (
            <Table
                stripeRows
                id="table"
                onRequestMoveColumn={this.handlerRequestMoveColumn}
                onRequestResizeColumn={this.handleResizeColumn}
                headType="fixed"
                innerStyle={{ maxHeight: 160 }}
                rowExpansion="single"
            >
                <Table.Head id="table-head">
                    {headers.map(header => (
                        <Table.HeadCell
                            key={header.key}
                            id={header.key}
                            columnId={header.key}
                            align={header.align}
                            width={header.width}
                            onSort={this.handleSort}
                            sortKey={header.key}
                            sortDir={header.key === sortKey ? sortDir : 'none'}
                        >
                            {header.label}
                        </Table.HeadCell>
                    ))}
                </Table.Head>
                <Table.Body>
                    {data.sort((rowA, rowB) => {
                        if (sortDir === 'asc') {
                            return rowA[sortKey] > rowB[sortKey] ? 1 : -1;
                        } else if (sortDir === 'desc') {
                            return rowB[sortKey] > rowA[sortKey] ? 1 : -1;
                        }
                        return 0;
                    }).map(row => (
                        <Table.Row
                            key={row.email}
                            id={row.email}
                            expansionRow={this.getExpansionRow(row)}
                        >
                            {headers.map(header => (
                                <Table.Cell
                                    key={row[header.key]}
                                    id={`${row.email}-${header.key}`}
                                    align={header.align}
                                >
                                    {row[header.key]}
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    }
}
