module.exports = {
  extends: [
    'prettier',
    'plugin:yml/prettier'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ]
}
