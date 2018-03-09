module.exports = {
    extends: '../../../.eslintrc.test.js',

    rules: {
        // don't work with app/ prefix
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
    }
};
