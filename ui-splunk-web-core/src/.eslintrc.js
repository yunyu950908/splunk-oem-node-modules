const path = require('path');

const sharedConfigAbsolute = path.join(__dirname,
    'build_tools', 'profiles', 'common', 'shared.config.js');

module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    plugins: [
        'react',
    ],
    rules: {
        // Set the required indent to 4 spaces
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        // Do not require a newline at the end of every file
        'eol-last': 'off',
        // A more generous max line length
        'max-len': ['error', 120],

        // Allow `console.log` statements, but not when they reference the global console.
        'no-console': 'off',
        'no-restricted-globals': ['error', 'console'],

        // Prevent errors for missing .es extensions in import statements (match shared.config)
        'import/extensions': ['error', 'always', { js: 'never', jsx: 'never', es: 'never' }],
        // No way to excluded packages (such as 'underscore' from our own contrib directory)
        'import/no-extraneous-dependencies': 'off',
    },
    env: {
        browser: true,
    },
    settings: {
        'import/resolver': {
            webpack: { config: sharedConfigAbsolute },
        },
    },
    root: true,
};
