import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { site } from '../../data/site';
import { getPosts, getProjects } from '../../lib/content';

/** 1200×630 share images generated per page at build time. */
export const getStaticPaths = (async () => {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  return [
    { params: { slug: 'index' }, props: { kicker: site.location.label, title: site.jobTitle } },
    { params: { slug: 'projects' }, props: { kicker: 'Portfolio', title: 'Projects' } },
    { params: { slug: 'blog' }, props: { kicker: 'Notes', title: 'Blog' } },
    ...projects.map((project) => ({
      params: { slug: `projects/${project.id}` },
      props: { kicker: `Project · ${project.data.year}`, title: project.data.title },
    })),
    ...posts.map((post) => ({
      params: { slug: `blog/${post.id}` },
      props: { kicker: 'Blog', title: post.data.title },
    })),
  ];
}) satisfies GetStaticPaths;

const fontFile = (pkg: string, file: string) =>
  readFile(join(process.cwd(), 'node_modules/@fontsource', pkg, 'files', file));

// Satori resolves fonts by name, so each subset needs its own name to act as a fallback.
const fonts = Promise.all([
  fontFile('bricolage-grotesque', 'bricolage-grotesque-latin-700-normal.woff'),
  fontFile('bricolage-grotesque', 'bricolage-grotesque-vietnamese-700-normal.woff'),
  fontFile('be-vietnam-pro', 'be-vietnam-pro-latin-500-normal.woff'),
  fontFile('be-vietnam-pro', 'be-vietnam-pro-vietnamese-500-normal.woff'),
]).then(([displayLatin, displayVi, bodyLatin, bodyVi]) => [
  { name: 'Display', data: displayLatin, weight: 700 as const, style: 'normal' as const },
  { name: 'Display Vi', data: displayVi, weight: 700 as const, style: 'normal' as const },
  { name: 'Body', data: bodyLatin, weight: 500 as const, style: 'normal' as const },
  { name: 'Body Vi', data: bodyVi, weight: 500 as const, style: 'normal' as const },
]);

const box = (style: Record<string, unknown>, children?: unknown) => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

export const GET: APIRoute = async ({ props }) => {
  const { kicker, title } = props as { kicker: string; title: string };
  const size = title.length > 58 ? 64 : title.length > 30 ? 80 : 108;

  const svg = await satori(
    box(
      {
        position: 'relative',
        // Satori adds padding to the size, so subtract 2 × 72 up front.
        width: 1200 - 144,
        height: 630 - 144,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#0e100c',
        color: '#eceee4',
        fontFamily: 'Body, Body Vi',
        overflow: 'hidden',
      },
      [
        box({
          position: 'absolute',
          top: -130,
          right: -130,
          width: 480,
          height: 480,
          borderRadius: 480,
          background: '#c9f24b',
        }),
        box({ fontSize: 30, color: '#b0b5a6' }, kicker),
        box(
          {
            maxWidth: 960,
            fontFamily: 'Display, Display Vi',
            fontWeight: 700,
            fontSize: size,
            lineHeight: 1.14,
            letterSpacing: -1.5,
          },
          title,
        ),
        box({ fontSize: 34 }, site.name),
      ],
    ) as never,
    { width: 1200, height: 630, fonts: await fonts },
  );

  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
