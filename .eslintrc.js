module.exports = {
  extends: [require.resolve('eslint-config-ali/typescript')],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-unused-expressions': 1,
    semi: 'warn',
    'eol-last': 'warn',
    'quote-props': 'warn',
    'no-unused-vars': 0,
    'import/no-cycle': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/no-self-import': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'dot-notation': 'off',
    'no-irregular-whitespace': 0,
    'no-nested-ternary': 0,
    'no-mixed-operators': 0,
    'no-console': [1, { allow: ['debug', 'warn', 'error', 'assert'] }],
    'prefer-promise-reject-errors': 0,
  },
};
