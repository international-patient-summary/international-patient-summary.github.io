import { render } from '#lib/markdown.js';
import { locales, readPage } from '#lib/server/content.js';

// One prerendered page per vendored locale.
export function entries() {
	return locales().map((locale) => ({ locale }));
}

export function load({ params }) {
	const { title, summary, html, headings } = render(readPage(params.locale) ?? '');
	return { title, summary, html, headings };
}
