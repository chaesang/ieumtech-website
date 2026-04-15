import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '~/i18n/ui';

export type WritingEntry = CollectionEntry<'writing'>;

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
