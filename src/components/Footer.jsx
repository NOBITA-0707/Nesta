import React from 'react';
import { Server, ArrowUp, Layers, Terminal } from 'lucide-react';

export default function Footer({ onOpenApiModal, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#101217] pt-14 pb-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-10">
        
        {/* Top Tier: Brand + Navigation columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center font-black text-black text-lg shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                N
              </div>
              <span className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans'] tracking-tight">
                Nesta
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Minimalist web architecture synthesizing tactile Neumorphism and translucent Glassmorphism. Engineered in a rigorous yellow, grey, and white color triad.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                API Core: Online
              </span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>React 19</span>
            </div>
          </div>

          {/* Architecture Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-bold">
              Scroll Sections
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('intro')} className="hover:text-white transition-colors">
                  01. What We Do & Easy Steps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('anatomy')} className="hover:text-white transition-colors">
                  02. Creative Component Anatomy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('frontends')} className="hover:text-white transition-colors">
                  03. Frontend Engine Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Backend API Integration Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-bold">
              Backend Integration
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenApiModal} className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <Terminal className="w-3.5 h-3.5 text-yellow-400" />
                  API Endpoints & Schema
                </button>
              </li>
              <li>
                <span className="text-slate-400 font-mono text-[11px]">
                  Config: <code className="text-slate-300">src/api/endpoints.js</code>
                </span>
              </li>
              <li>
                <span className="text-slate-400 font-mono text-[11px]">
                  Extend: <code className="text-slate-300">src/data/frontendOptions.js</code>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Nesta Web Systems. Minimalist Architectural Frontend.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="neu-btn px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-yellow-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
