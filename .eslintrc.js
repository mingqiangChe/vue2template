module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential', // Vue 2 基础规则
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['vue'],
  rules: {
    // 关闭所有格式类规则，保留基础语法规则
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'warn', // 可提示未使用变量但不报错
    'no-undef': 'error', // 禁止未声明变量
    'no-shadow': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-mutating-props': 'warn',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
