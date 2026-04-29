import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '~/i18n/ui';

export type WritingEntry = CollectionEntry<'writing'>;
export type SeriesEntry = CollectionEntry<'series'>;

/** Series metadata by slug. Returns undefined if missing. */
export async function getSeriesMeta(slug: string): Promise<SeriesEntry | undefined> {
  return getEntry('series', slug);
}

/** Display title for a series in a given language, falling back to slug. */
export async function seriesDisplayTitle(slug: string, lang: Lang): Promise<string> {
  const meta = await getSeriesMeta(slug);
  return meta?.data.titles[lang] ?? slug;
}

/** All series entries, sorted by `order`. */
export async function getAllSeries(): Promise<SeriesEntry[]> {
  const all = await getCollection('series');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Active series that have at least one published entry in the given language.
 * Sort: featured + count>=3 → non-featured + count>=3 → count<3 (mini), each tier by latest article date desc.
 */
export async function getActiveSeriesWithMeta(
  lang: Lang,
): Promise<Array<{ meta: SeriesEntry; count: number; latestDate?: Date }>> {
  const entries = await getPublishedWriting(lang);
  const counts = new Map<string, number>();
  const latest = new Map<string, Date>();
  for (const e of entries) {
    if (!e.data.series) continue;
    counts.set(e.data.series, (counts.get(e.data.series) ?? 0) + 1);
    const cur = latest.get(e.data.series);
    if (!cur || e.data.date.valueOf() > cur.valueOf()) latest.set(e.data.series, e.data.date);
  }
  const allSeries = await getAllSeries();
  const MINI_THRESHOLD = 3;
  const result: Array<{ meta: SeriesEntry; count: number; latestDate?: Date }> = [];
  for (const s of allSeries) {
    const count = counts.get(s.data.slug) ?? 0;
    if (count > 0) {
      result.push({ meta: s, count, latestDate: latest.get(s.data.slug) });
    }
  }
  const RECENT_MS = 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const tierOf = (x: { meta: SeriesEntry; count: number; latestDate?: Date }): number => {
    if (x.count < MINI_THRESHOLD) return 6;
    const isRecent =
      x.meta.data.status !== 'completed' &&
      x.latestDate !== undefined &&
      now - x.latestDate.valueOf() < RECENT_MS;
    if (isRecent) return 1;
    if (x.meta.data.featured) return 2;
    const catEn = x.meta.data.category?.en;
    if (catEn === 'Memoir') return 3;
    if (catEn === 'Lectures') return 4;
    return 5;
  };
  result.sort((a, b) => {
    const ta = tierOf(a);
    const tb = tierOf(b);
    if (ta !== tb) return ta - tb;
    return (b.latestDate?.valueOf() ?? 0) - (a.latestDate?.valueOf() ?? 0);
  });
  return result;
}

/** Published entries (draft=false) in one language, newest first. */
export async function getPublishedWriting(lang: Lang): Promise<WritingEntry[]> {
  const all = await getCollection('writing', (e) => !e.data.draft && e.data.lang === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Entries in a given series, newest first. */
export async function getWritingBySeries(series: string, lang: Lang): Promise<WritingEntry[]> {
  const all = await getCollection(
    'writing',
    (e) => !e.data.draft && e.data.lang === lang && e.data.series === series,
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Entries matching a tag, newest first. */
export async function getWritingByTag(tag: string, lang: Lang): Promise<WritingEntry[]> {
  const all = await getCollection(
    'writing',
    (e) => !e.data.draft && e.data.lang === lang && e.data.tags.includes(tag),
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** All distinct series that have at least one published entry. */
export async function getActiveSeries(lang: Lang): Promise<string[]> {
  const entries = await getPublishedWriting(lang);
  const set = new Set<string>();
  for (const e of entries) if (e.data.series) set.add(e.data.series);
  return Array.from(set).sort();
}

/** All distinct tags. */
export async function getActiveTags(lang: Lang): Promise<string[]> {
  const entries = await getPublishedWriting(lang);
  const set = new Set<string>();
  for (const e of entries) for (const t of e.data.tags) set.add(t);
  return Array.from(set).sort();
}

/** Most recent N entries, any series. */
export async function getRecentWriting(n: number, lang: Lang): Promise<WritingEntry[]> {
  const all = await getPublishedWriting(lang);
  return all.slice(0, n);
}

/** One latest entry per featured series, in series `order`. Used for home page highlights. */
export async function getSeriesHighlights(
  lang: Lang,
): Promise<Array<{ meta: SeriesEntry; count: number; latest: WritingEntry }>> {
  const seriesWithMeta = await getActiveSeriesWithMeta(lang);
  const featured = seriesWithMeta.filter(({ meta }) => meta.data.featured);
  const entries = await getPublishedWriting(lang);
  const result: Array<{ meta: SeriesEntry; count: number; latest: WritingEntry }> = [];
  for (const { meta, count } of featured) {
    const latest = entries.find((e) => e.data.series === meta.data.slug);
    if (latest) result.push({ meta, count, latest });
  }
  return result;
}
