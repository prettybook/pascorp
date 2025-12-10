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

  const title = `${t('uae.title')} | PAS Legal Corp`;
  const description = locale === 'es'
    ? 'Servicios migratorios en Emiratos Árabes Unidos: Golden Visa, visa de trabajo, visa de negocios, visa de turista y traducciones certificadas en Dubai.'
    : 'Immigration services in the United Arab Emirates: Golden Visa, work visa, business visa, tourist visa and certified translations in Dubai.';

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
      canonical: locale === 'es' ? '/es/servicios/uae' : '/en/services/uae',
      languages: {
        'es': '/es/servicios/uae',
        'en': '/en/services/uae',
      },
    },
  };
}

export default function UAEServicesPage() {
  return <RegionServicesPage region="uae" />;
}
