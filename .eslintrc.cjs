module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-refresh", "jsx-a11y", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.stories.ts",
          "**/*.stories.tsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "vite.config.ts",
          "lib/test-setup.ts",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.md", ".mdx"],
      excludedFiles: "README.md",
      extends: ["plugin:mdx/recommended"],
      settings: {
        "mdx/code-blocks": true,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
