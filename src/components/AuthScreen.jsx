import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Lock, Mail, User, Check, Layers, Code2, Database } from 'lucide-react';

export default function AuthScreen({ onContinue }) {
  const { login, register, loginDemo } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegister) {
        if (!name.trim()) throw new Error('Please enter your full name.');
        if (password.length < 6) throw new Error('Password should be at least 6 characters.');
        await register(name, email, password);
      } else {
        await login(email, password);
      }
      if (onContinue) onContinue();
    } catch (err) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    loginDemo();
    if (onContinue) onContinue();
  };

  return (
    <div className="min-h-screen bg-[#0e1015] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-sky-400/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: Nesta Branding & Value Props */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Nesta App Architecture Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Build, Preview & Deploy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
              Fullstack Apps in Minutes
            </span>
          </h1>

          <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Pick your frontend, backend, and a complete themed UI template. Experience interactive previews, download production code, or launch to cloud platforms in 1 click.
          </p>

          {/* Quick value props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left">
              <Code2 className="w-4 h-4 text-yellow-400 mb-1.5" />
              <div className="text-xs font-bold text-white">Frontend Stacks</div>
              <div className="text-[11px] text-slate-400">React, Next.js, Vue & more</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left">
              <Database className="w-4 h-4 text-sky-400 mb-1.5" />
              <div className="text-xs font-bold text-white">Backend Engines</div>
              <div className="text-[11px] text-slate-400">FastAPI, Express, Spring</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left">
              <Zap className="w-4 h-4 text-emerald-400 mb-1.5" />
              <div className="text-xs font-bold text-white">1-Click Deploy</div>
              <div className="text-[11px] text-slate-400">Vercel, Railway, AWS</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Auth Card */}
        <div className="lg:col-span-6 w-full max-w-md mx-auto">
          <div className="glass-card rounded-3xl p-8 neu-surface border border-white/15 shadow-2xl backdrop-blur-xl relative">
            
            {/* Header / Mode Switcher */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {isRegister ? 'Create an Account' : 'Welcome Back'}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {isRegister ? 'Join Nesta to build & manage your apps' : 'Sign in to access your builder studio'}
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-yellow-400 flex items-center justify-center font-black text-black text-xl shadow-lg">
                N
              </div>
            </div>

            {/* Error banner */}
            {error && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <span>⚠️ {error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Rivera"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl neu-inset text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 bg-[#12141a]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@nesta.dev"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl neu-inset text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 bg-[#12141a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl neu-inset text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400 bg-[#12141a]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 neu-yellow-btn py-3 rounded-xl text-xs font-bold text-black flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>{loading ? 'Processing...' : isRegister ? 'Create Free Account' : 'Sign In to Studio'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Login Option */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-2.5 rounded-xl neu-btn text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 border border-white/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Instant Demo Access (No password required)</span>
              </button>
            </div>

            {/* Switch between Login and Register */}
            <div className="mt-5 text-center text-xs text-slate-400">
              {isRegister ? (
                <span>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsRegister(false);
                      setError('');
                    }}
                    className="text-yellow-400 font-bold hover:underline ml-1"
                  >
                    Sign In
                  </button>
                </span>
              ) : (
                <span>
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsRegister(true);
                      setError('');
                    }}
                    className="text-yellow-400 font-bold hover:underline ml-1"
                  >
                    Register Now
                  </button>
                </span>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
