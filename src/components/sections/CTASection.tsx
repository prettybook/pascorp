'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER, PHONE_HREF } from '@/lib/utils';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 text-sm font-semibold text-secondary uppercase tracking-wider">
              Consulta gratuita
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">{t('subtitle')}</p>
          </motion.div>

          {/* Right CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Agenda tu consulta hoy
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Nuestro equipo de expertos está listo para evaluar tu caso sin compromiso.
            </p>

            <div className="space-y-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full rounded-lg bg-white px-6 py-4 font-semibold text-primary transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                {t('button')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-white/30 bg-transparent px-6 py-4 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
