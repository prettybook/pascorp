'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF, getWhatsAppUrl, LOCATIONS } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPageContent() {
  const t = useTranslations('contact');
  const tServices = useTranslations('services');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const services = [
    { value: 'green-card', label: tServices('usa.greenCard.title') },
    { value: 'work-permit', label: tServices('usa.workPermit.title') },
    { value: 'family-petition', label: tServices('usa.familyPetition.title') },
    { value: 'asylum', label: tServices('usa.asylum.title') },
    { value: 'visa-u', label: tServices('usa.visaU.title') },
    { value: 'golden-visa-uae', label: `${tServices('uae.goldenVisa.title')} (UAE)` },
    {
      value: 'golden-visa-saudi',
      label: `${tServices('saudi.goldenVisa.title')} (Saudi)`,
    },
    { value: 'other', label: 'Otro' },
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {t('form.success')}
                  </h3>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-green-700 underline hover:text-green-800"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-xl bg-white p-8 shadow-lg"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        {t('form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                        className={`w-full rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        {t('form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                        className={`w-full rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        {t('form.service')}
                      </label>
                      <select
                        id="service"
                        {...register('service')}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      >
                        <option value="">{t('form.selectService')}</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        {t('form.message')} *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message', { required: true })}
                        placeholder={t('form.messagePlaceholder')}
                        className={`w-full rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-semibold text-white transition-all hover:bg-primary-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {t('form.sending')}
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          {t('form.submit')}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {t('info.title')}
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{t('info.phone')}</h3>
                      <a
                        href={PHONE_HREF}
                        className="text-gray-600 hover:text-secondary transition-colors"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">WhatsApp</h3>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        Enviar mensaje
                      </a>
                    </div>
                  </div>

                  {/* Offices */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{t('info.offices')}</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>
                          {LOCATIONS.orlando.city}, {LOCATIONS.orlando.country}
                        </p>
                        <p>
                          {LOCATIONS.dubai.city}, {LOCATIONS.dubai.country}
                        </p>
                        <p>
                          {LOCATIONS.jeddah.city}, {LOCATIONS.jeddah.country}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{t('info.hours')}</h3>
                      <p className="text-gray-600">{t('info.hoursValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.68489804015!2d-81.56814584556879!3d28.481469835897007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
