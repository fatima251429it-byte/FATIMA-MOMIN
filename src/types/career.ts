export type CareerCategory =
  | 'All'
  | 'Engineering'
  | 'Software & IT'
  | 'Data & AI'
  | 'Healthcare & Medicine'
  | 'Finance & Business'
  | 'Design & Creative'
  | 'Science & Bio'
  | 'Law & Policy';

export interface CurriculumYear {
  year: string;
  focus: string;
  keySubjects: string[];
}

export interface SpecializedRole {
  role: string;
  compensation: string;
  demand: string;
  description: string;
}

export interface VideoChapter {
  time: string;
  title: string;
}

export interface JourneyStage {
  stageNumber: number;
  stageName: string;
  timeframe: string;
  focus: string;
  keyHurdle: string;
  breakthroughAdvice: string;
}

export interface YearTimelineStep {
  yearNumber: number;
  yearName: string;
  durationMonths: string;
  academicCredits: string;
  keyMilestones: string[];
  summerRequirement: string;
}

export interface CareerBriefVideo {
  id: string;
  title: string;
  youtubeId: string;
  speaker: string;
  speakerRole: string;
  duration: string;
  degreeLengthSummary: string;
  journeyOverview: string;
  yearByYearTimeline: YearTimelineStep[];
  journeyStages: JourneyStage[];
  chapters: VideoChapter[];
  keyTakeaways: string[];
  transcriptExcerpt: string;
}

export interface Career {
  id: string;
  name: string;
  category: CareerCategory;
  tagline: string;
  description: string;
  badge?: string;
  degreeType: string;
  degreeDurationYears: string;
  degreeDurationMonths: number;
  growthRate: string;
  growthPercentage: number;
  medianSalary: string;
  entrySalary: string;
  seniorSalary: string;
  salaryNumber: number; // For sorting
  barrierToEntry: 'Moderate' | 'High' | 'Very High';
  workLifeBalance: number; // 1 to 5
  remoteFriendly: 'Full Remote' | 'Hybrid' | 'On-Site';
  colorTheme: {
    accent: string;
    border: string;
    bgGlow: string;
    badgeBg: string;
    badgeText: string;
  };
  keySkills: string[];
  softSkills: string[];
  topRoles: SpecializedRole[];
  coreCurriculum: CurriculumYear[];
  recommendedCertifications: string[];
  dayInTheLifeHighlights: string[];
  briefVideo: CareerBriefVideo;
  idealForTraits: string[];
}

export interface Milestone {
  id: string;
  title: string;
  category: string;
  timeframe: string;
  status: 'pending' | 'in_progress' | 'completed';
  description: string;
  skillsGained: string[];
}

export interface CustomRoadmap {
  careerName: string;
  currentLevel: string;
  timeframeMonths: number;
  executiveSummary: string;
  milestones: Milestone[];
}

export interface QuizAnswer {
  categoryFit: Record<CareerCategory, number>;
  recommendedCareerIds: string[];
}
