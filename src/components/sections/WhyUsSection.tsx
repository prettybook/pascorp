'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Languages, Globe, Award, Clock, Shield } from 'lucide-react';

export default function WhyUsSection() {
  const t = useTranslations('whyUs');

  const features = [
    {
      key: 'experienced',
      icon: Award,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      key: 'multilingual',
      icon: Languages,
      color: 'bg-green-50 text-green-600',
    },
    {
      key: 'global',
      icon: Globe,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 text-sm font-semibold text-secondary uppercase tracking-wider">
              {t('tagline')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {t('title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-primary">9+</p>
                <p className="text-sm text-gray-500">{t('stats.experience')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50</p>
                <p className="text-sm text-gray-500">{t('stats.states')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4</p>
                <p className="text-sm text-gray-500">{t('stats.languages')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className={`flex-shrink-0 h-14 w-14 rounded-xl ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`${feature.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
