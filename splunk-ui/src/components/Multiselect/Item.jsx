import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Clickable from 'splunk-ui/components/Clickable';
import Remove from 'splunk-ui/icons/Remove';
import css from './Item.css';

const propTypes = {
    /** Disabled click events.  */
    disabled: PropTypes.bool,
    /** The label on the left.  */
    label: PropTypes.string,
    /** Adds a remove link to the right.  */
    onRequestRemove: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium']),
    /** value is included in data for onLabelClick and onRequestRemove */
    value: PropTypes.any.isRequired,
};

const defaultProps = {
    size: 'medium',
};

export default function Item(props) {
    const {
        disabled,
        label,
        onRequestRemove,
        size,
        value,
        ...otherProps
    } = props;

    function handleRemoveClick(e) {
        onRequestRemove(e, { value });
    }

    return (
        <Clickable
            className={css.main}
            onClick={handleRemoveClick}
            disabled={disabled}
            contentWrapperClassName={css.inner}
            data-size={size}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <div className={css.labelInline} >
                {label}
            </div>
            {!disabled &&
                (<span className={css.removeInline}><Remove /></span>)
            }
        </Clickable>
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
