import _ from 'underscore';
import React, { PropTypes } from 'react';
import TimeRangeTokenEditor from 'dashboard/components/shared/TimeRangeTokenEditor';
import TimeRangeSelector from 'dashboard/components/shared/TimeRangeSelector';
import ItemSelector from 'dashboard/components/shared/ItemSelector';
import {
    EXPLICIT_OPTION,
    TOKEN_OPTION,
    GLOBAL_OPTION,
} from 'dashboard/containers/editor/drilldown/search/timeRangeOptionNames';
import { createTestHook } from 'util/test_support';

const TimeRangeEditor = ({
    extraOptions,
    activeOption,
    onOptionChange,
    activeTimeRange,
    onTimeRangeChange,
    activeTimeRangeToken,
    onTimeRangeTokenChange,
    earliestTokenError,
    latestTokenError,
}) => {
    const options = (extraOptions || []).concat([
        {
            value: EXPLICIT_OPTION,
            label: _('Use time picker').t(),
        },
        {
            value: TOKEN_OPTION,
            label: _('Tokens').t(),
        },
        {
            value: GLOBAL_OPTION,
            label: _('Global').t(),
        },
    ]);

    const optionToView = {
        [GLOBAL_OPTION]: null,
        [TOKEN_OPTION]: <TimeRangeTokenEditor
            activeTimeRangeToken={activeTimeRangeToken}
            onTimeRangeTokenChange={onTimeRangeTokenChange}
            earliestTokenError={earliestTokenError}
            latestTokenError={latestTokenError}
        />,
        [EXPLICIT_OPTION]: <TimeRangeSelector
            activeTimeRange={activeTimeRange}
            onTimeRangeChange={onTimeRangeChange}
        />,
    };

    return (
        <div {...createTestHook(module.id)}>
            <ItemSelector
                activeItem={activeOption}
                label={_('Time range').t()}
                items={options}
                onChange={onOptionChange}
                {...createTestHook(null, 'timeRangeType')}
            />
            {optionToView[activeOption]}
        </div>
    );
};

TimeRangeEditor.propTypes = {
    extraOptions: PropTypes.arrayOf(PropTypes.object),
    activeOption: PropTypes.string.isRequired,
    onOptionChange: PropTypes.func.isRequired,
    activeTimeRange: PropTypes.shape({
        earliest: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        latest: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    onTimeRangeChange: PropTypes.func.isRequired,
    activeTimeRangeToken: PropTypes.shape({
        earliest: PropTypes.string,
        latest: PropTypes.string,
    }).isRequired,
    onTimeRangeTokenChange: PropTypes.func.isRequired,
    earliestTokenError: PropTypes.string,
    latestTokenError: PropTypes.string,
};

TimeRangeEditor.defaultProps = {
    extraOptions: [],
    earliestTokenError: '',
    latestTokenError: '',
};

export default TimeRangeEditor;
