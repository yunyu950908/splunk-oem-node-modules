const path = require('path');

module.exports = {
    extends: 'splunk/browser',
    rules: {
        'no-return-assign': 'off',

        // Uses package.json closest to source file which fails due to our usage of a package.json
        // for each component.
        'import/no-extraneous-dependencies': 'off',

        // We often use the presence of a prop to determine component behavior. In these cases, we
        // want the default to be undefined.
        'react/require-default-props': 'off',

        // This rule prevents generic propTypes like 'any', 'object', and 'array'. While we don't
        // use these often, we do use them often enough to make this rule painful.
        'react/forbid-prop-types': 'off',

        // We often use propTypes to document props, but then pass them down to a child component
        // untouched. This rule prevents that pattern.
        'react/no-unused-prop-types': 'off',

        // We use inline loaders to generate documentation out of source code.
        'import/no-webpack-loader-syntax': 'off',
    },
    settings: {
        'import/resolver': {
            webpack: { config: path.join(__dirname, 'webpack.test.config.js') },
        },
    },
};
