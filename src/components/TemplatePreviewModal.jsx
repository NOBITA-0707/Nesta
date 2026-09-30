import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Zap, 
  Star,
  ShieldCheck,
  CreditCard,
  Code,
  ShoppingCart
} from 'lucide-react';

export default function TemplatePreviewModal({ template, isOpen, onClose, onSelect, isSelected }) {
  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [pricingCycle, setPricingCycle] = useState('monthly');
  const [activeTab, setActiveTab] = useState('features');

  if (!isOpen || !template) return null;

  const demo = template.demo || {};

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]"
      onClick={onClose}
    >
      <div 
        className="glass-card rounded-3xl w-full max-w-6xl h-[94vh] flex flex-col neu-surface border border-white/15 overflow-hidden shadow-2xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Chrome / Navigation Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4 bg-[#14161f]">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-black shadow-lg"
              style={{ backgroundColor: template.accentColor || '#FACC15' }}
            >
              {template.name.substring(0, 2)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">{template.name}</h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-yellow-300 border border-white/10">
                  {template.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">{template.tagline}</p>
            </div>
          </div>

          {/* Viewport controls */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-[#0e1014] rounded-xl border border-white/10">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewport === 'desktop' ? 'bg-[#222631] text-yellow-400 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewport === 'tablet' ? 'bg-[#222631] text-yellow-400 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewport === 'mobile' ? 'bg-[#222631] text-yellow-400 shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onSelect(template);
                onClose();
              }}
              className="neu-yellow-btn px-4 sm:px-6 py-2 rounded-xl text-xs font-bold text-black flex items-center gap-2 shadow-lg"
            >
              {isSelected ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Selected</span>
                </>
              ) : (
                <>
                  <span>Use This Template</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl neu-btn text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Interactive Preview Canvas */}
        <div className="flex-1 overflow-y-auto bg-[#0a0c10] p-4 sm:p-6 flex justify-center items-start">
          <div 
            className={`transition-all duration-300 w-full bg-[#11131a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col ${
              viewport === 'desktop' ? 'max-w-5xl' : viewport === 'tablet' ? 'max-w-2xl' : 'max-w-sm'
            }`}
          >
            {/* Mock Browser Header */}
            <div className="px-4 py-3 bg-[#181a24] border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-slate-400 truncate">https://preview.{template.id}.nesta.app</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-emerald-400 border border-emerald-500/20">
                Interactive Preview Active
              </span>
            </div>

            {/* Template-Specific Render */}
            <div className="p-6 sm:p-10 space-y-12 bg-gradient-to-b from-[#11131a] via-[#141722] to-[#0f1118]">
              
              {/* Top Banner Navigation inside template */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-black" style={{ backgroundColor: template.accentColor || '#FACC15' }}>
                    {template.name.substring(0, 1)}
                  </div>
                  <span className="font-bold text-sm tracking-tight text-white">{template.name}</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs text-slate-300">
                  <span className="hover:text-white cursor-pointer">Overview</span>
                  <span className="hover:text-white cursor-pointer">Components</span>
                  <span className="hover:text-white cursor-pointer">Pricing</span>
                </div>
                <button 
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black"
                  style={{ backgroundColor: template.accentColor || '#FACC15' }}
                >
                  {demo.primaryAction || 'Get Started'}
                </button>
              </div>

              {/* HERO SECTION OF TEMPLATE */}
              <div className="text-center max-w-2xl mx-auto space-y-5 pt-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs" style={{ color: template.accentColor || '#FACC15' }}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{template.badge || 'Curated Design'}</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {demo.heroHeading || 'The Next Generation Web Experience'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
                  {demo.heroSubheading || 'Crafted with modular design tokens, full responsiveness, and fast interactions.'}
                </p>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button 
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-black flex items-center gap-1.5 shadow-lg"
                    style={{ backgroundColor: template.accentColor || '#FACC15' }}
                  >
                    <span>{demo.primaryAction || 'Explore Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10">
                    {demo.secondaryAction || 'Learn More'}
                  </button>
                </div>
              </div>

              {/* SPECIFIC INTERACTIVE WIDGETS BY TEMPLATE TYPE */}
              {template.id === 'saas-nova' && (
                <div className="space-y-8">
                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-3">
                    {demo.metrics?.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="text-lg sm:text-2xl font-black text-white">{m.value}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                        <span className="text-[10px] text-emerald-400 font-mono block mt-1">{m.change}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Tiers Table */}
                  <div className="p-6 rounded-2xl bg-[#171a26] border border-white/10">
                    <h3 className="text-sm font-bold text-white text-center mb-6">Simple, Transparent Pricing</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {demo.pricingTiers?.map((tier, idx) => (
                        <div 
                          key={idx} 
                          className={`p-5 rounded-xl border flex flex-col justify-between ${
                            tier.highlight ? 'bg-yellow-400/10 border-yellow-400 shadow-md' : 'bg-white/5 border-white/10'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-white">{tier.name}</span>
                              {tier.highlight && <span className="text-[10px] bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded">POPULAR</span>}
                            </div>
                            <div className="text-2xl font-extrabold text-white mb-2">{tier.price}</div>
                            <p className="text-[11px] text-slate-400 mb-4">{tier.desc}</p>
                          </div>
                          <button 
                            className={`w-full py-2 rounded-lg text-xs font-bold ${
                              tier.highlight ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                          >
                            Select Plan
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {template.id === 'ecommerce-aura' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">Featured Products</h3>
                    <span className="text-xs text-sky-400 cursor-pointer">View all 12 items →</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {demo.products?.map((p, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                        <div className="h-28 rounded-lg bg-[#1f2330] flex items-center justify-center text-slate-400 mb-3 text-xs">
                          📦 Product Shot
                        </div>
                        <div>
                          <span className="text-[10px] text-sky-400 font-semibold">{p.tag}</span>
                          <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
                          <span className="text-xs font-extrabold text-white mt-1 block">{p.price}</span>
                        </div>
                        <button className="mt-3 w-full py-1.5 rounded-lg bg-sky-400 text-black font-bold text-xs hover:bg-sky-300">
                          Add to Bag
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {template.id === 'ai-nexus' && (
                <div className="p-6 rounded-2xl bg-[#191b26] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-300">Prompt Console (Live Stream Demo)</span>
                    <span className="text-[10px] font-mono text-emerald-400">● 100% Ready</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0f1118] border border-white/10 font-mono text-xs text-slate-300">
                    {demo.promptExample}
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b0c10] border border-purple-500/30 font-mono text-xs text-purple-300 whitespace-pre-wrap">
                    {demo.simulatedOutput}
                  </div>
                </div>
              )}

              {template.id === 'fintech-krypton' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  <div className="p-6 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-800 text-white shadow-xl space-y-8">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs tracking-wider">{demo.virtualCard?.network}</span>
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-mono tracking-widest">{demo.virtualCard?.number}</div>
                      <div className="flex justify-between items-end mt-4 text-xs font-mono">
                        <span>{demo.virtualCard?.holder}</span>
                        <span>EXP {demo.virtualCard?.expires}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Total Treasury Balance</span>
                      <span className="text-xs text-emerald-400 font-mono">+12.4%</span>
                    </div>
                    <div className="text-2xl font-black text-white">{demo.accountBalance}</div>
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      {demo.recentTransactions?.map((t, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className="text-slate-300 truncate max-w-[140px]">{t.title}</span>
                          <span className={t.type === 'in' ? 'text-emerald-400 font-bold' : 'text-slate-400'}>{t.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {template.id === 'dev-docs-terminal' && (
                <div className="p-5 rounded-2xl bg-[#0f1118] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex gap-2">
                      {demo.languages?.map((lang, idx) => (
                        <span key={idx} className={`text-xs px-2.5 py-1 rounded-md font-mono ${idx === 0 ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-white'}`}>
                          {lang}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">SDK v2.4</span>
                  </div>
                  <pre className="p-3 text-xs font-mono text-amber-300 overflow-x-auto">
                    <code>{demo.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Template Features Checklist */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Components & Architecture Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {template.componentsIncluded?.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#14161f] flex items-center justify-between text-xs text-slate-400">
          <span>Ready to build with this UI template in your fullstack app.</span>
          <button
            onClick={() => {
              onSelect(template);
              onClose();
            }}
            className="neu-yellow-btn px-5 py-2 rounded-xl text-xs font-bold text-black flex items-center gap-2"
          >
            <span>Select {template.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
