export const languages = {
  en: 'EN',
  ko: 'KO',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.advisory': 'Advisory',
    'nav.speaking': 'Speaking',
    'nav.writing': 'Writing',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'cta.email': 'Email',
    'cta.linkedin': 'LinkedIn',
    'cta.langToggle': 'KO',
    'footer.copy': '© 2026 Ieum Tech. All rights reserved.',
  },
  ko: {
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.advisory': '자문',
    'nav.speaking': '강연',
    'nav.writing': '글',
    'nav.portfolio': '포트폴리오',
    'nav.contact': '연락',
    'cta.email': '이메일',
    'cta.linkedin': '링크드인',
    'cta.langToggle': 'EN',
    'footer.copy': '© 2026 이음 테크. All rights reserved.',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'ko') return 'ko';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.en): string {
    return ui[lang][key] ?? ui.en[key];
  };
}

export function localizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  if (path === '/') return '/ko/';
  return `/ko${path}`;
}
