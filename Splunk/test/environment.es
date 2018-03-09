const _ = require('lodash');
const path = require('path');

const log = require('karma/lib/logger').create('config');

module.exports = {
    config: (config, { splunkSource }) => {
        // splunk-specific i18n setup and helpers
        log.debug('Setting up i18n for Splunk testing');

        const files = _.get(config, 'files', []);
        files.unshift(
            path.join(splunkSource, 'web', 'search_mrsparkle', 'exposed', 'js', 'i18n.js'),
            path.join(__dirname, 'i18n.js')
        );
        _.set(config, 'files', files);

        // if karma-cli is used (global 'karma' command) instead of 'splunk cmd node ...', loading app
        // profiles from /cfg/bundles will throw 'module not found' errors. fix this by manually pointing
        // NODE_PATH to /web/node_modules. should be revisited if apps ever get their own package.json
        log.debug('Setting NODE_PATH for Splunk testing');

        if (!_.has(process.env, 'NODE_PATH')) {
            process.env.NODE_PATH = path.join(splunkSource, 'web', 'node_modules');
        }
    },
};
