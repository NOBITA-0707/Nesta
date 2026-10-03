export const UI_TEMPLATE_CATEGORIES = ['All', 'SaaS & Tech', 'E-Commerce', 'AI & Data', 'Fintech', 'Portfolio & Agency'];

export const UI_TEMPLATES = [
  {
    id: 'saas-nova',
    name: 'Nova SaaS Platform',
    category: 'SaaS & Tech',
    tagline: 'Modern glassmorphic dark theme for cloud products and software startups.',
    badge: 'Most Popular',
    accentColor: '#FACC15',
    themeClass: 'from-amber-500/20 via-yellow-400/10 to-transparent',
    features: [
      'Interactive ROI Calculator & Metric Cards',
      'Tiered Pricing Switcher (Monthly/Annual)',
      'Live Activity Feed & Status Bento',
      'Testimonial Carousel & Trust Badges',
    ],
    componentsIncluded: ['Sticky Glass Navbar', 'Hero with Product Preview', 'Bento Feature Grid', 'Interactive Pricing Table', 'FAQ Accordion', 'Modern Footer'],
    stats: {
      conversions: '+42%',
      loadTime: '0.3s',
      rating: '4.9/5',
    },
    demo: {
      heroHeading: 'Scale Your Cloud Infrastructure with Real-Time Intelligence',
      heroSubheading: 'Automate deployments, optimize database queries, and reduce server costs by up to 60% with AI-driven telemetry.',
      primaryAction: 'Start Free Trial',
      secondaryAction: 'Watch 2-Min Demo',
      metrics: [
        { label: 'Active Deployments', value: '14,280+', change: '+18.4%' },
        { label: 'Avg Latency', value: '24ms', change: '-35%' },
        { label: 'Uptime SLA', value: '99.99%', change: 'Steady' },
      ],
      features: [
        { title: 'Zero-Config Edge Scaling', desc: 'Instant global distribution across 300+ edge locations with automated load shedding.' },
        { title: 'Automated Failover', desc: 'Intelligent health probes route traffic around latency spikes before users notice.' },
        { title: 'End-to-End Encryption', desc: 'SOC2 Type II certified data transmission with customer-managed KMS keys.' },
      ],
      pricingTiers: [
        { name: 'Starter', price: '$29/mo', desc: 'Ideal for early-stage teams & MVPs', highlight: false },
        { name: 'Growth', price: '$89/mo', desc: 'For scaling companies with high traffic', highlight: true },
        { name: 'Enterprise', price: '$299/mo', desc: 'Custom SLA, dedicated VPC & support', highlight: false },
      ]
    }
  },
  {
    id: 'ecommerce-aura',
    name: 'Aura Minimalist Store',
    category: 'E-Commerce',
    tagline: 'Sleek luxury digital storefront with interactive shopping cart and product filters.',
    badge: 'High Conversion',
    accentColor: '#38BDF8',
    themeClass: 'from-sky-500/20 via-cyan-400/10 to-transparent',
    features: [
      'Interactive Product Showcase with Color Variants',
      'Instant Slide-over Shopping Cart Drawer',
      'Dynamic Category Filters & Price Sliders',
      'Fast 1-Click Checkout Gateway',
    ],
    componentsIncluded: ['Store Navbar with Cart Pill', 'Curated Hero Banner', 'Product Grid with Quick-Buy', 'Customer Review Reel', 'Newsletter Capture', 'E-Com Footer'],
    stats: {
      conversions: '+38%',
      loadTime: '0.4s',
      rating: '4.8/5',
    },
    demo: {
      heroHeading: 'Engineered for the Modern Aesthetic',
      heroSubheading: 'Handcrafted hardware and minimalist everyday essentials built with sustainable aerospace-grade materials.',
      primaryAction: 'Explore Collection',
      secondaryAction: 'View Lookbook',
      products: [
        { name: 'Nesta Studio Headphone Pro', price: '$249', tag: 'Bestseller', color: 'Matte Obsidian' },
        { name: 'Tactile Mechanical Keeb', price: '$179', tag: 'New', color: 'Titanium Grey' },
        { name: 'Wireless Mag-Charge Hub', price: '$89', tag: 'Eco Pack', color: 'Solar Amber' },
        { name: 'Ergonomic Desk Mat Ultra', price: '$49', tag: 'Essential', color: 'Charcoal' },
      ],
      reviews: [
        { name: 'Sophia Chen', role: 'Product Designer', text: 'The build quality is incredible. Fast checkout and seamless mobile experience.' },
        { name: 'Marcus Brody', role: 'Tech Enthusiast', text: 'Stunning minimalist design that actually feels premium in everyday use.' }
      ]
    }
  },
  {
    id: 'ai-nexus',
    name: 'Nexus AI Studio',
    category: 'AI & Data',
    tagline: 'Futuristic AI playground, LLM prompt console, and generative model workflow dashboard.',
    badge: 'Trending Tech',
    accentColor: '#A855F7',
    themeClass: 'from-purple-500/20 via-fuchsia-400/10 to-transparent',
    features: [
      'Interactive Prompt & Token Streaming Sandbox',
      'Multi-Model Comparison Grid (LLaMA, GPT, Gemini)',
      'Real-time Token Consumption & Latency Monitor',
      'One-click Vector Database Connector',
    ],
    componentsIncluded: ['Studio Workspace Nav', 'Prompt Console Hero', 'Model Benchmark Matrix', 'Workflow Chain Builder', 'API Key Manager', 'Developer Footer'],
    stats: {
      conversions: '+54%',
      loadTime: '0.2s',
      rating: '5.0/5',
    },
    demo: {
      heroHeading: 'Orchestrate Autonomous Agents and Multimodal AI Workflows',
      heroSubheading: 'Chain foundation models, vector embeddings, and serverless tools into production-ready pipelines in seconds.',
      primaryAction: 'Launch AI Playground',
      secondaryAction: 'Read Documentation',
      models: [
        { name: 'Nexus-Omni 4.5', latency: '12ms/tok', context: '1M Tokens', accuracy: '98.4%' },
        { name: 'Nexus-Vision HighRes', latency: '24ms/tok', context: '500k Tokens', accuracy: '96.8%' },
        { name: 'Nexus-Code Flash', latency: '8ms/tok', context: '256k Tokens', accuracy: '99.1%' },
      ],
      promptExample: 'Generate an asynchronous REST API endpoint that validates user auth tokens and streams JSON results...',
      simulatedOutput: '✓ Validated JWT session\n✓ Ingested request vector embedding\n✓ Streamed 452 tokens with 0 latency drop'
    }
  },
  {
    id: 'fintech-krypton',
    name: 'Krypton Pay & Banking',
    category: 'Fintech',
    tagline: 'High-security financial dashboard with live balance cards, transaction stream, and analytics.',
    badge: 'Bank Grade',
    accentColor: '#10B981',
    themeClass: 'from-emerald-500/20 via-teal-400/10 to-transparent',
    features: [
      'Live Card Balance & Virtual Card Generator',
      'Real-time Transaction Stream with Filter Tags',
      'Monthly Spending Analytics & Categorization',
      'Instant Global Wire & Crypto Transfer Modal',
    ],
    componentsIncluded: ['Secure Banking Header', 'Wallet Overview Hero', 'Live Card Visualizer', 'Transaction Activity Feed', 'Security Badges', 'Compliance Footer'],
    stats: {
      conversions: '+46%',
      loadTime: '0.3s',
      rating: '4.9/5',
    },
    demo: {
      heroHeading: 'Next-Generation Global Banking for Borderless Creators',
      heroSubheading: 'Hold 40+ currencies, spend with virtual multi-use cards, and automate corporate treasury management with zero FX fees.',
      primaryAction: 'Open Business Account',
      secondaryAction: 'Explore Security Specs',
      accountBalance: '$124,580.42',
      recentTransactions: [
        { title: 'Stripe Merchant Payout', amount: '+$8,450.00', date: 'Today, 2:45 PM', status: 'Completed', type: 'in' },
        { title: 'AWS Cloud Infrastructure', amount: '-$1,240.50', date: 'Yesterday', status: 'Processed', type: 'out' },
        { title: 'Figma Enterprise Subscription', amount: '-$180.00', date: 'Sep 28', status: 'Processed', type: 'out' },
        { title: 'Angel Syndicate Investment', amount: '+$50,000.00', date: 'Sep 25', status: 'Completed', type: 'in' },
      ],
      virtualCard: {
        number: '•••• •••• •••• 8842',
        holder: 'ALEX RIVERA',
        expires: '08/29',
        network: 'VISA BUSINESS'
      }
    }
  },
  {
    id: 'portfolio-vanguard',
    name: 'Vanguard Creative Studio',
    category: 'Portfolio & Agency',
    tagline: 'Bold editorial portfolio for creative agencies, designers, and high-impact studios.',
    badge: 'Award Winner',
    accentColor: '#EC4899',
    themeClass: 'from-pink-500/20 via-rose-400/10 to-transparent',
    features: [
      'Interactive Case Study Showcase with Video Previews',
      'Dynamic Hover Tilt Effects & Custom Mouse Tracers',
      'Client Testimonials with Video Clips',
      'Interactive Project Inquiry & Booking Form',
    ],
    componentsIncluded: ['Minimalist Navigation', 'Large Typography Hero', 'Filterable Project Gallery', 'Services Grid', 'Client Logos Reel', 'Agency Footer'],
    stats: {
      conversions: '+50%',
      loadTime: '0.2s',
      rating: '4.9/5',
    },
    demo: {
      heroHeading: 'We Design Digital Products That Define Categories',
      heroSubheading: 'A multidisciplinary design and engineering agency transforming ambitious brands into unforgettable digital experiences.',
      primaryAction: 'View Selected Works',
      secondaryAction: 'Book Consultation',
      caseStudies: [
        { title: 'Chronos Smart Watch OS', client: 'Chronos Labs', category: 'Product Design & UI/UX', year: '2026' },
        { title: 'Hyperion Autonomous EV', client: 'Hyperion Mobility', category: 'Brand Identity & WebGL', year: '2026' },
        { title: 'Solstice Space Telescope', client: 'European Aerospace', category: 'Data Visualization App', year: '2025' },
      ],
      clientStats: '48+ Design Awards • 12 Global Brands • 100M+ Users Reached'
    }
  },
  {
    id: 'dev-docs-terminal',
    name: 'DevPulse Docs & SDK Portal',
    category: 'Portfolio & Agency',
    tagline: 'Developer documentation portal with live code switchers, terminal outputs, and API playground.',
    badge: 'Developer Choice',
    accentColor: '#F59E0B',
    themeClass: 'from-amber-500/20 via-orange-400/10 to-transparent',
    features: [
      'Multi-Language Code Tabs (JS, Python, Go, cURL)',
      'Search with Instant Keyboard Navigation (Cmd+K)',
      'Live API Request Sandbox with Response Visualizer',
      'Automated SDK Reference Generator',
    ],
    componentsIncluded: ['Docs Header with Search', 'Two-Column API Explorer', 'Interactive Code Blocks', 'Parameter Tables', 'Feedback Widget', 'Developer Footer'],
    stats: {
      conversions: '+60%',
      loadTime: '0.2s',
      rating: '5.0/5',
    },
    demo: {
      heroHeading: 'Developer-First APIs for Real-Time Event Streaming',
      heroSubheading: 'Ship scalable pub/sub architecture and WebSockets to millions of concurrent clients in under 5 lines of code.',
      primaryAction: 'Quickstart Guide',
      secondaryAction: 'Browse API Endpoints',
      languages: ['JavaScript', 'Python', 'Go', 'cURL'],
      codeSnippet: `// Initialize Nesta Realtime Client
import { NestaClient } from '@nesta/sdk';

const nesta = new NestaClient({ apiKey: process.env.NESTA_KEY });

// Subscribe to real-time event stream
nesta.stream('orders.created', (event) => {
  console.log('Order verified & synchronized:', event.payload);
});`
    }
  }
];
