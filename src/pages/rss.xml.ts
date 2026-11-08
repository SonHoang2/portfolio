import { withBase, absoluteUrl } from '../lib/paths';
import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getPosts } from '../lib/content';

export async function GET() {
  const posts = await getPosts();
  return rss({
    title: `Posts by ${site.name}`,
    description: site.description,
    site: absoluteUrl('/'),
    trailingSlash: true,
    customData: `<language>${site.lang}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: withBase(`/blog/${post.id}/`),
    })),
  });
}
