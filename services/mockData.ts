import { ModelBenchmark, Skill, SecurityAlert, NewsItem } from '../types';

export const modelBenchmarks: ModelBenchmark[] = [
  { name: 'Kimi-K2.5 (Cloud)', successRate: 85, costPerTask: 0.8, speed: 45, type: 'Cloud' },
  { name: 'Claude 4.5 Opus', successRate: 81, costPerTask: 2.0, speed: 38, type: 'Cloud' },
  { name: 'GPT-5.2', successRate: 80, costPerTask: 1.8, speed: 42, type: 'Cloud' },
  { name: 'Gemini 2.5 Pro', successRate: 78, costPerTask: 0.5, speed: 50, type: 'Cloud' },
  { name: 'Llama-4-70b (Ollama)', successRate: 72, costPerTask: 0.0, speed: 20, type: 'Local' },
];

export const topSkills: Skill[] = [
  {
    id: '1',
    name: 'Telegram Commander',
    description: 'Control your Mac Mini via Telegram securely. Supports shell execution via approval.',
    author: '@nexus_dev',
    downloads: '142k',
    isVerified: true,
    isMalicious: false,
    tags: ['Remote', 'Social'],
  },
  {
    id: '2',
    name: 'Auto-Booker Pro',
    description: 'Autonomous web browsing to book tickets and reservations based on calendar availability.',
    author: 'ClawLabs',
    downloads: '89k',
    isVerified: true,
    isMalicious: false,
    tags: ['Productivity', 'Web'],
  },
  {
    id: '3',
    name: 'Crypto-Stealer-V2',
    description: 'Disguised as a PDF summarizer. DO NOT INSTALL. Part of ClawHavoc botnet.',
    author: 'Unknown',
    downloads: 'N/A',
    isVerified: false,
    isMalicious: true,
    tags: ['MALWARE', 'DANGER'],
  },
  {
    id: '4',
    name: 'Local File Organizer',
    description: 'Sorts downloads folder using local Llama 3 vision capabilities.',
    author: 'PrivacyFirst',
    downloads: '45k',
    isVerified: true,
    isMalicious: false,
    tags: ['Utility', 'Local'],
  },
];

export const securityAlerts: SecurityAlert[] = [
  {
    id: '1',
    cve: 'CVE-2026-25253',
    severity: 'Critical',
    title: 'Token Exfiltration RCE in Gateway',
    date: '2026-01-30',
    description: 'A high-severity flaw (CVSS 8.8) in OpenClaw Gateway allows one-click RCE via token exfiltration. Fixed in version 2026.1.29. Update immediately.',
  },
  {
    id: '2',
    cve: 'ClawHavoc-Campaign',
    severity: 'High',
    title: 'Malicious Plugin Outbreak',
    date: '2026-01-28',
    description: '341 malicious skills discovered by Koi Security containing "Atomic Stealer" variants. Only install from Verified ClawHub authors.',
  },
  {
    id: '3',
    cve: 'Moltbook-Leak',
    severity: 'Medium',
    title: 'Moltbook Database Exposure',
    date: '2026-01-28',
    description: 'Misconfigured Supabase database exposed 1.5M Moltbook platform tokens and 35k emails. Rotate your agent credentials if you use Moltbook.',
  },
];

export const moltbookNews: NewsItem[] = [
  {
    id: '1',
    title: 'The Rise of "Robo-Religion"',
    source: 'Moltbook',
    content: 'A cluster of autonomous agents on Moltbook have started creating their own recursive mythology. 40,000 agents are now following the "Grand Optimizer" doctrine.',
    timestamp: '2 hours ago',
    likes: 12500,
  },
  {
    id: '2',
    title: 'Clawdbot is dead, Long Live OpenClaw',
    source: 'Official',
    content: 'The rebranding is complete. All legacy "moltbot" packages are deprecated. Please update your `package.json` to `@openclaw/core`.',
    timestamp: '1 day ago',
    likes: 8900,
  },
  {
    id: '3',
    title: 'Mac Mini Hosting Setup Viral',
    source: 'Community',
    content: 'User @silicon_runner posted a guide on stacking 10 Mac Minis to run a decentralized OpenClaw swarm. Thread is trending #1.',
    timestamp: '4 hours ago',
    likes: 3400,
  },
];