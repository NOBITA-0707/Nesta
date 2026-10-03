import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  ChevronRight, 
  Server, 
  Layers, 
  LayoutDashboard, 
  Wrench, 
  LogOut, 
  Sparkles,
  User,
  Plus
} from 'lucide-react';

export default function Navbar({ 
  currentView, 
  onViewChange, 
  selectedFrontend, 
  selectedBackend, 
  selectedTemplate, 
  onOpenApiModal, 
  activeSection, 
  onNavigate 
}) {
  const { currentUser, logout, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 pt-4 pb-3 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl bg-[#14161b]/90">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3.5 cursor-pointer" 
          onClick={() => {
            onViewChange('builder');
            if (onNavigate) onNavigate('intro');
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#FACC15] flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)] transform transition-transform hover:scale-105 active:scale-95">
            <span className="font-extrabold text-black text-xl tracking-tighter">N</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                Nesta
              </span>
              <span className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                App Studio
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Fullstack Architecture & Deployment
            </p>
          </div>
        </div>

        {/* Primary View Switcher: Builder vs Manage */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0e1015] rounded-xl border border-white/10 shadow-inner">
          <button
            onClick={() => onViewChange('builder')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              currentView === 'builder'
                ? 'bg-yellow-400 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Build App</span>
          </button>
          <button
            onClick={() => onViewChange('manage')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              currentView === 'manage'
                ? 'bg-yellow-400 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Manage Apps</span>
          </button>
        </div>

        {/* User Account & Actions */}
        <div className="flex items-center gap-3">
          
          {/* Builder Step Nav Links (only when in builder view on desktop) */}
          {currentView === 'builder' && (
            <nav className="hidden xl:flex items-center gap-1 text-xs text-slate-400 mr-2">
              <button onClick={() => onNavigate('frontends')} className="hover:text-white px-2 py-1">
                1. Frontend
              </button>
              <span>•</span>
              <button onClick={() => onNavigate('backends')} className="hover:text-white px-2 py-1">
                2. Backend
              </button>
              <span>•</span>
              <button onClick={() => onNavigate('templates')} className="hover:text-white px-2 py-1">
                3. UI Template
              </button>
              <span>•</span>
              <button onClick={() => onNavigate('deploy')} className="hover:text-yellow-400 px-2 py-1 font-semibold text-yellow-400">
                4. Launch
              </button>
            </nav>
          )}

          {/* User Profile Pill */}
          {currentUser && (
            <div className="flex items-center gap-2.5 pl-3 border-l border-white/10">
              <img
                src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}
                alt={currentUser.name}
                className="w-7 h-7 rounded-full bg-white/10 border border-yellow-400/40 object-cover"
              />
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-white truncate max-w-[100px] leading-tight">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-yellow-400 font-mono">
                  {currentUser.plan || 'Free Account'}
                </div>
              </div>

              <button
                onClick={logout}
                className="p-1.5 rounded-lg neu-btn text-slate-400 hover:text-red-400 transition-colors"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>
    </header>
  );
}
