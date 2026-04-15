#!/usr/bin/env tsx
/**
 * Migrate ALL Brunch articles (@chaesang) to src/content/writing/ko/
 *
 * Strategy:
 *   1. Scrape every known magazine + brunchbook to build an ID → series map.
 *   2. Iterate article IDs from MIN_ID to MAX_ID, fetch each.
 *   3. Set draft=false only for series in PUBLISH_SERIES; everything else draft=true.
 *
 * Usage:
 *   tsx scripts/migrate-brunch.ts            # full run (2..167)
 *   tsx scripts/migrate-brunch.ts --only 33  # single article
 *   tsx scripts/migrate-brunch.ts --range 100-167
 */

import { chromium, type Browser, type Page } from 'playwright';
import TurndownService from 'turndown';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const USER = 'chaesang';
const MIN_ID = 2;
const MAX_ID = 167;
const OUT_DIR = path.resolve('src/content/writing/ko');
const IMG_DIR = path.resolve('public/writing');
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

type SeriesKind = 'magazine' | 'brunchbook' | 'uncategorized';

interface SeriesMeta {
  slug: string;
  kind: SeriesKind;
  title: string;
  tags: string[];
  published: boolean; // draft=false when true
}

const SERIES_META: Record<string, SeriesMeta> = {
  // Published (draft=false)
  'svc-analysis':    { slug: 'svc-analysis',    kind: 'magazine',   title: '혼자 해 보는 서비스 분석', tags: ['service-analysis'], published: true  },
  'do-well-company': { slug: 'do-well-company', kind: 'magazine',   title: '회사에서의 기억들',         tags: ['organization','leadership'], published: true  },
  'itterm':          { slug: 'itterm',          kind: 'magazine',   title: '한국 IT 용어 이야기',        tags: ['it-term','language'], published: true  },

  // Drafts (review before publish)
  'chaesang-priv':   { slug: 'chaesang-priv',   kind: 'magazine',   title: '일과 관련한 업데이트들',    tags: ['update','speaking'], published: false },
  'chaesang-etc':    { slug: 'chaesang-etc',    kind: 'magazine',   title: '사소한 이야기들',           tags: ['essay'], published: false },
  'chaesang-it-26':  { slug: 'chaesang-it-26',  kind: 'magazine',   title: '2026년 IT 관련 생각들',     tags: ['it-thought'], published: false },
  'kaist-dfmba-25':  { slug: 'kaist-dfmba-25',  kind: 'magazine',   title: 'KAIST DFMBA 2025',          tags: ['kaist','lecture'], published: false },
  'kaist-dfmba-24':  { slug: 'kaist-dfmba-24',  kind: 'magazine',   title: 'KAIST DFMBA 2024',          tags: ['kaist','lecture'], published: false },
  'dfmba-recom':     { slug: 'dfmba-recom',     kind: 'magazine',   title: 'KAIST DFMBA 2023',          tags: ['kaist','lecture'], published: false },
  '90s-com-eng':     { slug: '90s-com-eng',     kind: 'brunchbook', title: '90년대 컴퓨터 공학 이야기', tags: ['memoir','retrospective'], published: false },
  'uncategorized':   { slug: 'uncategorized',   kind: 'uncategorized', title: '기타',                 tags: [],                    published: false },
};

interface ArticleMeta {
  id: string;
  title: string;
  date: string;
  summary: string;
  url: string;
  bodyHtml: string;
  imageUrls: string[];
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  hr: '---',
  bulletListMarker: '-',
  emDelimiter: '_',
});
turndown.keep(['figure', 'figcaption']);

async function openPage(browser: Browser): Promise<Page> {
  const ctx = await browser.newContext({ userAgent: UA, viewport: { width: 1280, height: 900 } });
  return ctx.newPage();
}

function normalizeDate(raw: string): string {
  const iso = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return iso[0];
  const kr = raw.match(/(\d{4})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일/);
  if (kr) return `${kr[1]}-${kr[2].padStart(2, '0')}-${kr[3].padStart(2, '0')}`;
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return new Date().toISOString().slice(0, 10);
}

async function fetchArticle(page: Page, id: string): Promise<ArticleMeta | null> {
  const url = `https://brunch.co.kr/@${USER}/${id}`;
  const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  if (res && res.status() === 404) return null;
  try {
    await page.waitForSelector('.wrap_body', { timeout: 10000 });
  } catch {
    return null;
  }

  const data = await page.evaluate(() => {
    const title =
      document.querySelector('.cover_title')?.textContent?.trim() ||
      document.querySelector('h1')?.textContent?.trim() ||
      document.title;
    const dateRaw =
      document.querySelector('.f_l .date')?.textContent?.trim() ||
      document.querySelector('meta[property="article:published_time"]')?.getAttribute('content') ||
      '';
    const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const firstP = document.querySelector('.wrap_body p')?.textContent?.trim() || '';
    const summary = ogDesc || metaDesc || firstP;
    const body = document.querySelector('.wrap_body')?.innerHTML || '';
    const images = Array.from(document.querySelectorAll('.wrap_body img'))
      .map((img) => (img as HTMLImageElement).src)
      .filter((src) => src);
    return { title, dateRaw, summary, body, images };
  });

  return {
    id,
    title: data.title,
    date: normalizeDate(data.dateRaw),
    summary: (data.summary || '').slice(0, 600),
    url,
    bodyHtml: data.body,
    imageUrls: data.images,
  };
}

async function downloadImages(urls: string[], slug: string): Promise<Map<string, string>> {
  const mapping = new Map<string, string>();
  if (urls.length === 0) return mapping;
  const dir = path.join(IMG_DIR, slug);
  await fs.mkdir(dir, { recursive: true });
  await Promise.all(
    urls.map(async (src, idx) => {
      try {
        const res = await fetch(src);
        if (!res.ok) return;
        const ext = (src.match(/\.(jpg|jpeg|png|gif|webp)(\?|$)/i)?.[1] || 'jpg').toLowerCase();
        const filename = `${String(idx + 1).padStart(2, '0')}.${ext}`;
        const localPath = path.join(dir, filename);
        const buf = Buffer.from(await res.arrayBuffer());
        await fs.writeFile(localPath, buf);
        mapping.set(src, `/writing/${slug}/${filename}`);
      } catch (err) {
        console.error(`  [img] fail ${src}:`, err);
      }
    }),
  );
  return mapping;
}

function rewriteImages(html: string, mapping: Map<string, string>): string {
  let out = html;
  for (const [orig, local] of mapping) {
    out = out.replaceAll(orig, local);
    const noProto = orig.replace(/^https?:/, '');
    out = out.replaceAll(noProto, local);
  }
  return out;
}

function cleanBody(html: string): string {
  let out = html;
  out = out.replace(/<(h[1-6])[^>]*>\s*(&nbsp;|&#160;|\s)*<\/\1>/gi, '');
  out = out.replace(/<p[^>]*>\s*(&nbsp;|&#160;)+\s*<\/p>/gi, '');
  out = out.replace(/<div[^>]*class="[^"]*(social|wrap_tag|article_recommend)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
  return out;
}

function cleanMarkdown(md: string): string {
  let out = md;
  out = out.replace(/\n{3,}/g, '\n\n');
  out = out.replace(/^\\---/gm, '---');
  out = out.replace(/^#{1,6}\s*$/gm, '');
  return out.trim();
}

function frontmatter(article: ArticleMeta, series: SeriesMeta): string {
  const rawSummary = article.summary || article.title;
  const stripped = rawSummary.replace(/^[^|]+\|\s*/, '').trim();
  const summary = (stripped.length >= 10 ? stripped : rawSummary)
    .slice(0, 260)
    .replace(/\n/g, ' ')
    .trim();
  const title = JSON.stringify(article.title);
  const sum = JSON.stringify(summary);
  const tags = series.tags.length ? `[${series.tags.map((t) => JSON.stringify(t)).join(', ')}]` : '[]';
  return [
    '---',
    `title: ${title}`,
    `date: ${article.date}`,
    `lang: ko`,
    `summary: ${sum}`,
    `tags: ${tags}`,
    `series: ${JSON.stringify(series.slug)}`,
    `source: brunch`,
    `externalUrl: ${article.url}`,
    `draft: ${!series.published}`,
    '---',
    '',
  ].join('\n');
}

async function writeArticle(article: ArticleMeta, series: SeriesMeta): Promise<string> {
  const slug = `chaesang-${article.id}`;
  const imageMap = await downloadImages(article.imageUrls, slug);
  const cleanedHtml = cleanBody(rewriteImages(article.bodyHtml, imageMap));
  const body = cleanMarkdown(turndown.turndown(cleanedHtml));
  const fm = frontmatter(article, series);
  const outPath = path.join(OUT_DIR, `${slug}.md`);
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(outPath, `${fm}\n${body}\n`);
  return outPath;
}

async function fetchMagazineIds(page: Page, slug: string): Promise<string[]> {
  const url = `https://brunch.co.kr/magazine/${slug}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  try {
    await page.waitForSelector('.list_post', { timeout: 10000 });
  } catch {
    return [];
  }
  await page.evaluate(async () => {
    for (let i = 0; i < 20; i++) {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 400));
    }
  });
  return page.evaluate(() => {
    const root = document.querySelector('.list_post');
    if (!root) return [] as string[];
    const set = new Set<string>();
    root.querySelectorAll<HTMLAnchorElement>('a[href*="/@"]').forEach((a) => {
      const m = a.getAttribute('href')?.match(/\/@[^/]+\/(\d+)/);
      if (m) set.add(m[1]);
    });
    return Array.from(set);
  });
}

async function fetchBrunchbookIds(page: Page, slug: string): Promise<string[]> {
  const url = `https://brunch.co.kr/brunchbook/${slug}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2500);
  await page.evaluate(async () => {
    for (let i = 0; i < 20; i++) {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 400));
    }
  });
  return page.evaluate(() => {
    const set = new Set<string>();
    document.querySelectorAll<HTMLAnchorElement>('a[href*="/@"]').forEach((a) => {
      const m = a.getAttribute('href')?.match(/\/@[^/]+\/(\d+)/);
      if (m) set.add(m[1]);
    });
    return Array.from(set);
  });
}

async function buildIdToSeriesMap(page: Page): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  for (const [slug, meta] of Object.entries(SERIES_META)) {
    if (meta.kind === 'uncategorized') continue;
    console.log(`  mapping ${meta.kind}:${slug} ...`);
    let ids: string[] = [];
    if (meta.kind === 'magazine') ids = await fetchMagazineIds(page, slug);
    else if (meta.kind === 'brunchbook') ids = await fetchBrunchbookIds(page, slug);
    console.log(`    → ${ids.length} ids`);
    for (const id of ids) {
      if (!map.has(id)) map.set(id, slug);
    }
  }
  return map;
}

function parseArgs(): { ids: string[] | null } {
  const argv = process.argv.slice(2);
  if (argv.length === 0) return { ids: null };
  if (argv[0] === '--only') return { ids: [argv[1]] };
  if (argv[0] === '--range') {
    const [a, b] = argv[1].split('-').map((n) => parseInt(n, 10));
    const ids: string[] = [];
    for (let i = a; i <= b; i++) ids.push(String(i));
    return { ids };
  }
  return { ids: argv };
}

async function main() {
  const { ids } = parseArgs();
  const browser = await chromium.launch({ headless: true });
  const page = await openPage(browser);

  try {
    console.log('== building id→series map ==');
    const idToSeries = await buildIdToSeriesMap(page);
    console.log(`   total mapped: ${idToSeries.size}`);

    const targets: string[] = ids ?? Array.from({ length: MAX_ID - MIN_ID + 1 }, (_, i) => String(MIN_ID + i));
    console.log(`== fetching ${targets.length} articles ==`);

    let success = 0, skipped = 0, failed = 0;
    for (const id of targets) {
      try {
        const article = await fetchArticle(page, id);
        if (!article) { skipped++; console.log(`  [${id}] skip (404 or no body)`); continue; }
        const seriesSlug = idToSeries.get(id) || 'uncategorized';
        const series = SERIES_META[seriesSlug];
        const out = await writeArticle(article, series);
        success++;
        console.log(`  [${id}] ${series.slug}${series.published?'':' (draft)'} → ${path.basename(out)}  imgs=${article.imageUrls.length}`);
      } catch (err) {
        failed++;
        console.error(`  [${id}] error:`, err);
      }
    }
    console.log(`\n== done: ${success} ok, ${skipped} skipped, ${failed} failed ==`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
