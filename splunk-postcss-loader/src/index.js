// TODO: Update this file to modern javascript! It is no longer required to be written in es5.
/* This file is written in es5, and disables many eslint features */
/* eslint-disable */

/*
    Modified version of postcss-loader:
    https://github.com/postcss/postcss-loader/blob/master/index.js

    Plus modified version of css-loader:
    https://github.com/postcss/postcss-loader/blob/master/index.js
*/

var path = require('path');
var postcss = require('postcss');
var loaderUtils = require('loader-utils');
var crypto = require('crypto');
var forEach = require('lodash/forEach');

var AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 11',
    'Edge >= 1',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
];

function PostCSSLoaderError(error) {
    Error.call(this);
    Error.captureStackTrace(this, PostCSSLoaderError);
    this.name = 'Syntax Error';
    this.error = error.input.source;
    this.message = error.reason;
    if (error.line) {
        this.message += '(' + error.line + ':' + error.column + ')';
    }
    if (error.line && error.input.source) {
        this.message += '\n' +
                '\n' +
                '' + error.showSourceCode() + '\n' +
                '';
    }
    this.hideStack = true;
}
PostCSSLoaderError.prototype = Object.create(Error.prototype);
PostCSSLoaderError.prototype.constructor = PostCSSLoaderError;


function themeLoader(source) { // readd map as second option.
    var file = this.resourcePath;
    var params = loaderUtils.parseQuery(this.query);
    var debug = params.debug;
    var callback = this.async();
    var loader = this;

    var postcssOptions = {
        from: file,
        to: file,
        map: {
            inline: params.sourceMap === 'inline',
            annotation: false
        }
    };

    var hashes = {};
    var themeLocals = {};
    var themeCSS = {};
    var themes = ['enterprise', 'lite'];

    function generateScopedName(name, filename) {
        hashes.filename = hashes.filename ||
            crypto.createHash('md5').update(filename).digest('hex').substr(0, 6);
        var shortfile = path.basename(filename, path.extname(filename));

        return name + '_' + shortfile + '__guid__' + hashes.filename;
    }

    function loadtheme(theme) {
        function prepareCallback() {
            if (Object.keys(themeCSS).length < themes.length ||
                Object.keys(themeLocals).length < themes.length) {
                return;
            }

            callback(null,
                'var styles = ' + JSON.stringify(themeCSS) + ';\n' +
                'var themeLocals = ' + JSON.stringify(themeLocals) + ';\n' +
                'var isLite =\n' +
                '    window.__splunkd_partials__ &&\n' +
                '    window.__splunkd_partials__[\'/services/server/info\'] &&\n' +
                '    window.__splunkd_partials__[\'/services/server/info\']\n' +
                '        .entry[0].content.product_type === \'lite\';\n' +

                'var theme = window.__splunk_ui_theme__ || (isLite ? \'lite\' : \'enterprise\');\n' +
                '\n' +
                'function s4() {\n' +
                '  return Math.floor((1 + Math.random()) * 0x10000)\n' +
                '    .toString(16)\n' +
                '    .substring(1);\n' +
                '}\n' +

                'var guid = module.guid ||  s4() + s4() + s4() + s4();\n' +

                '// Add guid to locals\n' +
                'Object.keys(themeLocals[theme]).forEach(function(className) {\n' +
                '    var value = themeLocals[theme][className];\n' +
                '    themeLocals[theme][className] =\n' +
                '        value.replace(/_guid_/g, guid);\n' +
                ' });\n' +

                '//  Add guid to styles\n' +
                'styles[theme] = styles[theme].replace(/_guid_/g, guid);\n' +

                'module.exports = [[module.id, styles[theme], \'\']];\n' +
                'module.exports.locals = themeLocals[theme];\n' +
                'module.guid = guid;\n'
            );

        }

        function receiveCSS(result) {
            themeCSS[theme] = result.css;
            prepareCallback();
        }

        function receiveJSON(filename, json) {
            themeLocals[theme] = json;
            prepareCallback();
        }

        function catchError(error) {
            if (error.name === 'CssSyntaxError') {
                callback(new PostCSSLoaderError(error));
            } else {
                callback(error);
            }
        }

        var postcssPlugins = [
            // Add imports for variables and mixins
            require('./importMixinsAndVars')(theme),

            // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
            // https://github.com/postcss/postcss-import
            require('postcss-import')(),

            // Sass like mixins with @define-mixin and @mixin
            // https://github.com/postcss/postcss-mixins
            require('postcss-mixins'),

            // Simple numeric @for loops.
            // https://github.com/antyakushev/postcss-for
            require('postcss-for'),

            // Base 64 encodes urls, such as fonts and images.
            // https://github.com/postcss/postcss-url
            // This needs to come before the vars plugin to ensure that paths are resolved before
            // variable replacement.
            require('postcss-url')({ url: 'inline', maxSize: 100 }),

            // Sass-like $variables
            // https://github.com/postcss/postcss-simple-vars
            require('postcss-simple-vars')(),

            // @if statements.
            // https://github.com/andyjansson/postcss-conditionals
            require('postcss-conditionals'),

            // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
            // https://github.com/postcss/postcss-custom-media
            require('postcss-custom-media')(),

            // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
            // https://github.com/postcss/postcss-media-minmax
            require('postcss-media-minmax')(),

            // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
            // https://github.com/postcss/postcss-custom-selectors
            require('postcss-custom-selectors')(),

            // W3C calc() function, e.g. div { height: calc(100px - 2em); }
            // https://github.com/postcss/postcss-calc
            require('postcss-calc')(),

            // W3C color() function, e.g. div { background: color(red alpha(90%)); }
            // https://github.com/postcss/postcss-color-function
            require('postcss-color-function')(),

            // Resets any css property back to it's default. Also supports all: initial.
            // https://github.com/maximkoretskiy/postcss-initial
            require('postcss-initial'),

            // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
            // https://github.com/iamvdo/pleeease-filters
            require('pleeease-filters')(),

            // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
            // https://github.com/postcss/postcss-selector-matches
            require('postcss-selector-matches')(),

            // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
            // https://github.com/postcss/postcss-selector-not
            require('postcss-selector-not')(),

            // Add vendor prefixes to CSS rules using values from caniuse.com
            // https://github.com/postcss/autoprefixer
            require('autoprefixer')({
                browsers: AUTOPREFIXER_BROWSERS
            }),

            // Allows you to nest one style rule inside another with Sass syntax
            // https://github.com/postcss/postcss-nested
            require('postcss-nested'),

            // A CSS Module is a CSS file in which all class names and animation names are
            // scoped locally by default.
            // https://github.com/css-modules/css-modules
            require('postcss-modules')({
                generateScopedName: generateScopedName,
                getJSON: receiveJSON
            })
        ];

        if (!debug) {
             postcssPlugins.push(
                // Minimize CSS
                // https://github.com/ben-eb/cssnano
                require('cssnano')({
                    mergeIdents: false,
                    mergeRules: false,
                    reduceIdents: false,
                    zindex: false
                })
            );
        }

        postcss(postcssPlugins).process(source, postcssOptions)
            .then((result) => {
                result.warnings().forEach(function (msg) {
                    loader.emitWarning(msg.toString());
                });

                result.messages.forEach(function (msg) {
                    if ( msg.type === 'dependency' ) {
                        loader.addDependency(msg.file);
                    }
                });
                return result;
            })
            .then(receiveCSS)
            .catch(catchError);
    }
    forEach(themes,
        function(theme){
            loadtheme(theme);
        }
    );

    this.cacheable && this.cacheable();
}

module.exports = themeLoader;
