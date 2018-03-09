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
/******/ 	return __webpack_require__(__webpack_require__.s = 421);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Button");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/ChevronRight");

/***/ }),

/***/ 242:
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

var _Button = __webpack_require__(15);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var PaginatorButton = function (_Component) {
    _inherits(PaginatorButton, _Component);

    function PaginatorButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PaginatorButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaginatorButton.__proto__ || Object.getPrototypeOf(PaginatorButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
            var page = _this.props.page;
            _this.props.onClick(e, { page: page });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PaginatorButton, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Button2.default, _extends({
                appearance: 'pill',
                onClick: this.handleClick,
                inline: false,
                style: { width: 'auto' }
            }, (0, _lodash.omit)(this.props, ['page', 'onClick']), (0, _testSupport.createTestHook)(__filename)));
        }
    }]);

    return PaginatorButton;
}(_react.Component);

PaginatorButton.propTypes = {
    /** Callback for button click event */
    onClick: _propTypes2.default.func,
    /** Index of page */
    page: _propTypes2.default.number
};
PaginatorButton.defaultProps = {
    onClick: noop
};
exports.default = PaginatorButton;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Paginator/PaginatorButton.jsx"))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 421:
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

var _errorHandling = __webpack_require__(10);

var _i18n = __webpack_require__(2);

var _testSupport = __webpack_require__(1);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _ChevronLeft = __webpack_require__(44);

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _ChevronRight = __webpack_require__(22);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _PaginatorButton = __webpack_require__(242);

var _PaginatorButton2 = _interopRequireDefault(_PaginatorButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    /** Currently selected page */
    current: _propTypes2.default.number.isRequired,
    /** Display a link to the last page in a collection */
    alwaysShowLastPageLink: _propTypes2.default.bool,
    /**
     * Number of pages to display. If greater than `totalPages`, `totalPages` will be used instead.
     */
    numPageLinks: _propTypes2.default.number,
    /** Callback to handle page change */
    onChange: _propTypes2.default.func,
    /** Total number of pages in collection. This can change as collection populates. */
    totalPages: _propTypes2.default.number.isRequired
};

var defaultProps = {
    current: 1,
    alwaysShowLastPageLink: false,
    numPageLinks: 9
};

function Paginator(props) {
    var onChange = props.onChange,
        current = props.current,
        alwaysShowLastPageLink = props.alwaysShowLastPageLink,
        numPageLinks = props.numPageLinks,
        totalPages = props.totalPages,
        otherProps = _objectWithoutProperties(props, ['onChange', 'current', 'alwaysShowLastPageLink', 'numPageLinks', 'totalPages']);

    // Can't show more links than total number of pages.


    var numLinks = Math.min(numPageLinks, totalPages);

    var loMid = Math.ceil(numLinks / 2);
    var hiMid = Math.ceil(totalPages - numLinks / 2);

    var pages = [];
    if (totalPages <= 1) {
        return null;
    }
    if ((current > totalPages || current < 1) && process.env.NODE_ENV !== "production") {
        (0, _errorHandling.invariant)('Error in Paginator: CurrentPage is out of bounds');
    }
    var firstPage = void 0;
    var lastPage = void 0;
    if (current <= loMid) {
        firstPage = 1;
        lastPage = firstPage + Math.min(totalPages, numLinks) - 1;
    } else if (current > loMid && current < hiMid) {
        lastPage = Math.ceil(current + (numLinks - 1) / 2);
        firstPage = lastPage - numLinks + 2;
    } else if (current >= hiMid) {
        firstPage = totalPages - numLinks + 1;
        lastPage = totalPages;
    }

    pages.push(_react2.default.createElement(_PaginatorButton2.default, {
        disabled: current === 1,
        label: (0, _i18n._)('Prev'),
        icon: _react2.default.createElement(_ChevronLeft2.default, { screenReaderText: null }),
        onClick: onChange,
        page: current - 1,
        key: 'prev'
    }));

    if (current > loMid && totalPages > numLinks) {
        pages.push(_react2.default.createElement(_PaginatorButton2.default, {
            label: '1',
            key: 'first',
            onClick: onChange,
            page: 1
        }));
        pages.push(_react2.default.createElement(_PaginatorButton2.default, {
            label: '...',
            disabled: true,
            key: 'prevEllipsis'
        }));
    }

    for (var i = firstPage; i <= lastPage; i += 1) {
        pages.push(_react2.default.createElement(_PaginatorButton2.default, {
            label: String(i),
            selected: i === current,
            onClick: onChange,
            page: i,
            key: i
        }));
    }

    if (current < hiMid && totalPages > numLinks) {
        pages.push(_react2.default.createElement(_PaginatorButton2.default, {
            label: '...',
            disabled: true,
            key: 'nextEllipsis'
        }));
        if (alwaysShowLastPageLink) {
            pages.push(_react2.default.createElement(_PaginatorButton2.default, {
                label: String(totalPages),
                key: 'last',
                onClick: onChange,
                page: totalPages
            }));
        }
    }

    pages.push(_react2.default.createElement(
        _PaginatorButton2.default,
        {
            disabled: current === totalPages,
            label: (0, _i18n._)('Next'),
            onClick: onChange,
            page: current + 1,
            key: 'next'
        },
        _react2.default.createElement(_ChevronRight2.default, { screenReaderText: null })
    ));
    return _react2.default.createElement(
        _Box2.default,
        _extends({ flex: true, inline: true }, (0, _testSupport.createTestHook)(__filename), otherProps),
        pages
    );
}

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;
exports.default = Paginator;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Paginator/Paginator.jsx"))

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/ChevronLeft");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });