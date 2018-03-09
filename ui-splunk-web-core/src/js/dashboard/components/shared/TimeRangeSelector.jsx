import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';
import BackboneAdapterBase from 'components/BackboneAdapterBase';
import TimeRangePicker from 'views/shared/timerangepicker/Master';
import TimeRangeModel from 'models/shared/TimeRange';
import ControlGroup from 'splunk-ui/components/ControlGroup';
import ModelHelper from 'controllers/dashboard/helpers/ModelHelper';
import css from './TimeRangeSelector.pcssm';

const propTypes = {
    activeTimeRange: React.PropTypes.object,
    onTimeRangeChange: React.PropTypes.func.isRequired,
};

class TimeRangeSelector extends BackboneAdapterBase {
    constructor(props, context) {
        super(props, context);
        this.model = Object.assign({}, this.context.model, {
            timeRange: new TimeRangeModel(props.activeTimeRange),
            searchModel: new Backbone.Model(props.activeTimeRange),
        });
        this.model.timeRange.initialDfd = this.model.timeRange.save();
        this.collection = Object.assign({}, this.context.collection, {
            timeRanges: ModelHelper.getCachedModel('times', {
                app: this.model.application.get('app'),
                owner: this.model.application.get('owner'),
                count: -1,
            }),
        });
        this.model.searchModel.on('change', this.handleTimeRangeChange, this);
    }

    handleTimeRangeChange() {
        this.props.onTimeRangeChange(null, { value: this.model.searchModel.toJSON() });
    }

    getView() {
        return new TimeRangePicker({
            timeRangeAttrNames: {
                earliest: 'earliest',
                latest: 'latest',
            },
            model: {
                state: this.model.searchModel,
                timeRange: this.model.timeRange,
                appLocal: this.model.appLocal,
                user: this.model.user,
                application: this.model.application,
            },
            collection: this.collection.timeRanges,
            timerangeClassName: `btn ${css.main}`,
            popdownOptions: {
                // this is to override the default settings in timerangepicker/Master.js, so that
                // the dropdown menu will not scroll as the background scrolls.
                attachDialogTo: '',
            },
        });
    }

    render() {
        return (
            <ControlGroup label={_('').t()}>
                <div
                    className={css.main} {..._.omit(this.props, _.keys(propTypes))}
                    ref={c => (this.container = c)}
                />
            </ControlGroup>
        );
    }
}

TimeRangeSelector.propTypes = propTypes;

TimeRangeSelector.contextTypes = {
    model: React.PropTypes.object.isRequired,
    collection: React.PropTypes.object.isRequired,
};

export default TimeRangeSelector;