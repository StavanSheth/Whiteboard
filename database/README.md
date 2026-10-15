# Database Module - Indian Education Governance Whiteboard

Core data layer, domain schemas, validation, and seed datasets:
- `database/schema/`: TypeScript interfaces and strict Zod validation schemas
- `database/seeds/`: Statutory authority seed records (144 authorities, 148 relationships, 16 sections)
- `database/db.ts`: In-memory and persistent database engine with full CRUD capabilities
- `database/index.ts`: Unified public export interface for backend and frontend services
