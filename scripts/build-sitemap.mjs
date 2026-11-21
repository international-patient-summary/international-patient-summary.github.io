// Builds build/sitemap.xml listing every prerendered page, so it always
// matches what the site publishes. Run after `vite build`.
import { readdirSync, writeFileSync } from 'node:fs';
import { join, sep } from 'node:path';
import { SITE_URL } from '../src/lib/site.js';

const BUILD = process.argv[2] ?? 'build';
const EXCLUDE = new Set(['/404.html']);

function walk(dir, out = []) {
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, e.name);
		if (e.isDirectory()) {
			if (e.name !== '_app' && e.name !== 'assets') walk(p, out);
		} else if (e.name.endsWith('.html')) out.push(p);
	}
	return out;
}

const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const urls = walk(BUILD)
	.map(
		(f) =>
			'/' +
			f
				.slice(BUILD.length + 1)
				.split(sep)
				.join('/')
	)
	.filter((rel) => !EXCLUDE.has(rel))
	.map((rel) => (rel.endsWith('index.html') ? rel.slice(0, -'index.html'.length) : rel))
	.map((rel) => SITE_URL + encodeURI(rel))
	.sort();

const body = urls.map((u) => `\t<url><loc>${xml(u)}</loc></url>`).join('\n');
writeFileSync(
	join(BUILD, 'sitemap.xml'),
	`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
);
console.log(`sitemap: ${urls.length} urls`);

// Per-locale sitemaps: build/<locale>/sitemap.xml lists that locale's routes.
const byLocale = new Map();
for (const u of urls) {
	const m = u.slice(SITE_URL.length).match(/^\/([a-z]{2,3}(?:-[a-z0-9]+)+)\//);
	if (m) byLocale.set(m[1], [...(byLocale.get(m[1]) ?? []), u]);
}
for (const [locale, list] of byLocale) {
	const lbody = list.map((u) => `\t<url><loc>${xml(u)}</loc></url>`).join('\n');
	writeFileSync(
		join(BUILD, locale, 'sitemap.xml'),
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lbody}\n</urlset>\n`
	);
}
console.log(`sitemap: ${byLocale.size} locale sitemaps`);
