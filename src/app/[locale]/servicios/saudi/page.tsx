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

  const title = `${t('saudi.title')} | PAS Legal Corp`;
  const description = locale === 'es'
    ? 'Servicios migratorios en Arabia Saudita: Golden Visa, visa de trabajo, visa de negocios y traducciones certificadas en Jeddah.'
    : 'Immigration services in Saudi Arabia: Golden Visa, work visa, business visa and certified translations in Jeddah.';

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
      canonical: locale === 'es' ? '/es/servicios/saudi' : '/en/services/saudi',
      languages: {
        'es': '/es/servicios/saudi',
        'en': '/en/services/saudi',
      },
    },
  };
}

export default function SaudiServicesPage() {
  return <RegionServicesPage region="saudi" />;
}
