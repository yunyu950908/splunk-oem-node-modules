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
/******/ 	return __webpack_require__(__webpack_require__.s = 419);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Clickable");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Button");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/guid");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Text");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Popover");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Link");

/***/ }),

/***/ 239:
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

var _guid = __webpack_require__(16);

var _guid2 = _interopRequireDefault(_guid);

var _i18n = __webpack_require__(2);

var _keyboard = __webpack_require__(12);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Button = __webpack_require__(15);

var _Button2 = _interopRequireDefault(_Button);

var _Link = __webpack_require__(21);

var _Link2 = _interopRequireDefault(_Link);

var _Dropdown = __webpack_require__(31);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _ResultsMenu = __webpack_require__(26);

var _ResultsMenu2 = _interopRequireDefault(_ResultsMenu);

var _Text = __webpack_require__(19);

var _Text2 = _interopRequireDefault(_Text);

var _Option = __webpack_require__(41);

var _Option2 = _interopRequireDefault(_Option);

var _MultiselectCompact = __webpack_require__(299);

var _MultiselectCompact2 = _interopRequireDefault(_MultiselectCompact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compact = function (_Component) {
    _inherits(Compact, _Component);

    function Compact(props) {
        var _ref;

        _classCallCheck(this, Compact);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Compact.__proto__ || Object.getPrototypeOf(Compact)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleSelectAll = function (e) {
            var values = (0, _lodash.uniq)(_this.getCurrentValues().concat(_this.displayedValues));

            if (!_this.isControlled()) {
                _this.setState({ values: values });
            }

            _this.props.onChange(e, { values: values });
        };

        _this.handleClearAll = function (e) {
            // Clear the filtered items, items when filtering. Else clear all the items.
            var values = _this.state.filterKeyword ? _lodash.without.apply(undefined, [_this.getCurrentValues()].concat(_toConsumableArray(_this.displayedValues))) : [];

            if (!_this.isControlled()) {
                _this.setState({ values: values });
            }

            _this.props.onChange(e, { values: values });
        };

        _this.handleRequestRemove = function (e, _ref2) {
            var value = _ref2.value;

            (0, _lodash.defer)(function () {
                return _this.removeValue(e, value);
            }); // allow the event to bubble before removing.
        };

        _this.handleTextKeyDown = function (e) {
            if ((0, _keyboard.keycode)(e) === 'tab') {
                e.preventDefault();
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

            if ((0, _keyboard.keycode)(e) === 'enter' && !(0, _lodash.isUndefined)(_this.activeValue) && _this.state.open) {
                _this.toggleValue(e, _this.activeValue);
            }
        };

        _this.handleMenuOptionClick = function (e, _ref3) {
            var value = _ref3.value;

            e.preventDefault();
            _this.toggleValue(e, value);
        };

        _this.handleTextChange = function (e, _ref4) {
            var value = _ref4.value;

            _this.setState({
                filterKeyword: value,
                open: true,
                activeIndex: 0
            });

            _this.props.onFilterChange(e, { keyword: value });
        };

        _this.handleTextFocus = function () {
            _this.setState({
                textHasFocus: true
            });
        };

        _this.handleTextBlur = function () {
            _this.setState({
                textHasFocus: false
            });
        };

        _this.handleRequestOpen = function (e) {
            _this.setState({
                open: true,
                activeIndex: 0,
                topValues: _this.getCurrentValues(),
                filterKeyword: ''
            });

            _this.props.onFilterChange(e, { keyword: '' });
        };

        _this.handleRequestClose = function () {
            _this.setState({
                open: false
            });
        };

        _this.handleMount = function (container) {
            _this.setState({
                dropdown: container
            });
        };

        _this.handleActiveOptionMount = function (c) {
            if (c) {
                c.scrollIntoViewIfNeeded();
            }
        };

        _this.renderMenu = function (_ref5) {
            var anchorWidth = _ref5.anchorWidth,
                maxHeight = _ref5.maxHeight,
                placement = _ref5.placement;
            var _this$state = _this.state,
                filterKeyword = _this$state.filterKeyword,
                menuId = _this$state.menuId,
                textHasFocus = _this$state.textHasFocus,
                topValues = _this$state.topValues;
            var _this$props = _this.props,
                allowNewValues = _this$props.allowNewValues,
                controlledFilter = _this$props.controlledFilter;

            var currentValues = _this.getCurrentValues();

            _this.availableOptionCount = 0;
            _this.selectedOptionCount = 0;
            _this.activeValue = undefined;

            var foundExactMatch = void 0;
            var childrenTopCount = 0;

            var children = _react.Children.toArray(_this.props.children).reduce(function (acc, item, i) {
                if (!item.props || !(0, _lodash.has)(item.props, 'value')) {
                    // ignore Headings and Dividers
                    acc.push(item);
                    return acc;
                }

                // Find out if the search string exactly matches a value
                if (item.props.value === _this.state.filterKeyword) {
                    foundExactMatch = true;
                }

                // Format the Menu.Item
                var clonedItem = (0, _react.cloneElement)(item, {
                    key: item.key || i,
                    onClick: _this.handleMenuOptionClick,
                    selectable: false,
                    selected: currentValues && currentValues.indexOf(item.props.value) >= 0,
                    compact: true
                });

                // Move previously selected items to the top section
                if (topValues && topValues.indexOf(item.props.value) >= 0) {
                    if (childrenTopCount === 0) {
                        acc.splice(childrenTopCount, 0, _react2.default.createElement(_ResultsMenu2.default.Divider, { key: 'topDivider' }));
                    }
                    acc.splice(childrenTopCount, 0, clonedItem);

                    childrenTopCount += 1;
                } else {
                    acc.push(clonedItem);
                }

                return acc;
            }, []);

            // Add missing items
            (0, _lodash.forEachRight)(currentValues, function (value, i) {
                var matchedItem = (0, _lodash.find)(children, function (item) {
                    return item.props && item.props.value === value;
                });
                if (!matchedItem) {
                    if (value === _this.state.filterKeyword) {
                        foundExactMatch = true;
                    }

                    var isTopValue = topValues && topValues.indexOf(value) >= 0;

                    children.splice(isTopValue ? 0 : childrenTopCount + 1, 0, _react2.default.createElement(_Option2.default, {
                        label: String(value),
                        value: value,
                        key: 'missing-value-' + i,
                        onClick: _this.handleMenuOptionClick,
                        compact: true,
                        selected: true
                    }));
                    if (isTopValue) {
                        childrenTopCount += 1;
                    }
                }
            });

            // Filter the items
            children = controlledFilter ? children : _filter2.default.filterByKeywords(children, filterKeyword, function (item) {
                // Return the filtering value
                if (item.type === _Option2.default) {
                    return item.props.label;
                }
                return null;
            });

            // Add the option to add the new value
            if (allowNewValues && !foundExactMatch && filterKeyword) {
                children.splice(childrenTopCount, 0, _react2.default.createElement(_Option2.default, {
                    label: filterKeyword + ' (new value)',
                    value: filterKeyword,
                    key: 'newValue',
                    compact: true,
                    onClick: _this.handleMenuOptionClick
                }));
            }

            // Highlight the selected Items and remove hidden
            children = children.reduce(function (acc, item) {
                if (!(0, _lodash.has)(item.props, 'value')) {
                    // ignore Dividers & Headings
                    acc.push(item);
                    return acc;
                }

                // Ignore any hidden items
                if (item.props && item.props.hidden) {
                    return acc;
                }

                var active = _this.availableOptionCount === _this.state.activeIndex;
                _this.availableOptionCount += 1;

                _this.selectedOptionCount += item.props.selected ? 1 : 0;

                if (!active || !textHasFocus) {
                    acc.push(item);
                    return acc;
                }

                if (!item.props.disabled) {
                    _this.activeValue = item.props.value;
                }

                var clonedItem = (0, _react.cloneElement)(item, {
                    active: active,
                    id: menuId + '-active',
                    ref: _this.handleActiveOptionMount
                });

                acc.push(clonedItem);
                return acc;
            }, []);

            _this.displayedValues = children.reduce(function (acc, item) {
                if (item.props && item.props.value) {
                    acc.push(item.props.value);
                }
                return acc;
            }, []);

            return _react2.default.createElement(
                _ResultsMenu2.default,
                _extends({
                    childrenStart: _this.renderControls({ placement: placement, hasChildren: !!children.length }),
                    placement: placement,
                    maxHeight: maxHeight,
                    isLoading: _this.props.isLoadingOptions
                }, (0, _lodash.pick)(_this.props, 'noOptionsMessage', 'footerMessage', 'animateLoading', 'loadingMessage'), {
                    style: (0, _lodash.extend)({ width: Math.max(anchorWidth, 200) }, _this.props.menuStyle)
                }),
                children
            );
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'values');

        _this.state = {
            open: false,
            textHasFocus: false,
            menuId: (0, _guid2.default)(),
            values: props.defaultValues || [],
            activeIndex: 0,
            filterKeyword: '',
            el: null
        };

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValues')) {
            (0, _errorHandling.invariant)('Multiselect defaultValues prop is not compatible with value prop.');
        }

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && props.onChange === _lodash.noop) {
            (0, _errorHandling.invariant)('Multiselect onChange prop is required. This must update the value prop\n                to retain user input.');
        }
        return _this;
    }

    _createClass(Compact, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'values')) {
                (0, _errorHandling.invariant)('Cannot change Multiselect from an uncontrolled component to a\n                controlled one. Prop \'values\' is not valid in subsequent updates if not provided in\n                the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValues !== this.props.defaultValues) {
                (0, _errorHandling.invariant)('Cannot change Multiselect defaultValues after set.');
            }
        }
    }, {
        key: 'getCurrentValues',
        value: function getCurrentValues() {
            return this.isControlled() ? this.props.values : this.state.values;
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }

        /**
        * Place focus on the text input.
        */

    }, {
        key: 'focus',
        value: function focus() {
            if (this.state.dropdown) {
                this.state.dropdown.focus();
            }
        }
    }, {
        key: 'toggleValue',
        value: function toggleValue(e, value) {
            var values = this.getCurrentValues();
            var currentIndex = this.getCurrentValues().indexOf(value);
            var newValues = void 0;

            if (currentIndex >= 0) {
                newValues = [].concat(_toConsumableArray(values.slice(0, currentIndex)), _toConsumableArray(values.slice(currentIndex + 1)));
            } else {
                newValues = values.concat([value]);
            }

            if (!this.isControlled()) {
                this.setState({
                    values: newValues,
                    open: true
                });
            }

            this.props.onChange(e, { values: newValues });
        }
    }, {
        key: 'removeValue',
        value: function removeValue(e, value) {
            var values = (0, _lodash.without)(this.getCurrentValues(), value);

            if (!this.isControlled()) {
                this.setState({ values: values });
            }

            this.props.onChange(e, { values: values });
        }
    }, {
        key: 'renderControls',
        value: function renderControls(_ref6) {
            var _this2 = this;

            var placement = _ref6.placement,
                hasChildren = _ref6.hasChildren;

            var selectControls = _react2.default.createElement(
                'div',
                { className: _MultiselectCompact2.default.toggleAllControls, 'data-placement': placement, key: 'selectAll' },
                _react2.default.createElement(
                    _Link2.default,
                    {
                        onClick: this.handleSelectAll,
                        className: _MultiselectCompact2.default.selectAll,
                        disabled: !(this.availableOptionCount - this.selectedOptionCount)
                    },
                    this.state.filterKeyword ? (0, _i18n._)('Select All Matches') : (0, _i18n._)('Select All')
                ),
                _react2.default.createElement(
                    _Link2.default,
                    {
                        onClick: this.handleClearAll,
                        disabled: !this.selectedOptionCount
                    },
                    this.state.filterKeyword ? (0, _i18n._)('Clear All Matches') : (0, _i18n._)('Clear All')
                )
            );

            /* eslint-disable jsx-a11y/tabindex-no-positive */
            return _react2.default.createElement(
                'div',
                { key: 'controls' },
                placement === 'above' && hasChildren && selectControls,
                _react2.default.createElement(
                    'div',
                    {
                        key: 'filter',
                        className: _MultiselectCompact2.default.filter,
                        'data-placement': placement
                    },
                    _react2.default.createElement(_Text2.default, {
                        value: this.state.filterKeyword,
                        appearance: 'search',
                        onChange: this.handleTextChange,
                        onKeyDown: this.handleTextKeyDown,
                        onKeyUp: this.handleTextKeyUp,
                        onFocus: this.handleTextFocus,
                        onBlur: this.handleTextBlur,
                        placeholder: (0, _i18n._)('filter'),
                        tabIndex: 1,
                        ref: function ref(c) {
                            return _this2.input = c;
                        }
                    })
                ),
                placement !== 'above' && hasChildren && selectControls
            );
            /* eslint-enable jsx-a11y/tabindex-no-positive */
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                describedBy = _props.describedBy,
                disabled = _props.disabled,
                error = _props.error,
                inline = _props.inline,
                placeholder = _props.placeholder,
                scrollContainer = _props.scrollContainer,
                size = _props.size,
                otherProps = _objectWithoutProperties(_props, ['children', 'className', 'describedBy', 'disabled', 'error', 'inline', 'placeholder', 'scrollContainer', 'size']);

            // Generate buttonLabels


            var currentValues = this.getCurrentValues();
            var childrenArray = _react.Children.toArray(children);
            var buttonLabel = currentValues.map(function (value) {
                var matchedItem = (0, _lodash.find)(childrenArray, function (item) {
                    return item.props.value === value;
                });
                return matchedItem ? matchedItem.props.label : value;
            }).join((0, _i18n._)(', '));

            var toggle = _react2.default.createElement(
                _Button2.default,
                {
                    label: buttonLabel || placeholder,
                    error: error,
                    inline: inline,
                    size: size,
                    disabled: disabled || null,
                    isMenu: true
                },
                !!currentValues.length && _react2.default.createElement(
                    'span',
                    { className: _MultiselectCompact2.default.count, 'data-role': 'count' },
                    '(',
                    currentValues.length,
                    ')'
                )
            );

            return _react2.default.createElement(
                _Dropdown2.default,
                _extends({
                    className: (0, _toClassName2.default)(_MultiselectCompact2.default.main, className),
                    closeReasons: ['clickAway', 'escapeKey', 'offScreen', 'toggleClick'],
                    inline: inline,
                    toggle: toggle
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(otherProps, 'allowNewValues', 'animateLoading', 'controlledFilter', 'defaultValues', 'footerMessage', 'isLoadingOptions', 'menuStyle', 'noOptionsMessage', 'onChange', 'onFilterChange', 'values'), {
                    onClick: disabled ? null : this.handleClick,
                    onRequestOpen: this.handleRequestOpen,
                    onRequestClose: this.handleRequestClose,
                    open: this.state.open,
                    repositionMode: 'flip',
                    scrollContainer: scrollContainer,
                    defaultPlacement: 'vertical',
                    canCoverAnchor: window.innerHeight < 500,
                    ref: this.handleMount,
                    'aria-describedby': describedBy
                }),
                this.renderMenu
            );
        }
    }]);

    return Compact;
}(_react.Component);

Compact.propTypes = {
    /*
     * Whether or not to show the wait spinner when loading. It's recommended to set this to
     * `true` when loading may take more than one second.
     */
    animateLoading: _propTypes2.default.bool,
    /**
    * Allow the user to add arbitrary values.
    */
    allowNewValues: _propTypes2.default.bool,
    /**
     * `children` should be `Multiselect.Option`, `Multiselect.Heading`, or
     * `Multiselect.Divider`.
     **/
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** If true, this component will not handle filtering. The parent must update the
     * Options based on the onFilterChange value. */
    controlledFilter: _propTypes2.default.bool,
    /**
    * Set this property instead of value to keep the value uncontrolled.
    */
    defaultValues: _propTypes2.default.array,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: _propTypes2.default.string,
    /** Disable adding and removing. */
    disabled: _propTypes2.default.bool,
    /** Display as in an error. */
    error: _propTypes2.default.bool,
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
    /**
     * Style properties to apply to the Menu. */
    menuStyle: _propTypes2.default.object,
    /**
     * The noOptionsMessage is shown when there are no children and not loading, such as when
     * there are no Options matching the filter. This can be customized to the type of content,
     * such as "No matching dashboards"; insert other content, such as an error message; or
     * communicate a minimum number of chararters to enter to see results. */
    noOptionsMessage: _propTypes2.default.node,
    /**
    * A callback to receive the change events.  If values is set, this callback is required.
    * This must set the values prop to retain the change.
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
     * The container with which the popover must scroll to stay aligned with the anchor.
     */
    scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    /** The overall size of the control. */
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /**
     * Value will be matched to one of the children to deduce the label and/or icon for the
     * toggle.
     */
    values: _propTypes2.default.array
};
Compact.defaultProps = {
    animateLoading: false,
    allowNewValues: false,
    disabled: false,
    inline: false,
    isLoadingOptions: false,
    menuStyle: {},
    noOptionsMessage: (0, _i18n._)('No matches'),
    onChange: _lodash.noop,
    onFilterChange: _lodash.noop,
    placeholder: (0, _i18n._)('Select...'),
    scrollContainer: 'window',
    size: 'medium'
};
Compact.Option = _Option2.default;
Compact.Divider = _ResultsMenu2.default.Divider;
Compact.Heading = _ResultsMenu2.default.Heading;
exports.default = Compact;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Multiselect/MultiselectCompact.jsx"))

/***/ }),

/***/ 240:
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

var _guid = __webpack_require__(16);

var _guid2 = _interopRequireDefault(_guid);

var _i18n = __webpack_require__(2);

var _keyboard = __webpack_require__(12);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _ResultsMenu = __webpack_require__(26);

var _ResultsMenu2 = _interopRequireDefault(_ResultsMenu);

var _Popover = __webpack_require__(20);

var _Popover2 = _interopRequireDefault(_Popover);

var _Item = __webpack_require__(418);

var _Item2 = _interopRequireDefault(_Item);

var _Option = __webpack_require__(41);

var _Option2 = _interopRequireDefault(_Option);

var _MultiselectNormal = __webpack_require__(300);

var _MultiselectNormal2 = _interopRequireDefault(_MultiselectNormal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Normal = function (_Component) {
    _inherits(Normal, _Component);

    function Normal(props) {
        var _ref;

        _classCallCheck(this, Normal);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Normal.__proto__ || Object.getPrototypeOf(Normal)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleClick = function () {
            _this.input.focus();
        };

        _this.handleRequestRemove = function (e, _ref2) {
            var value = _ref2.value;

            (0, _lodash.defer)(function () {
                return _this.removeValue(e, value);
            }); // allow the event to bubble before removing.
        };

        _this.handleInputFocus = function (e) {
            if (_this.state.filterKeyword !== '') {
                _this.props.onFilterChange(e, { keyword: '' });
            }
            _this.setState({
                filterKeyword: '',
                hasFocus: true,
                open: true
            });
        };

        _this.handleInputKeyDown = function (e) {
            if ((0, _keyboard.keycode)(e) === 'tab' && _this.state.open) {
                _this.setState({
                    open: false
                });
            }

            if (e.shiftKey || e.metaKey || e.ctrlKey) {
                return;
            }

            if ((0, _keyboard.keycode)(e) === 'down') {
                e.preventDefault();

                if (_this.state.open) {
                    _this.setState({
                        activeIndex: Math.min(_this.state.activeIndex + 1, _this.availableOptionCount - 1)
                    });
                } else {
                    _this.setState({
                        activeIndex: 0,
                        open: true
                    });
                }
            }

            if ((0, _keyboard.keycode)(e) === 'up') {
                e.preventDefault();

                if (_this.state.open) {
                    _this.setState({
                        activeIndex: Math.max(_this.state.activeIndex - 1, 0)
                    });
                } else {
                    _this.setState({
                        activeIndex: 0,
                        open: true
                    });
                }
            }

            if ((0, _keyboard.keycode)(e) === 'enter' && !(0, _lodash.isUndefined)(_this.activeValue) && _this.state.open) {
                _this.addValue(e, _this.activeValue);
            }

            if ((0, _keyboard.keycode)(e) === 'backspace' && _this.input.value === '' && _this.getCurrentValues().length) {
                _this.removeValue(e, (0, _lodash.last)(_this.getCurrentValues()));
            }
        };

        _this.handleInputChange = function (e) {
            _this.setState({
                filterKeyword: e.target.value,
                open: true,
                activeIndex: 0
            });

            _this.props.onFilterChange(e, { keyword: e.target.value });
        };

        _this.handleMenuOptionClick = function (e, _ref3) {
            var value = _ref3.value;

            _this.addValue(e, value);
            _this.input.focus();
        };

        _this.handleInputBlur = function () {
            _this.setState({
                hasFocus: false
            });
        };

        _this.handleRequestClose = function (_ref4) {
            var reason = _ref4.reason,
                event = _ref4.event;

            if (reason === 'escapeKey' || reason === 'offScreen' || !_this.state.el.contains(event.target)) {
                _this.setState({
                    open: false
                });
            }

            if (reason === 'escapeKey') {
                _this.input.focus();
            }
        };

        _this.handleMount = function (container) {
            _this.setState({
                el: container && container.getEl()
            });
        };

        _this.handleActiveOptionMount = function (c) {
            if (c) {
                c.scrollIntoViewIfNeeded();
            }
        };

        _this.renderMenu = function (_ref5) {
            var anchorWidth = _ref5.anchorWidth,
                maxHeight = _ref5.maxHeight,
                placement = _ref5.placement;
            return _react2.default.createElement(
                _ResultsMenu2.default,
                _extends({
                    placement: placement,
                    maxHeight: maxHeight,
                    isLoading: _this.props.isLoadingOptions
                }, (0, _lodash.pick)(_this.props, 'noOptionsMessage', 'footerMessage', 'animateLoading', 'loadingMessage'), {
                    style: (0, _lodash.extend)({ width: Math.max(anchorWidth, 200) }, _this.props.menuStyle)
                }),
                _this.children
            );
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'values');

        _this.state = {
            hasFocus: false,
            open: false,
            menuId: (0, _guid2.default)(),
            values: props.defaultValues || [],
            activeIndex: 0,
            filterKeyword: '',
            el: null
        };

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValues')) {
            (0, _errorHandling.invariant)('Multiselect defaultValues prop is not compatible with value prop.');
        }

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && props.onChange === _lodash.noop) {
            (0, _errorHandling.invariant)('Multiselect onChange prop is required. This must update the value prop\n                to retain user input.');
        }
        return _this;
    }

    _createClass(Normal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'values')) {
                (0, _errorHandling.invariant)('Cannot change Multiselect from an uncontrolled component to a\n                controlled one. Prop \'values\' is not valid in subsequent updates if not provided in\n                the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValues !== this.props.defaultValues) {
                (0, _errorHandling.invariant)('Cannot change Multiselect defaultValues after set.');
            }

            if (this.isControlled() && nextProps.values !== this.props.values) {
                this.setState({
                    filterKeyword: '',
                    activeIndex: 0
                });

                if (this.state.filterKeyword !== '') {
                    this.props.onFilterChange(null, { keyword: '' });
                }
            }
        }
    }, {
        key: 'getCurrentValues',
        value: function getCurrentValues() {
            return this.isControlled() ? this.props.values : this.state.values;
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }

        /**
        * Place focus on the text input.
        */

    }, {
        key: 'focus',
        value: function focus() {
            if (this.input) {
                this.input.focus();
            }
        }
    }, {
        key: 'addValue',
        value: function addValue(e, value) {
            var values = this.getCurrentValues().concat([value]);

            if (!this.isControlled()) {
                this.setState({
                    values: values,
                    activeIndex: 0,
                    open: true,
                    filterKeyword: ''
                });
            }

            this.props.onChange(e, { values: values });
        }
    }, {
        key: 'removeValue',
        value: function removeValue(e, value) {
            var values = (0, _lodash.without)(this.getCurrentValues(), value);

            if (!this.isControlled()) {
                this.setState({ values: values });
            }

            this.props.onChange(e, { values: values });
        }
    }, {
        key: 'renderButtons',
        value: function renderButtons(selectedItems) {
            var _this2 = this;

            // selectedItems may contain items or unmatched values at this point
            return selectedItems.map(function (item) {
                return _react2.default.createElement(_Item2.default, {
                    label: item.props ? item.props.label : item,
                    icon: item.props ? item.props.icon : null,
                    key: item.props ? item.props.value : item,
                    size: _this2.props.size,
                    disabled: _this2.props.disabled,
                    onRequestRemove: _this2.handleRequestRemove,
                    value: item.props ? item.props.value : item
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                allowNewValues = _props.allowNewValues,
                children = _props.children,
                className = _props.className,
                controlledFilter = _props.controlledFilter,
                describedBy = _props.describedBy,
                disabled = _props.disabled,
                error = _props.error,
                inline = _props.inline,
                placeholder = _props.placeholder,
                scrollContainer = _props.scrollContainer,
                size = _props.size,
                otherProps = _objectWithoutProperties(_props, ['allowNewValues', 'children', 'className', 'controlledFilter', 'describedBy', 'disabled', 'error', 'inline', 'placeholder', 'scrollContainer', 'size']);

            var currentValues = this.getCurrentValues();
            var selectedItems = currentValues.slice(0);
            var menuId = this.state.menuId;
            var foundExactMatch = currentValues.indexOf(this.state.filterKeyword) >= 0;

            // Map Options to selected values
            if (currentValues && currentValues.length) {
                _react.Children.forEach(children, function (item) {
                    if ((0, _react.isValidElement)(item)) {
                        var selectedIndex = currentValues.indexOf(item.props.value);

                        if (selectedIndex !== -1) {
                            selectedItems[selectedIndex] = item;
                        }
                    }
                });
            }

            // Filter the items
            var childrenFiltered = controlledFilter ? children : _filter2.default.filterByKeywords(_react.Children.toArray(children), this.state.filterKeyword, function (item) {
                // Return the filtering value
                if (item.type === _Option2.default) {
                    return item.props.label;
                }
                return null;
            });

            this.availableOptionCount = 0;
            this.activeValue = undefined;

            this.children = _react.Children.map(childrenFiltered, function (item, i) {
                if (!item.props || !(0, _lodash.has)(item.props, 'value')) {
                    // ignore Headings and Dividers
                    return item;
                }

                // find out if the search string exactly matches a value
                if (item.props.value === _this3.state.filterKeyword) {
                    foundExactMatch = true;
                }

                // remove items that are already selected
                var selectedIndex = currentValues.indexOf(item.props.value);
                if (selectedIndex >= 0) {
                    return null;
                }

                // find out if the search string exactly matches a value
                var clonedItem = (0, _react.cloneElement)(item, {
                    key: item.key || i,
                    onClick: _this3.handleMenuOptionClick
                });

                return clonedItem;
            });

            // Add the option to add the new value
            if (allowNewValues && !foundExactMatch && this.state.filterKeyword) {
                this.children.unshift(_react2.default.createElement(_Option2.default, {
                    label: this.state.filterKeyword + ' (new value)',
                    value: this.state.filterKeyword,
                    key: 'newValue',
                    onClick: this.handleMenuOptionClick
                }));
            }
            if (open) {
                // highlight the selected Item
                this.children = _react.Children.map(this.children, function (item) {
                    if (!item.props || !(0, _lodash.has)(item.props, 'value')) {
                        // ignore Headings and Dividers
                        return item;
                    }

                    var active = _this3.availableOptionCount === _this3.state.activeIndex;
                    _this3.availableOptionCount += 1;

                    if (!active) {
                        return item;
                    }

                    if (!item.props.disabled) {
                        _this3.activeValue = item.props.value;
                    }

                    var clonedItem = (0, _react.cloneElement)(item, {
                        active: active,
                        id: menuId + '-active',
                        ref: _this3.handleActiveOptionMount
                    });

                    return clonedItem;
                });
            }

            var inputWidth = this.state.filterKeyword.length * 0.8 + 'em';

            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    className: (0, _toClassName2.default)(_MultiselectNormal2.default.main, className),
                    inline: inline,
                    'data-hasFocus': this.state.hasFocus || null
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(otherProps, 'animateLoading', 'controlledFilter', 'defaultValues', 'footerMessage', 'isLoadingOptions', 'labelledBy', 'menuStyle', 'noOptionsMessage', 'onChange', 'onFilterChange', 'values'), {
                    onClick: disabled ? null : this.handleClick,
                    'data-disabled': disabled || null,
                    'data-size': size,
                    flex: true,
                    ref: this.handleMount,
                    role: 'combobox',
                    'aria-haspopup': !disabled || null,
                    'aria-disabled': disabled || null,
                    'aria-expanded': this.state.open,
                    'aria-invalid': error || null,
                    'aria-owns': menuId,
                    'aria-activedescendant': disabled ? null : menuId + '-active',
                    'aria-describedby': describedBy
                }),
                this.renderButtons(selectedItems),
                !disabled && _react2.default.createElement('input', {
                    className: _MultiselectNormal2.default.input,
                    ref: function ref(el) {
                        return _this3.input = el;
                    },
                    onBlur: this.handleInputBlur,
                    onFocus: this.handleInputFocus,
                    onChange: this.handleInputChange,
                    onKeyDown: this.handleInputKeyDown,
                    value: this.state.filterKeyword,
                    autoComplete: 'off',
                    autoCorrect: 'off',
                    autoCapitalize: 'off',
                    spellCheck: 'false',
                    role: 'textbox',
                    'aria-autocomplete': 'list',
                    style: { flexBasis: inputWidth, width: inputWidth },
                    placeholder: currentValues.length ? '' : placeholder,
                    'data-size': size
                }),
                !disabled && _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: this.state.open && !!this.state.el,
                        autoCloseWhenOffScreen: true,
                        anchor: this.state.el,
                        appearance: 'light',
                        onRequestClose: this.handleRequestClose,
                        scrollContainer: scrollContainer,
                        canCoverAnchor: false,
                        defaultPlacement: 'vertical',
                        repositionMode: 'flip',
                        id: menuId
                    },
                    this.renderMenu
                )
            );
        }
    }]);

    return Normal;
}(_react.Component);

Normal.propTypes = {
    /*
     * Whether or not to show the wait spinner when loading. It's recommended to set this to
     * `true` when loading may take more than one second.
     */
    animateLoading: _propTypes2.default.bool,
    /**
    * Allow the user to add arbitrary values.
    */
    allowNewValues: _propTypes2.default.bool,
    /**
     * `children` should be `Multiselect.Option`, `Multiselect.Heading`, or
     * `Multiselect.Divider`.
     **/
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** If true, this component will not handle filtering. The parent must update the
     * Options based on the onFilterChange value. */
    controlledFilter: _propTypes2.default.bool,
    /**
    * Set this property instead of value to keep the value uncontrolled.
    */
    defaultValues: _propTypes2.default.array,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: _propTypes2.default.string,
    /** Disable adding and removing. */
    disabled: _propTypes2.default.bool,
    /** Display as in an error. */
    error: _propTypes2.default.bool,
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
    * A callback to receive the change events.  If values is set, this callback is required.
    * This must set the values prop to retain the change.
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
     * The container with which the popover must scroll to stay aligned with the anchor.
     */
    scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    /** The overall size of the control. */
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /**
     * Value will be matched to one of the children to deduce the label and/or icon for the
     * toggle.
     */
    values: _propTypes2.default.array
};
Normal.defaultProps = {
    animateLoading: false,
    allowNewValues: false,
    disabled: false,
    inline: false,
    isLoadingOptions: false,
    menuStyle: {},
    noOptionsMessage: (0, _i18n._)('No matches'),
    onChange: _lodash.noop,
    onFilterChange: _lodash.noop,
    placeholder: (0, _i18n._)('Select...'),
    scrollContainer: 'window',
    size: 'medium'
};
Normal.Option = _Option2.default;
Normal.Divider = _ResultsMenu2.default.Divider;
Normal.Heading = _ResultsMenu2.default.Heading;
exports.default = Normal;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Multiselect/MultiselectNormal.jsx"))

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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(354);
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(355);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./MultiselectCompact.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./MultiselectCompact.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(356);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./MultiselectNormal.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./MultiselectNormal.css");
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

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_Item__guid__f8079f{background-color:#eee;border-radius:2px;height:32px;color:#999;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto;line-height:14px}.main_Item__guid__f8079f[data-size=small]{height:18px;padding:2px 5px;font-size:11px;margin-right:2px;margin-bottom:1px;max-width:calc(100% - 2px)}.main_Item__guid__f8079f[data-size=medium]{height:20px;padding:3px 5px;margin-right:3px;margin-bottom:2px;max-width:calc(100% - 3px)}.main_Item__guid__f8079f:focus{background-color:rgba(61,171,255,.12);color:#3863a0}.main_Item__guid__f8079f:not([disabled]):hover{background-color:#f5f5f5;color:#3863a0}.main_Item__guid__f8079f[disabled]{cursor:default;background-color:rgba(0,0,0,.05)}.inner_Item__guid__f8079f{display:-webkit-box;display:-webkit-flex;display:flex;max-width:100%}.label_Item__guid__f8079f{color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.labelBlock_Item__guid__f8079f{-webkit-box-flex:1;-webkit-flex:1 0 0;flex:1 0 0;white-space:nowrap;padding:3px 0 3px 10px}.labelInline_Item__guid__f8079f{-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto;white-space:nowrap}[disabled]>.inner_Item__guid__f8079f>.labelInline_Item__guid__f8079f{color:#ccc}.remove_Item__guid__f8079f{color:inherit}.removeBlock_Item__guid__f8079f{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;border-top-right-radius:2px;border-bottom-right-radius:2px;padding:3px 10px;height:inherit}[data-size=medium]>.removeBlock_Item__guid__f8079f{padding:3px 5px}[data-size=small]>.removeBlock_Item__guid__f8079f{padding:3px 5px}.removeBlock_Item__guid__f8079f:focus{background-color:#e5f4ff;color:#3863a0}.removeBlock_Item__guid__f8079f:hover{background-color:#f5f5f5;color:#3863a0}.removeInline_Item__guid__f8079f{padding-left:5px;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}","lite":".main_Item__guid__f8079f{background-color:#eee;border-radius:2px;height:32px;color:#999;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto;line-height:14px}.main_Item__guid__f8079f[data-size=small]{height:18px;padding:2px 5px;font-size:11px;margin-right:2px;margin-bottom:1px;max-width:calc(100% - 2px)}.main_Item__guid__f8079f[data-size=medium]{height:20px;padding:3px 5px;margin-right:3px;margin-bottom:2px;max-width:calc(100% - 3px)}.main_Item__guid__f8079f:focus{background-color:rgba(61,171,255,.12);color:#3863a0}.main_Item__guid__f8079f:not([disabled]):hover{background-color:#f5f5f5;color:#3863a0}.main_Item__guid__f8079f[disabled]{cursor:default;background-color:rgba(0,0,0,.05)}.inner_Item__guid__f8079f{display:-webkit-box;display:-webkit-flex;display:flex;max-width:100%}.label_Item__guid__f8079f{color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.labelBlock_Item__guid__f8079f{-webkit-box-flex:1;-webkit-flex:1 0 0;flex:1 0 0;white-space:nowrap;padding:3px 0 3px 10px}.labelInline_Item__guid__f8079f{-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto;white-space:nowrap}[disabled]>.inner_Item__guid__f8079f>.labelInline_Item__guid__f8079f{color:#ccc}.remove_Item__guid__f8079f{color:inherit}.removeBlock_Item__guid__f8079f{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;border-top-right-radius:2px;border-bottom-right-radius:2px;padding:3px 10px;height:inherit}[data-size=medium]>.removeBlock_Item__guid__f8079f{padding:3px 5px}[data-size=small]>.removeBlock_Item__guid__f8079f{padding:3px 5px}.removeBlock_Item__guid__f8079f:focus{background-color:#e5f4ff;color:#3863a0}.removeBlock_Item__guid__f8079f:hover{background-color:#f5f5f5;color:#3863a0}.removeInline_Item__guid__f8079f{padding-left:5px;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}"};
var themeLocals = {"enterprise":{"main":"main_Item__guid__f8079f","inner":"inner_Item__guid__f8079f","label":"label_Item__guid__f8079f","labelBlock":"labelBlock_Item__guid__f8079f label_Item__guid__f8079f","labelInline":"labelInline_Item__guid__f8079f label_Item__guid__f8079f","remove":"remove_Item__guid__f8079f","removeBlock":"removeBlock_Item__guid__f8079f remove_Item__guid__f8079f","removeInline":"removeInline_Item__guid__f8079f remove_Item__guid__f8079f"},"lite":{"main":"main_Item__guid__f8079f","inner":"inner_Item__guid__f8079f","label":"label_Item__guid__f8079f","labelBlock":"labelBlock_Item__guid__f8079f label_Item__guid__f8079f","labelInline":"labelInline_Item__guid__f8079f label_Item__guid__f8079f","remove":"remove_Item__guid__f8079f","removeBlock":"removeBlock_Item__guid__f8079f remove_Item__guid__f8079f","removeInline":"removeInline_Item__guid__f8079f remove_Item__guid__f8079f"}};
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

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_MultiselectCompact__guid__807b7b[data-inline]{width:400px}.filter_MultiselectCompact__guid__807b7b{padding:8px;min-width:160px}:not([data-placement=above])>.filter_MultiselectCompact__guid__807b7b{border-bottom:1px solid #ccc}[data-placement=above]>.filter_MultiselectCompact__guid__807b7b{border-top:1px solid #ccc}.count_MultiselectCompact__guid__807b7b{padding-right:5px}.toggleAllControls_MultiselectCompact__guid__807b7b{padding:5px 8px}.toggleAllControls_MultiselectCompact__guid__807b7b:not([data-placement=above]){border-bottom:1px solid #ccc}.toggleAllControls_MultiselectCompact__guid__807b7b[data-placement=above]{border-top:1px solid #ccc}.selectAll_MultiselectCompact__guid__807b7b{margin-right:20px}","enterprise":".main_MultiselectCompact__guid__807b7b[data-inline]{width:400px}.filter_MultiselectCompact__guid__807b7b{padding:8px;min-width:160px}:not([data-placement=above])>.filter_MultiselectCompact__guid__807b7b{border-bottom:1px solid #ccc}[data-placement=above]>.filter_MultiselectCompact__guid__807b7b{border-top:1px solid #ccc}.count_MultiselectCompact__guid__807b7b{padding-right:5px}.toggleAllControls_MultiselectCompact__guid__807b7b{padding:5px 8px}.toggleAllControls_MultiselectCompact__guid__807b7b:not([data-placement=above]){border-bottom:1px solid #ccc}.toggleAllControls_MultiselectCompact__guid__807b7b[data-placement=above]{border-top:1px solid #ccc}.selectAll_MultiselectCompact__guid__807b7b{margin-right:20px}"};
var themeLocals = {"lite":{"main":"main_MultiselectCompact__guid__807b7b","-webkit-filter":"filter_MultiselectCompact__guid__807b7b","filter":"filter_MultiselectCompact__guid__807b7b","count":"count_MultiselectCompact__guid__807b7b","toggleAllControls":"toggleAllControls_MultiselectCompact__guid__807b7b","selectAll":"selectAll_MultiselectCompact__guid__807b7b"},"enterprise":{"main":"main_MultiselectCompact__guid__807b7b","-webkit-filter":"filter_MultiselectCompact__guid__807b7b","filter":"filter_MultiselectCompact__guid__807b7b","count":"count_MultiselectCompact__guid__807b7b","toggleAllControls":"toggleAllControls_MultiselectCompact__guid__807b7b","selectAll":"selectAll_MultiselectCompact__guid__807b7b"}};
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

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_MultiselectNormal__guid__ec0a8b{border:1px solid #ccc;border-radius:4px;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:2px 0 0 2px;min-height:26px;background-color:#fff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);max-height:300px;overflow-y:auto}.main_MultiselectNormal__guid__ec0a8b[data-hasFocus]{border-color:#52a8ec;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.main_MultiselectNormal__guid__ec0a8b[aria-disabled]{cursor:not-allowed;background-color:#f5f5f5}.main_MultiselectNormal__guid__ec0a8b[aria-invalid]{border-color:#d6563c;color:#d6563c}.main_MultiselectNormal__guid__ec0a8b[data-size=small]{min-height:22px;padding:1px 0 0 1px}.main_MultiselectNormal__guid__ec0a8b[data-inline]{width:400px}.clear_MultiselectNormal__guid__ec0a8b{color:#999}.selectedItem_MultiselectNormal__guid__ec0a8b{max-width:100%;-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto}.input_MultiselectNormal__guid__ec0a8b{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto;line-height:12px;padding:4px}.selectedItem_MultiselectNormal__guid__ec0a8b+.input_MultiselectNormal__guid__ec0a8b{padding-left:2px}.input_MultiselectNormal__guid__ec0a8b[data-size=small]{padding:3px;font-size:11px}","lite":".main_MultiselectNormal__guid__ec0a8b{border:1px solid #ccc;border-radius:2px;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:2px 0 0 2px;min-height:26px;background-color:#fff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);max-height:300px;overflow-y:auto;border-color:#333}.main_MultiselectNormal__guid__ec0a8b[data-hasFocus]{border-color:#52a8ec;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.main_MultiselectNormal__guid__ec0a8b[aria-disabled]{cursor:not-allowed;background-color:#f5f5f5}.main_MultiselectNormal__guid__ec0a8b[aria-invalid]{border-color:#d6563c;color:#d6563c}.main_MultiselectNormal__guid__ec0a8b[data-size=small]{min-height:22px;padding:1px 0 0 1px}.main_MultiselectNormal__guid__ec0a8b[data-inline]{width:400px}.clear_MultiselectNormal__guid__ec0a8b{color:#999}.selectedItem_MultiselectNormal__guid__ec0a8b{max-width:100%;-webkit-box-flex:0;-webkit-flex:0 1 auto;flex:0 1 auto}.input_MultiselectNormal__guid__ec0a8b{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto;line-height:12px;padding:4px}.selectedItem_MultiselectNormal__guid__ec0a8b+.input_MultiselectNormal__guid__ec0a8b{padding-left:2px}.input_MultiselectNormal__guid__ec0a8b[data-size=small]{padding:3px;font-size:11px}"};
var themeLocals = {"enterprise":{"main":"main_MultiselectNormal__guid__ec0a8b","clear":"clear_MultiselectNormal__guid__ec0a8b","selectedItem":"selectedItem_MultiselectNormal__guid__ec0a8b","input":"input_MultiselectNormal__guid__ec0a8b"},"lite":{"main":"main_MultiselectNormal__guid__ec0a8b","clear":"clear_MultiselectNormal__guid__ec0a8b","selectedItem":"selectedItem_MultiselectNormal__guid__ec0a8b","input":"input_MultiselectNormal__guid__ec0a8b"}};
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

/***/ 41:
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
            }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(this.props, 'compact'), {
                selectable: this.props.compact,
                selectableAppearance: this.props.compact ? 'checkbox' : undefined,
                onClick: this.handleClick
            }));
        }
    }]);

    return Option;
}(_react.Component);

Option.propTypes = {
    /**
    * @docs-ignore this is passed down from Multiselect.
    */
    compact: _propTypes2.default.bool,
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
    * If truncate=true, wrapping will be disabled and any additional text will be ellipsised.
    */
    truncate: _propTypes2.default.bool,
    /**
    * The label and/or icon will be placed on the Control's toggle if it matches this value.
    */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]).isRequired
};
Option.defaultProps = {
    compact: false,
    descriptionPosition: 'bottom',
    disabled: false,
    onClick: _lodash.noop,
    selected: false,
    truncate: false
};
exports.default = Option;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Multiselect/Option.jsx"))

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Item;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _testSupport = __webpack_require__(1);

var _Clickable = __webpack_require__(13);

var _Clickable2 = _interopRequireDefault(_Clickable);

var _Remove = __webpack_require__(46);

var _Remove2 = _interopRequireDefault(_Remove);

var _Item = __webpack_require__(298);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    /** Disabled click events.  */
    disabled: _propTypes2.default.bool,
    /** The label on the left.  */
    label: _propTypes2.default.string,
    /** Adds a remove link to the right.  */
    onRequestRemove: _propTypes2.default.func,
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /** value is included in data for onLabelClick and onRequestRemove */
    value: _propTypes2.default.any.isRequired
};

var defaultProps = {
    size: 'medium'
};

function Item(props) {
    var disabled = props.disabled,
        label = props.label,
        onRequestRemove = props.onRequestRemove,
        size = props.size,
        value = props.value,
        otherProps = _objectWithoutProperties(props, ['disabled', 'label', 'onRequestRemove', 'size', 'value']);

    function handleRemoveClick(e) {
        onRequestRemove(e, { value: value });
    }

    return _react2.default.createElement(
        _Clickable2.default,
        _extends({
            className: _Item2.default.main,
            onClick: handleRemoveClick,
            disabled: disabled,
            contentWrapperClassName: _Item2.default.inner,
            'data-size': size
        }, (0, _testSupport.createTestHook)(__filename), otherProps),
        _react2.default.createElement(
            'div',
            { className: _Item2.default.labelInline },
            label
        ),
        !disabled && _react2.default.createElement(
            'span',
            { className: _Item2.default.removeInline },
            _react2.default.createElement(_Remove2.default, null)
        )
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Multiselect/Item.jsx"))

/***/ }),

/***/ 419:
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

var _lodash = __webpack_require__(6);

var _i18n = __webpack_require__(2);

var _Menu = __webpack_require__(25);

var _Menu2 = _interopRequireDefault(_Menu);

var _MultiselectCompact = __webpack_require__(239);

var _MultiselectCompact2 = _interopRequireDefault(_MultiselectCompact);

var _MultiselectNormal = __webpack_require__(240);

var _MultiselectNormal2 = _interopRequireDefault(_MultiselectNormal);

var _Option = __webpack_require__(41);

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Multiselect = function (_Component) {
  _inherits(Multiselect, _Component);

  function Multiselect() {
    _classCallCheck(this, Multiselect);

    return _possibleConstructorReturn(this, (Multiselect.__proto__ || Object.getPrototypeOf(Multiselect)).apply(this, arguments));
  }

  _createClass(Multiselect, [{
    key: 'render',
    value: function render() {
      var Tag = this.props.compact ? _MultiselectCompact2.default : _MultiselectNormal2.default;

      return _react2.default.createElement(Tag, (0, _lodash.omit)(this.props, 'compact'));
    }
  }]);

  return Multiselect;
}(_react.Component);

Multiselect.propTypes = {
  /*
   * Whether or not to show the wait spinner when loading. It's recommended to set this to
   * `true` when loading may take more than one second.
   */
  animateLoading: _propTypes2.default.bool,
  /**
  * Allow the user to add arbitrary values.
  */
  allowNewValues: _propTypes2.default.bool,
  /**
   * When compact, options are shown as checkboxes and the input is a single line. This is
   * useful when placing the Multiselect in a horizontal bar, such as a filter.
   */
  compact: _propTypes2.default.bool,
  /**
   * `children` should be `Multiselect.Option`, `Multiselect.Heading`, or
   * `Multiselect.Divider`.
   **/
  children: _propTypes2.default.node,
  /** @docs-ignore */
  className: _propTypes2.default.string,
  /** If true, this component will not handle filtering. The parent must update the
   * Options based on the onFilterChange value. */
  controlledFilter: _propTypes2.default.bool,
  /**
  * Set this property instead of value to keep the value uncontrolled.
  */
  defaultValues: _propTypes2.default.array,
  /**
   * The id of the description. When placed in a ControlGroup, this automatically set to the
   * ControlGroup's help component.
   */
  describedBy: _propTypes2.default.string,
  /** Disable adding and removing. */
  disabled: _propTypes2.default.bool,
  /** Display as in an error. */
  error: _propTypes2.default.bool,
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
  /**
   * Style properties to apply to the Menu. This is primarily used to override the width of
   * the menu should it need to be wider than the toggle Button. */
  menuStyle: _propTypes2.default.object,
  /**
   * The noOptionsMessage is shown when there are no children and not loading, such as when
   * there are no Options matching the filter. This can be customized to the type of content,
   * such as "No matching dashboards"; insert other content, such as an error message; or
   * communicate a minimum number of chararters to enter to see results. */
  noOptionsMessage: _propTypes2.default.node,
  /**
  * A callback to receive the change events.  If values is set, this callback is required.
  * This must set the values prop to retain the change.
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
   * The container with which the popover must scroll to stay aligned with the anchor.
   */
  scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  /** The overall size of the control. */
  size: _propTypes2.default.oneOf(['small', 'medium']),
  /**
   * Value will be matched to one of the children to deduce the label and/or icon for the
   * toggle.
   */
  values: _propTypes2.default.array
};
Multiselect.defaultProps = {
  animateLoading: false,
  allowNewValues: false,
  compact: false,
  disabled: false,
  inline: false,
  isLoadingOptions: false,
  menuStyle: {},
  noOptionsMessage: (0, _i18n._)('No matches'),
  onChange: _lodash.noop,
  onFilterChange: _lodash.noop,
  placeholder: (0, _i18n._)('Select...'),
  scrollContainer: 'window',
  size: 'medium'
};
Multiselect.Option = _Option2.default;
Multiselect.Heading = _Menu2.default.Heading;
Multiselect.Divider = _Menu2.default.Divider;
exports.default = Multiselect;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/Remove");

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