import { error } from '@sveltejs/kit';
import { locales } from '#lib/server/content.js';

export function load({ params }) {
	if (!locales().includes(params.locale)) {
		error(404, `Unknown locale: ${params.locale}`);
	}
	return { locale: params.locale };
}
