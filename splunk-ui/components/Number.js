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
/******/ 	return __webpack_require__(__webpack_require__.s = 420);
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

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(357);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Number.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Number.css");
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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SortedUp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function SortedUp(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            viewBox: '0 0 933 600'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M0 466.438L466.438 0l466.44 467.466-134.59 133.56-331.85-331.848-331.85 331.85L0 466.438z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Number/IncrementIcon.jsx"))

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/SVG");

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_Number__guid__7c6e97[data-size=small][data-inline]{width:80px}.main_Number__guid__7c6e97[data-size=small][data-position=first]{padding-right:16px}.main_Number__guid__7c6e97[data-size=small][data-position=last]{padding-left:16px}.main_Number__guid__7c6e97[data-size=medium][data-inline]{width:100px}.main_Number__guid__7c6e97[data-size=medium][data-position=first]{padding-right:20px}.main_Number__guid__7c6e97[data-size=medium][data-position=last]{padding-left:20px}.main_Number__guid__7c6e97[data-size=large][data-inline]{width:140px}.main_Number__guid__7c6e97[data-size=large][data-position=first]{padding-right:30px}.main_Number__guid__7c6e97[data-size=large][data-position=last]{padding-left:30px}.controls_Number__guid__7c6e97{position:absolute;top:0;bottom:0;width:20px}[data-size=small]>.controls_Number__guid__7c6e97{width:16px}[data-size=large]>.controls_Number__guid__7c6e97{width:30px}.controls_Number__guid__7c6e97[data-position=last]{right:0}.controls_Number__guid__7c6e97[data-position=first]{left:0}.minus_Number__guid__7c6e97,.plus_Number__guid__7c6e97{position:absolute;padding:3px;font-size:inherit;min-height:0;height:calc(50% + .5px);width:100%}.plus_Number__guid__7c6e97{top:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.minus_Number__guid__7c6e97{bottom:0;border-top-left-radius:0;border-top-right-radius:0}","enterprise":".main_Number__guid__7c6e97[data-size=small][data-inline]{width:80px}.main_Number__guid__7c6e97[data-size=small][data-position=first]{padding-right:16px}.main_Number__guid__7c6e97[data-size=small][data-position=last]{padding-left:16px}.main_Number__guid__7c6e97[data-size=medium][data-inline]{width:100px}.main_Number__guid__7c6e97[data-size=medium][data-position=first]{padding-right:20px}.main_Number__guid__7c6e97[data-size=medium][data-position=last]{padding-left:20px}.main_Number__guid__7c6e97[data-size=large][data-inline]{width:140px}.main_Number__guid__7c6e97[data-size=large][data-position=first]{padding-right:30px}.main_Number__guid__7c6e97[data-size=large][data-position=last]{padding-left:30px}.controls_Number__guid__7c6e97{position:absolute;top:0;bottom:0;width:20px}[data-size=small]>.controls_Number__guid__7c6e97{width:16px}[data-size=large]>.controls_Number__guid__7c6e97{width:30px}.controls_Number__guid__7c6e97[data-position=last]{right:0}.controls_Number__guid__7c6e97[data-position=first]{left:0}.minus_Number__guid__7c6e97,.plus_Number__guid__7c6e97{position:absolute;padding:3px;font-size:inherit;min-height:0;height:calc(50% + .5px);width:100%}.plus_Number__guid__7c6e97{top:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.minus_Number__guid__7c6e97{bottom:0;border-top-left-radius:0;border-top-right-radius:0}"};
var themeLocals = {"lite":{"main":"main_Number__guid__7c6e97","controls":"controls_Number__guid__7c6e97","plus":"plus_Number__guid__7c6e97","minus":"minus_Number__guid__7c6e97"},"enterprise":{"main":"main_Number__guid__7c6e97","controls":"controls_Number__guid__7c6e97","plus":"plus_Number__guid__7c6e97","minus":"minus_Number__guid__7c6e97"}};
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

/***/ 420:
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

var keyboardUtil = _interopRequireWildcard(_keyboard);

var _i18n = __webpack_require__(2);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Button = __webpack_require__(15);

var _Button2 = _interopRequireDefault(_Button);

var _Text = __webpack_require__(19);

var _Text2 = _interopRequireDefault(_Text);

var _IncrementIcon = __webpack_require__(241);

var _IncrementIcon2 = _interopRequireDefault(_IncrementIcon);

var _Number = __webpack_require__(199);

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Number = function (_Component) {
    _inherits(Number, _Component);

    _createClass(Number, null, [{
        key: 'validatePrependAppend',
        value: function validatePrependAppend(append, prepend) {
            if (process.env.NODE_ENV !== "production" && append && prepend) {
                (0, _errorHandling.invariant)('Number does not support simultaneous prepend and append.');
            }
        }
    }]);

    function Number(props) {
        var _ref;

        _classCallCheck(this, Number);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Number.__proto__ || Object.getPrototypeOf(Number)).call.apply(_ref, [this, props].concat(rest)));

        _initialiseProps.call(_this);

        _this.controlledExternally = (0, _lodash.has)(props, 'value');

        var value = _this.isControlled() ? props.value : props.defaultValue;

        _this.state = {
            value: _this.isControlled() ? null : value,
            stringValue: (0, _lodash.isFinite)(value) ? value.toString() : ''
        };

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('Number\'s defaultValue prop is not compatible with value prop.');
        }

        Number.validatePrependAppend(_this.props.append, _this.props.prepend);
        return _this;
    }

    _createClass(Number, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change Number from an uncontrolled component to a controlled\n    one. Prop \'value\' is not valid in subsequent updates if not provided in the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValue !== this.props.defaultValue) {
                (0, _errorHandling.invariant)('Cannot change defaultValue after set. Consider using a controlled\n                component instead.');
            }

            var valNumeric = this.stringToNumber(this.state.stringValue);
            if (this.isControlled() && nextProps.value !== valNumeric) {
                this.setState({
                    stringValue: (0, _lodash.isFinite)(nextProps.value) ? nextProps.value.toString() : ''
                });
            }

            Number.validatePrependAppend(nextProps.append, nextProps.prepend);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.isControlled() ? this.props.value : this.state.value;
        }
    }, {
        key: 'setValueFromString',
        value: function setValueFromString(e, str) {
            var _this2 = this;

            var value = this.stringToNumber(str);

            this.setState({
                value: this.isControlled() ? null : value,
                stringValue: str
            }, function () {
                if (_this2.getValue() !== value) {
                    _this2.props.onChange(e, { value: value });
                }
            });
        }
    }, {
        key: 'setValue',
        value: function setValue(e, value) {
            var _this3 = this;

            this.setState({
                value: this.isControlled() ? null : value,
                stringValue: value.toString()
            }, function () {
                if (_this3.getValue() !== value) {
                    _this3.props.onChange(e, { value: value });
                }
            });
        }

        /**
         * Place focus on the input.
         */

    }, {
        key: 'focus',
        value: function focus() {
            if (this.text) {
                this.text.focus();
            }
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'updateString',
        value: function updateString() {
            var value = this.getValue();
            this.setState({
                stringValue: (0, _lodash.isFinite)(value) ? value.toString() : ''
            });
        }
    }, {
        key: 'increment',
        value: function increment(e, amount) {
            var valNumeric = this.stringToNumber(this.state.stringValue);

            var targetValNumeric = void 0;

            // increment appropriate number
            if ((0, _lodash.isFinite)(valNumeric)) {
                // increment the entered value
                targetValNumeric = valNumeric + amount;
            } else if ((0, _lodash.isFinite)(this.props.defaultValue)) {
                // increment the defaultValue
                targetValNumeric = this.props.defaultValue + amount;
            } else if (amount > 0) {
                // increment up to max or step value
                targetValNumeric = this.props.max || this.props.step;
            } else {
                // increment down to min or 0
                targetValNumeric = this.props.min || 0; // set to min or 0
            }

            this.setValue(e, this.limitValue(targetValNumeric));
        }
    }, {
        key: 'preventNegativeNumbers',
        value: function preventNegativeNumbers() {
            return (0, _lodash.isFinite)(this.props.min) && this.props.min >= 0;
        }
    }, {
        key: 'stringToNumber',
        value: function stringToNumber(str) {
            var val = str;

            if (!(0, _lodash.isString)(val) || val === '') {
                return undefined;
            }

            // remove leading non-numeric characters.
            val = val.replace(/^[^\d.-]/, '');

            var valNumeric = this.limitValue(parseFloat(val, 10));

            if ((0, _lodash.isFinite)(valNumeric)) {
                return valNumeric;
            }

            return undefined;
        }
    }, {
        key: 'limitValue',
        value: function limitValue(val) {
            var newVal = val;

            if (!(0, _lodash.isFinite)(val)) {
                return newVal;
            }

            if ((0, _lodash.isFinite)(this.props.min)) {
                newVal = Math.max(this.props.min, newVal);
            }
            if ((0, _lodash.isFinite)(this.props.max)) {
                newVal = Math.min(this.props.max, newVal);
            }

            // eslint-disable-next-line no-restricted-properties
            var pow = Math.pow(10, this.props.roundTo);
            return Math.round(newVal * pow) / pow;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                append = _props.append,
                className = _props.className,
                describedBy = _props.describedBy,
                disabled = _props.disabled,
                error = _props.error,
                _props$value = _props.value,
                value = _props$value === undefined ? this.state.value : _props$value,
                max = _props.max,
                min = _props.min,
                prepend = _props.prepend,
                size = _props.size;


            var textProps = (0, _lodash.omit)(this.props, ['defaultValue', 'min', 'max', 'roundTo', 'step']);

            var disableIncrement = (0, _lodash.isFinite)(value) && (0, _lodash.isFinite)(max) && value >= max;
            var disableDecrement = (0, _lodash.isFinite)(value) && (0, _lodash.isFinite)(min) && value <= min;

            var iconSizes = {
                small: { height: '4px', width: '6px' },
                medium: { height: '4px', width: '6px' },
                large: { height: '6px', width: '8px' }
            };

            return _react2.default.createElement(
                _Text2.default,
                _extends({
                    autoComplete: false,
                    ref: function ref(c) {
                        return _this4.text = c;
                    }
                }, (0, _testSupport.createTestHook)(__filename), textProps, {
                    className: (0, _toClassName2.default)(_Number2.default.main, className),
                    onChange: this.handleInputChange,
                    onBlur: this.handleInputBlur,
                    onKeyDown: this.handleKeyDown,
                    onKeyUp: this.handleKeyUp,
                    value: this.state.stringValue,
                    'aria-describedby': describedBy,
                    append: true,
                    prepend: prepend || append,
                    size: size,
                    error: error,
                    'data-position': append && !prepend ? 'last' : 'first'
                }),
                !disabled && _react2.default.createElement(
                    'div',
                    {
                        className: _Number2.default.controls,
                        'data-position': append && !prepend ? 'first' : 'last',
                        'data-size': size
                    },
                    _react2.default.createElement(
                        _Button2.default,
                        {
                            className: _Number2.default.plus,
                            onClick: this.handleIncrement,
                            disabled: disableIncrement,
                            error: error,
                            append: append,
                            prepend: !append,
                            inline: false,
                            tabIndex: '-1'
                        },
                        _react2.default.createElement(_IncrementIcon2.default, {
                            width: iconSizes[size].width,
                            height: iconSizes[size].height,
                            screenReaderText: (0, _i18n._)('Increment')
                        })
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        {
                            className: _Number2.default.minus,
                            onClick: this.handleDecrement,
                            disabled: disableDecrement,
                            error: error,
                            append: append,
                            prepend: !append,
                            inline: false,
                            tabIndex: '-1'
                        },
                        _react2.default.createElement(_IncrementIcon2.default, {
                            width: iconSizes[size].width,
                            height: iconSizes[size].height,
                            screenReaderText: (0, _i18n._)('Decrement'),
                            style: { transform: 'rotateX(180deg)' }
                        })
                    )
                )
            );
        }
    }]);

    return Number;
}(_react.Component);

Number.propTypes = {
    /** Append removes rounded borders and border from the right side and moves the
     * increment and decrement buttons to the left. */
    append: _propTypes2.default.bool,
    /** @docs-ignore */
    children: _propTypes2.default.node,
    /** @docs-ignore. */
    className: _propTypes2.default.string,
    /**
     * Set this property instead of value to make value uncontrolled. */
    defaultValue: _propTypes2.default.number,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: _propTypes2.default.string,
    /** Whether or not the input is editable. */
    disabled: _propTypes2.default.bool,
    /**
     * Highlight the field as having an error. The border and text will turn red.
     */
    error: _propTypes2.default.bool,
    /**
     * An id for the input, which may be necessary for accessibility, such as for aria
     * attributes.
     */
    inputId: _propTypes2.default.string,
    /** When false, display as inline-block with the default width. */
    inline: _propTypes2.default.bool,
    /**
     * The number of decimal places for rounding. Set to zero to limit input to integers.
     * Negative numbers are supported. For instance, -2 will round to the nearest hundred.
     */
    roundTo: _propTypes2.default.number,
    /**
     * The id of the label. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's label.
     */
    labelledBy: _propTypes2.default.string,
    /** The smallest allowable value. */
    min: _propTypes2.default.number,
    /** The largest allowable value. */
    max: _propTypes2.default.number,
    /** The name property for the input, which can be useful for accessibility and form data. */
    name: _propTypes2.default.string,
    /** A callback for when the input loses focus. */
    onBlur: _propTypes2.default.func,
    /**
     * This is equivalent to onInput which is called on keydown, paste, etc.
     * If value is set, this callback is required. This must set the value prop to retain the
     * change.
     */
    onChange: _propTypes2.default.func,
    /** A callback for when the input takes focus. */
    onFocus: _propTypes2.default.func,
    /** A keydown callback can be used to prevent certain input by returning false. */
    onKeyDown: _propTypes2.default.func,
    /** A keyup callback. */
    onKeyUp: _propTypes2.default.func,
    /** A callback for when the users selects text. */
    onSelect: _propTypes2.default.func,
    /** The gray text shown when the input is empty. */
    placeholder: _propTypes2.default.string,
    /** Prepend removes rounded borders from the left side. This cannot be used in combination
     * with append. */
    prepend: _propTypes2.default.bool,
    /** The overall size of the input. */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /** The amount of increment and decrement applied by the buttons and arrow keys. */
    step: _propTypes2.default.number,
    /** Some browsers remove placeholder text on focus. The synthetic placeholder never does. */
    useSyntheticPlaceholder: _propTypes2.default.bool,
    /**
     * The contents of the input. Setting this value makes the property controlled. A callback
     * is required. */
    value: _propTypes2.default.number
};
Number.defaultProps = {
    append: false,
    disabled: false,
    error: false,
    inline: false,
    onChange: noop,
    onKeyDown: noop,
    onKeyUp: noop,
    onSelect: noop,
    onBlur: noop,
    onFocus: noop,
    placeholder: '',
    prepend: false,
    roundTo: 5,
    size: 'medium',
    step: 1,
    useSyntheticPlaceholder: false
};

var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.handleInputBlur = function (e) {
        _this5.updateString(e);
        _this5.props.onBlur(e);
    };

    this.handleInputChange = function (e, _ref2) {
        var value = _ref2.value;

        _this5.setValueFromString(e, value);
    };

    this.handleKeyDown = function (e) {
        if (!e.metaKey && !e.ctrlKey && !e.altKey && keyboardUtil.addsCharacter(e)) {
            // only allow numbers, negative and decimals
            if (!keyboardUtil.isNumeric(e)) {
                e.preventDefault();
            }

            // if minus is not allowed or there is already one, prevent input
            if (keyboardUtil.isMinus(e) && (_this5.preventNegativeNumbers() || _this5.state.stringValue.indexOf('-') >= 0)) {
                e.preventDefault();
            }

            // if decimal is not allowed or there is already one, prevent input
            if (keyboardUtil.isDecimal(e) && (_this5.props.roundTo <= 0 || _this5.state.stringValue.indexOf('.') >= 0)) {
                e.preventDefault();
            }
        }

        // Arrow up and down will increment
        if (keyboardUtil.keycode(e) === 'up') {
            _this5.increment(e, _this5.props.step);
            e.preventDefault();
        } else if (keyboardUtil.keycode(e) === 'down') {
            _this5.increment(e, -_this5.props.step);
            e.preventDefault();
        }

        _this5.props.onKeyDown(e);
    };

    this.handleKeyUp = function (e) {
        if (keyboardUtil.keycode(e) === 'enter') {
            _this5.updateString(e);
        }
        _this5.props.onKeyUp(e);
    };

    this.handleIncrement = function (e) {
        _this5.increment(e, _this5.props.step);
    };

    this.handleDecrement = function (e) {
        _this5.increment(e, -_this5.props.step);
    };
};

exports.default = Number;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Number/Number.jsx"))

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