import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import AboutPageContent from '@/components/sections/AboutPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: `${t('title')} | PAS Legal Corp`,
    description: t('subtitle'),
  };
}

export default function AboutPage() {
  return <AboutPageContent />;
}
