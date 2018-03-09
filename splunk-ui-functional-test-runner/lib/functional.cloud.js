'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _deasync = require('deasync');

var _deasync2 = _interopRequireDefault(_deasync);

var _saucelabs = require('saucelabs');

var _saucelabs2 = _interopRequireDefault(_saucelabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var waitForConcurrency = function waitForConcurrency(account, required) {
    return new Promise(function (f) {
        var checkConcurrency = function checkConcurrency() {
            console.log('Asking sauce labs for concurrency');
            account.getUserConcurrency(function (err, res) {
                if (err) {
                    console.log('Unable to retrieve concurrency, proceeding');
                    console.log(err);
                    f();
                } else {
                    // read current and remaining concurrency - defaults are there to make it
                    // proceed if the response format changes or something unexpected happens
                    var current = _lodash2.default.get(res, 'concurrency.splunk_ui_sauce.current.overall', 0);
                    var remain = _lodash2.default.get(res, 'concurrency.splunk_ui_sauce.remaining.overall', 100);
                    console.log('Current concurrency is', current, 'remaining', remain, 'want', required);
                    if (remain >= required) {
                        console.log('Enough remaining, proceeding');
                        f();
                    } else {
                        console.log('Not enough concurrency, waiting');
                        setTimeout(checkConcurrency, 10 * 1000);
                    }
                }
            });
        };
        checkConcurrency();
    });
}; /* eslint-disable no-console */

exports.default = function (config) {
    if (!_lodash2.default.has(process.env, 'SAUCE_USERNAME') || !_lodash2.default.has(process.env, 'SAUCE_ACCESS_KEY')) {
        throw new Error('SAUCE_USERNAME and SAUCE_ACCESS_KEY have to be set');
    }

    config.mochaOpts = config.mochaOpts || {};
    config.services = config.services || [];

    config.mochaOpts.timeout = 20 * 1000;
    config.services.push('sauce');
    config.user = process.env.SAUCE_USERNAME;
    config.key = process.env.SAUCE_ACCESS_KEY;
    config.sauceConnect = true;
    config.sauceConnectOpts = { port: 53123 };

    if (config.beforeSession || config.onPrepare) {
        throw new Error('Existing beforeSession or onPrepare are not not yet supported');
    }

    var account = new _saucelabs2.default({ username: config.user, password: config.key });
    var safety = 1;

    config.beforeSession = function (c, capabilities, specs) {
        console.log('Waiting before session', capabilities, specs);

        // have to use deasync: https://github.com/webdriverio/webdriverio/issues/1958
        var done = false;
        waitForConcurrency(account, 1 + safety).then(function () {
            done = true;
        }).catch(function () {
            done = true;
        });
        _deasync2.default.loopWhile(function () {
            return !done;
        });
    };

    config.onPrepare = function (c) {
        return waitForConcurrency(account, c.maxInstances);
    };

    return { config: config };
};