import { useState, useEffect, useMemo, useRef } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { SECTION_METAS } from '../../data/sections';
import { EducationNode, SectionPrintSettings, NodePrintOverride } from '../../types';
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
  Route,
  Landmark,
  Clock,
  GraduationCap,
  Sliders,
  CopyCheck,
  Search,
  ChevronDown,
  Languages,
  Crown,
  AlertTriangle
} from 'lucide-react';
import {
  t,
  getTranslatedNodeTitle,
  getTranslatedNodeSummary,
  getTranslatedSectionTitle,
  getTranslatedSectionSubtitle,
  getTranslatedLevel,
  getTranslatedGovernanceValue,
  Language,
  initGoogleTranslate
} from '../../services/translationService';

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
  className?: string;
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
  title,
  className = ''
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
      className={`flex items-center justify-between gap-1 bg-slate-100 px-1.5 py-1 rounded-lg border border-slate-200 shadow-2xs ${className}`}
      title={title || label}
    >
      <div className="flex items-center gap-1 min-w-0 flex-shrink truncate">
        {icon && <span className="flex-shrink-0 text-slate-500">{icon}</span>}
        <span className="text-[10px] font-semibold text-slate-600 select-none whitespace-nowrap truncate">{label}</span>
      </div>
      <div className="flex items-center gap-0.5 flex-shrink-0">
        <button
          type="button"
          onClick={decrement}
          className="w-4 h-4 flex items-center justify-center font-bold text-[10px] rounded bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer transition-colors shadow-2xs"
          title={`Decrease ${label}`}
        >
          -
        </button>
        <div className="flex items-center bg-white border border-slate-300 rounded px-0.5 focus-within:ring-1 focus-within:ring-emerald-700 focus-within:border-emerald-700">
          <input
            type="number"
            step={step}
            min={min}
            max={max}
            value={localVal}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-7 sm:w-9 h-4.5 text-center font-mono text-[10px] font-bold text-slate-900 bg-transparent outline-hidden p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          {unit && <span className="text-[9px] font-mono text-slate-400 font-semibold select-none pr-0.5">{unit}</span>}
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
    </div>
  );
}

export const getTypography = (fs: number, lh: number, ps: number) => ({
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
});

interface SectionToolbarDeckProps {
  arrowStyle: 'curved' | 'straight' | 'orthogonal' | 'rounded-orthogonal';
  setArrowStyle: (val: 'curved' | 'straight' | 'orthogonal' | 'rounded-orthogonal') => void;
  pageSplitMode: 'auto' | 'single' | '2-page' | '4-page';
  setPageSplitMode: (val: 'auto' | 'single' | '2-page' | '4-page') => void;
  fkMode: 'docked' | 'stubs';
  setFkMode: (val: 'docked' | 'stubs') => void;
  alternateDepth: boolean;
  setAlternateDepth: (val: boolean) => void;
  alternateSpacingPx: number;
  setAlternateSpacingPx: (val: number) => void;
  direction: 'DOWN' | 'RIGHT';
  setDirection: (val: 'DOWN' | 'RIGHT') => void;

  // Dimensions & Steppers
  nodeBoxWidth: number;
  setNodeBoxWidth: (val: number) => void;
  cardHeightPercent: number;
  setCardHeightPercent: (val: number) => void;
  customNodeSpacing: number;
  setCustomNodeSpacing: (val: number) => void;
  customVSpacing: number;
  setCustomVSpacing: (val: number) => void;
  customArrowHeight: number;
  setCustomArrowHeight: (val: number) => void;
  customFkArrowHeight: number;
  setCustomFkArrowHeight: (val: number) => void;
  fontSizePx: number;
  setFontSizePx: (val: number) => void;
  lineHeightMult: number;
  setLineHeightMult: (val: number) => void;
  paraSpacingPx: number;
  setParaSpacingPx: (val: number) => void;

  // Optional / Global extras
  isDossier?: boolean;
  setIsDossier?: (val: boolean) => void;
  printOrientation?: 'landscape' | 'portrait';
  setPrintOrientation?: (val: 'landscape' | 'portrait') => void;
  showFkTable?: boolean;
  setShowFkTable?: (val: boolean) => void;
  isAutoFit?: boolean;
  setIsAutoFit?: (val: boolean) => void;
  manualScale?: number;
  setManualScale?: ((val: number | ((prev: number) => number)) => void) | React.Dispatch<React.SetStateAction<number>>;
  language?: Language;
  setLanguage?: (val: Language) => void;

  // Reset & moved nodes
  onReset?: () => void;
  resetTitle?: string;
  isPerPage?: boolean;
  hasCustomPositions?: boolean;
  onClearNodePositions?: () => void;
  onApplyToAll?: () => void;

  // Single card / node targeting
  targetType?: 'global' | 'section' | 'node';
  targetLabel?: string;
  onDeselectTarget?: () => void;
}

function SectionToolbarDeck({
  arrowStyle,
  setArrowStyle,
  pageSplitMode,
  setPageSplitMode,
  fkMode,
  setFkMode,
  alternateDepth,
  setAlternateDepth,
  alternateSpacingPx,
  setAlternateSpacingPx,
  direction,
  setDirection,
  nodeBoxWidth,
  setNodeBoxWidth,
  cardHeightPercent,
  setCardHeightPercent,
  customNodeSpacing,
  setCustomNodeSpacing,
  customVSpacing,
  setCustomVSpacing,
  customArrowHeight,
  setCustomArrowHeight,
  customFkArrowHeight,
  setCustomFkArrowHeight,
  fontSizePx,
  setFontSizePx,
  lineHeightMult,
  setLineHeightMult,
  paraSpacingPx,
  setParaSpacingPx,
  isDossier,
  setIsDossier,
  printOrientation,
  setPrintOrientation,
  showFkTable,
  setShowFkTable,
  isAutoFit,
  setIsAutoFit,
  manualScale,
  setManualScale,
  language,
  setLanguage,
  onReset,
  resetTitle,
  isPerPage = false,
  hasCustomPositions = false,
  onClearNodePositions,
  onApplyToAll,
  targetType = 'global',
  targetLabel,
  onDeselectTarget
}: SectionToolbarDeckProps) {
  return (
    <div className="space-y-2 text-xs text-slate-700">
      {/* Row 1: Presentation & Layout Mode Selectors */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Active Node Target Badge in Row 1 */}
        {targetType === 'node' && (
          <div className="flex items-center gap-1.5 bg-amber-100 text-amber-950 px-2 py-1 rounded-lg border border-amber-300 font-bold text-[10.5px] shadow-2xs">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Card Target:</span>
              <strong className="text-emerald-950 font-black truncate max-w-[160px] sm:max-w-[220px]" title={targetLabel}>
                {targetLabel}
              </strong>
            </span>
            {onDeselectTarget && (
              <button
                type="button"
                onClick={onDeselectTarget}
                className="ml-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-200 hover:bg-amber-300 text-amber-950 cursor-pointer transition-colors"
                title="Deselect card and return to page settings"
              >
                ✕ Deselect
              </button>
            )}
          </div>
        )}
        {/* Language Switcher (Prominent at front of Row 1) */}
        {setLanguage && language && (
          <div className="flex items-center gap-0.5 bg-indigo-50 p-0.5 rounded-lg border border-indigo-200 shadow-2xs" title="Change Language (English, हिन्दी, ગુજરાતી)">
            <span className="text-[10px] font-bold text-indigo-900 pl-1 flex items-center gap-1">
              <Languages className="w-3.5 h-3.5 text-indigo-700" />
              Lang:
            </span>
            {([
              { code: 'en' as const, label: 'EN' },
              { code: 'hi' as const, label: 'HI' },
              { code: 'gu' as const, label: 'GU' }
            ]).map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                className={`px-1.5 py-0.5 text-[10px] font-bold rounded transition-all cursor-pointer ${
                  language === l.code
                    ? 'bg-indigo-700 text-white shadow-2xs'
                    : 'text-indigo-900 hover:bg-indigo-100/70'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}

        {/* Dossier vs Compact Mode (if available) */}
        {setIsDossier && isDossier !== undefined && (
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => setIsDossier(false)}
              className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
                !isDossier ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Compact cards for clean fit"
            >
              <Minimize2 className="w-3 h-3" />
              <span>Compact</span>
            </button>
            <button
              type="button"
              onClick={() => setIsDossier(true)}
              className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
                isDossier ? 'bg-emerald-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Include powers, limitations, and mandates inside tree nodes"
            >
              <Maximize2 className="w-3 h-3" />
              <span>Full Dossier</span>
            </button>
          </div>
        )}

        {/* Arrow Style Selector */}
        <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200" title="Arrow connector routing style">
          <span className="text-[10px] font-semibold text-slate-500 pl-1 flex items-center gap-1">
            <Route className="w-3 h-3 text-slate-600" />
            Arrows:
          </span>
          {(['curved', 'straight', 'orthogonal', 'rounded-orthogonal'] as const).map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => setArrowStyle(style)}
              className={`px-1.5 py-0.5 text-[10px] font-semibold rounded transition-all cursor-pointer ${
                arrowStyle === style ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {style === 'curved' ? 'Curved' : style === 'straight' ? 'Straight' : style === 'orthogonal' ? '90° Ortho' : 'Rounded'}
            </button>
          ))}
        </div>

        {/* PDF View Mode: 1-Page Fit vs Multi-Page */}
        <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-300 shadow-2xs">
          <span className="text-[10px] font-bold text-slate-700 pl-1 flex items-center gap-1">
            <Printer className="w-3 h-3 text-emerald-800" />
            Layout:
          </span>
          <button
            type="button"
            onClick={() => setPageSplitMode('single')}
            className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-bold rounded-md transition-all cursor-pointer ${
              pageSplitMode === 'single'
                ? 'bg-emerald-900 text-amber-300 shadow-xs ring-1 ring-emerald-700'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="1-page fit: scales entire diagram to fit on 1 sheet"
          >
            <span>1-Page Fit</span>
          </button>
          <button
            type="button"
            onClick={() => setPageSplitMode('auto')}
            className={`px-1.5 py-0.5 text-[10px] font-semibold rounded transition-all cursor-pointer ${
              pageSplitMode === 'auto'
                ? 'bg-emerald-800 text-amber-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Auto split wide diagrams"
          >
            Auto
          </button>
          <button
            type="button"
            onClick={() => setPageSplitMode('2-page')}
            className={`px-1.5 py-0.5 text-[10px] font-semibold rounded transition-all cursor-pointer ${
              pageSplitMode === '2-page'
                ? 'bg-emerald-800 text-amber-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Divide horizontally into 2 wide pages (Left / Right)"
          >
            2-Page
          </button>
          <button
            type="button"
            onClick={() => setPageSplitMode('4-page')}
            className={`px-1.5 py-0.5 text-[10px] font-semibold rounded transition-all cursor-pointer ${
              pageSplitMode === '4-page'
                ? 'bg-emerald-800 text-amber-300 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Divide into 4 quadrant pages (Grid)"
          >
            4-Page
          </button>
        </div>

        {/* FK Bridge Mode */}
        <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => setFkMode('docked')}
            className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
              fkMode === 'docked' ? 'bg-emerald-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Dock FK links inside cards"
          >
            <Anchor className="w-3 h-3" />
            <span>FK: Docked</span>
          </button>
          <button
            type="button"
            onClick={() => setFkMode('stubs')}
            className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
              fkMode === 'stubs' ? 'bg-emerald-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Render Foreign Keys as external stub boxes"
          >
            <ArrowUpRight className="w-3 h-3" />
            <span>FK: Stubs</span>
          </button>
        </div>

        {/* Alternate Depth Placing & Stagger */}
        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg border transition-all ${
          alternateDepth
            ? 'bg-amber-100/90 border-amber-400 text-amber-950 shadow-xs ring-1 ring-amber-400/50'
            : 'bg-amber-50/70 border-amber-300 text-amber-900'
        }`}>
          <button
            type="button"
            onClick={() => setAlternateDepth(!alternateDepth)}
            className="flex items-center gap-1 text-[10.5px] font-bold hover:opacity-80 transition-opacity cursor-pointer"
            title="Staggers sibling nodes in depth (zig-zag baselines)"
          >
            <Layers className={`w-3.5 h-3.5 ${alternateDepth ? 'text-amber-700' : 'text-amber-600'}`} />
            <span>Alt Depth:</span>
            <span className={`px-1.5 py-0.2 rounded text-[9.5px] font-mono font-black ${
              alternateDepth ? 'bg-emerald-800 text-amber-300' : 'bg-white text-slate-500 border border-slate-200'
            }`}>
              {alternateDepth ? 'ON' : 'OFF'}
            </span>
          </button>
          <div className="flex items-center gap-0.5 pl-1 border-l border-amber-300">
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
              className="bg-transparent border-none shadow-none px-0 py-0"
            />
          </div>
        </div>

        {/* Flow Direction */}
        <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <button
            type="button"
            onClick={() => setDirection('DOWN')}
            className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
              direction === 'DOWN' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ArrowDownUp className="w-3 h-3" />
            <span>Top-Down</span>
          </button>
          <button
            type="button"
            onClick={() => setDirection('RIGHT')}
            className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
              direction === 'RIGHT' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ArrowLeftRight className="w-3 h-3" />
            <span>Left-Right</span>
          </button>
        </div>

        {/* Orientation (if global) */}
        {setPrintOrientation && printOrientation && (
          <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => setPrintOrientation('landscape')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
                printOrientation === 'landscape' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Landscape
            </button>
            <button
              type="button"
              onClick={() => setPrintOrientation('portrait')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded-md transition-all cursor-pointer ${
                printOrientation === 'portrait' ? 'bg-white text-emerald-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Portrait
            </button>
          </div>
        )}

        {/* FK Table (if global) */}
        {setShowFkTable && showFkTable !== undefined && (
          <button
            type="button"
            onClick={() => setShowFkTable(!showFkTable)}
            className={`flex items-center gap-1 px-2 py-0.5 text-[10.5px] font-semibold rounded-lg border transition-all cursor-pointer ${
              showFkTable
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-2xs'
                : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileCheck2 className={`w-3 h-3 ${showFkTable ? 'text-amber-700' : 'text-slate-400'}`} />
            <span>FK Table:</span>
            <span className={`px-1 py-0.2 rounded text-[9.5px] font-mono font-bold ${
              showFkTable ? 'bg-emerald-800 text-amber-300' : 'bg-slate-200 text-slate-600'
            }`}>
              {showFkTable ? 'SHOW' : 'HIDE'}
            </span>
          </button>
        )}

        {/* If Per-Page with moved nodes: Reset Moved Nodes */}
        {isPerPage && hasCustomPositions && onClearNodePositions && (
          <button
            type="button"
            onClick={onClearNodePositions}
            className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-lg border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 shadow-2xs cursor-pointer"
            title="Reset any manually dragged node positions on this page to automatic tree layout"
          >
            <RotateCcw className="w-2.5 h-2.5 text-amber-700" />
            <span>Reset Moved Nodes</span>
          </button>
        )}

        {/* If Per-Page: Apply to All */}
        {isPerPage && onApplyToAll && (
          <button
            type="button"
            onClick={onApplyToAll}
            className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 shadow-2xs cursor-pointer ml-auto"
            title="Apply this page's layout parameters to all other pages"
          >
            <CopyCheck className="w-3 h-3 text-emerald-800" />
            <span>Apply to All Pages</span>
          </button>
        )}
      </div>

      {/* Row 2: Responsive Fluid Grid for Dimensions & Steppers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 min-[1400px]:grid-cols-11 gap-1.5 w-full items-center">
        {/* 1. Auto-Fit / Zoom (if global or provided) */}
        {setIsAutoFit && setManualScale ? (
          <div className="flex items-center justify-between gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 w-full">
            <button
              type="button"
              onClick={() => setIsAutoFit(true)}
              className={`flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-semibold rounded-md transition-all cursor-pointer ${
                isAutoFit ? 'bg-emerald-800 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Auto-calculate scale to fit"
            >
              <Sparkles className="w-2.5 h-2.5" />
              <span>Auto</span>
            </button>
            <div className="flex items-center gap-0.5 pl-0.5 border-l border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setIsAutoFit(false);
                  setManualScale((prev) => Math.max(0.1, Math.round((prev - 0.1) * 10) / 10));
                }}
                className="p-0.5 rounded hover:bg-slate-200 text-slate-700 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-2.5 h-2.5" />
              </button>
              <span className="font-mono font-semibold text-[9.5px] px-0.5 text-center min-w-[28px]">
                {isAutoFit ? 'Fit' : `${Math.round((manualScale || 0.85) * 100)}%`}
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsAutoFit(false);
                  setManualScale((prev) => Math.round((prev + 0.1) * 10) / 10);
                }}
                className="p-0.5 rounded hover:bg-slate-200 text-slate-700 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-slate-100 p-1 rounded-lg border border-slate-200 w-full text-[10px] font-bold text-slate-600">
            Page Custom
          </div>
        )}

        {/* 2. Card Width */}
        <NumberStepperInput
          label="Card W:"
          value={nodeBoxWidth}
          min={50}
          step={10}
          unit="px"
          onChange={setNodeBoxWidth}
          className="w-full"
        />

        {/* 3. Card Height */}
        <NumberStepperInput
          label="Card H:"
          value={cardHeightPercent}
          min={10}
          step={5}
          unit="%"
          onChange={setCardHeightPercent}
          className="w-full"
        />

        {/* 4. H-Space */}
        <NumberStepperInput
          label="H-Space:"
          value={customNodeSpacing}
          min={0}
          step={10}
          unit="px"
          onChange={setCustomNodeSpacing}
          className="w-full"
        />

        {/* 5. V-Space */}
        <NumberStepperInput
          label="V-Space:"
          value={customVSpacing}
          min={0}
          step={10}
          unit="px"
          onChange={setCustomVSpacing}
          className="w-full"
        />

        {/* 6. Arrow Height */}
        <NumberStepperInput
          label={direction === 'RIGHT' ? 'Arrow L:' : 'Arrow H:'}
          value={customArrowHeight}
          min={0}
          step={10}
          unit="px"
          onChange={setCustomArrowHeight}
          className="w-full"
        />

        {/* 7. FK Arrow Height */}
        <NumberStepperInput
          label={direction === 'RIGHT' ? 'FK L:' : 'FK H:'}
          value={customFkArrowHeight}
          min={0}
          step={10}
          unit="px"
          onChange={setCustomFkArrowHeight}
          className="w-full"
        />

        {/* 8. Font Size */}
        <NumberStepperInput
          label="Font:"
          value={fontSizePx}
          min={4}
          step={1}
          unit="px"
          icon={<Type className="w-3 h-3 text-slate-500" />}
          onChange={setFontSizePx}
          className="w-full"
        />

        {/* 9. Line Height */}
        <NumberStepperInput
          label="Line H:"
          value={lineHeightMult}
          min={0.5}
          step={0.05}
          decimals={2}
          unit="x"
          onChange={setLineHeightMult}
          className="w-full"
        />

        {/* 10. Para Space */}
        <NumberStepperInput
          label="Para Sp:"
          value={paraSpacingPx}
          min={0}
          step={1}
          unit="px"
          onChange={setParaSpacingPx}
          className="w-full"
        />

        {/* 11. Reset */}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center justify-center gap-1 w-full h-[29px] rounded-lg border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold shadow-2xs transition-colors cursor-pointer"
            title={resetTitle || 'Reset settings'}
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>
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

  const targetPageHeight = printOrientation === 'landscape' ? 620 : 880;

  if (split === 'single') {
    const scaleByW = targetPageWidth / layout.width;
    const scaleByH = targetPageHeight / layout.height;
    const effectiveScale = isAutoFit
      ? Math.min(1.0, Math.round(Math.min(scaleByW, scaleByH) * 100) / 100)
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
    sections,
    currentProjectName,
    updateNode,
    selectNode,
    toggleDetailPanel,
    customFkArrowHeight: storeFkArrowHeight,
    setCustomFkArrowHeight: setStoreFkArrowHeight,
    sectionPrintSettings,
    setSectionPrintSettings,
    setSectionNodePosition,
    resetSectionPrintSettings,
    applySectionSettingsToAll,
    currentLanguage,
    setLanguage,
    translationScope,
    setTranslationScope,
    useGoogleTranslateFallback
  } = useWhiteboardStore();

  const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isLangMenuOpen]);

  const activeSections = useMemo(() => {
    return sections && sections.length > 0 ? sections : SECTION_METAS;
  }, [sections]);

  const validSections = useMemo(() => {
    return activeSections.filter((s) => s.id !== 'SEC-00');
  }, [activeSections]);

  const nodeMap = useMemo(() => {
    return new Map((nodes || []).map((n) => [n.id, n]));
  }, [nodes]);

  const [selectedSectionIds, setSelectedSectionIds] = useState<string[]>(() => {
    return SECTION_METAS.filter((s) => s.id !== 'SEC-00').map((s) => s.id);
  });
  const [showScopeDropdown, setShowScopeDropdown] = useState<boolean>(false);
  const [sectionSearchQuery, setSectionSearchQuery] = useState<string>('');
  const scopeDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close scope dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (scopeDropdownRef.current && !scopeDropdownRef.current.contains(e.target as Node)) {
        setShowScopeDropdown(false);
      }
    };
    if (showScopeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showScopeDropdown]);

  // Keep selectedSectionIds in sync if activeSections change
  useEffect(() => {
    if (validSections.length > 0) {
      setSelectedSectionIds((prev) => {
        const filtered = prev.filter((id) => validSections.some((s) => s.id === id));
        return filtered.length > 0 ? filtered : validSections.map((s) => s.id);
      });
    }
  }, [validSections]);

  // Determine which sections to render based on multi-section selection
  const sectionsToRender = useMemo(() => {
    if (selectedSectionIds.length === 0) return [];
    return validSections.filter((s) => selectedSectionIds.includes(s.id));
  }, [selectedSectionIds, validSections]);

  // Dedicated Per-Page Customization Toolbars State
  const [openPageToolbars, setOpenPageToolbars] = useState<Record<string, boolean>>({});
  const togglePageToolbar = (secId: string) => {
    setOpenPageToolbars((prev) => ({ ...prev, [secId]: !prev[secId] }));
  };

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
  const [customFkArrowHeight, setCustomFkArrowHeight] = useState<number>(storeFkArrowHeight || 70); // FK Arrow Height

  useEffect(() => {
    if (storeFkArrowHeight && storeFkArrowHeight !== customFkArrowHeight) {
      setCustomFkArrowHeight(storeFkArrowHeight);
    }
  }, [storeFkArrowHeight]);

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

  // Per-Page / Section Customization & Drag State
  const [customizingSectionId, setCustomizingSectionId] = useState<string>('all');
  const [customizingNodeId, setCustomizingNodeId] = useState<string | null>(null);
  const [dragState, setDragState] = useState<{
    sectionId: string;
    nodeId: string;
    startX: number;
    startY: number;
    initNodeX: number;
    initNodeY: number;
    currentDx: number;
    currentDy: number;
    sliceScale: number;
  } | null>(null);
  const [hasMoved, setHasMoved] = useState<boolean>(false);

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

  // Adjust default spacing & width when dossier mode changes
  useEffect(() => {
    if (printDossierMode) {
      setCustomNodeSpacing((prev) => (prev < 65 ? 65 : prev));
      setCustomVSpacing((prev) => (prev < 65 ? 65 : prev));
      setCustomArrowHeight((prev) => (prev < 120 ? 140 : prev));
      setCustomFkArrowHeight((prev) => (prev < 90 ? 100 : prev));
      setNodeBoxWidth((prev) => (prev < 320 ? 320 : prev));
    } else {
      setCustomNodeSpacing((prev) => (prev > 65 ? 50 : prev));
      setCustomVSpacing((prev) => (prev > 65 ? 50 : prev));
      setCustomArrowHeight((prev) => (prev > 100 ? 85 : prev));
      setCustomFkArrowHeight((prev) => (prev > 80 ? 70 : prev));
      setNodeBoxWidth((prev) => (prev > 300 ? 260 : prev));
    }
  }, [printDossierMode]);

  // Settings getters & updater for active target (Global 'all' vs Specific Section vs Single Card)
  const updateActiveSetting = <K extends keyof SectionPrintSettings>(key: K, val: SectionPrintSettings[K]) => {
    if (customizingSectionId !== 'all' && customizingNodeId) {
      const secSettings = sectionPrintSettings[customizingSectionId] || {};
      const currentOverrides = secSettings.nodeOverrides || {};
      const thisOverride = currentOverrides[customizingNodeId] || {};
      const updatedOverride: NodePrintOverride = {
        ...thisOverride,
        [key]: val
      };
      setSectionPrintSettings(customizingSectionId, {
        nodeOverrides: {
          ...currentOverrides,
          [customizingNodeId]: updatedOverride
        }
      });
      return;
    }

    if (customizingSectionId === 'all') {
      if (key === 'customNodeSpacing') setCustomNodeSpacing(val as number);
      else if (key === 'customVSpacing') setCustomVSpacing(val as number);
      else if (key === 'customArrowHeight') setCustomArrowHeight(val as number);
      else if (key === 'customFkArrowHeight') {
        setCustomFkArrowHeight(val as number);
        setStoreFkArrowHeight(val as number);
      } else if (key === 'nodeBoxWidth') setNodeBoxWidth(val as number);
      else if (key === 'cardHeightPercent') setCardHeightPercent(val as number);
      else if (key === 'fontSizePx') setFontSizePx(val as number);
      else if (key === 'lineHeightMult') setLineHeightMult(val as number);
      else if (key === 'paraSpacingPx') setParaSpacingPx(val as number);
      else if (key === 'treeDirection') setTreeDirection(val as any);
      else if (key === 'alternateDepth') setAlternateDepth(val as boolean);
      else if (key === 'alternateSpacingPx') setAlternateSpacingPx(val as number);
      else if (key === 'fkMode') setFkMode(val as any);
      else if (key === 'arrowStyle') setArrowStyle(val as any);
      else if (key === 'pageSplitMode') setPageSplitMode(val as any);
      else if (key === 'printOrientation') setPrintOrientation(val as any);
      else if (key === 'isDossier') setPrintDossierMode(val as boolean);
      else if (key === 'showFkTable') setShowFkTable(val as boolean);
      else if (key === 'isAutoFit') setIsAutoFit(val as boolean);
      else if (key === 'manualScale') setManualScale(val as number);
      else if (key === 'language') {
        setLanguage(val as Language);
        if (useGoogleTranslateFallback && (val as Language) !== 'en') {
          initGoogleTranslate(val as Language, true);
        }
      }
    } else {
      setSectionPrintSettings(customizingSectionId, { [key]: val });
    }
  };

  const activeSecOverrides = customizingSectionId !== 'all' ? (sectionPrintSettings[customizingSectionId] || {}) : {};
  const activeNodeOverride = (customizingSectionId !== 'all' && customizingNodeId)
    ? (activeSecOverrides.nodeOverrides?.[customizingNodeId] || {})
    : {};

  const curLanguage: Language = activeNodeOverride.language ?? activeSecOverrides.language ?? currentLanguage;
  const curDirection = activeSecOverrides.treeDirection ?? treeDirection;
  const curArrowStyle = activeSecOverrides.arrowStyle ?? arrowStyle;
  const curPageSplitMode = activeSecOverrides.pageSplitMode ?? pageSplitMode;
  const curFkMode = activeSecOverrides.fkMode ?? fkMode;
  const curAlternateDepth = activeSecOverrides.alternateDepth ?? alternateDepth;
  const curAlternateSpacingPx = activeSecOverrides.alternateSpacingPx ?? alternateSpacingPx;
  const curNodeBoxWidth = activeNodeOverride.nodeBoxWidth ?? activeSecOverrides.nodeBoxWidth ?? nodeBoxWidth;
  const curCardHeightPercent = activeNodeOverride.cardHeightPercent ?? activeSecOverrides.cardHeightPercent ?? cardHeightPercent;
  const curCustomNodeSpacing = activeSecOverrides.customNodeSpacing ?? customNodeSpacing;
  const curCustomVSpacing = activeSecOverrides.customVSpacing ?? customVSpacing;
  const curCustomArrowHeight = activeSecOverrides.customArrowHeight ?? customArrowHeight;
  const curCustomFkArrowHeight = activeSecOverrides.customFkArrowHeight ?? customFkArrowHeight;
  const curFontSizePx = activeNodeOverride.fontSizePx ?? activeSecOverrides.fontSizePx ?? fontSizePx;
  const curLineHeightMult = activeNodeOverride.lineHeightMult ?? activeSecOverrides.lineHeightMult ?? lineHeightMult;
  const curParaSpacingPx = activeNodeOverride.paraSpacingPx ?? activeSecOverrides.paraSpacingPx ?? paraSpacingPx;
  const curPrintOrientation = activeSecOverrides.printOrientation ?? printOrientation;
  const curIsDossier = activeNodeOverride.isDossier ?? activeSecOverrides.isDossier ?? printDossierMode;
  const curShowFkTable = activeSecOverrides.showFkTable ?? showFkTable;
  const curIsAutoFit = activeSecOverrides.isAutoFit ?? isAutoFit;
  const curManualScale = activeSecOverrides.manualScale ?? manualScale;

  const targetNode = useMemo(() => {
    if (!customizingNodeId || customizingSectionId === 'all') return null;
    const secLayout = treeLayouts[customizingSectionId];
    return secLayout?.nodes.find((n) => n.id === customizingNodeId) || null;
  }, [customizingNodeId, customizingSectionId, treeLayouts]);

  const targetNodeTitle = useMemo(() => {
    if (!targetNode?.data) return customizingNodeId || '';
    return getTranslatedNodeTitle(targetNode.data, curLanguage, translationScope);
  }, [targetNode, curLanguage, translationScope, customizingNodeId]);

  // Pointer Drag Handlers for Repositioning Nodes on Printable Page
  const handleStartDrag = (
    e: React.PointerEvent,
    sectionId: string,
    nodeId: string,
    nodeX: number,
    nodeY: number,
    sliceScale: number
  ) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest?.('input, textarea, button, select') || editingNodeId === nodeId) {
      return;
    }
    e.stopPropagation();
    setDragState({
      sectionId,
      nodeId,
      startX: e.clientX,
      startY: e.clientY,
      initNodeX: nodeX,
      initNodeY: nodeY,
      currentDx: 0,
      currentDy: 0,
      sliceScale: sliceScale || 1
    });
    setHasMoved(false);
  };

  useEffect(() => {
    if (!dragState) return;

    const onPointerMove = (e: PointerEvent) => {
      const dx = (e.clientX - dragState.startX) / dragState.sliceScale;
      const dy = (e.clientY - dragState.startY) / dragState.sliceScale;
      if (Math.hypot(dx, dy) > 3) {
        setHasMoved(true);
      }
      setDragState((prev) => (prev ? { ...prev, currentDx: dx, currentDy: dy } : null));
    };

    const onPointerUp = () => {
      if (dragState && hasMoved) {
        const finalX = Math.max(10, Math.round(dragState.initNodeX + dragState.currentDx));
        const finalY = Math.max(10, Math.round(dragState.initNodeY + dragState.currentDy));

        // 1. Immediately update treeLayouts in local state so the node stays right where it was released
        // and immediately recompute the bounding box width and height so the page resizes dynamically
        setTreeLayouts((prev) => {
          const secLayout = prev[dragState.sectionId];
          if (!secLayout) return prev;
          const updatedNodes = secLayout.nodes.map((n) =>
            n.id === dragState.nodeId ? { ...n, x: finalX, y: finalY } : n
          );
          let maxX = 0;
          let maxY = 0;
          updatedNodes.forEach((n) => {
            maxX = Math.max(maxX, n.x + n.width);
            maxY = Math.max(maxY, n.y + n.height);
          });
          const padding = 35;
          return {
            ...prev,
            [dragState.sectionId]: {
              ...secLayout,
              width: Math.max(800, maxX + padding),
              height: Math.max(400, maxY + padding),
              nodes: updatedNodes
            }
          };
        });

        // 2. Persist to store (and DB / backend)
        setSectionNodePosition(dragState.sectionId, dragState.nodeId, { x: finalX, y: finalY });
      }
      setDragState(null);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [dragState, hasMoved]);

  // Compute ELK tree layouts for all target sections whenever layout parameters change
  useEffect(() => {
    if (!isOpen) return;

    // Only show full-screen loading spinner on initial load when no layouts exist yet
    // NEVER show it during node drag or fine-tuning adjustments!
    if (Object.keys(treeLayouts).length === 0) {
      setIsLoading(true);
    }

    let isCancelled = false;

    const promises = sectionsToRender.map((sec) => {
      const secOverrides = sectionPrintSettings[sec.id] || {};
      return calculateSectionTreeLayout(sec.id, nodes, relationships, {
        isDossier: secOverrides.isDossier ?? printDossierMode,
        direction: secOverrides.treeDirection ?? treeDirection,
        nodeSpacing: secOverrides.customNodeSpacing ?? customNodeSpacing,
        vSpacing: secOverrides.customVSpacing ?? customVSpacing,
        arrowHeight: secOverrides.customArrowHeight ?? customArrowHeight,
        fkArrowHeight: secOverrides.customFkArrowHeight ?? customFkArrowHeight,
        layerSpacing: secOverrides.customArrowHeight ?? customArrowHeight,
        nodeWidth: secOverrides.nodeBoxWidth ?? nodeBoxWidth,
        cardHeightScale: (secOverrides.cardHeightPercent ?? cardHeightPercent) / 100,
        alternateDepth: secOverrides.alternateDepth ?? alternateDepth,
        alternateSpacing: secOverrides.alternateSpacingPx ?? alternateSpacingPx,
        fontSize: secOverrides.fontSizePx ?? fontSizePx,
        lineHeight: secOverrides.lineHeightMult ?? lineHeightMult,
        paraSpacing: secOverrides.paraSpacingPx ?? paraSpacingPx,
        fkMode: secOverrides.fkMode ?? fkMode,
        arrowStyle: secOverrides.arrowStyle ?? arrowStyle,
        nodePositions: secOverrides.nodePositions
      });
    });

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
    sectionsToRender,
    printDossierMode,
    treeDirection,
    customNodeSpacing,
    customVSpacing,
    customArrowHeight,
    customFkArrowHeight,
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
    relationships,
    sectionPrintSettings
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
    setCustomFkArrowHeight(printDossierMode ? 100 : 70);
    setStoreFkArrowHeight(printDossierMode ? 100 : 70);
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

  // Auto-fit section bounds to snugly fit repositioned cards and remove dead space
  const autoFitSectionBounds = (sectionId: string) => {
    const layout = treeLayouts[sectionId];
    if (!layout || layout.nodes.length === 0) return;

    const padding = 35;
    let minX = Infinity;
    let minY = Infinity;
    layout.nodes.forEach((n) => {
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
    });

    const shiftX = minX !== Infinity ? minX - padding : 0;
    const shiftY = minY !== Infinity ? minY - padding : 0;

    const currentSec = sectionPrintSettings[sectionId] || {};
    const oldPositions = currentSec.nodePositions || {};
    const updatedPositions: Record<string, { x: number; y: number }> = {};

    const updatedNodes = layout.nodes.map((n) => {
      const newX = Math.round(n.x - shiftX);
      const newY = Math.round(n.y - shiftY);
      if (oldPositions[n.id]) {
        updatedPositions[n.id] = { x: newX, y: newY };
      }
      return { ...n, x: newX, y: newY };
    });

    let maxX = 0;
    let maxY = 0;
    updatedNodes.forEach((n) => {
      maxX = Math.max(maxX, n.x + n.width);
      maxY = Math.max(maxY, n.y + n.height);
    });

    const newWidth = Math.max(800, maxX + padding);
    const newHeight = Math.max(400, maxY + padding);

    // Update local treeLayouts immediately
    setTreeLayouts((prev) => ({
      ...prev,
      [sectionId]: {
        ...layout,
        width: newWidth,
        height: newHeight,
        nodes: updatedNodes
      }
    }));

    // Update store
    setSectionPrintSettings(sectionId, {
      ...currentSec,
      nodePositions: updatedPositions
    });
  };

  const handleOpenInDrawer = (nodeId: string) => {
    selectNode(nodeId);
    toggleDetailPanel(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-1 sm:p-2.5 print:p-0 print:bg-white print:static print:inset-auto print-modal-overlay">
      <div className="relative w-[98vw] max-w-[1750px] h-[98vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 print:h-auto print:max-w-none print:shadow-none print:border-none print:rounded-none print-modal-content">
        {/* Top Control Bar 1: Main Title, Scope, Target Scope, Print Trigger & Close (Hidden in print) */}
        <div className="no-print border-b border-slate-200 px-4 py-2 bg-slate-50 flex items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shadow-xs flex-shrink-0">
              <Printer className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">
                  Section Tree Diagram Print &amp; PDF Engine
                </h3>
                <span className="hidden sm:inline-flex text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 whitespace-nowrap">
                  Vector PDF Multi-Page Slicing
                </span>
              </div>
              <p className="hidden lg:block text-[10.5px] text-slate-500 truncate max-w-[500px]">
                Drag nodes directly on any page. Customize layout settings per-section or globally.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end min-w-0">
            {/* Multi-Section Scope Popover */}
            <div className="relative" ref={scopeDropdownRef}>
              <button
                type="button"
                onClick={() => setShowScopeDropdown(!showScopeDropdown)}
                className="flex items-center gap-1.5 bg-white border border-slate-300 hover:border-slate-400 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-800 shadow-2xs transition-all cursor-pointer"
                title="Select multiple combinations of sections to print"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-800 flex-shrink-0" />
                <span className="whitespace-nowrap">
                  Scope: {selectedSectionIds.length === validSections.length
                    ? `All ${validSections.length} Sections (Booklet)`
                    : selectedSectionIds.length === 0
                    ? '0 Sections Selected'
                    : `${selectedSectionIds.length} of ${validSections.length} Sections Selected`}
                </span>
                <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${showScopeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showScopeDropdown && (
                <div className="absolute right-0 sm:left-0 mt-1.5 w-76 sm:w-84 max-h-[380px] bg-white border border-slate-200 rounded-xl shadow-2xl z-50 flex flex-col p-2.5 space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-900">Select Sections to Print</span>
                    <span className="text-[10px] font-mono font-semibold text-slate-500">
                      {selectedSectionIds.length}/{validSections.length}
                    </span>
                  </div>

                  {/* Preset Buttons */}
                  <div className="grid grid-cols-4 gap-1">
                    <button
                      type="button"
                      onClick={() => setSelectedSectionIds(validSections.map((s) => s.id))}
                      className="px-1.5 py-1 text-[10px] font-bold rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-center transition-colors cursor-pointer"
                    >
                      All ({validSections.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedSectionIds([])}
                      className="px-1.5 py-1 text-[10px] font-bold rounded bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-center transition-colors cursor-pointer"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedSectionIds(validSections.filter((s) => parseInt(s.number, 10) <= 14).map((s) => s.id))}
                      className="px-1.5 py-1 text-[10px] font-bold rounded bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-center transition-colors cursor-pointer"
                      title="Select Whiteboard 1: School, Higher Ed & Gateway exams (Sec 01-14)"
                    >
                      Sec 01–14
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedSectionIds(validSections.filter((s) => parseInt(s.number, 10) >= 15).map((s) => s.id))}
                      className="px-1.5 py-1 text-[10px] font-bold rounded bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-center transition-colors cursor-pointer"
                      title="Select Whiteboard 2: Degree streams, Judiciary & Democratic pathways (Sec 15-28)"
                    >
                      Sec 15–28
                    </button>
                  </div>

                  {/* Search Input */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" />
                    <input
                      type="text"
                      placeholder="Search section by title or ID..."
                      value={sectionSearchQuery}
                      onChange={(e) => setSectionSearchQuery(e.target.value)}
                      className="w-full pl-7 pr-2 py-1 text-xs border border-slate-200 rounded-md focus:outline-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50 focus:bg-white"
                    />
                  </div>

                  {/* Checkbox List */}
                  <div className="overflow-y-auto max-h-[220px] space-y-0.5 pr-0.5 divide-y divide-slate-50">
                    {validSections
                      .filter(
                        (sec) =>
                          sec.title.toLowerCase().includes(sectionSearchQuery.toLowerCase()) ||
                          sec.id.toLowerCase().includes(sectionSearchQuery.toLowerCase()) ||
                          sec.number.includes(sectionSearchQuery)
                      )
                      .map((sec) => {
                        const isChecked = selectedSectionIds.includes(sec.id);
                        return (
                          <label
                            key={sec.id}
                            className="flex items-center gap-2 px-2 py-1.5 hover:bg-slate-50 rounded-lg cursor-pointer select-none transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {
                                setSelectedSectionIds((prev) =>
                                  prev.includes(sec.id)
                                    ? prev.filter((id) => id !== sec.id)
                                    : [...prev, sec.id]
                                );
                              }}
                              className="rounded text-emerald-800 focus:ring-emerald-700 w-3.5 h-3.5 accent-emerald-800"
                            />
                            <span className="font-mono text-[10px] font-bold px-1 py-0.2 rounded bg-slate-100 text-slate-700 border border-slate-200">
                              {sec.id}
                            </span>
                            <span className="text-[11px] font-medium text-slate-800 truncate flex-1">
                              Sec {sec.number}: {getTranslatedSectionTitle(sec, currentLanguage, translationScope)}
                            </span>
                          </label>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>

            {/* Target Settings Scope: All Pages (Global) vs Specific Page vs Single Card */}
            <div className="flex items-center gap-1.5 bg-amber-50/90 border border-amber-300 rounded-lg px-2 py-1 shadow-2xs">
              <Sliders className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
              <span className="text-[10.5px] font-bold text-amber-950 whitespace-nowrap">Settings Target:</span>
              <select
                value={customizingNodeId ? `node:${customizingSectionId}:${customizingNodeId}` : customizingSectionId}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.startsWith('node:')) {
                    const [, secId, nodeId] = val.split(':');
                    setCustomizingSectionId(secId);
                    setCustomizingNodeId(nodeId);
                  } else {
                    setCustomizingSectionId(val);
                    setCustomizingNodeId(null);
                  }
                }}
                className="text-[11px] font-bold rounded border border-amber-300 bg-white px-1.5 py-0.5 text-slate-900 shadow-2xs focus:ring-1 focus:ring-amber-500 focus:outline-hidden max-w-[140px] sm:max-w-[200px] truncate"
              >
                <option value="all">All Pages (Global Default)</option>
                {validSections.map((s) => {
                  const secNodes = (treeLayouts[s.id]?.nodes || []).filter((n) => !n.isFk && n.data?.type !== 'sectionHub');
                  return (
                    <optgroup key={s.id} label={`Sec ${s.number}: ${getTranslatedSectionTitle(s, currentLanguage, translationScope)}`}>
                      <option value={s.id}>
                        📄 Entire Page (Sec {s.number})
                      </option>
                      {secNodes.map((n) => {
                        const title = n.data ? getTranslatedNodeTitle(n.data, currentLanguage, translationScope) : n.id;
                        const hasOverride = Boolean(sectionPrintSettings[s.id]?.nodeOverrides?.[n.id]);
                        return (
                          <option key={n.id} value={`node:${s.id}:${n.id}`}>
                            &nbsp;&nbsp;🎯 Card: {title} {hasOverride ? '★' : ''}
                          </option>
                        );
                      })}
                    </optgroup>
                  );
                })}
              </select>

              {(customizingSectionId !== 'all' || customizingNodeId) && (
                <div className="flex items-center gap-1 pl-1 border-l border-amber-300">
                  {customizingNodeId ? (
                    <>
                      <button
                        onClick={() => {
                          const secSettings = sectionPrintSettings[customizingSectionId] || {};
                          const currentOverrides = { ...(secSettings.nodeOverrides || {}) };
                          delete currentOverrides[customizingNodeId];
                          setSectionPrintSettings(customizingSectionId, {
                            nodeOverrides: currentOverrides
                          });
                        }}
                        className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-bold text-[9.5px] cursor-pointer transition-colors whitespace-nowrap"
                        title="Reset this card's custom overrides back to section defaults"
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                        <span>Reset Card</span>
                      </button>
                      <button
                        onClick={() => setCustomizingNodeId(null)}
                        className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-bold text-[9.5px] cursor-pointer transition-colors whitespace-nowrap"
                        title="Deselect card and return to page settings"
                      >
                        <span>✕ Deselect</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => applySectionSettingsToAll(customizingSectionId)}
                        className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-[9.5px] shadow-2xs cursor-pointer transition-colors whitespace-nowrap"
                        title="Apply this section's layout settings to all other pages"
                      >
                        <CopyCheck className="w-2.5 h-2.5" />
                        <span>Apply All</span>
                      </button>
                      <button
                        onClick={() => resetSectionPrintSettings(customizingSectionId)}
                        className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-bold text-[9.5px] cursor-pointer transition-colors whitespace-nowrap"
                        title="Reset this page's custom settings and moved nodes back to auto"
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                        <span>Reset</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Language Selector Dropdown (Like in Toolbar) */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  curLanguage !== 'en'
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-950 ring-1 ring-indigo-400'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
                }`}
                title={`Change Language & Translation Scope (${customizingNodeId ? `Card: ${targetNodeTitle}` : customizingSectionId === 'all' ? 'All Pages' : `Page Sec ${validSections.find(s => s.id === customizingSectionId)?.number || customizingSectionId}`})`}
              >
                <Languages className={`w-3.5 h-3.5 ${curLanguage !== 'en' ? 'text-indigo-700' : 'text-slate-600'}`} />
                <span className="hidden sm:inline">
                  {curLanguage === 'hi' ? 'हिन्दी' : curLanguage === 'gu' ? 'ગુજરાતી' : t('language', curLanguage)}
                </span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                  curLanguage !== 'en' ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {curLanguage.toUpperCase()}
                </span>
                <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 z-50 text-slate-800 space-y-3 animate-in fade-in zoom-in-95 duration-100">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Languages className="w-4 h-4 text-indigo-600" />
                      <span className="text-xs font-bold text-slate-900">Language &amp; Translation</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 truncate max-w-[120px]">
                      {customizingNodeId
                        ? `Card: ${targetNodeTitle}`
                        : customizingSectionId === 'all'
                        ? 'All Pages'
                        : `Sec ${validSections.find(s => s.id === customizingSectionId)?.number || customizingSectionId}`}
                    </span>
                  </div>

                  {/* 1. Language Options */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Choose Language
                      </label>
                      {customizingNodeId ? (
                        activeNodeOverride.language && (
                          <button
                            type="button"
                            onClick={() => {
                              updateActiveSetting('language', undefined as any);
                            }}
                            className="text-[9.5px] text-amber-700 hover:text-amber-900 font-bold underline cursor-pointer"
                          >
                            Reset to Page ({((activeSecOverrides.language || currentLanguage) as string).toUpperCase()})
                          </button>
                        )
                      ) : customizingSectionId !== 'all' && activeSecOverrides.language && (
                        <button
                          type="button"
                          onClick={() => {
                            const { language: _rem, ...rest } = activeSecOverrides;
                            setSectionPrintSettings(customizingSectionId, { ...rest, language: undefined });
                          }}
                          className="text-[9.5px] text-amber-700 hover:text-amber-900 font-bold underline cursor-pointer"
                        >
                          Reset to Global ({currentLanguage.toUpperCase()})
                        </button>
                      )}
                    </div>
                    <div className="space-y-1">
                      {[
                        { code: 'en' as const, name: 'English', subtext: 'Default constitutional terminology' },
                        { code: 'hi' as const, name: 'हिन्दी (Hindi)', subtext: 'संवैधानिक, मंत्रालय और राज्य निकाय' },
                        { code: 'gu' as const, name: 'ગુજરાતી (Gujarati)', subtext: 'બંધારણીય, મંત્રાલયો અને પંચાયત' }
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => {
                            if (customizingSectionId !== 'all' && customizingNodeId) {
                              updateActiveSetting('language', lang.code);
                            } else if (customizingSectionId === 'all') {
                              setLanguage(lang.code);
                              if (useGoogleTranslateFallback && lang.code !== 'en') {
                                initGoogleTranslate(lang.code, true);
                              }
                            } else {
                              setSectionPrintSettings(customizingSectionId, { language: lang.code });
                            }
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                            curLanguage === lang.code
                              ? 'bg-indigo-50 text-indigo-950 font-bold border border-indigo-200'
                              : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                          }`}
                        >
                          <div>
                            <div className="text-xs">{lang.name}</div>
                            <div className="text-[10px] text-slate-400 font-normal">{lang.subtext}</div>
                          </div>
                          {curLanguage === lang.code && <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Scope Options */}
                  <div className="pt-2 border-t border-slate-100">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Translation Scope
                    </label>
                    <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg">
                      {[
                        { id: 'all' as const, label: 'All', title: 'Translate UI buttons, section outline, and node cards' },
                        { id: 'ui' as const, label: 'UI Only', title: 'Translate top toolbar, tabs, and outline sidebar only' },
                        { id: 'cards' as const, label: 'Cards Only', title: 'Translate node cards, roles, and section titles only' }
                      ].map((scope) => (
                        <button
                          key={scope.id}
                          type="button"
                          onClick={() => setTranslationScope(scope.id)}
                          title={scope.title}
                          className={`px-2 py-1 rounded text-[11px] font-bold text-center transition-all cursor-pointer ${
                            translationScope === scope.id
                              ? 'bg-white text-indigo-900 shadow-xs ring-1 ring-slate-300'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {scope.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Print Trigger Button */}
            <button
              onClick={handlePrint}
              disabled={isLoading || sectionsToRender.length === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 hover:text-amber-200 text-xs font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer flex-shrink-0"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Save as PDF / Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer flex-shrink-0"
              title="Close print preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Top Control Bar 2: Fine-Tuning Layout, Spacing, Sizing, Arrows, Splitting */}
        <div className="no-print bg-white border-b border-slate-200 px-4 py-2 text-xs text-slate-700">
          <SectionToolbarDeck
            isDossier={curIsDossier}
            setIsDossier={(val) => updateActiveSetting('isDossier', val)}
            arrowStyle={curArrowStyle}
            setArrowStyle={(val) => updateActiveSetting('arrowStyle', val)}
            pageSplitMode={curPageSplitMode}
            setPageSplitMode={(val) => updateActiveSetting('pageSplitMode', val)}
            fkMode={curFkMode}
            setFkMode={(val) => updateActiveSetting('fkMode', val)}
            alternateDepth={curAlternateDepth}
            setAlternateDepth={(val) => updateActiveSetting('alternateDepth', val)}
            alternateSpacingPx={curAlternateSpacingPx}
            setAlternateSpacingPx={(val) => updateActiveSetting('alternateSpacingPx', val)}
            direction={curDirection}
            setDirection={(val) => updateActiveSetting('treeDirection', val)}
            printOrientation={curPrintOrientation}
            setPrintOrientation={(val) => updateActiveSetting('printOrientation', val)}
            showFkTable={curShowFkTable}
            setShowFkTable={(val) => updateActiveSetting('showFkTable', val)}
            nodeBoxWidth={curNodeBoxWidth}
            setNodeBoxWidth={(val) => updateActiveSetting('nodeBoxWidth', val)}
            cardHeightPercent={curCardHeightPercent}
            setCardHeightPercent={(val) => updateActiveSetting('cardHeightPercent', val)}
            customNodeSpacing={curCustomNodeSpacing}
            setCustomNodeSpacing={(val) => updateActiveSetting('customNodeSpacing', val)}
            customVSpacing={curCustomVSpacing}
            setCustomVSpacing={(val) => updateActiveSetting('customVSpacing', val)}
            customArrowHeight={curCustomArrowHeight}
            setCustomArrowHeight={(val) => updateActiveSetting('customArrowHeight', val)}
            customFkArrowHeight={curCustomFkArrowHeight}
            setCustomFkArrowHeight={(val) => updateActiveSetting('customFkArrowHeight', val)}
            fontSizePx={curFontSizePx}
            setFontSizePx={(val) => updateActiveSetting('fontSizePx', val)}
            lineHeightMult={curLineHeightMult}
            setLineHeightMult={(val) => updateActiveSetting('lineHeightMult', val)}
            paraSpacingPx={curParaSpacingPx}
            setParaSpacingPx={(val) => updateActiveSetting('paraSpacingPx', val)}
            isAutoFit={curIsAutoFit}
            setIsAutoFit={(val) => updateActiveSetting('isAutoFit', val)}
            manualScale={curManualScale}
            setManualScale={(val) => {
              const newScale = typeof val === 'function' ? val(curManualScale) : val;
              updateActiveSetting('manualScale', newScale);
              updateActiveSetting('isAutoFit', false);
            }}
            language={curLanguage}
            setLanguage={(val) => updateActiveSetting('language', val)}
            targetType={customizingNodeId ? 'node' : customizingSectionId !== 'all' ? 'section' : 'global'}
            targetLabel={targetNodeTitle}
            onDeselectTarget={customizingNodeId ? () => setCustomizingNodeId(null) : undefined}
            onReset={() => {
              if (customizingSectionId !== 'all' && customizingNodeId) {
                const secSettings = sectionPrintSettings[customizingSectionId] || {};
                const currentOverrides = { ...(secSettings.nodeOverrides || {}) };
                delete currentOverrides[customizingNodeId];
                setSectionPrintSettings(customizingSectionId, {
                  nodeOverrides: currentOverrides
                });
              } else if (customizingSectionId === 'all') {
                resetSpacingAndSizing();
              } else {
                resetSectionPrintSettings(customizingSectionId);
              }
            }}
            resetTitle={
              customizingNodeId
                ? `Reset this card (${targetNodeTitle}) to page defaults`
                : customizingSectionId === 'all'
                ? 'Reset global spacing, sizing, and styling to optimal defaults'
                : 'Reset this section page to global defaults'
            }
          />
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

              const secOverrides = sectionPrintSettings[sec.id] || {};
              const secLanguage: Language = secOverrides.language ?? currentLanguage;
              const secTypo = getTypography(
                secOverrides.fontSizePx ?? fontSizePx,
                secOverrides.lineHeightMult ?? lineHeightMult,
                secOverrides.paraSpacingPx ?? paraSpacingPx
              );
              const secSplitMode = secOverrides.pageSplitMode ?? pageSplitMode;
              const secOrientation = secOverrides.printOrientation ?? printOrientation;
              const secAutoFit = secOverrides.isAutoFit ?? isAutoFit;
              const secManualScale = secOverrides.manualScale ?? manualScale;
              const secTargetPageWidth = secOrientation === 'landscape' ? 1040 : 740;
              const secDossier = secOverrides.isDossier ?? printDossierMode;
              const secShowFkTable = secOverrides.showFkTable ?? showFkTable;
              const totalFks = layout.foreignKeys.length;
              const slices = getSlicesForLayout(
                layout,
                secTargetPageWidth,
                secSplitMode,
                secAutoFit,
                secManualScale,
                secOrientation
              );

              return (
                <div key={sec.id} className="space-y-8 print:space-y-0">
                  {slices.map((slice) => {
                    return (
                      <div
                        key={`${sec.id}-${slice.sliceId}`}
                        className={`section-page ${
                          secOrientation === 'portrait' ? 'page-portrait' : 'page-landscape'
                        } bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm print:shadow-none print:border-none print:p-6 print:rounded-none print-page-break print-avoid-break mb-8 print:mb-0`}
                      >
                        {/* Section Title Banner */}
                        <div className="border-b-2 border-emerald-900/20 pb-3 mb-5 flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-widest">
                              <span>SECTION {sec.number} OF {activeSections.filter((s) => s.id !== 'SEC-00').length}</span>
                              <span>•</span>
                              <span>ID: {sec.id}</span>
                              <span>•</span>
                              <span>ECOSYSTEM TREE DIAGRAM</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5 flex items-center gap-2">
                              <span>{getTranslatedSectionTitle(sec, secLanguage, translationScope)}</span>
                              {slice.partTotal > 1 && (
                                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                                  {slice.partLabel}
                                </span>
                              )}
                            </h2>
                            <p className="text-xs text-slate-600 mt-0.5 font-medium leading-relaxed">
                              {getTranslatedSectionSubtitle(sec, secLanguage, translationScope)}
                            </p>

                            {/* Per-Page Customization Controls */}
                            <div className="flex flex-wrap items-center gap-2 no-print mt-2">
                              <button
                                onClick={() => togglePageToolbar(sec.id)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer shadow-2xs ${
                                  openPageToolbars[sec.id]
                                    ? 'bg-amber-400 text-emerald-950 border-amber-500 ring-2 ring-amber-400/50'
                                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
                                }`}
                                title="Toggle dedicated configuration toolbar for this page"
                              >
                                <Sliders className="w-3.5 h-3.5 text-amber-700" />
                                <span>{openPageToolbars[sec.id] ? 'Hide Page Settings Toolbar ▲' : 'Page Settings Toolbar ▼'}</span>
                              </button>
                              {Boolean(secOverrides.nodePositions && Object.keys(secOverrides.nodePositions).length > 0) && (
                                <>
                                  <button
                                    onClick={() => autoFitSectionBounds(sec.id)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 transition-colors cursor-pointer shadow-2xs"
                                    title="Auto-fit page boundaries tightly around the repositioned cards and remove whitespace"
                                  >
                                    <Maximize2 className="w-3 h-3 text-emerald-800" />
                                    <span>Fit Page to Cards</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      const { nodePositions: _rem, ...rest } = secOverrides;
                                      setSectionPrintSettings(sec.id, { ...rest, nodePositions: {} });
                                    }}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700 border border-slate-200 hover:border-rose-300 transition-colors cursor-pointer"
                                    title="Reset all dragged node positions on this page to automatic tree layout"
                                  >
                                    <RotateCcw className="w-3 h-3" />
                                    <span>Reset Positions ({Object.keys(secOverrides.nodePositions || {}).length})</span>
                                  </button>
                                </>
                              )}
                              <span className="text-[10.5px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                Drag any card to reposition • Changes auto-save
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1 flex-shrink-0 text-right">
                            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                              {layout.nodes.filter((n) => !n.isFk).length} Authorities
                            </span>
                            <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              {totalFks} Foreign Key {totalFks === 1 ? 'Stub' : 'Stubs'}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              Scale: {Math.round(slice.scale * 100)}% • {secOverrides.arrowStyle ?? arrowStyle} arrows • {(secOverrides.alternateDepth ?? alternateDepth) ? 'Zig-Zag' : 'Standard'}
                            </span>
                          </div>
                        </div>

                        {/* Collapsible Dedicated Per-Page Configuration Toolbar Deck */}
                        {openPageToolbars[sec.id] && (
                          <div className="no-print mb-6 p-3 bg-amber-50/70 rounded-xl border border-amber-300 shadow-sm transition-all">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Sliders className="w-4 h-4 text-amber-700" />
                                <span className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                                  Section {sec.number} ({sec.id}) Dedicated Configuration Toolbar
                                </span>
                                <span className="text-[10px] font-mono text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300 font-bold">
                                  Customized for this page
                                </span>
                              </div>
                              <button
                                onClick={() => togglePageToolbar(sec.id)}
                                className="text-[11px] font-bold text-slate-500 hover:text-slate-800 px-2 py-0.5 rounded bg-white border border-slate-200 shadow-2xs cursor-pointer"
                              >
                                ✕ Close Toolbar
                              </button>
                            </div>
                            <SectionToolbarDeck
                              isDossier={secDossier}
                              setIsDossier={(val) => setSectionPrintSettings(sec.id, { isDossier: val })}
                              arrowStyle={secOverrides.arrowStyle ?? arrowStyle}
                              setArrowStyle={(val) => setSectionPrintSettings(sec.id, { arrowStyle: val })}
                              pageSplitMode={secOverrides.pageSplitMode ?? pageSplitMode}
                              setPageSplitMode={(val) => setSectionPrintSettings(sec.id, { pageSplitMode: val })}
                              fkMode={secOverrides.fkMode ?? fkMode}
                              setFkMode={(val) => setSectionPrintSettings(sec.id, { fkMode: val })}
                              alternateDepth={secOverrides.alternateDepth ?? alternateDepth}
                              setAlternateDepth={(val) => setSectionPrintSettings(sec.id, { alternateDepth: val })}
                              alternateSpacingPx={secOverrides.alternateSpacingPx ?? alternateSpacingPx}
                              setAlternateSpacingPx={(val) => setSectionPrintSettings(sec.id, { alternateSpacingPx: val })}
                              direction={secOverrides.treeDirection ?? treeDirection}
                              setDirection={(val) => setSectionPrintSettings(sec.id, { treeDirection: val })}
                              printOrientation={secOrientation}
                              setPrintOrientation={(val) => setSectionPrintSettings(sec.id, { printOrientation: val })}
                              showFkTable={secShowFkTable}
                              setShowFkTable={(val) => setSectionPrintSettings(sec.id, { showFkTable: val })}
                              nodeBoxWidth={secOverrides.nodeBoxWidth ?? nodeBoxWidth}
                              setNodeBoxWidth={(val) => setSectionPrintSettings(sec.id, { nodeBoxWidth: val })}
                              cardHeightPercent={secOverrides.cardHeightPercent ?? cardHeightPercent}
                              setCardHeightPercent={(val) => setSectionPrintSettings(sec.id, { cardHeightPercent: val })}
                              customNodeSpacing={secOverrides.customNodeSpacing ?? customNodeSpacing}
                              setCustomNodeSpacing={(val) => setSectionPrintSettings(sec.id, { customNodeSpacing: val })}
                              customVSpacing={secOverrides.customVSpacing ?? customVSpacing}
                              setCustomVSpacing={(val) => setSectionPrintSettings(sec.id, { customVSpacing: val })}
                              customArrowHeight={secOverrides.customArrowHeight ?? customArrowHeight}
                              setCustomArrowHeight={(val) => setSectionPrintSettings(sec.id, { customArrowHeight: val })}
                              customFkArrowHeight={secOverrides.customFkArrowHeight ?? customFkArrowHeight}
                              setCustomFkArrowHeight={(val) => setSectionPrintSettings(sec.id, { customFkArrowHeight: val })}
                              fontSizePx={secOverrides.fontSizePx ?? fontSizePx}
                              setFontSizePx={(val) => setSectionPrintSettings(sec.id, { fontSizePx: val })}
                              lineHeightMult={secOverrides.lineHeightMult ?? lineHeightMult}
                              setLineHeightMult={(val) => setSectionPrintSettings(sec.id, { lineHeightMult: val })}
                              paraSpacingPx={secOverrides.paraSpacingPx ?? paraSpacingPx}
                              setParaSpacingPx={(val) => setSectionPrintSettings(sec.id, { paraSpacingPx: val })}
                              isAutoFit={secAutoFit}
                              setIsAutoFit={(val) => setSectionPrintSettings(sec.id, { isAutoFit: val })}
                              manualScale={secManualScale}
                              setManualScale={(val) => {
                                const newScale = typeof val === 'function' ? val(secManualScale) : val;
                                setSectionPrintSettings(sec.id, { manualScale: newScale, isAutoFit: false });
                              }}
                              language={secLanguage}
                              setLanguage={(val) => setSectionPrintSettings(sec.id, { language: val })}
                              isPerPage={true}
                              hasCustomPositions={Boolean(secOverrides.nodePositions && Object.keys(secOverrides.nodePositions).length > 0)}
                              onClearNodePositions={() => {
                                const { nodePositions: _rem, ...rest } = secOverrides;
                                setSectionPrintSettings(sec.id, { ...rest, nodePositions: {} });
                              }}
                              onApplyToAll={() => applySectionSettingsToAll(sec.id)}
                              onReset={() => resetSectionPrintSettings(sec.id)}
                              resetTitle="Reset this page to default settings"
                            />
                          </div>
                        )}

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
                              {(() => {
                                // Build a drag-aware node position lookup for live edge recomputation
                                const isDraggingInThisSection = dragState && dragState.sectionId === sec.id;
                                const dragNodeId = isDraggingInThisSection ? dragState.nodeId : null;
                                const dx = isDraggingInThisSection ? dragState.currentDx : 0;
                                const dy = isDraggingInThisSection ? dragState.currentDy : 0;

                                // Fast node lookup map (built once per render, including node overrides)
                                const nodeMap = new Map<string, { x: number; y: number; width: number; height: number }>();
                                for (const n of layout.nodes) {
                                  const nOverride = secOverrides.nodeOverrides?.[n.id];
                                  const nw = nOverride?.nodeBoxWidth ?? n.width;
                                  const nh = nOverride?.cardHeightPercent
                                    ? Math.round(n.height * (nOverride.cardHeightPercent / 100))
                                    : n.height;
                                  nodeMap.set(n.id, {
                                    x: n.id === dragNodeId ? n.x + dx : n.x,
                                    y: n.id === dragNodeId ? n.y + dy : n.y,
                                    width: nw,
                                    height: nh
                                  });
                                }

                                // Recompute pathD for an edge when its source or target is being dragged or has custom dimensions
                                const secOverridesDir = secOverrides.treeDirection ?? treeDirection;
                                const isRight = secOverridesDir === 'RIGHT';

                                const getLivePathD = (edge: typeof layout.edges[0]): string => {
                                  const hasNodeOverride = (id: string) => Boolean(secOverrides.nodeOverrides?.[id]?.nodeBoxWidth || secOverrides.nodeOverrides?.[id]?.cardHeightPercent);
                                  const isDynamic = dragNodeId
                                    ? (edge.source === dragNodeId || edge.target === dragNodeId)
                                    : (hasNodeOverride(edge.source) || hasNodeOverride(edge.target));

                                  if (!isDynamic) {
                                    return edge.pathD || '';
                                  }

                                  const sn = nodeMap.get(edge.source);
                                  const tn = nodeMap.get(edge.target);
                                  if (!sn || !tn) return edge.pathD || '';

                                  if (isRight) {
                                    // Horizontal: right edge of source → left edge of target
                                    const sx = sn.x + sn.width;
                                    const sy = sn.y + sn.height / 2;
                                    const tx = tn.x;
                                    const ty = tn.y + tn.height / 2;
                                    const cdx = tx - sx;
                                    const curveOffset = Math.max(30, Math.min(180, Math.abs(cdx) * 0.45));
                                    const cx1 = sx + (cdx >= 0 ? curveOffset : -curveOffset);
                                    const cx2 = tx - (cdx >= 0 ? curveOffset : -curveOffset);
                                    return `M ${sx} ${sy} C ${cx1} ${sy}, ${cx2} ${ty}, ${tx} ${ty}`;
                                  } else {
                                    // Vertical: bottom of source → top of target
                                    const sx = sn.x + sn.width / 2;
                                    const sy = sn.y + sn.height;
                                    const tx = tn.x + tn.width / 2;
                                    const ty = tn.y;
                                    const cdy = ty - sy;
                                    const curveOffset = Math.max(25, Math.min(180, Math.abs(cdy) * 0.45));
                                    const cy1 = sy + (cdy >= 0 ? curveOffset : -curveOffset);
                                    const cy2 = ty - (cdy >= 0 ? curveOffset : -curveOffset);
                                    return `M ${sx} ${sy} C ${sx} ${cy1}, ${tx} ${cy2}, ${tx} ${ty}`;
                                  }
                                };

                                return (
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
                                        d={getLivePathD(edge)}
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
                                          d={getLivePathD(edge)}
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
                                );
                              })()}

                              {/* Render Nodes Layer */}
                              {layout.nodes.map((node) => {
                                const isThisDragging = dragState?.nodeId === node.id && dragState?.sectionId === sec.id;
                                const renderX = node.x + (isThisDragging ? dragState.currentDx : 0);
                                const renderY = node.y + (isThisDragging ? dragState.currentDy : 0);

                                // 1. Foreign Key Link Stub Node
                                if (node.isFk) {
                                  const isOut = node.fkDirection === 'out';
                                  return (
                                    <div
                                      key={node.id}
                                      onPointerDown={(e) => handleStartDrag(e, sec.id, node.id, node.x, node.y, slice.scale)}
                                      className={`absolute rounded-xl border px-3 py-1.5 flex items-center justify-between gap-2 shadow-2xs select-none ${
                                        isOut
                                          ? 'bg-amber-50/95 border-amber-300 text-amber-900'
                                          : 'bg-sky-50/95 border-sky-300 text-sky-900'
                                      } ${isThisDragging ? 'z-30 ring-2 ring-amber-500 shadow-xl' : ''}`}
                                      style={{
                                        left: `${renderX}px`,
                                        top: `${renderY}px`,
                                        width: `${node.width}px`,
                                        height: `${Math.min(node.height, 46)}px`,
                                        lineHeight: secTypo.lineHeight,
                                        cursor: isThisDragging ? 'grabbing' : 'grab',
                                        touchAction: 'none'
                                      }}
                                      title={(() => {
                                        const extNode = node.extNodeId ? nodeMap.get(node.extNodeId) : undefined;
                                        const targetTitle = extNode ? getTranslatedNodeTitle(extNode, secLanguage, translationScope) : (node.extNodeTitle ? getTranslatedGovernanceValue(node.extNodeTitle, secLanguage) : '');
                                        const verb = getTranslatedGovernanceValue(node.relLabel, secLanguage);
                                        const dir = isOut ? (secLanguage === 'hi' ? 'बहिर्गमन संबंध' : secLanguage === 'gu' ? 'બહારનો સંબંધ' : 'Outgoing') : (secLanguage === 'hi' ? 'आगमन संबंध' : secLanguage === 'gu' ? 'આવક संबंध' : 'Incoming');
                                        return targetTitle ? `${dir}: ${verb} ➔ ${targetTitle} (${node.extNodeId})` : verb;
                                      })()}
                                    >
                                      {/* Left Side: Relationship / Role Content with Anchor */}
                                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                                        <Anchor className={`w-3.5 h-3.5 flex-shrink-0 ${isOut ? 'text-amber-700' : 'text-sky-700'}`} />
                                        <span
                                          className="font-bold truncate text-slate-800"
                                          style={{ fontSize: secTypo.badge, lineHeight: secTypo.lineHeight }}
                                        >
                                          {(() => {
                                            const extNode = node.extNodeId ? nodeMap.get(node.extNodeId) : undefined;
                                            const targetTitle = extNode ? getTranslatedNodeTitle(extNode, secLanguage, translationScope) : (node.extNodeTitle ? getTranslatedGovernanceValue(node.extNodeTitle, secLanguage) : '');
                                            const verb = getTranslatedGovernanceValue(node.relLabel, secLanguage);
                                            return targetTitle || verb || (isOut ? (secLanguage === 'hi' ? 'बहिर्गमन लिंक' : secLanguage === 'gu' ? 'બહારની કડી' : 'Outgoing Link') : (secLanguage === 'hi' ? 'आगमन लिंक' : secLanguage === 'gu' ? 'આવક કડી' : 'Incoming Link'));
                                          })()}
                                        </span>
                                      </div>
                                      {/* Right Side: Direction Badge with Pill Highlight Background */}
                                      <span
                                        className={`font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border truncate flex-shrink-0 ${
                                          isOut ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-sky-100 text-sky-800 border-sky-200'
                                        }`}
                                        style={{ fontSize: secTypo.micro, lineHeight: secTypo.lineHeight }}
                                      >
                                        {isOut ? (secLanguage === 'hi' ? 'बहिर्गमन ➔' : secLanguage === 'gu' ? 'બહાર ➔' : 'Outgoing ➔') : (secLanguage === 'hi' ? '⬅ आगमन' : secLanguage === 'gu' ? '⬅ આવક' : '⬅ Incoming')}
                                      </span>
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
                                      onPointerDown={(e) => handleStartDrag(e, sec.id, node.id, node.x, node.y, slice.scale)}
                                      className={`absolute rounded-xl border-2 border-emerald-900 bg-emerald-900 text-white p-3 shadow-md flex flex-col justify-center select-none ${
                                        isThisDragging ? 'z-30 ring-2 ring-amber-400 shadow-2xl' : ''
                                      }`}
                                      style={{
                                        left: `${renderX}px`,
                                        top: `${renderY}px`,
                                        width: `${node.width}px`,
                                        height: `${node.height}px`,
                                        lineHeight: secTypo.lineHeight,
                                        cursor: isThisDragging ? 'grabbing' : 'grab',
                                        touchAction: 'none'
                                      }}
                                    >
                                      <div>
                                        <div
                                          className="flex items-center justify-between gap-1 text-amber-400 font-mono font-bold uppercase tracking-wider"
                                          style={{ fontSize: secTypo.badge, lineHeight: secTypo.lineHeight }}
                                        >
                                          <span>SECTION {data.sectionNumber}</span>
                                          <span>{data.abbreviation}</span>
                                        </div>
                                        <h3
                                          className="font-bold"
                                          style={{
                                            fontSize: secTypo.hubTitle,
                                            lineHeight: secTypo.lineHeight,
                                            marginTop: secTypo.spacingQuarter,
                                            marginBottom: secTypo.spacingQuarter
                                          }}
                                        >
                                          {getTranslatedNodeTitle(data, secLanguage, translationScope)}
                                        </h3>
                                      </div>
                                    </div>
                                  );
                                }

                                // 3. Standard Authority Node (With Direct Inline Editing, Drag Repositioning, Toolbar Targeting & Hover Indicators)
                                const isEditing = editingNodeId === node.id;
                                const isTargeted = customizingNodeId === node.id && customizingSectionId === sec.id;
                                const nodeOverride = secOverrides.nodeOverrides?.[node.id];
                                const nodeRenderWidth = nodeOverride?.nodeBoxWidth ?? node.width;
                                const nodeRenderHeight = nodeOverride?.cardHeightPercent
                                  ? Math.round(node.height * (nodeOverride.cardHeightPercent / 100))
                                  : node.height;
                                const nodeFs = nodeOverride?.fontSizePx ?? secOverrides.fontSizePx ?? fontSizePx;
                                const nodeLh = nodeOverride?.lineHeightMult ?? secOverrides.lineHeightMult ?? lineHeightMult;
                                const nodePs = nodeOverride?.paraSpacingPx ?? secOverrides.paraSpacingPx ?? paraSpacingPx;
                                const cardTypo = (nodeOverride?.fontSizePx || nodeOverride?.lineHeightMult || nodeOverride?.paraSpacingPx)
                                  ? getTypography(nodeFs, nodeLh, nodePs)
                                  : secTypo;
                                const cardDossierMode = nodeOverride?.isDossier ?? secDossier;
                                const cardLanguage = nodeOverride?.language ?? secLanguage;

                                return (() => {
                                  const typo = cardTypo;
                                  const printDossierMode = cardDossierMode;
                                  const secLanguage = cardLanguage;

                                  return (
                                    <div
                                    key={node.id}
                                    onPointerDown={(e) => handleStartDrag(e, sec.id, node.id, node.x, node.y, slice.scale)}
                                    onClick={() => {
                                      if (!hasMoved) {
                                        if (isTargeted) {
                                          handleNodeClick(node);
                                        } else {
                                          setCustomizingSectionId(sec.id);
                                          setCustomizingNodeId(node.id);
                                        }
                                      }
                                    }}
                                    className={`absolute rounded-xl border p-2.5 shadow-2xs flex flex-col justify-start overflow-hidden print-avoid-break transition-all group ${
                                      isEditing
                                        ? 'bg-emerald-50/50 border-emerald-500 ring-2 ring-emerald-500/50 z-20 shadow-lg'
                                        : isThisDragging
                                        ? 'bg-white border-amber-500 ring-2 ring-amber-400 z-30 shadow-2xl'
                                        : isTargeted
                                        ? 'bg-amber-50/40 border-amber-500 ring-2 ring-amber-500 z-20 shadow-lg'
                                        : 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-md'
                                    }`}
                                    style={{
                                      left: `${renderX}px`,
                                      top: `${renderY}px`,
                                      width: `${nodeRenderWidth}px`,
                                      height: `${nodeRenderHeight}px`,
                                      lineHeight: typo.lineHeight,
                                      cursor: isEditing ? 'default' : (isThisDragging ? 'grabbing' : 'pointer'),
                                      touchAction: 'none'
                                    }}
                                    title={isEditing ? undefined : isTargeted ? "Card targeted in toolbar (click to edit text, drag to move)" : "Click to target in toolbar, or drag to move"}
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

                                        {/* Institutional fields if available */}
                                        {editDraft.institutionDetails && (
                                          <div className="flex flex-col gap-1 border-t border-emerald-200 pt-1">
                                            <input
                                              type="text"
                                              value={editDraft.institutionDetails.institutionType || ''}
                                              onChange={(e) => {
                                                setEditDraft((d) => ({
                                                  ...d,
                                                  institutionDetails: {
                                                    ...(d.institutionDetails || {}),
                                                    institutionType: e.target.value
                                                  }
                                                }));
                                                setIsDirty(true);
                                              }}
                                              placeholder="Institution Type / Level"
                                              className="text-[10px] px-1.5 py-0.5 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
                                            />
                                            <input
                                              type="text"
                                              value={editDraft.institutionDetails.examinationTimeline || ''}
                                              onChange={(e) => {
                                                setEditDraft((d) => ({
                                                  ...d,
                                                  institutionDetails: {
                                                    ...(d.institutionDetails || {}),
                                                    examinationTimeline: e.target.value
                                                  }
                                                }));
                                                setIsDirty(true);
                                              }}
                                              placeholder="Timeline / Duration"
                                              className="text-[10px] px-1.5 py-0.5 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
                                            />
                                            <input
                                              type="text"
                                              value={editDraft.institutionDetails.admissionRoute || ''}
                                              onChange={(e) => {
                                                setEditDraft((d) => ({
                                                  ...d,
                                                  institutionDetails: {
                                                    ...(d.institutionDetails || {}),
                                                    admissionRoute: e.target.value
                                                  }
                                                }));
                                                setIsDirty(true);
                                              }}
                                              placeholder="Admission Route"
                                              className="text-[10px] px-1.5 py-0.5 rounded border border-slate-300 bg-white text-slate-800 focus:outline-hidden"
                                            />
                                          </div>
                                        )}

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
                                            <div className="flex items-center gap-1 min-w-0">
                                              <span className="font-bold text-slate-500 uppercase tracking-wider truncate">
                                                Sec {data.sectionNumber} • {getTranslatedLevel(data.level, secLanguage)}
                                              </span>
                                              {isTargeted && (
                                                <span className="no-print font-mono text-[8px] font-black px-1 py-0.2 rounded bg-amber-400 text-amber-950 uppercase border border-amber-500 shrink-0">
                                                  TARGET
                                                </span>
                                              )}
                                              {!isTargeted && nodeOverride && (
                                                <span className="no-print font-mono text-[8px] font-bold px-1 rounded bg-amber-100 text-amber-800 border border-amber-300 shrink-0" title="Customized card">
                                                  ★
                                                </span>
                                              )}
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0">
                                              {data.abbreviation && (
                                                <span
                                                  className="font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200"
                                                  style={{ fontSize: typo.badge }}
                                                >
                                                  {getTranslatedGovernanceValue(data.abbreviation, secLanguage)}
                                                </span>
                                              )}
                                              {/* Direct text edit trigger button */}
                                              <button
                                                type="button"
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleNodeClick(node);
                                                }}
                                                className="no-print p-0.5 text-emerald-800 hover:bg-emerald-100 rounded cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                                                title="Edit text content directly"
                                              >
                                                <Edit3 className="w-3 h-3" />
                                              </button>
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
                                            {getTranslatedNodeTitle(data, secLanguage, translationScope)}
                                          </h4>

                                          {/* Badges Container */}
                                          <div className="flex flex-wrap items-center gap-1" style={{ marginBottom: typo.spacingQuarter }}>
                                            {printDossierMode ? (
                                              <>
                                                {data.institutionDetails?.examinationTimeline && (
                                                  <span
                                                    className="font-medium px-1.5 py-0.2 rounded bg-slate-100/90 text-slate-700 border border-slate-200 inline-flex items-center gap-1"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    <Clock className="w-2.5 h-2.5 text-slate-500" />
                                                    {getTranslatedGovernanceValue(data.institutionDetails.examinationTimeline.replace(/^Timeline:\s*/i, ''), secLanguage)}
                                                  </span>
                                                )}
                                                {data.institutionDetails?.admissionRoute && (
                                                  <span
                                                    className="font-medium px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center gap-1"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    <Sparkles className="w-2.5 h-2.5 text-blue-600" />
                                                    {getTranslatedGovernanceValue(data.institutionDetails.admissionRoute, secLanguage)}
                                                  </span>
                                                )}
                                                {data.legalStatus && (
                                                  <span
                                                    className="font-medium px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 border border-slate-200 inline-block"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {getTranslatedGovernanceValue(data.legalStatus, secLanguage)}
                                                  </span>
                                                )}
                                                {data.institutionDetails?.institutionType && (
                                                  <span
                                                    className="font-semibold px-1.5 py-0.2 rounded bg-purple-50 text-purple-900 border border-purple-200 inline-block"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {getTranslatedGovernanceValue(data.institutionDetails.institutionType, secLanguage)}
                                                  </span>
                                                )}
                                                {data.examDetails?.examAgency && (
                                                  <span
                                                    className="font-semibold px-1.5 py-0.2 rounded bg-blue-50 text-blue-900 border border-blue-200 inline-block"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {getTranslatedGovernanceValue(data.examDetails.examAgency, secLanguage)}
                                                  </span>
                                                )}
                                                {data.governanceDetails?.constitutionalArticle && (
                                                  <span
                                                    className="font-semibold px-1.5 py-0.2 rounded bg-purple-50 text-purple-900 border border-purple-200 inline-block font-mono"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {data.governanceDetails.constitutionalArticle}
                                                  </span>
                                                )}
                                                {data.governanceDetails?.cadreOrService && (
                                                  <span
                                                    className="font-semibold px-1.5 py-0.2 rounded bg-rose-50 text-rose-700 border border-rose-200 inline-block"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {getTranslatedGovernanceValue(data.governanceDetails.cadreOrService, secLanguage)}
                                                  </span>
                                                )}
                                                {data.governanceDetails?.positionName && (
                                                  <span
                                                    className="font-medium px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 inline-block"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {getTranslatedGovernanceValue(data.governanceDetails.positionName, secLanguage)}
                                                  </span>
                                                )}
                                                {data.bankingJudicialDetails?.regulatoryBodyOrApex && (
                                                  <span
                                                    className="font-semibold px-1.5 py-0.2 rounded bg-amber-50 text-amber-900 border border-amber-200 inline-block"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {getTranslatedGovernanceValue(data.bankingJudicialDetails.regulatoryBodyOrApex, secLanguage)}
                                                  </span>
                                                )}
                                              </>
                                            ) : (
                                              /* Compact mode: Show only ONE clean primary badge */
                                              (() => {
                                                const primaryBadge =
                                                  data.governanceDetails?.cadreOrService ||
                                                  data.institutionDetails?.institutionType ||
                                                  data.examDetails?.examAgency ||
                                                  data.governanceDetails?.constitutionalArticle ||
                                                  data.bankingJudicialDetails?.regulatoryBodyOrApex ||
                                                  data.legalStatus;
                                                if (!primaryBadge) return null;
                                                return (
                                                  <span
                                                    className="font-semibold px-1.5 py-0.2 rounded bg-purple-50 text-purple-900 border border-purple-200 inline-block truncate max-w-[95%]"
                                                    style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}
                                                  >
                                                    {getTranslatedGovernanceValue(primaryBadge, secLanguage)}
                                                  </span>
                                                );
                                              })()
                                            )}
                                          </div>

                                          {/* Summary Synopsis */}
                                          {data.summary && (
                                            <p
                                              className={`text-slate-600 ${secDossier ? '' : 'line-clamp-1 overflow-hidden text-ellipsis'}`}
                                              style={{
                                                fontSize: typo.body,
                                                lineHeight: typo.lineHeight,
                                                marginBottom: typo.spacingQuarter
                                              }}
                                            >
                                              {getTranslatedNodeSummary(data, secLanguage, translationScope)}
                                            </p>
                                          )}

                                          {/* FULL DOSSIER CONTENT (if toggle is active) */}
                                          {secDossier && (
                                            <div
                                              className="pt-1 border-t border-slate-100 flex flex-col"
                                              style={{
                                                gap: typo.spacing,
                                                marginTop: typo.spacingHalf
                                              }}
                                            >
                                              {/* Whiteboard 2: Institutional Framework & Degrees Box */}
                                              {data.institutionDetails && (
                                                <div
                                                  className="p-2 rounded-lg bg-indigo-50/70 border border-indigo-200 flex flex-col"
                                                  style={{ gap: typo.spacingQuarter }}
                                                >
                                                  <div className="flex items-center gap-1 font-bold text-indigo-950 uppercase tracking-wide" style={{ fontSize: typo.badge }}>
                                                    <Landmark className="w-3 h-3 text-indigo-700" />
                                                    <span>{t('card.institutions', secLanguage)}</span>
                                                  </div>

                                                  {data.institutionDetails.institutionType && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.instType', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.institutionDetails.institutionType, secLanguage)}
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.examinationTimeline && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800 flex items-start gap-1">
                                                      <Clock className="w-2.5 h-2.5 text-indigo-700 flex-shrink-0 mt-0.5" />
                                                      <div>
                                                        <span className="font-semibold text-indigo-900">{t('card.timeline', secLanguage)} </span>
                                                        <span>{getTranslatedGovernanceValue(data.institutionDetails.examinationTimeline.replace(/^Timeline:\s*/i, ''), secLanguage)}</span>
                                                      </div>
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.programmesOffered && data.institutionDetails.programmesOffered.length > 0 && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.programmes', secLanguage)} </span>
                                                      <span>{data.institutionDetails.programmesOffered.map(p => getTranslatedGovernanceValue(p, secLanguage)).join(', ')}</span>
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.admissionRoute && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.admission', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.institutionDetails.admissionRoute, secLanguage)}
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.prerequisiteStream && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.prerequisite', secLanguage)} </span>
                                                      <span className="font-medium text-emerald-800">{getTranslatedGovernanceValue(data.institutionDetails.prerequisiteStream, secLanguage)}</span>
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.awardingBody && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.awardingBody', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.institutionDetails.awardingBody, secLanguage)}
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.controlledBy && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.controlledBy', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.institutionDetails.controlledBy, secLanguage)}
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.curriculumBody && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.curriculum', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.institutionDetails.curriculumBody, secLanguage)}
                                                    </div>
                                                  )}

                                                  {data.institutionDetails.careerValue && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-indigo-900">{t('card.careerOps', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.institutionDetails.careerValue, secLanguage)}
                                                    </div>
                                                  )}
                                                </div>
                                              )}

                                              {/* Whiteboard 3: Examination Lifecycle Details */}
                                              {data.examDetails && (
                                                <div
                                                  className="p-2 rounded-lg bg-blue-50/70 border border-blue-200 flex flex-col"
                                                  style={{ gap: typo.spacingQuarter }}
                                                >
                                                  <div className="flex items-center gap-1 font-bold text-blue-950 uppercase tracking-wide" style={{ fontSize: typo.badge }}>
                                                    <GraduationCap className="w-3 h-3 text-blue-700" />
                                                    <span>{t('card.lifecycle', secLanguage)}</span>
                                                  </div>
                                                  {data.examDetails.examAgency && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-blue-900">{t('card.instType', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.examDetails.examAgency, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.examDetails.eligibilityCriteria && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-blue-900">{t('card.eligibility', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.examDetails.eligibilityCriteria, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.examDetails.applicationWindow && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-blue-900">{t('card.timeline', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.examDetails.applicationWindow, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.examDetails.examStages && data.examDetails.examStages.length > 0 && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-blue-900">{t('card.stages', secLanguage)} </span>
                                                      {data.examDetails.examStages.map(s => getTranslatedGovernanceValue(s, secLanguage)).join(' ➔ ')}
                                                    </div>
                                                  )}
                                                  {data.examDetails.counsellingBody && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-blue-900">{t('card.counselling', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.examDetails.counsellingBody, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.examDetails.outcome && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-blue-900">{t('card.outcome', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.examDetails.outcome, secLanguage)}
                                                    </div>
                                                  )}
                                                </div>
                                              )}

                                              {/* Whiteboard 4: Democratic Governance Details */}
                                              {data.governanceDetails && (
                                                <div
                                                  className="p-2 rounded-lg bg-purple-50/70 border border-purple-200/80 flex flex-col"
                                                  style={{ gap: typo.spacingQuarter }}
                                                >
                                                  <div className="flex items-center gap-1 font-bold text-purple-950 uppercase tracking-wide" style={{ fontSize: typo.badge }}>
                                                    <Landmark className="w-3 h-3 text-purple-700" />
                                                    <span>{t('card.hierarchy', secLanguage)}</span>
                                                  </div>
                                                  {data.governanceDetails.positionName && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-purple-900">{t('card.post', secLanguage)} </span>
                                                      <span className="font-bold text-slate-900">{getTranslatedGovernanceValue(data.governanceDetails.positionName, secLanguage)}</span>
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.cadreOrService && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-purple-900">{t('card.cadre', secLanguage)} </span>
                                                      <span className="font-bold text-rose-800 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200 inline-block" style={{ fontSize: typo.badge }}>
                                                        {getTranslatedGovernanceValue(data.governanceDetails.cadreOrService, secLanguage)}
                                                      </span>
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.constitutionalArticle && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800 font-mono">
                                                      <span className="font-semibold text-purple-900">{t('card.article', secLanguage)} </span>
                                                      {data.governanceDetails.constitutionalArticle}
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.electoralOrSelectionMethod && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-purple-900">{t('card.selection', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.governanceDetails.electoralOrSelectionMethod, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.tenure && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-purple-900">{t('card.tenure', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.governanceDetails.tenure, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.geographicalJurisdiction && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-purple-900">{t('card.jurisdiction', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.governanceDetails.geographicalJurisdiction, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.reportingTo && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-purple-900">{t('card.reportsTo', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.governanceDetails.reportingTo, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.superiorAuthority && (
                                                    <div className="bg-amber-50/90 p-1.5 rounded-md border border-amber-300/80 mt-1 shadow-2xs">
                                                      <span className="font-bold text-amber-950 flex items-center gap-1 mb-0.5" style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}>
                                                        <Crown className="w-3 h-3 text-amber-700 flex-shrink-0" />
                                                        {t('card.superior', secLanguage)}
                                                      </span>
                                                      <span className="text-slate-800 font-medium leading-relaxed block" style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }}>
                                                        {getTranslatedGovernanceValue(data.governanceDetails.superiorAuthority, secLanguage)}
                                                      </span>
                                                    </div>
                                                  )}
                                                  {data.governanceDetails.removalOrDeElectionMethod && (
                                                    <div className="bg-rose-50/90 p-1.5 rounded-md border border-rose-300/80 mt-1 shadow-2xs">
                                                      <span className="font-bold text-rose-950 flex items-center gap-1 mb-0.5" style={{ fontSize: typo.badge, lineHeight: typo.lineHeight }}>
                                                        <AlertTriangle className="w-3 h-3 text-rose-700 flex-shrink-0" />
                                                        {t('card.removal', secLanguage)}
                                                      </span>
                                                      <span className="text-rose-950 font-medium leading-relaxed block" style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }}>
                                                        {getTranslatedGovernanceValue(data.governanceDetails.removalOrDeElectionMethod, secLanguage)}
                                                      </span>
                                                    </div>
                                                  )}
                                                </div>
                                              )}

                                              {/* Whiteboard 5: Banking & Judicial Details */}
                                              {data.bankingJudicialDetails && (
                                                <div
                                                  className="p-2 rounded-lg bg-amber-50/70 border border-amber-200 flex flex-col"
                                                  style={{ gap: typo.spacingQuarter }}
                                                >
                                                  <div className="flex items-center gap-1 font-bold text-amber-950 uppercase tracking-wide" style={{ fontSize: typo.badge }}>
                                                    <Landmark className="w-3 h-3 text-amber-700" />
                                                    <span>{data.bankingJudicialDetails.domain === 'banking' ? t('card.banking', secLanguage) : t('card.judicial', secLanguage)}</span>
                                                  </div>
                                                  {data.bankingJudicialDetails.regulatoryBodyOrApex && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-amber-900">{t('card.instType', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.bankingJudicialDetails.regulatoryBodyOrApex, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.bankingJudicialDetails.tier && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-amber-900">{t('card.tier', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.bankingJudicialDetails.tier, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.bankingJudicialDetails.jurisdictionOrScope && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-amber-900">{t('card.jurisdictionScope', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.bankingJudicialDetails.jurisdictionOrScope, secLanguage)}
                                                    </div>
                                                  )}
                                                  {data.bankingJudicialDetails.grievanceOrAppellateRoute && (
                                                    <div style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }} className="text-slate-800">
                                                      <span className="font-semibold text-amber-900">{t('card.appellateRoute', secLanguage)} </span>
                                                      {getTranslatedGovernanceValue(data.bankingJudicialDetails.grievanceOrAppellateRoute, secLanguage)}
                                                    </div>
                                                  )}
                                                </div>
                                              )}

                                              {/* Legal Basis */}
                                              {data.establishingLaw && data.establishingLaw.length > 0 && (
                                                <div
                                                  className="text-slate-600 font-mono bg-slate-50 p-1.5 rounded"
                                                  style={{ fontSize: typo.sub, lineHeight: typo.lineHeight }}
                                                >
                                                  <span className="font-bold text-slate-700">{t('card.statuteActs', secLanguage)} </span>
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
                                                    {t('card.mandate', secLanguage)}
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
                                                        {getTranslatedGovernanceValue(m, secLanguage)}
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                              )}

                                              {/* Powers */}
                                              {data.powers && data.powers.length > 0 && (
                                                <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-200">
                                                  <span
                                                    className="font-bold text-emerald-950 uppercase tracking-wide block"
                                                    style={{
                                                      fontSize: typo.badge,
                                                      lineHeight: typo.lineHeight,
                                                      marginBottom: typo.spacingQuarter
                                                    }}
                                                  >
                                                    {t('card.powers', secLanguage)}
                                                  </span>
                                                  <ul
                                                    className="list-disc pl-3 text-slate-800"
                                                    style={{
                                                      fontSize: typo.sub,
                                                      lineHeight: typo.lineHeight
                                                    }}
                                                  >
                                                    {data.powers.slice(0, 4).map((p, idx) => (
                                                      <li
                                                        key={idx}
                                                        style={{
                                                          marginBottom: typo.spacingQuarter
                                                        }}
                                                      >
                                                        {getTranslatedGovernanceValue(p, secLanguage)}
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                              )}

                                              {/* Limitations */}
                                              {data.limitations && data.limitations.length > 0 && (
                                                <div className="bg-rose-50/70 p-1.5 rounded-lg border border-rose-200">
                                                  <span
                                                    className="font-bold text-rose-950 uppercase tracking-wide block"
                                                    style={{
                                                      fontSize: typo.badge,
                                                      lineHeight: typo.lineHeight,
                                                      marginBottom: typo.spacingQuarter
                                                    }}
                                                  >
                                                    {t('card.limitations', secLanguage)}
                                                  </span>
                                                  <ul
                                                    className="pl-0.5 text-rose-950"
                                                    style={{
                                                      fontSize: typo.sub,
                                                      lineHeight: typo.lineHeight
                                                    }}
                                                  >
                                                    {data.limitations.slice(0, 3).map((l, idx) => (
                                                      <li
                                                        key={idx}
                                                        className="flex items-start gap-1"
                                                        style={{
                                                          marginBottom: typo.spacingQuarter
                                                        }}
                                                      >
                                                        <span className="text-rose-500 font-bold flex-shrink-0">✕</span>
                                                        <span>{getTranslatedGovernanceValue(l, secLanguage)}</span>
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
                                              <span>{secLanguage === 'hi' ? 'बाह्य संबंध कड़ियाँ' : secLanguage === 'gu' ? 'બાહ્ય સંબંધ કડીઓ' : 'Foreign Key Links'} ({node.dockedFks.length}):</span>
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
                                                  title={`${fk.direction === 'out' ? (secLanguage === 'hi' ? 'बहिर्गमन संबंध' : secLanguage === 'gu' ? 'બહારનો સંબંધ' : 'Outgoing') : (secLanguage === 'hi' ? 'आगमन संबंध' : secLanguage === 'gu' ? 'આવક સંબંધ' : 'Incoming')} ➔ ${getTranslatedGovernanceValue(fk.extNodeTitle, secLanguage)}`}
                                                >
                                                  <span className="font-bold">{fk.direction === 'out' ? (secLanguage === 'hi' ? '➡ बहिर्:' : secLanguage === 'gu' ? '➡ બહાર:' : '➡ Out:') : (secLanguage === 'hi' ? '⬅ आगम:' : secLanguage === 'gu' ? '⬅ આવક:' : '⬅ In:')}</span>
                                                  <span className="font-semibold truncate max-w-[130px]">
                                                    {getTranslatedGovernanceValue(fk.extNodeTitle, secLanguage)}
                                                  </span>
                                                  <span className="opacity-75">[{getTranslatedGovernanceValue(fk.relLabel, secLanguage)}]</span>
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
                                          <span className="capitalize">{getTranslatedGovernanceValue(data.verificationStatus, secLanguage)}</span>
                                          <span className="font-mono">ID: {data.id}</span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })();
                            })}
                            </div>
                          </div>
                        </div>

                        {/* Section Foreign Key Bridge Ledger Table (Conditionally rendered based on showFkTable toggle) */}
                        {slice.isLastSlice && secShowFkTable && (
                          <div className="border-t border-slate-200 pt-3 print-avoid-break">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5">
                                <FileCheck2 className="w-3.5 h-3.5 text-amber-700" />
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                                  {secLanguage === 'hi'
                                    ? `अनुभाग ${sec.number} के बाह्य संबंध लिंक (Foreign Key Stubs)`
                                    : secLanguage === 'gu'
                                    ? `વિભાગ ${sec.number} ની બાહ્ય સંબંધ કડીઓ (Foreign Key Stubs)`
                                    : `Foreign Key Linkage Stubs for Section ${sec.number}`}
                                </h4>
                              </div>
                              <span className="text-[10px] font-mono text-slate-500">
                                {secLanguage === 'hi'
                                  ? `${totalFks} अनुभाग-पार संबंध`
                                  : secLanguage === 'gu'
                                  ? `${totalFks} વિભાગ-પાર સંબંધો`
                                  : `${totalFks} Cross-Section Relational ${totalFks === 1 ? 'Link' : 'Links'}`}
                              </span>
                            </div>

                            {totalFks === 0 ? (
                              <div className="text-[11px] text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-200 text-center">
                                {secLanguage === 'hi'
                                  ? 'कोई बाह्य अनुभाग संबंध नहीं; यह अनुभाग वृक्ष स्वतंत्र रूप से कार्य करता है।'
                                  : secLanguage === 'gu'
                                  ? 'કોઈ બાહ્ય વિભાગ સંબંધ નથી; આ વિભાગ વૃક્ષ સ્વતંત્ર રીતે કાર્ય કરે છે.'
                                  : 'No external cross-section edges; this section tree operates autonomously.'}
                              </div>
                            ) : (
                              <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white shadow-2xs">
                                <table className="w-full text-left text-[11px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-50 text-[9.5px] font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                                      <th className="py-1.5 px-3">
                                        {secLanguage === 'hi' ? 'दिशानिर्देश' : secLanguage === 'gu' ? 'દિશાનિર્દેશ' : 'Port Direction'}
                                      </th>
                                      <th className="py-1.5 px-3">
                                        {secLanguage === 'hi' ? 'स्थानीय पद / निकाय' : secLanguage === 'gu' ? 'સ્થાનિક હોદ્દો / એકમ' : 'Local Node'}
                                      </th>
                                      <th className="py-1.5 px-3">
                                        {secLanguage === 'hi' ? 'संबंध क्रियापद' : secLanguage === 'gu' ? 'સંબંધ ક્રિયાપદ' : 'Relationship Verb'}
                                      </th>
                                      <th className="py-1.5 px-3">
                                        {secLanguage === 'hi' ? 'बाह्य लक्ष्य / स्रोत' : secLanguage === 'gu' ? 'બાહ્ય લક્ષ્ય / સ્ત્રોત' : 'External Target / Source'}
                                      </th>
                                      <th className="py-1.5 px-3">
                                        {secLanguage === 'hi' ? 'बाह्य अनुभाग / बोर्ड' : secLanguage === 'gu' ? 'બાહ્ય વિભાગ / બોર્ડ' : 'External Section / Board'}
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-100">
                                    {layout.foreignKeys.map((fk) => (
                                      <tr key={fk.id} className="hover:bg-slate-50/50">
                                        <td className="py-1.5 px-3 whitespace-nowrap">
                                          <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded font-bold text-[9px] ${
                                            fk.direction === 'out'
                                              ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                              : 'bg-sky-50 text-sky-800 border border-sky-200'
                                          }`}>
                                            {fk.direction === 'out' ? <ArrowUpRight className="w-3 h-3 text-amber-600" /> : <ArrowDownLeft className="w-3 h-3 text-sky-600" />}
                                            <span>
                                              {fk.direction === 'out'
                                                ? (secLanguage === 'hi' ? 'बहिर्गमन ➔' : secLanguage === 'gu' ? 'બહાર ➔' : 'Outgoing ➔')
                                                : (secLanguage === 'hi' ? '⬅ आगमन' : secLanguage === 'gu' ? '⬅ આવક' : '⬅ Incoming')}
                                            </span>
                                          </span>
                                        </td>
                                        <td className="py-1.5 px-3 font-semibold text-slate-900">
                                          {(() => {
                                            const locNode = nodeMap.get(fk.localNodeId);
                                            return locNode ? getTranslatedNodeTitle(locNode, secLanguage, translationScope) : getTranslatedGovernanceValue(fk.localNodeTitle, secLanguage);
                                          })()}
                                        </td>
                                        <td className="py-1.5 px-3 font-mono text-[9.5px] text-emerald-800">
                                          {getTranslatedGovernanceValue(fk.label, secLanguage)}
                                        </td>
                                        <td className="py-1.5 px-3 text-slate-800">
                                          <div className="font-semibold">
                                            {(() => {
                                              const extNode = nodeMap.get(fk.externalNodeId);
                                              return extNode ? getTranslatedNodeTitle(extNode, secLanguage, translationScope) : getTranslatedGovernanceValue(fk.externalNodeTitle, secLanguage);
                                            })()}
                                          </div>
                                          <div className="font-mono text-[8.5px] text-slate-400">ID: {fk.externalNodeId}</div>
                                        </td>
                                        <td className="py-1.5 px-3 text-slate-600 font-mono text-[9.5px] whitespace-nowrap">
                                          {fk.externalSectionId
                                            ? (secLanguage === 'hi'
                                                ? `अनुभाग ${fk.externalSectionId.replace('SEC-', '').replace('DEM-', '')}`
                                                : secLanguage === 'gu'
                                                ? `વિભાગ ${fk.externalSectionId.replace('SEC-', '').replace('DEM-', '')}`
                                                : `Section ${fk.externalSectionId.replace('SEC-', '')}`)
                                            : (secLanguage === 'hi' ? 'बाह्य बोर्ड' : secLanguage === 'gu' ? 'બાહ્ય બોર્ડ' : 'External Board')}
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
                          <span>{currentProjectName || 'Educational Ecosystem Whiteboard'} • Section {sec.number} Tree Diagram</span>
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
