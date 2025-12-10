import { Metadata } from 'next';
import BlogPostContent from '@/components/sections/BlogPostContent';

const posts = [
  {
    slug: 'situacion-migratoria-actual',
    title: 'La Situación Migratoria Actual en Estados Unidos',
    excerpt:
      'Análisis de las políticas migratorias actuales y cómo afectan a los inmigrantes en Estados Unidos.',
    image:
      'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070&auto=format&fit=crop',
    date: '2024-01-15',
    category: 'Inmigración USA',
  },
  {
    slug: 'visa-victima-estados-unidos',
    title: 'Visa de Víctima en Estados Unidos: Protección Migratoria',
    excerpt:
      'Todo lo que necesitas saber sobre las visas U y T para víctimas de delitos en Estados Unidos.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    date: '2024-01-10',
    category: 'Visas Especiales',
  },
  {
    slug: 'beneficios-viajar-legalmente',
    title: 'Los Beneficios de Viajar Legalmente a Estados Unidos',
    excerpt:
      'Descubre las ventajas de obtener la documentación correcta para tu viaje a Estados Unidos.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
    date: '2024-01-05',
    category: 'Consejos',
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Artículo no encontrado' };
  }

  return {
    title: `${post.title} | PAS Legal Corp`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Artículo no encontrado</div>;
  }

  return <BlogPostContent post={post} />;
}
