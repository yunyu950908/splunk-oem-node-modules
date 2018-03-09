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
/******/ 	return __webpack_require__(__webpack_require__.s = 504);
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

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Info;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function Info(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Info'),
            viewBox: '0 0 571 1500'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M439.465 0c-48.83 0-88.796 15.72-119.9 47.157-31.103 31.438-46.655 65.886-46.655 103.345-2.007 34.782 9.197 63.043 33.612 84.782 24.414 21.74 55.685 32.61 93.812 32.61 51.505 0 92.81-14.382 123.913-43.145 31.104-28.763 46.656-64.55 46.656-107.36 0-32.775-11.037-60.534-33.11-83.276C515.72 11.37 482.943 0 439.465 0zM159.532 1500c29.43 0 55.518-2.676 78.26-8.027 22.743-5.35 48.16-16.22 76.255-32.608 28.093-16.388 57.86-41.305 89.297-74.75 31.44-33.444 66.22-76.254 104.348-128.428l-48.16-42.14c-7.358 8.695-15.218 18.06-23.58 28.093l-17.557 21.07-13.546 13.546c-9.03 9.03-15.552 13.88-19.566 14.548-24.08 15.385-46.154 23.077-66.22 23.077-12.71 0-20.736-6.353-24.08-19.062-.67-4.683-1.17-7.86-1.506-9.532-.334-1.672.167-5.853 1.505-12.542l3.01-15.05 4.515-17.56c3.01-11.704 4.85-18.56 5.52-20.567L448.494 636.12c18.73-74.916 25.752-133.78 21.07-176.588-4.682-22.743-13.88-39.465-27.592-50.167-13.712-10.703-34.95-16.054-63.712-16.054-48.16 0-96.153 15.218-143.98 45.653C186.456 469.398 108.36 529.766 0 620.067l33.11 58.194c28.763-19.397 58.863-36.454 90.3-51.17 31.44-14.715 53.18-22.073 65.22-22.073 23.41 0 24.748 40.134 4.012 120.4L58.194 1239.13c-28.094 108.362-31.104 178.93-9.03 211.706 10.702 14.716 26.59 26.59 47.66 35.62 21.07 9.03 41.972 13.544 62.708 13.544z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/Info.jsx"))

/***/ })

/******/ });