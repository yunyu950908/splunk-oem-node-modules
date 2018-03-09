'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (config) {
    config.reporters = config.reporters || [];
    config.reporterOptions = config.reporterOptions || [];

    config.reporters.push('junit');
    config.reporterOptions.junit = {
        outputDir: 'test-reports',
        outputFileFormat: function outputFileFormat(options) {
            return 'func-results-' + options.capabilities + '-' + options.cid + '.xml';
        }
    };

    return config;
};