import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 py-20 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 mb-8 backdrop-blur-sm">
          <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
          <span>Note: OpenClaw was formerly known as <span className="text-white font-semibold">Clawdbot</span> &amp; <span className="text-white font-semibold">Moltbot</span></span>
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6">
          The Autonomous Agent Framework <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            for the Future.
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
          OpenClaw is the standard for 2026. Deploy secure agents on Mac Mini clusters,
          connect to Kimi-K2.5, and navigate the Moltbook social web safely.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#start"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Deploy Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800">
            <Download className="mr-2 h-5 w-5 text-slate-400" />
            Download v2.4 (Latest)
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 text-sm font-medium">
          <span>Trusted by developers using</span>
          <div className="flex gap-4 grayscale opacity-70">
            <span>Docker</span>
            <span>Ollama</span>
            <span>Kimi.ai</span>
            <span>LangChain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;