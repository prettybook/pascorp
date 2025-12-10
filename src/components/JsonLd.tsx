export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'PAS Legal Corp',
    description: 'Consultores especializados en derecho migratorio con oficinas en Orlando, Dubai y Jeddah.',
    url: 'https://paslegalcorp.com',
    logo: 'https://paslegalcorp.com/images/PAS-LOGO.jpg',
    image: 'https://paslegalcorp.com/images/PAS-LOGO.jpg',
    telephone: '+1-407-818-1244',
    email: 'info@paslegalcorp.com',
    foundingDate: '2018',
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Orlando',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Jeddah',
        addressCountry: 'SA',
      },
    ],
    sameAs: [
      'https://www.facebook.com/paslegalcorp',
      'https://www.instagram.com/paslegalcorp',
      'https://www.linkedin.com/company/paslegalcorp',
    ],
    knowsLanguage: ['es', 'en', 'ar', 'fr'],
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd({
  locale,
}: {
  locale: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://paslegalcorp.com/#organization',
    name: 'PAS Legal Corp',
    description: locale === 'es'
      ? 'Consultores especializados en derecho migratorio'
      : 'Specialized immigration law consultants',
    url: `https://paslegalcorp.com/${locale}`,
    telephone: '+1-407-818-1244',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'es' ? 'Servicios de Inmigración' : 'Immigration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Residencia Permanente (Green Card)' : 'Permanent Residence (Green Card)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Peticiones Familiares' : 'Family Petitions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Asilo' : 'Asylum',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Naturalización' : 'Naturalization',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
