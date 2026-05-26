import js from '@eslint/js'
import globals from 'globals'
import boundaries from 'eslint-plugin-boundaries'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      boundaries,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/*' },
        { type: 'domains', pattern: 'src/domains/*' },
        { type: 'shared', pattern: 'src/shared/*' },
        { type: 'infra', pattern: 'src/infra/*' },
        { type: 'config', pattern: 'src/config/*' },
        { type: 'tests', pattern: 'src/tests/*' },
      ],
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'app', allow: ['domains', 'shared', 'infra', 'config'] },
            { from: 'domains', allow: ['domains', 'shared', 'infra', 'config'] },
            { from: 'shared', allow: ['shared'] },
            { from: 'infra', allow: ['infra', 'config'] },
            { from: 'config', allow: ['config'] },
            { from: 'tests', allow: ['app', 'domains', 'shared', 'infra', 'config', 'tests'] },
          ],
        },
      ],
    },
  },
])
