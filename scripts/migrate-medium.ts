#!/usr/bin/env tsx
/**
 * Migrate Medium articles (@chaesangjung) to src/content/writing/en/
 *
 * Strategy:
 *   1. Scrape the profile page (infinite scroll) to enumerate all article URLs.
 *   2. For each article, fetch title, date, summary, body html, images.
 *   3. Strip the trailing Medium hash from the URL slug; use the cleaned slug
 *      as the local filename. Mirror media into public/writing/<slug>/.
 *
 * Usage:
 *   tsx scripts/migrate-medium.ts --auto              # fetch articles not yet local
 *   tsx scripts/migrate-medium.ts --only <slug>       # single article by URL slug
 *   tsx scripts/migrate-medium.ts                     # full sync (everything found)
 */

import { chromium, type Browser, type Page } from 'playwright';
import TurndownService from 'turndown';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const USER = 'chaesangjung';
const PROFILE_URL = `https://${USER}.medium.com/`;
const OUT_DIR = path.resolve('src/content/writing/en');
const IMG_DIR = path.resolve('public/writing');
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

interface ArticleMeta {
  slug: string;          // cleaned slug, used as filename and site URL
  url: string;           // full Medium URL (kept as externalUrl)
  title: string;
  date: string;          // YYYY-MM-DD
  summary: string;
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

function normalizeDate(raw: string | null | undefined): string {
  if (!raw) return new Date().toISOString().slice(0, 10);
  const iso = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return new Date().toISOString().slice(0, 10);
}

// Strip Medium's trailing -[hash] (last segment of 8+ hex chars) from a URL slug.
function cleanSlug(rawSlug: string): string {
  return rawSlug.replace(/-[a-f0-9]{8,}$/i, '').replace(/^\/+|\/+$/g, '');
}

// Pull a URL slug from any chaesangjung.medium.com or medium.com/@chaesangjung URL.
function urlToSlug(url: string): string | null {
  try {
    const u = new URL(url);
    // only the author's profile subdomain (chaesangjung.medium.com) and the canonical
    // /@chaesangjung/ path are accepted; policy.medium.com and tag pages are out.
    const isAuthorSub = u.hostname === `${USER}.medium.com`;
    const isCanonical = u.hostname === 'medium.com' && u.pathname.startsWith(`/@${USER}/`);
    if (!isAuthorSub && !isCanonical) return null;
    let p = u.pathname.replace(/^\/+|\/+$/g, '');
    if (p.startsWith(`@${USER}/`)) p = p.slice(`@${USER}/`.length);
    if (!p || p.includes('/')) return null;
    if (['about', 'followers', 'following', 'activity', 'lists', 'search', 'has-recommended'].includes(p)) return null;
    return cleanSlug(p);
  } catch { return null; }
}

async function collectArticleUrls(page: Page): Promise<string[]> {
  await page.goto(PROFILE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  // infinite scroll until height stops growing
  const seen = new Set<string>();
  let stableLoops = 0;
  let lastHeight = -1;
  for (let i = 0; i < 60 && stableLoops < 3; i++) {
    const links = await page.$$eval('a[href]', (els) =>
      els.map((a) => (a as HTMLAnchorElement).href).filter(Boolean),
    );
    for (const href of links) {
      const slug = urlToSlug(href);
      if (slug) seen.add(href.split('?')[0].split('#')[0]);
    }
    const height = await page.evaluate(() => document.body.scrollHeight);
    if (height === lastHeight) stableLoops++; else { stableLoops = 0; lastHeight = height; }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
  }
  return Array.from(seen);
}

// The profile scroll-crawl is flaky in headless/bot contexts — Medium's infinite
// scroll sometimes loads only a partial window, dropping even freshly published
// posts. The RSS feed is the canonical, bot-friendly source for the latest posts,
// so we union it in. RSS covers recency; the scroll covers history.
async function collectFromRss(): Promise<string[]> {
  const feedUrl = `https://${USER}.medium.com/feed`;
  try {
    const res = await fetch(feedUrl, { headers: { 'User-Agent': UA } });
    if (!res.ok) {
      console.error(`  [rss] ${res.status} ${feedUrl}`);
      return [];
    }
    const xml = await res.text();
    const urls = new Set<string>();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    for (const item of items) {
      const link = item.match(/<link>\s*([^<]+?)\s*<\/link>/)?.[1]?.trim();
      if (link && urlToSlug(link)) {
        urls.add(link.split('?')[0].split('#')[0]);
      }
    }
    return Array.from(urls);
  } catch (err) {
    console.error('  [rss] fail:', err);
    return [];
  }
}

async function fetchArticle(browser: Browser, articleUrl: string): Promise<ArticleMeta | null> {
  const page = await openPage(browser);
  try {
  const res = await page.goto(articleUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  if (res && res.status() >= 400) return null;
  try {
    await page.waitForSelector('article', { timeout: 10000 });
  } catch {
    return null;
  }

  const data = await page.evaluate(() => {
    const article = document.querySelector('article');
    const title =
      article?.querySelector('h1')?.textContent?.trim() ||
      document.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
      document.title;
    const dateRaw =
      article?.querySelector('time')?.getAttribute('datetime') ||
      document.querySelector('meta[property="article:published_time"]')?.getAttribute('content') ||
      document.querySelector('time')?.textContent ||
      '';
    const summary =
      document.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
      document.querySelector('meta[name="description"]')?.getAttribute('content') ||
      article?.querySelector('h2, h3')?.textContent?.trim() ||
      '';
    // body: find <section> children inside <article>, take the largest combined
    let body = '';
    if (article) {
      const sections = Array.from(article.querySelectorAll('section'));
      body = sections.length
        ? sections.map((s) => s.innerHTML).join('\n')
        : article.innerHTML;
    }
    const images = Array.from(article?.querySelectorAll('img') ?? [])
      .map((img) => (img as HTMLImageElement).src)
      .filter((src) => src && /^https?:/.test(src));
    return { title, dateRaw, summary, body, images };
  });

  const slug = urlToSlug(articleUrl);
  if (!slug || !data.title || !data.body) return null;

  return {
    slug,
    url: articleUrl,
    title: data.title,
    date: normalizeDate(data.dateRaw),
    summary: (data.summary || data.title).slice(0, 600),
    bodyHtml: data.body,
    imageUrls: data.images,
  };
  } finally {
    await page.context().close();
  }
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
  }
  return out;
}

function cleanBody(html: string): string {
  let out = html;
  // strip Medium claps, buttons, follow widgets, member-only banners
  out = out.replace(/<div[^>]*data-testid="[^"]*(clap|response|follow|member)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
  out = out.replace(/<button[\s\S]*?<\/button>/gi, '');
  out = out.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  // strip empty headings / blank paragraphs
  out = out.replace(/<(h[1-6])[^>]*>\s*<\/\1>/gi, '');
  out = out.replace(/<p[^>]*>\s*<\/p>/gi, '');
  return out;
}

function cleanMarkdown(md: string): string {
  let out = md;
  out = out.replace(/\n{3,}/g, '\n\n');
  out = out.replace(/^\\---/gm, '---');
  out = out.replace(/^#{1,6}\s*$/gm, '');
  return out.trim();
}

// Best-effort series mapping from title — mirrors the Brunch series buckets so
// the same author voice surfaces under the same series across languages.
// Medium "list" (series) URLs are stable identifiers. When an essay's footer links
// back to its series list, that's an authoritative signal — far more reliable than
// guessing from title keywords. Map the known list IDs to local series slugs; this
// takes precedence so a footer-tagged piece never lands seriesless on a keyword miss.
const SERIES_LIST_IDS: Record<string, string> = {
  'lessons-from-the-company-b3e2f00e0614': 'do-well-company',
  '90s-computer-science-stories-b03ed4ac8520': '90s-com-eng',
};

function detectSeries(title: string, summary: string = '', body: string = ''): string | null {
  for (const [listId, slug] of Object.entries(SERIES_LIST_IDS)) {
    if (body.includes(listId)) return slug;
  }
  const t = title.toLowerCase();
  const s = summary.toLowerCase();
  if (/^20\d{2}\s+cloud solutions? report/.test(t)) return 'chaesang-priv';
  // Management / leadership / engineering-org pieces — the "회사에서의 기억들" bucket.
  // Strong keywords also matched in summary; weak ones only in title.
  const mgmtAny = [
    'manager', 'management', 'feedback', 'delegation',
    'one-on-one', 'one on one', 'brag sheet', 'promotion',
    'recogni', 'calibration', 'evaluation', 'assessment',
    'fist bump', 'all-hands', 'all hands', 'kids/parents', 'job ladder',
    'engineering org', 'engineering level', 'career level',
    'low-score', 'grades', 'visibility', 'ladder',
    'situational leadership', 'tech lead', 'staff engineer',
  ];
  if (mgmtAny.some((k) => t.includes(k) || s.includes(k))) return 'do-well-company';
  // Broader tech opinions — IT Thoughts.
  const it = [
    'agent', 'llm', 'model', 'infrastructure', 'cloud',
    'kubernetes', 'container', 'paradigm', 'benchmark',
  ];
  if (it.some((k) => t.includes(k))) return 'chaesang-it-26';
  return null;
}

function frontmatter(article: ArticleMeta): string {
  const rawSummary = article.summary || article.title;
  const summary = rawSummary.slice(0, 260).replace(/\n/g, ' ').trim();
  const series = detectSeries(article.title, article.summary, article.bodyHtml);
  const lines = [
    '---',
    `title: ${JSON.stringify(article.title)}`,
    `date: ${article.date}`,
    `lang: en`,
    `summary: ${JSON.stringify(summary)}`,
    `tags: []`,
  ];
  if (series) lines.push(`series: ${JSON.stringify(series)}`);
  lines.push(
    `source: medium`,
    `externalUrl: ${article.url}`,
    `draft: false`,
    '---',
    '',
  );
  return lines.join('\n');
}

async function writeArticle(article: ArticleMeta): Promise<string> {
  const imageMap = await downloadImages(article.imageUrls, article.slug);
  const cleanedHtml = cleanBody(rewriteImages(article.bodyHtml, imageMap));
  const body = cleanMarkdown(turndown.turndown(cleanedHtml));
  const fm = frontmatter(article);
  const outPath = path.join(OUT_DIR, `${article.slug}.md`);
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(outPath, `${fm}${body}\n`, 'utf-8');
  return outPath;
}

async function listExistingSlugs(): Promise<Set<string>> {
  const out = new Set<string>();
  try {
    const entries = await fs.readdir(OUT_DIR);
    for (const f of entries) {
      const m = f.match(/^(.+)\.md$/);
      if (m) out.add(m[1]);
    }
  } catch { /* directory missing */ }
  return out;
}

function parseArgs(): { only: string | null; auto: boolean } {
  const argv = process.argv.slice(2);
  if (argv.length === 0) return { only: null, auto: false };
  if (argv[0] === '--auto') return { only: null, auto: true };
  if (argv[0] === '--only') return { only: argv[1] || null, auto: false };
  return { only: null, auto: false };
}

async function main() {
  const { only, auto } = parseArgs();
  const browser = await chromium.launch({ headless: true });
  const page = await openPage(browser);

  try {
    let urls: string[];
    if (only) {
      urls = [only.startsWith('http') ? only : `https://${USER}.medium.com/${only}`];
    } else {
      console.log('== collecting article urls ==');
      const [scrolled, rss] = await Promise.all([
        collectArticleUrls(page),
        collectFromRss(),
      ]);
      urls = Array.from(new Set([...scrolled, ...rss]));
      console.log(`   scroll: ${scrolled.length}, rss: ${rss.length}, total unique: ${urls.length}`);
    }

    if (auto) {
      const existing = await listExistingSlugs();
      const before = urls.length;
      urls = urls.filter((u) => {
        const s = urlToSlug(u);
        return s && !existing.has(s);
      });
      console.log(`== auto: existing=${existing.size} found=${before} new=${urls.length} ==`);
      if (urls.length === 0) {
        console.log('nothing to sync.');
        return;
      }
    }

    console.log(`== fetching ${urls.length} articles ==`);
    let success = 0, skipped = 0, failed = 0;
    for (const url of urls) {
      try {
        const article = await fetchArticle(browser, url);
        if (!article) { skipped++; console.log(`  skip ${url}`); continue; }
        const out = await writeArticle(article);
        success++;
        console.log(`  ${article.slug} → ${path.basename(out)}  imgs=${article.imageUrls.length}`);
      } catch (err) {
        failed++;
        console.error(`  error ${url}:`, err);
      }
    }
    console.log(`\n== done: ${success} ok, ${skipped} skipped, ${failed} failed ==`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
