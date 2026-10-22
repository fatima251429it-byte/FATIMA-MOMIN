import React from 'react';
import { Compass, HelpCircle, ArrowRight, DollarSign, TrendingUp, Sparkles, Video, BookOpen, GraduationCap } from 'lucide-react';

interface HeroSectionProps {
  onStartQuiz: () => void;
  onExploreCareers: () => void;
  onWatchJourneys?: () => void;
  onSearchTag: (tag: string) => void;
  totalCareers: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartQuiz,
  onExploreCareers,
  onWatchJourneys,
  onSearchTag,
  totalCareers,
}) => {
  const popularTags = [
    'AI & Deep Learning',
    'Silicon Hardware',
    'Clinical Medicine',
    'Quantitative Finance',
    'Robotics',
    'Cybersecurity',
    'Product Design',
    'Remote',
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-12 border-b border-slate-800/80 bg-gradient-to-b from-[#0e1422] to-[#0b0f17]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-inner">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Exact Degree Lengths & Roadmaps • {totalCareers} Comprehensive Paths</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-heading">
            Discover Your Career Path &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Degree Timeline
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            See exactly how long each degree takes (4-year B.S., 7-year Law, or 11-15 year Medical residency), year-by-year academic semesters, verified salary ladders, and video documentaries detailing the real student-to-professional journey.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <HelpCircle className="w-4 h-4 text-slate-950" />
              <span>Take 2-Min Career Match Quiz</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            {onWatchJourneys && (
              <button
                onClick={onWatchJourneys}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-500/40 font-semibold text-sm transition-all"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Degree Journeys & Timelines</span>
              </button>
            )}

            <button
              onClick={onExploreCareers}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all hover:border-cyan-500/50"
            >
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Browse All {totalCareers} Careers</span>
            </button>
          </div>

          {/* Popular Tag Chips */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Popular quick filters:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchTag(tag)}
                className="px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Feature Value Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">$88k – $235k+</div>
              <div className="text-[11px] text-slate-400">Verified Salaries</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">4-Year Curricula</div>
              <div className="text-[11px] text-slate-400">Semester Breakdowns</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Top 3 Specializations</div>
              <div className="text-[11px] text-slate-400">With Real Comp</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Journey Videos</div>
              <div className="text-[11px] text-slate-400">Real Practitioner Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
