import React, { useState } from 'react';
import { Career } from '../types/career';
import {
  X,
  Bookmark,
  GitCompare,
  Briefcase,
  Play,
  Award,
  BookOpen,
  DollarSign,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  FileText,
  Star,
  Users,
  Compass,
  AlertCircle,
  Lightbulb,
  Video,
  GraduationCap,
} from 'lucide-react';

interface CareerModalProps {
  career: Career | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (careerId: string) => void;
  isCompared: boolean;
  onToggleCompare: (careerId: string) => void;
  onOpenRoadmapForCareer: (career: Career) => void;
  defaultTab?: 'overview' | 'curriculum' | 'specializations' | 'certifications' | 'journeyVideo';
}

export const CareerModal: React.FC<CareerModalProps> = ({
  career,
  onClose,
  isBookmarked,
  onToggleBookmark,
  isCompared,
  onToggleCompare,
  onOpenRoadmapForCareer,
  defaultTab = 'overview',
}) => {
  if (!career) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'specializations' | 'certifications' | 'journeyVideo'>(defaultTab);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [activeYearIndex, setActiveYearIndex] = useState<number>(0);
  const [showFullTranscript, setShowFullTranscript] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="relative p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${career.colorTheme.badgeBg} ${career.colorTheme.badgeText} border border-slate-700/60`}>
                  {career.category}
                </span>
                {career.badge && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {career.badge}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                  {career.growthRate}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                {career.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                {career.tagline}
              </p>
            </div>

            {/* Quick Actions & Close */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleCompare(career.id)}
                className={`p-2 rounded-xl text-xs font-medium border transition-colors ${
                  isCompared
                    ? 'bg-indigo-500 text-white border-indigo-400'
                    : 'bg-slate-800 text-slate-400 hover:text-white border-slate-700'
                }`}
                title={isCompared ? 'Remove from compare' : 'Add to compare'}
              >
                <GitCompare className="w-4 h-4" />
              </button>

              <button
                onClick={() => onToggleBookmark(career.id)}
                className={`p-2 rounded-xl text-xs font-medium border transition-colors ${
                  isBookmarked
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 text-slate-400 hover:text-amber-400 border-slate-700'
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark career'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto mt-6 pt-2 border-t border-slate-800/80 scrollbar-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'overview'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Overview & Stats
            </button>
            <button
              onClick={() => setActiveTab('journeyVideo')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'journeyVideo'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-cyan-400 hover:text-white hover:bg-slate-800 border border-cyan-500/30'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Degree Timeline & Video</span>
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'curriculum'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              4-Year Curriculum
            </button>
            <button
              onClick={() => setActiveTab('specializations')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'specializations'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Top Roles & Comp
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'certifications'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Certifications & Skills
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB: DEGREE TIMELINE & JOURNEY VIDEO */}
          {activeTab === 'journeyVideo' && (
            <div className="space-y-6">
              {/* Degree Duration & Academic Requirements Hero Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-indigo-950/40 border border-cyan-500/40 shadow-xl">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Degree Timeline & Educational Requirements</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-0.5">Degree Duration</div>
                    <div className="text-base font-extrabold text-white font-mono text-cyan-300">
                      {career.degreeDurationYears}
                    </div>
                    <div className="text-[10px] text-slate-500">{career.degreeDurationMonths} Months Total</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-0.5">Awarded Degree</div>
                    <div className="text-xs font-bold text-white line-clamp-2">
                      {career.degreeType}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-0.5">Semester & Credits Structure</div>
                    <div className="text-xs text-slate-300 font-mono line-clamp-2">
                      {career.briefVideo.degreeLengthSummary}
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Player & Real Speaker Journey */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c1322] border border-cyan-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[11px] font-mono font-semibold mb-1">
                      <Video className="w-3 h-3 text-cyan-400" />
                      <span>Degree Timeline & Career Journey Documentary</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                      {career.briefVideo.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1">
                      <span className="font-semibold text-slate-200">{career.briefVideo.speaker}</span>
                      <span>•</span>
                      <span className="text-cyan-400">{career.briefVideo.speakerRole}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-slate-400">
                        <Clock className="w-3 h-3" />
                        {career.briefVideo.duration}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${career.briefVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors shrink-0"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>

                {/* Embedded YouTube Video Player with 16:9 Aspect Ratio */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl mb-4">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${career.briefVideo.youtubeId}?rel=0&modestbranding=1`}
                    title={career.briefVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  {career.briefVideo.journeyOverview}
                </p>
              </div>

              {/* Interactive Year-by-Year Degree Academic Timeline */}
              {career.briefVideo.yearByYearTimeline && career.briefVideo.yearByYearTimeline.length > 0 && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-cyan-400" />
                        <span>Year-by-Year Degree Journey: Exactly How Long It Takes</span>
                      </h4>
                      <p className="text-xs text-slate-400">
                        Academic semesters, credit load, weed-out milestones, and mandatory summer internships per year
                      </p>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold self-start sm:self-auto">
                      {career.briefVideo.yearByYearTimeline.length} Academic Phases
                    </span>
                  </div>

                  {/* Year Selectors */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    {career.briefVideo.yearByYearTimeline.map((step, idx) => {
                      const isSelected = activeYearIndex === idx;
                      return (
                        <button
                          key={step.yearNumber}
                          onClick={() => setActiveYearIndex(idx)}
                          className={`text-left p-3 rounded-xl border transition-all ${
                            isSelected
                              ? 'bg-cyan-950/70 border-cyan-500 shadow-md shadow-cyan-950/30'
                              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                            <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                              Phase 0{step.yearNumber}
                            </span>
                            <span className="text-[10px] text-slate-500">{step.durationMonths}</span>
                          </div>
                          <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                            {step.yearName.split(':')[0]}
                          </div>
                          <div className="text-[10px] text-cyan-400/80 mt-1 truncate">
                            {step.academicCredits}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Year Detail Card */}
                  {career.briefVideo.yearByYearTimeline[activeYearIndex] && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-in fade-in duration-150">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                            Academic Stage Breakdown
                          </span>
                          <h5 className="text-sm sm:text-base font-bold text-white">
                            {career.briefVideo.yearByYearTimeline[activeYearIndex].yearName}
                          </h5>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                            {career.briefVideo.yearByYearTimeline[activeYearIndex].academicCredits}
                          </span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                            {career.briefVideo.yearByYearTimeline[activeYearIndex].durationMonths}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold text-slate-400 mb-2">Key Academic Milestones & Weed-Out Courses:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {career.briefVideo.yearByYearTimeline[activeYearIndex].keyMilestones.map((ms, idx) => (
                            <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
                              <span className="text-cyan-400 font-bold shrink-0">•</span>
                              <span>{ms}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs">
                        <div className="text-[11px] font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Summer & Practical Requirement:</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {career.briefVideo.yearByYearTimeline[activeYearIndex].summerRequirement}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 4-Stage Interactive Career Journey Stepper */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      The 4 Distinct Stages of This Career Journey
                    </h4>
                    <p className="text-xs text-slate-400">
                      Click any stage to examine the real daily focus, major hurdle, and breakthrough advice
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold hidden sm:block">
                    Stage {activeStageIndex + 1} of {career.briefVideo.journeyStages.length}
                  </span>
                </div>

                {/* Stage Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {career.briefVideo.journeyStages.map((stage, idx) => {
                    const isSelected = activeStageIndex === idx;
                    return (
                      <button
                        key={stage.stageNumber}
                        onClick={() => setActiveStageIndex(idx)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-cyan-950/60 border-cyan-500/70 shadow-lg shadow-cyan-950/30'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                          <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                            Stage 0{stage.stageNumber}
                          </span>
                        </div>
                        <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {stage.stageName}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                          {stage.timeframe}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Stage Detailed Breakdown Card */}
                {career.briefVideo.journeyStages[activeStageIndex] && (
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 animate-in fade-in duration-150">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                          Stage {career.briefVideo.journeyStages[activeStageIndex].stageNumber} Deep-Dive
                        </span>
                        <h4 className="text-base font-bold text-white font-heading">
                          {career.briefVideo.journeyStages[activeStageIndex].stageName}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 self-start sm:self-auto">
                        {career.briefVideo.journeyStages[activeStageIndex].timeframe}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* Daily Focus */}
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Day-to-Day Focus</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {career.briefVideo.journeyStages[activeStageIndex].focus}
                        </p>
                      </div>

                      {/* Key Hurdle */}
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1.5">
                          <AlertCircle className="w-4 h-4" />
                          <span>The Major Hurdle</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {career.briefVideo.journeyStages[activeStageIndex].keyHurdle}
                        </p>
                      </div>

                      {/* Breakthrough Advice */}
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1.5">
                          <Lightbulb className="w-4 h-4" />
                          <span>Breakthrough Advice</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {career.briefVideo.journeyStages[activeStageIndex].breakthroughAdvice}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Journey Chapters with Timestamps */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Video Timeline Chapters:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {career.briefVideo.chapters.map((ch) => (
                    <div
                      key={ch.time}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300"
                    >
                      <span>{ch.title}</span>
                      <span className="font-mono text-[10px] text-cyan-400 font-semibold shrink-0 ml-2">
                        {ch.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Journey Takeaways */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Career Journey Takeaways & Hard Truths:
                </h4>
                <div className="space-y-2">
                  {career.briefVideo.keyTakeaways.map((takeaway, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300"
                    >
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Monologue Transcript */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => setShowFullTranscript(!showFullTranscript)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{showFullTranscript ? 'Hide Personal Monologue' : 'Read Speaker’s Personal Monologue'}</span>
                </button>

                {showFullTranscript && (
                  <p className="text-xs text-slate-300 italic mt-2 p-4 rounded-xl bg-slate-950/80 border border-slate-800 leading-relaxed font-mono">
                    "{career.briefVideo.transcriptExcerpt}"
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Executive Summary */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Executive Field Summary
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                  {career.description}
                </p>
              </div>

              {/* Verified Salary Progression Ladder */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Verified Compensation Ladder
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Entry Level (0-2 Yrs)</div>
                    <div className="text-lg font-bold text-white font-mono mt-1">{career.entrySalary}</div>
                    <div className="text-[10px] text-slate-500 mt-1">Starting base + signing bonus</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40">
                    <div className="text-[11px] text-cyan-400 font-semibold">Median Experienced (3-7 Yrs)</div>
                    <div className="text-xl font-bold text-cyan-300 font-mono mt-1">{career.medianSalary}</div>
                    <div className="text-[10px] text-cyan-400/80 mt-1">Industry median baseline</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Senior Staff / Principal (8+ Yrs)</div>
                    <div className="text-lg font-bold text-emerald-400 font-mono mt-1">{career.seniorSalary}</div>
                    <div className="text-[10px] text-slate-500 mt-1">Base + equity + performance</div>
                  </div>
                </div>
              </div>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Work Arrangement</div>
                  <div className="text-xs font-bold text-white mt-1">{career.remoteFriendly}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Barrier to Entry</div>
                  <div className="text-xs font-bold text-white mt-1">{career.barrierToEntry}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Work-Life Balance</div>
                  <div className="text-xs font-bold text-amber-400 mt-1">{career.workLifeBalance} / 5 Rating</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400">10-Yr Job Growth</div>
                  <div className="text-xs font-bold text-emerald-400 mt-1">{career.growthRate}</div>
                </div>
              </div>

              {/* Day in the Life Highlights */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Day in the Life Highlights
                </h4>
                <div className="space-y-2">
                  {career.dayInTheLifeHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Personality Traits */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Ideal Candidate Traits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career.idealForTraits.map((trait) => (
                    <span
                      key={trait}
                      className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{trait}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 4-YEAR CURRICULUM */}
          {activeTab === 'curriculum' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Structured 4-Year Academic & Training Blueprint
                  </h4>
                  <p className="text-xs text-slate-400">
                    Key subjects, foundational milestones, and progression expectations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {career.coreCurriculum.map((phase, idx) => (
                  <div
                    key={phase.year}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-cyan-400 font-mono">
                          {phase.year}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          Phase 0{idx + 1}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-white mb-3">
                        {phase.focus}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Core Subjects & Labs:
                      </div>
                      <ul className="space-y-1.5">
                        {phase.keySubjects.map((subject) => (
                          <li key={subject} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TOP SPECIALIZATIONS */}
          {activeTab === 'specializations' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  High-Demand Specialization Roles
                </h4>
                <p className="text-xs text-slate-400">
                  Target job titles, market appetite, and compensation bands
                </p>
              </div>

              <div className="space-y-3">
                {career.topRoles.map((role) => (
                  <div
                    key={role.role}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="text-sm font-bold text-white font-heading">
                        {role.role}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
                          {role.compensation}
                        </span>
                        <span className="text-[11px] font-medium text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                          {role.demand}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATIONS & SKILLS */}
          {activeTab === 'certifications' && (
            <div className="space-y-6">
              {/* Certifications */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Industry-Recognized Certifications & Licensure
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {career.recommendedCertifications.map((cert) => (
                    <div
                      key={cert}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5"
                    >
                      <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-200">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Checklist */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Core Technical Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career.keySkills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Essential Soft Skills & Mindset
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career.softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Ready to chart your growth? Generate an interactive semester-by-semester milestone roadmap.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenRoadmapForCareer(career);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Open in Roadmap Builder</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
