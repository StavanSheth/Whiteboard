import { useState } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { EducationNode, GovernmentLevel, FunctionalCategory, NodeType } from '../../types';
import { X, Plus, Trash2, Landmark, Check } from 'lucide-react';

export function AddNodeModal() {
  const { activeModal, closeModal, sections, addNode } = useWhiteboardStore();

  const [sectionId, setSectionId] = useState(sections[0]?.id || 'SEC-01');
  const [title, setTitle] = useState('');
  const [abbreviation, setAbbreviation] = useState('');
  const [nodeType, setNodeType] = useState<NodeType>('statutoryRegulator');
  const [level, setLevel] = useState<GovernmentLevel>('union');
  const [category, setCategory] = useState<FunctionalCategory>('higher-education');
  const [summary, setSummary] = useState('');
  const [legalStatus, setLegalStatus] = useState('');
  const [ministerialRelationship, setMinisterialRelationship] = useState('');
  
  const [powers, setPowers] = useState<string[]>(['']);
  const [limitations, setLimitations] = useState<string[]>(['']);
  const [establishingLaw, setEstablishingLaw] = useState<string[]>(['']);

  if (activeModal !== 'add-node') return null;

  const currentSection = sections.find((s) => s.id === sectionId) || sections[0];

  const handleAddPower = () => setPowers((p) => [...p, '']);
  const handleUpdatePower = (index: number, val: string) => {
    const arr = [...powers];
    arr[index] = val;
    setPowers(arr);
  };
  const handleRemovePower = (index: number) => {
    setPowers((p) => p.filter((_, i) => i !== index));
  };

  const handleAddLimitation = () => setLimitations((l) => [...l, '']);
  const handleUpdateLimitation = (index: number, val: string) => {
    const arr = [...limitations];
    arr[index] = val;
    setLimitations(arr);
  };
  const handleRemoveLimitation = (index: number) => {
    setLimitations((l) => l.filter((_, i) => i !== index));
  };

  const handleAddLaw = () => setEstablishingLaw((laws) => [...laws, '']);
  const handleUpdateLaw = (index: number, val: string) => {
    const arr = [...establishingLaw];
    arr[index] = val;
    setEstablishingLaw(arr);
  };
  const handleRemoveLaw = (index: number) => {
    setEstablishingLaw((laws) => laws.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const abbrClean = abbreviation.trim().toUpperCase() || title.substring(0, 4).toUpperCase();
    const id = `AUTH-${abbrClean}-${Date.now().toString().slice(-4)}`;

    const newNode: EducationNode = {
      id,
      type: nodeType,
      title: title.trim(),
      abbreviation: abbreviation.trim() || undefined,
      sectionId: currentSection.id,
      sectionNumber: currentSection.number,
      parentId: currentSection.id,
      level,
      category,
      summary: summary.trim() || 'Statutory authority under Indian education governance.',
      legalStatus: legalStatus.trim() || undefined,
      ministerialRelationship: ministerialRelationship.trim() || undefined,
      mandate: [summary.trim() || 'Statutory regulatory remit'],
      powers: powers.map((p) => p.trim()).filter(Boolean),
      limitations: limitations.map((l) => l.trim()).filter(Boolean),
      establishingLaw: establishingLaw.map((l) => l.trim()).filter(Boolean),
      sourceIds: [],
      verificationStatus: 'verified',
      lastVerifiedDate: new Date().toISOString().substring(0, 10)
    };

    await addNode(newNode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shadow-xs">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Add New Authority / Node</h3>
              <p className="text-[11px] text-slate-500">
                Register a new governing body, commission, court, tribunal, or testing agency.
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

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          {/* Section Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Target Section *</label>
              <select
                value={sectionId}
                onChange={(e) => setSectionId(e.target.value)}
                className="w-full text-xs font-semibold rounded-lg border border-slate-300 p-2 bg-white text-slate-800"
              >
                {sections.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    Sec {sec.number} • {sec.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Government Level *</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as GovernmentLevel)}
                className="w-full text-xs font-semibold rounded-lg border border-slate-300 p-2 bg-white text-slate-800"
              >
                <option value="constitutional">Constitutional</option>
                <option value="union">Union Government</option>
                <option value="state">State / UT Government</option>
                <option value="district">District / Local</option>
                <option value="institutional">Institutional Body</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Archetype / Body Type *</label>
              <select
                value={nodeType}
                onChange={(e) => setNodeType(e.target.value as NodeType)}
                className="w-full text-xs font-semibold rounded-lg border border-slate-300 p-2 bg-white text-slate-800"
              >
                <option value="statutoryRegulator">Statutory Regulator (e.g. UGC, AICTE)</option>
                <option value="apexMinistry">Apex Ministry / Department</option>
                <option value="constitutionalBody">Constitutional Body / Court</option>
                <option value="examiningAgency">Examining Agency (e.g. NTA)</option>
                <option value="autonomousCouncil">Autonomous Council</option>
                <option value="advisoryBody">Advisory / Research Body</option>
                <option value="quasiJudicial">Quasi-Judicial Appellate Body</option>
                <option value="fundingAgency">Funding / Grant Body</option>
              </select>
            </div>
          </div>

          {/* Title & Abbreviation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="font-bold text-slate-700 block mb-1">Official Name / Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. National Medical Commission, State CET Cell"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-900 bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Abbreviation</label>
              <input
                type="text"
                placeholder="e.g. NMC, CET-CELL"
                value={abbreviation}
                onChange={(e) => setAbbreviation(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-mono font-bold text-emerald-900 bg-white"
              />
            </div>
          </div>

          {/* Category, Legal Status & Ministry */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Functional Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as FunctionalCategory)}
                className="w-full text-xs rounded-lg border border-slate-300 p-2 bg-white text-slate-800"
              >
                <option value="higher-education">Higher Education Governance</option>
                <option value="professional-regulation">Professional Regulators</option>
                <option value="school-education">School Education</option>
                <option value="examination">Examination & Testing</option>
                <option value="accreditation-ranking">Accreditation & Ranking</option>
                <option value="funding-finance">Funding & Public Finance</option>
                <option value="oversight-remedies">Oversight, Rights & Courts</option>
                <option value="legislation">Legislation & Assent</option>
                <option value="executive-administration">Executive Administration</option>
                <option value="procedural-reform">Rulemaking & Reform</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Legal Status</label>
              <input
                type="text"
                placeholder="e.g. Statutory Body, Constitutional Court"
                value={legalStatus}
                onChange={(e) => setLegalStatus(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Parent Ministry / Dept</label>
              <input
                type="text"
                placeholder="e.g. Ministry of Education"
                value={ministerialRelationship}
                onChange={(e) => setMinisterialRelationship(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 bg-white"
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="font-bold text-slate-700 block mb-1">Mandate &amp; Executive Summary *</label>
            <textarea
              required
              rows={3}
              placeholder="Concise 1-2 sentence executive summary of powers, jurisdiction, and legal remit."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-2 text-xs text-slate-800 bg-white"
            />
          </div>

          {/* Powers */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-bold text-slate-700">What this authority CAN do (Powers)</label>
              <button
                type="button"
                onClick={handleAddPower}
                className="flex items-center gap-1 text-[10px] font-bold text-emerald-800 hover:text-emerald-950"
              >
                <Plus className="w-3 h-3" /> Add Power
              </button>
            </div>
            <div className="space-y-1.5">
              {powers.map((p, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <input
                    type="text"
                    value={p}
                    onChange={(e) => handleUpdatePower(idx, e.target.value)}
                    placeholder="e.g. Sets minimum standards, conducts counselling"
                    className="flex-1 border border-slate-300 rounded px-2 py-1 text-xs bg-white text-slate-800"
                  />
                  {powers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemovePower(idx)}
                      className="p-1 text-rose-500 hover:text-rose-700"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Limitations */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-bold text-rose-800">What this authority CANNOT do (Legal Limitations)</label>
              <button
                type="button"
                onClick={handleAddLimitation}
                className="flex items-center gap-1 text-[10px] font-bold text-rose-800 hover:text-rose-950"
              >
                <Plus className="w-3 h-3" /> Add Limitation
              </button>
            </div>
            <div className="space-y-1.5">
              {limitations.map((lim, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-rose-600 font-bold">✕</span>
                  <input
                    type="text"
                    value={lim}
                    onChange={(e) => handleUpdateLimitation(idx, e.target.value)}
                    placeholder="e.g. Cannot alter examination syllabus without board assent"
                    className="flex-1 border border-rose-200 rounded px-2 py-1 text-xs bg-white text-rose-950"
                  />
                  {limitations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveLimitation(idx)}
                      className="p-1 text-rose-500 hover:text-rose-700"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Statutory Acts */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-bold text-slate-700">Statutory Enactments / Acts</label>
              <button
                type="button"
                onClick={handleAddLaw}
                className="flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:text-slate-900"
              >
                <Plus className="w-3 h-3" /> Add Act Citation
              </button>
            </div>
            <div className="space-y-1.5">
              {establishingLaw.map((law, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={law}
                    onChange={(e) => handleUpdateLaw(idx, e.target.value)}
                    placeholder="e.g. National Medical Commission Act, 2019 (Section 10)"
                    className="flex-1 border border-slate-300 rounded px-2 py-1 text-xs bg-white text-slate-800"
                  />
                  {establishingLaw.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveLaw(idx)}
                      className="p-1 text-rose-500 hover:text-rose-700"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Controls */}
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
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Add Node to Diagram</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
