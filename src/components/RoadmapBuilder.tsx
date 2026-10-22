import React, { useState, useEffect } from 'react';
import { Career, Milestone, CustomRoadmap } from '../types/career';
import {
  Briefcase,
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Download,
  Copy,
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Check,
} from 'lucide-react';

interface RoadmapBuilderProps {
  careers: Career[];
  initialCareer?: Career | null;
  onSelectCareer: (career: Career) => void;
}

export const RoadmapBuilder: React.FC<RoadmapBuilderProps> = ({
  careers,
  initialCareer,
  onSelectCareer,
}) => {
  const [selectedCareerId, setSelectedCareerId] = useState<string>(
    initialCareer ? initialCareer.id : careers[0]?.id || 'computer-engineering'
  );
  const [customCareerName, setCustomCareerName] = useState<string>('');
  const [currentLevel, setCurrentLevel] = useState<string>('College Undergrad');
  const [timeframeMonths, setTimeframeMonths] = useState<number>(24);
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Active career object
  const activeCareer = careers.find((c) => c.id === selectedCareerId);

  // Milestones state
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  // Generate initial milestones based on activeCareer
  const generateMilestones = (career: Career, timeframe: number, level: string): Milestone[] => {
    const isAccelerated = timeframe <= 12;
    return [
      {
        id: 'm1',
        title: `Foundations: Master core fundamentals of ${career.name}`,
        category: 'Core Curriculum',
        timeframe: isAccelerated ? 'Month 1 - 3' : 'Year 1: Foundations',
        status: 'completed',
        description: `Complete introductory coursework covering ${career.coreCurriculum[0]?.keySubjects.slice(0, 3).join(', ')}.`,
        skillsGained: career.keySkills.slice(0, 3),
      },
      {
        id: 'm2',
        title: `Applied Systems: Build and document 2 end-to-end projects`,
        category: 'Hands-on Portfolio',
        timeframe: isAccelerated ? 'Month 4 - 6' : 'Year 2: Core Architecture',
        status: 'in_progress',
        description: `Construct production-grade prototypes demonstrating ${career.keySkills[3] || 'applied system design'}. Publish full GitHub repository and architectural diagrams.`,
        skillsGained: [career.keySkills[3] || 'System Design', career.keySkills[4] || 'Architecture'],
      },
      {
        id: 'm3',
        title: `Industry Validation: Earn top credential & specialized certification`,
        category: 'Licensure & Credentials',
        timeframe: isAccelerated ? 'Month 7 - 9' : 'Year 3: Specialization',
        status: 'pending',
        description: `Prepare for and pass ${career.recommendedCertifications[0] || 'industry-recognized certifications'}. Join professional networks.`,
        skillsGained: ['Industry Verification', 'Standards Compliance'],
      },
      {
        id: 'm4',
        title: `Launch: Target high-tier roles & conduct portfolio reviews`,
        category: 'Career Placement',
        timeframe: isAccelerated ? 'Month 10 - 12' : 'Year 4: Capstone & Placement',
        status: 'pending',
        description: `Interview for target roles such as ${career.topRoles[0]?.role || 'Specialist'}. Optimize technical resume and secure mentorship.`,
        skillsGained: ['Technical Interviewing', 'System Design Defense'],
      },
    ];
  };

  useEffect(() => {
    if (activeCareer) {
      setMilestones(generateMilestones(activeCareer, timeframeMonths, currentLevel));
    }
  }, [selectedCareerId, timeframeMonths, currentLevel]);

  // Toggle milestone status
  const toggleMilestoneStatus = (id: string) => {
    setMilestones((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextStatus =
            m.status === 'completed'
              ? 'pending'
              : m.status === 'pending'
              ? 'in_progress'
              : 'completed';
          return { ...m, status: nextStatus };
        }
        return m;
      })
    );
  };

  // Delete milestone
  const deleteMilestone = (id: string) => {
    setMilestones((prev) => prev.filter((m) => m.id !== id));
  };

  // Add new custom milestone
  const addMilestone = () => {
    const newId = `m-${Date.now()}`;
    const newMilestone: Milestone = {
      id: newId,
      title: 'New Custom Growth Milestone',
      category: 'Self-Directed Elective',
      timeframe: 'Custom Milestone',
      status: 'pending',
      description: 'Add your own target project, hackathon, research paper or internship goal.',
      skillsGained: ['Custom Focus'],
    };
    setMilestones([...milestones, newMilestone]);
  };

  // AI Roadmap Generation (Server route or smart intelligent fallback)
  const handleGenerateAiRoadmap = async () => {
    setIsGeneratingAi(true);
    try {
      const careerTitle = customCareerName || activeCareer?.name || 'Software Engineering';
      const res = await fetch('/api/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerName: careerTitle,
          currentLevel,
          timeframeMonths,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.milestones && data.milestones.length > 0) {
          setMilestones(data.milestones);
          setIsGeneratingAi(false);
          return;
        }
      }
    } catch (err) {
      console.warn('AI endpoint not reachable, generating comprehensive local roadmap:', err);
    }

    // High quality generator fallback
    setTimeout(() => {
      if (activeCareer) {
        setMilestones(generateMilestones(activeCareer, timeframeMonths, currentLevel));
      }
      setIsGeneratingAi(false);
    }, 800);
  };

  // Download JSON
  const handleDownloadJson = () => {
    const roadmapData: CustomRoadmap = {
      careerName: customCareerName || activeCareer?.name || 'Career Roadmap',
      currentLevel,
      timeframeMonths,
      executiveSummary: `Personalized ${timeframeMonths}-month roadmap for ${currentLevel} transitioning into ${activeCareer?.name}.`,
      milestones,
    };
    const blob = new Blob([JSON.stringify(roadmapData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `career_lens_${(customCareerName || activeCareer?.id || 'roadmap')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy Markdown
  const handleCopyMarkdown = () => {
    const careerName = customCareerName || activeCareer?.name || 'Career Roadmap';
    let md = `# Career Roadmap: ${careerName}\n\n`;
    md += `**Starting Level:** ${currentLevel}\n`;
    md += `**Target Timeframe:** ${timeframeMonths} Months\n\n`;
    md += `## Milestones Checklist\n\n`;

    milestones.forEach((m, idx) => {
      const check = m.status === 'completed' ? '[x]' : '[ ]';
      md += `${idx + 1}. ${check} **${m.title}** (${m.timeframe})\n`;
      md += `   - *Category:* ${m.category}\n`;
      md += `   - *Description:* ${m.description}\n`;
      md += `   - *Skills Gained:* ${m.skillsGained.join(', ')}\n\n`;
    });

    navigator.clipboard.writeText(md);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  // Calculate progress
  const completedCount = milestones.filter((m) => m.status === 'completed').length;
  const progressPercent = milestones.length > 0 ? Math.round((completedCount / milestones.length) * 100) : 0;

  return (
    <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold mb-2">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Growth Mapping</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Custom Career Roadmap Builder
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Select any discipline, configure your timeline and background, and track your milestone progress.
        </p>
      </div>

      {/* Control Panel Grid */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl mb-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Target Career Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Target Career Discipline
            </label>
            <select
              value={selectedCareerId}
              onChange={(e) => {
                setSelectedCareerId(e.target.value);
                setCustomCareerName('');
              }}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
            >
              {careers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.category})
                </option>
              ))}
            </select>
          </div>

          {/* Current Starting Level */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Your Current Starting Level
            </label>
            <select
              value={currentLevel}
              onChange={(e) => setCurrentLevel(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="High School / Total Beginner">High School / Total Beginner</option>
              <option value="College Undergrad">College Undergrad (Year 1-3)</option>
              <option value="Career Switcher / Self-Taught">Career Switcher / Self-Taught</option>
              <option value="Experienced Professional">Experienced Professional / Upskilling</option>
            </select>
          </div>

          {/* Timeframe */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Target Completion Timeframe
            </label>
            <select
              value={timeframeMonths}
              onChange={(e) => setTimeframeMonths(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
            >
              <option value={6}>6 Months (Intensive Sprint)</option>
              <option value={12}>12 Months (1-Year Accelerated)</option>
              <option value={24}>24 Months (2-Year Deep Mastery)</option>
              <option value={48}>48 Months (4-Year Complete Degree)</option>
            </select>
          </div>
        </div>

        {/* Generate / Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={handleGenerateAiRoadmap}
              disabled={isGeneratingAi}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isGeneratingAi ? 'Regenerating Roadmap...' : 'Regenerate Milestones'}</span>
            </button>

            <button
              onClick={addMilestone}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Goal</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 font-medium text-xs border border-slate-800 transition-colors"
              title="Copy as Markdown text"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadJson}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 font-medium text-xs border border-slate-800 transition-colors"
              title="Download JSON file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Metric Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold text-white flex items-center gap-2">
            <span>Milestone Completion Progress:</span>
            <span className="text-cyan-400 font-mono">
              {completedCount} of {milestones.length} Completed ({progressPercent}%)
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            Click any milestone icon to toggle between Pending, In Progress, and Completed
          </div>
        </div>

        <div className="w-full sm:w-48 bg-slate-800 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Milestones List */}
      <div className="space-y-4">
        {milestones.map((m, idx) => {
          const isDone = m.status === 'completed';
          const isInProgress = m.status === 'in_progress';

          return (
            <div
              key={m.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                isDone
                  ? 'bg-slate-950/70 border-emerald-500/40 text-slate-300'
                  : isInProgress
                  ? 'bg-cyan-950/30 border-cyan-500/50 text-white shadow-md shadow-cyan-950/20'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-start gap-3.5 flex-1">
                {/* Status Toggle Button */}
                <button
                  onClick={() => toggleMilestoneStatus(m.id)}
                  className="mt-0.5 shrink-0 transition-transform active:scale-90"
                  title="Click to toggle status"
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                  ) : isInProgress ? (
                    <div className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                  ) : (
                    <Circle className="w-5 h-5 text-slate-600 hover:text-slate-400" />
                  )}
                </button>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Step {idx + 1} • {m.timeframe}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                      {m.category}
                    </span>
                    {isDone && (
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded">
                        Completed
                      </span>
                    )}
                    {isInProgress && (
                      <span className="text-[10px] font-semibold text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded">
                        In Progress
                      </span>
                    )}
                  </div>

                  <h4 className={`text-sm font-bold font-heading mb-1 ${isDone ? 'line-through text-slate-400' : 'text-white'}`}>
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {m.description}
                  </p>

                  {/* Skills Gained Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">Competencies:</span>
                    {m.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Delete Milestone */}
              <button
                onClick={() => deleteMilestone(m.id)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 self-end sm:self-start transition-colors"
                title="Remove milestone"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
