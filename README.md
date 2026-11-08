# Astro Portfolio

Static portfolio built with Astro 6, with light and dark themes and full SEO. Requires Node 22.12+.

```bash
npm install
npm run dev
```

Open http://localhost:4321. `npm run build` outputs to `dist/`, deployable to any static host.

## What to edit

| Change | File |
| --- | --- |
| Name, contact, about, journey, skills, socials | `src/data/site.ts` |
| Domain (required before deploying) | `url` in `src/data/site.ts` |
| Theme colors | `src/styles/tokens.css`, each line is `light-dark(LIGHT, DARK)` |
| Projects | Markdown in `src/content/projects/` |
| Posts | Markdown in `src/content/blog/` |
| Enable blog | `showBlog: true` in `site.ts`, remove `draft: true` from posts |

If you change `--bg`, also update `public/favicon.svg`, `src/pages/site.webmanifest.ts` and `src/pages/og/[...slug].png.ts`.

## Real project covers

Put an image in `src/assets/` and add to the project's frontmatter:

```yaml
cover: ../../assets/image.jpg
coverAlt: Short description
```

Without `cover`, a generated cover is drawn from `pattern` (`grid`, `bars`, `waves`, `orbits`).

## After deploying

Submit `https://your-domain/sitemap-index.xml` to Google Search Console.
