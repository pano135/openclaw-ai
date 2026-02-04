'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal, Server, Apple } from 'lucide-react';

const InstallationGuide: React.FC = () => {
  const [activeOS, setActiveOS] = useState<'docker' | 'mac' | 'wsl'>('docker');
  const [copied, setCopied] = useState(false);

  const scripts = {
    docker: `curl -fsSL https://get.openclaw-ai.pro/docker-setup.sh | sh
# Defaults to Port 3000
# Requires Docker Compose v2.2+`,
    mac: `brew install openclaw-core
# Optimized for M4/M5 Chips
openclaw init --device=mac-mini-server --background`,
    wsl: `sudo apt update && sudo apt install wsl-openclaw
# Ensure WSL2 is enabled
openclaw-wsl start --gpu=nvidia`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scripts[activeOS]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Deploy OpenClaw in Seconds</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you are running a 24/7 Mac Mini farm or a local development environment,
            we have a zero-config script for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="flex border-b border-slate-800">
            <button
              onClick={() => setActiveOS('docker')}
              className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeOS === 'docker' ? 'bg-slate-800 text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
            >
              <Server className="h-4 w-4" /> Docker (Recommended)
            </button>
            <button
              onClick={() => setActiveOS('mac')}
              className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeOS === 'mac' ? 'bg-slate-800 text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
            >
              <Apple className="h-4 w-4" /> Mac Mini / macOS
            </button>
            <button
              onClick={() => setActiveOS('wsl')}
              className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeOS === 'wsl' ? 'bg-slate-800 text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
            >
              <Terminal className="h-4 w-4" /> Windows (WSL2)
            </button>
          </div>

          <div className="p-8 relative group">
            <div className="absolute top-4 right-4">
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <pre className="font-mono text-sm sm:text-base text-cyan-300 overflow-x-auto">
              <code>{scripts[activeOS]}</code>
            </pre>
          </div>

          <div className="bg-slate-900/50 p-4 border-t border-slate-800 flex items-start gap-3">
            <div className="p-1 rounded bg-amber-500/10 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></div>
            </div>
            <p className="text-xs text-slate-400">
              <span className="font-bold text-slate-300">Pro Tip:</span> If you are setting up a Mac Mini specifically for 24/7 Agent hosting,
              ensure "Prevent computer from sleeping automatically" is enabled in System Settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;