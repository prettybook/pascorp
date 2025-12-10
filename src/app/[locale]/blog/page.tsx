import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import BlogListContent from '@/components/sections/BlogListContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: `${t('title')} | PAS Legal Corp`,
    description: t('subtitle'),
  };
}

export default function BlogPage() {
  return <BlogListContent />;
}
