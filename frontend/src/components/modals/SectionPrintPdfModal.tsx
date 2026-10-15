import { useState, useEffect, useMemo } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { SECTION_METAS } from '../../data/sections';
import { EducationNode } from '../../types';
import {
  calculateSectionTreeLayout,
  SectionTreeLayoutResult,
  SectionTreeNode
} from '../../services/layoutService';
import {
  Printer,
  X,
  ArrowUpRight,
  ArrowDownLeft,
  FileCheck2,
  Loader2,
  Maximize2,
  Minimize2,
  Anchor,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ArrowDownUp,
  ArrowLeftRight,
  Sparkles,
  Layers,
  Type,
  Edit3,
  Check,
  Save,
  Route
} from 'lucide-react';

interface NumberStepperInputProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  decimals?: number;
  icon?: React.ReactNode;
  onChange: (val: number) => void;
  title?: string;
}

function NumberStepperInput({
  label,
  value,
  min = 0,
  max,
  step = 1,
  unit = '',
  decimals = 0,
  icon,
  onChange,
  title
}: NumberStepperInputProps) {
  const [localVal, setLocalVal] = useState<string>(
    decimals > 0 ? value.toFixed(decimals) : String(value)
  );

  useEffect(() => {
    setLocalVal(decimals > 0 ? value.toFixed(decimals) : String(value));
  }, [value, decimals]);

  const minVal = min !== undefined ? min : -Infinity;
  const maxVal = max !== undefined ? max : Infinity;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setLocalVal(raw);
    const num = parseFloat(raw);
    if (!isNaN(num) && num >= minVal && num <= maxVal) {
      onChange(decimals > 0 ? Math.round(num * 100) / 100 : Math.round(num));
    }
  };

  const handleBlur = () => {
    let num = parseFloat(localVal);
    if (isNaN(num)) num = value;
    num = Math.max(minVal, Math.min(maxVal, num));
    const rounded = decimals > 0 ? Math.round(num * 100) / 100 : Math.round(num);
    onChange(rounded);
    setLocalVal(decimals > 0 ? rounded.toFixed(decimals) : String(rounded));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlur();
      (e.target as HTMLInputElement).blur();
    }
  };

  const decrement = () => {
    const next = Math.max(minVal, decimals > 0 ? Math.round((value - step) * 100) / 100 : value - step);
    onChange(next);
  };

  const increment = () => {
    const next = Math.min(maxVal, decimals > 0 ? Math.round((value + step) * 100) / 100 : value + step);
    onChange(next);
  };

  return (
    <div
      className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200 shadow-2xs"
      title={title}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="text-[10px] font-semibold text-slate-600 select-none whitespace-nowrap">{label}</span>
      <button
        type="button"
        onClick={decrement}
        className="w-4 h-4 flex items-center justify-center font-bold text-[10px] rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer transition-colors shadow-2xs"
        title={`Decrease ${label}`}
      >
        -
      </button>
      <div className="flex items-center bg-white border border-slate-300 rounded px-1 focus-within:ring-1 focus-within:ring-emerald-700 focus-within:border-emerald-700">
        <input
          type="number"
          step={step}
          min={min}
          max={max}
          value={localVal}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-10 sm:w-12 h-5 text-center font-mono text-[10.5px] font-bold text-slate-900 bg-transparent outline-hidden p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {unit && <span className="text-[9.5px] font-mono text-slate-400 font-semibold select-none pl-0.5">{unit}</span>}
      </div>
      <button
        type="button"
        onClick={increment}
        className="w-4 h-4 flex items-center justify-center font-bold text-[10px] rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer transition-colors shadow-2xs"
        title={`Increase ${label}`}
      >
        +
      </button>
    </div>
  );
}

interface PageSlice {
  sliceId: string;
  partIndex: number;
  partTotal: number;
  partLabel: string;
  clipWidth: number;
  clipHeight: number;
  scale: number;
  translateX: number;
  translateY: number;
  isLastSlice: boolean;
}

function getSlicesForLayout(
  layout: SectionTreeLayoutResult,
  targetPageWidth: number,
  pageSplitMode: 'auto' | 'single' | '2-page' | '4-page',
  isAutoFit: boolean,
  manualScale: number,
  printOrientation: 'landscape' | 'portrait'
): PageSlice[] {
  let split = pageSplitMode;
  if (split === 'auto') {
    if (layout.width > targetPageWidth * 1.85 || layout.height > 1200) {
      split = (layout.width > targetPageWidth * 1.85 && layout.height > 950) ? '4-page' : '2-page';
    } else if (layout.width > targetPageWidth * 1.25) {
      split = '2-page';
    } else {
      split = 'single';
    }
  }

  if (split === 'single') {
    const effectiveScale = isAutoFit
      ? Math.min(1, Math.round((targetPageWidth / layout.width) * 100) / 100)
      : manualScale;
    return [
      {
        sliceId: 'single',
        partIndex: 1,
        partTotal: 1,
        partLabel: 'Complete Tree Diagram (1-Sheet Fit)',
        clipWidth: Math.round(layout.width * effectiveScale),
        clipHeight: Math.round(layout.height * effectiveScale),
        scale: effectiveScale,
        translateX: 0,
        translateY: 0,
        isLastSlice: true
      }
    ];
  }

  if (split === '2-page') {
    // 2-page horizontal split (Left Half & Right Half with generous overlap)
    const halfWidth = Math.ceil(layout.width * 0.56);
    const pageScale = isAutoFit
      ? Math.min(1.0, Math.round((targetPageWidth / halfWidth) * 100) / 100)
      : manualScale;
    const clipWidth = Math.min(targetPageWidth, Math.round(halfWidth * pageScale));
    const clipHeight = Math.round(layout.height * pageScale);

    return [
      {
        sliceId: '2p-left',
        partIndex: 1,
        partTotal: 2,
        partLabel: 'Part 1 of 2: Left Section Authorities',
        clipWidth,
        clipHeight,
        scale: pageScale,
        translateX: 0,
        translateY: 0,
        isLastSlice: false
      },
      {
        sliceId: '2p-right',
        partIndex: 2,
        partTotal: 2,
        partLabel: 'Part 2 of 2: Right Section Authorities',
        clipWidth,
        clipHeight,
        scale: pageScale,
        translateX: -Math.round(layout.width * 0.44 * pageScale),
        translateY: 0,
        isLastSlice: true
      }
    ];
  }

  // 4-page grid split (Top-Left, Top-Right, Bottom-Left, Bottom-Right)
  const quadWidth = Math.ceil(layout.width * 0.56);
  const quadHeight = Math.ceil(layout.height * 0.56);
  const targetPageHeight = printOrientation === 'landscape' ? 620 : 880;
  const pageScale = isAutoFit
    ? Math.min(1.0, Math.round(Math.min(targetPageWidth / quadWidth, targetPageHeight / quadHeight) * 100) / 100)
    : manualScale;

  const clipWidth = Math.min(targetPageWidth, Math.round(quadWidth * pageScale));
  const clipHeight = Math.min(targetPageHeight, Math.round(quadHeight * pageScale));

  const offX = -Math.round(layout.width * 0.44 * pageScale);
  const offY = -Math.round(layout.height * 0.44 * pageScale);

  return [
    {
      sliceId: '4p-top-left',
      partIndex: 1,
      partTotal: 4,
      partLabel: 'Part 1 of 4: Top-Left Quadrant',
      clipWidth,
      clipHeight,
      scale: pageScale,
      translateX: 0,
      translateY: 0,
      isLastSlice: false
    },
    {
      sliceId: '4p-top-right',
      partIndex: 2,
      partTotal: 4,
      partLabel: 'Part 2 of 4: Top-Right Quadrant',
      clipWidth,
      clipHeight,
      scale: pageScale,
      translateX: offX,
      translateY: 0,
      isLastSlice: false
    },
    {
      sliceId: '4p-bottom-left',
      partIndex: 3,
      partTotal: 4,
      partLabel: 'Part 3 of 4: Bottom-Left Quadrant',
      clipWidth,
      clipHeight,
      scale: pageScale,
      translateX: 0,
      translateY: offY,
      isLastSlice: false
    },
    {
      sliceId: '4p-bottom-right',
      partIndex: 4,
      partTotal: 4,
      partLabel: 'Part 4 of 4: Bottom-Right Quadrant',
      clipWidth,
      clipHeight,
      scale: pageScale,
      translateX: offX,
      translateY: offY,
      isLastSlice: true
    }
  ];
}

export function SectionPrintPdfModal() {
  const {
    activeModal,
    closeModal,
    nodes,
    relationships,
    updateNode,
    selectNode,
    toggleDetailPanel
  } = useWhiteboardStore();

  const [selectedSectionId, setSelectedSectionId] = useState<string>('all');
  const [printDossierMode, setPrintDossierMode] = useState<boolean>(false);
  const [treeDirection, setTreeDirection] = useState<'DOWN' | 'RIGHT'>('DOWN');
  const [printOrientation, setPrintOrientation] = useState<'landscape' | 'portrait'>('landscape');

  // Styling & Print Options
  const [arrowStyle, setArrowStyle] = useState<'curved' | 'straight' | 'orthogonal' | 'rounded-orthogonal'>('curved');
  const [pageSplitMode, setPageSplitMode] = useState<'auto' | 'single' | '2-page' | '4-page'>('single');
  const [showFkTable, setShowFkTable] = useState<boolean>(true);

  // Sizing & Spacing state (NO upper caps)
  const [isAutoFit, setIsAutoFit] = useState<boolean>(true);
  const [manualScale, setManualScale] = useState<number>(0.85);
  const [customNodeSpacing, setCustomNodeSpacing] = useState<number>(50); // H-Space
  const [customVSpacing, setCustomVSpacing] = useState<number>(50);       // V-Space
  const [customArrowHeight, setCustomArrowHeight] = useState<number>(85); // Arrow Height
  const [nodeBoxWidth, setNodeBoxWidth] = useState<number>(260);
  const [cardHeightPercent, setCardHeightPercent] = useState<number>(100);
  const [fontSizePx, setFontSizePx] = useState<number>(11);
  const [lineHeightMult, setLineHeightMult] = useState<number>(1.35);
  const [paraSpacingPx, setParaSpacingPx] = useState<number>(6);
  const [alternateDepth, setAlternateDepth] = useState<boolean>(true);
  const [alternateSpacingPx, setAlternateSpacingPx] = useState<number>(45);
  const [fkMode, setFkMode] = useState<'docked' | 'stubs'>('docked');

  // Inline Editing & Confirmation state
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<Partial<EducationNode>>({});
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  const [treeLayouts, setTreeLayouts] = useState<Record<string, SectionTreeLayoutResult>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isOpen = activeModal === 'pdf-print';

  // Synchronize orientation class on body for browser @page print
  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('print-orientation-portrait', 'print-orientation-landscape');
      return;
    }

    if (printOrientation === 'portrait') {
      document.body.classList.add('print-orientation-portrait');
      document.body.classList.remove('print-orientation-landscape');
    } else {
      document.body.classList.add('print-orientation-landscape');
      document.body.classList.remove('print-orientation-portrait');
    }

    return () => {
      document.body.classList.remove('print-orientation-portrait', 'print-orientation-landscape');
    };
  }, [isOpen, printOrientation]);

  // Determine which sections to render
  const sectionsToRender = useMemo(() => {
    return selectedSectionId === 'all'
      ? SECTION_METAS.filter((s) => s.id !== 'SEC-00')
      : SECTION_METAS.filter((s) => s.id === selectedSectionId);
  }, [selectedSectionId]);

  // Adjust default spacing & width when dossier mode changes
  useEffect(() => {
    if (printDossierMode) {
      setCustomNodeSpacing((prev) => (prev < 65 ? 65 : prev));
      setCustomVSpacing((prev) => (prev < 65 ? 65 : prev));
      setCustomArrowHeight((prev) => (prev < 120 ? 140 : prev));
      setNodeBoxWidth((prev) => (prev < 320 ? 320 : prev));
    } else {
      setCustomNodeSpacing((prev) => (prev > 65 ? 50 : prev));
      setCustomVSpacing((prev) => (prev > 65 ? 50 : prev));
      setCustomArrowHeight((prev) => (prev > 100 ? 85 : prev));
      setNodeBoxWidth((prev) => (prev > 300 ? 260 : prev));
    }
  }, [printDossierMode]);

  // Compute ELK tree layouts for all target sections whenever layout parameters change
  useEffect(() => {
    if (!isOpen) return;

    let isCancelled = false;
    setIsLoading(true);

    const promises = sectionsToRender.map((sec) =>
      calculateSectionTreeLayout(sec.id, nodes, relationships, {
        isDossier: printDossierMode,
        direction: treeDirection,
        nodeSpacing: customNodeSpacing,
        vSpacing: customVSpacing,
        arrowHeight: customArrowHeight,
        layerSpacing: customArrowHeight,
        nodeWidth: nodeBoxWidth,
        cardHeightScale: cardHeightPercent / 100,
        alternateDepth: alternateDepth,
        alternateSpacing: alternateSpacingPx,
        fontSize: fontSizePx,
        lineHeight: lineHeightMult,
        paraSpacing: paraSpacingPx,
        fkMode: fkMode,
        arrowStyle: arrowStyle
      })
    );

    Promise.all(promises).then((results) => {
      if (!isCancelled) {
        const layoutMap: Record<string, SectionTreeLayoutResult> = {};
        results.forEach((res) => {
          layoutMap[res.sectionId] = res;
        });
        setTreeLayouts(layoutMap);
        setIsLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [
    isOpen,
    selectedSectionId,
    printDossierMode,
    treeDirection,
    customNodeSpacing,
    customVSpacing,
    customArrowHeight,
    nodeBoxWidth,
    cardHeightPercent,
    alternateDepth,
    alternateSpacingPx,
    fontSizePx,
    lineHeightMult,
    paraSpacingPx,
    fkMode,
    arrowStyle,
    nodes,
    relationships
  ]);

  const handlePrint = () => {
    window.print();
  };

  const resetSpacingAndSizing = () => {
    setIsAutoFit(true);
    setManualScale(0.85);
    setCustomNodeSpacing(printDossierMode ? 65 : 50);
    setCustomVSpacing(printDossierMode ? 65 : 50);
    setCustomArrowHeight(printDossierMode ? 140 : 85);
    setNodeBoxWidth(printDossierMode ? 320 : 260);
    setCardHeightPercent(100);
    setFontSizePx(11);
    setLineHeightMult(1.35);
    setParaSpacingPx(6);
    setAlternateDepth(false);
    setAlternateSpacingPx(45);
    setFkMode('docked');
    setArrowStyle('curved');
    setPageSplitMode('auto');
    setShowFkTable(true);
  };

  // Node editing actions
  const handleNodeClick = (node: SectionTreeNode) => {
    if (node.isFk || !node.data) return;
    if (editingNodeId === node.id) return;

    const switchToNewNode = () => {
      setEditingNodeId(node.id);
      setEditDraft({ ...node.data });
      setIsDirty(false);
    };

    if (isDirty) {
      setPendingAction(() => switchToNewNode);
      setShowConfirmModal(true);
    } else {
      switchToNewNode();
    }
  };

  const handleSaveChanges = () => {
    if (editingNodeId && editDraft) {
      updateNode(editingNodeId, editDraft);
      setIsDirty(false);
      setEditingNodeId(null);
    }
  };

  const handleCancelChanges = () => {
    if (isDirty) {
      setPendingAction(() => () => {
        setIsDirty(false);
        setEditingNodeId(null);
      });
      setShowConfirmModal(true);
    } else {
      setEditingNodeId(null);
    }
  };

  const handleConfirmSave = () => {
    if (editingNodeId && editDraft) {
      updateNode(editingNodeId, editDraft);
      setIsDirty(false);
      setEditingNodeId(null);
    }
    setShowConfirmModal(false);
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
  };

  const handleConfirmDiscard = () => {
    setIsDirty(false);
    setEditingNodeId(null);
    setShowConfirmModal(false);
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
  };

  const handleCloseModal = () => {
    if (isDirty) {
      setPendingAction(() => () => {
        setEditingNodeId(null);
        closeModal();
      });
      setShowConfirmModal(true);
    } else {
      setEditingNodeId(null);
      closeModal();
    }
  };

  const handleOpenInDrawer = (nodeId: string) => {
    selectNode(nodeId);
    toggleDetailPanel(true);
  };

  // Uniform typography and spacing scale across all titles, badges, and text blocks in each node
  const typo = useMemo(() => {
    const fs = fontSizePx;
    const lh = lineHeightMult;
    const ps = paraSpacingPx;
    return {
      fontSizePx: fs,
      lineHeight: lh,
      paraSpacingPx: ps,
      hubTitle: `${Math.round(fs * 1.35 * 10) / 10}px`,
      title: `${Math.round(fs * 1.18 * 10) / 10}px`,
      body: `${fs}px`,
      sub: `${Math.round(fs * 0.9 * 10) / 10}px`,
      badge: `${Math.round(fs * 0.82 * 10) / 10}px`,
      micro: `${Math.round(fs * 0.74 * 10) / 10}px`,
      spacing: `${ps}px`,
      spacingHalf: `${Math.max(2, Math.round(ps / 2))}px`,
      spacingQuarter: `${Math.max(1, Math.round(ps / 3))}px`
    };
  }, [fontSizePx, lineHeightMult, paraSpacingPx]);

  if (!isOpen) return null;

  // Approximate printable target width in pixels for page scaling
  const targetPageWidth = printOrientation === 'landscape' ? 1040 : 740;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 print:p-0 print:bg-white print:static print:inset-auto">
      <div className="relative w-full max-w-7xl h-[96vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 print:h-auto print:max-w-none print:shadow-none print:border-none print:rounded-none">
        {/* Top Control Bar 1: Main Title, Scope, Print Trigger & Close (Hidden in print) */}
        <div className="no-print border-b border-slate-200 px-6 py-2 bg-slate-50 flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center shadow-xs">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                Section Tree Diagram Print &amp; PDF Engine
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Vector PDF Multi-Page Slicing
                </span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Click any card to edit details inline or in full drawer. Choose arrow geometry, multi-page PDF splits, and FK linkage options.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Scope Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="section-select" className="text-xs font-semibold text-slate-600">
                Scope:
              </label>
              <select
                id="section-select"
                value={selectedSectionId}
                onChange={(e) => {
                  const val = e.target.value;
                  if (isDirty) {
                    setPendingAction(() => () => setSelectedSectionId(val));
                    setShowConfirmModal(true);
                  } else {
                    setSelectedSectionId(val);
                  }
                }}
                className="text-xs font-medium rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-slate-800 shadow-2xs focus:ring-2 focus:ring-emerald-700/30 focus:outline-hidden"
              >
                <option value="all">All 16 Sections (Multi-Page Tree Diagram Booklet)</option>
                {SECTION_METAS.filter((s) => s.id !== 'SEC-00').map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    Sec {sec.number}: {sec.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Alternate Depth Indicator / Switch */}
            <button
              onClick={() => setAlternateDepth(!alternateDepth)}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                alternateDepth
                  ? 'border-amber-400 bg-amber-100 text-amber-950 shadow-xs ring-2 ring-amber-400/40'
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
              }`}
              title="Toggle Alternate Depth (Zig-Zag Staggered Baselines) to save space and eliminate horizontal overflow"
            >
              <Layers className={`w-4 h-4 ${alternateDepth ? 'text-amber-700' : 'text-slate-500'}`} />
              <span>Alternate Depth:</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-black ${
                alternateDepth ? 'bg-emerald-800 text-amber-300' : 'bg-slate-100 text-slate-600'
              }`}>
                {alternateDepth ? `ON (${alternateSpacingPx}px)` : 'OFF'}
              </span>
            </button>

            {/* Print Trigger Button */}
            <button
              onClick={handlePrint}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 hover:text-amber-200 text-xs font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50"
            >
              <Printer className="w-4 h-4" />
              <span>Save as PDF / Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              title="Close print preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Top Control Bar 2: Fine-Tuning Layout, Spacing, Sizing, Arrows, Splitting (Hidden in print) */}
        <div className="no-print bg-white border-b border-slate-200 px-6 py-2 flex flex-wrap items-center justify-between gap-2.5 text-xs text-slate-700">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Dossier vs No Dossier Mode */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setPrintDossierMode(false)}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  !printDossierMode
                    ? 'bg-white text-emerald-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Compact cards for clean 1-sheet fit"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Compact</span>
              </button>
              <button
                onClick={() => setPrintDossierMode(true)}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  printDossierMode
                    ? 'bg-emerald-900 text-amber-300 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Include powers, limitations, and mandates inside tree nodes"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full Dossier</span>
              </button>
            </div>

            {/* Arrow Style Selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200" title="Arrow connector routing style">
              <span className="text-[10px] font-semibold text-slate-500 pl-1 flex items-center gap-1">
                <Route className="w-3 h-3 text-slate-600" />
                Arrows:
              </span>
              <button
                onClick={() => setArrowStyle('curved')}
                className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all ${
                  arrowStyle === 'curved' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Smooth curved Bezier lines"
              >
                Curved
              </button>
              <button
                onClick={() => setArrowStyle('straight')}
                className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all ${
                  arrowStyle === 'straight' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Direct straight point-to-point lines"
              >
                Straight
              </button>
              <button
                onClick={() => setArrowStyle('orthogonal')}
                className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all ${
                  arrowStyle === 'orthogonal' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="90° sharp orthogonal elbow lines"
              >
                90° Ortho
              </button>
              <button
                onClick={() => setArrowStyle('rounded-orthogonal')}
                className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all ${
                  arrowStyle === 'rounded-orthogonal' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Rounded orthogonal elbow lines with smooth fillets"
              >
                Rounded
              </button>
            </div>

            {/* PDF View Mode: Normal Zoomed-Out View (Original) vs Multi-Page Division */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-300 shadow-2xs" title="PDF Page Division: Choose between original single-sheet fit or multi-page slicing">
              <span className="text-[10px] font-bold text-slate-700 pl-1.5 flex items-center gap-1">
                <Printer className="w-3 h-3 text-emerald-800" />
                Print Layout:
              </span>
              <button
                type="button"
                onClick={() => setPageSplitMode('single')}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                  pageSplitMode === 'single'
                    ? 'bg-emerald-900 text-amber-300 shadow-xs ring-1 ring-emerald-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                title="Normal zoomed-out view (Original 1-page fit): scales entire diagram to fit on 1 sheet"
              >
                <Minimize2 className="w-3 h-3 text-amber-400" />
                <span>Normal Zoomed-Out View (Original 1-Page Fit)</span>
              </button>
              <div className="flex items-center gap-0.5 pl-1 border-l border-slate-300">
                <span className="text-[9.5px] font-semibold text-slate-400 px-1">Multi-Page:</span>
                <button
                  type="button"
                  onClick={() => setPageSplitMode('auto')}
                  className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                    pageSplitMode === 'auto'
                      ? 'bg-emerald-800 text-amber-300 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Automatically divides wide diagrams into 2 or 4 pages for crystal-clear readability"
                >
                  Auto Split
                </button>
                <button
                  type="button"
                  onClick={() => setPageSplitMode('2-page')}
                  className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                    pageSplitMode === '2-page'
                      ? 'bg-emerald-800 text-amber-300 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Divide horizontally into 2 wide pages (Left / Right)"
                >
                  2 Pages (L/R)
                </button>
                <button
                  type="button"
                  onClick={() => setPageSplitMode('4-page')}
                  className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                    pageSplitMode === '4-page'
                      ? 'bg-emerald-800 text-amber-300 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Divide into 4 quadrant pages (2x2 grid) for massive trees"
                >
                  4 Pages (Grid)
                </button>
              </div>
            </div>

            {/* FK Table Toggle (Keep or Remove Sub-Section) */}
            <button
              onClick={() => setShowFkTable(!showFkTable)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all ${
                showFkTable
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-2xs'
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-800'
              }`}
              title="Toggle Foreign Key Linkage Stubs subsection from printed booklet"
            >
              <FileCheck2 className={`w-3.5 h-3.5 ${showFkTable ? 'text-amber-700' : 'text-slate-400'}`} />
              <span>FK Table:</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-bold ${
                showFkTable ? 'bg-emerald-800 text-amber-300' : 'bg-slate-200 text-slate-600'
              }`}>
                {showFkTable ? 'SHOW' : 'HIDE'}
              </span>
            </button>

            {/* Foreign Key Bridge Placement Style */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setFkMode('docked')}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  fkMode === 'docked'
                    ? 'bg-emerald-900 text-amber-300 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Dock FK links cleanly inside cards for 100% overlap-free compact diagrams"
              >
                <Anchor className="w-3.5 h-3.5" />
                <span>FKs: Docked</span>
              </button>
              <button
                onClick={() => setFkMode('stubs')}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  fkMode === 'stubs'
                    ? 'bg-emerald-900 text-amber-300 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Render Foreign Keys as standalone external stub boxes with connector lines"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>FKs: Stubs</span>
              </button>
            </div>

            {/* Alternate Depth Placing (Staggered Baselines) & Height Spacing */}
            <div className={`flex items-center gap-2 px-3 py-1 rounded-xl border transition-all ${
              alternateDepth
                ? 'bg-amber-100/90 border-amber-400 text-amber-950 shadow-xs ring-2 ring-amber-400/40'
                : 'bg-amber-50/70 border-amber-300 text-amber-900'
            }`}>
              <button
                onClick={() => setAlternateDepth(!alternateDepth)}
                className="flex items-center gap-1.5 text-[11px] font-bold hover:opacity-80 transition-opacity"
                title="Staggers sibling nodes in depth (zig-zag baselines) to reduce horizontal breadth"
              >
                <Layers className={`w-4 h-4 ${alternateDepth ? 'text-amber-700 animate-pulse' : 'text-amber-600'}`} />
                <span>Alternate Depth:</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-black uppercase transition-colors ${
                  alternateDepth
                    ? 'bg-emerald-800 text-amber-300 shadow-2xs'
                    : 'bg-white text-slate-500 border border-slate-200'
                }`}>
                  {alternateDepth ? 'ON' : 'OFF'}
                </span>
              </button>

              {/* Numerical Stagger Stepper - NO UPPER LIMIT */}
              <div className="flex items-center gap-1 pl-1 border-l border-amber-300">
                <NumberStepperInput
                  label="Stagger:"
                  value={alternateSpacingPx}
                  min={0}
                  step={10}
                  unit="px"
                  onChange={(val) => {
                    setAlternateDepth(true);
                    setAlternateSpacingPx(val);
                  }}
                  title="Alternate depth vertical stagger offset (enter any desired value)"
                />
              </div>
            </div>

            {/* Tree Flow Direction */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setTreeDirection('DOWN')}
                className={`flex items-center gap-1 px-2 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  treeDirection === 'DOWN'
                    ? 'bg-white text-emerald-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Vertical hierarchy flow"
              >
                <ArrowDownUp className="w-3.5 h-3.5" />
                <span>Top-Down</span>
              </button>
              <button
                onClick={() => setTreeDirection('RIGHT')}
                className={`flex items-center gap-1 px-2 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  treeDirection === 'RIGHT'
                    ? 'bg-white text-emerald-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Horizontal hierarchy flow"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Left-Right</span>
              </button>
            </div>

            {/* Print Page Orientation */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setPrintOrientation('landscape')}
                className={`px-2 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  printOrientation === 'landscape'
                    ? 'bg-white text-emerald-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Landscape
              </button>
              <button
                onClick={() => setPrintOrientation('portrait')}
                className={`px-2 py-1 text-[11px] font-semibold rounded-md transition-all ${
                  printOrientation === 'portrait'
                    ? 'bg-white text-emerald-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Portrait
              </button>
            </div>
          </div>

          {/* Sizing, Spacing, Box Width & Font Scale Steppers (NO UPPER LIMITS) */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Auto-Fit vs Manual Zoom */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setIsAutoFit(true)}
                className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all ${
                  isAutoFit ? 'bg-emerald-800 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Auto-calculate scale to prevent scroll cutoffs on printable page"
              >
                <Sparkles className="w-3 h-3" />
                <span>Auto-Fit</span>
              </button>

              <div className="flex items-center gap-1 pl-1 border-l border-slate-200">
                <button
                  onClick={() => {
                    setIsAutoFit(false);
                    setManualScale((prev) => Math.max(0.1, Math.round((prev - 0.1) * 10) / 10));
                  }}
                  className="p-1 rounded hover:bg-slate-200 text-slate-700"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3 h-3" />
                </button>
                <span className="font-mono font-semibold text-[10.5px] px-1 min-w-[34px] text-center">
                  {isAutoFit ? 'Auto' : `${Math.round(manualScale * 100)}%`}
                </span>
                <button
                  onClick={() => {
                    setIsAutoFit(false);
                    setManualScale((prev) => Math.round((prev + 0.1) * 10) / 10);
                  }}
                  className="p-1 rounded hover:bg-slate-200 text-slate-700"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card Width */}
            <NumberStepperInput
              label="Card Width:"
              value={nodeBoxWidth}
              min={50}
              step={10}
              unit="px"
              onChange={setNodeBoxWidth}
              title="Width of each card box (enter any value)"
            />

            {/* Card Height */}
            <NumberStepperInput
              label="Card Height:"
              value={cardHeightPercent}
              min={10}
              step={5}
              unit="%"
              onChange={setCardHeightPercent}
              title="Card height scaling percentage to eliminate empty space below cards (enter any value)"
            />

            {/* Horizontal Card Spacing */}
            <NumberStepperInput
              label="H-Space:"
              value={customNodeSpacing}
              min={0}
              step={10}
              unit="px"
              onChange={setCustomNodeSpacing}
              title="Horizontal spacing between cards in the tree diagram (enter any value)"
            />

            {/* Vertical Card Spacing */}
            <NumberStepperInput
              label="V-Space:"
              value={customVSpacing}
              min={0}
              step={10}
              unit="px"
              onChange={setCustomVSpacing}
              title="Vertical spacing between cards in the tree diagram (enter any value)"
            />

            {/* Arrow Height */}
            <NumberStepperInput
              label={treeDirection === 'RIGHT' ? 'Arrow Len:' : 'Arrow Height:'}
              value={customArrowHeight}
              min={0}
              step={10}
              unit="px"
              onChange={setCustomArrowHeight}
              title="Connector arrow clearance between node ranks (enter any value)"
            />

            {/* Font Size */}
            <NumberStepperInput
              label="Font:"
              value={fontSizePx}
              min={4}
              step={1}
              unit="px"
              icon={<Type className="w-3.5 h-3.5 text-slate-500" />}
              onChange={setFontSizePx}
              title="Base font size for card text (enter any value)"
            />

            {/* Line Height */}
            <NumberStepperInput
              label="Line H:"
              value={lineHeightMult}
              min={0.5}
              step={0.05}
              decimals={2}
              unit="x"
              onChange={setLineHeightMult}
              title="Line height multiplier (enter any value)"
            />

            {/* Paragraph / Block Spacing */}
            <NumberStepperInput
              label="Para Space:"
              value={paraSpacingPx}
              min={0}
              step={1}
              unit="px"
              onChange={setParaSpacingPx}
              title="Paragraph and block vertical spacing inside cards (enter any value)"
            />

            {/* Reset Defaults Button */}
            <button
              onClick={resetSpacingAndSizing}
              className="p-1 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600"
              title="Reset spacing, sizing, and styling to optimal defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Top Sticky Inline Edit Banner (Visible when an authority node is actively being edited) */}
        {editingNodeId && (
          <div className="no-print bg-emerald-900 text-white px-6 py-2 flex items-center justify-between text-xs font-medium border-b border-emerald-700 shadow-inner">
            <div className="flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-amber-400" />
              <span>
                Editing Authority:{' '}
                <strong className="text-amber-300 font-bold">{editDraft.title || editingNodeId}</strong>
              </span>
              {isDirty && (
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-black text-[10px] animate-pulse">
                  Unsaved Changes
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveChanges}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-[11px] shadow-2xs transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
              <button
                onClick={handleCancelChanges}
                className="px-2.5 py-1 rounded-md bg-emerald-950/80 hover:bg-emerald-950 text-slate-200 font-semibold text-[11px] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleOpenInDrawer(editingNodeId)}
                className="px-2.5 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white font-semibold text-[11px] transition-colors cursor-pointer"
              >
                Open Full Drawer
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Modal when Leaving or Switching with Unsaved Changes */}
        {showConfirmModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Edit3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Confirm Changes Before Leaving
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                You have unsaved changes to{' '}
                <span className="font-semibold text-slate-900">{editDraft.title || 'this authority'}</span>.
                Would you like to save your changes to the live whiteboard model or discard them?
              </p>
              <div className="flex items-center justify-end gap-2.5">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Keep Editing
                </button>
                <button
                  onClick={handleConfirmDiscard}
                  className="px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  Discard Changes
                </button>
                <button
                  onClick={handleConfirmSave}
                  className="px-4 py-1.5 rounded-lg bg-emerald-900 text-xs font-bold text-amber-300 hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="no-print flex-1 flex flex-col items-center justify-center gap-3 bg-slate-50/70 p-8">
            <Loader2 className="w-8 h-8 text-emerald-800 animate-spin" />
            <div className="text-center">
              <h4 className="text-sm font-bold text-slate-800">Calculating Section Tree Diagram Layouts (ELK.js)...</h4>
              <p className="text-xs text-slate-500 mt-1">
                Laying out local authority hierarchy with alternate depth placing, connector arrows, and foreign key bridges
              </p>
            </div>
          </div>
        )}

        {/* Printable Document View (Scrollable on screen, paginated with clean page breaks on print) */}
        {!isLoading && (
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-12 bg-slate-100/60 print:bg-white print:p-0 print:space-y-0 print:overflow-visible print-document-container">
            {sectionsToRender.map((sec) => {
              const layout = treeLayouts[sec.id];
              if (!layout) return null;

              const totalFks = layout.foreignKeys.length;
              const slices = getSlicesForLayout(
                layout,
                targetPageWidth,
                pageSplitMode,
                isAutoFit,
                manualScale,
                printOrientation
              );

              return (
                <div key={sec.id} className="space-y-8 print:space-y-0">
                  {slices.map((slice) => {
                    return (
                      <div
                        key={`${sec.id}-${slice.sliceId}`}
                        className={`section-page ${
                          printOrientation === 'portrait' ? 'page-portrait' : 'page-landscape'
                        } bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm print:shadow-none print:border-none print:p-6 print:rounded-none print-page-break print-avoid-break mb-8 print:mb-0`}
                      >
                        {/* Section Title Banner */}
                        <div className="border-b-2 border-emerald-900/20 pb-3 mb-5 flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest">
                              <span>SECTION {sec.number} OF 16</span>
                              <span>•</span>
                              <span>ID: {sec.id}</span>
                              <span>•</span>
                              <span>GOVERNANCE TREE DIAGRAM</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5 flex items-center gap-2">
                              <span>{sec.title}</span>
                              {slice.partTotal > 1 && (
                                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                                  {slice.partLabel}
                                </span>
                              )}
                            </h2>
                            <p className="text-xs text-slate-600 mt-0.5 font-medium leading-relaxed">
                              {sec.subtitle}
                            </p>
                          </div>

                          <div className="flex flex-col items-end gap-1 flex-shrink-0 text-right">
                            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                              {layout.nodes.filter((n) => !n.isFk).length} Authorities
                            </span>
                            <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              {totalFks} Foreign Key {totalFks === 1 ? 'Stub' : 'Stubs'}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              Scale: {Math.round(slice.scale * 100)}% • {arrowStyle} arrows • {alternateDepth ? 'Zig-Zag' : 'Standard'}
                            </span>
                            <button
                              onClick={() => setAlternateDepth(!alternateDepth)}
                              className="no-print mt-0.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border transition-colors cursor-pointer bg-amber-50 hover:bg-amber-100 text-amber-950 border-amber-300 shadow-2xs"
                              title="Click to toggle Alternate Depth placing (staggered baselines) on this tree"
                            >
                              <Layers className="w-3.5 h-3.5 text-amber-700" />
                              <span>Alternate Depth:</span>
                              <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] font-black ${
                                alternateDepth ? 'bg-emerald-800 text-amber-300' : 'bg-slate-200 text-slate-700'
                              }`}>
                                {alternateDepth ? `ON (${alternateSpacingPx}px)` : 'OFF'}
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* VISUAL TREE DIAGRAM (Auto-Scaled or Multi-Page Sliced) */}
                        <div className="mb-6 overflow-x-auto print:overflow-visible border border-slate-200 rounded-xl bg-slate-50/40 p-3 sm:p-4">
                          <div
                            className="tree-diagram-viewport overflow-hidden print:overflow-hidden relative"
                            style={{
                              width: `${slice.clipWidth}px`,
                              height: `${slice.clipHeight}px`,
                              maxWidth: '100%'
                            }}
                          >
                            <div
                              className="tree-diagram-scaler origin-top-left absolute top-0 left-0 transition-transform duration-100"
                              style={{
                                transform: `translate(${slice.translateX}px, ${slice.translateY}px) scale(${slice.scale})`,
                                width: `${layout.width}px`,
                                height: `${layout.height}px`
                              }}
                            >
                              {/* SVG Vector Connector Edges Layer */}
                              <svg
                                className="absolute inset-0 pointer-events-none"
                                width={layout.width}
                                height={layout.height}
                              >
                                <defs>
                                  <marker
                                    id={`arrow-internal-${sec.id}`}
                                    viewBox="0 0 10 10"
                                    refX="8"
                                    refY="5"
                                    markerWidth="7"
                                    markerHeight="7"
                                    orient="auto"
                                  >
                                    <polygon points="0 1.5, 8 5, 0 8.5" fill="#15803d" />
                                  </marker>
                                  <marker
                                    id={`arrow-fk-out-${sec.id}`}
                                    viewBox="0 0 10 10"
                                    refX="8"
                                    refY="5"
                                    markerWidth="7"
                                    markerHeight="7"
                                    orient="auto"
                                  >
                                    <polygon points="0 1.5, 8 5, 0 8.5" fill="#d97706" />
                                  </marker>
                                  <marker
                                    id={`arrow-fk-in-${sec.id}`}
                                    viewBox="0 0 10 10"
                                    refX="8"
                                    refY="5"
                                    markerWidth="7"
                                    markerHeight="7"
                                    orient="auto"
                                  >
                                    <polygon points="0 1.5, 8 5, 0 8.5" fill="#0284c7" />
                                  </marker>
                                </defs>

                                {/* Pass 1: White Contrast Halo Underlay */}
                                {layout.edges.map((edge) => (
                                  <path
                                    key={`halo-${edge.id}`}
                                    d={edge.pathD}
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth={edge.isFk ? 5.2 : 4.6}
                                    strokeLinecap="round"
                                    opacity="0.95"
                                  />
                                ))}

                                {/* Pass 2: Crisp Colored Vector Paths with Sharp Arrowheads */}
                                {layout.edges.map((edge) => {
                                  const isFkOut = edge.target.startsWith('FK-OUT-');
                                  const isFkIn = edge.source.startsWith('FK-IN-');
                                  const strokeColor = isFkOut ? '#d97706' : isFkIn ? '#0284c7' : '#15803d';
                                  const markerId = isFkOut
                                    ? `arrow-fk-out-${sec.id}`
                                    : isFkIn
                                    ? `arrow-fk-in-${sec.id}`
                                    : `arrow-internal-${sec.id}`;

                                  return (
                                    <path
                                      key={edge.id}
                                      d={edge.pathD}
                                      fill="none"
                                      stroke={strokeColor}
                                      strokeWidth={edge.isFk ? 2.2 : 2.0}
                                      strokeDasharray={edge.isFk ? '6,4' : undefined}
                                      strokeLinecap="round"
                                      markerEnd={`url(#${markerId})`}
                                    />
                                  );
                                })}
                              </svg>

                              {/* Render Nodes Layer */}
                              {layout.nodes.map((node) => {
                                // 1. Foreign Key Link Stub Node
                                if (node.isFk) {
                                  const isOut = node.fkDirection === 'out';
                                  return (
                                    <div
                                      key={node.id}
                                      className={`absolute rounded-xl border p-2 flex flex-col justify-start shadow-2xs ${
                                        isOut
                                          ? 'bg-amber-50/95 border-amber-300 text-amber-900'
                                          : 'bg-sky-50/95 border-sky-300 text-sky-900'
                                      }`}
                                      style={{
                                        left: `${node.x}px`,
                                        top: `${node.y}px`,
                                        width: `${node.width}px`,
                                        height: `${node.height}px`,
                                        lineHeight: typo.lineHeight
                                      }}
                                    >
                                      <div className="flex items-center justify-between gap-1" style={{ marginBottom: typo.spacingQuarter }}>
                                        <div className="flex items-center gap-1.5 min-w-0">
                                          <Anchor className={`w-3.5 h-3.5 flex-shrink-0 ${isOut ? 'text-amber-700' : 'text-sky-700'}`} />
                                          <span
                                            className="font-bold uppercase tracking-wider truncate"
                                            style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                          >
                                            {isOut ? 'FK Outgoing ➔' : 'FK Incoming ⬅'}
                                          </span>
                                        </div>
                                        <span
                                          className={`font-mono font-bold px-1.5 py-0.2 rounded border truncate max-w-[120px] ${
                                            isOut ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-sky-100 text-sky-800 border-sky-200'
                                          }`}
                                          style={{ fontSize: typo.micro, lineHeight: typo.lineHeight }}
                                        >
                                          {node.relLabel}
                                        </span>
                                      </div>
                                      <div
                                        className="font-bold truncate"
                                        style={{
                                          fontSize: typo.title,
                                          lineHeight: typo.lineHeight,
                                          marginTop: typo.spacingQuarter,
                                          marginBottom: typo.spacingQuarter
                                        }}
                                      >
                                        {node.extSectionNumber ? `Sec ${node.extSectionNumber}: ` : ''}{node.extNodeTitle}
                                      </div>
                                      <div
                                        className="font-mono text-slate-500 truncate mt-auto"
                                        style={{ fontSize: typo.micro, lineHeight: typo.lineHeight }}
                                      >
                                        ID: {node.extNodeId}
                                      </div>
                                    </div>
                                  );
                                }

                                // 2. Local Authority or Hub Node
                                const data = node.data;
                                if (!data) return null;
                                const isHub = data.type === 'sectionHub';

                                if (isHub) {
                                  return (
                                    <div
                                      key={node.id}
                                      className="absolute rounded-xl border-2 border-emerald-900 bg-emerald-900 text-white p-3 shadow-md flex flex-col justify-center"
                                      style={{
                                        left: `${node.x}px`,
                                        top: `${node.y}px`,
                                        width: `${node.width}px`,
                                        height: `${node.height}px`,
                                        lineHeight: typo.lineHeight
                                      }}
                                    >
                                      <div>
                                        <div
                                          className="flex items-center justify-between gap-1 text-amber-400 font-mono font-bold uppercase tracking-wider"
                                          style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                        >
                                          <span>SECTION {data.sectionNumber}</span>
                                          <span>{data.abbreviation}</span>
                                        </div>
                                        <h3
                                          className="font-bold"
                                          style={{
                                            fontSize: typo.hubTitle,
                                            lineHeight: typo.lineHeight,
                                            marginTop: typo.spacingQuarter,
                                            marginBottom: typo.spacingQuarter
                                          }}
                                        >
                                          {data.title}
                                        </h3>
                                      </div>
                                    </div>
                                  );
                                }

                                // 3. Standard Authority Node (With Direct Inline Editing & Hover Indicators)
                                const isEditing = editingNodeId === node.id;

                                return (
                                  <div
                                    key={node.id}
                                    onClick={() => handleNodeClick(node)}
                                    className={`absolute rounded-xl border p-2.5 shadow-2xs flex flex-col justify-start overflow-hidden print-avoid-break transition-all group ${
                                      isEditing
                                        ? 'bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/50 z-20 shadow-lg'
                                        : 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-md cursor-pointer'
                                    }`}
                                    style={{
                                      left: `${node.x}px`,
                                      top: `${node.y}px`,
                                      width: `${node.width}px`,
                                      height: `${node.height}px`,
                                      lineHeight: typo.lineHeight
                                    }}
                                    title="Click to edit details of this authority"
                                  >
                                    {isEditing ? (
                                      /* Active Inline Editor Form inside Card */
                                      <div
                                        className="flex flex-col h-full space-y-1.5"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <div className="flex items-center justify-between border-b border-emerald-200 pb-1">
                                          <span className="font-bold text-[9.5px] text-emerald-900 uppercase tracking-wider flex items-center gap-1">
                                            <Edit3 className="w-2.5 h-2.5 text-emerald-700" />
                                            Inline Editor
                                          </span>
                                          <div className="flex items-center gap-1">
                                            <button
                                              onClick={handleSaveChanges}
                                              className="px-2 py-0.5 rounded bg-emerald-800 text-amber-300 font-bold text-[9.5px] hover:bg-emerald-700 flex items-center gap-0.5 shadow-2xs cursor-pointer"
                                              title="Save changes"
                                            >
                                              <Check className="w-2.5 h-2.5" />
                                              Save
                                            </button>
                                            <button
                                              onClick={handleCancelChanges}
                                              className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold text-[9.5px] hover:bg-slate-300 cursor-pointer"
                                              title="Cancel editing"
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                          <input
                                            type="text"
                                            value={editDraft.title || ''}
                                            onChange={(e) => {
                                              setEditDraft((d) => ({ ...d, title: e.target.value }));
                                              setIsDirty(true);
                                            }}
                                            placeholder="Title"
                                            className="flex-1 font-bold text-[11px] px-1.5 py-0.5 rounded border border-emerald-500 bg-white text-slate-900 focus:outline-hidden"
                                          />
                                          <input
                                            type="text"
                                            value={editDraft.abbreviation || ''}
                                            onChange={(e) => {
                                              setEditDraft((d) => ({ ...d, abbreviation: e.target.value }));
                                              setIsDirty(true);
                                            }}
                                            placeholder="Abbr"
                                            className="w-14 font-mono font-bold text-[10px] px-1 py-0.5 rounded border border-emerald-500 bg-white text-slate-900 focus:outline-hidden"
                                          />
                                        </div>

                                        <input
                                          type="text"
                                          value={editDraft.legalStatus || ''}
                                          onChange={(e) => {
                                            setEditDraft((d) => ({ ...d, legalStatus: e.target.value }));
                                            setIsDirty(true);
                                          }}
                                          placeholder="Legal Status (e.g. Statutory Regulator)"
                                          className="text-[10px] px-1.5 py-0.5 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
                                        />

                                        <textarea
                                          value={editDraft.summary || ''}
                                          onChange={(e) => {
                                            setEditDraft((d) => ({ ...d, summary: e.target.value }));
                                            setIsDirty(true);
                                          }}
                                          rows={printDossierMode ? 3 : 2}
                                          placeholder="Executive Summary"
                                          className="text-[10px] px-1.5 py-0.5 rounded border border-slate-300 bg-white text-slate-800 resize-none flex-1 focus:outline-hidden"
                                        />

                                        <div className="pt-1 flex items-center justify-between border-t border-slate-100 text-[9px]">
                                          <button
                                            onClick={() => handleOpenInDrawer(node.id)}
                                            className="text-emerald-800 font-bold hover:underline"
                                          >
                                            Open Full Drawer ➔
                                          </button>
                                          <span className="font-mono text-slate-400">ID: {data.id}</span>
                                        </div>
                                      </div>
                                    ) : (
                                      /* Standard Display View of Card */
                                      <div className="flex flex-col h-full justify-between">
                                        <div>
                                          {/* Header */}
                                          <div
                                            className="flex items-center justify-between gap-1 border-b border-slate-100"
                                            style={{
                                              paddingBottom: typo.spacingHalf,
                                              marginBottom: typo.spacingHalf,
                                              fontSize: typo.badge,
                                              lineHeight: typo.lineHeight
                                            }}
                                          >
                                            <span className="font-bold text-slate-500 uppercase tracking-wider">
                                              Sec {data.sectionNumber} • {data.level}
                                            </span>
                                            <div className="flex items-center gap-1">
                                              {data.abbreviation && (
                                                <span
                                                  className="font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200"
                                                  style={{ fontSize: typo.badge }}
                                                >
                                                  {data.abbreviation}
                                                </span>
                                              )}
                                              {/* Hover Edit Icon */}
                                              <span className="no-print opacity-0 group-hover:opacity-100 transition-opacity p-0.5 text-emerald-800 hover:bg-emerald-100 rounded">
                                                <Edit3 className="w-3 h-3" />
                                              </span>
                                            </div>
                                          </div>

                                          {/* Title */}
                                          <h4
                                            className="font-bold text-slate-900 group-hover:text-emerald-950 transition-colors"
                                            style={{
                                              fontSize: typo.title,
                                              lineHeight: typo.lineHeight,
                                              marginBottom: typo.spacingHalf
                                            }}
                                          >
                                            {data.title}
                                          </h4>

                                          {/* Legal Status */}
                                          {data.legalStatus && (
                                            <div style={{ marginBottom: typo.spacingHalf }}>
                                              <span
                                                className="font-medium px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 border border-slate-200 inline-block"
                                                style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                              >
                                                {data.legalStatus}
                                              </span>
                                            </div>
                                          )}

                                          {/* Summary Synopsis */}
                                          <p
                                            className={`text-slate-600 ${printDossierMode ? '' : 'line-clamp-2'}`}
                                            style={{
                                              fontSize: typo.body,
                                              lineHeight: typo.lineHeight,
                                              marginBottom: typo.spacingHalf
                                            }}
                                          >
                                            {data.summary}
                                          </p>

                                          {/* FULL DOSSIER CONTENT (if toggle is active) */}
                                          {printDossierMode && (
                                            <div
                                              className="pt-1 border-t border-slate-100 flex flex-col"
                                              style={{
                                                gap: typo.spacing,
                                                marginTop: typo.spacingHalf
                                              }}
                                            >
                                              {/* Legal Basis */}
                                              {data.establishingLaw && data.establishingLaw.length > 0 && (
                                                <div
                                                  className="text-slate-600 font-mono bg-slate-50 p-1.5 rounded"
                                                  style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }}
                                                >
                                                  <span className="font-bold text-slate-700">Act: </span>
                                                  {data.establishingLaw.join(', ')}
                                                </div>
                                              )}

                                              {/* Mandate */}
                                              {data.mandate && data.mandate.length > 0 && (
                                                <div>
                                                  <span
                                                    className="font-bold text-slate-800 uppercase tracking-wide block"
                                                    style={{
                                                      fontSize: typo.badge,
                                                      lineHeight: typo.lineHeight,
                                                      marginBottom: typo.spacingQuarter
                                                    }}
                                                  >
                                                    Mandate:
                                                  </span>
                                                  <ul
                                                    className="list-disc pl-3 text-slate-700"
                                                    style={{
                                                      fontSize: typo.sub,
                                                      lineHeight: typo.lineHeight
                                                    }}
                                                  >
                                                    {data.mandate.slice(0, 3).map((m, idx) => (
                                                      <li
                                                        key={idx}
                                                        style={{
                                                          marginBottom: typo.spacingQuarter
                                                        }}
                                                      >
                                                        {m}
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                              )}

                                              {/* Powers */}
                                              {data.powers && data.powers.length > 0 && (
                                                <div className="bg-emerald-50/60 p-1.5 rounded border border-emerald-100">
                                                  <span
                                                    className="font-bold text-emerald-900 uppercase tracking-wide block"
                                                    style={{
                                                      fontSize: typo.badge,
                                                      lineHeight: typo.lineHeight,
                                                      marginBottom: typo.spacingQuarter
                                                    }}
                                                  >
                                                    Powers:
                                                  </span>
                                                  <ul
                                                    className="list-disc pl-3 text-slate-800"
                                                    style={{
                                                      fontSize: typo.sub,
                                                      lineHeight: typo.lineHeight
                                                    }}
                                                  >
                                                    {data.powers.slice(0, 3).map((p, idx) => (
                                                      <li
                                                        key={idx}
                                                        style={{
                                                          marginBottom: typo.spacingQuarter
                                                        }}
                                                      >
                                                        {p}
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                              )}

                                              {/* Limitations */}
                                              {data.limitations && data.limitations.length > 0 && (
                                                <div className="bg-rose-50/70 p-1.5 rounded border border-rose-200">
                                                  <span
                                                    className="font-bold text-rose-800 uppercase tracking-wide block"
                                                    style={{
                                                      fontSize: typo.badge,
                                                      lineHeight: typo.lineHeight,
                                                      marginBottom: typo.spacingQuarter
                                                    }}
                                                  >
                                                    Limitations:
                                                  </span>
                                                  <ul
                                                    className="list-disc pl-3 text-rose-900"
                                                    style={{
                                                      fontSize: typo.sub,
                                                      lineHeight: typo.lineHeight
                                                    }}
                                                  >
                                                    {data.limitations.slice(0, 2).map((l, idx) => (
                                                      <li
                                                        key={idx}
                                                        style={{
                                                          marginBottom: typo.spacingQuarter
                                                        }}
                                                      >
                                                        {l}
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>

                                        {/* Docked Foreign Key Bridges */}
                                        {node.dockedFks && node.dockedFks.length > 0 && (
                                          <div
                                            className="border-t border-slate-100 flex flex-col gap-1"
                                            style={{
                                              marginTop: typo.spacingHalf,
                                              paddingTop: typo.spacingHalf
                                            }}
                                          >
                                            <div
                                              className="font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1"
                                              style={{ fontSize: typo.micro, lineHeight: typo.lineHeight }}
                                            >
                                              <Anchor className="w-2.5 h-2.5 text-amber-600" />
                                              <span>Foreign Key Links ({node.dockedFks.length}):</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                              {node.dockedFks.map((fk) => (
                                                <span
                                                  key={fk.id}
                                                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border font-mono ${
                                                    fk.direction === 'out'
                                                      ? 'bg-amber-50 text-amber-900 border-amber-200'
                                                      : 'bg-sky-50 text-sky-900 border-sky-200'
                                                  }`}
                                                  style={{ fontSize: typo.micro, lineHeight: typo.lineHeight }}
                                                  title={`${fk.direction === 'out' ? 'Outgoing' : 'Incoming'} connection to ${fk.extNodeTitle}`}
                                                >
                                                  <span className="font-bold">{fk.direction === 'out' ? '➡ Out:' : '⬅ In:'}</span>
                                                  <span className="font-semibold truncate max-w-[130px]">
                                                    {fk.extSectionNumber ? `Sec ${fk.extSectionNumber}: ` : ''}{fk.extNodeTitle}
                                                  </span>
                                                  <span className="opacity-75">[{fk.relLabel}]</span>
                                                </span>
                                              ))}
                                            </div>
                                          </div>
                                        )}

                                        {/* Footer Status */}
                                        <div
                                          className="border-t border-slate-100 flex items-center justify-between text-slate-400 mt-auto"
                                          style={{
                                            marginTop: 'auto',
                                            paddingTop: typo.spacingHalf,
                                            fontSize: typo.micro,
                                            lineHeight: typo.lineHeight
                                          }}
                                        >
                                          <span className="capitalize">{data.verificationStatus}</span>
                                          <span className="font-mono">ID: {data.id}</span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Section Foreign Key Bridge Ledger Table (Conditionally rendered based on showFkTable toggle) */}
                        {slice.isLastSlice && showFkTable && (
                          <div className="border-t border-slate-200 pt-3 print-avoid-break">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5">
                                <FileCheck2 className="w-3.5 h-3.5 text-amber-700" />
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                                  Foreign Key Linkage Stubs for Section {sec.number}
                                </h4>
                              </div>
                              <span className="text-[10px] font-mono text-slate-500">
                                {totalFks} Cross-Section Relational {totalFks === 1 ? 'Link' : 'Links'}
                              </span>
                            </div>

                            {totalFks === 0 ? (
                              <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-200 text-center">
                                No external cross-section edges; this section tree operates autonomously.
                              </div>
                            ) : (
                              <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white shadow-2xs">
                                <table className="w-full text-left text-[11px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-50 text-[9.5px] font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                                      <th className="py-1.5 px-3">Port Direction</th>
                                      <th className="py-1.5 px-3">Local Node</th>
                                      <th className="py-1.5 px-3">Relationship Verb</th>
                                      <th className="py-1.5 px-3">External Target / Source</th>
                                      <th className="py-1.5 px-3">External Section / Board</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-100">
                                    {layout.foreignKeys.map((fk) => (
                                      <tr key={fk.id} className="hover:bg-slate-50/50">
                                        <td className="py-1.5 px-3 whitespace-nowrap">
                                          <span className={`inline-flex items-center gap-1 px-1.5 py-0.2 rounded font-bold text-[9px] ${
                                            fk.direction === 'out'
                                              ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                              : 'bg-sky-50 text-sky-800 border border-sky-200'
                                          }`}>
                                            {fk.direction === 'out' ? <ArrowUpRight className="w-3 h-3 text-amber-600" /> : <ArrowDownLeft className="w-3 h-3 text-sky-600" />}
                                            <span>{fk.direction === 'out' ? 'Outgoing ➔' : 'Incoming ⬅'}</span>
                                          </span>
                                        </td>
                                        <td className="py-1.5 px-3 font-semibold text-slate-900">
                                          {fk.localNodeTitle}
                                        </td>
                                        <td className="py-1.5 px-3 font-mono text-[9.5px] text-emerald-800">
                                          {fk.label}
                                        </td>
                                        <td className="py-1.5 px-3 text-slate-800">
                                          <div className="font-semibold">{fk.externalNodeTitle}</div>
                                          <div className="font-mono text-[8.5px] text-slate-400">ID: {fk.externalNodeId}</div>
                                        </td>
                                        <td className="py-1.5 px-3 text-slate-600 font-mono text-[9.5px] whitespace-nowrap">
                                          {fk.externalSectionId ? `Section ${fk.externalSectionId.replace('SEC-', '')}` : 'External Board'}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Section Page Footer */}
                        <div className="mt-4 pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] text-slate-400 font-mono">
                          <span>Indian Education Governance Whiteboard 1 • Section {sec.number} Tree Diagram</span>
                          <span>
                            {slice.partTotal > 1 ? `${slice.partLabel} • ` : ''}Document Page {slice.partIndex} of {slice.partTotal}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
