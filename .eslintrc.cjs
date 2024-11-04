module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'redux-saga',
		'jsx-a11y',
		'import',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-vars': 'error',
		'react/prop-types': 'off',

		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		'redux-saga/no-yield-in-race': 'error',
		'redux-saga/yield-effects': 'error',

		'import/order': [
			'off',
			{
				groups: [['builtin', 'external', 'internal']],
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'import/no-unresolved': 'off', //
		'no-undef': 'off', //

		'no-console': 'warn',
		'consistent-return': 'error', //

		'jsx-a11y/anchor-is-valid': 'error', //
		'import/named': 'off',
		'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
