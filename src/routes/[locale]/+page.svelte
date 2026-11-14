<script>
	import {
		ArticleLayout,
		ContentsList,
		ContentsListItem,
		ContentsNav
	} from '@lilydesignsystem/svelte-headless';
	import { ui } from '#lib/i18n.js';
	import { SITE_TITLE } from '#lib/site.js';

	let { data } = $props();
	const t = $derived(ui(data.locale));

	// Only h2s make the on-this-page list; h3s are linkable but would make the
	// list longer than some of the sections it points at.
	const sections = $derived(data.headings.filter((heading) => heading.depth === 2));
</script>

<svelte:head>
	<title>{data.title.startsWith(SITE_TITLE) ? data.title : `${data.title} — ${SITE_TITLE}`}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-topic">
	<ArticleLayout class="topic" label={data.title}>
		<header class="topic-header">
			<h1>{data.title}</h1>
		</header>

		{#if sections.length}
			<ContentsNav class="topic-contents" label={t.onThisPage}>
				<p class="topic-contents-title">{t.onThisPage}</p>
				<ContentsList>
					{#each sections as section (section.id)}
						<ContentsListItem><a href="#{section.id}">{section.text}</a></ContentsListItem>
					{/each}
				</ContentsList>
			</ContentsNav>
		{/if}

		<div class="prose">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- vendored Markdown, rendered at build time -->
			{@html data.html}
		</div>
	</ArticleLayout>
</div>
