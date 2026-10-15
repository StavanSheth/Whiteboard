import { EducationNode } from '../types';

export const HIGHER_EDUCATION_NODES: EducationNode[] = [
  {
    id: 'GOV-UGC',
    type: 'statutoryRegulator',
    title: 'University Grants Commission',
    abbreviation: 'UGC',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'union',
    category: 'higher-education',
    summary: 'Apex statutory regulator for university education in India established under the UGC Act, 1956. Coordinates national university standards, prescribes faculty qualifications (NET/PhD), and allocates development grants.',
    legalStatus: 'Statutory Regulator (UGC Act, 1956 — Act No. 3 of 1956)',
    establishingLaw: ['UGC Act, 1956 (Entry 66 of Union List)'],
    ministerialRelationship: 'Department of Higher Education, Ministry of Education',
    leadershipRole: 'Led by Chairman and Commission Members',
    mandate: [
      'Coordinate and determine standards of teaching, examination, and research in universities',
      'Allocate and disburse grants out of the Fund of the Commission to Central and State universities',
      'Recommend to the Central Government the conferment of Deemed-to-be University status under Section 3'
    ],
    powers: [
      'Section 22: Exclusive statutory power to specify degrees (BA, BSc, BTech, MA, PhD) that can be conferred in India',
      'Prescribes mandatory UGC Regulations (Faculty Appointment, Minimum Standards for MPhil/PhD, ODL Regulations)',
      'Maintains list of recognized universities and issues public notices warning against fake/unrecognized universities'
    ],
    limitations: [
      'Cannot directly award degrees itself (degrees must be awarded by universities legally established under law)',
      'Does not conduct university semester exams or administer student college admissions directly',
      'Does not substitute for specialized professional councils (e.g., NMC for medical, BCI for law)'
    ],
    inputs: ['Statutory committee reports', 'Institutional compliance data', 'Government policy directions'],
    outputs: ['UGC Gazetted Regulations', 'Section 2(f)/12(B) recognitions', 'Development grants', 'Fake university lists'],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-AICTE',
    type: 'statutoryRegulator',
    title: 'All India Council for Technical Education',
    abbreviation: 'AICTE',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'union',
    category: 'higher-education',
    summary: 'National statutory council established under the AICTE Act, 1987, responsible for planning, formulation, and maintenance of norms and standards in technical and management education.',
    legalStatus: 'Statutory Regulator (AICTE Act, 1987 — Act No. 52 of 1987)',
    establishingLaw: ['AICTE Act, 1987'],
    ministerialRelationship: 'Department of Higher Education, Ministry of Education',
    mandate: [
      'Formulate Approval Process Handbook (APH) for engineering, technology, architecture, pharmacy, MCA, and MBA',
      'Prescribe student-to-teacher ratios, lab equipment standards, and infrastructure criteria for technical institutes'
    ],
    powers: [
      'Grants or withdraws annual approval for standalone polytechnics, engineering colleges, and business schools',
      'Administers faculty development schemes and Prime Minister’s Special Scholarship Scheme (PMSSS)'
    ],
    limitations: [
      'Supreme Court (Bharathidasan University ruling) held that university faculties do not require prior AICTE approval',
      'Cannot directly award engineering degrees (awarded by affiliated universities or autonomous institutes)'
    ],
    sourceIds: ['SRC-AICTE-ACT-1987'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },

  // 8 DISTINCT UNIVERSITY & INSTITUTIONAL TYPES
  {
    id: 'UNIV-CENTRAL',
    type: 'institution',
    title: 'Central Universities',
    abbreviation: 'Central Universities',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'union',
    category: 'higher-education',
    summary: 'Universities established by an Act of Parliament (e.g., Delhi University, JNU, BHU, AMU, or under Central Universities Act, 2009). Funded directly by the Union Government with the President of India as Visitor.',
    legalStatus: 'Statutory Corporation under Central Act of Parliament',
    mandate: [
      'Provide national-level collegiate and postgraduate education with all-India admissions'
    ],
    powers: [
      'Autonomous degree-conferring authority; frames own Academic Council regulations and syllabuses',
      'May affiliate colleges where its specific establishing charter permits (e.g., Delhi University)'
    ],
    limitations: [
      'First Statutes and amendments require approval of the Visitor (President of India)'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'UNIV-STATE-PUB',
    type: 'institution',
    title: 'State Public Universities',
    abbreviation: 'State Universities',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'state',
    category: 'higher-education',
    summary: 'Universities established by an Act of the State Legislature (e.g., University of Mumbai, Savitribai Phule Pune University). Funded primarily by State Governments with Governor as Chancellor.',
    legalStatus: 'Statutory Body under State Legislative Act',
    mandate: [
      'Anchor regional higher education, conduct semester examinations, and award undergraduate/postgraduate degrees'
    ],
    powers: [
      'Statutory power under state Acts to affiliate hundreds of local colleges across assigned revenue districts',
      'Conducts university semester examinations, frames course ordinances, and regulates faculty recruitment'
    ],
    limitations: [
      'Must maintain conformity with UGC minimum standards and qualifications under Entry 66'
    ],
    sourceIds: ['SRC-UGC-ACT-1956', 'SRC-CONST-246'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'UNIV-DEEMED',
    type: 'institution',
    title: 'Deemed-to-be Universities',
    abbreviation: 'Deemed Universities',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'union',
    category: 'higher-education',
    summary: 'Institutions of high reputation declared to be deemed to be universities by the Central Government on the advice of UGC under Section 3 of the UGC Act, 1956 (e.g., BITS Pilani, IISc Bangalore).',
    legalStatus: 'Declared under Section 3, UGC Act, 1956',
    mandate: [
      'Enjoy university-level academic autonomy to design innovative curricula and confer degrees'
    ],
    powers: [
      'Can confer recognized degrees under Section 22 of the UGC Act and set independent entrance criteria'
    ],
    limitations: [
      'Strictly prohibited from affiliating outside colleges or running commercial franchising centres',
      'Must adhere to UGC (Institutions Deemed to be Universities) Regulations'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'UNIV-STATE-PVT',
    type: 'institution',
    title: 'State Private Universities',
    abbreviation: 'Private Universities',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'state',
    category: 'higher-education',
    summary: 'Universities established by a specific sponsoring body through an Act of the State Legislature. Self-financed unitary campuses (e.g., Ashoka University, Symbiosis International).',
    legalStatus: 'Statutory Private University under State Act',
    mandate: [
      'Self-financed quality higher education operating on a unitary campus model'
    ],
    powers: [
      'Can design curricula, set fee structures (subject to state fee regulators), and confer recognized degrees'
    ],
    limitations: [
      'Supreme Court (Prof. Yashpal case) held that private universities cannot affiliate colleges or operate off-campus study centres outside their home state'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'INST-INI',
    type: 'institution',
    title: 'Institutes of National Importance (INIs)',
    abbreviation: 'INIs (IIT, NIT, AIIMS, IIM)',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'union',
    category: 'higher-education',
    summary: 'Premier central institutions declared by specific Acts of Parliament to be Institutes of National Importance: 23 IITs, 31 NITs, 20+ AIIMS, 21 IIMs, 25 IIITs, IISc, and IISERs.',
    legalStatus: 'Declared by Parliamentary Statute as INI',
    mandate: [
      'Serve as national hubs for advanced science, technology, medicine, management, and research'
    ],
    powers: [
      'Complete degree-awarding autonomy independent of UGC affiliation; conduct own admissions (JEE Adv, CAT, INI-CET)'
    ],
    limitations: [
      'Governed by their respective national councils (IIT Council, NIT Council, IIM Boards) under parliamentary Acts'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'INST-AUTONOMOUS',
    type: 'institution',
    title: 'Autonomous Colleges',
    abbreviation: 'Autonomous Colleges',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Colleges granted academic autonomy by the UGC and their parent affiliating university under UGC Autonomous College Regulations.',
    legalStatus: 'Conferred Autonomous Status under UGC Regulations',
    mandate: [
      'Exercise academic freedom to update curriculum, design modern electives, and conduct continuous assessment'
    ],
    powers: [
      'Frames own syllabuses, sets examination papers, and calculates internal grades'
    ],
    limitations: [
      'Cannot award degrees in its own name; the final degree certificate is conferred by the parent affiliating university'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'INST-AFFILIATED',
    type: 'institution',
    title: 'Affiliated Colleges',
    abbreviation: 'Affiliated Colleges',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'institutional',
    category: 'higher-education',
    summary: 'Constituent and affiliated institutions teaching courses prescribed by their parent university, preparing students for university semester examinations.',
    legalStatus: 'Affiliated Academic Unit',
    mandate: [
      'Deliver university-prescribed curriculum and maintain required teacher-student ratios'
    ],
    powers: [
      'Enrolls students and conducts internal coursework and practical examinations'
    ],
    limitations: [
      'Has no autonomy to alter the syllabus, grading scheme, or confer degrees independently'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'RULE-DEGREE-AWARDS',
    type: 'legalInstrument',
    title: 'Section 22, UGC Act — Right to Confer Degrees',
    abbreviation: 'Section 22 UGC Act',
    sectionId: 'SEC-08',
    sectionNumber: '08',
    parentId: 'SEC-08',
    level: 'union',
    category: 'legislation',
    summary: 'Fundamental legal rule of Indian higher education: The right of conferring or granting degrees shall be exercised only by a University established by Central/State Act or Section 3 Deemed University or INI.',
    legalStatus: 'Statutory Degree Conferment Monopoly',
    mandate: [
      'Prevents unaccredited private corporations and societies from issuing bogus "degrees"'
    ],
    powers: [
      'Renders any qualification named "Degree" awarded by an unauthorized body illegal and void ab initio'
    ],
    limitations: [
      'Does not prevent autonomous bodies from awarding Diplomas or Certificates (e.g., PGDM from IIMs prior to IIM Act)'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
