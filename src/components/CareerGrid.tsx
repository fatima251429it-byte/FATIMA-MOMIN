import React, { useState, useMemo } from 'react';
import { Career, CareerCategory } from '../types/career';
import { CATEGORIES_LIST } from '../data/careersData';
import { CareerCard } from './CareerCard';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, LayoutGrid, List, RotateCcw, Compass, ArrowRight } from 'lucide-react';

interface CareerGridProps {
  careers: Career[];
  bookmarkedIds: string[];
  onToggleBookmark: (careerId: string) => void;
  comparedIds: string[];
  onToggleCompare: (careerId: string) => void;
  onSelectCareer: (career: Career) => void;
  onOpenRoadmapForCareer: (career: Career) => void;
  onWatchJourney: (career: Career) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const CareerGrid: React.FC<CareerGridProps> = ({
  careers,
  bookmarkedIds,
  onToggleBookmark,
  comparedIds,
  onToggleCompare,
  onSelectCareer,
  onOpenRoadmapForCareer,
  onWatchJourney,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory>('All');
  const [sortBy, setSortBy] = useState<'salary-desc' | 'growth-desc' | 'balance-desc' | 'name-asc'>('salary-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  // Quick filters
  const [filterRemoteOnly, setFilterRemoteOnly] = useState<boolean>(false);
  const [filterHighDemand, setFilterHighDemand] = useState<boolean>(false);

  // Filter & Sort Logic
  const filteredAndSortedCareers = useMemo(() => {
    return careers
      .filter((career) => {
        // Category filter
        if (selectedCategory !== 'All' && career.category !== selectedCategory) {
          return false;
        }

        // Search query filter (matches name, tagline, description, key skills, top roles)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = career.name.toLowerCase().includes(q);
          const matchTagline = career.tagline.toLowerCase().includes(q);
          const matchSkills = career.keySkills.some(s => s.toLowerCase().includes(q));
          const matchCategory = career.category.toLowerCase().includes(q);
          const matchRoles = career.topRoles.some(r => r.role.toLowerCase().includes(q));
          if (!matchName && !matchTagline && !matchSkills && !matchCategory && !matchRoles) {
            return false;
          }
        }

        // Remote only filter
        if (filterRemoteOnly && career.remoteFriendly !== 'Full Remote') {
          return false;
        }

        // High demand filter (> 15% growth or Surging badge)
        if (filterHighDemand && career.growthPercentage < 15) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'salary-desc') return b.salaryNumber - a.salaryNumber;
        if (sortBy === 'growth-desc') return b.growthPercentage - a.growthPercentage;
        if (sortBy === 'balance-desc') return b.workLifeBalance - a.workLifeBalance;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [careers, selectedCategory, searchQuery, filterRemoteOnly, filterHighDemand, sortBy]);

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setFilterRemoteOnly(false);
    setFilterHighDemand(false);
    setSortBy('salary-desc');
  };

  return (
    <section id="careers-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Pills Scroller */}
      <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {CATEGORIES_LIST.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-slate-950/30 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Bar: Search Input, Quick Filters, Sort & View Mode */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by career, technical skill (Python, CAD, CBT), or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-9 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Filter Chips & Sorters */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Remote Filter Pill */}
            <button
              onClick={() => setFilterRemoteOnly(!filterRemoteOnly)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                filterRemoteOnly
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              Remote Only
            </button>

            {/* High Demand Pill */}
            <button
              onClick={() => setFilterHighDemand(!filterHighDemand)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                filterHighDemand
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              Surging Growth (&gt;15%)
            </button>

            {/* Sort Dropdown */}
            <div className="relative flex items-center bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 mr-2" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-300 text-xs focus:outline-none cursor-pointer pr-2"
              >
                <option value="salary-desc" className="bg-slate-900 text-slate-200">Highest Salary</option>
                <option value="growth-desc" className="bg-slate-900 text-slate-200">Fastest Growth</option>
                <option value="balance-desc" className="bg-slate-900 text-slate-200">Best Work-Life Balance</option>
                <option value="name-asc" className="bg-slate-900 text-slate-200">Alphabetical (A-Z)</option>
              </select>
            </div>

            {/* View Mode Toggle: Grid vs Table */}
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'table' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
                title="Compact Comparison Table"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filters Summary */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/60">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-white">{filteredAndSortedCareers.length}</strong> of{' '}
              {careers.length} careers
            </span>
            {(selectedCategory !== 'All' || searchQuery || filterRemoteOnly || filterHighDemand) && (
              <button
                onClick={resetAllFilters}
                className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 ml-2 font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
          <div className="text-[11px] text-slate-500 hidden sm:block">
            Click any career card to view 4-year curriculum, salary ladder & video brief
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredAndSortedCareers.length === 0 ? (
        <div className="py-16 text-center bg-slate-900/40 border border-slate-800 rounded-2xl max-w-lg mx-auto p-8">
          <Compass className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white mb-1">No careers found</h3>
          <p className="text-xs text-slate-400 mb-4">
            No career matches your current search criteria. Try removing filters or searching a different term.
          </p>
          <button
            onClick={resetAllFilters}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* Grid Mode */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedCareers.map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              isBookmarked={bookmarkedIds.includes(career.id)}
              onToggleBookmark={onToggleBookmark}
              isCompared={comparedIds.includes(career.id)}
              onToggleCompare={onToggleCompare}
              onSelectCareer={onSelectCareer}
              onOpenRoadmapForCareer={onOpenRoadmapForCareer}
              onWatchJourney={onWatchJourney}
            />
          ))}
        </div>
      ) : (
        /* Compact Comparison Table Mode */
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Career Discipline</th>
                <th className="py-3.5 px-3">Category</th>
                <th className="py-3.5 px-3">Median Salary</th>
                <th className="py-3.5 px-3">Growth Outlook</th>
                <th className="py-3.5 px-3">Barrier</th>
                <th className="py-3.5 px-3">Work-Life</th>
                <th className="py-3.5 px-3">Remote</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredAndSortedCareers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-3.5 px-4">
                    <div
                      onClick={() => onSelectCareer(c)}
                      className="font-bold text-white hover:text-cyan-300 cursor-pointer font-heading"
                    >
                      {c.name}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">{c.tagline}</div>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${c.colorTheme.badgeBg} ${c.colorTheme.badgeText}`}>
                      {c.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 font-mono font-semibold text-white">
                    {c.medianSalary}
                  </td>
                  <td className="py-3.5 px-3 text-emerald-400 font-medium">
                    {c.growthRate}
                  </td>
                  <td className="py-3.5 px-3 text-slate-400">{c.barrierToEntry}</td>
                  <td className="py-3.5 px-3">{c.workLifeBalance} / 5</td>
                  <td className="py-3.5 px-3 text-slate-300">{c.remoteFriendly}</td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onWatchJourney(c)}
                        className="px-2.5 py-1.5 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-colors"
                        title="Watch full career journey video"
                      >
                        Journey
                      </button>
                      <button
                        onClick={() => onSelectCareer(c)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 font-semibold text-xs transition-colors inline-flex items-center gap-1"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
