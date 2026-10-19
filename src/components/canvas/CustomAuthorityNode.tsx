import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { EducationNode } from '../../types';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import {
  t,
  getTranslatedNodeTitle,
  getTranslatedNodeSummary,
  getTranslatedLevel,
  getTranslatedGovernanceValue
} from '../../services/translationService';
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
  ExternalLink,
  GraduationCap,
  Layers,
  Users,
  Clock,
  Briefcase,
  Sparkles,
  Crown,
  AlertTriangle,
  Cpu
} from 'lucide-react';

function getNodeTheme(data: EducationNode) {
  const id = data.id || '';
  // System Design Visual Learning Framework (Whiteboard 6)
  if (id.startsWith('SD-')) {
    if (id.startsWith('SD-NET-') || id.startsWith('SD-API-')) {
      return {
        borderTop: 'border-t-4 border-t-cyan-500',
        headerBg: 'bg-gradient-to-r from-cyan-50 via-sky-50 to-white',
        badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-200',
        iconBox: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        glowRing: 'ring-cyan-500/30 border-cyan-500'
      };
    }
    if (id.startsWith('SD-DB-') || id.startsWith('SD-CACHE-') || id.startsWith('SD-SHARD-')) {
      return {
        borderTop: 'border-t-4 border-t-emerald-600',
        headerBg: 'bg-gradient-to-r from-emerald-50 via-teal-50 to-white',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        iconBox: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        glowRing: 'ring-emerald-500/30 border-emerald-600'
      };
    }
    if (id.startsWith('SD-SCALE-') || id.startsWith('SD-LB-')) {
      return {
        borderTop: 'border-t-4 border-t-indigo-600',
        headerBg: 'bg-gradient-to-r from-indigo-50 via-blue-50 to-white',
        badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
        iconBox: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        glowRing: 'ring-indigo-500/30 border-indigo-600'
      };
    }
    if (id.startsWith('SD-REP-')) {
      return {
        borderTop: 'border-t-4 border-t-purple-600',
        headerBg: 'bg-gradient-to-r from-purple-50 via-fuchsia-50 to-white',
        badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
        iconBox: 'bg-purple-100 text-purple-800 border-purple-200',
        glowRing: 'ring-purple-500/30 border-purple-600'
      };
    }
    if (id.startsWith('SD-MQ-')) {
      return {
        borderTop: 'border-t-4 border-t-amber-500',
        headerBg: 'bg-gradient-to-r from-amber-50 via-yellow-50 to-white',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
        iconBox: 'bg-amber-100 text-amber-800 border-amber-200',
        glowRing: 'ring-amber-500/30 border-amber-500'
      };
    }
    if (id.startsWith('SD-MON-') || id.startsWith('SD-REL-')) {
      return {
        borderTop: 'border-t-4 border-t-rose-600',
        headerBg: 'bg-gradient-to-r from-rose-50 via-red-50 to-white',
        badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
        iconBox: 'bg-rose-100 text-rose-800 border-rose-200',
        glowRing: 'ring-rose-500/30 border-rose-600'
      };
    }
    if (id.startsWith('SD-CASE-')) {
      return {
        borderTop: 'border-t-4 border-t-red-600',
        headerBg: 'bg-gradient-to-r from-red-50 via-orange-50 to-white',
        badgeBg: 'bg-red-100 text-red-950 border-red-300 font-semibold',
        iconBox: 'bg-red-100 text-red-900 border-red-300',
        glowRing: 'ring-red-500/30 border-red-600'
      };
    }
    return {
      borderTop: 'border-t-4 border-t-slate-700',
      headerBg: 'bg-gradient-to-r from-slate-100 via-gray-50 to-white',
      badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
      iconBox: 'bg-slate-200 text-slate-800 border-slate-300',
      glowRing: 'ring-slate-500/30 border-slate-600'
    };
  }

  if (id.startsWith('PRE-') || id.startsWith('BOARD-') || id === 'SCH-10TH-MILESTONE') {
    return {
      borderTop: 'border-t-4 border-t-amber-500',
      headerBg: 'bg-gradient-to-r from-amber-50 via-orange-50/40 to-white',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      iconBox: 'bg-amber-100 text-amber-800 border-amber-200',
      glowRing: 'ring-amber-500/30 border-amber-600'
    };
  }
  // Agriculture, Horticulture, Forestry & Allied Sciences
  if (id.startsWith('DEG-BSC-AGRI') || id.startsWith('AGRI-') || id.startsWith('GATE-AGRI')) {
    return {
      borderTop: 'border-t-4 border-t-lime-600',
      headerBg: 'bg-gradient-to-r from-lime-50 via-emerald-50/40 to-white',
      badgeBg: 'bg-lime-100 text-lime-900 border-lime-200',
      iconBox: 'bg-lime-100 text-lime-800 border-lime-200',
      glowRing: 'ring-lime-500/30 border-lime-600'
    };
  }
  if (id.startsWith('STRM-PCM') || id.startsWith('DEG-BTECH') || id.startsWith('BTECH-') || id === 'PG-MTECH' || id === 'STRM-POLYTECHNIC' || id.startsWith('DEG-AVIATION') || id.startsWith('DEG-MARITIME')) {
    return {
      borderTop: 'border-t-4 border-t-indigo-600',
      headerBg: 'bg-gradient-to-r from-indigo-50 via-blue-50/40 to-white',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
      iconBox: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      glowRing: 'ring-indigo-500/30 border-indigo-600'
    };
  }
  if (id.startsWith('STRM-PCB') || id.startsWith('DEG-MBBS') || id.startsWith('PG-MD') || id.startsWith('PG-MS') || id.startsWith('CLINIC-') || id.startsWith('DEG-AYUSH') || id.startsWith('DEG-BPHARM') || id.startsWith('PHARM-') || id.startsWith('DEG-BVSC') || id.startsWith('DEG-BSC-NURSING')) {
    return {
      borderTop: 'border-t-4 border-t-emerald-600',
      headerBg: 'bg-gradient-to-r from-emerald-50 via-teal-50/40 to-white',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      iconBox: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      glowRing: 'ring-emerald-500/30 border-emerald-600'
    };
  }
  if (id.startsWith('STRM-COMMERCE') || id.startsWith('DEG-BCOM') || id.startsWith('BCOM-') || id.startsWith('BBA-') || id.startsWith('PROF-C') || id.startsWith('PROF-ACTUARIAL')) {
    return {
      borderTop: 'border-t-4 border-t-sky-600',
      headerBg: 'bg-gradient-to-r from-sky-50 via-cyan-50/40 to-white',
      badgeBg: 'bg-sky-100 text-sky-900 border-sky-200',
      iconBox: 'bg-sky-100 text-sky-800 border-sky-200',
      glowRing: 'ring-sky-500/30 border-sky-600'
    };
  }
  if (id.startsWith('STRM-ARTS') || id.startsWith('DEG-BA') || id.startsWith('BA-') || id.startsWith('DEG-LAW') || id.startsWith('LAW-') || id.startsWith('PG-LLM') || id.startsWith('DEG-TEACHER')) {
    return {
      borderTop: 'border-t-4 border-t-purple-600',
      headerBg: 'bg-gradient-to-r from-purple-50 via-fuchsia-50/40 to-white',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
      iconBox: 'bg-purple-100 text-purple-800 border-purple-200',
      glowRing: 'ring-purple-500/30 border-purple-600'
    };
  }
  if (id.startsWith('GATE-')) {
    return {
      borderTop: 'border-t-4 border-t-rose-600',
      headerBg: 'bg-gradient-to-r from-rose-50 via-amber-50/40 to-white',
      badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
      iconBox: 'bg-rose-100 text-rose-800 border-rose-200',
      glowRing: 'ring-rose-500/30 border-rose-600'
    };
  }
  if (id.startsWith('PG-MBA') || id.startsWith('DEG-IPM')) {
    return {
      borderTop: 'border-t-4 border-t-amber-600',
      headerBg: 'bg-gradient-to-r from-amber-50 via-yellow-50/40 to-white',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      iconBox: 'bg-amber-100 text-amber-800 border-amber-200',
      glowRing: 'ring-amber-500/30 border-amber-600'
    };
  }
  // Democratic Governance (Whiteboard 4) - Body-Wise Visual Clusters
  if (id.startsWith('DEM-POL-') || id === 'DEM-STATE-HOME-DEPT' || id === 'DEM-CAPF-HEADS') {
    return {
      borderTop: 'border-t-4 border-t-blue-700',
      headerBg: 'bg-gradient-to-r from-blue-50 via-slate-50 to-white',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
      iconBox: 'bg-blue-100 text-blue-800 border-blue-200',
      glowRing: 'ring-blue-600/30 border-blue-700'
    };
  }
  if (id.startsWith('DEM-LS-') || id.startsWith('DEM-RS-') || id === 'DEM-MP-LOK-SABHA' || id === 'DEM-MP-RAJYA-SABHA') {
    return {
      borderTop: 'border-t-4 border-t-rose-700',
      headerBg: 'bg-gradient-to-r from-rose-50 via-red-50/40 to-white',
      badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
      iconBox: 'bg-rose-100 text-rose-800 border-rose-200',
      glowRing: 'ring-rose-600/30 border-rose-700'
    };
  }
  if (id === 'DEM-MLA' || id === 'DEM-MLC' || id === 'DEM-GOVERNOR' || id === 'DEM-CM') {
    return {
      borderTop: 'border-t-4 border-t-purple-700',
      headerBg: 'bg-gradient-to-r from-purple-50 via-fuchsia-50/40 to-white',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
      iconBox: 'bg-purple-100 text-purple-800 border-purple-200',
      glowRing: 'ring-purple-600/30 border-purple-700'
    };
  }
  if (id.startsWith('DEM-MUNICIPAL') || id === 'DEM-MAYOR-COUNCIL' || id === 'DEM-ADDL-MUNICIPAL-COMMISSIONER' || id === 'DEM-WARD-CORPORATOR') {
    return {
      borderTop: 'border-t-4 border-t-teal-600',
      headerBg: 'bg-gradient-to-r from-teal-50 via-emerald-50/40 to-white',
      badgeBg: 'bg-teal-100 text-teal-900 border-teal-200',
      iconBox: 'bg-teal-100 text-teal-800 border-teal-200',
      glowRing: 'ring-teal-500/30 border-teal-600'
    };
  }
  if (id.startsWith('DEM-DIV-') || id.startsWith('DEM-DM-') || id.startsWith('DEM-SDM-') || id.startsWith('DEM-TEHSILDAR') || id.startsWith('DEM-TALATHI')) {
    return {
      borderTop: 'border-t-4 border-t-amber-600',
      headerBg: 'bg-gradient-to-r from-amber-50 via-orange-50/40 to-white',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      iconBox: 'bg-amber-100 text-amber-800 border-amber-200',
      glowRing: 'ring-amber-500/30 border-amber-600'
    };
  }
  if (id.startsWith('DEM-ZP-') || id.startsWith('DEM-BDO-') || id.startsWith('DEM-SARPANCH') || id.startsWith('DEM-GRAM-SEVAK') || id.startsWith('DEM-WARD-PANCH')) {
    return {
      borderTop: 'border-t-4 border-t-emerald-700',
      headerBg: 'bg-gradient-to-r from-emerald-50 via-green-50/40 to-white',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      iconBox: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      glowRing: 'ring-emerald-600/30 border-emerald-700'
    };
  }
  if (id.startsWith('DEM-MHA-') || id.startsWith('DEM-MOF-') || id.startsWith('DEM-MOLJ-') || id.startsWith('DEM-DOPT-') || id.startsWith('DEM-CBDT-') || id.startsWith('DEM-AG-') || id === 'DEM-PM' || id === 'DEM-CABINET-SEC') {
    return {
      borderTop: 'border-t-4 border-t-indigo-700',
      headerBg: 'bg-gradient-to-r from-indigo-50 via-blue-50/40 to-white',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
      iconBox: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      glowRing: 'ring-indigo-600/30 border-indigo-700'
    };
  }
  if (id === 'DEM-PRESIDENT' || id === 'DEM-VICE-PRESIDENT' || id === 'DEM-CITIZENS' || id === 'DEM-GRAM-SABHA') {
    return {
      borderTop: 'border-t-4 border-t-amber-500',
      headerBg: 'bg-gradient-to-r from-amber-50 via-yellow-50 to-white',
      badgeBg: 'bg-amber-100 text-amber-950 border-amber-300 font-semibold',
      iconBox: 'bg-amber-100 text-amber-900 border-amber-300',
      glowRing: 'ring-amber-500/40 border-amber-500'
    };
  }
  return {
    borderTop: 'border-t-4 border-t-emerald-700',
    headerBg: 'bg-gradient-to-r from-slate-50 to-white',
    badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
    iconBox: 'bg-slate-100 text-slate-700 border-slate-200',
    glowRing: 'ring-emerald-500/30 border-emerald-600'
  };
}

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
  legalInstrument: Scale,
  examination: GraduationCap,
  stage: Layers,
  counselling: Users,
  office: Landmark,
  court: Scale,
  bank: Building2
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
    toggleDetailPanel,
    currentLanguage,
    translationScope
  } = useWhiteboardStore();

  const isExpanded = expandedNodeIds[data.id] ?? (nodeViewMode === 'full');
  const isEditing = editingNodeId === data.id;

  const IconComponent = typeIcons[data.type] || Landmark;
  const verif = verificationColors[data.verificationStatus] || verificationColors.verified;
  const theme = getNodeTheme(data);

  const width = isEditing
    ? Math.max(420, nodeBoxWidth)
    : (isExpanded ? Math.max(340, nodeBoxWidth) : Math.max(260, nodeBoxWidth));

  // Safe nested edit drafts
  const instDraft = { ...(data.institutionDetails || {}), ...(editDraft.institutionDetails || {}) };
  const examDraft = { ...(data.examDetails || {}), ...(editDraft.examDetails || {}) };

  const updateInstDraft = (field: string, value: any) => {
    const current = { ...(data.institutionDetails || {}), ...(editDraft.institutionDetails || {}) };
    setEditDraft({
      institutionDetails: {
        ...current,
        [field]: value
      }
    });
  };

  const updateExamDraft = (field: string, value: any) => {
    const current = { ...(data.examDetails || {}), ...(editDraft.examDetails || {}) };
    setEditDraft({
      examDetails: {
        ...current,
        [field]: value
      }
    });
  };

  const layoutDirection = useWhiteboardStore((s) => s.layoutDirection);
  const isHorizontal = layoutDirection === 'RIGHT';
  const targetPos = isHorizontal ? Position.Left : Position.Top;
  const sourcePos = isHorizontal ? Position.Right : Position.Bottom;

  return (
    <div
      onClick={(e) => {
        if (!isEditing) {
          if (!e.shiftKey && !e.ctrlKey && !e.metaKey) {
            selectNode(data.id);
          }
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        if (!isEditing) {
          startEditingNode(data);
        }
      }}
      className={`relative bg-white rounded-xl border ${theme.borderTop} transition-all duration-200 shadow-xs group flex flex-col justify-between ${
        isEditing
          ? 'border-emerald-500 ring-2 ring-emerald-500/50 shadow-lg z-30'
          : selected
          ? `${theme.glowRing} ring-2 shadow-md scale-[1.01]`
          : 'border-slate-200/90 hover:border-slate-400 hover:shadow-md'
      }`}
      style={{
        width: `${width}px`,
        maxWidth: '92vw',
        fontSize: `${fontSizePx}px`,
        lineHeight: lineHeightMult
      }}
    >
      <Handle type="target" position={targetPos} className="!bg-slate-400 !border-white !w-2.5 !h-2.5" />

      {isEditing ? (
        /* Inline In-Place Node Card Editor */
        <div className="p-3 bg-white rounded-xl space-y-2.5 border-2 border-emerald-500 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-extrabold text-[11px] text-emerald-950 uppercase tracking-wider flex items-center gap-1">
                <Edit3 className="w-3.5 h-3.5 text-emerald-700" />
                Editing Card
              </span>
              <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 truncate">
                {data.id}
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={saveEditingNode}
                className="px-2.5 py-1 rounded bg-emerald-700 hover:bg-emerald-800 text-amber-300 font-bold text-[10.5px] flex items-center gap-1 shadow-xs cursor-pointer transition-colors"
                title="Save changes to node"
              >
                <Check className="w-3 h-3" />
                Save
              </button>
              <button
                onClick={cancelEditingNode}
                className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[10.5px] flex items-center gap-0.5 cursor-pointer transition-colors"
                title="Cancel edits"
              >
                <X className="w-3 h-3" />
                Cancel
              </button>
              <button
                onClick={() => {
                  selectNode(data.id);
                  toggleDetailPanel(true);
                }}
                className="px-2 py-1 rounded bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[9.5px] flex items-center gap-1 cursor-pointer transition-colors"
                title="Open in full sidebar drawer"
              >
                <ExternalLink className="w-2.5 h-2.5" />
                Drawer
              </button>
            </div>
          </div>

          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {/* 1. Title & Abbreviation */}
            <div className="flex items-center gap-1.5">
              <div className="flex-1">
                <label className="text-[9.5px] font-bold text-slate-600 block mb-0.5">Title:</label>
                <input
                  type="text"
                  value={editDraft.title ?? data.title}
                  onChange={(e) => setEditDraft({ title: e.target.value })}
                  placeholder="Official Title"
                  className="w-full font-bold text-[11px] px-2 py-1 rounded border border-emerald-500 bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div className="w-28">
                <label className="text-[9.5px] font-bold text-slate-600 block mb-0.5">Abbreviation / Tag:</label>
                <input
                  type="text"
                  value={editDraft.abbreviation ?? (data.abbreviation || '')}
                  onChange={(e) => setEditDraft({ abbreviation: e.target.value })}
                  placeholder="e.g. Junior & Senior KG"
                  className="w-full font-mono font-bold text-[10px] px-1.5 py-1 rounded border border-emerald-500 bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* 2. Stage / Admission Route */}
            <div>
              <label className="text-[9.5px] font-bold text-slate-600 block mb-0.5">Stage / Admission Route:</label>
              <input
                type="text"
                value={instDraft.admissionRoute || ''}
                onChange={(e) => updateInstDraft('admissionRoute', e.target.value)}
                placeholder="e.g. Kindergarten Stage (LKG & UKG)"
                className="w-full text-[10px] px-2 py-1 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:border-indigo-500"
              />
            </div>

            {/* 3. Executive Summary */}
            <div>
              <label className="text-[9.5px] font-bold text-slate-600 block mb-0.5">Description / Summary:</label>
              <textarea
                value={editDraft.summary ?? data.summary}
                onChange={(e) => setEditDraft({ summary: e.target.value })}
                rows={3}
                placeholder="Executive summary / description"
                className="w-full text-[10px] px-2 py-1.5 rounded border border-slate-300 bg-white text-slate-800 resize-y focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            {/* 4. Institutional Framework & Degrees Box (Matches the purple/indigo card in screenshot) */}
            <div className="bg-indigo-50/70 p-2.5 rounded-lg border border-indigo-200/90 space-y-1.5">
              <div className="flex items-center gap-1 text-[10.5px] font-bold text-indigo-950 border-b border-indigo-200/60 pb-1">
                <Building2 className="w-3.5 h-3.5 text-indigo-700" />
                <span>Institutional Framework &amp; Degrees</span>
              </div>

              <div>
                <label className="text-[9.5px] font-semibold text-indigo-950 block mb-0.5">Type / Framework:</label>
                <input
                  type="text"
                  value={instDraft.institutionType || ''}
                  onChange={(e) => updateInstDraft('institutionType', e.target.value)}
                  placeholder="e.g. Kindergarten Stage (LKG & UKG)"
                  className="w-full text-[10px] px-2 py-1 rounded border border-indigo-300 bg-white text-slate-800 focus:outline-hidden focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="text-[9.5px] font-semibold text-indigo-950 block mb-0.5">Timeline / Evaluations:</label>
                <input
                  type="text"
                  value={instDraft.examinationTimeline || ''}
                  onChange={(e) => updateInstDraft('examinationTimeline', e.target.value)}
                  placeholder="e.g. Age 4 to 6 (2 Years). Term evaluations without pass/fail ranking"
                  className="w-full text-[10px] px-2 py-1 rounded border border-indigo-300 bg-white text-slate-800 focus:outline-hidden focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="text-[9.5px] font-semibold text-indigo-950 block mb-0.5">Programmes / Courses Conferred:</label>
                <input
                  type="text"
                  value={instDraft.programmesOffered ? instDraft.programmesOffered.join(', ') : ''}
                  onChange={(e) => {
                    const progs = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                    updateInstDraft('programmesOffered', progs);
                  }}
                  placeholder="e.g. Junior KG / LKG (Age 4-5), Senior KG / UKG (Age 5-6)"
                  className="w-full text-[10px] px-2 py-1 rounded border border-indigo-300 bg-white text-slate-800 focus:outline-hidden focus:border-indigo-600"
                />
              </div>
            </div>

            {/* 5. Career Hierarchy & Opportunities Box (Matches the box in screenshot) */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 p-2.5 rounded-lg border border-amber-300/80 space-y-1.5">
              <div className="flex items-center gap-1 text-[10.5px] font-bold text-amber-950 border-b border-amber-200/60 pb-1">
                <Briefcase className="w-3.5 h-3.5 text-amber-700" />
                <span>Career Hierarchy &amp; Opportunities</span>
              </div>
              <div>
                <label className="text-[9px] font-semibold text-amber-900 block mb-0.5">
                  Hierarchy Ladder / Direct Qualifications:
                </label>
                <textarea
                  value={instDraft.careerValue || ''}
                  onChange={(e) => updateInstDraft('careerValue', e.target.value)}
                  rows={3}
                  placeholder="e.g. Qualifies directly for Class 1 admission under RTE Act 2009"
                  className="w-full text-[10px] px-2 py-1.5 rounded border border-amber-300 bg-white text-slate-800 resize-y focus:outline-hidden focus:ring-1 focus:ring-amber-500 font-sans"
                />
              </div>
            </div>

            {/* 6. Legal Status & Parent Body */}
            <div className="grid grid-cols-2 gap-1.5">
              <div>
                <label className="text-[9.5px] font-bold text-slate-600 block mb-0.5">Legal Status:</label>
                <input
                  type="text"
                  value={editDraft.legalStatus ?? (data.legalStatus || '')}
                  onChange={(e) => setEditDraft({ legalStatus: e.target.value })}
                  placeholder="e.g. Foundational Stage"
                  className="w-full text-[10px] px-2 py-1 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-[9.5px] font-bold text-slate-600 block mb-0.5">Governing Body / Department:</label>
                <input
                  type="text"
                  value={editDraft.ministerialRelationship ?? (data.ministerialRelationship || '')}
                  onChange={(e) => setEditDraft({ ministerialRelationship: e.target.value })}
                  placeholder="e.g. State School Education Dept"
                  className="w-full text-[10px] px-2 py-1 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
                />
              </div>
            </div>

            {/* 7. Examination & Selection Details (if exam node) */}
            {(data.examDetails || editDraft.examDetails) && (
              <div className="bg-sky-50/70 p-2.5 rounded-lg border border-sky-200/90 space-y-1.5">
                <div className="flex items-center gap-1 text-[10.5px] font-bold text-sky-950 border-b border-sky-200/60 pb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-700" />
                  <span>Examination &amp; Selection Details</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <label className="text-[9px] font-semibold text-sky-950 block mb-0.5">Exam Agency:</label>
                    <input
                      type="text"
                      value={examDraft.examAgency || ''}
                      onChange={(e) => updateExamDraft('examAgency', e.target.value)}
                      placeholder="e.g. NTA, UPSC"
                      className="w-full text-[10px] px-2 py-1 rounded border border-sky-300 bg-white text-slate-800 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-semibold text-sky-950 block mb-0.5">Application Window:</label>
                    <input
                      type="text"
                      value={examDraft.applicationWindow || ''}
                      onChange={(e) => updateExamDraft('applicationWindow', e.target.value)}
                      placeholder="e.g. Nov - Jan annual cycle"
                      className="w-full text-[10px] px-2 py-1 rounded border border-sky-300 bg-white text-slate-800 focus:outline-hidden"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[9px] font-semibold text-sky-950 block mb-0.5">Eligibility Criteria:</label>
                  <input
                    type="text"
                    value={examDraft.eligibilityCriteria || ''}
                    onChange={(e) => updateExamDraft('eligibilityCriteria', e.target.value)}
                    placeholder="e.g. Class 12 Science PCM, min 75%"
                    className="w-full text-[10px] px-2 py-1 rounded border border-sky-300 bg-white text-slate-800 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-semibold text-sky-950 block mb-0.5">Outcome:</label>
                  <input
                    type="text"
                    value={examDraft.outcome || ''}
                    onChange={(e) => updateExamDraft('outcome', e.target.value)}
                    placeholder="e.g. Percentile & All India Rank"
                    className="w-full text-[10px] px-2 py-1 rounded border border-sky-300 bg-white text-slate-800 focus:outline-hidden"
                  />
                </div>
              </div>
            )}

            {/* Save Action Footer */}
            <div className="flex items-center justify-end gap-1.5 pt-2 border-t border-slate-200">
              <button
                onClick={cancelEditingNode}
                className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[10.5px] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={saveEditingNode}
                className="px-3.5 py-1 rounded bg-emerald-700 hover:bg-emerald-800 text-amber-300 font-bold text-[10.5px] flex items-center gap-1 shadow-xs cursor-pointer"
              >
                <Check className="w-3 h-3" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Standard Visual Node on Canvas */
        <>
          {/* Node Header */}
          <div className={`p-3 ${theme.headerBg} rounded-t-xl border-b border-slate-100`}>
            <div className="flex items-center justify-between gap-1.5 mb-1.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <div className={`p-1 rounded-md border shadow-2xs flex-shrink-0 ${theme.iconBox}`}>
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider truncate">
                  Sec {data.sectionNumber} • {getTranslatedLevel(data.level, currentLanguage)}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {data.abbreviation && (
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border flex-shrink-0 ${theme.badgeBg}`}>
                    {getTranslatedGovernanceValue(data.abbreviation, currentLanguage)}
                  </span>
                )}
                {/* Click to Edit icon button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startEditingNode(data);
                  }}
                  className="p-1 rounded bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-800 border border-slate-200 shadow-2xs cursor-pointer transition-colors"
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
              {getTranslatedNodeTitle(data, currentLanguage, translationScope)}
            </h4>

            {/* Legal Status badge & Domain Badges if present */}
            <div className="mt-1.5 flex flex-wrap gap-1">
              {!isExpanded && data.institutionDetails?.examinationTimeline && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    startEditingNode(data);
                  }}
                  className="inline-flex items-center gap-1 text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100/90 text-slate-700 border border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors"
                  title="Click to edit duration / timeline"
                >
                  <Clock className="w-2.5 h-2.5 text-slate-500" />
                  {getTranslatedGovernanceValue(data.institutionDetails.examinationTimeline.replace(/^Timeline:\s*/i, ''), currentLanguage)}
                </span>
              )}
              {data.institutionDetails?.admissionRoute && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    startEditingNode(data);
                  }}
                  className="inline-flex items-center gap-1 text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors"
                  title="Click to edit entrance / testing agency"
                >
                  <Sparkles className="w-2.5 h-2.5 text-blue-600" />
                  {getTranslatedGovernanceValue(data.institutionDetails.admissionRoute, currentLanguage)}
                </span>
              )}
              {data.legalStatus && (
                <span className="inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {getTranslatedGovernanceValue(data.legalStatus, currentLanguage)}
                </span>
              )}
              {data.examDetails?.examAgency && (
                <span className="inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {t('card.instType', currentLanguage)} {getTranslatedGovernanceValue(data.examDetails.examAgency, currentLanguage)}
                </span>
              )}
              {!isExpanded && data.institutionDetails?.institutionType && (
                <span className="inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {getTranslatedGovernanceValue(data.institutionDetails.institutionType, currentLanguage)}
                </span>
              )}
              {data.governanceDetails?.constitutionalArticle && (
                <span className="inline-block text-[9.5px] font-mono text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  {data.governanceDetails.constitutionalArticle}
                </span>
              )}
              {data.governanceDetails?.cadreOrService && (
                <span className="inline-block text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  {getTranslatedGovernanceValue(data.governanceDetails.cadreOrService, currentLanguage)}
                </span>
              )}
              {data.governanceDetails?.positionName && (
                <span className="inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {getTranslatedGovernanceValue(data.governanceDetails.positionName, currentLanguage)}
                </span>
              )}
              {data.bankingJudicialDetails?.regulatoryBodyOrApex && (
                <span className="inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Apex: {getTranslatedGovernanceValue(data.bankingJudicialDetails.regulatoryBodyOrApex, currentLanguage)}
                </span>
              )}
              {data.systemDesignDetails?.transcriptTimestamp && (
                <span className="inline-block text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-700 shadow-2xs">
                  ⏱ {data.systemDesignDetails.transcriptTimestamp}
                </span>
              )}
              {data.systemDesignDetails?.category && (
                <span className="inline-block text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                  {data.systemDesignDetails.category}
                </span>
              )}
            </div>
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
              {getTranslatedNodeSummary(data, currentLanguage, translationScope)}
            </p>

            {isExpanded && (
              <>
                {/* Domain Uncommon Grounds: Examination & Pathway Details (v2) */}
                {data.examDetails && (
                  <div className="bg-sky-50/70 rounded-lg p-2.5 border border-sky-200/80 space-y-1.5">
                    <div className="flex items-center gap-1 text-[10.5px] font-bold text-sky-950">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-700" />
                      <span>{t('card.lifecycle', currentLanguage)}</span>
                    </div>
                    {data.examDetails.eligibilityCriteria && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-sky-900">{t('card.eligibility', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.examDetails.eligibilityCriteria, currentLanguage)}
                      </div>
                    )}
                    {data.examDetails.applicationWindow && (
                      <div className="text-[10px] text-slate-700 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-600 flex-shrink-0" />
                        <span className="font-semibold text-sky-900">{t('card.timeline', currentLanguage)} </span>
                        <span>{getTranslatedGovernanceValue(data.examDetails.applicationWindow, currentLanguage)}</span>
                      </div>
                    )}
                    {data.examDetails.examStages && data.examDetails.examStages.length > 0 && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-sky-900">{t('card.stages', currentLanguage)} </span>
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          {data.examDetails.examStages.map((stage, idx) => (
                            <span key={idx} className="px-1.5 py-0.2 rounded bg-white text-sky-800 border border-sky-200 text-[9.5px]">
                              {idx + 1}. {getTranslatedGovernanceValue(stage, currentLanguage)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {data.examDetails.outcome && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-sky-900">{t('card.outcome', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.examDetails.outcome, currentLanguage)}
                      </div>
                    )}
                    {data.examDetails.counsellingBody && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-sky-900">{t('card.counselling', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.examDetails.counsellingBody, currentLanguage)}
                      </div>
                    )}
                    {data.examDetails.nextCareerStage && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-sky-900">{t('card.nextStage', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.examDetails.nextCareerStage, currentLanguage)}
                      </div>
                    )}
                  </div>
                )}

                {/* Domain Uncommon Grounds: Institution & Qualification Details (v3) */}
                {data.institutionDetails && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      startEditingNode(data);
                    }}
                    className="bg-indigo-50/70 rounded-lg p-2.5 border border-indigo-200/80 space-y-1.5 cursor-pointer hover:border-indigo-400 hover:shadow-xs transition-all group/inst"
                    title="Click to edit Institutional Framework, Timeline & Degrees"
                  >
                    <div className="flex items-center justify-between gap-1 text-[10.5px] font-bold text-indigo-950">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-indigo-700" />
                        <span>{t('card.institutions', currentLanguage)}</span>
                      </span>
                      <Edit3 className="w-3 h-3 text-indigo-400 group-hover/inst:text-indigo-700 transition-colors" />
                    </div>
                    {data.institutionDetails.institutionType && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.instType', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.institutionDetails.institutionType, currentLanguage)}
                      </div>
                    )}
                    {data.institutionDetails.controlledBy && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.controlledBy', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.institutionDetails.controlledBy, currentLanguage)}
                      </div>
                    )}
                    {data.institutionDetails.curriculumBody && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.curriculum', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.institutionDetails.curriculumBody, currentLanguage)}
                      </div>
                    )}
                    {data.institutionDetails.prerequisiteStream && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.prerequisite', currentLanguage)} </span>
                        <span className="font-medium text-emerald-800">{getTranslatedGovernanceValue(data.institutionDetails.prerequisiteStream, currentLanguage)}</span>
                      </div>
                    )}
                    {data.institutionDetails.examinationTimeline && (
                      <div className="text-[10px] text-slate-700 flex items-start gap-1">
                        <Clock className="w-3 h-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-indigo-900">{t('card.timeline', currentLanguage)} </span>
                          <span>{getTranslatedGovernanceValue(data.institutionDetails.examinationTimeline.replace(/^Timeline:\s*/i, ''), currentLanguage)}</span>
                        </div>
                      </div>
                    )}
                    {data.institutionDetails.admissionRoute && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.admission', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.institutionDetails.admissionRoute, currentLanguage)}
                      </div>
                    )}
                    {data.institutionDetails.programmesOffered && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.programmes', currentLanguage)} </span>
                        {data.institutionDetails.programmesOffered.map((p) => getTranslatedGovernanceValue(p, currentLanguage)).join(', ')}
                      </div>
                    )}
                    {data.institutionDetails.awardingBody && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.awardingBody', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.institutionDetails.awardingBody, currentLanguage)}
                      </div>
                    )}
                    {data.institutionDetails.accreditation && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.accreditation', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.institutionDetails.accreditation, currentLanguage)}
                      </div>
                    )}
                    {data.institutionDetails.nheqfLevel && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-indigo-900">{t('card.qualification', currentLanguage)} </span>
                        <span className="font-mono text-purple-900 font-medium">{data.institutionDetails.nheqfLevel}</span>
                      </div>
                    )}
                    {data.institutionDetails.careerValue && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditingNode(data);
                        }}
                        className="text-[10px] text-slate-800 bg-white/90 p-2.5 rounded-md border border-indigo-200/90 shadow-2xs mt-1.5 cursor-pointer hover:border-indigo-400 hover:shadow-xs transition-all"
                        title="Click to edit career hierarchy & opportunity ladder"
                      >
                        <div className="font-semibold text-indigo-950 flex items-center justify-between gap-1 mb-1">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                            <span>{t('card.careerOps', currentLanguage)}</span>
                          </span>
                          <Edit3 className="w-2.5 h-2.5 text-indigo-400 opacity-60 hover:opacity-100" />
                        </div>
                        <div className="text-slate-700 font-medium leading-relaxed whitespace-pre-line">
                          {getTranslatedGovernanceValue(data.institutionDetails.careerValue, currentLanguage)}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Domain Uncommon Grounds: Democratic & Constitutional Governance (v4) */}
                {data.governanceDetails && (
                  <div className="bg-purple-50/70 rounded-lg p-2.5 border border-purple-200/80 space-y-1.5">
                    <div className="flex items-center gap-1 text-[10.5px] font-bold text-purple-950">
                      <Landmark className="w-3.5 h-3.5 text-purple-700" />
                      <span>{t('card.hierarchy', currentLanguage)}</span>
                    </div>
                    {data.governanceDetails.positionName && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-purple-900">{t('card.post', currentLanguage)} </span>
                        <span className="font-bold text-slate-900">{getTranslatedGovernanceValue(data.governanceDetails.positionName, currentLanguage)}</span>
                      </div>
                    )}
                    {data.governanceDetails.cadreOrService && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-purple-900">{t('card.cadre', currentLanguage)} </span>
                        <span className="font-bold text-rose-800 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">{getTranslatedGovernanceValue(data.governanceDetails.cadreOrService, currentLanguage)}</span>
                      </div>
                    )}
                    {data.governanceDetails.constitutionalArticle && (
                      <div className="text-[10px] text-slate-700 font-mono">
                        <span className="font-semibold text-purple-900">{t('card.article', currentLanguage)} </span>
                        {data.governanceDetails.constitutionalArticle}
                      </div>
                    )}
                    {data.governanceDetails.electoralOrSelectionMethod && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-purple-900">{t('card.selection', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.governanceDetails.electoralOrSelectionMethod, currentLanguage)}
                      </div>
                    )}
                    {data.governanceDetails.tenure && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-purple-900">{t('card.tenure', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.governanceDetails.tenure, currentLanguage)}
                      </div>
                    )}
                    {data.governanceDetails.geographicalJurisdiction && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-purple-900">{t('card.jurisdiction', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.governanceDetails.geographicalJurisdiction, currentLanguage)}
                      </div>
                    )}
                    {data.governanceDetails.reportingTo && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-purple-900">{t('card.reportsTo', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.governanceDetails.reportingTo, currentLanguage)}
                      </div>
                    )}
                    {data.governanceDetails.superiorAuthority && (
                      <div className="text-[10px] bg-amber-50/90 p-2 rounded-md border border-amber-300/80 mt-1.5 shadow-2xs">
                        <span className="font-bold text-amber-950 flex items-center gap-1 mb-0.5">
                          <Crown className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                          {t('card.superior', currentLanguage)}
                        </span>
                        <span className="text-slate-800 font-medium leading-relaxed block">
                          {getTranslatedGovernanceValue(data.governanceDetails.superiorAuthority, currentLanguage)}
                        </span>
                      </div>
                    )}
                    {data.governanceDetails.removalOrDeElectionMethod && (
                      <div className="text-[10px] bg-rose-50/90 p-2 rounded-md border border-rose-300/80 mt-1.5 shadow-2xs">
                        <span className="font-bold text-rose-950 flex items-center gap-1 mb-0.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-700 flex-shrink-0" />
                          {t('card.removal', currentLanguage)}
                        </span>
                        <span className="text-rose-950 font-medium leading-relaxed block">
                          {getTranslatedGovernanceValue(data.governanceDetails.removalOrDeElectionMethod, currentLanguage)}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Domain Uncommon Grounds: Banking & Judicial Systems (v5) */}
                {data.bankingJudicialDetails && (
                  <div className="bg-amber-50/70 rounded-lg p-2.5 border border-amber-200/80 space-y-1.5">
                    <div className="flex items-center gap-1 text-[10.5px] font-bold text-amber-950">
                      <Scale className="w-3.5 h-3.5 text-amber-700" />
                      <span>{data.bankingJudicialDetails.domain === 'banking' ? t('card.banking', currentLanguage) : t('card.judicial', currentLanguage)}</span>
                    </div>
                    {data.bankingJudicialDetails.tier && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-amber-900">{t('card.tier', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.bankingJudicialDetails.tier, currentLanguage)}
                      </div>
                    )}
                    {data.bankingJudicialDetails.jurisdictionOrScope && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-amber-900">{t('card.jurisdictionScope', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.bankingJudicialDetails.jurisdictionOrScope, currentLanguage)}
                      </div>
                    )}
                    {data.bankingJudicialDetails.appointmentProcess && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-amber-900">{t('card.selection', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.bankingJudicialDetails.appointmentProcess, currentLanguage)}
                      </div>
                    )}
                    {data.bankingJudicialDetails.grievanceOrAppellateRoute && (
                      <div className="text-[10px] text-slate-700">
                        <span className="font-semibold text-amber-900">{t('card.appellateRoute', currentLanguage)} </span>
                        {getTranslatedGovernanceValue(data.bankingJudicialDetails.grievanceOrAppellateRoute, currentLanguage)}
                      </div>
                    )}
                  </div>
                )}

                {/* Domain Uncommon Grounds: System Design Architecture & Mechanism (Whiteboard 6) */}
                {data.systemDesignDetails && (
                  <div className="bg-slate-900 text-slate-100 rounded-lg p-2.5 border border-cyan-500/40 space-y-2 shadow-xs">
                    <div className="flex items-center justify-between text-[10.5px] font-bold text-cyan-300 border-b border-slate-800 pb-1">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>System Architecture &amp; Mechanism</span>
                      </span>
                      {data.systemDesignDetails.transcriptTimestamp && (
                        <span className="text-[9px] font-mono text-cyan-400">
                          ⏱ {data.systemDesignDetails.transcriptTimestamp}
                        </span>
                      )}
                    </div>

                    {data.systemDesignDetails.definition && (
                      <div className="text-[10px] text-slate-300 leading-relaxed">
                        <span className="font-semibold text-cyan-300">Definition: </span>
                        {data.systemDesignDetails.definition}
                      </div>
                    )}

                    {data.systemDesignDetails.roleAndWork && (
                      <div className="text-[10px] text-slate-300">
                        <span className="font-semibold text-sky-400">Role &amp; Work: </span>
                        {data.systemDesignDetails.roleAndWork}
                      </div>
                    )}

                    {data.systemDesignDetails.workingMechanism && (
                      <div className="text-[10px] text-slate-300 bg-slate-950/80 p-2 rounded border border-slate-800">
                        <span className="font-semibold text-emerald-400 block mb-0.5">Working Mechanism:</span>
                        <span className="leading-relaxed whitespace-pre-line">{data.systemDesignDetails.workingMechanism}</span>
                      </div>
                    )}

                    {data.systemDesignDetails.exampleUseCase && (
                      <div className="text-[10px] text-amber-200 bg-amber-950/40 p-2 rounded border border-amber-800/60">
                        <span className="font-semibold text-amber-300 block mb-0.5">Transcript Example:</span>
                        <span className="italic leading-relaxed">{data.systemDesignDetails.exampleUseCase}</span>
                      </div>
                    )}

                    {data.systemDesignDetails.tradeOffs && (
                      <div className="text-[10px] text-rose-200 bg-rose-950/40 p-2 rounded border border-rose-800/60">
                        <span className="font-semibold text-rose-300 block mb-0.5">Trade-offs &amp; Bottlenecks:</span>
                        <span className="leading-relaxed">{data.systemDesignDetails.tradeOffs}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Legal Basis / Parent Act */}
                {data.establishingLaw && data.establishingLaw.length > 0 && (
                  <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-700 mb-1">
                      <FileText className="w-3 h-3 text-emerald-700" />
                      <span>{t('card.statutoryBase', currentLanguage)}</span>
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
                          <span className="font-semibold text-slate-700">{t('card.controlledBy', currentLanguage)} </span>
                          <span className="text-slate-600">{getTranslatedGovernanceValue(data.ministerialRelationship, currentLanguage)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Mandate (Common Grounds) */}
                {data.mandate && data.mandate.length > 0 && (
                  <div>
                    <span className="font-bold text-slate-800 text-[10px] uppercase tracking-wide block mb-1">
                      {t('card.mandate', currentLanguage)}
                    </span>
                    <ul className="space-y-0.5 pl-3 list-disc text-slate-700 text-[10.5px]">
                      {data.mandate.slice(0, 3).map((m, idx) => (
                        <li key={idx}>{getTranslatedGovernanceValue(m, currentLanguage)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Powers (Common Grounds) */}
                {data.powers && data.powers.length > 0 && (
                  <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
                    <span className="font-bold text-emerald-950 text-[10.5px] uppercase tracking-wide block mb-1">
                      {t('card.powers', currentLanguage)}
                    </span>
                    <ul className="space-y-1 pl-3 list-disc text-slate-800 text-[10px] leading-relaxed">
                      {data.powers.slice(0, 4).map((p, idx) => (
                        <li key={idx}>{getTranslatedGovernanceValue(p, currentLanguage)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Limitations (Common Grounds) */}
                {data.limitations && data.limitations.length > 0 && (
                  <div className="bg-rose-50/70 p-2.5 rounded-lg border border-rose-200">
                    <span className="font-bold text-rose-950 text-[10.5px] uppercase tracking-wide block mb-1">
                      {t('card.limitations', currentLanguage)}
                    </span>
                    <ul className="space-y-1 pl-0.5">
                      {data.limitations.slice(0, 3).map((l, idx) => (
                        <li key={idx} className="text-[10px] text-rose-950 flex items-start gap-1 leading-relaxed">
                          <span className="text-rose-500 font-bold">✕</span>
                          <span>{getTranslatedGovernanceValue(l, currentLanguage)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Status Bar */}
          <div className="px-3 py-2 bg-slate-50/80 rounded-b-xl border-t border-slate-100 flex items-center justify-between text-[10px] mt-auto">
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${verif.dot}`} />
              <span className="text-slate-600 font-medium">{getTranslatedGovernanceValue(verif.label, currentLanguage)}</span>
            </div>
            <span className="text-[9px] font-mono text-slate-400">
              ID: {data.id}
            </span>
          </div>
        </>
      )}

      <Handle type="source" position={sourcePos} className="!bg-emerald-600 !border-white !w-2.5 !h-2.5" />
    </div>
  );
});

CustomAuthorityNode.displayName = 'CustomAuthorityNode';
