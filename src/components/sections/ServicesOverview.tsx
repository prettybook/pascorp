'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight, Landmark, Building2, Building } from 'lucide-react';

export default function ServicesOverview() {
  const t = useTranslations('services');
  const tRegions = useTranslations('regions');

  const usaServices = [
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
  ];

  const uaeServices = [
    'goldenVisa',
    'workVisa',
    'businessVisa',
    'touristVisa',
    'translations',
  ];

  const saudiServices = ['goldenVisa', 'workVisa', 'businessVisa', 'translations'];

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* USA Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Landmark className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">{t('usa.title')}</h2>
              <p className="text-gray-600">{tRegions('usa.description')}</p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {usaServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={{
                    pathname: '/servicios/usa/[slug]',
                    params: { slug: t(`usa.${service}.slug`) },
                  }}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-secondary hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {t(`usa.${service}.title`)}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {t(`usa.${service}.description`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Ver más
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Building2 className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">{t('uae.title')}</h2>
              <p className="text-gray-600">{tRegions('uae.description')}</p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {uaeServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={{
                    pathname: '/servicios/uae/[slug]',
                    params: { slug: t(`uae.${service}.slug`) },
                  }}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-secondary hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {t(`uae.${service}.title`)}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {t(`uae.${service}.description`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Ver más
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Services */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Building className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">{t('saudi.title')}</h2>
              <p className="text-gray-600">{tRegions('saudi.description')}</p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {saudiServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={{
                    pathname: '/servicios/saudi/[slug]',
                    params: { slug: t(`saudi.${service}.slug`) },
                  }}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-secondary hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {t(`saudi.${service}.title`)}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {t(`saudi.${service}.description`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Ver más
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
