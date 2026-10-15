import { z } from 'zod';

export const NodeTypeSchema = z.enum([
  'constitutional',
  'legislature',
  'executive',
  'department',
  'statutoryRegulator',
  'examinationAgency',
  'schoolBoard',
  'institution',
  'oversight',
  'process',
  'legalInstrument',
  'decisionMatrix',
  'sectionHub'
]);

export const VerificationStatusSchema = z.enum([
  'verified',
  'partially-verified',
  'requires-verification',
  'time-sensitive',
  'superseded'
]);

export const GovernmentLevelSchema = z.enum([
  'constitutional',
  'union',
  'state',
  'union-territory',
  'district',
  'local',
  'institutional'
]);

export const FunctionalCategorySchema = z.enum([
  'legislation',
  'executive-administration',
  'school-education',
  'higher-education',
  'professional-regulation',
  'examination',
  'admissions-counselling',
  'accreditation-ranking',
  'funding-finance',
  'oversight-remedies',
  'procedural-reform'
]);

export const EducationNodeSchema = z.object({
  id: z.string().min(1),
  type: NodeTypeSchema,
  title: z.string().min(1),
  abbreviation: z.string().optional(),
  sectionId: z.string().min(1),
  sectionNumber: z.string().min(1),
  parentId: z.string().optional(),
  level: GovernmentLevelSchema,
  category: FunctionalCategorySchema,
  summary: z.string(),
  legalStatus: z.string().optional(),
  establishingLaw: z.array(z.string()).optional(),
  ministerialRelationship: z.string().optional(),
  leadershipRole: z.string().optional(),
  mandate: z.array(z.string()).default([]),
  powers: z.array(z.string()).default([]),
  limitations: z.array(z.string()).default([]),
  inputs: z.array(z.string()).optional(),
  outputs: z.array(z.string()).optional(),
  relatedExaminations: z.array(z.string()).optional(),
  relatedInstitutions: z.array(z.string()).optional(),
  relatedQualifications: z.array(z.string()).optional(),
  sourceIds: z.array(z.string()).default([]),
  verificationStatus: VerificationStatusSchema,
  lastVerifiedDate: z.string().optional(),
  notes: z.string().optional(),
  children: z.array(z.string()).optional()
});

export const RelationshipTypeSchema = z.enum([
  'CONSTITUTIONALLY_EMPOWERS',
  'LEGISLATES',
  'ADMINISTRATIVELY_OVERSEES',
  'ESTABLISHED_BY_LAW',
  'SETS_STANDARDS',
  'CONDUCTS_EXAM',
  'ADMINISTERS_ADMISSION',
  'AWARDS_QUALIFICATION',
  'RECOGNISES_APPROVES',
  'ACCREDITS',
  'RANKS',
  'FUNDS',
  'COORDINATES',
  'ADVISES',
  'AUDITS',
  'REVIEWS_APPEALS',
  'JUDICIALLY_REVIEWS',
  'IMPLEMENTS',
  'REPORTS_TO',
  'SUBJECT_TO',
  'CONNECTS_TO_BOARD_2',
  'CONNECTS_TO_BOARD_3'
]);

export const RelationshipEdgeDataSchema = z.object({
  id: z.string().min(1),
  sourceNodeId: z.string().min(1),
  targetNodeId: z.string().min(1),
  type: RelationshipTypeSchema,
  label: z.string().min(1),
  isAdvisory: z.boolean().optional(),
  isConditional: z.boolean().optional(),
  sourceIds: z.array(z.string()).optional(),
  verificationStatus: VerificationStatusSchema
});

export const SourceRecordSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  officialUrl: z.string().url(),
  documentTitle: z.string().min(1),
  sectionCitation: z.string().optional(),
  publicationDate: z.string().optional(),
  effectiveDate: z.string().optional(),
  lastVerifiedDate: z.string().min(1),
  sourcePriority: z.number().int().min(1).max(9),
  verificationStatus: VerificationStatusSchema,
  notes: z.string().optional(),
  relatedNodeIds: z.array(z.string()).default([])
});

export const DatasetSchema = z.object({
  nodes: z.array(EducationNodeSchema),
  relationships: z.array(RelationshipEdgeDataSchema),
  sources: z.array(SourceRecordSchema)
});
