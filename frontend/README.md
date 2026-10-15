# Frontend Module — Indian Education Governance Whiteboard

The client-side single-page application built with React 19, TypeScript, Vite, TailwindCSS v4, and `@xyflow/react` (React Flow).

## Directory Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── canvas/              # WhiteboardCanvas, CustomAuthorityNode, CustomSectionNode, RelationshipEdge
│   │   ├── details/             # DetailPanel drawer for inspecting and editing authorities
│   │   ├── modals/              # Modals:
│   │   │   ├── ProjectManagerModal.tsx    # Multi-project & diagram manager (add, clone, delete, switch)
│   │   │   ├── AddNodeModal.tsx           # Add new authority / node to diagram
│   │   │   ├── AddRelationshipModal.tsx   # Add / edit arrow connectors, types & path styles
│   │   │   ├── SectionManagerModal.tsx    # Manage, create, edit, delete sections
│   │   │   ├── SectionPrintPdfModal.tsx   # Sliced vector PDF multi-page print engine
│   │   │   ├── AuthorityMatrixModal.tsx   # Section 15 decision rights matrix
│   │   │   ├── CoverageAuditModal.tsx     # Section 19 coverage audit
│   │   │   ├── SourceRegisterModal.tsx    # Section 16 primary sources
│   │   │   └── ExportImportModal.tsx      # JSON import/export
│   │   ├── navigation/          # TopToolbar, SectionSidebar, SearchResults
│   │   └── common/              # NumberStepperInput (unbounded manual inputs)
│   ├── store/
│   │   └── whiteboardStore.ts   # Zustand state management with project/node/arrow/section CRUD
│   ├── services/
│   │   ├── apiClient.ts         # REST API client with local database fallback
│   │   ├── layoutService.ts     # ELK hierarchical layout engine (zero node overlaps)
│   │   ├── printService.ts      # Multi-page sliced PDF generator
│   │   └── searchService.ts     # Multi-attribute search and filtering
│   ├── data/
│   │   └── content-index.ts     # Default initial nodes, edges, sources, and section metadata
│   ├── types/
│   │   └── index.ts             # TypeScript definitions for EducationNode, RelationshipEdgeData, etc.
│   ├── App.tsx                  # Main app composition
│   ├── main.tsx                 # React DOM root entry
│   └── index.css                # TailwindCSS v4 theme tokens and global styles
├── public/                      # Static assets
├── index.html                   # HTML entry
├── vite.config.ts               # Vite configuration (proxies /api to port 3001)
└── package.json                 # Standalone package configuration
```

## Features Reflected from Recent Prompts
1. **Full Card Detail Editing**:
   - Every field on the authority cards (Title, Abbreviation, Legal Status, Parent Ministry, Summary, Mandate, Powers, Limitations, Statutory Enactments) is editable directly inline on the canvas or via the full Detail Drawer.
2. **Multi-Project / Multi-Diagram Management**:
   - `Projects` button in the top toolbar opens the Project Manager modal to create empty diagrams, clone existing diagrams, switch active diagrams, or delete diagrams.
3. **Node, Section, and Arrow CRUD**:
   - `+ Node` button in toolbar and `+ Add Authority` in sidebar to create new nodes.
   - `+ Arrow` button in toolbar, `+ Connect Arrow` in the Detail Drawer, and click-to-edit arrows directly on the canvas to configure source, target, label, relationship type (22 legal archetypes), and solid vs. dashed/conditional styles.
   - `Sections` manager modal to create, edit, and delete diagram sections.
   - Cascading deletions prevent orphaned relationships or broken diagram states.
4. **Unbounded Spacing, Sizing & Multi-Page PDF Print**:
   - Manual steppers for card width, card height %, horizontal and vertical spacing, and arrow lengths with no upper limits.
   - 4 arrow routing styles: Curved, Straight, 90° Orthogonal, and Rounded-Orthogonal.
   - Multi-page sliced PDF export engine with custom page splits and foreign-key link toggles.
