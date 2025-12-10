'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  MapPin,
  // Facebook,  // später ergänzen
  Instagram,
  // Linkedin,  // später ergänzen
  MessageCircle,
  Youtube,
} from 'lucide-react';
import { getWhatsAppUrl, LOCATIONS } from '@/lib/utils';

export default function Footer() {
  const t = useTranslations('footer');
  const tServices = useTranslations('services');

  const usaServices = [
    { key: 'greenCard', slug: 'residencia-permanente' },
    { key: 'workPermit', slug: 'permiso-de-trabajo' },
    { key: 'familyPetition', slug: 'peticion-familiar' },
    { key: 'asylum', slug: 'asilo' },
    { key: 'visaU', slug: 'visa-u' },
  ];

  const internationalServices = [
    { region: 'uae', key: 'goldenVisa', slug: 'visa-golden' },
    { region: 'uae', key: 'workVisa', slug: 'visa-de-trabajo' },
    { region: 'saudi', key: 'goldenVisa', slug: 'golden-visa' },
    { region: 'saudi', key: 'workVisa', slug: 'visa-de-trabajo' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/PAS-LOGO.jpg"
                alt="PAS Legal Corp"
                className="h-12 w-auto rounded"
              />
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-4">
              {/* Facebook - später ergänzen
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              */}
              <a
                href="https://www.instagram.com/pas_corp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* LinkedIn - später ergänzen
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCyS3sUCwIZjNa1_pJO1BYRA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* USA Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-secondary">
              {t('servicesUSA')}
            </h4>
            <ul className="space-y-2">
              {usaServices.map((service) => (
                <li key={service.key}>
                  <Link
                    href={{
                      pathname: '/servicios/usa/[slug]',
                      params: { slug: service.slug },
                    }}
                    className="text-sm text-gray-300 transition-colors hover:text-secondary"
                  >
                    {tServices(`usa.${service.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* International Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-secondary">
              {t('servicesInternational')}
            </h4>
            <ul className="space-y-2">
              {internationalServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={{
                      pathname: service.region === 'uae' ? '/servicios/uae/[slug]' : '/servicios/saudi/[slug]',
                      params: { slug: service.slug },
                    }}
                    className="text-sm text-gray-300 transition-colors hover:text-secondary"
                  >
                    {tServices(`${service.region}.${service.key}.title`)} (
                    {service.region.toUpperCase()})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-secondary">
              {t('contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <div className="text-sm text-gray-300 space-y-1">
                  <p>{LOCATIONS.orlando.city}, {LOCATIONS.orlando.country}</p>
                  <p>{LOCATIONS.dubai.city}, {LOCATIONS.dubai.country}</p>
                  <p>{LOCATIONS.jeddah.city}, {LOCATIONS.jeddah.country}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PAS Legal Corp. {t('rights')}.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contacto"
              className="text-sm text-gray-400 transition-colors hover:text-secondary"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/contacto"
              className="text-sm text-gray-400 transition-colors hover:text-secondary"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
