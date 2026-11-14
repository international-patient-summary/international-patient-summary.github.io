// Access to the vendored content, keyed by locale code.
//
// Each locale has one page: content/locales/<code>/index.md, copied from the
// main repository's locales/<code>/index.md by `pnpm run sync:content`.
//
// Server-only on purpose: the glob below inlines every Markdown file, and
// $lib/server guarantees none of it can reach a browser bundle. Pages read it
// from a `+page.server.js` load, which runs at build time under prerendering.

const markdownModules = import.meta.glob('/content/locales/*/index.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

/** @type {Record<string, string>} Locale code -> raw Markdown. */
const pages = Object.fromEntries(
	Object.entries(markdownModules).map(([path, source]) => [
		path.replace(/^\/content\/locales\/([^/]+)\/index\.md$/, '$1'),
		/** @type {string} */ (source)
	])
);

/** Every locale that has an index.md, sorted A–Z. */
export function locales() {
	return Object.keys(pages).sort();
}

/** Raw Markdown for one locale's page, or undefined. */
export function readPage(locale) {
	return pages[locale];
}
