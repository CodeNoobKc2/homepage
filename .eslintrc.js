module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["next/core-web-vitals", "plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
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
    "max-len": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "func-names": "off",
    "lines-between-class-members": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "object-curly-newline": "off",
    "react/destructuring-assignment": "off",
    "no-param-reassign": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};
