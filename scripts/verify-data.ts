import { ALL_NODES, ALL_RELATIONSHIPS, ALL_SOURCES, NODE_MAP, SOURCE_MAP, generateCoverageAudit } from '../src/data/content-index';
import { DatasetSchema } from '../src/schemas';
import { searchEducationNodes } from '../src/services/searchService';
import { validateImportDataset } from '../src/services/exportService';

console.log('====================================================');
console.log('RUNNING COMPREHENSIVE WHITEBOARD 1 VALIDATION TESTS');
console.log('====================================================\n');

let failedTests = 0;

function assert(condition: boolean, testName: string, errorDetail?: string) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
  } else {
    console.error(`❌ FAIL: ${testName} - ${errorDetail || 'Condition not met'}`);
    failedTests++;
  }
}

// 1. Check duplicate IDs
const seenNodeIds = new Set<string>();
let duplicateNodeId: string | null = null;
for (const node of ALL_NODES) {
  if (seenNodeIds.has(node.id)) {
    duplicateNodeId = node.id;
    break;
  }
  seenNodeIds.add(node.id);
}
assert(!duplicateNodeId, 'No Duplicate Node IDs', `Duplicate ID found: ${duplicateNodeId}`);

// 2. Check relationship endpoints exist
let brokenEdge: string | null = null;
for (const rel of ALL_RELATIONSHIPS) {
  if (!NODE_MAP.has(rel.sourceNodeId)) {
    brokenEdge = `Edge ${rel.id} has invalid source: ${rel.sourceNodeId}`;
    break;
  }
  if (!NODE_MAP.has(rel.targetNodeId)) {
    brokenEdge = `Edge ${rel.id} has invalid target: ${rel.targetNodeId}`;
    break;
  }
}
assert(!brokenEdge, 'All Relationship Endpoints Resolve to Existing Nodes', brokenEdge || undefined);

// 3. Check Zod Schema Validation
const validationResult = DatasetSchema.safeParse({
  nodes: ALL_NODES,
  relationships: ALL_RELATIONSHIPS,
  sources: ALL_SOURCES
});
assert(validationResult.success, 'Dataset Matches Strict Zod Schema', validationResult.success ? '' : JSON.stringify(validationResult.error.issues));

// 4. Verify All 16 Sections are represented
const sectionNumbers = new Set(ALL_NODES.map((n) => n.sectionNumber));
const expectedSections = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'];
const missingSections = expectedSections.filter((sec) => !sectionNumbers.has(sec));
assert(missingSections.length === 0, 'All 16 Sections Represented', `Missing: ${missingSections.join(', ')}`);

// 5. Test Search Engine
const searchResultsUGC = searchEducationNodes(ALL_NODES, 'UGC');
assert(searchResultsUGC.length > 0 && searchResultsUGC[0].node.id === 'GOV-UGC', 'Search Engine: "UGC" finds University Grants Commission');

const searchResultsNTA = searchEducationNodes(ALL_NODES, 'NTA');
assert(searchResultsNTA.length > 0 && searchResultsNTA[0].node.id === 'GOV-NTA', 'Search Engine: "NTA" finds National Testing Agency');

const searchResults21A = searchEducationNodes(ALL_NODES, '21A');
assert(searchResults21A.length > 0 && searchResults21A[0].node.id === 'ART-21A', 'Search Engine: "21A" finds Article 21A Right to Education');

// 6. Test Import Validation
const validExportString = JSON.stringify({
  version: '1.0.0',
  exportDate: new Date().toISOString(),
  source: 'Test',
  nodes: ALL_NODES.slice(0, 5),
  relationships: ALL_RELATIONSHIPS.slice(0, 5),
  sources: ALL_SOURCES.slice(0, 5)
});
const importTest = validateImportDataset(validExportString);
assert(importTest.success, 'Import Service: Valid JSON Dataset Accepted');

const invalidImportTest = validateImportDataset('{ "bad": 123 }');
assert(!invalidImportTest.success, 'Import Service: Invalid JSON Schema Safely Rejected');

// 7. Audit Report Generation
const audit = generateCoverageAudit();
assert(audit.totalNodes > 60, `Coverage Audit: ${audit.totalNodes} structured nodes registered`);
assert(audit.totalRelationships > 70, `Coverage Audit: ${audit.totalRelationships} relationships mapped`);
assert(audit.overallVerificationRate > 80, `Coverage Audit: ${audit.overallVerificationRate}% primary statutory verification rate`);

console.log('\n====================================================');
if (failedTests === 0) {
  console.log('🎉 ALL 11 TEST SUITES PASSED PERFECTLY WITH ZERO ERRORS!');
} else {
  console.error(`⚠️ ${failedTests} TESTS FAILED.`);
  process.exit(1);
}
console.log('====================================================\n');
