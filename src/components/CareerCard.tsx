import React from 'react';
import { Career } from '../types/career';
import { Bookmark, GitCompare, ArrowRight, TrendingUp, DollarSign, Briefcase, Star, MapPin, Video, GraduationCap } from 'lucide-react';

interface CareerCardProps {
  career: Career;
  isBookmarked: boolean;
  onToggleBookmark: (careerId: string) => void;
  isCompared: boolean;
  onToggleCompare: (careerId: string) => void;
  onSelectCareer: (career: Career) => void;
  onOpenRoadmapForCareer: (career: Career) => void;
  onWatchJourney?: (career: Career) => void;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  career,
  isBookmarked,
  onToggleBookmark,
  isCompared,
  onToggleCompare,
  onSelectCareer,
  onOpenRoadmapForCareer,
  onWatchJourney,
}) => {
  return (
    <div className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between p-5 overflow-hidden">
      {/* Top subtle highlight line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header: Category & Top Actions */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${career.colorTheme.badgeBg} ${career.colorTheme.badgeText} border border-slate-700/60`}>
              {career.category}
            </span>
            {career.badge && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                {career.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {/* Compare Checkbox / Button */}
            <button
              onClick={() => onToggleCompare(career.id)}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                isCompared
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
              title={isCompared ? 'Remove from compare' : 'Add to compare'}
            >
              <GitCompare className="w-3.5 h-3.5" />
            </button>

            {/* Bookmark Star Button */}
            <button
              onClick={() => onToggleBookmark(career.id)}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                isBookmarked
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-800/80 text-slate-400 hover:text-amber-400 hover:bg-slate-700'
              }`}
              title={isBookmarked ? 'Saved to bookmarks' : 'Save career'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3
          onClick={() => onSelectCareer(career)}
          className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer font-heading leading-snug mb-1"
        >
          {career.name}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {career.tagline}
        </p>

        {/* Degree Duration & Timeline Banner */}
        <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-slate-950/70 border border-cyan-500/25 text-xs mb-3">
          <div className="flex items-center gap-1.5 text-cyan-300 font-semibold truncate">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">{career.degreeDurationYears}</span>
          </div>
          <span className="text-[10px] font-mono text-slate-300 shrink-0 bg-slate-800/90 px-1.5 py-0.5 rounded border border-slate-700">
            {career.degreeType.split('(')[1]?.replace(')', '') || 'Degree'}
          </span>
        </div>

        {/* Core Metrics Box */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-4">
          <div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-0.5">
              <DollarSign className="w-3 h-3 text-cyan-400" />
              <span>Median Salary</span>
            </div>
            <div className="text-sm font-bold text-white font-mono">{career.medianSalary}</div>
            <div className="text-[10px] text-slate-500">Entry: {career.entrySalary}</div>
          </div>

          <div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-0.5">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span>Job Outlook</span>
            </div>
            <div className="text-sm font-bold text-emerald-400">{career.growthRate}</div>
            <div className="text-[10px] text-slate-500">Peak: {career.seniorSalary}</div>
          </div>
        </div>

        {/* Quick Attributes: Remote, Balance, Barrier */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-[11px] text-slate-300">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/50">
            <MapPin className="w-3 h-3 text-cyan-400" />
            {career.remoteFriendly}
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/50" title={`Work-life balance rating ${career.workLifeBalance} out of 5`}>
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            Balance: {career.workLifeBalance}/5
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/50">
            Barrier: {career.barrierToEntry}
          </span>
        </div>

        {/* Skills Chips */}
        <div className="mb-4">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Key Competencies:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {career.keySkills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
              >
                {skill}
              </span>
            ))}
            {career.keySkills.length > 4 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded text-slate-400 bg-slate-800/50">
                +{career.keySkills.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
        <button
          onClick={() => onSelectCareer(career)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 font-semibold text-xs transition-colors"
        >
          <span>Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {onWatchJourney && (
          <button
            onClick={() => onWatchJourney(career)}
            className="flex items-center gap-1.5 py-2 px-2.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-colors"
            title="Watch degree timeline & career journey video"
          >
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Timeline Video</span>
          </button>
        )}

        <button
          onClick={() => onOpenRoadmapForCareer(career)}
          className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
          title="Open customizable career roadmap"
        >
          <Briefcase className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
