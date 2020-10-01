module.exports = {
  root: true,
  extends: [
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "@react-native-community"
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
