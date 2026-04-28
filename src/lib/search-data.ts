import { getCollection } from 'astro:content';
import { getAllSeries } from '~/lib/collections';
import type { Lang } from '~/i18n/ui';

export interface SearchItem {
  id: string;
  type: 'writing' | 'talks' | 'projects' | 'companies' | 'about';
  title: string;
  summary?: string;
  body?: string;
  tags?: string[];
  date?: string;
  url: string;
  external: boolean;
  source?: string;
  series?: string;
  seriesTitle?: string;
  /** Searchable variants — title with spaces removed, brand aliases, etc. Helps Korean compound-word queries. */
  aliases?: string;
  lang: Lang;
}

/** Generate a Korean-friendly aliases string. Joins compound forms (no-space title) and given extras. */
function buildAliases(title: string, extras: string[] = []): string {
  const parts = new Set<string>();
  const noSpace = title.replace(/\s+/g, '');
  if (noSpace !== title) parts.add(noSpace);
  for (const e of extras) parts.add(e);
  return Array.from(parts).join(' ');
}

/** Brand aliases — applied to about and select items so brand searches work without exact spacing. */
const BRAND_ALIASES = ['이음테크', '이음 테크', 'ieumtech', 'Ieum Tech', 'IeumTech'];

const sourceLabel = (source: string): string => {
  if (source === 'brunch') return 'Brunch';
  if (source === 'nia') return 'NIA';
  if (source === 'dbr') return 'DBR';
  if (source === 'linkedin') return 'LinkedIn';
  return '';
};

/** Strip markdown noise to a flat searchable string. Kept lossy on purpose — we just want tokens. */
function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')           // fenced code blocks
    .replace(/`[^`]*`/g, ' ')                  // inline code
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')     // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')   // links → keep label
    .replace(/<[^>]+>/g, ' ')                  // html tags
    .replace(/^[#>\-*+\s]{1,6}/gm, '')         // heading/list/quote markers at line start
    .replace(/\*+|_+|~+/g, ' ')                // emphasis markers
    .replace(/\s+/g, ' ')                      // collapse whitespace
    .trim();
}

const aboutContent: Record<Lang, { title: string; summary: string; body: string }> = {
  ko: {
    title: '정채상 소개',
    summary: '이음 테크 대표. Google 13년, Banksalad VP, INEEJI CTO, KAIST 겸임교수, MegazoneCloud Distinguished SWE, Aisle Street 공동창업.',
    body: '80년대 서울에서 컴퓨터를 처음 만났습니다. 90년대에는 컴퓨터공학과에 적을 두고 지냈고, 전공 수업보다 호기심이 먼저였던 거 같습니다. 그 흐름을 따라 셋톱박스 펌웨어, 검색 엔진, 스마트폰 운영체제, 클라우드, 산업 AI 사이를 거쳐 왔습니다. 2007년 Google 서울 오피스의 초기 멤버로 합류했습니다. 엔지니어로 시작해 매니저로, 검색, 앱 인덱싱, Play Store, Lens, Cloud Logging 사이를 오갔습니다. 2022년 Banksalad에서 엔지니어링 VP로 일했습니다. 그 뒤로는 INEEJI의 CTO, KAIST 경영대학 겸임교수, MegazoneCloud의 Distinguished SWE로 지내 왔습니다. 그 한편으로 교육 AI 스타트업 Aisle Street를 공동 창업해 exemplar.ai를 만들고 있습니다. 서울대학교 공학 석사·학사. Google 재직 중 미국 특허 5건.',
  },
  en: {
    title: 'About Chaesang Jung',
    summary: "Founder of Ieum Tech. Google 13 years, Banksalad VP of Engineering, INEEJI CTO, KAIST Adjunct Professor, MegazoneCloud Distinguished SWE, Aisle Street co-founder.",
    body: "I met computers in Seoul in the 1980s. Through the 1990s as a computer science student, curiosity led before the major did, and that current carried me from set-top box firmware to search, mobile OSes, cloud, and industrial AI. In 2007 I joined Google's Seoul office as one of its earliest members. I started as an engineer and became a manager, moving between Search, App Indexing, Play Store, Lens, and Cloud Logging. In 2022 I worked as VP of Engineering at Banksalad. I then served as CTO at INEEJI, Adjunct Professor at KAIST College of Business, and Distinguished Software Engineer at MegazoneCloud, and co-founded Aisle Street, an education AI startup building exemplar.ai. Seoul National University, M.Eng. & B.Eng. in Computer Engineering. 5 U.S. patents during Google tenure.",
  },
};

export async function buildSearchItems(lang: Lang): Promise<SearchItem[]> {
  const items: SearchItem[] = [];

  const seriesEntries = await getAllSeries();
  const seriesTitleBySlug = new Map<string, string>();
  for (const s of seriesEntries) {
    seriesTitleBySlug.set(s.data.slug, s.data.titles[lang] ?? s.data.titles.ko);
  }

  const slugOf = (id: string) => id.split('/').pop()!.replace(/\.md$/, '');
  const basePath = (p: string) => (lang === 'ko' ? `/ko${p}` : p);

  const writing = await getCollection(
    'writing',
    (e) => !e.data.draft && e.data.lang === lang,
  );
  for (const e of writing) {
    const seriesAnchor = e.data.series ? `#series-${e.data.series}` : '';
    const url = e.data.externalUrl ?? `${basePath('/writing')}${seriesAnchor}`;
    const seriesTitle = e.data.series ? seriesTitleBySlug.get(e.data.series) : undefined;
    items.push({
      id: `writing:${e.id}`,
      type: 'writing',
      title: e.data.title,
      summary: e.data.summary,
      body: stripMarkdown(e.body),
      tags: e.data.tags,
      date: e.data.date.toISOString().slice(0, 10),
      url,
      external: !!e.data.externalUrl,
      source: sourceLabel(e.data.source),
      series: e.data.series,
      seriesTitle,
      aliases: buildAliases(e.data.title, seriesTitle ? [seriesTitle.replace(/\s+/g, '')] : []),
      lang,
    });
  }

  const talks = await getCollection(
    'talks',
    (e) => !e.data.draft && e.data.lang === lang,
  );
  for (const e of talks) {
    const firstLink = e.data.links?.[0]?.url;
    const url = firstLink ?? `${basePath('/talks')}#talk-${slugOf(e.id)}`;
    const summaryParts = [e.data.event, e.data.venue].filter(Boolean);
    items.push({
      id: `talks:${e.id}`,
      type: 'talks',
      title: e.data.title,
      summary: summaryParts.join(' · '),
      tags: e.data.tags,
      date: e.data.date.toISOString().slice(0, 10),
      url,
      external: !!firstLink,
      aliases: buildAliases(e.data.title),
      lang,
    });
  }

  const projects = await getCollection(
    'projects',
    (e) => !e.data.draft && e.data.lang === lang,
  );
  for (const e of projects) {
    const url = `${basePath('/projects')}#project-${slugOf(e.id)}`;
    items.push({
      id: `projects:${e.id}`,
      type: 'projects',
      title: e.data.title,
      summary: e.data.summary,
      tags: e.data.tags,
      date: e.data.period.start.toISOString().slice(0, 10),
      url,
      external: false,
      aliases: buildAliases(e.data.title),
      lang,
    });
  }

  const companies = await getCollection(
    'companies',
    (e) => !e.data.draft && e.data.lang === lang,
  );
  for (const e of companies) {
    const url = `${basePath('/companies')}#co-${slugOf(e.id)}`;
    const summaryParts = [e.data.role, e.data.summary].filter(Boolean);
    items.push({
      id: `companies:${e.id}`,
      type: 'companies',
      title: e.data.name,
      summary: summaryParts.join(' — '),
      body: stripMarkdown(e.body),
      tags: e.data.tags,
      date: e.data.period.start.toISOString().slice(0, 10),
      url,
      external: false,
      aliases: buildAliases(e.data.name),
      lang,
    });
  }

  const about = aboutContent[lang];
  items.push({
    id: `about:${lang}`,
    type: 'about',
    title: about.title,
    summary: about.summary,
    body: about.body,
    url: lang === 'ko' ? '/ko/about' : '/about',
    external: false,
    aliases: buildAliases(about.title, BRAND_ALIASES),
    lang,
  });

  return items;
}
