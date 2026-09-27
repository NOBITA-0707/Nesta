import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroIntroSection from './components/HeroIntroSection';
import ComponentAnatomySection from './components/ComponentAnatomySection';
import FrontendChoiceSection from './components/FrontendChoiceSection';
import ApiEndpointsModal from './components/ApiEndpointsModal';
import Footer from './components/Footer';
import { FRONTEND_OPTIONS } from './data/frontendOptions';
import { apiService } from './services/apiService';
import { Check, Terminal } from 'lucide-react';

function AppInner() {
  const [selectedFrontend, setSelectedFrontend] = useState(FRONTEND_OPTIONS[0]);
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [toastMessage, setToastMessage] = useState(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const introEl    = document.getElementById('intro');
      const anatomyEl  = document.getElementById('anatomy');
      const frontendsEl = document.getElementById('frontends');

      if (frontendsEl && scrollPosition >= frontendsEl.offsetTop) {
        setActiveSection('frontends');
      } else if (anatomyEl && scrollPosition >= anatomyEl.offsetTop) {
        setActiveSection('anatomy');
      } else {
        setActiveSection('intro');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectFrontend = async (frontend) => {
    setSelectedFrontend(frontend);
    try {
      const res = await apiService.saveProject({
        projectName: 'nesta-generated-site',
        frontendId: frontend.id,
        theme: { palette: ['yellow', 'grey', 'white'], mode: 'dark' },
        selectedComponents: ['navbar', 'hero', 'bento', 'data-feed', 'form-gateway', 'footer-seo'],
      });
      setToastMessage({
        title: `Framework Selected: ${frontend.name}`,
        subtitle: `Config synced (${res.isMock ? 'Mock API Fallback' : 'Live Endpoint'})`,
      });
      setTimeout(() => setToastMessage(null), 4000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-n-base text-n-primary flex flex-col font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-yellow-400 selection:text-black transition-colors duration-300">

      {/* Ambient top gradient */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Navbar */}
      <Navbar
        selectedFrontend={selectedFrontend}
        onOpenApiModal={() => setIsApiModalOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Sections */}
      <main className="flex-1 space-y-8">
        <HeroIntroSection
          onNavigate={handleNavigate}
          onOpenApiModal={() => setIsApiModalOpen(true)}
          selectedFrontend={selectedFrontend}
        />
        <ComponentAnatomySection />
        <FrontendChoiceSection
          selectedFrontend={selectedFrontend}
          onSelectFrontend={handleSelectFrontend}
        />
      </main>

      {/* API Modal */}
      <ApiEndpointsModal
        isOpen={isApiModalOpen}
        onClose={() => setIsApiModalOpen(false)}
        selectedFrontend={selectedFrontend}
      />

      {/* Sticky bottom status pill */}
      {selectedFrontend && (
        <aside
          aria-label="Current Architecture Status"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-2xl glass-card neu-surface border border-yellow-400/30 flex items-center gap-3 sm:gap-6 shadow-2xl backdrop-blur-xl animate-fadeUp max-w-[92vw]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 neu-dot animate-pulse" />
            <span className="text-xs text-n-muted font-mono hidden sm:inline">Active:</span>
            <span className="text-xs font-bold text-n-primary">{selectedFrontend.name}</span>
          </div>
          <div className="h-4 w-px bg-n-medium hidden sm:block" />
          <button
            onClick={() => setIsApiModalOpen(true)}
            className="text-xs text-yellow-400 hover:text-yellow-300 font-mono flex items-center gap-1.5 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>View API Endpoints</span>
          </button>
        </aside>
      )}

      {/* Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-6 z-50 p-4 rounded-2xl glass-card neu-surface border border-yellow-400/50 shadow-2xl flex items-center gap-3 animate-slideIn"
        >
          <div className="w-7 h-7 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-bold">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-n-primary">{toastMessage.title}</div>
            <div className="text-[11px] text-n-muted font-mono">{toastMessage.subtitle}</div>
          </div>
        </div>
      )}

      <Footer onOpenApiModal={() => setIsApiModalOpen(true)} onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
