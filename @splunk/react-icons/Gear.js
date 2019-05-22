module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/i18n");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-icons/SVG");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = Gear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* eslint-disable max-len */
function Gear(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default.a,
        _extends({ screenReaderText: Object(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__["_"])('Gear') }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1316.096 890.753l167.466-47.26c8.22 0 16.438-11.3 16.438-19.52V676.027c0-8.22-8.22-19.52-16.438-19.52l-167.466-47.26c-7.192 0-19.52-11.302-19.52-19.52L1250.34 476.71c-4.11-8.22-4.11-19.52 0-27.74l85.274-152.054c4.11-8.22 4.11-19.52-4.11-23.63l-104.794-104.795c-4.11-8.22-15.41-8.22-23.63-4.11l-152.055 85.275c-8.22 4.11-19.52 4.11-27.74 0l-113.013-46.233c-8.22 0-19.52-12.33-19.52-19.52l-47.26-167.467C843.493 8.218 832.19 0 823.973 0H676.026c-8.22 0-19.52 8.22-19.52 16.438l-47.26 167.466c0 7.192-11.302 19.52-19.52 19.52l-117.124 50.343c-7.192 4.11-19.52 4.11-27.74 0l-147.945-89.383c-8.22-4.11-19.52-4.11-23.63 4.11L168.493 273.287c-8.22 4.11-8.22 15.41-4.11 23.63l89.384 147.945c4.11 8.22 4.11 20.548 0 27.74l-50.342 121.233c-4.11 8.22-12.33 19.52-19.52 19.52l-167.467 43.15C8.218 659.59 0 667.81 0 676.027v147.947c0 8.22 8.22 16.438 16.438 19.52l167.466 43.15c7.192 0 15.41 11.302 19.52 19.52l50.343 121.234c4.11 7.192 4.11 19.52 0 27.74l-89.383 147.945c-4.11 8.22-4.11 19.52 4.11 23.63l104.794 104.795c4.11 8.22 15.41 8.22 23.63 4.11l147.945-89.384c8.22-4.11 20.548-4.11 27.74 0l121.233 50.342c8.22 4.11 19.52 12.33 19.52 19.52l43.15 167.467c3.083 8.22 11.302 16.438 19.52 16.438h147.947c8.22 0 19.52-8.22 19.52-16.438l43.15-167.466c0-7.192 11.302-15.41 19.52-19.52l117.125-46.234c8.22-4.11 19.52-4.11 27.74 0l152.054 85.274c8.22 4.11 19.52 4.11 23.63-4.11l104.795-104.794c8.22-4.11 8.22-15.41 4.11-23.63l-85.275-152.055c-4.11-8.22-4.11-19.52 0-27.74l46.233-113.013c0-8.22 12.33-19.52 19.52-19.52zM750 1050c-162.33 0-300-137.67-300-300s137.67-300 300-300 300 137.67 300 300-137.67 300-300 300z' })
    );
}

/***/ })

/******/ });