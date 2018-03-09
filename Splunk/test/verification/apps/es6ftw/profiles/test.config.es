const _ = require('lodash');
const path = require('path');

const mergeConfigs = require('../../../../../build_tools/util/mergeConfigs');
const appDefaultConfig = require('../../../../../build_tools/profiles/common/appBase.config');
const SplunkNameModuleIdsPlugin = require('../../../../../build_tools/plugins/SplunkNameModuleIdsPlugin');

const appDir = path.join(__dirname, '..');
const appName = _.last(appDir.split(path.sep));
const appSourceDir = path.join(appDir, 'src');

const config = appDefaultConfig(path.join(__dirname, '..'), {});
const alias = { [appName]: appSourceDir };
const snmPlugin = new SplunkNameModuleIdsPlugin({ context: appSourceDir, prefix: `${appName}-` });

module.exports = mergeConfigs(config, {
    resolve: { alias },
    plugins: [snmPlugin],
});
