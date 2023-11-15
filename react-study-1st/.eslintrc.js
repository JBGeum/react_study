// .eslintrc.js
module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
};
