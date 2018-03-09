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
/******/ 	return __webpack_require__(__webpack_require__.s = 414);
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Menu.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/ChevronRight");

/***/ }),

/***/ 233:
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

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Divider = __webpack_require__(292);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    /** @docs-ignore */
    className: _propTypes2.default.string
};

/**
 * A non-interactive menu item used to visually separate groups of items in the menu.
 */
function Divider(props) {
    var className = props.className,
        otherProps = _objectWithoutProperties(props, ['className']);

    return _react2.default.createElement('li', _extends({
        className: (0, _toClassName2.default)(_Divider2.default.main, className)
    }, (0, _testSupport.createTestHook)(__filename), otherProps));
}

exports.default = Divider;

/* Remove the item if it is the first item after filtering */

Divider.filterFirst = true;
/* Remove consecutive items with filterConsecutive = true (Dividers and Headings) */
Divider.filterConsecutive = true;
/* Remove the item if it is the last item after filtering. */
Divider.filterLast = true;

Divider.propTypes = propTypes;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Menu/Divider.jsx"))

/***/ }),

/***/ 234:
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

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Heading = __webpack_require__(293);

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** @docs-ignore */
    children: _propTypes2.default.node
};

/**
 * A non-interactive menu item used to separate and label groups of menu items.
 */
function Heading(props) {
    var className = props.className,
        children = props.children,
        otherProps = _objectWithoutProperties(props, ['className', 'children']);

    return _react2.default.createElement(
        'li',
        _extends({
            className: (0, _toClassName2.default)(_Heading2.default.main, className)
        }, (0, _testSupport.createTestHook)(__filename), otherProps),
        children
    );
}

Heading.propTypes = propTypes;

/* Remove consecutive items with filterConsecutive = true (Dividers and Headings) */
Heading.filterConsecutive = true;
/* Remove the item if it is the last item after filtering. */
Heading.filterLast = true;

exports.default = Heading;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Menu/Heading.jsx"))

/***/ }),

/***/ 235:
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

var _errorHandling = __webpack_require__(10);

var _i18n = __webpack_require__(2);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Clickable = __webpack_require__(13);

var _Clickable2 = _interopRequireDefault(_Clickable);

var _Check = __webpack_require__(42);

var _Check2 = _interopRequireDefault(_Check);

var _ChevronRight = __webpack_require__(22);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _Item = __webpack_require__(294);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
    _inherits(Item, _Component);

    _createClass(Item, null, [{
        key: 'validateProps',
        value: function validateProps(props) {
            if (process.env.NODE_ENV !== "production" && props.truncate && props.descriptionPosition === 'right') {
                (0, _errorHandling.invariant)('truncate is not compatible with descriptions on the right');
            }
        }
    }]);

    function Item(props) {
        var _ref;

        _classCallCheck(this, Item);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this, props].concat(rest)));

        Item.validateProps(props);
        return _this;
    }

    _createClass(Item, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            Item.validateProps(nextProps);
        }
    }, {
        key: 'scrollIntoViewIfNeeded',
        value: function scrollIntoViewIfNeeded() {
            var parentEl = this.el.offsetParent;
            if (!parentEl) return;

            // Below the bottom of the container.
            if (parentEl.scrollTop + parentEl.clientHeight < this.el.offsetTop + this.el.clientHeight) {
                parentEl.scrollTop = this.el.offsetTop + this.el.clientHeight - parentEl.clientHeight;

                // Above the top of the container.
            } else if (parentEl.scrollTop > this.el.offsetTop) {
                parentEl.scrollTop = this.el.offsetTop;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                active = _props.active,
                children = _props.children,
                className = _props.className,
                hasSubmenu = _props.hasSubmenu,
                selectable = _props.selectable,
                selectableAppearance = _props.selectableAppearance,
                selected = _props.selected,
                icon = _props.icon,
                description = _props.description,
                disabled = _props.disabled,
                label = _props.label,
                onClick = _props.onClick,
                to = _props.to,
                truncate = _props.truncate,
                descriptionPosition = _props.descriptionPosition,
                openInNewContext = _props.openInNewContext,
                other = _objectWithoutProperties(_props, ['active', 'children', 'className', 'hasSubmenu', 'selectable', 'selectableAppearance', 'selected', 'icon', 'description', 'disabled', 'label', 'onClick', 'to', 'truncate', 'descriptionPosition', 'openInNewContext']);

            return _react2.default.createElement(
                'li',
                _extends({
                    className: _Item2.default.item,
                    ref: function ref(el) {
                        return _this2.el = el;
                    }
                }, (0, _testSupport.createTestHook)(__filename), other),
                _react2.default.createElement(
                    _Clickable2.default,
                    {
                        className: (0, _toClassName2.default)(_Item2.default.link, className),
                        'data-selectable': selectable || selected,
                        'data-selectable-appearance': selectableAppearance,
                        'data-selected': selected,
                        'data-has-icon': !!icon,
                        'data-truncation': truncate,
                        'data-active': active ? true : null,
                        disabled: disabled,
                        onClick: onClick,
                        to: to,
                        title: truncate ? this.props.label : null,
                        openInNewContext: openInNewContext
                    },
                    selected && selectableAppearance === 'checkmark' && _react2.default.createElement(
                        'div',
                        { className: _Item2.default.itemSelectedIcon },
                        _react2.default.createElement(_Check2.default, { screenReaderText: (0, _i18n._)('Selected'), size: 0.85 })
                    ),
                    selectable && selectableAppearance === 'checkbox' && _react2.default.createElement(
                        'div',
                        { className: _Item2.default.itemCheckbox },
                        selected && _react2.default.createElement(_Check2.default, {
                            screenReaderText: (0, _i18n._)('Selected'),
                            inline: false,
                            size: 0.85
                        })
                    ),
                    hasSubmenu && _react2.default.createElement(
                        'span',
                        { className: _Item2.default.submenu },
                        _react2.default.createElement(_ChevronRight2.default, null)
                    ),
                    description && descriptionPosition === 'right' && _react2.default.createElement(
                        'span',
                        { className: _Item2.default.itemDescriptionRight },
                        description
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: _Item2.default.label },
                        icon && _react2.default.createElement(
                            'span',
                            { className: _Item2.default.itemIcon },
                            icon
                        ),
                        label,
                        children
                    ),
                    description && descriptionPosition === 'bottom' && _react2.default.createElement(
                        'span',
                        { className: _Item2.default.itemDescriptionBottom },
                        description
                    )
                )
            );
        }
    }]);

    return Item;
}(_react.Component);

Item.propTypes = {
    /**
     * Active shows a temporary selected state similar to focus. This is used when filtering the
     * menu items in Multiselect, Select and ComboBox and navigating with arrows.
     */
    active: _propTypes2.default.bool,
    /** @docs-ignore */
    children: _propTypes2.default.any,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /**
    * Additional information to explain the option, such as "Recommended".
    */
    description: _propTypes2.default.string,
    /**
    * The description text may appear to the right of the label or under the label.
    */
    descriptionPosition: _propTypes2.default.oneOf(['right', 'bottom']),
    /**
    * If disabled=true, the item is grayed out and cannot be clicked.
    */
    disabled: _propTypes2.default.bool,
    /**
    * And icon to the right to show there is a submenu.
    */
    hasSubmenu: _propTypes2.default.bool,
    /**
    * An icon to insert before the label.
    */
    icon: _propTypes2.default.node,
    /**
    * The text to show for the item.
    */
    label: _propTypes2.default.string.isRequired,
    /**
    * Callback for click events.
    */
    onClick: _propTypes2.default.func,
    /**
    * To open the link in a new window, set openInNewContext to true. An icon will be added
    * indicating the the behavior.
    */
    openInNewContext: _propTypes2.default.bool,
    /**
    * If selectable is true, whitespace will be left where the checkmark can be shown.
    */
    selectable: _propTypes2.default.bool,
    /**
    * If selectable is true, whitespace will be left where the checkmark can be shown.
    */
    selectableAppearance: _propTypes2.default.oneOf(['checkmark', 'checkbox']),
    /**
    * If selected is true, a checkmark will show the item is selected.
    */
    selected: _propTypes2.default.bool,
    /* A url or path to link to.  */
    to: _propTypes2.default.string,
    /**
    * If truncate=false, wrapping will be disabled and any additional text will be ellipsised.
    */
    truncate: _propTypes2.default.bool
};
Item.defaultProps = {
    active: false,
    descriptionPosition: 'bottom',
    disabled: false,
    hasSubmenu: false,
    openInNewContext: false,
    selectable: false,
    selectableAppearance: 'checkmark',
    selected: false,
    truncate: false
};
exports.default = Item;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Menu/Item.jsx"))

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/focus");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Divider.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Divider.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(345);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Heading.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Heading.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Item.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Item.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_Divider__guid__9db7c8{border-top:1px solid #ccc}","enterprise":".main_Divider__guid__9db7c8{border-top:1px solid #ccc}"};
var themeLocals = {"lite":{"main":"main_Divider__guid__9db7c8"},"enterprise":{"main":"main_Divider__guid__9db7c8"}};
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

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_Heading__guid__4d8d63{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;color:#999;font-size:11px;padding:3px 8px;border-bottom:1px dotted #ccc;text-transform:uppercase}.main_Heading__guid__4d8d63:not(:first-child){border-top:1px solid #ccc}","lite":".main_Heading__guid__4d8d63{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;color:#999;font-size:11px;padding:3px 8px;border-bottom:1px dotted #ccc;text-transform:uppercase}.main_Heading__guid__4d8d63:not(:first-child){border-top:1px solid #ccc}"};
var themeLocals = {"enterprise":{"main":"main_Heading__guid__4d8d63"},"lite":{"main":"main_Heading__guid__4d8d63"}};
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".item_Item__guid__ec5df4{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.link_Item__guid__ec5df4{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;padding:5px 8px;position:relative;cursor:pointer;font-weight:400;line-height:16px;color:#1e93c6;text-decoration:none;word-wrap:break-word;max-width:100%;-webkit-box-flex:1;-webkit-flex:1 0 0px;flex:1 0 0px}@media (-ms-high-contrast:none){.link_Item__guid__ec5df4{max-width:calc(100% - .01px)}}.item_Item__guid__ec5df4+.item_Item__guid__ec5df4>.link_Item__guid__ec5df4{border-top:1px dotted #ccc}.link_Item__guid__ec5df4[data-selectable=true]{padding-left:23px}.link_Item__guid__ec5df4[data-selectable=true][data-selectable-appearance=checkbox]{padding-left:28px}.link_Item__guid__ec5df4[data-truncation=false]{white-space:normal}.link_Item__guid__ec5df4[data-truncation=true]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.link_Item__guid__ec5df4:not([disabled]):hover{color:#3863a0;background:rgba(0,0,0,.05)}.link_Item__guid__ec5df4:not([disabled]):focus{outline:0;background:rgba(61,171,255,.12)}.link_Item__guid__ec5df4[data-active]{background-color:rgba(61,171,255,.12)}.link_Item__guid__ec5df4[data-has-secondary=true]{margin-right:40px;border-top-right-radius:0;border-bottom-right-radius:0;border-right:1px dotted #ccc}.link_Item__guid__ec5df4 [disabled]{color:#ccc;cursor:not-allowed}.secondaryLink_Item__guid__ec5df4{position:absolute;right:0;top:0;bottom:0;width:40px;padding-left:0;padding-right:0;font-size:16px;text-align:center;border-top-left-radius:0;border-bottom-left-radius:0}.label_Item__guid__ec5df4{overflow:inherit;white-space:inherit;text-overflow:inherit;max-width:100%}[data-truncation=true]>.label_Item__guid__ec5df4{display:block;clear:both}.itemDescription_Item__guid__ec5df4{color:#999;font-size:11px;overflow:inherit;white-space:inherit;text-overflow:inherit}.itemDescriptionBottom_Item__guid__ec5df4{display:block}.itemDescriptionRight_Item__guid__ec5df4{float:right;padding-left:20px;max-width:50%;text-align:right;-webkit-box-sizing:border-box;box-sizing:border-box}.itemSelectedIcon_Item__guid__ec5df4{position:absolute;left:8px;top:5px}.itemCheckbox_Item__guid__ec5df4{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline;visibility:inherit;background-image:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#eee));background-image:-webkit-linear-gradient(top,#f7f7f7,#eee);background-image:-o-linear-gradient(top,#f7f7f7,#eee);background-image:linear-gradient(180deg,#f7f7f7,#eee);border:1px solid #bfbfbf;color:#333;-webkit-box-shadow:inset 0 1px 0 #f2f2f2;box-shadow:inset 0 1px 0 #f2f2f2;width:16px;height:16px;border-radius:4px;padding:2px;position:absolute;left:8px;top:5px}.link_Item__guid__ec5df4:hover>.itemCheckbox_Item__guid__ec5df4{background-image:none;background-color:#f7f7f7;border-color:#c7c7c7;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.08);box-shadow:0 1px 1px rgba(0,0,0,.08);color:#333;text-decoration:none;cursor:pointer}.itemIcon_Item__guid__ec5df4{padding-right:3px;min-width:10px;display:inline-block;text-align:center;vertical-align:middle;-webkit-transform:translateY(-1px);-o-transform:translateY(-1px);transform:translateY(-1px)}.info_Item__guid__ec5df4{color:#999;padding:5px 8px}.submenu_Item__guid__ec5df4{float:right;padding-left:10px;color:#999}","lite":".item_Item__guid__ec5df4{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.link_Item__guid__ec5df4{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;padding:5px 8px;position:relative;cursor:pointer;font-weight:400;line-height:16px;color:#1e93c6;text-decoration:none;word-wrap:break-word;max-width:100%;-webkit-box-flex:1;-webkit-flex:1 0 0px;flex:1 0 0px}@media (-ms-high-contrast:none){.link_Item__guid__ec5df4{max-width:calc(100% - .01px)}}.item_Item__guid__ec5df4+.item_Item__guid__ec5df4>.link_Item__guid__ec5df4{border-top:1px dotted #ccc}.link_Item__guid__ec5df4[data-selectable=true]{padding-left:23px}.link_Item__guid__ec5df4[data-selectable=true][data-selectable-appearance=checkbox]{padding-left:28px}.link_Item__guid__ec5df4[data-truncation=false]{white-space:normal}.link_Item__guid__ec5df4[data-truncation=true]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.link_Item__guid__ec5df4:not([disabled]):hover{color:#3863a0;background:#ddd}.link_Item__guid__ec5df4:not([disabled]):focus{outline:0;background:rgba(61,171,255,.12)}.link_Item__guid__ec5df4[data-active]{background-color:rgba(61,171,255,.12)}.link_Item__guid__ec5df4[data-has-secondary=true]{margin-right:40px;border-top-right-radius:0;border-bottom-right-radius:0;border-right:1px dotted #ccc}.link_Item__guid__ec5df4 [disabled]{color:#ccc;cursor:not-allowed}.secondaryLink_Item__guid__ec5df4{position:absolute;right:0;top:0;bottom:0;width:40px;padding-left:0;padding-right:0;font-size:16px;text-align:center;border-top-left-radius:0;border-bottom-left-radius:0}.label_Item__guid__ec5df4{overflow:inherit;white-space:inherit;text-overflow:inherit;max-width:100%}[data-truncation=true]>.label_Item__guid__ec5df4{display:block;clear:both}.itemDescription_Item__guid__ec5df4{color:#999;font-size:11px;overflow:inherit;white-space:inherit;text-overflow:inherit}.itemDescriptionBottom_Item__guid__ec5df4{display:block}.itemDescriptionRight_Item__guid__ec5df4{float:right;padding-left:20px;max-width:50%;text-align:right;-webkit-box-sizing:border-box;box-sizing:border-box}.itemSelectedIcon_Item__guid__ec5df4{position:absolute;left:8px;top:5px}.itemCheckbox_Item__guid__ec5df4{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline;visibility:inherit;background:#fff;border:1px solid #333;color:#333;width:16px;height:16px;border-radius:2px;padding:2px;position:absolute;left:8px;top:5px}.link_Item__guid__ec5df4:hover>.itemCheckbox_Item__guid__ec5df4{background:#efefef;border-color:#3b3b3b;text-decoration:none;cursor:pointer}.itemIcon_Item__guid__ec5df4{padding-right:3px;min-width:10px;display:inline-block;text-align:center;vertical-align:middle;-webkit-transform:translateY(-1px);-o-transform:translateY(-1px);transform:translateY(-1px)}.info_Item__guid__ec5df4{color:#999;padding:5px 8px}.submenu_Item__guid__ec5df4{float:right;padding-left:10px;color:#999}"};
var themeLocals = {"enterprise":{"item":"item_Item__guid__ec5df4","link":"link_Item__guid__ec5df4","secondaryLink":"secondaryLink_Item__guid__ec5df4","label":"label_Item__guid__ec5df4","itemDescription":"itemDescription_Item__guid__ec5df4","itemDescriptionBottom":"itemDescriptionBottom_Item__guid__ec5df4 itemDescription_Item__guid__ec5df4","itemDescriptionRight":"itemDescriptionRight_Item__guid__ec5df4 itemDescription_Item__guid__ec5df4","itemSelectedIcon":"itemSelectedIcon_Item__guid__ec5df4","itemCheckbox":"itemCheckbox_Item__guid__ec5df4","itemIcon":"itemIcon_Item__guid__ec5df4","info":"info_Item__guid__ec5df4","submenu":"submenu_Item__guid__ec5df4"},"lite":{"item":"item_Item__guid__ec5df4","link":"link_Item__guid__ec5df4","secondaryLink":"secondaryLink_Item__guid__ec5df4","label":"label_Item__guid__ec5df4","itemDescription":"itemDescription_Item__guid__ec5df4","itemDescriptionBottom":"itemDescriptionBottom_Item__guid__ec5df4 itemDescription_Item__guid__ec5df4","itemDescriptionRight":"itemDescriptionRight_Item__guid__ec5df4 itemDescription_Item__guid__ec5df4","itemSelectedIcon":"itemSelectedIcon_Item__guid__ec5df4","itemCheckbox":"itemCheckbox_Item__guid__ec5df4","itemIcon":"itemIcon_Item__guid__ec5df4","info":"info_Item__guid__ec5df4","submenu":"submenu_Item__guid__ec5df4"}};
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

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_Menu__guid__635838{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;position:relative;list-style:none;margin:0;padding:0;background-color:#fff;min-width:60px}.main_Menu__guid__635838+.main_Menu__guid__635838{border-top:1px solid #999}.heading_Menu__guid__635838{color:#999}","lite":".main_Menu__guid__635838{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;position:relative;list-style:none;margin:0;padding:0;background-color:#fff;min-width:60px}.main_Menu__guid__635838+.main_Menu__guid__635838{border-top:1px solid #999}.heading_Menu__guid__635838{color:#999}"};
var themeLocals = {"enterprise":{"main":"main_Menu__guid__635838","heading":"heading_Menu__guid__635838"},"lite":{"main":"main_Menu__guid__635838","heading":"heading_Menu__guid__635838"}};
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

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Scroll");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 414:
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

var _reactDom = __webpack_require__(29);

var _focus = __webpack_require__(24);

var _keyboard = __webpack_require__(12);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Scroll = __webpack_require__(35);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _Heading = __webpack_require__(234);

var _Heading2 = _interopRequireDefault(_Heading);

var _Item = __webpack_require__(235);

var _Item2 = _interopRequireDefault(_Item);

var _Divider = __webpack_require__(233);

var _Divider2 = _interopRequireDefault(_Divider);

var _Menu = __webpack_require__(195);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
    _inherits(Menu, _Component);

    function Menu(props) {
        var _ref;

        _classCallCheck(this, Menu);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this, props].concat(rest)));

        _this.state = {};

        _this.handleMount = _this.handleMount.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }

    _createClass(Menu, [{
        key: 'getEl',
        value: function getEl() {
            return this.state.containerEl;
        }
    }, {
        key: 'handleMount',
        value: function handleMount(scrollContainer) {
            // TODO: consider adding methods to Scroll for this to avoid using findDOMNode.
            this.setState({ containerEl: (0, _reactDom.findDOMNode)(scrollContainer) });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(e) {
            if ((0, _keyboard.keycode)(e) === 'tab' && this.props.retainFocus) {
                (0, _focus.handleTab)(this.state.containerEl, e);
                return;
            }

            if ((0, _keyboard.keycode)(e) !== 'down' && (0, _keyboard.keycode)(e) !== 'up') {
                return;
            }

            var tabbableElements = (0, _focus.getSortedTabableElements)(this.state.containerEl);
            var currentIndex = tabbableElements.indexOf(e.target);

            if (currentIndex === -1) {
                return;
            }

            if ((0, _keyboard.keycode)(e) === 'up' && currentIndex > 0) {
                tabbableElements[currentIndex - 1].focus();
            } else if ((0, _keyboard.keycode)(e) === 'down' && currentIndex < tabbableElements.length - 1) {
                tabbableElements[currentIndex + 1].focus();
            }
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                retainFocus = _props.retainFocus,
                stopScrollPropagation = _props.stopScrollPropagation,
                otherProps = _objectWithoutProperties(_props, ['children', 'className', 'retainFocus', 'stopScrollPropagation']);

            var ComponentType = stopScrollPropagation ? _Scroll2.default : 'ul';
            var syntheticScrollProps = stopScrollPropagation ? {
                component: 'ul',
                stopScrollPropagation: true
            } : {};

            var childrenCleaned = _react.Children.toArray(children).filter(_react.isValidElement).reduce(function (acc, item, index, original) {
                /* Filter out initial Dividers
                 * Requires reduce() over filter() because a Heading may have been
                 * before the Divider.
                 */
                if (item.type.filterFirst && acc.length === 0) {
                    return acc;
                }

                // Filter out consecutive Dividers and Headings
                if (item.type.filterConsecutive && original.length > index + 1 && original[index + 1].type.filterConsecutive) {
                    return acc;
                }

                // Filter out last Dividers and Headings
                if (item.type.filterLast && index === original.length - 1) {
                    return acc;
                }

                acc.push(item);
                return acc;
            }, []);

            return _react2.default.createElement(
                ComponentType,
                _extends({
                    className: (0, _toClassName2.default)(_Menu2.default.main, className),
                    ref: this.handleMount,
                    onKeyDown: this.handleKeyDown
                }, syntheticScrollProps, (0, _testSupport.createTestHook)(__filename), otherProps),
                childrenCleaned
            );
        }
    }]);

    return Menu;
}(_react.Component);

Menu.propTypes = {
    /**
     * `children` should be `Menu.Item`, `Menu.Heading`, or `Menu.Divider`.
     **/
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /**
     * Keep focus within the menu while navigating by keyboard. Tabbing from the last item
     * returns user to the first item.
     */
    retainFocus: _propTypes2.default.bool,
    /**
     * Prevents scrolling from propogating to the parent container(s) when the top or bottom of
     * the `Menu` is reached.
     */
    stopScrollPropagation: _propTypes2.default.bool
};
Menu.defaultProps = {
    retainFocus: true,
    stopScrollPropagation: false
};
Menu.Item = _Item2.default;
Menu.Divider = _Divider2.default;
Menu.Heading = _Heading2.default;
exports.default = Menu;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Menu/Menu.jsx"))

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/Check");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/toClassName");

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