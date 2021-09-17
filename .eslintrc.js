module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "babel",
    "jest",
    "react-hooks",
    "markdown",
    "import",
    "@typescript-eslint",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
      },
    ],

    "react/jsx-one-expression-per-line": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-indent": 0,
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false },
    ],
    "react/jsx-filename-extension": 0,
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "react/display-name": 0,
    "react/static-property-placement": 0,
    "react/no-find-dom-node": 0,
    "react/no-unused-prop-types": 0,
    "react/default-props-match-prop-types": 0,
    "react-hooks/rules-of-hooks": 2, // Checks rules of Hooks

    "import/no-unresolved": "error",
    "import/extensions": 0,
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": [
      0,
      {
        devDependencies: [
          "site/**",
          "tests/**",
          "scripts/**",
          "**/*.test.js",
          "**/__tests__/*",
          "*.config.js",
          "**/*.md",
        ],
      },
    ],

    "no-use-before-define": 0,
    "no-undef": 0,
    "no-shadow": 0,
    "lines-between-class-members": 0,

    "@typescript-eslint/no-use-before-define": 2,
    "@typescript-eslint/no-shadow": [2, { ignoreTypeValueShadow: true }],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "no-underscore-dangle": 0,

    // next
    "@next/next/no-img-element": 0,
  },
};
