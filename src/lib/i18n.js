// User interface strings: everything in the site frame that is not page
// content, such as navigation, picker, and share labels.
//
// Each locale falls back to English key by key, so an untranslated locale
// still renders correctly in English rather than showing blanks.

const EN = {
	skipToContent: 'Skip to content',
	navHome: 'Home',
	navAbout: 'About',
	navSearch: 'Search',
	onThisPage: 'On this page',
	readIntroduction: 'Read the introduction',
	chooseLanguage: 'Choose a language',
	footerTaglineSuffix:
		' — an introduction to the worldwide standard for sharing key health data across borders.',
	footerNote:
		'This site is educational. It is not medical advice and not an official publication of ISO, CEN, or HL7. Check the official specifications before implementing.',
	footerSourceLink: 'Source',
	pickerTheme: 'Theme',
	pickerLanguage: 'Language',
	pickerTextSize: 'Text size',
	pickerShare: 'Share',
	pickerLinks: 'Links',
	searchInputLabel: 'Search this site',
	searchPlaceholder: 'Search…',
	shareCopyLink: 'Copy link',
	shareCopied: 'Copied',
	shareCopyFailed: 'Copy failed',
	shareEmailLabel: 'Email Link',
	shareLinkedinLabel: 'Share on LinkedIn',
	shareRedditLabel: 'Share on Reddit',
	shareBlueskyLabel: 'Share on Bluesky',
	shareMastodonLabel: 'Share on Mastodon'
};

/** Translations by locale code. Add a locale here when its strings exist. */
const STRINGS = {
	'en-001': EN
};

/** The UI strings for a locale, falling back to English per key. */
export function ui(locale) {
	return { ...EN, ...(STRINGS[locale] ?? {}) };
}
