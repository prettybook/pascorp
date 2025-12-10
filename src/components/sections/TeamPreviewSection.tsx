'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export default function TeamPreviewSection() {
  const t = useTranslations('team');

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="Team"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-secondary/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">{t('title')}</h2>
            <p className="mb-4 text-lg text-secondary font-semibold">{t('subtitle')}</p>
            <p className="mb-8 text-gray-600 leading-relaxed">{t('description')}</p>
            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-700"
            >
              {t('title')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
