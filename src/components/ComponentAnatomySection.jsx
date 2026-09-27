import React, { useState } from 'react';
import { 
  WEBSITE_COMPONENTS 
} from '../data/componentAnatomy';
import { 
  Layers, 
  Code2, 
  Check, 
  Copy, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Box, 
  Cpu, 
  Sliders, 
  Maximize2 
} from 'lucide-react';

export default function ComponentAnatomySection() {
  const [selectedComponentId, setSelectedComponentId] = useState('hero');
  const [copied, setCopied] = useState(false);
  const [visibleLayers, setVisibleLayers] = useState({
    navbar: true,
    hero: true,
    bento: true,
    'data-feed': true,
    'form-gateway': true,
    'footer-seo': true,
  });

  const activeComponent = WEBSITE_COMPONENTS.find(c => c.id === selectedComponentId) || WEBSITE_COMPONENTS[0];

  const toggleLayer = (id, e) => {
    e.stopPropagation();
    setVisibleLayers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="anatomy" className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          Section 02 // Anatomy of a Website
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
          What Components Build a Modern Website?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          Websites are not monolithic templates; they are symphonies of modular layers. Explore how each component functions, interacts, and binds to the Nesta design system.
        </p>
      </div>

      {/* Main Creative Card Container */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 neu-surface border border-white/10 relative overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-yellow-400 neu-dot" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Interactive Blueprint & Layer Deconstruction
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Click any layer to inspect anatomy & code</span>
          </div>
        </div>

        {/* 2-Column Layout: Visual Exploded Canvas (Left) + Component Deep-Dive Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT: THE INTERACTIVE VISUAL WEBSITE SCHEMATIC                            */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Visual Schematic Window */}
            <div className="neu-inset p-5 rounded-2xl border border-white/5 relative min-h-[520px] flex flex-col justify-between bg-[#111317]">
              
              {/* Browser/Window Header Chrome */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[10px] font-mono text-slate-400">
                    https://nesta-preview.internal
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                  6 Active Layers
                </span>
              </div>

              {/* Stack of Interactive Layers */}
              <div className="space-y-3 my-auto">
                
                {/* 1. Navbar Layer */}
                {visibleLayers.navbar && (
                  <div
                    onClick={() => setSelectedComponentId('navbar')}
                    className={`p-3 rounded-xl transition-all cursor-pointer border ${
                      selectedComponentId === 'navbar'
                        ? 'border-yellow-400 bg-[#222631] shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                        : 'border-white/10 bg-[#1a1d24]/80 hover:bg-[#20242e]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="text-xs font-bold text-white font-mono">01. Sticky Glass Navbar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 font-mono">16px Blur</span>
                        <button
                          onClick={(e) => toggleLayer('navbar', e)}
                          className="text-slate-400 hover:text-white"
                          title="Toggle layer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Hero Layer */}
                {visibleLayers.hero && (
                  <div
                    onClick={() => setSelectedComponentId('hero')}
                    className={`p-5 rounded-2xl transition-all cursor-pointer border ${
                      selectedComponentId === 'hero'
                        ? 'border-yellow-400 bg-[#252936] shadow-[0_0_20px_rgba(250,204,21,0.3)]'
                        : 'border-white/10 bg-[#1c202a]/80 hover:bg-[#222633]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-yellow-400 font-mono">02. Kinetic Hero Canvas</span>
                      <button
                        onClick={(e) => toggleLayer('hero', e)}
                        className="text-slate-400 hover:text-white"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="h-6 w-3/4 bg-white/20 rounded-md animate-pulse mb-2" />
                    <div className="h-3 w-1/2 bg-white/10 rounded-md mb-3" />
                    <div className="flex gap-2">
                      <div className="h-6 w-20 bg-yellow-400 rounded-md" />
                      <div className="h-6 w-20 bg-white/10 rounded-md" />
                    </div>
                  </div>
                )}

                {/* 3. Bento Grid Layer */}
                {visibleLayers.bento && (
                  <div
                    onClick={() => setSelectedComponentId('bento')}
                    className={`p-4 rounded-xl transition-all cursor-pointer border ${
                      selectedComponentId === 'bento'
                        ? 'border-yellow-400 bg-[#222631] shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                        : 'border-white/10 bg-[#1a1d24]/80 hover:bg-[#20242e]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white font-mono">03. Modular Bento Grid</span>
                      <button
                        onClick={(e) => toggleLayer('bento', e)}
                        className="text-slate-400 hover:text-white"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-[#13151a] rounded-lg border border-white/5 p-1 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                        Card A
                      </div>
                      <div className="h-10 bg-[#13151a] rounded-lg border border-white/5 p-1 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                        Card B
                      </div>
                      <div className="h-10 bg-[#13151a] rounded-lg border border-white/5 p-1 flex items-center justify-center text-[10px] text-yellow-400 font-mono">
                        Card C
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Real-time API Stream Layer */}
                {visibleLayers['data-feed'] && (
                  <div
                    onClick={() => setSelectedComponentId('data-feed')}
                    className={`p-3 rounded-xl transition-all cursor-pointer border ${
                      selectedComponentId === 'data-feed'
                        ? 'border-yellow-400 bg-[#222631] shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                        : 'border-white/10 bg-[#1a1d24]/80 hover:bg-[#20242e]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-xs font-bold text-white font-mono">04. Reactive State & API Feed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-emerald-400 font-mono">18ms Sync</span>
                        <button
                          onClick={(e) => toggleLayer('data-feed', e)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Tactile Form Layer */}
                {visibleLayers['form-gateway'] && (
                  <div
                    onClick={() => setSelectedComponentId('form-gateway')}
                    className={`p-3 rounded-xl transition-all cursor-pointer border ${
                      selectedComponentId === 'form-gateway'
                        ? 'border-yellow-400 bg-[#222631] shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                        : 'border-white/10 bg-[#1a1d24]/80 hover:bg-[#20242e]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Box className="w-3.5 h-3.5 text-yellow-400" />
                        <span className="text-xs font-bold text-white font-mono">05. Input & Conversion Gateway</span>
                      </div>
                      <button
                        onClick={(e) => toggleLayer('form-gateway', e)}
                        className="text-slate-400 hover:text-white"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 6. Footer Layer */}
                {visibleLayers['footer-seo'] && (
                  <div
                    onClick={() => setSelectedComponentId('footer-seo')}
                    className={`p-2.5 rounded-xl transition-all cursor-pointer border ${
                      selectedComponentId === 'footer-seo'
                        ? 'border-yellow-400 bg-[#222631] shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                        : 'border-white/10 bg-[#1a1d24]/80 hover:bg-[#20242e]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300 font-mono">06. Edge Footer & Meta Core</span>
                      <button
                        onClick={(e) => toggleLayer('footer-seo', e)}
                        className="text-slate-400 hover:text-white"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Layer Status Legend */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Active Layer: <strong className="text-yellow-400">{activeComponent.name}</strong></span>
                <span className="text-slate-400">Nesta UI v2</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: THE DETAILED COMPONENT DEEP-DIVE INSPECTOR                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            
            {/* Inspector Box */}
            <div className="neu-inset p-6 sm:p-7 rounded-2xl border border-white/5 bg-[#14161b]">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-yellow-400 px-2.5 py-1 rounded-md bg-yellow-400/10 border border-yellow-400/30">
                  {activeComponent.layer}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    Impact: {activeComponent.bundleImpact}
                  </span>
                  <span className="text-[11px] font-mono text-yellow-300 px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/20">
                    {activeComponent.importance}
                  </span>
                </div>
              </div>

              {/* Component Title & Tagline */}
              <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                {activeComponent.name}
              </h3>
              <p className="text-slate-300 text-sm mt-1 font-normal leading-normal">
                {activeComponent.tagline}
              </p>

              {/* Detailed Technical Description */}
              <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed">
                {activeComponent.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="p-3 rounded-xl bg-[#1b1e26] border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Render Strategy</span>
                  <span className="text-xs font-semibold text-white mt-0.5 block truncate">
                    {activeComponent.renderStrategy}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#1b1e26] border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Elevation & Depth</span>
                  <span className="text-xs font-semibold text-yellow-400 mt-0.5 block truncate">
                    {activeComponent.visualSpecs.elevation || 'Neumorphic Raised'}
                  </span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-5">
                <span className="text-[11px] font-mono text-slate-400 block mb-2">Technologies & Tokens:</span>
                <div className="flex flex-wrap gap-2">
                  {activeComponent.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#222631] text-slate-200 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Snippet Box */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-yellow-400" />
                    Component Implementation Preview
                  </span>
                  <button
                    onClick={() => handleCopyCode(activeComponent.previewSnippet)}
                    className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-mono transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0e12]">
                  <pre className="p-4 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-48 scrollbar-thin">
                    <code>{activeComponent.previewSnippet}</code>
                  </pre>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
