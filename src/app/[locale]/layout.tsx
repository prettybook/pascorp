import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { OrganizationJsonLd } from '@/components/JsonLd';
import '@/app/globals.css';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://paslegalcorp.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PAS Legal Corp | Consultores de Inmigración',
    template: '%s | PAS Legal Corp',
  },
  description: 'Consultores especializados en derecho migratorio con oficinas en Orlando, Dubai y Jeddah. Servicios de inmigración en Estados Unidos, UAE y Arabia Saudita.',
  keywords: [
    'inmigración',
    'abogado de inmigración',
    'green card',
    'visa',
    'asilo',
    'ciudadanía',
    'Orlando',
    'Dubai',
    'Jeddah',
    'PAS Legal Corp',
    'immigration lawyer',
    'immigration consultant',
  ],
  authors: [{ name: 'PAS Legal Corp' }],
  creator: 'PAS Legal Corp',
  publisher: 'PAS Legal Corp',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/pas-favicon.png',
    shortcut: '/images/pas-favicon.png',
    apple: '/images/pas-favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'PAS Legal Corp',
    title: 'PAS Legal Corp | Consultores de Inmigración',
    description: 'Consultores especializados en derecho migratorio con oficinas en Orlando, Dubai y Jeddah.',
    images: [
      {
        url: '/images/PAS-LOGO.jpg',
        width: 1200,
        height: 630,
        alt: 'PAS Legal Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAS Legal Corp | Consultores de Inmigración',
    description: 'Consultores especializados en derecho migratorio con oficinas en Orlando, Dubai y Jeddah.',
    images: ['/images/PAS-LOGO.jpg'],
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen bg-white">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
