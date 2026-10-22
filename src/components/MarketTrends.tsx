import React from 'react';
import { Career } from '../types/career';
import { BarChart3, TrendingUp, DollarSign, Star, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface MarketTrendsProps {
  careers: Career[];
  onSelectCareer: (career: Career) => void;
}

export const MarketTrends: React.FC<MarketTrendsProps> = ({ careers, onSelectCareer }) => {
  // Top 5 Highest Compensating
  const topPaying = [...careers].sort((a, b) => b.salaryNumber - a.salaryNumber).slice(0, 5);

  // Top 5 Fastest Growing
  const topGrowth = [...careers].sort((a, b) => b.growthPercentage - a.growthPercentage).slice(0, 5);

  // Best Work-Life Balance
  const bestBalance = [...careers].filter((c) => c.workLifeBalance >= 4).slice(0, 5);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold mb-2">
          <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Real-Time Industry Intelligence</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Macro Market Trends & Compensation Analytics
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
          Aggregated verified compensation metrics, 10-year bureau projections, and emerging technological inflection points.
        </p>
      </div>

      {/* 3 Metric Leaderboard Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Highest Median Compensation */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white font-heading">
                  Top Compensated Fields
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Median Base</span>
            </div>

            <div className="space-y-3">
              {topPaying.map((c, idx) => (
                <div
                  key={c.id}
                  onClick={() => onSelectCareer(c)}
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 cursor-pointer transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-[10px] font-mono font-bold text-slate-400 flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white hover:text-cyan-300 transition-colors">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-slate-500">{c.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-emerald-400">{c.medianSalary}</div>
                    <div className="text-[10px] text-slate-500 font-mono">Top: {c.seniorSalary}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Fastest Projected Growth */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white font-heading">
                  Fastest 10-Yr Job Growth
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Outlook</span>
            </div>

            <div className="space-y-3">
              {topGrowth.map((c, idx) => (
                <div
                  key={c.id}
                  onClick={() => onSelectCareer(c)}
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 cursor-pointer transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-[10px] font-mono font-bold text-slate-400 flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white hover:text-cyan-300 transition-colors">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-slate-500">{c.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-cyan-300">{c.growthRate}</div>
                    <div className="text-[10px] text-slate-500">{c.remoteFriendly}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Top Work-Life Balance & Remote */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <h3 className="text-sm font-bold text-white font-heading">
                  High Work-Life Balance
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Index</span>
            </div>

            <div className="space-y-3">
              {bestBalance.map((c, idx) => (
                <div
                  key={c.id}
                  onClick={() => onSelectCareer(c)}
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 cursor-pointer transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-[10px] font-mono font-bold text-slate-400 flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white hover:text-cyan-300 transition-colors">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-slate-500">{c.remoteFriendly}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-amber-300">{c.workLifeBalance} / 5 Rating</div>
                    <div className="text-[10px] font-mono text-slate-400">{c.medianSalary}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Market Shifts Brief */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <h3 className="text-base font-bold text-white font-heading">
            Key Industry Inflection Points (2025 – 2035)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <h4 className="font-bold text-cyan-300 mb-1">1. The Silicon & Physical AI Wave</h4>
            <p className="text-slate-400">
              Compute constraints mean software engineers who understand low-level hardware, Verilog, RISC-V, and GPU memory architectures are commanding compensation equal to senior software leads.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <h4 className="font-bold text-purple-300 mb-1">2. Interdisciplinary Bio-Computation</h4>
            <p className="text-slate-400">
              Physicians and researchers who can interface with genomic pipelines, CRISPR synthesis, and neural recording devices are pioneering clinical trials previously thought impossible.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <h4 className="font-bold text-emerald-300 mb-1">3. The Decarbonization Mandate</h4>
            <p className="text-slate-400">
              Trillions in global capital allocation are pivoting to battery storage, grid modernization, and environmental remote sensing, creating persistent multi-decade job security for clean tech engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
