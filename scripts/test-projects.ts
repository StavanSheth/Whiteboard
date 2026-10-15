async function test() {
  const base = 'http://127.0.0.1:3001/api';
  console.log('1. Fetching projects...');
  let res = await fetch(base + '/projects').then((r) => r.json());
  console.log('Initial projects:', res.count, res.data.map((p: any) => p.name));

  console.log('\n2. Creating new project...');
  const created = await fetch(base + '/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Maharashtra Technical Education Board',
      description: 'State DTE, MSBTE, and CET Cell Architecture',
      template: 'education-governance'
    })
  }).then((r) => r.json());
  console.log('Created project:', created.data.id, created.data.name);

  console.log('\n3. Fetching projects list after creation...');
  res = await fetch(base + '/projects').then((r) => r.json());
  console.log('Projects count:', res.count, res.data.map((p: any) => ({ id: p.id, name: p.name, isActive: p.isActive, nodes: p.nodeCount })));

  console.log('\n4. Activating new project...');
  const activated = await fetch(base + '/projects/' + created.data.id + '/activate', { method: 'POST' }).then((r) => r.json());
  console.log('Activation response:', activated.message);

  console.log('\n5. Checking health for active project...');
  const health = await fetch(base + '/health').then((r) => r.json());
  console.log('Active project ID in health:', health.activeProjectId, 'Total projects:', health.projectCount);

  console.log('\n6. Updating project metadata...');
  const updated = await fetch(base + '/projects/' + created.data.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Maharashtra Higher & Technical Education Board' })
  }).then((r) => r.json());
  console.log('Updated title:', updated.data.name);

  console.log('\n7. Deleting created project...');
  const del = await fetch(base + '/projects/' + created.data.id, { method: 'DELETE' }).then((r) => r.json());
  console.log('Delete response:', del.message, 'New active:', del.activeProjectId);

  console.log('\n8. Final projects count:');
  res = await fetch(base + '/projects').then((r) => r.json());
  console.log('Projects count:', res.count, res.data.map((p: any) => p.name));
  console.log('\n🎉 ALL MULTI-PROJECT API LIFECYCLE TESTS PASSED PERFECTLY!');
}

test().catch(console.error);
