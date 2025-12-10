import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/servicios': {
      es: '/servicios',
      en: '/services',
    },
    '/servicios/usa': {
      es: '/servicios/usa',
      en: '/services/usa',
    },
    '/servicios/usa/[slug]': {
      es: '/servicios/usa/[slug]',
      en: '/services/usa/[slug]',
    },
    '/servicios/uae': {
      es: '/servicios/uae',
      en: '/services/uae',
    },
    '/servicios/uae/[slug]': {
      es: '/servicios/uae/[slug]',
      en: '/services/uae/[slug]',
    },
    '/servicios/saudi': {
      es: '/servicios/saudi',
      en: '/services/saudi',
    },
    '/servicios/saudi/[slug]': {
      es: '/servicios/saudi/[slug]',
      en: '/services/saudi/[slug]',
    },
    '/sobre-nosotros': {
      es: '/sobre-nosotros',
      en: '/about-us',
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
