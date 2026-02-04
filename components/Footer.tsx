import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">OpenClaw-AI.pro</h3>
            <p className="text-slate-500 text-sm max-w-md">
              The premier knowledge base for the OpenClaw autonomous agent framework. 
              Helping developers navigate the post-2025 AI landscape securely and efficiently.
            </p>
            <div className="mt-4 text-xs text-slate-600">
                Not affiliated with the OpenClaw Foundation. Community maintained.
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400">Docker Images</a></li>
              <li><a href="#" className="hover:text-cyan-400">ClawHub Market</a></li>
              <li><a href="#" className="hover:text-cyan-400">Security Advisories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-400">Moltbook Page</a></li>
              <li><a href="#" className="hover:text-cyan-400">Reddit r/OpenClaw</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 OpenClaw-AI.pro. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;