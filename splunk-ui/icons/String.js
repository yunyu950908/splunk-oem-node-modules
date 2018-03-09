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
/******/ 	return __webpack_require__(__webpack_require__.s = 553);
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

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = String;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function String(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('String'),
            viewBox: '0 0 1389 1500'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M1119.624 17.473l-56.452 219.086c-16.13-86.918-41.89-148.074-77.285-183.47C950.493 17.698 901.882 0 840.054 0 731.63 0 616.934 47.94 495.968 143.817c-143.37 112.007-261.873 262.32-355.51 450.94C46.817 783.378 0 954.75 0 1108.872c0 68.997 9.185 131.497 27.554 187.5 18.37 56.005 48.835 102.6 91.398 139.786 42.562 37.186 95.206 55.78 157.93 55.78 74.372 0 144.265-24.642 209.677-73.925 115.59-86.917 233.87-233.87 354.838-440.86l-56.452 173.388 272.85 6.72L1388.44 16.128l-268.816 1.345zm-127.69 319.893c0 72.58-14.11 149.865-42.337 231.854-28.226 81.99-64.516 158.603-108.87 229.84-44.356 71.236-91.175 136.424-140.458 195.564-49.284 59.14-98.12 108.87-146.507 149.193-62.724 54.66-124.552 81.99-185.483 81.99-31.362 0-57.796-12.545-79.302-37.635-25.09-24.194-37.634-64.068-37.634-119.624 0-137.992 52.195-306.227 156.586-504.704C512.32 365.367 612.455 232.08 708.333 163.978c45.7-32.258 89.158-48.387 130.377-48.387 43.01 0 77.06 12.994 102.15 38.98 34.05 37.634 51.075 98.566 51.075 182.796zm65.862 819.892l-272.85-6.72c-36.738 146.953-40.77 241.487-12.097 283.602 31.36 43.907 71.684 65.86 120.967 65.86 32.258 0 61.828-3.584 88.71-10.753 26.882-7.168 58.244-21.505 94.086-43.01 35.842-21.506 75.045-54.884 117.607-100.135 42.563-45.25 88.934-102.822 139.113-172.715l-51.075-43.01-24.193 28.225-22.178 25.538c-14.785 17.025-20.833 23.52-18.145 19.49 2.688-4.033-3.808 2.463-19.49 19.488-15.68 17.025-21.28 21.954-16.8 14.785 4.48-7.168-2.24-2.24-20.162 14.785-32.258 20.61-61.828 30.914-88.71 30.914-17.024 0-27.777-8.512-32.257-25.537-.896-6.273-1.57-10.53-2.017-12.77-.448-2.24.224-7.84 2.017-16.8l4.032-20.162 6.048-23.52c4.032-15.682 6.497-24.867 7.393-27.555z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/String.jsx"))

/***/ })

/******/ });