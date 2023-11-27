// .eslintrc.js
module.exports = {
  extends: ['react-app', 'airbnb-base', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
  },
};
