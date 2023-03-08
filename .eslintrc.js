module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    "react-native/react-native": true,
  },
  settings: {
    "react-native/style-sheet-object-names": [
      "EStyleSheet",
      "OtherStyleSheet",
      "PStyleSheet",
    ],
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
};
