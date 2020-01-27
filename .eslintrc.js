module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-param-reassign": "off",
    "no-use-before-define": "off",
    "linebreak-style": "off",
    "operator-linebreak": "off",
    "no-console": "off",
    "comma-dangle": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    'react/jsx-one-expression-per-line': "off",
    'react/button-has-type': "off",
  },
};
