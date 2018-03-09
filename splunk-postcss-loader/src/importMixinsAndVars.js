const postcss = require('postcss');
const path = require('path');

function plugin(theme) {
    function process(css) {
        const basedir = path.join(__dirname, '../postcssInit/');
        const relativedir = path.relative(path.dirname(css.source.input.file), basedir) || '.';
        const themeExt = theme || 'enterprise';

        css.prepend({
            name: 'import',
            params: `"${relativedir}/mixins.${themeExt}.pcss"`,
            source: css.source,
        });
        css.prepend({
            name: 'import',
            params: `"${relativedir}/variables.${themeExt}.pcss"`,
            source: css.source,
        });
    }

    return process;
}

module.exports = postcss.plugin('importMixinsAndVars', plugin);
