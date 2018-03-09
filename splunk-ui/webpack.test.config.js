/* This file is written in es5, and disables many eslint features */
/* eslint-disable max-len, no-var, object-shorthand, prefer-arrow-callback, func-names, space-before-function-paren, no-param-reassign, comma-dangle */

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var baseConfig = require('splunk-webpack-tools/lib/base.config').default;

module.exports = webpackMerge(baseConfig, {
    resolve: {
        alias: {
            'splunk-ui': path.resolve(__dirname, './src'),
        },
    },
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    plugins: [
        // Define free variables
        // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        new webpack.DefinePlugin({
            __DEV__: true,
        }),
    ],
});
