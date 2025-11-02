import React from 'react';

function Stat({ label, value, sub }) {
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-white/60 backdrop-blur dark:bg-slate-900/60 dark:border-slate-800">
      <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{value}</div>
      {sub && <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">{sub}</div>}
    </div>
  );
}

function MiniArea({ data, color = '#0ea5e9' }) {
  const max = Math.max(...data);
  const pts = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 30 - (d / max) * 30;
      return `${x},${y}`;
    })
    .join(' ');
  return (
    <svg viewBox="0 0 100 30" className="w-full h-16">
      <polyline fill="none" stroke={color} strokeWidth="2" points={pts} />
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.35" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
      <polygon fill="url(#grad)" points={`${pts} 100,30 0,30`} />
    </svg>
  );
}

function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
      <table className="min-w-full text-sm">
        <thead className="text-left text-slate-600 dark:text-slate-300">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-200">
          {rows.map((r, idx) => (
            <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/60">
              {r.map((cell, i) => (
                <td key={i} className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DashboardView({ newsEnabled, mode }) {
  const pnl = [5, 6, 7, 5, 8, 9, 12, 11, 13, 15, 18, 20];
  const balance = [10, 11, 11.5, 12.2, 12, 13.5, 14, 14.8, 15.2, 15.9, 16.5, 17.2];
  const trades = [
    ['2025-02-01', 'BTCUSDT', 'Long', '+2.3%', '$230'],
    ['2025-02-02', 'EURUSD', 'Short', '-0.6%', '-$60'],
    ['2025-02-03', 'ETHUSDT', 'Long', '+1.1%', '$110'],
    ['2025-02-04', 'XAUUSD', 'Short', '+0.8%', '$80'],
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="PnL (30d)" value={"$" + (pnl.reduce((a,b)=>a+b,0)*100).toLocaleString()} sub={<span className="text-green-600">+12.4%</span>} />
        <Stat label="Win rate" value="58%" sub="Last 100 trades" />
        <Stat label="Sharpe" value="1.42" sub="Risk-adjusted" />
        <Stat label="Balance" value="$17,200" sub="Demo account" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 dark:text-white font-semibold">Equity curve</h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">{mode} · News {newsEnabled ? 'On' : 'Off'}</span>
          </div>
          <MiniArea data={balance} color="#6366f1" />
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-900 dark:text-white font-semibold">PnL (last 12)</h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">Monthly</span>
          </div>
          <MiniArea data={pnl} color="#0ea5e9" />
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-slate-900 dark:text-white font-semibold">Recent trades</h3>
        <Table columns={["Date", "Symbol", "Side", "Return", "PnL"]} rows={trades} />
      </div>
    </div>
  );
}

function JournalView() {
  const entries = [
    { date: '2025-02-01', title: 'Bot selected Momentum-X', note: 'Tuned risk to 1%. Missed early BTC move.' },
    { date: '2025-02-03', title: 'News on, intraday', note: 'NFP caused volatility; reduced exposure.' },
    { date: '2025-02-05', title: 'Swing session', note: 'Holding ETH swing. Good structure above 2k.' },
  ];
  return (
    <div className="space-y-4">
      {entries.map((e) => (
        <div key={e.date} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
          <div className="text-xs text-slate-500 dark:text-slate-400">{e.date}</div>
          <div className="text-slate-900 dark:text-white font-medium">{e.title}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">{e.note}</div>
        </div>
      ))}
    </div>
  );
}

function TradeLogView() {
  const rows = [
    ['#1023', 'BTCUSDT', 'Long', 'Market', '1.25%', '$125', 'Closed'],
    ['#1024', 'EURUSD', 'Short', 'Limit', '-0.40%', '-$40', 'Closed'],
    ['#1025', 'ETHUSDT', 'Long', 'Market', '0.95%', '$95', 'Open'],
    ['#1026', 'XAUUSD', 'Short', 'Stop', '0.35%', '$35', 'Closed'],
  ];
  return (
    <Table columns={["ID","Symbol","Side","Type","Return","PnL","Status"]} rows={rows} />
  );
}

function ReportsView() {
  const metrics = [
    { label: 'Avg trade', value: '+0.42%' },
    { label: 'Max drawdown', value: '3.2%' },
    { label: 'Avg holding', value: '8h 12m' },
    { label: 'Profit factor', value: '1.65' },
  ];
  const bars = [68, 52, 75, 40, 90, 61, 72];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
        <div className="mb-3 text-slate-900 dark:text-white font-semibold">Weekly performance</div>
        <div className="flex items-end gap-2 h-40">
          {bars.map((b,i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-indigo-200 to-indigo-500/70 rounded-md" style={{height: `${b}%`}} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{m.label}</div>
            <div className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsView() {
  const tips = [
    'Detected: Medium-risk momentum strategy fits prompt.',
    'Suggestion: Enable news filter on high-impact calendar days.',
    'Risk: Reduce position size by 20% during elevated volatility.',
    'Opportunity: ETH shows strong structure on 4H for swing entries.',
  ];
  return (
    <ul className="space-y-3">
      {tips.map((t, i) => (
        <li key={i} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200">{t}</li>
      ))}
    </ul>
  );
}

export default function ContentRouter({ section, newsEnabled, mode }) {
  if (section === 'Daily Journal') return <JournalView />;
  if (section === 'Trade Log') return <TradeLogView />;
  if (section === 'Reports') return <ReportsView />;
  if (section === 'Insights') return <InsightsView />;
  return <DashboardView newsEnabled={newsEnabled} mode={mode} />;
}
