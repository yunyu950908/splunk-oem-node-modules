'use strict';

var postcss = require('postcss');
var path = require('path');

function plugin(theme) {
    function process(css) {
        var basedir = path.join(__dirname, '../postcssInit/');
        var relativedir = path.relative(path.dirname(css.source.input.file), basedir) || '.';
        var themeExt = theme || 'enterprise';

        css.prepend({
            name: 'import',
            params: '"' + relativedir + '/mixins.' + themeExt + '.pcss"',
            source: css.source
        });
        css.prepend({
            name: 'import',
            params: '"' + relativedir + '/variables.' + themeExt + '.pcss"',
            source: css.source
        });
    }

    return process;
}

module.exports = postcss.plugin('importMixinsAndVars', plugin);