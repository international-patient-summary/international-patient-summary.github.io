import { locales } from '#lib/server/content.js';

// The locale list comes from here, the one place server-only content.js can
// be read, so the header's language picker always matches the locales that
// are actually vendored rather than a second hardcoded list.
export function load() {
	return { locales: locales() };
}
