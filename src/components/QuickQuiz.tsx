import React, { useState } from 'react';
import { Career } from '../types/career';
import { QUIZ_QUESTIONS } from '../data/careersData';
import {
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Star,
  Award,
  Code,
  Cpu,
  Stethoscope,
  TrendingUp,
  Palette,
  Laptop,
  FlaskConical,
  Building2,
  Brain,
  HeartHandshake,
  Wrench,
  Target,
  Zap,
  GraduationCap,
} from 'lucide-react';

interface QuickQuizProps {
  careers: Career[];
  onSelectCareer: (career: Career) => void;
  onOpenRoadmapForCareer: (career: Career) => void;
}

export const QuickQuiz: React.FC<QuickQuizProps> = ({
  careers,
  onSelectCareer,
  onOpenRoadmapForCareer,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Icon mapping helper
  const renderOptionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-cyan-400" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-teal-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-emerald-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Target': return <Target className="w-5 h-5 text-indigo-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers([]);
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Compute matched careers & persona
  const results = React.useMemo(() => {
    if (!isCompleted) return null;

    // Tally career points based on selected answers
    const scores: Record<string, number> = {};
    careers.forEach((c) => {
      scores[c.id] = 10; // baseline
    });

    selectedAnswers.forEach((optIdx, qIdx) => {
      const q = QUIZ_QUESTIONS[qIdx];
      const opt = q?.options[optIdx];
      if (opt) {
        // Boost careers in category
        careers.forEach((c) => {
          if (c.category === opt.category) {
            scores[c.id] = (scores[c.id] || 0) + 25;
          }
        });
        // Boost specific careers listed in option
        opt.careers?.forEach((cId) => {
          if (scores[cId] !== undefined) {
            scores[cId] += 40;
          }
        });
      }
    });

    // Sort careers by score
    const sorted = [...careers].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));
    const topMatches = sorted.slice(0, 3).map((c, idx) => ({
      career: c,
      matchPercentage: Math.min(98 - idx * 6, 98),
    }));

    // Persona title & executive summary
    const topCategory = topMatches[0]?.career.category || 'Engineering';
    let personaTitle = 'Systems & Technical Strategist';
    let executiveSummary = 'Your profile demonstrates strong analytical problem solving, logical synthesis, and a desire to build high-leverage infrastructure.';

    if (topCategory === 'Healthcare & Medicine' || topCategory === 'Science & Bio') {
      personaTitle = 'Biomedical & Clinical Innovator';
      executiveSummary = 'You possess a rare combination of scientific curiosity, deep empathy for human well-being, and methodical analytical rigor.';
    } else if (topCategory === 'Finance & Business' || topCategory === 'Law & Policy') {
      personaTitle = 'Strategic Capital & Systems Architect';
      executiveSummary = 'You excel in navigating complex multi-variable systems, risk calculus, strategic leverage, and high-impact negotiation.';
    } else if (topCategory === 'Data & AI') {
      personaTitle = 'Algorithmic Intelligence Specialist';
      executiveSummary = 'You thrive at the intersection of mathematical reasoning, probabilistic thinking, and cutting-edge artificial intelligence.';
    } else if (topCategory === 'Design & Creative') {
      personaTitle = 'Human-Centered Experience Architect';
      executiveSummary = 'You blend aesthetic intuition with cognitive psychology and user empathy to create frictionless, delightful software experiences.';
    }

    return {
      personaTitle,
      executiveSummary,
      topMatches,
    };
  }, [isCompleted, selectedAnswers, careers]);

  const currentQ = QUIZ_QUESTIONS[currentStep];

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {!isCompleted ? (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
            <span className="font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
            </span>
            <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-2 mb-8 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Title & Subtitle */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
              {currentQ.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {currentQ.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswers[currentStep] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-500/80 shadow-lg shadow-cyan-950/30'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-950 text-slate-300'
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                    {renderOptionIcon(opt.icon)}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-white block mb-1">
                      {opt.label}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Field: {opt.category}
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                      isSelected ? 'border-cyan-400 bg-cyan-400 text-slate-950' : 'border-slate-700'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 fill-current" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <span className="text-xs text-slate-500">
              Click an option to proceed automatically
            </span>
          </div>
        </div>
      ) : (
        /* RESULTS SCREEN */
        results && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Persona Overview Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0c1424] border border-cyan-500/40 shadow-2xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Diagnostic Assessment Complete</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {results.personaTitle}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {results.executiveSummary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            </div>

            {/* Top 3 Matching Careers */}
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white font-heading">
                  Your Top 3 Recommended Career Matches
                </h3>
                <p className="text-xs text-slate-400">
                  Scored and ranked based on your work style, intellectual superpowers, and goals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {results.topMatches.map(({ career, matchPercentage }, idx) => (
                  <div
                    key={career.id}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Match Badge & Rank */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                          #{idx + 1} Best Fit
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {matchPercentage}% Match
                        </span>
                      </div>

                      <h4
                        onClick={() => onSelectCareer(career)}
                        className="text-base font-bold text-white hover:text-cyan-300 cursor-pointer font-heading mb-1"
                      >
                        {career.name}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                        {career.tagline}
                      </p>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 mb-4 space-y-1 text-xs">
                        <div className="flex justify-between text-slate-400">
                          <span>Median Comp:</span>
                          <span className="font-mono text-white font-bold">{career.medianSalary}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>10-Yr Outlook:</span>
                          <span className="text-emerald-400 font-medium">{career.growthRate}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Balance:</span>
                          <span className="text-amber-400 font-medium">{career.workLifeBalance} / 5</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 space-y-2">
                      <button
                        onClick={() => onSelectCareer(career)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-semibold text-xs transition-colors"
                      >
                        <span>View 4-Yr Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenRoadmapForCareer(career)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700 transition-colors"
                      >
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Build Custom Roadmap</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
