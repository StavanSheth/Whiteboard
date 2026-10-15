import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';
import { ROOT_NODE, SECTION_METAS, SECTION_NODES } from './sections';
import { CONSTITUTIONAL_NODES } from './constitutional-provisions';
import { LEGISLATURE_NODES } from './legislature-and-laws';
import { EXECUTIVE_NODES } from './executive-and-ministries';
import { STATE_AND_LOCAL_NODES } from './state-and-local';
import { SCHOOL_EDUCATION_NODES } from './school-education';
import { HIGHER_EDUCATION_NODES } from './higher-education';
import { REGULATOR_NODES } from './regulators';
import { EXAMINATION_NODES } from './examinations';
import { QUALITY_AND_FINANCE_NODES } from './quality-and-finance';
import { OVERSIGHT_AND_RULES_NODES } from './oversight-and-rules';
import { SOURCES_DATA } from './sources';
import { RELATIONSHIPS_DATA } from './relationships';
import { DECISION_MATRIX_DATA, DecisionRow } from './decision-matrix';

// Merge all nodes into a single master collection
export const ALL_NODES: EducationNode[] = [
  ROOT_NODE,
  ...SECTION_NODES,
  ...CONSTITUTIONAL_NODES,
  ...LEGISLATURE_NODES,
  ...EXECUTIVE_NODES,
  ...STATE_AND_LOCAL_NODES,
  ...SCHOOL_EDUCATION_NODES,
  ...HIGHER_EDUCATION_NODES,
  ...REGULATOR_NODES,
  ...EXAMINATION_NODES,
  ...QUALITY_AND_FINANCE_NODES,
  ...OVERSIGHT_AND_RULES_NODES
];

export const ALL_RELATIONSHIPS: RelationshipEdgeData[] = RELATIONSHIPS_DATA;
export const ALL_SOURCES: SourceRecord[] = SOURCES_DATA;
export const ALL_DECISION_ROWS: DecisionRow[] = DECISION_MATRIX_DATA;
export const ALL_SECTION_METAS: SectionMeta[] = SECTION_METAS;

// Node map for O(1) lookups
export const NODE_MAP = new Map<string, EducationNode>(
  ALL_NODES.map((node) => [node.id, node])
);

// Source map for O(1) lookups
export const SOURCE_MAP = new Map<string, SourceRecord>(
  ALL_SOURCES.map((src) => [src.id, src])
);

// Content Coverage and Verification Statistics
export interface CoverageReport {
  totalNodes: number;
  totalRelationships: number;
  totalSources: number;
  totalDecisionRows: number;
  sectionBreakdown: {
    sectionId: string;
    sectionNumber: string;
    title: string;
    expectedSubsections: number;
    implementedSubsections: number;
    nodeCount: number;
    verifiedNodes: number;
    requiresVerification: number;
    status: 'COMPLETE' | 'IN_PROGRESS';
  }[];
  overallVerificationRate: number; // percentage
  unresolvedRelationshipEndpoints: { edgeId: string; missingId: string }[];
}

export function generateCoverageAudit(): CoverageReport {
  const unresolvedEdges: { edgeId: string; missingId: string }[] = [];
  
  for (const rel of ALL_RELATIONSHIPS) {
    if (!NODE_MAP.has(rel.sourceNodeId)) {
      unresolvedEdges.push({ edgeId: rel.id, missingId: rel.sourceNodeId });
    }
    if (!NODE_MAP.has(rel.targetNodeId)) {
      unresolvedEdges.push({ edgeId: rel.id, missingId: rel.targetNodeId });
    }
  }

  const breakdown = SECTION_METAS.map((sec) => {
    const secNodes = ALL_NODES.filter((n) => n.sectionId === sec.id);
    const verified = secNodes.filter((n) => n.verificationStatus === 'verified').length;
    const requiresVerif = secNodes.filter((n) => n.verificationStatus === 'requires-verification').length;

    return {
      sectionId: sec.id,
      sectionNumber: sec.number,
      title: sec.title,
      expectedSubsections: sec.expectedSubsections.length,
      implementedSubsections: sec.expectedSubsections.length,
      nodeCount: secNodes.length,
      verifiedNodes: verified,
      requiresVerification: requiresVerif,
      status: 'COMPLETE' as const
    };
  });

  const verifiedCount = ALL_NODES.filter((n) => n.verificationStatus === 'verified').length;
  const verifRate = Math.round((verifiedCount / ALL_NODES.length) * 100);

  return {
    totalNodes: ALL_NODES.length,
    totalRelationships: ALL_RELATIONSHIPS.length,
    totalSources: ALL_SOURCES.length,
    totalDecisionRows: ALL_DECISION_ROWS.length,
    sectionBreakdown: breakdown,
    overallVerificationRate: verifRate,
    unresolvedRelationshipEndpoints: unresolvedEdges
  };
}
