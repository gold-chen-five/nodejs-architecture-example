module.export = {
    parser: "@typescript-eslint/parser",
    extend: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parseOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules:{},
}