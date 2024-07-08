const fabric = require('@umijs/fabric')

module.exports = {
  ...fabric.prettier,
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-two-style-order'
  ],
  trailingComma: 'none',
  semi: false
}
