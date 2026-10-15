import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V3: SectionMeta[] = [
  {
    id: 'SEC-01',
    number: '01',
    title: 'Pre-Primary Foundation (Ages 3 to 6)',
    subtitle: 'Nursery, Junior KG, Senior KG & Early Childhood Authorities',
    summary: 'The early childhood developmental stage. Details ages, government authorities (Ministry of Women & Child Development, Ministry of Education, State & Municipalities), and NEP 2020 Foundational Stage guidelines.',
    iconName: 'Sparkles',
    expectedSubsections: ['01.1 Playgroup & Nursery', '01.2 Junior & Senior KG', '01.3 Government Oversight (WCD & MoE)'],
    expectedAuthorities: ['Anganwadis / WCD', 'MoE / NCERT (ECCE)', 'Municipal Pre-Schools']
  },
  {
    id: 'SEC-02',
    number: '02',
    title: 'Primary to 10th Standard & Board Comparison',
    subtitle: 'Classes 1–10 Milestones and Detailed Differences Between Boards',
    summary: 'The fundamental 10-year school journey and comprehensive side-by-side comparison of CBSE, ICSE (CISCE), State SSC, NIOS, and International (Cambridge/IB) boards.',
    iconName: 'GraduationCap',
    expectedSubsections: ['02.1 Primary & Middle School', '02.2 Class 10 Board Milestone', '02.3 Board Differences Comparison'],
    expectedAuthorities: ['CBSE', 'CISCE', 'State SSC Boards', 'NIOS', 'Cambridge / IB']
  },
  {
    id: 'SEC-03',
    number: '03',
    title: 'After 10th: Stream Selection (11th & 12th)',
    subtitle: 'Science (PCM & PCB), Commerce, Arts / Humanities & Polytechnic Diploma',
    summary: 'The critical branching point after Class 10: subject combinations, focus areas, and prerequisite gateways to higher education.',
    iconName: 'Layers',
    expectedSubsections: ['03.1 Science PCM', '03.2 Science PCB & PCMB', '03.3 Commerce Stream', '03.4 Humanities Stream', '03.5 Polytechnic 3-Yr Diploma'],
    expectedAuthorities: ['CBSE 12th', 'State HSC', 'ISC', 'Polytechnic DTE']
  },
  {
    id: 'SEC-04',
    number: '04',
    title: 'Career Courses & Multi-Discipline Combinations',
    subtitle: 'B.Tech, B.Tech + CFA, B.Com + CA, MBBS, 5-Yr Law, Architecture, MBA',
    summary: 'Real-world career pathways and cross-discipline combinations: engineering, medical, pure finance, quant FinTech, corporate law, and management.',
    iconName: 'Landmark',
    expectedSubsections: ['04.1 Engineering (B.Tech)', '04.2 B.Tech + CFA (FinTech/Quant)', '04.3 Medical (MBBS)', '04.4 B.Com + CA (Audit & Tax)', '04.5 5-Year Integrated Law', '04.6 Architecture & Design', '04.7 Degree + MBA (Management)'],
    expectedAuthorities: ['IITs / NITs', 'AIIMS', 'NLUs', 'ICAI', 'CFA Institute', 'IIMs']
  },
  {
    id: 'SEC-05',
    number: '05',
    title: 'Examination Gates, Levels & Timelines',
    subtitle: 'Levels of CA, CFA, JEE, NEET, CLAT, CAT & How They Progress',
    summary: 'Precise breakdown of testing tiers, number of examination levels, mandatory training, and annual scheduling for major competitive and professional qualifications.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['05.1 CA (3 Levels + Articleship)', '05.2 CFA (3 Levels)', '05.3 B.Tech Entrance Tiers (CET -> JEE Main -> JEE Adv)', '05.4 Medical Pathway (NEET -> MBBS -> NExT)', '05.5 Law & Bar Licence (CLAT -> NLU -> AIBE)', '05.6 MBA Selection (CAT -> WAT/PI)'],
    expectedAuthorities: ['ICAI', 'CFA Institute', 'NTA', 'IIT JAB', 'MCC', 'Consortium of NLUs', 'IIMs']
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
    establishingLaw: ['National Education Policy 2020', 'National Early Childhood Care and Education (ECCE) Curriculum'],
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
    title: 'Secondary Stage & 10th Board Exam (Classes 9 & 10)',
    abbreviation: '10th Board Exam',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-PRIMARY-MIDDLE',
    level: 'union',
    category: 'school-education',
    summary: 'The culmination of general school education. Class 10 Board Exam (AISSE / ICSE / SSC) is the universal milestone determining eligibility for 11th/12th streams or polytechnic diplomas.',
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
    id: 'SCH-BOARD-COMPARISON',
    type: 'decisionMatrix',
    title: 'Differences Between Boards (CBSE vs ICSE vs SSC vs NIOS vs IB)',
    abbreviation: 'Board Comparison Guide',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'union',
    category: 'school-education',
    summary: 'Clear side-by-side comparison of school boards in India: who controls them, syllabus orientation, exam difficulty, fee ranges, and optimal career fit.',
    legalStatus: 'Comparative Board Taxonomy & Recognition Matrix',
    mandate: [
      '1. CBSE (Central Board of Secondary Education): Controlled by Central Govt (MoE). NCERT syllabus. Best fit for JEE, NEET, CUET national entrance exams.',
      '2. ICSE / ISC (CISCE): Controlled by Private National Council. Highly detailed English literature and heavy lab sciences. Best fit for overseas college study and writing skills.',
      '3. State SSC / HSC Boards: Controlled by respective State Governments. SCERT syllabus. Regional languages taught; best fit for State CET exams and affordable mass schooling.',
      '4. NIOS (Open Schooling): Controlled by Central Govt. Highly flexible, self-paced, distance learning. 100% legal parity with CBSE for all college admissions and govt jobs.',
      '5. Cambridge (IGCSE) & IB (International Baccalaureate): Controlled by international UK/Geneva bodies. Practical, inquiry-based, research projects. Highest fee tier; ideal for foreign university admissions.'
    ],
    powers: [
      'All 5 boards enjoy full statutory equivalence certified by Association of Indian Universities (AIU) for Indian university admissions.'
    ],
    limitations: [
      'State boards sometimes diverge from NCERT syllabus tested in JEE/NEET; IB/IGCSE require AIU equivalence conversion certificates for some state quotas.'
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
    title: 'Stream 1: Science (PCM — Physics, Chemistry, Maths)',
    abbreviation: '11th-12th PCM',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-SECONDARY-10TH',
    level: 'institutional',
    category: 'school-education',
    summary: 'The quantitative & technical stream. Core subjects: Physics, Chemistry, Mathematics + English + CS/PE. Mandatory gateway for engineering, architecture, defence, and computing.',
    mandate: [
      'Core focus: Mechanics, Calculus, Algebra, Chemical Bonding, Electromagnetism.',
      'Required minimum 75% in 12th Board for IIT and NIT admissions.',
      'Direct gateway for JEE Main, JEE Advanced, State CETs, NATA, and NDA.'
    ],
    powers: [
      'Qualifies for all Engineering (B.Tech/B.E.), Architecture (B.Arch), Commercial Pilot Training, and Pure Science BS-MS degrees.'
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
    title: 'Stream 2: Science (PCB — Physics, Chemistry, Biology)',
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
    id: 'STRM-COMMERCE',
    type: 'stage',
    title: 'Stream 3: Commerce (Accounts, Business, Economics, Maths)',
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
    title: 'Stream 4: Arts & Humanities (History, Pol Sci, Psychology, Legal)',
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
    title: 'Stream 5: Polytechnic Diploma (3-Year Technical after 10th)',
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
  // SECTION 04: CAREER COURSES & MULTI-DISCIPLINE COMBINATIONS
  // ==========================================
  {
    id: 'COMBO-BTECH',
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
      'Prerequisite: 10+2 PCM.'
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
      programmesOffered: ['Computer Science (CSE)', 'AI & Data Science', 'Electronics & Comm (ECE)', 'Mechanical', 'Electrical', 'Civil'],
      awardingBody: 'Respective University / Institute Senate',
      careerValue: 'Software Architect, Core Engineering, R&D, Tech Leadership'
    },
    sourceIds: ['SRC-IIT-ACT-1961', 'SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-BTECH-CFA',
    type: 'institution',
    title: 'Career Combo: B.Tech + CFA (FinTech & Quantitative Finance)',
    abbreviation: 'B.Tech + CFA',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'COMBO-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: 'High-earning cross-discipline combination: 4-Year B.Tech (CS / Math & Computing) paired with Chartered Financial Analyst (CFA) global charter. Opens doors to Quantitative Trading, Algorithmic Finance, and FinTech architecture.',
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
    sourceIds: ['SRC-CFA-INSTITUTE'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-MBBS',
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
      programmesOffered: ['MBBS (5.5 Years)'],
      awardingBody: 'AIIMS / Respective State Health Sciences University (e.g. MUHS Nashik, RGUHS)',
      careerValue: 'Registered Medical Practitioner, Medical Officer, Foundation for MD/MS specialization'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-AIIMS-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-BCOM-CA',
    type: 'institution',
    title: 'Career Combo: B.Com + Chartered Accountancy (ICAI)',
    abbreviation: 'B.Com + CA',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-COMMERCE',
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
    id: 'COMBO-LAW-5YR',
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
      programmesOffered: ['B.A. LL.B. (Hons)', 'B.B.A. LL.B. (Hons)', 'B.Sc. LL.B. (Hons)'],
      careerValue: 'Corporate Law Associate, Supreme Court / High Court Advocate, Judicial Services (Civil Judge)'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-DEGREE-MBA',
    type: 'institution',
    title: 'Career Combo: Any Bachelor’s Degree + IIM MBA',
    abbreviation: 'Degree + MBA (IIMs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'COMBO-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: 'India’s most popular career accelerator: 3-Year or 4-Year Bachelor degree (B.Tech, B.Com, B.A., B.Sc) followed by Common Admission Test (CAT) and a 2-Year MBA at an Indian Institute of Management (IIM).',
    mandate: [
      'Eligibility: Any bachelor’s degree with minimum 50% aggregate.',
      'Entrance Gate: CAT exam (conducted on last Sunday of November) + WAT & Personal Interview.',
      'Specializations: Strategy, Marketing, Finance, Operations, Human Resources.'
    ],
    powers: [
      'Direct placement into top management consulting firms (McKinsey, BCG), investment banks, and corporate leadership tracks.'
    ],
    limitations: [
      'Cannot be admitted without qualifying CAT exam and passing multi-stage WAT and Personal Interview rounds.'
    ],
    institutionDetails: {
      institutionType: 'Post-Graduate Management Degree',
      controlledBy: 'Council of IIMs under IIM Act 2017',
      admissionRoute: 'CAT Percentile (~98-99.9+) -> Written Ability Test (WAT) -> Personal Interview (PI)',
      programmesOffered: ['2-Year Full-Time MBA / Post Graduate Programme (PGP)'],
      careerValue: 'Management Consultant, Investment Banker, Product Manager, Business Unit Head'
    },
    sourceIds: ['SRC-IIM-ACT-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 05: EXAMINATION GATES, LEVELS & TIMELINES
  // ==========================================
  {
    id: 'GATE-CA-LEVELS',
    type: 'examinationAgency',
    title: 'Chartered Accountancy (CA): 3 Levels + Articleship Breakdown',
    abbreviation: 'CA Examination Structure',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'COMBO-BCOM-CA',
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
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'COMBO-BTECH-CFA',
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
    id: 'GATE-BTECH-LEVELS',
    type: 'examinationAgency',
    title: 'Engineering (B.Tech) Entrance Tiers: CET vs JEE Main vs JEE Advanced',
    abbreviation: 'B.Tech Entrance Tiers',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'COMBO-BTECH',
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
    id: 'GATE-MBBS-LEVELS',
    type: 'examinationAgency',
    title: 'Medical Entrance & Licensing: NEET-UG + NExT Breakdown',
    abbreviation: 'Medical Exam Tiers',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'COMBO-MBBS',
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
    id: 'GATE-LAW-LEVELS',
    type: 'examinationAgency',
    title: 'Law Entrance & Bar Practice: CLAT + AIBE Breakdown',
    abbreviation: 'Law Entrance & Licensing',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'COMBO-LAW-5YR',
    level: 'union',
    category: 'examination',
    summary: 'The entrance gate and court practice licensing sequence for lawyers in India.',
    mandate: [
      '• Entrance Gate: CLAT-UG — Offline OMR test held on first Sunday of December. Tests English, Legal Reasoning, Logical Reasoning, Current Affairs, Math.',
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
    id: 'GATE-CAT-LEVELS',
    type: 'examinationAgency',
    title: 'Management Entrance: CAT + WAT / PI Breakdown',
    abbreviation: 'CAT & IIM Selection Tiers',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'COMBO-DEGREE-MBA',
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
  }
];

export const RELATIONSHIPS_V3: RelationshipEdgeData[] = [
  // Pre-primary to Kindergarten to Primary
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
  {
    id: 'REL-V3-004',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'SCH-BOARD-COMPARISON',
    type: 'COORDINATES',
    label: 'Class 10 Board choices (CBSE, ICSE, SSC, NIOS, IB)',
    verificationStatus: 'verified'
  },

  // 10th Board -> Branching into Streams
  {
    id: 'REL-V3-005',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-SCIENCE-PCM',
    type: 'FEEDS',
    label: '10th Board -> Chooses Science PCM Stream',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-006',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-SCIENCE-PCB',
    type: 'FEEDS',
    label: '10th Board -> Chooses Science PCB Stream',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-007',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-COMMERCE',
    type: 'FEEDS',
    label: '10th Board -> Chooses Commerce Stream',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-008',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-ARTS',
    type: 'FEEDS',
    label: '10th Board -> Chooses Arts / Humanities Stream',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-009',
    sourceNodeId: 'SCH-SECONDARY-10TH',
    targetNodeId: 'STRM-POLYTECHNIC',
    type: 'FEEDS',
    label: '10th Board -> Chooses 3-Yr Technical Polytechnic Diploma',
    verificationStatus: 'verified'
  },

  // Streams -> Career Courses & Combinations
  {
    id: 'REL-V3-010',
    sourceNodeId: 'STRM-SCIENCE-PCM',
    targetNodeId: 'COMBO-BTECH',
    type: 'FEEDS',
    label: 'PCM Stream qualifies for 4-Year B.Tech / B.E.',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-011',
    sourceNodeId: 'STRM-POLYTECHNIC',
    targetNodeId: 'COMBO-BTECH',
    type: 'FEEDS',
    label: 'Polytechnic Diploma gives Lateral Entry directly into 2nd Year B.Tech',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-012',
    sourceNodeId: 'COMBO-BTECH',
    targetNodeId: 'COMBO-BTECH-CFA',
    type: 'PROGRESSES_TO',
    label: 'B.Tech Engineers take CFA Levels 1-3 for FinTech & Quant Trading',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-013',
    sourceNodeId: 'STRM-SCIENCE-PCB',
    targetNodeId: 'COMBO-MBBS',
    type: 'FEEDS',
    label: 'PCB Stream qualifies for 5.5-Year MBBS Medical Degree',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-014',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'COMBO-BCOM-CA',
    type: 'FEEDS',
    label: 'Commerce Stream pursues B.Com + ICAI Chartered Accountancy',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-015',
    sourceNodeId: 'STRM-ARTS',
    targetNodeId: 'COMBO-LAW-5YR',
    type: 'FEEDS',
    label: 'Humanities & Multi-Stream students enter 5-Year Law at NLUs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-016',
    sourceNodeId: 'COMBO-BTECH',
    targetNodeId: 'COMBO-DEGREE-MBA',
    type: 'PROGRESSES_TO',
    label: 'B.Tech / Bachelor graduates appear for CAT to join IIM 2-Year MBA',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-017',
    sourceNodeId: 'COMBO-BCOM-CA',
    targetNodeId: 'COMBO-DEGREE-MBA',
    type: 'PROGRESSES_TO',
    label: 'B.Com / CA graduates join IIM Executive MBA & Corporate Strategy',
    verificationStatus: 'verified'
  },

  // Courses -> Specific Examination Gates & Level Breakdowns
  {
    id: 'REL-V3-018',
    sourceNodeId: 'COMBO-BTECH',
    targetNodeId: 'GATE-BTECH-LEVELS',
    type: 'APPEARS_FOR',
    label: 'Requires clearing CET, JEE Main, or JEE Advanced',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-019',
    sourceNodeId: 'COMBO-BTECH-CFA',
    targetNodeId: 'GATE-CFA-LEVELS',
    type: 'REGISTERS_WITH',
    label: 'Takes 3 progressive CFA examination levels',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-020',
    sourceNodeId: 'COMBO-BCOM-CA',
    targetNodeId: 'GATE-CA-LEVELS',
    type: 'REGISTERS_WITH',
    label: 'Must clear Foundation -> Intermediate -> Articleship -> Final',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-021',
    sourceNodeId: 'COMBO-MBBS',
    targetNodeId: 'GATE-MBBS-LEVELS',
    type: 'APPEARS_FOR',
    label: 'Must clear NEET-UG for admission & NExT for practice licence',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-022',
    sourceNodeId: 'COMBO-LAW-5YR',
    targetNodeId: 'GATE-LAW-LEVELS',
    type: 'APPEARS_FOR',
    label: 'Takes CLAT-UG for admission & AIBE for Court Practice licence',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-023',
    sourceNodeId: 'COMBO-DEGREE-MBA',
    targetNodeId: 'GATE-CAT-LEVELS',
    type: 'APPEARS_FOR',
    label: 'Requires CAT written test + WAT/PI interviews for IIM admission',
    verificationStatus: 'verified'
  }
];

export const SOURCES_V3: SourceRecord[] = [
  {
    id: 'SRC-NEP-2020',
    name: 'National Education Policy 2020',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'National Education Policy 2020: 5+3+3+4 Pedagogical Structure',
    publicationDate: '2020-07-29',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PRE-NURSERY-PLAY', 'PRE-KG-FOUNDATION', 'SCH-PRIMARY-MIDDLE', 'SCH-SECONDARY-10TH']
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
    relatedNodeIds: ['SCH-SECONDARY-10TH', 'SCH-BOARD-COMPARISON', 'STRM-SCIENCE-PCM', 'STRM-COMMERCE']
  },
  {
    id: 'SRC-CISCE-CHARTER',
    name: 'CISCE Regulations & Syllabuses',
    officialUrl: 'https://cisce.org',
    documentTitle: 'ICSE (10th) and ISC (12th) Regulations',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['SCH-BOARD-COMPARISON']
  },
  {
    id: 'SRC-MAHA-SSC-ACT-1965',
    name: 'State School Examination Board Acts',
    officialUrl: 'https://mahahsscboard.in',
    documentTitle: 'Maharashtra State Board of Secondary and Higher Secondary Education Act, 1965',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['SCH-SECONDARY-10TH', 'SCH-BOARD-COMPARISON']
  },
  {
    id: 'SRC-NIOS-RESOLUTION',
    name: 'National Institute of Open Schooling Equivalence Resolution',
    officialUrl: 'https://nios.ac.in',
    documentTitle: 'Ministry of Education Equivalence Gazette for NIOS Open Schooling',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['SCH-BOARD-COMPARISON']
  },
  {
    id: 'SRC-AICTE-APPROVAL-PROCESS',
    name: 'AICTE Approval Process Handbook (Polytechnic & Lateral Entry)',
    officialUrl: 'https://aicte-india.org',
    documentTitle: 'AICTE Regulations for Diploma to Degree Lateral Entry Scheme',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['STRM-POLYTECHNIC', 'COMBO-BTECH']
  },
  {
    id: 'SRC-IIT-ACT-1961',
    name: 'Institutes of Technology Act, 1961',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'The Institutes of Technology Act, 1961 (Act No. 59 of 1961)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-BTECH', 'GATE-BTECH-LEVELS']
  },
  {
    id: 'SRC-NITSER-ACT-2007',
    name: 'NITSER Act, 2007',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'National Institutes of Technology, Science Education and Research Act, 2007',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-BTECH', 'GATE-BTECH-LEVELS']
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
    relatedNodeIds: ['COMBO-BTECH-CFA', 'GATE-CFA-LEVELS']
  },
  {
    id: 'SRC-NMC-ACT-2019',
    name: 'National Medical Commission Act, 2019',
    officialUrl: 'https://www.nmc.org.in',
    documentTitle: 'The National Medical Commission Act, 2019 (Act No. 30 of 2019)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-MBBS', 'GATE-MBBS-LEVELS']
  },
  {
    id: 'SRC-AIIMS-ACT-1956',
    name: 'All India Institute of Medical Sciences Act, 1956',
    officialUrl: 'https://www.aiims.edu',
    documentTitle: 'AIIMS Act, 1956 (Act No. 25 of 1956)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-MBBS']
  },
  {
    id: 'SRC-ICAI-ACT-1949',
    name: 'The Chartered Accountants Act, 1949',
    officialUrl: 'https://www.icai.org',
    documentTitle: 'Chartered Accountants Act, 1949 (Act No. XXXVIII of 1949)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-BCOM-CA', 'GATE-CA-LEVELS']
  },
  {
    id: 'SRC-COMPANIES-ACT-2013',
    name: 'Companies Act, 2013 (Audit & Auditors)',
    officialUrl: 'https://www.mca.gov.in',
    documentTitle: 'Companies Act, 2013 Section 139-148 (Statutory Audit Powers)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-BCOM-CA']
  },
  {
    id: 'SRC-NLSIU-ACT-1986',
    name: 'National Law School of India Act, 1986',
    officialUrl: 'https://www.nls.ac.in',
    documentTitle: 'National Law School of India Act, 1986 (Karnataka Act 22 of 1986)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-LAW-5YR', 'GATE-LAW-LEVELS']
  },
  {
    id: 'SRC-BCI-ADVOCATES-ACT',
    name: 'Advocates Act, 1961 & AIBE Rules',
    officialUrl: 'https://www.barcouncilofindia.org',
    documentTitle: 'The Advocates Act, 1961 and All India Bar Examination Rules',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-LAW-5YR', 'GATE-LAW-LEVELS']
  },
  {
    id: 'SRC-IIM-ACT-2017',
    name: 'Indian Institutes of Management Act, 2017',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'The Indian Institutes of Management Act, 2017 (Act No. 33 of 2017)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['COMBO-DEGREE-MBA', 'GATE-CAT-LEVELS']
  }
];
