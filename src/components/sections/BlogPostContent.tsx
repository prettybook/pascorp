'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Calendar, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

interface BlogPostContentProps {
  post: Post;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const t = useTranslations('blog');

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
              href="/blog"
              className="inline-flex items-center gap-2 text-secondary mb-4 hover:text-secondary-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Link>
            <span className="inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-secondary mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Featured Image */}
              <div className="relative mb-8 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

                <h2>Introducción</h2>
                <p>
                  El panorama migratorio está en constante evolución, y es fundamental
                  mantenerse informado sobre los cambios que pueden afectar tu proceso.
                  En PAS Legal Corp, nos comprometemos a mantener a nuestros clientes
                  actualizados sobre las últimas noticias y desarrollos en materia
                  migratoria.
                </p>

                <h2>Aspectos Importantes a Considerar</h2>
                <p>
                  Cuando se trata de procesos migratorios, hay varios factores clave
                  que debes tener en cuenta:
                </p>
                <ul>
                  <li>
                    <strong>Documentación completa:</strong> Asegúrate de tener todos
                    los documentos necesarios antes de iniciar cualquier proceso.
                  </li>
                  <li>
                    <strong>Plazos importantes:</strong> Cumple con todos los plazos
                    establecidos para evitar retrasos o problemas.
                  </li>
                  <li>
                    <strong>Asesoría profesional:</strong> Contar con expertos puede
                    hacer la diferencia en el resultado de tu caso.
                  </li>
                </ul>

                <h2>Recomendaciones</h2>
                <p>
                  Nuestro equipo de expertos recomienda siempre consultar con un
                  profesional antes de tomar decisiones importantes relacionadas con tu
                  estatus migratorio. Las leyes y regulaciones pueden cambiar, y es
                  importante estar al día con las últimas actualizaciones.
                </p>

                <h2>Conclusión</h2>
                <p>
                  En PAS Legal Corp, estamos comprometidos con ayudarte a navegar el
                  complejo mundo de la inmigración. Si tienes preguntas o necesitas
                  asesoría personalizada, no dudes en contactarnos.
                </p>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-700">Compartir:</span>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-secondary hover:text-white transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="rounded-xl bg-primary p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    ¿Necesitas ayuda con tu caso?
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Nuestro equipo de expertos está listo para ayudarte.
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-all hover:bg-secondary-600"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Contáctanos
                  </a>
                </div>

                {/* Related Articles */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="font-bold text-primary mb-4">
                    Artículos Relacionados
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href={{
                          pathname: '/blog/[slug]',
                          params: { slug: 'visa-victima-estados-unidos' },
                        }}
                        className="text-gray-600 hover:text-secondary transition-colors text-sm"
                      >
                        Visa de Víctima en Estados Unidos: Protección Legal
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: '/blog/[slug]',
                          params: { slug: 'beneficios-viajar-legalmente' },
                        }}
                        className="text-gray-600 hover:text-secondary transition-colors text-sm"
                      >
                        Los Beneficios de Viajar Legalmente a Estados Unidos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </>
  );
}
