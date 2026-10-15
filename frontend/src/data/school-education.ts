import { EducationNode } from '../types';

export const SCHOOL_EDUCATION_NODES: EducationNode[] = [
  {
    id: 'ECCE-ECOSYSTEM',
    type: 'department',
    title: 'Early Childhood Care & Education (ECCE) Framework',
    abbreviation: 'ECCE',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'school-education',
    summary: 'The national foundation covering foundational learning (ages 3 to 8) under NEP 2020 (5+3+3+4 architecture) and National Curriculum Framework for Foundational Stage (NCF-FS).',
    legalStatus: 'National Policy Framework under Article 45',
    mandate: [
      'Integrate preschool care, play-based learning, and foundational literacy and numeracy (NIPUN Bharat)'
    ],
    powers: [
      'Establishes developmental benchmarks (Jaadui Pitara) across Anganwadis and formal preschools'
    ],
    limitations: [
      'No formal public board examination or high-stakes testing exists for preschool children'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NCERT',
    type: 'institution',
    title: 'National Council of Educational Research & Training',
    abbreviation: 'NCERT',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'school-education',
    summary: 'Autonomous apex academic organisation established in 1961 to advise the Union and State governments on school education policies, develop the National Curriculum Framework (NCF), and publish national textbooks.',
    legalStatus: 'Autonomous Society (Societies Registration Act, 1860)',
    mandate: [
      'Design National Curriculum Frameworks (NCF for School, Teacher, Early Childhood, and Adult Education)',
      'Publish model textbooks, supplementary reading materials, and teacher training modules',
      'Conduct educational research and the National Achievement Survey (NAS)'
    ],
    powers: [
      'Designated Academic Authority under Section 29(1) of RTE Act for the Central Government',
      'Authoritative source of school syllabuses upon which CBSE and national exams (CUET, NEET) base questions'
    ],
    limitations: [
      'Not an examination board; does not conduct Class 10/12 board examinations or award school certificates',
      'Does not automatically control state school board curricula (states may adapt via SCERTs)'
    ],
    inputs: ['National Education Policy goals', 'Teacher feedback', 'Pedagogical research'],
    outputs: ['NCF frameworks', 'Official NCERT textbooks', 'Teacher manuals', 'PARAKH national assessment norms'],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-CBSE',
    type: 'schoolBoard',
    title: 'Central Board of Secondary Education',
    abbreviation: 'CBSE',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'examination',
    summary: 'India’s premier national school board under the Ministry of Education. Affiliates over 28,000 schools in India and 26 foreign countries, and conducts annual Class 10 (Secondary) and Class 12 (Senior School Certificate) board examinations.',
    legalStatus: 'Autonomous National Board (Government Resolution, 1929/1962)',
    mandate: [
      'Affiliate institutions for secondary and senior secondary education',
      'Conduct Class 10 (All India Secondary School Examination) and Class 12 (All India Senior School Certificate Examination)',
      'Administer Central Teacher Eligibility Test (CTET) on behalf of Ministry of Education'
    ],
    powers: [
      'Prescribes examination bye-laws, affiliation bye-laws, and practical exam regulations',
      'Awards recognized Class 10 and Class 12 certificates used globally for university admissions',
      'Can inspect affiliated schools, disaffiliate institutions for capitation fees or commercialization'
    ],
    limitations: [
      'Is not a university regulator; does not award undergraduate degrees or regulate college admissions',
      'Does not have jurisdiction over schools affiliated with CISCE or State Boards'
    ],
    relatedExaminations: ['EXAM-CBSE-10', 'EXAM-CBSE-12', 'EXAM-CTET'],
    sourceIds: ['SRC-CBSE-CONSTITUTION'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-CISCE',
    type: 'schoolBoard',
    title: 'Council for the Indian School Certificate Examinations',
    abbreviation: 'CISCE',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'examination',
    summary: 'A non-governmental national board of school education conducting the Indian Certificate of Secondary Education (ICSE - Class 10) and Indian School Certificate (ISC - Class 12) examinations.',
    legalStatus: 'Registered Society / Recognized National School Board',
    mandate: [
      'Affiliate schools offering English-medium education and prescribe academic curriculum',
      'Conduct ICSE (Class 10) and ISC (Class 12) examinations and issue certificates'
    ],
    powers: [
      'Establishes academic syllabuses and examination standards for affiliated private schools'
    ],
    limitations: [
      'Does not receive direct central government funding and does not conduct government teacher exams'
    ],
    relatedExaminations: ['EXAM-ICSE-10', 'EXAM-ISC-12'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NIOS',
    type: 'schoolBoard',
    title: 'National Institute of Open Schooling',
    abbreviation: 'NIOS',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'examination',
    summary: 'Autonomous national open school board under MoE providing flexible learning, on-demand examinations, and recognized Secondary (Class 10) and Senior Secondary (Class 12) certifications.',
    legalStatus: 'Autonomous Society / National Board (MHRD Resolution, 1989)',
    mandate: [
      'Provide inclusive, universal education to school dropouts, rural youth, and working professionals',
      'Conduct biannual and on-demand examinations (ODE) with credit transfer from other boards'
    ],
    powers: [
      'Issues recognized Class 10 and 12 certificates legally equivalent to CBSE/ICSE per AIU and MoE directives'
    ],
    limitations: [
      'Certain professional entrance rules require verification of subject combinations (e.g., medical council lab criteria)'
    ],
    relatedExaminations: ['EXAM-NIOS-10', 'EXAM-NIOS-12'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'NET-KVS',
    type: 'institution',
    title: 'Kendriya Vidyalaya Sangathan (KVS)',
    abbreviation: 'KVS',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'school-education',
    summary: 'Autonomous body under MoE administering over 1,250 Kendriya Vidyalayas across India to cater to the educational needs of children of transferable central government employees.',
    legalStatus: 'Autonomous Society (Ministry of Education)',
    mandate: [
      'Ensure uninterrupted education with uniform CBSE syllabus and bilingual instruction across India'
    ],
    powers: [
      'Manages recruitment of teachers (PGT, TGT, PRT) through open national competitive examinations'
    ],
    limitations: [
      'Not a school board; all KVs are affiliated with CBSE and take CBSE board examinations'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'NET-NVS',
    type: 'institution',
    title: 'Navodaya Vidyalaya Samiti (NVS)',
    abbreviation: 'NVS',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'school-education',
    summary: 'Autonomous body under MoE operating Jawahar Navodaya Vidyalayas (JNVs) — co-educational residential schools providing free quality education to talented rural children.',
    legalStatus: 'Autonomous Society (Ministry of Education)',
    mandate: [
      'Identify talented rural children and provide residential schooling, board, and lodging free of cost'
    ],
    powers: [
      'Conducts Jawahar Navodaya Vidyalaya Selection Test (JNVST) for Class 6 admission (administered via CBSE)'
    ],
    limitations: [
      'Not a school examination board; JNV students appear for CBSE Class 10 and 12 exams'
    ],
    relatedExaminations: ['EXAM-JNVST'],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NCTE',
    type: 'statutoryRegulator',
    title: 'National Council for Teacher Education',
    abbreviation: 'NCTE',
    sectionId: 'SEC-07',
    sectionNumber: '07',
    parentId: 'SEC-07',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory body established under the National Council for Teacher Education Act, 1993, to achieve planned and coordinated development of the teacher education system and regulate B.Ed, D.El.Ed, and ITEP programmes.',
    legalStatus: 'Statutory Regulator (NCTE Act, 1993)',
    mandate: [
      'Prescribe qualifications for school teachers under Section 23 of the RTE Act',
      'Grant recognition to teacher education institutions offering D.El.Ed, B.Ed, M.Ed, and Integrated Teacher Education Programme (ITEP)'
    ],
    powers: [
      'Mandates Teacher Eligibility Test (TET / CTET) guidelines',
      'Can inspect teacher colleges and withdraw recognition for substandard infrastructure or ghost faculty'
    ],
    limitations: [
      'Does not directly recruit school teachers (recruitment performed by State Governments and central networks)'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
