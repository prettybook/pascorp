'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const t = useTranslations('process');

  const steps = [
    {
      key: 'step1',
      icon: MessageSquare,
      number: '01',
    },
    {
      key: 'step2',
      icon: FileText,
      number: '02',
    },
    {
      key: 'step3',
      icon: CheckCircle,
      number: '03',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-24 hidden h-0.5 bg-gray-200 md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <step.icon className="h-6 w-6 text-secondary" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-primary">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-gray-600">{t(`${step.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
