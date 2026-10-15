import { useState } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { SectionMeta } from '../../types';
import { X, Plus, Layers, Edit2, Trash2, Check, AlertTriangle } from 'lucide-react';

export function SectionManagerModal() {
  const {
    activeModal,
    closeModal,
    sections,
    addSection,
    updateSection,
    deleteSection,
    nodes
  } = useWhiteboardStore();

  const [isCreating, setIsCreating] = useState(false);
  const [newNumber, setNewNumber] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [newSummary, setNewSummary] = useState('');

  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editSubtitle, setEditSubtitle] = useState('');

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  if (activeModal !== 'add-section') return null;

  const handleStartCreate = () => {
    const nextNum = (sections.length + 1).toString().padStart(2, '0');
    setNewNumber(nextNum);
    setNewTitle('');
    setNewSubtitle('');
    setNewSummary('');
    setIsCreating(true);
    setEditingSectionId(null);
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const id = `SEC-${newNumber.padStart(2, '0')}`;
    const newSec: SectionMeta = {
      id,
      number: newNumber.padStart(2, '0'),
      title: newTitle.trim(),
      subtitle: newSubtitle.trim() || 'Custom architectural governance section',
      summary: newSummary.trim() || 'Custom section definition',
      iconName: 'Layers',
      expectedSubsections: [],
      expectedAuthorities: []
    };

    await addSection(newSec);
    setIsCreating(false);
  };

  const handleStartEdit = (sec: SectionMeta) => {
    setEditingSectionId(sec.id);
    setEditTitle(sec.title);
    setEditSubtitle(sec.subtitle);
  };

  const handleSaveEdit = async (secId: string) => {
    if (!editTitle.trim()) return;
    await updateSection(secId, {
      title: editTitle.trim(),
      subtitle: editSubtitle.trim()
    });
    setEditingSectionId(null);
  };

  const handleDelete = async (secId: string) => {
    await deleteSection(secId);
    setDeleteConfirmId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Manage Sections ({sections.length})</h3>
              <p className="text-[11px] text-slate-500">
                Create new architectural sections, rename titles, or remove custom sections.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isCreating && (
              <button
                onClick={handleStartCreate}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Section</span>
              </button>
            )}
            <button
              onClick={closeModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
          {/* Creation Form */}
          {isCreating && (
            <form onSubmit={handleCreateSubmit} className="bg-emerald-50/70 border border-emerald-300 rounded-xl p-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-950 uppercase tracking-wider text-[11px]">
                  New Section Form
                </span>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="text-[11px] text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-0.5">Number</label>
                  <input
                    type="text"
                    required
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2 py-1 bg-white font-mono text-xs"
                  />
                </div>
                <div className="col-span-3">
                  <label className="font-bold text-slate-700 block mb-0.5">Section Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vocational & Skill Training Ecosystem"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2 py-1 bg-white text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-0.5">Subtitle / Focus Area</label>
                <input
                  type="text"
                  placeholder="e.g. NCVET, Apprenticeship councils, and ITI regulatory oversight"
                  value={newSubtitle}
                  onChange={(e) => setNewSubtitle(e.target.value)}
                  className="w-full border border-slate-300 rounded px-2 py-1 bg-white text-xs text-slate-800"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-emerald-200">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 rounded text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1 px-3 py-1 rounded bg-emerald-800 hover:bg-emerald-700 text-amber-300 text-xs font-bold shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Section</span>
                </button>
              </div>
            </form>
          )}

          {/* Sections List */}
          <div className="space-y-2">
            {sections.map((sec) => {
              const nodeCount = nodes.filter((n) => n.sectionId === sec.id).length;
              const isEditing = editingSectionId === sec.id;
              const isConfirmingDelete = deleteConfirmId === sec.id;

              return (
                <div
                  key={sec.id}
                  className="p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all flex items-start justify-between gap-3"
                >
                  {isEditing ? (
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-emerald-800 text-xs">
                          {sec.number}
                        </span>
                        <input
                          type="text"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="flex-1 border border-emerald-600 rounded px-2 py-1 text-xs font-bold bg-white"
                        />
                        <button
                          onClick={() => handleSaveEdit(sec.id)}
                          className="px-2 py-1 rounded bg-emerald-800 text-amber-300 font-bold text-xs"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingSectionId(null)}
                          className="px-2 py-1 rounded bg-slate-200 text-slate-700 text-xs font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                      <input
                        type="text"
                        value={editSubtitle}
                        onChange={(e) => setEditSubtitle(e.target.value)}
                        placeholder="Subtitle"
                        className="w-full border border-slate-300 rounded px-2 py-0.5 text-xs text-slate-700"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-emerald-900 bg-emerald-100 px-1.5 py-0.2 rounded text-[10px]">
                            {sec.number}
                          </span>
                          <h4 className="font-bold text-slate-900 text-xs">{sec.title}</h4>
                          <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                            {nodeCount} {nodeCount === 1 ? 'node' : 'nodes'}
                          </span>
                        </div>
                        {sec.subtitle && (
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {sec.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => handleStartEdit(sec)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                          title="Rename / Edit subtitle"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => setDeleteConfirmId(sec.id)}
                          className="p-1 rounded text-rose-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                          title="Delete section"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  )}

                  {/* Delete Confirmation */}
                  {isConfirmingDelete && (
                    <div className="absolute inset-x-4 bg-rose-50 border border-rose-300 rounded-lg p-2.5 flex items-center justify-between gap-2 shadow-md">
                      <div className="flex items-center gap-1.5 text-rose-900 text-[11px] font-semibold">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                        <span>Delete section &ldquo;{sec.title}&rdquo;? Nodes in this section will remain on canvas.</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => handleDelete(sec.id)}
                          className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] cursor-pointer"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold text-[10px] cursor-pointer"
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

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={closeModal}
            className="px-3.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
