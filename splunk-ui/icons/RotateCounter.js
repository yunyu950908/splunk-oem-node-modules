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
/******/ 	return __webpack_require__(__webpack_require__.s = 541);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/testSupport");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/SVG");

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = RotateCounter;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function RotateCounter(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Rotate Counter'),
            viewBox: '0 0 1500 1277'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M1314.415 185.585c59.024 59.023 104.71 127.695 137.06 206.015 32.35 78.32 48.525 160.613 48.525 246.88 0 86.265-16.175 168.557-48.524 246.878-32.35 78.32-78.037 146.992-137.06 206.015-59.024 59.024-127.696 104.71-206.016 137.06-78.32 32.35-160.613 48.525-246.88 48.525-86.265 0-168.557-16.175-246.878-48.524-78.32-32.35-146.992-78.037-206.015-137.06l109.818-110.67c50.51 50.51 101.73 86.55 153.66 108.116 51.93 21.566 115.07 32.35 189.416 32.35 74.348 0 137.203-10.784 188.565-32.35 51.362-21.567 102.3-57.605 152.81-108.116 51.078-51.08 87.258-102.3 108.54-153.66 21.284-51.363 31.925-114.218 31.925-188.565 0-74.348-10.783-137.345-32.35-188.99-21.566-51.647-57.605-103.01-108.116-154.087-50.51-50.51-101.59-86.69-153.235-108.54-51.646-21.852-114.36-32.777-188.14-32.777-74.346 0-137.343 10.925-188.99 32.776-51.645 21.85-103.007 58.03-154.085 108.54-62.43 64.7-103.86 137.345-124.29 217.935h234.96L306.47 887.06 0 515.89h234.96C260.5 389.9 318.388 279.797 408.627 185.586c59.023-59.024 127.695-104.71 206.015-137.06C692.962 16.174 775.255 0 861.522 0c86.265 0 168.557 16.175 246.878 48.524 78.32 32.35 146.992 78.037 206.015 137.06z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/RotateCounter.jsx"))

/***/ })

/******/ });