define([
            'underscore',
            'module',
            'mocks/models/MockModel',
            'mocks/models/MockSplunkD',
            'mocks/views/MockView',
            'helpers/search/DataSource'
        ],
        function(
            _,
            module,
            MockModel,
            MockSplunkD,
            MockView,
            DataSource
        ) {

    return MockView.extend({
        initialize: function() {
            MockView.prototype.initialize.apply(this, arguments);
            this.dataSources = [new DataSource('primary', {
                output_mode: 'json_cols'
            })];
        },
        load: function() {
            return this;
        },
        getPrimaryDataSource: function() {
            return this.getDataSource('primary');
        },
        getAllDataSources: function() {
            return this.dataSources;
        },
        getDataSource: function(dataSourceName) {
            return _(this.getAllDataSources()).find(function(ds) {
                return ds.name === dataSourceName;
            });
        },
        clear: function() {},

        show: function() {
            this.$el.css({ visibility: "", opacity: "" });
        },

        hide: function() {
            this.$el.css({ visibility: "hidden", opacity: 0 });
        }
    },
    {
        GENERAL_TYPES: {}
    });

});
