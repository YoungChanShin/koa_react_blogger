module.exports = {
  env: { commonjs: true, es6: true, node: true },
  extends: ['plugin:recommended', 'prettier'],
  globals: { Atomics: 'readonly', ShardArrayBuffer: 'readonly' },
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  rules: {},
};
