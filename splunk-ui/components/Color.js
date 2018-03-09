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
/******/ 	return __webpack_require__(__webpack_require__.s = 398);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/keyboard");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Clickable");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Button");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/ScreenReaderContent");

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(320);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Color.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Color.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Text");

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(6);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Clickable = __webpack_require__(13);

var _Clickable2 = _interopRequireDefault(_Clickable);

var _ScreenReaderContent = __webpack_require__(18);

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _Swatch = __webpack_require__(284);

var _Swatch2 = _interopRequireDefault(_Swatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swatch = function (_Component) {
    _inherits(Swatch, _Component);

    function Swatch() {
        _classCallCheck(this, Swatch);

        return _possibleConstructorReturn(this, (Swatch.__proto__ || Object.getPrototypeOf(Swatch)).apply(this, arguments));
    }

    _createClass(Swatch, [{
        key: 'focus',
        value: function focus() {
            this.clickable.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                append = _props.append,
                className = _props.className,
                value = _props.value,
                onClick = _props.onClick,
                prepend = _props.prepend,
                size = _props.size,
                style = _props.style,
                otherProps = _objectWithoutProperties(_props, ['append', 'className', 'value', 'onClick', 'prepend', 'size', 'style']);

            function handleClick(e) {
                onClick(e, { value: value });
            }
            return _react2.default.createElement(
                _Clickable2.default,
                _extends({
                    className: (0, _toClassName2.default)(_Swatch2.default.main, className),
                    'data-append': append ? true : null,
                    'data-prepend': prepend ? true : null,
                    'data-size': size,
                    style: _extends({}, style, { backgroundColor: value }),
                    onClick: handleClick,
                    ref: function ref(c) {
                        _this2.clickable = c;
                    }
                }, otherProps),
                _react2.default.createElement(
                    _ScreenReaderContent2.default,
                    null,
                    value
                )
            );
        }
    }]);

    return Swatch;
}(_react.Component);

Swatch.propTypes = {
    /** Append removes border from the right side. */
    append: _propTypes2.default.bool,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** The color of the swatch to be shown. */
    value: _propTypes2.default.string,
    /** @docs-ignore. Call back function when activated. */
    onClick: _propTypes2.default.func,
    /** This has no affect on the appearance at this time but is recommend to be used when a
     * control is joined to the left. Styles may change in the future. */
    prepend: _propTypes2.default.bool,
    /** The size of the swatch. */
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /** @docs-ignore. Overide look and feel with inline styles. */
    style: _propTypes2.default.object
};
Swatch.defaultProps = {
    onClick: _lodash.noop,
    size: 'medium'
};
exports.default = Swatch;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Swatch.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Swatch.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Dropdown");

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".dropdown_Color__guid__f32ec3{width:150px;padding:10px}.swatches_Color__guid__f32ec3{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;margin-bottom:6px;margin-right:-6px}.swatches_Color__guid__f32ec3:after{display:table;content:\"\";clear:both}.swatch_Color__guid__f32ec3{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-width:1px;visibility:inherit;margin-right:5px;margin-bottom:5px}.input_Color__guid__f32ec3{display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.button_Color__guid__f32ec3{padding-left:7px;padding-right:7px}","enterprise":".dropdown_Color__guid__f32ec3{width:150px;padding:10px}.swatches_Color__guid__f32ec3{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;margin-bottom:6px;margin-right:-6px}.swatches_Color__guid__f32ec3:after{display:table;content:\"\";clear:both}.swatch_Color__guid__f32ec3{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-width:1px;visibility:inherit;margin-right:5px;margin-bottom:5px}.input_Color__guid__f32ec3{display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.button_Color__guid__f32ec3{padding-left:7px;padding-right:7px}"};
var themeLocals = {"lite":{"dropdown":"dropdown_Color__guid__f32ec3","swatches":"swatches_Color__guid__f32ec3","swatch":"swatch_Color__guid__f32ec3","input":"input_Color__guid__f32ec3","button":"button_Color__guid__f32ec3"},"enterprise":{"dropdown":"dropdown_Color__guid__f32ec3","swatches":"swatches_Color__guid__f32ec3","swatch":"swatch_Color__guid__f32ec3","input":"input_Color__guid__f32ec3","button":"button_Color__guid__f32ec3"}};
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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_Swatch__guid__3614ac{display:block;border:1px solid #ccc;border-color:#333;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.main_Swatch__guid__3614ac:focus{border-color:rgba(82,168,236,.8);-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.main_Swatch__guid__3614ac[data-size=small]{width:22px;height:22px}.main_Swatch__guid__3614ac[data-size=medium]{width:26px;height:26px}.main_Swatch__guid__3614ac[data-prepend=append]{border-right:none}.main_Swatch__guid__3614ac[disabled]{background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.8)),to(hsla(0,0%,100%,.8)));background-image:-webkit-linear-gradient(hsla(0,0%,100%,.8),hsla(0,0%,100%,.8));background-image:-o-linear-gradient(hsla(0,0%,100%,.8),hsla(0,0%,100%,.8));background-image:linear-gradient(hsla(0,0%,100%,.8),hsla(0,0%,100%,.8))}.main_Swatch__guid__3614ac[aria-invalid]{-webkit-box-shadow:inset 0 0 0 2px #fff;box-shadow:inset 0 0 0 2px #fff;border-color:#d6563c}","enterprise":".main_Swatch__guid__3614ac{display:block;border:1px solid #ccc;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.main_Swatch__guid__3614ac:focus{border-color:rgba(82,168,236,.8);-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.main_Swatch__guid__3614ac[data-size=small]{width:22px;height:22px}.main_Swatch__guid__3614ac[data-size=medium]{width:26px;height:26px}.main_Swatch__guid__3614ac[data-prepend=append]{border-right:none}.main_Swatch__guid__3614ac[disabled]{background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.8)),to(hsla(0,0%,100%,.8)));background-image:-webkit-linear-gradient(hsla(0,0%,100%,.8),hsla(0,0%,100%,.8));background-image:-o-linear-gradient(hsla(0,0%,100%,.8),hsla(0,0%,100%,.8));background-image:linear-gradient(hsla(0,0%,100%,.8),hsla(0,0%,100%,.8))}.main_Swatch__guid__3614ac[aria-invalid]{-webkit-box-shadow:inset 0 0 0 2px #fff;box-shadow:inset 0 0 0 2px #fff;border-color:#d6563c}"};
var themeLocals = {"lite":{"main":"main_Swatch__guid__3614ac"},"enterprise":{"main":"main_Swatch__guid__3614ac"}};
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

/***/ 398:
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

var _lodash = __webpack_require__(6);

var _errorHandling = __webpack_require__(10);

var _keyboard = __webpack_require__(12);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _testSupport = __webpack_require__(1);

var _Button = __webpack_require__(15);

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = __webpack_require__(31);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Text = __webpack_require__(19);

var _Text2 = _interopRequireDefault(_Text);

var _ScreenReaderContent = __webpack_require__(18);

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _Swatch = __webpack_require__(222);

var _Swatch2 = _interopRequireDefault(_Swatch);

var _Color = __webpack_require__(181);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Color = function (_Component) {
    _inherits(Color, _Component);

    _createClass(Color, null, [{
        key: 'isValidHEX',
        value: function isValidHEX(value) {
            return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value)
            );
        }
    }]);

    function Color(props) {
        var _ref;

        _classCallCheck(this, Color);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Color.__proto__ || Object.getPrototypeOf(Color)).call.apply(_ref, [this, props].concat(rest)));

        _initialiseProps.call(_this);

        _this.controlledExternally = (0, _lodash.has)(props, 'value');
        var value = props.defaultValue || '';
        _this.state = {
            value: value,
            displayValue: value,
            open: false
        };
        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('defaultValue prop is not compatible with value prop.');
        }
        return _this;
    }

    _createClass(Color, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change Color from an uncontrolled component to a controlled\n                one. Prop \'value\' is not valid in subsequent updates if not provided in the\n                initial props.');
            }
            if (process.env.NODE_ENV !== "production" && nextProps.defaultValue !== this.props.defaultValue) {
                (0, _errorHandling.invariant)('Cannot change defaultValue after set.');
            }
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }

        /**
         * Place focus on the input.
         */

    }, {
        key: 'focus',
        value: function focus() {
            this.dropdown.focus();
        }
    }, {
        key: 'submitValue',
        value: function submitValue(value) {
            if (Color.isValidHEX(value)) {
                var hasColorChanged = value !== this.state.value;
                if (!this.isControlled()) {
                    this.setState({ value: value });
                }
                if (hasColorChanged) {
                    this.props.onChange({ value: value });
                }
            }
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _this2 = this;

            var displayValue = this.state.displayValue;
            return _react2.default.createElement(
                'div',
                { className: _Color2.default.input, 'data-role': 'textbox' },
                _react2.default.createElement(
                    _Button2.default,
                    { className: _Color2.default.button, append: true, disabled: true },
                    '#'
                ),
                _react2.default.createElement(_Text2.default, {
                    append: true,
                    prepend: true,
                    onKeyDown: this.handleTextKeyDown,
                    onChange: this.handleTextChange,
                    ref: function ref(c) {
                        _this2.text = c;
                    },
                    value: (0, _lodash.trimStart)(displayValue, '#')
                }),
                _react2.default.createElement(
                    _Swatch2.default,
                    {
                        onClick: this.handleButtonClick,
                        value: displayValue,
                        tabIndex: '-1',
                        prepend: true
                    },
                    _react2.default.createElement(
                        _ScreenReaderContent2.default,
                        null,
                        'Apply Color'
                    )
                )
            );
        }
    }, {
        key: 'renderPalette',
        value: function renderPalette() {
            var _this3 = this;

            return _react2.default.createElement(
                'ul',
                { className: _Color2.default.swatches },
                this.props.palette.map(function (value) {
                    return _react2.default.createElement(
                        'li',
                        { key: value, className: _Color2.default.swatch },
                        _react2.default.createElement(_Swatch2.default, { value: value, onClick: _this3.handleSwatchClick })
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                error = _props.error,
                size = _props.size,
                value = _props.value;

            var displayValue = this.isControlled() ? value : this.state.value;
            var toggle = _react2.default.createElement(_Swatch2.default, {
                'aria-invalid': error || null,
                disabled: disabled,
                size: size,
                value: displayValue
            });
            return _react2.default.createElement(
                _Dropdown2.default,
                _extends({
                    closeReasons: ['clickAway', 'escapeKey', 'offScreen', 'toggleClick'],
                    toggle: toggle,
                    open: this.state.open,
                    className: (0, _toClassName2.default)(_Color2.default.main, className),
                    onRequestClose: this.handleRequestClose,
                    onRequestOpen: this.handleRequestOpen,
                    ref: function ref(c) {
                        _this4.dropdown = c;
                    },
                    retainFocus: true
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(this.props, Object.keys(Color.propTypes))),
                _react2.default.createElement(
                    'div',
                    { className: _Color2.default.dropdown },
                    this.renderPalette(),
                    this.renderInput()
                )
            );
        }
    }]);

    return Color;
}(_react.Component);

Color.propTypes = {
    /** Append removes border from the right side. */
    append: _propTypes2.default.bool,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** Set this property instead of value to make value uncontrolled. */
    defaultValue: _propTypes2.default.string,
    /** Add a disabled attribute and prevent clicking. */
    disabled: _propTypes2.default.bool,
    /** Add an error attribute. */
    error: _propTypes2.default.bool,
    /**
     * The value of the color (hexadecimal). Setting this value makes the property controlled.
      A callback is required.
     */
    value: _propTypes2.default.string,
    /** An array of optional color swatch values (hexadecimal). */
    palette: _propTypes2.default.array,
    /** This has no affect on the appearance at this time but is recommend to be used when a
     * control is joined to the left. Styles may change in the future. */
    prepend: _propTypes2.default.bool,
    /** A callback that receives the value of a newly selected color. */
    onChange: _propTypes2.default.func,
    /** The size of the swatch. */
    size: _propTypes2.default.oneOf(['small', 'medium'])
};
Color.defaultProps = {
    append: false,
    disabled: false,
    error: false,
    onChange: _lodash.noop,
    palette: [],
    prepend: false,
    size: 'medium'
};

var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.handleSwatchClick = function (e, _ref2) {
        var value = _ref2.value;

        var hasColorChanged = value !== _this5.state.value;
        if (!_this5.isControlled()) {
            _this5.setState({ value: value });
        }
        _this5.setState({ open: false });
        if (hasColorChanged) {
            _this5.props.onChange({ value: value });
        }
        _this5.focus();
        e.preventDefault();
    };

    this.handleTextChange = function (e, _ref3) {
        var value = _ref3.value;

        _this5.setState({ displayValue: '#' + value });
    };

    this.handleTextKeyDown = function (e) {
        if ((0, _keyboard.keycode)(e) === 'enter') {
            _this5.handleRequestClose({ reason: 'enterKey' });
            _this5.focus();
            e.preventDefault();
        }
    };

    this.handleButtonClick = function (e) {
        _this5.handleRequestClose({ reason: 'buttonClick' });
        _this5.focus();
        e.preventDefault();
    };

    this.handleRequestClose = function (_ref4) {
        var reason = _ref4.reason;

        var value = _this5.state.displayValue;
        if (reason !== 'contentClick') {
            _this5.setState({ open: false });
        }
        if (reason !== 'escapeKey') {
            _this5.submitValue(value);
        }
    };

    this.handleRequestOpen = function () {
        var displayValue = _this5.isControlled() ? _this5.props.value : _this5.state.value;
        _this5.setState({ displayValue: displayValue, open: true }, function () {
            return _this5.text.focus();
        });
    };
};

exports.default = Color;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Color/Color.jsx"))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

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