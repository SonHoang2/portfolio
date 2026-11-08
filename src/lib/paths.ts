import { site } from '../data/site';

/** Prefixes a root-relative path, e.g. /projects/, with the path the site is served under. */
export const withBase = (path: string) => `${site.base}${path}`;

/** Full URL for a root-relative path. */
export const absoluteUrl = (path: string) => new URL(withBase(path), site.url).href;
