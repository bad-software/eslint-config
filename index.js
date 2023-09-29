module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended'
  ],

  env: {
    browser: true,
    es6: true,
    mocha: true
  },

  ignorePatterns: [ '**/node_modules/**', '**/old_packages/**' ],

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    requireConfigFile: false,
    sourceType: 'module'
  },

  plugins: [ 'jsdoc', 'promise' ],

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

    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

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

  settings: {
    'import/ignore': [
      'node_modules'
    ]
  }
}
