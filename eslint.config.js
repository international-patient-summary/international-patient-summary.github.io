import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	{
		ignores: ['build/', '.svelte-kit/', 'node_modules/', 'content/', 'static/assets/themes/']
	},
	js.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			// Links go through `resolve()` from $app/paths, or are external.
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
];
