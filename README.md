# Indian Education Governance, Authorities, Powers & Standards
## Interactive Knowledge-Mapping Application (Whiteboard 1 of 3)

An interactive, zoomable, searchable, hierarchical visual knowledge map of India's education governance system — from constitutional provisions and parliamentary statutes to individual authorities, their powers, legal limitations, decision rights, and primary official sources.

Built from the complete specification in [`V1.md`](./V1.md).

---

## 🏛️ System Architecture & Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Graph Canvas:** React Flow (`@xyflow/react`)
- **Hierarchical Layout Engine:** ELK.js (`elkjs`) with multi-directional support (Top-to-Bottom & Left-to-Right)
- **Styling & Design System:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom technical palette (Forest Green `#0f3d24`, Gold Accent `#d97706`, Slate neutrals)
- **Icons:** Lucide React (`lucide-react`)
- **State Management:** Zustand (`zustand`)
- **Validation Engine:** Zod (`zod`) for runtime schema validation

---

## 📋 Content Architecture (All 16 Sections Implemented)

1. **00. Legend, Scope & Navigation:** Node categories, 22 relationship connector styles, authority status labels, cross-board taxonomy.
2. **01. Constitutional Foundation:** Articles 14, 15, 21A, 29, 30, 32, 45, 46, 73, 162, 226, 246 (List I Entry 66, List III Entry 25), 254 (repugnancy), 350A, 350B, 368 (amendment).
3. **02. Union Legislative Authority:** Parliament of India, Lok Sabha, Rajya Sabha, President's legislative assent, 10-step law-making procedure, and 18 central education statutes.
4. **03. Union Executive & Ministry of Education:** President, Prime Minister, Union Cabinet, Union Minister of Education, DSEL, DHE, and civil service hierarchy under Allocation of Business Rules.
5. **04. Other Union Ministries:** 12 non-MoE ministries with educational portfolios (MoWCD for ECCE/Anganwadis, MoHFW for NMC/AIIMS, MSDE for NCVET, Defence for Sainik Schools, Tribal Affairs for EMRS, Social Justice, Finance).
6. **05. State & UT Education Governance:** State constitutional structure (Governor as Chancellor, CM, Legislature) and the complete **Maharashtra deep-dive** (School Education, MSBSHSE Pune, SCERT Maharashtra, DTE, State CET Cell, Higher & Technical Education).
7. **06. Local & District Administration:** District Collector, DEO, BEO, Municipal Corporations, Panchayati Raj, RTE Local Authorities, School Management Committees (SMCs), and Headteachers.
8. **07. Early Childhood & School Education Bodies:** ECCE framework, NCERT, NIOS, CBSE, CISCE, SCERTs, KVS, NVS, and NCTE.
9. **08. Higher Education Governance:** UGC, AICTE, and 8 distinct university types (Central, State Public, Deemed-to-be, State Private, INIs [IITs/AIIMS/NITs], Autonomous Colleges, Affiliated Colleges, ODL).
10. **09. Professional Regulators:** 14 statutory councils (NMC, NCISM, NCH, NDC, PCI, INC, BCI, CoA, RCI, VCI, ICAR, NCVET, ICAI).
11. **10. Examination & Testing Authorities:** NTA (JEE Main, NEET-UG, CUET-UG, CUET-PG, UGC-NET), UPSC (CSE, ESE, NDA), State PSCs, SSC (CGL, CHSL), RRB, IBPS, SBI, RBI, and State CETs.
12. **11. Quality, Accreditation & Rankings:** Tripartite distinction (Recognition vs. Accreditation vs. Ranking); NAAC, NBA, NIRF, and institutional IQACs.
13. **12. Funding, Scholarships & Public Finance:** Union budget, State budgets, Centrally Sponsored Schemes (Samagra Shiksha, PM-USHA), multi-ministry scholarships (NSP), research grants, and CAG constitutional audit.
14. **13. Oversight, Rights, Complaints & Appeals:** Supreme Court (Art 32), High Courts (Art 226), NCPCR under RTE, CVC, Central Information Commission (RTI Act 2005), and structured dispute routing flow.
15. **14. How a Decision Becomes a Rule:** 7-stage educational reform decision engine, 11 recognized legal instruments, required approvals, and entrance exam amendment walkthrough.
16. **15. Authority Matrix & Decision Rights:** Interactive matrix mapping 16 core decisions across 6 governing categories.
17. **16. Cross-Board Connections & Source Register:** Unique identifier taxonomy (`GOV-*`, `INST-*`, `EXAM-*`, `QUAL-*`, `CAREER-*`) and 9-tier priority official source register.

---

## 🚀 Local Development Setup & Run Commands

### Prerequisites
- Node.js (v18+ recommended; tested on v22.20)
- npm (v9+ recommended; tested on v10.9)

### 1. Install Dependencies
```bash
npm install
```

### 2. Modular Architecture & Run Commands

The repository is modularly separated into:
- **`frontend/`**: React 19 + TypeScript + Vite interactive whiteboard, canvas controls, detail drawer editor, and PDF print preview.
- **`backend/`**: Express REST API service on port `3001` with endpoints for CRUD node management, relationship graph queries, and data import/export.
- **`database/`**: Domain schemas (`database/schema`), seed records (`database/seeds`), and full in-memory database engine (`database/db.ts`).

#### Run Options:
```bash
# Run both Frontend & Backend concurrently:
npm run dev

# Run Frontend only (port 5173 with automated proxy to /api):
npm run dev:frontend

# Run Backend REST API only (port 3001):
npm run dev:backend

# Run Data & Schema Validation Test Suite:
npm run test:data

# Build Production Bundle:
npm run build
```

---

## 🔍 Features & Interactions

- **Infinite Canvas:** Pan, zoom, fit-to-screen, and level-of-detail rendering powered by React Flow and ELK.js.
- **Section Drill-Down & Sidebar Outline:** Toggle between the full master map (all sections expanded by default) or focus on individual sections.
- **Authority Detail Panel:** Slide-out right panel detailing full statutory identity, powers ("What this authority can do"), legal limitations ("What this authority cannot do"), inputs/outputs, and primary official sources.
- **Authority Matrix Modal:** Compare 16 core decisions across Parliament, Union Executive, State Governments, Regulators, Exam Agencies, and Universities.
- **Coverage Audit Report:** Inspect live verification metrics across all 16 sections with JSON export.
- **Source Register:** Direct links to authentic India Code statutes, Gazette notifications, and official portals.
- **Global Search & Filter:** Instant search across titles, abbreviations, articles, acts, and exams with government level and category filters.
- **Data Export & Import:** Full JSON export and schema-validated JSON import.
