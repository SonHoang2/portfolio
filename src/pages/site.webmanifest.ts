import { withBase } from '../lib/paths';
import { site } from '../data/site';

export function GET() {
  const manifest = {
    name: site.name,
    short_name: site.monogram,
    description: site.description,
    lang: site.lang,
    start_url: withBase('/'),
    display: 'browser',
    background_color: '#f1f2ec',
    theme_color: '#2438e8',
    icons: [{ src: withBase('/favicon.svg'), sizes: 'any', type: 'image/svg+xml' }],
  };
  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
}
