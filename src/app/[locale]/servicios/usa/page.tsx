import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import RegionServicesPage from '@/components/sections/RegionServicesPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const tRegions = await getTranslations({ locale, namespace: 'regions' });

  const title = `${t('usa.title')} | PAS Legal Corp`;
  const description = locale === 'es'
    ? 'Servicios de inmigración en Estados Unidos: Green Card, permisos de trabajo, peticiones familiares, asilo, visas U, VAWA, naturalización y más.'
    : 'Immigration services in the United States: Green Card, work permits, family petitions, asylum, U visas, VAWA, naturalization and more.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
    },
    alternates: {
      canonical: locale === 'es' ? '/es/servicios/usa' : '/en/services/usa',
      languages: {
        'es': '/es/servicios/usa',
        'en': '/en/services/usa',
      },
    },
  };
}

export default function USAServicesPage() {
  return <RegionServicesPage region="usa" />;
}
