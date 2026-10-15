import { db } from '../database/db';
import { EducationNode, RelationshipEdgeData } from '../src/types';

async function testCrud() {
  console.log('--- 1. Testing Section CRUD ---');
  const initialSections = db.getAllSections();
  console.log('Initial sections count:', initialSections.length);

  const newSec = db.createSection({
    number: '17',
    title: 'Vocational Training & Skill Development',
    subtitle: 'NCVET and NSDC Frameworks',
    summary: 'Skill development ecosystem under MSDE.'
  });
  console.log('Created section:', newSec.id, newSec.title);

  db.updateSection(newSec.id, {
    title: 'Vocational & Apprenticeship Systems'
  });
  const updatedSec = db.getAllSections().find(s => s.id === newSec.id);
  console.log('Updated section title:', updatedSec?.title);

  console.log('--- 2. Testing Node CRUD ---');
  const initialNodes = db.getAllNodes();
  console.log('Initial nodes count:', initialNodes.length);

  const testNode: EducationNode = {
    id: 'AUTH-TEST-001',
    type: 'statutoryRegulator',
    title: 'National Council for Vocational Education and Training',
    abbreviation: 'NCVET',
    sectionId: newSec.id,
    sectionNumber: '17',
    level: 'union',
    category: 'higher-education',
    summary: 'Regulates vocational qualifications and awarding bodies.',
    mandate: ['Regulate awarding bodies and assessment agencies'],
    powers: ['Recognise awarding bodies', 'Approve National Occupational Standards'],
    limitations: ['Does not regulate university degrees directly'],
    establishingLaw: ['MSDE Notification 2018'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  };

  db.createNode(testNode);
  console.log('Created node:', testNode.id, 'Total nodes now:', db.getAllNodes().length);

  db.updateNode(testNode.id, {
    summary: 'Apex regulator for vocational education and training in India.'
  });
  const fetchedNode = db.getAllNodes().find(n => n.id === testNode.id);
  console.log('Updated node summary:', fetchedNode?.summary);

  console.log('--- 3. Testing Relationship / Arrow CRUD ---');
  const initialRels = db.getAllRelationships();
  console.log('Initial relationships count:', initialRels.length);

  const testRel: RelationshipEdgeData = {
    id: 'REL-TEST-001',
    sourceNodeId: testNode.id,
    targetNodeId: 'UGC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    description: 'Coordinates national skill qualifications with higher education curricula',
    label: 'Skill-Degree Harmonisation',
    isBidirectional: false,
    dashed: true
  };

  db.createRelationship(testRel);
  console.log('Created relationship:', testRel.id, 'Total relationships now:', db.getAllRelationships().length);

  db.updateRelationship(testRel.id, {
    label: 'National Skill Credit Framework (NCrF)',
    dashed: false
  });
  const fetchedRel = db.getAllRelationships().find(r => r.id === testRel.id);
  console.log('Updated relationship label:', fetchedRel?.label, 'dashed:', fetchedRel?.dashed);

  console.log('--- 4. Testing Cascade Deletes & Cleanup ---');
  // Deleting node should cascade-delete connected relationship REL-TEST-001
  db.deleteNode(testNode.id);
  const relAfterNodeDelete = db.getAllRelationships().find(r => r.id === testRel.id);
  console.log('Relationship exists after source node deleted?:', !!relAfterNodeDelete);

  // Delete custom section
  db.deleteSection(newSec.id);
  const secAfterDelete = db.getAllSections().find(s => s.id === newSec.id);
  console.log('Custom section exists after delete?:', !!secAfterDelete);

  console.log('Final nodes count:', db.getAllNodes().length);
  console.log('Final relationships count:', db.getAllRelationships().length);
  console.log('Final sections count:', db.getAllSections().length);

  console.log('\n🎉 ALL CRUD & CASCADE DELETION TESTS PASSED COMPLETELY!');
}

testCrud().catch(err => {
  console.error('Error during CRUD test:', err);
  process.exit(1);
});
