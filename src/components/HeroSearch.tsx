'use client';

import { Search } from 'lucide-react';

interface HeroSearchProps {
  query: string;
  onChange: (value: string) => void;
}

export function HeroSearch({ query, onChange }: HeroSearchProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white pb-8 pt-14 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/20" />
      <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl dark:bg-amber-900/10" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400">
          <span className="text-base">📖</span>
          <span>A'dan Z'ye Kur'an Rehberi</span>
        </div>

        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Kur'an'dan{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Yaşam Rehberi
          </span>
        </h1>

        <p className="mb-8 text-base text-slate-500 dark:text-slate-400 sm:text-lg">
          İnsana yönelik tüm emir, tavsiye, yasak ve ibadetleri keşfet.
          <br className="hidden sm:block" />
          Doğrudan eylem odaklı, anında cevap veren interaktif bir fihrist.
        </p>

        {/* Search bar */}
        <div className="relative mx-auto max-w-xl">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Örn: Adalet, Namaz, Gıybet, Faiz..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-5 text-base text-slate-900 shadow-lg shadow-slate-200/60 outline-none ring-0 transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:shadow-slate-900/60 dark:placeholder:text-slate-500 dark:focus:border-emerald-600 dark:focus:ring-emerald-900/50"
          />
          {query && (
            <button
              onClick={() => onChange('')}
              className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Aramayı temizle"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
