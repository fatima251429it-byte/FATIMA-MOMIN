import React from 'react';
import { Career } from '../types/career';
import { X, GitCompare, ArrowRight, DollarSign, TrendingUp, Star, MapPin, Check, Plus } from 'lucide-react';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedCareers: Career[];
  onRemoveFromCompare: (careerId: string) => void;
  allCareers: Career[];
  onAddToCompare: (careerId: string) => void;
  onSelectCareer: (career: Career) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  comparedCareers,
  onRemoveFromCompare,
  allCareers,
  onAddToCompare,
  onSelectCareer,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
              <GitCompare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-heading">
                Side-by-Side Career Comparison
              </h2>
              <p className="text-xs text-slate-400">
                Evaluating {comparedCareers.length} of max 3 careers simultaneously
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {comparedCareers.length === 0 ? (
            <div className="py-12 text-center max-w-md mx-auto">
              <GitCompare className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-1">No careers selected to compare</h3>
              <p className="text-xs text-slate-400 mb-4">
                Click the compare icon on any career card or select careers from the dropdown below to compare them side by side.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-3 text-xs font-semibold text-slate-400 w-1/4 bg-slate-950/60 rounded-l-xl">
                      Dimension
                    </th>
                    {comparedCareers.map((c) => (
                      <th key={c.id} className="p-3 text-left w-1/4 bg-slate-950/60 last:rounded-r-xl">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.colorTheme.badgeBg} ${c.colorTheme.badgeText}`}>
                              {c.category}
                            </span>
                            <div className="text-sm font-bold text-white font-heading mt-1">
                              {c.name}
                            </div>
                          </div>
                          <button
                            onClick={() => onRemoveFromCompare(c.id)}
                            className="text-slate-500 hover:text-rose-400 text-xs p-1"
                            title="Remove"
                          >
                            ✕
                          </button>
                        </div>
                      </th>
                    ))}
                    {comparedCareers.length < 3 && (
                      <th className="p-3 w-1/4 bg-slate-950/30 text-center rounded-r-xl border border-dashed border-slate-800">
                        <div className="text-xs text-slate-400 mb-2">Add another career</div>
                        <select
                          onChange={(e) => {
                            if (e.target.value) {
                              onAddToCompare(e.target.value);
                              e.target.value = '';
                            }
                          }}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-slate-200"
                        >
                          <option value="">Select career...</option>
                          {allCareers
                            .filter((c) => !comparedCareers.some((cc) => cc.id === c.id))
                            .map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.name} ({c.category})
                              </option>
                            ))}
                        </select>
                      </th>
                    )}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800 text-xs">
                  {/* Median Salary */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Median Salary</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 font-mono font-bold text-white">
                        {c.medianSalary}
                      </td>
                    ))}
                  </tr>

                  {/* Starting Salary */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Starting Entry Salary</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 font-mono text-slate-300">
                        {c.entrySalary}
                      </td>
                    ))}
                  </tr>

                  {/* Senior Salary */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Senior Staff Salary</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 font-mono text-emerald-400 font-semibold">
                        {c.seniorSalary}
                      </td>
                    ))}
                  </tr>

                  {/* Projected Job Growth */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">10-Yr Job Growth</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 text-emerald-400 font-semibold">
                        {c.growthRate}
                      </td>
                    ))}
                  </tr>

                  {/* Work-Life Balance */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Work-Life Balance</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 text-amber-300 font-semibold">
                        {c.workLifeBalance} / 5 Stars
                      </td>
                    ))}
                  </tr>

                  {/* Barrier to Entry */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Educational Barrier</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 text-slate-300">
                        {c.barrierToEntry}
                      </td>
                    ))}
                  </tr>

                  {/* Remote Flexibility */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Remote Flexibility</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 text-slate-300">
                        {c.remoteFriendly}
                      </td>
                    ))}
                  </tr>

                  {/* Top Role 1 */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Top Specialization</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3 text-slate-200">
                        <div className="font-semibold text-white">{c.topRoles[0]?.role}</div>
                        <div className="text-[11px] font-mono text-cyan-400">{c.topRoles[0]?.compensation}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Key Skills */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Core Technical Stack</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {c.keySkills.slice(0, 4).map((s) => (
                            <span key={s} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* View Details CTA */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-400">Full Blueprint</td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-3">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectCareer(c);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold hover:bg-cyan-500/30 transition-colors inline-flex items-center gap-1"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
