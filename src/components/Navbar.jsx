import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, CheckCircle2, ChevronRight, Server, Globe } from 'lucide-react';

export default function Navbar({ selectedFrontend, onOpenApiModal, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 pt-4 pb-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl">
        
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => onNavigate('intro')}>
          <div className="w-10 h-10 rounded-xl bg-[#FACC15] flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)] transform transition-transform hover:scale-105 active:scale-95">
            {/* Minimalist geometric icon */}
            <span className="font-extrabold text-black text-xl tracking-tighter">N</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                Nesta
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-yellow-400 border border-yellow-400/30">
                Architect
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Neumorphic • Glassmorphic • Modular
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-[#14161B]/80 rounded-xl border border-white/5 shadow-inner">
          <button
            onClick={() => onNavigate('intro')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeSection === 'intro'
                ? 'bg-[#222631] text-yellow-400 shadow-sm border border-yellow-400/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            01 Overview
          </button>
          <button
            onClick={() => onNavigate('anatomy')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeSection === 'anatomy'
                ? 'bg-[#222631] text-yellow-400 shadow-sm border border-yellow-400/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            02 Component Anatomy
          </button>
          <button
            onClick={() => onNavigate('frontends')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeSection === 'frontends'
                ? 'bg-[#222631] text-yellow-400 shadow-sm border border-yellow-400/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            03 Frontend Matrix
          </button>
        </nav>

        {/* Selected Framework Pill & API Endpoints Trigger */}
        <div className="flex items-center gap-3">
          {/* Active selection badge */}
          {selectedFrontend && (
            <div 
              onClick={() => onNavigate('frontends')}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl neu-inset cursor-pointer hover:border-yellow-400/40 transition-colors"
              title="Click to view frontend configuration"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[11px] text-slate-400 font-mono">Selected:</span>
              <span className="text-xs font-semibold text-white">{selectedFrontend.name}</span>
            </div>
          )}

          {/* Backend API Endpoints Button */}
          <button
            onClick={onOpenApiModal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl neu-btn text-xs font-medium text-slate-200 hover:text-white transition-all group"
          >
            <Server className="w-3.5 h-3.5 text-yellow-400 group-hover:rotate-12 transition-transform" />
            <span className="font-mono">API Spec</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </button>

          {/* Action CTA */}
          <button
            onClick={() => onNavigate('frontends')}
            className="neu-yellow-btn px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 text-black"
          >
            <span>Configure</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
