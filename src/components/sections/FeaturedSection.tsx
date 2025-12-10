'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function FeaturedSection() {
  const t = useTranslations('featured');

  return (
    <section className="pb-16 md:pb-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-700 p-8 md:p-12"
        >
          <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
                <Heart className="h-7 w-7 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                  {t('title')}
                </h3>
                <p className="mb-1 text-secondary font-semibold">{t('subtitle')}</p>
                <p className="max-w-xl text-gray-300">{t('description')}</p>
              </div>
            </div>
            <Link
              href={{
                pathname: '/servicios/usa/[slug]',
                params: { slug: 'peticion-familiar' },
              }}
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-all hover:bg-secondary-600"
            >
              {t('cta')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/10" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/5" />
        </motion.div>
      </div>
    </section>
  );
}
