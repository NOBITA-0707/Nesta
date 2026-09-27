/**
 * Component Anatomy Data
 * Creative breakdown of the core modular components that construct modern websites.
 */

export const WEBSITE_COMPONENTS = [
  {
    id: 'navbar',
    name: 'Sticky Glass Navigation',
    category: 'Layout & Chrome',
    layer: '01 Top Level',
    importance: 'Critical',
    bundleImpact: '3.4 kB',
    renderStrategy: 'Client Sticky + Blur',
    tagline: 'Precision navigation with dynamic scroll-reactive frosted backdrop blur.',
    description: 'The anchor of user orientation. Features a dual-layer glassmorphic container with 16px backdrop-blur, subtle specular border, and neumorphic tactile action buttons.',
    techStack: ['Tailwind CSS', 'Backdrop Filter API', 'Lucide Icons', 'Responsive Drawer'],
    previewSnippet: `<nav className="sticky top-4 z-50 glass-card mx-auto max-w-6xl px-6 py-3 rounded-full flex items-center justify-between">
  <BrandLogo className="text-yellow-400 font-bold" />
  <NavLinks items={['Platform', 'Components', 'Architecture', 'Docs']} />
  <NeumorphicButton variant="yellow">Get Started</NeumorphicButton>
</nav>`,
    visualSpecs: {
      blur: '16px',
      border: '1px solid rgba(255,255,255,0.1)',
      shadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
      elevation: 'z-index: 50'
    }
  },

  {
    id: 'hero',
    name: 'Kinetic Hero Section',
    category: 'Conversion & Narrative',
    layer: '02 First Impression',
    importance: 'Maximum (LCP)',
    bundleImpact: '6.1 kB',
    renderStrategy: 'Priority SSR / Hydrated Motion',
    tagline: 'High-contrast typography, solar yellow accent highlights, and dual CTA triggers.',
    description: 'Engineered for immediate emotional impact and sub-second Largest Contentful Paint (LCP). Combines high-contrast white headlines with vibrant yellow focal points.',
    techStack: ['CSS Grid', 'Radial Ambient Gradients', 'Hardware-accelerated CSS', 'Fetch Priority High'],
    previewSnippet: `<section className="relative pt-24 pb-16 text-center">
  <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent" />
  <Badge text="Next-Gen Architecture" variant="yellow" />
  <h1 className="text-6xl font-extrabold text-white tracking-tight">
    Architecting Tomorrow's <span className="text-yellow-400">Web Precision</span>
  </h1>
  <div className="mt-8 flex justify-center gap-4">
    <PrimaryButton>Start Building</PrimaryButton>
    <GlassButton>Explore Components</GlassButton>
  </div>
</section>`,
    visualSpecs: {
      lcpScore: '0.8s',
      focalColor: '#FACC15',
      ambientGlow: 'rgba(250, 204, 21, 0.15)',
      elevation: 'Base Canvas'
    }
  },

  {
    id: 'bento',
    name: 'Modular Bento Grid',
    category: 'Content Architecture',
    layer: '03 Value Delivery',
    importance: 'High',
    bundleImpact: '8.2 kB',
    renderStrategy: 'CSS Grid Auto-Fit',
    tagline: 'Tactile neumorphic tiles presenting features with asymmetric visual balance.',
    description: 'Inspired by Japanese bento boxes and industrial Dieter Rams aesthetics. Each tile combines deep matte grey recessed wells with elevated interactive cards.',
    techStack: ['CSS Subgrid', 'Neumorphic Shadows', 'Hover Spring Physics', 'Responsive Breakpoints'],
    previewSnippet: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <BentoCard span="col-span-2" title="Zero Virtual DOM Latency" icon="Zap" />
  <BentoCard span="col-span-1" title="Edge Cached" metric="99.9%" />
  <BentoCard span="col-span-1" title="Security Perimeter" badge="SOC2" />
  <BentoCard span="col-span-2" title="Auto-Generated REST & GraphQL" />
</div>`,
    visualSpecs: {
      gridGap: '24px',
      tileBackground: '#1B1E26',
      pressedEffect: 'inset 5px 5px 10px rgba(0,0,0,0.85)',
      elevation: 'Elevated Tiles'
    }
  },

  {
    id: 'data-feed',
    name: 'Reactive State & API Feed',
    category: 'Data & Runtime',
    layer: '04 Dynamic Engine',
    importance: 'Vital for Logic',
    bundleImpact: '4.8 kB',
    renderStrategy: 'SWR / TanStack Cache / Signals',
    tagline: 'Real-time telemetry, asynchronous data fetching, and optimistic UI transitions.',
    description: 'The heartbeat of dynamic websites. Connects frontend UI components to backend endpoints with automated background revalidation and instant rollback.',
    techStack: ['Fetch API', 'AbortController', 'Optimistic UI', 'WebSocket Sync'],
    previewSnippet: `const { data, isValidating } = useProjectFeed('/api/v1/projects');

return (
  <div className="neu-inset p-5 rounded-2xl flex items-center justify-between">
    <div className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
      <span className="font-mono text-sm text-white">API Sync: Active</span>
    </div>
    <span className="text-xs text-slate-400 font-mono">Ping: 18ms</span>
  </div>
);`,
    visualSpecs: {
      syncLatency: '< 30ms',
      caching: 'Stale-While-Revalidate',
      security: 'CORS & CSP Hardened',
      elevation: 'Recessed Well'
    }
  },

  {
    id: 'form-gateway',
    name: 'Tactile Input & Auth Gateway',
    category: 'User Interaction',
    layer: '05 Engagement Layer',
    importance: 'High',
    bundleImpact: '5.2 kB',
    renderStrategy: 'Controlled Inputs + Client Validation',
    tagline: 'Recessed neumorphic input wells with glowing yellow focus rings.',
    description: 'Physical feel on digital screens. Inputs appear softly carved into the dark matte grey chassis, with instant validation feedback and haptic-style button states.',
    techStack: ['HTML5 Validation', 'Neumorphic Inset Shadows', 'Accessible ARIA labels', 'Zod Schema'],
    previewSnippet: `<form onSubmit={handleDeploy} className="glass-card p-6 rounded-2xl space-y-4">
  <label className="block text-xs font-mono text-slate-300">Project Identifier</label>
  <input 
    type="text" 
    placeholder="e.g. quantum-portal"
    className="w-full neu-inset px-4 py-3 rounded-xl text-white focus:ring-2 focus:ring-yellow-400"
  />
  <button type="submit" className="w-full neu-yellow-btn py-3 rounded-xl">
    Deploy Application
  </button>
</form>`,
    visualSpecs: {
      insetDepth: '4px',
      focusGlow: '0 0 0 2px #FACC15',
      fieldBg: '#13151A',
      elevation: 'Carved Groove'
    }
  },

  {
    id: 'footer-seo',
    name: 'Edge Footer & Meta Core',
    category: 'Infrastructure & SEO',
    layer: '06 Baseline Anchor',
    importance: 'Medium',
    bundleImpact: '2.9 kB',
    renderStrategy: 'Static HTML Shell',
    tagline: 'High-density micro-sitemap, JSON-LD schema, legal disclosures, and telemetry.',
    description: 'The foundation closing the user experience. Houses comprehensive navigation, system health status, GitHub repo links, and OpenGraph metadata.',
    techStack: ['Semantic HTML5', 'JSON-LD', 'SVG Glyphs', 'CSS Grid'],
    previewSnippet: `<footer className="border-t border-white/10 bg-[#111317] py-12 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="text-slate-400 text-sm font-mono">© 2026 Nesta Inc. Minimalist Systems.</p>
    <div className="flex gap-6 text-sm text-slate-300">
      <a href="#privacy">Privacy</a>
      <a href="#api">API Spec</a>
      <a href="#status">Status: Operational</a>
    </div>
  </div>
</footer>`,
    visualSpecs: {
      divider: '1px solid rgba(255,255,255,0.06)',
      typography: 'Space Mono / Inter',
      theme: 'Muted Slate & White',
      elevation: 'Chassis Floor'
    }
  }
];
