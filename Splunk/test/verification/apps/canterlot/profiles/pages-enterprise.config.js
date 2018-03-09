// This resembles a typical application's webpack configuration. There is
// configuration in here that isn't needed for testing, this is on purpose -
// the point is to show that the test runner handles it correctly.

var path = require('path');
var _ = require('lodash');

var BUILD_TOOLS = path.join(process.env.SPLUNK_SOURCE, 'web', 'build_tools');
var mergeConfigs = require(path.join(BUILD_TOOLS, 'util', 'mergeConfigs'));
var appPageConfig = require(path.join(BUILD_TOOLS, 'profiles', 'common', 'namespacedAppPages.config'));
var appDir = path.join(__dirname, '..');
var appName = _.last(appDir.split(path.sep));

module.exports = function (options) {
    options = _.extend({ loadTheme: 'enterprise' }, options);
    return mergeConfigs(appPageConfig(appDir, appName, options), {
        output: {
            path: path.join(appDir, 'appserver', 'static', 'build', 'pages', 'enterprise')
        }
    });
};
