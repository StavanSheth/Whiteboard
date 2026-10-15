import { EducationNode, SectionMeta } from '../types';

export const SECTION_METAS: SectionMeta[] = [
  {
    id: 'SEC-00',
    number: '00',
    title: 'Legend, Scope & Navigation',
    subtitle: 'Interpreting the whiteboard, legal classification, relationship connectors and taxonomy',
    summary: 'Establishes how to interpret the entire knowledge board. Details node categories, relationship arrow meanings, authority status labels, cross-board IDs and source verification standards.',
    iconName: 'HelpCircle',
    expectedSubsections: ['00.1 Board identity', '00.2 Node types', '00.3 Relationship types', '00.4 Authority status labels', '00.5 Legal status', '00.6 Cross-board identifiers', '00.7 Sources and verification'],
    expectedAuthorities: ['Legend Hub', 'Taxonomy Engine', 'Status Registry']
  },
  {
    id: 'SEC-01',
    number: '01',
    title: 'Constitutional Foundation',
    subtitle: 'The supreme legal root of India education governance',
    summary: 'Defines constitutional source articles, fundamental rights (21A), directive principles (45, 46), distribution of legislative powers (246, Lists I/III), repugnancy (254), amendment procedure (368), and judicial review (32, 226).',
    iconName: 'Scale',
    expectedSubsections: ['01.1 Constitution of India', '01.2 Fundamental rights', '01.3 Directive Principles', '01.4 Legislative powers (7th Schedule)', '01.5 Conflict resolution (Art 254)', '01.6 Executive powers (Art 73/162)', '01.7 Amendment procedure (Art 368)', '01.8 Judicial review'],
    expectedAuthorities: ['Constitution of India', 'Supreme Court of India', 'Parliament (Art 368)']
  },
  {
    id: 'SEC-02',
    number: '02',
    title: 'Union Legislative Authority',
    subtitle: 'Parliament of India, legislative process and central education statutes',
    summary: 'Covers Lok Sabha, Rajya Sabha, President’s legislative assent, the 10-step central education law-making procedure, standing committees, and major central statutes (RTE, UGC, AICTE, NMC, etc.).',
    iconName: 'Landmark',
    expectedSubsections: ['02.1 Parliament of India', '02.2 Legislative process', '02.3 Parliamentary committees', '02.4 Central education legislation', '02.5 Union funding and expenditure approval'],
    expectedAuthorities: ['Parliament of India', 'Lok Sabha', 'Rajya Sabha', 'President of India (Legislative)']
  },
  {
    id: 'SEC-03',
    number: '03',
    title: 'Union Executive & Ministry of Education',
    subtitle: 'Executive administration, ministerial portfolios and civil service machinery',
    summary: 'Structures the executive chain from President and PM to Cabinet, Union Minister of Education, DSEL, DHE, and key civil service ranks (Secretary down to Under Secretary) under Allocation of Business Rules.',
    iconName: 'Briefcase',
    expectedSubsections: ['03.1-03.4 Executive leadership (President, PM, Cabinet)', '03.5-03.6 Ministers of Education', '03.7 Dept of School Education & Literacy & Dept of Higher Education', '03.8 Senior civil service ranks', '03.9 Allocation of Business', '03.10 Schemes & policy', '03.11 Ministerial limits'],
    expectedAuthorities: ['President of India', 'Prime Minister', 'Cabinet', 'Union Minister of Education', 'DSEL', 'DHE']
  },
  {
    id: 'SEC-04',
    number: '04',
    title: 'Other Union Ministries Affecting Education',
    subtitle: 'Preventing the error of assuming all education belongs to Ministry of Education',
    summary: 'Maps 12 non-education Union ministries operating education, training, health, defence, and scholarship ecosystems (e.g., WCD for Anganwadi, MoHFW for NMC/AIIMS, MSDE, Defence for Sainik Schools, Tribal Affairs for EMRS).',
    iconName: 'Building2',
    expectedSubsections: ['04.1 WCD', '04.2 Health & Family Welfare', '04.3 Skill Development', '04.4 Defence', '04.5 Law & Justice', '04.6 Agriculture', '04.7 Labour', '04.8 Tribal Affairs', '04.9 Social Justice', '04.10 Minority Affairs', '04.11 Finance', '04.12 Sector Ministries'],
    expectedAuthorities: ['MoWCD', 'MoHFW', 'MSDE', 'MoD', 'MoL&J', 'MoA&FW', 'MoL&E', 'MoTA', 'MoSJ&E', 'MoMA', 'MoF']
  },
  {
    id: 'SEC-05',
    number: '05',
    title: 'State & Union Territory Education Governance',
    subtitle: 'State constitutional structure and the Maharashtra flagship demonstration branch',
    summary: 'Details State Legislature, Governor, CM, and State departments, paired with a complete concrete implementation of Maharashtra (School Education, MSBSHSE Pune, SCERT MH, DTE, State CET Cell, Higher & Technical Education, MUHS).',
    iconName: 'MapPin',
    expectedSubsections: ['05.1 State constitutional & political structure', '05.2 Maharashtra-specific branch', '05.3 State authority cards', '05.4 Union Territory arrangements'],
    expectedAuthorities: ['Governor', 'Chief Minister', 'State Education Minister', 'MSBSHSE', 'SCERT Maharashtra', 'Directorate of Technical Education MH', 'Maharashtra State CET Cell']
  },
  {
    id: 'SEC-06',
    number: '06',
    title: 'Local & District Education Administration',
    subtitle: 'How decisions become operational at the school and municipality level',
    summary: 'Operational delivery through District Collectors, DEOs, BEOs, Municipal Corporations, Panchayati Raj, RTE Local Authorities, School Management Committees (SMCs), and Headteachers.',
    iconName: 'Compass',
    expectedSubsections: ['06.1 District administration', '06.2 DEO / equivalent', '06.3 Municipal corporations', '06.4 Panchayati Raj institutions', '06.5 RTE local authorities', '06.6 School Management Committees', '06.7 Headteachers & Principals', '06.8 RTE legal branch'],
    expectedAuthorities: ['District Collector', 'District Education Officer (DEO)', 'Block Education Officer (BEO)', 'Municipal Corporation', 'Panchayat Samiti', 'School Management Committee (SMC)']
  },
  {
    id: 'SEC-07',
    number: '07',
    title: 'Early Childhood & School Education Bodies',
    subtitle: 'Pre-primary, academic resource bodies, national boards and central networks',
    summary: 'Details ECCE ecosystem, NCERT, NIOS, CBSE, CISCE, SCERTs, State Boards, central networks (KVS, NVS), NCTE teacher education regulation, and school recognition frameworks.',
    iconName: 'GraduationCap',
    expectedSubsections: ['07.1 Early childhood education', '07.2 NCERT & NIOS', '07.3 CBSE & CISCE', '07.4 State SCERTs & State Boards', '07.5 School networks (KVS, NVS)', '07.6 Teacher education (NCTE)', '07.7 School recognition and compliance'],
    expectedAuthorities: ['NCERT', 'CBSE', 'CISCE', 'NIOS', 'KVS', 'NVS', 'NCTE', 'ECCE Council']
  },
  {
    id: 'SEC-08',
    number: '08',
    title: 'Higher Education Governance',
    subtitle: 'Standards setting, statutory regulators and 8 distinct university categories',
    summary: 'Distinguishes standards bodies (UGC, AICTE) from the 8 types of institutions awarding degrees (Central, State Public, Deemed-to-be, State Private, Institutes of National Importance, Autonomous, Affiliated, ODL).',
    iconName: 'BookOpen',
    expectedSubsections: ['08.1 UGC', '08.2 AICTE', '08.3 8 University types', '08.4 Institutes of National Importance', '08.5 Affiliation & degree-awarding authority', '08.6 Distance and online education (DEB)'],
    expectedAuthorities: ['UGC', 'AICTE', 'Central Universities', 'State Universities', 'Deemed Universities', 'IIT Council', 'NIT Council']
  },
  {
    id: 'SEC-09',
    number: '09',
    title: 'Professional & Sector-Specific Regulators',
    subtitle: '14 statutory professional councils governing practice and education',
    summary: 'Exhaustive cards for NMC (Medicine), NCISM, NCH, NDC (Dental), PCI (Pharmacy), INC (Nursing), BCI (Law), CoA (Architecture), RCI (Rehabilitation), VCI (Veterinary), ICAR, NCVET, and Accounting bodies (ICAI, ICMAI, ICSI).',
    iconName: 'Award',
    expectedSubsections: ['09.1 NMC', '09.2 NCISM', '09.3 NCH', '09.4 Dental NDC', '09.5 PCI', '09.6 INC', '09.7 BCI', '09.8 NCTE', '09.9 CoA', '09.10 RCI', '09.11 VCI', '09.12 ICAR', '09.13 NCVET', '09.14 ICAI/ICMAI/ICSI'],
    expectedAuthorities: ['NMC', 'BCI', 'PCI', 'CoA', 'INC', 'RCI', 'VCI', 'ICAR', 'NCVET', 'ICAI']
  },
  {
    id: 'SEC-10',
    number: '10',
    title: 'Examination & Testing Authorities',
    subtitle: 'Testing agencies, recruitment commissions, CET cells and school boards',
    summary: 'Detailed examination cards: NTA (JEE Main, NEET-UG, CUET, UGC-NET), UPSC (CSE, ESE, NDA), State PSCs, SSC (CGL, CHSL), RRB, IBPS/SBI/RBI, State CET Cells (Maha CET), and board examination authorities.',
    iconName: 'FileCheck',
    expectedSubsections: ['10.1 NTA', '10.2 UPSC', '10.3 State PSCs', '10.4 SSC', '10.5 RRB', '10.6 IBPS / Banking', '10.7 State CET Cells', '10.8 Professional exam bodies', '10.9 School boards', '10.10 Institution-level exams'],
    expectedAuthorities: ['NTA', 'UPSC', 'SSC', 'RRB', 'IBPS', 'State CET Cell (MH)', 'CBSE Exam Wing', 'ICAI Exam Committee']
  },
  {
    id: 'SEC-11',
    number: '11',
    title: 'Quality, Accreditation & Rankings',
    subtitle: 'Strict tripartite distinction: Recognition vs. Accreditation vs. Ranking',
    summary: 'Demarcates institutional approval (UGC/AICTE) from quality accreditation (NAAC, NBA) and metric rankings (NIRF). Details IQAC, inspection mandates, and why ranking is neither an operational licence nor an accreditation.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['11.1 NAAC', '11.2 NBA', '11.3 NIRF', '11.4 Assessment frameworks', '11.5 Institutional QA (IQAC)', '11.6 Ranking vs Recognition vs Approval'],
    expectedAuthorities: ['NAAC', 'NBA', 'NIRF', 'IQAC']
  },
  {
    id: 'SEC-12',
    number: '12',
    title: 'Funding, Scholarships & Public Finance',
    subtitle: 'Who pays for education, approves grants and enforces financial accountability',
    summary: 'Details Union & State budgets, Central-Sector vs Centrally Sponsored schemes (Samagra Shiksha, PM-USHA), UGC development grants, multi-ministry scholarships (MoE, MSJE, MoTA, MoMA), research funding councils, and CAG audit.',
    iconName: 'Coins',
    expectedSubsections: ['12.1 Union budget', '12.2 State budgets', '12.3 Grants & funding authorities', '12.4 Scholarships & fellowships', '12.5 Research funding agencies (SERB, CSIR)', '12.6 Institutional fees regulation', '12.7 CAG audit'],
    expectedAuthorities: ['Ministry of Finance', 'UGC Grants Bureau', 'National Scholarship Portal (NSP)', 'CAG of India']
  },
  {
    id: 'SEC-13',
    number: '13',
    title: 'Oversight, Rights, Complaints & Appeals',
    subtitle: 'Judicial review, statutory ombudsmen, child rights and grievance routing',
    summary: 'Covers Supreme Court, High Courts (Art 32/226), NCPCR/SCPCRs under RTE, Central Vigilance Commission (CVC), CAG, Information Commissions (RTI Act 2005), and a complete multi-tier dispute routing flowchart.',
    iconName: 'AlertCircle',
    expectedSubsections: ['13.1 Courts & judicial review', '13.2 NCPCR & SCPCR', '13.3 CAG audit', '13.4 CVC & vigilance', '13.5 Information Commissions / RTI', '13.6 Consumer forums', '13.7 Police / CBI for exam leaks', '13.8 Complaint pathway flowchart'],
    expectedAuthorities: ['Supreme Court of India', 'High Courts', 'NCPCR', 'CAG', 'CVC', 'Central Information Commission']
  },
  {
    id: 'SEC-14',
    number: '14',
    title: 'How a Decision Becomes a Rule',
    subtitle: 'The interactive reform engine: from identified problem to lawful notification',
    summary: 'A 7-stage operational decision engine: 1) Identify problem, 2) Legal competence, 3) Select from 11 legal instruments, 4) Required approvals, 5) Passage & gazette publication, 6) Monitoring, 7) Review. Includes entrance exam amendment case study.',
    iconName: 'Workflow',
    expectedSubsections: ['14.1 Identify policy problem', '14.2 Identify legal competence', '14.3 Choose legal instrument (11 types)', '14.4 Consultation & approvals', '14.5 Implementation & monitoring', '14.6 Changing an entrance exam walkthrough', '14.7 Judicial & statutory remedies'],
    expectedAuthorities: ['Reform Planning Engine', 'Rulemaking Authority', 'Gazette Notification Bureau']
  },
  {
    id: 'SEC-15',
    number: '15',
    title: 'Authority Matrix & Decision Rights',
    subtitle: '16 core decision powers compared across 6 governing categories',
    summary: 'Definitive comparative matrix mapping exactly who can amend the Constitution, enact Acts, set curriculum, set higher ed standards, conduct entrance exams, award degrees, accredit, rank, licence, fund, and judicially review.',
    iconName: 'Table',
    expectedSubsections: ['15.1 Legislation & Constitution', '15.2 Curriculum & standards', '15.3 Exams & admissions', '15.4 Degrees & accreditation', '15.5 Licensing & funding', '15.6 Review & remedies', '15.7 Interpretive guidelines'],
    expectedAuthorities: ['Parliament', 'Union Executive', 'State Government', 'Regulator', 'Exam Agency', 'University']
  },
  {
    id: 'SEC-16',
    number: '16',
    title: 'Cross-Board Connections & Source Register',
    subtitle: 'Unifying the 3-board taxonomy and official primary source registry',
    summary: 'Provides the cross-board taxonomy connecting Whiteboard 1 (Governance) to Whiteboard 2 (Institutions) and Whiteboard 3 (Examinations & Careers), plus the 9-priority primary source register.',
    iconName: 'Database',
    expectedSubsections: ['16.1 Board 1 -> Board 2 links', '16.2 Board 1 -> Board 3 links', '16.3 Board 2 -> Board 3 links', '16.4 Cross-board ID taxonomy', '16.5 Source register & priority hierarchy', '16.6 Verification audit trail'],
    expectedAuthorities: ['Taxonomy Registrar', 'Source Documentation Bureau', 'Cross-Board Router']
  }
];

export const ROOT_NODE: EducationNode = {
  id: 'ROOT-IND-EDU-GOV',
  type: 'sectionHub',
  title: 'INDIAN EDUCATION GOVERNANCE, AUTHORITIES, POWERS & STANDARDS',
  abbreviation: 'IEGAPS-ROOT',
  sectionId: 'ROOT',
  sectionNumber: '00',
  level: 'constitutional',
  category: 'legislation',
  summary: 'The central master root of Indian education governance. Branches directly into 16 constitutional, legislative, administrative, regulatory, operational, quality, financial and oversight sections.',
  legalStatus: 'National Governance Map Master Root',
  mandate: [
    'Identify the competent authority for every education-related decision in India',
    'Map constitutional provisions, statutory frameworks, executive allocations of business and regulatory standards',
    'Provide legally traceable links from problems to authorities, legal instruments and official sources'
  ],
  powers: [
    'Central root anchoring 16 major structural governance branches',
    'Organizes over 300 authorities, institutions, laws, examinations, and dispute routes',
    'Provides multi-dimensional filtering by government tier and functional category'
  ],
  limitations: [
    'Does not replace primary statutes, Gazette notifications, or judicial rulings',
    'Represents legal governance structures; does not administer student applications directly'
  ],
  sourceIds: ['SRC-CONST-ROOT', 'SRC-AOB-1961'],
  verificationStatus: 'verified',
  lastVerifiedDate: '2026-10-14'
};

export const SECTION_NODES: EducationNode[] = SECTION_METAS.map((sec) => ({
  id: sec.id,
  type: 'sectionHub',
  title: `${sec.number}. ${sec.title.toUpperCase()}`,
  abbreviation: `SEC-${sec.number}`,
  sectionId: sec.id,
  sectionNumber: sec.number,
  parentId: 'ROOT-IND-EDU-GOV',
  level: sec.number === '01' ? 'constitutional' : sec.number === '05' ? 'state' : sec.number === '06' ? 'local' : 'union',
  category: sec.number === '01' || sec.number === '02' ? 'legislation' : sec.number === '07' ? 'school-education' : sec.number === '08' ? 'higher-education' : sec.number === '09' ? 'professional-regulation' : sec.number === '10' ? 'examination' : sec.number === '11' ? 'accreditation-ranking' : sec.number === '12' ? 'funding-finance' : sec.number === '13' ? 'oversight-remedies' : 'executive-administration',
  summary: sec.summary,
  legalStatus: 'Primary Architectural Section Hub',
  mandate: [sec.subtitle, ...sec.expectedSubsections],
  powers: [
    `Coordinates all child authorities and legal instruments in Section ${sec.number}`,
    'Anchors detailed node cards and specific statutory limitations'
  ],
  limitations: [
    'Container node for organizational visual layout and drill-down exploration'
  ],
  sourceIds: ['SRC-CONST-ROOT'],
  verificationStatus: 'verified',
  lastVerifiedDate: '2026-10-14'
}));
