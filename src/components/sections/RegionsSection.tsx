'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight, Landmark, Building2, Building, CheckCircle } from 'lucide-react';

export default function RegionsSection() {
  const t = useTranslations('regions');
  const tServices = useTranslations('services');

  const regions = [
    {
      key: 'usa',
      icon: Landmark,
      image:
        'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop',
      services: ['greenCard', 'workPermit', 'familyPetition', 'asylum', 'visaU'],
      link: '/servicios/usa' as const,
      flag: '🇺🇸',
    },
    {
      key: 'uae',
      icon: Building2,
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      services: ['goldenVisa', 'workVisa', 'businessVisa', 'touristVisa'],
      link: '/servicios/uae' as const,
      flag: '🇦🇪',
    },
    {
      key: 'saudi',
      icon: Building,
      image:
        'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070&auto=format&fit=crop',
      services: ['goldenVisa', 'workVisa', 'businessVisa'],
      link: '/servicios/saudi' as const,
      flag: '🇸🇦',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block mb-4 text-sm font-semibold text-secondary uppercase tracking-wider">
            Nuestras Regiones
          </span>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {regions.map((region, index) => (
            <motion.div
              key={region.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={region.image}
                  alt={t(`${region.key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-3xl">{region.flag}</span>
                  <h3 className="text-xl font-bold text-white">
                    {t(`${region.key}.title`)}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-5 text-gray-600 text-sm leading-relaxed">
                  {t(`${region.key}.description`)}
                </p>

                {/* Services Preview */}
                <ul className="mb-6 space-y-2">
                  {region.services.slice(0, 4).map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      {tServices(`${region.key}.${service}.title`)}
                    </li>
                  ))}
                </ul>

                <Link
                  href={region.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm transition-colors hover:text-secondary group/link"
                >
                  {t(`${region.key}.cta`)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
