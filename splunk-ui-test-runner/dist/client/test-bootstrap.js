'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _bootstrapHelpers = require('./bootstrap-helpers');

var helpers = _interopRequireWildcard(_bootstrapHelpers);

var _testHelpers = require('./test-helpers');

var _testHelpers2 = _interopRequireDefault(_testHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-underscore-dangle: ["error", { "allow": ["__karma__"] }] */
/* eslint no-global-assign: ["error", {"exceptions": ["suite", "assert"]}] */
/* global assert, chai */

var config = window.__karma__.config.talos || {};
var debugFlags = config.debugFlags || [];
var debugLogFileThreshold = 10;

var noop = function noop() {};

helpers.callGlobalHook('beforeSetup');

// how log levels are matched (log.log is treated as INFO due to commonness):
var karmaLevels = ['OFF', 'ERROR', 'WARN', 'INFO', 'INFO', 'DEBUG'];
var consoleLevels = [null, 'error', 'warn', 'log', 'info', 'debug'];

// build a logger that respects karma's active log level - browserConsoleLogOptions doesn't (yet)
if (_lodash2.default.has(window.__karma__, 'log')) {
    var karmaLevelIndex = karmaLevels.lastIndexOf(config.logLevel);

    var _loop = function _loop(i) {
        var finalLevel = i > karmaLevelIndex ? 'OFF' : karmaLevels[i];
        if (finalLevel === 'OFF') {
            window.console[consoleLevels[i]] = noop;
        } else {
            window.console[consoleLevels[i]] = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                window.__karma__.log(finalLevel, args);
            };
        }
    };

    for (var i = 1; i < consoleLevels.length; i += 1) {
        _loop(i);
    }
}
var log = window.console;

// webpack-plugin passes all loaded files
var testFiles = config.testFiles || {};
var apps = Object.keys(testFiles || {});

// lie about being a touch browser - PhantomJS does this by default
document.documentElement.ontouchstart = noop;

// add chai plugins
chai.use(_chaiAsPromised2.default);

// start the two-step loading process:
// load common chunks and hook files
// load all test files and hand over to the test runner

var testUi = helpers.testUi.ui;
var tests = {};

// transfer test helpers to window, apply a minor patch to Mocha
(0, _testHelpers2.default)(window, testUi.suite);

// iterates over apps loading a single app each, moving them to 'tests'
function loadAppTests(done) {
    var app = apps.shift();
    var fileCount = void 0;

    // iterates over testFiles for the current app, loading a single test
    // each step, moving it to tests[app]
    function loadNextTest() {
        var testFile = testFiles[app].shift();
        if (testFile) {
            var testSuites = [];
            // override mocha's suite to capture suite calls in test files
            // we'll add custom pre/post file handlers later on before
            // calling the original suite function
            window[helpers.testUi.names.suite] = function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                testSuites.push(args);
            };

            // // get rid of 'backbone history already started' errors
            // helpers.clearBackbone();

            helpers.callHooks(app, 'loadFileSetup');

            var progress = 'progress ' + Math.round(tests[app].length / fileCount * 100) + '%';
            var testSrc = '/webpack/' + app + '/test/' + testFile.name + '-bundle.js';
            var logLevel = fileCount >= debugLogFileThreshold ? 'info' : 'debug';
            log[logLevel]('Loading: ' + app + '/' + testFile.name + ' - ' + progress);

            helpers.scriptLoader(testSrc).catch(function (err) {
                log.warn('Error during test file loading: ' + app + '/' + testFile.name);
                if (window.dump) {
                    dump(err); // eslint-disable-line no-undef
                }

                testSuites = helpers.requireFailureTest(testFile.name, err);
            }).then(function () {
                tests[app].push([testFile.name, testSuites]);

                helpers.callHooks(app, 'loadFileTeardown', app + '/' + testFile.name);

                loadNextTest();
            });
        } else {
            log.debug('Loaded tests for app: ' + app + ', count: ' + tests[app].length);

            helpers.callGlobalHook('afterEachAppLoad', app);
            loadAppTests(done);
        }
    }

    if (app) {
        // ensure tests are sorted (reproducibility)
        testFiles[app].sort();
        fileCount = testFiles[app].length;
        tests[app] = [];

        helpers.callGlobalHook('beforeEachAppLoad', app);

        // load common chunk for app
        var commonSrc = '/webpack/' + app + '/common-bundle.js';
        helpers.scriptLoader(commonSrc).then(function () {
            log.debug('Loaded common chunk for app: ' + app);
        }).catch(function () {
            log.error('Error during common chunk loading for app: ' + app);
        }).then(function () {
            helpers.loadHooks(app).then(function () {
                helpers.callHooks(app, 'loadSetup');
                loadNextTest();
            });
        });
    } else {
        window[helpers.testUi.names.suite] = testUi.suite;
        clearInterval(window.__karma__.scriptKeepAliveId);

        log.debug('All tests loaded, starting execution');
        done();
    }
}

function runTests() {
    var nativeAssert = assert;
    var timings = {};

    _lodash2.default.each(tests, function (appTests, app) {
        timings[app] = {};

        /* eslint-disable prefer-arrow-callback, func-names */
        testUi.suite(app, function () {
            testUi.suiteSetup(function () {
                helpers.callGlobalHook('beforeEachApp', app);
                helpers.callHooks(app, 'appSetup');
            });
            testUi.suiteTeardown(function () {
                helpers.callGlobalHook('afterEachApp', app);
                helpers.callHooks(app, 'appTeardown');
            });

            _lodash2.default.each(appTests, function (testSuites) {
                testUi.suite(testSuites[0], function () {
                    var _this = this;

                    testUi.setup(function () {
                        helpers.callHooks(app, 'testSetup');
                        if (_lodash2.default.isFunction(assert.resetCallCount)) {
                            assert.resetCallCount();
                        }
                    });

                    testUi.teardown(function () {
                        helpers.callHooks(app, 'testTeardown');
                        if (_lodash2.default.isFunction(assert.getCallCounts) && assert.getCallCounts().current === 0) {
                            log.warn('Zero assert calls in test', this.currentTest.title);
                        }
                    });

                    testUi.suiteSetup(function () {
                        timings[app][testSuites[0]] = performance.now();

                        helpers.callHooks(app, 'fileSetup', app + '/' + testSuites[0]);
                    });

                    testUi.suiteTeardown(function () {
                        helpers.callHooks(app, 'fileTeardown', app + '/' + testSuites[0]);
                        timings[app][testSuites[0]] = Math.round(performance.now() - timings[app][testSuites[0]]);
                    });

                    _lodash2.default.each(testSuites[1], function (savedSuite) {
                        testUi.suite.apply(_this, savedSuite);
                    });
                });
            });
        });
        /* eslint-enable prefer-arrow-callback, func-names */
    });

    // remove all styles loaded by tests, except mocha.css (debug mode)
    testUi.suiteSetup(function () {
        // eslint-disable-line prefer-arrow-callback, func-names
        this.timeout(30 * 1000);

        for (var i = document.styleSheets.length - 1; i >= 0; i -= 1) {
            var sheet = document.styleSheets[i];
            if (!(_lodash2.default.isString(sheet.href) && sheet.href.indexOf('mocha/mocha.css') !== -1)) {
                sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
            }
        }
    });

    // ensure no test added root suites/tests (test calls without wrapping suites,
    // runtime suite calls)
    helpers.removeRootTests(mocha.suite, Object.keys(tests));

    // if enabled, instruct mocha to tell us about global leaks
    if (_lodash2.default.includes(debugFlags, 'globals')) {
        // but exclude some common functions which our tests occasionally stub/restore
        // https://github.com/sinonjs/sinon/issues/143
        log.info('Enabling global leak detection');
        mocha.globals(['open', 'getSelection']);
        mocha.checkLeaks();
    }

    // if enabled, print a tree of all loaded test suites
    if (_lodash2.default.includes(debugFlags, 'suites')) {
        helpers.printSuiteTitles(mocha.suite);
    }

    if (_lodash2.default.includes(debugFlags, 'assertCount')) {
        if (!_lodash2.default.has(window, 'Proxy')) {
            log.warn('Browser doesn\'t support Proxy, not enabling assertion counting');
        } else {
            log.info('Enabling assertion counting');
            assert = new Proxy(nativeAssert, new helpers.AssertProxy());
            // eslint-disable-next-line prefer-arrow-callback, func-names
            testUi.suiteTeardown(function () {
                log.info('Total assertion count:', assert.getCallCounts().total);
            });
        }
    }

    // send performance results back to Karma server
    testUi.suiteTeardown(function () {
        // eslint-disable-line prefer-arrow-callback, func-names
        window.__karma__.info({ talos: 'timings', timings: timings });
    });

    // kick-off time!
    window.__karma__.start();
}

loadAppTests(runTests);