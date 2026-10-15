import { useState } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { ALL_SOURCES } from '../../data/content-index';
import { X, Search, ExternalLink, Bookmark, CheckCircle2 } from 'lucide-react';

export function SourceRegisterModal() {
  const { activeModal, closeModal, selectNode } = useWhiteboardStore();
  const [searchTerm, setSearchTerm] = useState('');

  if (activeModal !== 'sources') return null;

  const filteredSources = ALL_SOURCES.filter(
    (src) =>
      src.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      src.documentTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      src.notes?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      src.sectionCitation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-amber-800 text-white">
                SECTION 16
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Official Primary Source Register
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Authoritative India Code statutes, Gazette notifications, Constitution articles, and regulator portals
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search source titles, citations..."
                className="w-full pl-8 pr-3 py-1 text-xs rounded-md border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-700"
              />
            </div>
            <button
              onClick={closeModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Priority Hierarchy Banner */}
        <div className="px-4 py-2.5 bg-amber-50/80 border-b border-amber-200 text-amber-950 text-[11px] flex items-center justify-between">
          <span>
            <strong>9-Tier Priority Rule:</strong> 1. Constitution → 2. India Code Acts → 3. Official Gazettes → 4. Statutory Regulations → 5. Government Orders → 6. Exam Bulletins.
          </span>
          <span className="font-semibold text-amber-900">{filteredSources.length} Primary Sources</span>
        </div>

        {/* Source Cards List */}
        <div className="flex-1 overflow-auto p-4 space-y-3">
          {filteredSources.map((src) => (
            <div
              key={src.id}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-xs transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      Tier {src.sourcePriority}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {src.id}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {src.verificationStatus}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {src.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    {src.documentTitle}
                  </p>
                </div>

                <a
                  href={src.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 text-xs font-semibold transition-colors flex-shrink-0 shadow-2xs"
                >
                  <span>Open Official Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {src.sectionCitation && (
                <div className="mt-2 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Applicable Sections: {src.sectionCitation}</span>
                </div>
              )}

              {src.notes && (
                <p className="mt-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100 italic">
                  "{src.notes}"
                </p>
              )}

              {src.relatedNodeIds && src.relatedNodeIds.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2 flex-wrap text-[11px]">
                  <span className="font-semibold text-slate-500">Related Governance Nodes:</span>
                  {src.relatedNodeIds.map((nodeId) => (
                    <button
                      key={nodeId}
                      onClick={() => {
                        closeModal();
                        selectNode(nodeId);
                      }}
                      className="px-2 py-0.5 rounded bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-slate-700 font-mono text-[10px] transition-colors"
                    >
                      {nodeId}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500">
          <span>Sources verified against authentic India Code & National Ministries archives</span>
          <span className="font-mono text-emerald-800">Direct portal URLs provided</span>
        </div>
      </div>
    </div>
  );
}
