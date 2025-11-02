import React from 'react';
import { Home, BookOpen, List, BarChart3, Lightbulb } from 'lucide-react';

const navItems = [
  { key: 'Dashboard', label: 'Dashboard', icon: Home },
  { key: 'Daily Journal', label: 'Daily Journal', icon: BookOpen },
  { key: 'Trade Log', label: 'Trade Log', icon: List },
  { key: 'Reports', label: 'Reports', icon: BarChart3 },
  { key: 'Insights', label: 'Insights', icon: Lightbulb },
];

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="h-screen w-64 shrink-0 bg-white/70 backdrop-blur border-r border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 hidden md:flex flex-col">
      <div className="px-6 py-6">
        <div className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">TradePilot</div>
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Automated trading made simple</div>
      </div>
      <nav className="px-3 space-y-1">
        {navItems.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ' +
                (isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800')
              }
            >
              <Icon className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200'} size={18} />
              <span className="text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </nav>
      <div className="mt-auto p-4 text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} TradePilot
      </div>
    </aside>
  );
}
