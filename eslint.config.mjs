// eslint.config.js - ESLint Flat Config
// https://github.com/antfu/eslint-config

import antfu from '@antfu/eslint-config'

// Example
// import customConfigObject from "eslint-config-custom"

export default antfu(
  {
    // Enable stylistic formatting rules
    // stylistic: true, (вместо Prettier)

    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
      semi: false,
      overrides: {
        'antfu/if-newline': ['off'],
        'style/arrow-parens': ['error', 'always'],
        'style/brace-style': ['error', '1tbs'],
        'style/padding-line-between-statements': ['error', {
          blankLine: 'always',
          prev: '*',
          next: ['return', 'try'],
        }, {
          blankLine: 'always',
          prev: ['const', 'let'],
          next: '*',
        }, {
          blankLine: 'any',
          prev: ['const', 'let'],
          next: ['const', 'let'],
        }],
      },
    },

    // TypeScript and Vue are auto-detected, but you can also explicitly enable them:
    typescript: true,
    vue: {
      overrides: {
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/multi-word-component-names': ['error', { ignores: [] }],
      },
    },
  },
  // Example
  // customConfigObject,
  // {
  //   // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
  //   files: ['**/*.vue'],
  //   rules: {
  //     'vue/multi-word-component-names': ['error', { ignores: [] }],
  //   },
  // },
)
