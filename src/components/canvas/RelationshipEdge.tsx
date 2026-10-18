import { memo, useState } from 'react';
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getStraightPath
} from '@xyflow/react';
import { RelationshipEdgeData } from '../../types';
import { useWhiteboardStore } from '../../store/whiteboardStore';

const edgeColorByType: Record<string, string> = {
  FEEDS: '#0d9488', // Teal
  PROGRESSES_TO: '#6366f1', // Indigo
  COORDINATES: '#0284c7', // Sky
  CONNECTS_TO_BOARD_2: '#d97706', // Amber
  CONNECTS_TO_BOARD_3: '#d97706', // Amber
  default: '#64748b' // Slate
};

export const RelationshipEdge = memo((props: EdgeProps) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
    selected
  } = props;

  const arrowStyle = useWhiteboardStore((s) => s.arrowStyle);
  const edgeLabelMode = useWhiteboardStore((s) => s.edgeLabelMode);
  const edgeData = data as unknown as RelationshipEdgeData | undefined;

  const [isHovered, setIsHovered] = useState(false);

  // Multi-Lane Highway Data
  const sourceOffset = ((edgeData as any)?.sourceOffset as number) || 0;
  const targetOffset = ((edgeData as any)?.targetOffset as number) || 0;
  const laneIndex = ((edgeData as any)?.laneIndex as number) || 0;
  const totalLanes = ((edgeData as any)?.totalLanes as number) || 1;

  const isVertical = sourcePosition === 'bottom' || sourcePosition === 'top' || targetPosition === 'top' || targetPosition === 'bottom';
  const effectiveSourceX = isVertical ? sourceX + sourceOffset : sourceX;
  const effectiveSourceY = !isVertical ? sourceY + sourceOffset : sourceY;
  const effectiveTargetX = isVertical ? targetX + targetOffset : targetX;
  const effectiveTargetY = !isVertical ? targetY + targetOffset : targetY;

  let edgePath = '';
  let labelX = 0;
  let labelY = 0;

  if (arrowStyle === 'straight') {
    const [path, lx, ly] = getStraightPath({
      sourceX: effectiveSourceX,
      sourceY: effectiveSourceY,
      targetX: effectiveTargetX,
      targetY: effectiveTargetY
    });
    edgePath = path;
    labelX = lx;
    labelY = ly;
  } else {
    // True multi-lane highway router for curved (r=22), rounded-orthogonal (r=12), and sharp orthogonal (r=0)
    const r = arrowStyle === 'curved' ? 22 : arrowStyle === 'rounded-orthogonal' ? 12 : 0;
    if (isVertical) {
      const vGap = effectiveTargetY - effectiveSourceY;
      let laneY: number;
      if (vGap > 40) {
        // Multi-lane distribution: span between 20% and 80% of the vertical gap
        const laneFraction = totalLanes > 1 ? 0.20 + (0.60 * laneIndex) / (totalLanes - 1) : 0.5;
        laneY = effectiveSourceY + vGap * laneFraction;
      } else {
        laneY = effectiveSourceY + 20 + laneIndex * 16;
      }

      if (Math.abs(effectiveSourceX - effectiveTargetX) < 4) {
        edgePath = `M ${effectiveSourceX} ${effectiveSourceY} L ${effectiveTargetX} ${effectiveTargetY}`;
      } else {
        const dir = effectiveTargetX > effectiveSourceX ? 1 : -1;
        const radius = Math.min(r, Math.abs(effectiveTargetX - effectiveSourceX) / 2, Math.abs(laneY - effectiveSourceY) / 2, Math.abs(effectiveTargetY - laneY) / 2);
        edgePath =
          `M ${effectiveSourceX} ${effectiveSourceY} ` +
          `L ${effectiveSourceX} ${laneY - radius} ` +
          `Q ${effectiveSourceX} ${laneY} ${effectiveSourceX + dir * radius} ${laneY} ` +
          `L ${effectiveTargetX - dir * radius} ${laneY} ` +
          `Q ${effectiveTargetX} ${laneY} ${effectiveTargetX} ${laneY + radius} ` +
          `L ${effectiveTargetX} ${effectiveTargetY}`;
      }
      labelX = (effectiveSourceX + effectiveTargetX) / 2;
      labelY = laneY;
    } else {
      // Horizontal multi-lane distribution
      const hGap = effectiveTargetX - effectiveSourceX;
      let laneX: number;
      if (hGap > 40) {
        const laneFraction = totalLanes > 1 ? 0.20 + (0.60 * laneIndex) / (totalLanes - 1) : 0.5;
        laneX = effectiveSourceX + hGap * laneFraction;
      } else {
        laneX = effectiveSourceX + 20 + laneIndex * 16;
      }

      if (Math.abs(effectiveSourceY - effectiveTargetY) < 4) {
        edgePath = `M ${effectiveSourceX} ${effectiveSourceY} L ${effectiveTargetX} ${effectiveTargetY}`;
      } else {
        const dir = effectiveTargetY > effectiveSourceY ? 1 : -1;
        const radius = Math.min(r, Math.abs(effectiveTargetY - effectiveSourceY) / 2, Math.abs(laneX - effectiveSourceX) / 2, Math.abs(effectiveTargetX - laneX) / 2);
        edgePath =
          `M ${effectiveSourceX} ${effectiveSourceY} ` +
          `L ${laneX - radius} ${effectiveSourceY} ` +
          `Q ${laneX} ${effectiveSourceY} ${laneX} ${effectiveSourceY + dir * radius} ` +
          `L ${laneX} ${effectiveTargetY - dir * radius} ` +
          `Q ${laneX} ${effectiveTargetY} ${laneX + radius} ${effectiveTargetY} ` +
          `L ${effectiveTargetX} ${effectiveTargetY}`;
      }
      labelX = laneX;
      labelY = (effectiveSourceY + effectiveTargetY) / 2;
    }
  }

  // Generate a deterministic integer hash from edge ID to stagger labels along lateral axis
  let edgeHash = 0;
  for (let i = 0; i < id.length; i++) {
    edgeHash = (edgeHash * 31 + id.charCodeAt(i)) & 0xffffffff;
  }
  const posSlot = Math.abs(edgeHash) % 5; // 0, 1, 2, 3, 4
  const t = 0.35 + posSlot * 0.075; // 0.35, 0.425, 0.50, 0.575, 0.65

  let finalLabelX = labelX;
  let finalLabelY = labelY;

  if (arrowStyle === 'straight') {
    finalLabelX = effectiveSourceX + (effectiveTargetX - effectiveSourceX) * t;
    finalLabelY = effectiveSourceY + (effectiveTargetY - effectiveSourceY) * t;
  } else {
    // Highway router places labels squarely along the dedicated lane
    finalLabelX = labelX;
    finalLabelY = labelY;
  }

  const lateralStagger = ((posSlot % 3) - 1) * 10;

  const edgeColor = edgeColorByType[edgeData?.type || ''] || edgeColorByType.default;
  const isCrossBoard =
    edgeData?.type === 'CONNECTS_TO_BOARD_2' || edgeData?.type === 'CONNECTS_TO_BOARD_3';

  const dynamicStrokeStyle = {
    ...style,
    stroke: selected || isHovered ? '#2563eb' : (style.stroke || edgeColor),
    strokeWidth: selected || isHovered ? 2.5 : 1.75,
    transition: 'stroke 0.2s, stroke-width 0.2s'
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={dynamicStrokeStyle} markerEnd={markerEnd} />

      {edgeData?.label && edgeLabelMode !== 'off' && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${Math.round(finalLabelX + lateralStagger)}px,${Math.round(finalLabelY)}px)`,
              pointerEvents: 'all'
            }}
            className="nodrag nopan transition-transform duration-150 z-10 hover:z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {edgeLabelMode === 'hover' ? (
              // Minimalist hover-trigger dot mode
              <div className="relative group/pill">
                <div
                  className={`w-4 h-4 rounded-full border shadow-2xs flex items-center justify-center text-[8px] font-bold cursor-pointer transition-all ${
                    isHovered
                      ? 'scale-125 bg-indigo-600 text-white border-indigo-700 shadow-sm'
                      : 'bg-white/95 text-slate-600 border-slate-300 hover:bg-slate-50'
                  }`}
                  title={edgeData.label}
                >
                  ⚡
                </div>
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-max max-w-[220px] p-2 rounded-lg bg-slate-900/95 text-white text-[10px] leading-tight text-center shadow-lg border border-slate-700 pointer-events-none z-50">
                    <div className="font-semibold text-amber-300 text-[9px] uppercase tracking-wider mb-0.5">
                      {edgeData.type}
                    </div>
                    {edgeData.label}
                  </div>
                )}
              </div>
            ) : edgeLabelMode === 'badge' ? (
              // Compact badge mode
              <div
                className={`text-[9px] px-2 py-0.5 rounded-full shadow-2xs border font-semibold cursor-default transition-all max-w-[140px] truncate ${
                  isCrossBoard
                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                    : edgeData.isAdvisory
                    ? 'bg-slate-50 text-slate-600 border-slate-200'
                    : 'bg-white/95 text-indigo-950 border-indigo-200'
                }`}
                title={`${edgeData.type}: ${edgeData.label}`}
              >
                {edgeData.label}
              </div>
            ) : (
              // Standard wrapped, multi-line pill mode (Non-overlapping)
              <div
                className={`text-[9px] px-2 py-1 rounded-md shadow-2xs border text-center break-words leading-tight max-w-[160px] cursor-default transition-all ${
                  isHovered
                    ? 'scale-105 shadow-md bg-white border-indigo-400 text-indigo-950 z-50'
                    : isCrossBoard
                    ? 'bg-amber-50/95 text-amber-950 border-amber-300 font-semibold'
                    : edgeData.isAdvisory
                    ? 'bg-slate-50/95 text-slate-600 border-slate-200 italic'
                    : 'bg-white/95 text-slate-800 border-slate-200/90 font-medium'
                }`}
                title={`${edgeData.type}: ${edgeData.label}`}
              >
                <span className="line-clamp-2 hover:line-clamp-none transition-all">
                  {edgeData.label}
                </span>
              </div>
            )}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
});

RelationshipEdge.displayName = 'RelationshipEdge';
