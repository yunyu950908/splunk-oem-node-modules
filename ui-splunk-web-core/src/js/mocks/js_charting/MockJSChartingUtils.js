define(function () {
    return {
        preprocessChartData: function (rawData) {
            return rawData;
        },
        getCustomDisplayProperties: function () {
            return {};
        },
        extractChartReadyData: function(rawData) {
            rawData.seriesList = rawData.columns;
            delete rawData.columns;
            return rawData;
        }
    };
});
