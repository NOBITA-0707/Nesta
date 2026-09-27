import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Server, 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Zap,
  Terminal,
  ExternalLink
} from 'lucide-react';

export default function HeroIntroSection({ onNavigate, onOpenApiModal, selectedFrontend }) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Pick Frontend Engine',
      subtitle: 'React 19, Next.js 15, Vue, Svelte, or Astro',
      icon: Code2,
      duration: '30 sec',
      details: 'Select your preferred architectural paradigm. Whether you need full-stack SSR (Next.js), client reactivity (Vue/React), or zero-JS islands (Astro).',
      badge: 'Step 01',
      actionText: 'Browse 8+ Frameworks',
      target: 'frontends'
    },
    {
      step: 2,
      title: 'Assemble Modular Components',
      subtitle: 'Nav, Hero, Bento Grids, Forms & API feeds',
      icon: Layers,
      duration: '1 min',
      details: 'Stack pre-engineered tactile neumorphic and glassmorphic UI blocks. Each block is styled with yellow-grey-white tokens and strict accessibility standards.',
      badge: 'Step 02',
      actionText: 'Inspect Anatomy',
      target: 'anatomy'
    },
    {
      step: 3,
      title: 'Connect Backend API',
      subtitle: 'REST endpoints & JSON contract syncing',
      icon: Server,
      duration: '45 sec',
      details: 'Connect your Node.js, Python FastAPI, Go, or Rails backend. Nesta provides standardized payload schemas, headers, and mock fallbacks.',
      badge: 'Step 03',
      actionText: 'View API Endpoints',
      target: 'api'
    },
    {
      step: 4,
      title: 'One-Click Edge Deploy',
      subtitle: 'Generate production zip or push to Edge',
      icon: Rocket,
      duration: 'Instant',
      details: 'Export clean, unminified source code or deploy instantly to Cloudflare, Vercel, or custom Docker containers with zero vendor lock-in.',
      badge: 'Step 04',
      actionText: 'Deploy Pipeline',
      target: 'frontends'
    }
  ];

  return (
    <section id="intro" className="relative pt-6 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid Container: Big Card (Left) + Small Steps Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* ========================================================================= */}
        {/* 1. BIG CARD: WHAT WE DO (Nesta Architecture Core)                         */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group neu-surface">
          {/* Subtle decorative grid lines */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/10 via-transparent to-transparent pointer-events-none rounded-bl-full" />
          
          <div>
            {/* Top pill badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/25 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                Nesta Architecture Engine
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                v2.4 Production Standard
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-['Plus_Jakarta_Sans']">
              What We Do: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
                Sculpting Modern Web Architecture
              </span>
            </h1>

            {/* Paragraph / Mission */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Nesta is a minimalist web creation environment designed for developers who demand high aesthetic standards and clean code. We fuse the tactile, physical depth of <strong className="text-white">Neumorphism</strong> with the ethereal transparency of <strong className="text-white">Glassmorphism</strong>, curated in an uncompromising <strong className="text-yellow-400">yellow, grey, and white</strong> palette.
            </p>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="neu-inset p-4 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#222631] text-yellow-400 border border-yellow-400/20 shadow-sm mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Modular Frontend Canvas</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-normal">
                    Pre-wired for React, Next.js, Vue, Svelte, and Astro with instant config switching.
                  </p>
                </div>
              </div>

              <div className="neu-inset p-4 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#222631] text-yellow-400 border border-yellow-400/20 shadow-sm mt-0.5">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Backend Contract Sync</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-normal">
                    Clean REST endpoints with mock fallbacks ready to integrate your own API server.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry & CTAs */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            {/* Live Stats */}
            <div className="flex items-center gap-6">
              <div>
                <div className="text-2xl font-black text-white font-mono">0.4s</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Build Velocity</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-black text-yellow-400 font-mono">100/100</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Performance</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-black text-white font-mono">8+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Engines</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('frontends')}
                className="neu-yellow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 text-black shadow-lg"
              >
                <span>Select Frontend</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenApiModal}
                className="neu-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-yellow-400" />
                <span>API Spec</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SMALL CARD: STEPS TO BUILD THEIR OWN WEBSITE (Interactive Guide)       */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between neu-surface border border-white/10">
          <div>
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold text-xs border border-yellow-400/30">
                  ⚡
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    Build In Few Easy Steps
                  </h3>
                  <p className="text-slate-400 text-xs font-mono">
                    Zero complexity • High velocity
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded-md">
                Fast Track
              </span>
            </div>

            {/* Step Selector & Progress Tabs */}
            <div className="mt-5 space-y-3">
              {steps.map((item) => {
                const Icon = item.icon;
                const isActive = activeStep === item.step;

                return (
                  <div
                    key={item.step}
                    onClick={() => setActiveStep(item.step)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isActive
                        ? 'bg-[#222631] border-yellow-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transform translate-x-1'
                        : 'bg-[#181a21]/60 hover:bg-[#1f222b] border-white/5 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Step Number / Icon Badge */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isActive
                            ? 'bg-yellow-400 text-black shadow-[0_0_12px_rgba(250,204,21,0.5)]'
                            : 'bg-[#13151a] text-slate-400 border border-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Step Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-yellow-400/90 shrink-0">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Expanded details when active */}
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          {item.details}
                        </p>

                        <div className="mt-3 flex items-center justify-between pt-1">
                          <span className="text-[10px] text-slate-400 font-mono">
                            Status: <span className="text-emerald-400">Ready to configure</span>
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (item.target === 'api') {
                                onOpenApiModal();
                              } else {
                                onNavigate(item.target);
                              }
                            }}
                            className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 group font-mono"
                          >
                            <span>{item.actionText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicator at Bottom of Small Card */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-xs mb-2 font-mono">
              <span className="text-slate-400">Workflow Progress</span>
              <span className="text-yellow-400 font-bold">{activeStep} of 4 Complete</span>
            </div>
            {/* Neumorphic Track */}
            <div className="w-full h-2 rounded-full neu-inset overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                style={{ width: `${(activeStep / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
