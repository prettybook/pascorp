'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export default function BlogListContent() {
  const t = useTranslations('blog');

  const posts = [
    {
      slug: 'situacion-migratoria-actual',
      title: 'La Situación Migratoria Actual en Estados Unidos',
      excerpt:
        'Análisis de las políticas migratorias actuales y cómo afectan a los inmigrantes en Estados Unidos. Conoce los cambios más recientes y cómo prepararte.',
      image:
        'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070&auto=format&fit=crop',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Inmigración USA',
    },
    {
      slug: 'visa-victima-estados-unidos',
      title: 'Visa de Víctima en Estados Unidos: Protección Migratoria',
      excerpt:
        'Todo lo que necesitas saber sobre las visas U y T para víctimas de delitos en Estados Unidos. Requisitos, proceso y beneficios.',
      image:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      date: '2024-01-10',
      readTime: '7 min',
      category: 'Visas Especiales',
    },
    {
      slug: 'beneficios-viajar-legalmente',
      title: 'Los Beneficios de Viajar Legalmente a Estados Unidos',
      excerpt:
        'Descubre las ventajas de obtener la documentación correcta para tu viaje a Estados Unidos y evita problemas migratorios.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
      date: '2024-01-05',
      readTime: '4 min',
      category: 'Consejos',
    },
    {
      slug: 'golden-visa-emiratos',
      title: 'Golden Visa en Emiratos Árabes Unidos: Guía Completa',
      excerpt:
        'Todo sobre el programa Golden Visa de UAE: requisitos, beneficios y proceso de aplicación para inversionistas y profesionales.',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      date: '2024-01-01',
      readTime: '8 min',
      category: 'UAE',
    },
    {
      slug: 'naturalizacion-proceso',
      title: 'El Proceso de Naturalización: De Residente a Ciudadano',
      excerpt:
        'Guía paso a paso para convertirte en ciudadano estadounidense. Requisitos, examen y ceremonia de naturalización.',
      image:
        'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop',
      date: '2023-12-28',
      readTime: '6 min',
      category: 'Inmigración USA',
    },
    {
      slug: 'reunion-familiar-peticiones',
      title: 'Reunión Familiar: Cómo Traer a tu Familia a Estados Unidos',
      excerpt:
        'Conoce las diferentes opciones para reunir a tu familia en Estados Unidos a través de peticiones familiares.',
      image:
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop',
      date: '2023-12-20',
      readTime: '5 min',
      category: 'Peticiones Familiares',
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Link
                  href={{
                    pathname: '/blog/[slug]',
                    params: { slug: post.slug },
                  }}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                      {t('readMore')}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
