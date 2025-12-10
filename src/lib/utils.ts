import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = '16893179213';
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;

export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
  if (message) {
    return `${baseUrl}&text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export const PHONE_NUMBER = '+1 689 317 9213';
export const PHONE_HREF = 'tel:+16893179213';

export const LOCATIONS = {
  orlando: {
    city: 'Orlando',
    country: 'Florida, USA',
  },
  dubai: {
    city: 'Dubai',
    country: 'UAE',
  },
  jeddah: {
    city: 'Jeddah',
    country: 'Saudi Arabia',
  },
};
