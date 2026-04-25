'use client';

interface AlphaNavProps {
  letters: string[];
  activeLetter?: string;
}

export function AlphaNav({ letters, activeLetter }: AlphaNavProps) {
  const handleClick = (letter: string) => {
    const el = document.getElementById(`letter-${letter}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            className={`flex h-9 min-w-[2.25rem] flex-shrink-0 items-center justify-center rounded-lg border text-sm font-semibold transition-all ${
              activeLetter === letter
                ? 'border-emerald-500 bg-emerald-500 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
