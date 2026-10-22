import React, { useState, useEffect } from 'react';
import { CAREERS_DATABASE } from './data/careersData';
import { Career } from './types/career';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CareerGrid } from './components/CareerGrid';
import { CareerModal } from './components/CareerModal';
import { CompareModal } from './components/CompareModal';
import { QuickQuiz } from './components/QuickQuiz';
import { RoadmapBuilder } from './components/RoadmapBuilder';
import { MarketTrends } from './components/MarketTrends';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { AiAdvisorModal } from './components/AiAdvisorModal';
import { CareerJourneysView } from './components/CareerJourneysView';
import { Compass, Sparkles, Heart, Shield, ArrowUp, Video } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'journeys' | 'quiz' | 'roadmap' | 'trends'>('explore');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Selected Career for Modal
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [modalDefaultTab, setModalDefaultTab] = useState<'overview' | 'journeyVideo'>('overview');

  // Selected Career for Roadmap Builder
  const [roadmapCareer, setRoadmapCareer] = useState<Career | null>(null);

  // Saved Bookmarks (persisted to localStorage)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('career_lens_bookmarks');
      return saved ? JSON.parse(saved) : ['computer-engineering', 'data-science-ai', 'medicine-doctor'];
    } catch {
      return ['computer-engineering', 'data-science-ai', 'medicine-doctor'];
    }
  });

  // Compared Careers (up to 3)
  const [comparedIds, setComparedIds] = useState<string[]>(['computer-engineering', 'it-software-engineering']);

  // Modals & Drawers state
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [isBookmarksDrawerOpen, setIsBookmarksDrawerOpen] = useState<boolean>(false);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState<boolean>(false);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('career_lens_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('Could not persist bookmarks:', e);
    }
  }, [bookmarkedIds]);

  // Handlers
  const handleToggleBookmark = (careerId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(careerId) ? prev.filter((id) => id !== careerId) : [...prev, careerId]
    );
  };

  const handleToggleCompare = (careerId: string) => {
    setComparedIds((prev) => {
      if (prev.includes(careerId)) {
        return prev.filter((id) => id !== careerId);
      }
      if (prev.length >= 3) {
        // Replace oldest or keep max 3
        return [...prev.slice(1), careerId];
      }
      return [...prev, careerId];
    });
  };

  const handleSelectCareer = (career: Career) => {
    setSelectedCareer(career);
    setModalDefaultTab('overview');
  };

  const handleWatchJourney = (career: Career) => {
    setSelectedCareer(career);
    setModalDefaultTab('journeyVideo');
  };

  const handleOpenRoadmapForCareer = (career: Career) => {
    setRoadmapCareer(career);
    setActiveTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchTag = (tag: string) => {
    setSearchQuery(tag);
    setActiveTab('explore');
    const el = document.getElementById('careers-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const bookmarkedCareers = CAREERS_DATABASE.filter((c) => bookmarkedIds.includes(c.id));
  const comparedCareers = CAREERS_DATABASE.filter((c) => comparedIds.includes(c.id));

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bookmarkCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksDrawerOpen(true)}
        compareCount={comparedIds.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        onOpenAdvisor={() => setIsAdvisorModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Hero Section (Always shown on Explore, or compact on other views) */}
        {activeTab === 'explore' && (
          <HeroSection
            onStartQuiz={() => {
              setActiveTab('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreCareers={() => {
              const el = document.getElementById('careers-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onWatchJourneys={() => {
              setActiveTab('journeys');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSearchTag={handleSearchTag}
            totalCareers={CAREERS_DATABASE.length}
          />
        )}

        {/* Tab 1: Explore All 24 Careers */}
        {activeTab === 'explore' && (
          <CareerGrid
            careers={CAREERS_DATABASE}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            comparedIds={comparedIds}
            onToggleCompare={handleToggleCompare}
            onSelectCareer={handleSelectCareer}
            onOpenRoadmapForCareer={handleOpenRoadmapForCareer}
            onWatchJourney={handleWatchJourney}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {/* Tab: Career Journey Videos Hub */}
        {activeTab === 'journeys' && (
          <CareerJourneysView
            careers={CAREERS_DATABASE}
            onWatchJourney={handleWatchJourney}
            onOpenRoadmap={handleOpenRoadmapForCareer}
          />
        )}

        {/* Tab 2: Quick Career Fit Quiz */}
        {activeTab === 'quiz' && (
          <QuickQuiz
            careers={CAREERS_DATABASE}
            onSelectCareer={handleSelectCareer}
            onOpenRoadmapForCareer={handleOpenRoadmapForCareer}
          />
        )}

        {/* Tab 3: Interactive Roadmap Builder */}
        {activeTab === 'roadmap' && (
          <RoadmapBuilder
            careers={CAREERS_DATABASE}
            initialCareer={roadmapCareer}
            onSelectCareer={handleSelectCareer}
          />
        )}

        {/* Tab 4: Market Trends & Salary Analytics */}
        {activeTab === 'trends' && (
          <MarketTrends
            careers={CAREERS_DATABASE}
            onSelectCareer={handleSelectCareer}
          />
        )}
      </main>

      {/* Career Blueprint Deep Dive Modal */}
      <CareerModal
        career={selectedCareer}
        onClose={() => setSelectedCareer(null)}
        isBookmarked={selectedCareer ? bookmarkedIds.includes(selectedCareer.id) : false}
        onToggleBookmark={handleToggleBookmark}
        isCompared={selectedCareer ? comparedIds.includes(selectedCareer.id) : false}
        onToggleCompare={handleToggleCompare}
        onOpenRoadmapForCareer={handleOpenRoadmapForCareer}
        defaultTab={modalDefaultTab}
      />

      {/* Side-by-Side Compare Modal */}
      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        comparedCareers={comparedCareers}
        onRemoveFromCompare={(id) => setComparedIds(comparedIds.filter((cid) => cid !== id))}
        allCareers={CAREERS_DATABASE}
        onAddToCompare={(id) => {
          if (!comparedIds.includes(id) && comparedIds.length < 3) {
            setComparedIds([...comparedIds, id]);
          }
        }}
        onSelectCareer={(career) => setSelectedCareer(career)}
      />

      {/* Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksDrawerOpen}
        onClose={() => setIsBookmarksDrawerOpen(false)}
        bookmarkedCareers={bookmarkedCareers}
        onRemoveBookmark={(id) => setBookmarkedIds(bookmarkedIds.filter((bid) => bid !== id))}
        onSelectCareer={(c) => {
          setIsBookmarksDrawerOpen(false);
          setSelectedCareer(c);
        }}
        onOpenCompare={() => {
          setIsBookmarksDrawerOpen(false);
          setIsCompareModalOpen(true);
        }}
      />

      {/* AI Mentor Dialog Modal */}
      <AiAdvisorModal
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
        careers={CAREERS_DATABASE}
        onSelectCareer={(career) => setSelectedCareer(career)}
      />

      {/* Simple Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-sm">Career Lens</span>
                <p className="text-xs text-slate-500">Professional Growth Mapping & Career Intelligence</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <button onClick={() => setActiveTab('explore')} className="hover:text-cyan-300 transition-colors">
                All 24 Careers
              </button>
              <button onClick={() => setActiveTab('journeys')} className="hover:text-cyan-300 transition-colors text-cyan-400 font-semibold">
                Journey Videos
              </button>
              <button onClick={() => setActiveTab('quiz')} className="hover:text-cyan-300 transition-colors">
                2-Min Fit Quiz
              </button>
              <button onClick={() => setActiveTab('roadmap')} className="hover:text-cyan-300 transition-colors">
                Roadmap Builder
              </button>
              <button onClick={() => setActiveTab('trends')} className="hover:text-cyan-300 transition-colors">
                Market Trends
              </button>
              <button onClick={() => setIsAdvisorModalOpen(true)} className="hover:text-cyan-300 transition-colors text-cyan-400 font-semibold">
                Ask AI Mentor
              </button>
            </div>

            <div className="text-xs text-slate-500 font-mono text-center md:text-right">
              24 High-Growth Tracks • Redesigned for Clarity
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
