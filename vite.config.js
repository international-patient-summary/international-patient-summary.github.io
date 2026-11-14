import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// The Lily components are written in TypeScript.
			preprocess: vitePreprocess(),

			adapter: adapter({
				pages: 'build',
				assets: 'build',
				// Every route is prerendered, so this fallback is only reached by a URL
				// that does not exist. GitHub Pages serves 404.html for those.
				fallback: '404.html',
				strict: true
			}),

			paths: {
				// This repository is named <org>.github.io, so the site is served from
				// the domain root and the base path is empty. Set BASE_PATH at build
				// time to deploy the same source under a subpath, such as a preview.
				base: process.env.BASE_PATH ?? ''
			},
			prerender: { handleHttpError: 'fail', handleMissingId: 'fail' }
		})
	]
});
