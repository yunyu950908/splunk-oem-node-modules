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
/******/ 	return __webpack_require__(__webpack_require__.s = 406);
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Box");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Clickable");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-event-listener");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/guid");

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./File.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./File.css");
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

/***/ 229:
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

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Clickable = __webpack_require__(13);

var _Clickable2 = _interopRequireDefault(_Clickable);

var _Remove = __webpack_require__(46);

var _Remove2 = _interopRequireDefault(_Remove);

var _Progress = __webpack_require__(827);

var _Progress2 = _interopRequireDefault(_Progress);

var _Item = __webpack_require__(289);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** Show the Item in an error state. */
    error: _propTypes2.default.bool,
    /** A unique for this file. */
    itemId: _propTypes2.default.any,
    /** The name is displayed on the item. */
    name: _propTypes2.default.string.isRequired,
    /** @docs-ignore */
    onClick: _propTypes2.default.func,
    /** @docs-ignore */
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /** If the uploadPercentage is 0, the item is assumed to be queued. If the upload is complete or
     * not applicable, uploadPercentage must be undefined. */
    uploadPercentage: _propTypes2.default.number
};

var defaultProps = {
    error: false
};

function Item(props) {
    var error = props.error,
        itemId = props.itemId,
        name = props.name,
        onClick = props.onClick,
        size = props.size,
        uploadPercentage = props.uploadPercentage,
        otherProps = _objectWithoutProperties(props, ['error', 'itemId', 'name', 'onClick', 'size', 'uploadPercentage']);

    function handleRequestRemove(e) {
        e.preventDefault();
        onClick({ itemId: itemId, name: name });
    }

    return _react2.default.createElement(
        _Box2.default,
        _extends({
            className: _Item2.default.main
        }, (0, _testSupport.createTestHook)(__filename), otherProps, {
            flex: true,
            'data-size': size,
            'data-error': error || null
        }),
        _react2.default.createElement(
            'div',
            { className: _Item2.default.label },
            name
        ),
        _react2.default.createElement(
            _Clickable2.default,
            {
                className: _Item2.default.remove,
                onClick: handleRequestRemove
            },
            _react2.default.createElement(_Remove2.default, null)
        ),
        !(0, _lodash.isUndefined)(uploadPercentage) && uploadPercentage > 0 && _react2.default.createElement(_Progress2.default, {
            className: _Item2.default.progress,
            percentage: uploadPercentage
        })
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
exports.default = Item;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/File/Item.jsx"))

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
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

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".input_File__guid__e0086b{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.mediumDropTarget_File__guid__e0086b{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;border-width:1px;visibility:inherit;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;border-radius:2px;padding:5px;min-height:73px;line-height:24px;border:1px dashed #ccc;border-color:#333}.mediumDropTarget_File__guid__e0086b[data-drag-over]{border:1px solid #1e93c6}.mediumDropTarget_File__guid__e0086b[data-error]:not([data-drag-over]){border:1px solid #d6563c}.smallDropTarget_File__guid__e0086b{padding:3px;min-height:63px}.largeDropTarget_File__guid__e0086b{text-align:center;min-height:250px;padding:20px}.icon_File__guid__e0086b{fill:#999}.mediumIcon_File__guid__e0086b{height:1.4em;width:1.4em;display:inline-block;vertical-align:middle;padding-bottom:3px}.largeIcon_File__guid__e0086b{height:48px;width:48px;position:absolute;top:30px;left:50%;-webkit-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.smallText_File__guid__e0086b{display:block;font-size:11px}.mediumText_File__guid__e0086b{display:inline-block}.largeText_File__guid__e0086b{font-weight:200;font-size:20px;margin-top:80px;margin-bottom:10px}.link_File__guid__e0086b{color:#1e93c6;cursor:pointer}.link_File__guid__e0086b:hover,.link_File__guid__e0086b[data-focused]{color:#3863a0;text-decoration:underline}.link_File__guid__e0086b[data-focused]{-webkit-box-shadow:0 0 0 2px rgba(61,171,255,.12);box-shadow:0 0 0 2px rgba(61,171,255,.12);background-color:rgba(61,171,255,.12)}.help_File__guid__e0086b{margin-bottom:30px}.windowDrop_File__guid__e0086b{position:fixed;top:0;left:0;right:0;bottom:0;border:5px solid #1e93c6;z-index:1050}","enterprise":".input_File__guid__e0086b{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.mediumDropTarget_File__guid__e0086b{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;border-width:1px;visibility:inherit;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;border-radius:4px;padding:5px;min-height:73px;line-height:24px;border:1px dashed #ccc}.mediumDropTarget_File__guid__e0086b[data-drag-over]{border:1px solid #1e93c6}.mediumDropTarget_File__guid__e0086b[data-error]:not([data-drag-over]){border:1px solid #d6563c}.smallDropTarget_File__guid__e0086b{padding:3px;min-height:63px}.largeDropTarget_File__guid__e0086b{text-align:center;min-height:250px;padding:20px}.icon_File__guid__e0086b{fill:#999}.mediumIcon_File__guid__e0086b{height:1.4em;width:1.4em;display:inline-block;vertical-align:middle;padding-bottom:3px}.largeIcon_File__guid__e0086b{height:48px;width:48px;position:absolute;top:30px;left:50%;-webkit-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.smallText_File__guid__e0086b{display:block;font-size:11px}.mediumText_File__guid__e0086b{display:inline-block}.largeText_File__guid__e0086b{font-weight:200;font-size:20px;margin-top:80px;margin-bottom:10px}.link_File__guid__e0086b{color:#1e93c6;cursor:pointer}.link_File__guid__e0086b:hover,.link_File__guid__e0086b[data-focused]{color:#3863a0;text-decoration:underline}.link_File__guid__e0086b[data-focused]{-webkit-box-shadow:0 0 0 2px rgba(61,171,255,.12);box-shadow:0 0 0 2px rgba(61,171,255,.12);background-color:rgba(61,171,255,.12)}.help_File__guid__e0086b{margin-bottom:30px}.windowDrop_File__guid__e0086b{position:fixed;top:0;left:0;right:0;bottom:0;border:5px solid #1e93c6;z-index:1050}"};
var themeLocals = {"lite":{"input":"input_File__guid__e0086b","mediumDropTarget":"mediumDropTarget_File__guid__e0086b","smallDropTarget":"smallDropTarget_File__guid__e0086b mediumDropTarget_File__guid__e0086b","largeDropTarget":"largeDropTarget_File__guid__e0086b","icon":"icon_File__guid__e0086b","mediumIcon":"mediumIcon_File__guid__e0086b icon_File__guid__e0086b","largeIcon":"largeIcon_File__guid__e0086b icon_File__guid__e0086b","smallText":"smallText_File__guid__e0086b","mediumText":"mediumText_File__guid__e0086b","largeText":"largeText_File__guid__e0086b","link":"link_File__guid__e0086b","help":"help_File__guid__e0086b","windowDrop":"windowDrop_File__guid__e0086b"},"enterprise":{"input":"input_File__guid__e0086b","mediumDropTarget":"mediumDropTarget_File__guid__e0086b","smallDropTarget":"smallDropTarget_File__guid__e0086b mediumDropTarget_File__guid__e0086b","largeDropTarget":"largeDropTarget_File__guid__e0086b","icon":"icon_File__guid__e0086b","mediumIcon":"mediumIcon_File__guid__e0086b icon_File__guid__e0086b","largeIcon":"largeIcon_File__guid__e0086b icon_File__guid__e0086b","smallText":"smallText_File__guid__e0086b","mediumText":"mediumText_File__guid__e0086b","largeText":"largeText_File__guid__e0086b","link":"link_File__guid__e0086b","help":"help_File__guid__e0086b","windowDrop":"windowDrop_File__guid__e0086b"}};
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

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_Item__guid__4a1710{position:relative;width:100%;max-width:400px;margin:5px auto 0;background-color:#eee;line-height:24px;border-radius:2px;min-height:32px;color:#999}.main_Item__guid__4a1710[data-size=small]{min-height:24px;line-height:20px;font-size:11px}.main_Item__guid__4a1710[data-error]{background-color:transparent;-webkit-box-shadow:inset 0 0 0 1px #d6563c;box-shadow:inset 0 0 0 1px #d6563c}.tag_Item__guid__4a1710[data-queued]{opacity:.5}.progress_Item__guid__4a1710{position:absolute;left:0;top:0;right:0;z-index:1}.label_Item__guid__4a1710{color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-box-flex:1;-webkit-flex:1 0 0;flex:1 0 0;padding:3px 0 3px 10px}.remove_Item__guid__4a1710{color:inherit;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;border-top-right-radius:2px;border-bottom-right-radius:2px;padding:3px 10px;height:inherit}[data-size=small]>.remove_Item__guid__4a1710{padding:3px 7px}[data-error]>.remove_Item__guid__4a1710{border:1px solid #d6563c;border-left:none}.remove_Item__guid__4a1710:focus{background-color:#e5f4ff;color:#3863a0}.remove_Item__guid__4a1710:hover{background-color:#f5f5f5;color:#3863a0}","lite":".main_Item__guid__4a1710{position:relative;width:100%;max-width:400px;margin:5px auto 0;background-color:#eee;line-height:24px;border-radius:2px;min-height:32px;color:#999}.main_Item__guid__4a1710[data-size=small]{min-height:24px;line-height:20px;font-size:11px}.main_Item__guid__4a1710[data-error]{background-color:transparent;-webkit-box-shadow:inset 0 0 0 1px #d6563c;box-shadow:inset 0 0 0 1px #d6563c}.tag_Item__guid__4a1710[data-queued]{opacity:.5}.progress_Item__guid__4a1710{position:absolute;left:0;top:0;right:0;z-index:1}.label_Item__guid__4a1710{color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-box-flex:1;-webkit-flex:1 0 0;flex:1 0 0;padding:3px 0 3px 10px}.remove_Item__guid__4a1710{color:inherit;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;border-top-right-radius:2px;border-bottom-right-radius:2px;padding:3px 10px;height:inherit}[data-size=small]>.remove_Item__guid__4a1710{padding:3px 7px}[data-error]>.remove_Item__guid__4a1710{border:1px solid #d6563c;border-left:none}.remove_Item__guid__4a1710:focus{background-color:#e5f4ff;color:#3863a0}.remove_Item__guid__4a1710:hover{background-color:#f5f5f5;color:#3863a0}"};
var themeLocals = {"enterprise":{"main":"main_Item__guid__4a1710","tag":"tag_Item__guid__4a1710","progress":"progress_Item__guid__4a1710","label":"label_Item__guid__4a1710","remove":"remove_Item__guid__4a1710"},"lite":{"main":"main_Item__guid__4a1710","tag":"tag_Item__guid__4a1710","progress":"progress_Item__guid__4a1710","label":"label_Item__guid__4a1710","remove":"remove_Item__guid__4a1710"}};
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

/***/ 406:
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

var _i18n = __webpack_require__(2);

var _guid = __webpack_require__(16);

var _guid2 = _interopRequireDefault(_guid);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _testSupport = __webpack_require__(1);

var _reactEventListener = __webpack_require__(14);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Item = __webpack_require__(229);

var _Item2 = _interopRequireDefault(_Item);

var _File = __webpack_require__(188);

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * File provides the ability to accept files and present uploaded files. It does not provide
 * file readers, only a reference to the file. This can be used to post binary content, or
 * upload using an array buffer.
 */
var File = function (_Component) {
    _inherits(File, _Component);

    function File(props) {
        var _ref;

        _classCallCheck(this, File);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = File.__proto__ || Object.getPrototypeOf(File)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleInputChange = function (e) {
            _this.addFiles(e.currentTarget.files);
        };

        _this.handleInputFocus = function () {
            _this.setState({
                focusedInput: true
            });
        };

        _this.handleInputBlur = function () {
            _this.setState({
                focusedInput: false
            });
        };

        _this.handleDragOver = function (e) {
            if (!_this.setState.dragOver) {
                _this.setState({
                    dragOver: true
                });
            }
            e.preventDefault();
        };

        _this.handleDragLeave = function () {
            _this.setState({
                dragOver: false
            });
        };

        _this.handleDrop = function (e) {
            e.preventDefault();
            _this.handleDragLeave();

            _this.addFiles(e.dataTransfer.files);
        };

        _this.state = {
            dragOver: false,
            focusedInput: false
        };

        _this.guid = (0, _guid2.default)();

        /* Each time a file is uploaded this is incremented and used to generate the
         * file input's key. In this way we get a new input without a value. */
        _this.fileCount = 0;

        _this.handleDragLeave = (0, _lodash.debounce)(_this.handleDragLeave, 300);
        return _this;
    }

    _createClass(File, [{
        key: 'addFiles',
        value: function addFiles(files) {
            var array = Array.prototype.slice.call(files, 0);

            this.props.onRequestAdd(this.props.allowMultiple ? array : [array[0]]);

            this.fileCount += 1;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                accept = _props.accept,
                allowMultiple = _props.allowMultiple,
                children = _props.children,
                className = _props.className,
                error = _props.error,
                help = _props.help,
                onRequestRemove = _props.onRequestRemove,
                size = _props.size,
                otherProps = _objectWithoutProperties(_props, ['accept', 'allowMultiple', 'children', 'className', 'error', 'help', 'onRequestRemove', 'size']);

            var childrenCloned = _react.Children.toArray(children).filter(_react.isValidElement).map(function (item, index) {
                var handleRemove = function handleRemove(event) {
                    onRequestRemove({
                        event: event,
                        index: index,
                        itemId: item.props.itemId,
                        name: item.props.name
                    });
                };
                return (0, _react.cloneElement)(item, {
                    onClick: handleRemove,
                    key: item.props.itemId || 'item-' + index,
                    size: size === 'small' ? 'small' : null
                });
            });

            /* eslint-disable max-len */
            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    className: (0, _toClassName2.default)(_File2.default[size + 'DropTarget'], className),
                    onDragOver: size === 'medium' ? this.handleDragOver : null,
                    onDragLeave: size === 'medium' ? this.handleDragLeave : null,
                    onDrop: size === 'medium' ? this.handleDrop : null,
                    'data-drag-over': this.state.dragOver || null,
                    'data-error': error || null
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(otherProps, 'onRequestAdd', 'onRequestRemove')),
                _react2.default.createElement(
                    'div',
                    { className: _File2.default[size + 'Text'] },
                    size !== 'small' && _react2.default.createElement(
                        'svg',
                        {
                            className: _File2.default[size + 'Icon'],
                            viewBox: '0 0 72 88',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg'
                        },
                        _react2.default.createElement('path', { d: 'M50,27 L68.0005854,27 C70.2022516,27 72,28.7919267 72,31.0023804 L72,83.9976196 C72,86.2074215 70.2094011,88 68.0005854,88 L3.99941455,88 C1.79774843,88 0,86.2080733 0,83.9976196 L0,31.0023804 C0,28.7925785 1.79059889,27 3.99941455,27 L21,27 L21,32 L5.99898406,32 C5.4472604,32 5,32.4408979 5,32.9958767 L5,82.0041233 C5,82.5541308 5.44605521,83 5.99898406,83 L66.0010159,83 C66.5527396,83 67,82.5591021 67,82.0041233 L67,32.9958767 C67,32.4458692 66.5539448,32 66.0010159,32 L50,32 L50,27 Z' }),
                        _react2.default.createElement('path', { d: 'M41.9634682,10 L41.9634682,28 L46.9634682,28 L46.9634682,5 L44.4634682,5 L23.9634682,5 L23.9634682,10 L41.9634682,10 Z', transform: 'translate(35.463468, 16.500000) rotate(-45.000000) translate(-35.463468, -16.500000) ' }),
                        _react2.default.createElement('rect', { x: '33', y: '3', width: '5', height: '51' })
                    ),
                    ' ',
                    size !== 'large' && (0, _i18n._)('Drop your file here or'),
                    size === 'large' && (0, _i18n._)('Drop your file anywhere or'),
                    ' ',
                    _react2.default.createElement(
                        'label',
                        {
                            htmlFor: this.guid,
                            className: _File2.default.link,
                            'data-focused': this.state.focusedInput || null
                        },
                        _react2.default.createElement('input', {
                            className: _File2.default.input,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            id: this.guid,
                            key: 'file-input-' + this.fileCount,
                            type: 'file',
                            multiple: allowMultiple || null,
                            accept: accept
                        }),
                        (0, _i18n._)('browse...')
                    ),
                    ' '
                ),
                size === 'large' && _react2.default.createElement(
                    'div',
                    { className: _File2.default.help },
                    help
                ),
                size === 'large' && this.state.dragOver && _react2.default.createElement('div', {
                    className: _File2.default.windowDrop,
                    onDragLeave: this.handleDragLeave
                }),
                size === 'large' && _react2.default.createElement(_reactEventListener2.default, {
                    target: window,
                    onDragOver: this.handleDragOver,
                    onDrop: this.handleDrop
                }),
                childrenCloned
            );
            /* eslint-enable max-len */
        }
    }]);

    return File;
}(_react.Component);

File.propTypes = {
    /** The accept attribute for the file browser. This does not filter dropped items,
     * which must be filtered manually. */
    accept: _propTypes2.default.string,
    /** Allow the user to upload multiple files. */
    allowMultiple: _propTypes2.default.bool,
    /** @docs-ignore */
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** Show the component in an error state. This has no affect on the large size.
     * Note, File.Item has a separate error property. */
    error: _propTypes2.default.bool,
    /** When size is large, help text can be shown. */
    help: _propTypes2.default.node,
    /** A callback for when the user selects one or more files. The function is
     * passed a file reference, which can then be used to read the file. This may
     * be used to enforce file constraints or upload the file. */
    onRequestAdd: _propTypes2.default.func,
    /** A callback for when the user requests to remove a file. The function is passed
     * the event and an object with the Item's index and name: `(event, {index, name})`. */
    onRequestRemove: _propTypes2.default.func,
    /** `medium` appears much like a native file input. `small` is for use on highly complex
     * pages, where data density is an issue. When `large` is used, there can only
     * be one File component on the page as it will take all files dropped on the page. */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large'])
};
File.defaultProps = {
    allowMultiple: false,
    error: false,
    onRequestRemove: _lodash.noop,
    size: 'medium'
};
File.Item = _Item2.default;
exports.default = File;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/File/File.jsx"))

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


/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Progress");

/***/ })

/******/ });