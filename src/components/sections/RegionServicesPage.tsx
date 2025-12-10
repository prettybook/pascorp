'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight, Landmark, Building2, Building, Phone } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

interface RegionServicesPageProps {
  region: 'usa' | 'uae' | 'saudi';
}

const regionConfig = {
  usa: {
    icon: Landmark,
    services: [
      'greenCard',
      'workPermit',
      'familyPetition',
      'asylum',
      'visaU',
      'visaVAWA',
      'humanTrafficking',
      'naturalization',
      'visaEB2',
      'waiver',
    ],
    pathPrefix: '/servicios/usa/[slug]' as const,
  },
  uae: {
    icon: Building2,
    services: ['goldenVisa', 'workVisa', 'businessVisa', 'touristVisa', 'translations'],
    pathPrefix: '/servicios/uae/[slug]' as const,
  },
  saudi: {
    icon: Building,
    services: ['goldenVisa', 'workVisa', 'businessVisa', 'translations'],
    pathPrefix: '/servicios/saudi/[slug]' as const,
  },
};

export default function RegionServicesPage({ region }: RegionServicesPageProps) {
  const t = useTranslations('services');
  const tRegions = useTranslations('regions');
  const tCta = useTranslations('cta');

  const config = regionConfig[region];
  const Icon = config.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-10 w-10 text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              {t(`${region}.title`)}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {tRegions(`${region}.description`)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={{
                    pathname: config.pathPrefix,
                    params: { slug: t(`${region}.${service}.slug`) },
                  }}
                  className="group block h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-secondary hover:shadow-lg"
                >
                  <h2 className="mb-3 text-xl font-semibold text-primary group-hover:text-secondary transition-colors font-serif">
                    {t(`${region}.${service}.title`)}
                  </h2>
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    {t(`${region}.${service}.description`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    {t('requirements')}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-4 font-serif">
              {t('contactCTA')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {tCta('subtitle')}
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              {tCta('button')}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
