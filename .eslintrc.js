module.exports = {
  root: true,
  env: {
    browser: true,
    'vitest-globals/env': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vitest-globals/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'tailwindcss',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],

    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        attributes: {
          when: 'never',
        },
        children: {
          when: 'always',
        },
      },
    ],

    'import/extensions': ['off', 'never'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'object',
          'type',
          'unknown',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/first': 'warn',
    'import/exports-last': 'warn',
    'import/prefer-default-export': 'warn',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
  },
  overrides: [
    {
      files: [
        '*.config.ts',
        '*.config.js',
        'src/tests/**/*.ts',
        'src/tests/**/*.tsx',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
