import { memo, useState } from 'react';
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  getStraightPath,
  getSmoothStepPath
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

  let edgePath = '';
  let labelX = 0;
  let labelY = 0;

  if (arrowStyle === 'straight') {
    const [path, lx, ly] = getStraightPath({
      sourceX,
      sourceY,
      targetX,
      targetY
    });
    edgePath = path;
    labelX = lx;
    labelY = ly;
  } else if (arrowStyle === 'orthogonal') {
    const [path, lx, ly] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: 0
    });
    edgePath = path;
    labelX = lx;
    labelY = ly;
  } else if (arrowStyle === 'rounded-orthogonal') {
    const [path, lx, ly] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: 14
    });
    edgePath = path;
    labelX = lx;
    labelY = ly;
  } else {
    // Default curved Bezier
    const [path, lx, ly] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition
    });
    edgePath = path;
    labelX = lx;
    labelY = ly;
  }

  // Deterministic stagger offset to prevent parallel edge labels from colliding horizontally
  const offsetIndex = (parseInt(id.replace(/\D/g, ''), 10) || 0) % 3;
  const staggeredYOffset = (offsetIndex - 1) * 16; // -16px, 0px, +16px

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
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY + staggeredYOffset}px)`,
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
