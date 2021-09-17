// prettier.config.js or .prettierrc.js
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
    {
      files: ".stylelintrc.js",
    },
  ],
};
