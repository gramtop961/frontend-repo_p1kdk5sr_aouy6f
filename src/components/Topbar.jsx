import React from 'react';

export default function Topbar({ newsEnabled, onToggleNews, mode, onChangeMode }) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-sm text-slate-500 dark:text-slate-400">Mode</span>
          <div className="inline-flex rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden">
            {['Intraday', 'Swing'].map((opt) => (
              <button
                key={opt}
                onClick={() => onChangeMode(opt)}
                className={`px-3 py-1.5 text-sm transition ${mode === opt ? 'bg-slate-900 text-white' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="ml-4 flex items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">News analysis</span>
            <button
              onClick={onToggleNews}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${newsEnabled ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${newsEnabled ? 'translate-x-5' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-xs ${newsEnabled ? 'text-green-600' : 'text-slate-500 dark:text-slate-400'}`}>{newsEnabled ? 'On' : 'Off'}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">Broker API</button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
        </div>
      </div>
    </header>
  );
}
