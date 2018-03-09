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
/******/ 	return __webpack_require__(__webpack_require__.s = 505);
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

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = InfoCircle;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function InfoCircle(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Info Circle')
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M739.912.07C637.37 1.41 540.86 21.85 450.382 61.39c-90.48 39.542-168.894 94.16-235.245 163.86-68.36 70.37-121.308 151.46-158.84 243.275C18.768 560.34 0 657.515 0 760.053c1.34 101.867 22.117 198.205 62.33 289.014 40.212 90.81 95.504 170.393 165.877 238.75 70.372 68.36 150.964 121.136 241.778 158.33 90.813 37.196 187.49 55.123 290.033 53.783 101.872-1.34 198.215-22.116 289.028-62.327 90.814-40.21 170.4-95.5 238.763-165.87 68.36-70.368 121.14-150.957 158.336-241.766 37.196-90.81 55.124-187.482 53.784-290.02 0-101.867-19.94-198.038-59.816-288.512-39.878-90.474-95.002-170.225-165.375-239.253-70.373-68.36-151.468-121.135-243.287-158.33-91.82-37.195-189-55.122-291.54-53.782zm102.542 218.143c74.393 0 111.59 35.855 111.59 107.564 0 36.86-13.907 68.526-41.72 94.998-27.814 26.472-65.514 39.708-113.1 39.708-42.892 0-74.057-8.88-93.493-26.64-19.435-17.76-27.813-44.064-25.132-78.913 0-34.18 13.907-65.51 41.72-93.993 27.815-28.483 67.86-42.724 120.136-42.724zm96.51 795.167l32.17 44.232c-64.34 64.337-129.518 112.925-195.533 145.764-66.015 32.84-117.454 49.258-154.315 49.258-28.82 0-51.27-13.74-67.356-41.216-16.086-22.786-14.746-74.055 4.02-153.806l70.372-277.454c11.393-42.22 11.393-63.332 0-63.332-10.723 0-31.668 6.702-62.832 20.106-31.165 13.403-56.8 27.812-76.907 43.226l-31.165-52.274c68.362-55.625 139.74-101.03 214.132-136.214 74.394-35.184 130.02-52.776 166.883-52.776 32.17 0 49.595 16.084 52.276 48.253 3.35 36.19-1.34 79.416-14.075 129.68l-77.41 291.527c-11.393 46.912-9.047 70.37 7.038 70.37 5.36 0 22.787-5.698 52.276-17.09 27.478-13.404 54.286-29.49 80.424-48.254z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/InfoCircle.jsx"))

/***/ })

/******/ });