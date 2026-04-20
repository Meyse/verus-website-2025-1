//@ts-check
import path from 'node:path'

import {includeIgnoreFile} from '@eslint/compat'
import eslint from '@eslint/js'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import tseslint from 'typescript-eslint'

const nextConfig = nextCoreWebVitals.filter(
  (config) => config.name !== 'next/typescript'
)

/**
 * All packages that leverage t3-env should use this rule
 */
const restrictEnvAccess = tseslint.config(
  {ignores: ['**/env.ts']},
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],

    rules: {
      'no-restricted-properties': [
        'error',
        {
          object: 'process',
          property: 'env',
          message:
            "Use `import { env } from '@/configs/env'` instead to ensure validated types.",
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          name: 'process',
          importNames: ['env'],
          message:
            "Use `import { env } from '@/configs/env'` instead to ensure validated types.",
        },
      ],
    },
  }
)

const projectRules = {
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-html-link-for-pages': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    /** typescript rules */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {prefer: 'type-imports', fixStyle: 'separate-type-imports'},
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      {checksVoidReturn: {attributes: false}},
    ],
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/unbound-method': 'off',
  },
}

const eslintConfig = [
  includeIgnoreFile(path.join(import.meta.dirname, '.gitignore')),
  {ignores: ['**/*.config.*', '.next/**']},
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  ...nextConfig,
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
      files: ['src/**/*', '**/*.js', '**/*.ts', '**/*.tsx'],
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    }
  ),
  eslintConfigPrettier,
  projectRules,
  ...restrictEnvAccess,
]

export default eslintConfig
