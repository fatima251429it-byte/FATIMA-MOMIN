import React from 'react';
import { Career } from '../types/career';
import { X, Bookmark, Trash2, ArrowRight, GitCompare, DollarSign, TrendingUp } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedCareers: Career[];
  onRemoveBookmark: (careerId: string) => void;
  onSelectCareer: (career: Career) => void;
  onOpenCompare: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedCareers,
  onRemoveBookmark,
  onSelectCareer,
  onOpenCompare,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950 shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Saved Careers ({bookmarkedCareers.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved List */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {bookmarkedCareers.length === 0 ? (
            <div className="py-16 text-center text-slate-400">
              <Bookmark className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-semibold text-white">No saved careers yet</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Click the star icon on any career card to bookmark it for later review and side-by-side comparison.
              </p>
            </div>
          ) : (
            bookmarkedCareers.map((c) => (
              <div
                key={c.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex items-start justify-between gap-3"
              >
                <div className="flex-1 cursor-pointer" onClick={() => onSelectCareer(c)}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${c.colorTheme.badgeBg} ${c.colorTheme.badgeText}`}>
                      {c.category}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-medium">
                      {c.growthRate}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white hover:text-cyan-300 transition-colors font-heading">
                    {c.name}
                  </h4>
                  <div className="flex items-center gap-3 mt-2 text-xs font-mono text-slate-400">
                    <span className="text-white font-semibold">{c.medianSalary}</span>
                    <span>•</span>
                    <span>{c.remoteFriendly}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => onRemoveBookmark(c.id)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {bookmarkedCareers.length > 0 && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 shrink-0 space-y-2">
            <button
              onClick={() => {
                onClose();
                onOpenCompare();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors shadow-md"
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>Compare Saved Careers</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
