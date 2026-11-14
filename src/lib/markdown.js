// Render a vendored Markdown file into the HTML this site publishes.
//
// Headings gain stable ids, so the page can link to its own sections and the
// "On this page" list can be built from them. External links are marked, so
// the stylesheet can flag them and referrers stay off third-party servers.
//
// Runs at build time only: every route that calls this is prerendered.

import { Marked } from 'marked';
import GithubSlugger from 'github-slugger';

/** Split a leading `# Title` off the source. */
export function splitTitle(source) {
	const match = /^\s*#\s+(.+?)\s*$/m.exec(source);
	if (!match || source.slice(0, match.index).trim() !== '') {
		return { title: '', body: source };
	}
	return {
		title: match[1],
		body: source.slice(match.index + match[0].length).replace(/^\n+/, '')
	};
}

/** The first paragraph of `body`, as plain text, for meta descriptions. */
export function firstParagraph(body) {
	for (const block of body.split(/\n\s*\n/)) {
		const text = block.trim();
		if (!text || /^(#|-|\||```|<)/.test(text)) continue;
		const plain = text
			.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
			.replace(/[*_`]/g, '')
			.replace(/\s+/g, ' ')
			.trim();
		// A paragraph that introduces a list ends "...designed to be:". Drop that
		// last sentence, so the summary reads on its own.
		return plain.endsWith(':') ? plain.replace(/\s*[^.!?]*:$/, '') || plain : plain;
	}
	return '';
}

/** True when a link leaves the site. */
export function isExternal(href) {
	return /^[a-z][a-z0-9+.-]*:/i.test(href ?? '') || (href ?? '').startsWith('//');
}

const escapeAttribute = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/**
 * Render one content file.
 *
 * @param {string} source Raw Markdown.
 * @returns {{title: string, summary: string, html: string, headings: {id: string, text: string, depth: number}[]}}
 */
export function render(source) {
	const { title, body } = splitTitle(source);
	const slugger = new GithubSlugger();
	const headings = [];
	const marked = new Marked({ gfm: true });

	marked.use({
		renderer: {
			heading(token) {
				const text = this.parser.parseInline(token.tokens);
				// Slug from the plain text, so `## Why the IPS exists` is
				// `#why-the-ips-exists` whether or not the heading has emphasis.
				const id = slugger.slug(token.text);
				if (token.depth <= 3) headings.push({ id, text: token.text, depth: token.depth });
				return `<h${token.depth} id="${id}">${text}</h${token.depth}>\n`;
			},
			link(token) {
				const href = token.href ?? '';
				const text = this.parser.parseInline(token.tokens);
				const titleAttribute = token.title ? ` title="${escapeAttribute(token.title)}"` : '';
				const extra = isExternal(href) ? ' class="external" rel="noopener noreferrer"' : '';
				return `<a href="${escapeAttribute(href)}"${titleAttribute}${extra}>${text}</a>`;
			}
		}
	});

	return {
		title,
		summary: firstParagraph(body),
		html: marked.parse(body),
		headings
	};
}
