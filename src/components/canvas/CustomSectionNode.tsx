import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { EducationNode } from '../../types';
import { Landmark, Scale, BookOpen, GraduationCap, Award, FileCheck, ShieldCheck, Coins, AlertCircle, Workflow, Table, Database } from 'lucide-react';
import { useWhiteboardStore } from '../../store/whiteboardStore';

const iconMap: Record<string, React.ReactNode> = {
  '00': <BookOpen className="w-5 h-5 text-amber-600" />,
  '01': <Scale className="w-5 h-5 text-emerald-700" />,
  '02': <Landmark className="w-5 h-5 text-emerald-800" />,
  '03': <Landmark className="w-5 h-5 text-emerald-800" />,
  '04': <Landmark className="w-5 h-5 text-emerald-800" />,
  '05': <Scale className="w-5 h-5 text-emerald-800" />,
  '06': <GraduationCap className="w-5 h-5 text-emerald-700" />,
  '07': <GraduationCap className="w-5 h-5 text-emerald-700" />,
  '08': <BookOpen className="w-5 h-5 text-emerald-800" />,
  '09': <Award className="w-5 h-5 text-emerald-700" />,
  '10': <FileCheck className="w-5 h-5 text-emerald-800" />,
  '11': <ShieldCheck className="w-5 h-5 text-emerald-700" />,
  '12': <Coins className="w-5 h-5 text-amber-700" />,
  '13': <AlertCircle className="w-5 h-5 text-rose-700" />,
  '14': <Workflow className="w-5 h-5 text-emerald-800" />,
  '15': <Table className="w-5 h-5 text-emerald-800" />,
  '16': <Database className="w-5 h-5 text-emerald-800" />
};

export const CustomSectionNode = memo(({ data, selected }: { data: EducationNode; selected?: boolean }) => {
  const isRoot = data.id === 'ROOT-IND-EDU-GOV';
  const icon = iconMap[data.sectionNumber] || <Landmark className="w-5 h-5 text-emerald-800" />;

  const layoutDirection = useWhiteboardStore((s: any) => s.layoutDirection);
  const isHorizontal = layoutDirection === 'RIGHT';
  const targetPos = isHorizontal ? Position.Left : Position.Top;
  const sourcePos = isHorizontal ? Position.Right : Position.Bottom;

  return (
    <div
      className={`relative rounded-xl border transition-all duration-200 cursor-pointer shadow-sm ${
        isRoot
          ? 'bg-slate-900 text-white border-amber-500/80 p-5 w-[min(420px,94vw)] ring-2 ring-amber-500/30'
          : selected
          ? 'bg-emerald-950 text-white border-emerald-500 p-4 w-[min(330px,88vw)] ring-2 ring-emerald-500'
          : 'bg-emerald-900 text-white border-emerald-800/80 hover:border-emerald-500 p-4 w-[min(330px,88vw)]'
      }`}
    >
      <Handle type="target" position={targetPos} className="!bg-amber-400 !border-white !w-3 !h-3" />

      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg flex-shrink-0 ${isRoot ? 'bg-amber-500/20 text-amber-400' : 'bg-white/10 text-emerald-200'}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400">
              {isRoot ? 'National Master Root' : `Section ${data.sectionNumber}`}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-slate-200 font-mono">
              {data.abbreviation || data.id}
            </span>
          </div>
          <h3 className={`font-bold leading-tight ${isRoot ? 'text-lg text-white' : 'text-sm text-emerald-50'}`}>
            {data.title}
          </h3>
          {isRoot && (
            <p className="text-[11px] text-emerald-200/80 mt-1 line-clamp-2 leading-relaxed">
              {data.summary}
            </p>
          )}
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-emerald-300/70">
        <span className="capitalize">{data.level} Governance</span>
        <span className="flex items-center gap-1 text-amber-300 font-medium">
          Click for details →
        </span>
      </div>

      <Handle type="source" position={sourcePos} className="!bg-emerald-400 !border-white !w-3 !h-3" />
    </div>
  );
});

CustomSectionNode.displayName = 'CustomSectionNode';
