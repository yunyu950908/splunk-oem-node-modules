define(
    [
        'jquery',
        'underscore',
        "models/services/data/Indexes",
        "collections/SplunkDsBase"
    ],
    function(
        $,
        _,
        IndexModel,
        SplunkDsBaseCollection
    ) {
        return SplunkDsBaseCollection.extend({
            model: IndexModel,
            url: 'data/indexes',
            initialize: function() {
                SplunkDsBaseCollection.prototype.initialize.apply(this, arguments);
            },
            fetch: function(options) {
                var allIndexTypes = { data: {datatype: 'all'} };
                var newOptions = $.extend(true, {}, allIndexTypes, options);
                return SplunkDsBaseCollection.prototype.fetch.call(this, newOptions);
            },
            getIndexDataType: function(indexName) {
                var index = this.findByEntryName(indexName);
                if (index) {
                    return index.getDataType();
                }
            }
        });
    }
);
