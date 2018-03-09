'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFirefox = exports.isIE = exports.resetFocus = exports.equalElement = exports.$$components = exports.$component = exports.component = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = exports.component = function component(name, selector) {
    var packageName = name.indexOf('/') !== -1 ? name : name + '/' + name;
    return ('[data-component="splunk-ui:/components/' + packageName + '"] ' + (selector || '')).trim();
}; /* global browser */

var $component = exports.$component = function $component(name, selector) {
    return browser.$(component(name, selector));
};

var $$components = exports.$$components = function $$components(name, selector) {
    return browser.$$(component(name, selector));
};

// TODO: there -has- to be a better solution for this?
var equalElement = exports.equalElement = function equalElement(e1, e2) {
    return e1.value.ELEMENT === e2.value.ELEMENT;
};

var resetFocus = exports.resetFocus = function resetFocus() {
    browser.execute(function () {
        var resetButton = document.createElement('button');
        resetButton.id = 'func-test-focus-reset';
        document.body.insertBefore(resetButton, document.body.firstChild);
    });

    browser.$('#func-test-focus-reset').click();

    browser.execute(function () {
        var resetButton = document.querySelector('#func-test-focus-reset');
        resetButton.parentNode.removeChild(resetButton);
    });
};

var isIE = exports.isIE = function isIE() {
    var browserName = _lodash2.default.get(browser, 'options.desiredCapabilities.browserName');
    return _lodash2.default.includes(['MicrosoftEdge', 'internet explorer'], browserName);
};

var isFirefox = exports.isFirefox = function isFirefox() {
    var browserName = _lodash2.default.get(browser, 'options.desiredCapabilities.browserName');
    return browserName === 'firefox';
};