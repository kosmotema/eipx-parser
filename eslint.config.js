import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import tseslint from 'typescript-eslint';
import importX from 'eslint-plugin-import-x';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  {
    files: ['**/*.ts', '**/*.js'],

    plugins: {
      'import-x': importX,
    },

    rules: {
      ...importX.configs.recommended.rules,
      ...importX.configs.typescript.rules,
    },

    settings: {
      ...importX.configs.typescript.settings,
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
    },

    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,

        project: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
  },
];
