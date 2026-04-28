import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';

/** rehype plugin: add loading="lazy" and decoding="async" to all <img> tags */
function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties = node.properties || {};
        if (!node.properties.loading) node.properties.loading = 'lazy';
        if (!node.properties.decoding) node.properties.decoding = 'async';
      }
    });
  };
}

export default defineConfig({
  site: 'https://ieumtech.net',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ko: 'ko',
        },
      },
      filter: (page) => !page.includes('/draft/'),
    }),
  ],
  build: {
    format: 'directory',
  },
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
});
