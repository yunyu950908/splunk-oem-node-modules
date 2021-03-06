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
/******/ 	return __webpack_require__(__webpack_require__.s = 533);
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

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Question;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function Question(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Question'),
            viewBox: '0 0 932 1500'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M620.983 930.057c0-36.862 10.633-70.18 31.9-99.953C674.15 800.33 699.905 773.63 730.15 750c30.247-23.63 60.73-48.913 91.447-75.85 30.72-26.938 56.71-62.62 77.978-107.042 21.266-44.424 31.9-95.463 31.9-153.12 0-145.557-30.955-250.945-92.864-316.162C776.7 32.61 669.66 0 517.487 0H413.99C262.76 0 155.954 33.318 93.572 99.953 31.19 166.588 0 270.793 0 412.57c0 30.247 9.924 55.294 29.773 75.143 19.85 19.848 44.896 29.773 75.142 29.773h100.662c30.245 0 55.293-9.688 75.14-29.064 19.85-19.377 29.774-43.715 29.774-73.016 0-30.245 9.926-55.293 29.775-75.14 19.848-19.85 44.896-29.775 75.14-29.775H516.07c32.136 0 57.656 9.69 76.56 29.066 18.903 19.376 28.355 44.187 28.355 74.433 0 31.19-10.633 60.49-31.9 87.9-21.266 27.41-47.023 51.75-77.268 73.015-30.246 21.267-60.728 43.242-91.446 65.927-30.72 22.684-56.712 50.094-77.98 82.23-21.265 32.136-31.9 67.108-31.9 104.915v102.08c0 30.245 9.926 55.293 29.775 75.14 19.848 19.85 44.896 29.775 75.14 29.775H516.07c30.246 0 55.293-9.925 75.142-29.774 19.85-19.848 29.773-44.896 29.773-75.14zM466.446 1500c42.533 0 78.923-15.123 109.168-45.37 30.246-30.244 45.37-67.106 45.37-110.585 0-43.478-15.124-80.104-45.37-109.877-30.245-29.773-66.635-44.66-109.168-44.66-43.478 0-80.34 15.123-110.586 45.37-30.246 30.245-45.37 66.634-45.37 109.167 0 43.48 15.124 80.34 45.37 110.586 30.246 30.247 67.108 45.37 110.586 45.37z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/Question.jsx"))

/***/ })

/******/ });