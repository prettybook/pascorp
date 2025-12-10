'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getWhatsAppUrl } from '@/lib/utils';

type DropdownKey = 'usa' | 'middleEast' | null;

export default function Header() {
  const t = useTranslations('nav');
  const tServices = useTranslations('services');
  const tRegions = useTranslations('regions');
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<DropdownKey>(null);

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    // Get the current path without the locale prefix
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(es|en)/, '');
    window.location.href = `/${newLocale}${pathWithoutLocale || '/'}`;
  };

  const usaServices = [
    { key: 'greenCard', slugEs: 'residencia-permanente', slugEn: 'permanent-residence' },
    { key: 'workPermit', slugEs: 'permiso-de-trabajo', slugEn: 'work-permit' },
    { key: 'familyPetition', slugEs: 'peticion-familiar', slugEn: 'family-petition' },
    { key: 'asylum', slugEs: 'asilo', slugEn: 'asylum' },
    { key: 'visaU', slugEs: 'visa-u', slugEn: 'u-visa' },
    { key: 'visaVAWA', slugEs: 'visa-vawa', slugEn: 'vawa-visa' },
    { key: 'humanTrafficking', slugEs: 'visa-trafico-humano', slugEn: 'human-trafficking-visa' },
    { key: 'naturalization', slugEs: 'naturalizacion', slugEn: 'naturalization' },
    { key: 'visaEB2', slugEs: 'visa-eb-2', slugEn: 'eb-2-visa' },
    { key: 'waiver', slugEs: 'waiver', slugEn: 'waiver' },
  ];

  const uaeServices = [
    { key: 'goldenVisa', slugEs: 'visa-golden', slugEn: 'golden-visa' },
    { key: 'workVisa', slugEs: 'visa-de-trabajo', slugEn: 'work-visa' },
    { key: 'businessVisa', slugEs: 'visa-de-negocios', slugEn: 'business-visa' },
    { key: 'touristVisa', slugEs: 'visa-de-turista', slugEn: 'tourist-visa' },
    { key: 'translations', slugEs: 'traducciones-legales', slugEn: 'legal-translations' },
  ];

  const saudiServices = [
    { key: 'goldenVisa', slugEs: 'golden-visa', slugEn: 'golden-visa' },
    { key: 'workVisa', slugEs: 'visa-de-trabajo', slugEn: 'work-visa' },
    { key: 'businessVisa', slugEs: 'visa-de-negocios', slugEn: 'business-visa' },
    { key: 'translations', slugEs: 'traducciones-legales', slugEn: 'legal-translations' },
  ];

  const getSlug = (service: { slugEs: string; slugEn: string }) =>
    locale === 'es' ? service.slugEs : service.slugEn;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/PAS-LOGO.jpg"
              alt="PAS Legal Corp"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {/* USA Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('usa')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary',
                  pathname.includes('/servicios/usa') ? 'text-secondary' : 'text-gray-700'
                )}
              >
                {t('servicesUSA')}
                <ChevronDown className={cn('h-4 w-4 transition-transform', activeDropdown === 'usa' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'usa' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-2"
                  >
                    <div className="w-64 rounded-lg bg-white p-4 shadow-xl border border-gray-100">
                      <ul className="space-y-1">
                        {usaServices.map((service) => (
                          <li key={service.key}>
                            <Link
                              href={{
                                pathname: '/servicios/usa/[slug]',
                                params: { slug: getSlug(service) },
                              }}
                              className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary transition-colors"
                            >
                              {tServices(`usa.${service.key}.title`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Middle East Dropdown (UAE + Saudi) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('middleEast')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary',
                  (pathname.includes('/servicios/uae') || pathname.includes('/servicios/saudi')) ? 'text-secondary' : 'text-gray-700'
                )}
              >
                {t('servicesMiddleEast')}
                <ChevronDown className={cn('h-4 w-4 transition-transform', activeDropdown === 'middleEast' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'middleEast' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-2"
                  >
                    <div className="w-72 rounded-lg bg-white p-4 shadow-xl border border-gray-100">
                      {/* UAE Section */}
                      <div className="mb-4">
                        <p className="px-3 py-1 text-xs font-semibold text-secondary uppercase tracking-wide">
                          {tRegions('uae.title')}
                        </p>
                        <ul className="mt-1 space-y-1">
                          {uaeServices.map((service) => (
                            <li key={`uae-${service.key}`}>
                              <Link
                                href={{
                                  pathname: '/servicios/uae/[slug]',
                                  params: { slug: getSlug(service) },
                                }}
                                className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary transition-colors"
                              >
                                {tServices(`uae.${service.key}.title`)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-100 my-3" />

                      {/* Saudi Section */}
                      <div>
                        <p className="px-3 py-1 text-xs font-semibold text-secondary uppercase tracking-wide">
                          {tRegions('saudi.title')}
                        </p>
                        <ul className="mt-1 space-y-1">
                          {saudiServices.map((service) => (
                            <li key={`saudi-${service.key}`}>
                              <Link
                                href={{
                                  pathname: '/servicios/saudi/[slug]',
                                  params: { slug: getSlug(service) },
                                }}
                                className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary transition-colors"
                              >
                                {tServices(`saudi.${service.key}.title`)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/sobre-nosotros"
              className={cn(
                'text-sm font-medium transition-colors hover:text-secondary',
                pathname === '/sobre-nosotros' ? 'text-secondary' : 'text-gray-700'
              )}
            >
              {t('about')}
            </Link>

            <Link
              href="/blog"
              className={cn(
                'text-sm font-medium transition-colors hover:text-secondary',
                pathname.includes('/blog') ? 'text-secondary' : 'text-gray-700'
              )}
            >
              {t('blog')}
            </Link>

            <Link
              href="/contacto"
              className={cn(
                'text-sm font-medium transition-colors hover:text-secondary',
                pathname === '/contacto' ? 'text-secondary' : 'text-gray-700'
              )}
            >
              {t('contact')}
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Globe className="h-4 w-4" />
              {locale === 'es' ? 'EN' : 'ES'}
            </button>

            {/* CTA */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {t('schedule')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="border-t border-gray-100 py-4 space-y-2">
                {/* Mobile USA Accordion */}
                <div>
                  <button
                    onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'usa' ? null : 'usa')}
                    className="flex w-full items-center justify-between px-2 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    {t('servicesUSA')}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        mobileActiveDropdown === 'usa' && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'usa' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                          {usaServices.map((service) => (
                            <li key={service.key}>
                              <Link
                                href={{
                                  pathname: '/servicios/usa/[slug]',
                                  params: { slug: getSlug(service) },
                                }}
                                className="block py-1.5 text-sm text-gray-600 hover:text-secondary"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {tServices(`usa.${service.key}.title`)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Middle East Accordion */}
                <div>
                  <button
                    onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'middleEast' ? null : 'middleEast')}
                    className="flex w-full items-center justify-between px-2 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    {t('servicesMiddleEast')}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        mobileActiveDropdown === 'middleEast' && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'middleEast' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 border-l-2 border-gray-100 pl-4">
                          {/* UAE */}
                          <p className="py-1.5 text-xs font-semibold text-secondary uppercase">
                            {tRegions('uae.title')}
                          </p>
                          <ul className="space-y-1 mb-3">
                            {uaeServices.map((service) => (
                              <li key={`mobile-uae-${service.key}`}>
                                <Link
                                  href={{
                                    pathname: '/servicios/uae/[slug]',
                                    params: { slug: getSlug(service) },
                                  }}
                                  className="block py-1.5 text-sm text-gray-600 hover:text-secondary"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {tServices(`uae.${service.key}.title`)}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {/* Saudi */}
                          <p className="py-1.5 text-xs font-semibold text-secondary uppercase">
                            {tRegions('saudi.title')}
                          </p>
                          <ul className="space-y-1">
                            {saudiServices.map((service) => (
                              <li key={`mobile-saudi-${service.key}`}>
                                <Link
                                  href={{
                                    pathname: '/servicios/saudi/[slug]',
                                    params: { slug: getSlug(service) },
                                  }}
                                  className="block py-1.5 text-sm text-gray-600 hover:text-secondary"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {tServices(`saudi.${service.key}.title`)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/sobre-nosotros"
                  className="block px-2 py-2 text-gray-700 hover:text-secondary rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('about')}
                </Link>

                <Link
                  href="/blog"
                  className="block px-2 py-2 text-gray-700 hover:text-secondary rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('blog')}
                </Link>

                <Link
                  href="/contacto"
                  className="block px-2 py-2 text-gray-700 hover:text-secondary rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('contact')}
                </Link>

                <div className="flex items-center gap-3 pt-4 mt-2 border-t border-gray-100">
                  <button
                    onClick={toggleLocale}
                    className="flex items-center gap-1 text-sm text-gray-600"
                  >
                    <Globe className="h-4 w-4" />
                    {locale === 'es' ? 'English' : 'Español'}
                  </button>
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white mt-2"
                >
                  <Phone className="h-4 w-4" />
                  {t('schedule')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
