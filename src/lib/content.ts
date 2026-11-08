import { getCollection } from 'astro:content';

const visible = (entry: { data: { draft: boolean } }) => !(import.meta.env.PROD && entry.data.draft);

export async function getProjects() {
  const items = await getCollection('projects', visible);
  return items.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export async function getPosts() {
  const items = await getCollection('blog', visible);
  return items.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Ho_Chi_Minh',
});

export const formatDate = (date: Date) => dateFormat.format(date);

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
