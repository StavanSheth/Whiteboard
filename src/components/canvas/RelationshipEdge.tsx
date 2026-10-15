import { memo } from 'react';
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
    data
  } = props;

  const arrowStyle = useWhiteboardStore((s) => s.arrowStyle);
  const edgeData = data as unknown as RelationshipEdgeData | undefined;

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

  const isCrossBoard =
    edgeData?.type === 'CONNECTS_TO_BOARD_2' || edgeData?.type === 'CONNECTS_TO_BOARD_3';

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
      {edgeData?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'all'
            }}
            className="nodrag nopan"
          >
            <div
              className={`text-[9px] px-1.5 py-0.5 rounded shadow-xs border whitespace-nowrap cursor-default transition-all ${
                isCrossBoard
                  ? 'bg-amber-50 text-amber-900 border-amber-300 font-semibold'
                  : edgeData.isAdvisory
                  ? 'bg-slate-50 text-slate-600 border-slate-200 italic'
                  : 'bg-white text-slate-700 border-slate-200 font-medium'
              }`}
              title={`${edgeData.type}: ${edgeData.label}`}
            >
              {edgeData.label}
            </div>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
});

RelationshipEdge.displayName = 'RelationshipEdge';
