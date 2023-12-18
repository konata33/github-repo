module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'eslint-plugin-import-helpers'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0
  }
};
