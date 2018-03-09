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
/******/ 	return __webpack_require__(__webpack_require__.s = 433);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/errorHandling");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Box");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/keyboard");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-event-listener");

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Slider.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Slider.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Tooltip");

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_Slider__guid__d712fa{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto}.main_Slider__guid__d712fa[data-inline]{width:300px}.input_Slider__guid__d712fa{-webkit-box-flex:1;-webkit-flex:1 0 0px;flex:1 0 0px;vertical-align:middle;position:relative;cursor:default;height:26px;max-width:100%}.sliderBar_Slider__guid__d712fa{position:absolute;top:10px;left:0;height:5px;background:#ccc;width:100%;border-radius:2.5px;background:#333}.tooltip_Slider__guid__d712fa{position:absolute;top:5px;margin-left:-8px}.sliderThumb_Slider__guid__d712fa{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;visibility:inherit;background:#fff;border:1px solid #333;color:#333;width:15px;height:15px;border-radius:8px}.sliderThumb_Slider__guid__d712fa:hover{background:#efefef;border-color:#3b3b3b;text-decoration:none}.sliderThumb_Slider__guid__d712fa:focus{border-color:#52a8ec;outline:0;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6);background:#ccc}.label_Slider__guid__d712fa{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;line-height:26px}.minLabel_Slider__guid__d712fa{margin-right:10px;text-align:right}.maxLabel_Slider__guid__d712fa{margin-left:10px;text-align:left}.tooltipChild_Slider__guid__d712fa{margin-bottom:12px}","enterprise":".main_Slider__guid__d712fa{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto}.main_Slider__guid__d712fa[data-inline]{width:300px}.input_Slider__guid__d712fa{-webkit-box-flex:1;-webkit-flex:1 0 0px;flex:1 0 0px;vertical-align:middle;position:relative;cursor:default;height:26px;max-width:100%}.sliderBar_Slider__guid__d712fa{position:absolute;top:10px;left:0;height:5px;background:#ccc;width:100%;border-radius:2.5px}.tooltip_Slider__guid__d712fa{position:absolute;top:5px;margin-left:-8px}.sliderThumb_Slider__guid__d712fa{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;visibility:inherit;background-image:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#eee));background-image:-webkit-linear-gradient(top,#f7f7f7,#eee);background-image:-o-linear-gradient(top,#f7f7f7,#eee);background-image:linear-gradient(180deg,#f7f7f7,#eee);border:1px solid #bfbfbf;color:#333;-webkit-box-shadow:inset 0 1px 0 #f2f2f2;box-shadow:inset 0 1px 0 #f2f2f2;width:15px;height:15px;border-radius:8px}.sliderThumb_Slider__guid__d712fa:hover{background-image:none;background-color:#f7f7f7;border-color:#c7c7c7;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.08);box-shadow:0 1px 1px rgba(0,0,0,.08);color:#333;text-decoration:none}.sliderThumb_Slider__guid__d712fa:focus{border-color:#52a8ec;outline:0;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6);background:#ccc}.label_Slider__guid__d712fa{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;line-height:26px}.minLabel_Slider__guid__d712fa{margin-right:10px;text-align:right}.maxLabel_Slider__guid__d712fa{margin-left:10px;text-align:left}.tooltipChild_Slider__guid__d712fa{margin-bottom:12px}"};
var themeLocals = {"lite":{"main":"main_Slider__guid__d712fa","input":"input_Slider__guid__d712fa","sliderBar":"sliderBar_Slider__guid__d712fa","tooltip":"tooltip_Slider__guid__d712fa","sliderThumb":"sliderThumb_Slider__guid__d712fa","label":"label_Slider__guid__d712fa","minLabel":"minLabel_Slider__guid__d712fa label_Slider__guid__d712fa","maxLabel":"maxLabel_Slider__guid__d712fa label_Slider__guid__d712fa","tooltipChild":"tooltipChild_Slider__guid__d712fa"},"enterprise":{"main":"main_Slider__guid__d712fa","input":"input_Slider__guid__d712fa","sliderBar":"sliderBar_Slider__guid__d712fa","tooltip":"tooltip_Slider__guid__d712fa","sliderThumb":"sliderThumb_Slider__guid__d712fa","label":"label_Slider__guid__d712fa","minLabel":"minLabel_Slider__guid__d712fa label_Slider__guid__d712fa","maxLabel":"maxLabel_Slider__guid__d712fa label_Slider__guid__d712fa","tooltipChild":"tooltipChild_Slider__guid__d712fa"}};
var isLite =
    window.__splunkd_partials__ &&
    window.__splunkd_partials__['/services/server/info'] &&
    window.__splunkd_partials__['/services/server/info']
        .entry[0].content.product_type === 'lite';
var theme = window.__splunk_ui_theme__ || (isLite ? 'lite' : 'enterprise');

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
var guid = module.guid ||  s4() + s4() + s4() + s4();
// Add guid to locals
Object.keys(themeLocals[theme]).forEach(function(className) {
    var value = themeLocals[theme][className];
    themeLocals[theme][className] =
        value.replace(/_guid_/g, guid);
 });
//  Add guid to styles
styles[theme] = styles[theme].replace(/_guid_/g, guid);
module.exports = [[module.i, styles[theme], '']];
module.exports.locals = themeLocals[theme];
module.guid = guid;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _reactEventListener = __webpack_require__(14);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _testSupport = __webpack_require__(1);

var _lodash = __webpack_require__(6);

var _errorHandling = __webpack_require__(10);

var _keyboard = __webpack_require__(12);

var _Tooltip = __webpack_require__(30);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Slider = __webpack_require__(208);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props) {
        var _ref;

        _classCallCheck(this, Slider);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this, props].concat(rest)));

        _this.checkPositionBounds = function (pos) {
            if (pos > 100) {
                return 100;
            } else if (pos < 0) {
                return 0;
            }
            return pos;
        };

        _this.checkValueBounds = function (val) {
            if (val > _this.props.max) {
                return _this.props.max;
            } else if (val < _this.props.min) {
                return _this.props.min;
            }
            return val;
        };

        _this.handleBlur = function () {
            _this.setState({
                showTooltip: false
            });
        };

        _this.handleClick = function (e) {
            var pos = _this.percentageFromEvent(e);
            var val = _this.roundValue(_this.positionToValue(pos));
            _this.setValue(e, val);
        };

        _this.handleFocus = function () {
            _this.setState({
                showTooltip: true
            });
        };

        _this.handleKeyDown = function (e) {
            var step = _this.props.step;
            var val = _this.getValue();
            if ((0, _keyboard.keycode)(e) === 'right') {
                val = _this.checkValueBounds(val + step);
            } else if ((0, _keyboard.keycode)(e) === 'left') {
                val = _this.checkValueBounds(val - step);
            } else {
                return;
            }
            val = _this.roundValue(val);
            _this.setValue(e, val);
        };

        _this.handleMouseDown = function (e) {
            e.preventDefault();
            _this.sliderThumb.focus();
            _this.setState({
                selected: true,
                showTooltip: true
            });
        };

        _this.handleMouseEnter = function () {
            _this.setState({
                showTooltip: true
            });
        };

        _this.handleMouseLeave = function () {
            if (!_this.state.selected) {
                _this.setState({
                    showTooltip: false
                });
            }
        };

        _this.handleMouseMove = function (e) {
            if (_this.state.selected) {
                var pos = _this.percentageFromEvent(e);

                _this.setValue(e, _this.roundValue(_this.positionToValue(pos)));
                _this.setState({
                    position: pos
                }, _this.props.onChange(e, { value: _this.getValue() }));
            }
        };

        _this.handleMouseUp = function () {
            _this.setState({
                selected: false,
                showTooltip: false
            }, _this.snapToPosition);
            _this.sliderThumb.blur();
        };

        _this.percentageFromEvent = function (e) {
            var offset = e.clientX - _this.sliderBar.getBoundingClientRect().left;
            return _this.checkPositionBounds(offset / _this.width * 100);
        };

        _this.positionToValue = function (pos) {
            var valRange = _this.props.max - _this.props.min;
            return pos / 100 * valRange + _this.props.min;
        };

        _this.roundValue = function (val) {
            var step = _this.props.step;
            var times = Math.round(val / step);
            var newVal = step * times;

            var decPlace = (String(step).split('.')[1] || []).length;
            var pow = Math.pow(10, decPlace); // eslint-disable-line no-restricted-properties

            return Math.floor(newVal * pow) / pow;
        };

        _this.snapToPosition = function () {
            _this.setState({
                position: _this.valueToPosition(_this.getValue())
            });
        };

        _this.valueToPosition = function (val) {
            var valRange = _this.props.max - _this.props.min;
            return (val - _this.props.min) / valRange * 100;
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'value');

        var defValue = (0, _lodash.has)(props, 'defaultValue') ? props.defaultValue : _this.roundValue((props.max - props.min) / 2);

        _this.state = {
            selected: false,
            showTooltip: false,
            position: _this.valueToPosition(_this.isControlled() ? _this.props.value : defValue),
            value: _this.isControlled() ? null : defValue
        };

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('defaultValue prop is not compatible with value prop.');
        }

        if (props.min >= props.max && process.env.NODE_ENV !== "production") {
            (0, _errorHandling.invariant)('Error in Slider: max must be greater than min');
        }
        return _this;
    }

    _createClass(Slider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.width = this.sliderBar.clientWidth;
            this.thumbRadius = this.sliderThumb.clientWidth / 2;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change Slider from an uncontrolled component to a controlled\n    one. Prop \'value\' is not valid in subsequent updates if not provided in the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValue !== this.props.defaultValue) {
                (0, _errorHandling.invariant)('Cannot change defaultValue after set.');
            }
            this.setState({
                position: this.valueToPosition(nextProps.value)
            });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.isControlled() ? this.props.value : this.state.value;
        }
    }, {
        key: 'setValue',
        value: function setValue(e, value) {
            var _this2 = this;

            this.setState({
                value: this.isControlled() ? null : value
            }, function () {
                if (_this2.getValue() !== value) {
                    _this2.props.onChange(e, { value: value });
                }
                _this2.snapToPosition();
            });
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                className = _props.className,
                min = _props.min,
                max = _props.max,
                otherProps = _objectWithoutProperties(_props, ['className', 'min', 'max']);

            var boxProps = (0, _lodash.omit)(otherProps, ['step', 'value']);
            /* eslint-disable jsx-a11y/no-static-element-interactions */
            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    className: (0, _toClassName2.default)(_Slider2.default.main, className),
                    flex: true
                }, (0, _testSupport.createTestHook)(__filename), boxProps),
                this.state.selected && _react2.default.createElement(_reactEventListener2.default, {
                    onMouseUp: this.handleMouseUp,
                    onMouseMove: this.handleMouseMove,
                    onResize: this.handleResize,
                    target: 'window'
                }),
                _react2.default.createElement(
                    _Box2.default,
                    { className: _Slider2.default.minLabel },
                    min
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: _Slider2.default.input,
                        'data-attribute': 'sliderBarWrapper',
                        onClick: this.handleClick
                    },
                    _react2.default.createElement('div', {
                        className: _Slider2.default.sliderBar,
                        ref: function ref(el) {
                            return _this3.sliderBar = el;
                        }
                    }),
                    _react2.default.createElement(
                        _Tooltip2.default,
                        {
                            className: _Slider2.default.tooltip,
                            content: this.getValue(),
                            open: this.state.showTooltip,
                            style: { left: this.state.position + '%' }
                        },
                        _react2.default.createElement('div', {
                            className: _Slider2.default.sliderThumb,
                            onBlur: this.handleBlur,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            onKeyDown: this.handleKeyDown,
                            onMouseDown: this.handleMouseDown,
                            onFocus: this.handleFocus,
                            ref: function ref(el) {
                                return _this3.sliderThumb = el;
                            },
                            tabIndex: '0'
                        })
                    )
                ),
                _react2.default.createElement(
                    _Box2.default,
                    { className: _Slider2.default.maxLabel },
                    max
                )
            );
            /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
    }]);

    return Slider;
}(_react.Component);

Slider.propTypes = {
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** Set this property instead of value to make value uncontrolled. */
    defaultValue: _propTypes2.default.number,
    /** When false, display as inline-block with the default width. */
    inline: _propTypes2.default.bool,
    /** The minimum value of the Slider input. */
    min: _propTypes2.default.number,
    /** The maximum value of the Slider input. */
    max: _propTypes2.default.number,
    /** Return event and data object with slider value */
    onChange: _propTypes2.default.func,
    /** The step value of the Slider input. */
    step: _propTypes2.default.number,
    /** The value of the slider.
    * Setting this value makes the property controlled. A callback is required. */
    value: _propTypes2.default.number
};
Slider.defaultProps = {
    inline: false,
    min: 1,
    max: 5,
    onChange: _lodash.noop,
    step: 1
};
exports.default = Slider;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Slider/Slider.jsx"))

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/toClassName");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })

/******/ });