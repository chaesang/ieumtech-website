import MiniSearch from 'minisearch';

type SearchItem = {
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
  lang: 'ko' | 'en';
};

const host = document.querySelector<HTMLElement>('.search-page-host');
if (host) {
  const indexUrl = host.dataset.indexUrl!;
  const labels = {
    writing: host.dataset.labelWriting!,
    talks: host.dataset.labelTalks!,
    projects: host.dataset.labelProjects!,
    companies: host.dataset.labelCompanies!,
    about: host.dataset.labelAbout!,
    empty: host.dataset.labelEmpty!,
    noResults: host.dataset.labelNoResults!,
    resultsFor: host.dataset.labelResultsFor!,
  };
  const input = document.getElementById('search-page-input') as HTMLInputElement;
  const resultsEl = document.getElementById('search-page-results') as HTMLElement;
  const metaEl = document.getElementById('search-page-meta') as HTMLElement;

  let items: SearchItem[] = [];
  let mini: MiniSearch<SearchItem> | null = null;
  const groupOrder: Array<SearchItem['type']> = ['writing', 'talks', 'projects', 'companies', 'about'];

  function escapeHtml(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatCount(query: string, count: number): string {
    return labels.resultsFor.replace('{q}', query).replace('{count}', String(count));
  }

  function renderResults(query: string, hits: SearchItem[]) {
    if (!query.trim()) {
      resultsEl.innerHTML = `<div class="search-page-state">${escapeHtml(labels.empty)}</div>`;
      metaEl.textContent = '';
      return;
    }
    if (hits.length === 0) {
      resultsEl.innerHTML = `<div class="search-page-state">${escapeHtml(labels.noResults)}</div>`;
      metaEl.textContent = formatCount(query, 0);
      return;
    }
    const grouped = new Map<SearchItem['type'], SearchItem[]>();
    for (const t of groupOrder) grouped.set(t, []);
    for (const h of hits) grouped.get(h.type)!.push(h);

    const html: string[] = [];
    for (const type of groupOrder) {
      const list = grouped.get(type)!;
      if (list.length === 0) continue;
      html.push(`<div class="search-page-group"><h2>${escapeHtml(labels[type])} <span class="count">${list.length}</span></h2><ol>`);
      for (const item of list) {
        const meta: string[] = [];
        if (item.seriesTitle) meta.push(escapeHtml(item.seriesTitle));
        if (item.source) meta.push(escapeHtml(item.source));
        if (item.date) meta.push(escapeHtml(item.date));
        const metaHtml = meta.length ? `<span class="meta">${meta.join(' · ')}</span>` : '';
        const externalIcon = item.external ? ' <span class="ext" aria-hidden="true">↗</span>' : '';
        const summary = item.summary ? `<p class="summary">${escapeHtml(item.summary)}</p>` : '';
        html.push(`
          <li>
            <a href="${escapeHtml(item.url)}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
              <span class="title">${escapeHtml(item.title)}${externalIcon}</span>
              ${summary}
              ${metaHtml}
            </a>
          </li>
        `);
      }
      html.push('</ol></div>');
    }
    resultsEl.innerHTML = html.join('');
    metaEl.textContent = formatCount(query, hits.length);
  }

  function runQuery(q: string) {
    if (!mini) return;
    const trimmed = q.trim();
    if (!trimmed) {
      renderResults('', []);
      return;
    }
    const ids = new Set(mini.search(trimmed).map((r) => r.id as string));
    const hits = items.filter((it) => ids.has(it.id));
    renderResults(trimmed, hits);
  }

  async function init() {
    const res = await fetch(indexUrl);
    items = (await res.json()) as SearchItem[];
    mini = new MiniSearch<SearchItem>({
      fields: ['title', 'summary', 'body', 'tags', 'seriesTitle', 'source', 'aliases'],
      storeFields: ['id'],
      searchOptions: {
        boost: { title: 3, aliases: 2, seriesTitle: 1.5, summary: 1.2 },
        prefix: true,
        fuzzy: 0.2,
        combineWith: 'AND',
      },
      extractField: (doc, field) => {
        const v = (doc as Record<string, unknown>)[field];
        if (Array.isArray(v)) return v.join(' ');
        return (v as string) ?? '';
      },
    });
    mini.addAll(items);

    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') ?? '';
    if (q) {
      input.value = q;
      runQuery(q);
    } else {
      renderResults('', []);
    }
  }

  let debounceId: number | undefined;
  input.addEventListener('input', () => {
    const q = input.value;
    const url = new URL(window.location.href);
    if (q.trim()) url.searchParams.set('q', q);
    else url.searchParams.delete('q');
    window.history.replaceState({}, '', url);
    window.clearTimeout(debounceId);
    debounceId = window.setTimeout(() => runQuery(q), 80);
  });

  init();
}
