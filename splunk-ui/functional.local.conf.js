const config = require('splunk-ui-functional-test-runner/lib/functional.base.conf').default;
const local = require('splunk-ui-functional-test-runner/lib/functional.local').default;

local(config);
config.capabilities = [{ browserName: 'chrome' }];

module.exports.config = config;
