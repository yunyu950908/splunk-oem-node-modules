'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: better way to do this? script is invoked multiple times
/* eslint-disable no-console */
/* globals browser */

var initialRun = _lodash2.default.endsWith(process.argv[1], 'wdio') || _lodash2.default.endsWith(process.argv[1], 'splunk-ui-functional-test-runner');

// Must not clash with wdio options
_commander2.default.option('--filter <filters>', 'Filter specs', function (v) {
    return v.split(',');
}).option('--runnerConfig <runnerConfig>', 'Runner config file').parse(process.argv);

if (_lodash2.default.isUndefined(_commander2.default.runnerConfig)) {
    throw new Error('Must specify runner config path.');
}

// eslint-disable-next-line global-require, import/no-dynamic-require
var runnerConfig = require(_path2.default.resolve(_commander2.default.runnerConfig));
var sourcePath = _path2.default.resolve(runnerConfig.source);
var outputPath = _path2.default.resolve(_path2.default.join('functional-temp'));
var webpackConfig = void 0;
var specs = void 0;

function specToThing(s) {
    return '' + s.slice(0, -runnerConfig.specExtension.length) + runnerConfig.fixtureExtension;
}

if (initialRun) {
    console.log(_package.name + ' ' + _package.version);

    _fsExtra2.default.emptyDirSync(outputPath);

    if (_lodash2.default.isEmpty(_commander2.default.filter)) {
        specs = _glob2.default.sync('**/*' + runnerConfig.specExtension, { cwd: sourcePath });
    } else {
        specs = (0, _lodash2.default)(_commander2.default.filter).map(function (p) {
            return (/^[a-z0-9]+$/i.test(p) ? '**/' + p + '/**' : p
            );
        }).map(function (p) {
            return _glob2.default.sync(p, { cwd: sourcePath });
        }).flatten().filter(function (s) {
            return _lodash2.default.endsWith(s, runnerConfig.specExtension);
        }).value();
    }

    if (_lodash2.default.isEmpty(specs)) {
        throw new Error('No specs found, exiting.');
    }

    var things = _lodash2.default.map(specs, function (s) {
        return specToThing(s);
    });

    console.log('Compiling ' + things.length + ' jsx files:');
    console.log(things.join('\n'));

    // eslint-disable-next-line global-require, import/no-dynamic-require
    webpackConfig = require(_path2.default.resolve(runnerConfig.webpackProfile));
    webpackConfig.output.path = outputPath;
    webpackConfig.entry = {};
    webpackConfig.plugins = webpackConfig.plugins || [];

    _lodash2.default.each(things, function (t) {
        var p = _path2.default.join(sourcePath, t);
        webpackConfig.entry[t] = _path2.default.join(__dirname, 'react-render-loader.js') + '?' + ('file=' + p + '!' + _path2.default.join(__dirname, 'client', 'render.tmpl'));

        webpackConfig.plugins.push(new _htmlWebpackPlugin2.default({
            template: _path2.default.join(__dirname, 'client/template.html'),
            filename: t + '.html',
            chunks: [t, 'common']
        }));
    });

    webpackConfig.plugins.push(new _webpack2.default.optimize.CommonsChunkPlugin({ name: 'common' }));
}

exports.default = {
    specs: _lodash2.default.map(specs, function (s) {
        return _path2.default.join(runnerConfig.source, s);
    }),
    maxInstances: 5,
    sync: true,
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: _path2.default.join(outputPath, 'screenshots'), // only for crash-shots
    waitforTimeout: 10000,
    connectionRetryCount: 3,
    services: ['webpack', 'static-server'],
    framework: 'mocha',
    reporters: ['spec'],
    reporterOptions: {},
    mochaOpts: { ui: 'bdd', compilers: ['js:babel-register'] },
    beforeTest: function beforeTest(suite) {
        var thing = specToThing(_path2.default.relative(sourcePath, suite.file));
        var url = 'http://localhost:49221/' + thing + '.html';

        console.log('Navigating to: ' + url);
        browser.url(url);
    },

    staticServerFolders: [{ mount: '/', path: './functional-temp' }],
    staticServerPort: 49221,
    webpackLog: true,
    webpackConfig: webpackConfig,
    suiOutputPath: outputPath
};

// about the static server port: only a certain list of ports works if we use sauce, see here:
//  https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+FAQS
// a workaround would be to use something like myserver.local in the hosts file, but that's
// not ideal for dev machines