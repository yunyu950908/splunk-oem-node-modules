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
/******/ 	return __webpack_require__(__webpack_require__.s = 423);
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

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-event-listener");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Popover.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Popover.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/focus");

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getPlacement;

var _errorHandling = __webpack_require__(10);

function getInitialStyle(_ref) {
    var anchorPos = _ref.anchorPos,
        placement = _ref.placement,
        outerContainerEl = _ref.outerContainerEl;

    switch (placement) {
        case 'above':
            return {
                top: anchorPos.top - outerContainerEl.offsetHeight,
                left: anchorPos.middle - outerContainerEl.offsetWidth / 2
            };
        case 'below':
            return {
                top: anchorPos.bottom,
                left: anchorPos.middle - outerContainerEl.offsetWidth / 2
            };
        case 'left':
            return {
                top: anchorPos.center - outerContainerEl.offsetHeight / 2,
                left: anchorPos.left - outerContainerEl.offsetWidth
            };
        case 'right':
            return {
                top: anchorPos.center - outerContainerEl.offsetHeight / 2,
                left: anchorPos.right
            };
        default:
            if (process.env.NODE_ENV !== "production") {
                (0, _errorHandling.invariant)(placement + ' is not a valid placement value. Valid options are:\n                    \'above\', \'below\', \'left\', or \'right\'');
            }
            return {};
    }
}

function getPlacement(args) {
    var anchorPos = args.anchorPos,
        scrollContainerPos = args.scrollContainerPos,
        canCoverAnchor = args.canCoverAnchor,
        defaultPlacement = args.defaultPlacement,
        outerContainerEl = args.outerContainerEl,
        repositionMode = args.repositionMode,
        windowHeight = args.windowHeight,
        windowWidth = args.windowWidth;

    var repositionFlip = repositionMode === 'flip';
    var repositionAny = repositionMode === 'any';
    var canReposition = repositionFlip || repositionAny;
    var placement = args.placement || defaultPlacement;

    // Translate vertical/horizontal to above/below/left/right
    if (defaultPlacement === 'vertical') {
        placement = anchorPos.top > windowHeight - anchorPos.bottom ? 'above' : 'below';
    } else if (defaultPlacement === 'horizontal') {
        placement = anchorPos.left > windowWidth - anchorPos.right ? 'left' : 'right';
    }

    // Initialize the result variables. These will be mutated as needed and returned.

    var _getInitialStyle = getInitialStyle({ anchorPos: anchorPos, outerContainerEl: outerContainerEl, placement: placement }),
        top = _getInitialStyle.top,
        left = _getInitialStyle.left;

    var bottom = 'auto';
    var maxWidth = windowWidth;
    var maxHeight = windowHeight;

    // Boolean convenience variables to simplify positioning logic.
    var canPlaceAbove = anchorPos.top - outerContainerEl.offsetHeight > 0;
    var canPlaceBelow = anchorPos.bottom + outerContainerEl.offsetHeight < windowHeight;
    var canPlaceLeft = anchorPos.left - outerContainerEl.offsetWidth > 0;
    var canPlaceRight = anchorPos.right + outerContainerEl.offsetWidth < windowWidth;
    var offScreenRight = anchorPos.middle + outerContainerEl.offsetWidth / 2 > windowWidth;
    var offScreenLeft = anchorPos.middle - outerContainerEl.offsetWidth / 2 < 0;
    var offScreenTop = anchorPos.top - outerContainerEl.offsetHeight / 2 < 0;
    var offScreenBottom = anchorPos.bottom + outerContainerEl.offsetHeight / 2 > windowHeight;

    // Handle each of the four placement options individually.
    if (placement === 'above') {
        if (!canPlaceAbove && canReposition) {
            if (canPlaceBelow) {
                return getPlacement(_extends({}, args, { placement: 'below' }));
            } else if (repositionAny && canPlaceRight) {
                return getPlacement(_extends({}, args, { placement: 'right' }));
            } else if (repositionAny && canPlaceLeft) {
                return getPlacement(_extends({}, args, { placement: 'left' }));
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (placement !== 'misaligned') {
            bottom = windowHeight - top - outerContainerEl.offsetHeight;
            if (scrollContainerPos) {
                bottom = Math.min(bottom, windowHeight - scrollContainerPos.top);
            }
            top = 'auto';
        }

        if (offScreenRight) {
            left = Math.max(windowWidth - outerContainerEl.offsetWidth, 0);
        } else if (offScreenLeft) {
            left = 0;
        }

        if (!canCoverAnchor) {
            maxHeight = anchorPos.top;
        }
    }

    if (placement === 'below') {
        if (!canPlaceBelow && canReposition) {
            if (canPlaceAbove) {
                return getPlacement(_extends({}, args, { placement: 'above' }));
            } else if (repositionAny && canPlaceRight) {
                return getPlacement(_extends({}, args, { placement: 'right' }));
            } else if (repositionAny && canPlaceLeft) {
                return getPlacement(_extends({}, args, { placement: 'left' }));
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (scrollContainerPos) {
            top = Math.min(top, scrollContainerPos.bottom);
        }

        if (offScreenRight) {
            left = Math.max(windowWidth - outerContainerEl.offsetWidth, 0);
        } else if (offScreenLeft) {
            left = 0;
        }

        if (!canCoverAnchor) {
            maxHeight = windowHeight - anchorPos.bottom;
        }
    }

    if (placement === 'left') {
        if (!canPlaceLeft && canReposition) {
            if (canPlaceRight) {
                return getPlacement(_extends({}, args, { placement: 'right' }));
            } else if (repositionAny && canPlaceBelow) {
                return getPlacement(_extends({}, args, { placement: 'below' }));
            } else if (repositionAny && canPlaceAbove) {
                return getPlacement(_extends({}, args, { placement: 'above' }));
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (offScreenTop) {
            top = 0;
        } else if (offScreenBottom) {
            top = Math.max(windowHeight - outerContainerEl.offsetHeight, 0);
        }

        if (!canCoverAnchor) {
            maxWidth = anchorPos.left;
        }
    }

    if (placement === 'right') {
        if (!canPlaceRight && canReposition) {
            if (canPlaceLeft) {
                return getPlacement(_extends({}, args, { placement: 'left' }));
            } else if (repositionAny && canPlaceBelow) {
                return getPlacement(_extends({}, args, { placement: 'below' }));
            } else if (repositionAny && canPlaceAbove) {
                return getPlacement(_extends({}, args, { placement: 'above' }));
            } else if (canCoverAnchor) {
                placement = 'misaligned';
                top = 0;
            }
        }

        if (offScreenTop) {
            top = 0;
        } else if (offScreenBottom) {
            top = Math.max(windowHeight - outerContainerEl.offsetHeight, 0);
        }

        if (!canCoverAnchor) {
            maxWidth = windowWidth - anchorPos.left;
        }
    }

    return {
        placement: placement,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        outerContainerStyle: { top: top, left: left, bottom: bottom }
    };
}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/RenderToLayer");

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_Popover__guid__46ca4d{position:fixed;z-index:1060;left:-300%;top:-300%}.boxWrapper_Popover__guid__46ca4d{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;padding:8px}.box_Popover__guid__46ca4d{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;background-color:transparent}.light_Popover__guid__46ca4d{background-color:#fff;color:#333;border:1px solid #ccc;-webkit-box-shadow:0 3px 7px rgba(0,0,0,.3);box-shadow:0 3px 7px rgba(0,0,0,.3);border-radius:3px}.dark_Popover__guid__46ca4d{border-radius:4px;background-color:#333;color:#fff}.arrow_Popover__guid__46ca4d{width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;position:absolute;border-bottom:8px solid #ccc}@media (-ms-high-contrast:none){.arrow_Popover__guid__46ca4d{opacity:inherit}}.lightArrow_Popover__guid__46ca4d:before{content:\"\";display:block;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff;position:absolute;top:1px;left:0;margin-left:-8px}.darkArrow_Popover__guid__46ca4d{border-bottom-color:#333}.lowerRightCorner_Popover__guid__46ca4d{position:fixed;right:0;bottom:0}","lite":".main_Popover__guid__46ca4d{position:fixed;z-index:1060;left:-300%;top:-300%}.boxWrapper_Popover__guid__46ca4d{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;padding:8px}.box_Popover__guid__46ca4d{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;background-color:transparent}.light_Popover__guid__46ca4d{background-color:#fff;color:#333;border:1px solid #ccc;-webkit-box-shadow:0 3px 7px rgba(0,0,0,.3);box-shadow:0 3px 7px rgba(0,0,0,.3);border-radius:0}.dark_Popover__guid__46ca4d{border-radius:2px;background-color:#333;color:#fff}.arrow_Popover__guid__46ca4d{width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;position:absolute;border-bottom:8px solid #ccc}@media (-ms-high-contrast:none){.arrow_Popover__guid__46ca4d{opacity:inherit}}.lightArrow_Popover__guid__46ca4d:before{content:\"\";display:block;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff;position:absolute;top:1px;left:0;margin-left:-8px}.darkArrow_Popover__guid__46ca4d{border-bottom-color:#333}.lowerRightCorner_Popover__guid__46ca4d{position:fixed;right:0;bottom:0}"};
var themeLocals = {"enterprise":{"main":"main_Popover__guid__46ca4d","boxWrapper":"boxWrapper_Popover__guid__46ca4d","box":"box_Popover__guid__46ca4d","light":"light_Popover__guid__46ca4d box_Popover__guid__46ca4d","dark":"dark_Popover__guid__46ca4d box_Popover__guid__46ca4d","arrow":"arrow_Popover__guid__46ca4d","lightArrow":"lightArrow_Popover__guid__46ca4d arrow_Popover__guid__46ca4d","darkArrow":"darkArrow_Popover__guid__46ca4d arrow_Popover__guid__46ca4d","lowerRightCorner":"lowerRightCorner_Popover__guid__46ca4d"},"lite":{"main":"main_Popover__guid__46ca4d","boxWrapper":"boxWrapper_Popover__guid__46ca4d","box":"box_Popover__guid__46ca4d","light":"light_Popover__guid__46ca4d box_Popover__guid__46ca4d","dark":"dark_Popover__guid__46ca4d box_Popover__guid__46ca4d","arrow":"arrow_Popover__guid__46ca4d","lightArrow":"lightArrow_Popover__guid__46ca4d arrow_Popover__guid__46ca4d","darkArrow":"darkArrow_Popover__guid__46ca4d arrow_Popover__guid__46ca4d","lowerRightCorner":"lowerRightCorner_Popover__guid__46ca4d"}};
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

/***/ 423:
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

var _reactEventListener = __webpack_require__(14);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _reactMotion = __webpack_require__(17);

var _lodash = __webpack_require__(6);

var _focus = __webpack_require__(24);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _RenderToLayer = __webpack_require__(34);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _getPlacement2 = __webpack_require__(243);

var _getPlacement3 = _interopRequireDefault(_getPlacement2);

var _Popover = __webpack_require__(201);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Adapted from
// https://github.com/callemall/material-ui/blob/master/src/Popover/Popover.js

// eslint-disable-line max-len


function everyApproxEqual(a, b) {
    var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return !!a && !!b && (0, _lodash.every)(a, function (val, key) {
        if ((0, _lodash.isFinite)(val)) {
            return Math.abs(b[key] - val) <= threshold;
        }
        return b[key] === val;
    });
}

/**
* Popover is used to create layovers such as dropdowns, contextual menus or tooltips. Only use
* this when the other components do not provide sufficient functionality or control. A controlled
* Dropdown will cover use cases where one would consider using Popover directly.
*/

var Popover = function (_Component) {
    _inherits(Popover, _Component);

    _createClass(Popover, null, [{
        key: 'getElPosition',
        value: function getElPosition(anchorEl) {
            var rect = anchorEl.getBoundingClientRect();
            var a = {
                top: rect.top,
                left: rect.left,
                width: anchorEl.offsetWidth,
                height: anchorEl.offsetHeight
            };

            a.right = rect.right || a.left + a.width;
            a.bottom = rect.bottom || a.top + a.height;
            a.middle = a.left + (a.right - a.left) / 2;
            a.center = a.top + (a.bottom - a.top) / 2;

            return a;
        }
    }, {
        key: 'getArrowStyle',
        value: function getArrowStyle(_ref) {
            var anchorPos = _ref.anchorPos,
                placement = _ref.placement,
                outerContainerStyle = _ref.outerContainerStyle,
                outerContainerEl = _ref.outerContainerEl;

            if (placement === 'misaligned') {
                return { display: 'none' };
            }

            var style = {
                top: null,
                right: null,
                bottom: null,
                left: null,
                display: 'block'
            };

            var ah = 8; // arrowHeight === arrowHalfWidth
            var maxVertDiff = outerContainerEl.offsetHeight / 2 - 22;
            var minVertDiff = -(outerContainerEl.offsetHeight / 2 - 15);
            var initVertDiff = anchorPos.center - (outerContainerStyle.top + outerContainerEl.offsetHeight / 2) - ah / 2;
            var vertDiff = (0, _lodash.clamp)(initVertDiff, minVertDiff, maxVertDiff);

            var horizontalDiff = anchorPos.middle - (outerContainerStyle.left + outerContainerEl.offsetWidth / 2) - ah;
            var transform = {
                left: 'translate(' + ah / 2 + 'px, ' + vertDiff + 'px) rotate(90deg)',
                right: 'translate(-' + ah / 2 + 'px, ' + vertDiff + 'px) rotate(-90deg)',
                above: 'translateX(' + horizontalDiff + 'px) rotate(180deg)',
                below: 'translateX(' + horizontalDiff + 'px) rotate(0)'
            };
            style.transform = transform[placement];

            // set new positions
            var origin1 = {
                left: 'right',
                right: 'left',
                above: 'bottom',
                below: 'top'
            };
            style[origin1[placement]] = '1px';

            var origin2 = {
                left: 'top',
                right: 'top',
                above: 'left',
                below: 'left'
            };
            style[origin2[placement]] = '50%';

            return style;
        }
    }]);

    function Popover(props) {
        var _ref2;

        _classCallCheck(this, Popover);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref2 = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref2, [this, props].concat(rest)));

        _initialiseProps.call(_this);

        _this.handleScroll = (0, _lodash.throttle)(_this.setPlacement.bind(_this, true), 0);
        _this.setPlacement = (0, _lodash.throttle)(_this.setPlacement, 0, { leading: false });

        _this.state = {
            animating: false,
            anchorEl: null
        };
        return _this;
    }

    _createClass(Popover, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                anchor = _props.anchor,
                open = _props.open;

            if (anchor && open) {
                this.setState({ // eslint-disable-line react/no-did-mount-set-state
                    anchorEl: (0, _reactDom.findDOMNode)(anchor)
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.open !== nextProps.open) {
                this.setState({
                    animating: nextProps.animation
                });
            }
            if (this.props.anchor !== nextProps.anchor) {
                this.setState({
                    anchorEl: nextProps.anchor ? (0, _reactDom.findDOMNode)(nextProps.anchor) : null
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (!this.innerContainerEl) {
                return;
            }

            if (this.props.open || this.state.animating) {
                this.setPlacement();

                if (!prevProps.open && this.props.takeFocus) {
                    (0, _focus.takeFocus)(this.innerContainerEl);
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.setPlacement.cancel();
            this.handleScroll.cancel();
            clearTimeout(this.timeout);
        }
    }, {
        key: 'autoCloseWhenOffScreen',
        value: function autoCloseWhenOffScreen(anchorPosition, scrollContainerPosition) {
            if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
                this.requestClose({
                    reason: 'offScreen'
                });
                return true;
            }
            if (scrollContainerPosition) {
                if (anchorPosition.height + anchorPosition.top < scrollContainerPosition.top || anchorPosition.top > scrollContainerPosition.bottom || anchorPosition.width + anchorPosition.left < scrollContainerPosition.left || anchorPosition.left > scrollContainerPosition.right) {
                    this.requestClose({
                        reason: 'offScreen'
                    });
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'requestClose',
        value: function requestClose(data) {
            if ((0, _lodash.includes)(this.props.closeReasons, data.reason)) {
                this.props.onRequestClose(data);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: { display: 'none' } },
                _react2.default.createElement(_reactEventListener2.default, {
                    target: this.props.scrollContainer || 'window',
                    onScroll: this.handleScroll,
                    onResize: this.setPlacement
                }),
                _react2.default.createElement(_RenderToLayer2.default, {
                    closeReasons: (0, _lodash.intersection)(this.props.closeReasons, _RenderToLayer2.default.possibleCloseReasons),
                    ref: function ref(c) {
                        return _this2.layer = c;
                    },
                    open: this.props.open || this.state.animating,
                    onRequestClose: this.handleRequestClose,
                    useLayerForClickAway: this.props.useLayerForClickAway,
                    render: this.renderLayer
                })
            );
        }
    }]);

    return Popover;
}(_react.Component);

Popover.possibleCloseReasons = ['clickAway', 'escapeKey', 'offScreen'];
Popover.propTypes = {
    /**
     * This is the element or component that will be used to set the position of the popover. It
     * is required when the Popover is open and must be mounted.
     */
    anchor: function anchor(props) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
        }

        // eslint-disable-line consistent-return
        if (props.open) {
            var _PropTypes$object;

            return (_PropTypes$object = _propTypes2.default.object).isRequired.apply(_PropTypes$object, [props].concat(rest));
        }
    },
    /**
     * If true, the popover will apply transitions when
     * it is added to the DOM.
     */
    animation: _propTypes2.default.bool,
    /**
     * The light appearance is used for menus, while the dark appearance is for tooltips.
     * None is a transparent box.
     */
    appearance: _propTypes2.default.oneOf(['light', 'dark', 'none']),
    /**
     * If true, the popover will hide when the anchor is scrolled off the screen.
     */
    autoCloseWhenOffScreen: _propTypes2.default.bool,
    /**
     * If there is not enough room to render the `Popover` in a direction, this option enables
     * it to be rendered over the anchor.
     */
    canCoverAnchor: _propTypes2.default.bool,
    /**
     * The content of the `Popover`. If a function is provided, it will be invoked with an
     * object containing `anchorHeight`, `anchorWidth`, `maxHeight`, `maxWidth`, and
     * `placement`.
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
    /**
     * @docs-ignore.
     */
    className: _propTypes2.default.string,
    /**
     * An array of reasons for which this Popover should close.
     */
    closeReasons: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(Popover.possibleCloseReasons)),
    /**
     * The default placement of the `Popover`. It might be rendered in a different direction
     * depending upon the space available and the `repositionMode`.
     */
    defaultPlacement: _propTypes2.default.oneOf(['above', 'below', 'left', 'right', 'vertical', 'horizontal']),
    /**
     * @docs-ignore.
     */
    id: _propTypes2.default.string,
    /**
     * Callback function fired when the popover is requested to be closed.
     *
     * @param {object} data
     * @param {string} data.reason The reason for the close request.
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * If true, the popover is visible.
     */
    open: _propTypes2.default.bool,
    /**
     * If the `Popover` does not fit in the `defaultPlacement`, `repositionMode` determines if
     * and how the `Popover` will reposition itself to fit on the page.
     *     * `none` - Do not reposition the `Popover`. It will always render in the
     * `defaultPlacement` direction.
     *     * `flip` - Allows the `Popover` to reposition to the opposite of the
     *                `defaultPlacement`
     * if it can fit there (and not in the `defaultPlacement`).
     *     * `any` - Allows the `Popover` to reposition in any direction if it can fit on the
     *               page.
     */
    repositionMode: _propTypes2.default.oneOf(['none', 'flip', 'any']),
    /**
     * Keep focus within the Popover while open.
     */
    retainFocus: _propTypes2.default.bool,
    /**
     * The container with which the popover must scroll to stay aligned with the anchor.
     */
    scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    /**
     * When true, the Popover will automatically take focus when 'open' changes to true.
     * Disable this for a Popover that has shows on hover, such as a tooltip.
     */
    takeFocus: _propTypes2.default.bool,
    /**
     * If true, the popover will render on top of an invisible
     * layer, which will prevent clicks to the underlying
     * elements, and toggle an `onRequestClose('clickAway')` call.
     */
    useLayerForClickAway: _propTypes2.default.bool
};
Popover.defaultProps = {
    animation: true,
    appearance: 'light',
    autoCloseWhenOffScreen: true,
    canCoverAnchor: false,
    closeReasons: Popover.possibleCloseReasons,
    defaultPlacement: 'below',
    onRequestClose: _lodash.noop,
    open: false,
    repositionMode: 'flip',
    retainFocus: true,
    scrollContainer: 'window',
    takeFocus: false,
    useLayerForClickAway: false
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setPlacement = function (scrolling) {
        // If these conditions are not met, we cannot set the popover.
        if (!_this3.props.open || !_this3.outerContainer || !_this3.props.anchor) {
            return;
        }

        var _props2 = _this3.props,
            autoCloseWhenOffScreen = _props2.autoCloseWhenOffScreen,
            canCoverAnchor = _props2.canCoverAnchor,
            defaultPlacement = _props2.defaultPlacement,
            repositionMode = _props2.repositionMode,
            scrollContainer = _props2.scrollContainer;

        var outerContainerEl = (0, _reactDom.findDOMNode)(_this3.outerContainer);
        var anchorPos = Popover.getElPosition(_this3.state.anchorEl);
        var scrollContainerPos = scrollContainer !== 'window' && Popover.getElPosition(scrollContainer);

        if (scrolling && autoCloseWhenOffScreen) {
            if (_this3.autoCloseWhenOffScreen(anchorPos, scrollContainerPos)) {
                return;
            }
        }

        var _getPlacement = (0, _getPlacement3.default)({
            anchorPos: anchorPos,
            scrollContainerPos: scrollContainerPos,
            canCoverAnchor: canCoverAnchor,
            defaultPlacement: defaultPlacement,
            repositionMode: repositionMode,
            outerContainerEl: outerContainerEl,
            windowWidth: _this3.windowSizeMeasurementEl.offsetLeft,
            windowHeight: _this3.windowSizeMeasurementEl.offsetTop
        }),
            placement = _getPlacement.placement,
            outerContainerStyle = _getPlacement.outerContainerStyle,
            maxHeight = _getPlacement.maxHeight,
            maxWidth = _getPlacement.maxWidth;

        var arrowStyle = _this3.arrow && Popover.getArrowStyle({
            anchorPos: anchorPos,
            outerContainerStyle: outerContainerStyle,
            placement: placement,
            outerContainerEl: outerContainerEl
        });

        // If none of the position data has changed, do not set state.
        if (everyApproxEqual(anchorPos, _this3.state.anchorPos) && everyApproxEqual(outerContainerStyle, _this3.state.outerContainerStyle) && everyApproxEqual(arrowStyle, _this3.state.arrowStyle) && placement === _this3.state.placement && maxHeight === _this3.state.maxHeight && maxWidth === _this3.state.maxWidth) {
            return;
        }
        _this3.setState({
            anchorPos: anchorPos,
            arrowStyle: arrowStyle,
            outerContainerStyle: outerContainerStyle,
            placement: placement,
            maxHeight: maxHeight,
            maxWidth: maxWidth
        });
    };

    this.handleInnerContainerMount = function (element) {
        _this3.innerContainerEl = element;
        if (element && _this3.props.takeFocus) {
            (0, _lodash.defer)(_focus.takeFocus, element);
        }
    };

    this.handleTab = function (e) {
        (0, _focus.handleTab)(_this3.innerContainerEl, e);
    };

    this.handleRequestClose = function (data) {
        if (_this3.props.open) {
            _this3.requestClose(data);
        }
    };

    this.handleAnimationEnd = function () {
        _this3.setState({
            animating: false
        });
    };

    this.renderLayer = function () {
        var _props3 = _this3.props,
            animation = _props3.animation,
            appearance = _props3.appearance,
            children = _props3.children,
            className = _props3.className,
            id = _props3.id,
            open = _props3.open;
        var _state = _this3.state,
            anchorPos = _state.anchorPos,
            arrowStyle = _state.arrowStyle,
            outerContainerStyle = _state.outerContainerStyle,
            placement = _state.placement;
        var _state2 = _this3.state,
            maxHeight = _state2.maxHeight,
            maxWidth = _state2.maxWidth;

        // Accomodate the arrow in the maxHeight and maxWidth.

        if (appearance !== 'none') {
            if ((0, _lodash.isFinite)(maxHeight)) {
                maxHeight -= 20;
            }
            if ((0, _lodash.isFinite)(maxWidth)) {
                maxWidth -= 20;
            }
        }

        var childData = {
            anchorHeight: anchorPos ? anchorPos.height : null,
            anchorWidth: anchorPos ? anchorPos.width : null,
            placement: placement,
            maxHeight: maxHeight,
            maxWidth: maxWidth
        };

        var motionStyle = animation ? {
            opacity: (0, _reactMotion.spring)(open ? 1 : 0, { stiffness: 300, damping: 40, precision: 1 })
        } : {
            opacity: 1
        };
        var boxClasses = appearance === 'none' ? (0, _toClassName2.default)(_Popover2.default.box, className) : _Popover2.default.boxWrapper;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return _react2.default.createElement(
            _reactMotion.Motion,
            {
                defaultStyle: { opacity: animation ? 0 : 1 },
                style: motionStyle,
                onRest: _this3.handleAnimationEnd
            },
            function (_ref3) {
                var opacity = _ref3.opacity;
                return _react2.default.createElement(
                    'div',
                    _extends({
                        style: _extends({}, outerContainerStyle, { opacity: opacity }),
                        className: _Popover2.default.main,
                        id: id
                    }, (0, _testSupport.createTestHook)(__filename), {
                        ref: function ref(c) {
                            return _this3.outerContainer = c;
                        }
                    }),
                    (open || _this3.state.animating) && _react2.default.createElement(
                        'div',
                        _extends({
                            className: boxClasses,
                            ref: _this3.handleInnerContainerMount,
                            tabIndex: -1,
                            'data-popover-role': 'container',
                            onKeyDown: _this3.props.retainFocus ? _this3.handleTab : null
                        }, (0, _lodash.omit)(_this3.props, (0, _lodash.keys)(Popover.propTypes))),
                        appearance === 'none' && children,
                        appearance !== 'none' && _react2.default.createElement('div', {
                            className: _Popover2.default[appearance + 'Arrow'],
                            ref: function ref(arrow) {
                                return _this3.arrow = arrow;
                            },
                            style: arrowStyle
                        }),
                        appearance !== 'none' && _react2.default.createElement(
                            'div',
                            { className: (0, _toClassName2.default)(_Popover2.default[appearance], className) },
                            (0, _lodash.isFunction)(children) ? children(childData) : children
                        )
                    ),
                    _react2.default.createElement('div', {
                        className: _Popover2.default.lowerRightCorner,
                        ref: function ref(el) {
                            return _this3.windowSizeMeasurementEl = el;
                        }
                    })
                );
            }
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    };
};

exports.default = Popover;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Popover/Popover.jsx"))

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