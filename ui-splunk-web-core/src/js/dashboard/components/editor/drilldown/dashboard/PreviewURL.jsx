import _ from 'underscore';
import React, { PropTypes } from 'react';
import ControlGroup from 'splunk-ui/components/ControlGroup';
import Box from 'splunk-ui/components/Box';
import css from './PreviewURL.pcssm';

const PreviewURL = ({
    url,
}) => {
    const label = _.isString(url) ? url : url.label;
    const value = _.isString(url) ? url : url.value;

    // show PreviewURL only when the url is not an empty string.
    if (!value) {
        return null;
    }

    return (
        <ControlGroup label={_('Preview URL').t()} controlsLayout="none">
            <Box className={css.padTopBottom}>
                <span className={css.linkLabel}>{label}</span>
            </Box>
        </ControlGroup>
    );
};

PreviewURL.propTypes = {
    url: PropTypes.oneOfType([
        // sometimes the label and actual value are not the same.
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
        PropTypes.string,
    ]).isRequired,
};

export default PreviewURL;
