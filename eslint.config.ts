import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist', 'build', 'node_modules'],
  },

  // JavaScript 默认推荐配置
  js.configs.recommended,

  // TypeScript 推荐配置
  ...tseslint.configs.recommended,

  // 针对 .ts/.tsx 的语言配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  // React + React Hooks 配置
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // React 17+
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Prettier 插件配置
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // 禁用 ESLint 格式化规则，以便交由 Prettier 管理格式
  prettierConfig,
];
