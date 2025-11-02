import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-white/60 backdrop-blur dark:bg-slate-900/60 dark:border-slate-800">
      <Spline scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-slate-950 dark:via-slate-950/30"></div>
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
        <div className="pointer-events-none">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">Your AI trading copilot</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Connect a broker, pick your style, and let the bot execute your strategy.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">Create Bot</button>
          <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-200">Connect Broker</button>
        </div>
      </div>
    </section>
  );
}
