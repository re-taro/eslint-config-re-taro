module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ],
  parser: ['@typescript-eslint/parser'],
  plugins: ['@typescript-eslint/eslint-plugin']
}
