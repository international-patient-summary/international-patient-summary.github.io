// Hero strings by language (the part of the locale code before the dash).
// `language` is the CLDR 49 word for "Language"; `tagline` is the sub-headline.
// A language not listed falls back to English.

import { HERO_B } from './ui-strings-b.js';
import { HERO_C } from './ui-strings-c.js';
import { HERO_D } from './ui-strings-d.js';

const HERO_BASE = {
	ar: { language: 'اللغة', tagline: 'المعيار العالمي لتبادل البيانات الصحية الأساسية عبر الحدود.' },
	bn: { language: 'ভাষা', tagline: 'সীমানা পেরিয়ে মূল স্বাস্থ্যতথ্য ভাগ করার বিশ্বমান।' },
	cy: {
		language: 'Iaith',
		tagline: 'Y safon fyd-eang ar gyfer rhannu data iechyd allweddol ar draws ffiniau.'
	},
	da: {
		language: 'Sprog',
		tagline: 'Den globale standard for deling af centrale sundhedsdata på tværs af grænser.'
	},
	de: {
		language: 'Sprache',
		tagline:
			'Der weltweite Standard für den grenzüberschreitenden Austausch zentraler Gesundheitsdaten.'
	},
	en: {
		language: 'Language',
		tagline: 'The worldwide standard for sharing key health data across borders.'
	},
	es: {
		language: 'Idioma',
		tagline:
			'El estándar mundial para compartir datos de salud esenciales a través de las fronteras.'
	},
	fr: {
		language: 'Langue',
		tagline:
			'La norme mondiale pour partager les données de santé essentielles au-delà des frontières.'
	},
	hi: { language: 'भाषा', tagline: 'सीमाओं के पार प्रमुख स्वास्थ्य डेटा साझा करने का विश्वव्यापी मानक।' },
	id: {
		language: 'Bahasa',
		tagline: 'Standar dunia untuk berbagi data kesehatan penting lintas negara.'
	},
	it: {
		language: 'Lingua',
		tagline: 'Lo standard mondiale per condividere i dati sanitari essenziali oltre i confini.'
	},
	ja: { language: '言語', tagline: '国境を越えて重要な健康データを共有するための世界標準。' },
	ko: { language: '언어', tagline: '국경을 넘어 핵심 건강 데이터를 공유하기 위한 세계 표준.' },
	nl: {
		language: 'Taal',
		tagline:
			'De wereldwijde standaard voor het delen van essentiële gezondheidsgegevens over grenzen heen.'
	},
	pt: {
		language: 'Idioma',
		tagline: 'O padrão mundial para compartilhar dados essenciais de saúde entre fronteiras.'
	},
	ru: {
		language: 'Язык',
		tagline: 'Мировой стандарт обмена ключевыми данными о здоровье через границы.'
	},
	sv: {
		language: 'Språk',
		tagline: 'Den globala standarden för att dela viktiga hälsodata över gränserna.'
	},
	sw: {
		language: 'Lugha',
		tagline: 'Kiwango cha dunia cha kushiriki data muhimu za afya kuvuka mipaka.'
	},
	ur: { language: 'زبان', tagline: 'سرحدوں کے پار اہم صحت کے ڈیٹا کے تبادلے کا عالمی معیار۔' },
	vi: {
		language: 'Ngôn ngữ',
		tagline: 'Tiêu chuẩn toàn cầu để chia sẻ dữ liệu sức khỏe thiết yếu xuyên biên giới.'
	},
	zh: { language: '语言', tagline: '跨越国界共享关键健康数据的全球标准。' }
};

const HERO = { ...HERO_BASE, ...HERO_B, ...HERO_C, ...HERO_D };

/** Hero strings for a locale code such as 'pt-br'. */
export function hero(locale) {
	const language = locale.split('-')[0];
	const base = HERO[language] ?? HERO.en;
	if (locale === 'pt-pt') return { ...base, language: 'Idioma' };
	if (locale === 'zh-tw')
		return { language: '語言', tagline: '跨越國界共享關鍵健康資料的全球標準。' };
	return base;
}
