#!/usr/bin/env node
// Vendor the main repository's Markdown into content/, so this site builds
// from a fresh clone without reaching across repositories.
//
// Copies <source>/locales/<code>/index.md to content/locales/<code>/index.md
// for every locale that has one, verbatim. Locales that no longer exist
// upstream are removed here too.
//
// Source: the parent directory by default (this site lives inside the main
// repository), or SOURCE=/path/to/international-patient-summary.

import { copyFile, mkdir, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(process.env.SOURCE ?? join(siteRoot, '..'));
const localesSrc = join(source, 'locales');
const contentOut = join(siteRoot, 'content');
const localesOut = join(contentOut, 'locales');

const exists = (path) =>
	stat(path).then(
		() => true,
		() => false
	);

if (!(await exists(localesSrc))) {
	// --optional: in the standalone site repository there is no ../locales,
	// and the committed content/ is what the build uses. Skip quietly.
	if (process.argv.includes('--optional') && (await exists(localesOut))) {
		console.log(`No locales/ at ${localesSrc}; using committed content/.`);
		process.exit(0);
	}
	console.error(`No locales/ directory at ${localesSrc}. Set SOURCE=/path/to/the/main/repository.`);
	process.exit(1);
}

const codes = [];
for (const entry of (await readdir(localesSrc, { withFileTypes: true })).sort((a, b) =>
	a.name.localeCompare(b.name)
)) {
	if (entry.isDirectory() && (await exists(join(localesSrc, entry.name, 'index.md')))) {
		codes.push(entry.name);
	}
}

await rm(localesOut, { recursive: true, force: true });
for (const code of codes) {
	await mkdir(join(localesOut, code), { recursive: true });
	await copyFile(join(localesSrc, code, 'index.md'), join(localesOut, code, 'index.md'));
}

await writeFile(
	join(contentOut, 'README.md'),
	`# Vendored content

Do not edit files here. They are copied from the main repository's
\`locales/<code>/index.md\` by \`pnpm run sync:content\` (or \`make sync\`).
Change them upstream, then re-sync.
`
);

console.log(`Vendored ${codes.length} locale(s): ${codes.join(', ')}`);
