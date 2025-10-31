// eslint.config.js
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  // This is the equivalent of "extends": "eslint:recommended"
  js.configs.recommended,

  {
    // This is the equivalent of the "env" block
    languageOptions: {
      ecmaVersion: 2021, // Corresponds to ecmaVersion: 12
      globals: {
        ...globals.node, // Corresponds to "node": true
        ...globals.mocha, // Corresponds to "mocha": true
      },
    },
    rules: {
      // You can add custom rules here
    },
  },
];