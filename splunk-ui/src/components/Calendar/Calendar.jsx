import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, noop, omit } from 'lodash';
import moment from 'splunk-ui/util/moment';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';

import MonthHeader from './MonthHeader';
import DateTable from './DateTable';
import css from './Calendar.css';

// PropType validator that provided string is formatted correctly.
function validateDate(props, propName, componentName) { // eslint-disable-line consistent-return
    if (!moment(props[propName], 'YYYY-MM-DD').isValid()) {
        return new Error(`Invalid ${propName} ${props[propName]} passed to ${componentName}.
${propName} must be a string date formateed 'YYYY-MM-DD'.`);
    }
}

class Calendar extends Component {
    static propTypes = {
        /** @docs-ignore */
        className: PropTypes.string,
        /**
        * The id of the description. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's help component.
        */
        describedBy: PropTypes.string,
        /**
        * The id of the label. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's label.
        */
        labelledBy: PropTypes.string,
        /** Locale set by language and localization specifiers. */
        locale: PropTypes.string,
        /**
         * Called when a date is selected from the Calendar.
         */
        onChange: PropTypes.func,
        /**
         * The current date value formatted 'YYYY-MM-DD'.
         */
        value: validateDate,
    }

    static defaultProps = {
        locale: 'en_US',
        onChange: noop,
        value: moment().format('YYYY-MM-DD'),
    }

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            internalValue: props.value,
        };
    }

    handleMonthChange = (e, { value }) => {
        this.setState({
            internalValue: value,
        });
    }

    render() {
        const {
            className,
            describedBy,
            labelledBy,
            locale,
            onChange,
            value,
        } = this.props;

        const displayValue = this.state.internalValue;

        return (
            <Box
                inline
                className={toClassName(css.main, className)}
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                {...createTestHook(__filename)}
                {...omit(this.props, keys(Calendar.propTypes))}
            >
                <MonthHeader
                    value={displayValue}
                    locale={locale}
                    onChange={this.handleMonthChange}
                />
                <DateTable
                    displayValue={displayValue}
                    selectedValue={value}
                    locale={locale}
                    onChange={onChange}
                />
            </Box>
        );
    }
}

export default Calendar;
