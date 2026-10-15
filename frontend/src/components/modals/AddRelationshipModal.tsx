import { useState, useEffect } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { RelationshipEdgeData, RelationshipType } from '../../types';
import { X, Route, Check } from 'lucide-react';

const RELATIONSHIP_TYPES: { type: RelationshipType; label: string }[] = [
  { type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Constitutionally Empowers' },
  { type: 'LEGISLATES', label: 'Legislates / Enacts Statute' },
  { type: 'ADMINISTRATIVELY_OVERSEES', label: 'Administratively Oversees' },
  { type: 'ESTABLISHED_BY_LAW', label: 'Established By Law' },
  { type: 'SETS_STANDARDS', label: 'Sets Minimum Standards' },
  { type: 'CONDUCTS_EXAM', label: 'Conducts Entrance Examination' },
  { type: 'ADMINISTERS_ADMISSION', label: 'Administers Centralised Counselling' },
  { type: 'AWARDS_QUALIFICATION', label: 'Awards Degree / Diploma' },
  { type: 'RECOGNISES_APPROVES', label: 'Recognises / Approves Institution' },
  { type: 'ACCREDITS', label: 'Accredits Quality Grading' },
  { type: 'RANKS', label: 'Ranks Institutional Metric' },
  { type: 'FUNDS', label: 'Funds Public Grants' },
  { type: 'COORDINATES', label: 'Coordinates Advisory Function' },
  { type: 'ADVISES', label: 'Advises Union / State Council' },
  { type: 'AUDITS', label: 'Audits Public Expenditure (CAG)' },
  { type: 'REVIEWS_APPEALS', label: 'Reviews Statutory Appeals' },
  { type: 'JUDICIALLY_REVIEWS', label: 'Judicially Reviews (Writ Petitions)' },
  { type: 'IMPLEMENTS', label: 'Implements Operational Curriculum' },
  { type: 'REPORTS_TO', label: 'Reports to Parent Department' },
  { type: 'SUBJECT_TO', label: 'Subject to Legal Boundaries' },
  { type: 'CONNECTS_TO_BOARD_2', label: 'Cross-Link: Board 2 (Qualifications)' },
  { type: 'CONNECTS_TO_BOARD_3', label: 'Cross-Link: Board 3 (Exams & Career)' }
];

export function AddRelationshipModal() {
  const {
    activeModal,
    closeModal,
    nodes,
    addRelationship,
    relationshipDraft
  } = useWhiteboardStore();

  const [sourceId, setSourceId] = useState('');
  const [targetId, setTargetId] = useState('');
  const [type, setType] = useState<RelationshipType>('ADMINISTRATIVELY_OVERSEES');
  const [label, setLabel] = useState('');
  const [isAdvisory, setIsAdvisory] = useState(false);
  const [isConditional, setIsConditional] = useState(false);

  useEffect(() => {
    if (activeModal === 'add-relationship') {
      const defaultSource = relationshipDraft.sourceNodeId || nodes[0]?.id || '';
      const defaultTarget = relationshipDraft.targetNodeId || nodes[1]?.id || nodes[0]?.id || '';
      setSourceId(defaultSource);
      setTargetId(defaultTarget);
      setType('ADMINISTRATIVELY_OVERSEES');
      setLabel('Supervises statutory operations');
      setIsAdvisory(false);
      setIsConditional(false);
    }
  }, [activeModal, relationshipDraft, nodes]);

  if (activeModal !== 'add-relationship') return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sourceId || !targetId || sourceId === targetId) return;

    const relId = `REL-${Date.now().toString().slice(-6)}`;
    const newRel: RelationshipEdgeData = {
      id: relId,
      sourceNodeId: sourceId,
      targetNodeId: targetId,
      type,
      label: label.trim() || type.replace(/_/g, ' '),
      isAdvisory,
      isConditional,
      verificationStatus: 'verified'
    };

    await addRelationship(newRel);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shadow-xs">
              <Route className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Connect New Arrow / Relationship</h3>
              <p className="text-[11px] text-slate-500">
                Create a directed governance arrow or foreign-key linkage between two nodes.
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {/* Source Node Selection */}
          <div>
            <label className="font-bold text-slate-700 block mb-1">Source Node (Origin) *</label>
            <select
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
              className="w-full text-xs font-semibold rounded-lg border border-slate-300 p-2 bg-white text-slate-900"
            >
              {nodes.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.title} ({n.id}) • Sec {n.sectionNumber}
                </option>
              ))}
            </select>
          </div>

          {/* Target Node Selection */}
          <div>
            <label className="font-bold text-slate-700 block mb-1">Target Node (Destination) *</label>
            <select
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              className="w-full text-xs font-semibold rounded-lg border border-slate-300 p-2 bg-white text-slate-900"
            >
              {nodes.map((n) => (
                <option key={n.id} value={n.id} disabled={n.id === sourceId}>
                  {n.title} ({n.id}) • Sec {n.sectionNumber}
                </option>
              ))}
            </select>
          </div>

          {/* Relationship Type Selection */}
          <div>
            <label className="font-bold text-slate-700 block mb-1">Relationship / Arrow Type *</label>
            <select
              value={type}
              onChange={(e) => {
                const newT = e.target.value as RelationshipType;
                setType(newT);
                const matching = RELATIONSHIP_TYPES.find((r) => r.type === newT);
                if (matching) setLabel(matching.label);
              }}
              className="w-full text-xs font-semibold rounded-lg border border-slate-300 p-2 bg-white text-emerald-950 font-mono"
            >
              {RELATIONSHIP_TYPES.map((rt) => (
                <option key={rt.type} value={rt.type}>
                  {rt.type} — {rt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Descriptive Edge Label */}
          <div>
            <label className="font-bold text-slate-700 block mb-1">Arrow Label (Rendered on Canvas) *</label>
            <input
              type="text"
              required
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Conducts NEET-UG / JEE Main, Decides second appeals under RTI"
              className="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 bg-white"
            />
          </div>

          {/* Options */}
          <div className="flex items-center gap-4 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isAdvisory}
                onChange={(e) => setIsAdvisory(e.target.checked)}
                className="rounded text-emerald-700"
              />
              <span className="text-slate-700">Dashed Connector (Advisory / Non-binding)</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isConditional}
                onChange={(e) => setIsConditional(e.target.checked)}
                className="rounded text-emerald-700"
              />
              <span className="text-slate-700">Conditional Link</span>
            </label>
          </div>

          {/* Footer Controls */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 font-semibold text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!sourceId || !targetId || sourceId === targetId}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-50"
            >
              <Check className="w-4 h-4" />
              <span>Connect Arrow</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
