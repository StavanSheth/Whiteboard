import { EducationNode } from '../types';

export const OVERSIGHT_AND_RULES_NODES: EducationNode[] = [
  // SECTION 13: OVERSIGHT, RIGHTS, COMPLAINTS & APPEALS
  {
    id: 'CRT-SC',
    type: 'oversight',
    title: 'Supreme Court of India',
    abbreviation: 'Supreme Court',
    sectionId: 'SEC-13',
    sectionNumber: '13',
    parentId: 'SEC-13',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'The apex court of India. Possesses original jurisdiction under Article 32 to enforce fundamental rights, appellate jurisdiction under Articles 132-136, and declares law binding on all authorities across India (Article 141).',
    legalStatus: 'Apex Constitutional Court (Articles 124, 32, 136, 141, 142)',
    mandate: [
      'Final constitutional interpreter on reservation quotas, regulatory conflicts, and examination integrity',
      'Exercises complete justice powers under Article 142 to frame interim guidelines or cancel tainted exams'
    ],
    powers: [
      'Can strike down unconstitutional central or state education statutes and arbitrary regulatory circulars',
      'Decisions on NEET, fee caps, and minority rights (TMA Pai, PA Inamdar, Yashpal) form binding national jurisprudence'
    ],
    limitations: [
      'Exercises judicial review; does not frame academic syllabuses or set question papers'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'CRT-HC',
    type: 'oversight',
    title: 'High Courts of the States',
    abbreviation: 'High Courts',
    sectionId: 'SEC-13',
    sectionNumber: '13',
    parentId: 'SEC-13',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'Constitutional courts of the States under Article 214. Wields extensive writ jurisdiction under Article 226 for enforcement of fundamental rights and for "any other purpose" against illegal state actions.',
    legalStatus: 'Constitutional Court of Record (Articles 214, 226, 227)',
    mandate: [
      'Adjudicate writ petitions challenging university admission cancellations, exam malpractices, and arbitrary grading',
      'Superintendence over all subordinate courts and statutory educational tribunals under Article 227'
    ],
    powers: [
      'Issues interim stays on flawed counselling schedules, directs re-evaluation where manifest error is proven'
    ],
    limitations: [
      'Territorially confined to their respective State / UT jurisdiction'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-NCPCR',
    type: 'oversight',
    title: 'National Commission for Protection of Child Rights',
    abbreviation: 'NCPCR',
    sectionId: 'SEC-13',
    sectionNumber: '13',
    parentId: 'SEC-13',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Statutory body established under Commission for Protection of Child Rights Act, 2005. Specifically designated under Section 31 of the RTE Act to monitor the implementation of children’s right to free and compulsory education.',
    legalStatus: 'Statutory Child Rights Commission (CPCR Act, 2005; Section 31 RTE Act)',
    ministerialRelationship: 'Ministry of Women & Child Development',
    mandate: [
      'Examine and review safeguards provided by the RTE Act, inquire into complaints relating to child’s right to education',
      'Inquire into denial of admission under Section 12(1)(c), corporal punishment, and lack of school amenities'
    ],
    powers: [
      'Powers of a Civil Court trying a suit under CrPC; can summon witnesses, examine documents, and recommend prosecution'
    ],
    limitations: [
      'Recommends remedies and prosecutorial action; does not deliver final judicial decrees or award criminal sentences'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-CVC',
    type: 'oversight',
    title: 'Central Vigilance Commission (CVC)',
    abbreviation: 'CVC',
    sectionId: 'SEC-13',
    sectionNumber: '13',
    parentId: 'SEC-13',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Apex integrity institution created by statute to inquire into corruption, procurement irregularities, and bribery in Central Universities, autonomous testing societies, and regulatory councils.',
    legalStatus: 'Statutory Vigilance Authority (CVC Act, 2003 — Act No. 45 of 2003)',
    mandate: [
      'Superintendence over the Central Bureau of Investigation (CBI) in corruption cases involving public education officials',
      'Appoints Chief Vigilance Officers (CVO) in Central Universities, CBSE, UGC, and AICTE'
    ],
    powers: [
      'Exercises inquiry powers into irregular recruitment of university professors, tendering scams, and financial embezzlement'
    ],
    limitations: [
      'Covers corruption and integrity; does not review academic grading disputes or syllabus choices'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'GOV-CIC',
    type: 'oversight',
    title: 'Central Information Commission (CIC)',
    abbreviation: 'CIC / RTI',
    sectionId: 'SEC-13',
    sectionNumber: '13',
    parentId: 'SEC-13',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Statutory authority constituted under the Right to Information Act, 2005. Decides second appeals and complaints regarding access to certified answer copies, merit lists, and inspection files from public authorities.',
    legalStatus: 'Statutory Transparency Commission (RTI Act, 2005 — Act No. 22 of 2005)',
    mandate: [
      'Hear appeals against Central Public Information Officers (CPIOs) of CBSE, NTA, Central Universities, and MoE',
      'Supreme Court (CBSE v. Aditya Bandopadhyay) settled that evaluated answer sheets are accessible under RTI'
    ],
    powers: [
      'Can impose personal monetary penalties of up to Rs 25,000 on CPIOs for refusing information or causing delays'
    ],
    limitations: [
      'Cannot compel disclosure of confidential question paper moderation pools prior to exam conduct (Section 8 exemptions)'
    ],
    sourceIds: ['SRC-RTI-ACT-2005'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'PROC-COMPLAINT-FLOW',
    type: 'process',
    title: 'Structured Dispute & Grievance Routing Flowchart',
    abbreviation: 'Grievance Routing',
    sectionId: 'SEC-13',
    sectionNumber: '13',
    parentId: 'SEC-13',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Procedural pathway directing aggrieved students, parents, and institutions: Problem Identified → Check Governing Instrument → Route to Designated Forum (Departmental, Exam Agency, Regulatory Appeal, NCPCR, RTI, High Court Writ).',
    legalStatus: 'Statutory Grievance Architecture',
    mandate: [
      'Ensure complainants utilize lawful remedy routes and do not miss statutory limitation deadlines'
    ],
    powers: [
      'Categorizes disputes into Administrative, Testing, Regulatory, Child Rights, Information Access, and Constitutional categories'
    ],
    limitations: [
      'Not a mandatory rigid sequence; urgent constitutional violations allow immediate approach to High Court under Article 226'
    ],
    inputs: ['Adverse notification', 'Examination scoring grievance', 'Admission denial', 'Fee dispute'],
    outputs: ['Statutory appeal', 'Writ petition', 'RTI second appeal', 'Ombudsman order'],
    sourceIds: ['SRC-CONST-ROOT', 'SRC-RTI-ACT-2005'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },

  // SECTION 14: HOW A DECISION BECOMES A RULE
  {
    id: 'ENGINE-REFORM-7STEPS',
    type: 'process',
    title: 'The 7-Stage Educational Reform Engine',
    abbreviation: 'Rulemaking Engine',
    sectionId: 'SEC-14',
    sectionNumber: '14',
    parentId: 'SEC-14',
    level: 'union',
    category: 'procedural-reform',
    summary: 'The operational decision-making engine: 1. Identify Problem → 2. Identify Legal Competence → 3. Select Legal Instrument → 4. Required Consultations & Approvals → 5. Gazette Notification & Commencement → 6. Implementation & Compliance → 7. Judicial / Statutory Review.',
    legalStatus: 'Operational Governance Engine',
    mandate: [
      'Guide policymakers, analysts, and citizens on lawfully transforming an educational idea into a binding rule'
    ],
    powers: [
      'Identifies the exact authority empowered to make each change and prevents ultra vires executive actions'
    ],
    limitations: [
      'A decision taken without statutory authority or proper delegated power is void and liable to be quashed'
    ],
    sourceIds: ['SRC-CONST-ROOT', 'SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'INSTRUMENTS-INVENTORY',
    type: 'legalInstrument',
    title: 'The 11 Recognized Legal Instruments in Education',
    abbreviation: '11 Legal Instruments',
    sectionId: 'SEC-14',
    sectionNumber: '14',
    parentId: 'SEC-14',
    level: 'union',
    category: 'legislation',
    summary: 'The comprehensive taxonomy of legal instruments: 1. Constitutional Amendment; 2. Act of Parliament; 3. State Act; 4. Statutory Rules; 5. Regulations; 6. Executive Policy; 7. Government Scheme; 8. Gazette Notification; 9. Government Resolution / Order; 10. Institutional Academic Ordinance; 11. Examination Information Bulletin.',
    legalStatus: 'Hierarchy of Legal Instruments',
    mandate: [
      'Ensure the correct legal instrument is selected matching the required legal competence'
    ],
    powers: [
      'Each instrument possesses distinct legal force, publication requirements, and challenge routes'
    ],
    limitations: [
      'An inferior instrument (e.g., examination bulletin or circular) cannot override a superior instrument (Act or Regulation)'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'WALKTHROUGH-ENTRANCE-EXAM',
    type: 'process',
    title: 'Walkthrough: Changing an Entrance Examination Rule',
    abbreviation: 'Exam Reform Case Study',
    sectionId: 'SEC-14',
    sectionNumber: '14',
    parentId: 'SEC-14',
    level: 'union',
    category: 'examination',
    summary: 'Concrete step-by-step demonstration of amending an entrance examination rule (e.g., eligibility criteria or exam pattern): Current Rule Identified → Rule Owner Identified (Regulator vs Exam Agency vs University) → Consultation / Concurrence → Information Bulletin Amendment → Advance Candidate Notice → Implementation.',
    legalStatus: 'Practical Administrative Procedure',
    mandate: [
      'Demonstrates real-world division of powers: NTA manages test delivery, but NMC/MoE owns the eligibility rule'
    ],
    powers: [
      'Upholds doctrine of legitimate expectation: exam rules cannot be changed arbitrarily after the process has commenced'
    ],
    limitations: [
      'Supreme Court rules consistently that "rules of the game cannot be changed once the game has begun"'
    ],
    inputs: ['Proposed pattern change', 'Public comments', 'Expert committee review'],
    outputs: ['Corrigendum notice', 'Revised Information Bulletin', 'Updated registration portal'],
    sourceIds: ['SRC-NMC-ACT-2019', 'SRC-NTA-CABINET-2017'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
