import { EducationNode } from '../types';

export const QUALITY_AND_FINANCE_NODES: EducationNode[] = [
  // SECTION 11: QUALITY, ACCREDITATION & RANKINGS
  {
    id: 'FRAMEWORK-THREE-PILLARS',
    type: 'legalInstrument',
    title: 'Tripartite Distinction: Recognition vs Accreditation vs Ranking',
    abbreviation: 'Quality Framework',
    sectionId: 'SEC-11',
    sectionNumber: '11',
    parentId: 'SEC-11',
    level: 'union',
    category: 'accreditation-ranking',
    summary: 'The critical legal and conceptual distinction: 1. Recognition / Approval gives the legal right to operate (UGC/AICTE/NMC); 2. Accreditation grades quality against objective rubrics (NAAC/NBA); 3. Ranking provides relative comparative positioning (NIRF).',
    legalStatus: 'National Regulatory Concept Model',
    mandate: [
      'Prevent confusion between statutory operating licence, quality grading, and competitive metric ranking'
    ],
    powers: [
      'Establishes that lack of ranking does not mean an institution is illegal, but lack of recognition makes degrees invalid'
    ],
    limitations: [
      'Accreditation is periodic; ranking changes annually; recognition is continuous unless revoked'
    ],
    sourceIds: ['SRC-UGC-ACT-1956', 'SRC-NAAC-MOE', 'SRC-NIRF-MOE'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NAAC',
    type: 'statutoryRegulator',
    title: 'National Assessment and Accreditation Council',
    abbreviation: 'NAAC',
    sectionId: 'SEC-11',
    sectionNumber: '11',
    parentId: 'SEC-11',
    level: 'union',
    category: 'accreditation-ranking',
    summary: 'Autonomous institution established by the UGC in 1994 to assess and accredit institutions of higher education (universities and colleges) across India on a multi-criteria grade scale (A++, A+, A, etc.).',
    legalStatus: 'Autonomous Body under Section 12(ccc), UGC Act 1956',
    ministerialRelationship: 'University Grants Commission (UGC)',
    mandate: [
      'Institutional accreditation evaluating curriculum, teaching-learning, research, infrastructure, governance, and values',
      'Requires submission of Self-Study Report (SSR), Data Validation and Verification (DVV), and Peer Team inspection'
    ],
    powers: [
      'Awards cumulative grade point averages (CGPA) and accreditation validity typically for 5 years',
      'NAAC grades determine eligibility for UGC autonomy, RUSA / PM-USHA funding, and category-I graded autonomy'
    ],
    limitations: [
      'NAAC does not accredit individual technical programmes (handled by NBA)',
      'NAAC accreditation is not a statutory permit to operate a university'
    ],
    inputs: ['Institutional Self Study Reports (SSR)', 'Student Satisfaction Surveys (SSS)', 'Physical Peer Team visits'],
    outputs: ['Institutional Quality Grade Sheet', 'Accreditation Status Report', 'Recommendations for Quality Enhancement'],
    sourceIds: ['SRC-NAAC-MOE'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NBA',
    type: 'statutoryRegulator',
    title: 'National Board of Accreditation',
    abbreviation: 'NBA',
    sectionId: 'SEC-11',
    sectionNumber: '11',
    parentId: 'SEC-11',
    level: 'union',
    category: 'accreditation-ranking',
    summary: 'Autonomous accreditation body originally established by AICTE, granting programme-level outcome-based accreditation to technical and professional disciplines (Engineering, Pharmacy, Architecture, MBA). Permanent signatory to Washington Accord.',
    legalStatus: 'Autonomous Accreditation Body / Washington Accord Signatory',
    mandate: [
      'Evaluate specific engineering and technical degree programmes against international outcome-based standards',
      'Ensure international mobility of Indian engineering graduates under the Washington Accord framework'
    ],
    powers: [
      'Accredits undergraduate programmes (Tier-I for autonomous/university departments, Tier-II for affiliated colleges)',
      'Grants accreditation for 3 or 6 years based on meeting Course Outcomes (CO) and Program Outcomes (PO)'
    ],
    limitations: [
      'Evaluates individual academic programmes, not the whole university institution (institutional handled by NAAC)'
    ],
    sourceIds: ['SRC-AICTE-ACT-1987'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NIRF',
    type: 'institution',
    title: 'National Institutional Ranking Framework',
    abbreviation: 'NIRF',
    sectionId: 'SEC-11',
    sectionNumber: '11',
    parentId: 'SEC-11',
    level: 'union',
    category: 'accreditation-ranking',
    summary: 'Annual ranking framework launched by the Ministry of Education in 2015 to rank higher education institutions across India using objective, data-driven performance parameters.',
    legalStatus: 'Government Ranking Framework (Ministry of Education)',
    mandate: [
      'Rank participating institutions under Overall, University, Colleges, Engineering, Management, Medical, Pharmacy, Law, Dental, Innovation, and State Public Universities categories'
    ],
    powers: [
      'Evaluates five broad metric clusters: Teaching, Learning & Resources (TLR), Research & Professional Practice (RPC), Graduation Outcomes (GO), Outreach & Inclusivity (OI), and Peer Perception (PR)'
    ],
    limitations: [
      'NIRF is a comparative ranking, NOT a statutory operating licence, NOT an accreditation certificate, and NOT a degree conferral power'
    ],
    inputs: ['Institutional submitted data', 'Scopus / Web of Science bibliometrics', 'Third-party perception surveys'],
    outputs: ['Annual NIRF India Rankings league tables and parameter scorecards'],
    sourceIds: ['SRC-NIRF-MOE'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'INST-IQAC',
    type: 'institution',
    title: 'Internal Quality Assurance Cell (IQAC)',
    abbreviation: 'IQAC',
    sectionId: 'SEC-11',
    sectionNumber: '11',
    parentId: 'SEC-11',
    level: 'institutional',
    category: 'accreditation-ranking',
    summary: 'Mandatory internal quality nodal cell in every accredited higher educational institution, responsible for continuous quality assessment, Annual Quality Assurance Reports (AQAR), and NAAC preparation.',
    legalStatus: 'Institutional Quality Mechanism under NAAC Guidelines',
    mandate: [
      'Institutionalize quality culture, student feedback systems, and academic and administrative audits (AAA)'
    ],
    powers: [
      'Monitors teaching pedagogies, faculty research output, and coordinates institutional accreditation submissions'
    ],
    limitations: [
      'Internal monitoring body without external regulatory sanctions'
    ],
    sourceIds: ['SRC-NAAC-MOE'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },

  // SECTION 12: FUNDING, SCHOLARSHIPS & PUBLIC FINANCE
  {
    id: 'FIN-UNION-BUDGET',
    type: 'legalInstrument',
    title: 'Union Budget & Educational Appropriations',
    abbreviation: 'Union Budget (Edu)',
    sectionId: 'SEC-12',
    sectionNumber: '12',
    parentId: 'SEC-12',
    level: 'union',
    category: 'funding-finance',
    summary: 'Annual financial statement presented to Parliament under Article 112, allocating funds to the Ministry of Education (~Rs 1.2+ lakh crore) and related human resource development schemes.',
    legalStatus: 'Constitutional Financial Enactment (Articles 112 to 114)',
    mandate: [
      'Authorizes all expenditure from the Consolidated Fund of India for national educational institutions and schemes'
    ],
    powers: [
      'Passes Appropriation Bill legalizing grants for Central Universities, IITs, NITs, and Samagra Shiksha'
    ],
    limitations: [
      'Funds cannot be spent without parliamentary appropriation and concurrence of Ministry of Finance'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'FIN-SCHEME-CSS',
    type: 'process',
    title: 'Centrally Sponsored Schemes (CSS) — Samagra Shiksha & PM-USHA',
    abbreviation: 'Centrally Sponsored Schemes',
    sectionId: 'SEC-12',
    sectionNumber: '12',
    parentId: 'SEC-12',
    level: 'union',
    category: 'funding-finance',
    summary: 'Schemes funded jointly by Union and State governments (typically 60:40 ratio; 90:10 for North East/Himalayan states) implemented through State Implementation Societies.',
    legalStatus: 'Union-State Financial Partnership Scheme',
    mandate: [
      'Samagra Shiksha: Unified scheme for school education from preschool to senior secondary',
      'PM-USHA (Pradhan Mantri Uchchatar Shiksha Abhiyan): Strategic funding for state universities and colleges'
    ],
    powers: [
      'Disburses major infrastructure grants, digital classrooms, teacher salaries, and equity interventions'
    ],
    limitations: [
      'Requires state matching share; central tranches withheld if state fails to fulfill reform milestones or submit UCs'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'FIN-SCHOLARSHIPS',
    type: 'process',
    title: 'National Scholarships & Fellowships Portfolio',
    abbreviation: 'National Scholarships',
    sectionId: 'SEC-12',
    sectionNumber: '12',
    parentId: 'SEC-12',
    level: 'union',
    category: 'funding-finance',
    summary: 'Multi-ministry direct benefit transfer (DBT) scholarship portfolio administered through the National Scholarship Portal (NSP), funding millions of school, college, and doctoral students.',
    legalStatus: 'Government Welfare Funding under Article 46',
    mandate: [
      'MoE: Central Sector Scheme of Scholarship for College and University Students, PMSSS J&K',
      'MoSJ&E: Post-Matric Scholarship for SC, Top Class Education Scheme for SC Students',
      'MoTA: National Fellowship and Scholarship for Higher Education of ST Students',
      'MoMA: Pre-Matric, Post-Matric, and Merit-cum-Means Scholarships for Minorities',
      'UGC / CSIR: Junior Research Fellowship (JRF) and Senior Research Fellowship (SRF)'
    ],
    powers: [
      'Disburses financial stipends directly into verified Aadhaar-seeded bank accounts of eligible scholars'
    ],
    limitations: [
      'Scholarships require strict annual verification of income certificates, caste validity, and course attendance'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'FIN-RESEARCH-COUNCILS',
    type: 'institution',
    title: 'National Research Funding Councils (DST, DBT, CSIR, ICMR, SERB/ANRF)',
    abbreviation: 'Research Councils',
    sectionId: 'SEC-12',
    sectionNumber: '12',
    parentId: 'SEC-12',
    level: 'union',
    category: 'funding-finance',
    summary: 'National scientific and social research agencies providing competitive peer-reviewed research grants, fellowships, and lab infrastructure funding to faculty and PhD scholars.',
    legalStatus: 'Central Autonomous Councils / Statutory Bodies (Anusandhan NRF Act, 2023)',
    mandate: [
      'Catalyze foundational and applied research through extramural grants (Core Research Grant, FIST, INSPIRE)'
    ],
    powers: [
      'Awards research grants to university researchers following double-blind expert peer review'
    ],
    limitations: [
      'Funds designated project objectives; requires submission of audited utilization certificates (UC)'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-CAG',
    type: 'oversight',
    title: 'Comptroller and Auditor General of India (CAG)',
    abbreviation: 'CAG',
    sectionId: 'SEC-12',
    sectionNumber: '12',
    parentId: 'SEC-12',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'Supreme audit institution established under Article 148. Conducts financial, compliance, and performance audits of all Union and State education expenditures, Central Universities, regulators, and schemes.',
    legalStatus: 'Constitutional Audit Authority (Articles 148 to 151)',
    mandate: [
      'Audit all expenditure from the Consolidated Fund of India and of each State',
      'Audit accounts of Central Universities, UGC, AICTE, NTA, CBSE, and centrally assisted societies'
    ],
    powers: [
      'Complete right of access to books, accounts, and financial files of all covered educational bodies',
      'Submits audit reports to the President / Governors for laying before Parliament (PAC) and State Legislatures'
    ],
    limitations: [
      'CAG possesses audit and reporting powers; it does not prosecute officials directly or cancel examinations'
    ],
    sourceIds: ['SRC-CAG-CONST-148'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
