module.exports = {
    parser: 'babel-eslint',
    extends: 'eslint-config-airbnb',
    globals: {
        __DEV__: true,
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
    },
};
