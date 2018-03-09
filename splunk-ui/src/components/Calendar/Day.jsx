import React from 'react';
import PropTypes from 'prop-types';
import moment from 'splunk-ui/util/moment';
import { createTestHook } from 'splunk-ui/util/testSupport';
import css from './Day.css';

function noop() {}

const propTypes = {
    /** Day number to be displayed */
    value: PropTypes.string,
    /** Locale set by language and localization specifiers. */
    locale: PropTypes.string,
    /** Callback for click */
    onClick: PropTypes.func,
    /** Whether or not this day is selected */
    selected: PropTypes.bool,
};

const defaultProps = {
    locale: 'en_US',
    onClick: noop,
    selected: false,
};

export default function Day(props) {
    const { onClick, selected, value } = props;
    moment.locale(props.locale);

    function handleClick(e) {
        onClick(e, { value });
    }

    return (
        <td
            className={selected ? css.tdSelected : css.td}
            {...createTestHook(__filename)}
        >
            <button
                className={selected ? css.buttonSelected : css.button}
                aria-checked={selected}
                role="menuitemradio"
                onClick={handleClick}
            >
                {value && moment(value, 'YYYY-MM-DD').format('D')}
            </button>
        </td>
    );
}

Day.propTypes = propTypes;
Day.defaultProps = defaultProps;
