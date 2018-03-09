define(['jquery', 'underscore'], function($, _) {

    var isRangeSeriesDataSet = function(dataSet) {
        var allFields = dataSet.allFields();
        return (_(allFields).any(function(f) { return /^_predicted/.test(f); })
            && _(allFields).any(function(f) { return /^_lower/.test(f); })
            && _(allFields).any(function(f) { return /^_upper/.test(f); }));
    };

    var getRangeSeriesConfig = function(dataSet) {
        var predictedFields = _(dataSet.allFields()).filter(function(f) {
            return /^_predicted/.test(f);
        });

        return _(predictedFields).map(function(predictedField) {
            var sourceField = predictedField.replace(/^_predicted/, ''),
                lowerField = '_lower' + sourceField,
                upperField = '_upper' + sourceField,
                predictedName = _(dataSet.getSeries(predictedField)).find(function(value) { return !!value; }),
                lowerName = _(dataSet.getSeries(lowerField)).find(function(value) { return !!value; }),
                upperName = _(dataSet.getSeries(upperField)).find(function(value) { return !!value; });

            return ({
                predicted: predictedName,
                lower: lowerName,
                upper: upperName
            });

        }, this);
    };

    var getChartFieldData = function(dataSet) {
        var allDataFields = dataSet.allDataFields();

        var xFields = [allDataFields[0]];

        if(isRangeSeriesDataSet(dataSet)) {
            var rangeConfig = getRangeSeriesConfig(dataSet);
            _(rangeConfig).each(function(configEntry) {
                allDataFields = _(allDataFields).without(configEntry.lower, configEntry.upper);
            });
        }
        //push overlay fields to end of yFields array so that they render in front
        var yFields = _(allDataFields).difference(xFields);

        return {
            xFields: xFields,
            yFields: yFields
        };
    };

    return ({

        isRangeSeriesDataSet: isRangeSeriesDataSet,
        getRangeSeriesConfig: getRangeSeriesConfig,
        getChartFieldData: getChartFieldData
       
    });

});