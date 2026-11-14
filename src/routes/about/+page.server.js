import { DEFAULT_THEMES } from '@lilydesignsystem/svelte-picker-bar';
import { locales } from '#lib/server/content.js';

export function load() {
	return { themeCount: DEFAULT_THEMES.length, localeCount: locales().length };
}
