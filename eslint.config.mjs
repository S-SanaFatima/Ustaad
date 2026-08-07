import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  jsxA11y.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  }
);
