import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { EducationNode } from '../../types';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import {
  Scale,
  Landmark,
  Award,
  FileCheck,
  BookOpen,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Building2,
  Edit3,
  Check,
  X,
  ExternalLink
} from 'lucide-react';

const typeIcons: Record<string, typeof Scale> = {
  constitutional: Scale,
  legislature: Landmark,
  executive: Landmark,
  department: Landmark,
  statutoryRegulator: Award,
  examinationAgency: FileCheck,
  schoolBoard: BookOpen,
  institution: BookOpen,
  oversight: ShieldCheck,
  process: HelpCircle,
  legalInstrument: Scale
};

const verificationColors: Record<string, { dot: string; label: string; text: string }> = {
  verified: { dot: 'bg-emerald-500', label: 'Verified', text: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  'partially-verified': { dot: 'bg-amber-500', label: 'Partially Verified', text: 'text-amber-700 bg-amber-50 border-amber-200' },
  'requires-verification': { dot: 'bg-rose-500', label: 'Needs Verification', text: 'text-rose-700 bg-rose-50 border-rose-200' },
  'time-sensitive': { dot: 'bg-sky-500', label: 'Time Sensitive', text: 'text-sky-700 bg-sky-50 border-sky-200' },
  superseded: { dot: 'bg-slate-400', label: 'Superseded', text: 'text-slate-600 bg-slate-100 border-slate-200' }
};

export const CustomAuthorityNode = memo(({ data, selected }: { data: EducationNode; selected?: boolean }) => {
  const {
    nodeViewMode,
    expandedNodeIds,
    toggleNodeExpanded,
    nodeBoxWidth,
    fontSizePx,
    lineHeightMult,
    paraSpacingPx,
    editingNodeId,
    editDraft,
    setEditDraft,
    startEditingNode,
    saveEditingNode,
    cancelEditingNode,
    selectNode,
    toggleDetailPanel
  } = useWhiteboardStore();

  const isExpanded = expandedNodeIds[data.id] ?? (nodeViewMode === 'full');
  const isEditing = editingNodeId === data.id;

  const IconComponent = typeIcons[data.type] || Landmark;
  const verif = verificationColors[data.verificationStatus] || verificationColors.verified;

  const width = isExpanded ? Math.max(340, nodeBoxWidth) : Math.max(260, nodeBoxWidth);

  return (
    <div
      onClick={() => {
        if (!isEditing) {
          selectNode(data.id);
        }
      }}
      className={`relative bg-white rounded-xl border transition-all duration-150 shadow-xs group ${
        isEditing
          ? 'border-emerald-500 ring-2 ring-emerald-500/50 shadow-lg z-30'
          : selected
          ? 'border-emerald-600 ring-2 ring-emerald-600/30 shadow-md'
          : 'border-slate-200 hover:border-emerald-500 hover:shadow-sm'
      }`}
      style={{
        width: `${width}px`,
        fontSize: `${fontSizePx}px`,
        lineHeight: lineHeightMult
      }}
    >
      <Handle type="target" position={Position.Top} className="!bg-slate-400 !border-white !w-2.5 !h-2.5" />

      {isEditing ? (
        /* Inline Editor on Canvas */
        <div className="p-3 bg-emerald-50/40 rounded-xl space-y-2 border border-emerald-300" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5">
            <span className="font-bold text-[10px] text-emerald-900 uppercase tracking-wider flex items-center gap-1">
              <Edit3 className="w-3 h-3 text-emerald-700" />
              Inline Editor
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={saveEditingNode}
                className="px-2 py-0.5 rounded bg-emerald-800 text-amber-300 font-bold text-[10px] hover:bg-emerald-700 flex items-center gap-0.5 shadow-2xs cursor-pointer"
                title="Save changes"
              >
                <Check className="w-2.5 h-2.5" />
                Save
              </button>
              <button
                onClick={cancelEditingNode}
                className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold text-[10px] hover:bg-slate-300 cursor-pointer"
                title="Cancel"
              >
                <X className="w-2.5 h-2.5" />
              </button>
              <button
                onClick={() => {
                  selectNode(data.id);
                  toggleDetailPanel(true);
                }}
                className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[9.5px] hover:bg-amber-200 flex items-center gap-0.5"
                title="Open in full sidebar drawer"
              >
                <ExternalLink className="w-2.5 h-2.5" />
                Drawer
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={editDraft.title ?? data.title}
                onChange={(e) => setEditDraft({ title: e.target.value })}
                placeholder="Title"
                className="flex-1 font-bold text-[11px] px-2 py-1 rounded border border-emerald-500 bg-white text-slate-900 focus:outline-hidden"
              />
              <input
                type="text"
                value={editDraft.abbreviation ?? (data.abbreviation || '')}
                onChange={(e) => setEditDraft({ abbreviation: e.target.value })}
                placeholder="Abbr"
                className="w-16 font-mono font-bold text-[10px] px-1.5 py-1 rounded border border-emerald-500 bg-white text-slate-900 focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-2 gap-1">
              <input
                type="text"
                value={editDraft.legalStatus ?? (data.legalStatus || '')}
                onChange={(e) => setEditDraft({ legalStatus: e.target.value })}
                placeholder="Legal Status"
                className="text-[10px] px-2 py-1 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
              />
              <input
                type="text"
                value={editDraft.ministerialRelationship ?? (data.ministerialRelationship || '')}
                onChange={(e) => setEditDraft({ ministerialRelationship: e.target.value })}
                placeholder="Ministry / Dept"
                className="text-[10px] px-2 py-1 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="text-[9px] font-bold text-slate-500 uppercase block mb-0.5">Executive Summary:</label>
              <textarea
                value={editDraft.summary ?? data.summary}
                onChange={(e) => setEditDraft({ summary: e.target.value })}
                rows={2}
                placeholder="Executive Summary"
                className="w-full text-[10px] px-2 py-1 rounded border border-slate-300 bg-white text-slate-800 resize-none focus:outline-hidden"
              />
            </div>

            {isExpanded && (
              <div className="space-y-1.5 pt-1 border-t border-emerald-200 text-[10px]">
                <div>
                  <label className="text-[9px] font-bold text-emerald-900 uppercase block mb-0.5">Powers &amp; Remit (one per line):</label>
                  <textarea
                    value={
                      editDraft.powers !== undefined
                        ? editDraft.powers.join('\n')
                        : (data.powers || []).join('\n')
                    }
                    onChange={(e) =>
                      setEditDraft({
                        powers: e.target.value.split('\n')
                      })
                    }
                    rows={2}
                    placeholder="Enter powers (one per line)"
                    className="w-full text-[10px] px-2 py-1 rounded border border-emerald-300 bg-white text-slate-800 resize-none focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold text-rose-900 uppercase block mb-0.5">Limitations (one per line):</label>
                  <textarea
                    value={
                      editDraft.limitations !== undefined
                        ? editDraft.limitations.join('\n')
                        : (data.limitations || []).join('\n')
                    }
                    onChange={(e) =>
                      setEditDraft({
                        limitations: e.target.value.split('\n')
                      })
                    }
                    rows={2}
                    placeholder="Enter limitations (one per line)"
                    className="w-full text-[10px] px-2 py-1 rounded border border-rose-300 bg-white text-slate-800 resize-none focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold text-slate-700 uppercase block mb-0.5">Acts &amp; Legal Basis (one per line):</label>
                  <textarea
                    value={
                      editDraft.establishingLaw !== undefined
                        ? editDraft.establishingLaw.join('\n')
                        : (data.establishingLaw || []).join('\n')
                    }
                    onChange={(e) =>
                      setEditDraft({
                        establishingLaw: e.target.value.split('\n')
                      })
                    }
                    rows={2}
                    placeholder="Enter statutory acts (one per line)"
                    className="w-full text-[10px] px-2 py-1 rounded border border-slate-300 bg-white text-slate-800 resize-none focus:outline-hidden"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Standard Visual Node on Canvas */
        <>
          {/* Node Header */}
          <div className="p-3 bg-slate-50/70 rounded-t-xl border-b border-slate-100">
            <div className="flex items-center justify-between gap-1.5 mb-1.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <div className="p-1 rounded-md bg-white border border-slate-200 text-emerald-800 shadow-2xs flex-shrink-0">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider truncate">
                  Sec {data.sectionNumber} • {data.level}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {data.abbreviation && (
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-200 flex-shrink-0">
                    {data.abbreviation}
                  </span>
                )}
                {/* Click to Edit icon button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startEditingNode(data);
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-emerald-100 text-slate-400 hover:text-emerald-800"
                  title="Click to edit node details inline"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleNodeExpanded(data.id);
                  }}
                  title={isExpanded ? 'Collapse card' : 'Expand full details'}
                  className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                >
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Title */}
            <h4
              onClick={(e) => {
                e.stopPropagation();
                startEditingNode(data);
              }}
              className="text-xs font-bold text-slate-900 leading-snug cursor-pointer hover:text-emerald-800 transition-colors"
              title="Click to edit title"
            >
              {data.title}
            </h4>

            {/* Legal Status badge if present */}
            {data.legalStatus && (
              <div className="mt-1.5">
                <span className="inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {data.legalStatus}
                </span>
              </div>
            )}
          </div>

          {/* Main Body */}
          <div
            className="p-3"
            style={{
              gap: `${paraSpacingPx}px`,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Summary Synopsis */}
            <p
              onClick={(e) => {
                e.stopPropagation();
                startEditingNode(data);
              }}
              className="text-slate-600 leading-relaxed font-normal cursor-pointer hover:text-slate-900 transition-colors"
              title="Click to edit summary"
            >
              {data.summary}
            </p>

            {isExpanded && (
              <>
                {/* Legal Basis / Parent Act */}
                {data.establishingLaw && data.establishingLaw.length > 0 && (
                  <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-700 mb-1">
                      <FileText className="w-3 h-3 text-emerald-700" />
                      <span>Statutory Enactment / Legal Basis</span>
                    </div>
                    <div className="space-y-0.5">
                      {data.establishingLaw.map((law, idx) => (
                        <div key={idx} className="text-[10px] text-slate-600 font-mono">
                          • {law}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ministerial & Leadership Structure */}
                {(data.ministerialRelationship || data.leadershipRole) && (
                  <div className="grid grid-cols-1 gap-1 text-[10px] bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                    {data.ministerialRelationship && (
                      <div className="flex items-start gap-1">
                        <Building2 className="w-3 h-3 text-slate-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-700">Administrative Line: </span>
                          <span className="text-slate-600">{data.ministerialRelationship}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Mandate */}
                {data.mandate && data.mandate.length > 0 && (
                  <div>
                    <span className="font-bold text-slate-800 text-[10px] uppercase tracking-wide block mb-1">
                      Mandate & Scope:
                    </span>
                    <ul className="space-y-0.5 pl-3 list-disc text-slate-700 text-[10.5px]">
                      {data.mandate.slice(0, 3).map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Powers */}
                {data.powers && data.powers.length > 0 && (
                  <div className="bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                    <span className="font-bold text-emerald-900 text-[10px] uppercase tracking-wide block mb-1">
                      Powers & Authority:
                    </span>
                    <ul className="space-y-0.5 pl-3 list-disc text-slate-800 text-[10px]">
                      {data.powers.slice(0, 3).map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Limitations */}
                {data.limitations && data.limitations.length > 0 && (
                  <div className="bg-rose-50/60 p-2 rounded-lg border border-rose-100">
                    <span className="font-bold text-rose-900 text-[10px] uppercase tracking-wide block mb-1">
                      Statutory Limitations:
                    </span>
                    <ul className="space-y-0.5 pl-0.5">
                      {data.limitations.slice(0, 2).map((l, idx) => (
                        <li key={idx} className="text-[10px] text-rose-900 flex items-start gap-1">
                          <span className="text-rose-500 font-bold">✕</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Status Bar */}
          <div className="px-3 py-2 bg-slate-50/80 rounded-b-xl border-t border-slate-100 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${verif.dot}`} />
              <span className="text-slate-600 font-medium">{verif.label}</span>
            </div>
            <span className="text-[9px] font-mono text-slate-400">
              ID: {data.id}
            </span>
          </div>
        </>
      )}

      <Handle type="source" position={Position.Bottom} className="!bg-emerald-600 !border-white !w-2.5 !h-2.5" />
    </div>
  );
});

CustomAuthorityNode.displayName = 'CustomAuthorityNode';
