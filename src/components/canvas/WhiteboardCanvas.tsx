import { useEffect, useState, useMemo, useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  NodeMouseHandler,
  EdgeMouseHandler,
  useReactFlow
} from '@xyflow/react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { calculateElkLayout } from '../../services/layoutService';
import { CustomSectionNode } from './CustomSectionNode';
import { CustomAuthorityNode } from './CustomAuthorityNode';
import { RelationshipEdge } from './RelationshipEdge';
import { Loader2 } from 'lucide-react';

const nodeTypes = {
  sectionNode: CustomSectionNode,
  authorityNode: CustomAuthorityNode
};

const edgeTypes = {
  relationshipEdge: RelationshipEdge
};

function CanvasInner() {
  const {
    nodes: rawNodes,
    relationships: rawRelationships,
    selectNode,
    setRelationshipDraft,
    openModal,
    focusSectionId,
    layoutDirection,
    nodeViewMode,
    alternateDepth,
    alternateSpacing,
    nodeBoxWidth,
    cardHeightPercent,
    customNodeSpacing,
    customVSpacing,
    customArrowHeight,
    arrowStyle,
    fontSizePx,
    lineHeightMult,
    paraSpacingPx
  } = useWhiteboardStore();

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isLoadingLayout, setIsLoadingLayout] = useState(true);
  const { fitView } = useReactFlow();

  // Re-layout when raw nodes, relationships, or any layout/sizing options change
  useEffect(() => {
    let isCancelled = false;
    setIsLoadingLayout(true);

    calculateElkLayout(rawNodes, rawRelationships, {
      direction: layoutDirection,
      focusSectionId: focusSectionId,
      nodeViewMode: nodeViewMode,
      alternateDepth: alternateDepth,
      alternateSpacing: alternateSpacing,
      nodeWidth: nodeBoxWidth,
      cardHeightScale: cardHeightPercent / 100,
      nodeSpacing: customNodeSpacing,
      layerSpacing: customArrowHeight,
      vSpacing: customVSpacing,
      arrowStyle: arrowStyle,
      fontSize: fontSizePx,
      lineHeight: lineHeightMult,
      paraSpacing: paraSpacingPx
    }).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
      if (!isCancelled) {
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
        setIsLoadingLayout(false);

        // Fit view after a tick
        setTimeout(() => {
          fitView({ padding: 0.15, duration: 400 });
        }, 50);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [
    rawNodes,
    rawRelationships,
    focusSectionId,
    layoutDirection,
    nodeViewMode,
    alternateDepth,
    alternateSpacing,
    nodeBoxWidth,
    cardHeightPercent,
    customNodeSpacing,
    customVSpacing,
    customArrowHeight,
    arrowStyle,
    fontSizePx,
    lineHeightMult,
    paraSpacingPx,
    fitView,
    setNodes,
    setEdges
  ]);

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      selectNode(node.id);
    },
    [selectNode]
  );

  const onEdgeClick: EdgeMouseHandler = useCallback(
    (_, edge) => {
      const rel = rawRelationships.find((r) => r.id === edge.id);
      if (rel) {
        setRelationshipDraft({ ...rel });
        openModal('add-relationship');
      }
    },
    [rawRelationships, setRelationshipDraft, openModal]
  );

  const onPaneClick = useCallback(() => {
    // Optionally deselect on canvas empty space click
  }, []);

  const nodeColor = useMemo(() => {
    return (node: Node) => {
      if (node.type === 'sectionNode') return '#0f3d24';
      return '#e2e8f0';
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-[#f8faf9] overflow-hidden">
      {isLoadingLayout && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-xs">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-md">
            <Loader2 className="w-5 h-5 text-emerald-800 animate-spin" />
            <span className="text-xs font-semibold text-slate-700">
              Calculating Hierarchical Whiteboard Layout (ELK.js)...
            </span>
          </div>
        </div>
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        minZoom={0.08}
        maxZoom={1.8}
        onlyRenderVisibleElements={true}
        nodesDraggable={true}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#cbd5e1" />
        <Controls className="!bg-white !border-slate-200 !shadow-sm !rounded-lg overflow-hidden" />
        <MiniMap
          nodeColor={nodeColor}
          nodeStrokeWidth={3}
          zoomable
          pannable
          className="!bg-white !border !border-slate-200 !shadow-sm !rounded-lg overflow-hidden !w-48 !h-36"
        />
      </ReactFlow>
    </div>
  );
}

export function WhiteboardCanvas() {
  return <CanvasInner />;
}
