'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogPreviewSection() {
  const t = useTranslations('blog');

  const posts = [
    {
      slug: 'situacion-migratoria-actual',
      title: 'La Situación Migratoria Actual en Estados Unidos',
      excerpt:
        'Análisis de las políticas migratorias actuales y cómo afectan a los inmigrantes en Estados Unidos.',
      image:
        'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070&auto=format&fit=crop',
      date: '2024-01-15',
    },
    {
      slug: 'visa-victima-estados-unidos',
      title: 'Visa de Víctima en Estados Unidos: Protección Migratoria',
      excerpt:
        'Todo lo que necesitas saber sobre las visas U y T para víctimas de delitos en Estados Unidos.',
      image:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
      date: '2024-01-10',
    },
    {
      slug: 'beneficios-viajar-legalmente',
      title: 'Los Beneficios de Viajar Legalmente a Estados Unidos',
      excerpt:
        'Descubre las ventajas de obtener la documentación correcta para tu viaje a Estados Unidos.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
      date: '2024-01-05',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <h2 className="section-title mb-2">{t('title')}</h2>
            <p className="text-gray-600">{t('subtitle')}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary-600 transition-colors"
          >
            {t('viewAll')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
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
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
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
  );
}
