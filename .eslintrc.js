module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	parserOptions: {
		ecmaVersion: 2019,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: [
		'react',
		'react-hooks'
	],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		// Possible errors
		'for-direction': 'error',
		'getter-return': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'except-parens'],
		'no-console': 'error',
		'no-constant-condition': ['error', { checkLoops: false }],
		'no-control-regex': 'off',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': [
			'error', 'all', {
				conditionalAssign: false,
				nestedBinaryExpressions: false,
				returnAssign: false
			}
		],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'off',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-jsdoc': 'off',
		'valid-typeof': 'error',

		// Best practices
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'off',
		'class-methods-use-this': 'off',
		complexity: 'off',
		'consistent-return': 'error',
		curly: ['error', 'all'],
		'default-case': 'off',
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		eqeqeq: 'error',
		'guard-for-in': 'off',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'off',
		'no-else-return': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'off',
		'no-invalid-this': 'off', // meh
		'no-iterator': 'error',
		'no-labels': ['error', { allowLoop: true }],
		'no-lone-blocks': 'error',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': 'off',
		'no-return-assign': ['error', 'except-parens'],
		'no-return-await': 'error',
		'no-script-url': 'off',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		radix: ['error', 'as-needed'],
		'require-await': 'error',
		'vars-on-top': 'off',
		'wrap-iife': ['error', 'outside'],
		yoda: ['error', 'never'],

		// Strict Mode
		strict: ['error', 'global'],

		// Variables
		'init-declarations': 'off',
		'no-catch-shadow': 'error',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': 'off',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-unused-vars': 'error',
		'no-use-before-define': ['error', 'nofunc'],

		// Node.js and CommonJS
		'callback-return': 'off',
		'global-require': 'error',
		'handle-callback-err': 'error',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': ['error', true],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-exit': 'error',
		'no-restricted-modules': 'off',
		'no-sync': 'off',

		// Stylistic Issues
		'array-bracket-newline': ['error', { multiline: true }],
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': ['off'],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', { allowSingleLine: false }],
		camelcase: ['error', { properties: 'always' }],
		'capitalized-comments': 'off',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': 'off',
		'eol-last': 'error',
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['error'],
		'func-names': 'off',
		'function-paren-newline': ['error', 'consistent'],
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		indent: ['error', 'tab'],
		'jsx-quotes': 'off',
		'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
		'keyword-spacing': ['error', { before: true, after: true }],
		'line-comment-position': 'off',
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': 'off',
		'max-depth': 'off',
		'max-len': ['error', 120, { ignoreUrls: true }],
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': ['error', { capIsNewExceptions: ['USVString', 'DOMString'] }],
		'new-parens': 'error',
		'newline-per-chained-call': 'off',
		'no-array-constructor': 'error',
		'no-bitwise': 'off',
		'no-continue': 'off',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-operators': [
			'error',
			{
				groups: [
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof']
				]
			}
		],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'off',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': ['error', { consistent: true }],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': 'off',
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'initializations'],
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': ['error', 'after'],
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': 'off',
		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'require-jsdoc': 'off',
		semi: ['error', 'always'],
		'semi-spacing': 'error',
		'semi-style': 'error',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': ['error', { words: true, nonwords: false }],
		'spaced-comment': ['error', 'always', { markers: ['///'] }],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': 'error',
		'wrap-regex': 'off',

		// ECMAScript 6
		'arrow-body-style': 'off', // meh
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'constructor-super': 'error',
		'generator-star-spacing': ['error', 'after'],
		'no-class-assign': 'error',
		'no-confusing-arrow': 'off',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-new-symbol': 'error',
		'no-restricted-imports': 'off',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
		'prefer-destructuring': [
			'error', {
				VariableDeclarator: { array: false, object: true },
				AssignmentExpression: { array: false, object: false }
			},
			{
				enforceForRenamedProperties: false
			}
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'off',
		'prefer-spread': 'error',
		'prefer-template': 'off',
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		'sort-imports': 'off',
		'symbol-description': 'error',
		'template-curly-spacing': ['error', 'never'],
		'yield-star-spacing': ['error', 'after']
	},
	settings: {
		react: {
			version: '16.6.1'
		}
	}
};
