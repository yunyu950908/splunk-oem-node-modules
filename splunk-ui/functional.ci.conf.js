const _ = require('lodash');
const config = require('./functional.cloud.conf').config;
const ci = require('splunk-ui-functional-test-runner/lib/functional.ci').default;

ci(config);

if (_.has(process.env, 'BUILDNUMBER')) {
    _.each(config.capabilities, (c) => {
        c.build = `Splunk UI #${process.env.BUILDNUMBER}`;
    });
}

module.exports.config = config;
