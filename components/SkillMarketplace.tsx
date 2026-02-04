import React from 'react';
import { Download, ShieldCheck, ShieldAlert, Tag, ExternalLink } from 'lucide-react';
import { topSkills } from '../services/mockData';

const SkillMarketplace: React.FC = () => {
  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Skill Hub</h2>
          <p className="text-slate-400">
            Extend your Agent's capabilities. Download from <span className="text-cyan-400">ClawHub</span> or verified community repos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSkills.map((skill) => (
            <div
              key={skill.id}
              className={`group relative rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 ${skill.isMalicious
                  ? 'bg-red-950/20 border-red-900 hover:border-red-700'
                  : 'bg-slate-950 border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                }`}
            >
              {skill.isMalicious && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg z-10">
                  BLOCKED
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${skill.isMalicious ? 'bg-red-900/30' : 'bg-slate-900'}`}>
                  {skill.isMalicious ? (
                    <ShieldAlert className="h-6 w-6 text-red-500" />
                  ) : (
                    <Tag className="h-6 w-6 text-cyan-500" />
                  )}
                </div>
                {skill.isVerified && !skill.isMalicious && (
                  <span title="Verified Author">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </span>
                )}
              </div>

              <h3 className={`font-bold text-lg mb-2 ${skill.isMalicious ? 'text-red-400 line-through' : 'text-white'}`}>
                {skill.name}
              </h3>

              <p className="text-sm text-slate-400 mb-6 h-16 line-clamp-3">
                {skill.description}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/50 pt-4">
                <span className="flex items-center gap-1">
                  <Download className="h-3 w-3" /> {skill.downloads}
                </span>
                <span>by {skill.author}</span>
              </div>

              {!skill.isMalicious && (
                <button className="w-full mt-4 py-2 bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-300 text-sm rounded transition-colors flex items-center justify-center gap-2">
                  Install <ExternalLink className="h-3 w-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillMarketplace;