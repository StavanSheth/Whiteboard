import { EducationNode, RelationshipEdgeData, SourceRecord, ProjectRecord, ProjectSummary, ProjectSettings, SectionMeta } from '../types';
import { db } from '../../database/db';

const API_BASE = '/api';

export async function checkBackendHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/health`, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}

// --- PROJECT MANAGEMENT API ---
export async function fetchProjects(): Promise<(ProjectSummary & { isActive: boolean })[]> {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch {
    return db.getAllProjects();
  }
}

export async function fetchProjectById(id: string): Promise<ProjectRecord | undefined> {
  try {
    const res = await fetch(`${API_BASE}/projects/${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch {
    return db.getProject(id);
  }
}

export async function createProjectApi(params: {
  name: string;
  description?: string;
  template?: 'empty' | 'education-governance' | 'duplicate';
  duplicateFromId?: string;
}): Promise<ProjectRecord> {
  try {
    const res = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    db.createProject(params);
    return json.data;
  } catch {
    return db.createProject(params);
  }
}

export async function activateProjectApi(id: string): Promise<ProjectRecord> {
  try {
    const res = await fetch(`${API_BASE}/projects/${encodeURIComponent(id)}/activate`, {
      method: 'POST'
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    db.setActiveProjectId(id);
    return json.data;
  } catch {
    return db.setActiveProjectId(id);
  }
}

export async function updateProjectApi(
  id: string,
  partial: { name?: string; description?: string; settings?: Partial<ProjectSettings> }
): Promise<ProjectSummary> {
  try {
    const res = await fetch(`${API_BASE}/projects/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(partial)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    db.updateProjectMetadata(id, partial);
    return json.data;
  } catch {
    return db.updateProjectMetadata(id, partial);
  }
}

export async function updateProjectSettingsApi(
  id: string,
  settings: Partial<ProjectSettings>
): Promise<ProjectSettings> {
  try {
    const res = await fetch(`${API_BASE}/projects/${encodeURIComponent(id)}/settings`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    db.updateProjectSettings(id, settings);
    return json.data;
  } catch {
    const proj = db.updateProjectSettings(id, settings);
    return proj.settings || {};
  }
}

export async function deleteProjectApi(id: string): Promise<{ success: boolean; activeProjectId: string }> {
  try {
    const res = await fetch(`${API_BASE}/projects/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    db.deleteProject(id);
    return json;
  } catch {
    return db.deleteProject(id);
  }
}

// --- NODES & EDGES API ---
export async function fetchNodes(search?: string, sectionId?: string, projectId?: string): Promise<EducationNode[]> {
  try {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (sectionId && sectionId !== 'all') params.set('sectionId', sectionId);
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/nodes${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch {
    return db.getAllNodes(search, sectionId, projectId);
  }
}

export async function updateNodeApi(
  id: string,
  partial: Partial<EducationNode>,
  projectId?: string
): Promise<EducationNode> {
  const local = db.updateNode(id, partial, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/nodes/${encodeURIComponent(id)}${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(partial)
    });
    if (res.ok) {
      const json = await res.json();
      return json.data || local;
    }
  } catch {}
  return local;
}

export async function fetchRelationships(projectId?: string): Promise<RelationshipEdgeData[]> {
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/relationships${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch {
    return db.getAllRelationships(projectId);
  }
}

export async function fetchSources(projectId?: string): Promise<SourceRecord[]> {
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/sources${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch {
    return db.getAllSources(projectId);
  }
}

// --- NODE CREATION & DELETION API ---
export async function createNodeApi(node: EducationNode, projectId?: string): Promise<EducationNode> {
  const local = db.createNode(node, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/nodes${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(node)
    });
    if (res.ok) {
      const json = await res.json();
      return json.data || local;
    }
  } catch {}
  return local;
}

export async function deleteNodeApi(id: string, projectId?: string): Promise<boolean> {
  const local = db.deleteNode(id, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/nodes/${encodeURIComponent(id)}${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, { method: 'DELETE' });
    if (res.ok) return true;
  } catch {}
  return local;
}

// --- RELATIONSHIP / ARROW CRUD API ---
export async function createRelationshipApi(
  rel: RelationshipEdgeData,
  projectId?: string
): Promise<RelationshipEdgeData> {
  const local = db.createRelationship(rel, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/relationships${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rel)
    });
    if (res.ok) {
      const json = await res.json();
      return json.data || local;
    }
  } catch {}
  return local;
}

export async function updateRelationshipApi(
  id: string,
  partial: Partial<RelationshipEdgeData>,
  projectId?: string
): Promise<RelationshipEdgeData> {
  const local = db.updateRelationship(id, partial, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/relationships/${encodeURIComponent(id)}${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(partial)
    });
    if (res.ok) {
      const json = await res.json();
      return json.data || local;
    }
  } catch {}
  return local;
}

export async function deleteRelationshipApi(id: string, projectId?: string): Promise<boolean> {
  const local = db.deleteRelationship(id, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/relationships/${encodeURIComponent(id)}${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, { method: 'DELETE' });
    if (res.ok) return true;
  } catch {}
  return local;
}

// --- SECTION CRUD API ---
export async function fetchSections(projectId?: string): Promise<SectionMeta[]> {
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/sections${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch {
    return db.getSectionMetas(projectId);
  }
}

export async function createSectionApi(sec: SectionMeta, projectId?: string): Promise<SectionMeta> {
  const local = db.createSection(sec, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/sections${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sec)
    });
    if (res.ok) {
      const json = await res.json();
      return json.data || local;
    }
  } catch {}
  return local;
}

export async function updateSectionApi(
  id: string,
  partial: Partial<SectionMeta>,
  projectId?: string
): Promise<SectionMeta> {
  const local = db.updateSection(id, partial, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/sections/${encodeURIComponent(id)}${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(partial)
    });
    if (res.ok) {
      const json = await res.json();
      return json.data || local;
    }
  } catch {}
  return local;
}

export async function deleteSectionApi(id: string, projectId?: string): Promise<boolean> {
  const local = db.deleteSection(id, projectId);
  try {
    const params = new URLSearchParams();
    if (projectId) params.set('projectId', projectId);
    const url = `${API_BASE}/sections/${encodeURIComponent(id)}${params.toString() ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, { method: 'DELETE' });
    if (res.ok) return true;
  } catch {}
  return local;
}
