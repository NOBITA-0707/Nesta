/**
 * ============================================================================
 * NESTA FRONTEND REGISTRY (EXTENSIBLE DATA LAYER)
 * ============================================================================
 * 
 * 💡 HOW TO ADD A NEW FRONTEND FRAMEWORK OR PRESET:
 * 1. Simply copy any existing object in the FRONTEND_OPTIONS array below.
 * 2. Update `id`, `name`, `tagline`, `category`, `stats`, and `sampleCode`.
 * 3. Save the file — Nesta will automatically render the new framework card,
 *    badge, modal preview, and selection state!
 * 
 * You can also programmatically add new options using `registerCustomFrontend()`.
 * ============================================================================
 */

export const FRONTEND_CATEGORIES = ['All', 'Fullstack SSR', 'Client SPA', 'Static & Islands', 'Reactive UI'];

export const FRONTEND_OPTIONS = [
  {
    id: 'react',
    name: 'React 19',
    version: '19.0.0',
    tagline: 'The battle-tested declarative component framework for enterprise applications.',
    category: 'Client SPA',
    badge: 'Standard Choice',
    accentColor: '#61DAFB',
    popularity: 98,
    stats: {
      stars: '228k',
      bundleSize: '41.2 kB',
      buildSpeed: '0.45s',
      seoScore: '92/100',
    },
    renderingMode: 'Client-Side Rendering (SPA) + Vite HMR',
    description: 'Nesta scaffolds React 19 with Vite, Tailwind CSS v3, and pre-wired state slices. Engineered for maximum component composability and rapid prototyping.',
    keyFeatures: [
      'React Server Components & Actions ready',
      'Vite lightning-fast hot module replacement',
      'Pre-configured Tailwind neumorphic + glassmorphic token system',
      'Built-in Lucide minimalist iconography'
    ],
    fileStructure: [
      { name: 'src/', type: 'dir', children: [
        { name: 'components/ui/', type: 'dir', desc: 'Neumorphic buttons, glass cards' },
        { name: 'hooks/', type: 'dir', desc: 'Custom state hooks' },
        { name: 'App.jsx', type: 'file', desc: 'Main interactive entry' },
        { name: 'index.css', type: 'file', desc: 'Tailwind layers & design tokens' }
      ]},
      { name: 'tailwind.config.js', type: 'file', desc: 'Yellow, Grey, White color palette' },
      { name: 'vite.config.js', type: 'file', desc: 'Vite build engine' },
      { name: 'package.json', type: 'file', desc: 'Zero bloat dependency tree' }
    ],
    sampleCode: `// src/components/NestaHero.jsx
import React, { useState } from 'react';

export default function NestaHero() {
  const [active, setActive] = useState(false);

  return (
    <div className="glass-card rounded-2xl p-8 neu-surface">
      <span className="text-xs uppercase font-mono text-yellow-400 tracking-wider">
        Architecture 01 // React 19
      </span>
      <h2 className="text-3xl font-bold text-white mt-2">
        Tactile Web Precision
      </h2>
      <p className="text-slate-400 mt-2">
        Minimalist components assembled with reactive velocity.
      </p>
      <button 
        onClick={() => setActive(!active)}
        className="mt-6 px-6 py-2.5 neu-yellow-btn rounded-xl text-black font-semibold"
      >
        {active ? 'Engine Running' : 'Activate Pipeline'}
      </button>
    </div>
  );
}`,
    bestFor: 'High-interactivity web applications, dashboards, SaaS platforms, and enterprise portals.'
  },

  {
    id: 'nextjs',
    name: 'Next.js 15',
    version: '15.1.0',
    tagline: 'The fullstack React standard with Server Components, App Router, and Edge caching.',
    category: 'Fullstack SSR',
    badge: 'Most Popular',
    accentColor: '#FFFFFF',
    popularity: 99,
    stats: {
      stars: '124k',
      bundleSize: '68 kB',
      buildSpeed: '1.2s',
      seoScore: '100/100',
    },
    renderingMode: 'Hybrid SSR + Static Generation (App Router)',
    description: 'Nesta integrates Next.js 15 App Router with full Edge runtime compatibility, automatic image optimization, and instant dynamic metadata.',
    keyFeatures: [
      'App Router with nested layouts and parallel routes',
      'Edge Middleware for ultra-fast auth & personalization',
      'Optimized Core Web Vitals (LCP, INP, CLS)',
      'Direct API Routes matching Nesta backend schema'
    ],
    fileStructure: [
      { name: 'app/', type: 'dir', children: [
        { name: 'layout.jsx', type: 'file', desc: 'Root layout with ambient theme' },
        { name: 'page.jsx', type: 'file', desc: 'Server Component page' },
        { name: 'api/projects/', type: 'dir', desc: 'Native backend routes' }
      ]},
      { name: 'components/', type: 'dir', desc: 'Client & Server components' },
      { name: 'next.config.js', type: 'file', desc: 'Edge runtime configs' }
    ],
    sampleCode: `// app/page.jsx (Server Component)
import { Suspense } from 'react';
import GlassCard from '@/components/GlassCard';

export const metadata = {
  title: 'Nesta Next.js App',
  description: 'Built with Nesta Minimalist Generator'
};

export default async function Page() {
  return (
    <main className="min-h-screen bg-[#14161B] p-12">
      <Suspense fallback={<div className="animate-pulse">Loading Nesta Core...</div>}>
        <GlassCard title="Next.js 15 App Router" status="Active SSR" />
      </Suspense>
    </main>
  );
}`,
    bestFor: 'Full-stack applications, SEO-critical commercial websites, content platforms, and e-commerce.'
  },

  {
    id: 'vue',
    name: 'Vue 3',
    version: '3.5.0',
    tagline: 'The progressive, approachable, and truly reactive JavaScript framework.',
    category: 'Reactive UI',
    badge: 'High Ergonomics',
    accentColor: '#42B883',
    popularity: 94,
    stats: {
      stars: '207k',
      bundleSize: '34 kB',
      buildSpeed: '0.38s',
      seoScore: '90/100',
    },
    renderingMode: 'Vite SPA + Composition API (<script setup>)',
    description: 'Nesta delivers Vue 3 with single-file components (SFCs), ultra-fast reactivity without virtual DOM overhead, and Pinia store integration.',
    keyFeatures: [
      'Composition API with script setup syntax',
      'Fine-grained reactivity with zero wrapper overhead',
      'Vite-powered instantaneous hot reload',
      'Seamless Tailwind class bindings'
    ],
    fileStructure: [
      { name: 'src/', type: 'dir', children: [
        { name: 'components/', type: 'dir', desc: 'Single-file components (.vue)' },
        { name: 'stores/', type: 'dir', desc: 'Pinia state stores' },
        { name: 'App.vue', type: 'file', desc: 'Root Vue SFC' },
        { name: 'main.js', type: 'file', desc: 'App initialization' }
      ]},
      { name: 'vite.config.js', type: 'file', desc: 'Vue Vite plugin' }
    ],
    sampleCode: `<script setup>
import { ref } from 'vue'

const isPressed = ref(false)
const counter = ref(0)
</script>

<template>
  <div class="glass-card rounded-2xl p-6 border border-white/10">
    <div class="flex items-center gap-3">
      <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
      <h3 class="text-xl font-bold text-white">Vue 3 Reactivity</h3>
    </div>
    <p class="text-sm text-slate-400 mt-2">Zero-boilerplate reactivity engine</p>
    <button 
      @click="counter++"
      class="mt-4 px-5 py-2 neu-btn rounded-xl text-yellow-400 font-mono"
    >
      Clicks: {{ counter }}
    </button>
  </div>
</template>`,
    bestFor: 'Modern interactive dashboards, progressive web tools, and agile frontend teams.'
  },

  {
    id: 'svelte',
    name: 'Svelte 5',
    version: '5.1.0',
    tagline: 'Cybernetically enhanced web apps with groundbreaking Runes reactivity.',
    category: 'Reactive UI',
    badge: 'Zero Virtual DOM',
    accentColor: '#FF3E00',
    popularity: 91,
    stats: {
      stars: '78k',
      bundleSize: '16.5 kB',
      buildSpeed: '0.22s',
      seoScore: '96/100',
    },
    renderingMode: 'Compile-Time Reactivity (Runes: $state, $derived)',
    description: 'Svelte 5 compiles down to tiny vanilla JS with no runtime virtual DOM overhead. Blazing fast, minimal memory consumption, and purest developer experience.',
    keyFeatures: [
      'New Svelte 5 Runes ($state, $derived, $effect)',
      'Sub-20kB initial bundle size for instant loads',
      'True compiled reactivity directly targeting the DOM',
      'Neumorphic components with scoped CSS support'
    ],
    fileStructure: [
      { name: 'src/', type: 'dir', children: [
        { name: 'lib/', type: 'dir', desc: 'Reusable Svelte components' },
        { name: 'App.svelte', type: 'file', desc: 'Reactive Svelte entry' },
        { name: 'main.js', type: 'file', desc: 'DOM mounting' }
      ]},
      { name: 'svelte.config.js', type: 'file', desc: 'Svelte 5 compilation pipeline' }
    ],
    sampleCode: `<script>
  let isSelected = $state(false);
  let power = $state(88);
</script>

<div class="glass-card rounded-2xl p-6 neu-surface">
  <div class="flex justify-between items-center">
    <span class="text-amber-400 font-mono text-xs">SVELTE 5 RUNES</span>
    <span class="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">16kB</span>
  </div>
  <p class="text-slate-300 text-sm mt-3">Compiled to clean Vanilla JS without runtime overhead.</p>
  <button 
    onclick={() => isSelected = !isSelected}
    class="mt-4 px-4 py-2 rounded-lg neu-yellow-btn font-semibold text-sm"
  >
    {isSelected ? 'Activated' : 'Toggle Rune State'}
  </button>
</div>`,
    bestFor: 'Ultra-fast lightweight web apps, interactive embedded widgets, micro-frontends, and performance-critical sites.'
  },

  {
    id: 'astro',
    name: 'Astro 4',
    version: '4.15.0',
    tagline: 'The web framework for content-driven websites with Islands Architecture.',
    category: 'Static & Islands',
    badge: 'Zero JS by Default',
    accentColor: '#BC52EE',
    popularity: 93,
    stats: {
      stars: '48k',
      bundleSize: '0 - 12 kB',
      buildSpeed: '0.31s',
      seoScore: '100/100',
    },
    renderingMode: 'Component Islands (Hydrate on-demand)',
    description: 'Ships zero client-side JavaScript by default, hydrating interactive widgets only when they scroll into viewport. Unbeatable Core Web Vitals and Lighthouse scores.',
    keyFeatures: [
      'Islands Architecture with client:idle, client:visible',
      'Integrate React, Vue, and Svelte components in one page',
      'Built-in Content Collections for markdown & CMS',
      'Perfect 100/100 Google Lighthouse scores out of the box'
    ],
    fileStructure: [
      { name: 'src/', type: 'dir', children: [
        { name: 'pages/', type: 'dir', desc: 'File-based routing (.astro)' },
        { name: 'components/', type: 'dir', desc: 'Static & interactive islands' },
        { name: 'content/', type: 'dir', desc: 'Typed Markdown/MDX collections' }
      ]},
      { name: 'astro.config.mjs', type: 'file', desc: 'Astro island integrations' }
    ],
    sampleCode: `---
// src/pages/index.astro
import NestaGlassCard from '../components/NestaGlassCard.astro';
import InteractiveCounter from '../components/InteractiveCounter.jsx';
---

<html lang="en">
  <body class="bg-[#14161B] text-white">
    <!-- Pure HTML Island: 0kB JavaScript -->
    <NestaGlassCard title="Astro Zero-JS Shell" />

    <!-- Interactive React Island: Hydrates only when visible -->
    <InteractiveCounter client:visible />
  </body>
</html>`,
    bestFor: 'Marketing websites, portfolios, blogs, documentation, landing pages, and content portals.'
  },

  {
    id: 'nuxt',
    name: 'Nuxt 3',
    version: '3.13.0',
    tagline: 'The intuitive Vue framework for universal server-side rendering and static generation.',
    category: 'Fullstack SSR',
    badge: 'Fullstack Vue',
    accentColor: '#00DC82',
    popularity: 89,
    stats: {
      stars: '54k',
      bundleSize: '54 kB',
      buildSpeed: '0.85s',
      seoScore: '98/100',
    },
    renderingMode: 'Universal SSR + Nitro Server Engine',
    description: 'Auto-imports, file-based routing, server engine powered by Nitro, and full TypeScript support built into every layer.',
    keyFeatures: [
      'Nitro high-performance server engine (Node, Cloudflare, Vercel, Deno)',
      'Automatic component and composables auto-import',
      'Integrated Server API routes in server/api',
      'Built-in state management and SEO utilities'
    ],
    fileStructure: [
      { name: 'pages/', type: 'dir', desc: 'Automatic file-based routes' },
      { name: 'components/', type: 'dir', desc: 'Auto-imported Vue components' },
      { name: 'server/api/', type: 'dir', desc: 'Edge-compatible server routes' },
      { name: 'nuxt.config.ts', type: 'file', desc: 'Universal config' }
    ],
    sampleCode: `<script setup>
// Auto-imported composable
const { data: project } = await useFetch('/api/nesta/project')
</script>

<template>
  <div class="neu-surface rounded-2xl p-6 border border-white/5">
    <h3 class="text-xl font-bold text-white">Universal Nuxt 3 Engine</h3>
    <p class="text-slate-400 mt-2">Server-side rendered with Nitro runtime.</p>
  </div>
</template>`,
    bestFor: 'Enterprise Vue full-stack platforms, high-SEO marketing tools, and multi-tenant systems.'
  },

  {
    id: 'solid',
    name: 'SolidJS',
    version: '1.9.0',
    tagline: 'Simple and performant reactivity for building high-speed user interfaces.',
    category: 'Reactive UI',
    badge: 'Peak Benchmark Speed',
    accentColor: '#2C4F7C',
    popularity: 87,
    stats: {
      stars: '32k',
      bundleSize: '21 kB',
      buildSpeed: '0.28s',
      seoScore: '94/100',
    },
    renderingMode: 'Fine-Grained Reactive Primitives (No VDOM)',
    description: 'Looks identical to React with JSX, but runs faster than virtually any other framework thanks to granular reactive signals without component re-rendering.',
    keyFeatures: [
      'True fine-grained reactivity using createSignal',
      'Components run only once during initialization',
      'JSX syntax familiar to React developers',
      'Top-tier memory and CPU performance scores'
    ],
    fileStructure: [
      { name: 'src/', type: 'dir', children: [
        { name: 'components/', type: 'dir', desc: 'Fine-grained JSX components' },
        { name: 'App.jsx', type: 'file', desc: 'Reactive app tree' }
      ]},
      { name: 'vite.config.js', type: 'file', desc: 'Solid Vite plugin' }
    ],
    sampleCode: `import { createSignal } from 'solid-js';

export default function SolidNesta() {
  const [active, setActive] = createSignal(false);

  return (
    <div class="glass-card p-6 rounded-2xl">
      <h3 class="text-white text-lg font-bold">SolidJS Reactive Signal</h3>
      <p class="text-slate-400 text-xs mt-1">Zero component re-renders</p>
      <button 
        onClick={() => setActive(!active())}
        class="mt-4 px-4 py-2 neu-yellow-btn rounded-xl"
      >
        Signal: {active() ? 'TRUE' : 'FALSE'}
      </button>
    </div>
  );
}`,
    bestFor: 'Data-intensive real-time applications, crypto/trading dashboards, and high-frequency canvas interfaces.'
  },

  {
    id: 'angular',
    name: 'Angular 18',
    version: '18.2.0',
    tagline: 'The battle-tested enterprise application framework with Zoneless Signals.',
    category: 'Fullstack SSR',
    badge: 'Enterprise Architecture',
    accentColor: '#DD0031',
    popularity: 85,
    stats: {
      stars: '95k',
      bundleSize: '82 kB',
      buildSpeed: '1.4s',
      seoScore: '93/100',
    },
    renderingMode: 'Zoneless Change Detection + Signals + SSR',
    description: 'A complete all-in-one framework featuring dependency injection, strict typing, control flow syntax (@if, @for), and reactive signals.',
    keyFeatures: [
      'Modern @if and @for built-in control flow syntax',
      'Signals for zoneless fine-grained change detection',
      'Built-in HTTP client with interceptor support',
      'Enterprise dependency injection and module architecture'
    ],
    fileStructure: [
      { name: 'src/app/', type: 'dir', children: [
        { name: 'components/', type: 'dir', desc: 'Standalone components' },
        { name: 'app.component.ts', type: 'file', desc: 'Standalone root component' },
        { name: 'app.config.ts', type: 'file', desc: 'Application providers' }
      ]},
      { name: 'angular.json', type: 'file', desc: 'Angular workspace CLI config' }
    ],
    sampleCode: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nesta-card',
  standalone: true,
  template: \`
    <div class="glass-card rounded-2xl p-6 neu-surface">
      <h3 class="text-white font-bold">Angular 18 Standalone</h3>
      <p class="text-slate-400 text-sm mt-1">Powered by Zoneless Signals</p>
      <button (click)="toggle()" class="mt-4 px-4 py-2 neu-yellow-btn rounded-xl">
        Status: {{ isRunning() ? 'Online' : 'Standby' }}
      </button>
    </div>
  \`
})
export class NestaCardComponent {
  isRunning = signal(true);
  toggle() { this.isRunning.update(v => !v); }
}`,
    bestFor: 'Large-scale enterprise software, financial institutions, and long-term corporate roadmaps.'
  }
];

/**
 * Helper to easily register a custom framework at runtime
 */
export function registerCustomFrontend(newOption) {
  const exists = FRONTEND_OPTIONS.find((item) => item.id === newOption.id);
  if (!exists) {
    FRONTEND_OPTIONS.push(newOption);
  }
  return FRONTEND_OPTIONS;
}
