import { useMemo } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { searchEducationNodes } from '../../services/searchService';
import { Scale, Landmark, Award, FileCheck, BookOpen, ArrowRight } from 'lucide-react';

const typeIcons: Record<string, typeof Scale> = {
  constitutional: Scale,
  legislature: Landmark,
  executive: Landmark,
  department: Landmark,
  statutoryRegulator: Award,
  examinationAgency: FileCheck,
  schoolBoard: BookOpen,
  institution: BookOpen
};

export function SearchResults() {
  const { searchQuery, setSearchQuery, nodes, selectNode } = useWhiteboardStore();

  const results = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchEducationNodes(nodes, searchQuery).slice(0, 8);
  }, [nodes, searchQuery]);

  if (!searchQuery.trim() || results.length === 0) return null;

  return (
    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-full max-w-lg bg-white rounded-xl shadow-xl border border-slate-200 z-40 overflow-hidden mt-1 animate-in fade-in duration-150">
      <div className="p-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
        <span>Matching Authorities & Legal Provisions</span>
        <span>{results.length} results</span>
      </div>

      <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
        {results.map(({ node, matchedFields }) => {
          const Icon = typeIcons[node.type] || Landmark;
          return (
            <button
              key={node.id}
              onClick={() => {
                selectNode(node.id);
                setSearchQuery('');
              }}
              className="w-full text-left p-3 hover:bg-emerald-50/50 transition-colors flex items-start justify-between gap-3 group"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <div className="p-1.5 rounded-md bg-slate-100 text-slate-700 mt-0.5 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-800">
                      Sec {node.sectionNumber}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {node.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {node.summary}
                  </p>
                  {matchedFields.length > 0 && (
                    <div className="flex gap-1 mt-1">
                      {matchedFields.map((f) => (
                        <span key={f} className="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">
                          Matched in {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
