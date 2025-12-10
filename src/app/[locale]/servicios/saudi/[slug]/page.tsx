import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';

const saudiServices = [
  { slugEs: 'golden-visa', slugEn: 'golden-visa', key: 'goldenVisa' },
  { slugEs: 'visa-de-trabajo', slugEn: 'work-visa', key: 'workVisa' },
  { slugEs: 'visa-de-negocios', slugEn: 'business-visa', key: 'businessVisa' },
  { slugEs: 'traducciones-certificadas', slugEn: 'certified-translations', key: 'translations' },
];

function findServiceBySlug(slug: string) {
  return saudiServices.find((s) => s.slugEs === slug || s.slugEn === slug);
}

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  saudiServices.forEach((service) => {
    params.push({ slug: service.slugEs });
    if (service.slugEs !== service.slugEn) {
      params.push({ slug: service.slugEn });
    }
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const service = findServiceBySlug(slug);

  if (!service) {
    return { title: t('notFound') };
  }

  return {
    title: `${t(`saudi.${service.key}.title`)} | PAS Legal Corp`,
    description: t(`saudi.${service.key}.description`),
  };
}

export default async function SaudiServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const service = findServiceBySlug(slug);

  if (!service) {
    return <div>{t('notFound')}</div>;
  }

  return <ServiceDetailPage region="saudi" serviceKey={service.key} />;
}
