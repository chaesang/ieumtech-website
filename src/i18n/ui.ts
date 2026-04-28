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
    'search.placeholder': 'Search writing, talks, projects…',
    'search.empty': 'Start typing — writing, talks, projects, career.',
    'search.noResults': 'Nothing found for that.',
    'search.seeAll': 'See all matches',
    'search.group.writing': 'Writing',
    'search.group.talks': 'Talks',
    'search.group.projects': 'Projects',
    'search.group.companies': 'Career',
    'search.group.about': 'About',
    'search.resultsFor': '{count} matches for "{q}"',
    'search.title': 'Search the site',
    'contact.pageTitle': 'Say Hello — Ieum Tech',
    'contact.title': 'Say Hello',
    'contact.intro': "If there's a problem you're solving or a story to connect, I'd love to hear from you.",
    'contact.field.name': 'Name',
    'contact.field.email': 'Email',
    'contact.field.email.help': "I'll reply here.",
    'contact.field.topic': 'What brings you here?',
    'contact.field.topic.advisory': 'Organizational advisory (advising, coaching, training, projects)',
    'contact.field.topic.talks': 'Talks & lectures (conferences, companies, schools, online)',
    'contact.field.topic.other': "Something else (a thought on a piece, a quick question, just hello)",
    'contact.field.message': 'Tell me more',
    'contact.field.message.help': "Even half-formed is welcome — context, what you're hoping for, anything else.",
    'contact.field.affiliation': 'Affiliation or company',
    'contact.field.affiliation.help': 'Optional.',
    'contact.submit': 'Send',
    'contact.submitting': 'Sending…',
    'contact.success.title': 'Got it.',
    'contact.success.body': "I'll reply at the email you gave, within a few days.",
    'contact.success.signoff': '— Chaesang',
    'contact.error': 'Something went wrong. Please try again, or email hello@ieumtech.net directly.',
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
    'search.placeholder': '이음 안에서 찾기',
    'search.empty': '글·강연·프로젝트·거쳐 온 자리에서 찾아 봅니다.',
    'search.noResults': '이 키워드로는 찾지 못했습니다.',
    'search.seeAll': '전체 결과 살펴보기',
    'search.group.writing': '글',
    'search.group.talks': '강연',
    'search.group.projects': '프로젝트',
    'search.group.companies': '이력',
    'search.group.about': '소개',
    'search.resultsFor': '"{q}" — {count}개 찾음',
    'search.title': '검색',
    'contact.pageTitle': '연락하기 — 이음 테크',
    'contact.title': 'Say Hello',
    'contact.intro': '함께 고민하고 잇고 싶은 이야기가 있다면, 편하게 말을 건네주세요.',
    'contact.field.name': '이름',
    'contact.field.email': '이메일',
    'contact.field.email.help': '이쪽으로 답장 드리겠습니다.',
    'contact.field.topic': '어떤 일로 연락하셨나요?',
    'contact.field.topic.advisory': '조직 자문 (자문·코칭·트레이닝·프로젝트)',
    'contact.field.topic.talks': '강연·강의 (컨퍼런스·기업·학교·온라인 등)',
    'contact.field.topic.other': '기타 (글 감상·학생 질문·동료 인사 등 무엇이든)',
    'contact.field.message': '들려주실 이야기',
    'contact.field.message.help': '정리되지 않은 단계여도 괜찮습니다 — 상황·맥락·궁금한 점을 편하게 적어 주세요.',
    'contact.field.affiliation': '소속·회사',
    'contact.field.affiliation.help': '해당되는 경우만.',
    'contact.submit': '보내기',
    'contact.submitting': '보내는 중…',
    'contact.success.title': '잘 받았습니다.',
    'contact.success.body': '며칠 안에 적어주신 이메일로 답장 드리겠습니다.',
    'contact.success.signoff': '— 정채상, 이음 테크',
    'contact.error': '전송에 실패했습니다. 다시 시도해 주시거나 hello@ieumtech.net으로 직접 보내주세요.',
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
