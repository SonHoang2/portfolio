import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { getPosts } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `Posts by ${site.name}`,
    description: site.description,
    site: context.site!,
    trailingSlash: true,
    customData: `<language>${site.lang}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
  });
}
