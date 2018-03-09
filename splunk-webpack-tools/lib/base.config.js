'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEBUG = process.env.NODE_ENV !== 'production';

exports.default = {
    node: {
        __filename: true
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [DEBUG ? 'babel-loader?cacheDirectory' : 'babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', DEBUG ? 'splunk-postcss-loader?debug' : 'splunk-postcss-loader']
        }, {
            test: /\.txt$/,
            use: ['raw-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
                    limit: 100000
                }
            }]
        }, {
            test: /\.(eot|ttf|wav|mp3)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]'
                }
            }]
        }]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    resolveLoader: {
        modules: ['node_modules',
        // Ensure loaders can still be resolved when this package is symlinked
        _path2.default.join(__dirname, '../node_modules')]
    },

    cache: DEBUG,

    output: {
        filename: DEBUG ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
        chunkFilename: DEBUG ? '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js'
    }
};