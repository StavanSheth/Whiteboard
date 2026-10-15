import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V3: SectionMeta[] = [
  {
    id: 'SEC-01',
    number: '01',
    title: 'Pre-Primary Foundation (Ages 3 to 6)',
    subtitle: 'Playgroup, Nursery & Kindergarten (LKG / UKG)',
    summary: 'Early childhood developmental foundation. Pure activity-based sensory learning, phonics, foundational literacy & numeracy (FLN) without formal examinations.',
    iconName: 'Sparkles',
    expectedSubsections: ['01.1 Playgroup & Nursery', '01.2 Kindergarten (LKG / UKG)'],
    expectedAuthorities: ['Anganwadis / WCD', 'Pre-School Boards']
  },
  {
    id: 'SEC-02',
    number: '02',
    title: 'Primary to 10th Standard: School Boards',
    subtitle: 'Dedicated Nodes for CBSE, ICSE, State SSC, IGCSE/IB & NIOS',
    summary: 'Classes 1–10 schooling journey with distinct board nodes highlighting curriculum orientation, examination philosophy, practical rigor, and strategic advantages.',
    iconName: 'GraduationCap',
    expectedSubsections: ['02.1 CBSE Board', '02.2 ICSE (CISCE)', '02.3 State SSC Boards', '02.4 IGCSE & IB International', '02.5 NIOS Open School', '02.6 Class 10 Milestone'],
    expectedAuthorities: ['CBSE', 'CISCE', 'State SSC Boards', 'Cambridge / IB', 'NIOS']
  },
  {
    id: 'SEC-03',
    number: '03',
    title: 'After 10th: Stream Selection (11th & 12th)',
    subtitle: 'Science (PCM & PCB), Commerce, Arts / Humanities & Polytechnic Diploma',
    summary: 'The critical branching point after Class 10: subject combinations, focus areas, and prerequisite gateways to higher education.',
    iconName: 'Layers',
    expectedSubsections: ['03.1 Science PCM', '03.2 Science PCB', '03.3 Commerce Stream', '03.4 Humanities Stream', '03.5 Polytechnic 3-Yr Diploma'],
    expectedAuthorities: ['CBSE 12th', 'State HSC', 'ISC', 'Polytechnic DTE']
  },
  {
    id: 'SEC-04',
    number: '04',
    title: 'Undergraduate (UG) Degree Groups & Specializations',
    subtitle: 'B.Tech, B.Sc, BCA, MBBS, Ayush/Dental, B.Pharm, B.Com/BBA, IPM, Law, B.Arch & B.A.',
    summary: 'Parent degree groups branching into their respective branch specializations (e.g., B.Tech into CS, ECE, Mech, Civil, EE; B.Sc into Physics, Chem, Math; MBBS into Clinical Residencies; B.Com into Finance/Analytics).',
    iconName: 'BookOpen',
    expectedSubsections: ['04.1 Engineering (B.Tech Branches)', '04.2 Pure Sciences (B.Sc Branches)', '04.3 Computing (BCA)', '04.4 Medicine & Healthcare (MBBS & Ayush)', '04.5 Pharmacy', '04.6 Commerce & Management (B.Com, BBA, IPM)', '04.7 5-Yr Law Specializations', '04.8 Architecture & Design', '04.9 Humanities (B.A. Specializations)'],
    expectedAuthorities: ['IITs / NITs', 'AIIMS', 'IIMs', 'NLUs', 'IISc / IISERs', 'PCI', 'COA']
  },
  {
    id: 'SEC-05',
    number: '05',
    title: 'Postgraduate (PG) Degrees & Specializations',
    subtitle: 'M.Tech, MCA, MD & MS Specialist Medicine, IIM MBA, LL.M, M.Sc & Ph.D.',
    summary: 'Master-level advanced specializations, clinical hospital residencies, doctoral research fellowships, and elite management degrees with timelines and entrance gates.',
    iconName: 'Award',
    expectedSubsections: ['05.1 M.Tech (GATE)', '05.2 MCA (NIMCET)', '05.3 MD & MS Specialists', '05.4 MBA / PGDM (CAT)', '05.5 LL.M. & AIBE Practice', '05.6 M.Sc & Ph.D. Research'],
    expectedAuthorities: ['IITs / GATE', 'NIMCET', 'NMC / INI-CET', 'IIMs', 'BCI', 'CSIR-UGC']
  },
  {
    id: 'SEC-06',
    number: '06',
    title: 'Professional Charters & High-Value Combinations',
    subtitle: 'CA, CFA, CS/CMA & Cross-Discipline Tracks (B.Tech+CFA, B.Com+CA, MBBS+MBA)',
    summary: 'Statutory corporate finance and audit charters alongside strategic dual-discipline tracks combining engineering, medicine, and commerce with management and finance.',
    iconName: 'GitFork',
    expectedSubsections: ['06.1 Chartered Accountancy (CA)', '06.2 CFA Charter (USA)', '06.3 CS & CMA Governance', '06.4 B.Tech + CFA', '06.5 B.Com + CA', '06.6 MBBS + MBA', '06.7 B.Tech + Law'],
    expectedAuthorities: ['ICAI', 'CFA Institute', 'ICSI', 'IIMs / AIIMS']
  }
];

export const NODES_V3: EducationNode[] = [
  // ==========================================
  // SECTION 01: PRE-PRIMARY FOUNDATION (AGES 3 TO 6)
  // ==========================================
  {
    id: 'PRE-PLAYGROUP-NURSERY',
    type: 'schoolBoard',
    title: 'Playgroup & Nursery',
    abbreviation: 'Playgroup & Nursery',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    level: 'local',
    category: 'school-education',
    summary: 'Early childhood foundation for ages 3 to 4. Focuses on motor skills, sensory observation, language imitation, and social play without any formal exams.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Pre-Primary Educational Foundation',
      examinationTimeline: 'Timeline: Age 3 to 4 (1 Year). No exams; continuous developmental observation only',
      programmesOffered: ['Playgroup (Age 3)', 'Nursery (Age 3-4)'],
      careerValue: 'Foundational preparedness for structured kindergarten routines and social habits'
    },
    sourceIds: ['SRC-NEP-2020', 'SRC-ECCE-POLICY'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PRE-KINDERGARTEN',
    type: 'schoolBoard',
    title: 'Kindergarten: Junior KG & Senior KG (LKG / UKG)',
    abbreviation: 'Junior & Senior KG',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'PRE-PLAYGROUP-NURSERY',
    level: 'local',
    category: 'school-education',
    summary: 'Pre-school preparation for ages 4 to 6. Covers alphabet phonics, basic counting, motor development, and social cooperation before Class 1.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Kindergarten Stage (LKG & UKG)',
      examinationTimeline: 'Timeline: Age 4 to 6 (2 Years: LKG at 4-5 yrs, UKG at 5-6 yrs). Term evaluations without pass/fail ranking',
      programmesOffered: ['Junior KG / LKG (Age 4-5)', 'Senior KG / UKG (Age 5-6)'],
      careerValue: 'Qualifies directly for Class 1 admission under RTE Act 2009'
    },
    sourceIds: ['SRC-NEP-2020', 'SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 02: PRIMARY TO 10TH STANDARD: SCHOOL BOARDS
  // ==========================================
  {
    id: 'BOARD-CBSE',
    type: 'schoolBoard',
    title: 'CBSE Board (Central Board of Secondary Education)',
    abbreviation: 'CBSE (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'PRE-KINDERGARTEN',
    level: 'union',
    category: 'school-education',
    summary: 'National central board following 100% NCERT textbooks. The primary national feeder for JEE, NEET, and CUET entrance exams.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'National Central Board (MoE)',
      examinationTimeline: 'Timeline: Classes 1 to 10 (10 Years, Ages 6–16). Class 10 Board Exam in Feb-March; Results in May',
      curriculumBody: 'National Council of Educational Research & Training (NCERT)',
      programmesOffered: ['Classes 1–5 (Primary)', 'Classes 6–8 (Middle)', 'Classes 9–10 (AISSE Secondary)'],
      careerValue: 'Direct alignment with national competitive exams (JEE Main/Adv, NEET, CUET, NDA) and pan-India mobility'
    },
    sourceIds: ['SRC-CBSE-BYLAWS', 'SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-ICSE',
    type: 'schoolBoard',
    title: 'ICSE Board (CISCE - Council for Indian School Certificate Examinations)',
    abbreviation: 'ICSE (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'PRE-KINDERGARTEN',
    level: 'union',
    category: 'school-education',
    summary: 'Autonomous national council recognized for English literature rigor, comprehensive syllabuses, and separate Physics, Chemistry, Biology lab work from Class 6.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'National Private School Council',
      examinationTimeline: 'Timeline: Classes 1 to 10 (10 Years, Ages 6–16). ICSE Class 10 Board Exam in late Feb-March; Results in May',
      curriculumBody: 'CISCE Detailed Research & Curriculum Division',
      programmesOffered: ['Junior School (Classes 1–5)', 'Middle School (Classes 6–8)', 'ICSE Class 10 Examination'],
      careerValue: 'Superior command of English, analytical essay writing, high practical lab foundation, overseas university admissions'
    },
    sourceIds: ['SRC-CISCE-CHARTER'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-SSC',
    type: 'schoolBoard',
    title: 'State SSC Boards (Secondary School Certificate)',
    abbreviation: 'State SSC (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'PRE-KINDERGARTEN',
    level: 'state',
    category: 'school-education',
    summary: 'State-governed boards (e.g. Maharashtra SSC, Tamil Nadu, Karnataka, UP Board) with regional language instruction and state domicile quota alignment.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Statutory State Government School Board',
      examinationTimeline: 'Timeline: Classes 1 to 10 (10 Years, Ages 6–16). Annual SSC Board Exam in March; Results in May-June',
      curriculumBody: 'State Council of Educational Research and Training (SCERT)',
      programmesOffered: ['Primary & Upper Primary (1–8)', 'Secondary SSC (9–10)'],
      careerValue: 'Foundational state domicile proof for 85% State Quota seats in medical/engineering, State CETs, and low tuition costs'
    },
    sourceIds: ['SRC-MAHA-SSC-ACT-1965'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-IGCSE-IB',
    type: 'schoolBoard',
    title: 'International Boards: Cambridge (IGCSE) & IB (PYP / MYP)',
    abbreviation: 'Cambridge & IB (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'PRE-KINDERGARTEN',
    level: 'institutional',
    category: 'school-education',
    summary: 'Global curriculum boards focusing on inquiry-based learning, independent research essays, and criterion-referenced grading without rote memorization.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'International Curriculum Board (UK / Switzerland)',
      examinationTimeline: 'Timeline: Early Years to Class 10 (Ages 3–16). Exam sessions in May and October/November series',
      curriculumBody: 'Cambridge Assessment International Education / International Baccalaureate',
      programmesOffered: ['IB Primary Years (PYP)', 'IB Middle Years (MYP)', 'Cambridge Primary & Checkpoint', 'Cambridge IGCSE (10th)'],
      careerValue: 'Direct international mobility, critical thinking portfolio, SAT/ACT readiness, global university admissions'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BOARD-NIOS',
    type: 'schoolBoard',
    title: 'NIOS Open School (National Institute of Open Schooling)',
    abbreviation: 'NIOS (Classes 1–10)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'PRE-KINDERGARTEN',
    level: 'union',
    category: 'school-education',
    summary: 'Ministry of Education open distance schooling. 100% self-paced with On-Demand Examinations (ODE) and complete freedom of subject choice.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'National Open Schooling Board (MoE)',
      examinationTimeline: 'Timeline: Self-paced distance learning. Public exams in April-May & Oct-Nov PLUS On-Demand exams year-round',
      curriculumBody: 'NIOS Academic Curriculum Department',
      programmesOffered: ['Open Basic Education (OBE)', 'Secondary Course (Class 10 Passing Certificate)'],
      careerValue: '100% legal parity with CBSE. Ideal for sports prodigies, artists, working youth, and competitive exam focus'
    },
    sourceIds: ['SRC-NIOS-RESOLUTION'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'SCH-10TH-MILESTONE',
    type: 'schoolBoard',
    title: 'Class 10 Board Certification Milestone',
    abbreviation: 'Class 10 Milestone',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    level: 'union',
    category: 'school-education',
    summary: 'The universal secondary schooling milestone. Passing Class 10 (AISSE / ICSE / SSC / IGCSE / NIOS) unlocks senior secondary streams or polytechnic engineering.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Secondary School Passing Milestone',
      examinationTimeline: 'Timeline: Concluded at Age 15–16. Marksheet awarded in May-June; Stream admissions in June-July',
      programmesOffered: ['Class 10 Passing Certificate & Marksheet'],
      careerValue: 'Universal prerequisite for 11th Stream Selection (PCM, PCB, Commerce, Arts) or 3-Year Polytechnic Diploma'
    },
    sourceIds: ['SRC-CBSE-BYLAWS', 'SRC-MAHA-SSC-ACT-1965'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 03: AFTER 10TH: STREAM SELECTION (11TH & 12TH)
  // ==========================================
  {
    id: 'STRM-PCM',
    type: 'stage',
    title: 'Science PCM (Physics, Chemistry, Maths)',
    abbreviation: '11th–12th PCM',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-10TH-MILESTONE',
    level: 'institutional',
    category: 'school-education',
    summary: 'Quantitative & technical stream. Core subjects: Physics, Chemistry, Mathematics + English + CS/PE. Mandatory feeder for engineering, computing, architecture, and defense.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Senior Secondary Technical Stream',
      prerequisiteStream: 'Class 10 Passed with Science & Mathematics',
      examinationTimeline: 'Timeline: 2 Years (Class 11 in Year 1, Class 12 Board in Feb-April of Year 2)',
      programmesOffered: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science / Informatics', 'English'],
      careerValue: 'Engineering (B.Tech), Computing (BCA), Architecture (B.Arch), Commercial Aviation, Defence NDA'
    },
    sourceIds: ['SRC-CBSE-BYLAWS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-PCB',
    type: 'stage',
    title: 'Science PCB (Physics, Chemistry, Biology)',
    abbreviation: '11th–12th PCB',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-10TH-MILESTONE',
    level: 'institutional',
    category: 'school-education',
    summary: 'Life-sciences & healthcare stream. Core subjects: Physics, Chemistry, Biology (Botany & Zoology) + English. Mandatory feeder for medicine, dental, veterinary, nursing, and pharma.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Senior Secondary Medical Stream',
      prerequisiteStream: 'Class 10 Passed with Science',
      examinationTimeline: 'Timeline: 2 Years (Class 11 in Year 1, Class 12 Board in Feb-April of Year 2 -> NEET-UG in May)',
      programmesOffered: ['Physics', 'Chemistry', 'Biology (Botany + Zoology)', 'Biotechnology / Psychology', 'English'],
      careerValue: 'Medicine (MBBS), Dental (BDS), Ayush (BAMS/BHMS), Pharmacy (B.Pharm), Allied Healthcare (BPT)'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-NEET-REGULATIONS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-COMMERCE',
    type: 'stage',
    title: 'Commerce Stream (Accounts, Business, Economics, Maths)',
    abbreviation: '11th–12th Commerce',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-10TH-MILESTONE',
    level: 'institutional',
    category: 'school-education',
    summary: 'Business & financial stream. Core subjects: Accountancy, Business Studies, Economics, Mathematics / Applied Maths. Feeder for Chartered Accountancy, banking, and management.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Senior Secondary Commerce Stream',
      prerequisiteStream: 'Class 10 Passed',
      examinationTimeline: 'Timeline: 2 Years (Class 11 in Year 1, Class 12 Board in Feb-April of Year 2 -> CA Foundation in June)',
      programmesOffered: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics / Applied Maths', 'English'],
      careerValue: 'Chartered Accountancy (CA), Investment Banking, Corporate Law, Management (IPM/BBA), FinTech'
    },
    sourceIds: ['SRC-ICAI-ACT-1949', 'SRC-CBSE-BYLAWS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-ARTS',
    type: 'stage',
    title: 'Arts & Humanities (History, Pol Sci, Economics, Psychology)',
    abbreviation: '11th–12th Humanities',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-10TH-MILESTONE',
    level: 'institutional',
    category: 'school-education',
    summary: 'Critical reasoning & public policy stream. Core subjects: Political Science, History, Economics, Psychology, Legal Studies. Feeder for 5-Year Law (NLUs), civil services, and media.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Senior Secondary Humanities Stream',
      prerequisiteStream: 'Class 10 Passed',
      examinationTimeline: 'Timeline: 2 Years (Class 11 in Year 1, Class 12 Board in Feb-April of Year 2 -> CLAT in Dec)',
      programmesOffered: ['History', 'Political Science', 'Economics', 'Psychology', 'Legal Studies', 'Sociology'],
      careerValue: 'Corporate & Litigation Law (NLUs), Public Policy, Civil Services (IAS/IPS), Journalism, Design'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-CBSE-BYLAWS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'STRM-POLYTECHNIC',
    type: 'stage',
    title: 'Polytechnic 3-Year Technical Diploma',
    abbreviation: 'Polytechnic Diploma',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SCH-10TH-MILESTONE',
    level: 'state',
    category: 'school-education',
    summary: 'Technical hands-on engineering diploma directly after Class 10. Grants AICTE Direct Second Year Engineering (Lateral Entry) into B.Tech 2nd Year without 11th/12th.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Vocational Technical Diploma (DTE)',
      prerequisiteStream: 'Class 10 Passed with Math & Science',
      examinationTimeline: 'Timeline: 3 Years (6 Semesters). Admissions in June-July; Semesters in Nov-Dec and April-May',
      programmesOffered: ['Diploma in Computer Engg', 'Mechanical', 'Electrical', 'Civil', 'Electronics'],
      careerValue: 'Direct Lateral Entry to B.Tech Year 2 (bypassing 11th/12th/JEE) or Junior Engineer (JE) jobs'
    },
    sourceIds: ['SRC-AICTE-APPROVAL-PROCESS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 04: UNDERGRADUATE (UG) DEGREE GROUPS & SPECIALIZATIONS
  // ==========================================

  // --- 4.1 Engineering Parent & Branches ---
  {
    id: 'DEG-BTECH',
    type: 'institution',
    title: 'Bachelor of Technology (B.Tech / B.E.) — Group',
    abbreviation: 'B.Tech / B.E. (4 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-PCM',
    level: 'union',
    category: 'higher-education',
    summary: '4-Year undergraduate engineering degree awarded by IITs, NITs, IIITs, BITS, and State Technical Universities via JEE Main, Advanced, or CETs.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Professional Engineering Undergraduate Degree',
      prerequisiteStream: '10+2 PCM (or 3-Year Polytechnic Diploma for Lateral Entry)',
      admissionRoute: 'JEE Advanced (IITs), JEE Main (NITs/IIITs), State CETs (State Colleges)',
      examinationTimeline: 'Timeline: 4 Years (8 Semesters). Entrance in Jan-May -> JoSAA Counselling in June-July -> Semester exams Dec & May',
      programmesOffered: ['Computer Science', 'AI & Data Science', 'Electronics & Comm (ECE)', 'Mechanical', 'Civil', 'Electrical'],
      careerValue: 'Software Engineer, Chip Designer, Automotive R&D, PSU Executive Engineer'
    },
    sourceIds: ['SRC-IIT-ACT-1961', 'SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BTECH-CS-AI',
    type: 'institution',
    title: 'B.Tech: Computer Science & Artificial Intelligence',
    abbreviation: 'B.Tech CS & AI',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BTECH',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in algorithms, machine learning, cloud systems, distributed computing, cyber security, and large language models.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Engineering Specialization Branch',
      examinationTimeline: 'Timeline: 4 Years (8 Semesters). Year 1: Foundations -> Year 2: DSA/OS -> Year 3: AI/ML/Cloud -> Year 4: Capstone/Placement',
      programmesOffered: ['B.Tech CSE', 'B.Tech Artificial Intelligence & Machine Learning', 'B.Tech Data Science'],
      careerValue: 'Software Architect, Machine Learning Engineer, Cloud Systems Lead, Quantitative Developer'
    },
    sourceIds: ['SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BTECH-ECE',
    type: 'institution',
    title: 'B.Tech: Electronics & Communication (ECE)',
    abbreviation: 'B.Tech ECE',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BTECH',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in semiconductor physics, VLSI chip design, embedded IoT, 5G telecom networks, and signal processing.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Engineering Specialization Branch',
      examinationTimeline: 'Timeline: 4 Years (8 Semesters). Lab work in VLSI design tools, microcontrollers, and communication systems',
      programmesOffered: ['B.Tech ECE', 'B.Tech VLSI & Embedded Systems'],
      careerValue: 'Chip Design Engineer (Nvidia, Qualcomm, Intel), Embedded Systems Architect, Telecom Specialist'
    },
    sourceIds: ['SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BTECH-MECH',
    type: 'institution',
    title: 'B.Tech: Mechanical & Aerospace Engineering',
    abbreviation: 'B.Tech Mechanical',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BTECH',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in thermodynamics, robotics, CAD/CAM manufacturing, automotive aerodynamics, and aerospace mechanics.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Engineering Specialization Branch',
      examinationTimeline: 'Timeline: 4 Years (8 Semesters). Heavy workshop, CAD modeling, and industrial machine training',
      programmesOffered: ['B.Tech Mechanical', 'B.Tech Aerospace', 'B.Tech Mechatronics & Robotics'],
      careerValue: 'Automotive R&D Engineer, Robotics Specialist, Aerospace Designer, PSU Executive (ISRO, DRDO, IOCL, BHEL)'
    },
    sourceIds: ['SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BTECH-CIVIL',
    type: 'institution',
    title: 'B.Tech: Civil & Smart Infrastructure Engineering',
    abbreviation: 'B.Tech Civil',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BTECH',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in structural mechanics, geotechnical foundations, highway transportation, mega urban transit, and green buildings.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Engineering Specialization Branch',
      examinationTimeline: 'Timeline: 4 Years (8 Semesters). Structural testing, surveying, and infrastructure project design',
      programmesOffered: ['B.Tech Civil Engineering', 'B.Tech Infrastructure & Urban Transit'],
      careerValue: 'Structural Engineer, Mega-project Manager (L&T, Metro Rail, NHAI), CPWD/IES Officer'
    },
    sourceIds: ['SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BTECH-EE',
    type: 'institution',
    title: 'B.Tech: Electrical & Clean Energy Engineering',
    abbreviation: 'B.Tech Electrical',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BTECH',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in power grid systems, electric vehicle (EV) battery powertrains, smart control systems, and renewable solar/wind energy.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Engineering Specialization Branch',
      examinationTimeline: 'Timeline: 4 Years (8 Semesters). High-voltage lab practicals, power simulation, and control theory',
      programmesOffered: ['B.Tech Electrical Engineering', 'B.Tech Electrical & Electronics (EEE)', 'B.Tech EV Powertrain'],
      careerValue: 'EV Powertrain Engineer (Tesla, Tata Motors), Smart Grid Architect, Renewable Energy Lead, PowerGrid PSU'
    },
    sourceIds: ['SRC-IIT-ACT-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.2 Pure Sciences Parent & Branches ---
  {
    id: 'DEG-BSC-PURE',
    type: 'institution',
    title: 'Pure Sciences: B.Sc & BS-MS Dual Degree — Group',
    abbreviation: 'B.Sc / BS-MS (3–5 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-PCM',
    level: 'union',
    category: 'higher-education',
    summary: 'Foundational scientific research degrees offered by IISc Bangalore, 7 IISERs, NISER, and Central Universities via IAT, JEE Advanced, and NEST.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Apex Scientific Research Degree',
      admissionRoute: 'IISER Aptitude Test (IAT), JEE Advanced, NEST, CUET-UG',
      examinationTimeline: 'Timeline: 3–4 Years for B.Sc (Hons); 5 Years for Integrated BS-MS Dual Degree with Year 5 dissertation',
      programmesOffered: ['Physics', 'Chemistry', 'Mathematics & Computing', 'Biological Sciences', 'Earth Sciences'],
      careerValue: 'Core scientific researcher, Data Scientist, Quantum/Nanotech specialist, direct pathway to Ph.D.'
    },
    sourceIds: ['SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BSC-PHYSICS',
    type: 'institution',
    title: 'B.Sc / BS: Physics & Quantum Technologies',
    abbreviation: 'B.Sc Physics',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BSC-PURE',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in quantum mechanics, electrodynamics, optics, solid state physics, astrophysics, and computational simulation.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Pure Science Specialization',
      examinationTimeline: 'Timeline: 3 to 4 Years (Semester exams in Dec & May; experimental lab certifications)',
      programmesOffered: ['B.Sc (Hons) Physics', 'BS in Quantum Technologies'],
      careerValue: 'Quantum Computing Researcher, ISRO/DRDO Scientist, Optics Lead, direct feeder to M.Sc/Ph.D.'
    },
    sourceIds: ['SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BSC-CHEMISTRY',
    type: 'institution',
    title: 'B.Sc / BS: Chemistry & Materials Science',
    abbreviation: 'B.Sc Chemistry',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BSC-PURE',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in organic synthesis, chemical kinetics, analytical spectroscopy, battery polymers, and nanomaterials.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Pure Science Specialization',
      examinationTimeline: 'Timeline: 3 to 4 Years (Extensive chemical synthesis and spectroscopy laboratory training)',
      programmesOffered: ['B.Sc (Hons) Chemistry', 'BS in Materials Chemistry'],
      careerValue: 'Pharmaceutical Chemist, Battery R&D Specialist, Materials Scientist at CSIR/BARC'
    },
    sourceIds: ['SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BSC-MATHS',
    type: 'institution',
    title: 'B.Sc / BS: Mathematics & Computing',
    abbreviation: 'B.Sc Maths & Computing',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BSC-PURE',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in real analysis, abstract algebra, discrete math, probability & statistics, cryptography, and numerical algorithms.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Pure Science Specialization',
      examinationTimeline: 'Timeline: 3 to 4 Years (Pure mathematical proofs and computer programming lab courses)',
      programmesOffered: ['B.Sc (Hons) Mathematics', 'BS Mathematics & Computing'],
      careerValue: 'Quantitative Financial Analyst, Cryptographer, Data Science Lead, Algorithm Designer'
    },
    sourceIds: ['SRC-NITSER-ACT-2007'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.3 Computing Applications ---
  {
    id: 'DEG-BCA',
    type: 'institution',
    title: 'Bachelor of Computer Applications (BCA)',
    abbreviation: 'BCA (3–4 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-PCM',
    level: 'state',
    category: 'higher-education',
    summary: 'Practical computing degree focusing on software development, web frameworks, SQL databases, and mobile applications. Feeds directly into 2-Year MCA.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Undergraduate Computer Science Degree',
      admissionRoute: 'CUET-UG / University Entrance / 12th Merit',
      examinationTimeline: 'Timeline: 3 Years (6 Semesters) or 4 Years NEP Honours. Semester exams in Dec & May',
      programmesOffered: ['BCA General', 'BCA with Cloud Computing & DevOps', 'BCA with Full-Stack Web Development'],
      careerValue: 'Full-Stack Developer, Software Engineer, Database Administrator; direct eligibility for MCA'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.4 Medicine & Healthcare Parent & Branches ---
  {
    id: 'DEG-MBBS',
    type: 'institution',
    title: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    abbreviation: 'MBBS (5.5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-PCB',
    level: 'union',
    category: 'higher-education',
    summary: 'Primary medical qualification in India. 4.5 years academic hospital coursework + 1 year compulsory rotatory paid clinical internship.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Primary Professional Medical Degree (NMC)',
      admissionRoute: 'NEET-UG (All India Rank allocated via MCC & State DTEs)',
      examinationTimeline: 'Timeline: 5.5 Years. 1st Prof (Year 1) -> 2nd Prof (Year 2.5) -> 3rd Prof P1/P2 (Year 4.5) -> 1-Year Paid Internship',
      programmesOffered: ['MBBS (Bachelor of Medicine & Bachelor of Surgery)'],
      careerValue: 'Registered Medical Practitioner (RMP), Medical Officer, mandatory prerequisite for MD/MS/DNB'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-AIIMS-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'DEG-AYUSH-DENTAL',
    type: 'institution',
    title: 'Dental & Ayush Clinical Healthcare — Group',
    abbreviation: 'Dental & Ayush (4.5–5.5 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-PCB',
    level: 'union',
    category: 'higher-education',
    summary: 'Clinical healthcare degrees: Bachelor of Dental Surgery (BDS), Ayurveda (BAMS), Homeopathy (BHMS), and Physiotherapy (BPT) via NEET-UG.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Professional Dental & Traditional Medical Degrees',
      admissionRoute: 'NEET-UG All India Rank & Ayush Central/State Counselling',
      examinationTimeline: 'Timeline: 4.5 to 5.5 Years (including 1-Year compulsory clinical hospital internship)',
      programmesOffered: ['BDS (Dentistry)', 'BAMS (Ayurveda)', 'BHMS (Homeopathy)', 'BPT (Physiotherapy)'],
      careerValue: 'Independent clinical practice as Dental Surgeon, Ayurvedic Medical Officer, or Licensed Physiotherapist'
    },
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'CLINIC-BDS',
    type: 'institution',
    title: 'BDS: Bachelor of Dental Surgery',
    abbreviation: 'BDS (5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-AYUSH-DENTAL',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Specialized clinical degree in oral maxillofacial surgery, orthodontics, periodontics, and prosthodontics governed by Dental Council of India.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Professional Dental Degree (DCI)',
      examinationTimeline: 'Timeline: 5 Years (4 Years academic + 1 Year clinical dental chairside internship)',
      programmesOffered: ['BDS (Bachelor of Dental Surgery)'],
      careerValue: 'Licensed Dental Surgeon, Oral Healthcare Clinic Owner; feeder to MDS Specialization'
    },
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'CLINIC-BAMS',
    type: 'institution',
    title: 'BAMS: Bachelor of Ayurvedic Medicine & Surgery',
    abbreviation: 'BAMS (5.5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-AYUSH-DENTAL',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Traditional Indian clinical medicine combining classical Ayurvedic pharmacology and Panchakarma with modern anatomy, physiology, and pathology.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Ayurvedic Medical Degree (NCISM)',
      examinationTimeline: 'Timeline: 5.5 Years (4.5 Years coursework + 1 Year hospital rotatory internship)',
      programmesOffered: ['BAMS (Bachelor of Ayurvedic Medicine & Surgery)'],
      careerValue: 'Registered Ayurvedic Medical Officer, Panchakarma Specialist, Ayush Wellness Hospital Doctor'
    },
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'CLINIC-BHMS',
    type: 'institution',
    title: 'BHMS: Bachelor of Homeopathic Medicine & Surgery',
    abbreviation: 'BHMS (5.5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-AYUSH-DENTAL',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Clinical degree in homeopathic therapeutics, repertory, and materia medica combined with modern clinical medicine and surgery basics.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Homeopathic Medical Degree (NCH)',
      examinationTimeline: 'Timeline: 5.5 Years (4.5 Years coursework + 1 Year hospital rotatory internship)',
      programmesOffered: ['BHMS (Bachelor of Homeopathic Medicine & Surgery)'],
      careerValue: 'Registered Homeopathic Practitioner, Clinical Consultant, Ayush Research Scientist'
    },
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'CLINIC-BPT',
    type: 'institution',
    title: 'BPT: Bachelor of Physiotherapy',
    abbreviation: 'BPT (4.5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-AYUSH-DENTAL',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Allied clinical healthcare degree in physical rehabilitation, biomechanics, neuro-rehabilitation, cardiorespiratory physiotherapy, and sports medicine.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Allied Health Sciences Degree',
      examinationTimeline: 'Timeline: 4.5 Years (4 Years academic study + 6 Months clinical hospital internship)',
      programmesOffered: ['BPT (Bachelor of Physiotherapy)'],
      careerValue: 'Sports Physiotherapist (IPL, National Teams), ICU Neuro-Rehabilitation Lead, Orthopedic Clinic Partner'
    },
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.5 Pharmaceutical Sciences ---
  {
    id: 'DEG-BPHARM',
    type: 'institution',
    title: 'Pharmaceutical Sciences: B.Pharm & Pharm.D — Group',
    abbreviation: 'Pharmacy (4–6 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-PCB',
    level: 'union',
    category: 'higher-education',
    summary: 'Degree programs in drug synthesis, clinical pharmacy, pharmacology, and drug formulation governed by Pharmacy Council of India (PCI).',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Professional Pharmaceutical Sciences Degree (PCI)',
      admissionRoute: 'State CETs (MHT-CET, KCET), NEET-UG, University Entrance',
      examinationTimeline: 'Timeline: 4 Years for B.Pharm (8 Semesters); 6 Years for Pharm.D (5 Yrs academic + 1 Yr residency)',
      programmesOffered: ['B.Pharm (Bachelor of Pharmacy)', 'Pharm.D (Doctor of Pharmacy)'],
      careerValue: 'Registered Pharmacist, Drug Formulation Scientist, Quality Assurance Lead, Clinical Trials Director'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.6 Commerce & Management Parent & Branches ---
  {
    id: 'DEG-BCOM-BBA',
    type: 'institution',
    title: 'Commerce & Management: B.Com & BBA — Group',
    abbreviation: 'B.Com & BBA (3–4 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-COMMERCE',
    level: 'state',
    category: 'higher-education',
    summary: 'Fundamental business degrees in financial accounting, marketing, organizational strategy, and corporate taxation. Often pursued alongside CA or CFA.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Undergraduate Commerce & Management Degree',
      admissionRoute: 'CUET-UG (Central Universities) / University Merit Cutoffs',
      examinationTimeline: 'Timeline: 3 Years (6 Semesters) or 4 Years NEP Honours with Research. Semester exams in Dec & May',
      programmesOffered: ['B.Com (Hons)', 'BBA (Bachelor of Business Administration)', 'B.Com Accounting & Finance'],
      careerValue: 'Financial Analyst, Corporate Accountant, Tax Associate, Investment Banking Operations'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BCOM-FINANCE',
    type: 'institution',
    title: 'B.Com: Accounting & Corporate Finance',
    abbreviation: 'B.Com Finance',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BCOM-BBA',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in corporate accounting, Indian Accounting Standards (Ind AS), IFRS, direct & indirect tax law, and financial reporting.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Commerce Specialization Branch',
      examinationTimeline: 'Timeline: 3 to 4 Years (Semester exams in Dec & May; audit internships)',
      programmesOffered: ['B.Com Accounting & Finance', 'B.Com Banking & Insurance'],
      careerValue: 'Audit Associate at Big 4 accounting firms, Corporate Tax Consultant, Financial Reporting Lead'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BBA-MARKETING',
    type: 'institution',
    title: 'BBA: Marketing & Strategic Management',
    abbreviation: 'BBA Marketing',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BCOM-BBA',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Branch specialization in consumer behavior, digital growth marketing, brand management, operations logistics, and organizational behavior.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Management Specialization Branch',
      examinationTimeline: 'Timeline: 3 to 4 Years (Case study presentations and corporate summer internships)',
      programmesOffered: ['BBA in Marketing', 'BBA in International Business'],
      careerValue: 'Brand Manager, Digital Growth Lead, Sales Strategy Associate, feeder to IIM MBA'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'BBA-FINTECH',
    type: 'institution',
    title: 'BBA: FinTech & Business Analytics',
    abbreviation: 'BBA FinTech & Analytics',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-BCOM-BBA',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Modern branch specialization blending financial modeling with SQL, Python analytics, business intelligence dashboards, and digital payments.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Management Specialization Branch',
      examinationTimeline: 'Timeline: 3 to 4 Years (Practical analytics labs, Tableau/PowerBI, financial modeling)',
      programmesOffered: ['BBA Business Analytics', 'BBA FinTech & Digital Banking'],
      careerValue: 'Business Intelligence Analyst, FinTech Product Associate, Quantitative Risk Analyst'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'DEG-IPM',
    type: 'institution',
    title: '5-Year Integrated Management: IPM at IIMs',
    abbreviation: 'IPM at IIMs (5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'Dual degree programme (BBA + MBA) offered directly after Class 12 by IIM Indore, Rohtak, Ranchi, Jammu, and Bodh Gaya via IPMAT. Bypasses the CAT exam completely!',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Elite Integrated Management Degree (IIMs)',
      admissionRoute: 'IPMAT (IIM Indore/Rohtak) / JIPMAT exam in May -> Personal Interview in June',
      examinationTimeline: 'Timeline: 5 Years (3 Years foundational BBA + 2 Years regular IIM MBA/PGP). Trimester system',
      programmesOffered: ['5-Year Integrated Programme in Management (BBA + MBA Dual Degree)'],
      careerValue: 'Direct entry into IIM final MBA placements alongside CAT qualifiers at age 22–23; average ₹25–30 LPA'
    },
    sourceIds: ['SRC-IIM-ACT-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.7 Law Parent & Branches ---
  {
    id: 'DEG-LAW-5YR',
    type: 'institution',
    title: '5-Year Integrated Law at NLUs — Group',
    abbreviation: '5-Year Law (5 Years)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-ARTS',
    level: 'state',
    category: 'higher-education',
    summary: '5-Year integrated legal degree (B.A. LL.B / B.B.A. LL.B Hons) offered by 24 National Law Universities (NLSIU, NALSAR, WBNUJS) via CLAT-UG.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Integrated Professional Legal Degree (BCI)',
      admissionRoute: 'Common Law Admission Test (CLAT-UG in December) / AILET (NLU Delhi)',
      examinationTimeline: 'Timeline: 5 Years (10 Semesters). Mandatory moot courts, legal aid clinics, and judicial/law firm internships',
      programmesOffered: ['B.A. LL.B. (Hons)', 'B.B.A. LL.B. (Hons)', 'B.Sc. LL.B. (Hons)'],
      careerValue: 'Corporate Law Associate (Big 6 Law Firms), Litigating Advocate, Judicial Magistrate, In-House Counsel'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'LAW-CORP',
    type: 'institution',
    title: 'Law: Corporate, M&A & Private Equity',
    abbreviation: 'Corporate Law',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-LAW-5YR',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Specialization in corporate mergers & acquisitions, venture capital funding, competition law, SEBI securities regulations, and banking insolvency.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Legal Specialization Track',
      examinationTimeline: 'Timeline: Embedded across Years 3–5 of LL.B. with law firm internship cycles in winter & summer',
      programmesOffered: ['Corporate & Commercial Law', 'Securities & Competition Law'],
      careerValue: 'Associate at Tier-1 Law Firms (AZB, Cyril Amarchand, Shardul Amarchand, Khaitan), In-House General Counsel'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'LAW-LITIGATION',
    type: 'institution',
    title: 'Law: Constitutional & Criminal Litigation',
    abbreviation: 'Litigation & Disputes',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-LAW-5YR',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Specialization in constitutional writ petitions, criminal defense, civil dispute resolution, commercial arbitration, and evidence law.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Legal Specialization Track',
      examinationTimeline: 'Timeline: 5-Year LL.B. followed by State Bar Council enrollment and All India Bar Examination (AIBE)',
      programmesOffered: ['Constitutional Litigation', 'Criminal Defense & Evidence', 'Commercial Arbitration'],
      careerValue: 'Litigating Advocate in High Courts and Supreme Court of India, Public Prosecutor, Judicial Magistrate'
    },
    sourceIds: ['SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'LAW-IPR-CYBER',
    type: 'institution',
    title: 'Law: Intellectual Property, Cyber & AI Governance',
    abbreviation: 'IPR & Cyber Law',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'DEG-LAW-5YR',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Specialization in technology patent litigation, AI regulatory compliance, trademark licensing, data privacy (DPDP Act), and cybercrime forensics.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Legal Specialization Track',
      examinationTimeline: 'Timeline: Embedded in LL.B. years 4–5; Patent Agent Exam post-graduation',
      programmesOffered: ['Intellectual Property Rights (IPR)', 'Cyber Law & Data Privacy'],
      careerValue: 'Technology Patent Attorney, AI Policy Counsel, Big Tech Privacy Officer, Cyber Litigation Specialist'
    },
    sourceIds: ['SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.8 Architecture & Design Parent & Branches ---
  {
    id: 'DEG-BARCH',
    type: 'institution',
    title: 'Architecture & Design: B.Arch & B.Des — Group',
    abbreviation: 'B.Arch & B.Des (4–5 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-PCM',
    level: 'union',
    category: 'higher-education',
    summary: '5-Year Bachelor of Architecture (B.Arch, Council of Architecture approved) and 4-Year Bachelor of Design (B.Des at NID, NIFT, IIT IDC).',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Professional Architecture & Design Degrees',
      admissionRoute: 'NATA (for B.Arch), JEE Main Paper 2, UCEED, NID DAT (for B.Des)',
      examinationTimeline: 'Timeline: 5 Years for B.Arch (10 Semesters + 1-Yr apprenticeship); 4 Years for B.Des (8 Semesters)',
      programmesOffered: ['B.Arch (Architecture)', 'B.Des (Product Design, UI/UX, Communication Design)'],
      careerValue: 'Licensed Council of Architecture Architect, UI/UX Design Lead, Industrial Product Designer'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // --- 4.9 Arts & Humanities Parent & Branches ---
  {
    id: 'DEG-BA-HUMANITIES',
    type: 'institution',
    title: 'Humanities & Social Sciences: B.A. (Hons) — Group',
    abbreviation: 'B.A. (Hons) (3–4 Yrs)',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'STRM-ARTS',
    level: 'state',
    category: 'higher-education',
    summary: '3 to 4-Year undergraduate liberal arts degrees in political science, economics, psychology, and history. Premier feeder for civil services and international policy.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Liberal Arts & Social Sciences Degree',
      admissionRoute: 'CUET-UG (Central Universities like DU, JNU, BHU) / University Merit',
      examinationTimeline: 'Timeline: 3 Years (6 Semesters) or 4 Years NEP Honours with Research dissertation',
      programmesOffered: ['B.A. Political Science', 'B.A. Economics', 'B.A. Psychology', 'B.A. History'],
      careerValue: 'UPSC Civil Services Examination (IAS/IPS/IFS), Policy Think Tanks, Economic Advisory, International Relations'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 05: POSTGRADUATE (PG) DEGREES & SPECIALIZATIONS
  // ==========================================
  {
    id: 'PG-MTECH',
    type: 'institution',
    title: 'Master of Technology (M.Tech / M.E.)',
    abbreviation: 'M.Tech (2 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'DEG-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: '2-Year technical master degree for advanced R&D, VLSI chip design, robotics, and PSU executive recruitment (ONGC, IOCL, NTPC) via GATE.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Postgraduate Engineering Specialization',
      admissionRoute: 'GATE (Graduate Aptitude Test in Engineering in February) via COAP (IITs) & CCMT (NITs)',
      examinationTimeline: 'Timeline: 2 Years (4 Semesters: 2 semesters coursework + 2 semesters master thesis research)',
      programmesOffered: ['M.Tech in VLSI Design', 'AI & Robotics', 'Thermal & Aerospace Engg', 'Structural Dynamics'],
      careerValue: 'Senior R&D Scientist at ISRO/DRDO, Semiconductor Architect, Grade-A PSU Executive Engineer'
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
    parentId: 'DEG-BCA',
    level: 'union',
    category: 'higher-education',
    summary: '2-Year master degree in advanced software engineering, cloud architecture, and algorithms. Gives BCA/B.Sc graduates 100% equivalence with B.Tech CSE.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Postgraduate Computer Applications Degree (AICTE)',
      admissionRoute: 'NIMCET (for National Institutes of Technology), State MCA CETs, CUET-PG',
      examinationTimeline: 'Timeline: 2 Years (4 Semesters). NIMCET in June; Semester exams in Dec and May',
      programmesOffered: ['MCA in Cloud & Distributed Systems', 'Enterprise Software Architecture', 'Cybersecurity'],
      careerValue: 'Senior Software Architect, Engineering Manager, Cloud Solutions Specialist; equal to B.Tech CSE'
    },
    sourceIds: ['SRC-AICTE-APPROVAL-PROCESS'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MD-MEDICINE',
    type: 'institution',
    title: 'MD: Doctor of Medicine (Non-Surgical Specialist)',
    abbreviation: 'MD Specialist (3 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'DEG-MBBS',
    level: 'union',
    category: 'higher-education',
    summary: '3-Year clinical postgraduate residency in non-surgical specializations: General Medicine, Cardiology, Pediatrics, Radiology, Dermatology via NEET-PG / INI-CET.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Postgraduate Clinical Specialist Qualification (NMC)',
      admissionRoute: 'NEET-PG All India Rank / INI-CET conducted by AIIMS New Delhi',
      examinationTimeline: 'Timeline: 3 Years of intensive clinical hospital residency duty + dissertation. Exit exam in Year 3',
      programmesOffered: ['MD General Medicine', 'MD Pediatrics', 'MD Radiodiagnosis', 'MD Dermatology'],
      careerValue: 'Consultant Specialist Physician, ICU Intensivist, Head of Clinical Department; feeder to DM Super-Specialty'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-AIIMS-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MS-SURGERY',
    type: 'institution',
    title: 'MS: Master of Surgery (Surgical Specialist)',
    abbreviation: 'MS Specialist (3 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'DEG-MBBS',
    level: 'union',
    category: 'higher-education',
    summary: '3-Year surgical postgraduate residency in General Surgery, Orthopedics, Neurosurgery, Ophthalmology, ENT, and OB-GYN via NEET-PG / INI-CET.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Postgraduate Surgical Specialist Qualification (NMC)',
      admissionRoute: 'NEET-PG All India Rank / INI-CET conducted by AIIMS New Delhi',
      examinationTimeline: 'Timeline: 3 Years of operating room surgical training, emergency trauma duty + thesis dissertation',
      programmesOffered: ['MS General Surgery', 'MS Orthopedics', 'MS Ophthalmology', 'MS Obstetrics & Gynecology'],
      careerValue: 'Consultant Specialist Surgeon, Chief of Surgery, Trauma Director; feeder to M.Ch Super-Specialty'
    },
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-AIIMS-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MBA',
    type: 'institution',
    title: 'IIM MBA / PGDM: Master of Business Administration',
    abbreviation: 'IIM MBA (2 Years)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'DEG-BCOM-BBA',
    level: 'union',
    category: 'higher-education',
    summary: '2-Year corporate leadership degree offered by 21 IIMs, XLRI, FMS, and ISB. India’s highest corporate career accelerator across strategy, finance, and product management.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Postgraduate Management Degree (IIMs)',
      admissionRoute: 'CAT (Last Sunday of Nov) / XAT (Jan) / GMAT -> WAT & Personal Interview',
      examinationTimeline: 'Timeline: 2 Years (6 Trimesters) with compulsory 8-week corporate summer internship in Year 1',
      programmesOffered: ['2-Year Full-Time MBA / Post Graduate Programme in Management (PGP)'],
      careerValue: 'Management Consultant (McKinsey, BCG, Bain), Investment Banking Associate, Product Manager, CXO Track'
    },
    sourceIds: ['SRC-IIM-ACT-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-LLM',
    type: 'institution',
    title: 'Master of Laws (LL.M.) & AIBE Court Practice',
    abbreviation: 'LL.M. & AIBE (1–2 Yrs)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'DEG-LAW-5YR',
    level: 'union',
    category: 'higher-education',
    summary: 'Master of Laws (1-Year intensive at NLUs / 2-Year) combined with the All India Bar Examination (AIBE) required for statutory court litigation practice.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Postgraduate Legal Specialization & Court Licensure',
      admissionRoute: 'CLAT-PG for LL.M. & All India Bar Examination (AIBE) by Bar Council of India',
      examinationTimeline: 'Timeline: 1 Year (at NLUs) or 2 Years (General). AIBE exam taken within 2 years of LL.B. graduation',
      programmesOffered: ['LL.M. in Corporate Law', 'Constitutional Law', 'Intellectual Property', 'AIBE Certificate of Practice'],
      careerValue: 'Supreme Court & High Court Litigating Advocate (Permanent COP), Judicial Magistrate (Civil Judge), Law Professor'
    },
    sourceIds: ['SRC-NLSIU-ACT-1986', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PG-MSC-PHD',
    type: 'institution',
    title: 'Pure Sciences: M.Sc & Doctor of Philosophy (Ph.D.)',
    abbreviation: 'M.Sc & Ph.D. (2–5 Yrs)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'DEG-BSC-PURE',
    level: 'union',
    category: 'higher-education',
    summary: 'Postgraduate science and doctoral research degrees. M.Sc (2 Years via IIT JAM) leads into Ph.D. funded by CSIR-UGC Junior Research Fellowship (JRF).',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Advanced Scientific Research & Doctoral Degree',
      admissionRoute: 'IIT JAM (for M.Sc in IITs) | CSIR-UGC NET JRF / GATE (for Ph.D. with ₹37,000–₹42,000/mo fellowship)',
      examinationTimeline: 'Timeline: 2 Years M.Sc + 3 to 5 Years Ph.D. dissertation defense',
      programmesOffered: ['M.Sc in Physics, Chemistry, Math', 'Ph.D. Doctoral Research in DeepTech/Biotech'],
      careerValue: 'Principal Scientist at ISRO/DRDO/BARC, Tenured University Professor, DeepTech Biotech Founder'
    },
    sourceIds: ['SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },

  // ==========================================
  // SECTION 06: PROFESSIONAL CHARTERS & HIGH-VALUE COMBINATIONS
  // ==========================================
  {
    id: 'PROF-CA',
    type: 'institution',
    title: 'Chartered Accountancy (CA) — ICAI',
    abbreviation: 'Chartered Accountant (CA)',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'India’s highest statutory accounting qualification governed by ICAI. Sole profession authorized under Companies Act 2013 to perform statutory company audit and sign balance sheets.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Statutory Professional Accounting Charter (ICAI)',
      admissionRoute: 'Direct registration after 12th via Foundation, or after Graduation via Direct Entry Scheme',
      examinationTimeline: 'Timeline: 3.5 to 4.5 Years. CA Foundation (June/Dec) -> CA Intermediate (May/Nov) -> 2 Years Practical Articleship -> CA Final (May/Nov)',
      programmesOffered: ['CA Foundation', 'CA Intermediate', '2-Year Mandatory Articleship', 'CA Final'],
      careerValue: 'Statutory Auditor, Tax Consultant, Chief Financial Officer (CFO), Partner at Big 4 accounting firms'
    },
    sourceIds: ['SRC-ICAI-ACT-1949', 'SRC-COMPANIES-ACT-2013'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'PROF-CFA',
    type: 'institution',
    title: 'Chartered Financial Analyst (CFA) — USA',
    abbreviation: 'CFA Charter (USA)',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'The gold standard global investment charter administered by the CFA Institute (USA). Consists of 3 computer-based exam levels covering asset valuation and portfolio management.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Global Professional Investment Charter',
      admissionRoute: 'Registration via CFA Institute portal; eligible in final year of bachelor’s degree',
      examinationTimeline: 'Timeline: 2.5 to 4 Years. Level 1 (4x/yr) -> Level 2 (3x/yr) -> Level 3 (2x/yr) + 4,000 hrs work experience',
      programmesOffered: ['CFA Level I', 'CFA Level II', 'CFA Level III', 'CFA Charterholder Designation'],
      careerValue: 'Portfolio Manager, Hedge Fund Analyst, Equity Research Associate, High-Frequency Quant Trader'
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
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'STRM-COMMERCE',
    level: 'union',
    category: 'higher-education',
    summary: 'Statutory corporate professions: Company Secretary (governed by ICSI for corporate governance & board compliance) and Cost Accountant (ICMAI for cost audit & pricing).',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Statutory Governance & Cost Management Charters',
      admissionRoute: 'Direct registration after 12th or Graduation via entrance test',
      examinationTimeline: 'Timeline: 3 to 4 Years (Foundation/CSEET -> Intermediate/Executive -> Practical Training -> Final/Professional)',
      programmesOffered: ['Company Secretary (ACS/FCS)', 'Cost & Management Accountant (ACMA/FCMA)'],
      careerValue: 'Chief Governance Officer, Board Secretary, Corporate Compliance Head, Statutory Cost Auditor'
    },
    sourceIds: ['SRC-COMPANIES-ACT-2013'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'COMBO-BTECH-CFA',
    type: 'institution',
    title: 'Combo: B.Tech + CFA (FinTech & Quantitative Finance)',
    abbreviation: 'B.Tech + CFA',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'DEG-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: 'High-earning cross-discipline combination: 4-Year B.Tech (CS / Math & Computing) paired with CFA global charter. Opens doors to Quantitative Trading, Algorithmic Finance, and FinTech architecture.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Dual Skill Pathway (Tech + Investment Finance)',
      prerequisiteStream: '10+2 PCM -> B.Tech Degree',
      examinationTimeline: 'Timeline: 4-Year B.Tech + CFA Level 1 in Year 4, Level 2 & 3 in first 2 years of corporate work',
      programmesOffered: ['B.Tech in Computer Science / Math & Computing + CFA Charter (Levels I, II, III)'],
      careerValue: 'Quantitative Trader, Algorithmic Fund Manager, FinTech Lead Architect, Risk Engine Developer'
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
    parentId: 'DEG-BCOM-BBA',
    level: 'union',
    category: 'higher-education',
    summary: 'Classic Indian financial power combination: 3-Year B.Com pursued concurrently with ICAI Chartered Accountancy (Foundation, Intermediate, 2-Year Articleship, and Final).',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Statutory Accounting & Academic Degree Combo',
      examinationTimeline: 'Timeline: CA Foundation (June/Dec of 12th) -> B.Com + Inter (Years 1-2) -> 2-Yr Articleship (Years 2-4) -> CA Final',
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
    parentId: 'DEG-MBBS',
    level: 'union',
    category: 'higher-education',
    summary: 'Elite clinical-management combination: 5.5-Year MBBS followed by a 2-Year MBA at an IIM or ISB. Feeder for hospital CEO suites, healthcare venture capital, and digital health unicorn founders.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Healthcare Leadership & Clinical Operations Combo',
      examinationTimeline: 'Timeline: 5.5-Year MBBS -> CAT Exam -> 2-Year Full-Time IIM MBA',
      programmesOffered: ['MBBS + MBA in Healthcare / Hospital Administration / General Management'],
      careerValue: 'Hospital Chief Executive Officer (CEO), HealthTech Co-Founder, Healthcare Venture Capital Partner'
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
    parentId: 'DEG-BTECH',
    level: 'union',
    category: 'higher-education',
    summary: 'Techno-legal combination: 4-Year B.Tech followed by a 3-Year LL.B. Qualifies directly for Registered Patent Agent examinations and high-value international technology patent litigation.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Specialized Technology & Intellectual Property Law Combo',
      examinationTimeline: 'Timeline: 4-Year B.Tech -> 3-Year LL.B. Entrance (DU/CUET-PG) -> Patent Agent Exam & AIBE Practice License',
      programmesOffered: ['B.Tech + LL.B. (Hons in Intellectual Property Law)'],
      careerValue: 'Technology Patent Attorney, AI Regulatory Counsel, Cyber Law Specialist, Big Tech In-house Counsel'
    },
    sourceIds: ['SRC-IIT-ACT-1961', 'SRC-BCI-ADVOCATES-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-15'
  }
];

export const RELATIONSHIPS_V3: RelationshipEdgeData[] = [
  // Section 01: Pre-Primary progression
  {
    id: 'REL-V3-001',
    sourceNodeId: 'PRE-PLAYGROUP-NURSERY',
    targetNodeId: 'PRE-KINDERGARTEN',
    type: 'FEEDS',
    label: 'Playgroup & Nursery feeds into Junior/Senior KG (Ages 4–6)',
    verificationStatus: 'verified'
  },

  // Kindergarten branches into the 5 School Boards
  {
    id: 'REL-V3-002',
    sourceNodeId: 'PRE-KINDERGARTEN',
    targetNodeId: 'BOARD-CBSE',
    type: 'FEEDS',
    label: 'Enters CBSE Board (Classes 1–10, NCERT national focus)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-003',
    sourceNodeId: 'PRE-KINDERGARTEN',
    targetNodeId: 'BOARD-ICSE',
    type: 'FEEDS',
    label: 'Enters ICSE Board (Classes 1–10, English & lab science depth)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-004',
    sourceNodeId: 'PRE-KINDERGARTEN',
    targetNodeId: 'BOARD-SSC',
    type: 'FEEDS',
    label: 'Enters State SSC Board (Classes 1–10, Regional language & 85% state quota)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-005',
    sourceNodeId: 'PRE-KINDERGARTEN',
    targetNodeId: 'BOARD-IGCSE-IB',
    type: 'FEEDS',
    label: 'Enters Cambridge / IB (Classes 1–10, Inquiry & international mobility)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-006',
    sourceNodeId: 'PRE-KINDERGARTEN',
    targetNodeId: 'BOARD-NIOS',
    type: 'FEEDS',
    label: 'Enters NIOS Open School (Flexible distance learning & On-Demand Exams)',
    verificationStatus: 'verified'
  },

  // All 5 Boards lead to the universal Class 10 Milestone
  {
    id: 'REL-V3-007',
    sourceNodeId: 'BOARD-CBSE',
    targetNodeId: 'SCH-10TH-MILESTONE',
    type: 'FEEDS',
    label: 'Completes Class 10 AISSE Board Exam',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-008',
    sourceNodeId: 'BOARD-ICSE',
    targetNodeId: 'SCH-10TH-MILESTONE',
    type: 'FEEDS',
    label: 'Completes Class 10 ICSE Board Exam',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-009',
    sourceNodeId: 'BOARD-SSC',
    targetNodeId: 'SCH-10TH-MILESTONE',
    type: 'FEEDS',
    label: 'Completes Class 10 State SSC Board Exam',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-010',
    sourceNodeId: 'BOARD-IGCSE-IB',
    targetNodeId: 'SCH-10TH-MILESTONE',
    type: 'FEEDS',
    label: 'Completes Cambridge IGCSE / IB MYP Exam',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-011',
    sourceNodeId: 'BOARD-NIOS',
    targetNodeId: 'SCH-10TH-MILESTONE',
    type: 'FEEDS',
    label: 'Completes NIOS Secondary Board Exam',
    verificationStatus: 'verified'
  },

  // Class 10 Milestone branches into Streams
  {
    id: 'REL-V3-012',
    sourceNodeId: 'SCH-10TH-MILESTONE',
    targetNodeId: 'STRM-PCM',
    type: 'FEEDS',
    label: 'Chooses Science PCM Stream (Engineering & Quant)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-013',
    sourceNodeId: 'SCH-10TH-MILESTONE',
    targetNodeId: 'STRM-PCB',
    type: 'FEEDS',
    label: 'Chooses Science PCB Stream (Medical & Life Sciences)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-014',
    sourceNodeId: 'SCH-10TH-MILESTONE',
    targetNodeId: 'STRM-COMMERCE',
    type: 'FEEDS',
    label: 'Chooses Commerce Stream (Finance & Business)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-015',
    sourceNodeId: 'SCH-10TH-MILESTONE',
    targetNodeId: 'STRM-ARTS',
    type: 'FEEDS',
    label: 'Chooses Arts / Humanities Stream (Law, Policy, Civil Services)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-016',
    sourceNodeId: 'SCH-10TH-MILESTONE',
    targetNodeId: 'STRM-POLYTECHNIC',
    type: 'FEEDS',
    label: 'Chooses 3-Year Technical Polytechnic Diploma',
    verificationStatus: 'verified'
  },

  // Polytechnic Lateral Entry into B.Tech
  {
    id: 'REL-V3-017',
    sourceNodeId: 'STRM-POLYTECHNIC',
    targetNodeId: 'DEG-BTECH',
    type: 'FEEDS',
    label: 'Polytechnic grants Direct Lateral Entry to 2nd Year B.Tech (bypassing 11th/12th/JEE)',
    verificationStatus: 'verified'
  },

  // Science PCM leads to Parent Degree Groups
  {
    id: 'REL-V3-018',
    sourceNodeId: 'STRM-PCM',
    targetNodeId: 'DEG-BTECH',
    type: 'FEEDS',
    label: 'PCM qualifies for 4-Year B.Tech / B.E. via JEE Main & Advanced',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-019',
    sourceNodeId: 'STRM-PCM',
    targetNodeId: 'DEG-BSC-PURE',
    type: 'FEEDS',
    label: 'PCM qualifies for B.Sc & BS-MS Pure Science & Research at IISc/IISERs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-020',
    sourceNodeId: 'STRM-PCM',
    targetNodeId: 'DEG-BCA',
    type: 'FEEDS',
    label: 'PCM qualifies for 3-Year Bachelor of Computer Applications (BCA)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-021',
    sourceNodeId: 'STRM-PCM',
    targetNodeId: 'DEG-BARCH',
    type: 'FEEDS',
    label: 'PCM qualifies for 5-Year B.Arch & B.Des via NATA / UCEED',
    verificationStatus: 'verified'
  },

  // B.Tech branches into its engineering specializations
  {
    id: 'REL-V3-022',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'BTECH-CS-AI',
    type: 'COORDINATES',
    label: 'Specializes in Computer Science & Artificial Intelligence',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-023',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'BTECH-ECE',
    type: 'COORDINATES',
    label: 'Specializes in Electronics & Communication (VLSI, Embedded, 5G)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-024',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'BTECH-MECH',
    type: 'COORDINATES',
    label: 'Specializes in Mechanical, Robotics & Aerospace Engineering',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-025',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'BTECH-CIVIL',
    type: 'COORDINATES',
    label: 'Specializes in Civil & Smart Infrastructure Engineering',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-026',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'BTECH-EE',
    type: 'COORDINATES',
    label: 'Specializes in Electrical, EV Powertrain & Clean Energy',
    verificationStatus: 'verified'
  },

  // Pure Science branches into specializations
  {
    id: 'REL-V3-027',
    sourceNodeId: 'DEG-BSC-PURE',
    targetNodeId: 'BSC-PHYSICS',
    type: 'COORDINATES',
    label: 'Specializes in Physics & Quantum Technologies',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-028',
    sourceNodeId: 'DEG-BSC-PURE',
    targetNodeId: 'BSC-CHEMISTRY',
    type: 'COORDINATES',
    label: 'Specializes in Chemistry & Materials Science',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-029',
    sourceNodeId: 'DEG-BSC-PURE',
    targetNodeId: 'BSC-MATHS',
    type: 'COORDINATES',
    label: 'Specializes in Mathematics & Computing / Cryptography',
    verificationStatus: 'verified'
  },

  // Science PCB leads to Medical & Allied Degree Groups
  {
    id: 'REL-V3-030',
    sourceNodeId: 'STRM-PCB',
    targetNodeId: 'DEG-MBBS',
    type: 'FEEDS',
    label: 'PCB qualifies for 5.5-Year MBBS via NEET-UG',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-031',
    sourceNodeId: 'STRM-PCB',
    targetNodeId: 'DEG-AYUSH-DENTAL',
    type: 'FEEDS',
    label: 'PCB qualifies for Dental, Ayush & Allied Healthcare degrees',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-032',
    sourceNodeId: 'STRM-PCB',
    targetNodeId: 'DEG-BPHARM',
    type: 'FEEDS',
    label: 'PCB qualifies for Pharmaceutical Sciences (B.Pharm & Pharm.D)',
    verificationStatus: 'verified'
  },

  // Dental & Ayush branches into clinical disciplines
  {
    id: 'REL-V3-033',
    sourceNodeId: 'DEG-AYUSH-DENTAL',
    targetNodeId: 'CLINIC-BDS',
    type: 'COORDINATES',
    label: 'BDS Dental Surgery (5 Years)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-034',
    sourceNodeId: 'DEG-AYUSH-DENTAL',
    targetNodeId: 'CLINIC-BAMS',
    type: 'COORDINATES',
    label: 'BAMS Ayurvedic Medicine & Surgery (5.5 Years)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-035',
    sourceNodeId: 'DEG-AYUSH-DENTAL',
    targetNodeId: 'CLINIC-BHMS',
    type: 'COORDINATES',
    label: 'BHMS Homeopathic Medicine & Surgery (5.5 Years)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-036',
    sourceNodeId: 'DEG-AYUSH-DENTAL',
    targetNodeId: 'CLINIC-BPT',
    type: 'COORDINATES',
    label: 'BPT Physiotherapy & Sports Rehabilitation (4.5 Years)',
    verificationStatus: 'verified'
  },

  // Commerce leads to Commerce/BBA Degree & Professional Charters
  {
    id: 'REL-V3-037',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'DEG-BCOM-BBA',
    type: 'FEEDS',
    label: 'Commerce qualifies for B.Com (Hons) & BBA degrees',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-038',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'DEG-IPM',
    type: 'FEEDS',
    label: 'Enters 5-Year Integrated Management (IPM) directly at IIMs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-039',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'PROF-CA',
    type: 'FEEDS',
    label: 'Registers for ICAI Chartered Accountancy (CA) after 12th',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-040',
    sourceNodeId: 'STRM-COMMERCE',
    targetNodeId: 'PROF-CS-CMA',
    type: 'FEEDS',
    label: 'Pursues Company Secretary (CS) & Cost Accountant (CMA)',
    verificationStatus: 'verified'
  },

  // B.Com/BBA branches into specializations
  {
    id: 'REL-V3-041',
    sourceNodeId: 'DEG-BCOM-BBA',
    targetNodeId: 'BCOM-FINANCE',
    type: 'COORDINATES',
    label: 'Specializes in Accounting, Corporate Finance & Auditing',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-042',
    sourceNodeId: 'DEG-BCOM-BBA',
    targetNodeId: 'BBA-MARKETING',
    type: 'COORDINATES',
    label: 'Specializes in Brand Marketing & Strategic Management',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-043',
    sourceNodeId: 'DEG-BCOM-BBA',
    targetNodeId: 'BBA-FINTECH',
    type: 'COORDINATES',
    label: 'Specializes in FinTech & Business Data Analytics',
    verificationStatus: 'verified'
  },

  // Arts leads to 5-Yr Law & Humanities
  {
    id: 'REL-V3-044',
    sourceNodeId: 'STRM-ARTS',
    targetNodeId: 'DEG-LAW-5YR',
    type: 'FEEDS',
    label: 'Enters 5-Year Integrated Law at NLUs via CLAT-UG',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-045',
    sourceNodeId: 'STRM-ARTS',
    targetNodeId: 'DEG-BA-HUMANITIES',
    type: 'FEEDS',
    label: 'Enters B.A. (Hons) in Political Science, Economics, History',
    verificationStatus: 'verified'
  },

  // Law branches into specializations
  {
    id: 'REL-V3-046',
    sourceNodeId: 'DEG-LAW-5YR',
    targetNodeId: 'LAW-CORP',
    type: 'COORDINATES',
    label: 'Specializes in Corporate Law, M&A & Private Equity',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-047',
    sourceNodeId: 'DEG-LAW-5YR',
    targetNodeId: 'LAW-LITIGATION',
    type: 'COORDINATES',
    label: 'Specializes in Constitutional & Criminal Litigation',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-048',
    sourceNodeId: 'DEG-LAW-5YR',
    targetNodeId: 'LAW-IPR-CYBER',
    type: 'COORDINATES',
    label: 'Specializes in Technology Patent & Cyber/AI Governance Law',
    verificationStatus: 'verified'
  },

  // Postgraduate Progression Links
  {
    id: 'REL-V3-049',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'PG-MTECH',
    type: 'PROGRESSES_TO',
    label: 'B.Tech graduates take GATE for 2-Year M.Tech & PSUs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-050',
    sourceNodeId: 'DEG-BCA',
    targetNodeId: 'PG-MCA',
    type: 'PROGRESSES_TO',
    label: 'BCA graduates take NIMCET for 2-Year MCA (B.Tech CSE equal)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-051',
    sourceNodeId: 'DEG-MBBS',
    targetNodeId: 'PG-MD-MEDICINE',
    type: 'PROGRESSES_TO',
    label: 'MBBS doctors enter 3-Year MD Non-Surgical Residency via NEET-PG',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-052',
    sourceNodeId: 'DEG-MBBS',
    targetNodeId: 'PG-MS-SURGERY',
    type: 'PROGRESSES_TO',
    label: 'MBBS doctors enter 3-Year MS Surgical Residency via NEET-PG',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-053',
    sourceNodeId: 'DEG-BCOM-BBA',
    targetNodeId: 'PG-MBA',
    type: 'PROGRESSES_TO',
    label: 'Graduates take CAT for 2-Year IIM MBA / PGDM',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-054',
    sourceNodeId: 'DEG-LAW-5YR',
    targetNodeId: 'PG-LLM',
    type: 'PROGRESSES_TO',
    label: 'Law graduates take CLAT-PG for LL.M. & AIBE for Court Practice License',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-055',
    sourceNodeId: 'DEG-BSC-PURE',
    targetNodeId: 'PG-MSC-PHD',
    type: 'PROGRESSES_TO',
    label: 'B.Sc graduates take IIT JAM & CSIR-NET for funded Ph.D. Research',
    verificationStatus: 'verified'
  },

  // High-Value Combinations
  {
    id: 'REL-V3-056',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'COMBO-BTECH-CFA',
    type: 'PROGRESSES_TO',
    label: 'Engineers combine B.Tech + CFA for Quantitative Trading & FinTech',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-057',
    sourceNodeId: 'DEG-BCOM-BBA',
    targetNodeId: 'COMBO-BCOM-CA',
    type: 'PROGRESSES_TO',
    label: 'Students pursue B.Com + CA concurrently for Statutory Audit & CFO track',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-058',
    sourceNodeId: 'DEG-MBBS',
    targetNodeId: 'COMBO-MBBS-MBA',
    type: 'PROGRESSES_TO',
    label: 'Doctors pursue MBA for Hospital Administration & MedTech Ventures',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-059',
    sourceNodeId: 'DEG-BTECH',
    targetNodeId: 'COMBO-BTECH-LLB',
    type: 'PROGRESSES_TO',
    label: 'Engineers pursue 3-Yr LL.B. for Technology Patent & Cyber Law',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V3-060',
    sourceNodeId: 'DEG-BCOM-BBA',
    targetNodeId: 'PROF-CFA',
    type: 'PROGRESSES_TO',
    label: 'Graduates pursue CFA Global Charter for Investment Management',
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
    relatedNodeIds: ['PRE-PLAYGROUP-NURSERY', 'PRE-KINDERGARTEN', 'SCH-10TH-MILESTONE', 'DEG-BCOM-BBA', 'DEG-BCA']
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
    relatedNodeIds: ['PRE-PLAYGROUP-NURSERY', 'PRE-KINDERGARTEN']
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
    relatedNodeIds: ['PRE-KINDERGARTEN', 'SCH-10TH-MILESTONE']
  },
  {
    id: 'SRC-CBSE-BYLAWS',
    name: 'CBSE Examination Bylaws & Affiliation Regulations',
    officialUrl: 'https://cbse.gov.in',
    documentTitle: 'CBSE Secondary (10th) and Senior Secondary (12th) Regulations',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BOARD-CBSE', 'SCH-10TH-MILESTONE', 'STRM-PCM', 'STRM-COMMERCE']
  },
  {
    id: 'SRC-CISCE-CHARTER',
    name: 'CISCE Regulations & Syllabuses',
    officialUrl: 'https://cisce.org',
    documentTitle: 'ICSE (10th) and ISC (12th) Regulations & Syllabuses',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BOARD-ICSE', 'SCH-10TH-MILESTONE']
  },
  {
    id: 'SRC-MAHA-SSC-ACT-1965',
    name: 'State School Examination Board Acts',
    officialUrl: 'https://mahahsscboard.in',
    documentTitle: 'Maharashtra State Board of Secondary and Higher Secondary Education Act, 1965',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BOARD-SSC', 'SCH-10TH-MILESTONE']
  },
  {
    id: 'SRC-NIOS-RESOLUTION',
    name: 'National Institute of Open Schooling Equivalence Resolution',
    officialUrl: 'https://nios.ac.in',
    documentTitle: 'Ministry of Education Equivalence Gazette for NIOS Open Schooling',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BOARD-NIOS', 'SCH-10TH-MILESTONE']
  },
  {
    id: 'SRC-AICTE-APPROVAL-PROCESS',
    name: 'AICTE Approval Process Handbook (Polytechnic & Lateral Entry)',
    officialUrl: 'https://aicte-india.org',
    documentTitle: 'AICTE Regulations for Diploma to Degree Lateral Entry Scheme & MCA',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['STRM-POLYTECHNIC', 'DEG-BTECH', 'PG-MCA']
  },
  {
    id: 'SRC-IIT-ACT-1961',
    name: 'Institutes of Technology Act, 1961',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'The Institutes of Technology Act, 1961 (Act No. 59 of 1961)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-BTECH', 'BTECH-CS-AI', 'BTECH-ECE', 'BTECH-MECH', 'PG-MTECH', 'COMBO-BTECH-CFA']
  },
  {
    id: 'SRC-NITSER-ACT-2007',
    name: 'NITSER Act, 2007',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'National Institutes of Technology, Science Education and Research Act, 2007',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-BTECH', 'DEG-BSC-PURE', 'BSC-PHYSICS', 'BSC-CHEMISTRY', 'BSC-MATHS']
  },
  {
    id: 'SRC-NTA-CHARTER',
    name: 'National Testing Agency Official Portal',
    officialUrl: 'https://nta.ac.in',
    documentTitle: 'NTA Information Bulletins for JEE Main & NEET-UG',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-BTECH', 'DEG-MBBS']
  },
  {
    id: 'SRC-CFA-INSTITUTE',
    name: 'CFA Institute Candidate Body of Knowledge (CBOK)',
    officialUrl: 'https://www.cfainstitute.org',
    documentTitle: 'CFA Program Curriculum & Requirements for Charterholder Status',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PROF-CFA', 'COMBO-BTECH-CFA']
  },
  {
    id: 'SRC-NMC-ACT-2019',
    name: 'National Medical Commission Act, 2019',
    officialUrl: 'https://www.nmc.org.in',
    documentTitle: 'The National Medical Commission Act, 2019 (Act No. 30 of 2019)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-MBBS', 'DEG-AYUSH-DENTAL', 'PG-MD-MEDICINE', 'PG-MS-SURGERY', 'COMBO-MBBS-MBA']
  },
  {
    id: 'SRC-AIIMS-ACT-1956',
    name: 'All India Institute of Medical Sciences Act, 1956',
    officialUrl: 'https://www.aiims.edu',
    documentTitle: 'AIIMS Act, 1956 (Act No. 25 of 1956)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-MBBS', 'PG-MD-MEDICINE', 'PG-MS-SURGERY']
  },
  {
    id: 'SRC-ICAI-ACT-1949',
    name: 'The Chartered Accountants Act, 1949',
    officialUrl: 'https://www.icai.org',
    documentTitle: 'Chartered Accountants Act, 1949 (Act No. XXXVIII of 1949)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PROF-CA', 'COMBO-BCOM-CA']
  },
  {
    id: 'SRC-COMPANIES-ACT-2013',
    name: 'Companies Act, 2013 (Audit & Auditors)',
    officialUrl: 'https://www.mca.gov.in',
    documentTitle: 'Companies Act, 2013 Section 139-148 (Statutory Audit Powers)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['PROF-CA', 'PROF-CS-CMA', 'COMBO-BCOM-CA']
  },
  {
    id: 'SRC-NLSIU-ACT-1986',
    name: 'National Law School of India Act, 1986',
    officialUrl: 'https://www.nls.ac.in',
    documentTitle: 'National Law School of India Act, 1986 (Karnataka Act 22 of 1986)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-LAW-5YR', 'LAW-CORP', 'PG-LLM']
  },
  {
    id: 'SRC-BCI-ADVOCATES-ACT',
    name: 'Advocates Act, 1961 & AIBE Rules',
    officialUrl: 'https://www.barcouncilofindia.org',
    documentTitle: 'The Advocates Act, 1961 and All India Bar Examination Rules',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-LAW-5YR', 'LAW-LITIGATION', 'PG-LLM', 'COMBO-BTECH-LLB']
  },
  {
    id: 'SRC-IIM-ACT-2017',
    name: 'Indian Institutes of Management Act, 2017',
    officialUrl: 'https://www.education.gov.in',
    documentTitle: 'The Indian Institutes of Management Act, 2017 (Act No. 33 of 2017)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEG-IPM', 'PG-MBA', 'COMBO-MBBS-MBA']
  }
];
