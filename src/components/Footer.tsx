'use client';

import { GitBranch, Heart, Mail, GitPullRequest, Star, Bug } from 'lucide-react';
import Link from 'next/link';

const GITHUB_URL = 'https://github.com/lekesiz/mushaf';
const GITHUB_ISSUES_URL = 'https://github.com/lekesiz/mushaf/issues';
const GITHUB_DISCUSSIONS_URL = 'https://github.com/lekesiz/mushaf/discussions';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      {/* Katkı Çağrısı Bandı */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/40">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 justify-center sm:justify-start">
                <Heart className="h-4 w-4 text-rose-500" />
                Bu projeye katkıda bulunmak ister misiniz?
              </h3>
              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400 max-w-xl">
                Eksik konu önerisi, hata bildirimi, çeviri veya yeni özellik — her katkı değerlidir.
                Proje tamamen açık kaynak ve topluluk desteklidir.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end shrink-0">
              <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-slate-100 px-4 py-2 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
              >
                <GitBranch className="h-4 w-4" />
                GitHub&apos;da İncele
              </Link>
              <Link
                href={GITHUB_ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-transparent px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
              >
                <Bug className="h-4 w-4" />
                Hata Bildir
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Katkı Seçenekleri */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          {/* Konu Öner */}
          <Link
            href={`${GITHUB_ISSUES_URL}/new?template=konu-onerisi.md&title=%5BKonu+Önerisi%5D+`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-emerald-100 dark:bg-emerald-900/40 p-2">
                <GitPullRequest className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">Konu Öner</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kur&apos;an&apos;da olup sitede eksik olan bir konu mu fark ettiniz? Hemen bildirin.
            </p>
          </Link>

          {/* Yıldız Ver */}
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-all"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-amber-100 dark:bg-amber-900/40 p-2">
                <Star className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">Yıldız Ver</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Projeyi beğendiyseniz GitHub&apos;da yıldız vererek destek olabilirsiniz.
            </p>
          </Link>

          {/* İletişim */}
          <Link
            href={GITHUB_DISCUSSIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-blue-100 dark:bg-blue-900/40 p-2">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">İletişim</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Soru, öneri veya iş birliği için GitHub Discussions üzerinden ulaşın.
            </p>
          </Link>
        </div>

        {/* Alt Bilgi */}
        <div className="flex flex-col items-center gap-3 border-t border-slate-100 dark:border-slate-800 pt-6 text-center">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-slate-200">Mushaf</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span>Kur&apos;an Yaşam Rehberi</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>github.com/lekesiz/mushaf</span>
            </Link>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 max-w-lg">
            Bu uygulama bilgilendirme amaçlıdır. Dini konularda uzman görüşü alınması tavsiye edilir.
            Açık kaynak — MIT Lisansı.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
            <span>Topluluk katkısıyla geliştirilmektedir</span>
            <Heart className="h-3 w-3 text-rose-400 fill-rose-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
