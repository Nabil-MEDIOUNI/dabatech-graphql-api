module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-prettier'],
  rules: {
    /* ******************************* FORMATTING ******************************* */

    indent: 0,
    'linebreak-style': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'max-len': ['warn', { code: 120 }],
    'object-curly-spacing': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,

    /* ******************************* JAVASCRIPT ******************************* */
    camelcase: 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'error',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-shadow': 'warn',
    'no-empty': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'wrap-iife': 0,
    'global-require': 0, // Widely used in backend services for dynamic loading/querying
    'no-console': 0, // Widely used for logging
    'import/no-dynamic-require': 0, // Widely used when evaluating requires based on variables

    /* ****************************** DEPENDENCIES ****************************** */

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
