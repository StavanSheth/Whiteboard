import { useState, useRef, useEffect } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { useReactFlow } from '@xyflow/react';
import { NumberStepperInput } from '../common/NumberStepperInput';
import { t, initGoogleTranslate } from '../../services/translationService';
import {
  Landmark,
  Search,
  Table,
  CheckCircle2,
  Database,
  Download,
  RotateCcw,
  ArrowDownUp,
  ArrowLeftRight,
  Printer,
  Maximize2,
  Minimize2,
  Layers,
  Route,
  Type,
  Edit3,
  Save,
  ExternalLink,
  Sliders,
  FolderKanban,
  ChevronDown,
  Plus,
  GitBranch,
  Menu,
  Hand,
  BoxSelect,
  Move,
  Link,
  ZoomIn,
  Languages,
  Check
} from 'lucide-react';

export function TopToolbar() {
  const {
    projects,
    currentProjectName,
    nodes,
    relationships,
    searchQuery,
    setSearchQuery,
    canvasInteractionMode,
    setCanvasInteractionMode,
    layoutDirection,
    setLayoutDirection,
    nodeViewMode,
    setNodeViewMode,
    alternateDepth,
    setAlternateDepth,
    alternateSpacing,
    setAlternateSpacing,
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
    arrowStyle,
    setArrowStyle,
    edgeLabelMode,
    setEdgeLabelMode,
    fontSizePx,
    setFontSizePx,
    lineHeightMult,
    setLineHeightMult,
    paraSpacingPx,
    setParaSpacingPx,
    resetSpacingAndSizing,
    editingNodeId,
    editDraft,
    isDirty,
    saveEditingNode,
    cancelEditingNode,
    showConfirmModal,
    setShowConfirmModal,
    confirmSaveAction,
    confirmDiscardAction,
    selectNode,
    toggleDetailPanel,
    toggleSidebar,
    openModal,
    resetAll,
    lastSavedTime,
    currentLanguage,
    setLanguage,
    translationScope,
    setTranslationScope,
    useGoogleTranslateFallback,
    setUseGoogleTranslateFallback
  } = useWhiteboardStore();

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  const { fitView } = useReactFlow();

  const handlePrintNormalCanvas = () => {
    document.body.classList.add('printing-normal-canvas');
    fitView({ padding: 0.05, duration: 250 });
    setTimeout(() => {
      window.print();
      window.addEventListener(
        'afterprint',
        () => {
          document.body.classList.remove('printing-normal-canvas');
        },
        { once: true }
      );
    }, 350);
  };

  return (
    <div className="flex flex-col z-20 flex-shrink-0 shadow-2xs">
      {/* Primary Top Header */}
      <header className="min-h-14 bg-white border-b border-slate-200 px-2 sm:px-4 py-2 sm:py-0 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: Mobile Menu + Branding & Core Stats */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={() => toggleSidebar()}
            className="md:hidden p-1.5 rounded-lg bg-emerald-900 text-amber-300 hover:bg-emerald-800 transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer shadow-xs"
            title="Open Sections and Outline Sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>

          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-xs border border-emerald-800">
            <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h1 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-tight truncate max-w-[120px] sm:max-w-none">
                {translationScope !== 'cards' ? t('educationGovernance', currentLanguage) : 'Education Governance'}
              </h1>
              <button
                onClick={() => openModal('projects')}
                className="flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 hover:bg-emerald-100/90 text-emerald-950 border border-emerald-300 text-[10px] font-bold transition-all cursor-pointer shadow-2xs group flex-shrink-0"
                title="Click to switch or manage diagrams / projects"
              >
                <FolderKanban className="w-3 h-3 text-emerald-700" />
                <span className="max-w-[100px] sm:max-w-[200px] truncate">{currentProjectName}</span>
                <ChevronDown className="w-2.5 h-2.5 text-emerald-600 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 hidden xl:block">
              Authorities, Legal Powers, Standards, Examinations & Oversight
            </p>
          </div>
        </div>

        {/* Center: Global Search Bar */}
        <div className="w-full sm:w-auto flex-1 max-w-full sm:max-w-xs md:max-w-md relative order-3 sm:order-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={translationScope !== 'cards' ? t('searchPlaceholder', currentLanguage) : 'Search sections, authorities, acts, exams...'}
              className="w-full pl-8 sm:pl-9 pr-3 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all placeholder:text-slate-400 text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right: Key Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-visible max-w-full pb-0.5 sm:pb-0 order-2 sm:order-3">
          {/* 5-Tool Cursor Task Mode Selector */}
          <div className="flex items-center rounded-lg border border-slate-300 bg-slate-100 p-0.5 shadow-xs">
            <button
              onClick={() => setCanvasInteractionMode('pan')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                canvasInteractionMode === 'pan'
                  ? 'bg-emerald-800 text-white shadow-xs font-bold ring-1 ring-emerald-600'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
              title="Pan Canvas (H) - Drag canvas background to glide smoothly"
            >
              <Hand className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">
                {translationScope !== 'cards' ? t('pan', currentLanguage) : 'Pan'}
              </span>
            </button>
            <button
              onClick={() => setCanvasInteractionMode('select')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                canvasInteractionMode === 'select'
                  ? 'bg-emerald-800 text-amber-300 shadow-xs font-bold ring-1 ring-emerald-600'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
              title="Box Select (V) - Click and drag anywhere to marquee-select multiple cards"
            >
              <BoxSelect className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">
                {translationScope !== 'cards' ? t('select', currentLanguage) : 'Select'}
              </span>
            </button>
            <button
              onClick={() => setCanvasInteractionMode('move')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                canvasInteractionMode === 'move'
                  ? 'bg-emerald-800 text-sky-300 shadow-xs font-bold ring-1 ring-emerald-600'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
              title="Move / Drag Cards (M) - Reposition individual cards or selected clusters"
            >
              <Move className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">
                {translationScope !== 'cards' ? t('move', currentLanguage) : 'Move'}
              </span>
            </button>
            <button
              onClick={() => setCanvasInteractionMode('connect')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                canvasInteractionMode === 'connect'
                  ? 'bg-emerald-800 text-purple-300 shadow-xs font-bold ring-1 ring-emerald-600'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
              title="Connect Link (C) - Click source card then target card to create relationship"
            >
              <Link className="w-3.5 h-3.5 text-purple-300" />
              <span className="hidden sm:inline">
                {translationScope !== 'cards' ? t('connect', currentLanguage) : 'Connect'}
              </span>
            </button>
            <button
              onClick={() => setCanvasInteractionMode('zoom')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                canvasInteractionMode === 'zoom'
                  ? 'bg-emerald-800 text-amber-300 shadow-xs font-bold ring-1 ring-emerald-600'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
              title="Zoom Region (Z) - Click to zoom in (+25%), Shift+Click to zoom out"
            >
              <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">
                {translationScope !== 'cards' ? t('zoom', currentLanguage) : 'Zoom'}
              </span>
            </button>
          </div>

          {/* Node View Mode Toggle (Compact vs Full Dossier) */}
          <button
            onClick={() => setNodeViewMode(nodeViewMode === 'full' ? 'compact' : 'full')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
              nodeViewMode === 'full'
                ? 'border-emerald-700 bg-emerald-50 text-emerald-900 shadow-2xs'
                : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
            }`}
            title={
              nodeViewMode === 'full'
                ? 'Switch to Compact Cards (Summary only)'
                : 'Switch to Full Dossier Mode (Renders powers, limitations, mandate inside each node)'
            }
          >
            {nodeViewMode === 'full' ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden md:inline">
                  {translationScope !== 'cards' ? t('fullDossier', currentLanguage) : 'Full Dossier'}
                </span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline">
                  {translationScope !== 'cards' ? t('compactCards', currentLanguage) : 'Compact Cards'}
                </span>
              </>
            )}
          </button>

          {/* Layout Direction Toggle */}
          <button
            onClick={() => setLayoutDirection(layoutDirection === 'DOWN' ? 'RIGHT' : 'DOWN')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
            title={`Switch layout direction to ${layoutDirection === 'DOWN' ? 'Left-to-Right' : 'Top-to-Bottom'}`}
          >
            {layoutDirection === 'DOWN' ? (
              <>
                <ArrowDownUp className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline">
                  {translationScope !== 'cards' ? t('topToBottom', currentLanguage) : 'Top-to-Bottom'}
                </span>
              </>
            ) : (
              <>
                <ArrowLeftRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline">
                  {translationScope !== 'cards' ? t('leftToRight', currentLanguage) : 'Left-to-Right'}
                </span>
              </>
            )}
          </button>

          {/* Alternate Depth (Zig-Zag Baselines) Toggle */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg border transition-all ${
            alternateDepth
              ? 'border-amber-400 bg-amber-50 text-amber-950 shadow-2xs'
              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
          }`}>
            <button
              onClick={() => setAlternateDepth(!alternateDepth)}
              className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Toggle Alternate Depth (Zig-Zag Staggered Baselines) to prevent card crowding and reduce width"
            >
              <Layers className={`w-3.5 h-3.5 ${alternateDepth ? 'text-amber-700' : 'text-slate-500'}`} />
              <span className="hidden lg:inline">
                {translationScope !== 'cards' ? t('alternateDepth', currentLanguage) : 'Alternate Depth:'}
              </span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                alternateDepth ? 'bg-emerald-800 text-amber-300' : 'bg-slate-100 text-slate-600'
              }`}>
                {alternateDepth ? 'ON' : 'OFF'}
              </span>
            </button>
            {alternateDepth && (
              <div className="flex items-center gap-0.5 pl-1.5 border-l border-amber-300">
                <NumberStepperInput
                  label="Stagger:"
                  value={alternateSpacing}
                  min={0}
                  step={10}
                  unit="px"
                  onChange={setAlternateSpacing}
                  title="Alternate depth vertical stagger offset"
                />
              </div>
            )}
          </div>

          {/* Quick Action: Add Node / Authority */}
          <button
            onClick={() => openModal('add-node')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-700 bg-emerald-900 hover:bg-emerald-800 text-amber-300 text-xs font-bold transition-all cursor-pointer shadow-2xs"
            title="Add a new authority node to the current diagram"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {translationScope !== 'cards' ? t('node', currentLanguage) : 'Node'}
            </span>
          </button>

          {/* Quick Action: Add Edge / Arrow */}
          <button
            onClick={() => openModal('add-relationship')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
            title="Add a new connector arrow / relationship between nodes"
          >
            <GitBranch className="w-3.5 h-3.5 text-emerald-800" />
            <span className="hidden sm:inline">
              {translationScope !== 'cards' ? t('arrow', currentLanguage) : 'Arrow'}
            </span>
          </button>

          {/* Diagrams & Projects Manager Modal */}
          <button
            onClick={() => openModal('projects')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100/90 text-emerald-950 text-xs font-bold transition-all cursor-pointer shadow-2xs"
            title="Manage diagrams & projects (Create, switch, duplicate, delete)"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-800" />
            <span className="hidden sm:inline">
              {translationScope !== 'cards' ? t('projects', currentLanguage) : 'Projects'}
            </span>
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-800 text-amber-300 text-[10px] font-mono">
              {projects.length}
            </span>
          </button>

          {/* Multi-Language Selector Dropdown (English, हिन्दी, ગુજરાતી) */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                currentLanguage !== 'en'
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-950 ring-1 ring-indigo-400'
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
              }`}
              title="Change Language & Translation Scope (English, हिन्दी, ગુજરાતી)"
            >
              <Languages className={`w-3.5 h-3.5 ${currentLanguage !== 'en' ? 'text-indigo-700' : 'text-slate-600'}`} />
              <span className="hidden sm:inline">
                {currentLanguage === 'hi' ? 'हिन्दी' : currentLanguage === 'gu' ? 'ગુજરાતી' : t('language', currentLanguage)}
              </span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                currentLanguage !== 'en' ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {currentLanguage.toUpperCase()}
              </span>
              <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 z-50 text-slate-800 space-y-3 animate-in fade-in zoom-in-95 duration-100">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Languages className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold text-slate-900">Language & Translation</span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Offline Dictionary
                  </span>
                </div>

                {/* 1. Language Options */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Choose Language
                  </label>
                  <div className="space-y-1">
                    {[
                      { code: 'en' as const, name: 'English', subtext: 'Default constitutional terminology' },
                      { code: 'hi' as const, name: 'हिन्दी (Hindi)', subtext: 'संवैधानिक, मंत्रालय और राज्य निकाय' },
                      { code: 'gu' as const, name: 'ગુજરાતી (Gujarati)', subtext: 'બંધારણીય, મંત્રાલયો અને પંચાયત' }
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          if (useGoogleTranslateFallback && lang.code !== 'en') {
                            initGoogleTranslate();
                          }
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                          currentLanguage === lang.code
                            ? 'bg-indigo-50 text-indigo-950 font-bold border border-indigo-200'
                            : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                        }`}
                      >
                        <div>
                          <div className="text-xs">{lang.name}</div>
                          <div className="text-[10px] text-slate-400 font-normal">{lang.subtext}</div>
                        </div>
                        {currentLanguage === lang.code && <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />}
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

                {/* 3. Optional Google Translate fallback for arbitrary custom cards */}
                <div className="pt-2 border-t border-slate-100">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-[11px] text-slate-700 font-medium">Google Translate Fallback</span>
                    <input
                      type="checkbox"
                      checked={useGoogleTranslateFallback}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setUseGoogleTranslateFallback(checked);
                        if (checked) {
                          initGoogleTranslate();
                        }
                      }}
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5 cursor-pointer"
                    />
                  </label>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Uses Google element to translate user-added custom cards
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Hidden Google Translate Mount Point */}
          <div id="google_translate_element" className="hidden" />

          {/* Print Normal Whiteboard Canvas (Zoomed Out) */}
          <button
            onClick={handlePrintNormalCanvas}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
            title="Print the normal interactive whiteboard canvas zoomed out directly"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden xl:inline">
              {translationScope !== 'cards' ? t('printCanvas', currentLanguage) : 'Print Canvas (Zoomed Out)'}
            </span>
          </button>

          {/* Section-Wise Printable PDF Engine (Prominent Button) */}
          <button
            onClick={() => openModal('pdf-print')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-amber-400 bg-emerald-900 hover:bg-emerald-800 text-amber-300 hover:text-amber-200 text-xs font-black shadow-md hover:shadow-lg transition-all ring-2 ring-emerald-900/30 cursor-pointer animate-pulse"
            title="Open Section Tree Diagram Print & Multi-Page PDF Engine"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>
              {translationScope !== 'cards' ? t('printPdf', currentLanguage) : 'Print / Save PDF'}
            </span>
          </button>

          {/* Decision Rights Matrix (Section 15) */}
          <button
            onClick={() => openModal('matrix')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
          >
            <Table className="w-3.5 h-3.5 text-emerald-800" />
            <span className="hidden lg:inline">
              {translationScope !== 'cards' ? t('matrix', currentLanguage) : 'Matrix'}
            </span>
          </button>

          {/* Coverage Audit (Section 19) */}
          <button
            onClick={() => openModal('audit')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden lg:inline">Audit</span>
          </button>

          {/* Source Register (Section 16) */}
          <button
            onClick={() => openModal('sources')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
          >
            <Database className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden lg:inline">Sources</span>
          </button>

          {/* Export / Import Modal */}
          <button
            onClick={() => openModal('export')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
            title="Export / Import Dataset JSON"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
          </button>

          {/* Reset View */}
          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
            title="Reset canvas, filters and search"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-600" />
          </button>

          {/* DB Synced & Saved Live Status Badge */}
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-900 text-[11px] font-bold shadow-2xs"
            title={lastSavedTime ? `Database Synced: Last edit persisted at ${lastSavedTime}` : 'Database Synced: All changes auto-saved to local persistent storage'}
          >
            <Database className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
            <span className="hidden md:inline font-mono">DB: Synced</span>
            {lastSavedTime && (
              <span className="text-[10px] text-emerald-800 font-mono font-medium hidden lg:inline">
                ({lastSavedTime})
              </span>
            )}
          </div>

          {/* Badge with Node Counts */}
          <div className="hidden xl:flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md border border-slate-200 ml-1">
            <span>{nodes.length} nodes</span>
            <span>•</span>
            <span>{relationships.length} edges</span>
          </div>
        </div>
      </header>

      {/* Secondary Bar: Normal View Sizing, Spacing & Arrow Styling Engine */}
      <div className="bg-slate-50/95 border-b border-slate-200 px-3 sm:px-4 py-1.5 flex items-center justify-between gap-2 text-xs overflow-x-auto scrollbar-thin w-full">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 pr-1 border-r border-slate-200 flex-shrink-0">
            <Sliders className="w-3.5 h-3.5 text-emerald-800" />
            <span>Canvas Sizing &amp; Spacing:</span>
          </div>

          {/* Arrow Style Selector */}
          <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs" title="Connector arrow routing style">
            <span className="text-[10px] font-semibold text-slate-500 pl-1 flex items-center gap-1">
              <Route className="w-3 h-3 text-slate-600" />
              Arrows:
            </span>
            <button
              onClick={() => setArrowStyle('curved')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                arrowStyle === 'curved' ? 'bg-emerald-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Curved
            </button>
            <button
              onClick={() => setArrowStyle('straight')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                arrowStyle === 'straight' ? 'bg-emerald-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Straight
            </button>
            <button
              onClick={() => setArrowStyle('orthogonal')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                arrowStyle === 'orthogonal' ? 'bg-emerald-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              90° Ortho
            </button>
            <button
              onClick={() => setArrowStyle('rounded-orthogonal')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                arrowStyle === 'rounded-orthogonal' ? 'bg-emerald-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Rounded
            </button>
          </div>

          {/* Edge Label Density Switcher */}
          <div className="flex items-center gap-0.5 bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs" title="Arrow Text Label Density Mode">
            <span className="text-[10px] font-semibold text-slate-500 pl-1 pr-0.5 flex items-center gap-1">
              <Type className="w-3 h-3 text-slate-600" />
              Labels:
            </span>
            <button
              onClick={() => setEdgeLabelMode('wrapped')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                edgeLabelMode === 'wrapped' ? 'bg-indigo-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Full wrapped text with collision prevention"
            >
              Wrapped
            </button>
            <button
              onClick={() => setEdgeLabelMode('badge')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                edgeLabelMode === 'badge' ? 'bg-indigo-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Compact pill badges"
            >
              Compact
            </button>
            <button
              onClick={() => setEdgeLabelMode('hover')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                edgeLabelMode === 'hover' ? 'bg-indigo-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Hover-only dot indicators (cleanest canvas view)"
            >
              On Hover
            </button>
            <button
              onClick={() => setEdgeLabelMode('off')}
              className={`px-2 py-0.5 text-[10.5px] font-semibold rounded transition-all cursor-pointer ${
                edgeLabelMode === 'off' ? 'bg-indigo-900 text-amber-300 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Hide all arrow labels"
            >
              Off
            </button>
          </div>

          {/* Sizing & Spacing Steppers (NO UPPER CEILINGS) */}
          <NumberStepperInput
            label="Card Width:"
            value={nodeBoxWidth}
            min={50}
            step={10}
            unit="px"
            onChange={setNodeBoxWidth}
            title="Width of each card box (enter any value)"
          />

          <NumberStepperInput
            label="Card Height:"
            value={cardHeightPercent}
            min={10}
            step={5}
            unit="%"
            onChange={setCardHeightPercent}
            title="Card height scaling percentage to eliminate empty space below cards"
          />

          <NumberStepperInput
            label="H-Space:"
            value={customNodeSpacing}
            min={0}
            step={10}
            unit="px"
            onChange={setCustomNodeSpacing}
            title="Horizontal spacing between cards in the tree diagram (enter any value)"
          />

          <NumberStepperInput
            label="V-Space:"
            value={customVSpacing}
            min={0}
            step={10}
            unit="px"
            onChange={setCustomVSpacing}
            title="Vertical spacing between cards in the tree diagram (enter any value)"
          />

          <NumberStepperInput
            label={layoutDirection === 'RIGHT' ? 'Arrow Len:' : 'Arrow Height:'}
            value={customArrowHeight}
            min={0}
            step={10}
            unit="px"
            onChange={setCustomArrowHeight}
            title="Connector arrow clearance / layer spacing between node ranks (enter any value)"
          />

          <NumberStepperInput
            label={layoutDirection === 'RIGHT' ? 'FK Arrow Len:' : 'FK Arrow H:'}
            value={customFkArrowHeight}
            min={0}
            step={10}
            unit="px"
            onChange={setCustomFkArrowHeight}
            title="Foreign link arrow height and clearance manager for cross-section edges (enter any value)"
          />

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
            className="p-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 shadow-2xs cursor-pointer"
            title="Reset sizing, spacing, and arrow style to defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sticky Banner: Active Inline Node Editing on Normal Canvas */}
      {editingNodeId && (
        <div className="bg-emerald-900 text-white px-4 py-2 flex items-center justify-between text-xs font-medium border-b border-emerald-700 shadow-inner">
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
              onClick={saveEditingNode}
              className="flex items-center gap-1 px-3 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-[11px] shadow-2xs transition-colors cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
            <button
              onClick={cancelEditingNode}
              className="px-2.5 py-1 rounded-md bg-emerald-950/80 hover:bg-emerald-950 text-slate-200 font-semibold text-[11px] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                selectNode(editingNodeId);
                toggleDetailPanel(true);
              }}
              className="px-2.5 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white font-semibold text-[11px] transition-colors cursor-pointer flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Open Full Drawer</span>
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
                onClick={confirmDiscardAction}
                className="px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-50 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-colors cursor-pointer"
              >
                Discard Changes
              </button>
              <button
                onClick={confirmSaveAction}
                className="px-4 py-1.5 rounded-lg bg-emerald-900 text-xs font-bold text-amber-300 hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
