<script>
	import SearchGate from '#lib/SearchGate.svelte';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Footer, Header, SkipLink } from '@lilydesignsystem/svelte-headless';
	import PickerBar from '@lilydesignsystem/svelte-picker-bar';
	import { DEFAULT_LOCALE, localeLabel, matchLocale } from '#lib/locales.js';
	import { ui } from '#lib/i18n.js';
	import {
		CODEBERG_REPO,
		GITLAB_REPO,
		SITE_REPO,
		SITE_TITLE,
		SITE_URL,
		SOURCE_REPO,
		STORAGE_PREFIX
	} from '#lib/site.js';

	let { data, children } = $props();

	// The 404.html fallback is rendered without layout data, so every read of
	// `data` here has a fallback rather than throwing on an error page.
	const locales = $derived(data?.locales ?? []);
	const locale = $derived(page.params.locale);
	const t = $derived(ui(locale ?? DEFAULT_LOCALE));
	const path = $derived(page.url.pathname);

	// The header picker offers locales to switch to, so the current one is omitted.
	const pickerLocales = $derived(locale ? locales.filter((code) => code !== locale) : locales);

	const homeHref = $derived(locale ? `/${locale}/` : '/');

	const topLinks = $derived([
		{ href: homeHref, label: t.navHome },
		{ href: '/about/', label: t.navAbout }
	]);

	// Links for the header's link picker, the leftmost button.
	const projectLinks = $derived([
		{ id: 'home', label: t.navHome, href: homeHref, current: path === homeHref },
		{ id: 'about', label: t.navAbout, href: '/about/', current: path === '/about/' },
		// Absolute, so the prerender crawler does not treat this generated file as a route.
		{ id: 'llms', label: 'llms.txt', href: `${SITE_URL}/llms.txt` },
		{ id: 'github', label: 'GitHub', href: SOURCE_REPO, newTab: true },
		{ id: 'codeberg', label: 'Codeberg', href: CODEBERG_REPO, newTab: true },
		{ id: 'gitlab', label: 'GitLab', href: GITLAB_REPO, newTab: true }
	]);

	const shareTargets = $derived([
		{
			id: 'email',
			label: t.shareEmailLabel,
			href: (url, title) =>
				`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
		},
		{
			id: 'linkedin',
			label: t.shareLinkedinLabel,
			href: (url) =>
				`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'reddit',
			label: t.shareRedditLabel,
			href: (url, title) =>
				`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		},
		{
			id: 'bluesky',
			label: t.shareBlueskyLabel,
			href: (url, title) =>
				`https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'mastodon',
			label: t.shareMastodonLabel,
			href: (url, title) =>
				`https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		}
	]);

	function current(href) {
		return path === resolve(href.slice(1)) || path === href;
	}

	// The locale picker only changes `lang`/`dir` and calls this; it never
	// navigates on its own. Each locale has the same routes, so swapping the
	// `/<code>/` prefix is exact.
	let restoredOnce = false;

	// Read before the picker mounts and saves anything: has this browser
	// already chosen a locale? If not, the first visit to "/" goes to the
	// locale that matches navigator.language.
	let hadSavedLocale = true;
	try {
		hadSavedLocale =
			typeof localStorage === 'undefined' || !!localStorage.getItem(`${STORAGE_PREFIX}.locale`);
	} catch {
		hadSavedLocale = false;
	}

	function browserLocale() {
		if (hadSavedLocale || typeof navigator === 'undefined') return null;
		const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
		return matchLocale(tags, locales);
	}

	function navigateToLocale(next) {
		const restoring = !restoredOnce;
		restoredOnce = true;
		if (locale) {
			goto(resolve(path.replace(/^\/[\w-]+/, `/${next}`).slice(1)), { refreshAll: true });
			return;
		}
		// A search (/?<target>) is on the root page: restoring the saved locale
		// must not navigate away and drop it.
		if (path === '/' && page.url.search) return;
		// The first onChange after a full page load is the picker restoring the
		// saved locale, not a user choice. Only the root page acts on it.
		if (restoring && path !== '/') return;
		// On the root page with nothing saved, stay on the page that introduces
		// every language unless the browser clearly prefers one.
		if (restoring && !hadSavedLocale) {
			const preferred = browserLocale();
			if (preferred && locales.length > 1) goto(resolve(`${preferred}/`), { refreshAll: true });
			return;
		}
		goto(resolve(`${next}/`), { refreshAll: true });
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#0f766e" />
</svelte:head>

<SkipLink class="skip-link" href="#main" label={t.skipToContent} />

<Header class="site-header" label="Site">
	<div class="site-header-inner">
		<a class="site-brand" href={resolve(homeHref.slice(1))}>
			<span class="site-brand-mark" aria-hidden="true">⚕</span>
			<span class="site-brand-name">{SITE_TITLE}</span>
		</a>

		<nav class="site-nav" aria-label="Main">
			{#each topLinks as link (link.href)}
				<a
					href={resolve(link.href.slice(1))}
					aria-current={current(link.href) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
			<a href={SOURCE_REPO}>GitHub</a>
		</nav>

		{#snippet shareIcon()}
			<svg
				class="share-picker-icon"
				viewBox="0 0 16 16"
				width="1.05rem"
				height="1.05rem"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M2.5 8h11M9 3.5 13.5 8 9 12.5"></path>
			</svg>
		{/snippet}

		<PickerBar
			class="site-controls"
			links={projectLinks}
			linkProps={{
				// Routes navigate in-app; the static llms.txt file is a plain load.
				navigate: (href) => (href.endsWith('.txt') ? location.assign(href) : goto(href))
			}}
			labels={{
				link: t.pickerLinks,
				search: t.navSearch,
				searchInput: t.searchInputLabel,
				searchSubmit: t.navSearch,
				theme: t.pickerTheme,
				locale: t.pickerLanguage,
				textSize: t.pickerTextSize,
				share: t.pickerShare
			}}
			searchProps={{ placeholder: t.searchPlaceholder }}
			themesUrl={resolve('assets/themes/')}
			themeProps={{
				defaultValue: 'light',
				detectFromSystem: true,
				storageKey: `${STORAGE_PREFIX}.theme`
			}}
			locales={pickerLocales}
			localeProps={{
				value: locale ?? '',
				defaultValue: DEFAULT_LOCALE,
				storageKey: `${STORAGE_PREFIX}.locale`,
				localeLabels: Object.fromEntries(locales.map((code) => [code, localeLabel(code)])),
				onChange: navigateToLocale
			}}
			textSizeProps={{
				defaultValue: 'normal',
				storageKey: `${STORAGE_PREFIX}.text-size`
			}}
			{shareTargets}
			shareProps={{
				title: page.data?.title ?? SITE_TITLE,
				copyLabel: t.shareCopyLink,
				copiedLabel: t.shareCopied,
				copyFailedLabel: t.shareCopyFailed,
				children: shareIcon
			}}
		/>
	</div>
</Header>

<div class="site-body">
	<main id="main" class="site-main">
		<SearchGate {children} />
	</main>
</div>

<Footer class="site-footer" label="Site">
	<div class="site-footer-inner">
		<p>
			<strong>{SITE_TITLE}</strong>{t.footerTaglineSuffix}
		</p>
		<p class="site-footer-note">{t.footerNote}</p>
		<nav class="site-footer-links" aria-label="Footer">
			<a href={resolve(homeHref.slice(1))}>{t.navHome}</a>
			<a href={resolve('about/')}>{t.navAbout}</a>
			<a href={SITE_REPO}>{t.footerSourceLink}</a>
		</nav>
	</div>
</Footer>
