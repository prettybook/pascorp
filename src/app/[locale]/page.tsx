import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturedSection from '@/components/sections/FeaturedSection';
import RegionsSection from '@/components/sections/RegionsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TeamPreviewSection from '@/components/sections/TeamPreviewSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import CTASection from '@/components/sections/CTASection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RegionsSection />
      <FeaturedSection />
      <WhyUsSection />
      <ProcessSection />
      <TeamPreviewSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
