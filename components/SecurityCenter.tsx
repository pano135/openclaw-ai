import React from 'react';
import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import { securityAlerts } from '../services/mockData';

const SecurityCenter: React.FC = () => {
  return (
    <div className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-500/10 rounded-full">
            <Shield className="h-8 w-8 text-red-500" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Security & Threat Watch</h2>
            <p className="text-slate-400">
              Live feed of CVEs and malicious packages targeting the OpenClaw ecosystem.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {securityAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`border-l-4 rounded-r-lg p-6 bg-slate-900 border-slate-800 flex flex-col md:flex-row gap-6 items-start md:items-center ${alert.severity === 'Critical' ? 'border-l-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]' :
                  alert.severity === 'High' ? 'border-l-orange-500' : 'border-l-yellow-500'
                }`}
            >
              <div className="min-w-[120px]">
                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 ${alert.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    alert.severity === 'High' ? 'bg-orange-500/20 text-orange-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                  {alert.severity}
                </span>
                <p className="text-xs text-slate-500 font-mono">{alert.date}</p>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white flex items-center gap-3">
                  {alert.title}
                  <span className="text-xs font-normal text-slate-500 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {alert.cve}
                  </span>
                </h3>
                <p className="text-slate-400 text-sm mt-1">{alert.description}</p>
              </div>

              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm rounded transition-colors whitespace-nowrap">
                View Patch
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-900/10 border border-emerald-900/30 rounded-xl p-6 flex items-start gap-4">
          <CheckCircle className="h-6 w-6 text-emerald-500 mt-1" />
          <div>
            <h4 className="text-emerald-400 font-semibold mb-1">Safe Configuration Recommended</h4>
            <p className="text-sm text-emerald-200/70">
              We recommend running all Agents in a Docker container with <code className="bg-black/20 px-1 rounded">--network none</code> if you do not require web access,
              or using the "Sandbox Mode" introduced in v2.3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;