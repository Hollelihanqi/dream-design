// @ts-check
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  parser: 'vue-eslint-parser', // https://stackoverflow.com/questions/66597732/eslint-vue-3-parsing-error-expected-eslint
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  // files: ['*.ts', '*.vue'], // beta
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解决引入 type {} 报错问题
    ecmaVersion: 2020, // 允许解析现代 ECMAScript
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    // 关闭名称校验 https://eslint.vuejs.org/rules/multi-word-component-names.html
    'vue/multi-word-component-names': 'off',
    // 禁止在模板中使用 this https://eslint.vuejs.org/rules/this-in-template.html
    'vue/this-in-template': 'error',
    // 禁止使用其他 lang https://eslint.vuejs.org/rules/block-lang.html
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts'
        }
      }
    ],
    // 禁止使用 v-html 来防止 XSS 攻击 https://eslint.vuejs.org/rules/no-v-html.html
    'vue/no-v-html': 'error',
    // 不允许修改 props https://eslint.vuejs.org/rules/no-mutating-props.html
    'vue/no-mutating-props': 'error'
  }
})
