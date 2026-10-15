import { EducationNode } from '../types';

export const CONSTITUTIONAL_NODES: EducationNode[] = [
  {
    id: 'CONST-ROOT',
    type: 'constitutional',
    title: 'Constitution of India',
    abbreviation: 'Constitution',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'SEC-01',
    level: 'constitutional',
    category: 'legislation',
    summary: 'The supreme legal foundation of India. All legislative powers, regulatory jurisdictions, fundamental rights, and executive authority in education derive from this grundnorm.',
    legalStatus: 'Supreme Law of the Land',
    mandate: [
      'Establishes democratic governance and distribution of powers between Union and States',
      'Guarantees fundamental rights and provides directive principles for education',
      'Provides mechanisms for judicial review and constitutional remedies'
    ],
    powers: [
      'Supreme binding authority over all Parliaments, Legislatures, Ministries, Courts, and Regulators',
      'Invalidates any law or administrative order inconsistent with Part III (Fundamental Rights)'
    ],
    limitations: [
      'Can only be amended through the formal constituent procedure prescribed in Article 368'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-21A',
    type: 'constitutional',
    title: 'Article 21A — Right to Education',
    abbreviation: 'Art. 21A',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'school-education',
    summary: 'Mandates the State to provide free and compulsory education to all children aged 6 to 14 years in such manner as the State may, by law, determine.',
    legalStatus: 'Fundamental Right (Part III)',
    establishingLaw: ['Constitution (Eighty-Sixth Amendment) Act, 2002'],
    mandate: [
      'Enforceable constitutional guarantee of elementary education for children aged 6-14',
      'Imposes affirmative obligation on Appropriate Governments and local authorities'
    ],
    powers: [
      'Constitutional basis for the Right of Children to Free and Compulsory Education Act, 2009',
      'Empowers courts to issue mandatory directions ensuring school infrastructure, non-discrimination, and admission'
    ],
    limitations: [
      'Does not automatically make higher, technical, or preschool education a free fundamental right',
      'Does not prescribe specific syllabus details, school textbooks, or entrance tests directly'
    ],
    sourceIds: ['SRC-CONST-21A', 'SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-45',
    type: 'constitutional',
    title: 'Article 45 — Early Childhood Care & Education',
    abbreviation: 'Art. 45',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'school-education',
    summary: 'Directive Principle obligating the State to endeavor to provide early childhood care and education for all children until they complete the age of six years.',
    legalStatus: 'Directive Principle of State Policy (Part IV)',
    mandate: [
      'Policy directive guiding government pre-primary, Anganwadi, and ECCE programmes'
    ],
    powers: [
      'Constitutional basis for national and state ECCE policies and Ministry of Women & Child Development schemes'
    ],
    limitations: [
      'Non-justiciable Directive Principle; cannot be directly enforced by writ petition unlike Article 21A'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-46',
    type: 'constitutional',
    title: 'Article 46 — Educational Interests of Weaker Sections',
    abbreviation: 'Art. 46',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'funding-finance',
    summary: 'Directs the State to promote with special care the educational and economic interests of the weaker sections of the people, and in particular, of the Scheduled Castes and the Scheduled Tribes.',
    legalStatus: 'Directive Principle of State Policy (Part IV)',
    mandate: [
      'Constitutional foundation for educational welfare schemes, fee concessions, and targeted scholarships'
    ],
    powers: [
      'Empowers Union and State governments to allocate budget, create residential schools (EMRS), and grant fellowships'
    ],
    limitations: [
      'Does not, by itself, prescribe an individual entrance exam syllabus or automatic institutional entitlement'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-246',
    type: 'constitutional',
    title: 'Article 246 & Seventh Schedule — Legislative Competence',
    abbreviation: 'Art. 246',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'legislation',
    summary: 'Distributes subject-matter legislative jurisdiction among Parliament (List I - Union List), State Legislatures (List II - State List), and both concurrently (List III - Concurrent List).',
    legalStatus: 'Constitutional Distribution of Powers',
    mandate: [
      'Delineates where Parliament has exclusive power, where States have exclusive power, and where both can legislate'
    ],
    powers: [
      'Determines whether an education Act must be enacted by Parliament or a State Legislature'
    ],
    limitations: [
      'Legislatures cannot enact laws transgressing constitutional distribution without invoking presidential assent under 254(2)'
    ],
    sourceIds: ['SRC-CONST-246'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'LIST-I-ENTRY-66',
    type: 'constitutional',
    title: 'Union List, Entry 66 — Higher Education Standards',
    abbreviation: 'List I, Entry 66',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'ART-246',
    level: 'constitutional',
    category: 'higher-education',
    summary: 'Exclusive Union legislative power over "Coordination and determination of standards in institutions for higher education or research and scientific and technical institutions".',
    legalStatus: 'Exclusive Union Legislative Power (Seventh Schedule, List I)',
    mandate: [
      'Constitutional source empowering Parliament to enact the UGC Act, AICTE Act, NMC Act, and establish national regulators'
    ],
    powers: [
      'Enables Union regulators to prescribe binding national minimum qualifications, eligibility norms, and faculty standards',
      'Prevails over state legislation in the event of standards conflicts'
    ],
    limitations: [
      'Confined to coordination and standards; does not give Union day-to-day administrative ownership of state universities'
    ],
    sourceIds: ['SRC-CONST-246'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'LIST-III-ENTRY-25',
    type: 'constitutional',
    title: 'Concurrent List, Entry 25 — Education & Universities',
    abbreviation: 'List III, Entry 25',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'ART-246',
    level: 'constitutional',
    category: 'legislation',
    summary: 'Concurrent legislative power over "Education, including technical education, medical education and universities, subject to the provisions of entries 63, 64, 65 and 66 of List I; vocational and technical training of labour".',
    legalStatus: 'Concurrent Legislative Power (Seventh Schedule, List III)',
    mandate: [
      'Empowers both Parliament and State Legislatures to create universities, school boards, and educational statutes'
    ],
    powers: [
      'States can legislate on school curriculums, university establishment, fee regulation, and state admissions',
      'Parliament can legislate comprehensive national frameworks like RTE 2009'
    ],
    limitations: [
      'Expressly subordinate to Entry 66 of List I (Coordination and determination of standards in higher education)'
    ],
    sourceIds: ['SRC-CONST-246'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-254',
    type: 'constitutional',
    title: 'Article 254 — Inconsistency between Union & State Laws',
    abbreviation: 'Art. 254',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'legislation',
    summary: 'Establishes the federal repugnancy doctrine: if a State law on a Concurrent List subject conflicts with a Parliamentary law, the Parliamentary law prevails. Exception under clause (2) if State law received Presidential assent.',
    legalStatus: 'Constitutional Conflict-Resolution Rule',
    mandate: [
      'Resolves conflicts between Central education statutes and State university/school legislation'
    ],
    powers: [
      'Renders repugnant State statutory provisions void to the extent of inconsistency with central law',
      'Allows State law reserved for Presidential assent under Art. 254(2) to prevail in that State until Parliament legislates again'
    ],
    limitations: [
      'Does not apply to mere policy or circular differences; there must be an irreconcilable statutory conflict'
    ],
    sourceIds: ['SRC-CONST-254'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-368',
    type: 'constitutional',
    title: 'Article 368 — Constitutional Amendment Procedure',
    abbreviation: 'Art. 368',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'legislation',
    summary: 'Prescribes the formal constituent procedure for amending the Constitution of India. Changes to legislative lists require parliamentary two-thirds majority plus ratification by at least half of the State Legislatures.',
    legalStatus: 'Constituent Power of Parliament',
    mandate: [
      'Sole lawful mechanism for altering constitutional entries, fundamental rights, or executive boundaries'
    ],
    powers: [
      'Enacted historic amendments such as 86th Amendment (Article 21A) and 42nd Amendment (Entry 25 to Concurrent List)'
    ],
    limitations: [
      'Cannot breach the Basic Structure of the Constitution (Kesavananda Bharati v. State of Kerala)',
      'Executive ministers or department secretaries cannot amend constitutional provisions through executive circulars'
    ],
    sourceIds: ['SRC-CONST-368'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-14',
    type: 'constitutional',
    title: 'Article 14 — Equality before Law & Equal Protection',
    abbreviation: 'Art. 14',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'Prohibits arbitrary state action and mandates reasonable classification with an intelligible differentia and rational nexus to the objective in admissions, scoring, and appointments.',
    legalStatus: 'Fundamental Right (Part III)',
    mandate: [
      'Ensures fairness and non-arbitrariness in examination normalization, question keys, and counselling procedures'
    ],
    powers: [
      'Invalidates discriminatory eligibility criteria, arbitrary cutoff rules, and opaque seat allocation algorithms'
    ],
    limitations: [
      'Does not prevent lawful classification between distinct educational categories or geographic regions where justified'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-15',
    type: 'constitutional',
    title: 'Article 15 — Non-Discrimination & Special Provisions',
    abbreviation: 'Art. 15',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'admissions-counselling',
    summary: 'Prohibits discrimination on grounds of religion, race, caste, sex, or place of birth, while empowering the State to make special provisions (reservations) for SC/ST, SEBC, and EWS under clauses (4), (5), and (6).',
    legalStatus: 'Fundamental Right (Part III)',
    mandate: [
      'Constitutional authorization for reservations in educational institutions, including private unaided institutions under clause (5)'
    ],
    powers: [
      'Empowers Central and State governments to prescribe reservation quotas in admissions'
    ],
    limitations: [
      'Does not apply to minority educational institutions referred to in Article 30(1)'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-30',
    type: 'constitutional',
    title: 'Article 30 — Rights of Minorities to Establish Institutions',
    abbreviation: 'Art. 30',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'higher-education',
    summary: 'Guarantees all religious and linguistic minorities the fundamental right to establish and administer educational institutions of their choice.',
    legalStatus: 'Fundamental Right (Part III)',
    mandate: [
      'Protects institutional autonomy of minority-run schools, colleges, and professional colleges'
    ],
    powers: [
      'Enables minority management to formulate internal administration and admission quotas for community students'
    ],
    limitations: [
      'Subject to national regulatory standards of academic excellence, health, sanitation, and prevention of maladministration'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-32-226',
    type: 'constitutional',
    title: 'Articles 32 & 226 — Judicial Review & Constitutional Writs',
    abbreviation: 'Arts. 32 & 226',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'Empowers Supreme Court (Art. 32) and High Courts (Art. 226) to issue prerogative writs (Mandamus, Certiorari, Prohibition, Quo Warranto, Habeas Corpus) against unlawful educational orders, paper leaks, or ultra vires rules.',
    legalStatus: 'Constitutional Remedies & Judicial Review',
    mandate: [
      'The ultimate legal check on all educational authorities, testing agencies, and ministries'
    ],
    powers: [
      'Can strike down statutory rules, cancel compromised examinations, direct seat re-allotment, and review arbitrariness'
    ],
    limitations: [
      'Courts exercise judicial review over legality and procedural propriety; they do not ordinarily frame academic curriculum'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-73-162',
    type: 'constitutional',
    title: 'Articles 73 & 162 — Extent of Executive Power',
    abbreviation: 'Arts. 73 & 162',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'executive-administration',
    summary: 'Defines executive powers of Union (Art. 73) and States (Art. 162) as co-extensive with legislative competence, allowing executive orders in the absence of legislation provided they do not infringe fundamental rights.',
    legalStatus: 'Constitutional Executive Scope',
    mandate: [
      'Authorizes governments to formulate educational schemes, establish commissions, and issue executive guidelines'
    ],
    powers: [
      'Enables government to act through notifications where no statute occupies the field (Ram Jawaya Kapur principle)'
    ],
    limitations: [
      'Executive power cannot contravene an existing statute or violate fundamental rights without statutory backing'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ART-350A',
    type: 'constitutional',
    title: 'Article 350A — Primary Instruction in Mother Tongue',
    abbreviation: 'Art. 350A',
    sectionId: 'SEC-01',
    sectionNumber: '01',
    parentId: 'CONST-ROOT',
    level: 'constitutional',
    category: 'school-education',
    summary: 'Directs every State and local authority to endeavor to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups.',
    legalStatus: 'Special Constitutional Directive (Part XVII)',
    mandate: [
      'Guarantees regional language and mother-tongue educational facilities at elementary stage'
    ],
    powers: [
      'Directs state education departments and municipal boards to establish minority language sections where required'
    ],
    limitations: [
      'President may issue directions to States to secure the provision of such facilities'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
