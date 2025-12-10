import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://paslegalcorp.com';

const usaServices = [
  'residencia-permanente',
  'permiso-de-trabajo',
  'peticion-familiar',
  'asilo',
  'visa-u',
  'visa-vawa',
  'visa-trafico-humano',
  'naturalizacion',
  'visa-eb-2',
  'waiver',
];

const uaeServices = [
  'visa-golden',
  'visa-de-trabajo',
  'visa-de-negocios',
  'visa-de-turista',
  'traducciones-legales',
];

const saudiServices = [
  'golden-visa',
  'visa-de-trabajo',
  'visa-de-negocios',
  'traducciones-legales',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es', 'en'];
  const currentDate = new Date();

  const staticPages = [
    '',
    '/servicios',
    '/servicios/usa',
    '/servicios/uae',
    '/servicios/saudi',
    '/sobre-nosotros',
    '/contacto',
    '/blog',
  ];

  const routes: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      routes.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/servicios' ? 0.9 : 0.8,
        alternates: {
          languages: {
            es: `${SITE_URL}/es${page}`,
            en: `${SITE_URL}/en${page}`,
          },
        },
      });
    });
  });

  // USA service pages
  locales.forEach((locale) => {
    usaServices.forEach((slug) => {
      const enSlug = getEnglishSlug('usa', slug);
      routes.push({
        url: `${SITE_URL}/${locale}/servicios/usa/${locale === 'en' ? enSlug : slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${SITE_URL}/es/servicios/usa/${slug}`,
            en: `${SITE_URL}/en/services/usa/${enSlug}`,
          },
        },
      });
    });
  });

  // UAE service pages
  locales.forEach((locale) => {
    uaeServices.forEach((slug) => {
      const enSlug = getEnglishSlug('uae', slug);
      routes.push({
        url: `${SITE_URL}/${locale}/servicios/uae/${locale === 'en' ? enSlug : slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${SITE_URL}/es/servicios/uae/${slug}`,
            en: `${SITE_URL}/en/services/uae/${enSlug}`,
          },
        },
      });
    });
  });

  // Saudi service pages
  locales.forEach((locale) => {
    saudiServices.forEach((slug) => {
      const enSlug = getEnglishSlug('saudi', slug);
      routes.push({
        url: `${SITE_URL}/${locale}/servicios/saudi/${locale === 'en' ? enSlug : slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${SITE_URL}/es/servicios/saudi/${slug}`,
            en: `${SITE_URL}/en/services/saudi/${enSlug}`,
          },
        },
      });
    });
  });

  return routes;
}

function getEnglishSlug(region: string, esSlug: string): string {
  const slugMappings: Record<string, Record<string, string>> = {
    usa: {
      'residencia-permanente': 'permanent-residence',
      'permiso-de-trabajo': 'work-permit',
      'peticion-familiar': 'family-petition',
      'asilo': 'asylum',
      'visa-u': 'u-visa',
      'visa-vawa': 'vawa-visa',
      'visa-trafico-humano': 'human-trafficking-visa',
      'naturalizacion': 'naturalization',
      'visa-eb-2': 'eb-2-visa',
      'waiver': 'waiver',
    },
    uae: {
      'visa-golden': 'golden-visa',
      'visa-de-trabajo': 'work-visa',
      'visa-de-negocios': 'business-visa',
      'visa-de-turista': 'tourist-visa',
      'traducciones-legales': 'legal-translations',
    },
    saudi: {
      'golden-visa': 'golden-visa',
      'visa-de-trabajo': 'work-visa',
      'visa-de-negocios': 'business-visa',
      'traducciones-legales': 'legal-translations',
    },
  };

  return slugMappings[region]?.[esSlug] || esSlug;
}
