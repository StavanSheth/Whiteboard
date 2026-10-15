import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V2: SectionMeta[] = [
  {
    id: 'SEC-00',
    number: '00',
    title: 'Board Identity, Legend & Navigation',
    subtitle: 'Taxonomy of exams, selection workflows, outcome statuses, and verification rules',
    summary: 'Defines how the examination whiteboard functions across 10 exam categories (School, Entrance, Advanced, Eligibility, Recruitment, Professional, Licensing), and distinguishes explicit statuses from registration to appointment.',
    iconName: 'HelpCircle',
    expectedSubsections: ['00.1 Main filters', '00.2 Examination categories', '00.3 Result and outcome legend'],
    expectedAuthorities: ['Legend Hub', 'Status Taxonomy Engine']
  },
  {
    id: 'SEC-01',
    number: '01',
    title: 'Master Student & Candidate Journey',
    subtitle: 'Universal candidate lifecycle from qualification to career destination',
    summary: 'Defines the central 8-stage pipeline: Goal Identification → Eligibility Check → Application → Examination → Merit/Rank → Counselling/Allocation → Admission/Appointment → Career Transition.',
    iconName: 'Compass',
    expectedSubsections: ['01.1 Goal Identification', '01.2 Eligibility assessment', '01.3 Application', '01.4 Examination', '01.5 Merit / Result', '01.6 Counselling', '01.7 Admission / Joining', '01.8 Next Career Stage'],
    expectedAuthorities: ['Candidate Journey Engine']
  },
  {
    id: 'SEC-02',
    number: '02',
    title: 'Annual Examination Calendar & Timelines',
    subtitle: 'Lifecycle time-management engine from notification to confirmation',
    summary: 'Models the standard T-1 to T7 timeline engine: planning, official notification, application window, admit card, examination, answer key objections, counselling rounds, and final joining.',
    iconName: 'Calendar',
    expectedSubsections: ['02.1 Standard timeline stages', '02.2 Date fields and verification rules', '02.3 Dependency chain', '02.4 Calendar views'],
    expectedAuthorities: ['National Examination Calendar Engine']
  },
  {
    id: 'SEC-03',
    number: '03',
    title: 'School Board Examinations',
    subtitle: 'Class 10, Class 11 and Class 12 secondary and senior secondary certifications',
    summary: 'Maps CBSE, CISCE (ICSE/ISC), State Boards (MSBSHSE, etc.) and NIOS open schooling, subject prerequisites (PCM, PCB, Commerce, Humanities), and qualifying certificates for higher education.',
    iconName: 'BookOpen',
    expectedSubsections: ['03.1 Class 10 assessment', '03.2 Class 11 stream selection', '03.3 Class 12 senior secondary', '03.4 Subject combinations', '03.5 Next-stage eligibility'],
    expectedAuthorities: ['CBSE', 'CISCE', 'State Boards', 'NIOS']
  },
  {
    id: 'SEC-04',
    number: '04',
    title: 'Engineering & Technology Admissions',
    subtitle: 'From JEE Main and JEE Advanced to JoSAA/CSAB counselling and State CETs',
    summary: 'The premier technical admissions pathway: JEE Main Session 1 & 2 (NTA), Top 2.5 lakh cutoff, JEE Advanced (IIT JAB), JoSAA common counselling (IITs/NITs/IIITs/GFTIs), CSAB special rounds, and State CETs (MHT-CET, WBJEE, COMEDK).',
    iconName: 'GraduationCap',
    expectedSubsections: ['04.1 JEE Main', '04.2 JEE Advanced', '04.3 JoSAA / CSAB', '04.4 State CETs', '04.5 B.Tech / B.E. admission', '04.6 Lateral entry diploma'],
    expectedAuthorities: ['NTA', 'IIT Joint Admission Board', 'JoSAA', 'CSAB', 'State CET Cells']
  },
  {
    id: 'SEC-05',
    number: '05',
    title: 'Medical & Health-Science Admissions',
    subtitle: 'NEET-UG, NEET-PG, INI-CET, Medical Counselling Committee & Licensure',
    summary: 'Covers NEET-UG for MBBS/BDS/AYUSH (NTA & NMC), 15% All India Quota counselling via MCC/DGHS, 85% State Quota counselling, NEET-PG and INI-CET (AIIMS) for MD/MS, super-speciality admissions, and compulsory rotatory internship.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['05.1 NEET-UG', '05.2 NEET-PG', '05.3 INI-CET', '05.4 Super-speciality', '05.5 BDS / AYUSH routes', '05.6 Counselling & Internship'],
    expectedAuthorities: ['National Medical Commission', 'NTA', 'NBE', 'DGHS / MCC', 'AIIMS New Delhi']
  },
  {
    id: 'SEC-06',
    number: '06',
    title: 'Science, Mathematics & Research Admissions',
    subtitle: 'CUET-UG/PG, IIT JAM, GATE, CSIR-UGC NET, and Ph.D. Pathways',
    summary: 'Pathways for pure sciences and academic research: CUET-UG & PG for Central Universities, IIT-JAM for M.Sc. in IITs/IISc, GATE for M.Tech & PSU recruitment, CSIR-UGC NET for JRF/Lectureship, and Ph.D. doctoral interviews.',
    iconName: 'Award',
    expectedSubsections: ['06.1 CUET-UG Sciences', '06.2 CUET-PG', '06.3 IIT-JAM', '06.4 GATE', '06.5 CSIR-UGC NET', '06.6 Ph.D. Selection'],
    expectedAuthorities: ['NTA', 'IITs (JAM/GATE)', 'CSIR', 'UGC']
  },
  {
    id: 'SEC-07',
    number: '07',
    title: 'Arts, Humanities & Social Sciences',
    subtitle: 'Central University entrances, specialized humanities institutes, and policy careers',
    summary: 'Undergraduate and postgraduate liberal arts pathways via CUET-UG/PG (Delhi University, JNU, BHU), specialized institutional entrances (TISS NET/CUET, Azim Premji), and public policy transitions.',
    iconName: 'BookOpen',
    expectedSubsections: ['07.1 CUET Humanities', '07.2 University admissions', '07.3 PG Social Sciences', '07.4 Public Policy routes'],
    expectedAuthorities: ['NTA', 'University of Delhi', 'JNU', 'TISS']
  },
  {
    id: 'SEC-08',
    number: '08',
    title: 'Commerce, Accounting & Professional Finance',
    subtitle: 'Chartered Accountancy (ICAI), Cost Management (ICMAI), Company Secretary (ICSI)',
    summary: 'Statutory chartered qualifications: CA Foundation → Intermediate → Articleship Training → CA Final (ICAI), CMA Foundation → Inter → Final (ICMAI), CS Executive Entrance Test (CSEET) → Executive → Professional (ICSI), and global CFA/ACCA routes.',
    iconName: 'Briefcase',
    expectedSubsections: ['08.1 B.Com / BBA routes', '08.2 Chartered Accountancy (ICAI)', '08.3 Cost Management (ICMAI)', '08.4 Company Secretary (ICSI)', '08.5 Practical training & Articleship'],
    expectedAuthorities: ['ICAI', 'ICMAI', 'ICSI']
  },
  {
    id: 'SEC-09',
    number: '09',
    title: 'Management & Business Schools',
    subtitle: 'CAT, XAT, CMAT, SNAP, IIM selection process, and MBA/PGDM pathways',
    summary: 'Common Admission Test (IIMs), XAT (XLRI), CMAT (NTA), SNAP (Symbiosis), NMAT, followed by institutional shortlisting: Written Ability Test (WAT), Group Discussion (GD), Personal Interview (PI), and Final Composite Score admission.',
    iconName: 'Landmark',
    expectedSubsections: ['09.1 Common Admission Test (CAT)', '09.2 XAT and private tests', '09.3 CMAT / MAT / ATMA', '09.4 IIM Selection & WAT/PI', '09.5 MBA / PGDM conferral'],
    expectedAuthorities: ['IIMs (CAT Convenor)', 'XLRI', 'NTA', 'AICTE']
  },
  {
    id: 'SEC-10',
    number: '10',
    title: 'Law & Public Policy Admissions',
    subtitle: 'CLAT, AILET, BCI Rules, and the All India Bar Examination (AIBE)',
    summary: 'Covers Common Law Admission Test (Consortium of NLUs) for 5-year integrated BA/BBA LLB, AILET (NLU Delhi), 3-year LLB entrances, Bar Council of India enrollment, and the mandatory All India Bar Examination (AIBE) for Certificate of Practice.',
    iconName: 'Scale',
    expectedSubsections: ['10.1 CLAT-UG & CLAT-PG', '10.2 AILET', '10.3 3-Year LLB Entrances', '10.4 Bar Enrollment & AIBE', '10.5 Certificate of Practice'],
    expectedAuthorities: ['Consortium of National Law Universities', 'NLU Delhi', 'Bar Council of India']
  },
  {
    id: 'SEC-11',
    number: '11',
    title: 'Design, Architecture & Creative Fields',
    subtitle: 'NID DAT, NIFT, UCEED, CEED, NATA and COA Regulations',
    summary: 'National Institute of Design DAT (Prelims + Mains Studio Test), NIFT Entrance Examination (CAT, GAT, Situation Test), UCEED/CEED (IIT Bombay) for B.Des/M.Des, and NATA (Council of Architecture) for B.Arch admissions.',
    iconName: 'Compass',
    expectedSubsections: ['11.1 NID DAT', '11.2 NIFT Process', '11.3 UCEED / CEED', '11.4 NATA Architecture', '11.5 Studio & Portfolio tests'],
    expectedAuthorities: ['National Institute of Design', 'NIFT', 'IIT Bombay', 'Council of Architecture']
  },
  {
    id: 'SEC-12',
    number: '12',
    title: 'Agriculture, Veterinary & Environment',
    subtitle: 'ICAR AIEEA, State Agricultural CETs, and Veterinary Council admissions',
    summary: 'Indian Council of Agricultural Research (ICAR) admissions via CUET-ICAR, State Agricultural Universities (SAUs) state CET quotas, B.V.Sc. & A.H. admissions via NEET-UG under Veterinary Council of India (VCI) regulations.',
    iconName: 'Award',
    expectedSubsections: ['12.1 ICAR Admissions', '12.2 State Agricultural CETs', '12.3 Veterinary Council (VCI) routes', '12.4 Post-graduation & ARS'],
    expectedAuthorities: ['ICAR', 'Veterinary Council of India', 'State Agricultural Universities']
  },
  {
    id: 'SEC-13',
    number: '13',
    title: 'Defence & Military Careers',
    subtitle: 'NDA / Naval Academy, CDS, AFCAT, SSB Interviews and Military Academies',
    summary: 'Commissioned officer recruitment: NDA & NA Examination (UPSC) for 10+2, Combined Defence Services (CDS) for graduates, AFCAT (Air Force), 5-day Services Selection Board (SSB/AFSB), Special Medical Board, and National Defence Academy / IMA / INA / AFA training.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['13.1 NDA / Naval Academy', '13.2 CDS Examination', '13.3 AFCAT', '13.4 SSB Interview', '13.5 Medical Board & Academy Training', '13.6 Agniveer Scheme'],
    expectedAuthorities: ['UPSC', 'Services Selection Board (SSB)', 'Ministry of Defence', 'Armed Forces Academies']
  },
  {
    id: 'SEC-14',
    number: '14',
    title: 'Civil Services & Government Recruitment',
    subtitle: 'UPSC CSE, IFS, SSC CGL, State PSCs (MPSC) and Central Civil Posts',
    summary: 'The premier constitutional recruitment pathway: UPSC Civil Services (Prelims → Mains Written → Personality Test/Interview) for IAS/IPS/IFS/IRS, Indian Forest Service, Staff Selection Commission (SSC CGL/CHSL), and State Public Service Commissions (e.g. MPSC Rajyaseva).',
    iconName: 'Landmark',
    expectedSubsections: ['14.1 UPSC Civil Services Exam', '14.2 Indian Forest Service', '14.3 SSC CGL / CHSL', '14.4 State PSCs (MPSC)', '14.5 Foundation Course & Cadre Allocation'],
    expectedAuthorities: ['UPSC', 'DoPT', 'LBSNAA', 'Staff Selection Commission', 'State PSCs']
  },
  {
    id: 'SEC-15',
    number: '15',
    title: 'Banking, Insurance & Financial Recruitment',
    subtitle: 'IBPS PO/Clerk, SBI Recruitment, RBI Grade B, and Regulatory Cadres',
    summary: 'Public sector bank and regulatory recruitment: Institute of Banking Personnel Selection (IBPS PO, Clerk, SO), State Bank of India (SBI PO/Clerk), Reserve Bank of India (RBI Grade B Direct Recruitment), and LIC/GIC insurance examinations.',
    iconName: 'Building2',
    expectedSubsections: ['15.1 IBPS PO & Clerk', '15.2 SBI PO Recruitment', '15.3 RBI Grade B Officers', '15.4 Insurance Sector Exams', '15.5 Specialist Officers'],
    expectedAuthorities: ['IBPS', 'State Bank of India', 'Reserve Bank of India', 'IRDAI']
  },
  {
    id: 'SEC-16',
    number: '16',
    title: 'Teaching, Education & Academic Careers',
    subtitle: 'CTET, State TETs, UGC-NET, SET/SLET, and Faculty Recruitment',
    summary: 'School teacher and university professor pathways: Central Teacher Eligibility Test (CTET - CBSE), State TETs (MahaTET), UGC-NET for Junior Research Fellowship and Assistant Professor eligibility, and direct university faculty selection.',
    iconName: 'BookOpen',
    expectedSubsections: ['16.1 CTET (CBSE)', '16.2 State TETs', '16.3 UGC-NET', '16.4 SET / SLET', '16.5 Assistant Professor Appointments'],
    expectedAuthorities: ['CBSE', 'NCTE', 'UGC', 'NTA']
  },
  {
    id: 'SEC-17',
    number: '17',
    title: 'Vocational, ITI, Diploma & Apprenticeship',
    subtitle: 'Craftsmen Training (CTS), DGT, Polytechnics, and Lateral Entry',
    summary: 'Technical and skill training: Industrial Training Institutes (ITI) under Directorate General of Training (DGT / NCVT), State Polytechnic Diploma admissions, National Apprenticeship Certificate (NAC), and lateral entry to 2nd year B.Tech.',
    iconName: 'Layers',
    expectedSubsections: ['17.1 ITI / Trade Admissions', '17.2 Polytechnic Admissions', '17.3 Apprenticeship Scheme', '17.4 Lateral Entry to Degree'],
    expectedAuthorities: ['DGT (MSDE)', 'NCVT', 'State Technical Boards']
  },
  {
    id: 'SEC-18',
    number: '18',
    title: 'International Exams & Study Abroad',
    subtitle: 'IELTS, TOEFL, GRE, GMAT, SAT and Association of Indian Universities (AIU) Equivalence',
    summary: 'Global admission routes: English proficiency tests (IELTS, TOEFL iBT, PTE Academic), Graduate records (GRE, GMAT), undergraduate SAT/ACT, foreign credential equivalence by Association of Indian Universities (AIU), and overseas student visas.',
    iconName: 'Compass',
    expectedSubsections: ['18.1 English Proficiency (IELTS/TOEFL)', '18.2 Graduate Testing (GRE/GMAT)', '18.3 Undergraduate SAT', '18.4 AIU Equivalence'],
    expectedAuthorities: ['IDP / British Council', 'ETS', 'GMAC', 'College Board', 'AIU']
  },
  {
    id: 'SEC-19',
    number: '19',
    title: 'Qualification Completion & Professional Licensing',
    subtitle: 'From degree conferral to statutory registration and practice rights',
    summary: 'The boundary between graduation and professional practice: Medical internship and State Medical Council registration, Bar enrollment and AIBE Certificate of Practice, ICAI Fellowship, and Council of Architecture (COA) registration.',
    iconName: 'Award',
    expectedSubsections: ['19.1 Mandatory Internships', '19.2 Statutory Councils Registration', '19.3 Certificate of Practice', '19.4 Continuing Professional Education'],
    expectedAuthorities: ['National Medical Commission', 'Bar Council of India', 'ICAI', 'Council of Architecture']
  },
  {
    id: 'SEC-20',
    number: '20',
    title: 'Results, Counselling, Grievances & Appeals',
    subtitle: 'Merit lists, answer-key challenges, seat allocation rounds, and writ remedies',
    summary: 'Procedural justice in examinations: Provisional answer key display, fee-based question challenges, percentile normalization, multi-round centralized seat allocation (JoSAA, MCC), document verification, and High Court writ jurisdiction (Article 226).',
    iconName: 'Scale',
    expectedSubsections: ['20.1 Answer-Key Objections', '20.2 Score Normalization', '20.3 Multi-Round Seat Allocation', '20.4 Document Verification', '20.5 High Court Judicial Review'],
    expectedAuthorities: ['NTA Grievance Cell', 'JoSAA Seat Allocation', 'MCC Counselling', 'High Courts (Art 226)']
  },
  {
    id: 'SEC-21',
    number: '21',
    title: 'Alternate Routes & Failure Recovery',
    subtitle: 'Second attempts, supplementary exams, open universities, and parallel pathways',
    summary: 'Failure recovery and flexibility: Repeat attempts within limits, Class 12 board improvement exams, NIOS on-demand examinations, distance degrees via IGNOU/State Open Universities, and lateral transition across domains.',
    iconName: 'Layers',
    expectedSubsections: ['21.1 Reattempt & Gap-Year Policies', '21.2 Supplementary & Improvement Exams', '21.3 NIOS On-Demand System', '21.4 Distance Degrees (IGNOU)', '21.5 Alternate Career Transitions'],
    expectedAuthorities: ['NIOS', 'IGNOU', 'School Boards', 'UGC-DEB']
  }
];

export const NODES_V2: EducationNode[] = [
  // --- SECTION 01: Master Student Journey ---
  {
    id: 'JOURNEY-ROOT',
    type: 'process',
    title: 'Master Candidate Progression Journey',
    abbreviation: 'CAND-JOURNEY',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'examination',
    summary: 'The canonical 8-stage pipeline guiding an Indian student from basic school eligibility through selection, counselling, admission, and post-graduation career opportunities.',
    mandate: [
      'Establish a unified procedural model across school, higher education, professional licenses, and civil services.',
      'Enforce transparent separation between examination score, counselling allocation, and institutional enrollment.'
    ],
    powers: [
      'Standardize candidate workflow stages across central and state authorities.',
      'Clarify stage-wise requirements and rejection checkpoints.'
    ],
    limitations: [
      'Does not replace domain-specific statutory regulations of NMC, BCI, or UPSC.',
      'Cannot waive mandatory physical or medical criteria prescribed by law.'
    ],
    examDetails: {
      examAgency: 'Universal Pathway Template',
      eligibilityCriteria: 'Varies by target stream; 10+2, Bachelor Degree, or Professional Certificate',
      examStages: ['1. Eligibility', '2. Application', '3. Examination', '4. Result/Merit', '5. Counselling', '6. Admission/Appointment'],
      applicationWindow: 'Annual cycles aligned with national academic calendar',
      outcome: 'Admission letter, Professional Licensure, or Government Appointment',
      counsellingBody: 'Respective statutory authority (JoSAA, MCC, UPSC, ICAI)',
      nextCareerStage: 'Professional employment, higher research, or statutory practice'
    },
    sourceIds: ['SRC-V2-GOV-GUIDE'],
    verificationStatus: 'verified'
  },

  // --- SECTION 03: School Board Examinations ---
  {
    id: 'EXAM-CBSE-10',
    type: 'examination',
    title: 'CBSE Secondary School Examination (Class 10)',
    abbreviation: 'CBSE-10',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    level: 'union',
    category: 'school-education',
    summary: 'National board examination evaluating secondary school curriculum, serving as the foundational eligibility certification and age verification for senior secondary and diploma admissions.',
    establishingLaw: ['Delhi School Education Act, 1973', 'CBSE Examination Bye-Laws'],
    mandate: [
      'Conduct standardized Class 10 board examinations across affiliated schools nationally and internationally.',
      'Issue Pass Certificate, Marksheet-cum-Certificate of Performance, and Migration Certificate.'
    ],
    powers: [
      'Prescribe examination syllabus, scheme of evaluation, and practical assessment guidelines.',
      'Conduct annual main examinations in February-March and supplementary examinations in July.'
    ],
    limitations: [
      'Cannot mandate university admission directly (serves as senior secondary prerequisite only).'
    ],
    examDetails: {
      examAgency: 'Central Board of Secondary Education (CBSE)',
      eligibilityCriteria: 'Regular students enrolled in CBSE-affiliated schools having completed Class 9 and requisite attendance, or verified private candidates',
      examStages: ['Internal Assessment / Practicals (20 marks)', 'Pen-and-Paper Board Examination (80 marks)'],
      applicationWindow: 'LOC (List of Candidates) submission August - October; Exams in February - April',
      outcome: 'Class 10 Passing Certificate & Grade Card',
      counsellingBody: 'School level admission committees for Class 11 stream allocation',
      nextCareerStage: 'Class 11 (Science, Commerce, Arts) or Polytechnic Diploma'
    },
    sourceIds: ['SRC-CBSE-BYELAWS'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-CBSE-12',
    type: 'examination',
    title: 'CBSE Senior School Certificate Examination (Class 12)',
    abbreviation: 'CBSE-12',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    level: 'union',
    category: 'school-education',
    summary: 'The primary terminal school examination in India. Determines eligibility for all national undergraduate entrance examinations (JEE, NEET, CUET, NDA, CLAT).',
    establishingLaw: ['CBSE Examination Bye-Laws', 'Right to Education Framework'],
    mandate: [
      'Evaluate senior secondary students across Science (PCM/PCB), Commerce, and Humanities streams.',
      'Certify completion of 10+2 school education for national and global university admissions.'
    ],
    powers: [
      'Conduct theoretical and laboratory practical examinations with external examiners.',
      'Award national Senior School Certificate; declare results and percentile ranks.'
    ],
    limitations: [
      'Does not conduct undergraduate admissions directly.'
    ],
    examDetails: {
      examAgency: 'Central Board of Secondary Education (CBSE)',
      eligibilityCriteria: 'Successful completion of Class 11 and verified attendance in Class 12 with approved subject combinations',
      examStages: ['Internal & Laboratory Practicals (30/20 marks)', 'Written Board Examination (70/80 marks)'],
      applicationWindow: 'LOC registration Sept-Oct; Board examinations mid-February to April; Results in May',
      outcome: 'Class 12 Senior Secondary Pass Certificate with subject-wise percentages',
      counsellingBody: 'Direct university admission portals or national testing registration',
      nextCareerStage: 'National entrance exams (JEE, NEET, CUET, CLAT, NDA) or Undergraduate Degrees'
    },
    sourceIds: ['SRC-CBSE-BYELAWS'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-MSBSHSE-12',
    type: 'examination',
    title: 'Maharashtra State Board HSC Examination (Class 12)',
    abbreviation: 'MSBSHSE-HSC',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    level: 'state',
    category: 'school-education',
    summary: 'The Higher Secondary Certificate (HSC) board examination conducted by the Maharashtra State Board of Secondary and Higher Secondary Education (Pune).',
    establishingLaw: ['Maharashtra Secondary and Higher Secondary Education Boards Act, 1965'],
    mandate: [
      'Regulate and examine 10+2 students across 9 divisional boards in Maharashtra (Pune, Mumbai, Nagpur, etc.).',
      'Provide qualifying baseline for MHT-CET, NEET-UG state quota, and general degree colleges.'
    ],
    powers: [
      'Administer HSC examinations in Arts, Science, Commerce, and Vocational streams.',
      'Conduct verification of marks, photocopy of answer books, and re-evaluation.'
    ],
    limitations: [
      'Jurisdiction confined to recognized junior colleges within the State of Maharashtra.'
    ],
    examDetails: {
      examAgency: 'MSBSHSE (Pune)',
      eligibilityCriteria: 'Enrolled Class 12 junior college students in Maharashtra',
      examStages: ['Oral & Practical Exam', 'Written Board Examination (February - March)'],
      applicationWindow: 'November - December; Results in May',
      outcome: 'HSC Pass Certificate and Statement of Marks',
      counsellingBody: 'State CET Cell Maharashtra / University of Mumbai / SPPU Pune',
      nextCareerStage: 'MHT-CET, NEET State Counselling, Engineering/Pharmacy/Agriculture admissions'
    },
    sourceIds: ['SRC-MSBSHSE-ACT'],
    verificationStatus: 'verified'
  },

  // --- SECTION 04: Engineering & Technology Admissions ---
  {
    id: 'EXAM-JEE-MAIN',
    type: 'examination',
    title: 'Joint Entrance Examination (Main)',
    abbreviation: 'JEE-MAIN',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    level: 'union',
    category: 'examination',
    summary: 'National computer-based examination conducted in two sessions by NTA for admission to B.Tech/B.Arch in NITs, IIITs, CFTIs, and serving as the sole screening test for JEE Advanced.',
    establishingLaw: ['MoE Notification on National Testing Agency', 'IIT Council Resolution'],
    mandate: [
      'Screen and rank over 1.2 million engineering aspirants across India annually.',
      'Qualify the top 2,50,000 candidates for eligibility to write JEE Advanced.'
    ],
    powers: [
      'Formulate question papers, administer multi-shift CBTs, and normalize scores via NTA Percentile method.',
      'Publish provisional answer keys, invite challenges, and declare All India Ranks (AIR).'
    ],
    limitations: [
      'Does not allocate seats directly (seat allocation performed by JoSAA / CSAB).',
      'Cannot grant admission to IITs directly without qualifying JEE Advanced.'
    ],
    examDetails: {
      examAgency: 'National Testing Agency (NTA)',
      eligibilityCriteria: '10+2 passed with Physics, Mathematics, and one of Chemistry/Biology/Technical Vocational; 75% aggregate in 12th board or top 20 percentile',
      examStages: ['Session 1 (January CBT)', 'Session 2 (April CBT)', 'Best of Two Percentile Compilation', 'AIR Merit List'],
      applicationWindow: 'Session 1: Nov-Dec; Session 2: Feb-Mar; Examinations Jan & April',
      outcome: 'NTA Percentile Scorecard, All India Rank, and JEE Advanced Eligibility Cutoff',
      counsellingBody: 'Joint Seat Allocation Authority (JoSAA) & CSAB',
      nextCareerStage: 'JEE Advanced (for IITs) or B.Tech in NITs/IIITs/CFTIs'
    },
    sourceIds: ['SRC-JEE-MAIN-BULLETIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-JEE-ADV',
    type: 'examination',
    title: 'Joint Entrance Examination (Advanced)',
    abbreviation: 'JEE-ADV',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    level: 'institutional',
    category: 'examination',
    summary: 'The apex engineering entrance examination in India, conducted by one of the zonal IITs under the aegis of the Joint Admission Board (JAB), exclusively for admission to the 23 IITs.',
    establishingLaw: ['Institutes of Technology Act, 1961', 'IIT Joint Admission Board Regulations'],
    mandate: [
      'Select candidates for undergraduate programmes (B.Tech, B.S., Dual Degree) across all 23 IITs and IISc Bangalore.',
      'Maintain supreme global standards of mathematical, analytical, and physical problem-solving assessment.'
    ],
    powers: [
      'Set advanced two-paper compulsory examination (Paper 1 & Paper 2) on a single day.',
      'Define minimum subject-wise cutoff marks and aggregate qualifying criteria.'
    ],
    limitations: [
      'Maximum 2 attempts permitted in consecutive years starting from the year of passing Class 12.',
      'Candidates must be among the top 2.5 lakh qualifiers of JEE Main.'
    ],
    examDetails: {
      examAgency: 'Organizing IIT under Joint Admission Board (JAB)',
      eligibilityCriteria: 'Top 2,50,000 successful candidates in JEE Main; 75% in Class 12 board (65% for SC/ST); born on or after Oct 1 of eligible year; max 2 attempts',
      examStages: ['Paper 1 (9:00 AM - 12:00 PM CBT)', 'Paper 2 (2:30 PM - 5:30 PM CBT)', 'Both papers mandatory'],
      applicationWindow: 'Registration opens late April / early May; Exam held late May; Results in early June',
      outcome: 'JEE (Advanced) Common Rank List (CRL) and Category Ranks',
      counsellingBody: 'Joint Seat Allocation Authority (JoSAA)',
      nextCareerStage: 'B.Tech / B.S. admission across 23 Indian Institutes of Technology (IITs)'
    },
    sourceIds: ['SRC-JEE-ADV-BROCHURE'],
    verificationStatus: 'verified'
  },
  {
    id: 'BODY-JOSAA',
    type: 'counselling',
    title: 'Joint Seat Allocation Authority',
    abbreviation: 'JoSAA',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    level: 'union',
    category: 'admissions-counselling',
    summary: 'Centralized seat allocation body set up by the Ministry of Education to manage and regulate joint seat allocation for admissions to 121 institutes (23 IITs, 32 NITs, 26 IIITs, and 40 GFTIs).',
    establishingLaw: ['MoE Notification on Common Counselling', 'IIT Council - NITSER Council Consensus'],
    mandate: [
      'Administer unified online seat allocation across all IITs, NITs, IIITs, and GFTIs.',
      'Prevent seat vacancies, multiple holding of seats, and student hardship.'
    ],
    powers: [
      'Run 6 rounds of online seat allocation based on CRL / Category Rank, choice filling, and seat matrix.',
      'Enforce seat acceptance rules (Freeze, Float, Slide, Withdraw) and document verification.'
    ],
    limitations: [
      'Cannot alter institute seat counts or create new quotas outside government notifications.',
      'Does not conduct physical classroom spot rounds (handled by CSAB).'
    ],
    examDetails: {
      examAgency: 'Joint Administrative Body of IITs and NITs',
      eligibilityCriteria: 'Qualified JEE Advanced (for IITs) or Qualified JEE Main (for NITs/IIITs/GFTIs)',
      examStages: ['Choice Filling & Mock Seat Allocations', 'Rounds 1 to 6 Seat Allotment', 'Online Document Verification', 'Seat Acceptance Fee Payment'],
      applicationWindow: 'June - July annual window immediately following JEE Advanced results',
      outcome: 'Provisional Seat Allotment Letter & Institutional Admission Confirmation',
      counsellingBody: 'JoSAA Secretariat',
      nextCareerStage: 'Undergraduate engineering enrollment at assigned IIT, NIT, IIIT, or GFTI'
    },
    sourceIds: ['SRC-JOSAA-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-MHT-CET-ENG',
    type: 'examination',
    title: 'Maharashtra Health & Technical Common Entrance Test (PCM)',
    abbreviation: 'MHT-CET-ENG',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    level: 'state',
    category: 'examination',
    summary: 'State-level entrance examination conducted by the State Common Entrance Test Cell, Maharashtra, for admission to 4-year B.Tech / B.E. programmes across engineering colleges in Maharashtra.',
    establishingLaw: ['Maharashtra Unaided Private Professional Educational Institutions Act, 2015'],
    mandate: [
      'Select students for 85% state quota seats in government, aided, and private engineering institutions in Maharashtra (COEP, VJTI, SPIT, PICT, etc.).'
    ],
    powers: [
      'Conduct multi-session computer-based test in Physics, Chemistry, and Mathematics (PCM).',
      'Declare percentile scores and operate the Centralized Admission Process (CAP).'
    ],
    limitations: [
      'Applicable solely within the state of Maharashtra.'
    ],
    examDetails: {
      examAgency: 'State CET Cell, Maharashtra (Mumbai)',
      eligibilityCriteria: '10+2 passed with Physics & Mathematics as compulsory subjects, plus minimum 45% aggregate (40% for reserved)',
      examStages: ['CBT Exam (Physics+Chem 90 min, Math 90 min)', 'CAP Rounds 1, 2, 3'],
      applicationWindow: 'January - March; Examination in April - May; CAP Counselling in June - August',
      outcome: 'MHT-CET Percentile Scorecard & State Merit List',
      counsellingBody: 'State CET Cell CAP Directorate',
      nextCareerStage: 'B.Tech / B.E. admission across colleges in Maharashtra'
    },
    sourceIds: ['SRC-MHTCET-INFO-BROCHURE'],
    verificationStatus: 'verified'
  },

  // --- SECTION 05: Medical & Health-Science Admissions ---
  {
    id: 'EXAM-NEET-UG',
    type: 'examination',
    title: 'National Eligibility cum Entrance Test (Undergraduate)',
    abbreviation: 'NEET-UG',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    level: 'union',
    category: 'examination',
    summary: 'The sole statutory national entrance examination for admission to undergraduate medical (MBBS), dental (BDS), and AYUSH programmes across all medical colleges in India, including AIIMS and JIPMER.',
    establishingLaw: ['National Medical Commission Act, 2019 (Section 14)', 'Dentists Act, 1948'],
    mandate: [
      'Serve as the single uniform entrance examination for all medical admissions in India without exception.',
      'Eliminate multiple commercial entrance tests and uphold medical education merit.'
    ],
    powers: [
      'Conduct pen-and-paper OMR-based test across 13 languages covering Physics, Chemistry, and Biology (Botany & Zoology).',
      'Issue All India Ranks, percentiles, and 15% All India Quota merit list.'
    ],
    limitations: [
      'NTA role ends with result declaration; does not allocate medical college seats directly.'
    ],
    examDetails: {
      examAgency: 'National Testing Agency (NTA) on behalf of NMC',
      eligibilityCriteria: 'Completed 17 years of age on or before Dec 31; passed 10+2 with Physics, Chemistry, Biology/Biotechnology & English; 50% aggregate (40% for reserved)',
      examStages: ['Single-stage Pen-and-Paper Examination (200 minutes, 180 questions to attempt)', 'Result & Percentile Score'],
      applicationWindow: 'February - March registration; First Sunday of May examination; Results in June',
      outcome: 'NEET-UG Scorecard, All India Rank, and Category-wise Qualifying Cutoff',
      counsellingBody: 'MCC / DGHS (15% All India Quota) & State Medical Counselling Authorities (85% State Quota)',
      nextCareerStage: 'MBBS / BDS / BAMS / BHMS undergraduate medical degree programme'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-NEET-UG-BULLETIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'BODY-MCC',
    type: 'counselling',
    title: 'Medical Counselling Committee (DGHS)',
    abbreviation: 'MCC',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    level: 'union',
    category: 'admissions-counselling',
    summary: 'Statutory committee under the Directorate General of Health Services (MoHFW) responsible for conducting centralized online counselling for 15% All India Quota, 100% Deemed/Central Universities, AIIMS, and JIPMER MBBS seats.',
    establishingLaw: ['Supreme Court Orders in Medical Admissions', 'NMC Act, 2019 Regulations'],
    mandate: [
      'Allot undergraduate (MBBS/BDS) and postgraduate (MD/MS) medical seats under central and all-India quotas.'
    ],
    powers: [
      'Conduct Round 1, Round 2, Mop-Up Round, and Stray Vacancy Round online.',
      'Verify candidate eligibility, enforce security deposits, and publish seat allotment letters.'
    ],
    limitations: [
      'Does not counsel for the 85% state quota seats (which are managed by respective State Medical DMERs).'
    ],
    examDetails: {
      examAgency: 'Directorate General of Health Services (DGHS)',
      eligibilityCriteria: 'Qualified NEET-UG with score above statutory minimum percentile (50th for UR, 40th for SC/ST/OBC)',
      examStages: ['Registration & Security Deposit', 'Choice Filling & Locking', 'Seat Allotment Processing', 'Reporting & Physical Document Verification'],
      applicationWindow: 'July - September annual cycle',
      outcome: 'Provisional Medical Seat Allotment Order',
      counsellingBody: 'Medical Counselling Committee',
      nextCareerStage: '5.5-year MBBS curriculum including 1-year compulsory rotatory internship'
    },
    sourceIds: ['SRC-MCC-UG-SCHEME'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-NEET-PG',
    type: 'examination',
    title: 'National Eligibility cum Entrance Test (Postgraduate)',
    abbreviation: 'NEET-PG',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    level: 'union',
    category: 'examination',
    summary: 'National eligibility-cum-ranking examination conducted by the National Board of Examinations in Medical Sciences (NBEMS) for admission to MD, MS, and PG Diploma courses.',
    establishingLaw: ['NMC Act, 2019', 'Postgraduate Medical Education Regulations'],
    mandate: [
      'Rank MBBS graduates for admission into post-graduate specialist medical training seats across India.'
    ],
    powers: [
      'Administer comprehensive computer-based medical exam covering pre-clinical, para-clinical, and clinical subjects.'
    ],
    limitations: [
      'Excludes INI institutes (AIIMS, PGI Chandigarh, JIPMER, NIMHANS) which recruit through INI-CET.'
    ],
    examDetails: {
      examAgency: 'National Board of Examinations in Medical Sciences (NBEMS)',
      eligibilityCriteria: 'Recognised MBBS degree with NMC / State Medical Council registration and completion of 1-year rotatory internship by notified cutoff date',
      examStages: ['Single-day Computer-Based Examination (200 MCQs)', 'Merit Ranking'],
      applicationWindow: 'January - February; Exam in March - June; Counselling July - September',
      outcome: 'NEET-PG All India Rank and Scorecard',
      counsellingBody: 'MCC (50% AIQ) & State Medical Counselling Committees (50% State Quota)',
      nextCareerStage: 'MD / MS residency (3 years) followed by Senior Residency or Super-Speciality (DM/MCh)'
    },
    sourceIds: ['SRC-NBE-NEET-PG-BULLETIN'],
    verificationStatus: 'verified'
  },

  // --- SECTION 06: Science, Mathematics & Research ---
  {
    id: 'EXAM-CUET-UG',
    type: 'examination',
    title: 'Common University Entrance Test (Undergraduate)',
    abbreviation: 'CUET-UG',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    level: 'union',
    category: 'examination',
    summary: 'Unified entrance test conducted by NTA providing a single-window opportunity for admission to undergraduate programmes in all Central Universities (DU, BHU, JNU, AMU, etc.) and participating institutions.',
    establishingLaw: ['National Education Policy 2020', 'UGC Regulations on Central University Admissions'],
    mandate: [
      'Eliminate unrealistic 100% board cutoffs and standardize undergraduate admissions across different school boards.'
    ],
    powers: [
      'Conduct multi-subject examinations in Section 1 (Languages), Section 2 (Domain Subjects), and Section 3 (General Test).',
      'Provide normalized NTA scores for direct university admission portal processing.'
    ],
    limitations: [
      'Universities establish their own individual programme-specific eligibility and seat allocation portals (e.g. DU CSAS).'
    ],
    examDetails: {
      examAgency: 'National Testing Agency (NTA)',
      eligibilityCriteria: '10+2 passed from a recognized school board; subject mapping as specified by target university programme',
      examStages: ['Hybrid / CBT examination across chosen subjects', 'Subject-wise NTA Scorecard'],
      applicationWindow: 'February - March; Examination in May - June; Results in July',
      outcome: 'Subject-wise NTA Percentile and Normalized Scorecard',
      counsellingBody: 'Individual Universities (e.g. Common Seat Allocation System - CSAS for Delhi University)',
      nextCareerStage: '3-year / 4-year Honours Bachelor Degree (B.Sc., B.A., B.Com)'
    },
    sourceIds: ['SRC-UGC-CUET-REG'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-GATE',
    type: 'examination',
    title: 'Graduate Aptitude Test in Engineering',
    abbreviation: 'GATE',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    level: 'union',
    category: 'examination',
    summary: 'National master-level examination administered jointly by IISc Bangalore and 7 IITs on behalf of the National Coordination Board (NCB)-GATE, testing comprehensive understanding in engineering and science.',
    establishingLaw: ['MHRD / MoE Resolution on GATE NCB', 'IIT Council Charter'],
    mandate: [
      'Qualify candidates for admission to Master’s programmes (M.Tech, M.E., MS, Ph.D.) with MoE fellowships.',
      'Serve as the premier screening metric for executive engineer recruitment across public sector undertakings (IOCL, NTPC, ONGC, BHEL, DRDO).'
    ],
    powers: [
      'Conduct high-security CBT across 30 distinct subject papers.',
      'Declare normalized GATE score (valid for 3 years for academic admissions).'
    ],
    limitations: [
      'GATE score validity for PSU employment is determined independently by each PSU notification (usually current year only).'
    ],
    examDetails: {
      examAgency: 'IISc / IIT Organizing Institute',
      eligibilityCriteria: 'Currently enrolled in 3rd or final year of undergraduate engineering/technology/architecture/science, or already graduated',
      examStages: ['3-hour Computer Based Test (65 questions, 100 marks)', 'GATE Score Normalization'],
      applicationWindow: 'August - October; Examination first two weekends of February; Results mid-March',
      outcome: 'GATE Score (out of 1000) valid for 3 years, All India Rank, Qualifying Marks',
      counsellingBody: 'COAP (Common Offer Acceptance Portal for IITs) & CCMT (for NITs/IIITs)',
      nextCareerStage: 'M.Tech / Direct Ph.D. in IITs/IISc or Executive Engineer in Maharatna/Navratna PSUs'
    },
    sourceIds: ['SRC-GATE-INFORMATION-BROCHURE'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-CSIR-NET',
    type: 'examination',
    title: 'Joint CSIR-UGC National Eligibility Test',
    abbreviation: 'CSIR-UGC-NET',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    level: 'union',
    category: 'examination',
    summary: 'National test for determining eligibility for Junior Research Fellowship (JRF) and Lectureship / Assistant Professor in Indian universities and colleges across 5 scientific disciplines.',
    establishingLaw: ['CSIR Charter', 'UGC Minimum Qualifications for Appointment of Teachers Regulations'],
    mandate: [
      'Identify young talent for scientific research careers and award prestigious CSIR/UGC research fellowships.',
      'Certify eligibility for appointment as Assistant Professor in Science faculties.'
    ],
    powers: [
      'Conduct bi-annual examination in Chemical Sciences, Earth Sciences, Life Sciences, Mathematical Sciences, and Physical Sciences.'
    ],
    limitations: [
      'JRF award letter has a fixed validity period (normally 2 years) to enroll in a Ph.D. programme.'
    ],
    examDetails: {
      examAgency: 'National Testing Agency (NTA) on behalf of CSIR',
      eligibilityCriteria: 'M.Sc. or equivalent degree with minimum 55% marks (50% for SC/ST); age limit 28 years for JRF (relaxed for reserved), no age limit for Lectureship',
      examStages: ['Single-paper Computer-Based Test (Part A General, Part B Subject Core, Part C Higher Analytics)'],
      applicationWindow: 'Bi-annual: March-April for June cycle; September-October for December cycle',
      outcome: 'JRF Award Letter and Lectureship (NET) Certificate',
      counsellingBody: 'Direct Ph.D. admissions at CSIR labs, IITs, IISc, and Central Universities',
      nextCareerStage: 'Ph.D. research scholar with monthly fellowship (JRF → SRF) or University Assistant Professor'
    },
    sourceIds: ['SRC-CSIR-NET-BULLETIN'],
    verificationStatus: 'verified'
  },

  // --- SECTION 08: Commerce & Professional Finance ---
  {
    id: 'EXAM-CA-CHARTER',
    type: 'examination',
    title: 'ICAI Chartered Accountancy Examination & Pathway',
    abbreviation: 'CA-ICAI',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    level: 'institutional',
    category: 'professional-regulation',
    summary: 'Statutory three-tier professional qualification scheme regulated by the Institute of Chartered Accountants of India under an Act of Parliament, leading to statutory auditor licensing.',
    establishingLaw: ['The Chartered Accountants Act, 1949 (Section 15, 30)', 'Chartered Accountants Regulations, 1988'],
    mandate: [
      'Regulate the profession of chartered accountancy, financial auditing, taxation, and corporate reporting in India.',
      'Examine candidates and confer the designation "Associate Chartered Accountant" (ACA).'
    ],
    powers: [
      'Conduct Foundation, Intermediate, and Final Examinations bi-annually (May and November).',
      'Mandate 2-year practical articleship training under a practicing Chartered Accountant.',
      'Issue Certificate of Practice (CoP) allowing statutory sign-off on corporate audits.'
    ],
    limitations: [
      'Members are strictly subject to ICAI Code of Ethics and disciplinary directorate penalties.'
    ],
    examDetails: {
      examAgency: 'Examination Committee of the Institute of Chartered Accountants of India (ICAI)',
      eligibilityCriteria: 'Foundation: 10+2 passed; Direct Entry to Intermediate: Commerce graduates with 55% or other graduates with 60%',
      examStages: ['1. CA Foundation (4 papers)', '2. CA Intermediate (6 papers in 2 groups)', '3. ICITSS Soft Skills & IT Training', '4. 2-Year Practical Articleship', '5. CA Final (6 papers in 2 groups)'],
      applicationWindow: 'Exams held May and November; registration open year-round with cutoff deadlines',
      outcome: 'Passing Certificate of CA Final Examination and ICAI Membership Enrollment',
      counsellingBody: 'ICAI Board of Studies & Regional Councils',
      nextCareerStage: 'Practicing Statutory Auditor with CoP or Chief Financial Officer (CFO) in industry'
    },
    sourceIds: ['SRC-CA-ACT-1949'],
    verificationStatus: 'verified'
  },

  // --- SECTION 09: Management & Business Schools ---
  {
    id: 'EXAM-CAT',
    type: 'examination',
    title: 'Common Admission Test',
    abbreviation: 'CAT',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    level: 'institutional',
    category: 'examination',
    summary: 'The premier national business school entrance examination administered on a rotational basis by the Indian Institutes of Management (IIMs) for postgraduate management admissions.',
    establishingLaw: ['Indian Institutes of Management Act, 2017'],
    mandate: [
      'Filter and evaluate candidates for admission to MBA / PGDM programmes across 21 IIMs, FMS Delhi, SPJIMR, MDI, and over 100 non-IIM institutions.'
    ],
    powers: [
      'Administer high-stakes 2-hour CBT in three timed sections: VARC, DILR, and Quantitative Ability.',
      'Issue normalized sectional and overall percentiles.'
    ],
    limitations: [
      'CAT does not conduct centralized seat allocation; each IIM runs its independent second-stage shortlisting (WAT/PI).'
    ],
    examDetails: {
      examAgency: 'Rotational Convener IIM on behalf of all Indian Institutes of Management',
      eligibilityCriteria: 'Bachelor’s degree with at least 50% marks or equivalent CGPA (45% for SC/ST/PwD), or candidates in final year of graduation',
      examStages: ['Stage 1: Computer-Based Test (last Sunday of November)', 'Stage 2: Written Ability Test (WAT) and Personal Interview (PI) by shortlisted IIMs', 'Stage 3: Composite Score Merit Offer'],
      applicationWindow: 'August to mid-September registration; Exam last Sunday of November; Results in December',
      outcome: 'CAT Percentile Scorecard (valid for 1 academic year)',
      counsellingBody: 'Independent IIM Admissions Committees',
      nextCareerStage: '2-year Master of Business Administration (MBA) or Post Graduate Programme in Management (PGP)'
    },
    sourceIds: ['SRC-IIM-ACT-2017', 'SRC-CAT-MEDIA-RELEASE'],
    verificationStatus: 'verified'
  },

  // --- SECTION 10: Law & Public Policy Admissions ---
  {
    id: 'EXAM-CLAT',
    type: 'examination',
    title: 'Common Law Admission Test',
    abbreviation: 'CLAT',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    level: 'institutional',
    category: 'examination',
    summary: 'Centralized national entrance examination conducted by the Consortium of National Law Universities for admission to 5-year integrated law (B.A. LL.B.) and LL.M. programmes across 24 NLUs.',
    establishingLaw: ['Consortium of National Law Universities Bye-Laws', 'Advocates Act, 1961'],
    mandate: [
      'Conduct uniform entrance examination and centralized online counselling for premier National Law Universities in India.'
    ],
    powers: [
      'Administer offline pen-and-paper examination evaluating comprehension, reasoning, and legal aptitude.',
      'Operate multi-round online seat allotment and waitlist management.'
    ],
    limitations: [
      'NLU Delhi is not part of CLAT (conducts its own test, AILET).'
    ],
    examDetails: {
      examAgency: 'Consortium of National Law Universities (Bengaluru)',
      eligibilityCriteria: 'UG: 10+2 passed with minimum 45% marks (40% for SC/ST); no upper age limit. PG: LL.B. degree with minimum 50% marks',
      examStages: ['Single-stage offline test (2 hours, 120 reading comprehension passage-based questions)', 'Online Centralized Counselling'],
      applicationWindow: 'July - November registration; Exam held first Sunday of December; Results in late December',
      outcome: 'CLAT All India Rank and Merit List',
      counsellingBody: 'Consortium of NLUs Centralized Counselling Committee',
      nextCareerStage: '5-year Integrated B.A. LL.B. (Hons) leading to Bar Council enrollment & judicial service eligibility'
    },
    sourceIds: ['SRC-CLAT-NOTIFICATION'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-AIBE',
    type: 'examination',
    title: 'All India Bar Examination',
    abbreviation: 'AIBE',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Mandatory post-enrollment qualifying examination conducted by the Bar Council of India under the Advocates Act, 1961, required for advocates to secure the permanent Certificate of Practice (CoP).',
    establishingLaw: ['The Advocates Act, 1961 (Section 7, 24, 49)', 'Bar Council of India All India Bar Examination Rules'],
    mandate: [
      'Assess basic-level capabilities of advocate graduates to practice law in Indian courts.',
      'Grant Certificate of Practice (CoP) entitling advocates to practice in any trial court, High Court, or Supreme Court.'
    ],
    powers: [
      'Set national open-book / bare-act examination testing substantive and procedural codes (CPC, CrPC, IPC, Evidence).',
      'Determine pass/fail status (minimum 45% for general, 40% for SC/ST).'
    ],
    limitations: [
      'Does not award an academic degree; acts strictly as an advocate practice licensing prerequisite.'
    ],
    examDetails: {
      examAgency: 'Bar Council of India (BCI)',
      eligibilityCriteria: 'Graduated with LL.B. degree from a BCI-recognized law faculty and provisionally enrolled as an advocate with a State Bar Council',
      examStages: ['100 MCQ offline examination with authorized bare acts permitted'],
      applicationWindow: 'Announced bi-annually by Bar Council of India',
      outcome: 'Certificate of Practice (CoP) issued by the Bar Council of India',
      counsellingBody: 'Respective State Bar Councils (e.g. Bar Council of Maharashtra & Goa)',
      nextCareerStage: 'Unrestricted legal practice in courts of law, corporate counsel, or judicial services'
    },
    sourceIds: ['SRC-BCI-AIBE-RULES'],
    verificationStatus: 'verified'
  },

  // --- SECTION 13: Defence & Military Careers ---
  {
    id: 'EXAM-NDA',
    type: 'examination',
    title: 'National Defence Academy & Naval Academy Examination',
    abbreviation: 'NDA-NA',
    sectionId: 'SEC-13',
    sectionNumber: '13',
    level: 'union',
    category: 'examination',
    summary: 'National competitive examination conducted bi-annually by UPSC for recruitment of 10+2 candidates into the Army, Navy, and Air Force wings of the National Defence Academy and Indian Naval Academy.',
    establishingLaw: ['Constitution of India (Art 320)', 'Defence Services Regulations'],
    mandate: [
      'Recruit young cadets for tri-services military training leading to permanent commission as officers in the Armed Forces.'
    ],
    powers: [
      'UPSC conducts written examination (Mathematics 300 marks + General Ability Test 600 marks).',
      'Shortlist candidates for the rigorous 5-day Services Selection Board (SSB) evaluation.'
    ],
    limitations: [
      'Strict age ceiling (16.5 to 19.5 years); unmarried candidates only; uncompromising medical fitness standards.'
    ],
    examDetails: {
      examAgency: 'Union Public Service Commission (UPSC)',
      eligibilityCriteria: 'Army: 10+2 passed; Navy & Air Force: 10+2 with Physics and Mathematics; age 16.5-19.5 years; unmarried male & female candidates',
      examStages: ['1. UPSC Written Exam (900 marks)', '2. 5-Day Services Selection Board (SSB) Interview (900 marks)', '3. Special Medical Board Examination', '4. Final Merit List'],
      applicationWindow: 'NDA I: Dec-Jan (Exam in April); NDA II: May-June (Exam in September)',
      outcome: 'Appointment as Cadet at National Defence Academy (Khadakwasla, Pune)',
      counsellingBody: 'Additional Directorate General of Recruiting (Army HQ)',
      nextCareerStage: '3-year Joint NDA training (JNU B.A./B.Sc./B.Tech degree) + 1-year IMA/INA/AFA commission as Lieutenant/Sub-Lieutenant/Flying Officer'
    },
    sourceIds: ['SRC-UPSC-NDA-NOTIF'],
    verificationStatus: 'verified'
  },

  // --- SECTION 14: Civil Services & Government Recruitment ---
  {
    id: 'EXAM-UPSC-CSE',
    type: 'examination',
    title: 'Civil Services Examination (UPSC)',
    abbreviation: 'UPSC-CSE',
    sectionId: 'SEC-14',
    sectionNumber: '14',
    level: 'union',
    category: 'examination',
    summary: 'The premier constitutional recruitment examination conducted by the Union Public Service Commission for appointment to All India Services (IAS, IPS) and Central Civil Services (IFS, IRS, etc.).',
    establishingLaw: ['Constitution of India (Article 320)', 'All India Services Act, 1951', 'Civil Services Examination Rules'],
    mandate: [
      'Recommend candidates for the apex administrative, diplomatic, policing, and revenue leadership of the Republic of India.'
    ],
    powers: [
      'Conduct rigorous three-stage selection: Preliminary, Main Written, and Personality Test.',
      'Publish final merit list based on aggregate marks of Mains Written (1750) + Interview (275).'
    ],
    limitations: [
      'Attempt limits: General (6 attempts up to age 32), OBC (9 attempts up to age 35), SC/ST (unlimited up to age 37).'
    ],
    examDetails: {
      examAgency: 'Union Public Service Commission (UPSC)',
      eligibilityCriteria: 'Indian citizen (for IAS/IPS); Bachelor degree from a recognized university; 21 to 32 years of age as of Aug 1',
      examStages: [
        'Stage 1: Preliminary Exam (GS Paper I + CSAT qualifying 33%)',
        'Stage 2: Main Written Exam (9 descriptive papers: Essay, GS I-IV, Optional I-II, 2 Qualifying Languages)',
        'Stage 3: Personality Test / Interview at Dholpur House, New Delhi (275 marks)'
      ],
      applicationWindow: 'February annual notification; Preliminary in May/June; Mains in September; Personality Test Jan-April; Final Results April/May',
      outcome: 'UPSC Recommendation for Appointment and Service Allocation (IAS, IPS, IFS, IRS)',
      counsellingBody: 'Department of Personnel and Training (DoPT)',
      nextCareerStage: 'LBSNAA Foundation Course (Mussoorie) followed by cadre training and district administration posting'
    },
    sourceIds: ['SRC-UPSC-CSE-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'EXAM-SSC-CGL',
    type: 'examination',
    title: 'Staff Selection Commission - Combined Graduate Level',
    abbreviation: 'SSC-CGL',
    sectionId: 'SEC-14',
    sectionNumber: '14',
    level: 'union',
    category: 'examination',
    summary: 'National competitive recruitment examination conducted by the Staff Selection Commission for recruitment to Group B and Group C non-technical civil posts across central ministries and departments.',
    establishingLaw: ['Staff Selection Commission Mandate (DoPT)', 'Central Civil Services Rules'],
    mandate: [
      'Recruit Assistant Section Officers (CSS, MEA, IB), Inspectors (Central Excise, Income Tax, Preventive Officer), and Sub-Inspectors (CBI).'
    ],
    powers: [
      'Conduct Tier-I and Tier-II computer-based examinations, data entry speed tests, and physical measurement tests.'
    ],
    limitations: [
      'Recruits for non-gazetted and junior gazetted posts only (apex Group A civil services handled by UPSC).'
    ],
    examDetails: {
      examAgency: 'Staff Selection Commission (SSC)',
      eligibilityCriteria: 'Bachelor’s degree from a recognized university; age criteria varies by post (18-30/32 years)',
      examStages: ['Tier-I (CBT screening: 100 questions, 200 marks)', 'Tier-II (Paper I compulsory: Math, Reasoning, English, GA, Computer + Data Entry Test)'],
      applicationWindow: 'Notification in June - July; Tier-I in Sept - Oct; Tier-II in Dec - Jan',
      outcome: 'Merit List and Post Allocation across Central Ministries and Comptroller & Auditor General (CAG)',
      counsellingBody: 'Staff Selection Commission regional offices',
      nextCareerStage: 'Assistant Section Officer (ASO) in Central Secretariat or Central Excise / Income Tax Inspector'
    },
    sourceIds: ['SRC-SSC-CGL-NOTIF'],
    verificationStatus: 'verified'
  },

  // --- SECTION 15: Banking & Insurance Recruitment ---
  {
    id: 'EXAM-IBPS-PO',
    type: 'examination',
    title: 'IBPS Probationary Officer / Management Trainee Examination',
    abbreviation: 'IBPS-PO',
    sectionId: 'SEC-15',
    sectionNumber: '15',
    level: 'union',
    category: 'examination',
    summary: 'Common recruitment process conducted by the Institute of Banking Personnel Selection for recruitment of Probationary Officers / Management Trainees in 11 participating Public Sector Banks.',
    establishingLaw: ['Banking Companies (Acquisition and Transfer of Undertakings) Act, 1970/1980', 'IBPS Governing Board Mandate'],
    mandate: [
      'Conduct centralized recruitment for officers across Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank, etc.'
    ],
    powers: [
      'Conduct Preliminary CBT, Mains CBT, and coordinate Common Interviews with participating banks.',
      'Declare combined final merit list based on Mains (80%) + Interview (20%) normalized score.'
    ],
    limitations: [
      'State Bank of India (SBI) and Reserve Bank of India (RBI) conduct their own separate officer recruitments.'
    ],
    examDetails: {
      examAgency: 'Institute of Banking Personnel Selection (IBPS)',
      eligibilityCriteria: 'Graduation in any discipline from a recognized university; age 20 to 30 years',
      examStages: ['Preliminary Exam (100 marks CBT)', 'Main Exam (200 marks objective + 25 marks descriptive English)', 'Common Interview (100 marks)'],
      applicationWindow: 'August annual notification; Preliminary in October; Mains in November; Interviews in January-February',
      outcome: 'Provisional Allotment Letter to one of the 11 Public Sector Banks',
      counsellingBody: 'IBPS Allotment Cell',
      nextCareerStage: 'Probationary Officer (Scale I) in a Public Sector Bank leading to Branch Manager and Executive Director'
    },
    sourceIds: ['SRC-IBPS-PO-BULLETIN'],
    verificationStatus: 'verified'
  },

  // --- SECTION 16: Teaching & Academic Careers ---
  {
    id: 'EXAM-CTET',
    type: 'examination',
    title: 'Central Teacher Eligibility Test',
    abbreviation: 'CTET',
    sectionId: 'SEC-16',
    sectionNumber: '16',
    level: 'union',
    category: 'school-education',
    summary: 'National eligibility examination conducted by CBSE under NCTE guidelines to establish eligibility for appointment as teachers for Classes I to VIII in central schools (KVS, NVS, Army Schools).',
    establishingLaw: ['Right of Children to Free and Compulsory Education Act, 2009 (Section 23)', 'NCTE Guidelines on Teacher Qualifications'],
    mandate: [
      'Enforce minimum standards for teacher recruitment and ensure quality in elementary education nationwide.'
    ],
    powers: [
      'Administer Paper I (for Classes I-V Primary) and Paper II (for Classes VI-VIII Upper Primary).',
      'Issue lifetime-valid CTET Eligibility Certificate to candidates scoring 60% and above.'
    ],
    limitations: [
      'Passing CTET confers eligibility only; it does not confer a right to recruitment or immediate appointment.'
    ],
    examDetails: {
      examAgency: 'Central Board of Secondary Education (CBSE)',
      eligibilityCriteria: 'D.El.Ed / B.El.Ed / B.Ed with required percentage as notified under NCTE guidelines',
      examStages: ['Paper I (Primary: 150 MCQs)', 'Paper II (Upper Primary: 150 MCQs)'],
      applicationWindow: 'Bi-annual examinations (July and December/January)',
      outcome: 'CTET Marks Statement and Certificate on DigiLocker with lifetime validity',
      counsellingBody: 'Recruiting organizations (KVS, NVS, DSSSB, State Government Schools)',
      nextCareerStage: 'PRT (Primary Teacher) or TGT (Trained Graduate Teacher) school recruitment'
    },
    sourceIds: ['SRC-RTE-ACT-2009', 'SRC-NCTE-GUIDELINES'],
    verificationStatus: 'verified'
  },

  // --- SECTION 20: Results, Counselling & Writs ---
  {
    id: 'PROC-OMR-CHALLENGE',
    type: 'process',
    title: 'Answer Key Objection & OMR Verification Mechanism',
    abbreviation: 'OMR-CHALLENGE',
    sectionId: 'SEC-20',
    sectionNumber: '20',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Procedural transparency framework enabling candidates to inspect recorded OMR responses, verify answer keys, and submit statutory challenges with subject-matter expert review prior to result finalization.',
    mandate: [
      'Guarantee procedural fairness in high-stakes examinations (NEET, JEE, UGC-NET).',
      'Provide digitized OMR images and machine-readable response sheets.'
    ],
    powers: [
      'Enable fee-based objection filing per question within a strict 48-72 hour window.',
      'Convene Subject Expert Committees to validate challenges and revise answer keys.'
    ],
    limitations: [
      'Decision of the Subject Expert Committee on the final answer key is non-negotiable administratively.'
    ],
    examDetails: {
      examAgency: 'NTA / UPSC / Examination Conducting Body',
      eligibilityCriteria: 'Candidate who attempted the relevant examination session',
      examStages: ['Provisional Key Display', 'Objection Submission with Citation', 'Expert Committee Review', 'Final Key Release'],
      applicationWindow: 'Strict 48-72 hours following examination conclusion',
      outcome: 'Revised Final Answer Key and Bonus / Dropped Question Marks Allocation',
      counsellingBody: 'NTA Grievance Directorate',
      nextCareerStage: 'Final Scorecard Compilation and Rank Declaration'
    },
    sourceIds: ['SRC-V2-GOV-GUIDE'],
    verificationStatus: 'verified'
  },
  {
    id: 'PROC-HIGH-COURT-WRIT',
    type: 'oversight',
    title: 'High Court Writ Jurisdiction in Examination Disputes',
    abbreviation: 'HC-WRIT-226',
    sectionId: 'SEC-20',
    sectionNumber: '20',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'Constitutional remedy under Article 226 of the Constitution of India allowing candidates to challenge arbitrary action, question paper leaks, normalization anomalies, or seat cancellation before High Courts.',
    establishingLaw: ['Constitution of India (Article 226)', 'Supreme Court Precedents on Academic Matters'],
    mandate: [
      'Enforce fundamental and statutory rights against examination agencies and universities.',
      'Prevent arbitrary denial of admission seats and enforce parity of treatment.'
    ],
    powers: [
      'Issue Writs of Mandamus, Certiorari, and Prohibition to examination authorities.',
      'Order constitution of independent expert committees or stay admission rounds in prima facie illegality.'
    ],
    limitations: [
      'Courts ordinarily show deference to academic expert bodies and rarely re-evaluate subjective questions directly.'
    ],
    governanceDetails: {
      constitutionalArticle: 'Article 226',
      positionName: 'High Court of Judicature',
      electoralOrSelectionMethod: 'Constitutional appointment by President on recommendation of Collegium',
      tenure: 'Permanent constitutional court of record',
      geographicalJurisdiction: 'Territorial boundaries of the respective State / Union Territory',
      reportingTo: 'Constitution of India (Appeals lie to Supreme Court under Article 136)'
    },
    sourceIds: ['SRC-CONST-ART226'],
    verificationStatus: 'verified'
  },

  // --- SECTION 21: Alternate Routes & Failure Recovery ---
  {
    id: 'PATH-REATTEMPT-GAP',
    type: 'process',
    title: 'Reattempt & Gap-Year Strategic Recovery Pathway',
    abbreviation: 'REATTEMPT-PATH',
    sectionId: 'SEC-21',
    sectionNumber: '21',
    level: 'institutional',
    category: 'procedural-reform',
    summary: 'Strategic academic framework outlining statutory attempt limits, gap-year certificate protocols, and parallel enrollment options for unsuccessful or rank-improving aspirants.',
    mandate: [
      'Demystify second-attempt rules across JEE (max 2 consecutive years for Adv), NEET (no attempt limit), and UPSC (6 attempts for Gen).',
      'Provide structured alternatives to prevent educational dropouts.'
    ],
    powers: [
      'Authorize submission of valid Gap Certificates and affidavits for admission verification.',
      'Permit concurrent enrollment in open or distance learning programmes.'
    ],
    limitations: [
      'Cannot breach statutory age caps or maximum attempt limits fixed by UPSC, JEE Advanced, or NDA.'
    ],
    examDetails: {
      examAgency: 'Institutional & Regulatory Bodies',
      eligibilityCriteria: 'Candidate eligible under age and attempt guidelines of target examination',
      examStages: ['Gap Certificate Preparation', 'Targeted Re-preparation', 'Subsequent Year Application'],
      applicationWindow: 'Immediate re-enrollment in subsequent annual cycle',
      outcome: 'Improved percentile / rank or admission through alternative competitive stream',
      counsellingBody: 'State & Central Admission Authorities',
      nextCareerStage: 'Successful admission in subsequent cycle or lateral professional transition'
    },
    sourceIds: ['SRC-V2-GOV-GUIDE'],
    verificationStatus: 'verified'
  }
];

export const RELATIONSHIPS_V2: RelationshipEdgeData[] = [
  // Journey Root -> Key Stages
  {
    id: 'REL-V2-001',
    sourceNodeId: 'JOURNEY-ROOT',
    targetNodeId: 'EXAM-CBSE-10',
    type: 'IMPLEMENTS',
    label: 'Foundational Secondary Schooling',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-002',
    sourceNodeId: 'EXAM-CBSE-10',
    targetNodeId: 'EXAM-CBSE-12',
    type: 'IMPLEMENTS',
    label: 'Senior Secondary Progression (10+2)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-003',
    sourceNodeId: 'EXAM-CBSE-12',
    targetNodeId: 'EXAM-JEE-MAIN',
    type: 'IMPLEMENTS',
    label: 'Qualifies with PCM for Engineering',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-004',
    sourceNodeId: 'EXAM-CBSE-12',
    targetNodeId: 'EXAM-NEET-UG',
    type: 'IMPLEMENTS',
    label: 'Qualifies with PCB for Medical',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-005',
    sourceNodeId: 'EXAM-CBSE-12',
    targetNodeId: 'EXAM-CUET-UG',
    type: 'IMPLEMENTS',
    label: 'Qualifies for Central University Degrees',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-006',
    sourceNodeId: 'EXAM-CBSE-12',
    targetNodeId: 'EXAM-CLAT',
    type: 'IMPLEMENTS',
    label: 'Qualifies for 5-Year Integrated Law',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-007',
    sourceNodeId: 'EXAM-CBSE-12',
    targetNodeId: 'EXAM-NDA',
    type: 'IMPLEMENTS',
    label: 'Qualifies for Defence Commission',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-008',
    sourceNodeId: 'EXAM-CBSE-12',
    targetNodeId: 'EXAM-CA-CHARTER',
    type: 'IMPLEMENTS',
    label: 'Qualifies for CA Foundation Registration',
    verificationStatus: 'verified'
  },

  // Engineering Chain
  {
    id: 'REL-V2-009',
    sourceNodeId: 'EXAM-JEE-MAIN',
    targetNodeId: 'EXAM-JEE-ADV',
    type: 'CONDUCTS_EXAM',
    label: 'Top 2.5 Lakh Qualify for Advanced',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-010',
    sourceNodeId: 'EXAM-JEE-MAIN',
    targetNodeId: 'BODY-JOSAA',
    type: 'ADMINISTERS_ADMISSION',
    label: 'Ranks Feed NIT / IIIT Seat Allocation',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-011',
    sourceNodeId: 'EXAM-JEE-ADV',
    targetNodeId: 'BODY-JOSAA',
    type: 'ADMINISTERS_ADMISSION',
    label: 'Ranks Feed 23 IITs Common Allocation',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-012',
    sourceNodeId: 'EXAM-MSBSHSE-12',
    targetNodeId: 'EXAM-MHT-CET-ENG',
    type: 'IMPLEMENTS',
    label: 'State Board Qualifies for MHT-CET',
    verificationStatus: 'verified'
  },

  // Medical Chain
  {
    id: 'REL-V2-013',
    sourceNodeId: 'EXAM-NEET-UG',
    targetNodeId: 'BODY-MCC',
    type: 'ADMINISTERS_ADMISSION',
    label: '15% All India Quota & Central Inst Allocation',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-014',
    sourceNodeId: 'BODY-MCC',
    targetNodeId: 'EXAM-NEET-PG',
    type: 'IMPLEMENTS',
    label: 'MBBS Degree Leads to Post-Graduate NEET-PG',
    verificationStatus: 'verified'
  },

  // Graduate & Civil Services Chain
  {
    id: 'REL-V2-015',
    sourceNodeId: 'EXAM-CUET-UG',
    targetNodeId: 'EXAM-UPSC-CSE',
    type: 'IMPLEMENTS',
    label: 'Bachelor Degree Qualifies for Civil Services',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-016',
    sourceNodeId: 'EXAM-CUET-UG',
    targetNodeId: 'EXAM-SSC-CGL',
    type: 'IMPLEMENTS',
    label: 'Bachelor Degree Qualifies for SSC CGL',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-017',
    sourceNodeId: 'EXAM-CUET-UG',
    targetNodeId: 'EXAM-IBPS-PO',
    type: 'IMPLEMENTS',
    label: 'Bachelor Degree Qualifies for Bank PO',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-018',
    sourceNodeId: 'EXAM-CUET-UG',
    targetNodeId: 'EXAM-CAT',
    type: 'IMPLEMENTS',
    label: 'Graduation Qualifies for IIM CAT',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-019',
    sourceNodeId: 'EXAM-CUET-UG',
    targetNodeId: 'EXAM-GATE',
    type: 'IMPLEMENTS',
    label: 'B.Tech / Science Graduation Qualifies for GATE',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-020',
    sourceNodeId: 'EXAM-GATE',
    targetNodeId: 'EXAM-CSIR-NET',
    type: 'COORDINATES',
    label: 'Mutual Research Fellowship Baseline',
    verificationStatus: 'verified'
  },

  // Law Chain
  {
    id: 'REL-V2-021',
    sourceNodeId: 'EXAM-CLAT',
    targetNodeId: 'EXAM-AIBE',
    type: 'AWARDS_QUALIFICATION',
    label: 'B.A. LL.B. Degree Leads to Bar Exam Licensing',
    verificationStatus: 'verified'
  },

  // Oversight & Failure Recovery
  {
    id: 'REL-V2-022',
    sourceNodeId: 'EXAM-JEE-MAIN',
    targetNodeId: 'PROC-OMR-CHALLENGE',
    type: 'REVIEWS_APPEALS',
    label: 'Answer Key & OMR Challenge Window',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-023',
    sourceNodeId: 'EXAM-NEET-UG',
    targetNodeId: 'PROC-OMR-CHALLENGE',
    type: 'REVIEWS_APPEALS',
    label: 'Answer Key & OMR Challenge Window',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-024',
    sourceNodeId: 'PROC-OMR-CHALLENGE',
    targetNodeId: 'PROC-HIGH-COURT-WRIT',
    type: 'JUDICIALLY_REVIEWS',
    label: 'Writ Petition under Article 226 for Illegalities',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-025',
    sourceNodeId: 'EXAM-JEE-MAIN',
    targetNodeId: 'PATH-REATTEMPT-GAP',
    type: 'COORDINATES',
    label: 'Permitted Reattempt in Subsequent Cycle',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V2-026',
    sourceNodeId: 'EXAM-CBSE-12',
    targetNodeId: 'EXAM-CTET',
    type: 'IMPLEMENTS',
    label: 'D.El.Ed Route to Primary Teacher Eligibility',
    verificationStatus: 'verified'
  }
];

export const SOURCES_V2: SourceRecord[] = [
  {
    id: 'SRC-V2-GOV-GUIDE',
    name: 'Whiteboard 3 Comprehensive Specification',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'Indian Examinations, Timelines, Admissions, Recruitment & Career Pathways Specification',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JOURNEY-ROOT', 'PROC-OMR-CHALLENGE', 'PATH-REATTEMPT-GAP']
  },
  {
    id: 'SRC-CBSE-BYELAWS',
    name: 'CBSE Examination Bye-Laws',
    officialUrl: 'https://cbse.gov.in',
    documentTitle: 'Central Board of Secondary Education Examination Bye-Laws & Curriculum Guidelines',
    sectionCitation: 'Rules 40-44, Chapter 7',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CBSE-10', 'EXAM-CBSE-12']
  },
  {
    id: 'SRC-MSBSHSE-ACT',
    name: 'Maharashtra HSC Board Act, 1965',
    officialUrl: 'https://mahahsscboard.in',
    documentTitle: 'Maharashtra Secondary and Higher Secondary Education Boards Act, 1965',
    sectionCitation: 'Sections 18-20',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-MSBSHSE-12']
  },
  {
    id: 'SRC-JEE-MAIN-BULLETIN',
    name: 'JEE (Main) Information Bulletin',
    officialUrl: 'https://jeemain.nta.nic.in',
    documentTitle: 'Information Bulletin for Joint Entrance Examination (Main)',
    sectionCitation: 'Chapters 3, 4, 7',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-JEE-MAIN']
  },
  {
    id: 'SRC-JEE-ADV-BROCHURE',
    name: 'JEE (Advanced) Information Brochure',
    officialUrl: 'https://jeeadv.ac.in',
    documentTitle: 'Information Brochure JEE (Advanced) Joint Admission Board',
    sectionCitation: 'Sections 1-6',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-JEE-ADV']
  },
  {
    id: 'SRC-JOSAA-BUSINESS-RULES',
    name: 'JoSAA Business Rules',
    officialUrl: 'https://josaa.nic.in',
    documentTitle: 'Business Rules for Joint Seat Allocation for the Academic Year',
    sectionCitation: 'Rules 1-84',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BODY-JOSAA']
  },
  {
    id: 'SRC-MHTCET-INFO-BROCHURE',
    name: 'MHT-CET Information Brochure',
    officialUrl: 'https://cetcell.mahacet.org',
    documentTitle: 'Information Brochure for Common Entrance Test MHT-CET',
    sectionCitation: 'Rule 3, Eligibility & CAP Process',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 2,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-MHT-CET-ENG']
  },
  {
    id: 'SRC-NMC-ACT-2019',
    name: 'National Medical Commission Act, 2019',
    officialUrl: 'https://www.nmc.org.in',
    documentTitle: 'The National Medical Commission Act, 2019 (Act No. 30 of 2019)',
    sectionCitation: 'Section 14 (Uniform National Entrance Examination)',
    publicationDate: '2019-08-08',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-NEET-UG', 'EXAM-NEET-PG']
  },
  {
    id: 'SRC-NEET-UG-BULLETIN',
    name: 'NEET (UG) Information Bulletin',
    officialUrl: 'https://exams.nta.ac.in/NEET/',
    documentTitle: 'Information Bulletin National Eligibility cum Entrance Test (UG)',
    sectionCitation: 'Chapters 2, 4, 6',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-NEET-UG']
  },
  {
    id: 'SRC-MCC-UG-SCHEME',
    name: 'MCC Counselling Scheme Document',
    officialUrl: 'https://mcc.nic.in',
    documentTitle: 'Scheme of Online All India Quota Medical/Dental UG Seat Allocation',
    sectionCitation: 'Chapters 1-5',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BODY-MCC']
  },
  {
    id: 'SRC-NBE-NEET-PG-BULLETIN',
    name: 'NBEMS NEET-PG Information Bulletin',
    officialUrl: 'https://natboard.edu.in',
    documentTitle: 'Information Bulletin for NEET-PG National Board of Examinations',
    sectionCitation: 'Clauses 4-9',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-NEET-PG']
  },
  {
    id: 'SRC-UGC-CUET-REG',
    name: 'UGC Notification on CUET',
    officialUrl: 'https://www.ugc.gov.in',
    documentTitle: 'University Grants Commission Guidelines for Admission to Undergraduate Courses through CUET',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CUET-UG']
  },
  {
    id: 'SRC-GATE-INFORMATION-BROCHURE',
    name: 'GATE Information Brochure',
    officialUrl: 'https://gate.iisc.ac.in',
    documentTitle: 'Information Brochure Graduate Aptitude Test in Engineering',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-GATE']
  },
  {
    id: 'SRC-CSIR-NET-BULLETIN',
    name: 'CSIR-UGC NET Bulletin',
    officialUrl: 'https://csirnet.nta.ac.in',
    documentTitle: 'Joint CSIR-UGC NET Information Bulletin',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CSIR-NET']
  },
  {
    id: 'SRC-CA-ACT-1949',
    name: 'The Chartered Accountants Act, 1949',
    officialUrl: 'https://www.icai.org',
    documentTitle: 'The Chartered Accountants Act, 1949 (Act No. 38 of 1949)',
    sectionCitation: 'Sections 15, 30',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CA-CHARTER']
  },
  {
    id: 'SRC-IIM-ACT-2017',
    name: 'Indian Institutes of Management Act, 2017',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'The Indian Institutes of Management Act, 2017 (Act No. 33 of 2017)',
    sectionCitation: 'Section 6, 11',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CAT']
  },
  {
    id: 'SRC-CAT-MEDIA-RELEASE',
    name: 'IIM CAT Media Release & Voucher',
    officialUrl: 'https://iimcat.ac.in',
    documentTitle: 'Common Admission Test Examination & Eligibility Policy',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CAT']
  },
  {
    id: 'SRC-CLAT-NOTIFICATION',
    name: 'Consortium of NLUs Admission Notification',
    officialUrl: 'https://consortiumofnlus.ac.in',
    documentTitle: 'Common Law Admission Test (CLAT) Official Instructions and Admission Rules',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CLAT']
  },
  {
    id: 'SRC-BCI-AIBE-RULES',
    name: 'Bar Council of India AIBE Rules',
    officialUrl: 'https://www.barcouncilofindia.org',
    documentTitle: 'Bar Council of India Certificate and Place of Practice (Verification) Rules',
    sectionCitation: 'Rules 9-11',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-AIBE']
  },
  {
    id: 'SRC-UPSC-NDA-NOTIF',
    name: 'UPSC NDA & NA Notification',
    officialUrl: 'https://upsc.gov.in',
    documentTitle: 'Union Public Service Commission Examination Notice for National Defence Academy and Naval Academy',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-NDA']
  },
  {
    id: 'SRC-UPSC-CSE-RULES',
    name: 'UPSC Civil Services Examination Rules',
    officialUrl: 'https://upsc.gov.in',
    documentTitle: 'Department of Personnel and Training Notification of Civil Services Examination Rules',
    sectionCitation: 'Rules 1-28, Schedules I-IV',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-UPSC-CSE']
  },
  {
    id: 'SRC-SSC-CGL-NOTIF',
    name: 'SSC CGL Official Notice',
    officialUrl: 'https://ssc.gov.in',
    documentTitle: 'Notice of Combined Graduate Level Examination Staff Selection Commission',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-SSC-CGL']
  },
  {
    id: 'SRC-IBPS-PO-BULLETIN',
    name: 'IBPS CRP PO/MT Detailed Advertisement',
    officialUrl: 'https://www.ibps.in',
    documentTitle: 'Common Recruitment Process for Recruitment of Probationary Officers/Management Trainees',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-IBPS-PO']
  },
  {
    id: 'SRC-RTE-ACT-2009',
    name: 'Right to Education Act, 2009',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'Right of Children to Free and Compulsory Education Act, 2009',
    sectionCitation: 'Section 23',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CTET']
  },
  {
    id: 'SRC-NCTE-GUIDELINES',
    name: 'NCTE Guidelines for TET',
    officialUrl: 'https://ncte.gov.in',
    documentTitle: 'National Council for Teacher Education Guidelines for Conducting Teacher Eligibility Test',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['EXAM-CTET']
  },
  {
    id: 'SRC-CONST-ART226',
    name: 'Constitution of India (Article 226)',
    officialUrl: 'https://legislative.gov.in/constitution-of-india',
    documentTitle: 'Article 226: Power of High Courts to issue certain writs',
    sectionCitation: 'Article 226',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PROC-HIGH-COURT-WRIT']
  }
];
