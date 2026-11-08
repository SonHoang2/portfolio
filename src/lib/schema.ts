import { site } from '../data/site';
import { absoluteUrl as abs } from './paths';

export const personId = abs('/#person');
export const websiteId = abs('/#website');

export const personSchema = {
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  url: abs('/'),
  jobTitle: site.jobTitle,
  description: site.description,
  image: abs('/og/index.png'),
  address: {
    '@type': 'PostalAddress',
    addressCountry: site.location.country,
  },
  knowsAbout: site.skills.flatMap((group) => [...group.items]),
  sameAs: site.socials.map((social) => social.href),
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: abs('/'),
  name: site.name,
  description: site.description,
  inLanguage: site.lang,
  publisher: { '@id': personId },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
