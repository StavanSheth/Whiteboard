import ELK, { ElkNode } from 'elkjs/lib/elk.bundled.js';
import { Node, Edge, MarkerType } from '@xyflow/react';
import { EducationNode, RelationshipEdgeData } from '../types';

const elk = new ELK();

// Node dimensions based on node category and importance
export const NODE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  sectionHub: { width: 330, height: 85 },
  root: { width: 440, height: 160 },
  constitutional: { width: 280, height: 110 },
  legislature: { width: 280, height: 110 },
  executive: { width: 280, height: 110 },
  department: { width: 280, height: 110 },
  statutoryRegulator: { width: 300, height: 120 },
  examinationAgency: { width: 300, height: 120 },
  schoolBoard: { width: 280, height: 110 },
  institution: { width: 280, height: 110 },
  oversight: { width: 280, height: 110 },
  process: { width: 290, height: 115 },
  legalInstrument: { width: 280, height: 105 },
  default: { width: 280, height: 110 }
};

export const FULL_NODE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  sectionHub: { width: 350, height: 95 },
  root: { width: 480, height: 180 },
  default: { width: 360, height: 500 }
};

/**
 * Dynamically computes accurate height for nodes based on actual content length,
 * font scaling, line height multiplier, and paragraph spacing to ensure ELK.js
 * never overlaps cards on canvas or in printable tree diagrams.
 */
export function estimateNodeHeight(
  node: EducationNode,
  isFull: boolean,
  fontScale: number = 1.0,
  lineScale: number = 1.0,
  paraSpacing: number = 6,
  cardWidth: number = 260,
  dockedFkCount: number = 0,
  cardHeightScale: number = 1.0
): number {
  if (node.id === 'ROOT-IND-EDU-GOV') {
    return Math.round(170 * Math.max(1, fontScale * 0.5 + lineScale * 0.5) * cardHeightScale);
  }
  if (node.type === 'sectionHub') {
    return Math.round(75 * Math.max(1, fontScale * 0.5 + lineScale * 0.5) * cardHeightScale);
  }

  const typoFactor = fontScale * lineScale;
  const safeWidth = Math.max(160, cardWidth);
  // Estimate usable characters per line based on width and font scale
  const charsPerLine = Math.max(18, Math.floor((safeWidth - 28) / (7.2 * fontScale)));

  if (!isFull) {
    // In compact mode: header (~22px), title (~28px), single primary badge (~22px), 1-line summary (~18px), padding (~20px)
    let baseH = 98 * typoFactor + paraSpacing;
    if (node.title && node.title.length > charsPerLine) {
      baseH += 18 * typoFactor;
    }
    if (node.summary) {
      baseH += 18 * typoFactor;
    }
    if (dockedFkCount > 0) {
      baseH += dockedFkCount * Math.round(22 * fontScale) + 6;
    }
    return Math.max(60, Math.round(baseH * cardHeightScale));
  }

  // Full Dossier dynamic text wrapping
  let h = 88 * typoFactor; // header, level tag, title, padding

  if (node.legalStatus) h += 24 * typoFactor;

  // Domain badges in header (e.g. examAgency, institutionType, constitutionalArticle, regulatoryBodyOrApex)
  if (
    node.examDetails?.examAgency ||
    node.institutionDetails?.institutionType ||
    node.governanceDetails?.constitutionalArticle ||
    node.bankingJudicialDetails?.regulatoryBodyOrApex
  ) {
    h += 24 * typoFactor;
  }

  if (node.summary) {
    const summaryLines = Math.ceil(node.summary.length / charsPerLine);
    h += summaryLines * 15 * typoFactor + paraSpacing;
  }

  // Whiteboard 3: Examination Lifecycle Details
  if (node.examDetails) {
    let examH = 45 * typoFactor;
    if (node.examDetails.eligibilityCriteria) examH += 26 * typoFactor;
    if (node.examDetails.applicationWindow) examH += 24 * typoFactor;
    if (node.examDetails.examStages && node.examDetails.examStages.length > 0) {
      examH += (24 + Math.ceil(node.examDetails.examStages.length / 3) * 22) * typoFactor;
    }
    if (node.examDetails.outcome) examH += 26 * typoFactor;
    if (node.examDetails.counsellingBody) examH += 26 * typoFactor;
    if (node.examDetails.nextCareerStage) examH += 26 * typoFactor;
    h += examH + paraSpacing;
  }

  // Whiteboard 2: Institutional & Degree Details
  if (node.institutionDetails) {
    let instH = 45 * typoFactor;
    if (node.institutionDetails.institutionType) instH += 24 * typoFactor;
    if (node.institutionDetails.controlledBy) instH += 24 * typoFactor;
    if (node.institutionDetails.curriculumBody) instH += 24 * typoFactor;
    if (node.institutionDetails.prerequisiteStream) instH += 24 * typoFactor;
    if (node.institutionDetails.examinationTimeline) instH += 28 * typoFactor;
    if (node.institutionDetails.programmesOffered && node.institutionDetails.programmesOffered.length > 0) {
      instH += (24 + Math.ceil(node.institutionDetails.programmesOffered.length / 2) * 20) * typoFactor;
    }
    if (node.institutionDetails.admissionRoute) instH += 24 * typoFactor;
    if (node.institutionDetails.awardingBody) instH += 22 * typoFactor;
    if (node.institutionDetails.accreditation) instH += 22 * typoFactor;
    if (node.institutionDetails.nheqfLevel) instH += 22 * typoFactor;
    if (node.institutionDetails.careerValue) {
      const cvLines = node.institutionDetails.careerValue.split('\n');
      let totalCvLines = 0;
      for (const line of cvLines) {
        totalCvLines += Math.max(1, Math.ceil(line.length / charsPerLine));
      }
      instH += (36 + totalCvLines * 16) * typoFactor;
    }
    h += instH + paraSpacing;
  }

  // Whiteboard 4: Democratic Governance Hierarchy Details
  if (node.governanceDetails) {
    let govH = 45 * typoFactor;
    if (node.governanceDetails.constitutionalArticle) govH += 24 * typoFactor;
    if (node.governanceDetails.positionName) govH += 24 * typoFactor;
    if (node.governanceDetails.cadreOrService) govH += 24 * typoFactor;
    if (node.governanceDetails.electoralOrSelectionMethod) govH += 26 * typoFactor;
    if (node.governanceDetails.geographicalJurisdiction) govH += 28 * typoFactor;
    if (node.governanceDetails.tenure) govH += 26 * typoFactor;
    if (node.governanceDetails.reportingTo) govH += 24 * typoFactor;
    h += govH + paraSpacing;
  }

  // Whiteboard 5: Banking & Judicial Hierarchy Details
  if (node.bankingJudicialDetails) {
    let bankH = 45 * typoFactor;
    if (node.bankingJudicialDetails.regulatoryBodyOrApex) bankH += 26 * typoFactor;
    if (node.bankingJudicialDetails.tier) bankH += 24 * typoFactor;
    if (node.bankingJudicialDetails.jurisdictionOrScope) bankH += 30 * typoFactor;
    if (node.bankingJudicialDetails.appointmentProcess) bankH += 26 * typoFactor;
    if (node.bankingJudicialDetails.grievanceOrAppellateRoute) bankH += 30 * typoFactor;
    h += bankH + paraSpacing;
  }

  if (node.establishingLaw && node.establishingLaw.length > 0) {
    let lawChars = 0;
    node.establishingLaw.forEach((l) => (lawChars += l.length));
    const lawLines = Math.ceil(lawChars / charsPerLine);
    h += (22 + lawLines * 14) * typoFactor + Math.round(paraSpacing / 2);
  }

  if (node.ministerialRelationship || node.leadershipRole) {
    h += 40 * typoFactor + Math.round(paraSpacing / 2);
  }

  if (node.mandate && node.mandate.length > 0) {
    let mandateChars = 0;
    node.mandate.forEach((m) => (mandateChars += m.length));
    const mandateLines = Math.ceil(mandateChars / charsPerLine);
    h += (24 + mandateLines * 14) * typoFactor + paraSpacing;
  }

  if (node.powers && node.powers.length > 0) {
    let powersChars = 0;
    node.powers.forEach((p) => (powersChars += p.length));
    const powersLines = Math.ceil(powersChars / charsPerLine);
    h += (26 + powersLines * 14) * typoFactor + paraSpacing;
  }

  if (node.limitations && node.limitations.length > 0) {
    let limChars = 0;
    node.limitations.forEach((l) => (limChars += l.length));
    const limLines = Math.ceil(limChars / charsPerLine);
    h += (26 + limLines * 14) * typoFactor + paraSpacing;
  }

  if ((node.inputs && node.inputs.length > 0) || (node.outputs && node.outputs.length > 0)) {
    h += 52 * typoFactor;
  }

  if (node.notes) {
    const noteLines = Math.ceil(node.notes.length / charsPerLine);
    h += (18 + noteLines * 13) * typoFactor;
  }

  if (dockedFkCount > 0) {
    h += dockedFkCount * Math.round(24 * fontScale) + 8;
  }

  // Generous padding (+24px) to ensure no border clipping or overlap
  return Math.max(70, Math.round((h + 24) * cardHeightScale));
}

export type LayoutDirection = 'DOWN' | 'RIGHT';

export interface LayoutOptions {
  direction?: LayoutDirection;
  nodeSpacing?: number;
  vSpacing?: number;
  layerSpacing?: number;
  focusSectionId?: string | null;
  nodeViewMode?: 'full' | 'compact';
  alternateDepth?: boolean;
  alternateSpacing?: number;
  nodeWidth?: number;
  cardHeightScale?: number;
  fontSize?: number;
  lineHeight?: number;
  paraSpacing?: number;
  arrowStyle?: 'curved' | 'straight' | 'orthogonal' | 'rounded-orthogonal';
}

/**
 * Calculates hierarchical compound graph layout using ELK.js
 */
export async function calculateElkLayout(
  nodes: EducationNode[],
  relationships: RelationshipEdgeData[],
  options: LayoutOptions = {}
): Promise<{ nodes: Node[]; edges: Edge[] }> {
  const direction = options.direction || 'DOWN';
  const isFull = options.nodeViewMode === 'full';
  const nodeSpacing = options.nodeSpacing ?? (isFull ? 100 : 70);
  const layerSpacing = options.layerSpacing ?? (isFull ? 180 : 120);
  const customBoxWidth = options.nodeWidth;
  const cardHeightScale = options.cardHeightScale ?? 1.0;
  const fontScale = (options.fontSize ?? 11) / 11;
  const lineScale = (options.lineHeight ?? 1.35) / 1.35;
  const paraSpacing = options.paraSpacing ?? 6;

  // Filter nodes if focusSectionId is specified
  const filteredNodes = options.focusSectionId
    ? nodes.filter(
        (n) =>
          n.id === 'ROOT-IND-EDU-GOV' ||
          n.id === options.focusSectionId ||
          n.sectionId === options.focusSectionId
      )
    : nodes;

  const nodeIds = new Set(filteredNodes.map((n) => n.id));

  // Filter edges corresponding to visible nodes
  const filteredEdges = relationships.filter(
    (e) => nodeIds.has(e.sourceNodeId) && nodeIds.has(e.targetNodeId)
  );

  // Build ELK graph nodes with dynamic accurate dimensions
  const elkChildren: ElkNode[] = filteredNodes.map((node) => {
    const isRoot = node.id === 'ROOT-IND-EDU-GOV';
    const isHub = node.type === 'sectionHub';

    let width = customBoxWidth
      ? isRoot
        ? Math.round(customBoxWidth * 1.3)
        : isHub
        ? Math.round(customBoxWidth * 1.15)
        : customBoxWidth
      : isFull
      ? isRoot
        ? 480
        : isHub
        ? 380
        : 360
      : isRoot
      ? 440
      : isHub
      ? 340
      : NODE_DIMENSIONS[node.type]?.width || 280;

    let height = estimateNodeHeight(
      node,
      isFull,
      fontScale,
      lineScale,
      paraSpacing,
      width,
      0,
      cardHeightScale
    );

    return {
      id: node.id,
      width,
      height
    };
  });

  const elkEdges = filteredEdges.map((edge) => ({
    id: edge.id,
    sources: [edge.sourceNodeId],
    targets: [edge.targetNodeId]
  }));

  const elkGraph: ElkNode = {
    id: 'root-layout',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': direction,
      'elk.spacing.nodeNode': String(nodeSpacing),
      'elk.layered.spacing.nodeNodeBetweenLayers': String(layerSpacing),
      'elk.layered.cycleBreaking.strategy': 'DEPTH_FIRST',
      'elk.layered.nodePlacement.strategy': 'BRANDES_KOEPF',
      'elk.layered.nodePlacement.favorStraightEdges': 'true',
      'elk.spacing.componentComponent': '120',
      'elk.edgeRouting':
        options.arrowStyle === 'orthogonal' || options.arrowStyle === 'rounded-orthogonal'
          ? 'ORTHOGONAL'
          : 'SPLINES'
    },
    children: elkChildren,
    edges: elkEdges
  };

  try {
    const layouted = await elk.layout(elkGraph);
    const positionMap = new Map<string, { x: number; y: number }>();
    const isRight = direction === 'RIGHT';

    if (layouted.children) {
      for (const child of layouted.children) {
        positionMap.set(child.id, { x: child.x || 0, y: child.y || 0 });
      }

      // TRUE BOUNDING-BOX COLLISION RESOLUTION PASS
      // Guarantees zero overlapping between cards in both horizontal and vertical directions
      const childList = layouted.children;

      if (isRight) {
        // Group by X coordinates (horizontal columns)
        const colBuckets: ElkNode[][] = [];
        const sorted = [...childList].sort((a, b) => (a.x || 0) - (b.x || 0));
        sorted.forEach((node) => {
          const nx = node.x || 0;
          const bucket = colBuckets.find((b) => Math.abs((b[0].x || 0) - nx) < 80);
          if (bucket) {
            bucket.push(node);
          } else {
            colBuckets.push([node]);
          }
        });
        colBuckets.sort((a, b) => (a[0].x || 0) - (b[0].x || 0));

        // Pass 1: Prevent vertical overlap within each column
        for (const col of colBuckets) {
          col.sort((a, b) => (positionMap.get(a.id)?.y ?? a.y ?? 0) - (positionMap.get(b.id)?.y ?? b.y ?? 0));
          for (let i = 1; i < col.length; i++) {
            const prev = col[i - 1];
            const curr = col[i];
            const prevY = positionMap.get(prev.id)?.y ?? prev.y ?? 0;
            const prevH = prev.height || 120;
            const currY = positionMap.get(curr.id)?.y ?? curr.y ?? 0;
            const minRequiredY = prevY + prevH + nodeSpacing;
            if (currY < minRequiredY) {
              const shiftY = minRequiredY - currY;
              for (let j = i; j < col.length; j++) {
                const nodeToShift = col[j];
                const p = positionMap.get(nodeToShift.id);
                if (p) positionMap.set(nodeToShift.id, { x: p.x, y: p.y + shiftY });
              }
            }
          }
        }

        // Pass 2: Alternate Depth Staggering (if enabled)
        if (options.alternateDepth) {
          for (const col of colBuckets) {
            if (col.length > 1) {
              col.forEach((node, idx) => {
                if (idx % 2 === 1) {
                  const staggerX = options.alternateSpacing ?? 60;
                  const current = positionMap.get(node.id);
                  if (current) positionMap.set(node.id, { x: current.x + staggerX, y: current.y });
                }
              });
            }
          }
        }

        // Pass 3: Prevent horizontal overlap across successive columns
        for (let colIdx = 0; colIdx < colBuckets.length - 1; colIdx++) {
          const currentCol = colBuckets[colIdx];
          const nextCol = colBuckets[colIdx + 1];

          let maxRight = 0;
          for (const n of currentCol) {
            const px = positionMap.get(n.id)?.x ?? n.x ?? 0;
            const pw = n.width || 340;
            if (px + pw > maxRight) maxRight = px + pw;
          }

          const requiredNextX = maxRight + layerSpacing;
          let minNextX = Infinity;
          for (const n of nextCol) {
            const px = positionMap.get(n.id)?.x ?? n.x ?? 0;
            if (px < minNextX) minNextX = px;
          }

          if (minNextX < requiredNextX) {
            const shiftX = requiredNextX - minNextX;
            for (let nextIdx = colIdx + 1; nextIdx < colBuckets.length; nextIdx++) {
              for (const n of colBuckets[nextIdx]) {
                const curr = positionMap.get(n.id);
                if (curr) positionMap.set(n.id, { x: curr.x + shiftX, y: curr.y });
              }
            }
          }
        }
      } else {
        // Group by Y coordinates (vertical ranks/layers)
        const layerBuckets: ElkNode[][] = [];
        const sorted = [...childList].sort((a, b) => (a.y || 0) - (b.y || 0));
        sorted.forEach((node) => {
          const ny = node.y || 0;
          const bucket = layerBuckets.find((b) => Math.abs((b[0].y || 0) - ny) < 80);
          if (bucket) {
            bucket.push(node);
          } else {
            layerBuckets.push([node]);
          }
        });
        layerBuckets.sort((a, b) => (a[0].y || 0) - (b[0].y || 0));

        // Pass 1: Prevent horizontal overlap within each layer
        for (const layer of layerBuckets) {
          layer.sort((a, b) => (positionMap.get(a.id)?.x ?? a.x ?? 0) - (positionMap.get(b.id)?.x ?? b.x ?? 0));
          for (let i = 1; i < layer.length; i++) {
            const prev = layer[i - 1];
            const curr = layer[i];
            const prevX = positionMap.get(prev.id)?.x ?? prev.x ?? 0;
            const prevW = prev.width || 340;
            const currX = positionMap.get(curr.id)?.x ?? curr.x ?? 0;
            const minRequiredX = prevX + prevW + nodeSpacing;
            if (currX < minRequiredX) {
              const shiftX = minRequiredX - currX;
              for (let j = i; j < layer.length; j++) {
                const nodeToShift = layer[j];
                const p = positionMap.get(nodeToShift.id);
                if (p) positionMap.set(nodeToShift.id, { x: p.x + shiftX, y: p.y });
              }
            }
          }
        }

        // Pass 2: Alternate Depth Staggering (if enabled)
        if (options.alternateDepth) {
          for (const layer of layerBuckets) {
            if (layer.length > 1) {
              layer.forEach((node, idx) => {
                if (idx % 2 === 1) {
                  const staggerY = options.alternateSpacing ?? 60;
                  const current = positionMap.get(node.id);
                  if (current) positionMap.set(node.id, { x: current.x, y: current.y + staggerY });
                }
              });
            }
          }
        }

        // Pass 3: Prevent vertical overlap across successive layers
        for (let layerIdx = 0; layerIdx < layerBuckets.length - 1; layerIdx++) {
          const currentLayer = layerBuckets[layerIdx];
          const nextLayer = layerBuckets[layerIdx + 1];

          let maxBottom = 0;
          for (const n of currentLayer) {
            const rawNode = filteredNodes.find((fn) => fn.id === n.id);
            const py = positionMap.get(n.id)?.y ?? n.y ?? 0;
            const ph = rawNode
              ? estimateNodeHeight(rawNode, isFull, fontScale, lineScale, paraSpacing, n.width || customBoxWidth || 340, 0, cardHeightScale)
              : n.height || 160;
            if (py + ph > maxBottom) maxBottom = py + ph;
          }

          const requiredNextY = maxBottom + layerSpacing;
          let minNextY = Infinity;
          for (const n of nextLayer) {
            const py = positionMap.get(n.id)?.y ?? n.y ?? 0;
            if (py < minNextY) minNextY = py;
          }

          if (minNextY < requiredNextY) {
            const shiftY = requiredNextY - minNextY;
            for (let nextIdx = layerIdx + 1; nextIdx < layerBuckets.length; nextIdx++) {
              for (const n of layerBuckets[nextIdx]) {
                const curr = positionMap.get(n.id);
                if (curr) positionMap.set(n.id, { x: curr.x, y: curr.y + shiftY });
              }
            }
          }
        }
      }

      // Pass 4: Global Pairwise Collision Sweep (Iterative Separation)
      // Ensures that regardless of layer assignment or manual positions, NO TWO CARDS EVER OVERLAP
      const nodeItems = childList.map((n: ElkNode) => {
        const rawNode = filteredNodes.find((fn) => fn.id === n.id);
        const w = n.width || customBoxWidth || (isFull ? 360 : 280);
        const h = rawNode
          ? estimateNodeHeight(rawNode, isFull, fontScale, lineScale, paraSpacing, w, 0, cardHeightScale)
          : n.height || 200;
        return { id: n.id, width: w, height: h };
      });

      for (let iter = 0; iter < 12; iter++) {
        let hadCollision = false;
        nodeItems.sort((a: any, b: any) => {
          const posA = positionMap.get(a.id) || { x: 0, y: 0 };
          const posB = positionMap.get(b.id) || { x: 0, y: 0 };
          return isRight ? posA.x - posB.x : posA.y - posB.y;
        });

        for (let i = 0; i < nodeItems.length; i++) {
          const a = nodeItems[i];
          const posA = positionMap.get(a.id);
          if (!posA) continue;

          for (let j = i + 1; j < nodeItems.length; j++) {
            const b = nodeItems[j];
            const posB = positionMap.get(b.id);
            if (!posB) continue;

            const marginX = Math.max(30, nodeSpacing * 0.8);
            const marginY = Math.max(40, (isRight ? nodeSpacing : layerSpacing) * 0.7);

            const aLeft = posA.x;
            const aRight = posA.x + a.width;
            const aTop = posA.y;
            const aBottom = posA.y + a.height;

            const bLeft = posB.x;
            const bRight = posB.x + b.width;
            const bTop = posB.y;
            const bBottom = posB.y + b.height;

            const xOverlap = aLeft < bRight + marginX && aRight + marginX > bLeft;
            const yOverlap = aTop < bBottom + marginY && aBottom + marginY > bTop;

            if (xOverlap && yOverlap) {
              hadCollision = true;
              if (isRight) {
                if (bLeft >= aLeft) {
                  positionMap.set(b.id, { x: aRight + marginX, y: posB.y });
                } else {
                  positionMap.set(a.id, { x: bRight + marginX, y: posA.y });
                }
              } else {
                if (Math.abs(aTop - bTop) < 60) {
                  if (bLeft >= aLeft) {
                    positionMap.set(b.id, { x: aRight + marginX, y: posB.y });
                  } else {
                    positionMap.set(a.id, { x: bRight + marginX, y: posA.y });
                  }
                } else {
                  if (bTop >= aTop) {
                    positionMap.set(b.id, { x: posB.x, y: aBottom + marginY });
                  } else {
                    positionMap.set(a.id, { x: posA.x, y: bBottom + marginY });
                  }
                }
              }
            }
          }
        }
        if (!hadCollision) break;
      }
    }

    // Convert back to React Flow nodes with final position safety check
    const rfNodes: Node[] = filteredNodes.map((n) => {
      const pos =
        n.position && typeof n.position.x === 'number' && typeof n.position.y === 'number'
          ? n.position
          : positionMap.get(n.id) || { x: 0, y: 0 };
      const isHub = n.type === 'sectionHub';

      return {
        id: n.id,
        type: isHub ? 'sectionNode' : 'authorityNode',
        position: { ...pos },
        data: { ...n }
      };
    });

    // Final safety pass on rfNodes to guarantee zero 2D overlaps
    for (let iter = 0; iter < 8; iter++) {
      let resolved = true;
      for (let i = 0; i < rfNodes.length; i++) {
        const a = rfNodes[i];
        const rawA = filteredNodes.find((fn) => fn.id === a.id);
        const wA = customBoxWidth || (isFull ? 360 : 280);
        const hA = rawA
          ? estimateNodeHeight(rawA, isFull, fontScale, lineScale, paraSpacing, wA, 0, cardHeightScale)
          : 200;

        for (let j = i + 1; j < rfNodes.length; j++) {
          const b = rfNodes[j];
          const rawB = filteredNodes.find((fn) => fn.id === b.id);
          const wB = customBoxWidth || (isFull ? 360 : 280);
          const hB = rawB
            ? estimateNodeHeight(rawB, isFull, fontScale, lineScale, paraSpacing, wB, 0, cardHeightScale)
            : 200;

          const marginX = Math.max(30, nodeSpacing * 0.7);
          const marginY = Math.max(40, (isRight ? nodeSpacing : layerSpacing) * 0.6);

          const aLeft = a.position.x;
          const aRight = a.position.x + wA;
          const aTop = a.position.y;
          const aBottom = a.position.y + hA;

          const bLeft = b.position.x;
          const bRight = b.position.x + wB;
          const bTop = b.position.y;
          const bBottom = b.position.y + hB;

          const xOverlap = aLeft < bRight + marginX && aRight + marginX > bLeft;
          const yOverlap = aTop < bBottom + marginY && aBottom + marginY > bTop;

          if (xOverlap && yOverlap) {
            resolved = false;
            if (isRight) {
              if (bLeft >= aLeft) {
                b.position.x = aRight + marginX;
              } else {
                a.position.x = bRight + marginX;
              }
            } else {
              if (Math.abs(aTop - bTop) < 60) {
                if (bLeft >= aLeft) {
                  b.position.x = aRight + marginX;
                } else {
                  a.position.x = bRight + marginX;
                }
              } else {
                if (bTop >= aTop) {
                  b.position.y = aBottom + marginY;
                } else {
                  a.position.y = bBottom + marginY;
                }
              }
            }
          }
        }
      }
      if (resolved) break;
    }

    // Convert back to React Flow edges with arrow pointers and rich styles
    const rfEdges: Edge[] = filteredEdges.map((e) => {
      const isCrossBoard =
        e.type === 'CONNECTS_TO_BOARD_2' || e.type === 'CONNECTS_TO_BOARD_3';
      const isAdvisory = e.isAdvisory || e.type === 'ADVISES' || e.type === 'COORDINATES';
      const strokeColor = isCrossBoard ? '#d97706' : isAdvisory ? '#64748b' : '#0d9488';

      return {
        id: e.id,
        source: e.sourceNodeId,
        target: e.targetNodeId,
        type: 'relationshipEdge',
        data: { ...e },
        animated: isCrossBoard,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 14,
          height: 14,
          color: strokeColor
        },
        style: {
          stroke: strokeColor,
          strokeWidth: isCrossBoard ? 2.5 : 1.8,
          strokeDasharray: isAdvisory ? '5,5' : undefined
        }
      };
    });

    return { nodes: rfNodes, edges: rfEdges };
  } catch (err) {
    console.warn('ELK layout failed, falling back to grid arrangement', err);
    return fallbackGridLayout(filteredNodes, filteredEdges);
  }
}

/**
 * Robust fallback layout if ELK encounters an unexpected layout issue
 */
function fallbackGridLayout(
  nodes: EducationNode[],
  relationships: RelationshipEdgeData[]
): { nodes: Node[]; edges: Edge[] } {
  const rfNodes: Node[] = nodes.map((n, idx) => {
    const col = idx % 8;
    const row = Math.floor(idx / 8);
    return {
      id: n.id,
      type: n.type === 'sectionHub' ? 'sectionNode' : 'authorityNode',
      position: { x: col * 360, y: row * 200 },
      data: { ...n }
    };
  });

  const rfEdges: Edge[] = relationships.map((e) => ({
    id: e.id,
    source: e.sourceNodeId,
    target: e.targetNodeId,
    type: 'relationshipEdge',
    data: { ...e }
  }));

  return { nodes: rfNodes, edges: rfEdges };
}

export interface DockedForeignKey {
  id: string;
  direction: 'in' | 'out';
  extNodeId: string;
  extNodeTitle: string;
  extSectionNumber?: string;
  relType: string;
  relLabel: string;
}

export interface SectionTreeNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isFk: boolean;
  fkDirection?: 'in' | 'out';
  extNodeTitle?: string;
  extSectionNumber?: string;
  extNodeId?: string;
  relType?: string;
  relLabel?: string;
  data?: EducationNode;
  dockedFks?: DockedForeignKey[];
}

export interface SectionTreeEdge {
  id: string;
  source: string;
  target: string;
  label: string;
  isFk: boolean;
  pathD?: string;
  points?: { x: number; y: number }[];
}

export interface SectionTreeLayoutResult {
  sectionId: string;
  nodes: SectionTreeNode[];
  edges: SectionTreeEdge[];
  width: number;
  height: number;
  foreignKeys: {
    id: string;
    direction: 'in' | 'out';
    localNodeId: string;
    localNodeTitle: string;
    externalNodeId: string;
    externalNodeTitle: string;
    externalSectionId?: string;
    type: string;
    label: string;
  }[];
}

export interface SectionTreeLayoutOptions {
  isDossier: boolean;
  direction?: 'DOWN' | 'RIGHT';
  nodeSpacing?: number;
  vSpacing?: number;
  arrowHeight?: number;
  fkArrowHeight?: number;
  layerSpacing?: number;
  nodeWidth?: number;
  cardHeightScale?: number;
  alternateDepth?: boolean;
  alternateSpacing?: number;
  fontSize?: number;
  lineHeight?: number;
  paraSpacing?: number;
  fkMode?: 'docked' | 'stubs';
  arrowStyle?: 'curved' | 'straight' | 'orthogonal' | 'rounded-orthogonal';
  nodePositions?: Record<string, { x: number; y: number }>;
}

/**
 * Calculates a dedicated, self-contained hierarchical Tree Diagram for a specific section,
 * complete with Foreign Key Link Stubs for edges crossing into or out of other sections.
 */
export async function calculateSectionTreeLayout(
  sectionId: string,
  allNodes: EducationNode[],
  allRelationships: RelationshipEdgeData[],
  options: SectionTreeLayoutOptions | boolean
): Promise<SectionTreeLayoutResult> {
  const opts: SectionTreeLayoutOptions =
    typeof options === 'boolean' ? { isDossier: options } : options;
  const isDossier = opts.isDossier;
  const direction = opts.direction || 'DOWN';
  const isRight = direction === 'RIGHT';
  const nodeSpacing = opts.nodeSpacing ?? (isDossier ? 65 : 45);
  const vSpacing = opts.vSpacing ?? (isDossier ? 65 : 45);
  const arrowHeight = opts.arrowHeight ?? opts.layerSpacing ?? (isDossier ? 140 : 85);
  const fkArrowHeight = opts.fkArrowHeight ?? (isDossier ? 90 : 65);
  const layerSpacing = Math.max(arrowHeight, vSpacing);
  const customBoxWidth = opts.nodeWidth;
  const cardHeightScale = opts.cardHeightScale ?? 1.0;
  const alternateDepth = opts.alternateDepth ?? false;
  const customAlternateSpacing = opts.alternateSpacing ?? vSpacing;
  const fontScale = (opts.fontSize ?? 11) / 11;
  const lineScale = (opts.lineHeight ?? 1.35) / 1.35;
  const paraSpacing = opts.paraSpacing ?? 6;
  const fkMode = opts.fkMode || 'docked';
  const arrowStyle = opts.arrowStyle || 'curved';

  const nodeMap = new Map<string, EducationNode>();
  allNodes.forEach((n) => nodeMap.set(n.id, n));

  const localNodes = allNodes.filter((n) => n.sectionId === sectionId || n.id === sectionId);
  const localNodeIds = new Set(localNodes.map((n) => n.id));

  const foreignKeysList: SectionTreeLayoutResult['foreignKeys'] = [];
  const dockedFksMap = new Map<string, DockedForeignKey[]>();

  const addDockedFk = (localNodeId: string, item: DockedForeignKey) => {
    if (!dockedFksMap.has(localNodeId)) {
      dockedFksMap.set(localNodeId, []);
    }
    dockedFksMap.get(localNodeId)!.push(item);
  };

  const elkNodes: ElkNode[] = [];
  const elkEdges: { id: string; sources: string[]; targets: string[] }[] = [];
  const nodeMetaMap = new Map<string, Partial<SectionTreeNode>>();
  const edgeMetaMap = new Map<string, { label: string; isFk: boolean }>();

  const stubHeight = Math.round(58 * Math.max(1, fontScale * 0.5 + lineScale * 0.5) * cardHeightScale);
  const stubWidth = Math.min(260, customBoxWidth || 260);

  // 1. Process relationships first to collect foreign keys and internal hierarchy edges
  allRelationships.forEach((rel) => {
    const isSourceLocal = localNodeIds.has(rel.sourceNodeId);
    const isTargetLocal = localNodeIds.has(rel.targetNodeId);

    // Internal edge: both source & target in this section
    if (isSourceLocal && isTargetLocal) {
      elkEdges.push({
        id: rel.id,
        sources: [rel.sourceNodeId],
        targets: [rel.targetNodeId]
      });
      edgeMetaMap.set(rel.id, { label: rel.label, isFk: false });
    }
    // Outgoing Foreign Key: source is local, target is external
    else if (isSourceLocal && !isTargetLocal) {
      const extNode = nodeMap.get(rel.targetNodeId);
      const localNode = nodeMap.get(rel.sourceNodeId);

      foreignKeysList.push({
        id: rel.id,
        direction: 'out',
        localNodeId: rel.sourceNodeId,
        localNodeTitle: localNode?.title || rel.sourceNodeId,
        externalNodeId: rel.targetNodeId,
        externalNodeTitle: extNode?.title || rel.targetNodeId,
        externalSectionId: extNode?.sectionId,
        type: rel.type,
        label: rel.label
      });

      if (fkMode === 'docked') {
        addDockedFk(rel.sourceNodeId, {
          id: rel.id,
          direction: 'out',
          extNodeId: rel.targetNodeId,
          extNodeTitle: extNode ? extNode.title : rel.targetNodeId,
          extSectionNumber: extNode ? extNode.sectionNumber : undefined,
          relType: rel.type,
          relLabel: rel.label
        });
      } else {
        // Floating Stub Mode
        const stubId = `FK-OUT-${rel.id}`;
        elkNodes.push({
          id: stubId,
          width: stubWidth,
          height: stubHeight
        });

        nodeMetaMap.set(stubId, {
          id: stubId,
          width: stubWidth,
          height: stubHeight,
          isFk: true,
          fkDirection: 'out',
          extNodeId: rel.targetNodeId,
          extNodeTitle: extNode ? extNode.title : rel.targetNodeId,
          extSectionNumber: extNode ? extNode.sectionNumber : undefined,
          relType: rel.type,
          relLabel: rel.label
        });

        elkEdges.push({
          id: rel.id,
          sources: [rel.sourceNodeId],
          targets: [stubId]
        });
        edgeMetaMap.set(rel.id, { label: rel.label, isFk: true });
      }
    }
    // Incoming Foreign Key: source is external, target is local
    else if (!isSourceLocal && isTargetLocal) {
      const extNode = nodeMap.get(rel.sourceNodeId);
      const localNode = nodeMap.get(rel.targetNodeId);

      foreignKeysList.push({
        id: rel.id,
        direction: 'in',
        localNodeId: rel.targetNodeId,
        localNodeTitle: localNode?.title || rel.targetNodeId,
        externalNodeId: rel.sourceNodeId,
        externalNodeTitle: extNode?.title || rel.sourceNodeId,
        externalSectionId: extNode?.sectionId,
        type: rel.type,
        label: rel.label
      });

      if (fkMode === 'docked') {
        addDockedFk(rel.targetNodeId, {
          id: rel.id,
          direction: 'in',
          extNodeId: rel.sourceNodeId,
          extNodeTitle: extNode ? extNode.title : rel.sourceNodeId,
          extSectionNumber: extNode ? extNode.sectionNumber : undefined,
          relType: rel.type,
          relLabel: rel.label
        });
      } else {
        // Floating Stub Mode
        const stubId = `FK-IN-${rel.id}`;
        elkNodes.push({
          id: stubId,
          width: stubWidth,
          height: stubHeight
        });

        nodeMetaMap.set(stubId, {
          id: stubId,
          width: stubWidth,
          height: stubHeight,
          isFk: true,
          fkDirection: 'in',
          extNodeId: rel.sourceNodeId,
          extNodeTitle: extNode ? extNode.title : rel.sourceNodeId,
          extSectionNumber: extNode ? extNode.sectionNumber : undefined,
          relType: rel.type,
          relLabel: rel.label
        });

        elkEdges.push({
          id: rel.id,
          sources: [stubId],
          targets: [rel.targetNodeId]
        });
        edgeMetaMap.set(rel.id, { label: rel.label, isFk: true });
      }
    }
  });

  // 2. Add local authority and hub nodes to ELK with width-aware dynamic height
  localNodes.forEach((node) => {
    const isHub = node.type === 'sectionHub';
    const defaultW = isDossier ? (isHub ? 360 : 340) : (isHub ? 320 : 260);
    const width = customBoxWidth ? (isHub ? customBoxWidth + 40 : customBoxWidth) : defaultW;
    const nodeDockedFks = dockedFksMap.get(node.id) || [];
    const height = isDossier
      ? estimateNodeHeight(node, true, fontScale, lineScale, paraSpacing, width, nodeDockedFks.length, cardHeightScale)
      : estimateNodeHeight(node, false, fontScale, lineScale, paraSpacing, width, nodeDockedFks.length, cardHeightScale);

    elkNodes.push({
      id: node.id,
      width,
      height
    });

    nodeMetaMap.set(node.id, {
      id: node.id,
      width,
      height,
      isFk: false,
      data: node,
      dockedFks: nodeDockedFks.length > 0 ? nodeDockedFks : undefined
    });
  });

  const elkGraph: ElkNode = {
    id: `section-tree-${sectionId}`,
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': direction,
      'elk.spacing.nodeNode': String(nodeSpacing),
      'elk.layered.spacing.nodeNodeBetweenLayers': String(layerSpacing),
      'elk.layered.cycleBreaking.strategy': 'DEPTH_FIRST',
      'elk.edgeRouting': 'SPLINES'
    },
    children: elkNodes,
    edges: elkEdges
  };

  try {
    const layouted = await elk.layout(elkGraph);
    const computedNodes: SectionTreeNode[] = [];

    if (layouted.children) {
      for (const child of layouted.children) {
        const meta = nodeMetaMap.get(child.id);
        const x = child.x || 0;
        const y = child.y || 0;
        const w = child.width || meta?.width || 260;
        const h = child.height || meta?.height || 100;

        computedNodes.push({
          id: child.id,
          x,
          y,
          width: w,
          height: h,
          isFk: Boolean(meta?.isFk),
          fkDirection: meta?.fkDirection,
          extNodeTitle: meta?.extNodeTitle,
          extSectionNumber: meta?.extSectionNumber,
          extNodeId: meta?.extNodeId,
          relType: meta?.relType,
          relLabel: meta?.relLabel,
          data: meta?.data,
          dockedFks: meta?.dockedFks
        });
      }
    }

    // 3. OPTION 1: Cascading Layer Propagation with True Bounding-Box Offset
    if (isRight) {
      // Horizontal Hierarchy Flow (LEFT-TO-RIGHT)
      const colBuckets: SectionTreeNode[][] = [];
      const sortedByX = [...computedNodes].sort((a, b) => a.x - b.x);

      sortedByX.forEach((node) => {
        let bucket = colBuckets.find((b) => Math.abs(b[0].x - node.x) < 80);
        if (bucket) {
          bucket.push(node);
        } else {
          colBuckets.push([node]);
        }
      });

      colBuckets.sort((a, b) => Math.min(...a.map((n) => n.x)) - Math.min(...b.map((n) => n.x)));

      // Step A: Prevent vertical overlap between nodes in the same column
      colBuckets.forEach((col) => {
        col.sort((a, b) => a.y - b.y);
        for (let i = 1; i < col.length; i++) {
          const prev = col[i - 1];
          const curr = col[i];
          const minRequiredY = prev.y + prev.height + nodeSpacing;
          if (curr.y < minRequiredY) {
            const shiftY = minRequiredY - curr.y;
            for (let j = i; j < col.length; j++) {
              col[j].y += shiftY;
            }
          }
        }
      });

      // Step B: Stagger alternate depth and cascade downstream columns
      for (let colIdx = 0; colIdx < colBuckets.length; colIdx++) {
        const col = colBuckets[colIdx];
        if (alternateDepth && col.length > 1) {
          col.forEach((node, idx) => {
            if (idx % 2 === 1) {
              const staggerX = customAlternateSpacing ?? (Math.round(node.width * 0.45) + 30);
              node.x += staggerX;
            }
          });
        }

        const maxRightCol = Math.max(...col.map((n) => n.x + n.width));
        const hasFkTransition = col.some((n) => n.isFk) || (colBuckets[colIdx + 1] && colBuckets[colIdx + 1].some((n) => n.isFk));
        const requiredNextColX = maxRightCol + (hasFkTransition ? fkArrowHeight : layerSpacing);

        for (let nextColIdx = colIdx + 1; nextColIdx < colBuckets.length; nextColIdx++) {
          const nextCol = colBuckets[nextColIdx];
          const currentMinX = Math.min(...nextCol.map((n) => n.x));
          if (currentMinX < requiredNextColX) {
            const pushX = requiredNextColX - currentMinX;
            nextCol.forEach((n) => {
              n.x += pushX;
            });
          }
        }
      }
    } else {
      // Vertical Hierarchy Flow (TOP-TO-BOTTOM)
      const layerBuckets: SectionTreeNode[][] = [];
      const sortedByY = [...computedNodes].sort((a, b) => a.y - b.y);

      sortedByY.forEach((node) => {
        let bucket = layerBuckets.find((b) => Math.abs(b[0].y - node.y) < 80);
        if (bucket) {
          bucket.push(node);
        } else {
          layerBuckets.push([node]);
        }
      });

      layerBuckets.sort((a, b) => Math.min(...a.map((n) => n.y)) - Math.min(...b.map((n) => n.y)));

      // Step A: Prevent horizontal overlap between sibling nodes in the same layer
      layerBuckets.forEach((layer) => {
        layer.sort((a, b) => a.x - b.x);
        for (let i = 1; i < layer.length; i++) {
          const prev = layer[i - 1];
          const curr = layer[i];
          const minRequiredX = prev.x + prev.width + nodeSpacing;
          if (curr.x < minRequiredX) {
            const shiftX = minRequiredX - curr.x;
            for (let j = i; j < layer.length; j++) {
              layer[j].x += shiftX;
            }
          }
        }
      });

      // Step B: Stagger alternate depth and cascade downstream layers
      for (let layerIdx = 0; layerIdx < layerBuckets.length; layerIdx++) {
        const layer = layerBuckets[layerIdx];
        if (alternateDepth && layer.length > 1) {
          layer.forEach((node, idx) => {
            if (idx % 2 === 1) {
              const staggerY = customAlternateSpacing ?? (Math.round(node.height * 0.4) + 25);
              node.y += staggerY;
            }
          });
        }

        const maxBottomLayer = Math.max(...layer.map((n) => n.y + n.height));
        const hasFkTransition = layer.some((n) => n.isFk) || (layerBuckets[layerIdx + 1] && layerBuckets[layerIdx + 1].some((n) => n.isFk));
        const requiredNextLayerY = maxBottomLayer + (hasFkTransition ? fkArrowHeight : layerSpacing);

        // Cascade downstream layers so lower layers are pushed ahead and never collided into!
        for (let nextIdx = layerIdx + 1; nextIdx < layerBuckets.length; nextIdx++) {
          const nextLayer = layerBuckets[nextIdx];
          const currentMinY = Math.min(...nextLayer.map((n) => n.y));
          if (currentMinY < requiredNextLayerY) {
            const pushY = requiredNextLayerY - currentMinY;
            nextLayer.forEach((n) => {
              n.y += pushY;
            });
          }
        }
      }
    }

    // Normalize coordinates so minX, minY start with clean padding
    const padding = 35;
    let minX = Infinity;
    let minY = Infinity;
    computedNodes.forEach((n) => {
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
    });

    if (minX !== Infinity && minY !== Infinity) {
      const shiftX = minX - padding;
      const shiftY = minY - padding;
      computedNodes.forEach((n) => {
        n.x = Math.round(n.x - shiftX);
        n.y = Math.round(n.y - shiftY);
      });
    }

    // Apply custom node positions if explicitly repositioned on this page
    if (opts.nodePositions) {
      computedNodes.forEach((n) => {
        const customPos = opts.nodePositions?.[n.id];
        if (customPos) {
          n.x = Math.round(customPos.x);
          n.y = Math.round(customPos.y);
        }
      });
    }

    let adjMaxX = 0;
    let adjMaxY = 0;
    computedNodes.forEach((n) => {
      adjMaxX = Math.max(adjMaxX, n.x + n.width);
      adjMaxY = Math.max(adjMaxY, n.y + n.height);
    });

    const totalWidth = Math.max(800, adjMaxX + padding);
    const totalHeight = Math.max(400, adjMaxY + padding);

    // Process edge geometry with distributed multi-port routing
    // This distributes connector start and end ports so lines never bundle or get tangled
    const computedEdges: SectionTreeEdge[] = [];
    if (layouted.edges) {
      // Map computed nodes by ID
      const nodeIndexMap = new Map<string, SectionTreeNode>();
      computedNodes.forEach((n) => nodeIndexMap.set(n.id, n));

      // Group outgoing edges by source ID
      const outgoingMap = new Map<string, typeof layouted.edges>();
      // Group incoming edges by target ID
      const incomingMap = new Map<string, typeof layouted.edges>();

      for (const edge of layouted.edges) {
        const sId = edge.sources[0];
        const tId = edge.targets[0];
        if (!outgoingMap.has(sId)) outgoingMap.set(sId, []);
        outgoingMap.get(sId)!.push(edge);

        if (!incomingMap.has(tId)) incomingMap.set(tId, []);
        incomingMap.get(tId)!.push(edge);
      }

      // Sort outgoing edges to match target spatial positions (left-to-right or top-to-bottom)
      // This strictly prevents line crossings in flight!
      outgoingMap.forEach((edges) => {
        edges.sort((a, b) => {
          const nodeA = nodeIndexMap.get(a.targets[0]);
          const nodeB = nodeIndexMap.get(b.targets[0]);
          if (!nodeA || !nodeB) return 0;
          return isRight ? nodeA.y - nodeB.y : nodeA.x - nodeB.x;
        });
      });

      // Sort incoming edges to match source spatial positions
      incomingMap.forEach((edges) => {
        edges.sort((a, b) => {
          const nodeA = nodeIndexMap.get(a.sources[0]);
          const nodeB = nodeIndexMap.get(b.sources[0]);
          if (!nodeA || !nodeB) return 0;
          return isRight ? nodeA.y - nodeB.y : nodeA.x - nodeB.x;
        });
      });

      for (const edge of layouted.edges) {
        const meta = edgeMetaMap.get(edge.id);
        const sourceNode = nodeIndexMap.get(edge.sources[0]);
        const targetNode = nodeIndexMap.get(edge.targets[0]);

        if (sourceNode && targetNode) {
          const outEdges = outgoingMap.get(sourceNode.id) || [edge];
          const outIndex = Math.max(0, outEdges.indexOf(edge));
          const outCount = outEdges.length;

          const inEdges = incomingMap.get(targetNode.id) || [edge];
          const inIndex = Math.max(0, inEdges.indexOf(edge));
          const inCount = inEdges.length;

          let pathD: string;

          if (isRight) {
            // Horizontal tree (Left to Right)
            // Distribute source ports along right edge of source card
            let sy: number;
            if (outCount <= 1) {
              sy = sourceNode.y + sourceNode.height / 2;
            } else {
              const padY = Math.min(22, sourceNode.height * 0.2);
              const spanY = sourceNode.height - 2 * padY;
              sy = sourceNode.y + padY + (outIndex / (outCount - 1)) * spanY;
            }
            const sx = sourceNode.x + sourceNode.width;

            // Distribute target ports along left edge of target card
            let ty: number;
            if (inCount <= 1) {
              ty = targetNode.y + targetNode.height / 2;
            } else {
              const padY = Math.min(22, targetNode.height * 0.2);
              const spanY = targetNode.height - 2 * padY;
              ty = targetNode.y + padY + (inIndex / (inCount - 1)) * spanY;
            }
            const tx = targetNode.x;
            const isFk = Boolean(meta?.isFk);

            if (arrowStyle === 'straight') {
              pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
            } else if (arrowStyle === 'orthogonal') {
              const midX = isFk
                ? (tx > sx ? sx + Math.min(fkArrowHeight, (tx - sx) * 0.6) : sx - Math.min(fkArrowHeight, (sx - tx) * 0.6))
                : (sx + tx) / 2;
              pathD = `M ${sx} ${sy} L ${midX} ${sy} L ${midX} ${ty} L ${tx} ${ty}`;
            } else if (arrowStyle === 'rounded-orthogonal') {
              const midX = isFk
                ? (tx > sx ? sx + Math.min(fkArrowHeight, (tx - sx) * 0.6) : sx - Math.min(fkArrowHeight, (sx - tx) * 0.6))
                : (sx + tx) / 2;
              const radius = Math.min(14, Math.abs(ty - sy) / 2, Math.abs(tx - sx) / 3);
              if (Math.abs(ty - sy) < 4 || radius < 2) {
                pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
              } else {
                const dirY = ty > sy ? 1 : -1;
                pathD = `M ${sx} ${sy} L ${midX - radius} ${sy} Q ${midX} ${sy} ${midX} ${sy + dirY * radius} L ${midX} ${ty - dirY * radius} Q ${midX} ${ty} ${midX + radius} ${ty} L ${tx} ${ty}`;
              }
            } else {
              // curved (default smooth cubic Bezier)
              const dx = tx - sx;
              const curveOffset = isFk
                ? Math.max(15, Math.min(220, fkArrowHeight * 0.8))
                : Math.max(30, Math.min(180, Math.abs(dx) * 0.45));
              const cx1 = sx + (dx >= 0 ? curveOffset : -curveOffset);
              const cx2 = tx - (dx >= 0 ? curveOffset : -curveOffset);
              pathD = `M ${sx} ${sy} C ${cx1} ${sy}, ${cx2} ${ty}, ${tx} ${ty}`;
            }
          } else {
            // Vertical tree (Top to Bottom)
            // Distribute source ports along bottom edge of source card
            let sx: number;
            if (outCount <= 1) {
              sx = sourceNode.x + sourceNode.width / 2;
            } else {
              const padX = Math.min(32, sourceNode.width * 0.15);
              const spanX = sourceNode.width - 2 * padX;
              sx = sourceNode.x + padX + (outIndex / (outCount - 1)) * spanX;
            }
            const sy = sourceNode.y + sourceNode.height;

            // Distribute target ports along top edge of target card
            let tx: number;
            if (inCount <= 1) {
              tx = targetNode.x + targetNode.width / 2;
            } else {
              const padX = Math.min(32, targetNode.width * 0.15);
              const spanX = targetNode.width - 2 * padX;
              tx = targetNode.x + padX + (inIndex / (inCount - 1)) * spanX;
            }
            const ty = targetNode.y;
            const isFk = Boolean(meta?.isFk);

            if (arrowStyle === 'straight') {
              pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
            } else if (arrowStyle === 'orthogonal') {
              const midY = isFk
                ? (ty > sy ? sy + Math.min(fkArrowHeight, (ty - sy) * 0.6) : sy - Math.min(fkArrowHeight, (sy - ty) * 0.6))
                : (sy + ty) / 2;
              pathD = `M ${sx} ${sy} L ${sx} ${midY} L ${tx} ${midY} L ${tx} ${ty}`;
            } else if (arrowStyle === 'rounded-orthogonal') {
              const midY = isFk
                ? (ty > sy ? sy + Math.min(fkArrowHeight, (ty - sy) * 0.6) : sy - Math.min(fkArrowHeight, (sy - ty) * 0.6))
                : (sy + ty) / 2;
              const radius = Math.min(14, Math.abs(tx - sx) / 2, Math.abs(ty - sy) / 3);
              if (Math.abs(tx - sx) < 4 || radius < 2) {
                pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
              } else {
                const dirX = tx > sx ? 1 : -1;
                pathD = `M ${sx} ${sy} L ${sx} ${midY - radius} Q ${sx} ${midY} ${sx + dirX * radius} ${midY} L ${tx - dirX * radius} ${midY} Q ${tx} ${midY} ${tx} ${midY + radius} L ${tx} ${ty}`;
              }
            } else {
              // curved (default smooth cubic Bezier)
              const dy = ty - sy;
              const curveOffset = isFk
                ? Math.max(15, Math.min(220, fkArrowHeight * 0.8))
                : Math.max(25, Math.min(180, Math.abs(dy) * 0.45));
              const cy1 = sy + (dy >= 0 ? curveOffset : -curveOffset);
              const cy2 = ty - (dy >= 0 ? curveOffset : -curveOffset);
              pathD = `M ${sx} ${sy} C ${sx} ${cy1}, ${tx} ${cy2}, ${tx} ${ty}`;
            }
          }

          computedEdges.push({
            id: edge.id,
            source: edge.sources[0],
            target: edge.targets[0],
            label: meta?.label || '',
            isFk: Boolean(meta?.isFk),
            pathD
          });
        }
      }
    }

    return {
      sectionId,
      nodes: computedNodes,
      edges: computedEdges,
      width: totalWidth,
      height: totalHeight,
      foreignKeys: foreignKeysList
    };
  } catch (err) {
    console.warn(`ELK tree layout failed for section ${sectionId}`, err);
    return {
      sectionId,
      nodes: [],
      edges: [],
      width: 800,
      height: 400,
      foreignKeys: foreignKeysList
    };
  }
}
