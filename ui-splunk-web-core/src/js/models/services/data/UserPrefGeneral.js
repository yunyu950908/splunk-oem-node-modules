define(
    [
        'models/StaticIdSplunkDBase',
        'splunk.util'
    ],
    function(SplunkDBaseModel, splunkUtil) {
        return SplunkDBaseModel.extend({
            url: 'data/user-prefs',
            initialize: function() {
                SplunkDBaseModel.prototype.initialize.apply(this, arguments);
            },
            showInstrumentationOptInModal: function(currentOptInVersion) {
                var dismissedVersion = this.entry.content.get('dismissedInstrumentationOptInVersion');
                if (dismissedVersion === undefined || dismissedVersion === null || !dismissedVersion.match(/^[0-9]+$/)) {
                    if (splunkUtil.normalizeBoolean(this.entry.content.get('hideInstrumentationOptInModal'))) {
                        dismissedVersion = 1;
                    } else {
                        dismissedVersion = 0;
                    }
                }
                return parseInt(dismissedVersion, 10) < currentOptInVersion;
            }
        },
        {
            id: 'data/user-prefs/general'
        });
    }
);
