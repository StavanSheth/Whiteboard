import { ALL_NODES, ALL_RELATIONSHIPS, ALL_SOURCES, SECTION_METAS, generateCoverageAudit } from './seeds';
import { SECTION_METAS_V2, NODES_V2, RELATIONSHIPS_V2, SOURCES_V2 } from '../src/data/whiteboard3-exams';
import { SECTION_METAS_V3, NODES_V3, RELATIONSHIPS_V3, SOURCES_V3 } from '../src/data/whiteboard2-institutions';
import { SECTION_METAS_V4, NODES_V4, RELATIONSHIPS_V4, SOURCES_V4 } from '../src/data/whiteboard4-democracy';
import { SECTION_METAS_V5, NODES_V5, RELATIONSHIPS_V5, SOURCES_V5 } from '../src/data/whiteboard5-banking-judiciary';
import { SECTION_METAS_V6, NODES_V6, RELATIONSHIPS_V6, SOURCES_V6 } from '../src/data/whiteboard6-system-design';
import { SECTION_METAS_V7, NODES_V7, RELATIONSHIPS_V7, SOURCES_V7 } from '../src/data/whiteboard7-how-to-judge-a-person';
import { EducationNode, RelationshipEdgeData, SourceRecord, DatasetSchema, ProjectRecord, ProjectSummary, SectionMeta, ProjectSettings } from './schema';

const STORAGE_PREFIX = 'wb_db_v1_';
const STORAGE_ACTIVE_KEY = 'wb_db_v1_active_project_id';
const STORAGE_PROJECTS_KEY = 'wb_db_v1_all_project_ids';

class EducationGovernanceDatabase {
  private projects: Map<string, ProjectRecord>;
  private activeProjectId: string;

  constructor() {
    this.projects = new Map();
    this.activeProjectId = 'proj-whiteboard-2';
    this.seed();
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      const activeId = window.localStorage.getItem(STORAGE_ACTIVE_KEY);
      const allIdsRaw = window.localStorage.getItem(STORAGE_PROJECTS_KEY);

      const projectIdsToLoad = new Set<string>(Array.from(this.projects.keys()));
      if (allIdsRaw) {
        try {
          const parsedIds = JSON.parse(allIdsRaw);
          if (Array.isArray(parsedIds)) {
            parsedIds.forEach((id) => projectIdsToLoad.add(id));
          }
        } catch {}
      }

      for (const pid of projectIdsToLoad) {
        const stored = window.localStorage.getItem(`${STORAGE_PREFIX}project_${pid}`);
        if (stored) {
          try {
            const parsed = JSON.parse(stored) as ProjectRecord;
            if (parsed && parsed.id && Array.isArray(parsed.nodes)) {
              // Intelligently merge any newly introduced nodes, relationships, and sources from code
              const seeded = this.projects.get(parsed.id);
              if (seeded) {
                // Strictly deduplicate existing stored nodes
                const seenNodeIds = new Set<string>();
                const cleanNodes: EducationNode[] = [];
                for (const n of parsed.nodes) {
                  if (!seenNodeIds.has(n.id)) {
                    seenNodeIds.add(n.id);
                    cleanNodes.push(n);
                  }
                }
                parsed.nodes = cleanNodes;

                // For Whiteboard 4, use the clean new 12-tier hierarchy and non-crossing relationships
                if (parsed.id === 'proj-whiteboard-4' || parsed.id === 'proj-system-design' || parsed.id === 'proj-judge-person') {
                  parsed.nodes = seeded.nodes.map((n) => ({ ...n }));
                  parsed.relationships = seeded.relationships.map((r) => ({ ...r }));
                  parsed.sections = (seeded.sections || []).map((s) => ({ ...s }));
                  parsed.description = seeded.description;
                  parsed.nodeCount = parsed.nodes.length;
                  parsed.relationshipCount = parsed.relationships.length;
                } else if (seeded.isDefault) {
                  // Sync latest seed properties (sections, categories) for default projects
                  const seededNodeMap = new Map(seeded.nodes.map((n) => [n.id, n]));
                  parsed.nodes = parsed.nodes.map((n) => {
                    const fresh = seededNodeMap.get(n.id);
                    if (fresh) {
                      return {
                        ...fresh,
                        position: n.position || fresh.position
                      };
                    }
                    return n;
                  });
                }

                // Add missing nodes from latest seed
                const currentNodeIds = new Set(parsed.nodes.map((n) => n.id));
                const missingNodes = seeded.nodes.filter((n) => !currentNodeIds.has(n.id));
                if (missingNodes.length > 0) {
                  parsed.nodes = [...parsed.nodes, ...missingNodes];
                }
                parsed.nodeCount = parsed.nodes.length;

                // Strictly deduplicate relationships
                const seenRelIds = new Set<string>();
                const cleanRels: RelationshipEdgeData[] = [];
                for (const r of parsed.relationships || []) {
                  if (!seenRelIds.has(r.id)) {
                    seenRelIds.add(r.id);
                    cleanRels.push(r);
                  }
                }
                parsed.relationships = cleanRels;

                // Add missing relationships from latest seed
                const currentRelIds = new Set(parsed.relationships.map((r) => r.id));
                const missingRels = seeded.relationships.filter((r) => !currentRelIds.has(r.id));
                if (missingRels.length > 0) {
                  parsed.relationships = [...parsed.relationships, ...missingRels];
                }

                // Filter out any relationships whose endpoints no longer exist
                const validNodeIds = new Set(parsed.nodes.map((n) => n.id));
                parsed.relationships = parsed.relationships.filter(
                  (r) => validNodeIds.has(r.sourceNodeId) && validNodeIds.has(r.targetNodeId)
                );
                parsed.relationshipCount = parsed.relationships.length;

                if (seeded.sections && seeded.sections.length > 0) {
                  parsed.sections = seeded.sections;
                }
                const existingSourceIds = new Set((parsed.sources || []).map((s) => s.id));
                const missingSources = (seeded.sources || []).filter((s) => !existingSourceIds.has(s.id));
                if (missingSources.length > 0) {
                  parsed.sources = [...(parsed.sources || []), ...missingSources];
                  parsed.sourceCount = parsed.sources.length;
                }
                if (seeded.settings || parsed.settings) {
                  parsed.settings = { ...(seeded.settings || {}), ...(parsed.settings || {}) };
                }
              }
              this.projects.set(parsed.id, parsed);
            }
          } catch (e) {
            console.warn(`[DB] Failed to parse stored project ${pid}:`, e);
          }
        }
      }

      if (activeId && this.projects.has(activeId)) {
        this.activeProjectId = activeId;
      }
    } catch (e) {
      console.warn('[DB] Storage hydration warning:', e);
    }
  }

  public persistProject(projectId?: string): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      const pid = projectId || this.activeProjectId;
      const proj = this.projects.get(pid);
      if (proj) {
        window.localStorage.setItem(`${STORAGE_PREFIX}project_${pid}`, JSON.stringify(proj));
      }
      window.localStorage.setItem(
        STORAGE_PROJECTS_KEY,
        JSON.stringify(Array.from(this.projects.keys()))
      );
      window.localStorage.setItem(STORAGE_ACTIVE_KEY, this.activeProjectId);
    } catch (e) {
      console.warn('[DB] Storage persist warning:', e);
    }
  }

  public resetProjectToDefault(projectId: string): ProjectRecord {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(`${STORAGE_PREFIX}project_${projectId}`);
    }
    const now = new Date().toISOString();
    let reseeded: ProjectRecord | null = null;
    if (projectId === 'proj-whiteboard-2') {
      reseeded = {
        id: 'proj-whiteboard-2',
        name: 'Indian Educational Institutions & Course Pathways (Whiteboard 2 of 5)',
        description: 'Comprehensive lifecycle: Pre-Primary to 10th Boards (CBSE, ICSE, SSC, NCERT, NIOS) -> 11th/12th Streams (PCM, PCB, Commerce, Arts) -> Course Pathways (B.Tech, MBBS, Law, Commerce, Arts) -> National Competitive Gateways (UPSC, Banking, Government)',
        createdAt: now,
        updatedAt: now,
        isDefault: true,
        nodeCount: NODES_V3.length,
        relationshipCount: RELATIONSHIPS_V3.length,
        sourceCount: SOURCES_V3.length,
        nodes: NODES_V3.map((n) => ({ ...n })),
        relationships: RELATIONSHIPS_V3.map((r) => ({ ...r })),
        sources: SOURCES_V3.map((s) => ({ ...s })),
        sections: SECTION_METAS_V3.map((s) => ({ ...s }))
      };
    } else if (projectId === 'proj-default') {
      reseeded = {
        id: 'proj-default',
        name: 'Indian Education Governance (Whiteboard 1 of 3)',
        description: 'Authorities, Legal Powers, Standards, Examinations & Oversight across 16 statutory sections',
        createdAt: now,
        updatedAt: now,
        isDefault: false,
        nodeCount: ALL_NODES.length,
        relationshipCount: ALL_RELATIONSHIPS.length,
        sourceCount: ALL_SOURCES.length,
        nodes: ALL_NODES.map((n) => ({ ...n })),
        relationships: ALL_RELATIONSHIPS.map((r) => ({ ...r })),
        sources: ALL_SOURCES.map((s) => ({ ...s })),
        sections: SECTION_METAS.map((s) => ({ ...s }))
      };
    } else if (projectId === 'proj-whiteboard-3') {
      reseeded = {
        id: 'proj-whiteboard-3',
        name: 'Indian Examinations, Timelines & Career Pathways (Whiteboard 3 of 3)',
        description: '22 major sections: school boards, engineering, medicine, civil services, defence, management, law, and career pathways from eligibility to appointment',
        createdAt: now,
        updatedAt: now,
        isDefault: false,
        nodeCount: NODES_V2.length,
        relationshipCount: RELATIONSHIPS_V2.length,
        sourceCount: SOURCES_V2.length,
        nodes: NODES_V2.map((n) => ({ ...n })),
        relationships: RELATIONSHIPS_V2.map((r) => ({ ...r })),
        sources: SOURCES_V2.map((s) => ({ ...s })),
        sections: SECTION_METAS_V2.map((s) => ({ ...s }))
      };
    } else if (projectId === 'proj-whiteboard-4') {
      reseeded = {
        id: 'proj-whiteboard-4',
        name: 'Indian Democracy and Government Hierarchy (v4)',
        description: 'Modular Government Bodies across 23 distinct sections (Apex, Rajya Sabha, Lok Sabha, PMO, Central Ministries, Police 10-Rank Command, Magistracy, Municipalities, Panchayats, down to Sovereign Citizens)',
        createdAt: now,
        updatedAt: now,
        isDefault: false,
        nodeCount: NODES_V4.length,
        relationshipCount: RELATIONSHIPS_V4.length,
        sourceCount: SOURCES_V4.length,
        nodes: NODES_V4.map((n) => ({ ...n })),
        relationships: RELATIONSHIPS_V4.map((r) => ({ ...r })),
        sources: SOURCES_V4.map((s) => ({ ...s })),
        sections: SECTION_METAS_V4.map((s) => ({ ...s }))
      };
    } else if (projectId === 'proj-whiteboard-5') {
      reseeded = {
        id: 'proj-whiteboard-5',
        name: 'Indian Banking and Judicial Systems Hierarchy (v5)',
        description: 'Complete institutional hierarchy of the Indian Banking System (RBI, PSBs, NBFCs) and Judicial System (Supreme Court, High Courts, District Courts, Tribunals)',
        createdAt: now,
        updatedAt: now,
        isDefault: false,
        nodeCount: NODES_V5.length,
        relationshipCount: RELATIONSHIPS_V5.length,
        sourceCount: SOURCES_V5.length,
        nodes: NODES_V5.map((n) => ({ ...n })),
        relationships: RELATIONSHIPS_V5.map((r) => ({ ...r })),
        sources: SOURCES_V5.map((s) => ({ ...s })),
        sections: SECTION_METAS_V5.map((s) => ({ ...s }))
      };
    } else if (projectId === 'proj-system-design') {
      reseeded = {
        id: 'proj-system-design',
        name: 'System Design Visual Learning Framework (Whiteboard 6 of 6)',
        description: 'Interactive flowchart-style learning framework based on the 5-hour comprehensive transcript: Foundations, Networking & Protocols, APIs & Serialization, Databases, Caching, Scaling & Stateless Compute, Load Balancing, Replication & CAP, Sharding, Asynchronous Queues, Reliability & Observability, and End-to-End Streaming Architecture',
        createdAt: now,
        updatedAt: now,
        isDefault: false,
        nodeCount: NODES_V6.length,
        relationshipCount: RELATIONSHIPS_V6.length,
        sourceCount: SOURCES_V6.length,
        nodes: NODES_V6.map((n) => ({ ...n })),
        relationships: RELATIONSHIPS_V6.map((r) => ({ ...r })),
        sources: SOURCES_V6.map((s) => ({ ...s })),
        sections: SECTION_METAS_V6.map((s) => ({ ...s }))
      };
    } else if (projectId === 'proj-judge-person') {
      reseeded = {
        id: 'proj-judge-person',
        name: 'How to Judge a Person (Whiteboard 7 of 7)',
        description: 'Human Connection, Character Assessment & Social Intelligence: Foundations, Relationship Types (Ally, Pal, Companion), Conversation Design, Trust & Vulnerability, Character & Power Dynamics, Intuition & Judgment, and Practical Applications',
        createdAt: now,
        updatedAt: now,
        isDefault: false,
        nodeCount: NODES_V7.length,
        relationshipCount: RELATIONSHIPS_V7.length,
        sourceCount: SOURCES_V7.length,
        nodes: NODES_V7.map((n) => ({ ...n })),
        relationships: RELATIONSHIPS_V7.map((r) => ({ ...r })),
        sources: SOURCES_V7.map((s) => ({ ...s })),
        sections: SECTION_METAS_V7.map((s) => ({ ...s }))
      };
    }
    if (reseeded) {
      this.projects.set(projectId, reseeded);
      this.persistProject(projectId);
      return reseeded;
    }
    const current = this.projects.get(projectId);
    if (!current) throw new Error(`Project ${projectId} not found.`);
    return current;
  }

  public seed(): void {
    this.projects.clear();
    const now = new Date().toISOString();
    
    // Default Project: Indian Educational Institutions & Course Pathways (Whiteboard 2)
    const whiteboard2Project: ProjectRecord = {
      id: 'proj-whiteboard-2',
      name: 'Indian Educational Institutions & Course Pathways (Whiteboard 2 of 5)',
      description: 'Comprehensive lifecycle: Pre-Primary to 10th Boards (CBSE, ICSE, SSC, NCERT, NIOS) -> 11th/12th Streams (PCM, PCB, Commerce, Arts) -> Course Pathways (B.Tech, MBBS, Law, Commerce, Arts) -> National Competitive Gateways (UPSC, Banking, Government)',
      createdAt: now,
      updatedAt: now,
      isDefault: true,
      nodeCount: NODES_V3.length,
      relationshipCount: RELATIONSHIPS_V3.length,
      sourceCount: SOURCES_V3.length,
      nodes: NODES_V3.map((n) => ({ ...n })),
      relationships: RELATIONSHIPS_V3.map((r) => ({ ...r })),
      sources: SOURCES_V3.map((s) => ({ ...s })),
      sections: SECTION_METAS_V3.map((s) => ({ ...s }))
    };

    // Canonical Project: Indian Education Governance (Whiteboard 1)
    const defaultProject: ProjectRecord = {
      id: 'proj-default',
      name: 'Indian Education Governance (Whiteboard 1 of 3)',
      description: 'Authorities, Legal Powers, Standards, Examinations & Oversight across 16 statutory sections',
      createdAt: now,
      updatedAt: now,
      isDefault: false,
      nodeCount: ALL_NODES.length,
      relationshipCount: ALL_RELATIONSHIPS.length,
      sourceCount: ALL_SOURCES.length,
      nodes: ALL_NODES.map((n) => ({ ...n })),
      relationships: ALL_RELATIONSHIPS.map((r) => ({ ...r })),
      sources: ALL_SOURCES.map((s) => ({ ...s })),
      sections: SECTION_METAS.map((s) => ({ ...s }))
    };

    // Whiteboard 3 (v2 document): Indian Examinations, Timelines & Pathways
    const whiteboard3Project: ProjectRecord = {
      id: 'proj-whiteboard-3',
      name: 'Indian Examinations, Timelines & Career Pathways (Whiteboard 3 of 3)',
      description: '22 major sections: school boards, engineering, medicine, civil services, defence, management, law, and career pathways from eligibility to appointment',
      createdAt: now,
      updatedAt: now,
      isDefault: false,
      nodeCount: NODES_V2.length,
      relationshipCount: RELATIONSHIPS_V2.length,
      sourceCount: SOURCES_V2.length,
      nodes: NODES_V2.map((n) => ({ ...n })),
      relationships: RELATIONSHIPS_V2.map((r) => ({ ...r })),
      sources: SOURCES_V2.map((s) => ({ ...s })),
      sections: SECTION_METAS_V2.map((s) => ({ ...s }))
    };

    // Whiteboard 4 (v4 document): Indian Democracy and Government Hierarchy
    const whiteboard4Project: ProjectRecord = {
      id: 'proj-whiteboard-4',
      name: 'Indian Democracy and Government Hierarchy (v4)',
      description: 'Modular Government Bodies across 23 distinct sections (Apex, Rajya Sabha, Lok Sabha, PMO, Central Ministries, Police 10-Rank Command, Magistracy, Municipalities, Panchayats, down to Sovereign Citizens)',
      createdAt: now,
      updatedAt: now,
      isDefault: false,
      nodeCount: NODES_V4.length,
      relationshipCount: RELATIONSHIPS_V4.length,
      sourceCount: SOURCES_V4.length,
      nodes: NODES_V4.map((n) => ({ ...n })),
      relationships: RELATIONSHIPS_V4.map((r) => ({ ...r })),
      sources: SOURCES_V4.map((s) => ({ ...s })),
      sections: SECTION_METAS_V4.map((s) => ({ ...s }))
    };

    // Whiteboard 5 (v5 document): Indian Banking and Judicial Systems Hierarchy
    const whiteboard5Project: ProjectRecord = {
      id: 'proj-whiteboard-5',
      name: 'Indian Banking and Judicial Systems Hierarchy (v5)',
      description: 'Complete institutional hierarchy of the Indian Banking System (RBI, PSBs, NBFCs) and Judicial System (Supreme Court, High Courts, District Courts, Tribunals)',
      createdAt: now,
      updatedAt: now,
      isDefault: false,
      nodeCount: NODES_V5.length,
      relationshipCount: RELATIONSHIPS_V5.length,
      sourceCount: SOURCES_V5.length,
      nodes: NODES_V5.map((n) => ({ ...n })),
      relationships: RELATIONSHIPS_V5.map((r) => ({ ...r })),
      sources: SOURCES_V5.map((s) => ({ ...s })),
      sections: SECTION_METAS_V5.map((s) => ({ ...s }))
    };

    // Whiteboard 6: System Design Visual Learning Framework
    const whiteboard6Project: ProjectRecord = {
      id: 'proj-system-design',
      name: 'System Design Visual Learning Framework (Whiteboard 6 of 6)',
      description: 'Interactive flowchart-style learning framework based on the 5-hour comprehensive transcript: Foundations, Networking & Protocols, APIs & Serialization, Databases, Caching, Scaling & Stateless Compute, Load Balancing, Replication & CAP, Sharding, Asynchronous Queues, Reliability & Observability, and End-to-End Streaming Architecture',
      createdAt: now,
      updatedAt: now,
      isDefault: false,
      nodeCount: NODES_V6.length,
      relationshipCount: RELATIONSHIPS_V6.length,
      sourceCount: SOURCES_V6.length,
      nodes: NODES_V6.map((n) => ({ ...n })),
      relationships: RELATIONSHIPS_V6.map((r) => ({ ...r })),
      sources: SOURCES_V6.map((s) => ({ ...s })),
      sections: SECTION_METAS_V6.map((s) => ({ ...s }))
    };

    // Whiteboard 7: How to Judge a Person (Human Connection & Character Assessment)
    const whiteboard7Project: ProjectRecord = {
      id: 'proj-judge-person',
      name: 'How to Judge a Person — Master Learning System (Whiteboard 7)',
      description: 'Human Connection, Social Intelligence & Relationship Selection: Foundations, Ally/Pal/Companion Relationship Types, Conversation Design, Trust & Vulnerability, Character Assessment & Power Dynamics, Intuition & First Impressions, and Practical Applications.',
      createdAt: now,
      updatedAt: now,
      isDefault: false,
      nodeCount: NODES_V7.length,
      relationshipCount: RELATIONSHIPS_V7.length,
      sourceCount: SOURCES_V7.length,
      nodes: NODES_V7.map((n) => ({ ...n })),
      relationships: RELATIONSHIPS_V7.map((r) => ({ ...r })),
      sources: SOURCES_V7.map((s) => ({ ...s })),
      sections: SECTION_METAS_V7.map((s) => ({ ...s }))
    };

    this.projects.set(whiteboard2Project.id, whiteboard2Project);
    this.projects.set(defaultProject.id, defaultProject);
    this.projects.set(whiteboard3Project.id, whiteboard3Project);
    this.projects.set(whiteboard4Project.id, whiteboard4Project);
    this.projects.set(whiteboard5Project.id, whiteboard5Project);
    this.projects.set(whiteboard6Project.id, whiteboard6Project);
    this.projects.set(whiteboard7Project.id, whiteboard7Project);
    this.activeProjectId = whiteboard2Project.id;
  }

  // --- Multi-Project Management ---
  public getAllProjects(): (ProjectSummary & { isActive: boolean })[] {
    return Array.from(this.projects.values()).map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
      nodeCount: p.nodes.length,
      relationshipCount: p.relationships.length,
      sourceCount: p.sources.length,
      isDefault: p.isDefault,
      settings: p.settings,
      isActive: p.id === this.activeProjectId
    }));
  }

  public getProject(id: string): ProjectRecord | undefined {
    return this.projects.get(id);
  }

  public getActiveProjectId(): string {
    return this.activeProjectId;
  }

  public setActiveProjectId(id: string): ProjectRecord {
    const proj = this.projects.get(id);
    if (!proj) {
      throw new Error(`Project with ID '${id}' not found.`);
    }
    this.activeProjectId = id;
    this.persistProject(id);
    return proj;
  }

  public createProject(params: {
    name: string;
    description?: string;
    template?: 'empty' | 'education-governance' | 'examinations' | 'duplicate';
    duplicateFromId?: string;
  }): ProjectRecord {
    const id = `proj-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const now = new Date().toISOString();
    let nodes: EducationNode[] = [];
    let relationships: RelationshipEdgeData[] = [];
    let sources: SourceRecord[] = [];
    let sections: SectionMeta[] = [];

    if (params.template === 'duplicate' && params.duplicateFromId) {
      const src = this.projects.get(params.duplicateFromId);
      if (src) {
        nodes = JSON.parse(JSON.stringify(src.nodes));
        relationships = JSON.parse(JSON.stringify(src.relationships));
        sources = JSON.parse(JSON.stringify(src.sources));
        sections = src.sections ? JSON.parse(JSON.stringify(src.sections)) : [];
      }
    } else if (params.template === 'examinations') {
      nodes = JSON.parse(JSON.stringify(NODES_V2));
      relationships = JSON.parse(JSON.stringify(RELATIONSHIPS_V2));
      sources = JSON.parse(JSON.stringify(SOURCES_V2));
      sections = JSON.parse(JSON.stringify(SECTION_METAS_V2));
    } else if (params.template === 'empty') {
      // Start with a clean root authority node so diagram renders cleanly
      const rootNode: EducationNode = {
        id: `ROOT-${id.substring(5, 11).toUpperCase()}`,
        type: 'constitutional',
        title: params.name || 'New Diagram Root',
        abbreviation: 'ROOT',
        sectionId: 'SEC-01',
        sectionNumber: '01',
        level: 'constitutional',
        category: 'legislation',
        summary: params.description || 'Initial root entity for this diagram canvas.',
        legalStatus: 'Chartered Root Authority',
        mandate: ['Define system scope and operational remit'],
        powers: ['Primary governance decision rights'],
        limitations: ['Bound by governing constitution and mandate'],
        sourceIds: [],
        verificationStatus: 'verified',
        lastVerifiedDate: now.substring(0, 10)
      };
      nodes = [rootNode];
      relationships = [];
      sources = [];
      sections = [];
    } else {
      // Default: 'education-governance' template
      nodes = JSON.parse(JSON.stringify(ALL_NODES));
      relationships = JSON.parse(JSON.stringify(ALL_RELATIONSHIPS));
      sources = JSON.parse(JSON.stringify(ALL_SOURCES));
      sections = JSON.parse(JSON.stringify(SECTION_METAS));
    }

    const newProject: ProjectRecord = {
      id,
      name: params.name.trim() || 'Untitled Project',
      description: params.description?.trim() || '',
      createdAt: now,
      updatedAt: now,
      isDefault: false,
      nodeCount: nodes.length,
      relationshipCount: relationships.length,
      sourceCount: sources.length,
      nodes,
      relationships,
      sources,
      sections
    };

    this.projects.set(id, newProject);
    this.activeProjectId = id;
    this.persistProject(id);
    return newProject;
  }

  public updateProjectMetadata(
    id: string,
    partial: { name?: string; description?: string; settings?: Partial<ProjectSettings> }
  ): ProjectSummary {
    const proj = this.projects.get(id);
    if (!proj) {
      throw new Error(`Project with ID '${id}' not found.`);
    }
    if (partial.name !== undefined) proj.name = partial.name.trim();
    if (partial.description !== undefined) proj.description = partial.description.trim();
    if (partial.settings !== undefined) {
      proj.settings = { ...(proj.settings || {}), ...partial.settings };
    }
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return {
      id: proj.id,
      name: proj.name,
      description: proj.description,
      createdAt: proj.createdAt,
      updatedAt: proj.updatedAt,
      nodeCount: proj.nodes.length,
      relationshipCount: proj.relationships.length,
      sourceCount: proj.sources.length,
      isDefault: proj.isDefault,
      settings: proj.settings
    };
  }

  public updateProjectSettings(id: string, settings: Partial<ProjectSettings>): ProjectRecord {
    const proj = this.projects.get(id);
    if (!proj) {
      throw new Error(`Project with ID '${id}' not found.`);
    }
    const mergedSectionPrintSettings = {
      ...(proj.settings?.sectionPrintSettings || {}),
      ...(settings.sectionPrintSettings || {})
    };
    proj.settings = {
      ...(proj.settings || {}),
      ...settings,
      sectionPrintSettings: mergedSectionPrintSettings
    };
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return proj;
  }

  public deleteProject(id: string): { success: boolean; activeProjectId: string } {
    if (this.projects.size <= 1) {
      throw new Error('Cannot delete the only remaining project.');
    }
    const existed = this.projects.delete(id);
    if (!existed) {
      throw new Error(`Project with ID '${id}' not found.`);
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(`${STORAGE_PREFIX}project_${id}`);
    }
    if (this.activeProjectId === id) {
      // Switch to first remaining project
      const nextProj = Array.from(this.projects.values())[0];
      this.activeProjectId = nextProj.id;
    }
    this.persistProject(this.activeProjectId);
    return { success: true, activeProjectId: this.activeProjectId };
  }

  public getTargetProject(projectId?: string): ProjectRecord {
    const pid = projectId || this.activeProjectId;
    let proj = this.projects.get(pid);
    if (!proj) {
      proj = Array.from(this.projects.values())[0];
      this.activeProjectId = proj.id;
    }
    return proj;
  }

  // --- Nodes CRUD (Scoped to Project) ---
  public getAllNodes(query?: string, sectionId?: string, projectId?: string): EducationNode[] {
    const proj = this.getTargetProject(projectId);
    let list = proj.nodes;
    if (sectionId && sectionId !== 'all') {
      list = list.filter((n) => n.sectionId === sectionId || n.id === 'ROOT-IND-EDU-GOV');
    }
    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.id.toLowerCase().includes(q) ||
          (n.abbreviation && n.abbreviation.toLowerCase().includes(q)) ||
          n.summary.toLowerCase().includes(q) ||
          (n.establishingLaw && n.establishingLaw.some((l) => l.toLowerCase().includes(q)))
      );
    }
    return list;
  }

  public getNodeById(id: string, projectId?: string): EducationNode | undefined {
    const proj = this.getTargetProject(projectId);
    return proj.nodes.find((n) => n.id === id);
  }

  public updateNode(id: string, partial: Partial<EducationNode>, projectId?: string): EducationNode {
    const proj = this.getTargetProject(projectId);
    const index = proj.nodes.findIndex((n) => n.id === id);
    if (index === -1) {
      throw new Error(`Node with ID ${id} not found in project ${proj.name}.`);
    }
    const existing = proj.nodes[index];
    const updated: EducationNode = {
      ...existing,
      ...partial,
      institutionDetails: partial.institutionDetails
        ? { ...(existing.institutionDetails || {}), ...partial.institutionDetails }
        : existing.institutionDetails,
      examDetails: partial.examDetails
        ? { ...(existing.examDetails || {}), ...partial.examDetails }
        : existing.examDetails,
      id // preserve immutable ID
    };
    proj.nodes[index] = updated;
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return updated;
  }

  public createNode(node: EducationNode, projectId?: string): EducationNode {
    const proj = this.getTargetProject(projectId);
    if (proj.nodes.some((n) => n.id === node.id)) {
      throw new Error(`Node with ID ${node.id} already exists in project ${proj.name}.`);
    }
    proj.nodes.push({ ...node });
    proj.nodeCount = proj.nodes.length;
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return node;
  }

  public deleteNode(id: string, projectId?: string): boolean {
    const proj = this.getTargetProject(projectId);
    const initialLen = proj.nodes.length;
    proj.nodes = proj.nodes.filter((n) => n.id !== id);
    if (proj.nodes.length < initialLen) {
      proj.relationships = proj.relationships.filter(
        (r) => r.sourceNodeId !== id && r.targetNodeId !== id
      );
      proj.nodeCount = proj.nodes.length;
      proj.relationshipCount = proj.relationships.length;
      proj.updatedAt = new Date().toISOString();
      this.persistProject(proj.id);
      return true;
    }
    return false;
  }

  // --- Relationships CRUD ---
  public getAllRelationships(projectId?: string): RelationshipEdgeData[] {
    const proj = this.getTargetProject(projectId);
    return proj.relationships;
  }

  public getRelationshipsForNode(nodeId: string, projectId?: string): {
    outgoing: RelationshipEdgeData[];
    incoming: RelationshipEdgeData[];
  } {
    const proj = this.getTargetProject(projectId);
    return {
      outgoing: proj.relationships.filter((r) => r.sourceNodeId === nodeId),
      incoming: proj.relationships.filter((r) => r.targetNodeId === nodeId)
    };
  }

  public createRelationship(rel: RelationshipEdgeData, projectId?: string): RelationshipEdgeData {
    const proj = this.getTargetProject(projectId);
    if (!rel.id) {
      rel.id = `REL-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    }
    proj.relationships.push({ ...rel });
    proj.relationshipCount = proj.relationships.length;
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return rel;
  }

  public updateRelationship(id: string, partial: Partial<RelationshipEdgeData>, projectId?: string): RelationshipEdgeData {
    const proj = this.getTargetProject(projectId);
    const index = proj.relationships.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new Error(`Relationship with ID ${id} not found.`);
    }
    const updated = { ...proj.relationships[index], ...partial, id };
    proj.relationships[index] = updated;
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return updated;
  }

  public deleteRelationship(id: string, projectId?: string): boolean {
    const proj = this.getTargetProject(projectId);
    const initial = proj.relationships.length;
    proj.relationships = proj.relationships.filter((r) => r.id !== id);
    if (proj.relationships.length < initial) {
      proj.relationshipCount = proj.relationships.length;
      proj.updatedAt = new Date().toISOString();
      this.persistProject(proj.id);
      return true;
    }
    return false;
  }

  // --- Sections & Sources ---
  public getSectionMetas(projectId?: string) {
    const proj = this.getTargetProject(projectId);
    if (!proj.sections || proj.sections.length === 0) {
      proj.sections = SECTION_METAS.map((s) => ({ ...s }));
    }
    return proj.sections;
  }

  public getAllSections(projectId?: string) {
    return this.getSectionMetas(projectId);
  }

  public createSection(sec: any, projectId?: string) {
    const proj = this.getTargetProject(projectId);
    if (!proj.sections) {
      proj.sections = SECTION_METAS.map((s) => ({ ...s }));
    }
    if (!sec.id) {
      sec.id = `SEC-${sec.number || Date.now()}`;
    }
    if (proj.sections.some((s: any) => s.id === sec.id)) {
      throw new Error(`Section with ID ${sec.id} already exists.`);
    }
    proj.sections.push({ ...sec });
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return sec;
  }

  public updateSection(id: string, partial: any, projectId?: string) {
    const proj = this.getTargetProject(projectId);
    if (!proj.sections) {
      proj.sections = SECTION_METAS.map((s) => ({ ...s }));
    }
    const index = proj.sections.findIndex((s: any) => s.id === id);
    if (index === -1) {
      throw new Error(`Section with ID ${id} not found.`);
    }
    const updated = { ...proj.sections[index], ...partial, id };
    proj.sections[index] = updated;
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);
    return updated;
  }

  public deleteSection(id: string, projectId?: string): boolean {
    const proj = this.getTargetProject(projectId);
    if (!proj.sections) {
      proj.sections = SECTION_METAS.map((s) => ({ ...s }));
    }
    const initial = proj.sections.length;
    proj.sections = proj.sections.filter((s: any) => s.id !== id);
    if (proj.sections.length < initial) {
      proj.updatedAt = new Date().toISOString();
      this.persistProject(proj.id);
      return true;
    }
    return false;
  }

  public getAllSources(projectId?: string): SourceRecord[] {
    const proj = this.getTargetProject(projectId);
    return proj.sources;
  }

  public getCoverageAudit(projectId?: string) {
    const proj = this.getTargetProject(projectId);
    if (proj.id === 'proj-default') {
      return generateCoverageAudit();
    }
    // Generic live audit for custom project
    const verifiedCount = proj.nodes.filter((n) => n.verificationStatus === 'verified').length;
    const rate = proj.nodes.length > 0 ? (verifiedCount / proj.nodes.length) * 100 : 100;
    return {
      totalNodes: proj.nodes.length,
      totalRelationships: proj.relationships.length,
      verifiedNodes: verifiedCount,
      verificationRate: rate.toFixed(1) + '%',
      sections: SECTION_METAS.map((sec) => {
        const count = proj.nodes.filter((n) => n.sectionId === sec.id).length;
        return {
          id: sec.id,
          number: sec.number,
          title: sec.title,
          actualCount: count,
          status: count > 0 ? 'ACTIVE' : 'EMPTY'
        };
      })
    };
  }

  // --- Export / Import ---
  public exportData(projectId?: string) {
    const proj = this.getTargetProject(projectId);
    return {
      version: '1.0.0',
      projectId: proj.id,
      projectName: proj.name,
      projectDescription: proj.description,
      exportedAt: new Date().toISOString(),
      nodes: proj.nodes,
      relationships: proj.relationships,
      sources: proj.sources
    };
  }

  public importData(data: unknown, projectId?: string): { success: boolean; message: string; counts?: { nodes: number; relationships: number; sources: number } } {
    const parse = DatasetSchema.safeParse(data);
    if (!parse.success) {
      return {
        success: false,
        message: `Validation failed: ${parse.error.issues.map((i) => i.message).join('; ')}`
      };
    }
    const valid = parse.data;
    const proj = this.getTargetProject(projectId);

    proj.nodes = valid.nodes;
    proj.relationships = valid.relationships;
    proj.sources = valid.sources;
    proj.nodeCount = proj.nodes.length;
    proj.relationshipCount = proj.relationships.length;
    proj.sourceCount = proj.sources.length;
    proj.updatedAt = new Date().toISOString();
    this.persistProject(proj.id);

    return {
      success: true,
      message: `Dataset imported successfully into project '${proj.name}'.`,
      counts: {
        nodes: valid.nodes.length,
        relationships: valid.relationships.length,
        sources: valid.sources.length
      }
    };
  }
}

// Global Singleton Database Instance
export const db = new EducationGovernanceDatabase();
