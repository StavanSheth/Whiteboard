import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
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
  useReactFlow,
  SelectionMode
} from '@xyflow/react';
import { useWhiteboardStore } from '../../store/whiteboardStore';
import { calculateElkLayout } from '../../services/layoutService';
import { CustomSectionNode } from './CustomSectionNode';
import { CustomAuthorityNode } from './CustomAuthorityNode';
import { RelationshipEdge } from './RelationshipEdge';
import { Loader2, Layers, AlignHorizontalJustifyCenter, AlignVerticalJustifyCenter, X, Link as LinkIcon, ZoomIn } from 'lucide-react';

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
    selectedNodeIds,
    setSelectedNodeIds,
    canvasInteractionMode,
    setCanvasInteractionMode,
    connectSourceNodeId,
    setConnectSourceNodeId,
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
    paraSpacingPx,
    updateNodePosition,
    updateMultipleNodePositions
  } = useWhiteboardStore();

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isLoadingLayout, setIsLoadingLayout] = useState(true);
  const isPositionUpdateOnlyRef = useRef(false);
  const { fitView, zoomIn, zoomOut } = useReactFlow();

  // Re-layout when raw nodes, relationships, or any layout/sizing options change
  useEffect(() => {
    if (isPositionUpdateOnlyRef.current) {
      isPositionUpdateOnlyRef.current = false;
      return;
    }

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

  const onSelectionChange = useCallback(
    ({ nodes: selNodes }: { nodes: Node[] }) => {
      const ids = selNodes.map((n) => n.id);
      setSelectedNodeIds(ids);
    },
    [setSelectedNodeIds]
  );

  const onNodeClick: NodeMouseHandler = useCallback(
    (event, node) => {
      if (canvasInteractionMode === 'zoom') {
        if (event.altKey || event.shiftKey) {
          zoomOut({ duration: 300 });
        } else {
          zoomIn({ duration: 300 });
        }
        return;
      }

      if (canvasInteractionMode === 'connect') {
        if (!connectSourceNodeId) {
          setConnectSourceNodeId(node.id);
        } else if (connectSourceNodeId !== node.id) {
          setRelationshipDraft({ sourceNodeId: connectSourceNodeId, targetNodeId: node.id });
          openModal('add-relationship');
          setConnectSourceNodeId(null);
        } else {
          setConnectSourceNodeId(null);
        }
        return;
      }

      if (event.shiftKey || event.ctrlKey || event.metaKey) {
        return;
      }
      selectNode(node.id);
    },
    [canvasInteractionMode, connectSourceNodeId, setConnectSourceNodeId, setRelationshipDraft, openModal, selectNode, zoomIn, zoomOut]
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

  const onPaneClick = useCallback(
    (event: React.MouseEvent) => {
      if (canvasInteractionMode === 'zoom') {
        if (event.altKey || event.shiftKey) {
          zoomOut({ duration: 300 });
        } else {
          zoomIn({ duration: 300 });
        }
      } else if (canvasInteractionMode === 'connect') {
        setConnectSourceNodeId(null);
      }
    },
    [canvasInteractionMode, zoomIn, zoomOut, setConnectSourceNodeId]
  );

  const onNodeDragStop = useCallback(
    (_event: any, node: Node, draggedNodes?: Node[]) => {
      const allMoved = draggedNodes && draggedNodes.length > 0 ? draggedNodes : [node];
      if (allMoved.length > 0) {
        isPositionUpdateOnlyRef.current = true;
        const updates = allMoved
          .filter((n) => n && n.id && n.position)
          .map((n) => ({
            id: n.id,
            position: {
              x: Math.round(n.position.x),
              y: Math.round(n.position.y)
            }
          }));
        if (updates.length === 1) {
          updateNodePosition(updates[0].id, updates[0].position);
        } else if (updates.length > 1) {
          updateMultipleNodePositions(updates);
        }
      }
    },
    [updateNodePosition, updateMultipleNodePositions]
  );

  const onSelectionDragStop = useCallback(
    (_event: any, draggedNodes: Node[]) => {
      if (draggedNodes && draggedNodes.length > 0) {
        isPositionUpdateOnlyRef.current = true;
        const updates = draggedNodes
          .filter((n) => n && n.id && n.position)
          .map((n) => ({
            id: n.id,
            position: {
              x: Math.round(n.position.x),
              y: Math.round(n.position.y)
            }
          }));
        updateMultipleNodePositions(updates);
      }
    },
    [updateMultipleNodePositions]
  );

  const handleAlignHorizontal = useCallback(() => {
    if (selectedNodeIds.length <= 1) return;
    const selNodes = nodes.filter((n) => selectedNodeIds.includes(n.id));
    if (selNodes.length <= 1) return;
    const avgY = Math.round(selNodes.reduce((sum, n) => sum + n.position.y, 0) / selNodes.length);
    isPositionUpdateOnlyRef.current = true;
    const updates = selNodes.map((n) => ({ id: n.id, position: { x: n.position.x, y: avgY } }));
    setNodes((prev) =>
      prev.map((n) => (selectedNodeIds.includes(n.id) ? { ...n, position: { ...n.position, y: avgY } } : n))
    );
    updateMultipleNodePositions(updates);
  }, [selectedNodeIds, nodes, setNodes, updateMultipleNodePositions]);

  const handleAlignVertical = useCallback(() => {
    if (selectedNodeIds.length <= 1) return;
    const selNodes = nodes.filter((n) => selectedNodeIds.includes(n.id));
    if (selNodes.length <= 1) return;
    const avgX = Math.round(selNodes.reduce((sum, n) => sum + n.position.x, 0) / selNodes.length);
    isPositionUpdateOnlyRef.current = true;
    const updates = selNodes.map((n) => ({ id: n.id, position: { x: avgX, y: n.position.y } }));
    setNodes((prev) =>
      prev.map((n) => (selectedNodeIds.includes(n.id) ? { ...n, position: { ...n.position, x: avgX } } : n))
    );
    updateMultipleNodePositions(updates);
  }, [selectedNodeIds, nodes, setNodes, updateMultipleNodePositions]);

  const handleDeselectAll = useCallback(() => {
    setNodes((prev) => prev.map((n) => ({ ...n, selected: false })));
    setSelectedNodeIds([]);
  }, [setNodes, setSelectedNodeIds]);

  // Keyboard shortcuts: 'h' for pan, 'v' for select, 'm' for move, 'c' for connect, 'z' for zoom, 'Escape' to deselect/reset
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'h' || e.key === 'H') {
        setCanvasInteractionMode('pan');
      } else if (e.key === 'v' || e.key === 'V') {
        setCanvasInteractionMode('select');
      } else if (e.key === 'm' || e.key === 'M') {
        setCanvasInteractionMode('move');
      } else if (e.key === 'c' || e.key === 'C') {
        setCanvasInteractionMode('connect');
      } else if (e.key === 'z' || e.key === 'Z') {
        setCanvasInteractionMode('zoom');
      } else if (e.key === 'Escape') {
        handleDeselectAll();
        setConnectSourceNodeId(null);
        setCanvasInteractionMode('pan');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setCanvasInteractionMode, handleDeselectAll, setConnectSourceNodeId]);

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
        onNodeDragStop={onNodeDragStop}
        onSelectionDragStop={onSelectionDragStop}
        onSelectionChange={onSelectionChange}
        selectionMode={SelectionMode.Partial}
        panOnDrag={
          canvasInteractionMode === 'pan'
            ? true
            : canvasInteractionMode === 'move'
            ? false
            : [1, 2]
        }
        selectionOnDrag={canvasInteractionMode === 'select'}
        selectionKeyCode={['Shift']}
        multiSelectionKeyCode={['Shift', 'Meta', 'Control']}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        minZoom={0.08}
        maxZoom={1.8}
        onlyRenderVisibleElements={true}
        nodesDraggable={canvasInteractionMode !== 'zoom'}
        proOptions={{ hideAttribution: true }}
        className={`mode-${canvasInteractionMode}`}
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

      {/* Floating Multi-Selection Action Bar */}
      {selectedNodeIds.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 px-4 py-2 bg-slate-900/95 text-white rounded-xl shadow-2xl backdrop-blur-md border border-emerald-500/50 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center gap-1.5 font-bold text-xs text-amber-300 pr-2.5 border-r border-slate-700">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>{selectedNodeIds.length} Cards Selected</span>
          </div>
          <span className="text-[11px] text-slate-300 hidden md:inline">
            Drag any card to move cluster
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleAlignHorizontal}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-slate-700 hover:border-emerald-500"
              title="Align selected cards horizontally to the same row"
            >
              <AlignHorizontalJustifyCenter className="w-3.5 h-3.5 text-emerald-400" />
              <span>Align Row</span>
            </button>
            <button
              onClick={handleAlignVertical}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-slate-700 hover:border-emerald-500"
              title="Align selected cards vertically to the same column"
            >
              <AlignVerticalJustifyCenter className="w-3.5 h-3.5 text-emerald-400" />
              <span>Align Col</span>
            </button>
            <button
              onClick={handleDeselectAll}
              className="p-1 rounded-lg bg-slate-800 hover:bg-rose-900/70 text-slate-400 hover:text-white transition-colors ml-1 cursor-pointer border border-slate-700"
              title="Deselect All (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      {/* Floating Prompt for Connect Tool */}
      {canvasInteractionMode === 'connect' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 bg-slate-900/95 text-white rounded-xl shadow-xl backdrop-blur-md border border-purple-500/70 animate-in fade-in slide-in-from-top-2 duration-200 text-xs">
          <LinkIcon className="w-4 h-4 text-purple-400 animate-pulse" />
          {connectSourceNodeId ? (
            <span>
              Source selected: <strong className="font-mono text-amber-300">{connectSourceNodeId}</strong>. Now click the <strong>target card</strong> to create relationship.
            </span>
          ) : (
            <span>
              <strong>Connect Tool Active:</strong> Click the first card (source) to begin an arrow link.
            </span>
          )}
          <button
            onClick={() => {
              setConnectSourceNodeId(null);
              setCanvasInteractionMode('pan');
            }}
            className="ml-2 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-bold cursor-pointer border border-slate-700"
          >
            Done (Esc)
          </button>
        </div>
      )}

      {/* Floating Prompt for Zoom Tool */}
      {canvasInteractionMode === 'zoom' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 bg-slate-900/95 text-white rounded-xl shadow-xl backdrop-blur-md border border-amber-500/70 animate-in fade-in slide-in-from-top-2 duration-200 text-xs">
          <ZoomIn className="w-4 h-4 text-amber-400" />
          <span>
            <strong>Zoom Tool Active:</strong> Click anywhere to zoom in (+25%), or hold <strong>Alt/Shift</strong> and click to zoom out.
          </span>
          <button
            onClick={() => setCanvasInteractionMode('pan')}
            className="ml-2 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-bold cursor-pointer border border-slate-700"
          >
            Done (Esc)
          </button>
        </div>
      )}
    </div>
  );
}

export function WhiteboardCanvas() {
  return <CanvasInner />;
}
