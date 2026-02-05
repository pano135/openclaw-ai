'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Cpu, Shield, Zap, Activity, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'start', label: 'Quick Start', icon: Terminal, href: '#start' },
    { id: 'models', label: 'Model Lab', icon: Cpu, href: '#models' },
    { id: 'skills', label: 'Skill Hub', icon: Zap, href: '#skills' },
    { id: 'security', label: 'Security', icon: Shield, href: '#security' },
    { id: 'moltbook', label: 'Moltbook', icon: Activity, href: '#moltbook' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500 text-slate-950 font-bold">
              OC
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              OpenClaw<span className="text-cyan-500"> AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-cyan-400"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="ml-4 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 border border-slate-700"
            >
              Docs
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-cyan-400"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;