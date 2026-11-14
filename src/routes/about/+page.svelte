<script>
	import { resolve } from '$app/paths';
	import { SITE_REPO, SOURCE_REPO } from '#lib/site.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>About — International Patient Summary</title>
	<meta name="description" content="What this site is, and how it is built." />
</svelte:head>

<div class="page page-about">
	<header class="page-header">
		<h1>About</h1>
	</header>

	<div class="prose">
		<h2>This site</h2>
		<p>
			This site is a one-page introduction to the
			<strong>International Patient Summary (IPS)</strong>: the worldwide standard for a minimal,
			specialty-agnostic summary of a person's key health data, designed for unscheduled and
			cross-border care. It covers the standard itself (ISO 27269, EN 17269, and the HL7 FHIR and
			CDA implementation guides), not any single product.
		</p>
		<p>
			Start with the <a href={resolve('')}>home page</a>. The introduction is available in
			{data.localeCount}
			{data.localeCount === 1 ? 'locale' : 'locales'}.
		</p>
		<p>
			This site is educational. It is not medical advice, and it is not an official publication of
			ISO, CEN, or HL7. Check the official specifications before you implement anything.
		</p>

		<h2>How it is built</h2>
		<p>
			The site is a <a href="https://svelte.dev/docs/kit">SvelteKit</a> application built with
			<a href="https://svelte.dev/docs/kit/adapter-static">adapter-static</a>. Every page is
			prerendered to plain HTML at build time, so GitHub Pages serves files and nothing else. There
			is no server, no database, and no tracking.
		</p>
		<p>
			The content is Markdown, written in the
			<a href={SOURCE_REPO}>main repository</a> under <code>locales/&lt;code&gt;/index.md</code>
			and vendored into this site under <code>content/</code>, so the site builds from a fresh
			clone.
		</p>

		<h2>Design system</h2>
		<p>
			The interface is built from the
			<a href="https://github.com/LilyDesignSystem">Lily Design System</a>: its headless Svelte
			components and its picker bar for links, search, theme, language, text size, and sharing. All
			{data.themeCount} Lily default themes are available from the theme picker. Your theme and text size
			choices are saved in your own browser only.
		</p>

		<h2>Source</h2>
		<p>
			The site's source is at <a href={SITE_REPO}>{SITE_REPO}</a>. Corrections and translations are
			welcome as issues or pull requests on the <a href={SOURCE_REPO}>main repository</a>.
		</p>
	</div>
</div>
