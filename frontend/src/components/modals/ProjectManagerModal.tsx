import { useState, useEffect } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import {
  X,
  FolderPlus,
  Layers,
  Copy,
  Trash2,
  Check,
  Edit2,
  FolderCheck,
  Calendar,
  AlertTriangle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function ProjectManagerModal() {
  const {
    activeModal,
    closeModal,
    projects,
    currentProjectId,
    loadProjects,
    switchProject,
    createProject,
    updateProjectMetadata,
    deleteProject,
    isProjectsLoading
  } = useWhiteboardStore();

  const [isCreating, setIsCreating] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newTemplate, setNewTemplate] = useState<'education-governance' | 'empty' | 'duplicate'>('education-governance');

  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    if (activeModal === 'projects') {
      loadProjects();
      setIsCreating(false);
      setEditingProjectId(null);
      setDeleteConfirmId(null);
    }
  }, [activeModal]);

  if (activeModal !== 'projects') return null;

  const handleStartCreate = () => {
    setNewProjectName('');
    setNewProjectDesc('');
    setNewTemplate('education-governance');
    setIsCreating(true);
    setEditingProjectId(null);
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    try {
      await createProject({
        name: newProjectName.trim(),
        description: newProjectDesc.trim(),
        template: newTemplate,
        duplicateFromId: newTemplate === 'duplicate' ? currentProjectId : undefined
      });
      setIsCreating(false);
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleStartEdit = (projId: string, name: string, desc: string = '') => {
    setEditingProjectId(projId);
    setEditName(name);
    setEditDesc(desc);
  };

  const handleSaveEdit = async (projId: string) => {
    if (!editName.trim()) return;
    await updateProjectMetadata(projId, {
      name: editName.trim(),
      description: editDesc.trim()
    });
    setEditingProjectId(null);
  };

  const handleSwitch = async (projId: string) => {
    if (projId === currentProjectId) {
      closeModal();
      return;
    }
    await switchProject(projId);
    closeModal();
  };

  const handleDeleteConfirm = async (projId: string) => {
    await deleteProject(projId);
    setDeleteConfirmId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 leading-tight flex items-center gap-2">
                Diagrams &amp; Projects Manager
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Switch workspaces, create new diagram models, or duplicate existing governance trees.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isCreating && (
              <button
                onClick={handleStartCreate}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                <FolderPlus className="w-3.5 h-3.5" />
                <span>New Project / Diagram</span>
              </button>
            )}
            <button
              onClick={closeModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* New Project Inline Creation Card */}
          {isCreating && (
            <form
              onSubmit={handleCreateSubmit}
              className="bg-emerald-50/70 border-2 border-emerald-600/60 rounded-xl p-4.5 space-y-3.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  Create New Diagram / Project Workspace
                </h3>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                  Project / Diagram Name *
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="e.g. Higher Education Qualifications Hierarchy, State Board Lifecycle"
                  className="w-full text-xs font-semibold border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                  Description / Purpose (Optional)
                </label>
                <input
                  type="text"
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  placeholder="e.g. Visual mapping of universities, colleges, degrees, and accreditation flows"
                  className="w-full text-xs border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-slate-900 focus:outline-hidden"
                />
              </div>

              {/* Template Selection */}
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1.5">
                  Starting Template:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {/* Template Option 1 */}
                  <label
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all flex flex-col justify-between ${
                      newTemplate === 'education-governance'
                        ? 'border-emerald-600 bg-white ring-2 ring-emerald-600/20'
                        : 'border-slate-200 bg-white/60 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-950">Canonical Governance Template</span>
                      <input
                        type="radio"
                        name="template"
                        checked={newTemplate === 'education-governance'}
                        onChange={() => setNewTemplate('education-governance')}
                        className="text-emerald-700"
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Pre-populated with 144 statutory authorities, 148 governance relationships, and all 16 sections.
                    </p>
                  </label>

                  {/* Template Option 2 */}
                  <label
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all flex flex-col justify-between ${
                      newTemplate === 'duplicate'
                        ? 'border-emerald-600 bg-white ring-2 ring-emerald-600/20'
                        : 'border-slate-200 bg-white/60 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-950">Clone Current Project</span>
                      <input
                        type="radio"
                        name="template"
                        checked={newTemplate === 'duplicate'}
                        onChange={() => setNewTemplate('duplicate')}
                        className="text-emerald-700"
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Exact copy of current active whiteboard including all custom modifications and additions.
                    </p>
                  </label>

                  {/* Template Option 3 */}
                  <label
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all flex flex-col justify-between ${
                      newTemplate === 'empty'
                        ? 'border-emerald-600 bg-white ring-2 ring-emerald-600/20'
                        : 'border-slate-200 bg-white/60 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-950">Blank Diagram</span>
                      <input
                        type="radio"
                        name="template"
                        checked={newTemplate === 'empty'}
                        onChange={() => setNewTemplate('empty')}
                        className="text-emerald-700"
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      A clean canvas with a single root authority node, ready to design any governance system from scratch.
                    </p>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-emerald-200/80">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-200 font-semibold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newProjectName.trim() || isProjectsLoading}
                  className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Create &amp; Open Project</span>
                </button>
              </div>
            </form>
          )}

          {/* Existing Projects List */}
          <div className="space-y-3">
            {projects.map((proj) => {
              const isActive = proj.id === currentProjectId;
              const isEditingThis = editingProjectId === proj.id;
              const isDeletingThis = deleteConfirmId === proj.id;

              return (
                <div
                  key={proj.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'border-emerald-600 bg-emerald-50/40 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xs'
                  }`}
                >
                  {isEditingThis ? (
                    /* Inline Edit Mode */
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="flex-1 text-sm font-bold border border-emerald-600 rounded-lg px-2.5 py-1 bg-white text-slate-900 focus:outline-hidden"
                        />
                        <button
                          onClick={() => handleSaveEdit(proj.id)}
                          className="px-3 py-1 rounded-lg bg-emerald-800 text-amber-300 font-bold text-xs cursor-pointer"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProjectId(null)}
                          className="px-2.5 py-1 rounded-lg bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                      <input
                        type="text"
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                        placeholder="Description"
                        className="w-full text-xs border border-slate-300 rounded px-2 py-1 bg-white text-slate-800 focus:outline-hidden"
                      />
                    </div>
                  ) : (
                    /* Normal Project Card View */
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="text-sm font-bold text-slate-900">{proj.name}</h4>
                          {isActive && (
                            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                              <FolderCheck className="w-3 h-3 text-emerald-700" />
                              Active Workspace
                            </span>
                          )}
                          {proj.isDefault && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                              Primary Template
                            </span>
                          )}
                        </div>

                        {proj.description && (
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {proj.description}
                          </p>
                        )}

                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-2 font-mono flex-wrap">
                          <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                            <b>{proj.nodeCount}</b> Authorities / Nodes
                          </span>
                          <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                            <b>{proj.relationshipCount}</b> Relationships
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <Calendar className="w-3 h-3" />
                            {proj.updatedAt ? new Date(proj.updatedAt).toLocaleDateString() : 'Active'}
                          </span>
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {!isActive ? (
                          <button
                            onClick={() => handleSwitch(proj.id)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs shadow-xs transition-colors cursor-pointer"
                          >
                            <span>Open Diagram</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : (
                          <span className="text-xs font-bold text-emerald-800 px-2.5 py-1 rounded-lg bg-emerald-100/70">
                            Current
                          </span>
                        )}

                        {/* Duplicate Button */}
                        <button
                          onClick={() =>
                            createProject({
                              name: `${proj.name} (Copy)`,
                              description: proj.description,
                              template: 'duplicate',
                              duplicateFromId: proj.id
                            })
                          }
                          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                          title="Duplicate this diagram"
                        >
                          <Copy className="w-4 h-4" />
                        </button>

                        {/* Edit Info Button */}
                        <button
                          onClick={() => handleStartEdit(proj.id, proj.name, proj.description)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                          title="Rename / Edit metadata"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        {/* Delete Button */}
                        {projects.length > 1 && (
                          <button
                            onClick={() => setDeleteConfirmId(proj.id)}
                            className="p-1.5 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Delete this project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Delete Confirmation Warning */}
                  {isDeletingThis && (
                    <div className="mt-3 p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-between gap-3 animate-in fade-in">
                      <div className="flex items-center gap-2 text-rose-900 text-xs font-semibold">
                        <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        <span>Are you sure you want to delete &ldquo;{proj.name}&rdquo;? This action cannot be undone.</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => handleDeleteConfirm(proj.id)}
                          className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                        >
                          Confirm Delete
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <p>
            All diagrams share the same verified governance canvas engine, sizing controls, in-drawer editing, and high-resolution PDF print capabilities.
          </p>
          <button
            onClick={closeModal}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
