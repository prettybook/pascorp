'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import {
  Shield,
  Award,
  Heart,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

export default function AboutPageContent() {
  const t = useTranslations('about');
  const tStats = useTranslations('stats');

  const values = [
    { key: 'integrity', icon: Shield },
    { key: 'excellence', icon: Award },
    { key: 'commitment', icon: Heart },
    { key: 'empathy', icon: Users },
  ];

  const features = [
    'Equipo multilingüe (ES, EN, AR, FR)',
    'Más de 6 años de experiencia',
    'Presencia en 3 continentes',
    'Atención personalizada',
    'Consultas virtuales disponibles',
    'Seguimiento constante de tu caso',
  ];

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

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-lg border-l-4 border-secondary"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('mission.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-8 shadow-lg border-l-4 border-primary"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t('vision.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">{t('vision.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Image Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                  alt="Team meeting"
                  className="h-[500px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-secondary/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">
                Expertos en Inmigración
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PAS Legal Corp nació con la misión de ayudar a familias e individuos
                a alcanzar sus sueños migratorios. Con oficinas estratégicamente
                ubicadas en Orlando, Dubai y Jeddah, ofrecemos servicios de
                consultoría migratoria de primera clase.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados combina
                amplia experiencia con un profundo entendimiento de las diferentes
                culturas y sistemas migratorios, lo que nos permite ofrecer
                soluciones personalizadas y efectivas.
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">{t('values.title')}</h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {t(`values.${value.key}`)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Presencia Global
            </h2>
            <p className="text-gray-300 text-lg">
              Tres continentes, un mismo compromiso
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                city: 'Orlando',
                country: 'Estados Unidos',
                description: 'Sede principal - Servicios migratorios en los 50 estados',
              },
              {
                city: 'Dubai',
                country: 'Emiratos Árabes Unidos',
                description: 'Visas Golden, de trabajo y traducciones certificadas',
              },
              {
                city: 'Jeddah',
                country: 'Arabia Saudita',
                description: 'Servicios de inversión y migración',
              },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white/10 backdrop-blur p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{office.city}</h3>
                <p className="text-secondary mb-3">{office.country}</p>
                <p className="text-gray-300 text-sm">{office.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gray-50 p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              ¿Listo para comenzar tu proceso?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Agenda una consulta con nuestro equipo y da el primer paso hacia tus
              objetivos migratorios.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-8 py-4 font-semibold text-white transition-all hover:bg-secondary-600"
              >
                Agenda una consulta
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Ver servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
