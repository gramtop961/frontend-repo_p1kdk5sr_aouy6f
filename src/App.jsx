import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import ContentRouter from './components/ContentRouter.jsx';

function App() {
  const [active, setActive] = useState('Dashboard');
  const [newsEnabled, setNewsEnabled] = useState(true);
  const [mode, setMode] = useState('Intraday');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950 text-slate-900 dark:text-white">
      <div className="flex">
        <Sidebar active={active} onSelect={setActive} />
        <div className="flex-1 min-h-screen flex flex-col">
          <Topbar
            newsEnabled={newsEnabled}
            onToggleNews={() => setNewsEnabled((v) => !v)}
            mode={mode}
            onChangeMode={setMode}
          />

          <main className="max-w-7xl mx-auto w-full px-4 md:px-6 py-6 space-y-6">
            {active === 'Dashboard' && <Hero3D />}
            <div className="grid grid-cols-1">
              <ContentRouter section={active} newsEnabled={newsEnabled} mode={mode} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
