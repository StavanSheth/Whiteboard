# Backend API Module - Indian Education Governance Whiteboard

Express REST API service providing endpoints for authorities, governance relationships, and sections:
- `GET /api/health` - Service health and entity counts
- `GET /api/nodes` - Query all authorities (supports `?search=` and `?sectionId=`)
- `GET /api/nodes/:id` - Fetch single authority with relationships
- `PUT /api/nodes/:id` - Update all details of an authority
- `POST /api/nodes` - Register a new authority
- `DELETE /api/nodes/:id` - Delete authority and cascade relationships
- `GET /api/relationships` - Retrieve cross-board relational edges
- `GET /api/sections` - Retrieve 16 architectural section metadata
- `GET /api/sources` - Retrieve primary legal sources and gazettes
- `GET /api/export` - Export full database snapshot
- `POST /api/import` - Validate and import JSON dataset

## Running the Backend Server
```bash
npm run dev:backend
```
Server runs on `http://127.0.0.1:3001`.
