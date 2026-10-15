import { EducationNode } from '../types';

export const REGULATOR_NODES: EducationNode[] = [
  {
    id: 'GOV-NMC',
    type: 'statutoryRegulator',
    title: 'National Medical Commission (NMC)',
    abbreviation: 'NMC',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Apex statutory regulator for medical education and profession in India, constituted under the National Medical Commission Act, 2019. Replaced the Medical Council of India (MCI).',
    legalStatus: 'Statutory Regulator (NMC Act, 2019)',
    establishingLaw: ['National Medical Commission Act, 2019 (Act No. 30 of 2019)'],
    ministerialRelationship: 'Ministry of Health & Family Welfare',
    leadershipRole: 'Led by Chairperson with 4 Autonomous Boards (UGMEB, PGMEB, MARB, EMRB)',
    mandate: [
      'Set national medical education standards (MBBS, MD/MS, DM/MCh) and assess medical college infrastructure',
      'Maintain the National Medical Register (NMR) and enforce medical professional ethics',
      'Mandate the National Eligibility-cum-Entrance Test (NEET-UG / NEET-PG) and National Exit Test (NExT)'
    ],
    powers: [
      'Medical Assessment and Rating Board (MARB) grants permission to establish new medical colleges or expand MBBS seats',
      'Fixes regulatory fee guidelines for 50% seats in private medical colleges under Section 10(1)(i)',
      'Can impose heavy monetary penalties or withdraw recognition of colleges fudging faculty or clinical material'
    ],
    limitations: [
      'Does not conduct testing operations itself (delegates NEET conduct to NTA)',
      'Does not conduct single-window seat allocation (conducted by MCC and State DME counselling authorities)'
    ],
    inputs: ['Annual institutional declarations', 'Biometric attendance data', 'Hospital bed occupancy audits'],
    outputs: ['Letter of Permission (LoP)', 'Curriculum competency manuals (CBME)', 'National Medical Register entries'],
    relatedExaminations: ['EXAM-NEET-UG', 'EXAM-NEET-PG', 'EXAM-NEXT'],
    relatedQualifications: ['QUAL-MBBS', 'QUAL-MD-MS'],
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NCISM',
    type: 'statutoryRegulator',
    title: 'National Commission for Indian System of Medicine',
    abbreviation: 'NCISM',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory commission established under the NCISM Act, 2020, to regulate Ayurveda, Siddha, Unani, and Sowa-Rigpa systems of medicine education.',
    legalStatus: 'Statutory Regulator (NCISM Act, 2020 — Act No. 14 of 2020)',
    ministerialRelationship: 'Ministry of AYUSH',
    mandate: [
      'Prescribe standards for BAMS, BUMS, and BSMS degree programmes and approve AYUSH colleges',
      'Conduct National Eligibility-cum-Entrance Test (NEET) admissions and maintain National Register'
    ],
    powers: [
      'Grants permission to start new AYUSH medical colleges and enforces uniform competency curricula'
    ],
    limitations: [
      'Does not regulate Allopathic (MBBS) or Homoeopathy colleges'
    ],
    relatedExaminations: ['EXAM-NEET-UG'],
    relatedQualifications: ['QUAL-BAMS', 'QUAL-BUMS'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NCH',
    type: 'statutoryRegulator',
    title: 'National Commission for Homoeopathy',
    abbreviation: 'NCH',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory commission established under the NCH Act, 2020, regulating homoeopathic medical education (BHMS, MD-Hom) and homoeopathic professional practice.',
    legalStatus: 'Statutory Regulator (NCH Act, 2020 — Act No. 15 of 2020)',
    ministerialRelationship: 'Ministry of AYUSH',
    mandate: [
      'Maintain quality standards in Homoeopathy colleges and enforce the Homoeopathy Medical Register'
    ],
    powers: [
      'Approves new BHMS courses and inspects attached homoeopathic hospitals'
    ],
    limitations: [
      'Confined strictly to Homoeopathic education'
    ],
    relatedExaminations: ['EXAM-NEET-UG'],
    relatedQualifications: ['QUAL-BHMS'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NDC',
    type: 'statutoryRegulator',
    title: 'National Dental Commission (NDC)',
    abbreviation: 'NDC',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Established under the National Dental Commission Act, 2023, replacing the Dental Council of India (DCI) to modernize dental education and BDS/MDS degree standards.',
    legalStatus: 'Statutory Regulator (NDC Act, 2023)',
    ministerialRelationship: 'Ministry of Health & Family Welfare',
    mandate: [
      'Regulate dental colleges, BDS and MDS clinical curricula, and enforce dental ethics'
    ],
    powers: [
      'Approves dental college seat capacities and oversees dental clinical competency standards'
    ],
    limitations: [
      'Admissions conducted through NEET-UG and counselling authorities'
    ],
    relatedExaminations: ['EXAM-NEET-UG'],
    relatedQualifications: ['QUAL-BDS', 'QUAL-MDS'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-PCI',
    type: 'statutoryRegulator',
    title: 'Pharmacy Council of India',
    abbreviation: 'PCI',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory body constituted under the Pharmacy Act, 1948, regulating education and qualification standards for pharmacists (D.Pharm, B.Pharm, Pharm.D) and registration of pharmacists.',
    legalStatus: 'Statutory Regulator (Pharmacy Act, 1948 — Act No. 8 of 1948)',
    ministerialRelationship: 'Ministry of Health & Family Welfare',
    mandate: [
      'Prescribe minimum education regulations for qualification as a Registered Pharmacist',
      'Approve pharmacy colleges and qualifications under Section 12 of the Pharmacy Act'
    ],
    powers: [
      'Supreme Court (PCI v. AICTE, 2020) affirmed that PCI is the paramount authority on pharmacy education',
      'Can impose moratorium on opening new pharmacy colleges and inspect lab infrastructure'
    ],
    limitations: [
      'State Pharmacy Councils handle individual pharmacist registration and license renewals'
    ],
    relatedQualifications: ['QUAL-BPHARM', 'QUAL-DPHARM'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-INC',
    type: 'statutoryRegulator',
    title: 'Indian Nursing Council',
    abbreviation: 'INC',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'National regulatory body constituted under the Indian Nursing Council Act, 1947, to establish uniform standards of training for nurses, midwives (ANM, GNM, B.Sc Nursing).',
    legalStatus: 'Statutory Regulator (INC Act, 1947 — Act No. 48 of 1947)',
    ministerialRelationship: 'Ministry of Health & Family Welfare',
    mandate: [
      'Prescribe uniform nursing curricula, examination rules, and hospital clinical training hours'
    ],
    powers: [
      'Recognizes nursing qualifications under Section 10 of the INC Act'
    ],
    limitations: [
      'State Nursing Councils (e.g., MNC Maharashtra) grant operational licenses and maintain regional registers'
    ],
    relatedQualifications: ['QUAL-BSC-NURSING', 'QUAL-GNM'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-BCI',
    type: 'statutoryRegulator',
    title: 'Bar Council of India',
    abbreviation: 'BCI',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory body established under the Advocates Act, 1961. Regulates the legal profession and exercises statutory control over legal education (LLB, Integrated BA-LLB) and law colleges in India.',
    legalStatus: 'Statutory Professional Body (Advocates Act, 1961 — Act No. 25 of 1961)',
    mandate: [
      'Promote legal education and lay down standards of such education in consultation with Universities',
      'Recognize universities whose degree in law shall be a qualification for enrolment as an advocate',
      'Conduct the All India Bar Examination (AIBE) as mandatory condition for practicing law'
    ],
    powers: [
      'Inspects law faculties and can refuse recognition to any law college violating BCI Legal Education Rules',
      'Fixes student-to-teacher ratios, moot court requirements, and library volume standards'
    ],
    limitations: [
      'Does not award law degrees directly (awarded by NLUs, Central and State universities)',
      'Does not conduct CLAT entrance exam (conducted by the Consortium of National Law Universities)'
    ],
    relatedExaminations: ['EXAM-AIBE'],
    relatedQualifications: ['QUAL-LLB', 'QUAL-BA-LLB'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-COA',
    type: 'statutoryRegulator',
    title: 'Council of Architecture',
    abbreviation: 'CoA',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory body established by the Parliament under the Architects Act, 1972. Regulates architectural education (B.Arch) and maintains the register of architects across India.',
    legalStatus: 'Statutory Body (Architects Act, 1972 — Act No. 20 of 1972)',
    ministerialRelationship: 'Department of Higher Education, Ministry of Education',
    mandate: [
      'Prescribe Minimum Standards of Architectural Education (B.Arch and M.Arch)',
      'Conduct National Aptitude Test in Architecture (NATA) for B.Arch admissions'
    ],
    powers: [
      'Inspects architecture colleges and grants approval for course commencement and intake',
      'Exclusive authority over registration of architects entitled to use the statutory title "Architect"'
    ],
    limitations: [
      'Supreme Court (CoA v. Mukesh Goyal) settled boundaries regarding structural engineering overlaps'
    ],
    relatedExaminations: ['EXAM-NATA'],
    relatedQualifications: ['QUAL-BARCH'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-RCI',
    type: 'statutoryRegulator',
    title: 'Rehabilitation Council of India',
    abbreviation: 'RCI',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory body set up under the Rehabilitation Council of India Act, 1992, to regulate training policies and programmes for professionals in disability rehabilitation and special education (B.Ed Special Ed).',
    legalStatus: 'Statutory Body (RCI Act, 1992 — Act No. 34 of 1992)',
    ministerialRelationship: 'Ministry of Social Justice & Empowerment',
    mandate: [
      'Standardize special education and rehabilitation curricula (Audiology, Clinical Psychology, Special B.Ed)',
      'Maintain the Central Rehabilitation Register (CRR)'
    ],
    powers: [
      'Grants approval to special education colleges and takes legal action against unqualified practitioners'
    ],
    limitations: [
      'Confined strictly to disability rehabilitation and special education'
    ],
    relatedQualifications: ['QUAL-BED-SPECIAL'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-VCI',
    type: 'statutoryRegulator',
    title: 'Veterinary Council of India',
    abbreviation: 'VCI',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory body established under the Indian Veterinary Council Act, 1984, regulating veterinary education standards (B.V.Sc & A.H.) and veterinary practice throughout India.',
    legalStatus: 'Statutory Body (Indian Veterinary Council Act, 1984 — Act No. 52 of 1984)',
    ministerialRelationship: 'Ministry of Fisheries, Animal Husbandry & Dairying',
    mandate: [
      'Prescribe minimum veterinary education regulations and clinical internship norms',
      'Allocate 15% All India Quota seats in recognized veterinary colleges'
    ],
    powers: [
      'Recognizes veterinary qualifications and maintains the Indian Veterinary Practitioner Register'
    ],
    limitations: [
      'Does not regulate human medicine or agricultural crop sciences'
    ],
    relatedExaminations: ['EXAM-NEET-UG'],
    relatedQualifications: ['QUAL-BVSC'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-ICAR',
    type: 'statutoryRegulator',
    title: 'Indian Council of Agricultural Research',
    abbreviation: 'ICAR',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'higher-education',
    summary: 'Apex autonomous organization under Department of Agricultural Research and Education (DARE), coordinating agricultural education, research, and accreditation (NAEAB) across India.',
    legalStatus: 'Registered Society (DARE / Ministry of Agriculture)',
    mandate: [
      'Coordinate 4 Deemed universities, 65 ICAR institutions, and 70+ State Agricultural Universities (SAUs)',
      'National Agricultural Education Accreditation Board (NAEAB) grants accreditation to agricultural programs'
    ],
    powers: [
      'Conducts All India Entrance Examination for Admission (CUET-ICAR / AIEEA) and disburses scholarships'
    ],
    limitations: [
      'Acts via accreditation incentives and grant conditions rather than statutory penal commands'
    ],
    relatedExaminations: ['EXAM-ICAR-AIEEA'],
    relatedQualifications: ['QUAL-BSC-AGRI'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NCVET',
    type: 'statutoryRegulator',
    title: 'National Council for Vocational Education & Training',
    abbreviation: 'NCVET',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'higher-education',
    summary: 'Non-statutory regulatory body notified in 2018 merging NCVT and NSDA to regulate vocational education, training, Awarding Bodies, and Assessment Agencies under MSDE.',
    legalStatus: 'Regulatory Body notified by Union Cabinet',
    ministerialRelationship: 'Ministry of Skill Development & Entrepreneurship',
    mandate: [
      'Regulate vocational education ecosystem and establish norms for awarding national vocational qualifications'
    ],
    powers: [
      'Grants formal recognition to Awarding Bodies and enforces quality audit of skill certifications'
    ],
    limitations: [
      'Does not award traditional university degrees under UGC Act Section 22'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-ICAI',
    type: 'statutoryRegulator',
    title: 'Institute of Chartered Accountants of India',
    abbreviation: 'ICAI',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'SEC-09',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Statutory body established under the Chartered Accountants Act, 1949, responsible for the education, examination, training (Articleship), and licensing of Chartered Accountants in India.',
    legalStatus: 'Statutory Body (Chartered Accountants Act, 1949 — Act No. 38 of 1949)',
    ministerialRelationship: 'Ministry of Corporate Affairs',
    mandate: [
      'Sole authorized statutory body empowered to examine, qualify, and register Chartered Accountants',
      'Conducts Foundation, Intermediate, and Final CA examinations'
    ],
    powers: [
      'Issues Certificate of Practice (CoP) allowing statutory financial audit under Companies Act, 2013',
      'Exercises disciplinary jurisdiction and can cancel membership for professional misconduct'
    ],
    limitations: [
      'Independent statutory professional institute; does not affiliate colleges or follow UGC credit systems'
    ],
    relatedExaminations: ['EXAM-CA-FINAL', 'EXAM-CA-INTER', 'EXAM-CA-FOUND'],
    relatedQualifications: ['QUAL-CA'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
