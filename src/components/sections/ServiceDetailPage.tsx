'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import {
  CheckCircle,
  Phone,
  ChevronDown,
  FileText,
  Clock,
  Shield,
} from 'lucide-react';
import { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/utils';

interface ServiceDetailPageProps {
  region: 'usa' | 'uae' | 'saudi';
  serviceKey: string;
}

export default function ServiceDetailPage({
  region,
  serviceKey,
}: ServiceDetailPageProps) {
  const t = useTranslations('services');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const title = t(`${region}.${serviceKey}.title`);
  const description = t(`${region}.${serviceKey}.description`);

  const requirements = [
    t('requirement1'),
    t('requirement2'),
    t('requirement3'),
    t('requirement4'),
    t('requirement5'),
  ];

  const processSteps = [
    {
      title: t('step1Title'),
      description: t('step1Desc'),
    },
    {
      title: t('step2Title'),
      description: t('step2Desc'),
    },
    {
      title: t('step3Title'),
      description: t('step3Desc'),
    },
    {
      title: t('step4Title'),
      description: t('step4Desc'),
    },
  ];

  const faqs = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer'),
    },
    {
      question: t('faq2Question'),
      answer: t('faq2Answer'),
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-secondary mb-4 hover:text-secondary-300 transition-colors"
            >
              ← {t('title')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">{title}</h1>
            <p className="text-xl text-gray-300">{description}</p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 font-serif">
                {t('aboutService')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
              <p className="text-gray-600 leading-relaxed">
                {t('teamDescription')}
              </p>
            </motion.section>

            {/* Requirements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6 font-serif">
                {t('requirements')}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Process */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6 font-serif">{t('process')}</h2>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6 font-serif">{t('faq')}</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="flex w-full items-center justify-between p-4 text-left"
                    >
                      <span className="font-semibold text-primary">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="border-t border-gray-200 p-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl bg-primary p-6"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{t('contactCTA')}</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  {t('ctaDescription')}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-all hover:bg-secondary-600"
                >
                  <Phone className="h-5 w-5" />
                  {t('contactUs')}
                </a>
              </motion.div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <Clock className="h-6 w-6 flex-shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-primary">{t('quickResponse')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('quickResponseDesc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <Shield className="h-6 w-6 flex-shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-primary">{t('confidentiality')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('confidentialityDesc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <FileText className="h-6 w-6 flex-shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-primary">{t('freeConsultation')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('freeConsultationDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
