export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export interface ModelBenchmark {
  name: string;
  successRate: number; // 0-100
  costPerTask: number; // in cents
  speed: number; // tasks per minute
  type: 'Cloud' | 'Local';
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  author: string;
  downloads: string;
  isVerified: boolean;
  isMalicious: boolean;
  tags: string[];
}

export interface SecurityAlert {
  id: string;
  cve: string;
  severity: 'Critical' | 'High' | 'Medium';
  title: string;
  date: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: 'Moltbook' | 'Official' | 'Community';
  content: string;
  timestamp: string;
  likes: number;
}