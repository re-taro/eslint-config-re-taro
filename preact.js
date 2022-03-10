module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  globals: {
    browser: true,
    expect: true,
    global: true
  },
  plugins: [
    'compat',
    'react',
    'jest',
    'react-hooks'
  ],
  rules: {
    'constructor-super': 2,
    'no-caller': 2,
    'no-const-assign': 2,
    'no-delete-var': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 1,
    'no-empty': 0,
    'no-empty-pattern': 0,
    'no-extra-parens': 0,
    'no-iterator': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-multi-str': 1,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-this-before-super': 2,
    'no-undef-init': 2,
    'no-unneeded-ternary': 2,
    'no-unused-vars': [
      2, {
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'no-useless-call': 1,
    'no-useless-computed-key': 1,
    'no-useless-concat': 1,
    'no-useless-constructor': 1,
    'no-useless-escape': 1,
    'no-useless-rename': 1,
    'no-var': 1,
    'no-with': 2,
    'object-curly-spacing': [0, 'always'],
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'quote-props': [2, 'as-needed'],
    quotes: [
      0, 'single', {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    radix: 1,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/jsx-no-bind': [
      1, {
        allowArrowFunctions: true,
        allowFunctions: true,
        ignoreRefs: true
      }
    ],
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 1,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-string-refs': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'rest-spread-spacing': 0,
    semi: 0,
    'space-before-function-paren': [0, 'always'],
    'space-in-parens': [0, 'never'],
    strict: [2, 'never'],
    'unicode-bom': 2,
    'valid-jsdoc': 0
  },
  settings: {
    polyfills: ['fetch', 'Promise'],
    react: {
      pragma: 'h',
      version: '16.0'
    },
    targets: ['last 2 versions']
  }
}
