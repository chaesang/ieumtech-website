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
    'nav.contact': 'Say Hello',
    'cta.email': 'Say Hello',
    'cta.linkedin': 'LinkedIn',
    'cta.langToggle': 'KO',
    'footer.copy': '© 2026 Ieum Tech. All rights reserved.',
    'search.label': 'Search',
    'search.placeholder': 'Search Ieum Tech…',
    'search.empty': 'Type to search across writing, talks, and more.',
    'search.noResults': 'No results.',
    'search.seeAll': 'See all results',
    'search.group.writing': 'Writing',
    'search.group.talks': 'Talks',
    'search.group.projects': 'Projects',
    'search.group.companies': 'Career',
    'search.group.about': 'About',
    'search.resultsFor': 'Results for',
    'search.title': 'Search',
  },
  ko: {
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.advisory': '자문',
    'nav.speaking': '강연',
    'nav.writing': '글',
    'nav.portfolio': '포트폴리오',
    'nav.contact': '연락하기',
    'cta.email': '이메일 보내기',
    'cta.linkedin': '링크드인',
    'cta.langToggle': 'EN',
    'footer.copy': '© 2026 이음 테크. 모든 권리 보유.',
    'search.label': '검색',
    'search.placeholder': '이음 테크 글·강연 검색…',
    'search.empty': '글·강연·프로젝트·이력에서 검색합니다.',
    'search.noResults': '결과가 없습니다.',
    'search.seeAll': '전체 결과 보기',
    'search.group.writing': '글',
    'search.group.talks': '강연',
    'search.group.projects': '프로젝트',
    'search.group.companies': '이력',
    'search.group.about': '소개',
    'search.resultsFor': '검색어',
    'search.title': '검색',
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
