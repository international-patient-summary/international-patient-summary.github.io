// Locale display metadata shared by the root page and the header's language
// picker. The set of *available* locales always comes from the vendored
// content (`#lib/server/content.js` locales()). This module only says how to
// label codes that the content already declares.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-us': 'English - United States',
	'en-gb': 'English - Great Britain',
	'en-gb-oxendict': 'English - Great Britain - Oxford',
	'en-001': 'English',
	'zh-th': '中文 - 泰国',
	'hi-np': 'हिन्दी - नेपाल',
	'cy-ar': 'Cymraeg - Ariannin',
	'ar-dz': 'العربية - الجزائر',
	'fr-ca': 'Français - Canada',
	'ru-by': 'Русский - Беларусь',
	'bn-in': 'বাংলা - ভারত',
	'id-my': 'Bahasa Indonesia - Malaysia',
	'en-150': 'English - Europe',
	'da-001': 'Dansk',
	'da-dk': 'Dansk - Danmark',
	'de-001': 'Deutsch',
	'de-de': 'Deutsch - Deutschland',
	'it-001': 'Italiano',
	'it-it': 'Italiano - Italia',
	'ja-001': '日本語',
	'ja-jp': '日本語 - 日本',
	'ko-001': '한국어',
	'ko-kr': '한국어 - 대한민국',
	'nl-001': 'Nederlands',
	'nl-nl': 'Nederlands - Nederland',
	'no-001': 'Norsk',
	'no-no': 'Norsk - Norge',
	'et-001': 'Eesti',
	'et-ee': 'Eesti - Eesti',
	'et-et': 'Eesti - Eesti',
	'pl-001': 'Polski',
	'pl-pl': 'Polski - Polska',
	'es-es': 'Español - España',
	'es-001': 'Español',
	'fr-fr': 'Français - France',
	'fr-001': 'Français',
	'ru-ru': 'Русский - Россия',
	'ru-001': 'Русский',
	'uk-001': 'Українська',
	'uk-ua': 'Українська - Україна',
	'sv-001': 'Svenska',
	'sv-se': 'Svenska - Sverige',
	'fi-001': 'Suomi',
	'fi-fi': 'Suomi - Suomi',
	'zh-cn': '中文 - 中国大陆',
	'zh-001': '中文',
	'zh-tw': '中文 - 台灣',
	'ar-eg': 'العربية - مصر',
	'ar-001': 'العربية',
	'cy-gb': 'Cymraeg - Prydain Fawr',
	'cy-001': 'Cymraeg',
	'hi-001': 'हिन्दी',
	'hi-in': 'हिन्दी - भारत',
	'bn-001': 'বাংলা',
	'bn-bd': 'বাংলা - বাংলাদেশ',
	'pt-001': 'Português',
	'pt-pt': 'Português - Portugal',
	'id-001': 'Bahasa Indonesia',
	'id-id': 'Bahasa Indonesia - Indonesia',
	'ur-001': 'اردو',
	'ur-pk': 'اردو - پاکستان',
	'vi-001': 'Tiếng Việt',
	'vi-vn': 'Tiếng Việt - Việt Nam',
	'th-001': 'ไทย',
	'th-th': 'ไทย - ประเทศไทย',
	'is-001': 'Íslenska',
	'is-is': 'Íslenska - Ísland',
	'tr-001': 'Türkçe',
	'tr-tr': 'Türkçe - Türkiye',
	'sw-001': 'Kiswahili',
	'sw-tz': 'Kiswahili - Tanzania',
	'es-mx': 'Español - México',
	'pt-br': 'Português - Brasil',
	'de-at': 'Deutsch - Österreich',
	'fr-be': 'Français - Belgique',
	'fr-lu': 'Français - Luxembourg',
	'nl-be': 'Nederlands - België',
	'en-ie': 'English - Ireland',
	'bg-001': 'Български',
	'bg-bg': 'Български - България',
	'bh-001': 'भोजपुरी',
	'cs-001': 'Čeština',
	'cs-cz': 'Čeština - Česko',
	'el-001': 'Ελληνικά',
	'el-cy': 'Ελληνικά - Κύπρος',
	'el-gr': 'Ελληνικά - Ελλάδα',
	'eu-001': 'Euskara',
	'eu-es': 'Euskara - Espainia',
	'fa-001': 'فارسی',
	'ga-001': 'Gaeilge',
	'ga-ie': 'Gaeilge - Éire',
	'gd-001': 'Gàidhlig',
	'gd-gb': 'Gàidhlig - Breatainn Mhòr',
	'gu-001': 'ગુજરાતી',
	'ha-001': 'Hausa',
	'he-001': 'עברית',
	'hr-001': 'Hrvatski',
	'hr-hr': 'Hrvatski - Hrvatska',
	'hu-001': 'Magyar',
	'hu-hu': 'Magyar - Magyarország',
	'jv-001': 'Basa Jawa',
	'km-001': 'ខ្មែរ',
	'km-kh': 'ខ្មែរ - កម្ពុជា',
	'kn-001': 'ಕನ್ನಡ',
	'kw-001': 'Kernewek',
	'kw-gb': 'Kernewek - Breten Veur',
	'lb-001': 'Lëtzebuergesch',
	'lb-lu': 'Lëtzebuergesch - Lëtzebuerg',
	'lo-001': 'ລາວ',
	'lo-la': 'ລາວ - ລາວ',
	'lt-001': 'Lietuvių',
	'lt-lt': 'Lietuvių - Lietuva',
	'lv-001': 'Latviešu',
	'lv-lv': 'Latviešu - Latvija',
	'mr-001': 'मराठी',
	'ms-001': 'Bahasa Melayu',
	'mt-001': 'Malti',
	'mt-mt': 'Malti - Malta',
	'nb-001': 'Norsk bokmål',
	'nb-no': 'Norsk bokmål - Norge',
	'pa-001': 'ਪੰਜਾਬੀ',
	'pcm-001': 'Naijá',
	'ro-001': 'Română',
	'ro-ro': 'Română - România',
	'sco-001': 'Scots',
	'sco-gb': 'Scots - Great Britain',
	'sk-001': 'Slovenčina',
	'sk-sk': 'Slovenčina - Slovensko',
	'sl-001': 'Slovenščina',
	'sl-si': 'Slovenščina - Slovenija',
	'ta-001': 'தமிழ்',
	'te-001': 'తెలుగు',
	'tl-001': 'Tagalog',
	'wuu-001': '吴语',
	'yue-001': '粵語'
};

export const DEFAULT_LOCALE = 'en-001';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}

// Browser language tags that name a locale family under a different code.
const LANGUAGE_ALIASES = { nb: 'no', nn: 'no' };

/**
 * The available locale code that best matches the browser's language tags
 * (navigator.languages), or null. A tag is normalised ('cy_GB' → 'cy-gb'),
 * then tried as an exact locale, then by its language alone: '<lang>-001',
 * then '<lang>-<lang>', then any '<lang>-*' locale. Earlier tags win.
 */
export function matchLocale(tags, codes) {
	const available = new Set(codes);
	for (const tag of tags) {
		const normalised = String(tag ?? '')
			.toLowerCase()
			.replace(/_/g, '-');
		if (!normalised) continue;
		if (available.has(normalised)) return normalised;
		const language = normalised.split('-')[0];
		const family = LANGUAGE_ALIASES[language] ?? language;
		if (available.has(`${family}-001`)) return `${family}-001`;
		if (available.has(`${family}-${family}`)) return `${family}-${family}`;
		const any = [...available].find((code) => code.startsWith(`${family}-`));
		if (any) return any;
	}
	return null;
}
