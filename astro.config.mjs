import { defineConfig, fontProviders } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { defaultLocale, locales, prefixDefaultLocale } from './src/i18n/utils';

// https://astro.build/config
export default defineConfig({
  site: 'https://blast-souvenir-tztr.vercel.app',
  base: '/blast',
  redirects: {
    '/admin': '/en/admin',
  },


  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 700],
      styles: ['normal'],
    },
  ],

  i18n: {
    defaultLocale,
    locales,
    routing: 'manual',
  },

  image: {
    responsiveStyles: false,
  },

  integrations: [
    alpinejs({
      entrypoint: '/src/scripts/entrypoint',
    }),
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((locale) => [locale, locale])),
      },
    }),
    compress({
      CSS: false,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: false,
      JSON: false,
      SVG: true,
    }),
  ],
  adapter: vercel(),

  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'", 'data:', 'https://challenges.cloudflare.com/'],
        hashes: [
          'sha256-/PMeln2yfrl3s6d+0o42HIOvl+l/Fc/l0eqx+Xpyzbw=', // All pages
          'sha256-AhGOxzJqJwRvnqrHXGGHOAboYLUDRi5UY2RXZQCouYI=', // client
        ],
      },
      styleDirective: {
        resources: ["'self'"],
        hashes: [
          'sha256-/fWDvP/zU3HvBkNs4SJCgtfIW+buR1Is+LtIxjWEFpw=', // All pages
          'sha256-7G07M4gLmuqW441o9XUpQO6cVi4V4095DaJ2PhtCN6s=', // client/fr/pricing, client/pricing
        ],
      },
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self' https://usebasin.com/",
        "connect-src 'self' https://usebasin.com/",
        "frame-src 'self' https://challenges.cloudflare.com/",
        'upgrade-insecure-requests',
      ],
    },
  },

  markdown: {
    syntaxHighlight: 'prism',
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        alpinejs: '@alpinejs/csp',
      },
    },
  },
});
