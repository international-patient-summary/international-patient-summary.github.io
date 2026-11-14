// Builds build/llms.txt and build/llms.json from the vendored content, so they
// always match what the site publishes. See https://llmstxt.org/ for the format.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_LOCALE, LOCALE_LABELS } from '../src/lib/locales.js';
import { SITE_REPO, SITE_URL, SOURCE_REPO } from '../src/lib/site.js';

const BUILD = process.argv[2] ?? 'build';
const RAW = `${SITE_REPO.replace('https://github.com/', 'https://raw.githubusercontent.com/')}/main`;

const codes = readdirSync('content/locales')
	.filter((code) => existsSync(join('content/locales', code, 'index.md')))
	.sort();

const source = readFileSync(join('content/locales', DEFAULT_LOCALE, 'index.md'), 'utf8');
const lines = source.split('\n');
const title = (lines.find((l) => l.startsWith('# ')) ?? '# International Patient Summary')
	.slice(2)
	.trim();
const summary =
	lines
		.find((l, i) => i > 0 && l.trim() && !/^(#|-|\||```|<)/.test(l))
		?.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/[*_`]/g, '')
		.trim()
		.replace(/\s*[^.!?]*:$/, '') ?? '';
const sections = lines.filter((l) => /^## /.test(l)).map((l) => l.slice(3).trim());
const slug = (s) =>
	s
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\s-]/gu, '')
		.trim()
		.replace(/\s/g, '-');

const locales = codes.map((code) => ({
	code,
	name: LOCALE_LABELS[code] ?? code,
	url: `${SITE_URL}/${code}/`,
	source: `${RAW}/content/locales/${code}/index.md`,
	default: code === DEFAULT_LOCALE
}));

let txt = `# ${title}\n\n> ${summary}\n\n`;
txt += `The site is a one-page introduction to the International Patient Summary standard, published per locale at ${SITE_URL}/<locale>/. The canonical locale is ${DEFAULT_LOCALE}.\n\n`;
txt += `## Sections\n\n`;
for (const s of sections) txt += `- [${s}](${SITE_URL}/${DEFAULT_LOCALE}/#${slug(s)})\n`;
txt += `\n## Locales\n\n`;
for (const l of locales)
	txt += `- [${l.name} (${l.code})](${l.url}): [Markdown source](${l.source})\n`;
txt += `\n## Optional\n\n`;
txt += `- [Site index as JSON](${SITE_URL}/llms.json): machine-readable index with source Markdown URLs\n`;
txt += `- [Sitemap](${SITE_URL}/sitemap.xml): every published page\n`;
txt += `- [Search index](${SITE_URL}/search-index.json): full text of every page\n`;
txt += `- [Source repository](${SOURCE_REPO}): Markdown source, one directory per locale\n`;

const json = {
	name: title,
	description: summary,
	site: SITE_URL,
	repository: SOURCE_REPO,
	defaultLocale: DEFAULT_LOCALE,
	pageUrlPattern: `${SITE_URL}/{locale}/`,
	sourceUrlPattern: `${RAW}/content/locales/{locale}/index.md`,
	sections: sections.map((s) => ({ title: s, url: `${SITE_URL}/${DEFAULT_LOCALE}/#${slug(s)}` })),
	locales,
	links: { searchIndex: `${SITE_URL}/search-index.json`, llmsTxt: `${SITE_URL}/llms.txt` }
};

writeFileSync(join(BUILD, 'llms.txt'), txt);
writeFileSync(join(BUILD, 'llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`llms: ${sections.length} sections, ${locales.length} locales`);
