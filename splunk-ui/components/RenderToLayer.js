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
/******/ 	return __webpack_require__(__webpack_require__.s = 427);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/keyboard");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-event-listener");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(29);

var _reactEventListener = __webpack_require__(14);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _lodash = __webpack_require__(6);

var _keyboard = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Originally adapted from:
// https://github.com/callemall/material-ui/blob/master/src/internal/RenderToLayer.js

// eslint-disable-line


// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
var RenderToLayer = function (_Component) {
    _inherits(RenderToLayer, _Component);

    function RenderToLayer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RenderToLayer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RenderToLayer.__proto__ || Object.getPrototypeOf(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickLayer = function (event) {
            _this.layerClickEvent = event;
        }, _this.onClickAway = function (event) {
            // clicks inside the layer should not be considered clickAways
            if (!_this.props.open || !(0, _lodash.includes)(_this.props.closeReasons, 'clickAway')) {
                return;
            }

            // when useLayerForClickAway, ignore events not directly on the layer.
            if (_this.props.useLayerForClickAway && event.target !== _this.layer) {
                return;
            }

            if (!_this.props.useLayerForClickAway) {
                // ignore events bubbling through this or higher layers
                var thisIndex = RenderToLayer.instanceStack.indexOf(_this);
                var topLayers = RenderToLayer.instanceStack.slice(thisIndex);
                var caughtEvents = topLayers.map(function (layer) {
                    return layer.layerClickEvent;
                });
                if (caughtEvents.indexOf(event) >= 0) {
                    return;
                }
            }

            _this.props.onRequestClose({ event: event, reason: 'clickAway' });
        }, _this.handleKeyDown = function (event) {
            if (_this.props.open && (0, _keyboard.keycode)(event) === 'esc' && (0, _lodash.last)(RenderToLayer.instanceStack) === _this && (0, _lodash.includes)(_this.props.closeReasons, 'escapeKey')) {
                _this.props.onRequestClose({ event: event, reason: 'escapeKey' });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * @private
     * RenderToLayer.instanceStack keeps track of the current instances of RenderToLayer. This is
     * used by RenderToLayer#handleKeyDown to determine if the escapeKey event should be handled by
     * the current instance. Only the topmost RenderToLayer instance should honor the escapeKey.
     */


    _createClass(RenderToLayer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderLayer();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.renderLayer();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unrenderLayer();
        }
    }, {
        key: 'unrenderLayer',
        value: function unrenderLayer() {
            window.clearTimeout(this.addListenersTimeout);
            window.clearTimeout(this.pushToStackTimeout);
            (0, _lodash.remove)(RenderToLayer.instanceStack, this);
            if (!this.layer) {
                return;
            }

            if (this.props.useLayerForClickAway) {
                this.layer.style.position = 'relative';
                this.layer.removeEventListener('touchstart', this.onClickAway);
                this.layer.removeEventListener('click', this.onClickAway);
            } else {
                this.layer.removeEventListener('click', this.onClickLayer);
                window.removeEventListener('touchstart', this.onClickAway);
                window.removeEventListener('click', this.onClickAway);
            }

            (0, _reactDom.unmountComponentAtNode)(this.layer);
            document.body.removeChild(this.layer);
            this.layer = null;
        }

        /**
         * By calling this method in componentDidMount() and
         * componentDidUpdate(), you're effectively creating a "wormhole" that
         * funnels React's hierarchical updates through to a DOM node on an
         * entirely different part of the page.
         */

    }, {
        key: 'renderLayer',
        value: function renderLayer() {
            var _this2 = this;

            var _props = this.props,
                closeReasons = _props.closeReasons,
                open = _props.open,
                render = _props.render;

            if (open) {
                if (!this.layer) {
                    this.layer = document.createElement('div');
                    document.body.appendChild(this.layer);
                    if (closeReasons.length) {
                        RenderToLayer.instanceStack.push(this);
                    }
                    if (this.props.useLayerForClickAway) {
                        this.layer.addEventListener('touchstart', this.onClickAway);
                        this.layer.addEventListener('click', this.onClickAway);
                        this.layer.style.position = 'fixed';
                        this.layer.style.top = 0;
                        this.layer.style.bottom = 0;
                        this.layer.style.left = 0;
                        this.layer.style.right = 0;
                    } else {
                        this.addListenersTimeout = setTimeout(function () {
                            _this2.layer.addEventListener('click', _this2.onClickLayer);
                            window.addEventListener('touchstart', _this2.onClickAway);
                            window.addEventListener('click', _this2.onClickAway);
                        }, 0);
                    }
                }

                var layerElement = render();
                this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
            } else {
                this.unrenderLayer();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactEventListener2.default, {
                target: 'window',
                onKeyDown: this.handleKeyDown
            });
        }
    }]);

    return RenderToLayer;
}(_react.Component);

RenderToLayer.possibleCloseReasons = ['escapeKey', 'clickAway'];
RenderToLayer.propTypes = {
    closeReasons: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(RenderToLayer.possibleCloseReasons)),
    /**
     * Invoked when a potential close event occurs. The function is passed a data object
     * containing the event and a reason. Possible reasons are `escapeKey` and `clickAway`.
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * Whether the component is currently open.
     */
    open: _propTypes2.default.bool,
    /**
     * The render function for the detached sub-tree.
     */
    render: _propTypes2.default.func.isRequired,
    /**
     * Whether to use a div layer to catch clickAway events. Otherwise, the window is used.
     */
    useLayerForClickAway: _propTypes2.default.bool
};
RenderToLayer.defaultProps = {
    closeReasons: RenderToLayer.possibleCloseReasons,
    onRequestClose: _lodash.noop,
    open: false,
    useLayerForClickAway: true
};
RenderToLayer.instanceStack = [];
exports.default = RenderToLayer;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });