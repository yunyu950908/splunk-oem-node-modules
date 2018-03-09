# Splunk UI test runner

A Karma based test runner designed to offer a comfortable and scalable testing experience out of the box.


## Getting started

1. Use Splunk's internal `npm` repository. The registry address is: `https://repo.splunk.com/artifactory/api/npm/npm`.
2. Add `splunk-ui-test-runner` to your `package.json` `devDependencies`.
3. Create a minimal test runner configuration in the root of your project, name it `karma.conf.js` 
to have it auto-detected:
    ```
    var testRunner = require('splunk-ui-test-runner');
    
    module.exports = function (config) {
        testRunner.config(config, {
            basePath: __dirname,
            testRegexp: '(.+)\\.test(?:\\.jsx?)$',
            testApps: { myApp: { path: 'src' } }
        });
    };
    ```
    Note that `config` is a regular Karma configuration object. If needed, the configuration can be manually edited further.

4. Start test runs like you usually do with Karma: `karma start` (if `karma-cli` is installed). This package 
also defines the `splunk-ui-test-runner` binary, which forwards arguments to Karma. This can be used in your 
 `package.json` scripts.


## Required configuration

- `basePath` – Absolute path to your project. All configuration options that accept relative paths 
(coverage report output, test result file output, …) make use of this value.
- `testRegexp` - Regular expression string that detects test files. The only requirement is that it includes at least 
one capture group, which will be used as test name. Using the example above, the file path 
`mycomponent/mytest.test.js` would be considered a test, and displayed as `mycomponent/mytest`.
- `testApps` – An object defining test app names as keys and their respective settings as values. The only mandatory 
app setting is `path`, which should be a relative path to your tests.


## Optional features

TBA


## Credits

- [Karma](https://github.com/karma-runner)
- [Webpack](https://webpack.github.io)
- [Babel](https://github.com/babel)
- [Istanbul](https://github.com/istanbuljs)
- … and countless other libraries
