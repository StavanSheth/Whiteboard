import React, { useState } from 'react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { downloadJsonFile, validateImportDataset } from '../../services/exportService';
import { X, Download, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

export function ExportImportModal() {
  const { activeModal, closeModal, nodes, relationships, sources, importData } = useWhiteboardStore();
  const [importText, setImportText] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (activeModal !== 'export') return null;

  const handleExportFull = () => {
    const payload = {
      version: '1.0.0',
      exportDate: new Date().toISOString(),
      source: 'Indian Education Governance Whiteboard 1',
      nodes,
      relationships,
      sources
    };
    downloadJsonFile('indian-education-governance-whiteboard-1.json', payload);
  };

  const handleImport = () => {
    setStatusMessage(null);
    if (!importText.trim()) {
      setStatusMessage({ type: 'error', text: 'Please paste valid JSON dataset content.' });
      return;
    }

    const res = validateImportDataset(importText);
    if (res.success) {
      importData(res.data);
      setStatusMessage({
        type: 'success',
        text: `Successfully imported ${res.data.nodes.length} nodes and ${res.data.relationships.length} relationships!`
      });
      setTimeout(() => {
        closeModal();
      }, 1500);
    } else {
      setStatusMessage({ type: 'error', text: res.error });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setImportText(content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Export & Import Structured Dataset
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Export machine-readable JSON or import verified educational governance datasets
            </p>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-5">
          {/* Export Section */}
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Export Current Master Knowledge Graph
              </h3>
              <p className="text-xs text-emerald-800 mt-0.5">
                Download complete JSON ({nodes.length} nodes, {relationships.length} relationships, {sources.length} sources).
              </p>
            </div>
            <button
              onClick={handleExportFull}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-900 hover:bg-emerald-950 text-white text-xs font-semibold transition-colors shadow-xs flex-shrink-0"
            >
              <Download className="w-4 h-4" />
              Download JSON
            </button>
          </div>

          {/* Import Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Import Dataset (Validated with Zod Schema)
              </label>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="text-xs text-slate-500 file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer"
              />
            </div>

            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste valid JSON dataset here or upload file above..."
              rows={6}
              className="w-full p-3 font-mono text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
            />

            {statusMessage && (
              <div
                className={`p-3 rounded-lg text-xs flex items-center gap-2 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : 'bg-rose-50 text-rose-900 border border-rose-200'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-700 flex-shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <button
              onClick={handleImport}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <Upload className="w-4 h-4" />
              Validate & Apply Imported Dataset
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500 text-right">
          Standard Schema Compliance: RFC 8259 JSON
        </div>
      </div>
    </div>
  );
}
