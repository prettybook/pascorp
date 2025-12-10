import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ServicesOverview from '@/components/sections/ServicesOverview';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: `${t('title')} | PAS Legal Corp`,
    description: t('subtitle'),
  };
}

export default function ServicesPage() {
  return <ServicesOverview />;
}
