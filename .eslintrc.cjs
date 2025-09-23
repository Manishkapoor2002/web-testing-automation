module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  plugins: ['@typescript-eslint', 'playwright'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:playwright/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  },
  ignorePatterns: ['dist', 'node_modules']
};
