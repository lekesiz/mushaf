'use client';

import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { topics, letters, Topic, TopicType } from '@/data/quranGuide';
import { Navbar } from '@/components/Navbar';
import { HeroSearch } from '@/components/HeroSearch';
import { CategoryFilter } from '@/components/CategoryFilter';
import { AlphaNav } from '@/components/AlphaNav';
import { LetterSection } from '@/components/LetterSection';
import Footer from '@/components/Footer';

type FilterType = 'all' | TopicType;

const fuse = new Fuse(topics, {
  keys: ['title', 'description'],
  threshold: 0.35,
  includeScore: true,
});

export default function Home() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = useMemo(() => {
    let result: Topic[] = topics;

    if (query.trim()) {
      result = fuse.search(query.trim()).map((r) => r.item);
    }

    if (filter !== 'all') {
      result = result.filter((t) => t.type === filter);
    }

    return result;
  }, [query, filter]);

  const grouped = useMemo(() => {
    const map = new Map<string, Topic[]>();
    const activeLetters = query.trim()
      ? [...new Set(filtered.map((t) => t.letter))]
      : letters;

    activeLetters.forEach((l) => map.set(l, []));
    filtered.forEach((t) => {
      if (map.has(t.letter)) {
        map.get(t.letter)!.push(t);
      } else {
        map.set(t.letter, [t]);
      }
    });

    map.forEach((v, k) => {
      if (v.length === 0) map.delete(k);
    });

    return map;
  }, [filtered, query]);

  const visibleLetters = [...grouped.keys()];

  const counts = useMemo(
    () => ({
      all: topics.length,
      command: topics.filter((t) => t.type === 'command').length,
      prohibition: topics.filter((t) => t.type === 'prohibition').length,
      worship: topics.filter((t) => t.type === 'worship').length,
    }),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <HeroSearch query={query} onChange={setQuery} />

      <main className="mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-6">
        {/* Stats bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-white">{filtered.length}</span>
            <span>konu gösteriliyor</span>
            {query && (
              <span className="text-slate-400 dark:text-slate-500">
                &ldquo;<span className="font-medium text-slate-600 dark:text-slate-300">{query}</span>&rdquo; için
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {counts.command} Emir
            </span>
            <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              {counts.prohibition} Yasak
            </span>
            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {counts.worship} İbadet
            </span>
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-5">
          <CategoryFilter active={filter} onChange={setFilter} counts={counts} />
        </div>

        {/* A-Z nav */}
        {!query && (
          <div className="mb-8">
            <AlphaNav letters={visibleLetters} />
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center dark:border-slate-800 dark:bg-slate-900">
            <span className="mb-3 text-4xl">🔍</span>
            <p className="text-base font-medium text-slate-700 dark:text-slate-300">
              Sonuç bulunamadı
            </p>
            <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
              &ldquo;{query}&rdquo; için eşleşen konu yok. Farklı bir kelime deneyin.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {visibleLetters.map((letter) => {
              const sectionTopics = grouped.get(letter) ?? [];
              return (
                <LetterSection key={letter} letter={letter} topics={sectionTopics} />
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
