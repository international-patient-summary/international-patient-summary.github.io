<script>
	import { resolve } from '$app/paths';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';
	import { ui } from '#lib/i18n.js';

	let { data } = $props();
	const t = $derived(ui(data.defaultLocale));
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-subheadline">Key health data, worldwide.</p>
		<p class="book-hero-summary">{data.summary}</p>
		<p>
			<a class="start-link" href={resolve(`${data.defaultLocale}/`)}>{t.readIntroduction} →</a>
		</p>
	</header>

	<section class="locale-chooser" aria-labelledby="choose-locale">
		<h2 id="choose-locale">{t.chooseLanguage}</h2>
		<SectionList class="start-list">
			{#each data.locales as locale (locale.code)}
				<SectionListItem class="start-item">
					<a class="start-link" href={resolve(`${locale.code}/`)}>{locale.label}</a>
				</SectionListItem>
			{/each}
		</SectionList>
	</section>
</div>

<style>
	.book-hero-subheadline {
		margin: 0 0 1rem;
		font-size: 1.3em;
		font-weight: 600;
	}
</style>
