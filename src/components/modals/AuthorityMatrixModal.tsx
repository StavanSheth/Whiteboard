import { useState } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { ALL_DECISION_ROWS } from '../../data/content-index';
import { X, Search } from 'lucide-react';

export function AuthorityMatrixModal() {
  const { activeModal, closeModal } = useWhiteboardStore();
  const [searchTerm, setSearchTerm] = useState('');

  if (activeModal !== 'matrix') return null;

  const filteredRows = ALL_DECISION_ROWS.filter(
    (row) =>
      row.decision.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.legalAnnotation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-900 text-white">
                SECTION 15
              </span>
              <h2 className="text-base font-bold text-slate-900">
                Authority Matrix & Decision Rights
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Definitive mapping: Exactly who can do what across 16 core educational decision domains
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter decision rights..."
                className="w-full pl-8 pr-3 py-1 text-xs rounded-md border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-700"
              />
            </div>
            <button
              onClick={closeModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Matrix Table */}
        <div className="flex-1 overflow-auto p-4">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-[11px] uppercase tracking-wider font-semibold">
                <th className="p-3 w-48 sticky left-0 bg-slate-100 z-10">Decision Domain</th>
                <th className="p-3 w-44">Parliament</th>
                <th className="p-3 w-44">Union Executive</th>
                <th className="p-3 w-44">State Government</th>
                <th className="p-3 w-44">Regulator</th>
                <th className="p-3 w-44">Board / Exam Agency</th>
                <th className="p-3 w-44">University / Inst</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/80 transition-colors align-top">
                  <td className="p-3 font-semibold text-slate-900 sticky left-0 bg-white shadow-xs">
                    <div>{row.decision}</div>
                    <div className="text-[10px] text-emerald-800 font-normal italic mt-1 leading-normal">
                      {row.legalAnnotation}
                    </div>
                  </td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.parliament}</td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.unionExecutive}</td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.stateGovernment}</td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.regulator}</td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.boardOrExamAgency}</td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.universityOrInstitution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500">
          <span>Showing {filteredRows.length} of {ALL_DECISION_ROWS.length} decision rows</span>
          <span className="italic">Note: "Conditional" means power exists only where parent Act or rules grant it.</span>
        </div>
      </div>
    </div>
  );
}
