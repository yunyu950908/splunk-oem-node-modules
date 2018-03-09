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
/******/ 	return __webpack_require__(__webpack_require__.s = 425);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Button");

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(15);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    /** Add a disabled attribute and prevent clicking. */
    disabled: _propTypes2.default.bool,
    /** See Icon documention for allowed keys. */
    icon: _propTypes2.default.string,
    /** The text shown on the button. */
    label: _propTypes2.default.string,
    /** @docs-ignore Set by Radio */
    selected: _propTypes2.default.bool,
    /** The value to populate the Radio. */
    value: _propTypes2.default.any.isRequired
};

function Option(props) {
    var selected = props.selected;

    return _react2.default.createElement(_Button2.default, _extends({}, props, { role: 'radio', 'aria-checked': selected, tabIndex: selected ? -1 : null }));
}

Option.propTypes = propTypes;
exports.default = Option;

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/ButtonGroup");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 425:
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

var _ButtonGroup = __webpack_require__(260);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Option = __webpack_require__(244);

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

/**
* RadioBar is form control that provides an affordance to select one option out of a group.
*/

var RadioBar = function (_Component) {
    _inherits(RadioBar, _Component);

    function RadioBar(props) {
        var _ref;

        _classCallCheck(this, RadioBar);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = RadioBar.__proto__ || Object.getPrototypeOf(RadioBar)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleClick = function (e, data) {
            if (_this.props.value !== data.value) {
                _this.props.onChange(e, data);

                if (!_this.isControlled()) {
                    _this.setState({ value: data.value });
                }
            }
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'value');
        if (!_this.isControlled()) {
            _this.state = {
                value: props.defaultValue
            };
        }

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('defaultValue prop is not compatible with value prop.');
        }
        return _this;
    }

    _createClass(RadioBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change RadioBar from an uncontrolled component to a controlled\n    one. Prop \'value\' is not valid in subsequent updates if not provided in the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValue !== this.props.defaultValue) {
                (0, _errorHandling.invariant)('Cannot change defaultValue after set. Consider using a controlled\n                component instead.');
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
            var _this2 = this;

            var _props = this.props,
                appearance = _props.appearance,
                children = _props.children,
                describedBy = _props.describedBy,
                error = _props.error,
                labelledBy = _props.labelledBy,
                size = _props.size,
                value = _props.value,
                otherProps = _objectWithoutProperties(_props, ['appearance', 'children', 'describedBy', 'error', 'labelledBy', 'size', 'value']);

            var selectedValue = this.isControlled() ? value : this.state.value;
            var childrenFormatted = _react.Children.toArray(children).filter(_react.isValidElement).map(function (item, i) {
                return (0, _react.cloneElement)(item, {
                    appearance: appearance,
                    size: size,
                    key: item.key || i,
                    onClick: _this2.handleClick,
                    role: 'radio',
                    error: error,
                    selected: item.props.value === selectedValue
                });
            });

            return _react2.default.createElement(
                _ButtonGroup2.default,
                _extends({
                    role: 'radiogroup',
                    'aria-labelledby': labelledBy,
                    'aria-describedby': describedBy
                }, (0, _testSupport.createTestHook)(__filename), otherProps),
                childrenFormatted
            );
        }
    }]);

    return RadioBar;
}(_react.Component);

RadioBar.propTypes = {
    /** The appearance of the buttons */
    appearance: _propTypes2.default.oneOf(['default', 'pill']),
    /**
     * `children` should be `RadioBar.Option`.
     **/
    children: _propTypes2.default.node,
    /**
     * The default value. Only applicable if this is an uncontrolled component. Otherwise, use
     * the value prop.
     */
    defaultValue: _propTypes2.default.any,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: _propTypes2.default.string,
    /**
    * Highlight the field as having an error. The buttons will turn red.
    */
    error: _propTypes2.default.bool,
    inline: _propTypes2.default.bool,
    /**
     * The id of the label. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's label.
     */
    labelledBy: _propTypes2.default.string,
    /** A callback that receives the new value */
    onChange: _propTypes2.default.func,
    /** The size of the buttons. */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * The currently selected value. Only applicable if this is a controlled component.
     */
    value: _propTypes2.default.any
};
RadioBar.defaultProps = {
    appearance: 'default',
    error: false,
    inline: false,
    onChange: noop,
    size: 'medium'
};
RadioBar.Option = _Option2.default;
exports.default = RadioBar;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/RadioBar/RadioBar.jsx"))

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });