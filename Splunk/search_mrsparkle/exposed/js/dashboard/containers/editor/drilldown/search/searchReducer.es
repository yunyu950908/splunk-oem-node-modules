import _ from 'underscore';
import {
    UPDATE_LINK_TO_SEARCH_SETTING,
} from 'dashboard/containers/editor/drilldown/actionTypes';
import { EXPLICIT_OPTION } from 'dashboard/containers/editor/drilldown/search/timeRangeOptionNames';

const INITIAL_SEARCH_SETTING = {
    options: [
        {
            label: _('Auto').t(),
            value: 'default',
        },
        {
            label: _('Custom').t(),
            value: 'custom',
        },
    ],
    activeOption: 'default',
    search: '',
    searchError: '',
    target: '',
    extraTimeRangeOptions: [],
    activeTimeRangeOption: EXPLICIT_OPTION,
    activeTimeRange: {
        earliest: 0,
        latest: '',
    },
    activeTimeRangeToken: {
        earliest: '',
        latest: '',
    },
    earliestTokenError: '',
    latestTokenError: '',
};

const search = (state = INITIAL_SEARCH_SETTING, action) => {
    switch (action.type) {
        case UPDATE_LINK_TO_SEARCH_SETTING:
            return Object.assign({}, state, action.value);
        default:
            return state;
    }
};

export default search;