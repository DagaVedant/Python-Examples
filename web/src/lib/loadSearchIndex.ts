import type { SearchIndex } from '../types/searchIndex';

export async function loadSearchIndex(): Promise<SearchIndex> {
  const res = await fetch('/search-index.json');
  if (!res.ok) {
    throw new Error(`Failed to load search index (${res.status})`);
  }
  return res.json() as Promise<SearchIndex>;
}
