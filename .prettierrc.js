/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
};
