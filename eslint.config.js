import js from '@eslint/js'
// import jsdoc from 'eslint-plugin-jsdoc'
import promise from 'eslint-plugin-promise'
import globals from 'globals'
import ts from 'typescript-eslint'


// const JSDocConfig = jsdoc.configs[ 'flat/recommended-typescript' ]


export default ts.config(
  js.configs.recommended,

  {
    // ...JSDocConfig,

    rules: {
      // ...JSDocConfig.rules,
      'jsdoc/require-param': 0,
      'jsdoc/require-returns': 0,
    },

    settings: {
      jsdoc: {
        publicFunctionsOnly: 'exports',
      },
    },
  },

  {
    plugins: { promise },
    rules: promise.configs.recommended.rules,
  },

  ...ts.configs.recommended,

  {
    languageOptions: {
      globals: {
        // ...globals.browser,
        // ...globals.node,
        ...globals[ 'shared-node-browser' ],
      },
    },

    ignores: [ '**/node_modules/**', '**/old_packages/**' ],

    rules: {
      'func-names': 0,

      indent: [
        2,
        2,
        {
          SwitchCase: 1,
          ignoredNodes: [ 'ConditionalExpression', 'TemplateLiteral' ]
        }
      ],

      'linebreak-style': [ 2, 'unix' ],

      'max-len': [
        1,
        {
          code: 79,
          comments: 79,
          ignorePattern: 'import.*',
          ignoreUrls: true
        }
      ],

      'max-statements': [ 1, 40 ],
      'no-console': [ 1, { allow: [ 'error' ]}],
      'no-empty': [ 2, { allowEmptyCatch: true }],
      'no-sequences': 2,
      'no-trailing-spaces': 0,

      'no-use-before-define': [ 0, { functions: false, classes: false }],

      quotes: [
        2,
        'single',
        { avoidEscape: true, allowTemplateLiterals: true }
      ],

      semi: [ 2, 'never' ],

      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],

      'space-in-parens': [
        1,
        'always',
        { exceptions: [ '{}', '()', '[]', 'empty' ]}
      ],
    },
  },
)
