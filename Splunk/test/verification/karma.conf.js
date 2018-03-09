var path = require('path');
var testRunner = require('@splunk/karma-unit-test-runner');
var splunkEnv = require('../environment.es');
var settings = require('../karma.conf').settings;

var splunkSource = path.join(process.env.SPLUNK_SOURCE);

module.exports = function(config) {
    settings.appDir = path.join('web', 'test', 'verification', 'apps');
    settings.coveragePatterns = {
        es6ftw: function(patterns) {
            if (patterns.test_coverage) {
                patterns.test_coverage += '|util/eval/parser|util/env';
            }

            return patterns;
        }
    };

    testRunner.config(config, settings);
    splunkEnv.config(config, {splunkSource: splunkSource});
};
