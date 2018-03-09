import _ from 'underscore';
import React, { PropTypes } from 'react';
import ControlGroup from 'splunk-ui/components/ControlGroup';
import RadioBar from 'splunk-ui/components/RadioBar';
import OpenInNewTab from 'dashboard/components/shared/OpenInNewTab';
import SearchEditor from 'dashboard/components/shared/SearchEditor';
import Link from 'splunk-ui/components/Link';
import FormMessage from 'dashboard/components/shared/FormMessage';
import StaticContent from 'splunk-ui/components/StaticContent';
import { createTestHook } from 'util/test_support';
import SearchTimeEditor from './SearchTimeEditor';

const SearchActionEditor = ({
    options,
    activeOption,
    onOptionChange,
    search,
    searchError,
    onSearchChange,
    extraTimeRangeOptions,
    activeTimeRangeOption,
    onTimeRangeOptionChange,
    activeTimeRange,
    onTimeRangeChange,
    activeTimeRangeToken,
    onTimeRangeTokenChange,
    earliestTokenError,
    latestTokenError,
    target,
    onTargetChange,
    learnMoreLinkForTokens,
}) => {
    const radioBarOptions = options.map(option => (
        <RadioBar.Option
            key={option.value}
            label={option.label}
            value={option.value}
        />
    ));
    const hasError = !!searchError;
    const label = _('Search string').t();
    const errorMessage = hasError ? `${label} ${searchError}` : '';

    const searchActionDetail = activeOption === 'custom' ?
        (<div {...createTestHook(module.id)}>
            <ControlGroup label="" controlsLayout="none">
                <StaticContent inline>
                    {_('You can include predefined drilldown tokens in a custom search.').t()}
                    {' '}
                    <Link
                        to={learnMoreLinkForTokens}
                        openInNewContext
                    >{_('Learn more').t()}</Link>
                </StaticContent>
            </ControlGroup>
            <FormMessage active={hasError} type="error" message={errorMessage} />
            <ControlGroup
                label={label}
                error={hasError}
            >
                <SearchEditor
                    value={search}
                    onChange={onSearchChange}
                />
            </ControlGroup>
            <SearchTimeEditor
                extraOptions={extraTimeRangeOptions}
                activeOption={activeTimeRangeOption}
                onOptionChange={onTimeRangeOptionChange}
                activeTimeRange={activeTimeRange}
                onTimeRangeChange={onTimeRangeChange}
                activeTimeRangeToken={activeTimeRangeToken}
                onTimeRangeTokenChange={onTimeRangeTokenChange}
                earliestTokenError={earliestTokenError}
                latestTokenError={latestTokenError}
            />
            <OpenInNewTab
                value={target}
                onClick={onTargetChange}
            />
        </div>) :
        (<ControlGroup label="">
            {_('A search generates automatically using values from the clicked element.').t()}
        </ControlGroup>);

    return (
        <div>
            <ControlGroup label={_('').t()}>
                <RadioBar value={activeOption} onChange={onOptionChange}>
                    {radioBarOptions}
                </RadioBar>
            </ControlGroup>
            {searchActionDetail}
        </div>
    );
};

SearchActionEditor.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeOption: PropTypes.string.isRequired,
    onOptionChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    searchError: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    extraTimeRangeOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeTimeRangeOption: PropTypes.string.isRequired,
    onTimeRangeOptionChange: PropTypes.func.isRequired,
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
    target: PropTypes.string.isRequired,
    onTargetChange: PropTypes.func.isRequired,
    learnMoreLinkForTokens: PropTypes.string.isRequired,
};

SearchActionEditor.defaultProps = {
    activeTimeRangeToken: '',
    earliestTokenError: '',
    latestTokenError: '',
};

export default SearchActionEditor;
