import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V3: SectionMeta[] = [
  {
    id: 'SEC-01',
    number: '01',
    title: 'Pre-Primary Foundation (Ages 3 to 6)',
    subtitle: 'Playgroup, Nursery, Junior KG, Senior KG & Early Childhood Guidelines',
    summary: 'The early childhood developmental stage. Details age milestones, governing bodies (Ministry of Women & Child Development, Ministry of Education, State & Municipalities), and NEP 2020 Foundational Stage guidelines.',
    iconName: 'Sparkles',
    expectedSubsections: ['01.1 Playgroup & Nursery', '01.2 Junior & Senior KG (LKG / UKG)', '01.3 Government Oversight (WCD & MoE)'],
    expectedAuthorities: ['Anganwadis / WCD', 'MoE / NCERT (ECCE)', 'Municipal Pre-Schools']
  },
  {
    id: 'SEC-02',
    number: '02',
    title: 'Primary to 10th Standard & Board Comparison',
    subtitle: 'Classes 1–10 Milestones and Dedicated Nodes for CBSE, ICSE, State SSC, NIOS & IB',
    summary: 'The fundamental 10-year compulsory schooling journey and detailed individual nodes for CBSE, ICSE (CISCE), State SSC, NIOS, and International (Cambridge/IB) boards explaining curriculum differences and career alignment.',
    iconName: 'GraduationCap',
    expectedSubsections: ['02.1 Primary & Middle School (1-8)', '02.2 10th Board Exam Milestone', '02.3 CBSE Board', '02.4 ICSE (CISCE) Board', '02.5 State SSC Boards', '02.6 NIOS Open Schooling', '02.7 IB & Cambridge International', '02.8 Board Decision Matrix'],
    expectedAuthorities: ['CBSE', 'CISCE', 'State SSC Boards', 'NIOS', 'Cambridge / IB']
  },
  {
    id: 'SEC-03',
    number: '03',
    title: 'After 10th: Stream Selection (11th & 12th)',
    subtitle: 'Science (PCM, PCB, PCMB), Commerce, Arts / Humanities & Polytechnic Diploma',
    summary: 'The critical branching point after Class 10: subject combinations, focus areas, and prerequisite gateways to higher education.',
    iconName: 'Layers',
    expectedSubsections: ['03.1 Science PCM', '03.2 Science PCB', '03.3 Science PCMB (Dual Gateway)', '03.4 Commerce Stream', '03.5 Humanities Stream', '03.6 Polytechnic 3-Yr Diploma'],
    expectedAuthorities: ['CBSE 12th', 'State HSC', 'ISC', 'Polytechnic DTE']
  },
  {
    id: 'SEC-04',
    number: '04',
    title: 'Undergraduate (UG) Degree Pathways After 12th',
    subtitle: 'Dedicated Nodes for B.Tech, BCA, MBBS, BDS/Ayush, B.Pharm, B.Com/BBA, IPM, Law, B.Arch & Pure Science',
    summary: 'Comprehensive individual undergraduate course nodes detailing degree duration, eligibility, admission gates, curriculum timelines, and what career outcomes can be achieved.',
    iconName: 'BookOpen',
    expectedSubsections: ['04.1 B.Tech / B.E.', '04.2 BCA', '04.3 MBBS', '04.4 BDS & Ayush Healthcare', '04.5 B.Pharm', '04.6 B.Com & BBA', '04.7 5-Yr Integrated Management (IPM)', '04.8 5-Yr Integrated Law (B.A. LL.B)', '04.9 B.Arch & B.Des', '04.10 B.Sc & BS-MS Pure Science'],
    expectedAuthorities: ['IITs / NITs', 'AIIMS / NMC', 'PCI', 'UGC', 'IIMs', 'NLUs', 'COA', 'IISc / IISERs']
  },
  {
    id: 'SEC-05',
    number: '05',
    title: 'Postgraduate (PG) Degrees & Professional Qualifications',
    subtitle: 'M.Tech, MCA, MD/MS Specialist, MBA, LL.M, M.Sc/Ph.D, CA, CFA, CS/CMA',
    summary: 'Granular master-level and statutory professional qualifications: timelines, entrance examinations, clinical residencies, articleship, and high-impact career authority.',
    iconName: 'Award',
    expectedSubsections: ['05.1 M.Tech / M.E.', '05.2 MCA', '05.3 MD & MS Specialist Medicine', '05.4 MBA / PGDM', '05.5 LL.M. & Bar Licensure', '05.6 M.Sc & Ph.D. Research', '05.7 Chartered Accountancy (CA)', '05.8 CFA Charter', '05.9 CS & CMA Corporate Governance'],
    expectedAuthorities: ['IITs / GATE', 'NIMCET', 'NMC / INI-CET', 'IIMs', 'BCI', 'CSIR-UGC', 'ICAI', 'CFA Institute', 'ICSI']
  },
  {
    id: 'SEC-06',
    number: '06',
    title: 'High-Value Multi-Discipline Combinations',
    subtitle: 'Cross-Disciplinary Pathways: B.Tech+CFA, B.Com+CA, MBBS+MBA, B.Tech+LL.B',
    summary: 'Strategic multi-degree and cross-domain career combinations blending technical skills with financial, legal, or management qualifications.',
    iconName: 'GitFork',
    expectedSubsections: ['06.1 B.Tech + CFA (FinTech & Quant)', '06.2 B.Com + CA (Audit & Tax)', '06.3 MBBS + MBA (HealthTech & Hospital Admin)', '06.4 B.Tech + Law (Patent & IP Legal Counsel)'],
    expectedAuthorities: ['IITs / CFA Institute', 'ICAI / Big 4', 'AIIMS / IIMs', 'BCI / Patent Office']
  },
  {
    id: 'SEC-07',
    number: '07',
    title: 'National Examination Gates, Levels & Timelines',
    subtitle: 'JEE, GATE, NEET/NExT, CA, CFA, CAT, CLAT/AIBE & NET/JRF Examination Calendars',
    summary: 'Precise breakdown of testing tiers, number of examination levels, mandatory training, and annual scheduling for major competitive and professional qualifications.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['07.1 B.Tech Entrance Tiers (CET -> JEE Main -> JEE Adv)', '07.2 GATE Architecture', '07.3 Medical Pathway (NEET -> MBBS -> NExT)', '07.4 CA Levels (Foundation -> Inter -> Final)', '07.5 CFA Levels (I -> II -> III)', '07.6 CAT Management Pipeline', '07.7 Law Gate (CLAT -> AIBE)', '07.8 Research Gate (CSIR-UGC NET JRF)'],
    expectedAuthorities: ['NTA', 'IIT JAB', 'NMC', 'ICAI', 'CFA Institute', 'IIMs', 'Consortium of NLUs', 'CSIR-UGC']
  }
];

export const NODES_V3: EducationNode[] = [
  // ==========================================
  // SECTION 01: PRE-PRIMARY FOUNDATION (AGES 3 TO 6)
  // ==========================================
  {
    id: 'PRE-NURSERY-PLAY',
    type: 'schoolBoard',
    title: 'Early Childhood: Playgroup & Nursery',
    abbreviation: 'Playgroup & Nursery',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    level: 'local',
    category: 'school-education',
    summary: 'Early childhood foundation for ages 3 to 4. Focuses on motor skills, social interaction, and sensory learning without any formal examinations.',
    legalStatus: 'NEP 2020 Foundational Stage (Ages 3-8)',
    establishingLaw: ['National Education Policy 2020', 'National Early Childhood Care and Education (ECCE) Curriculum Framework'],
    ministerialRelationship: 'Ministry of Women and Child Development (Central) & State Social Welfare Departments',
    leadershipRole: 'Managed by Anganwadi workers or Private Pre-school Directors',
    mandate: [
      'Age bracket: 3 to 4 years.',
      'Deliver play-based, activity-oriented sensory learning.',
      'Zero written tests or formal academic examinations.'
    ],
    powers: [
      'Assess developmental milestones (speech, motor, social habits).',
      'Prepare child for structured classroom routines in Junior KG.'
    ],
    limitations: [
      'Strictly prohibited from conducting formal academic grading or entrance screening for admissions.'
    ],
    institutionDetails: {
      institutionType: 'Pre-Primary Educational Foundation',
      controlledBy: 'Central: Ministry of Women & Child Dev (Anganwadis) | State: Municipal Corporations (Private Nursery licensing)',
      curriculumBody: 'NCERT Early Childhood Care and Education (ECCE) Guidelines',
      examinationTimeline: 'No exams. Continuous developmental observation only',
      programmesOffered: ['Playgroup (Age 3)', 'Nursery (Age 3-4)'],
      careerValue: 'Foundational developmental preparedness for Kindergarten'
    },
    sourceIds: ['SRC-NEP-2020', 'SRC-ECCE-POLICY'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PRE-KG-FOUNDATION',
    type: 'schoolBoard',
    title: 'Kindergarten: Junior KG & Senior KG (LKG / UKG)',
    abbreviation: 'Junior & Senior KG',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'PRE-NURSERY-PLAY',
    level: 'local',
    category: 'school-education',
    summary: 'Formal pre-school preparation for ages 4 to 6. Introduces basic alphabet phonetics, number recognition, and social discipline before Class 1.',
    legalStatus: 'NEP 2020 Foundational Stage Component',
    establishingLaw: ['National Curriculum Framework for Foundational Stage (NCF-FS 2022)'],
    ministerialRelationship: 'Joint oversight by Ministry of Education (MoE) & State Primary Education Departments',
    leadershipRole: 'Pre-Primary Coordinators and Kindergarten Educators',
    mandate: [
      'Junior KG (LKG): Age 4 to 5 — Phonics, shapes, colours, gross/fine motor development.',
      'Senior KG (UKG): Age 5 to 6 — Basic letter writing, single-digit addition, basic vocabulary.',
      'Seamless transition into Class 1 (Primary School at Age 6).'
    ],
    powers: [
      'Issue Pre-Primary Completion Assessment Portfolio for Class 1 admission.'
    ],
    limitations: [
      'Cannot detain or fail children; admission to Class 1 cannot be conditioned on high-stakes testing.'
    ],
    institutionDetails: {
      institutionType: 'Kindergarten Foundation (LKG & UKG)',
      controlledBy: 'State Directorate of Primary Education & Affiliated School Managements',
      curriculumBody: 'NCERT NCF-FS (Foundational Stage Curriculum Framework)',
      examinationTimeline: 'Informal continuous term assessments (Oct & March). No pass/fail rank lists',
      programmesOffered: ['Junior KG (Age 4-5)', 'Senior KG (Age 5-6)'],
      careerValue: 'Qualifies directly for Class 1 admission under RTE Act 2009'
    },
    sourceIds: ['SRC-NEP-2020', 'SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 02: PRIMARY TO 10TH & BOARD COMPARISON
  // ==========================================
  {
    id: 'SCH-PRIMARY-MIDDLE',
    type: 'schoolBoard',
    title: 'Primary & Middle School (Classes 1 to 8)',
    abbreviation: 'Classes 1–8',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'PRE-KG-FOUNDATION',
    level: 'state',
    category: 'school-education',
    summary: 'The 8-year compulsory elementary schooling stage (Ages 6 to 14) guaranteed by the Right to Education (RTE) Act 2009. Evaluated through internal school evaluations.',
    legalStatus: 'Statutory Fundamental Right under Article 21A & RTE Act 2009',
    establishingLaw: ['Constitution of India Article 21A', 'Right of Children to Free and Compulsory Education Act, 2009'],
    ministerialRelationship: 'Department of School Education, respective State Governments & Ministry of Education',
    mandate: [
      'Primary Stage (Classes 1–5): Foundational literacy, numeracy, environmental studies, and languages.',
      'Middle Stage (Classes 6–8): Science, Mathematics, Social Studies, and Vocational introductory skills.',
      'Free and compulsory education guaranteed for every child aged 6 to 14.'
    ],
    powers: [
      'Continuous Comprehensive Evaluation (CCE) and internal school term assessments.'
    ],
    limitations: [
      'No child can be expelled or held back until Class 8 without specific state statutory remedial procedures.'
    ],
    institutionDetails: {
      institutionType: 'Elementary School Education (Primary + Middle)',
      controlledBy: 'Central & State Governments (Zilla Parishad, Municipal, KV, JNV, and Private Aided/Unaided)',
      curriculumBody: 'NCERT / State SCERT Elementary Curriculum',
      examinationTimeline: 'Mid-term (Oct) & Annual School Internal Exams (March-April). No external board exam',
      programmesOffered: ['Classes 1 to 5 (Primary)', 'Classes 6 to 8 (Middle)']
    },
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'SCH-SECONDARY-10TH',
    type: 'schoolBoard',
    title: 'Secondary Stage & 10th Board Exam Milestone',
    abbreviation: '10th Board Exam',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-PRIMARY-MIDDLE',
    level: 'union',
    category: 'school-education',
    summary: 'The culmination of general school education. Class 10 Board Exam (AISSE / ICSE / SSC / NIOS / IGCSE) is the universal milestone determining eligibility for 11th/12th streams or polytechnic diplomas.',
    legalStatus: 'Public Secondary School Examination Certification',
    establishingLaw: ['CBSE Affiliation Bylaws', 'State Secondary Education Acts', 'CISCE Regulations'],
    ministerialRelationship: 'Governed by the respective Examining Board (CBSE, State Boards, CISCE, NIOS)',
    mandate: [
      'Classes 9 & 10 core subjects: Mathematics, Science, Social Science, 2 Languages, and Information Technology / Vocational elective.',
      'Conduct centralized external public board examinations at the end of Class 10.',
      'Award Secondary School Certificate required for stream allocation in Class 11.'
    ],
    powers: [
      'Declare national/state pass/fail results and issue official certified marksheets & migration certificates.'
    ],
    limitations: [
      'Class 10 marksheets do not grant university degree admission directly (requires 12th or 3-year polytechnic diploma).'
    ],
    institutionDetails: {
      institutionType: 'Secondary School Certification Milestone',
      controlledBy: 'Examining Boards (CBSE, CISCE, State Boards, NIOS)',
      examinationTimeline: 'Exam held in Feb-March; Results declared in May; Stream admissions open in June',
      programmesOffered: ['10th Board Passing Certificate (AISSE / ICSE / SSC / NIOS)'],
      careerValue: 'Universal qualification prerequisite for 11th Stream choice or 3-Year Polytechnic Diploma'
    },
    sourceIds: ['SRC-CBSE-BYLAWS', 'SRC-MAHA-SSC-ACT-1965'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-CBSE',
    type: 'schoolBoard',
    title: 'CBSE: Central Board of Secondary Education',
    abbreviation: 'CBSE Board (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'union',
    category: 'school-education',
    summary: 'The apex national school board controlled by Ministry of Education. Strictly follows NCERT textbooks, making it the most direct national preparation feeder for JEE, NEET, and CUET.',
    legalStatus: 'Autonomous Central Government Board under Ministry of Education',
    establishingLaw: ['Central Board of Secondary Education Constitution & Affiliation Bylaws'],
    ministerialRelationship: 'Department of School Education & Literacy, Ministry of Education, Govt of India',
    leadershipRole: 'Chairman, CBSE (Senior IAS Officer / Educationist)',
    mandate: [
      'Syllabus: 100% NCERT curriculum standardized across India and abroad in 28+ countries.',
      'Continuous evaluation: 20% School Internal Assessment (practicals, periodic tests) + 80% Centralized Board Exam.',
      'Classes 1 to 8: Balvatika / Foundational and Middle schooling; Classes 9 & 10: AISSE (Class 10 Board).'
    ],
    powers: [
      'Affiliates Kendriya Vidyalayas, Navodaya Vidyalayas, and over 28,000 private schools across India.',
      'Conducts Class 10 (AISSE) and Class 12 (AISSCE) national public examinations.'
    ],
    limitations: [
      'Does not mandate regional state languages as compulsory medium of instruction; less customized to state history.'
    ],
    institutionDetails: {
      institutionType: 'National Central School Board',
      controlledBy: 'Central Government: Ministry of Education (MoE)',
      curriculumBody: 'National Council of Educational Research & Training (NCERT)',
      examinationTimeline: 'Registration: Sept-Oct | Board Exams: Feb-March | Results: May',
      programmesOffered: ['All India Secondary School Examination (AISSE Class 10)'],
      careerValue: 'Highest alignment with national competitive exams (JEE Main/Adv, NEET, CUET, NDA)'
    },
    sourceIds: ['SRC-CBSE-BYLAWS', 'SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-CISCE',
    type: 'schoolBoard',
    title: 'CISCE / ICSE: Council for Indian School Certificate Examinations',
    abbreviation: 'ICSE Board (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'union',
    category: 'school-education',
    summary: 'Prestigious national private school council known for in-depth curriculum, English literature rigor, and early laboratory science separation (Physics, Chemistry, Biology separate from Class 6).',
    legalStatus: 'Private National School Examination Council recognized under Delhi School Education Act 1973',
    establishingLaw: ['Delhi School Education Act, 1973 Section 2(s)', 'CISCE Regulations & Syllabuses'],
    ministerialRelationship: 'Autonomous non-governmental council recognized by Ministry of Education',
    leadershipRole: 'Chief Executive & Secretary, CISCE',
    mandate: [
      'Syllabus: Comprehensive, detailed syllabus with heavier reading load and extensive vocabulary.',
      'Sciences: Separate Physics, Chemistry, Biology syllabuses with dedicated laboratory work (20% to 50% practical assessment).',
      'Languages: Mandatory high-standard English language & English literature papers.'
    ],
    powers: [
      'Conducts Indian Certificate of Secondary Education (ICSE Class 10) and ISC (Class 12) examinations.',
      'Recognized by foreign universities (Cambridge, Oxford, Ivy League) as equivalent to UK GCSE/A-Levels.'
    ],
    limitations: [
      'Curriculum volume is heavier than CBSE; requires students to study 6 to 7 broad subject groups without early dropping.'
    ],
    institutionDetails: {
      institutionType: 'National Autonomous Private School Council',
      controlledBy: 'Council for the Indian School Certificate Examinations (CISCE)',
      curriculumBody: 'CISCE Research Development and Accreditation Division',
      examinationTimeline: 'Registration: Aug-Sept | Exams: Late Feb-March | Results: May',
      programmesOffered: ['Indian Certificate of Secondary Education (ICSE Class 10)'],
      careerValue: 'Superior command of English, analytical writing, overseas university admissions, and civil services foundation'
    },
    sourceIds: ['SRC-CISCE-CHARTER'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-STATE-SSC',
    type: 'schoolBoard',
    title: 'State SSC Boards: Secondary School Certificate',
    abbreviation: 'State SSC Boards (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'state',
    category: 'school-education',
    summary: 'State-governed school boards (e.g. Maharashtra SSC, Tamil Nadu, Karnataka, UP Board). Features state SCERT syllabus, regional language instruction, and critical 85% state quota advantage.',
    legalStatus: 'Statutory State Boards created by respective State Legislative Acts',
    establishingLaw: ['Maharashtra State Board of Secondary and Higher Secondary Education Act, 1965', 'Respective State School Education Acts'],
    ministerialRelationship: 'School Education Department of the respective State Government',
    leadershipRole: 'Chairman, State Board of Secondary & Higher Secondary Education',
    mandate: [
      'Syllabus: State Council of Educational Research and Training (SCERT) syllabus.',
      'Language: Mandatory regional/state language (e.g., Marathi, Tamil, Kannada, Hindi) as first/second language.',
      'Accessibility: Most affordable fee structure, powering thousands of municipal, zilla parishad, and state aided schools.'
    ],
    powers: [
      'Conducts annual SSC (Class 10) public examinations across state divisional boards.',
      'Marksheet provides foundational proof of state domicile for 85% State Quota reservation in medical & engineering colleges.'
    ],
    limitations: [
      'Syllabus topics sometimes differ in depth from NCERT tested in JEE and NEET, often requiring parallel coaching.'
    ],
    institutionDetails: {
      institutionType: 'Statutory State Government School Board',
      controlledBy: 'State Government School Education Department',
      curriculumBody: 'State Council of Educational Research and Training (SCERT)',
      examinationTimeline: 'Exams: March | Results: Late May-June',
      programmesOffered: ['Secondary School Certificate (SSC Class 10)'],
      careerValue: 'Direct feeder for State Government Quotas (85%), State Engineering/Pharma CETs, and State Public Service exams'
    },
    sourceIds: ['SRC-MAHA-SSC-ACT-1965'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-NIOS',
    type: 'schoolBoard',
    title: 'NIOS: National Institute of Open Schooling',
    abbreviation: 'NIOS Open School (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'union',
    category: 'school-education',
    summary: 'The largest open schooling system in the world, under the Ministry of Education. Provides 100% flexible, self-paced distance education with On-Demand Examinations and complete subject freedom.',
    legalStatus: 'Autonomous Institution under Ministry of Education, Govt of India',
    establishingLaw: ['Government of India Gazette Resolution No. F.5-24/90-Sch.3 (1989)'],
    ministerialRelationship: 'Department of School Education & Literacy, Ministry of Education',
    leadershipRole: 'Chairman, NIOS',
    mandate: [
      'Flexibility: Zero mandatory classroom attendance. Learn from self-instructional study materials and online classes.',
      'On-Demand Examination (ODE): Students choose their own examination date when prepared.',
      'Subject Choice: Complete freedom to mix subjects across disciplines (e.g., Math + Painting + Economics + Computer Science).'
    ],
    powers: [
      'Awards Secondary (Class 10) and Senior Secondary (Class 12) certificates.',
      'Certificates carry 100% statutory equivalence with CBSE/ICSE, verified by AIU, UPSC, NMC, and NTA.'
    ],
    limitations: [
      'Requires strong student self-discipline as there is no structured daily classroom enforcement.'
    ],
    institutionDetails: {
      institutionType: 'National Open and Distance Schooling Board',
      controlledBy: 'Ministry of Education (MoE), Government of India',
      curriculumBody: 'NIOS Academic & Vocational Curriculum Department',
      examinationTimeline: 'Public Exams twice a year (April-May & Oct-Nov) PLUS On-Demand Exams year-round',
      programmesOffered: ['Open Basic Education (OBE)', 'Secondary Course (Class 10 Passing Certificate)'],
      careerValue: 'Ideal for sports athletes, working adolescents, artists, and students preparing full-time for competitive exams'
    },
    sourceIds: ['SRC-NIOS-RESOLUTION'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-IB-CAMBRIDGE',
    type: 'schoolBoard',
    title: 'International Boards: Cambridge (IGCSE) & IB (PYP / MYP)',
    abbreviation: 'Cambridge & IB (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'institutional',
    category: 'school-education',
    summary: 'Global curriculum boards (Cambridge CAIE and International Baccalaureate). Emphasizes inquiry-based learning, practical research, essay writing, and criterion-based grading rather than rote learning.',
    legalStatus: 'International Examining Boards recognized by Association of Indian Universities (AIU)',
    establishingLaw: ['Association of Indian Universities (AIU) Equivalence Notification for IGCSE & IB Middle Years'],
    ministerialRelationship: 'Independent International Educational Foundations (UK & Switzerland)',
    leadershipRole: 'Heads of International Schools & Cambridge / IB Regional Directors',
    mandate: [
      'Philosophy: Inquiry-based learning, critical thinking, independent scientific research projects, and community action.',
      'Grading: Criterion-referenced evaluation (Levels 1 to 7 or A* to G) assessing conceptual understanding rather than rote recall.',
      'Progression: IB Primary Years Programme (PYP: Ages 3-12) -> Middle Years Programme (MYP: Ages 11-16) -> IGCSE / IB Diploma.'
    ],
    powers: [
      'Direct global transferability to schools in over 150 countries without curriculum disruption.',
      'Recognized by Indian universities with AIU equivalence conversion certificate.'
    ],
    limitations: [
      'Highest tuition fee tier; requires AIU percentile formula conversion for Indian state reservation quotas.'
    ],
    institutionDetails: {
      institutionType: 'International Curriculum & Assessment Board',
      controlledBy: 'Cambridge International (UK) & International Baccalaureate Organization (Geneva)',
      examinationTimeline: 'May session and October/November session annual examination series',
      programmesOffered: ['Cambridge Primary & Lower Secondary', 'Cambridge IGCSE (Class 10)', 'IB MYP (Middle Years)'],
      careerValue: 'Ideal for Ivy League, Russell Group, and international undergraduate university admissions, SAT/ACT readiness'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'SCH-BOARD-MATRIX',
    type: 'decisionMatrix',
    title: 'Comparative Board Decision Matrix (Differences & Fit)',
    abbreviation: 'Board Differences Matrix',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'union',
    category: 'school-education',
    summary: 'Side-by-side strategic comparison of CBSE, ICSE, State SSC, NIOS, and IB/Cambridge across syllabus orientation, evaluation style, and optimal career fit.',
    legalStatus: 'Comparative Board Taxonomy & Recognition Matrix',
    mandate: [
      '1. CBSE: Best fit for JEE, NEET, CUET national entrance exams; nationwide mobility; NCERT aligned.',
      '2. ICSE (CISCE): Best fit for strong English proficiency, in-depth sciences, and holistic humanities.',
      '3. State SSC: Best fit for regional language mastery, State CETs, and leveraging 85% State Quota college seats.',
      '4. NIOS: Best fit for flexible scheduling, sports prodigies, medical prep, and on-demand exams.',
      '5. IB & Cambridge: Best fit for critical inquiry, overseas study, global career mobility, and holistic profile.'
    ],
    powers: [
      'All 5 boards enjoy full statutory equivalence certified by Association of Indian Universities (AIU) for Indian college admissions.'
    ],
    limitations: [
      'State boards sometimes diverge from NCERT tested in JEE/NEET; IB/IGCSE require AIU grade conversion.'
    ],
    institutionDetails: {
      institutionType: 'Comparative School Board Taxonomy',
      controlledBy: 'Multi-Board Matrix (Central Govt, State Govts, and International Bodies)',
      accreditation: '100% Equivalence recognized by AIU, UPSC, and Higher Education Regulators'
    },
    sourceIds: ['SRC-CBSE-BYLAWS', 'SRC-CISCE-CHARTER', 'SRC-MAHA-SSC-ACT-1965', 'SRC-NIOS-RESOLUTION'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 03: AFTER 10TH: STREAM SELECTION (11TH & 12TH)
  // ==========================================
  {
    id: 'STRM-SCIENCE-PCM',
    type: 'stage',
    title: 'Stream 1: Science PCM (Physics, Chemistry, Maths)',
    abbreviation: '11th-12th PCM',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'institutional',
    category: 'school-education',
    summary: 'The quantitative & technical stream. Core subjects: Physics, Chemistry, Mathematics + English + CS/PE. Mandatory gateway for engineering, computing, architecture, and defense.',
    mandate: [
      'Core focus: Mechanics, Calculus, Algebra, Chemical Bonding, Electromagnetism.',
      'Required minimum 75% in 12th Board for IIT and NIT admissions.',
      'Direct gateway for JEE Main, JEE Advanced, State CETs, NATA, and NDA.'
    ],
    powers: [
      'Qualifies for all Engineering (B.Tech/B.E.), Computing (BCA), Architecture (B.Arch), Commercial Aviation, and Pure Science BS-MS degrees.'
    ],
    limitations: [
      'Cannot apply for medical MBBS/BDS unless Biology is taken as an additional subject (PCMB).'
    ],
    institutionDetails: {
      institutionType: 'Senior Secondary Specialization Stream',
      prerequisiteStream: 'Class 10 Passed with Science & Mathematics',
      examinationTimeline: 'Class 11 Internal (Feb) -> Class 12 Board Exam (Feb-April) -> Board Results (May)',
      programmesOffered: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science / Informatics', 'English'],
      careerValue: 'Engineering, Computing, Architecture, Commercial Aviation, Defence (Navy/Air Force)'
    },
    sourceIds: ['SRC-CBSE-BYLAWS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-SCIENCE-PCB',
    type: 'stage',
    title: 'Stream 2: Science PCB (Physics, Chemistry, Biology)',
    abbreviation: '11th-12th PCB',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'institutional',
    category: 'school-education',
    summary: 'The life-sciences & healthcare stream. Core subjects: Physics, Chemistry, Biology (Botany & Zoology) + English. Mandatory gateway for medical, dental, veterinary, nursing, and pharma.',
    mandate: [
      'Core focus: Human Physiology, Genetics, Cell Biology, Organic Chemistry, Ecology.',
      'Required minimum 50% aggregate in PCB for general category medical admissions.',
      'Direct gateway for National Eligibility cum Entrance Test (NEET-UG).'
    ],
    powers: [
      'Qualifies for MBBS, BDS, BAMS, BHMS, BVSc (Veterinary), B.Sc Nursing, B.Pharm, and Agricultural Sciences.'
    ],
    limitations: [
      'Cannot apply for IIT JEE Advanced or core engineering degrees without Mathematics.'
    ],
    institutionDetails: {
      institutionType: 'Senior Secondary Specialization Stream',
      prerequisiteStream: 'Class 10 Passed with Science',
      examinationTimeline: 'Class 11 Internal (Feb) -> Class 12 Board Exam (Feb-April) -> Board Results (May)',
      programmesOffered: ['Physics', 'Chemistry', 'Biology (Botany + Zoology)', 'Biotechnology / Psychology', 'English'],
      careerValue: 'Medicine, Dentistry, Pharmacy, Biotechnology, Veterinary, Allied Healthcare'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-NEET-REGULATIONS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-SCIENCE-PCMB',
    type: 'stage',
    title: 'Stream 3: Science PCMB (Dual Gateway: Math + Biology)',
    abbreviation: '11th-12th PCMB',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'institutional',
    category: 'school-education',
    summary: 'The hybrid science stream keeping all options open. Combines Physics, Chemistry, Mathematics, and Biology. Qualifies for both engineering (JEE) and medical (NEET) entrance exams simultaneously.',
    mandate: [
      'Dual eligibility: Can sit for both JEE Main/Advanced and NEET-UG in the same academic year.',
      'Ideal foundation for interdisciplinary frontiers: Biomedical Engineering, Computational Biology, Bioinformatics, Genetics.'
    ],
    powers: [
      'Highest flexibility: Can switch between engineering, medicine, research, or architecture at degree entry.'
    ],
    limitations: [
      'Demands the heaviest study workload due to dual lab practicals and extensive syllabuses of both Math and Biology.'
    ],
    institutionDetails: {
      institutionType: 'Senior Secondary Dual Specialization Stream',
      prerequisiteStream: 'Class 10 Passed with high scores in Science & Math',
      examinationTimeline: 'Class 12 Boards (Feb-Apr) -> JEE Main S1/S2 (Jan/Apr) -> NEET-UG (May) -> JEE Advanced (May/June)',
      programmesOffered: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'],
      careerValue: 'Biomedical Engineering, Bioinformatics, Biotechnology R&D, or freedom to choose between MBBS and B.Tech'
    },
    sourceIds: ['SRC-CBSE-BYLAWS', 'SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-COMMERCE',
    type: 'stage',
    title: 'Stream 4: Commerce (Accounts, Business, Economics, Maths)',
    abbreviation: '11th-12th Commerce',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'institutional',
    category: 'school-education',
    summary: 'The business & financial stream. Core subjects: Accountancy, Business Studies, Economics, Mathematics / Applied Maths. Feeder for Chartered Accountancy, investment finance, and corporate management.',
    mandate: [
      'Core focus: Double-entry Bookkeeping, Partnership Accounts, Corporate Finance, Micro/Macro Economics.',
      'Direct gateway for CA Foundation (ICAI), CS Executive Entrance (CSEET), CMA Foundation, and B.Com (Hons).',
      'Direct gateway for 5-Year Integrated Management (IPMAT at IIM Indore/Rohtak).'
    ],
    powers: [
      'Can register for CA Foundation immediately after Class 10 and sit for exam right after Class 12.'
    ],
    limitations: [
      'Cannot apply for technical engineering (B.Tech) or medical (MBBS) degrees.'
    ],
    institutionDetails: {
      institutionType: 'Senior Secondary Specialization Stream',
      prerequisiteStream: 'Class 10 Passed',
      examinationTimeline: 'Class 12 Board Exam in Feb-April; CA Foundation exams in June & December',
      programmesOffered: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics / Applied Maths', 'English'],
      careerValue: 'Chartered Accountancy, Investment Banking, Corporate Law, Management, FinTech'
    },
    sourceIds: ['SRC-ICAI-ACT-1949', 'SRC-CBSE-BYLAWS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-ARTS',
    type: 'stage',
    title: 'Stream 5: Arts & Humanities (History, Pol Sci, Psychology, Legal)',
    abbreviation: '11th-12th Humanities',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'institutional',
    category: 'school-education',
    summary: 'The critical reasoning & public policy stream. Core subjects: Political Science, History, Economics, Psychology, Sociology, Legal Studies. Premier feeder for 5-Year Law (NLUs), civil services, and media.',
    mandate: [
      'Core focus: Constitutional law principles, governance, international relations, economic policy, human behaviour.',
      'Direct gateway for Common Law Admission Test (CLAT) for 24 National Law Universities.',
      'Direct gateway for design (NID DAT, NIFT), liberal arts (CUET-UG), and journalism.'
    ],
    powers: [
      'Builds foundational syllabus for UPSC Civil Services Examination (General Studies papers).'
    ],
    limitations: [
      'Cannot apply for pure science, engineering, or medical degrees.'
    ],
    institutionDetails: {
      institutionType: 'Senior Secondary Specialization Stream',
      prerequisiteStream: 'Class 10 Passed',
      examinationTimeline: 'Class 12 Board in Feb-April; CLAT exam in December of Class 12',
      programmesOffered: ['History', 'Political Science', 'Economics', 'Psychology', 'Legal Studies', 'Sociology'],
      careerValue: 'Corporate & Litigation Law, Public Policy, Civil Services (IAS/IPS), Journalism, Design'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-CBSE-BYLAWS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-POLYTECHNIC',
    type: 'stage',
    title: 'Stream 6: Polytechnic Diploma (3-Year Technical after 10th)',
    abbreviation: 'Polytechnic Diploma',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'state',
    category: 'school-education',
    summary: 'The hands-on technical route directly after Class 10. 3-Year Engineering Diploma in Mechanical, Electrical, Civil, CS. Enables direct Lateral Entry into 2nd Year B.Tech without 11th/12th.',
    mandate: [
      'Duration: 3 Years (6 Semesters) after Class 10.',
      'Regulated by State Directorate of Technical Education (DTE) and AICTE.',
      'Grants direct Lateral Entry into B.Tech 2nd Year (3rd Semester) under AICTE scheme.'
    ],
    powers: [
      'Immediate technical employment as Junior Engineer (JE) in Railways, CPWD, PSUs.',
      'Bypasses 11th/12th and JEE Main for engineering degree through Direct Second Year Engineering (DSE) admission.'
    ],
    limitations: [
      'Cannot be used to enter medical (MBBS) or general commerce/arts bachelor degrees.'
    ],
    institutionDetails: {
      institutionType: 'Vocational & Technical Diploma',
      controlledBy: 'State Board of Technical Education (e.g. MSBTE) & AICTE',
      prerequisiteStream: 'Class 10 Passed with minimum 35% in Mathematics & Science',
      examinationTimeline: 'Admissions in June-July; Semester exams twice a year (Nov-Dec & April-May)',
      programmesOffered: ['Diploma in Computer Engineering', 'Mechanical', 'Electrical', 'Civil', 'Electronics'],
      careerValue: 'Junior Engineer (JE) jobs or Direct Lateral Entry to B.Tech Year 2'
    },
    sourceIds: ['SRC-AICTE-APPROVAL-PROCESS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 04: UNDERGRADUATE (UG) COURSES AFTER 12TH
  // ==========================================
  {
    id: 'UG-BTECH',
    type: 'institution',
    title: 'Bachelor of Technology (B.Tech / B.E.)',
    abbreviation: 'B.Tech (4 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-SCIENCE-PCM',
    level: 'union',
    category: 'higher-education',
    summary: '4-Year technical undergraduate degree. Available branches: Computer Science, AI & Data Science, ECE, Mechanical, Electrical, Civil. Feeder to tech careers or advanced cross-discipline combinations.',
    mandate: [
      'Duration: 4 Years (8 Semesters).',
      'Awarded by: IITs, NITs, IIITs, BITS, and State Technical Universities.',
      'Prerequisite: 10+2 PCM (or 3-Year Polytechnic Diploma for lateral entry).'
    ],
    powers: [
      'Eligible for direct campus hiring as Software Engineer, Product Analyst, Core Engineer.',
      'Eligible for GATE exam for PSU recruitment and M.Tech / MS abroad.'
    ],
    limitations: [
      'Must maintain required CGPA and university attendance regulations.'
    ],
    institutionDetails: {
      institutionType: 'Professional Engineering Undergraduate Degree',
      controlledBy: 'AICTE / Autonomous Parliamentary Acts (IIT & NITSER Acts)',
      admissionRoute: 'JEE Advanced (IITs), JEE Main (NITs/IIITs), State CETs (State Colleges)',
      examinationTimeline: 'Entrance: Jan-May | Counselling: June-July | Semester Exams: Nov-Dec & April-May',
      programmesOffered: ['Computer Science (CSE)', 'AI & Data Science', 'Electronics & Comm (ECE)', 'Mechanical', 'Electrical', 'Civil'],
      awardingBody: 'Respective University / Institute Senate',
      careerValue: 'Software Architect, Core Engineering, R&D, Tech Leadership'
    },
    sourceIds: ['SRC-IIT-ACT-1961', 'SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-BCA',
    type: 'institution',
    title: 'Bachelor of Computer Applications (BCA)',
    abbreviation: 'BCA (3–4 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-SCIENCE-PCM',
    level: 'state',
    category: 'higher-education',
    summary: '3 to 4-Year undergraduate degree in practical computer applications, software development, database systems, and web technologies. Does not strictly require high-tier JEE ranks.',
    mandate: [
      'Duration: 3 Years (6 Semesters) or 4 Years NEP Honours with Research.',
      'Core subjects: Java, Python, C++, Data Structures, Web Development, Database Management (SQL), Cloud.',
      'Direct feeder into 2-Year Master of Computer Applications (MCA).'
    ],
    powers: [
      'Immediate employment as Full-Stack Web Developer, App Developer, Database Administrator, QA Engineer.'
    ],
    limitations: [
      'Some core hardware engineering roles and PSU recruitment prefer B.Tech over BCA unless followed by MCA.'
    ],
    institutionDetails: {
      institutionType: 'Undergraduate Computer Science Degree',
      controlledBy: 'University Grants Commission (UGC)',
      admissionRoute: 'CUET-UG / University Level Entrance / 12th Board Merit',
      examinationTimeline: 'Semester exams in Dec & May annually',
      programmesOffered: ['BCA General', 'BCA with Cloud Computing', 'BCA with Data Science & AI'],
      careerValue: 'Software Developer, Systems Analyst, IT Consultant, or direct entry to MCA'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-MBBS',
    type: 'institution',
    title: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    abbreviation: 'MBBS (5.5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-SCIENCE-PCB',
    level: 'union',
    category: 'higher-education',
    summary: '5.5-Year primary medical qualification (4.5 years academic coursework + 1 year compulsory rotatory clinical internship). Regulated strictly by the National Medical Commission (NMC).',
    mandate: [
      'Single national entrance gate: NEET-UG.',
      'Includes mandatory clinical rotations in Surgery, Medicine, Pediatrics, Obstetrics, and Community Health.',
      'Registration in National Medical Register upon clearing the National Exit Test (NExT).'
    ],
    powers: [
      'Statutory legal license to practice medicine, prescribe scheduled drugs, and perform medical procedures.'
    ],
    limitations: [
      'Cannot practice as a specialist without post-graduate MD/MS/DNB qualification.'
    ],
    institutionDetails: {
      institutionType: 'Primary Professional Medical Degree',
      controlledBy: 'National Medical Commission (NMC) under NMC Act 2019',
      admissionRoute: 'NEET-UG All India Rank allocated through MCC (15% AIQ) and State DTE (85% State Quota)',
      examinationTimeline: 'NEET-UG: May 1st Sunday | 1st Prof (Year 1), 2nd Prof (Year 2.5), 3rd Prof (Year 4.5) + 1-Yr Internship',
      programmesOffered: ['MBBS (5.5 Years)'],
      awardingBody: 'AIIMS / Respective State Health Sciences University (e.g. MUHS Nashik, RGUHS)',
      careerValue: 'Registered Medical Practitioner, Medical Officer, Foundation for MD/MS specialization'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-AIIMS-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-BDS-AYUSH',
    type: 'institution',
    title: 'Dental & Ayush Healthcare: BDS, BAMS, BHMS & BPT',
    abbreviation: 'BDS & Ayush (4.5–5.5 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-SCIENCE-PCB',
    level: 'union',
    category: 'higher-education',
    summary: 'Alternative clinical healthcare degrees: Bachelor of Dental Surgery (BDS), Ayurveda (BAMS), Homeopathy (BHMS), and Physiotherapy (BPT). Admission through NEET-UG.',
    mandate: [
      'Duration: 4.5 to 5.5 Years including mandatory 1-year clinical internship.',
      'BDS regulated by Dental Council of India (DCI); BAMS/BHMS regulated by National Commission for Indian System of Medicine (NCISM).',
      'Provides registered clinical practitioner rights in their respective statutory medical council.'
    ],
    powers: [
      'Independent clinical practice as Dental Surgeon, Ayurvedic Medical Officer, or Licensed Physiotherapist.'
    ],
    limitations: [
      'BAMS/BHMS practitioners are restricted by state statutes regarding allopathic drug prescriptions.'
    ],
    institutionDetails: {
      institutionType: 'Professional Dental & Traditional Medical Degrees',
      controlledBy: 'DCI (Dental) / NCISM (Ayush) / State Allied Health Councils',
      admissionRoute: 'NEET-UG All India Rank & Ayush Central/State Counselling',
      examinationTimeline: 'NEET in May; Professional exams yearly; 1 Year rotatory internship',
      programmesOffered: ['BDS (Dentistry)', 'BAMS (Ayurveda)', 'BHMS (Homeopathy)', 'BPT (Physiotherapy)'],
      careerValue: 'Dental Clinic Owner, Ayush Hospital Doctor, Sports Rehabilitation Physiotherapist'
    },
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-BPHARM',
    type: 'institution',
    title: 'Bachelor of Pharmacy (B.Pharm) & Pharm.D',
    abbreviation: 'B.Pharm (4 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-SCIENCE-PCB',
    level: 'union',
    category: 'higher-education',
    summary: '4-Year degree in pharmaceutical chemistry, pharmacology, drug formulation, and clinical pharmacy. Regulated by the Pharmacy Council of India (PCI).',
    mandate: [
      'Duration: 4 Years (8 Semesters) for B.Pharm; 6 Years for Pharm.D (Doctor of Pharmacy).',
      'Core focus: Pharmaceutics, Medicinal Chemistry, Pharmacognosy, Drug Regulatory Affairs, Clinical Trials.',
      'Prerequisite: 10+2 with PCB or PCM.'
    ],
    powers: [
      'Registered Pharmacist license to manufacture, test, distribute, and retail scheduled drugs.',
      'Direct recruitment into global pharmaceutical giants (Sun Pharma, Dr. Reddy’s, Cipla) and FDA compliance.'
    ],
    limitations: [
      'Cannot practice clinical medicine or prescribe scheduled treatments independently.'
    ],
    institutionDetails: {
      institutionType: 'Professional Pharmaceutical Sciences Degree',
      controlledBy: 'Pharmacy Council of India (PCI) under Pharmacy Act, 1948',
      admissionRoute: 'State CETs (MHT-CET, KCET) / NEET-UG / University Entrance',
      examinationTimeline: 'Semester examinations twice a year; mandatory hospital/industrial training',
      programmesOffered: ['B.Pharm (4 Years)', 'Pharm.D (6 Years Integrated Clinical Pharmacy)'],
      careerValue: 'Drug Formulation Scientist, Quality Control Lead, Clinical Research Associate, Retail Pharmacy License'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-BCOM-BBA',
    type: 'institution',
    title: 'Commerce & Management: B.Com (Hons) & BBA',
    abbreviation: 'B.Com & BBA (3–4 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-COMMERCE',
    level: 'state',
    category: 'higher-education',
    summary: '3 to 4-Year fundamental degrees in accounting, corporate finance, marketing, and business administration. Often pursued concurrently with professional qualifications like CA or CFA.',
    mandate: [
      'Duration: 3 Years (6 Semesters) or 4-Year NEP Honours with Research.',
      'Core subjects: Financial Accounting, Cost Accounting, Corporate Law, Business Economics, Taxation.',
      'Premier institutions: SRCC Delhi, St. Xavier’s Mumbai, Christ University, Loyola.'
    ],
    powers: [
      'Direct campus placements in financial audit firms (Big 4), corporate banks, and consulting companies.',
      'Standard prerequisite degree for MBA, M.Com, or corporate legal studies.'
    ],
    limitations: [
      'General B.Com degree without professional certification (CA/CFA) has lower initial salary ceiling.'
    ],
    institutionDetails: {
      institutionType: 'Undergraduate Commerce & Management Degree',
      controlledBy: 'University Grants Commission (UGC)',
      admissionRoute: 'CUET-UG (Central Universities) / University Merit Cut-offs',
      examinationTimeline: 'Semester exams in Nov-Dec and April-May annually',
      programmesOffered: ['B.Com (Hons)', 'Bachelor of Business Administration (BBA)', 'B.Com Accounting & Finance'],
      careerValue: 'Financial Analyst, Corporate Accountant, Tax Associate, Investment Banker'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-IPM-BBA',
    type: 'institution',
    title: '5-Year Integrated Management: IPM at IIMs',
    abbreviation: 'IPM at IIMs (5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'Prestigious 5-Year dual degree programme (BBA + MBA) offered directly after Class 12 by top Indian Institutes of Management (IIM Indore, IIM Rohtak, IIM Ranchi, IIM Jammu, IIM Bodh Gaya).',
    mandate: [
      'Bypasses the CAT examination after graduation: Guarantees direct IIM MBA degree without giving CAT!',
      'Duration: 5 Years (3 Years foundational BBA + 2 Years regular PGP/MBA).',
      'Eligibility: Minimum 60% in 10th and 12th Board from any stream (Commerce, Science, Arts).'
    ],
    powers: [
      'Direct participation in prestigious IIM final MBA placements alongside CAT entrants at age 22-23.',
      'Option to exit after 3 years with a Bachelor degree under NEP guidelines.'
    ],
    limitations: [
      'Highly competitive entrance test with very limited intake (typically 120-150 seats per IIM).'
    ],
    institutionDetails: {
      institutionType: 'Integrated Elite Management Degree',
      controlledBy: 'Council of IIMs under Indian Institutes of Management Act, 2017',
      admissionRoute: 'IPMAT (IIM Indore / Rohtak) / JIPMAT exam in May -> Personal Interview (PI) in June',
      examinationTimeline: 'Entrance in May | Classes commence July | Trimester system',
      programmesOffered: ['5-Year Integrated Programme in Management (BBA + MBA)'],
      careerValue: 'Strategy Consultant, Investment Banker, Product Manager with average ₹25-30 LPA packages'
    },
    sourceIds: ['SRC-IIM-ACT-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-BA-LLB',
    type: 'institution',
    title: '5-Year Integrated Law: B.A. LL.B. / B.B.A. LL.B. (Hons)',
    abbreviation: '5-Year Law at NLUs',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-ARTS',
    level: 'state',
    category: 'higher-education',
    summary: '5-Year professional law degree directly after Class 12. Offered by 24 National Law Universities (NLSIU, NALSAR, WBNUJS). Combines arts/commerce with deep constitutional, corporate, and criminal law.',
    mandate: [
      'Single national entrance gate: CLAT-UG (Common Law Admission Test).',
      'Directly combines bachelor’s degree with professional LL.B. in 5 years instead of 6 years (3+3 model).',
      'Regulated by the Bar Council of India (BCI).'
    ],
    powers: [
      'Eligible to enroll with State Bar Council and appear for All India Bar Examination (AIBE) for full court practice rights.'
    ],
    limitations: [
      'Cannot argue in courts of law until AIBE certificate of practice is issued by BCI.'
    ],
    institutionDetails: {
      institutionType: 'Integrated Professional Legal Degree',
      controlledBy: 'Bar Council of India (BCI) & Consortium of NLUs',
      admissionRoute: 'CLAT-UG All India Rank (Exam in December)',
      examinationTimeline: 'CLAT in Dec -> Counselling Jan-May -> 10 Semesters with mandatory moot courts & internships',
      programmesOffered: ['B.A. LL.B. (Hons)', 'B.B.A. LL.B. (Hons)', 'B.Sc. LL.B. (Hons)'],
      careerValue: 'Corporate Law Associate, Supreme Court / High Court Advocate, Judicial Services (Civil Judge)'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-BARCH-BDES',
    type: 'institution',
    title: 'Architecture & Design: B.Arch (5 Yrs) & B.Des (4 Yrs)',
    abbreviation: 'B.Arch & B.Des',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-SCIENCE-PCM',
    level: 'union',
    category: 'higher-education',
    summary: 'Creative design degrees: 5-Year Bachelor of Architecture (B.Arch regulated by Council of Architecture) and 4-Year Bachelor of Design (B.Des offered by NID, NIFT, IIT IDC).',
    mandate: [
      'B.Arch Duration: 5 Years (10 Semesters) including 1-year practical architectural apprenticeship.',
      'B.Des Duration: 4 Years (8 Semesters) in Industrial Design, UI/UX, Communication, Fashion.',
      'Prerequisite: 10+2 with Physics & Mathematics for B.Arch; Any stream for B.Des.'
    ],
    powers: [
      'Statutory COA Registration number to approve and sign architectural building plans legally.',
      'Direct campus placement in top design firms, tech UI/UX studios, and urban planning agencies.'
    ],
    limitations: [
      'Cannot practice architecture legally in India without valid COA registration.'
    ],
    institutionDetails: {
      institutionType: 'Professional Architecture & Design Degrees',
      controlledBy: 'Council of Architecture (COA) under Architects Act, 1972',
      admissionRoute: 'NATA (National Aptitude Test in Architecture) / JEE Main Paper 2 / UCEED / NID DAT',
      examinationTimeline: 'NATA 3 sessions (April-July) | Studio juries every semester end',
      programmesOffered: ['B.Arch (5 Years)', 'B.Des in Product / UI-UX / Interior / Fashion (4 Years)'],
      careerValue: 'Licensed Architect, Principal Urban Planner, Chief Product Designer, UI/UX Design Lead'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'UG-BS-MS-SCIENCE',
    type: 'institution',
    title: 'Pure Sciences & Research: B.Sc & BS-MS Dual Degree',
    abbreviation: 'BS-MS Research (4–5 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-SCIENCE-PCM',
    level: 'union',
    category: 'higher-education',
    summary: 'Premier scientific research degrees offered by IISc Bangalore, 7 IISERs, and NISER. Combines advanced physics, chemistry, mathematics, and biology with cutting-edge experimental laboratory work.',
    mandate: [
      'Duration: 4-Year BS (Bachelor of Science) or 5-Year Integrated BS-MS Dual Degree.',
      'Institutes of National Importance: Indian Institute of Science (IISc), IISER Pune, Kolkata, Mohali, Bhopal, etc.',
      'Direct pathway to funded Ph.D. programmes in India and top global universities (MIT, Stanford, Max Planck).'
    ],
    powers: [
      'Access to national supercomputing facilities, synchrotron radiation centers, and high-energy physics labs.',
      'Eligible for government research fellowships (INSPIRE, KVPY).'
    ],
    limitations: [
      'Heavily oriented towards theoretical and fundamental experimental research rather than commercial corporate trades.'
    ],
    institutionDetails: {
      institutionType: 'Apex Scientific Research Degree',
      controlledBy: 'Ministry of Education & Department of Science and Technology (DST)',
      admissionRoute: 'IISER Aptitude Test (IAT) / JEE Advanced Rank / NEST',
      examinationTimeline: 'IAT exam in June; Semester system with major project dissertation in Year 5',
      programmesOffered: ['BS-MS in Physics', 'Chemistry', 'Mathematics', 'Biology', 'Earth & Climate Sciences'],
      careerValue: 'Quantum Computing Scientist, DeepTech R&D, Nanotechnology Lead, Direct Ph.D. entry'
    },
    sourceIds: ['SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 05: POSTGRADUATE (PG) COURSES & PROFESSIONAL QUALIFICATIONS
  // ==========================================
  {
    id: 'PG-MTECH',
    type: 'institution',
    title: 'Master of Technology (M.Tech / M.E.)',
    abbreviation: 'M.Tech (2 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'UG-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: '2-Year specialized engineering master degree for advanced R&D, chip design (VLSI), robotics, artificial intelligence, structural engineering, and PSU executive recruitment.',
    mandate: [
      'Duration: 2 Years (4 Semesters: 2 semesters coursework + 2 semesters master thesis research).',
      'Entrance Gate: GATE (Graduate Aptitude Test in Engineering).',
      'Monthly Fellowship: ₹12,400 per month MHRD/MoE stipend for GATE qualified students.'
    ],
    powers: [
      'Direct recruitment into Maharatna & Navratna PSUs (ONGC, IOCL, NTPC, BHEL, BARC) via GATE score.',
      'Specialist engineering roles in semiconductor design, aerospace, and robotics.'
    ],
    limitations: [
      'Requires qualifying high GATE cutoff scores for premier IIT/IISc specializations.'
    ],
    institutionDetails: {
      institutionType: 'Postgraduate Engineering Specialization',
      controlledBy: 'AICTE / IIT Senate / NITSER Council',
      admissionRoute: 'GATE Score allocated through COAP (for IITs) and CCMT (for NITs)',
      examinationTimeline: 'GATE Exam in February; Results in March; COAP Counselling May-July',
      programmesOffered: ['M.Tech in VLSI Design', 'AI & Machine Learning', 'Robotics', 'Structural Engg', 'Aerospace'],
      careerValue: 'Senior R&D Scientist at ISRO/DRDO, Semiconductor Architect, PSU Executive Engineer'
    },
    sourceIds: ['SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MCA',
    type: 'institution',
    title: 'Master of Computer Applications (MCA)',
    abbreviation: 'MCA (2 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'UG-BCA',
    level: 'union',
    category: 'higher-education',
    summary: '2-Year master degree in advanced software engineering, cloud architecture, and algorithms. Gives BCA/B.Sc graduates 100% industry equivalence with B.Tech Computer Science.',
    mandate: [
      'Duration: 2 Years (4 Semesters) modernized under AICTE revision from earlier 3-year model.',
      'Admission: NIMCET (for National Institutes of Technology), MAH-MCA-CET, CUET-PG.',
      'Eligibility: BCA, B.Sc Computer Science / IT, or any graduate with Mathematics in 12th or degree.'
    ],
    powers: [
      'Full eligibility for all Tier-1 IT software engineering campus placements (Google, Microsoft, Amazon, TCS Digital).',
      'Equated to B.Tech CSE for IT industry promotion ladders.'
    ],
    limitations: [
      'Non-engineering graduates without MCA often encounter visa restrictions for specialized software engineer roles abroad.'
    ],
    institutionDetails: {
      institutionType: 'Postgraduate Computer Applications Degree',
      controlledBy: 'AICTE & University Grants Commission (UGC)',
      admissionRoute: 'NIMCET (NITs) / State MCA CETs / CUET-PG',
      examinationTimeline: 'NIMCET in June; Semester exams in Dec and May',
      programmesOffered: ['MCA in Software Engineering', 'Cloud Computing & DevOps', 'Cyber Security'],
      careerValue: 'Senior Software Engineer, Cloud Architect, Technical Lead, Engineering Manager'
    },
    sourceIds: ['SRC-AICTE-APPROVAL-PROCESS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MD-MS',
    type: 'institution',
    title: 'Doctor of Medicine (MD) & Master of Surgery (MS) / DNB',
    abbreviation: 'MD / MS (3 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'UG-MBBS',
    level: 'union',
    category: 'higher-education',
    summary: '3-Year clinical postgraduate residency. MD represents non-surgical specializations (Cardiology, Pediatrics, Radiology), while MS represents surgical specializations (General Surgery, Orthopedics, Neurosurgery).',
    mandate: [
      'Duration: 3 Years of intensive clinical hospital residency, emergency duty, and thesis dissertation.',
      'Entrance: NEET-PG / INI-CET (for AIIMS, JIPMER, PGI, NIMHANS) / NExT Step 2.',
      'Stipend: Resident doctors receive monthly government stipend (₹80,000 to ₹1,20,000/month depending on state).'
    ],
    powers: [
      'Statutory Specialist registration: Can independently diagnose complex pathologies or perform complex surgeries.',
      'Prerequisite for Super-Speciality qualifications: DM (Doctorate of Medicine) or M.Ch (Master of Chirurgie).'
    ],
    limitations: [
      'High stress clinical rotations (72+ hours per week) and mandatory state rural service bonds in several states.'
    ],
    institutionDetails: {
      institutionType: 'Postgraduate Clinical Specialist Medical Qualification',
      controlledBy: 'National Medical Commission (NMC) & National Board of Examinations (NBEMS)',
      admissionRoute: 'NEET-PG All India Rank / INI-CET conducted by AIIMS New Delhi',
      examinationTimeline: 'NEET-PG in March-June; Final exit practical examination at end of Year 3',
      programmesOffered: ['MD: Medicine, Pediatrics, Radiology, Dermatology', 'MS: General Surgery, Orthopedics, ENT, OB-GYN', 'DNB'],
      careerValue: 'Consultant Specialist Physician, Senior Consultant Surgeon, Head of Hospital Department'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-AIIMS-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MBA-IIM',
    type: 'institution',
    title: 'Master of Business Administration: MBA / PGDM',
    abbreviation: 'IIM MBA (2 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'UG-BCOM-BBA',
    level: 'union',
    category: 'higher-education',
    summary: '2-Year premier management qualification offered by 21 IIMs, XLRI, FMS Delhi, and ISB. India’s highest corporate career accelerator across strategy, finance, marketing, and operations.',
    mandate: [
      'Duration: 2 Years (6 Trimesters) with compulsory 8-week corporate summer internship.',
      'Eligibility: Any Bachelor degree with minimum 50% marks.',
      'Selection pipeline: Common Admission Test (CAT) -> Written Ability Test (WAT) -> Personal Interview (PI).'
    ],
    powers: [
      'Direct recruitment into top global management consulting firms (McKinsey, BCG, Bain) and investment banks.',
      'Accelerated path into Chief Executive Officer (CEO), Chief Operating Officer (COO), and Product Lead suites.'
    ],
    limitations: [
      'Extremely competitive entrance ratio (over 3.3 lakh applicants for ~5,500 premier IIM seats).'
    ],
    institutionDetails: {
      institutionType: 'Postgraduate Management Degree',
      controlledBy: 'Council of IIMs under IIM Act 2017 & AICTE',
      admissionRoute: 'CAT (November) / XAT (January) / GMAT -> WAT & Personal Interview',
      examinationTimeline: 'CAT: Last Sunday of Nov | Results: Jan | WAT-PI: Feb-April | Session starts: July',
      programmesOffered: ['2-Year Full-Time MBA / Post Graduate Programme in Management (PGP)'],
      careerValue: 'Management Consultant, Investment Banker, Product Manager, Business Unit Head'
    },
    sourceIds: ['SRC-IIM-ACT-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-LLM-AIBE',
    type: 'institution',
    title: 'Master of Laws (LL.M.) & All India Bar Licensure',
    abbreviation: 'LL.M. & AIBE Practice',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'UG-BA-LLB',
    level: 'union',
    category: 'higher-education',
    summary: 'Master of Laws (1-Year at NLUs / 2-Year) for specialized corporate, constitutional, or international law, combined with the All India Bar Examination (AIBE) required for court litigation rights.',
    mandate: [
      'LL.M. Duration: 1 Year (intensive research master at NLUs) or 2 Years (General universities).',
      'Admission: CLAT-PG / AILET-PG.',
      'AIBE Gate: Statutory exam conducted by Bar Council of India to convert provisional enrollment into permanent Certificate of Practice (COP).'
    ],
    powers: [
      'Full legal standing to argue before High Courts and Supreme Court of India.',
      'Direct eligibility for Judicial Services Examination (Civil Judge Junior Division) and Law Faculty appointments.'
    ],
    limitations: [
      'Law graduates cannot practice in court beyond 2 years from graduation without clearing the AIBE.'
    ],
    institutionDetails: {
      institutionType: 'Postgraduate Legal Specialization & Court Licensure',
      controlledBy: 'Bar Council of India (BCI) & Consortium of National Law Universities',
      admissionRoute: 'CLAT-PG (for LL.M.) & AIBE Exam (post-LL.B. for Court Practice License)',
      examinationTimeline: 'CLAT-PG in December | AIBE Exam held twice a year',
      programmesOffered: ['LL.M. in Corporate & Commercial Law', 'Constitutional Law', 'Intellectual Property', 'AIBE COP'],
      careerValue: 'Supreme Court Advocate, Judicial Magistrate, Corporate General Counsel, Law Professor'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MSC-PHD',
    type: 'institution',
    title: 'Sciences & Research: M.Sc & Doctor of Philosophy (Ph.D.)',
    abbreviation: 'M.Sc & Ph.D. (2–5 Yrs)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'UG-BS-MS-SCIENCE',
    level: 'union',
    category: 'higher-education',
    summary: 'Advanced postgraduate science and doctoral research degrees. M.Sc (2 Years via IIT JAM) leads into Ph.D. funded by CSIR-UGC Junior Research Fellowship (JRF).',
    mandate: [
      'M.Sc: 2 Years (4 Semesters) offered by IITs, IISc, NITs, and Central Universities via IIT JAM.',
      'Ph.D.: 3 to 5 Years of original research dissertation defense.',
      'Fellowship: CSIR-UGC JRF provides ₹37,000/mo (first 2 years) + ₹42,000/mo SRF (remaining years) + HRA.'
    ],
    powers: [
      'Publish original peer-reviewed discoveries in high-impact scientific journals (Nature, Science, IEEE).',
      'Direct qualification for Assistant Professor / Scientist-C roles at ISRO, DRDO, BARC, CSIR labs.'
    ],
    limitations: [
      'Requires passing the national eligibility test (NET) or GATE with top percentiles for funded JRF seats.'
    ],
    institutionDetails: {
      institutionType: 'Advanced Scientific Research & Doctoral Degree',
      controlledBy: 'University Grants Commission (UGC) & Council of Scientific and Industrial Research (CSIR)',
      admissionRoute: 'IIT JAM (for M.Sc) | CSIR-UGC NET JRF / GATE (for Ph.D.)',
      examinationTimeline: 'IIT JAM in Feb; CSIR-NET in June & Dec; Ph.D. interviews twice a year',
      programmesOffered: ['M.Sc in Physics, Chemistry, Applied Math, Biotechnology', 'Ph.D. Doctoral Research'],
      careerValue: 'Principal Scientist at ISRO/DRDO, Tenured University Professor, DeepTech / Biotech Founder'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PROF-CA-ICAI',
    type: 'institution',
    title: 'Chartered Accountancy (CA): 3 Levels + Articleship',
    abbreviation: 'Chartered Accountant (CA)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'India’s highest statutory accounting qualification governed by the Institute of Chartered Accountants of India (ICAI). Requires passing Foundation, Intermediate, 2-Year Articleship, and Final.',
    mandate: [
      'Levels: CA Foundation (June/Dec), CA Intermediate (May/Nov), 2 Years Practical Training (Articleship), CA Final (May/Nov).',
      'Statutory Authority: Sole profession authorized under Companies Act 2013 to perform statutory company audit and sign balance sheets.',
      'Pursued concurrently with or independently of B.Com.'
    ],
    powers: [
      'Issue statutory audit opinions on company financial statements and certified income tax audit reports.',
      'Independent practice as CA, Partner at Big 4 accounting firms, or corporate Chief Financial Officer (CFO).'
    ],
    limitations: [
      'Low pass percentage (~10-15% in Final); requires disciplined self-study alongside full-time articleship hours.'
    ],
    institutionDetails: {
      institutionType: 'Statutory Professional Accounting Charter',
      controlledBy: 'Institute of Chartered Accountants of India (ICAI) under Chartered Accountants Act, 1949',
      admissionRoute: 'Direct entry after 12th via Foundation, or after Graduation via Direct Entry Scheme',
      examinationTimeline: 'Foundation in June & Dec | Inter and Final in May & November annually',
      programmesOffered: ['CA Foundation', 'CA Intermediate', '2-Year Mandatory Articleship', 'CA Final'],
      careerValue: 'Statutory Auditor, Tax Consultant, Chief Financial Officer (CFO), Investment Banker'
    },
    sourceIds: ['SRC-ICAI-ACT-1949', 'SRC-COMPANIES-ACT-2013'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PROF-CFA-GLOBAL',
    type: 'institution',
    title: 'Chartered Financial Analyst (CFA): 3 Levels',
    abbreviation: 'CFA Charter (USA)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'The gold standard global investment credential administered by the CFA Institute (USA). Consists of 3 computer-based exam levels covering ethics, financial analysis, asset valuation, and portfolio management.',
    mandate: [
      'Structure: CFA Level I -> CFA Level II -> CFA Level III + 4,000 hours of qualified investment work experience.',
      'Eligibility: Eligible to sit for Level I during the final year of bachelor’s degree (B.Tech, B.Com, BBA).',
      'Global standing: Recognized across 160+ countries for investment banking, asset management, and equity research.'
    ],
    powers: [
      'Global authority to manage investment portfolios, institutional funds, and private wealth.',
      'Directly qualifies for high-earning front-office roles in global investment banks (Goldman Sachs, Morgan Stanley, JP Morgan).'
    ],
    limitations: [
      'Does not provide statutory signing power for Indian company tax audits (which is reserved exclusively for ICAI CAs).'
    ],
    institutionDetails: {
      institutionType: 'Global Professional Investment Charter',
      controlledBy: 'CFA Institute (USA)',
      admissionRoute: 'Registration via CFA Institute portal; eligible in final year of graduation',
      examinationTimeline: 'Level 1: 4 times/yr (Feb, May, Aug, Nov) | Level 2: 3 times/yr | Level 3: 2 times/yr',
      programmesOffered: ['CFA Level I', 'CFA Level II', 'CFA Level III', 'CFA Charterholder Designation'],
      careerValue: 'Portfolio Manager, Hedge Fund Analyst, Equity Research Associate, High-Frequency Trader'
    },
    sourceIds: ['SRC-CFA-INSTITUTE'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PROF-CS-CMA',
    type: 'institution',
    title: 'Company Secretary (CS) & Cost Accountant (CMA)',
    abbreviation: 'CS (ICSI) & CMA (ICMAI)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'Key statutory corporate professions: Company Secretary (governed by ICSI for corporate governance & board compliance) and Cost and Management Accountant (governed by ICMAI for cost audit & pricing).',
    mandate: [
      'CS (Institute of Company Secretaries of India): CSEET -> Executive -> 21-Month Training -> Professional.',
      'CMA (Institute of Cost Accountants of India): Foundation -> Intermediate -> 15-Month Practical Training -> Final.',
      'Statutory roles under Companies Act 2013 for listed company board compliance and statutory cost auditing.'
    ],
    powers: [
      'CS signs annual compliance returns and certifies corporate board actions under Companies Act 2013.',
      'CMA conducts mandatory statutory cost audits for manufacturing and energy sectors.'
    ],
    limitations: [
      'Cannot sign financial tax balance sheet audits (reserved for CAs).'
    ],
    institutionDetails: {
      institutionType: 'Statutory Corporate Governance & Cost Management Charters',
      controlledBy: 'ICSI under Company Secretaries Act 1980 & ICMAI under Cost and Works Accountants Act 1959',
      admissionRoute: 'Direct registration after 12th or Graduation via entrance test',
      examinationTimeline: 'Exams held twice a year (June & December)',
      programmesOffered: ['Company Secretary (ACS/FCS)', 'Cost & Management Accountant (ACMA/FCMA)'],
      careerValue: 'Chief Governance Officer, Board Secretary, Corporate Compliance Head, Cost Auditor'
    },
    sourceIds: ['SRC-COMPANIES-ACT-2013'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 06: HIGH-VALUE MULTI-DISCIPLINE COMBINATIONS
  // ==========================================
  {
    id: 'COMBO-BTECH-CFA',
    type: 'institution',
    title: 'Combo: B.Tech + CFA (FinTech & Quantitative Finance)',
    abbreviation: 'B.Tech + CFA',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'UG-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: 'High-earning cross-discipline combination: 4-Year B.Tech (CS / Math & Computing) paired with CFA global charter. Opens doors to Quantitative Trading, Algorithmic Finance, and FinTech architecture.',
    mandate: [
      'How it works: Student completes B.Tech, and appears for CFA Level 1 in final year of engineering.',
      'Combines mathematical programming skills (Python, C++, algorithms) with deep financial asset valuation.',
      'CFA Level 1, 2, and 3 conducted by CFA Institute (USA).'
    ],
    powers: [
      'Directly qualifies for roles at global investment banks, hedge funds, High-Frequency Trading (HFT) firms, and FinTech unicorns.',
      'Exempts technical candidates from needing a separate commerce bachelor degree.'
    ],
    limitations: [
      'Requires passing 3 rigorous exam levels and 4,000 hours of qualified investment work experience for full CFA charter.'
    ],
    institutionDetails: {
      institutionType: 'High-Demand Dual Skill Pathway (Tech + Investment Finance)',
      prerequisiteStream: '10+2 PCM -> B.Tech Degree',
      examinationTimeline: 'CFA Level 1 during B.Tech Year 4; Level 2 & 3 in first 2 years of work',
      programmesOffered: ['B.Tech in Computer Science / Math & Computing + CFA Charter (Levels I, II, III)'],
      careerValue: 'Quantitative Trader, Algorithmic Fund Manager, FinTech Lead, Risk Architect'
    },
    sourceIds: ['SRC-CFA-INSTITUTE', 'SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-BCOM-CA',
    type: 'institution',
    title: 'Combo: B.Com + Chartered Accountancy (ICAI)',
    abbreviation: 'B.Com + CA',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'UG-BCOM-BBA',
    level: 'union',
    category: 'higher-education',
    summary: 'The classic Indian financial power combination: 3-Year B.Com (Accounts & Finance) pursued simultaneously with ICAI Chartered Accountancy (Foundation, Intermediate, 2-Year Articleship, and Final).',
    mandate: [
      'Allows student to earn an academic degree (B.Com) alongside India’s highest statutory accounting qualification (CA).',
      'Provides practical audit exposure during 2-year mandatory articleship under a practicing CA firm.',
      'Sole statutory authority empowered by Companies Act 2013 to sign company balance sheets and tax audit reports.'
    ],
    powers: [
      'Practice independently as an auditor or join top accounting firms (Big 4) and CFO executive suites.'
    ],
    limitations: [
      'Demands rigorous time-management to balance college attendance with mandatory articleship hours.'
    ],
    institutionDetails: {
      institutionType: 'Statutory Professional Accounting & Academic Degree Combo',
      controlledBy: 'Institute of Chartered Accountants of India (ICAI) & Respective University',
      examinationTimeline: 'CA Foundation (June/Dec), Inter (May/Nov), Articleship (2 Yrs), Final (May/Nov)',
      programmesOffered: ['B.Com (3/4 Years) + Chartered Accountant ACA Designation'],
      careerValue: 'Statutory Auditor, Tax Consultant, Chief Financial Officer (CFO), Investment Banker'
    },
    sourceIds: ['SRC-ICAI-ACT-1949', 'SRC-COMPANIES-ACT-2013'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-MBBS-MBA',
    type: 'institution',
    title: 'Combo: MBBS + MBA (Hospital Admin & HealthTech)',
    abbreviation: 'MBBS + MBA',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'UG-MBBS',
    level: 'union',
    category: 'higher-education',
    summary: 'Elite clinical-management combination: 5.5-Year MBBS followed by a 2-Year MBA at an IIM or ISB. Feeder for hospital CEO suites, healthcare venture capital, and digital health unicorn founders.',
    mandate: [
      'How it works: MBBS doctor appears for CAT after completing clinical internship and earns an MBA.',
      'Bridges clinical medical expertise with financial modeling, operations research, and healthcare policy.',
      'High demand from global hospital chains (Apollo, Fortis, Max) and health-tech platforms.'
    ],
    powers: [
      'Lead hospital enterprise management, clinical operations, digital health transformation, and pharmaceutical product strategy.'
    ],
    limitations: [
      'Requires stepping away from active daily bedside surgical/clinical practice into corporate leadership.'
    ],
    institutionDetails: {
      institutionType: 'Healthcare Leadership & Clinical Operations Combo',
      controlledBy: 'National Medical Commission (MBBS) & Council of IIMs (MBA)',
      examinationTimeline: 'NEET-UG -> MBBS (5.5 Yrs) -> CAT Exam -> 2-Year IIM MBA',
      programmesOffered: ['MBBS + MBA in Healthcare / Hospital Administration / General Management'],
      careerValue: 'Hospital Chief Executive Officer (CEO), HealthTech Co-Founder, Healthcare VC Partner'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-IIM-ACT-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-BTECH-LLB',
    type: 'institution',
    title: 'Combo: B.Tech + 3-Yr LL.B. (Tech Patent & IP Law)',
    abbreviation: 'B.Tech + Law (Patent)',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'UG-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: 'Powerful techno-legal combination: 4-Year B.Tech followed by a 3-Year LL.B. Qualifies directly for Registered Patent Agent examinations and high-value international technology intellectual property litigation.',
    mandate: [
      'How it works: Engineering graduate pursues 3-Year LL.B. (DU Law, GLC Mumbai, IIT Kharagpur RGSOIPL).',
      'Under Indian Patents Act 1970, only individuals with a science/tech degree can become Registered Patent Agents.',
      'Covers patent drafting, AI software copyright, telecom standard-essential patents, and cyber law.'
    ],
    powers: [
      'Draft, file, and litigate technology patents before Indian Patent Office and international IP tribunals.',
      'Lead technology policy, cyber security legal compliance, and AI governance.'
    ],
    limitations: [
      'Total educational path requires 7 years (4 years B.Tech + 3 years LL.B).'
    ],
    institutionDetails: {
      institutionType: 'Specialized Technology & Intellectual Property Law Combo',
      controlledBy: 'Controller General of Patents (CGPDTM) & Bar Council of India (BCI)',
      examinationTimeline: 'B.Tech (4 Yrs) -> 3-Yr LL.B. Entrance (DU/CUET-PG) -> Patent Agent Exam & AIBE',
      programmesOffered: ['B.Tech + LL.B. (Hons in Intellectual Property Law)'],
      careerValue: 'Technology Patent Attorney, AI Regulatory Counsel, Cyber Law Specialist, Big Tech In-house Counsel'
    },
    sourceIds: ['SRC-IIT-ACT-1961', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 07: NATIONAL EXAMINATION GATES, LEVELS & TIMELINES
  // ==========================================
  {
    id: 'GATE-BTECH-LEVELS',
    type: 'examinationAgency',
    title: 'Engineering (B.Tech) Entrance Tiers: CET vs JEE Main vs JEE Advanced',
    abbreviation: 'B.Tech Entrance Tiers',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'UG-BTECH',
    level: 'union',
    category: 'examination',
    summary: 'The 3-tier hierarchy of engineering admissions in India: State CETs, National JEE Main, and Apex JEE Advanced.',
    mandate: [
      '• Tier 1: State CETs (e.g. MHT-CET, KCET, WBJEE) — Conducted in April-May for top state govt and private colleges (COEP, VJTI, RVCE). State syllabus focus.',
      '• Tier 2: JEE Main — Conducted by NTA in 2 sessions (January & April). Gate for 31 NITs, 26 IIITs, 38 GFTIs. Also acts as screening test for JEE Advanced.',
      '• Tier 3: JEE Advanced — Conducted in May/June by one of the IITs for top 2,50,000 JEE Main qualifiers. Sole gateway for 23 IITs.',
      '• Centralized Allocation: JoSAA & CSAB allocate all NIT/IIIT/IIT seats based on merit ranks across June-July.'
    ],
    powers: [
      'Determines All India Ranks (AIR) that allocate over 55,000 premier government engineering seats.'
    ],
    limitations: [
      'JEE Advanced allows maximum 2 attempts in 2 consecutive years; minimum 75% in 12th board required for IIT/NIT.'
    ],
    institutionDetails: {
      institutionType: 'National Engineering Entrance Hierarchy',
      controlledBy: 'NTA (JEE Main) | IIT JAB (JEE Advanced) | State CET Cells',
      examinationTimeline: 'Jan (JEE Main S1) -> April (JEE Main S2 & State CETs) -> May/June (JEE Advanced) -> June/July (JoSAA Counselling)'
    },
    sourceIds: ['SRC-NTA-CHARTER', 'SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'GATE-GATE-EXAM',
    type: 'examinationAgency',
    title: 'GATE: Graduate Aptitude Test in Engineering',
    abbreviation: 'GATE Exam (M.Tech & PSUs)',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'PG-MTECH',
    level: 'union',
    category: 'examination',
    summary: 'The national benchmark examination for M.Tech admissions in IITs/IISc and executive engineering recruitment in major Public Sector Undertakings (PSUs).',
    mandate: [
      'Conducted jointly by IISc Bangalore and 7 IITs on rotation every February.',
      'Tests undergraduate engineering fundamentals across 30 distinct subject papers.',
      'GATE score is valid for 3 years for higher education M.Tech / Ph.D. admissions.'
    ],
    powers: [
      'Allocates M.Tech seats in IITs via Common Offer Acceptance Portal (COAP) and NITs via CCMT.',
      'Direct recruitment metric for Grade-A Executive Engineer jobs in ONGC, IOCL, NTPC, PowerGrid, BHEL.'
    ],
    limitations: [
      'PSUs utilize GATE score of the current exam year only for direct recruitment.'
    ],
    institutionDetails: {
      institutionType: 'National Postgraduate Engineering & PSU Entrance Test',
      controlledBy: 'National Coordination Board (NCB) — GATE, Department of Higher Education',
      examinationTimeline: 'Registration: Aug-Sept | Exam: First 2 weekends of February | Results: Mid-March',
      programmesOffered: ['GATE in Computer Science, Mechanical, Electrical, Civil, ECE, Chemical, Data Science']
    },
    sourceIds: ['SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'GATE-MBBS-LEVELS',
    type: 'examinationAgency',
    title: 'Medical Entrance & Licensing: NEET-UG + NExT Breakdown',
    abbreviation: 'Medical Exam Tiers',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'UG-MBBS',
    level: 'union',
    category: 'examination',
    summary: 'The single-window national entry and exit gates for medical education in India under the National Medical Commission.',
    mandate: [
      '• Entry Gate: NEET-UG — Single national entrance test conducted by NTA on the first Sunday of May. Mandatory for all MBBS/BDS seats (Govt, AIIMS, Private, Deemed).',
      '• Counselling: MCC conducts All India Quota (15%) + AIIMS/JIPMER (100%); State DTEs conduct State Quota (85%) in July-September.',
      '• Exit & Licensure Gate: National Exit Test (NExT) / NEET-PG — Comprehensive test at the end of final MBBS for medical practice licence and PG specialization seat allocation.'
    ],
    powers: [
      'Only valid legal pathway in India to study MBBS and obtain medical practitioner registration.'
    ],
    limitations: [
      'Cannot practice as a specialist without completing MBBS internship and clearing PG entrance (NExT / NEET-PG).'
    ],
    institutionDetails: {
      institutionType: 'National Medical Entrance & Licensure Architecture',
      controlledBy: 'National Medical Commission (NMC) & National Testing Agency (NTA)',
      examinationTimeline: 'May (NEET-UG Exam) -> June (Results) -> July-Sept (MCC & State Counselling)'
    },
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'GATE-CA-LEVELS',
    type: 'examinationAgency',
    title: 'Chartered Accountancy (CA): 3 Levels + Articleship Breakdown',
    abbreviation: 'CA Examination Structure',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'PROF-CA-ICAI',
    level: 'union',
    category: 'examination',
    summary: 'The statutory 3-tier examination structure and mandatory practical training required to qualify as an ICAI Chartered Accountant.',
    mandate: [
      '• Level 1: CA Foundation — 4 Papers (Accounting, Law, Quantitative Aptitude, Economics). Held in June & December.',
      '• Level 2: CA Intermediate — 6 Papers in 2 Groups (Advanced Accounting, Corporate Laws, Taxation, Costing, Auditing, Financial Management). Held in May & November.',
      '• Practical Training: 2 Years mandatory articleship under a practicing CA firm.',
      '• Level 3: CA Final — 6 Advanced Papers (Financial Reporting, Strategic Financial Management, Advanced Auditing, Direct & Indirect Tax). Held in May & November.'
    ],
    powers: [
      'Clearing all 3 levels + articleship grants full statutory membership (ACA) and Certificate of Practice (COP).'
    ],
    limitations: [
      'Must score minimum 40% in every individual paper and 50% overall in each group.'
    ],
    institutionDetails: {
      institutionType: 'Professional Statutory Examination Structure',
      controlledBy: 'Institute of Chartered Accountants of India (ICAI)',
      examinationTimeline: 'Foundation in June & Dec | Inter & Final in May & Nov',
      programmesOffered: ['CA Foundation', 'CA Intermediate', '2-Year Articleship', 'CA Final']
    },
    sourceIds: ['SRC-ICAI-ACT-1949'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'GATE-CFA-LEVELS',
    type: 'examinationAgency',
    title: 'Chartered Financial Analyst (CFA): 3 Levels Breakdown',
    abbreviation: 'CFA Examination Structure',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'PROF-CFA-GLOBAL',
    level: 'union',
    category: 'examination',
    summary: 'The globally recognized investment finance charter administered by CFA Institute (USA). Consists of 3 computer-based exam levels testing ethics, asset valuation, and portfolio management.',
    mandate: [
      '• CFA Level I: Knowledge & comprehension of investment tools, ethics, quantitative methods, financial reporting, corporate issuers.',
      '• CFA Level II: Complex application & asset valuation — equities, fixed income, derivatives, alternative investments.',
      '• CFA Level III: Portfolio management and wealth planning for institutional and private clients.'
    ],
    powers: [
      'Global gold standard qualification for portfolio managers, hedge fund analysts, and investment bankers.'
    ],
    limitations: [
      'Requires 4,000 hours of professional investment decision-making work experience to hold the CFA charter.'
    ],
    institutionDetails: {
      institutionType: 'Global Investment Charter',
      controlledBy: 'CFA Institute (Global Body with test centers across India)',
      examinationTimeline: 'Level 1 held 4 times/yr (Feb, May, Aug, Nov) | Level 2 (May, Aug, Nov) | Level 3 (Feb, Aug)',
      programmesOffered: ['CFA Level I', 'CFA Level II', 'CFA Level III']
    },
    sourceIds: ['SRC-CFA-INSTITUTE'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'GATE-CAT-LEVELS',
    type: 'examinationAgency',
    title: 'Management Entrance: CAT + WAT / PI Breakdown',
    abbreviation: 'CAT & IIM Selection Tiers',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'PG-MBA-IIM',
    level: 'union',
    category: 'examination',
    summary: 'The multi-stage selection process for India’s premier IIMs and top business schools.',
    mandate: [
      '• Stage 1: Common Admission Test (CAT) — 2-Hour CBT exam held on the last Sunday of November. 3 sections: Verbal (VARC), Data Interpretation & Logical Reasoning (DILR), Quantitative Aptitude (QA).',
      '• Stage 2: Shortlisting — IIMs declare interview shortlists based on CAT percentile (typically 98-99.8+ percentile for older IIMs) + 10th/12th/Graduation academic scores.',
      '• Stage 3: Written Ability Test (WAT) & Personal Interview (PI) — Conducted by individual IIMs across February to April.',
      '• Final Composite Merit List declared in April-May; Classes commence in June-July.'
    ],
    powers: [
      'Determines composite merit index that allocates MBA seats in all 21 Indian Institutes of Management.'
    ],
    limitations: [
      'High CAT percentile alone does not guarantee admission without clearing personal interview and profile evaluation.'
    ],
    institutionDetails: {
      institutionType: 'Apex Management Selection Pipeline',
      controlledBy: 'Council of IIMs (Conducted by an Organizing IIM on rotation)',
      examinationTimeline: 'Aug-Sept (Registration) -> Last Sunday of Nov (CAT Exam) -> Jan (Results) -> Feb-Apr (WAT-PI) -> July (Session Start)'
    },
    sourceIds: ['SRC-IIM-ACT-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'GATE-CLAT-AIBE',
    type: 'examinationAgency',
    title: 'Law Entrance & Bar Practice: CLAT + AIBE Breakdown',
    abbreviation: 'Law Entrance & Licensing',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'UG-BA-LLB',
    level: 'union',
    category: 'examination',
    summary: 'The entrance gate and court practice licensing sequence for lawyers in India.',
    mandate: [
      '• Entrance Gate: CLAT-UG / PG — Offline OMR test held on first Sunday of December. Tests English, Legal Reasoning, Logical Reasoning, Current Affairs, Math.',
      '• Allocation: Consortium of NLUs centralized counselling (Jan-May) for 24 National Law Universities.',
      '• Licensing Gate: All India Bar Examination (AIBE) — Open-book statutory exam conducted by Bar Council of India (BCI) after completing LL.B. Mandatory to practice in court.'
    ],
    powers: [
      'Passing AIBE converts provisional advocate enrollment into permanent Certificate of Practice.'
    ],
    limitations: [
      'Law graduates cannot argue in courts until enrolled with State Bar Council and clearing AIBE.'
    ],
    institutionDetails: {
      institutionType: 'Legal Entrance & Professional Practice Gates',
      controlledBy: 'Consortium of NLUs (CLAT) & Bar Council of India (AIBE)',
      examinationTimeline: 'December (CLAT Exam) -> Jan-May (Counselling) -> 5-Yr Degree -> AIBE Exam post-graduation'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'GATE-NET-JRF',
    type: 'examinationAgency',
    title: 'Research & Teaching Gate: CSIR-UGC NET & IIT JAM',
    abbreviation: 'NET JRF & IIT JAM',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'PG-MSC-PHD',
    level: 'union',
    category: 'examination',
    summary: 'The apex national examinations determining eligibility for Master of Science degrees (IIT JAM) and Junior Research Fellowships / Assistant Professorships (CSIR-UGC NET).',
    mandate: [
      '• IIT JAM: Joint Admission test for Masters in 23 IITs and IISc. Held in February.',
      '• CSIR-UGC NET: National Eligibility Test held twice a year (June & December) across Chemical, Earth, Life, Mathematical, and Physical Sciences.',
      '• JRF Award: Top qualifiers receive monthly government research stipend (₹37,000 + HRA) for Ph.D. work.'
    ],
    powers: [
      'Mandatory minimum statutory qualification for appointment as Assistant Professor in Indian universities.',
      'Direct admission into Ph.D. research programmes across all CSIR, DRDO, and DAE national laboratories.'
    ],
    limitations: [
      'JRF award letter has a validity of 2 years within which candidate must enroll in a Ph.D. programme.'
    ],
    institutionDetails: {
      institutionType: 'National Higher Education & Fellowship Entrance',
      controlledBy: 'University Grants Commission (UGC), CSIR & NTA',
      examinationTimeline: 'IIT JAM in Feb | CSIR-NET in June & Dec | Ph.D. Admissions biannual'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  }
];

export const RELATIONSHIPS_V3: RelationshipEdgeData[] = [
  // Section 01: Pre-primary to Kindergarten to Primary
  {
    id: 'REL-V3-001',
    sourceNodeId: 'PRE-NURSERY-PLAY',
    targetNodeId: 'PRE-KG-FOUNDATION',
    type: 'FEEDS',
    label: 'Playgroup & Nursery feeds into Junior/Senior KG',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-002',
    sourceNodeId: 'PRE-KG-FOUNDATION',
    targetNodeId: 'SCH-PRIMARY-MIDDLE',
    type: 'FEEDS',
    label: 'Senior KG graduates enter Class 1 (Primary at Age 6)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-003',
    sourceNodeId: 'SCH-PRIMARY-MIDDLE',
    targetNodeId: 'SCH-SECONDARY-10TH',
    type: 'FEEDS',
    label: 'Elementary school completes at Class 8 -> Enters Secondary 9th & 10th',
    verificationStatus: 'verified'
  },

  // Section 02: 10th Milestone -> Individual Board Choices
  {
    id: 'REL-V3-004',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'BOARD-CBSE',
    type: 'COORDINATES',
    label: 'CBSE Board Path (NCERT syllabus, national standard)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-005',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'BOARD-CISCE',
    type: 'COORDINATES',
    label: 'ICSE Board Path (English & detailed lab science rigor)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-006',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'BOARD-STATE-SSC',
    type: 'COORDINATES',
    label: 'State SSC Path (Regional language, 85% state quota)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-007',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'BOARD-NIOS',
    type: 'COORDINATES',
    label: 'NIOS Open School Path (Flexible, on-demand exams)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-008',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'BOARD-IB-CAMBRIDGE',
    type: 'COORDINATES',
    label: 'IB & Cambridge Path (Inquiry research, global passport)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-009',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'SCH-BOARD-MATRIX',
    type: 'COORDINATES',
    label: 'Side-by-side comparative board matrix',
    verificationStatus: 'verified'
  },

  // Section 02 -> Section 03: 10th Board -> Branching into Streams
  {
    id: 'REL-V3-010',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-SCIENCE-PCM',
    type: 'FEEDS',
    label: '10th Board -> Science PCM Stream (Tech & Quant)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-011',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-SCIENCE-PCB',
    type: 'FEEDS',
    label: '10th Board -> Science PCB Stream (Medicine & Life Sciences)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-012',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-SCIENCE-PCMB',
    type: 'FEEDS',
    label: '10th Board -> Science PCMB Stream (Dual Gateway)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-013',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-COMMERCE',
    type: 'FEEDS',
    label: '10th Board -> Commerce Stream (Finance & Business)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-014',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-ARTS',
    type: 'FEEDS',
    label: '10th Board -> Arts / Humanities Stream (Law & Policy)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-015',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-POLYTECHNIC',
    type: 'FEEDS',
    label: '10th Board -> 3-Year Technical Polytechnic Diploma',
    verificationStatus: 'verified'
  },

  // Section 03 -> Section 04: Streams to Undergraduate (UG) Courses
  {
    id: 'REL-V3-016',
    sourceNodeId: 'STRM-SCIENCE-PCM',
    targetNodeId: 'UG-BTECH',
    type: 'FEEDS',
    label: 'PCM Stream qualifies for 4-Year B.Tech / B.E.',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-017',
    sourceNodeId: 'STRM-POLYTECHNIC',
    targetNodeId: 'UG-BTECH',
    type: 'FEEDS',
    label: 'Polytechnic Diploma gives Lateral Entry to 2nd Year B.Tech',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-018',
    sourceNodeId: 'STRM-SCIENCE-PCM',
    targetNodeId: 'UG-BCA',
    type: 'FEEDS',
    label: 'PCM & Computing students qualify for 3-Year BCA',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-019',
    sourceNodeId: 'STRM-SCIENCE-PCB',
    targetNodeId: 'UG-MBBS',
    type: 'FEEDS',
    label: 'PCB Stream qualifies for 5.5-Year MBBS Medical Degree',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-020',
    sourceNodeId: 'STRM-SCIENCE-PCB',
    targetNodeId: 'UG-BDS-AYUSH',
    type: 'FEEDS',
    label: 'PCB Stream qualifies for BDS, BAMS, BHMS & Physiotherapy',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-021',
    sourceNodeId: 'STRM-SCIENCE-PCB',
    targetNodeId: 'UG-BPHARM',
    type: 'FEEDS',
    label: 'PCB & PCM Streams qualify for 4-Year B.Pharm',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-022',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'UG-BCOM-BBA',
    type: 'FEEDS',
    label: 'Commerce Stream enters B.Com (Hons) & BBA',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-023',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'UG-IPM-BBA',
    type: 'FEEDS',
    label: 'Commerce/Multi-stream enters 5-Year IPM directly at IIMs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-024',
    sourceNodeId: 'STRM-ARTS',
    targetNodeId: 'UG-BA-LLB',
    type: 'FEEDS',
    label: 'Arts / Humanities & All Streams enter 5-Year Law at NLUs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-025',
    sourceNodeId: 'STRM-SCIENCE-PCM',
    targetNodeId: 'UG-BARCH-BDES',
    type: 'FEEDS',
    label: 'PCM qualifies for 5-Year B.Arch & B.Des Design',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-026',
    sourceNodeId: 'STRM-SCIENCE-PCM',
    targetNodeId: 'UG-BS-MS-SCIENCE',
    type: 'FEEDS',
    label: 'PCM & PCMB enter IISc & IISERs BS-MS Research',
    verificationStatus: 'verified'
  },

  // Section 04 -> Section 05: Undergraduate -> Postgraduate (PG) Progression
  {
    id: 'REL-V3-027',
    sourceNodeId: 'UG-BTECH',
    targetNodeId: 'PG-MTECH',
    type: 'PROGRESSES_TO',
    label: 'B.Tech graduates take GATE for 2-Year M.Tech & PSUs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-028',
    sourceNodeId: 'UG-BCA',
    targetNodeId: 'PG-MCA',
    type: 'PROGRESSES_TO',
    label: 'BCA graduates take NIMCET for 2-Year MCA degree',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-029',
    sourceNodeId: 'UG-MBBS',
    targetNodeId: 'PG-MD-MS',
    type: 'PROGRESSES_TO',
    label: 'MBBS doctors take NEET-PG / INI-CET for 3-Year MD/MS Specialist Residency',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-030',
    sourceNodeId: 'UG-BCOM-BBA',
    targetNodeId: 'PG-MBA-IIM',
    type: 'PROGRESSES_TO',
    label: 'B.Com / Any Graduate takes CAT for 2-Year IIM MBA',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-031',
    sourceNodeId: 'UG-BA-LLB',
    targetNodeId: 'PG-LLM-AIBE',
    type: 'PROGRESSES_TO',
    label: 'Law graduates take CLAT-PG for LL.M. & AIBE for Court Practice License',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-032',
    sourceNodeId: 'UG-BS-MS-SCIENCE',
    targetNodeId: 'PG-MSC-PHD',
    type: 'PROGRESSES_TO',
    label: 'Pure Science graduates take CSIR-NET / GATE for Ph.D. Research',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-033',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'PROF-CA-ICAI',
    type: 'FEEDS',
    label: 'Commerce students pursue ICAI Chartered Accountancy (CA)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-034',
    sourceNodeId: 'UG-BCOM-BBA',
    targetNodeId: 'PROF-CFA-GLOBAL',
    type: 'PROGRESSES_TO',
    label: 'Graduates pursue CFA Global Charter for Investment Management',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-035',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'PROF-CS-CMA',
    type: 'FEEDS',
    label: 'Commerce students pursue CS & CMA for Corporate Governance & Cost Audit',
    verificationStatus: 'verified'
  },

  // Section 04/05 -> Section 06: High-Value Multi-Discipline Combinations
  {
    id: 'REL-V3-036',
    sourceNodeId: 'UG-BTECH',
    targetNodeId: 'COMBO-BTECH-CFA',
    type: 'PROGRESSES_TO',
    label: 'Engineers combine Tech with CFA for Quantitative Trading & FinTech',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-037',
    sourceNodeId: 'UG-BCOM-BBA',
    targetNodeId: 'COMBO-BCOM-CA',
    type: 'PROGRESSES_TO',
    label: 'Students pursue B.Com + CA simultaneously for Audit & CFO path',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-038',
    sourceNodeId: 'UG-MBBS',
    targetNodeId: 'COMBO-MBBS-MBA',
    type: 'PROGRESSES_TO',
    label: 'Doctors pursue MBA for Hospital Administration & MedTech Ventures',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-039',
    sourceNodeId: 'UG-BTECH',
    targetNodeId: 'COMBO-BTECH-LLB',
    type: 'PROGRESSES_TO',
    label: 'Engineers pursue 3-Yr LL.B. for Technology Patent & Cyber Law',
    verificationStatus: 'verified'
  },

  // Section 04/05/06 -> Section 07: Specific Examination Gates
  {
    id: 'REL-V3-040',
    sourceNodeId: 'UG-BTECH',
    targetNodeId: 'GATE-BTECH-LEVELS',
    type: 'APPEARS_FOR',
    label: 'Admission requires CET, JEE Main, or JEE Advanced',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-041',
    sourceNodeId: 'PG-MTECH',
    targetNodeId: 'GATE-GATE-EXAM',
    type: 'APPEARS_FOR',
    label: 'Admission requires qualifying GATE exam in February',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-042',
    sourceNodeId: 'UG-MBBS',
    targetNodeId: 'GATE-MBBS-LEVELS',
    type: 'APPEARS_FOR',
    label: 'Requires NEET-UG for admission & NExT for practice license',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-043',
    sourceNodeId: 'PROF-CA-ICAI',
    targetNodeId: 'GATE-CA-LEVELS',
    type: 'REGISTERS_WITH',
    label: 'Must clear Foundation -> Intermediate -> Articleship -> Final',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-044',
    sourceNodeId: 'PROF-CFA-GLOBAL',
    targetNodeId: 'GATE-CFA-LEVELS',
    type: 'REGISTERS_WITH',
    label: 'Takes 3 progressive computer-based CFA exam levels',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-045',
    sourceNodeId: 'PG-MBA-IIM',
    targetNodeId: 'GATE-CAT-LEVELS',
    type: 'APPEARS_FOR',
    label: 'Requires CAT written test + WAT/PI interviews for IIM admission',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-046',
    sourceNodeId: 'UG-BA-LLB',
    targetNodeId: 'GATE-CLAT-AIBE',
    type: 'APPEARS_FOR',
    label: 'Takes CLAT-UG for admission & AIBE for Court Practice licence',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-047',
    sourceNodeId: 'PG-MSC-PHD',
    targetNodeId: 'GATE-NET-JRF',
    type: 'APPEARS_FOR',
    label: 'Takes CSIR-UGC NET JRF or IIT JAM for Fellowship & Research',
    verificationStatus: 'verified'
  }
];

export const SOURCES_V3: SourceRecord[] = [
  {
    id: 'SRC-NEP-2020',
    name: 'National Education Policy 2020',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'National Education Policy 2020: 5+3+3+4 Pedagogical Structure & Multidisciplinary Pathways',
    publicationDate: '2020-07-29',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PRE-NURSERY-PLAY', 'PRE-KG-FOUNDATION', 'SCH-PRIMARY-MIDDLE', 'SCH-SECONDARY-10TH', 'UG-BCOM-BBA', 'UG-BCA']
  },
  {
    id: 'SRC-ECCE-POLICY',
    name: 'National Early Childhood Care and Education (ECCE) Curriculum',
    officialUrl: 'https://wcd.nic.in',
    documentTitle: 'National ECCE Policy & Quality Standards Framework',
    publicationDate: '2013-10-12',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PRE-NURSERY-PLAY', 'PRE-KG-FOUNDATION']
  },
  {
    id: 'SRC-RTE-ACT-2009',
    name: 'Right of Children to Free and Compulsory Education Act, 2009',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'Right of Children to Free and Compulsory Education Act, 2009 (Act No. 35 of 2009)',
    publicationDate: '2009-08-27',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['SCH-PRIMARY-MIDDLE']
  },
  {
    id: 'SRC-CBSE-BYLAWS',
    name: 'CBSE Examination Bylaws & Affiliation Regulations',
    officialUrl: 'https://cbse.gov.in',
    documentTitle: 'CBSE Secondary (10th) and Senior Secondary (12th) Regulations',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['SCH-SECONDARY-10TH', 'BOARD-CBSE', 'SCH-BOARD-MATRIX', 'STRM-SCIENCE-PCM', 'STRM-COMMERCE']
  },
  {
    id: 'SRC-CISCE-CHARTER',
    name: 'CISCE Regulations & Syllabuses',
    officialUrl: 'https://cisce.org',
    documentTitle: 'ICSE (10th) and ISC (12th) Regulations & Syllabuses',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BOARD-CISCE', 'SCH-BOARD-MATRIX']
  },
  {
    id: 'SRC-MAHA-SSC-ACT-1965',
    name: 'State School Examination Board Acts',
    officialUrl: 'https://mahahsscboard.in',
    documentTitle: 'Maharashtra State Board of Secondary and Higher Secondary Education Act, 1965',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BOARD-STATE-SSC', 'SCH-SECONDARY-10TH', 'SCH-BOARD-MATRIX']
  },
  {
    id: 'SRC-NIOS-RESOLUTION',
    name: 'National Institute of Open Schooling Equivalence Resolution',
    officialUrl: 'https://nios.ac.in',
    documentTitle: 'Ministry of Education Equivalence Gazette for NIOS Open Schooling',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BOARD-NIOS', 'SCH-BOARD-MATRIX']
  },
  {
    id: 'SRC-AICTE-APPROVAL-PROCESS',
    name: 'AICTE Approval Process Handbook (Polytechnic & Lateral Entry)',
    officialUrl: 'https://aicte-india.org',
    documentTitle: 'AICTE Regulations for Diploma to Degree Lateral Entry Scheme & MCA',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['STRM-POLYTECHNIC', 'UG-BTECH', 'PG-MCA']
  },
  {
    id: 'SRC-IIT-ACT-1961',
    name: 'Institutes of Technology Act, 1961',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'The Institutes of Technology Act, 1961 (Act No. 59 of 1961)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['UG-BTECH', 'PG-MTECH', 'GATE-BTECH-LEVELS', 'GATE-GATE-EXAM']
  },
  {
    id: 'SRC-NITSER-ACT-2007',
    name: 'NITSER Act, 2007',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'National Institutes of Technology, Science Education and Research Act, 2007',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['UG-BTECH', 'UG-BS-MS-SCIENCE']
  },
  {
    id: 'SRC-NTA-CHARTER',
    name: 'National Testing Agency Official Portal',
    officialUrl: 'https://nta.ac.in',
    documentTitle: 'NTA Information Bulletins for JEE Main & NEET-UG',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['GATE-BTECH-LEVELS', 'GATE-MBBS-LEVELS']
  },
  {
    id: 'SRC-CFA-INSTITUTE',
    name: 'CFA Institute Candidate Body of Knowledge (CBOK)',
    officialUrl: 'https://www.cfainstitute.org',
    documentTitle: 'CFA Program Curriculum & Requirements for Charterholder Status',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PROF-CFA-GLOBAL', 'COMBO-BTECH-CFA', 'GATE-CFA-LEVELS']
  },
  {
    id: 'SRC-NMC-ACT-2019',
    name: 'National Medical Commission Act, 2019',
    officialUrl: 'https://www.nmc.org.in',
    documentTitle: 'The National Medical Commission Act, 2019 (Act No. 30 of 2019)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['UG-MBBS', 'UG-BDS-AYUSH', 'PG-MD-MS', 'GATE-MBBS-LEVELS', 'COMBO-MBBS-MBA']
  },
  {
    id: 'SRC-AIIMS-ACT-1956',
    name: 'All India Institute of Medical Sciences Act, 1956',
    officialUrl: 'https://www.aiims.edu',
    documentTitle: 'AIIMS Act, 1956 (Act No. 25 of 1956)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['UG-MBBS', 'PG-MD-MS']
  },
  {
    id: 'SRC-ICAI-ACT-1949',
    name: 'The Chartered Accountants Act, 1949',
    officialUrl: 'https://www.icai.org',
    documentTitle: 'Chartered Accountants Act, 1949 (Act No. XXXVIII of 1949)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PROF-CA-ICAI', 'COMBO-BCOM-CA', 'GATE-CA-LEVELS']
  },
  {
    id: 'SRC-COMPANIES-ACT-2013',
    name: 'Companies Act, 2013 (Audit & Auditors)',
    officialUrl: 'https://www.mca.gov.in',
    documentTitle: 'Companies Act, 2013 Section 139-148 (Statutory Audit Powers)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PROF-CA-ICAI', 'PROF-CS-CMA', 'COMBO-BCOM-CA']
  },
  {
    id: 'SRC-NLSIU-ACT-1986',
    name: 'National Law School of India Act, 1986',
    officialUrl: 'https://www.nls.ac.in',
    documentTitle: 'National Law School of India Act, 1986 (Karnataka Act 22 of 1986)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['UG-BA-LLB', 'PG-LLM-AIBE', 'GATE-CLAT-AIBE']
  },
  {
    id: 'SRC-BCI-ADVOCATES-ACT',
    name: 'Advocates Act, 1961 & AIBE Rules',
    officialUrl: 'https://www.barcouncilofindia.org',
    documentTitle: 'The Advocates Act, 1961 and All India Bar Examination Rules',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['UG-BA-LLB', 'PG-LLM-AIBE', 'GATE-CLAT-AIBE', 'COMBO-BTECH-LLB']
  },
  {
    id: 'SRC-IIM-ACT-2017',
    name: 'Indian Institutes of Management Act, 2017',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'The Indian Institutes of Management Act, 2017 (Act No. 33 of 2017)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['UG-IPM-BBA', 'PG-MBA-IIM', 'GATE-CAT-LEVELS', 'COMBO-MBBS-MBA']
  }
];
