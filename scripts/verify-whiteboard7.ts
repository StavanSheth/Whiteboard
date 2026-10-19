import { NODES_V7, RELATIONSHIPS_V7, SOURCES_V7, SECTION_METAS_V7 } from '../src/data/whiteboard7-how-to-judge-a-person';
import { db } from '../database/db';

console.log('====================================================');
console.log('VERIFYING WHITEBOARD 7: HOW TO JUDGE A PERSON');
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
let duplicateId: string | null = null;
for (const node of NODES_V7) {
  if (seenNodeIds.has(node.id)) {
    duplicateId = node.id;
    break;
  }
  seenNodeIds.add(node.id);
}
assert(!duplicateId, 'No Duplicate Node IDs in Whiteboard 7', `Duplicate: ${duplicateId}`);

// 2. Node count (4 HC + 5 RT + 4 CB + 4 TR + 5 CA + 4 IJ + 5 AP = 31 total)
assert(NODES_V7.length === 31, `Expected 31 nodes, got ${NODES_V7.length}`);

// 3. Relationships endpoints
let brokenEdge: string | null = null;
for (const rel of RELATIONSHIPS_V7) {
  if (!seenNodeIds.has(rel.sourceNodeId)) {
    brokenEdge = `Edge ${rel.id} has invalid source: ${rel.sourceNodeId}`;
    break;
  }
  if (!seenNodeIds.has(rel.targetNodeId)) {
    brokenEdge = `Edge ${rel.id} has invalid target: ${rel.targetNodeId}`;
    break;
  }
}
assert(!brokenEdge, 'All 35 Relationships Connect Valid Existing Nodes', brokenEdge || undefined);

// 4. Verify 7 sections present
const sections = new Set(NODES_V7.map((n) => n.sectionId));
const expectedSections = [
  'SEC-JUDGE-01',
  'SEC-JUDGE-02',
  'SEC-JUDGE-03',
  'SEC-JUDGE-04',
  'SEC-JUDGE-05',
  'SEC-JUDGE-06',
  'SEC-JUDGE-07'
];
const missing = expectedSections.filter((s) => !sections.has(s));
assert(missing.length === 0, 'All 7 Character Assessment Sections Represented', `Missing: ${missing.join(', ')}`);

// 5. Verify characterAssessmentDetails structure
let invalidDetailNode: string | null = null;
for (const node of NODES_V7) {
  const d = node.characterAssessmentDetails;
  if (!d || !d.conceptId || !d.relatedLesson || !d.principle || !d.techniqueOrQuestion || !d.practicalScenario || !d.limitationsAndCaveats) {
    invalidDetailNode = node.id;
    break;
  }
}
assert(!invalidDetailNode, 'All Nodes Contain Complete characterAssessmentDetails Specification', `Node: ${invalidDetailNode}`);

// 6. Test Database registration
const proj = db.getProject('proj-judge-person');
assert(!!proj, 'proj-judge-person successfully seeded in Database');
if (proj) {
  assert(proj.nodes.length === 31, `Database project contains 31 nodes (got ${proj.nodes.length})`);
  assert(proj.relationships.length === 35, `Database project contains 35 relationships (got ${proj.relationships.length})`);
  assert(proj.sections.length === 7, `Database project contains 7 sections (got ${proj.sections.length})`);
}

if (failedTests > 0) {
  console.error(`\n❌ ${failedTests} tests failed.`);
  process.exit(1);
} else {
  console.log('\n🎉 ALL 6 WHITEBOARD 7 VERIFICATION TESTS PASSED PERFECTLY!\n');
}
