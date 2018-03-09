'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
    config.services = config.services || [];

    config.services.push('selenium-standalone');
    config.seleniumLogs = _path2.default.relative('.', _path2.default.join(config.suiOutputPath, 'serverlogs'));
    // config.seleniumInstallArgs = { version: '3.3.1' };
    // config.seleniumArgs = { version: '3.3.1' };
    config.mochaOpts.timeout = 1000000000;

    return config;
};