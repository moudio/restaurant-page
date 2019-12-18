module.exports = {
  globals: {
    console: 'readonly',
    Promise: 'readonly',
    process: 'readonly',
    __dirname: 'readonly',
    __filename: 'readonly',
    setTimeout: 'readonly',
    Symbol: 'readonly',
    Set: 'readonly',
    Map: 'readonly',
    Proxy: 'readonly'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
      classes: true
    }
  },
  parser: 'babel-eslint',
  rules: {
    'operator-linebreak': ['error', 'after', { overrides: { '|>': 'before' } }],
    'arrow-spacing':  [ 'error', { before: true, after: true }],
    'node/no-missing-import': ['error', {
      allowModules: [],
      resolvePaths: ['node_modules', './src', './tests'],
      tryExtensions: ['.js']
    }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'import/no-commonjs': ['error'],
    'strict': ['error', 'global'],
    'quotes': [2, 'single', 'avoid-escape'],
    'curly': [2, 'multi'],
    'no-mixed-requires': [1, true],
    'no-underscore-dangle': 0,
    'no-multi-spaces': 0,
    'no-alert': 0,
    'semi': [2, 'never'],
    'eqeqeq': ['error', 'always'],
    'comma-dangle': 0,
    'array-bracket-spacing': 0,
    'max-len': [0, 160, 2],
    'require-jsdoc': 0,
    'no-invalid-this': 0,
    'quote-props': 0,
    'prefer-rest-params': 0,
    'arrow-parens': [0, 'as-needed'],
    'padded-blocks': 0,
    'spaced-comment': 0,
    'one-var': 0,
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'space-before-function-paren': 0,
    'generator-star-spacing': 0,
    'new-cap': 0,
    'computed-property-spacing': 0,
    'no-console': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'key-spacing': ['error', { beforeColon: false }],
    'space-before-blocks': 'error',
    'indent': ['error', 2],
    'filenames/match-regex': [2, '^[a-z0-9_\\.]+$', false],
    'no-only-tests/no-only-tests': 2,
    'complexity': ['error', 4],
    'space-infix-ops': ['error', {int32Hint: true}],
    'space-unary-ops': 'error',
    'block-spacing': ['error', 'always'],
    'no-whitespace-before-property': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'quote-props': ['error', 'as-needed']
  },
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'google'],
  plugins: ['eslint-plugin-node', 'import', 'filenames', 'no-only-tests']
}
