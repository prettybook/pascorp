'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const t = useTranslations('stats');

  const stats = [
    {
      value: 9,
      suffix: '+',
      label: t('experience'),
    },
    {
      value: 50,
      suffix: '',
      label: t('states'),
    },
    {
      value: 4,
      suffix: '',
      label: t('languages'),
    },
  ];

  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-1 text-4xl font-bold text-white md:text-5xl lg:text-6xl font-serif">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm text-gray-300 md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
