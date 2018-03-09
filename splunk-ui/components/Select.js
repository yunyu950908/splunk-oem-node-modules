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
/******/ 	return __webpack_require__(__webpack_require__.s = 431);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Button");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Text");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(365);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Select.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Select.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Link");

/***/ }),

/***/ 247:
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

var _testSupport = __webpack_require__(1);

var _Menu = __webpack_require__(25);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
    _inherits(Option, _Component);

    function Option() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Option);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
            var _this$props = _this.props,
                onClick = _this$props.onClick,
                value = _this$props.value,
                disabled = _this$props.disabled;

            if (!disabled) {
                onClick(e, { value: value });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Option, [{
        key: 'scrollIntoViewIfNeeded',
        value: function scrollIntoViewIfNeeded() {
            this.c.scrollIntoViewIfNeeded();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Menu2.default.Item, _extends({
                ref: function ref(c) {
                    return _this2.c = c;
                }
            }, (0, _testSupport.createTestHook)(__filename), {
                selectable: true
            }, this.props, {
                onClick: this.handleClick
            }));
        }
    }]);

    return Option;
}(_react.Component);

Option.propTypes = {
    /** @docs-ignore */
    active: _propTypes2.default.bool,
    /**
    * Additional information to explain the option, such as "Recommended".
    */
    description: _propTypes2.default.string,
    /**
    * The description text may appear to the right of the label or under the label.
    */
    descriptionPosition: _propTypes2.default.oneOf(['right', 'bottom']),
    /**
    * If disabled=true, the option is grayed out and cannot be clicked.
    */
    disabled: _propTypes2.default.bool,
    /**
    * Adding hidden options can be useful for resolving the selected display label and icon,
    * when the option should not be in the list. This scenario can arise when Select's filter is
    * controlled, because the selected item may be filtered out; and when a legacy option is
    * valid, but should no longer be displayed as a selectable option.
    */
    hidden: _propTypes2.default.bool,
    /**
    * The icon to show before the label. See the Icon component for more information.
    */
    icon: _propTypes2.default.node,
    /**
    * The text to show for the option.
    */
    label: _propTypes2.default.string.isRequired,
    /** @docs-ignore */
    onClick: _propTypes2.default.func,
    /** @docs-ignore */
    selected: _propTypes2.default.bool,
    /**
    * If truncate=false, wrapping will be disabled and any additional text will be ellipsised.
    */
    truncate: _propTypes2.default.bool,
    /**
    * The label and/or icon will be placed on the Control's toggle if it matches this value.
    */
    value: _propTypes2.default.any.isRequired
};
Option.defaultProps = {
    active: false,
    descriptionPosition: 'bottom',
    disabled: false,
    hidden: false,
    onClick: _lodash.noop,
    selected: false,
    truncate: false
};
exports.default = Option;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Select/Option.jsx"))

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Menu");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/ResultsMenu");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/filter");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Dropdown");

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".filter_Select__guid__a7cc39{padding:8px;min-width:160px}:not([data-placement=above])>.filter_Select__guid__a7cc39{border-bottom:1px solid #ccc}[data-placement=above]>.filter_Select__guid__a7cc39{border-top:1px solid #ccc}.main_Select__guid__a7cc39[data-select-appearance=link]{vertical-align:baseline}.linkIcon_Select__guid__a7cc39{padding-right:2px}.linkCaret_Select__guid__a7cc39{padding-left:2px}","enterprise":".filter_Select__guid__a7cc39{padding:8px;min-width:160px}:not([data-placement=above])>.filter_Select__guid__a7cc39{border-bottom:1px solid #ccc}[data-placement=above]>.filter_Select__guid__a7cc39{border-top:1px solid #ccc}.main_Select__guid__a7cc39[data-select-appearance=link]{vertical-align:baseline}.linkIcon_Select__guid__a7cc39{padding-right:2px}.linkCaret_Select__guid__a7cc39{padding-left:2px}"};
var themeLocals = {"lite":{"-webkit-filter":"filter_Select__guid__a7cc39","filter":"filter_Select__guid__a7cc39","main":"main_Select__guid__a7cc39","linkIcon":"linkIcon_Select__guid__a7cc39","linkCaret":"linkCaret_Select__guid__a7cc39"},"enterprise":{"-webkit-filter":"filter_Select__guid__a7cc39","filter":"filter_Select__guid__a7cc39","main":"main_Select__guid__a7cc39","linkIcon":"linkIcon_Select__guid__a7cc39","linkCaret":"linkCaret_Select__guid__a7cc39"}};
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

/***/ 37:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/Caret");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/userAgent");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 431:
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

var _filter = __webpack_require__(27);

var _filter2 = _interopRequireDefault(_filter);

var _i18n = __webpack_require__(2);

var _keyboard = __webpack_require__(12);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _userAgent = __webpack_require__(39);

var _Button = __webpack_require__(15);

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = __webpack_require__(31);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Link = __webpack_require__(21);

var _Link2 = _interopRequireDefault(_Link);

var _ResultsMenu = __webpack_require__(26);

var _ResultsMenu2 = _interopRequireDefault(_ResultsMenu);

var _Text = __webpack_require__(19);

var _Text2 = _interopRequireDefault(_Text);

var _Caret = __webpack_require__(37);

var _Caret2 = _interopRequireDefault(_Caret);

var _Option = __webpack_require__(247);

var _Option2 = _interopRequireDefault(_Option);

var _Select = __webpack_require__(206);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
    _inherits(Select, _Component);

    _createClass(Select, null, [{
        key: 'validateAppearance',
        value: function validateAppearance(props) {
            if (process.env.NODE_ENV !== "production" && props.appearance === 'link') {
                if (props.error) {
                    (0, _errorHandling.invariant)('The link appearance does not support error');
                }

                if (props.append) {
                    (0, _errorHandling.invariant)('The link appearance does not support append');
                }

                if (props.prepend) {
                    (0, _errorHandling.invariant)('The link appearance does not support prepend');
                }

                if (props.size !== 'medium') {
                    (0, _errorHandling.invariant)('The link appearance does not support size');
                }
            }
        }
    }]);

    function Select(props) {
        var _ref;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleActiveOptionMount = function (comp) {
            if (comp) {
                comp.scrollIntoViewIfNeeded();
            }
        };

        _this.handleTextKeyDown = function (e) {
            if ((0, _keyboard.keycode)(e) === 'tab') {
                e.preventDefault();
                return;
            }

            if (e.shiftKey || e.metaKey || e.ctrlKey) {
                return;
            }

            if ((0, _keyboard.keycode)(e) === 'down') {
                e.preventDefault();

                _this.setState({
                    activeIndex: Math.min(_this.state.activeIndex + 1, _this.availableOptionCount - 1)
                });
            }

            if ((0, _keyboard.keycode)(e) === 'up') {
                e.preventDefault();

                _this.setState({
                    activeIndex: Math.max(_this.state.activeIndex - 1, 0)
                });
            }

            if ((0, _keyboard.keycode)(e) === 'enter' && _this.activeValue) {
                e.preventDefault();
                _this.selectValue(e, { value: _this.activeValue });
            }
        };

        _this.handleTextChange = function (e, data) {
            e.preventDefault();

            _this.setState({
                activeIndex: 0,
                filterKeyword: data.value,
                open: true
            });

            _this.props.onFilterChange(e, { keyword: data.value });
        };

        _this.handleTextKeyUp = function (e) {
            if ((0, _keyboard.keycode)(e) === 'tab') {
                e.preventDefault();
            }
        };

        _this.handleItemClick = function (e, _ref2) {
            var value = _ref2.value;

            _this.selectValue(e, { value: value });
        };

        _this.handleRequestOpen = function () {
            _this.setState({
                open: true
            });
        };

        _this.handleRequestClose = function () {
            _this.setState({
                open: false,
                filterKeyword: '',
                activeIndex: 0
            });
        };

        _this.filterChildren = function (items, keyword) {
            var filtered = _filter2.default.filterByKeywords(items, keyword, function (item) {
                if (item.props && item.props.label) {
                    return item.props.label;
                }
                return null;
            });
            return filtered;
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'value');

        _this.state = {
            value: props.defaultValue || '',
            open: false,
            filterKeyword: _this.props.filter ? '' : null,
            activeIndex: 0
        };

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('Select defaultValue prop is not compatible with value prop.');
        }

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && props.onChange === _lodash.noop) {
            (0, _errorHandling.invariant)('Select onChange prop is required. This must update the value prop\n                to retain user input.');
        }

        Select.validateAppearance(props);
        return _this;
    }

    _createClass(Select, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change Select from an uncontrolled component to a controlled\n                one. Prop \'value\' is not valid in subsequent updates if not provided in the initial\n                props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValue !== this.props.defaultValue) {
                (0, _errorHandling.invariant)('Cannot change Select defaultValue after set.');
            }

            Select.validateAppearance(nextProps);
        }
    }, {
        key: 'getCurrentValue',
        value: function getCurrentValue() {
            return this.isControlled() ? this.props.value : this.state.value;
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'focus',


        /**
        * Place focus on the toggle.
        */
        value: function focus() {
            if (this.dropdown) {
                this.dropdown.focus();
            }
        }
    }, {
        key: 'selectValue',
        value: function selectValue(e, _ref3) {
            var value = _ref3.value;

            if (!this.isControlled()) {
                this.setState({ value: value });
            }

            this.handleRequestClose();

            this.focus();

            if (this.getCurrentValue() !== value) {
                this.props.onChange(e, { value: value });
            }
        }
    }, {
        key: 'renderFilter',


        // Setup Filter
        value: function renderFilter() {
            /* eslint-disable jsx-a11y/tabindex-no-positive */
            return this.props.filter ? _react2.default.createElement(
                'div',
                {
                    key: 'filter',
                    className: _Select2.default.filter,
                    'data-placement': this.props.placement
                },
                _react2.default.createElement(_Text2.default, {
                    value: this.state.filterKeyword,
                    appearance: 'search',
                    onChange: this.handleTextChange,
                    onKeyDown: this.handleTextKeyDown,
                    onKeyUp: this.handleTextKeyUp,
                    placeholder: (0, _i18n._)('filter'),
                    tabIndex: 1
                })
            ) : null;
            /* eslint-enable jsx-a11y/tabindex-no-positive */
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                appearance = _props.appearance,
                children = _props.children,
                className = _props.className,
                describedBy = _props.describedBy,
                disabled = _props.disabled,
                error = _props.error,
                filter = _props.filter,
                inline = _props.inline,
                isLoadingOptions = _props.isLoadingOptions,
                menuStyle = _props.menuStyle,
                placeholder = _props.placeholder,
                scrollContainer = _props.scrollContainer;
            var _state = this.state,
                filterKeyword = _state.filterKeyword,
                open = _state.open;


            var label = void 0;
            var icon = void 0;
            var childrenCleaned = _react.Children.toArray(children).filter(_react.isValidElement).map(function (item) {
                if (!item.props || !(0, _lodash.has)(item.props, 'value')) {
                    // ignore Headings and Dividers
                    return item;
                }

                var selected = item.props.value === _this2.getCurrentValue();

                // If selected, set up the label and icon for the toggle button.
                if (selected) {
                    label = (0, _lodash.has)(item.props, 'label') ? item.props.label : item.props.value;
                    icon = item.props.icon;
                    if (_this2.props.prefixLabel) {
                        label = _this2.props.prefixLabel + ': ' + label;
                    }
                }

                if (item.props.hidden) {
                    return null;
                }

                return (0, _react.cloneElement)(item, {
                    selected: selected,
                    selectable: true
                });
            });

            var childrenFiltered = filterKeyword && filter === true && childrenCleaned ? this.filterChildren(childrenCleaned, filterKeyword) : childrenCleaned;

            // Setup Children
            var childrenCloned = _react.Children.map(childrenFiltered, function (item, i) {
                var clonedItem = (0, _react.cloneElement)(item, {
                    key: item.key || i,
                    onClick: (0, _lodash.has)(item.props, 'value') ? _this2.handleItemClick : undefined
                });
                return clonedItem;
            });

            // Hightlight Active
            this.availableOptionCount = 0;
            this.activeValue = undefined;

            var highlightActive = function highlightActive(item) {
                if (!(0, _lodash.has)(item.props, 'active')) {
                    // ignore Headings and Dividers
                    return item;
                }

                var active = _this2.availableOptionCount === _this2.state.activeIndex;
                _this2.availableOptionCount += 1;

                if (!active) {
                    return item;
                }
                if (!item.props.disabled) {
                    _this2.activeValue = item.props.value;
                }

                return (0, _react.cloneElement)(item, {
                    ref: _this2.handleActiveOptionMount,
                    active: true
                });
            };
            var finalChildren = filter ? _react.Children.map(childrenCloned, highlightActive) : childrenCloned;

            var toggle = appearance === 'link' ? _react2.default.createElement(
                _Link2.default,
                {
                    label: label || placeholder,
                    disabled: disabled
                },
                !!icon && _react2.default.createElement(
                    'span',
                    { className: _Select2.default.linkIcon },
                    icon
                ),
                label || placeholder,
                _react2.default.createElement(
                    'span',
                    { className: _Select2.default.linkCaret },
                    _react2.default.createElement(_Caret2.default, { screenReaderText: null })
                )
            ) : _react2.default.createElement(_Button2.default, _extends({
                error: error,
                icon: icon,
                inline: false,
                isMenu: true,
                label: label || placeholder
            }, (0, _lodash.pick)(this.props, 'appearance', 'append', 'disabled', 'prepend', 'size')));

            var createMenu = function createMenu(_ref4) {
                var anchorWidth = _ref4.anchorWidth,
                    maxHeight = _ref4.maxHeight,
                    placement = _ref4.placement;
                return _react2.default.createElement(
                    _ResultsMenu2.default,
                    _extends({
                        childrenStart: _this2.renderFilter(),
                        maxHeight: maxHeight,
                        placement: placement,
                        isLoading: isLoadingOptions
                    }, (0, _lodash.pick)(_this2.props, 'noOptionsMessage', 'footerMessage', 'animateLoading', 'loadingMessage'), {
                        style: _extends({
                            minWidth: (0, _userAgent.isIE11)() && anchorWidth < 300 ? 300 : anchorWidth,
                            maxWidth: Math.max(anchorWidth, 300)
                        }, menuStyle)
                    }),
                    finalChildren
                );
            };

            return _react2.default.createElement(
                _Dropdown2.default,
                _extends({
                    toggle: toggle,
                    inline: appearance === 'link' || inline,
                    open: open,
                    retainFocus: !filter,
                    className: (0, _toClassName2.default)(_Select2.default.main, className),
                    closeReasons: ['clickAway', 'escapeKey', 'offScreen', 'toggleClick'],
                    onRequestClose: this.handleRequestClose,
                    onRequestOpen: this.handleRequestOpen,
                    'aria-describedby': describedBy,
                    'data-select-appearance': appearance,
                    defaultPlacement: filter ? 'vertical' : undefined,
                    canCoverAnchor: window.innerHeight < 500,
                    ref: function ref(c) {
                        return _this2.dropdown = c;
                    },
                    scrollContainer: scrollContainer
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(this.props, Object.keys(Select.propTypes))),
                createMenu
            );
        }
    }]);

    return Select;
}(_react.Component);

Select.propTypes = {
    /*
     * Whether or not to show the wait spinner when loading. It's recommended to set this to
     * `true` when loading may take more than one second.
     */
    animateLoading: _propTypes2.default.bool,
    /** Change the style of the button or link. */
    appearance: _propTypes2.default.oneOf(['default', 'link', 'primary', 'pill']),
    /**
    * Remove rounding from the left side of the toggle.
    */
    append: _propTypes2.default.bool,
    /**
     * `children` should be `Select.Option`, `Select.Header`, or `Select.Divider`.
     */
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /**
    * Set this property instead of value to keep the value uncontrolled.
    */
    defaultValue: _propTypes2.default.any,
    /**
    * The id of the description. When placed in a ControlGroup, this automatically set to the
    * ControlGroup's help component.
    */
    describedBy: _propTypes2.default.string,
    /**
    * disabled to toggle.
    */
    disabled: _propTypes2.default.bool,
    /**
    * Highlight the field as having an error. The button will turn red.
    */
    error: _propTypes2.default.bool,
    /**
    * Whether to show the filter box. When true, the children are automatically
    * filtered based on the label. When controlled, the parent component must provide a
    * onFilterChange callback and update the children. This can also be used to fetch new
    * results. */
    filter: _propTypes2.default.oneOf([false, true, 'controlled']),
    /**
     * The footer message can show additional information, such as a truncation message.
     */
    footerMessage: _propTypes2.default.node,
    /** Make the control an inline block with variable width. */
    inline: _propTypes2.default.bool,
    /*
     * Whether or not to show the loading message and/or wait spinner. It's recommended to
     * remove the old children while loading new children to ensure the loading message is
     * not hidden.
     */
    isLoadingOptions: _propTypes2.default.bool,
    /**
    * The id of the label. When placed in a ControlGroup, this automatically set to the
    * ControlGroup's label.
    */
    labelledBy: _propTypes2.default.string,
    /**
     * The loading message to show when isLoadingOptions. */
    loadingMessage: _propTypes2.default.node,
    menuStyle: _propTypes2.default.object,
    /**
     * The noOptionsMessage is shown when there are no children and not loading, such as when
     * there are no Options matching the filter. This can be customized to the type of content,
     * such as "No matching dashboards"; insert other content, such as an error message; or
     * communicate a minimum number of chararters to enter to see results. */
    noOptionsMessage: _propTypes2.default.node,
    /**
    * A callback to receive the change events.
    * If value is set, this callback is required. This must set the value prop to retain the
    * change.
    */
    onChange: _propTypes2.default.func,
    /**
    * A callback with the change event and value of the filter box. Providing this callback and
    * setting controlledFilter to true enables you to filter and update the children by other
    * criteria.
    */
    onFilterChange: _propTypes2.default.func,
    /**
    * If 'value' is undefined or don't match an item, the Button will display this text.
    */
    placeholder: _propTypes2.default.string,
    /**
    * When used outside of a control group, it can be useful to include the label on the toggle.
    */
    prefixLabel: _propTypes2.default.string,
    /**
    * Remove rounding from the left side of the toggle.
    */
    prepend: _propTypes2.default.bool,
    /**
     * The container with which the popover must scroll to stay aligned with the anchor.
     */
    scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    /** The size of the toggle. */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
    * Value will be matched to one of the children to deduce the label and/or icon for the
    * toggle.
    */
    value: _propTypes2.default.any
};
Select.defaultProps = {
    animateLoading: false,
    appearance: 'default',
    append: false,
    children: [],
    disabled: false,
    error: false,
    filter: false,
    inline: true,
    isLoadingOptions: false,
    menuStyle: {},
    noOptionsMessage: (0, _i18n._)('No matches'),
    onFilterChange: _lodash.noop,
    onChange: _lodash.noop,
    placeholder: (0, _i18n._)('Select...'),
    prepend: false,
    scrollContainer: 'window',
    size: 'medium'
};
Select.Option = _Option2.default;
Select.Divider = _ResultsMenu2.default.Divider;
Select.Heading = _ResultsMenu2.default.Heading;
exports.default = Select;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Select/Select.jsx"))

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