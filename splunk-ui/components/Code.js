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
/******/ 	return __webpack_require__(__webpack_require__.s = 396);
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

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Code.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Code.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".pre_Code__guid__381952{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;line-height:17px;text-align:left;-moz-tab-size:4;-o-tab-size:4;tab-size:4;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;hyphens:none;overflow-x:auto;margin-bottom:1.3em}.pre_Code__guid__381952::-moz-selection{background:rgba(61,171,255,.12)}&::-moz-selection{background:rgba(61,171,255,.12)}.pre_Code__guid__381952::selection{background:rgba(61,171,255,.12)}.code_Code__guid__381952{font-family:Splunk Platform Mono,Droid Sans Mono,Consolas,Monaco,Courier New,Courier,monospace}.indent_Code__guid__381952:not(:last-child){background-image:-webkit-linear-gradient(right,rgba(0,0,0,.15) 1px,transparent 0,transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.15) 1px,transparent 1px,transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.15) 1px,transparent 0,transparent)}.cdata_Code__guid__381952,.comment_Code__guid__381952,.doctype_Code__guid__381952,.prolog_Code__guid__381952{color:#8293a7}.punctuation_Code__guid__381952{color:#8293a7}.namespace_Code__guid__381952{opacity:.7}.boolean_Code__guid__381952,.constant_Code__guid__381952,.deleted_Code__guid__381952,.number_Code__guid__381952,.property_Code__guid__381952,.symbol_Code__guid__381952,.tag_Code__guid__381952{color:#7738ff}.attr-name_Code__guid__381952,.builtin_Code__guid__381952,.char_Code__guid__381952,.inserted_Code__guid__381952,.selector_Code__guid__381952,.string_Code__guid__381952{color:#5ca300}.entity_Code__guid__381952,.language-css_Code__guid__381952 .string_Code__guid__381952,.operator_Code__guid__381952,.style_Code__guid__381952 .string_Code__guid__381952,.url_Code__guid__381952{color:#a67f59}.atrule_Code__guid__381952,.attr-value_Code__guid__381952,.keyword_Code__guid__381952{color:#2662fc}.function_Code__guid__381952{color:#d90700}.important_Code__guid__381952,.regex_Code__guid__381952,.variable_Code__guid__381952{color:#f58220}.bold_Code__guid__381952,.important_Code__guid__381952{font-weight:700}.italic_Code__guid__381952{font-style:italic}.entity_Code__guid__381952{cursor:help}","lite":".pre_Code__guid__381952{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;line-height:17px;text-align:left;-moz-tab-size:4;-o-tab-size:4;tab-size:4;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;hyphens:none;overflow-x:auto;margin-bottom:1.3em}.pre_Code__guid__381952::-moz-selection{background:rgba(61,171,255,.12)}&::-moz-selection{background:rgba(61,171,255,.12)}.pre_Code__guid__381952::selection{background:rgba(61,171,255,.12)}.code_Code__guid__381952{font-family:Splunk Platform Mono,Droid Sans Mono,Consolas,Monaco,Courier New,Courier,monospace}.indent_Code__guid__381952:not(:last-child){background-image:-webkit-linear-gradient(right,rgba(0,0,0,.15) 1px,transparent 0,transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.15) 1px,transparent 1px,transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.15) 1px,transparent 0,transparent)}.cdata_Code__guid__381952,.comment_Code__guid__381952,.doctype_Code__guid__381952,.prolog_Code__guid__381952{color:#8293a7}.punctuation_Code__guid__381952{color:#8293a7}.namespace_Code__guid__381952{opacity:.7}.boolean_Code__guid__381952,.constant_Code__guid__381952,.deleted_Code__guid__381952,.number_Code__guid__381952,.property_Code__guid__381952,.symbol_Code__guid__381952,.tag_Code__guid__381952{color:#7738ff}.attr-name_Code__guid__381952,.builtin_Code__guid__381952,.char_Code__guid__381952,.inserted_Code__guid__381952,.selector_Code__guid__381952,.string_Code__guid__381952{color:#5ca300}.entity_Code__guid__381952,.language-css_Code__guid__381952 .string_Code__guid__381952,.operator_Code__guid__381952,.style_Code__guid__381952 .string_Code__guid__381952,.url_Code__guid__381952{color:#a67f59}.atrule_Code__guid__381952,.attr-value_Code__guid__381952,.keyword_Code__guid__381952{color:#2662fc}.function_Code__guid__381952{color:#d90700}.important_Code__guid__381952,.regex_Code__guid__381952,.variable_Code__guid__381952{color:#f58220}.bold_Code__guid__381952,.important_Code__guid__381952{font-weight:700}.italic_Code__guid__381952{font-style:italic}.entity_Code__guid__381952{cursor:help}"};
var themeLocals = {"enterprise":{"pre":"pre_Code__guid__381952","code":"code_Code__guid__381952","indent":"indent_Code__guid__381952","comment":"comment_Code__guid__381952","prolog":"prolog_Code__guid__381952","doctype":"doctype_Code__guid__381952","cdata":"cdata_Code__guid__381952","punctuation":"punctuation_Code__guid__381952","namespace":"namespace_Code__guid__381952","property":"property_Code__guid__381952","tag":"tag_Code__guid__381952","boolean":"boolean_Code__guid__381952","number":"number_Code__guid__381952","constant":"constant_Code__guid__381952","symbol":"symbol_Code__guid__381952","deleted":"deleted_Code__guid__381952","selector":"selector_Code__guid__381952","attr-name":"attr-name_Code__guid__381952","string":"string_Code__guid__381952","char":"char_Code__guid__381952","builtin":"builtin_Code__guid__381952","inserted":"inserted_Code__guid__381952","operator":"operator_Code__guid__381952","entity":"entity_Code__guid__381952","url":"url_Code__guid__381952","language-css":"language-css_Code__guid__381952","style":"style_Code__guid__381952","atrule":"atrule_Code__guid__381952","attr-value":"attr-value_Code__guid__381952","keyword":"keyword_Code__guid__381952","function":"function_Code__guid__381952","regex":"regex_Code__guid__381952","important":"important_Code__guid__381952","variable":"variable_Code__guid__381952","bold":"bold_Code__guid__381952","italic":"italic_Code__guid__381952"},"lite":{"pre":"pre_Code__guid__381952","code":"code_Code__guid__381952","indent":"indent_Code__guid__381952","comment":"comment_Code__guid__381952","prolog":"prolog_Code__guid__381952","doctype":"doctype_Code__guid__381952","cdata":"cdata_Code__guid__381952","punctuation":"punctuation_Code__guid__381952","namespace":"namespace_Code__guid__381952","property":"property_Code__guid__381952","tag":"tag_Code__guid__381952","boolean":"boolean_Code__guid__381952","number":"number_Code__guid__381952","constant":"constant_Code__guid__381952","symbol":"symbol_Code__guid__381952","deleted":"deleted_Code__guid__381952","selector":"selector_Code__guid__381952","attr-name":"attr-name_Code__guid__381952","string":"string_Code__guid__381952","char":"char_Code__guid__381952","builtin":"builtin_Code__guid__381952","inserted":"inserted_Code__guid__381952","operator":"operator_Code__guid__381952","entity":"entity_Code__guid__381952","url":"url_Code__guid__381952","language-css":"language-css_Code__guid__381952","style":"style_Code__guid__381952","atrule":"atrule_Code__guid__381952","attr-value":"attr-value_Code__guid__381952","keyword":"keyword_Code__guid__381952","function":"function_Code__guid__381952","regex":"regex_Code__guid__381952","important":"important_Code__guid__381952","variable":"variable_Code__guid__381952","bold":"bold_Code__guid__381952","italic":"italic_Code__guid__381952"}};
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

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/syntax");

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Code;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(6);

var _syntax = __webpack_require__(38);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Code = __webpack_require__(179);

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var supportedLanguages = ['markup', 'xml', 'html', 'mathml', 'svg', 'css', 'clike', 'javascript', 'js'];

var propTypes = {
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /**
     * The length of indents, this only matters when `showIndentGuide` is `true`
     */
    indentChars: _propTypes2.default.number,
    /**
     * The language of the code
     */
    language: _propTypes2.default.oneOf(supportedLanguages),
    /**
     * Show the indent guideline or not
     */
    showIndentGuide: _propTypes2.default.bool,
    /**
     * Code contents
     */
    value: _propTypes2.default.string
};

var defaultProps = {
    indentChars: 4,
    language: 'javascript',
    showIndentGuide: true,
    value: ''
};

/**
 * The `Code` is a code block component which supports syntax highlight.
 */
function Code(props) {
    var className = props.className,
        value = props.value,
        indentChars = props.indentChars,
        language = props.language,
        showIndentGuide = props.showIndentGuide,
        otherProps = _objectWithoutProperties(props, ['className', 'value', 'indentChars', 'language', 'showIndentGuide']);

    var indentBlock = (0, _lodash.repeat)(' ', indentChars);
    var makeIndentGuide = function makeIndentGuide(spaces) {
        var level = Math.floor(spaces / indentChars);
        var rest = spaces % indentChars;
        var spans = (0, _lodash.times)(level, function (idx) {
            return _react2.default.createElement(
                'span',
                { className: _Code2.default.indent, key: idx.toString() },
                indentBlock
            );
        });
        if (rest) {
            spans.push((0, _lodash.repeat)(' ', rest));
        }
        return spans;
    };

    var tokens = (0, _syntax.tokenize)(value, language);

    var render = function render(tks) {
        return tks.map(function (part, idx) {
            if (typeof part === 'string') {
                if (!showIndentGuide) {
                    return part;
                }

                var lines = part.split('\n');
                if (lines.length === 1) {
                    return part;
                }

                return (0, _lodash.flatten)(lines.map(function (line, lineNo) {
                    var res = lineNo === 0 ? [] : ['\n'];

                    var indentMatch = line.match(/^(\s+)(.*)/);
                    if (!indentMatch) {
                        res.push(line);
                    } else {
                        res.push(_react2.default.createElement(
                            'span',
                            { key: idx.toString() + ':' + lineNo.toString() },
                            makeIndentGuide(indentMatch[1].length)
                        ), indentMatch[2]);
                    }

                    return res;
                }));
            }

            var content = typeof part.content === 'string' ? part.content : render(part.content);

            return _react2.default.createElement(
                'span',
                {
                    className: (0, _toClassName2.default)(_Code2.default[part.type]),
                    key: idx.toString()
                },
                content
            );
        });
    };

    var codeContent = render(tokens);

    return _react2.default.createElement(
        'pre',
        _extends({
            className: (0, _toClassName2.default)(_Code2.default.pre, className)
        }, (0, _testSupport.createTestHook)(__filename), otherProps),
        _react2.default.createElement(
            'code',
            { className: (0, _toClassName2.default)(_Code2.default.code, 'language-' + language) },
            codeContent
        )
    );
}

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Code/Code.jsx"))

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