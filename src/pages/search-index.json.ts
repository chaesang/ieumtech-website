import type { APIRoute } from 'astro';
import { buildSearchItems } from '~/lib/search-data';

export const GET: APIRoute = async () => {
  const items = await buildSearchItems('en');
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
