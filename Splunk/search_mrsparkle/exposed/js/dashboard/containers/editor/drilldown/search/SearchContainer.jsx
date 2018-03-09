import { connect } from 'react-redux';
import SearchEditor from 'dashboard/components/editor/drilldown/search/SearchActionEditor';
import { LINK_TO_SEARCH } from 'dashboard/containers/editor/drilldown/drilldownNames';
import route from 'uri/route';
import { updateLinkToSearchSetting } from './searchActions';

const mapStateToProps = state => ({
    options: state.forms[LINK_TO_SEARCH].options,
    activeOption: state.forms[LINK_TO_SEARCH].activeOption,
    search: state.forms[LINK_TO_SEARCH].search,
    searchError: state.forms[LINK_TO_SEARCH].searchError,
    extraTimeRangeOptions: state.forms[LINK_TO_SEARCH].extraTimeRangeOptions,
    activeTimeRangeOption: state.forms[LINK_TO_SEARCH].activeTimeRangeOption,
    activeTimeRange: state.forms[LINK_TO_SEARCH].activeTimeRange,
    activeTimeRangeToken: state.forms[LINK_TO_SEARCH].activeTimeRangeToken,
    earliestTokenError: state.forms[LINK_TO_SEARCH].earliestTokenError,
    latestTokenError: state.forms[LINK_TO_SEARCH].latestTokenError,
    target: state.forms[LINK_TO_SEARCH].target,
    learnMoreLinkForTokens: route.docHelp(
        state.splunkEnv.application.root,
        state.splunkEnv.application.locale,
        'learnmore.dashboard.drilldown.tokens',
    ),
});

const mapDispatchToProps = dispatch => ({
    onOptionChange: (e, { value }) => {
        dispatch(updateLinkToSearchSetting({ activeOption: value }));
    },
    onSearchChange: (e, { value } = {}) => {
        dispatch(updateLinkToSearchSetting({
            search: value,
        }));
    },
    onTargetChange(e, { value }) {
        dispatch(updateLinkToSearchSetting({ target: value }));
    },
    onTimeRangeOptionChange: (e, { value }) => {
        dispatch(updateLinkToSearchSetting({ activeTimeRangeOption: value }));
    },
    onTimeRangeChange: (e, { value }) => {
        dispatch(updateLinkToSearchSetting({ activeTimeRange: value }));
    },
    onTimeRangeTokenChange: (e, { value }) => {
        dispatch(updateLinkToSearchSetting({ activeTimeRangeToken: value }));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchEditor);

