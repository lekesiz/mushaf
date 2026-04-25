'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, Ban, Star } from 'lucide-react';
import { Topic } from '@/data/quranGuide';

const typeConfig = {
  command: {
    icon: ShieldCheck,
    label: 'Emir / Tavsiye',
    cardBg: 'bg-white dark:bg-slate-900',
    borderColor: 'border-emerald-200 dark:border-emerald-800/60',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-800',
    descBg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
    accentBar: 'bg-emerald-400',
  },
  prohibition: {
    icon: Ban,
    label: 'Yasak / Sakınılacak',
    cardBg: 'bg-white dark:bg-slate-900',
    borderColor: 'border-rose-200 dark:border-rose-800/60',
    iconBg: 'bg-rose-100 dark:bg-rose-900/50',
    iconColor: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-400 dark:border-rose-800',
    descBg: 'bg-rose-50/50 dark:bg-rose-950/20',
    accentBar: 'bg-rose-400',
  },
  worship: {
    icon: Star,
    label: 'İbadet',
    cardBg: 'bg-white dark:bg-slate-900',
    borderColor: 'border-amber-200 dark:border-amber-800/60',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50',
    iconColor: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-800',
    descBg: 'bg-amber-50/50 dark:bg-amber-950/20',
    accentBar: 'bg-amber-400',
  },
};

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const [open, setOpen] = useState(false);
  const cfg = typeConfig[topic.type];
  const Icon = cfg.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className={`overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md ${cfg.cardBg} ${cfg.borderColor}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
        aria-expanded={open}
      >
        {/* Accent bar */}
        <div className={`h-10 w-1 flex-shrink-0 rounded-full ${cfg.accentBar}`} />

        {/* Icon */}
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${cfg.iconBg}`}>
          <Icon className={`h-5 w-5 ${cfg.iconColor}`} />
        </div>

        {/* Title + badge */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-900 dark:text-white">
            {topic.title}
          </h3>
          <span
            className={`mt-0.5 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${cfg.badgeBg}`}
          >
            {cfg.label}
          </span>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-slate-400 dark:text-slate-500"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`mx-4 mb-4 rounded-xl p-4 sm:mx-5 sm:mb-5 ${cfg.descBg}`}>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {topic.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
