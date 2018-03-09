module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 575);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("keycode");

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keycode = undefined;
exports.isValidKey = isValidKey;
exports.isNumber = isNumber;
exports.isDecimal = isDecimal;
exports.isMinus = isMinus;
exports.isNumeric = isNumeric;
exports.addsCharacter = addsCharacter;

var _keycode = __webpack_require__(32);

var _keycode2 = _interopRequireDefault(_keycode);

var _lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Aliases functions from https://github.com/timoxley/keycode
 */
var keycode = exports.keycode = _keycode2.default;

/** Whenever possible this library uses event.key because it has few issues than event.keyCode.
 * However, Safari only supports it for a few keys, such as Enter, and the QA test suite doesn't
 * provide it. */
function isValidKey(key) {
    return (0, _lodash.isUndefined)(key) ? false : key !== 'Unidentified';
}

/**
 * The event adds a number.
 */
function isNumber(_ref) {
    var key = _ref.key,
        keyCode = _ref.keyCode;

    if (isValidKey(key)) {
        var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        return keys.indexOf(key) >= 0;
    }
    return keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105;
}

/**
 * The event adds a decimal.
 */
function isDecimal(_ref2) {
    var key = _ref2.key,
        keyCode = _ref2.keyCode;

    if (isValidKey(key)) {
        return key === '.' || key === 'Decimal';
    }

    return keyCode === keycode('numpad .') || keyCode === keycode('.');
}

function isMinus(_ref3) {
    var key = _ref3.key,
        keyCode = _ref3.keyCode;

    if (isValidKey(key)) {
        return key === '-' || key === 'Subtract';
    }

    return keyCode === keycode('numpad -') || keyCode === keycode('-');
}

/**
 * The event adds a character that may define a floating point value: number, decimal or minus.
 */
function isNumeric(event) {
    return isNumber(event) || isDecimal(event) || isMinus(event);
}

/**
 * The event adds as character. Enter and Tab return false even though they
 * add characters in some situations. Safari always returns true as this cannot be practically
 * determined. */
function addsCharacter(_ref4) {
    var key = _ref4.key;

    if (isValidKey(key)) {
        // IE 11 named characters
        var names = ['Add', 'Decimal', 'Divide', 'Multiply', 'Spacebar', 'Subtract'];

        /* if event.key is one character it's assumed to be inserting a character
         * rather than some other type of action. */
        return key.length === 1 || names.indexOf(key) >= 0;
    }

    return true;
}

var keyboard = {
    isDecimal: isDecimal,
    isMinus: isMinus,
    isNumber: isNumber,
    isNumeric: isNumeric,
    addsCharacter: addsCharacter
};

exports.default = keyboard;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });