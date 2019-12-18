module.exports = {
  globals: {
    context: 'readonly',
    describe: 'readonly',
    before: 'readonly',
    after: 'readonly',
    it: 'readonly',
    module: 'readonly',
    afterEach: 'readonly',
    beforeEach: 'readonly'
  },
  rules: {
    'node/no-missing-import': ['error', {
      allowModules: [],
      resolvePaths: ['node_modules', './', './tests'],
      tryExtensions: ['.js']
    }]
  }
}
