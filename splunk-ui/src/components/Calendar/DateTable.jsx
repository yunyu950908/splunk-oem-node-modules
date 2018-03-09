import React from 'react';
import PropTypes from 'prop-types';
import { noop, times } from 'lodash';
import moment from 'splunk-ui/util/moment';
import Day from './Day';
import css from './Calendar.css';

const propTypes = {
    displayValue: PropTypes.string.isRequired,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string.isRequired,
};

const defaultProps = {
    locale: 'en_US',
    onChange: noop,
};

function renderPaddingCells(count) {
    return times(count, i => <td key={`${i}`} />);
}

function renderDays({ selectedDate, startDate, endDate, locale, onChange }) {
    const cursor = moment(startDate).startOf('month');
    const days = [];
    while (cursor.isSameOrBefore(endDate)) {
        const cursorString = cursor.format('YYYY-MM-DD');
        days.push(
            <Day
                key={cursorString}
                value={cursorString}
                locale={locale}
                onClick={onChange}
                selected={selectedDate.isSame(cursor)}
            />,
        );
        cursor.add(1, 'day');
    }
    return days;
}

function renderRows(cells) {
    return cells.reduce((accum, el, i) => {
        const row = Math.floor(i / 7);
        accum[row].push(el);
        return accum;
    }, times(7, () => []))
    // eslint-disable-next-line react/no-array-index-key
    .map((row, i) => <tr key={`$week-${i}`}>{row}</tr>);
}

function renderHeader() {
    return (
        <thead>
            <tr>
                {times(7, (i) => {
                    const label = moment().weekday(i).format('ddd');
                    return (
                        <th className={css.th} key={label}>
                            {label}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default function DateTable(props) {
    const { displayValue, locale, onChange, selectedValue } = props;
    const displayDate = moment(displayValue, 'YYYY-MM-DD');
    const selectedDate = moment(selectedValue, 'YYYY-MM-DD');
    const startDate = moment(displayDate).startOf('month');
    const endDate = moment(displayDate).endOf('month').startOf('day');

    const cells = renderPaddingCells(startDate.format('e'))
        .concat(renderDays({ selectedDate, startDate, endDate, locale, onChange }))
        .concat(renderPaddingCells(6 - endDate.format('e')));

    return (
        <table className={css.table} role="menu">
            {renderHeader()}
            <tbody>
                {renderRows(cells)}
            </tbody>
        </table>
    );
}

DateTable.propTypes = propTypes;
DateTable.defaultProps = defaultProps;
