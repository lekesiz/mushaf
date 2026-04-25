'use client';

import { AnimatePresence } from 'framer-motion';
import { Topic } from '@/data/quranGuide';
import { TopicCard } from './TopicCard';

interface LetterSectionProps {
  letter: string;
  topics: Topic[];
}

export function LetterSection({ letter, topics }: LetterSectionProps) {
  if (topics.length === 0) return null;

  return (
    <section id={`letter-${letter}`} className="scroll-mt-24">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white dark:bg-white dark:text-slate-900">
          {letter}
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
          {topics.length} konu
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
