import React from 'react';
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Box from 'splunk-ui/components/Box';
import Clickable from 'splunk-ui/components/Clickable';
import Remove from 'splunk-ui/icons/Remove';
import Progress from 'splunk-ui/components/Progress';
import css from './Item.css';

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
    /** Show the Item in an error state. */
    error: PropTypes.bool,
    /** A unique for this file. */
    itemId: PropTypes.any,
    /** The name is displayed on the item. */
    name: PropTypes.string.isRequired,
    /** @docs-ignore */
    onClick: PropTypes.func,
    /** @docs-ignore */
    size: PropTypes.oneOf(['small', 'medium']),
    /** If the uploadPercentage is 0, the item is assumed to be queued. If the upload is complete or
     * not applicable, uploadPercentage must be undefined. */
    uploadPercentage: PropTypes.number,
};

const defaultProps = {
    error: false,
};

function Item(props) {
    const {
        error,
        itemId,
        name,
        onClick,
        size,
        uploadPercentage,
        ...otherProps
    } = props;

    function handleRequestRemove(e) {
        e.preventDefault();
        onClick({ itemId, name });
    }

    return (
        <Box
            className={css.main}
            {...createTestHook(__filename)}
            {...otherProps}
            flex
            data-size={size}
            data-error={error || null}
        >
            <div className={css.label} >
                {name}
            </div>
            <Clickable
                className={css.remove}
                onClick={handleRequestRemove}
            >
                <Remove />
            </Clickable>
            {!isUndefined(uploadPercentage) && (uploadPercentage > 0) && (
                <Progress
                    className={css.progress}
                    percentage={uploadPercentage}
                />
            )}
        </Box>
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
export default Item;
