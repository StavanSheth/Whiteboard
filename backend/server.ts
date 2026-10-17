import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { db } from '../database/db';

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: '10mb' }));

  // Request logger
  app.use((req: Request, _res: Response, next: NextFunction) => {
    const start = Date.now();
    _res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[API] ${req.method} ${req.originalUrl} -> ${_res.statusCode} (${duration}ms)`);
    });
    next();
  });

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'Indian Education Governance API',
      timestamp: new Date().toISOString(),
      activeProjectId: db.getActiveProjectId(),
      projectCount: db.getAllProjects().length,
      counts: {
        nodes: db.getAllNodes().length,
        relationships: db.getAllRelationships().length,
        sources: db.getAllSources().length
      }
    });
  });

  // --- MULTI-PROJECT / DIAGRAM ENDPOINTS ---
  app.get('/api/projects', (_req: Request, res: Response) => {
    const projects = db.getAllProjects();
    res.json({ success: true, count: projects.length, data: projects });
  });

  app.post('/api/projects', (req: Request, res: Response) => {
    try {
      const { name, description, template, duplicateFromId } = req.body;
      const created = db.createProject({ name, description, template, duplicateFromId });
      res.status(201).json({
        success: true,
        message: `Project '${created.name}' created successfully.`,
        data: created
      });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.get('/api/projects/:id', (req: Request, res: Response) => {
    const proj = db.getProject(req.params.id);
    if (!proj) {
      return res.status(404).json({ success: false, error: `Project '${req.params.id}' not found.` });
    }
    res.json({ success: true, data: proj });
  });

  app.put('/api/projects/:id', (req: Request, res: Response) => {
    try {
      const updated = db.updateProjectMetadata(req.params.id, req.body);
      res.json({ success: true, message: `Project metadata updated.`, data: updated });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.put('/api/projects/:id/settings', (req: Request, res: Response) => {
    try {
      const updated = db.updateProjectSettings(req.params.id, req.body);
      res.json({ success: true, message: `Project settings updated.`, data: updated.settings });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.delete('/api/projects/:id', (req: Request, res: Response) => {
    try {
      const result = db.deleteProject(req.params.id);
      res.json({
        success: true,
        message: `Project '${req.params.id}' deleted.`,
        activeProjectId: result.activeProjectId
      });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.post('/api/projects/:id/activate', (req: Request, res: Response) => {
    try {
      const activated = db.setActiveProjectId(req.params.id);
      res.json({
        success: true,
        message: `Active project switched to '${activated.name}'.`,
        data: activated
      });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  // --- NODES ENDPOINTS ---
  app.get('/api/nodes', (req: Request, res: Response) => {
    const search = req.query.search as string | undefined;
    const sectionId = req.query.sectionId as string | undefined;
    const projectId = req.query.projectId as string | undefined;
    const nodes = db.getAllNodes(search, sectionId, projectId);
    res.json({ success: true, count: nodes.length, data: nodes });
  });

  app.get('/api/nodes/:id', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const node = db.getNodeById(req.params.id, projectId);
    if (!node) {
      return res.status(404).json({ success: false, error: `Node '${req.params.id}' not found.` });
    }
    const rels = db.getRelationshipsForNode(req.params.id, projectId);
    res.json({ success: true, data: node, relationships: rels });
  });

  app.put('/api/nodes/:id', (req: Request, res: Response) => {
    try {
      const projectId = req.query.projectId as string | undefined;
      const updated = db.updateNode(req.params.id, req.body, projectId);
      res.json({ success: true, message: `Node '${req.params.id}' updated.`, data: updated });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.post('/api/nodes', (req: Request, res: Response) => {
    try {
      const projectId = req.query.projectId as string | undefined;
      const created = db.createNode(req.body, projectId);
      res.status(201).json({ success: true, message: `Node '${created.id}' created.`, data: created });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.delete('/api/nodes/:id', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const deleted = db.deleteNode(req.params.id, projectId);
    if (!deleted) {
      return res.status(404).json({ success: false, error: `Node '${req.params.id}' not found.` });
    }
    res.json({ success: true, message: `Node '${req.params.id}' deleted.` });
  });

  // --- RELATIONSHIPS ENDPOINTS ---
  app.get('/api/relationships', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const relationships = db.getAllRelationships(projectId);
    res.json({ success: true, count: relationships.length, data: relationships });
  });

  app.get('/api/relationships/node/:id', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const rels = db.getRelationshipsForNode(req.params.id, projectId);
    res.json({ success: true, data: rels });
  });

  app.post('/api/relationships', (req: Request, res: Response) => {
    try {
      const projectId = req.query.projectId as string | undefined;
      const created = db.createRelationship(req.body, projectId);
      res.status(201).json({ success: true, message: `Relationship '${created.id}' created.`, data: created });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.put('/api/relationships/:id', (req: Request, res: Response) => {
    try {
      const projectId = req.query.projectId as string | undefined;
      const updated = db.updateRelationship(req.params.id, req.body, projectId);
      res.json({ success: true, message: `Relationship '${req.params.id}' updated.`, data: updated });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.delete('/api/relationships/:id', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const deleted = db.deleteRelationship(req.params.id, projectId);
    if (!deleted) {
      return res.status(404).json({ success: false, error: `Relationship '${req.params.id}' not found.` });
    }
    res.json({ success: true, message: `Relationship '${req.params.id}' deleted.` });
  });

  // --- SECTIONS & AUDIT ---
  app.get('/api/sections', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    res.json({ success: true, data: db.getSectionMetas(projectId) });
  });

  app.post('/api/sections', (req: Request, res: Response) => {
    try {
      const projectId = req.query.projectId as string | undefined;
      const created = db.createSection(req.body, projectId);
      res.status(201).json({ success: true, message: `Section '${created.id}' created.`, data: created });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.put('/api/sections/:id', (req: Request, res: Response) => {
    try {
      const projectId = req.query.projectId as string | undefined;
      const updated = db.updateSection(req.params.id, req.body, projectId);
      res.json({ success: true, message: `Section '${req.params.id}' updated.`, data: updated });
    } catch (err) {
      res.status(400).json({ success: false, error: (err as Error).message });
    }
  });

  app.delete('/api/sections/:id', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const deleted = db.deleteSection(req.params.id, projectId);
    if (!deleted) {
      return res.status(404).json({ success: false, error: `Section '${req.params.id}' not found.` });
    }
    res.json({ success: true, message: `Section '${req.params.id}' deleted.` });
  });

  app.get('/api/audit', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    res.json({ success: true, data: db.getCoverageAudit(projectId) });
  });

  // --- SOURCES ENDPOINTS ---
  app.get('/api/sources', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const sources = db.getAllSources(projectId);
    res.json({ success: true, count: sources.length, data: sources });
  });

  // --- EXPORT & IMPORT ---
  app.get('/api/export', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    res.json(db.exportData(projectId));
  });

  app.post('/api/import', (req: Request, res: Response) => {
    const projectId = req.query.projectId as string | undefined;
    const result = db.importData(req.body, projectId);
    if (!result.success) {
      return res.status(400).json(result);
    }
    res.json(result);
  });

  // Global Error Handler
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error('[API Error]', err);
    res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  });

  return app;
}

const PORT = process.env.PORT || 3001;

if (process.argv[1] && process.argv[1].endsWith('server.ts')) {
  const app = createServer();
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Education Governance Backend API Service`);
    console.log(`📡 Listening on: http://127.0.0.1:${PORT}`);
    console.log(`🔍 Health Check: http://127.0.0.1:${PORT}/api/health`);
    console.log(`====================================================`);
  });
}
