'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = babelPresetSplunk;
// Babel env has bugs and may be removed soon. https://github.com/babel/babel/issues/5276
var env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';

var devPlugins = [require.resolve('babel-plugin-transform-react-jsx-source'), require.resolve('babel-plugin-transform-react-jsx-self')];
function babelPresetSplunk() {
    return {
        presets: [require.resolve('babel-preset-env'), require.resolve('babel-preset-react')],
        plugins: [require.resolve('babel-plugin-transform-object-rest-spread'), require.resolve('babel-plugin-transform-class-properties')].concat(env === 'development' ? devPlugins : [])
    };
}