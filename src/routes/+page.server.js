import { render } from '#lib/markdown.js';
import { locales, readPage } from '#lib/server/content.js';
import { DEFAULT_LOCALE, localeLabel } from '#lib/locales.js';

export function load() {
	const { title, summary } = render(readPage(DEFAULT_LOCALE) ?? '');

	// Languages grouped by their label's text before " - ", with the CLDR
	// "001" (World) variant first within its group and the default first overall.
	const localeList = locales()
		.map((code) => ({ code, label: localeLabel(code), isDefault: code === DEFAULT_LOCALE }))
		.sort((a, b) => {
			if (a.isDefault || b.isDefault) return a.isDefault ? -1 : 1;
			const languageA = a.label.replace(/\s+-\s+.*$/, '');
			const languageB = b.label.replace(/\s+-\s+.*$/, '');
			if (languageA !== languageB) return languageA.localeCompare(languageB);
			const worldA = a.code.endsWith('-001') ? 0 : 1;
			const worldB = b.code.endsWith('-001') ? 0 : 1;
			return worldA !== worldB ? worldA - worldB : a.label.localeCompare(b.label);
		});

	return { title, summary, defaultLocale: DEFAULT_LOCALE, locales: localeList };
}
