import { useState } from 'react';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

export function CanvasLegend() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute bottom-5 left-5 z-20 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-xl shadow-md overflow-hidden text-xs text-slate-700 w-72 transition-all">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-800" />
          <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
            Whiteboard Legend & Connectors
          </span>
        </div>
        {isOpen ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronUp className="w-4 h-4 text-slate-400" />}
      </button>

      {/* Expandable Body */}
      {isOpen && (
        <div className="p-3 space-y-3 max-h-80 overflow-y-auto">
          {/* Edge Connector Styles */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Relationship Connectors
            </span>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-emerald-700" />
                <span>Verified Legal / Statutory Flow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 border-t-2 border-dashed border-slate-400" />
                <span>Advisory / Coordination Relationship</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-amber-500" />
                <span>Cross-Board Link (Boards 2 & 3)</span>
              </div>
            </div>
          </div>

          {/* Node Status Tokens */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Verification State
            </span>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Verified against Primary Act/Gazette</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Partially Verified (Sub-clauses pending)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Requires Legal Verification</span>
              </div>
            </div>
          </div>

          {/* Interaction Tip */}
          <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-500">
            💡 Click any card to open its detailed powers, limitations, and primary legal sources in the right panel.
          </div>
        </div>
      )}
    </div>
  );
}
