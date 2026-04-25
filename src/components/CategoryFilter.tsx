'use client';

import { motion } from 'framer-motion';
import { TopicType } from '@/data/quranGuide';

type FilterType = 'all' | TopicType;

interface CategoryFilterProps {
  active: FilterType;
  onChange: (type: FilterType) => void;
  counts: { all: number; command: number; prohibition: number; worship: number };
}

const filters: { type: FilterType; label: string; emoji: string; color: string; activeColor: string }[] = [
  {
    type: 'all',
    label: 'Tümü',
    emoji: '📚',
    color: 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800',
    activeColor: 'border-slate-800 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900',
  },
  {
    type: 'command',
    label: 'Emir ve Tavsiyeler',
    emoji: '🟢',
    color: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:bg-emerald-900/50',
    activeColor: 'border-emerald-500 bg-emerald-500 text-white dark:border-emerald-400 dark:bg-emerald-500 dark:text-white',
  },
  {
    type: 'prohibition',
    label: 'Yasaklar',
    emoji: '🔴',
    color: 'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-950/50 dark:text-rose-400 dark:hover:bg-rose-900/50',
    activeColor: 'border-rose-500 bg-rose-500 text-white dark:border-rose-400 dark:bg-rose-500 dark:text-white',
  },
  {
    type: 'worship',
    label: 'İbadetler',
    emoji: '🕌',
    color: 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-400 dark:hover:bg-amber-900/50',
    activeColor: 'border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-500 dark:text-white',
  },
];

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const isActive = active === f.type;
        const count = counts[f.type];
        return (
          <motion.button
            key={f.type}
            onClick={() => onChange(f.type)}
            whileTap={{ scale: 0.96 }}
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              isActive ? f.activeColor : f.color
            }`}
          >
            <span>{f.emoji}</span>
            <span>{f.label}</span>
            <span
              className={`ml-0.5 rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {count}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
