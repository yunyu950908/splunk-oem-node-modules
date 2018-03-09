import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import moment from 'splunk-ui/util/moment';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Box from 'splunk-ui/components/Box';
import Button from 'splunk-ui/components/Button';
import ChevronLeft from 'splunk-ui/icons/ChevronLeft';
import ChevronRight from 'splunk-ui/icons/ChevronRight';
import css from './MonthHeader.css';


class MonthHeader extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        locale: PropTypes.string,
        value: PropTypes.string.isRequired,
    }

    static defaultProps = {
        locale: 'en_US',
        onChange: noop,
    }

    handleChange(e, diff) {
        const newValue = moment(this.props.value, 'YYYY-MM-DD')
            .add(diff, 'M')
            .format('YYYY-MM-DD');
        this.props.onChange(e, { value: newValue });
    }

    handlePrevMonthClick = (e) => {
        this.handleChange(e, -1);
    }

    handleNextMonthClick = (e) => {
        this.handleChange(e, 1);
    }

    render() {
        const { locale, value } = this.props;
        moment.locale(locale);
        const date = moment(value, 'YYYY-MM-DD');
        const month = date.format('MMMM');
        const year = date.format('YYYY');
        return (
            <Box
                className={css.main}
                {...createTestHook(__filename)}
            >
                <Button
                    appearance="pill"
                    icon={<ChevronLeft size={1} />}
                    className={css.button}
                    data-role="previousMonth"
                    onClick={this.handlePrevMonthClick}
                    inline={false}
                />
                <span className={css.heading} data-role="header">{month} {year}</span>
                <Button
                    appearance="pill"
                    icon={<ChevronRight size={1} />}
                    className={css.button}
                    data-role="nextMonth"
                    onClick={this.handleNextMonthClick}
                    inline={false}
                />
            </Box>
        );
    }
}

export default MonthHeader;
