import { EducationNode } from '../types';

export const EXAMINATION_NODES: EducationNode[] = [
  {
    id: 'GOV-NTA',
    type: 'examinationAgency',
    title: 'National Testing Agency',
    abbreviation: 'NTA',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'SEC-10',
    level: 'union',
    category: 'examination',
    summary: 'Autonomous specialist testing organisation approved by the Union Cabinet in 2017 to conduct entrance examinations for admissions and fellowship eligibility in premier higher education institutions.',
    legalStatus: 'Autonomous Society (Societies Registration Act, 1860)',
    ministerialRelationship: 'Department of Higher Education, Ministry of Education',
    leadershipRole: 'Governing Body chaired by eminent educationist, led by Director General',
    mandate: [
      'Conduct standardized, objective, computer-based entrance tests for premier national admissions',
      'Deploy advanced psychometric assessment, secure question banking, and transparent normalization algorithms'
    ],
    powers: [
      'Publishes official information bulletins, candidate city slips, admit cards, and provisional answer keys',
      'Invites challenges to answer keys, calculates equipercentile normalized scores, and declares national rank lists',
      'Conducts JEE (Main), NEET (UG), CUET (UG), CUET (PG), UGC-NET, GPAT, and CMAT'
    ],
    limitations: [
      'Does not determine admission eligibility criteria or seat reservation quotas (fixed by MoE/NMC/UGC)',
      'Does not allocate seats or conduct admission counselling (counselling handled by JoSAA, CSAB, MCC, and universities)',
      'Does not award degrees, diplomas, or statutory licenses to practice'
    ],
    inputs: ['Candidate online registrations', 'Institutional seat matrices', 'Curriculum inputs from NCERT/NMC'],
    outputs: ['National Rank Cards', 'Raw and Normalized NTA Scores', 'Final Answer Keys', 'Disqualified candidate lists'],
    relatedExaminations: ['EXAM-JEE-MAIN', 'EXAM-NEET-UG', 'EXAM-CUET-UG', 'EXAM-CUET-PG', 'EXAM-UGC-NET'],
    sourceIds: ['SRC-NTA-CABINET-2017', 'SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXAM-JEE-MAIN',
    type: 'process',
    title: 'Joint Entrance Examination (Main)',
    abbreviation: 'JEE (Main)',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'GOV-NTA',
    level: 'union',
    category: 'examination',
    summary: 'National computer-based entrance examination for B.Tech/B.Arch admissions across NITs, IIITs, CFTIs, and the sole qualifying gateway for JEE (Advanced) to IITs.',
    legalStatus: 'National Entrance Examination mandated by MoE',
    mandate: [
      'Evaluate physics, chemistry, and mathematics proficiency of over 1.2 million applicants annually'
    ],
    powers: [
      'NTA percentile scores determine admission to NITs/IIITs and qualify top 250,000 candidates for JEE Advanced'
    ],
    limitations: [
      'Counselling and seat allocation conducted separately by JoSAA / CSAB, not by NTA'
    ],
    sourceIds: ['SRC-NTA-CABINET-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXAM-NEET-UG',
    type: 'process',
    title: 'National Eligibility-cum-Entrance Test (Undergraduate)',
    abbreviation: 'NEET (UG)',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'GOV-NTA',
    level: 'union',
    category: 'examination',
    summary: 'The statutory single national entrance examination for admission to undergraduate medical (MBBS), dental (BDS), AYUSH (BAMS, BHMS), and veterinary courses in all medical institutions across India.',
    legalStatus: 'Statutory Entrance Examination under Section 14, NMC Act 2019',
    mandate: [
      'Single uniform entrance examination mandated by Parliament and upheld by the Supreme Court of India'
    ],
    powers: [
      'Generates All India Rank (AIR) list used by MCC for 15% All India Quota and State DME cells for 85% state quota'
    ],
    limitations: [
      'Pen-and-paper mode examination conducted by NTA; counselling performed independently by MCC/States'
    ],
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-NTA-CABINET-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXAM-CUET-UG',
    type: 'process',
    title: 'Common University Entrance Test (Undergraduate)',
    abbreviation: 'CUET (UG)',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'GOV-NTA',
    level: 'union',
    category: 'examination',
    summary: 'National single-window entrance examination for admission into undergraduate courses across all Central Universities, participating State, Deemed, and Private universities.',
    legalStatus: 'National Entrance Test mandated by MoE & UGC',
    mandate: [
      'Eliminate disparate Class 12 board cutoff variations and provide equal opportunity to students nationwide'
    ],
    powers: [
      'Produces subject-wise normalized percentile scores used by universities (e.g., Delhi University CSAS) for merit lists'
    ],
    limitations: [
      'Each participating university prepares its own merit list and conducts seat allotment independently'
    ],
    sourceIds: ['SRC-UGC-ACT-1956', 'SRC-NTA-CABINET-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXAM-UGC-NET',
    type: 'process',
    title: 'UGC-National Eligibility Test',
    abbreviation: 'UGC-NET / JRF',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'GOV-NTA',
    level: 'union',
    category: 'examination',
    summary: 'National eligibility examination determining eligibility for Assistant Professorship and award of Junior Research Fellowship (JRF) in Indian universities and colleges, and PhD admissions.',
    legalStatus: 'Statutory Eligibility Exam under UGC Regulations',
    mandate: [
      'Test teaching and research aptitudes in 83 humanistic, social science, and language subjects'
    ],
    powers: [
      'Qualifies candidates for permanent faculty positions across all Indian universities; qualifies for JRF stipend'
    ],
    limitations: [
      'Does not guarantee appointment (selection conducted by university statutory selection committees)'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-UPSC',
    type: 'examinationAgency',
    title: 'Union Public Service Commission',
    abbreviation: 'UPSC',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'SEC-10',
    level: 'union',
    category: 'examination',
    summary: 'Constitutional recruitment commission established under Article 315 of the Constitution of India. Conducts examinations for appointment to the services of the Union and All-India Services.',
    legalStatus: 'Constitutional Body (Articles 315 to 323)',
    mandate: [
      'Conduct competitive examinations and interviews for recruitment to All-India Services (IAS, IPS, IFS) and Central Group A & B posts',
      'Advise the President of India on disciplinary matters and methods of recruitment'
    ],
    powers: [
      'Independent constitutional selection authority; submits annual reports directly to the President for laying before Parliament',
      'Conducts CSE, ESE, CDS, NDA & NA, CAPF (AC), Combined Medical Services (CMS), and Indian Geologist examinations'
    ],
    limitations: [
      'UPSC is a recruitment and selection body; it is not an academic regulator and does not award academic degrees',
      'Recommendations are binding in practice, but formal appointment orders are issued by the President / cadre ministries'
    ],
    relatedExaminations: ['EXAM-UPSC-CSE', 'EXAM-UPSC-ESE', 'EXAM-UPSC-NDA'],
    sourceIds: ['SRC-UPSC-CONST-315'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXAM-UPSC-CSE',
    type: 'process',
    title: 'Civil Services Examination',
    abbreviation: 'UPSC CSE',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'GOV-UPSC',
    level: 'union',
    category: 'examination',
    summary: 'Three-stage national competitive recruitment examination (Prelims, Mains, Personality Test) for appointment to IAS, IFS, IPS, IRS, and other premier central administrative cadres.',
    legalStatus: 'Constitutional Examination under Civil Services Examination Rules',
    mandate: [
      'Select top administrative leaders for the Union and State governments based on rigorous merit'
    ],
    powers: [
      'Final recommended list is accepted by Department of Personnel and Training (DoPT) for service cadre allocation'
    ],
    limitations: [
      'Cadre allocation and service conditions governed by DoPT, not by UPSC'
    ],
    sourceIds: ['SRC-UPSC-CONST-315'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-SSC',
    type: 'examinationAgency',
    title: 'Staff Selection Commission',
    abbreviation: 'SSC',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'SEC-10',
    level: 'union',
    category: 'examination',
    summary: 'Attached office of DoPT responsible for recruiting staff for non-technical Group B and Group C non-gazetted posts in various Ministries, Departments, and Subordinate Offices of the Government of India.',
    legalStatus: 'Attached Office (Department of Personnel and Training)',
    mandate: [
      'Conduct mega-scale recruitment examinations for central government executive, inspector, auditor, and ministerial cadres'
    ],
    powers: [
      'Conducts Combined Graduate Level (CGL), Combined Higher Secondary Level (CHSL), Multi-Tasking Staff (MTS), and CPO exams'
    ],
    limitations: [
      'Does not recruit Group A officers (recruited by UPSC) or railway technical posts (recruited by RRBs)'
    ],
    relatedExaminations: ['EXAM-SSC-CGL', 'EXAM-SSC-CHSL'],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-RRB',
    type: 'examinationAgency',
    title: 'Railway Recruitment Boards',
    abbreviation: 'RRB',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'SEC-10',
    level: 'union',
    category: 'examination',
    summary: '21 boards across India under the Ministry of Railways (Railway Board) conducting recruitment examinations for technical, supervisory, and operational staff in Indian Railways.',
    legalStatus: 'Departmental Recruitment Board (Ministry of Railways)',
    mandate: [
      'Recruit Non-Technical Popular Categories (NTPC), Assistant Loco Pilots (ALP), Technicians, and Junior Engineers'
    ],
    powers: [
      'Administers large-scale computer based tests (CBT), computer based aptitude tests (CBAT), and document verification'
    ],
    limitations: [
      'Confined strictly to railway service recruitment'
    ],
    relatedExaminations: ['EXAM-RRB-NTPC', 'EXAM-RRB-ALP'],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-IBPS',
    type: 'examinationAgency',
    title: 'Institute of Banking Personnel Selection',
    abbreviation: 'IBPS',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'SEC-10',
    level: 'union',
    category: 'examination',
    summary: 'Autonomous body registered under Societies Registration Act and Public Trust Act, promoted by public sector banks and RBI to conduct common recruitment processes (CRP) for bank officers and clerks.',
    legalStatus: 'Autonomous Industry Trust / Society',
    mandate: [
      'Conduct Common Written Examinations and common interviews for 11 Participating Public Sector Banks and Regional Rural Banks'
    ],
    powers: [
      'Conducts IBPS PO, IBPS Clerk, IBPS SO, and IBPS RRB recruitment cycles'
    ],
    limitations: [
      'State Bank of India (SBI) and Reserve Bank of India (RBI) conduct their own independent recruitment'
    ],
    relatedExaminations: ['EXAM-IBPS-PO', 'EXAM-IBPS-CLERK'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-SBI-RECRUIT',
    type: 'examinationAgency',
    title: 'State Bank of India Recruitment Cell',
    abbreviation: 'SBI Recruitment',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'SEC-10',
    level: 'union',
    category: 'examination',
    summary: 'Internal statutory human resources recruitment wing of State Bank of India operating independently of IBPS for recruiting SBI Probationary Officers and Junior Associates.',
    legalStatus: 'Statutory Corporation Recruitment Wing (SBI Act, 1955)',
    mandate: [
      'Recruit managerial and clerical workforce for India’s largest commercial bank'
    ],
    powers: [
      'Conducts SBI PO and SBI Clerk multi-phase examinations and group discussions'
    ],
    limitations: [
      'Confined exclusively to State Bank of India'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-RBI-RECRUIT',
    type: 'examinationAgency',
    title: 'Reserve Bank of India Services Board',
    abbreviation: 'RBI Services Board',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'SEC-10',
    level: 'union',
    category: 'examination',
    summary: 'Autonomous recruitment board of the Reserve Bank of India, conducting national competitive examinations for RBI Grade B Officers and Grade A Assistant Managers.',
    legalStatus: 'Statutory Central Bank Recruitment Board (RBI Act, 1934)',
    mandate: [
      'Recruit central banking economists, financial analysts, and regulatory officers'
    ],
    powers: [
      'Conducts RBI Grade B (General, DEPR, DSIM) nationwide examinations and interviews'
    ],
    limitations: [
      'Exclusively for the central banking authority'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXAM-AIBE',
    type: 'process',
    title: 'All India Bar Examination',
    abbreviation: 'AIBE',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'GOV-BCI',
    level: 'union',
    category: 'examination',
    summary: 'Statutory examination conducted by the Bar Council of India to evaluate advocate competency and issue the permanent Certificate of Practice (CoP) required to practice law in Indian courts.',
    legalStatus: 'Statutory Professional Examination (Bar Council of India)',
    mandate: [
      'Assess basic legal knowledge and advocacy aptitude of law graduates enrolled with State Bar Councils'
    ],
    powers: [
      'Mandatory condition precedent for practicing in courts; successful candidates receive lifetime Certificate of Practice'
    ],
    limitations: [
      'Does not award an LLB degree; candidates must already possess an approved law degree'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
