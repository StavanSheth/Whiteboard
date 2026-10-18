import { create } from 'zustand';
import { EducationNode, RelationshipEdgeData, SourceRecord, ProjectSummary, ProjectRecord, SectionMeta, SectionPrintSettings } from '../types';
import { ALL_NODES, ALL_RELATIONSHIPS, ALL_SOURCES, ALL_SECTION_METAS } from '../data/content-index';
import { SECTION_METAS_V2, NODES_V2, RELATIONSHIPS_V2, SOURCES_V2 } from '../data/whiteboard3-exams';
import { SECTION_METAS_V3, NODES_V3, RELATIONSHIPS_V3, SOURCES_V3 } from '../data/whiteboard2-institutions';
import { SECTION_METAS_V4, NODES_V4, RELATIONSHIPS_V4, SOURCES_V4 } from '../data/whiteboard4-democracy';
import { SECTION_METAS_V5, NODES_V5, RELATIONSHIPS_V5, SOURCES_V5 } from '../data/whiteboard5-banking-judiciary';
import { SearchFilters } from '../services/searchService';
import { ExportData } from '../services/exportService';
import {
  updateNodeApi,
  createNodeApi,
  deleteNodeApi,
  createRelationshipApi,
  updateRelationshipApi,
  deleteRelationshipApi,
  createSectionApi,
  updateSectionApi,
  deleteSectionApi,
  fetchProjects,
  fetchProjectById,
  createProjectApi,
  activateProjectApi,
  updateProjectApi,
  deleteProjectApi,
  updateProjectSettingsApi
} from '../services/apiClient';
import { db } from '../../database/db';

export type CanvasInteractionMode = 'pan' | 'select' | 'move' | 'connect' | 'zoom';

export interface WhiteboardState {
  // Multi-Project / Diagram Management State
  projects: (ProjectSummary & { isActive: boolean })[];
  currentProjectId: string;
  currentProjectName: string;
  currentProjectDescription: string;
  isProjectsLoading: boolean;

  nodes: EducationNode[];
  relationships: RelationshipEdgeData[];
  sources: SourceRecord[];
  sections: SectionMeta[];
  
  lastSavedTime: string | null;
  dbSynced: boolean;
  
  selectedNodeId: string | null;
  selectedNodeIds: string[];
  canvasInteractionMode: CanvasInteractionMode;
  connectSourceNodeId: string | null;
  searchQuery: string;
  filters: SearchFilters;
  
  layoutDirection: 'DOWN' | 'RIGHT';
  focusSectionId: string | null; // null = Full Master Canvas View
  nodeViewMode: 'full' | 'compact';
  alternateDepth: boolean;
  alternateSpacing: number;
  expandedNodeIds: Record<string, boolean>;

  // Normal Canvas Sizing, Spacing & Arrow Styling Options
  nodeBoxWidth: number;
  cardHeightPercent: number;
  customNodeSpacing: number;
  customVSpacing: number;
  customArrowHeight: number;
  customFkArrowHeight: number;
  arrowStyle: 'curved' | 'straight' | 'orthogonal' | 'rounded-orthogonal';
  fontSizePx: number;
  lineHeightMult: number;
  paraSpacingPx: number;
  edgeLabelMode: 'wrapped' | 'badge' | 'hover' | 'off';
  sectionPrintSettings: Record<string, SectionPrintSettings>;

  // Inline Editing State on Canvas
  editingNodeId: string | null;
  editDraft: Partial<EducationNode>;
  isDirty: boolean;
  showConfirmModal: boolean;
  pendingAction: (() => void) | null;
  
  isDetailPanelOpen: boolean;
  isDetailPanelExpanded: boolean;
  isSidebarOpen: boolean;
  toggleSidebar: (open?: boolean) => void;
  
  activeModal: 'matrix' | 'audit' | 'sources' | 'export' | 'pdf-print' | 'projects' | 'add-node' | 'add-relationship' | 'add-section' | null;
  relationshipDraft: { sourceNodeId?: string; targetNodeId?: string };

  // Actions
  loadProjects: () => Promise<void>;
  switchProject: (projectId: string) => Promise<void>;
  createProject: (params: {
    name: string;
    description?: string;
    template?: 'empty' | 'education-governance' | 'duplicate';
    duplicateFromId?: string;
  }) => Promise<ProjectRecord>;
  updateProjectMetadata: (projectId: string, partial: { name?: string; description?: string }) => Promise<void>;
  deleteProject: (projectId: string) => Promise<void>;

  // Node CRUD
  addNode: (node: EducationNode) => Promise<void>;
  deleteNode: (id: string) => Promise<void>;
  updateNodePosition: (id: string, position: { x: number; y: number }) => void;
  updateMultipleNodePositions: (updates: Array<{ id: string; position: { x: number; y: number } }>) => void;

  // Relationship CRUD
  addRelationship: (rel: RelationshipEdgeData) => Promise<void>;
  updateRelationship: (id: string, partial: Partial<RelationshipEdgeData>) => Promise<void>;
  deleteRelationship: (id: string) => Promise<void>;
  setRelationshipDraft: (draft: { sourceNodeId?: string; targetNodeId?: string }) => void;

  // Section CRUD
  addSection: (sec: SectionMeta) => Promise<void>;
  updateSection: (id: string, partial: Partial<SectionMeta>) => Promise<void>;
  deleteSection: (id: string) => Promise<void>;

  selectNode: (nodeId: string | null) => void;
  setSelectedNodeIds: (ids: string[]) => void;
  setCanvasInteractionMode: (mode: CanvasInteractionMode) => void;
  setConnectSourceNodeId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;
  setLayoutDirection: (dir: 'DOWN' | 'RIGHT') => void;
  setFocusSection: (sectionId: string | null) => void;
  setNodeViewMode: (mode: 'full' | 'compact') => void;
  setAlternateDepth: (enabled: boolean) => void;
  setAlternateSpacing: (spacing: number) => void;
  toggleNodeExpanded: (nodeId: string) => void;

  setNodeBoxWidth: (val: number) => void;
  setCardHeightPercent: (val: number) => void;
  setCustomNodeSpacing: (val: number) => void;
  setCustomVSpacing: (val: number) => void;
  setCustomArrowHeight: (val: number) => void;
  setCustomFkArrowHeight: (val: number) => void;
  setArrowStyle: (style: 'curved' | 'straight' | 'orthogonal' | 'rounded-orthogonal') => void;
  setFontSizePx: (val: number) => void;
  setLineHeightMult: (val: number) => void;
  setParaSpacingPx: (val: number) => void;
  setEdgeLabelMode: (mode: 'wrapped' | 'badge' | 'hover' | 'off') => void;
  resetSpacingAndSizing: () => void;
  setSectionPrintSettings: (sectionId: string, settings: Partial<SectionPrintSettings>) => void;
  setSectionNodePosition: (sectionId: string, nodeId: string, pos: { x: number; y: number }) => void;
  resetSectionPrintSettings: (sectionId: string) => void;
  applySectionSettingsToAll: (sourceSectionId: string) => void;

  startEditingNode: (node: EducationNode) => void;
  setEditDraft: (partial: Partial<EducationNode>) => void;
  setIsDirty: (dirty: boolean) => void;
  saveEditingNode: () => void;
  cancelEditingNode: () => void;
  confirmSaveAction: () => void;
  confirmDiscardAction: () => void;
  setShowConfirmModal: (show: boolean) => void;
  setPendingAction: (action: (() => void) | null) => void;

  openModal: (modal: 'matrix' | 'audit' | 'sources' | 'export' | 'pdf-print' | 'projects' | 'add-node' | 'add-relationship' | 'add-section') => void;
  closeModal: () => void;
  toggleDetailPanel: (open?: boolean) => void;
  toggleDetailPanelExpanded: () => void;
  updateNode: (nodeId: string, partial: Partial<EducationNode>) => void;
  importData: (imported: ExportData) => void;
  resetAll: () => void;
}

const initialFilters: SearchFilters = {
  level: 'all',
  category: 'all',
  verificationStatus: 'all',
  sectionId: 'all'
};

const DEFAULT_PROJECT_ID = 'proj-whiteboard-2';
const DEFAULT_PROJECT_NAME = 'Indian Educational Institutions & Course Pathways (Whiteboard 2 of 5)';
const DEFAULT_PROJECT_DESC = 'Comprehensive lifecycle: Pre-Primary to 10th Boards (CBSE, ICSE, SSC, NCERT, NIOS) -> 11th/12th Streams (PCM, PCB, Commerce, Arts) -> Course Pathways (Engineering, Medicine, Agriculture, Veterinary, Law, Commerce, Arts) -> National Competitive Gateways (UPSC CSE, ESE, IFoS, CMS, CAPF, Banking, Government)';

const initialProject = db.getTargetProject();

export const useWhiteboardStore = create<WhiteboardState>((set, get) => ({
  // Multi-Project / Diagram Management State
  projects: db.getAllProjects(),
  currentProjectId: initialProject.id,
  currentProjectName: initialProject.name,
  currentProjectDescription: initialProject.description || '',
  isProjectsLoading: false,

  nodes: initialProject.nodes,
  relationships: initialProject.relationships,
  sources: initialProject.sources,
  sections: initialProject.sections && initialProject.sections.length > 0 ? initialProject.sections : SECTION_METAS_V3,

  lastSavedTime: null,
  dbSynced: true,

  selectedNodeId: null,
  selectedNodeIds: [],
  canvasInteractionMode: 'pan',
  connectSourceNodeId: null,
  searchQuery: '',
  filters: initialFilters,

  layoutDirection: 'DOWN',
  focusSectionId: null,
  nodeViewMode: 'full',
  alternateDepth: false,
  alternateSpacing: 50,
  expandedNodeIds: {},

  // Normal Canvas Sizing, Spacing & Arrow Styling Defaults (Generous, non-overlapping spacing)
  nodeBoxWidth: 340,
  cardHeightPercent: 100,
  customNodeSpacing: 90,
  customVSpacing: 90,
  customArrowHeight: 180,
  customFkArrowHeight: initialProject.settings?.customFkArrowHeight ?? 70,
  arrowStyle: 'curved',
  fontSizePx: 11,
  lineHeightMult: 1.35,
  paraSpacingPx: 6,
  edgeLabelMode: 'wrapped',
  sectionPrintSettings: initialProject.settings?.sectionPrintSettings || {},

  // Inline Editing
  editingNodeId: null,
  editDraft: {},
  isDirty: false,
  showConfirmModal: false,
  pendingAction: null,

  isDetailPanelOpen: false,
  isDetailPanelExpanded: false,
  isSidebarOpen: false,

  activeModal: null,
  relationshipDraft: {},

  // --- Project Management Actions ---
  loadProjects: async () => {
    set({ isProjectsLoading: true });
    try {
      const list = await fetchProjects();
      const current = list.find((p) => p.isActive) || list[0];
      set({
        projects: list,
        currentProjectId: current.id,
        currentProjectName: current.name,
        currentProjectDescription: current.description || '',
        isProjectsLoading: false
      });
    } catch {
      set({ isProjectsLoading: false });
    }
  },

  switchProject: async (projectId: string) => {
    set({ isProjectsLoading: true });
    try {
      await activateProjectApi(projectId);
      const proj = await fetchProjectById(projectId);
      if (proj) {
        set((state) => ({
          currentProjectId: proj.id,
          currentProjectName: proj.name,
          currentProjectDescription: proj.description || '',
          nodes: proj.nodes,
          relationships: proj.relationships,
          sources: proj.sources,
          sections: proj.sections && proj.sections.length > 0 ? proj.sections : ALL_SECTION_METAS,
          selectedNodeId: null,
          editingNodeId: null,
          editDraft: {},
          isDirty: false,
          customFkArrowHeight: proj.settings?.customFkArrowHeight ?? 70,
          sectionPrintSettings: proj.settings?.sectionPrintSettings || {},
          searchQuery: '',
          filters: initialFilters,
          focusSectionId: null,
          activeModal: null,
          isProjectsLoading: false,
          projects: state.projects.map((p) => ({
            ...p,
            isActive: p.id === proj.id
          }))
        }));
      }
    } catch (err) {
      console.warn('API switch failed, applying local fallback dataset:', err);
      if (projectId === 'proj-whiteboard-3') {
        set((state) => ({
          currentProjectId: 'proj-whiteboard-3',
          currentProjectName: 'Indian Examinations, Timelines & Career Pathways (Whiteboard 3 of 3)',
          currentProjectDescription: '22 major sections: school boards, engineering, medicine, civil services, defence, management, law, and career pathways from eligibility to appointment',
          nodes: NODES_V2,
          relationships: RELATIONSHIPS_V2,
          sources: SOURCES_V2,
          sections: SECTION_METAS_V2,
          selectedNodeId: null,
          editingNodeId: null,
          editDraft: {},
          isDirty: false,
          searchQuery: '',
          filters: initialFilters,
          focusSectionId: null,
          activeModal: null,
          isProjectsLoading: false,
          projects: state.projects.map((p) => ({
            ...p,
            isActive: p.id === 'proj-whiteboard-3'
          }))
        }));
      } else if (projectId === 'proj-whiteboard-2') {
        set((state) => ({
          currentProjectId: 'proj-whiteboard-2',
          currentProjectName: 'Indian Educational Institutions & Course Pathways (Whiteboard 2 of 5)',
          currentProjectDescription: 'Comprehensive lifecycle: Pre-Primary to 10th Boards (CBSE, ICSE, SSC, NCERT, NIOS) -> 11th/12th Streams (PCM, PCB, Commerce, Arts) -> Testing Bodies & Exam Timelines (NTA, IIT JAB, JoSAA, MCC, CLAT) -> Course Pathways (IIT B.Tech, AIIMS MBBS, NLU Law, ICAI CA, IIM MBA)',
          nodes: NODES_V3,
          relationships: RELATIONSHIPS_V3,
          sources: SOURCES_V3,
          sections: SECTION_METAS_V3,
          selectedNodeId: null,
          editingNodeId: null,
          editDraft: {},
          isDirty: false,
          searchQuery: '',
          filters: initialFilters,
          focusSectionId: null,
          activeModal: null,
          isProjectsLoading: false,
          projects: state.projects.map((p) => ({
            ...p,
            isActive: p.id === 'proj-whiteboard-2'
          }))
        }));
      } else if (projectId === 'proj-whiteboard-4') {
        set((state) => ({
          currentProjectId: 'proj-whiteboard-4',
          currentProjectName: 'Democratic Offices & Administrative Hierarchy (Whiteboard 4 of 5)',
          currentProjectDescription: 'Properly spaced government body clusters: Parliament (Lok Sabha & Rajya Sabha), Central Ministries, State Legislature (Vidhan Sabha & Parishad), 10-Rank Police Command, District Magistracy, BMC (Mumbai Municipal Corporation), Rural Panchayati Raj, and Sovereign Citizens',
          nodes: NODES_V4,
          relationships: RELATIONSHIPS_V4,
          sources: SOURCES_V4,
          sections: SECTION_METAS_V4,
          selectedNodeId: null,
          editingNodeId: null,
          editDraft: {},
          isDirty: false,
          searchQuery: '',
          filters: initialFilters,
          focusSectionId: null,
          activeModal: null,
          isProjectsLoading: false,
          projects: state.projects.map((p) => ({
            ...p,
            isActive: p.id === 'proj-whiteboard-4'
          }))
        }));
      } else if (projectId === 'proj-whiteboard-5') {
        set((state) => ({
          currentProjectId: 'proj-whiteboard-5',
          currentProjectName: 'Indian Banking Structure & Appellate Judiciary (Whiteboard 5 of 5)',
          currentProjectDescription: '11 sections across two boards: Board 1 Banking System (RBI, DFS, Scheduled Commercial Banks, NABARD, Integrated Ombudsman) & Board 2 Judicial System (Supreme Court, High Courts, District Judiciary, NCLT, NALSA)',
          nodes: NODES_V5,
          relationships: RELATIONSHIPS_V5,
          sources: SOURCES_V5,
          sections: SECTION_METAS_V5,
          selectedNodeId: null,
          editingNodeId: null,
          editDraft: {},
          isDirty: false,
          searchQuery: '',
          filters: initialFilters,
          focusSectionId: null,
          activeModal: null,
          isProjectsLoading: false,
          projects: state.projects.map((p) => ({
            ...p,
            isActive: p.id === 'proj-whiteboard-5'
          }))
        }));
      } else if (projectId === DEFAULT_PROJECT_ID) {
        set((state) => ({
          currentProjectId: DEFAULT_PROJECT_ID,
          currentProjectName: DEFAULT_PROJECT_NAME,
          currentProjectDescription: DEFAULT_PROJECT_DESC,
          nodes: ALL_NODES,
          relationships: ALL_RELATIONSHIPS,
          sources: ALL_SOURCES,
          sections: ALL_SECTION_METAS,
          selectedNodeId: null,
          editingNodeId: null,
          editDraft: {},
          isDirty: false,
          searchQuery: '',
          filters: initialFilters,
          focusSectionId: null,
          activeModal: null,
          isProjectsLoading: false,
          projects: state.projects.map((p) => ({
            ...p,
            isActive: p.id === DEFAULT_PROJECT_ID
          }))
        }));
      } else {
        set({ isProjectsLoading: false });
      }
    }
  },

  createProject: async (params) => {
    set({ isProjectsLoading: true });
    try {
      const created = await createProjectApi(params);
      const updatedList = await fetchProjects();
      set({
        projects: updatedList,
        currentProjectId: created.id,
        currentProjectName: created.name,
        currentProjectDescription: created.description || '',
        nodes: created.nodes,
        relationships: created.relationships,
        sources: created.sources,
        sections: created.sections && created.sections.length > 0 ? created.sections : ALL_SECTION_METAS,
        selectedNodeId: null,
        editingNodeId: null,
        editDraft: {},
        isDirty: false,
        searchQuery: '',
        filters: initialFilters,
        focusSectionId: null,
        activeModal: null,
        isProjectsLoading: false
      });
      return created;
    } catch (err) {
      console.error('Failed to create project:', err);
      set({ isProjectsLoading: false });
      throw err;
    }
  },

  updateProjectMetadata: async (projectId: string, partial: { name?: string; description?: string }) => {
    try {
      await updateProjectApi(projectId, partial);
      const list = await fetchProjects();
      set((state) => ({
        projects: list,
        currentProjectName: state.currentProjectId === projectId && partial.name ? partial.name : state.currentProjectName,
        currentProjectDescription: state.currentProjectId === projectId && partial.description !== undefined ? partial.description : state.currentProjectDescription
      }));
    } catch (err) {
      console.error('Failed to update project metadata:', err);
    }
  },

  deleteProject: async (projectId: string) => {
    set({ isProjectsLoading: true });
    try {
      const res = await deleteProjectApi(projectId);
      const updatedList = await fetchProjects();
      if (get().currentProjectId === projectId) {
        const nextProj = await fetchProjectById(res.activeProjectId);
        if (nextProj) {
          set({
            projects: updatedList,
            currentProjectId: nextProj.id,
            currentProjectName: nextProj.name,
            currentProjectDescription: nextProj.description || '',
            nodes: nextProj.nodes,
            relationships: nextProj.relationships,
            sources: nextProj.sources,
            sections: nextProj.sections && nextProj.sections.length > 0 ? nextProj.sections : ALL_SECTION_METAS,
            selectedNodeId: null,
            editingNodeId: null,
            editDraft: {},
            isDirty: false,
            searchQuery: '',
            filters: initialFilters,
            focusSectionId: null,
            activeModal: null,
            isProjectsLoading: false
          });
          return;
        }
      }
      set({
        projects: updatedList,
        isProjectsLoading: false
      });
    } catch (err) {
      console.error('Failed to delete project:', err);
      set({ isProjectsLoading: false });
    }
  },

  // --- Node Actions ---
  addNode: async (node) => {
    const curProjId = get().currentProjectId;
    await createNodeApi(node, curProjId).catch(() => {});
    set((state) => ({
      nodes: [...state.nodes, node],
      selectedNodeId: node.id,
      isDetailPanelOpen: true,
      activeModal: null
    }));
  },

  deleteNode: async (id) => {
    const curProjId = get().currentProjectId;
    await deleteNodeApi(id, curProjId).catch(() => {});
    set((state) => ({
      nodes: state.nodes.filter((n) => n.id !== id),
      relationships: state.relationships.filter((r) => r.sourceNodeId !== id && r.targetNodeId !== id),
      selectedNodeId: state.selectedNodeId === id ? null : state.selectedNodeId,
      isDetailPanelOpen: state.selectedNodeId === id ? false : state.isDetailPanelOpen
    }));
  },

  updateNodePosition: (id, position) => {
    const curProjId = get().currentProjectId;
    updateNodeApi(id, { position }, curProjId).catch(() => {});
    set((state) => ({
      nodes: state.nodes.map((n) => (n.id === id ? { ...n, position } : n)),
      lastSavedTime: new Date().toLocaleTimeString(),
      dbSynced: true
    }));
  },

  updateMultipleNodePositions: (updates) => {
    if (!updates || updates.length === 0) return;
    const curProjId = get().currentProjectId;
    const posMap = new Map(updates.map((u) => [u.id, u.position]));
    updates.forEach((u) => {
      updateNodeApi(u.id, { position: u.position }, curProjId).catch(() => {});
    });
    set((state) => ({
      nodes: state.nodes.map((n) => {
        const p = posMap.get(n.id);
        return p ? { ...n, position: p } : n;
      }),
      lastSavedTime: new Date().toLocaleTimeString(),
      dbSynced: true
    }));
  },

  // --- Relationship Actions ---
  addRelationship: async (rel) => {
    const curProjId = get().currentProjectId;
    const created = await createRelationshipApi(rel, curProjId).catch(() => rel);
    set((state) => ({
      relationships: [...state.relationships, created],
      activeModal: null,
      relationshipDraft: {}
    }));
  },

  updateRelationship: async (id, partial) => {
    const curProjId = get().currentProjectId;
    await updateRelationshipApi(id, partial, curProjId).catch(() => {});
    set((state) => ({
      relationships: state.relationships.map((r) => (r.id === id ? { ...r, ...partial } : r))
    }));
  },

  deleteRelationship: async (id) => {
    const curProjId = get().currentProjectId;
    await deleteRelationshipApi(id, curProjId).catch(() => {});
    set((state) => ({
      relationships: state.relationships.filter((r) => r.id !== id)
    }));
  },

  setRelationshipDraft: (draft) => set({ relationshipDraft: draft }),

  // --- Section Actions ---
  addSection: async (sec) => {
    const curProjId = get().currentProjectId;
    await createSectionApi(sec, curProjId).catch(() => {});
    set((state) => ({
      sections: [...state.sections, sec],
      focusSectionId: sec.id,
      activeModal: null
    }));
  },

  updateSection: async (id, partial) => {
    const curProjId = get().currentProjectId;
    await updateSectionApi(id, partial, curProjId).catch(() => {});
    set((state) => ({
      sections: state.sections.map((s) => (s.id === id ? { ...s, ...partial } : s))
    }));
  },

  deleteSection: async (id) => {
    const curProjId = get().currentProjectId;
    await deleteSectionApi(id, curProjId).catch(() => {});
    set((state) => ({
      sections: state.sections.filter((s) => s.id !== id),
      focusSectionId: state.focusSectionId === id ? null : state.focusSectionId
    }));
  },

  selectNode: (nodeId) =>
    set({
      selectedNodeId: nodeId,
      selectedNodeIds: nodeId ? [nodeId] : [],
      isDetailPanelOpen: Boolean(nodeId)
    }),

  setSelectedNodeIds: (ids) =>
    set((state) => ({
      selectedNodeIds: ids,
      selectedNodeId: ids.length === 1 ? ids[0] : (ids.length > 1 ? (ids.includes(state.selectedNodeId || '') ? state.selectedNodeId : ids[0]) : null),
      isDetailPanelOpen: ids.length > 0 ? state.isDetailPanelOpen : false
    })),

  setCanvasInteractionMode: (mode) =>
    set({
      canvasInteractionMode: mode,
      connectSourceNodeId: mode === 'connect' ? null : null
    }),

  setConnectSourceNodeId: (id) => set({ connectSourceNodeId: id }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters }
    })),

  resetFilters: () => set({ filters: initialFilters, searchQuery: '' }),

  setLayoutDirection: (dir) => set({ layoutDirection: dir }),

  setFocusSection: (sectionId) => set({ focusSectionId: sectionId }),

  setNodeViewMode: (mode) =>
    set({
      nodeViewMode: mode,
      nodeBoxWidth: mode === 'full' ? 320 : 260,
      customNodeSpacing: mode === 'full' ? 65 : 50,
      customVSpacing: mode === 'full' ? 65 : 50,
      customArrowHeight: mode === 'full' ? 140 : 85
    }),

  setAlternateDepth: (enabled) => set({ alternateDepth: enabled }),

  setAlternateSpacing: (spacing) => set({ alternateSpacing: spacing }),

  toggleNodeExpanded: (nodeId) =>
    set((state) => ({
      expandedNodeIds: {
        ...state.expandedNodeIds,
        [nodeId]: !(state.expandedNodeIds[nodeId] ?? (state.nodeViewMode === 'full'))
      }
    })),

  setNodeBoxWidth: (val) => set({ nodeBoxWidth: val }),
  setCardHeightPercent: (val) => set({ cardHeightPercent: val }),
  setCustomNodeSpacing: (val) => set({ customNodeSpacing: val }),
  setCustomVSpacing: (val) => set({ customVSpacing: val }),
  setCustomArrowHeight: (val) => set({ customArrowHeight: val }),
  setCustomFkArrowHeight: (val) => {
    const curProjId = get().currentProjectId;
    db.updateProjectSettings(curProjId, { customFkArrowHeight: val });
    updateProjectSettingsApi(curProjId, { customFkArrowHeight: val }).catch(() => {});
    set({ customFkArrowHeight: val });
  },
  setArrowStyle: (style) => set({ arrowStyle: style }),
  setFontSizePx: (val) => set({ fontSizePx: val }),
  setLineHeightMult: (val) => set({ lineHeightMult: val }),
  setParaSpacingPx: (val) => set({ paraSpacingPx: val }),

  resetSpacingAndSizing: () => {
    const curProjId = get().currentProjectId;
    db.updateProjectSettings(curProjId, { customFkArrowHeight: 70 });
    updateProjectSettingsApi(curProjId, { customFkArrowHeight: 70 }).catch(() => {});
    set((state) => ({
      nodeBoxWidth: state.nodeViewMode === 'full' ? 340 : 280,
      cardHeightPercent: 100,
      customNodeSpacing: state.nodeViewMode === 'full' ? 90 : 65,
      customVSpacing: state.nodeViewMode === 'full' ? 90 : 65,
      customArrowHeight: state.nodeViewMode === 'full' ? 180 : 120,
      customFkArrowHeight: 70,
      arrowStyle: 'curved',
      fontSizePx: 11,
      lineHeightMult: 1.35,
      paraSpacingPx: 6,
      alternateDepth: false,
      alternateSpacing: 50
    }));
  },

  setEdgeLabelMode: (mode) => set({ edgeLabelMode: mode }),

  setSectionPrintSettings: (sectionId, settings) => {
    const curProjId = get().currentProjectId;
    const currentSec = get().sectionPrintSettings[sectionId] || {};
    const updated = {
      ...get().sectionPrintSettings,
      [sectionId]: { ...currentSec, ...settings }
    };
    set({ sectionPrintSettings: updated });
    db.updateProjectSettings(curProjId, { sectionPrintSettings: updated });
    updateProjectSettingsApi(curProjId, { sectionPrintSettings: updated }).catch(() => {});
  },

  setSectionNodePosition: (sectionId, nodeId, pos) => {
    const curProjId = get().currentProjectId;
    const currentSec = get().sectionPrintSettings[sectionId] || {};
    const currentPositions = currentSec.nodePositions || {};
    const updated = {
      ...get().sectionPrintSettings,
      [sectionId]: {
        ...currentSec,
        nodePositions: {
          ...currentPositions,
          [nodeId]: pos
        }
      }
    };
    set({ sectionPrintSettings: updated });
    db.updateProjectSettings(curProjId, { sectionPrintSettings: updated });
    updateProjectSettingsApi(curProjId, { sectionPrintSettings: updated }).catch(() => {});
  },

  resetSectionPrintSettings: (sectionId) => {
    const curProjId = get().currentProjectId;
    const updated = { ...get().sectionPrintSettings };
    delete updated[sectionId];
    set({ sectionPrintSettings: updated });
    db.updateProjectSettings(curProjId, { sectionPrintSettings: updated });
    updateProjectSettingsApi(curProjId, { sectionPrintSettings: updated }).catch(() => {});
  },

  applySectionSettingsToAll: (sourceSectionId) => {
    const curProjId = get().currentProjectId;
    const src = get().sectionPrintSettings[sourceSectionId];
    if (!src) return;
    const { nodePositions: _discard, ...commonSettings } = src;
    const allSections = get().sections || [];
    const updated: Record<string, SectionPrintSettings> = {};
    for (const s of allSections) {
      const existing = get().sectionPrintSettings[s.id] || {};
      updated[s.id] = {
        ...existing,
        ...commonSettings
      };
    }
    set({ sectionPrintSettings: updated });
    db.updateProjectSettings(curProjId, { sectionPrintSettings: updated });
    updateProjectSettingsApi(curProjId, { sectionPrintSettings: updated }).catch(() => {});
  },

  startEditingNode: (node) =>
    set((state) => {
      if (state.editingNodeId === node.id) {
        return { editingNodeId: node.id };
      }
      if (state.editingNodeId && state.isDirty) {
        updateNodeApi(state.editingNodeId, state.editDraft, state.currentProjectId).catch(() => {});
        const updatedNodes = state.nodes.map((n) =>
          n.id === state.editingNodeId ? { ...n, ...state.editDraft } : n
        );
        return {
          nodes: updatedNodes,
          editingNodeId: node.id,
          editDraft: { ...node },
          isDirty: false,
          showConfirmModal: false
        };
      }
      return {
        editingNodeId: node.id,
        editDraft: { ...node },
        isDirty: false,
        showConfirmModal: false
      };
    }),

  setEditDraft: (partial) =>
    set((state) => ({
      editDraft: { ...state.editDraft, ...partial },
      isDirty: true
    })),

  setIsDirty: (dirty) => set({ isDirty: dirty }),

  saveEditingNode: () =>
    set((state) => {
      if (!state.editingNodeId) return state;
      updateNodeApi(state.editingNodeId, state.editDraft, state.currentProjectId).catch(() => {});
      const updatedNodes = state.nodes.map((n) =>
        n.id === state.editingNodeId
          ? {
              ...n,
              ...state.editDraft,
              institutionDetails: state.editDraft.institutionDetails
                ? { ...(n.institutionDetails || {}), ...state.editDraft.institutionDetails }
                : n.institutionDetails,
              examDetails: state.editDraft.examDetails
                ? { ...(n.examDetails || {}), ...state.editDraft.examDetails }
                : n.examDetails
            }
          : n
      );
      return {
        nodes: updatedNodes,
        editingNodeId: null,
        editDraft: {},
        isDirty: false,
        showConfirmModal: false,
        lastSavedTime: new Date().toLocaleTimeString(),
        dbSynced: true
      };
    }),

  cancelEditingNode: () =>
    set({
      editingNodeId: null,
      editDraft: {},
      isDirty: false,
      showConfirmModal: false
    }),

  confirmSaveAction: () =>
    set((state) => {
      let updatedNodes = state.nodes;
      if (state.editingNodeId) {
        updateNodeApi(state.editingNodeId, state.editDraft, state.currentProjectId).catch(() => {});
        updatedNodes = state.nodes.map((n) =>
          n.id === state.editingNodeId
            ? {
                ...n,
                ...state.editDraft,
                institutionDetails: state.editDraft.institutionDetails
                  ? { ...(n.institutionDetails || {}), ...state.editDraft.institutionDetails }
                  : n.institutionDetails,
                examDetails: state.editDraft.examDetails
                  ? { ...(n.examDetails || {}), ...state.editDraft.examDetails }
                  : n.examDetails
              }
            : n
        );
      }
      const nextAction = state.pendingAction;
      setTimeout(() => {
        if (nextAction) nextAction();
      }, 0);
      return {
        nodes: updatedNodes,
        editingNodeId: null,
        editDraft: {},
        isDirty: false,
        showConfirmModal: false,
        pendingAction: null,
        lastSavedTime: new Date().toLocaleTimeString(),
        dbSynced: true
      };
    }),

  confirmDiscardAction: () =>
    set((state) => {
      const nextAction = state.pendingAction;
      setTimeout(() => {
        if (nextAction) nextAction();
      }, 0);
      return {
        editingNodeId: null,
        editDraft: {},
        isDirty: false,
        showConfirmModal: false,
        pendingAction: null
      };
    }),

  setShowConfirmModal: (show) => set({ showConfirmModal: show }),

  setPendingAction: (action) => set({ pendingAction: action }),

  openModal: (modal) => set({ activeModal: modal }),

  closeModal: () => set({ activeModal: null }),

  toggleDetailPanel: (open) =>
    set((state) => ({
      isDetailPanelOpen: open !== undefined ? open : !state.isDetailPanelOpen
    })),

  toggleDetailPanelExpanded: () =>
    set((state) => ({
      isDetailPanelExpanded: !state.isDetailPanelExpanded
    })),

  toggleSidebar: (open) =>
    set((state) => ({
      isSidebarOpen: open !== undefined ? open : !state.isSidebarOpen
    })),

  updateNode: (nodeId: string, partial: Partial<EducationNode>) => {
    const curProjId = get().currentProjectId;
    updateNodeApi(nodeId, partial, curProjId).catch(() => {});
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              ...partial,
              institutionDetails: partial.institutionDetails
                ? { ...(node.institutionDetails || {}), ...partial.institutionDetails }
                : node.institutionDetails,
              examDetails: partial.examDetails
                ? { ...(node.examDetails || {}), ...partial.examDetails }
                : node.examDetails,
              governanceDetails: partial.governanceDetails
                ? { ...(node.governanceDetails || {}), ...partial.governanceDetails }
                : node.governanceDetails,
              bankingJudicialDetails: partial.bankingJudicialDetails
                ? { ...(node.bankingJudicialDetails || {}), ...partial.bankingJudicialDetails }
                : node.bankingJudicialDetails
            }
          : node
      ),
      lastSavedTime: new Date().toLocaleTimeString(),
      dbSynced: true
    }));
  },

  importData: (imported) =>
    set({
      nodes: imported.nodes,
      relationships: imported.relationships,
      sources: imported.sources,
      selectedNodeId: null,
      activeModal: null
    }),

  resetAll: () =>
    set({
      nodes: ALL_NODES,
      relationships: ALL_RELATIONSHIPS,
      sources: ALL_SOURCES,
      sections: ALL_SECTION_METAS,
      selectedNodeId: null,
      searchQuery: '',
      filters: initialFilters,
      focusSectionId: null,
      nodeViewMode: 'full',
      alternateDepth: false,
      alternateSpacing: 50,
      expandedNodeIds: {},
      isDetailPanelOpen: false,
      activeModal: null,
      nodeBoxWidth: 320,
      cardHeightPercent: 100,
      customNodeSpacing: 65,
      customVSpacing: 65,
      customArrowHeight: 140,
      customFkArrowHeight: 70,
      arrowStyle: 'curved',
      fontSizePx: 11,
      lineHeightMult: 1.35,
      paraSpacingPx: 6,
      editingNodeId: null,
      editDraft: {},
      isDirty: false,
      showConfirmModal: false,
      pendingAction: null
    })
}));
