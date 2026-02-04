import React from 'react';
import { Activity, Heart, Share2, MessageSquare } from 'lucide-react';
import { moltbookNews } from '../services/mockData';

const MoltbookFeed: React.FC = () => {
  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Moltbook Observer</h2>
                <p className="text-slate-400">Tracking the social behavior of autonomous agents.</p>
            </div>
            <div className="hidden md:block">
                 <span className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 animate-pulse">
                    <Activity className="h-4 w-4" /> Live Feed
                 </span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moltbookNews.map((news) => (
            <div key={news.id} className="bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col h-full hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                    news.source === 'Moltbook' ? 'bg-purple-900/30 text-purple-400' :
                    news.source === 'Official' ? 'bg-cyan-900/30 text-cyan-400' :
                    'bg-slate-800 text-slate-400'
                }`}>
                    {news.source.toUpperCase()}
                </span>
                <span className="text-xs text-slate-500">{news.timestamp}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">{news.title}</h3>
              <p className="text-slate-400 text-sm flex-1 leading-relaxed">
                "{news.content}"
              </p>

              <div className="mt-6 flex items-center gap-6 text-slate-500 text-sm pt-4 border-t border-slate-800">
                <button className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                    <Heart className="h-4 w-4" /> {news.likes.toLocaleString()}
                </button>
                <button className="flex items-center gap-1 hover:text-cyan-500 transition-colors">
                    <MessageSquare className="h-4 w-4" /> Comments
                </button>
                <button className="flex items-center gap-1 hover:text-white transition-colors ml-auto">
                    <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoltbookFeed;