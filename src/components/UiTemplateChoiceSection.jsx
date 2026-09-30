import React, { useState } from 'react';
import { UI_TEMPLATES, UI_TEMPLATE_CATEGORIES } from '../data/uiTemplates';
import TemplatePreviewModal from './TemplatePreviewModal';
import { 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Eye, 
  Layers, 
  Search, 
  SlidersHorizontal, 
  ArrowRight,
  Monitor
} from 'lucide-react';

export default function UiTemplateChoiceSection({ selectedTemplate, onSelectTemplate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const filteredTemplates = UI_TEMPLATES.filter((tpl) => {
    const matchesCategory = selectedCategory === 'All' || tpl.category === selectedCategory;
    const matchesSearch = tpl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tpl.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tpl.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenPreview = (tpl, e) => {
    if (e) e.stopPropagation();
    setPreviewTemplate(tpl);
    setIsPreviewOpen(true);
  };

  return (
    <section id="templates" className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold mb-4">
          <Layers className="w-3.5 h-3.5 text-yellow-400" />
          <span>Step 3 — Choose Whole UI Template</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
          Pick a Complete Themed UI Template
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          Each template is a full frontend UI with custom components, styled themes, responsive layouts, and interactive widgets. Click <strong className="text-white">"Preview Live"</strong> to explore any template separately before picking!
        </p>
      </div>

      {/* Filter Tabs & Search Controls */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 mb-8 neu-surface border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {UI_TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-yellow-400 text-black font-bold shadow-[0_0_15px_rgba(250,204,21,0.4)]'
                  : 'bg-[#14161b] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates (e.g. SaaS, E-Com, AI)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl neu-inset text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 border border-white/5"
          />
        </div>

      </div>

      {/* Active Selection Banner */}
      {selectedTemplate && (
        <div className="mb-8 p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/40 flex items-center justify-between flex-wrap gap-4 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-bold text-sm shadow-md">
              ✓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">Active UI Template:</span>
                <span className="text-white font-bold text-sm">{selectedTemplate.name}</span>
                <span className="text-xs text-slate-400">({selectedTemplate.category})</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Included with full responsive components, design tokens, and mock data.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleOpenPreview(selectedTemplate)}
            className="px-4 py-2 rounded-xl neu-btn text-xs font-semibold text-yellow-400 hover:text-yellow-300 flex items-center gap-1.5"
          >
            <Eye className="w-4 h-4" />
            <span>Open Live Experience</span>
          </button>
        </div>
      )}

      {/* Grid of UI Template Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => {
          const isSelected = selectedTemplate?.id === template.id;

          return (
            <div
              key={template.id}
              onClick={() => onSelectTemplate(template)}
              className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                isSelected
                  ? 'bg-[#222735] border-2 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.35)] transform -translate-y-1'
                  : 'glass-card neu-surface border border-white/10 hover:border-yellow-400/40 hover:-translate-y-1 shadow-xl'
              }`}
            >
              {/* Selected Badge */}
              {isSelected && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-black text-[10px] font-extrabold shadow-md">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>SELECTED</span>
                </div>
              )}

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg text-black shrink-0 shadow-lg transform transition-transform group-hover:scale-105"
                    style={{ backgroundColor: template.accentColor || '#FACC15' }}
                  >
                    {template.name.substring(0, 2)}
                  </div>
                  <div className="min-w-0 pr-12">
                    <h3 className="text-lg font-bold text-white tracking-tight truncate">
                      {template.name}
                    </h3>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <div className="mb-3">
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-yellow-300 border border-white/10">
                    {template.badge}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4">
                  {template.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 py-3 border-y border-white/5 mb-4 text-xs text-slate-300">
                  {template.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Preview vs Select */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={(e) => handleOpenPreview(template, e)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Preview Live</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTemplate(template);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)]'
                      : 'neu-btn text-slate-200 hover:text-white hover:border-yellow-400/40'
                  }`}
                >
                  {isSelected ? 'Selected' : 'Select Template'}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Template Detail Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        isOpen={isPreviewOpen}
        isSelected={selectedTemplate?.id === previewTemplate?.id}
        onSelect={(tpl) => onSelectTemplate(tpl)}
        onClose={() => setIsPreviewOpen(false)}
      />

    </section>
  );
}
