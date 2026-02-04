'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { modelBenchmarks } from '../services/mockData';
import { Info } from 'lucide-react';

const ModelLab: React.FC = () => {
  return (
    <div className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Model Lab</h2>
            <p className="text-slate-400 max-w-xl">
              Compare the most popular brains for OpenClaw. Benchmarks based on the "Complex Reasoning v4" dataset.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <span className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">Updated: Feb 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-6">Success Rate vs. Cost</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={modelBenchmarks}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#06b6d4"
                    tick={{ fill: '#06b6d4' }}
                    label={{ value: 'Success %', angle: -90, position: 'insideLeft', fill: '#06b6d4' }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#f472b6"
                    tick={{ fill: '#f472b6' }}
                    label={{ value: 'Cost (c/task)', angle: 90, position: 'insideRight', fill: '#f472b6' }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="successRate" name="Success Rate %" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={40} />
                  <Bar yAxisId="right" dataKey="costPerTask" name="Cost per Task" fill="#f472b6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Analysis Card */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-cyan-400" />
                <h3 className="font-semibold text-white">Editor's Pick: Kimi-K2.5</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Kimi-K2.5 (Moonshot AI) delivers comparable performance to Claude 4.5 Opus at a fraction of the cost.
                With an 85% success rate on LiveCodeBench and support for Agent Swarm orchestration,
                it's the best value backend for OpenClaw in 2026.
              </p>
              <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>LiveCodeBench Score</span>
                <span>85%</span>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
              <h3 className="font-semibold text-white mb-2">Budget Option: Ollama + Llama 4</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Running purely on local hardware (Mac Mini M4/M5 recommended).
                Cost is effectively zero. Ideal for privacy-conscious users who don't want their
                Agent data leaving the network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelLab;