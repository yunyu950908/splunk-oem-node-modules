/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultTheme = defaultTheme;

/**
 * A set of functions for dealing with Splunk themes.
 * @file
 */

/**
 * Determines a default theme name based on the current environment (such as `$C`).
 *
 * @param {Object} [scope=window (if available)] - The environment.
 * @return {String} The theme name (`enterprise`, `lite`, ...)
 * @public
 */
function defaultTheme() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof window !== 'undefined' ? window : null;

    if (!scope) {
        return 'enterprise';
    }

    /* eslint-disable no-underscore-dangle */
    var partialsTheme = scope.__splunkd_partials__ && scope.__splunkd_partials__['/services/server/info'] && scope.__splunkd_partials__['/services/server/info'].entry[0].content.product_type;
    var scopeTheme = scope.__splunk_ui_theme__;
    /* eslint-enable no-underscore-dangle */

    var cTheme = scope.$C && scope.$C.SPLUNK_UI_THEME;
    return scopeTheme || cTheme || partialsTheme || 'enterprise';
}