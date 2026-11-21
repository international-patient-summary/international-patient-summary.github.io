import { render } from '#lib/markdown.js';
import { locales, readPage } from '#lib/server/content.js';
import { LOCALE_LABELS } from '#lib/locales.js';
import { hero } from '#lib/hero.js';

// One prerendered page per vendored locale.
export function entries() {
	return locales().map((locale) => ({ locale }));
}

export function load({ params }) {
	const { title, summary, html, headings } = render(readPage(params.locale) ?? '');
	const languages = locales()
		.filter((code) => code.endsWith('-001'))
		.sort()
		.map((code) => ({ code, label: LOCALE_LABELS[code] ?? code }));
	return { title, summary, html, headings, languages, hero: hero(params.locale) };
}
