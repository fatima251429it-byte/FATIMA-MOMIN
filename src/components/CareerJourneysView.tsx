import React, { useState, useMemo } from 'react';
import { Career, CareerCategory } from '../types/career';
import { CATEGORIES_LIST } from '../data/careersData';
import {
  Video,
  Play,
  Clock,
  ExternalLink,
  Compass,
  ArrowRight,
  Search,
  Sparkles,
  Users,
  CheckCircle2,
  DollarSign,
  Briefcase,
  GraduationCap,
  Calendar,
} from 'lucide-react';

interface CareerJourneysViewProps {
  careers: Career[];
  onWatchJourney: (career: Career) => void;
  onOpenRoadmap: (career: Career) => void;
}

export const CareerJourneysView: React.FC<CareerJourneysViewProps> = ({
  careers,
  onWatchJourney,
  onOpenRoadmap,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory>('All');
  const [selectedDuration, setSelectedDuration] = useState<'All' | '4-Year' | '5-6-Year' | '7+-Year'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCareers = useMemo(() => {
    return careers.filter((c) => {
      if (selectedCategory !== 'All' && c.category !== selectedCategory) {
        return false;
      }
      if (selectedDuration === '4-Year' && c.degreeDurationMonths > 48) {
        return false;
      }
      if (selectedDuration === '5-6-Year' && (c.degreeDurationMonths <= 48 || c.degreeDurationMonths > 72)) {
        return false;
      }
      if (selectedDuration === '7+-Year' && c.degreeDurationMonths <= 72) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = c.briefVideo.title.toLowerCase().includes(q);
        const matchSpeaker = c.briefVideo.speaker.toLowerCase().includes(q);
        const matchCareer = c.name.toLowerCase().includes(q);
        const matchOverview = c.briefVideo.journeyOverview.toLowerCase().includes(q);
        const matchDegree = c.degreeType.toLowerCase().includes(q) || c.degreeDurationYears.toLowerCase().includes(q);
        if (!matchTitle && !matchSpeaker && !matchCareer && !matchOverview && !matchDegree) {
          return false;
        }
      }
      return true;
    });
  }, [careers, selectedCategory, selectedDuration, searchQuery]);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0c1424] border border-cyan-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Degree Journey & Timeline Video Library • Exactly How Long Each Takes</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            How Long Does Each Degree Take?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Forget abstract explanations and generic tutorials. Watch comprehensive video documentaries detailing the exact academic journey, how many years and semesters each degree demands (from 4-year Bachelor's to 7-year Law and 11-15 year Medical residencies), weed-out classes, summer internships, and the real pathway to career launch.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              24 Degree Timelines
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Semester & Credit Breakdowns
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              Year-by-Year Academic Roadmaps
            </span>
          </div>
        </div>
      </div>

      {/* Filter Controls: Duration Pills & Category Pills & Search */}
      <div className="space-y-4">
        {/* Degree Duration Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Filter by Degree Duration:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'All', label: 'All Lengths (24)' },
              { id: '4-Year', label: '🎓 4-Year Bachelor\'s (8 Semesters)' },
              { id: '5-6-Year', label: '🎓 5–6 Years (Master\'s / Dual)' },
              { id: '7+-Year', label: '🎓 7+ Years (Doctor / Law / PhD)' },
            ].map((d) => {
              const isSelected = selectedDuration === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDuration(d.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Pills */}
        <div className="overflow-x-auto pb-2 scrollbar-none">
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

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search degree timelines by career, degree title, or speaker..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-9 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
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
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((c) => (
          <div
            key={c.id}
            className="group relative rounded-2xl bg-slate-900/85 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Simulated Video Thumbnail with YouTube Aspect Ratio and Play Overlay */}
              <div
                onClick={() => onWatchJourney(c)}
                className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center border-b border-slate-800"
              >
                {/* Background ambient gradient with video frame simulation */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-blue-950/40" />

                {/* Speaker avatar / badge pill */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[11px] font-medium text-slate-200">
                  <span className={`w-2 h-2 rounded-full ${c.colorTheme.badgeBg}`} />
                  <span>{c.category}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 rounded bg-slate-950/90 text-[10px] font-mono text-cyan-400 border border-slate-700">
                  <Clock className="w-3 h-3" />
                  <span>{c.briefVideo.duration}</span>
                </div>

                {/* Center Animated Play Button */}
                <div className="relative z-20 w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-400/30 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Bottom title preview */}
                <div className="absolute bottom-2.5 left-3 right-3 z-20">
                  <div className="text-[11px] text-cyan-300 font-semibold font-mono">
                    {c.briefVideo.speaker}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {c.briefVideo.speakerRole}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                {/* Prominent Degree Duration Banner */}
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950/90 border border-cyan-500/30 text-xs">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-semibold truncate">
                    <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono">{c.degreeDurationYears}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono truncate max-w-[130px]" title={c.degreeType}>
                    {c.degreeType.split('(')[1]?.replace(')', '') || 'Degree'}
                  </span>
                </div>

                <h3
                  onClick={() => onWatchJourney(c)}
                  className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer font-heading leading-snug line-clamp-2"
                >
                  {c.briefVideo.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {c.briefVideo.degreeLengthSummary}
                </p>

                {/* Academic Year Phases Pill List */}
                {c.briefVideo.yearByYearTimeline && c.briefVideo.yearByYearTimeline.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Degree Academic Milestones:</span>
                      <span className="text-cyan-400 font-mono text-[10px]">{c.briefVideo.yearByYearTimeline.length} Phases</span>
                    </div>
                    <div className="space-y-1">
                      {c.briefVideo.yearByYearTimeline.slice(0, 3).map((step) => (
                        <div
                          key={step.yearNumber}
                          className="text-[11px] text-slate-300 flex items-center justify-between bg-slate-950/60 p-1.5 rounded-lg border border-slate-800/80"
                        >
                          <span className="truncate">{step.yearName.split(':')[0]}</span>
                          <span className="text-[10px] text-cyan-400/90 font-mono shrink-0 ml-1">{step.durationMonths}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comp & Career Metrics */}
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80 text-slate-400">
                  <div className="flex items-center gap-1 font-mono text-white font-semibold">
                    <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{c.medianSalary}</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">{c.growthRate}</span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center gap-2">
              <button
                onClick={() => onWatchJourney(c)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 font-semibold text-xs transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Degree Journey Video</span>
              </button>

              <button
                onClick={() => onOpenRoadmap(c)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700 transition-colors"
                title="Open career roadmap"
              >
                <Briefcase className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
