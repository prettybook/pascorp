'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
        1
      </span>
    </motion.a>
  );
}
