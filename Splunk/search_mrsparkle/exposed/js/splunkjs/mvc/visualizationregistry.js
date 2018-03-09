define(function(require, exports, module) {
    var VisualizationRegistry = require('helpers/VisualizationRegistry');
    var VisualizationView = require('./visualizationview');

    return {
        getVisualizer: function(appName, vizName){
            if(!appName || !vizName) {
                throw new Error('app name and viz name required for getVisualizer');
            }
            if (!VisualizationRegistry.isLoaded()) {
                throw new Error(
                    'The VisualizationRegistry has not been loaded. ' +
                    'Make sure the "visualizations" collection in sharedmodels is loaded ' +
                    'before retrieving a visualizer.'
                );
            }

            var vizId = appName + '.' + vizName;
            var vizConfig = VisualizationRegistry.getVisualizationById(vizId);

            if (!vizConfig) {
                throw new Error(
                    'Visualization ' + JSON.stringify(vizId) + ' has not been registered with the system. ' +
                    'It may not exist or might not be visible for the current user or app.'
                );
            }

            return VisualizationView.extend({
                initialize : function() {
                    this.options.type = vizId;
                    VisualizationView.prototype.initialize.apply(this, arguments);
                }
            });

        }
    };
});
