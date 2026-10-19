import { useState, useEffect } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { NODE_MAP, SOURCE_MAP } from '../../data/content-index';
import { EducationNode, VerificationStatus, GovernmentLevel } from '../../types';
import { getTranslatedNodeTitle, getTranslatedNodeSummary, getTranslatedLevel, getTranslatedGovernanceValue } from '../../services/translationService';
import {
  X,
  Maximize2,
  Minimize2,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  Landmark,
  Scale,
  Edit3,
  Check,
  Plus,
  Trash2,
  FileText,
  Building2,
  Workflow,
  AlertTriangle,
  Crown,
  Edit2,
  GraduationCap,
  Compass,
  Briefcase,
  ArrowUpRight,
  Cpu,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { COURSE_PATHWAYS_MAP, CoursePathwayItem } from '../../data/pathwayMatrix';

export function DetailPanel() {
  const {
    selectedNodeId,
    selectNode,
    isDetailPanelOpen,
    isDetailPanelExpanded,
    toggleDetailPanel,
    toggleDetailPanelExpanded,
    relationships,
    nodes,
    updateNode,
    deleteNode,
    deleteRelationship,
    updateRelationship,
    openModal,
    setRelationshipDraft,
    currentLanguage,
    translationScope
  } = useWhiteboardStore();

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<Partial<EducationNode>>({});
  const [showDeleteNodeConfirm, setShowDeleteNodeConfirm] = useState(false);
  const [editingRelId, setEditingRelId] = useState<string | null>(null);
  const [editingRelLabel, setEditingRelLabel] = useState('');

  const node = nodes.find((n) => n.id === selectedNodeId) || (selectedNodeId ? NODE_MAP.get(selectedNodeId) : undefined);

  // Sync draft whenever selected node changes or editing is toggled
  useEffect(() => {
    if (node) {
      setDraft({
        ...node,
        powers: [...(node.powers || [])],
        limitations: [...(node.limitations || [])],
        establishingLaw: [...(node.establishingLaw || [])],
        mandate: [...(node.mandate || [])],
        inputs: [...(node.inputs || [])],
        outputs: [...(node.outputs || [])]
      });
      setIsEditing(false);
    }
  }, [node?.id]);

  if (!isDetailPanelOpen || !selectedNodeId || !node) return null;

  // Find incoming and outgoing edges for this node
  const outgoingEdges = relationships.filter((e) => e.sourceNodeId === node.id);
  const incomingEdges = relationships.filter((e) => e.targetNodeId === node.id);

  const handleStartEdit = () => {
    setDraft({
      ...node,
      powers: [...(node.powers || [])],
      limitations: [...(node.limitations || [])],
      establishingLaw: [...(node.establishingLaw || [])],
      mandate: [...(node.mandate || [])],
      inputs: [...(node.inputs || [])],
      outputs: [...(node.outputs || [])]
    });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setDraft({ ...node });
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    updateNode(node.id, draft);
    setIsEditing(false);
  };

  // Helper functions for modifying array fields in draft
  const updateArrayItem = (key: 'powers' | 'limitations' | 'establishingLaw' | 'mandate' | 'inputs' | 'outputs', index: number, value: string) => {
    setDraft((prev) => {
      const arr = [...(prev[key] || [])];
      arr[index] = value;
      return { ...prev, [key]: arr };
    });
  };

  const removeArrayItem = (key: 'powers' | 'limitations' | 'establishingLaw' | 'mandate' | 'inputs' | 'outputs', index: number) => {
    setDraft((prev) => {
      const arr = [...(prev[key] || [])];
      arr.splice(index, 1);
      return { ...prev, [key]: arr };
    });
  };

  const addArrayItem = (key: 'powers' | 'limitations' | 'establishingLaw' | 'mandate' | 'inputs' | 'outputs', placeholder = '') => {
    setDraft((prev) => {
      const arr = [...(prev[key] || [])];
      arr.push(placeholder);
      return { ...prev, [key]: arr };
    });
  };

  return (
    <aside
      className={`fixed top-0 sm:top-14 right-0 bottom-0 bg-white border-l border-slate-200 shadow-2xl z-50 sm:z-30 flex flex-col transition-all duration-300 ${
        isDetailPanelExpanded ? 'w-full md:w-[760px]' : 'w-full md:w-[480px]'
      }`}
    >
      {/* Panel Header */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {isEditing ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-900 text-white">
                  {node.id}
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase">
                  Section {node.sectionNumber}
                </span>
                {/* Government Level Select */}
                <select
                  value={draft.level || node.level}
                  onChange={(e) => setDraft((d) => ({ ...d, level: e.target.value as GovernmentLevel }))}
                  className="text-[10px] font-semibold rounded border border-slate-300 bg-white px-2 py-0.5 text-slate-800"
                >
                  <option value="constitutional">Constitutional</option>
                  <option value="union">Union</option>
                  <option value="state">State</option>
                  <option value="union-territory">Union Territory</option>
                  <option value="district">District</option>
                  <option value="local">Local</option>
                  <option value="institutional">Institutional</option>
                </select>
                {/* Verification Status Select */}
                <select
                  value={draft.verificationStatus || node.verificationStatus}
                  onChange={(e) => setDraft((d) => ({ ...d, verificationStatus: e.target.value as VerificationStatus }))}
                  className="text-[10px] font-semibold rounded border border-slate-300 bg-white px-2 py-0.5 text-slate-800"
                >
                  <option value="verified">Verified</option>
                  <option value="partially-verified">Partially Verified</option>
                  <option value="requires-verification">Needs Verification</option>
                  <option value="time-sensitive">Time Sensitive</option>
                  <option value="superseded">Superseded</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-0.5">
                  Authority Official Title
                </label>
                <input
                  type="text"
                  value={draft.title ?? node.title}
                  onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
                  className="w-full text-sm font-bold border border-emerald-600 rounded-lg px-2.5 py-1 bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-0.5">
                  Abbreviation / Acronym
                </label>
                <input
                  type="text"
                  value={draft.abbreviation ?? (node.abbreviation || '')}
                  onChange={(e) => setDraft((d) => ({ ...d, abbreviation: e.target.value }))}
                  placeholder="e.g. UGC, NTA, High Courts"
                  className="w-full text-xs font-mono font-bold border border-slate-300 rounded-lg px-2 py-1 bg-white text-emerald-900 focus:outline-hidden"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-900 text-white">
                  {node.id}
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Section {node.sectionNumber} • {getTranslatedLevel(node.level, currentLanguage)}
                </span>
                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                    node.verificationStatus === 'verified'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {node.verificationStatus}
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 leading-snug">
                {getTranslatedNodeTitle(node, currentLanguage, translationScope)}
              </h2>
              {node.abbreviation && (
                <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                  Abbreviation: {node.abbreviation}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveEdit}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs shadow-xs transition-colors cursor-pointer"
                title="Save changes to whiteboard"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancelEdit}
                className="px-2.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                title="Discard edits"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleStartEdit}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs transition-colors cursor-pointer shadow-2xs"
              title="Edit all properties of this authority"
            >
              <Edit3 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Edit Details</span>
            </button>
          )}

          <button
            onClick={toggleDetailPanelExpanded}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            title={isDetailPanelExpanded ? 'Standard view' : 'Wide reading view'}
          >
            {isDetailPanelExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => toggleDetailPanel(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            title="Close details"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-slate-800 text-xs">
        {/* Mandate & Executive Summary */}
        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-3.5">
          <h3 className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-1.5 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
            Overview &amp; Summary
          </h3>
          {isEditing ? (
            <div className="space-y-2 mt-2">
              <div>
                <label className="text-[10px] font-bold text-emerald-950 uppercase block mb-0.5">
                  Executive Summary / Mandate Text:
                </label>
                <textarea
                  value={draft.summary ?? node.summary}
                  onChange={(e) => setDraft((d) => ({ ...d, summary: e.target.value }))}
                  rows={4}
                  className="w-full text-xs rounded-lg border border-emerald-400 bg-white p-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-emerald-950 uppercase block mb-0.5">
                  Legal Status (e.g. Constitutional Court of Record, Statutory Body):
                </label>
                <input
                  type="text"
                  value={draft.legalStatus ?? (node.legalStatus || '')}
                  onChange={(e) => setDraft((d) => ({ ...d, legalStatus: e.target.value }))}
                  className="w-full text-xs font-mono rounded-lg border border-emerald-400 bg-white px-2 py-1 text-slate-800 focus:outline-hidden"
                />
              </div>
            </div>
          ) : (
            <>
              <p className="text-slate-700 leading-relaxed font-normal">
                {getTranslatedNodeSummary(node, currentLanguage, translationScope)}
              </p>
              {node.legalStatus && (
                <div className="mt-2.5 pt-2 border-t border-emerald-200/60 flex items-center gap-1.5 text-[11px]">
                  <span className="font-semibold text-emerald-900">Legal Status:</span>
                  <span className="text-emerald-800 font-mono text-[10px]">{node.legalStatus}</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Domain-Specific Uncommon Section: Examination & Career Lifecycle (v2) */}
        {(node.examDetails || (isEditing && draft.examDetails)) && (
          <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-3.5 space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-sky-950 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-700" />
              Examination, Timeline & Career Lifecycle
            </h3>
            {isEditing ? (
              <div className="grid grid-cols-1 gap-2 pt-1">
                <div>
                  <label className="text-[10px] font-bold text-sky-900 block mb-0.5">Conducting Examination Agency:</label>
                  <input
                    type="text"
                    value={draft.examDetails?.examAgency ?? node.examDetails?.examAgency ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, examDetails: { ...(d.examDetails || node.examDetails), examAgency: e.target.value } }))}
                    className="w-full text-xs rounded border border-sky-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. National Testing Agency (NTA), UPSC"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-sky-900 block mb-0.5">Eligibility Criteria:</label>
                  <textarea
                    rows={2}
                    value={draft.examDetails?.eligibilityCriteria ?? node.examDetails?.eligibilityCriteria ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, examDetails: { ...(d.examDetails || node.examDetails), eligibilityCriteria: e.target.value } }))}
                    className="w-full text-xs rounded border border-sky-300 p-1.5 bg-white text-slate-800"
                    placeholder="Educational qualification, age limit, required subjects, attempts"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-sky-900 block mb-0.5">Application & Exam Timelines:</label>
                  <input
                    type="text"
                    value={draft.examDetails?.applicationWindow ?? node.examDetails?.applicationWindow ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, examDetails: { ...(d.examDetails || node.examDetails), applicationWindow: e.target.value } }))}
                    className="w-full text-xs rounded border border-sky-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. Nov-Jan application, April exam"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-sky-900 block mb-0.5">Result & Selection Outcome:</label>
                  <input
                    type="text"
                    value={draft.examDetails?.outcome ?? node.examDetails?.outcome ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, examDetails: { ...(d.examDetails || node.examDetails), outcome: e.target.value } }))}
                    className="w-full text-xs rounded border border-sky-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. All India Rank, Qualifying Cutoff, Merit List"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-sky-900 block mb-0.5">Counselling & Allocation Authority:</label>
                  <input
                    type="text"
                    value={draft.examDetails?.counsellingBody ?? node.examDetails?.counsellingBody ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, examDetails: { ...(d.examDetails || node.examDetails), counsellingBody: e.target.value } }))}
                    className="w-full text-xs rounded border border-sky-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. Joint Seat Allocation Authority (JoSAA), MCC"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-sky-900 block mb-0.5">Next Opportunity / Career Pathway:</label>
                  <input
                    type="text"
                    value={draft.examDetails?.nextCareerStage ?? node.examDetails?.nextCareerStage ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, examDetails: { ...(d.examDetails || node.examDetails), nextCareerStage: e.target.value } }))}
                    className="w-full text-xs rounded border border-sky-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. B.Tech in IITs/NITs or Civil Services Foundation Course"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-1.5 text-xs text-slate-700">
                {node.examDetails?.examAgency && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-sky-950 w-28 flex-shrink-0">Agency:</span>
                    <span>{getTranslatedGovernanceValue(node.examDetails.examAgency, currentLanguage)}</span>
                  </div>
                )}
                {node.examDetails?.eligibilityCriteria && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-sky-950 w-28 flex-shrink-0">Eligibility:</span>
                    <span className="text-slate-600">{getTranslatedGovernanceValue(node.examDetails.eligibilityCriteria, currentLanguage)}</span>
                  </div>
                )}
                {node.examDetails?.applicationWindow && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-sky-950 w-28 flex-shrink-0">Timeline:</span>
                    <span className="text-slate-600">{getTranslatedGovernanceValue(node.examDetails.applicationWindow, currentLanguage)}</span>
                  </div>
                )}
                {node.examDetails?.examStages && node.examDetails.examStages.length > 0 && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-sky-950 w-28 flex-shrink-0">Stages:</span>
                    <div className="flex flex-wrap gap-1">
                      {node.examDetails.examStages.map((stage, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white text-sky-800 border border-sky-200 text-[10px]">
                          {idx + 1}. {getTranslatedGovernanceValue(stage, currentLanguage)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {node.examDetails?.outcome && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-sky-950 w-28 flex-shrink-0">Outcome:</span>
                    <span className="text-slate-600">{getTranslatedGovernanceValue(node.examDetails.outcome, currentLanguage)}</span>
                  </div>
                )}
                {node.examDetails?.counsellingBody && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-sky-950 w-28 flex-shrink-0">Counselling:</span>
                    <span className="text-slate-600">{getTranslatedGovernanceValue(node.examDetails.counsellingBody, currentLanguage)}</span>
                  </div>
                )}
                {node.examDetails?.nextCareerStage && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-sky-950 w-28 flex-shrink-0">Next Stage:</span>
                    <span className="text-slate-600">{getTranslatedGovernanceValue(node.examDetails.nextCareerStage, currentLanguage)}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Domain-Specific Uncommon Section: Institutions & Qualifications (v3) */}
        {(node.institutionDetails || isEditing) && (
          <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3.5 space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-indigo-700" />
              Institution, School Boards, Programmes &amp; Accreditations
            </h3>

            {isEditing ? (
              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Career Hierarchy &amp; Promotion Ladder:</label>
                  <textarea
                    rows={4}
                    value={draft.institutionDetails?.careerValue ?? node.institutionDetails?.careerValue ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), careerValue: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-2 bg-white text-slate-800 leading-relaxed font-sans"
                    placeholder="e.g. Entry Cadre -> Sub-Divisional Officer (SDM) -> District Collector -> Joint Secretary -> Apex Secretary"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Institution / Board Type:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.institutionType ?? node.institutionDetails?.institutionType ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), institutionType: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. National School Board, Institute of National Importance (INI)"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Controlled / Governed By:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.controlledBy ?? node.institutionDetails?.controlledBy ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), controlledBy: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. Ministry of Education (MoE), State School Education Department"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Curriculum / Syllabus Authority:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.curriculumBody ?? node.institutionDetails?.curriculumBody ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), curriculumBody: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. NCERT (National Curriculum Framework), State SCERT, Senate"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Prerequisite Stream / Qualification:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.prerequisiteStream ?? node.institutionDetails?.prerequisiteStream ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), prerequisiteStream: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. Class 11-12 Science (PCM with min 75%), Class 10 Passed"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Examination &amp; Admission Timeline:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.examinationTimeline ?? node.institutionDetails?.examinationTimeline ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), examinationTimeline: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. Board Exams in Feb-March; Results May. Or Jan/Apr JEE -> June JoSAA"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Admission Route / Testing Agency:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.admissionRoute ?? node.institutionDetails?.admissionRoute ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), admissionRoute: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. JEE Main & Advanced via JoSAA, NEET-UG via MCC"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Programmes / Qualifications Conferred:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.programmesOffered ? draft.institutionDetails.programmesOffered.join(', ') : (node.institutionDetails?.programmesOffered?.join(', ') || '')}
                    onChange={(e) => {
                      const progs = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                      setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), programmesOffered: progs } }));
                    }}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. B.Tech, M.Tech, Ph.D. or Class 10 AISSE, Class 12 AISSCE"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Awarding Body / Certification Authority:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.awardingBody ?? node.institutionDetails?.awardingBody ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), awardingBody: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. Senate of IIT Bombay, CBSE Governing Body"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">Accreditation / Ranking / Equivalence:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.accreditation ?? node.institutionDetails?.accreditation ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), accreditation: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. NAAC A++, Washington Accord Tier-1, AIU Equivalence"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-indigo-900 block mb-0.5">NHEQF / Qualification Level:</label>
                  <input
                    type="text"
                    value={draft.institutionDetails?.nheqfLevel ?? node.institutionDetails?.nheqfLevel ?? ''}
                    onChange={(e) => setDraft((d) => ({ ...d, institutionDetails: { ...(d.institutionDetails || node.institutionDetails), nheqfLevel: e.target.value } }))}
                    className="w-full text-xs rounded border border-indigo-300 p-1.5 bg-white text-slate-800"
                    placeholder="e.g. NHEQF Level 4.5 - Level 8, or Secondary Foundation (Std 10)"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-1.5 text-xs text-slate-700">
                {node.institutionDetails?.institutionType && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Type:</span>
                    <span>{getTranslatedGovernanceValue(node.institutionDetails.institutionType, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.controlledBy && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Controlled by:</span>
                    <span>{getTranslatedGovernanceValue(node.institutionDetails.controlledBy, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.curriculumBody && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Curriculum Body:</span>
                    <span className="text-slate-800 font-medium">{getTranslatedGovernanceValue(node.institutionDetails.curriculumBody, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.prerequisiteStream && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Prerequisite Stream:</span>
                    <span className="text-emerald-800 font-medium">{getTranslatedGovernanceValue(node.institutionDetails.prerequisiteStream, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.examinationTimeline && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Exam Timeline:</span>
                    <span className="text-indigo-900 font-medium">{getTranslatedGovernanceValue(node.institutionDetails.examinationTimeline, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.admissionRoute && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Admission Route:</span>
                    <span>{getTranslatedGovernanceValue(node.institutionDetails.admissionRoute, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.programmesOffered && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Programmes:</span>
                    <span>{node.institutionDetails.programmesOffered.map((p) => getTranslatedGovernanceValue(p, currentLanguage)).join(', ')}</span>
                  </div>
                )}
                {node.institutionDetails?.awardingBody && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Awarding Body:</span>
                    <span>{getTranslatedGovernanceValue(node.institutionDetails.awardingBody, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.accreditation && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">Accreditation:</span>
                    <span>{getTranslatedGovernanceValue(node.institutionDetails.accreditation, currentLanguage)}</span>
                  </div>
                )}
                {node.institutionDetails?.nheqfLevel && (
                  <div className="flex items-start gap-1">
                    <span className="font-semibold text-indigo-950 w-28 flex-shrink-0">NHEQF Level:</span>
                    <span className="font-mono text-purple-900 font-semibold">{node.institutionDetails.nheqfLevel}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Constitutional & Democratic Governance Details */}
        {node.governanceDetails && (
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50/50 border border-purple-200/90 rounded-xl p-3.5 space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-purple-700" />
              Constitutional &amp; Democratic Hierarchy Specification
            </h3>
            <div className="space-y-1.5 text-xs text-slate-700">
              {node.governanceDetails.positionName && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-32 flex-shrink-0">Official Post:</span>
                  <span className="font-bold text-slate-900">{getTranslatedGovernanceValue(node.governanceDetails.positionName, currentLanguage)}</span>
                </div>
              )}
              {node.governanceDetails.cadreOrService && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-32 flex-shrink-0">Cadre / Service:</span>
                  <span className="font-bold text-rose-800 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">{getTranslatedGovernanceValue(node.governanceDetails.cadreOrService, currentLanguage)}</span>
                </div>
              )}
              {node.governanceDetails.constitutionalArticle && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-32 flex-shrink-0">Statute / Provision:</span>
                  <span className="font-mono text-purple-900 font-semibold">{node.governanceDetails.constitutionalArticle}</span>
                </div>
              )}
              {node.governanceDetails.electoralOrSelectionMethod && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-32 flex-shrink-0">Selection / Election:</span>
                  <span>{getTranslatedGovernanceValue(node.governanceDetails.electoralOrSelectionMethod, currentLanguage)}</span>
                </div>
              )}
              {node.governanceDetails.reportingTo && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-32 flex-shrink-0">Reports To:</span>
                  <span className="font-medium text-slate-900">{getTranslatedGovernanceValue(node.governanceDetails.reportingTo, currentLanguage)}</span>
                </div>
              )}
              {node.governanceDetails.geographicalJurisdiction && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-32 flex-shrink-0">Jurisdiction:</span>
                  <span>{getTranslatedGovernanceValue(node.governanceDetails.geographicalJurisdiction, currentLanguage)}</span>
                </div>
              )}
              {node.governanceDetails.tenure && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-32 flex-shrink-0">Tenure:</span>
                  <span>{getTranslatedGovernanceValue(node.governanceDetails.tenure, currentLanguage)}</span>
                </div>
              )}
              {node.governanceDetails.superiorAuthority && (
                <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                  <span className="font-bold text-amber-950 flex items-center gap-1 mb-1">
                    <Crown className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                    Superior Authority &amp; Influencing Power:
                  </span>
                  <span className="text-slate-800 font-medium leading-relaxed block">{getTranslatedGovernanceValue(node.governanceDetails.superiorAuthority, currentLanguage)}</span>
                </div>
              )}
              {node.governanceDetails.removalOrDeElectionMethod && (
                <div className="mt-2 bg-rose-50 border border-rose-200 rounded-lg p-2.5">
                  <span className="font-bold text-rose-950 flex items-center gap-1 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-700 flex-shrink-0" />
                    Removal / De-election Authority:
                  </span>
                  <span className="text-rose-950 font-medium leading-relaxed block">{getTranslatedGovernanceValue(node.governanceDetails.removalOrDeElectionMethod, currentLanguage)}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Career Value & Complete Appointment Hierarchy Ladder */}
        {(node.institutionDetails?.careerValue || (isEditing && (draft.institutionDetails || node.institutionDetails))) && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-200/90 rounded-xl p-3.5 space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-amber-950 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-amber-700" />
                Hierarchical Career Ladder &amp; Appointment Outcomes
              </span>
              {isEditing && (
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                  Editing
                </span>
              )}
            </h3>
            {isEditing ? (
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-amber-950 block mb-0.5">
                  Career Trajectory &amp; Promotion Ladder:
                </label>
                <textarea
                  value={draft.institutionDetails?.careerValue ?? node.institutionDetails?.careerValue ?? ''}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      institutionDetails: {
                        ...(d.institutionDetails || node.institutionDetails),
                        careerValue: e.target.value
                      }
                    }))
                  }
                  rows={4}
                  className="w-full text-xs rounded-lg border border-amber-300 p-2.5 bg-white text-slate-800 leading-relaxed font-sans focus:outline-hidden focus:ring-2 focus:ring-amber-500/20"
                  placeholder="e.g. Entry Cadre -> Sub-Divisional Officer (SDM) -> District Collector -> Joint Secretary -> Apex Secretary"
                />
              </div>
            ) : (
              <div className="bg-white/90 border border-amber-200/60 rounded-lg p-3 text-xs text-slate-800 leading-relaxed font-sans space-y-1.5 whitespace-pre-line shadow-2xs">
                {getTranslatedGovernanceValue(node.institutionDetails?.careerValue, currentLanguage)}
              </div>
            )}
          </div>
        )}

        {/* Course Permutations, Cross-Discipline Combos & Gateway Matrix */}
        {COURSE_PATHWAYS_MAP[node.id] && COURSE_PATHWAYS_MAP[node.id].length > 0 && (
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50/40 border border-indigo-200/80 rounded-xl p-3.5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-indigo-700" />
                Permutations, Dual Combos &amp; Career Pathways ({COURSE_PATHWAYS_MAP[node.id].length})
              </h3>
              <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-full border border-indigo-200">
                Interactive Matrix
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              Every viable academic progression, cross-discipline combo, and competitive government gateway accessible after this qualification:
            </p>

            <div className="grid grid-cols-1 gap-2 pt-1">
              {COURSE_PATHWAYS_MAP[node.id].map((pathway: CoursePathwayItem, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-2.5 border border-slate-200/80 hover:border-indigo-300 transition-all shadow-2xs hover:shadow-xs space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-900 text-xs">{pathway.targetTitle}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm border shrink-0 ${pathway.badgeColor}`}>
                      {pathway.category}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed">{pathway.rationale}</p>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px]">
                    <span className="text-slate-500 font-medium">Timeline: <strong className="text-slate-700">{pathway.timeline}</strong></span>
                    <button
                      type="button"
                      onClick={() => selectNode(pathway.targetId)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-semibold transition-colors cursor-pointer border border-indigo-200/80"
                      title={`Inspect ${pathway.targetTitle} on canvas`}
                    >
                      <span>Locate on Canvas</span>
                      <ArrowUpRight className="w-3 h-3 text-indigo-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Domain-Specific Uncommon Section: Constitutional & Democratic Hierarchy (v4) */}
        {(node.governanceDetails || (isEditing && draft.governanceDetails)) && (
          <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-3.5 space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-purple-700" />
              Democratic Office &amp; Electoral Framework
            </h3>
            <div className="space-y-1.5 text-xs text-slate-700">
              {node.governanceDetails?.constitutionalArticle && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-28 flex-shrink-0">Article:</span>
                  <span className="font-mono">{node.governanceDetails.constitutionalArticle}</span>
                </div>
              )}
              {node.governanceDetails?.electoralOrSelectionMethod && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-28 flex-shrink-0">Selection:</span>
                  <span>{node.governanceDetails.electoralOrSelectionMethod}</span>
                </div>
              )}
              {node.governanceDetails?.tenure && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-28 flex-shrink-0">Tenure:</span>
                  <span>{node.governanceDetails.tenure}</span>
                </div>
              )}
              {node.governanceDetails?.geographicalJurisdiction && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-28 flex-shrink-0">Jurisdiction:</span>
                  <span>{node.governanceDetails.geographicalJurisdiction}</span>
                </div>
              )}
              {node.governanceDetails?.reportingTo && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-purple-950 w-28 flex-shrink-0">Reports To:</span>
                  <span>{node.governanceDetails.reportingTo}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Domain-Specific Uncommon Section: Banking & Judicial Systems (v5) */}
        {(node.bankingJudicialDetails || (isEditing && draft.bankingJudicialDetails)) && (
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-amber-700" />
              {node.bankingJudicialDetails?.domain === 'banking' ? 'Banking Regulatory Architecture' : 'Judicial & Appellate Tier'}
            </h3>
            <div className="space-y-1.5 text-xs text-slate-700">
              {node.bankingJudicialDetails?.tier && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-amber-950 w-28 flex-shrink-0">Tier:</span>
                  <span>{getTranslatedGovernanceValue(node.bankingJudicialDetails.tier, currentLanguage)}</span>
                </div>
              )}
              {node.bankingJudicialDetails?.jurisdictionOrScope && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-amber-950 w-28 flex-shrink-0">Jurisdiction:</span>
                  <span>{getTranslatedGovernanceValue(node.bankingJudicialDetails.jurisdictionOrScope, currentLanguage)}</span>
                </div>
              )}
              {node.bankingJudicialDetails?.appointmentProcess && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-amber-950 w-28 flex-shrink-0">Appointment:</span>
                  <span>{getTranslatedGovernanceValue(node.bankingJudicialDetails.appointmentProcess, currentLanguage)}</span>
                </div>
              )}
              {node.bankingJudicialDetails?.grievanceOrAppellateRoute && (
                <div className="flex items-start gap-1">
                  <span className="font-semibold text-amber-950 w-28 flex-shrink-0">Appellate/Redress:</span>
                  <span>{getTranslatedGovernanceValue(node.bankingJudicialDetails.grievanceOrAppellateRoute, currentLanguage)}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* System Design Architectural Specification (Whiteboard 6) */}
        {(node.systemDesignDetails || (isEditing && draft.systemDesignDetails)) && (
          <div className="bg-slate-900 border border-cyan-500/40 rounded-xl p-4 space-y-3.5 text-slate-100 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                System Design Specification &amp; Analysis
              </h3>
              {node.systemDesignDetails?.transcriptTimestamp && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-700/60 shadow-2xs">
                  ⏱ {node.systemDesignDetails.transcriptTimestamp}
                </span>
              )}
            </div>

            <div className="space-y-2.5 text-xs">
              {node.systemDesignDetails?.category && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Category:</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-200 border border-cyan-700/50 font-medium text-[11px]">
                    {node.systemDesignDetails.category}
                  </span>
                </div>
              )}

              {node.systemDesignDetails?.definition && (
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
                    Core Definition:
                  </span>
                  <p className="text-slate-200 leading-relaxed font-normal">
                    {node.systemDesignDetails.definition}
                  </p>
                </div>
              )}

              {node.systemDesignDetails?.roleAndWork && (
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider block">
                    Role &amp; Responsibilities:
                  </span>
                  <p className="text-slate-200 leading-relaxed font-normal">
                    {node.systemDesignDetails.roleAndWork}
                  </p>
                </div>
              )}

              {node.systemDesignDetails?.workingMechanism && (
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                    Step-by-Step Working Mechanism:
                  </span>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line font-mono text-[11px]">
                    {node.systemDesignDetails.workingMechanism}
                  </p>
                </div>
              )}

              {node.systemDesignDetails?.exampleUseCase && (
                <div className="bg-amber-950/30 p-3 rounded-lg border border-amber-800/50 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Transcript Real-World Example:
                  </span>
                  <p className="text-amber-100/90 leading-relaxed italic text-[11.5px]">
                    "{node.systemDesignDetails.exampleUseCase}"
                  </p>
                </div>
              )}

              {node.systemDesignDetails?.explanation && (
                <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/70 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider block">
                    In-Depth Architectural Explanation:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {node.systemDesignDetails.explanation}
                  </p>
                </div>
              )}

              {node.systemDesignDetails?.dependencies && node.systemDesignDetails.dependencies.length > 0 && (
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
                    Architectural Dependencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {node.systemDesignDetails.dependencies.map((dep, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-cyan-200 border border-slate-700 text-[10.5px] font-mono"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {node.systemDesignDetails?.tradeOffs && (
                <div className="bg-rose-950/40 p-3 rounded-lg border border-rose-800/60 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-rose-300 tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    Trade-offs, Limits &amp; Bottlenecks:
                  </span>
                  <p className="text-rose-100/90 leading-relaxed text-[11px]">
                    {node.systemDesignDetails.tradeOffs}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Character Assessment & Human Connection Specification (Whiteboard 7) */}
        {(node.characterAssessmentDetails || (isEditing && draft.characterAssessmentDetails)) && (
          <div className="bg-slate-900 border border-purple-500/40 rounded-xl p-4 space-y-3.5 text-slate-100 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-purple-400" />
                Character Assessment &amp; Connection Framework
              </h3>
              {node.characterAssessmentDetails?.conceptId && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/90 text-amber-300 border border-purple-700/60 shadow-2xs">
                  {node.characterAssessmentDetails.conceptId}
                </span>
              )}
            </div>

            <div className="space-y-2.5 text-xs">
              {node.characterAssessmentDetails?.relatedLesson && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Lesson:</span>
                  <span className="px-2 py-0.5 rounded bg-purple-900/60 text-purple-200 border border-purple-700/50 font-medium text-[11px]">
                    🎬 {node.characterAssessmentDetails.relatedLesson}
                  </span>
                </div>
              )}

              {node.characterAssessmentDetails?.branch && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Branch:</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[11px]">
                    {node.characterAssessmentDetails.branch}
                  </span>
                </div>
              )}

              {node.characterAssessmentDetails?.definition && (
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
                    Core Definition:
                  </span>
                  <p className="text-slate-200 leading-relaxed font-normal">
                    {node.characterAssessmentDetails.definition}
                  </p>
                </div>
              )}

              {node.characterAssessmentDetails?.principle && (
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">
                    Underlying Principle:
                  </span>
                  <p className="text-slate-200 leading-relaxed font-normal">
                    {node.characterAssessmentDetails.principle}
                  </p>
                </div>
              )}

              {node.characterAssessmentDetails?.techniqueOrQuestion && (
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                    Diagnostic Technique / Probing Question:
                  </span>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line font-mono text-[11px]">
                    {node.characterAssessmentDetails.techniqueOrQuestion}
                  </p>
                </div>
              )}

              {node.characterAssessmentDetails?.practicalScenario && (
                <div className="bg-sky-950/30 p-3 rounded-lg border border-sky-800/50 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-sky-300 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    Real-World Practical Scenario:
                  </span>
                  <p className="text-sky-100/90 leading-relaxed italic text-[11.5px]">
                    "{node.characterAssessmentDetails.practicalScenario}"
                  </p>
                </div>
              )}

              {node.characterAssessmentDetails?.limitationsAndCaveats && (
                <div className="bg-rose-950/40 p-3 rounded-lg border border-rose-800/60 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-rose-300 tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    Limitations &amp; Cognitive Caveats:
                  </span>
                  <p className="text-rose-100/90 leading-relaxed text-[11px]">
                    {node.characterAssessmentDetails.limitationsAndCaveats}
                  </p>
                </div>
              )}

              {node.characterAssessmentDetails?.crossLinks && node.characterAssessmentDetails.crossLinks.length > 0 && (
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-purple-300 tracking-wider block">
                    Conceptual Cross-Links:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {node.characterAssessmentDetails.crossLinks.map((link, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-900 text-purple-200 border border-slate-700 text-[10.5px] font-mono"
                      >
                        {link}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Powers (What this authority CAN do) */}
        {((node.powers && node.powers.length > 0) || isEditing) && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                Area of Power (What They Can Decide)
              </h3>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('powers', 'New decision power')}
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-[10px] transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  Add Power
                </button>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-2">
                {(draft.powers || []).map((p, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 bg-slate-50 border border-slate-200 rounded-lg p-1.5">
                    <span className="text-emerald-700 font-bold mt-1 text-xs">•</span>
                    <textarea
                      value={p}
                      onChange={(e) => updateArrayItem('powers', idx, e.target.value)}
                      rows={2}
                      className="flex-1 text-xs bg-white border border-slate-300 rounded p-1.5 text-slate-800 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('powers', idx)}
                      className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded cursor-pointer"
                      title="Delete power"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                {(draft.powers || []).length === 0 && (
                  <p className="text-[11px] text-slate-400 italic">No powers listed. Click "+ Add Power" to add one.</p>
                )}
              </div>
            ) : (
              <ul className="space-y-1.5">
                {(node.powers || []).map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-slate-700 leading-relaxed">
                    <span className="text-emerald-700 font-bold mt-0.5">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Legal Limitations (What this authority CANNOT do) */}
        {((node.limitations && node.limitations.length > 0) || isEditing) && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                Decision Limits &amp; Prohibited Associations (What They Cannot Decide)
              </h3>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('limitations', 'New decision boundary')}
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-rose-100 hover:bg-rose-200 text-rose-900 font-bold text-[10px] transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  Add Boundary
                </button>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-2">
                {(draft.limitations || []).map((lim, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 bg-rose-50/40 border border-rose-200 rounded-lg p-1.5">
                    <span className="text-rose-600 font-bold mt-1 text-xs">✕</span>
                    <textarea
                      value={lim}
                      onChange={(e) => updateArrayItem('limitations', idx, e.target.value)}
                      rows={2}
                      className="flex-1 text-xs bg-white border border-rose-300 rounded p-1.5 text-rose-950 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('limitations', idx)}
                      className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-100 rounded cursor-pointer"
                      title="Delete limitation"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                {(draft.limitations || []).length === 0 && (
                  <p className="text-[11px] text-slate-400 italic">No legal limitations listed. Click "+ Add Limitation" to add one.</p>
                )}
              </div>
            ) : (
              <ul className="space-y-1.5">
                {(node.limitations || []).map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-rose-50/50 border border-rose-200/60 rounded-lg p-2.5 text-rose-950 leading-relaxed">
                    <span className="text-rose-600 font-bold mt-0.5">✕</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Statutory Enactments / Legal Basis */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-800" />
              Statutory Enactment / Legal Basis
            </h3>
            {isEditing && (
              <button
                type="button"
                onClick={() => addArrayItem('establishingLaw', 'Article / Act Citation')}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-[10px] transition-colors cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                Add Act
              </button>
            )}
          </div>

          {isEditing ? (
            <div className="space-y-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              {(draft.establishingLaw || []).map((law, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={law}
                    onChange={(e) => updateArrayItem('establishingLaw', idx, e.target.value)}
                    className="flex-1 text-xs font-mono bg-white border border-slate-300 rounded px-2 py-1 text-slate-800 focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem('establishingLaw', idx)}
                    className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              {(draft.establishingLaw || []).length === 0 && (
                <p className="text-[10px] text-slate-400 italic">No statutory acts specified.</p>
              )}
            </div>
          ) : (
            node.establishingLaw && node.establishingLaw.length > 0 ? (
              <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200 space-y-1">
                {node.establishingLaw.map((law, idx) => (
                  <div key={idx} className="text-xs font-mono text-slate-700">
                    • {law}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-slate-400 italic">No statutory acts specified.</p>
            )
          )}
        </div>

        {/* Administrative Line / Ministerial Relationship */}
        {(isEditing || node.ministerialRelationship) && (
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              Administrative Line / Parent Ministry
            </span>
            {isEditing ? (
              <input
                type="text"
                value={draft.ministerialRelationship ?? (node.ministerialRelationship || '')}
                onChange={(e) => setDraft((d) => ({ ...d, ministerialRelationship: e.target.value }))}
                placeholder="e.g. Ministry of Education (Department of Higher Education)"
                className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1 text-slate-800 focus:outline-hidden"
              />
            ) : (
              <p className="text-xs text-slate-700">{node.ministerialRelationship}</p>
            )}
          </div>
        )}

        {/* Operational Flows: Inputs & Outputs */}
        {(isEditing || (node.inputs && node.inputs.length > 0) || (node.outputs && node.outputs.length > 0)) && (
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Workflow className="w-4 h-4 text-emerald-800" />
              Operational Flows (Inputs &amp; Outputs)
            </h3>

            {/* Inputs */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Inputs (Received Petitions, Proposals, Claims)
                </span>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => addArrayItem('inputs', 'New operational input')}
                    className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-[9px] cursor-pointer"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    Add Input
                  </button>
                )}
              </div>
              {isEditing ? (
                <div className="space-y-1.5">
                  {(draft.inputs || []).map((inp, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={inp}
                        onChange={(e) => updateArrayItem('inputs', idx, e.target.value)}
                        className="flex-1 text-xs bg-white border border-slate-300 rounded px-2 py-1 text-slate-800 focus:outline-hidden"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('inputs', idx)}
                        className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  {(draft.inputs || []).length === 0 && (
                    <p className="text-[10px] text-slate-400 italic">No inputs configured.</p>
                  )}
                </div>
              ) : (
                node.inputs && node.inputs.length > 0 ? (
                  <ul className="space-y-1">
                    {node.inputs.map((inp, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">→</span>
                        <span>{inp}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[10px] text-slate-400 italic">No inputs listed.</p>
                )
              )}
            </div>

            {/* Outputs */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Outputs (Decisions, Rules, Directives, Orders)
                </span>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => addArrayItem('outputs', 'New operational output')}
                    className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-[9px] cursor-pointer"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    Add Output
                  </button>
                )}
              </div>
              {isEditing ? (
                <div className="space-y-1.5">
                  {(draft.outputs || []).map((out, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={out}
                        onChange={(e) => updateArrayItem('outputs', idx, e.target.value)}
                        className="flex-1 text-xs bg-white border border-slate-300 rounded px-2 py-1 text-slate-800 focus:outline-hidden"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('outputs', idx)}
                        className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  {(draft.outputs || []).length === 0 && (
                    <p className="text-[10px] text-slate-400 italic">No outputs configured.</p>
                  )}
                </div>
              ) : (
                node.outputs && node.outputs.length > 0 ? (
                  <ul className="space-y-1">
                    {node.outputs.map((out, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">←</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[10px] text-slate-400 italic">No outputs listed.</p>
                )
              )}
            </div>
          </div>
        )}

        {/* Connected Upstream & Downstream Nodes */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-slate-700" />
              Connected Governance Relationships ({outgoingEdges.length + incomingEdges.length})
            </h3>
            <button
              type="button"
              onClick={() => {
                setRelationshipDraft({ sourceNodeId: node.id });
                openModal('add-relationship');
              }}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-[10px] cursor-pointer transition-colors"
              title="Connect this node to another authority with an arrow"
            >
              <Plus className="w-3 h-3" />
              <span>Connect Arrow</span>
            </button>
          </div>

          <div className="space-y-1.5">
            {outgoingEdges.map((rel) => {
              const targetNode = nodes.find((n) => n.id === rel.targetNodeId) || NODE_MAP.get(rel.targetNodeId);
              const isEditingThisRel = editingRelId === rel.id;

              return (
                <div
                  key={rel.id}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/20 transition-all flex items-center justify-between gap-2"
                >
                  {isEditingThisRel ? (
                    <div className="flex-1 flex items-center gap-1.5">
                      <input
                        type="text"
                        value={editingRelLabel}
                        onChange={(e) => setEditingRelLabel(e.target.value)}
                        className="flex-1 text-xs border border-emerald-600 rounded px-2 py-0.5 bg-white text-slate-800"
                      />
                      <button
                        onClick={async () => {
                          await updateRelationship(rel.id, { label: editingRelLabel });
                          setEditingRelId(null);
                        }}
                        className="px-2 py-0.5 rounded bg-emerald-800 text-amber-300 font-bold text-[10px]"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingRelId(null)}
                        className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px]"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => selectNode(rel.targetNodeId)}
                        className="min-w-0 flex-1 text-left cursor-pointer"
                      >
                        <span className="text-[10px] font-mono font-semibold text-emerald-800 uppercase block">
                          {rel.type} →
                        </span>
                        <span className="font-medium text-slate-900 text-xs truncate block">
                          {targetNode ? targetNode.title : rel.targetNodeId}
                        </span>
                        <span className="text-[10px] text-slate-500">{rel.label}</span>
                      </button>

                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingRelId(rel.id);
                            setEditingRelLabel(rel.label);
                          }}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                          title="Edit arrow label"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteRelationship(rel.id)}
                          className="p-1 rounded text-rose-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                          title="Delete arrow connection"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => selectNode(rel.targetNodeId)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                          title="Jump to target node"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            {incomingEdges.map((rel) => {
              const sourceNode = nodes.find((n) => n.id === rel.sourceNodeId) || NODE_MAP.get(rel.sourceNodeId);
              const isEditingThisRel = editingRelId === rel.id;

              return (
                <div
                  key={rel.id}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/20 transition-all flex items-center justify-between gap-2"
                >
                  {isEditingThisRel ? (
                    <div className="flex-1 flex items-center gap-1.5">
                      <input
                        type="text"
                        value={editingRelLabel}
                        onChange={(e) => setEditingRelLabel(e.target.value)}
                        className="flex-1 text-xs border border-emerald-600 rounded px-2 py-0.5 bg-white text-slate-800"
                      />
                      <button
                        onClick={async () => {
                          await updateRelationship(rel.id, { label: editingRelLabel });
                          setEditingRelId(null);
                        }}
                        className="px-2 py-0.5 rounded bg-emerald-800 text-amber-300 font-bold text-[10px]"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingRelId(null)}
                        className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px]"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => selectNode(rel.sourceNodeId)}
                        className="min-w-0 flex-1 text-left cursor-pointer"
                      >
                        <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase block">
                          ← {rel.type} (Incoming)
                        </span>
                        <span className="font-medium text-slate-900 text-xs truncate block">
                          {sourceNode ? sourceNode.title : rel.sourceNodeId}
                        </span>
                        <span className="text-[10px] text-slate-500">{rel.label}</span>
                      </button>

                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingRelId(rel.id);
                            setEditingRelLabel(rel.label);
                          }}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                          title="Edit arrow label"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteRelationship(rel.id)}
                          className="p-1 rounded text-rose-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer"
                          title="Delete arrow connection"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => selectNode(rel.sourceNodeId)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                          title="Jump to source node"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Primary Official Sources & Citations */}
        {node.sourceIds && node.sourceIds.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-amber-700" />
              Official Primary Sources ({node.sourceIds.length})
            </h3>
            <div className="space-y-2">
              {node.sourceIds.map((srcId) => {
                const src = SOURCE_MAP.get(srcId);
                if (!src) return null;
                return (
                  <div key={src.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-xs">
                          {src.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {src.documentTitle}
                        </p>
                      </div>
                      <a
                        href={src.officialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded text-emerald-800 hover:bg-emerald-100 transition-colors flex-shrink-0"
                        title="Open Official Portal / Gazette"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    {src.sectionCitation && (
                      <p className="text-[10px] text-emerald-800 font-medium mt-1">
                        Citation: {src.sectionCitation}
                      </p>
                    )}
                    {src.notes && (
                      <p className="text-[10px] text-slate-600 mt-1 leading-normal italic">
                        "{src.notes}"
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Cross-Board Links (Whiteboard 2 & 3) */}
        {((node.relatedExaminations && node.relatedExaminations.length > 0) ||
          (node.relatedInstitutions && node.relatedInstitutions.length > 0) ||
          (node.relatedQualifications && node.relatedQualifications.length > 0)) && (
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-800" />
              Cross-Board System Links
            </h3>
            <div className="space-y-1.5 text-xs">
              {node.relatedExaminations && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-amber-900 text-[11px]">Board 3 (Exams):</span>
                  <div className="flex flex-wrap gap-1">
                    {node.relatedExaminations.map((ex) => (
                      <span key={ex} className="px-1.5 py-0.5 rounded bg-white text-amber-900 border border-amber-300 font-mono text-[10px]">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {node.relatedQualifications && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-amber-900 text-[11px]">Board 2 (Qualifications):</span>
                  <div className="flex flex-wrap gap-1">
                    {node.relatedQualifications.map((qu) => (
                      <span key={qu} className="px-1.5 py-0.5 rounded bg-white text-amber-900 border border-amber-300 font-mono text-[10px]">
                        {qu}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Delete Authority / Node Action */}
        <div className="pt-4 mt-2 border-t border-slate-200">
          {showDeleteNodeConfirm ? (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-2.5">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-xs">
                <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>Delete &ldquo;{node.title}&rdquo;?</span>
              </div>
              <p className="text-[11px] text-rose-700 leading-normal">
                This will remove this authority node and delete all its incoming and outgoing governance arrows from this project.
              </p>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowDeleteNodeConfirm(false)}
                  className="px-2.5 py-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    await deleteNode(node.id);
                  }}
                  className="flex items-center gap-1 px-3 py-1 rounded bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Confirm Delete Node</span>
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowDeleteNodeConfirm(true)}
              className="w-full flex items-center justify-center gap-1.5 p-2 rounded-lg border border-rose-200 bg-rose-50/40 hover:bg-rose-100 text-rose-700 hover:text-rose-900 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete Authority / Node from Diagram</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
