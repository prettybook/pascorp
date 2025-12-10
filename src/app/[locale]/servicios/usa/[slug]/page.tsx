import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';

const usaServices = [
  { slugEs: 'residencia-permanente', slugEn: 'permanent-residence', key: 'greenCard' },
  { slugEs: 'permiso-de-trabajo', slugEn: 'work-permit', key: 'workPermit' },
  { slugEs: 'peticion-familiar', slugEn: 'family-petition', key: 'familyPetition' },
  { slugEs: 'asilo', slugEn: 'asylum', key: 'asylum' },
  { slugEs: 'visa-u', slugEn: 'u-visa', key: 'visaU' },
  { slugEs: 'visa-vawa', slugEn: 'vawa-visa', key: 'visaVAWA' },
  { slugEs: 'visa-trafico-humano', slugEn: 'human-trafficking-visa', key: 'humanTrafficking' },
  { slugEs: 'naturalizacion', slugEn: 'naturalization', key: 'naturalization' },
  { slugEs: 'visa-eb-2', slugEn: 'eb-2-visa', key: 'visaEB2' },
  { slugEs: 'waiver', slugEn: 'waiver', key: 'waiver' },
];

function findServiceBySlug(slug: string) {
  return usaServices.find((s) => s.slugEs === slug || s.slugEn === slug);
}

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  usaServices.forEach((service) => {
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
    title: `${t(`usa.${service.key}.title`)} | PAS Legal Corp`,
    description: t(`usa.${service.key}.description`),
  };
}

export default async function USAServicePage({
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

  return <ServiceDetailPage region="usa" serviceKey={service.key} />;
}
