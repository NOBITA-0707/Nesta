import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import AuthScreen from './components/AuthScreen';
import HeroIntroSection from './components/HeroIntroSection';
import FrontendChoiceSection from './components/FrontendChoiceSection';
import BackendChoiceSection from './components/BackendChoiceSection';
import UiTemplateChoiceSection from './components/UiTemplateChoiceSection';
import DeployExportSection from './components/DeployExportSection';
import ManageAppDashboard from './components/ManageAppDashboard';
import ApiEndpointsModal from './components/ApiEndpointsModal';
import Footer from './components/Footer';

import { FRONTEND_OPTIONS } from './data/frontendOptions';
import { BACKEND_OPTIONS } from './data/backendOptions';
import { UI_TEMPLATES } from './data/uiTemplates';
import { apiService } from './services/apiService';
import { Check, Terminal, Rocket, Layers } from 'lucide-react';

function AppContent() {
  const { currentUser, isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState('builder'); // 'builder' | 'manage'
  
  const [selectedFrontend, setSelectedFrontend] = useState(FRONTEND_OPTIONS[0]);
  const [selectedBackend, setSelectedBackend] = useState(BACKEND_OPTIONS[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(UI_TEMPLATES[0]);

  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [toastMessage, setToastMessage] = useState(null);

  // If not logged in, show Auth Screen (Login / Register / Demo)
  if (!isAuthenticated) {
    return <AuthScreen onContinue={() => setCurrentView('builder')} />;
  }

  // Track active section on scroll
  useEffect(() => {
    if (currentView !== 'builder') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const deployEl    = document.getElementById('deploy');
      const templatesEl = document.getElementById('templates');
      const backendsEl  = document.getElementById('backends');
      const frontendsEl = document.getElementById('frontends');
      const introEl     = document.getElementById('intro');

      if (deployEl && scrollPosition >= deployEl.offsetTop) {
        setActiveSection('deploy');
      } else if (templatesEl && scrollPosition >= templatesEl.offsetTop) {
        setActiveSection('templates');
      } else if (backendsEl && scrollPosition >= backendsEl.offsetTop) {
        setActiveSection('backends');
      } else if (frontendsEl && scrollPosition >= frontendsEl.offsetTop) {
        setActiveSection('frontends');
      } else {
        setActiveSection('intro');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavigate = (sectionId) => {
    if (currentView !== 'builder') {
      setCurrentView('builder');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectFrontend = (frontend) => {
    setSelectedFrontend(frontend);
    showToast(`Frontend Selected: ${frontend.name}`, 'Ready for scaffolding & layout sync');
  };

  const handleSelectBackend = (backend) => {
    setSelectedBackend(backend);
    showToast(`Backend Engine Selected: ${backend.name}`, 'API endpoint contracts synchronized');
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    showToast(`UI Template Selected: ${template.name}`, 'Full theme components pre-configured');
  };

  const showToast = (title, subtitle) => {
    setToastMessage({ title, subtitle });
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleProjectCreated = (newProject) => {
    showToast(`Project Ready: ${newProject.name}`, `Added to Manage Your Apps dashboard!`);
  };

  return (
    <div className="min-h-screen bg-[#0e1015] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-yellow-400 selection:text-black">

      {/* Ambient top gradient */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Navbar */}
      <Navbar
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
        selectedFrontend={selectedFrontend}
        selectedBackend={selectedBackend}
        selectedTemplate={selectedTemplate}
        onOpenApiModal={() => setIsApiModalOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content: Builder Studio vs Manage Apps Dashboard */}
      <main className="flex-1 space-y-12">
        {currentView === 'builder' ? (
          <>
            <HeroIntroSection
              onNavigate={handleNavigate}
              onOpenApiModal={() => setIsApiModalOpen(true)}
              onViewChange={(view) => setCurrentView(view)}
            />
            
            {/* Step 1: Frontend Engine */}
            <FrontendChoiceSection
              selectedFrontend={selectedFrontend}
              onSelectFrontend={handleSelectFrontend}
            />

            {/* Step 2: Backend Engine */}
            <BackendChoiceSection
              selectedBackend={selectedBackend}
              onSelectBackend={handleSelectBackend}
            />

            {/* Step 3: Complete Themed UI Template */}
            <UiTemplateChoiceSection
              selectedTemplate={selectedTemplate}
              onSelectTemplate={handleSelectTemplate}
            />

            {/* Step 4: Launch & Deploy Center (ZIP Download + Cloud Deploy) */}
            <DeployExportSection
              selectedFrontend={selectedFrontend}
              selectedBackend={selectedBackend}
              selectedTemplate={selectedTemplate}
              currentUser={currentUser}
              onProjectCreated={handleProjectCreated}
            />
          </>
        ) : (
          <ManageAppDashboard
            currentUser={currentUser}
            onStartNewApp={() => {
              setCurrentView('builder');
              setTimeout(() => {
                const el = document.getElementById('intro');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        )}
      </main>

      {/* API Endpoints & Contract Modal */}
      <ApiEndpointsModal
        isOpen={isApiModalOpen}
        onClose={() => setIsApiModalOpen(false)}
        selectedFrontend={selectedFrontend}
        selectedBackend={selectedBackend}
      />

      {/* Sticky bottom status pill (only in Builder view) */}
      {currentView === 'builder' && (
        <aside
          aria-label="Current Architecture Selection"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-2xl glass-card neu-surface border border-yellow-400/40 flex items-center gap-3 sm:gap-6 shadow-2xl backdrop-blur-xl animate-fadeUp max-w-[94vw] bg-[#14161f]/95"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-bold text-white">
              {selectedFrontend?.name} + {selectedBackend?.name}
            </span>
            <span className="text-xs text-yellow-300 font-mono hidden md:inline">
              ({selectedTemplate?.name})
            </span>
          </div>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigate('deploy')}
              className="text-xs font-extrabold text-black bg-yellow-400 hover:bg-yellow-300 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Launch / Export</span>
            </button>

            <button
              onClick={() => setIsApiModalOpen(true)}
              className="text-xs text-slate-300 hover:text-white font-mono hidden sm:flex items-center gap-1 transition-colors px-2 py-1"
            >
              <Terminal className="w-3.5 h-3.5 text-yellow-400" />
              <span>API Spec</span>
            </button>
          </div>
        </aside>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-6 z-50 p-4 rounded-2xl glass-card neu-surface border border-yellow-400/50 shadow-2xl flex items-center gap-3 animate-slideIn bg-[#181b24]/95"
        >
          <div className="w-8 h-8 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-bold">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">{toastMessage.title}</div>
            <div className="text-[11px] text-slate-400 font-mono">{toastMessage.subtitle}</div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenApiModal={() => setIsApiModalOpen(true)} onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
