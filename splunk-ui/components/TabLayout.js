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
/******/ 	return __webpack_require__(__webpack_require__.s = 439);
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

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(6);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _TabLayout = __webpack_require__(50);

var _TabLayout2 = _interopRequireDefault(_TabLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    /** @docs-ignore */
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** See Icon documention for more information. */
    icon: _propTypes2.default.node,
    /** The text shown in the button. */
    label: _propTypes2.default.string,
    /** A unique id for this panel and used by the TabLayout to keep track of the open panel. */
    panelId: _propTypes2.default.string.isRequired
};

var defaultProps = {};

function Panel(props) {
    var children = props.children,
        className = props.className,
        panelId = props.panelId;

    return _react2.default.createElement(
        'div',
        _extends({
            className: (0, _toClassName2.default)(_TabLayout2.default.panel, className),
            'data-panel-id': panelId
        }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(props, Object.keys(propTypes))),
        children
    );
}

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
exports.default = Panel;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/TabLayout/Panel.jsx"))

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/TabBar");

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_TabLayout__guid__ed9553{text-align:center;margin-top:50px}.main_TabLayout__guid__ed9553 .panel_TabLayout__guid__ed9553{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit}","lite":".main_TabLayout__guid__ed9553{text-align:center;margin-top:50px}.main_TabLayout__guid__ed9553 .panel_TabLayout__guid__ed9553{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit}"};
var themeLocals = {"enterprise":{"main":"main_TabLayout__guid__ed9553","panel":"panel_TabLayout__guid__ed9553"},"lite":{"main":"main_TabLayout__guid__ed9553","panel":"panel_TabLayout__guid__ed9553"}};
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

/***/ 439:
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

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _TabBar = __webpack_require__(266);

var _TabBar2 = _interopRequireDefault(_TabBar);

var _Panel = __webpack_require__(251);

var _Panel2 = _interopRequireDefault(_Panel);

var _TabLayout = __webpack_require__(50);

var _TabLayout2 = _interopRequireDefault(_TabLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `TabLayout` is a group of managed `Panels`. Only one panel can be open at a time.
 * TabLayout supports both the controlled and uncontrolled patterns.
 */
var TabLayout = function (_Component) {
    _inherits(TabLayout, _Component);

    function TabLayout(props) {
        var _ref;

        _classCallCheck(this, TabLayout);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TabLayout.__proto__ || Object.getPrototypeOf(TabLayout)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleChange = function (e, data) {
            var activePanelId = data.selectedTabId;
            if (!_this.isControlled()) {
                _this.setState({ activePanelId: activePanelId });
            }
            _this.props.onChange(e, { activePanelId: activePanelId });
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'activePanelId');
        if (!_this.isControlled()) {
            _this.state = {
                activePanelId: props.defaultActivePanelId
            };
        }
        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultActivePanelId')) {
            (0, _errorHandling.invariant)('The defaultActivePanelId prop is not compatible with activePanelId prop in\n                TabLayout.');
        }
        return _this;
    }

    _createClass(TabLayout, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'activePanelId')) {
                (0, _errorHandling.invariant)('Cannot change TabLayout from an uncontrolled component to a controlled\n                one. Prop \'activePanelId\' is not valid in subsequent updates if not provided in the\n                initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultActivePanelId !== this.props.defaultActivePanelId) {
                (0, _errorHandling.invariant)('Cannot change defaultActivePanelId after set. Consider using a controlled\n                component instead.');
            }
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'render',
        value: function render() {
            var panel = void 0;
            var activePanelId = this.isControlled() ? this.props.activePanelId : this.state.activePanelId;
            var _props = this.props,
                className = _props.className,
                children = _props.children;

            var tabs = _react.Children.toArray(children).filter(_react.isValidElement).map(function (child) {
                var props = child.props;
                if (props.panelId === activePanelId) {
                    panel = child;
                }
                return _react2.default.createElement(_TabBar2.default.Tab, {
                    icon: props.icon,
                    key: props.panelId,
                    label: props.label,
                    tabId: props.panelId
                });
            });
            if (process.env.NODE_ENV !== "production" && !panel) {
                (0, _errorHandling.invariant)('Invalid `activePanelId` in `TabLayout`. `activePanelId` must match\n                a `Panel`.');
            }
            return _react2.default.createElement(
                'div',
                _extends({
                    className: (0, _toClassName2.default)(_TabLayout2.default.main, className)
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(this.props, Object.keys(TabLayout.propTypes))),
                _react2.default.createElement(
                    _TabBar2.default,
                    { activeTabId: activePanelId, onChange: this.handleChange },
                    tabs
                ),
                panel
            );
        }
    }]);

    return TabLayout;
}(_react.Component);

TabLayout.propTypes = {
    /**
     * `children` should be `TabLayout.Panel`.
     **/
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /**
     * Sets the active panel on the initial render. It should match the `panelId` of one of
     * the child `TabLayout.Panel`s. Only use `defaultActivePanelId` when using `TabLayout`
     * as an uncontrolled component.
     */
    defaultActivePanelId: _propTypes2.default.any,
    /** A callback that receives the event and data (selectedPanelId). */
    onChange: _propTypes2.default.func,
    /** The `panelId` of the `TabLayout.Panel` to activate. */
    activePanelId: _propTypes2.default.any
};
TabLayout.defaultProps = {
    onChange: _lodash.noop
};
TabLayout.Panel = _Panel2.default;
exports.default = TabLayout;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/TabLayout/TabLayout.jsx"))

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/toClassName");

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./TabLayout.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./TabLayout.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

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