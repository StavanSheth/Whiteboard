export type NodeType =
  | 'constitutional'       // Constitutional provisions & principles (Art 21A, 246, etc.)
  | 'legislature'          // Parliament, Lok Sabha, Rajya Sabha, State Assemblies
  | 'executive'            // President, PM, Cabinet, State Governors, Ministers
  | 'department'           // Ministry of Education, DSEL, DHE, State Directorates
  | 'statutoryRegulator'   // UGC, AICTE, NMC, BCI, PCI, NCTE, etc.
  | 'examinationAgency'    // NTA, UPSC, SSC, IBPS, State CET Cells
  | 'schoolBoard'          // CBSE, CISCE, State Boards (MSBSHSE), NIOS
  | 'institution'          // Universities, IITs, NITs, AIIMS, IIMs, Colleges
  | 'oversight'            // Supreme Court, High Courts, CAG, CVC, NCPCR, RTI
  | 'process'              // Rulemaking, Exam changes, Seat counselling flows
  | 'legalInstrument'      // Acts, Rules, Regulations, Orders, Bulletins
  | 'decisionMatrix'       // Decision rights mapping entries
  | 'sectionHub'           // Top-level architectural section nodes
  | 'examination'          // Examinations (JEE, NEET, UPSC CSE, CAT, CLAT, etc.)
  | 'stage'                // Stages (Prelims, Mains, Interview, Physical test)
  | 'counselling'          // Seat counselling & admission bodies (JoSAA, MCC, CSAB)
  | 'office'               // Constitutional & administrative offices (President, DM, Sarpanch)
  | 'court'                // Judicial courts & tribunals (SC, HC, District Court, NCLT)
  | 'bank'                 // Banking entities & regulators (RBI, SBI, HDFC, NABARD)
  | 'statutory-body'       // Statutory body or council
  | 'university';          // University or degree granting institute

export type VerificationStatus =
  | 'verified'             // Traced directly to primary statutory/official source
  | 'partially-verified'   // General provision confirmed; specific sub-clause needs review
  | 'requires-verification'// Legal claim/status awaiting primary citation
  | 'time-sensitive'       // Rule subject to periodic notification/orders
  | 'superseded';          // Historic rule replaced by modern statute/notification

export type GovernmentLevel =
  | 'constitutional'
  | 'union'
  | 'state'
  | 'union-territory'
  | 'district'
  | 'local'
  | 'institutional';

export type FunctionalCategory =
  | 'legislation'
  | 'executive-administration'
  | 'school-education'
  | 'higher-education'
  | 'professional-regulation'
  | 'examination'
  | 'admissions-counselling'
  | 'accreditation-ranking'
  | 'funding-finance'
  | 'oversight-remedies'
  | 'procedural-reform';

// Domain-Specific Uncommon Metadata Fields
export interface ExamDetails {
  examAgency?: string;             // E.g. 'National Testing Agency (NTA)', 'UPSC'
  eligibilityCriteria?: string;    // Qualification, age, attempts, subject combinations
  examStages?: string[];           // E.g. ['Session 1 (Jan)', 'Session 2 (Apr)', 'Rank List']
  applicationWindow?: string;      // E.g. 'November - January annual cycle'
  outcome?: string;                // E.g. 'Percentile Score & All India Rank'
  counsellingBody?: string;        // E.g. 'Joint Seat Allocation Authority (JoSAA)'
  nextCareerStage?: string;        // E.g. 'B.Tech admission in IITs/NITs or JEE Advanced'
}

export interface InstitutionDetails {
  institutionType?: string;        // E.g. 'Institute of National Importance (INI)', 'Central University', 'National School Board'
  programmesOffered?: string[];    // E.g. ['B.Tech', 'M.Tech', 'Ph.D.'], ['Class 10 (AISSE)', 'Class 12 (AISSCE)']
  awardingBody?: string;           // E.g. 'Senate of IIT Bombay', 'Central Board of Secondary Education'
  accreditation?: string;          // E.g. 'NAAC A++, NIRF Rank #1', 'Washington Accord Tier-1'
  careerValue?: string;            // E.g. 'Higher research, corporate leadership, professional licensure'
  controlledBy?: string;           // E.g. 'Ministry of Education (MoE)', 'State School Education Dept'
  curriculumBody?: string;         // E.g. 'National Council of Educational Research & Training (NCERT)', 'State SCERT'
  examinationTimeline?: string;    // E.g. 'Registration Sept-Oct; Board Exam Feb-March; Results May'
  prerequisiteStream?: string;     // E.g. 'Class 11-12 Science (PCM)', 'Class 10 Passed'
  admissionRoute?: string;         // E.g. 'JEE Main & Advanced through JoSAA', 'NEET-UG through MCC'
  nheqfLevel?: string;             // E.g. 'NHEQF Level 4.5 to 8', 'Secondary Foundation (Std 10)'
}

export interface GovernanceDetails {
  constitutionalArticle?: string;  // E.g. 'Article 52-62', 'Article 243'
  positionName?: string;           // E.g. 'President of India', 'District Collector'
  electoralOrSelectionMethod?: string; // E.g. 'Electoral College of MPs and MLAs', 'UPSC CSE'
  tenure?: string;                 // E.g. '5 years', 'Up to age 60'
  geographicalJurisdiction?: string; // E.g. 'Pan-India', 'Revenue District'
  reportingTo?: string;            // E.g. 'The Constitution of India', 'Chief Secretary'
}

export interface BankingJudicialDetails {
  domain?: 'banking' | 'judiciary';
  regulatoryBodyOrApex?: string;   // E.g. 'Reserve Bank of India (RBI)', 'Supreme Court of India'
  tier?: string;                   // E.g. 'Scheduled Commercial Bank', 'Apex Constitutional Court'
  jurisdictionOrScope?: string;    // E.g. 'Monetary Policy & Regulation', 'Original & Appellate Pan-India'
  appointmentProcess?: string;     // E.g. 'Appointments Committee of the Cabinet', 'Collegium'
  grievanceOrAppellateRoute?: string; // E.g. 'RBI Integrated Ombudsman', 'Special Leave Petition (Art 136)'
}

export interface EducationNode {
  id: string;                      // Stable cross-board identifier (e.g., 'GOV-UGC', 'ART-21A', 'EXAM-JEE-MAIN')
  type: NodeType;
  title: string;                   // Official display name
  abbreviation?: string;           // E.g., 'UGC', 'NTA', 'MSBSHSE', 'JEE'
  sectionId: string;               // E.g., 'SEC-01', 'SEC-08'
  sectionNumber: string;           // E.g., '01', '08'
  parentId?: string;               // Hierarchical tree parent ID
  level: GovernmentLevel;
  category: FunctionalCategory;
  summary: string;                 // Concise 1-2 sentence executive synopsis
  
  // Governance & Legal Foundations (Common across boards)
  legalStatus?: string;            // E.g., 'Constitutional Body', 'Statutory Regulator', 'National Examination'
  establishingLaw?: string[];      // Relevant Acts/Articles with links
  ministerialRelationship?: string;// Parent ministry/department administrative relation
  leadershipRole?: string;         // E.g., 'Commission led by Chairman', 'Board of Governors'
  
  // Powers & Limits (Common across boards)
  mandate: string[];               // Primary statutory, examination, or operational remit
  powers: string[];                // Concrete decisions/actions the body is legally empowered to take
  limitations: string[];           // What the body CANNOT do (crucial legal boundary)
  
  // Operational Flows
  inputs?: string[];               // Applications, policies, syllabus drafts, student registrations
  outputs?: string[];              // Regulations, scores, degrees, audit reports, gazette orders
  
  // Cross-Board Connections
  relatedExaminations?: string[];  // IDs: 'EXAM-JEE-MAIN', 'EXAM-NEET-UG', etc.
  relatedInstitutions?: string[];  // IDs: 'INST-IIT', 'INST-AIIMS', etc.
  relatedQualifications?: string[];// IDs: 'QUAL-BTECH', 'QUAL-MBBS', etc.
  
  // Domain-Specific Uncommon Attributes
  examDetails?: ExamDetails;
  institutionDetails?: InstitutionDetails;
  governanceDetails?: GovernanceDetails;
  bankingJudicialDetails?: BankingJudicialDetails;
  metadata?: Record<string, any>;  // Extra extensible key-value points
  
  // Verification & Sources
  sourceIds: string[];             // Primary source references (from Source Register)
  verificationStatus: VerificationStatus;
  lastVerifiedDate?: string;       // ISO date format (YYYY-MM-DD)
  notes?: string;                  // Clarifications, pending queries, transition caveats
  children?: string[];             // Child node IDs
}

export type RelationshipType =
  | 'CONSTITUTIONALLY_EMPOWERS'    // Constitution -> Parliament/Court/Union
  | 'LEGISLATES'                   // Parliament/Assembly -> Statutory Act
  | 'ADMINISTRATIVELY_OVERSEES'    // Ministry -> Department/Autonomous Body
  | 'ESTABLISHED_BY_LAW'           // Parent Act -> Statutory Regulator/Board
  | 'SETS_STANDARDS'               // Regulator -> Academic Curriculum/Programme
  | 'CONDUCTS_EXAM'                // Agency -> Assigned Examination
  | 'ADMINISTERS_ADMISSION'        // Counselling Authority -> Seat Allocation
  | 'AWARDS_QUALIFICATION'         // University/Board -> Degree/Diploma
  | 'RECOGNISES_APPROVES'          // Regulator -> Institution/Course Approval
  | 'ACCREDITS'                    // NAAC/NBA -> Quality Rating
  | 'RANKS'                        // NIRF -> Ranking Metric
  | 'FUNDS'                        // Ministry/UGC -> Institutional Scheme/Grant
  | 'COORDINATES'                  // Inter-ministerial or Advisory Coordination
  | 'ADVISES'                      // NCERT/Advisory Body -> Government/Council
  | 'AUDITS'                       // CAG -> Covered Public Expenditure
  | 'REVIEWS_APPEALS'              // Appellate Authority -> Challenged Order
  | 'JUDICIALLY_REVIEWS'           // Supreme Court/High Court -> Law/Order
  | 'IMPLEMENTS'                   // DEO/School -> RTE Provisions/Syllabus
  | 'REPORTS_TO'                   // Department -> Secretary/Minister
  | 'SUBJECT_TO'                   // Body -> Constitutional or Statutory Limits
  | 'FEEDS'                        // School / Board -> Stream / Stage
  | 'APPEARS_FOR'                 // Candidate -> Examination Registration
  | 'REGISTERS_WITH'               // Student -> Professional Institute Registration
  | 'QUALIFIES_FOR'               // Stage 1 -> Stage 2 Qualification Gate
  | 'ALLOCATES_THROUGH'           // Testing Agency -> Centralized Counselling Authority
  | 'ENROLS_IN'                   // Counselling -> Target University Enrolment
  | 'LICENSES'                     // Professional Body -> Statutory Licensure
  | 'RECOGNISES'                   // UGC / AIU -> Institutional Degree Recognition
  | 'PROGRESSES_TO'                // Undergraduate Degree -> Master's / Postgraduate Entrance
  | 'CONNECTS_TO_BOARD_2'          // Authority -> Institution/Qualification Profile
  | 'CONNECTS_TO_BOARD_3';         // Authority -> Exam Lifecycle/Career Progression

export interface RelationshipEdgeData {
  id: string;                      // Stable ID (e.g., 'REL-001')
  sourceNodeId: string;            // Origin node ID
  targetNodeId: string;            // Target node ID
  type: RelationshipType;
  label: string;                   // Precise descriptive edge label
  isAdvisory?: boolean;            // Dashed connector styling for non-binding relationships
  isConditional?: boolean;         // Subject to statute or case-specific delegation
  sourceIds?: string[];            // Citation from Source Register
  verificationStatus: VerificationStatus;
}

export interface SourceRecord {
  id: string;                      // Unique ID (e.g., 'SRC-CONST-21A', 'SRC-UGC-ACT-1956')
  name: string;                    // Short title (e.g., 'The UGC Act, 1956')
  officialUrl: string;             // Primary portal link
  documentTitle: string;           // Full statutory or gazette title
  sectionCitation?: string;        // Specific section (e.g., 'Section 12, 14, 26')
  publicationDate?: string;        // Gazette/Act enactment date
  effectiveDate?: string;          // Commencement date
  lastVerifiedDate: string;        // Date verified
  sourcePriority: number;
  verificationStatus: VerificationStatus;
  notes?: string;                  // Amendment details, pending rules, etc.
  relatedNodeIds: string[];        // Attached node IDs
}

export interface SectionMeta {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  iconName: string;
  expectedSubsections: string[];
  expectedAuthorities: string[];
}

export interface ProjectSummary {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  nodeCount: number;
  relationshipCount: number;
  sourceCount: number;
  isDefault?: boolean;
}

export interface ProjectRecord extends ProjectSummary {
  nodes: EducationNode[];
  relationships: RelationshipEdgeData[];
  sources: SourceRecord[];
  sections?: SectionMeta[];
}
