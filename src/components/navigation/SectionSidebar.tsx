import { useState } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { t, getTranslatedSectionTitle, getTranslatedSectionSubtitle } from '../../services/translationService';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Filter,
  Layers,
  Plus,
  Settings,
  Landmark,
  Shield,
  MapPin,
  Building,
  Users
} from 'lucide-react';
import { GovernmentLevel, FunctionalCategory } from '../../types';
import { JURISDICTIONAL_TIERS } from '../../data/whiteboard4-democracy';

const tierIcons: Record<string, React.ReactNode> = {
  'TIER-UNION': <Landmark className="w-3.5 h-3.5 text-emerald-400" />,
  'TIER-STATE': <Shield className="w-3.5 h-3.5 text-indigo-400" />,
  'TIER-DISTRICT': <MapPin className="w-3.5 h-3.5 text-amber-400" />,
  'TIER-LOCAL': <Building className="w-3.5 h-3.5 text-cyan-400" />,
  'TIER-SOVEREIGN': <Users className="w-3.5 h-3.5 text-rose-400" />
};

const tierStyles: Record<string, { bg: string; border: string; text: string; badgeBg: string }> = {
  'TIER-UNION': { bg: 'bg-emerald-950', border: 'border-emerald-700/60', text: 'text-emerald-100', badgeBg: 'bg-emerald-500/20 text-emerald-300' },
  'TIER-STATE': { bg: 'bg-indigo-950', border: 'border-indigo-700/60', text: 'text-indigo-100', badgeBg: 'bg-indigo-500/20 text-indigo-300' },
  'TIER-DISTRICT': { bg: 'bg-amber-950', border: 'border-amber-700/60', text: 'text-amber-100', badgeBg: 'bg-amber-500/20 text-amber-300' },
  'TIER-LOCAL': { bg: 'bg-teal-950', border: 'border-teal-700/60', text: 'text-teal-100', badgeBg: 'bg-teal-500/20 text-teal-300' },
  'TIER-SOVEREIGN': { bg: 'bg-rose-950', border: 'border-rose-700/60', text: 'text-rose-100', badgeBg: 'bg-rose-500/20 text-rose-300' }
};

export function SectionSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'sections' | 'filters'>('sections');
  const [collapsedTiers, setCollapsedTiers] = useState<Record<string, boolean>>({});

  const toggleTier = (tierId: string) => {
    setCollapsedTiers((prev) => ({ ...prev, [tierId]: !prev[tierId] }));
  };

  const {
    currentProjectId,
    isSidebarOpen,
    toggleSidebar,
    sections,
    focusSectionId,
    setFocusSection,
    filters,
    setFilters,
    resetFilters,
    selectNode,
    nodes,
    openModal,
    currentLanguage,
    translationScope
  } = useWhiteboardStore();

  const levels: { label: string; value: GovernmentLevel | 'all' }[] = [
    { label: 'All Levels', value: 'all' },
    { label: 'Constitutional', value: 'constitutional' },
    { label: 'Union Government', value: 'union' },
    { label: 'State & UT', value: 'state' },
    { label: 'District & Local', value: 'district' },
    { label: 'Institutional', value: 'institutional' }
  ];

  const categories: { label: string; value: FunctionalCategory | 'all' }[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Legislation & Acts', value: 'legislation' },
    { label: 'Executive Administration', value: 'executive-administration' },
    { label: 'School Education', value: 'school-education' },
    { label: 'Higher Education', value: 'higher-education' },
    { label: 'Professional Regulators', value: 'professional-regulation' },
    { label: 'Examination & Testing', value: 'examination' },
    { label: 'Accreditation & Ranking', value: 'accreditation-ranking' },
    { label: 'Funding & Finance', value: 'funding-finance' },
    { label: 'Oversight & Remedies', value: 'oversight-remedies' },
    { label: 'Rulemaking Reform', value: 'procedural-reform' }
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => toggleSidebar(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 md:hidden"
        />
      )}

      <aside
        className={`fixed md:relative inset-y-0 left-0 z-40 md:z-10 h-full bg-white border-r border-slate-200 flex flex-col transition-all duration-200 shadow-xl md:shadow-none ${
          isSidebarOpen
            ? 'w-[85vw] max-w-xs translate-x-0'
            : '-translate-x-full md:translate-x-0'
        } ${isCollapsed ? 'md:w-12' : 'md:w-72'}`}
      >
        {/* Top Header of Sidebar */}
        <div className="p-3 border-b border-slate-200 flex items-center justify-between">
          {(!isCollapsed || isSidebarOpen) && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveTab('sections')}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'sections'
                    ? 'bg-emerald-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{sections.length} {translationScope !== 'cards' ? t('sections', currentLanguage) : 'Secs'}</span>
              </button>
              <button
                onClick={() => setActiveTab('filters')}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'filters'
                    ? 'bg-emerald-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>{translationScope !== 'cards' ? t('filters', currentLanguage) : 'Filters'}</span>
              </button>
            </div>
          )}
          <div className="flex items-center gap-1 ml-auto">
            {/* Mobile close button */}
            <button
              onClick={() => toggleSidebar(false)}
              className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 md:hidden"
              title="Close sidebar"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {/* Desktop collapse toggle */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:block p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>
        </div>

      {/* Action Buttons: Add Node & Manage Sections */}
      {!isCollapsed && activeTab === 'sections' && (
        <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5">
          <button
            onClick={() => openModal('add-node')}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-xs shadow-2xs transition-colors cursor-pointer"
            title="Create a new authority / node in the diagram"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{translationScope !== 'cards' ? t('addAuthority', currentLanguage) : 'Add Authority'}</span>
          </button>
          <button
            onClick={() => openModal('add-section')}
            className="flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-md border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs shadow-2xs transition-colors cursor-pointer"
            title="Manage, create or delete sections"
          >
            <Settings className="w-3.5 h-3.5 text-slate-500" />
            <span>Sections</span>
          </button>
        </div>
      )}

      {/* Main Sidebar Content */}
      <div className="flex-1 overflow-y-auto">
        {isCollapsed ? (
          <div className="py-3 flex flex-col items-center gap-3">
            <button
              onClick={() => {
                setIsCollapsed(false);
                setActiveTab('sections');
              }}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              title={`${sections.length} Sections`}
            >
              <Layers className="w-5 h-5 text-emerald-800" />
            </button>
            <button
              onClick={() => {
                setIsCollapsed(false);
                setActiveTab('filters');
              }}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              title="Filters"
            >
              <Filter className="w-5 h-5 text-emerald-800" />
            </button>
          </div>
        ) : activeTab === 'sections' ? (
          <div className="p-2 space-y-1">
            {/* Master Overview Button */}
            <button
              onClick={() => setFocusSection(null)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between ${
                focusSectionId === null
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>
                {translationScope !== 'cards'
                  ? (currentLanguage === 'hi' ? 'संपूर्ण व्हाइटबोर्ड (सभी अनुभाग)' : currentLanguage === 'gu' ? 'સંપૂર્ણ વ્હાઇટબોર્ડ (તમામ વિભાગો)' : 'Full Master Whiteboard (All Sections)')
                  : 'Full Master Whiteboard (All Sections)'}
              </span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${focusSectionId === null ? 'bg-white/20' : 'bg-slate-100'}`}>
                {nodes.length}
              </span>
            </button>

            <div className="pt-2 pb-1 px-3 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {translationScope !== 'cards'
                  ? (currentLanguage === 'hi' ? `आरेख अनुभाग (${sections.length})` : currentLanguage === 'gu' ? `વિભાગો (${sections.length})` : `Diagram Sections (${sections.length})`)
                  : `Diagram Sections (${sections.length})`}
              </span>
              <button
                onClick={() => openModal('add-section')}
                className="text-[10px] text-emerald-700 hover:underline font-semibold"
              >
                + Add Section
              </button>
            </div>

            {(() => {
              const renderSectionItem = (sec: any) => {
                const isSelected = focusSectionId === sec.id;
                const sectionNodeCount = nodes.filter((n) => n.sectionId === sec.id).length;
                const secTitle = getTranslatedSectionTitle(sec.id, currentLanguage, translationScope);
                const secSubtitle = getTranslatedSectionSubtitle(sec.id, currentLanguage, translationScope);

                return (
                  <div
                    key={sec.id}
                    className={`w-full text-left rounded-lg transition-all ${
                      isSelected
                        ? 'bg-emerald-50 border border-emerald-300 shadow-2xs'
                        : 'hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <button
                      onClick={() => {
                        setFocusSection(sec.id);
                        selectNode(sec.id);
                      }}
                      className="w-full text-left px-2.5 py-1.5 flex items-start justify-between gap-2 cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold font-mono text-emerald-800">
                            {sec.number}
                          </span>
                          <h4 className="text-xs font-medium text-slate-800 truncate">
                            {secTitle}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {secSubtitle}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 flex-shrink-0">
                        {sectionNodeCount}
                      </span>
                    </button>
                  </div>
                );
              };

              if (currentProjectId === 'proj-whiteboard-4') {
                return (
                  <div className="space-y-2 mt-1">
                    {JURISDICTIONAL_TIERS.map((tier, tierIdx) => {
                      const tierSections = sections.filter((s) => tier.sectionIds.includes(s.id));
                      if (tierSections.length === 0) return null;
                      const isCollapsed = collapsedTiers[tier.id];
                      const style = tierStyles[tier.id] || tierStyles['TIER-UNION'];
                      const icon = tierIcons[tier.id];

                      const getTierName = () => {
                        switch (tier.id) {
                          case 'TIER-UNION': return t('tier.union', currentLanguage, tier.name);
                          case 'TIER-STATE': return t('tier.state', currentLanguage, tier.name);
                          case 'TIER-DISTRICT': return t('tier.district', currentLanguage, tier.name);
                          case 'TIER-LOCAL': return t('tier.local', currentLanguage, tier.name);
                          case 'TIER-SOVEREIGN': return t('tier.sovereign', currentLanguage, tier.name);
                          default: return tier.name;
                        }
                      };

                      const isTierActive = focusSectionId === tier.id;

                      return (
                        <div
                          key={tier.id}
                          className={`rounded-lg overflow-hidden border transition-all ${
                            isTierActive
                              ? 'border-amber-400 ring-2 ring-amber-400/80 shadow-md'
                              : 'border-slate-200/90 shadow-2xs'
                          }`}
                        >
                          {/* Tier Category Header - Clicking focuses all sections in this Tier on the canvas */}
                          <div
                            onClick={() => {
                              // Focus this Tier's sections on canvas (or toggle back to all if already active)
                              setFocusSection(isTierActive ? null : tier.id);
                              // If collapsed, expand it so the user sees the constituent sections
                              if (isCollapsed) {
                                toggleTier(tier.id);
                              }
                            }}
                            className={`w-full text-left px-2.5 py-2 flex items-center justify-between gap-1.5 transition-colors cursor-pointer select-none ${style.bg} ${style.text}`}
                            title={`Click to show all ${tierSections.length} sections in Tier ${tierIdx + 1} on the whiteboard`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {icon}
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[9px] font-bold tracking-wider uppercase text-amber-300 block">
                                    Tier {tierIdx + 1} • {tier.badge}
                                  </span>
                                  {isTierActive && (
                                    <span className="text-[8px] font-extrabold uppercase bg-amber-400 text-slate-950 px-1 py-0.2 rounded font-mono">
                                      Active
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-[11px] font-bold truncate leading-tight">
                                  {getTierName()}
                                </h4>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <span className={`text-[9.5px] font-mono px-1.5 py-0.5 rounded-full ${style.badgeBg}`}>
                                {tierSections.length} Secs
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleTier(tier.id);
                                }}
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                                title={isCollapsed ? 'Expand section list' : 'Collapse section list'}
                              >
                                {isCollapsed ? (
                                  <ChevronRight className="w-3.5 h-3.5 opacity-80" />
                                ) : (
                                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Tier Child Sections */}
                          {!isCollapsed && (
                            <div className="p-1 space-y-0.5 bg-slate-50/50">
                              {tierSections.map((sec) => renderSectionItem(sec))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              }

              return sections.map((sec) => renderSectionItem(sec));
            })()}
          </div>
        ) : (
          /* Filters Tab */
          <div className="p-3 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Active Filters
              </h4>
              <button
                onClick={resetFilters}
                className="text-[11px] text-emerald-700 hover:underline font-medium"
              >
                Reset All
              </button>
            </div>

            {/* Level Filter */}
            <div>
              <label className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                Government Level
              </label>
              <div className="space-y-1">
                {levels.map((lvl) => (
                  <button
                    key={lvl.value}
                    onClick={() => setFilters({ level: lvl.value })}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                      filters.level === lvl.value
                        ? 'bg-emerald-900 text-white font-medium'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{lvl.label}</span>
                    {filters.level === lvl.value && <span>✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Functional Category Filter */}
            <div>
              <label className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                Functional Category
              </label>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setFilters({ category: cat.value })}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                      filters.category === cat.value
                        ? 'bg-emerald-900 text-white font-medium'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate">{cat.label}</span>
                    {filters.category === cat.value && <span>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
    </>
  );
}
