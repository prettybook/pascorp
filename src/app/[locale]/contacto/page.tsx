import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ContactPageContent from '@/components/sections/ContactPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: `${t('title')} | PAS Legal Corp`,
    description: t('subtitle'),
  };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
