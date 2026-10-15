import { useState } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Layers,
  Plus,
  Settings
} from 'lucide-react';
import { GovernmentLevel, FunctionalCategory } from '../../types';

export function SectionSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'sections' | 'filters'>('sections');

  const {
    sections,
    focusSectionId,
    setFocusSection,
    filters,
    setFilters,
    resetFilters,
    selectNode,
    nodes,
    openModal
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
    <aside
      className={`h-full bg-white border-r border-slate-200 flex flex-col z-10 transition-all duration-200 ${
        isCollapsed ? 'w-12' : 'w-72'
      }`}
    >
      {/* Top Header of Sidebar */}
      <div className="p-3 border-b border-slate-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('sections')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'sections'
                  ? 'bg-emerald-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              {sections.length} Sections
            </button>
            <button
              onClick={() => setActiveTab('filters')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'filters'
                  ? 'bg-emerald-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-auto"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
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
            <span>Add Authority</span>
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
              <span>Full Master Whiteboard (All Sections)</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${focusSectionId === null ? 'bg-white/20' : 'bg-slate-100'}`}>
                {nodes.length}
              </span>
            </button>

            <div className="pt-2 pb-1 px-3 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Diagram Sections ({sections.length})
              </span>
              <button
                onClick={() => openModal('add-section')}
                className="text-[10px] text-emerald-700 hover:underline font-semibold"
              >
                + Add Section
              </button>
            </div>

            {sections.map((sec) => {
              const isSelected = focusSectionId === sec.id;
              const sectionNodeCount = nodes.filter((n) => n.sectionId === sec.id).length;

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
                    className="w-full text-left px-3 py-2 flex items-start justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold font-mono text-emerald-800">
                          {sec.number}
                        </span>
                        <h4 className="text-xs font-medium text-slate-800 truncate">
                          {sec.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {sec.subtitle}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 flex-shrink-0">
                      {sectionNodeCount}
                    </span>
                  </button>
                </div>
              );
            })}
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
  );
}
