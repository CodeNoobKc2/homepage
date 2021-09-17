// prettier.config.js or .prettierrc.js
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 80,
  overrides: [
    {
      files: ".prettierrc",
      options: { parser: "json" },
    },
  ],
};
