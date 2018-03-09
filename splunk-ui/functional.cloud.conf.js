const config = require('splunk-ui-functional-test-runner/lib/functional.base.conf').default;
const cloud = require('splunk-ui-functional-test-runner/lib/functional.cloud').default;

cloud(config);
config.capabilities = [
    { browserName: 'chrome', platform: 'Windows 10', version: '56.0' },
    { browserName: 'internet explorer', platform: 'Windows 8.1', version: '11.0' },
    { browserName: 'MicrosoftEdge', platform: 'Windows 10', version: '14.14393' },
    // { browserName: 'safari', platform: 'macOS 10.12', version: '10.0', seleniumVersion: '3.2.0' },
    //latest version where browser.keys works. once the new driver stabilizes, use that
    { browserName: 'firefox', platform: 'Windows 8.1', version: '47.0' }
];

// never use a higher concurrency than the number of browser/os combinations
config.maxInstances = config.capabilities.length;

module.exports.config = config;
