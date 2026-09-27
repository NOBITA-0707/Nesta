import React, { useState } from 'react';
import { API_CONFIG, API_DOCUMENTATION, API_ENDPOINTS } from '../api/endpoints';
import { apiService } from '../services/apiService';
import { 
  X, 
  Server, 
  Terminal, 
  Check, 
  Copy, 
  Play, 
  Code, 
  Database, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export default function ApiEndpointsModal({ isOpen, onClose, selectedFrontend }) {
  const [activeEndpointIndex, setActiveEndpointIndex] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [testResult, setTestResult] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  if (!isOpen) return null;

  const currentDoc = API_DOCUMENTATION[activeEndpointIndex] || API_DOCUMENTATION[0];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generateCurl = (doc) => {
    const url = `${API_CONFIG.BASE_URL}${doc.endpoint.replace('/api/v1', '')}`;
    if (doc.method === 'GET') {
      return `curl -X GET "${url}" \\
  -H "Accept: application/json"`;
    }
    return `curl -X ${doc.method} "${url}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(doc.requestPayload)}'`;
  };

  const handleTestEndpoint = async () => {
    setIsTesting(true);
    setTestResult(null);

    try {
      const endpoint = currentDoc.endpoint.replace('/api/v1', '');
      const res = await apiService.request(endpoint, {
        method: currentDoc.method,
        body: currentDoc.requestPayload ? JSON.stringify(currentDoc.requestPayload) : undefined,
      });
      setTestResult(res);
    } catch (err) {
      setTestResult({ error: err.message, note: 'Ensure your backend server is running and CORS is enabled.' });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="glass-card rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col neu-surface border border-white/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-white/10 flex items-start justify-between gap-4 bg-[#171a22]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.4)]">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                  Backend API Endpoints & Contract
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready to Connect
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono">
                Base URL: <code className="text-yellow-400 bg-white/5 px-2 py-0.5 rounded">{API_CONFIG.BASE_URL}</code>
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl neu-btn text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column Interface: Endpoints List (Left) + Payload & Console (Right) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 bg-[#14161b]">
          
          {/* LEFT: Endpoints Navigation */}
          <div className="lg:col-span-4 p-5 border-r border-white/10 space-y-2 bg-[#121419]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
              API Route Registry
            </span>

            {API_DOCUMENTATION.map((doc, idx) => {
              const isSelected = activeEndpointIndex === idx;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveEndpointIndex(idx);
                    setTestResult(null);
                  }}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[#222735] border-yellow-400 shadow-md'
                      : 'bg-[#181b22] border-white/5 hover:bg-[#1e222b]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-extrabold px-2 py-0.5 rounded ${
                      doc.method === 'POST' ? 'bg-yellow-400/20 text-yellow-400' : 'bg-emerald-400/20 text-emerald-400'
                    }`}>
                      {doc.method}
                    </span>
                    <span className="text-xs font-mono text-white truncate font-medium">
                      {doc.endpoint}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {doc.title}
                  </p>
                </div>
              );
            })}

            {/* Backend Integration Tip */}
            <div className="mt-6 p-4 rounded-xl neu-inset bg-[#0e1014] text-xs space-y-2">
              <span className="text-yellow-400 font-mono font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                Backend Integration Note
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Set <code className="text-white">VITE_API_BASE_URL</code> in your <code className="text-white">.env</code> to redirect requests to your Express, Fastify, Django, or Go server.
              </p>
            </div>
          </div>

          {/* RIGHT: Detail View & Test Console */}
          <div className="lg:col-span-8 p-6 space-y-6">
            
            {/* Title & Description */}
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-md ${
                  currentDoc.method === 'POST' ? 'bg-yellow-400 text-black' : 'bg-emerald-400 text-black'
                }`}>
                  {currentDoc.method}
                </span>
                <code className="text-sm sm:text-base font-mono font-bold text-white">
                  {currentDoc.endpoint}
                </code>
              </div>
              <h4 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                {currentDoc.title}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                {currentDoc.description}
              </p>
            </div>

            {/* Request Payload */}
            {currentDoc.requestPayload && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">
                    Request Payload Schema (JSON):
                  </span>
                  <button
                    onClick={() => handleCopy(JSON.stringify(currentDoc.requestPayload, null, 2), 'req')}
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    {copiedId === 'req' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'req' ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#0d0e12] border border-white/10 text-xs font-mono text-yellow-300 overflow-x-auto max-h-48">
                  <code>{JSON.stringify(currentDoc.requestPayload, null, 2)}</code>
                </pre>
              </div>
            )}

            {/* Response Payload */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">
                  Standard Response Contract (200 OK):
                </span>
                <button
                  onClick={() => handleCopy(JSON.stringify(currentDoc.responsePayload, null, 2), 'res')}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                >
                  {copiedId === 'res' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'res' ? 'Copied' : 'Copy Response'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-[#0d0e12] border border-white/10 text-xs font-mono text-slate-200 overflow-x-auto max-h-48">
                <code>{JSON.stringify(currentDoc.responsePayload, null, 2)}</code>
              </pre>
            </div>

            {/* Quick cURL Command */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">
                  cURL Command (Terminal / Postman):
                </span>
                <button
                  onClick={() => handleCopy(generateCurl(currentDoc), 'curl')}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                >
                  {copiedId === 'curl' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'curl' ? 'Copied' : 'Copy cURL'}</span>
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#0d0e12] border border-white/10 text-[11px] font-mono text-slate-400 overflow-x-auto">
                <code>{generateCurl(currentDoc)}</code>
              </pre>
            </div>

            {/* Live Test Trigger Button */}
            <div className="pt-2">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleTestEndpoint}
                  disabled={isTesting}
                  className="neu-yellow-btn px-5 py-2.5 rounded-xl text-xs font-bold text-black flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isTesting ? 'Sending Request...' : 'Test Endpoint Now'}</span>
                </button>
                <span className="text-xs font-mono text-slate-400">
                  (Auto-fallback to simulated mock if backend is offline)
                </span>
              </div>

              {testResult && (
                <div className="mt-4 p-4 rounded-xl neu-inset bg-[#0e1014] border border-white/10">
                  <div className="flex items-center justify-between mb-2 text-xs font-mono">
                    <span className="text-yellow-400 font-bold">Execution Output:</span>
                    <span className="text-[10px] text-slate-400">{testResult.isMock ? 'Mock Fallback Server' : 'Live Backend Server'}</span>
                  </div>
                  <pre className="text-xs font-mono text-emerald-400 overflow-x-auto">
                    <code>{JSON.stringify(testResult, null, 2)}</code>
                  </pre>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#171a22] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Nesta API Specification v1.0 • JSON REST Standard
          </span>
          <button
            onClick={onClose}
            className="neu-btn px-4 py-2 rounded-xl text-xs text-slate-300 hover:text-white"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
