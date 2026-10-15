import { EducationNode } from '../types';

export const LEGISLATURE_NODES: EducationNode[] = [
  {
    id: 'LEG-PARLIAMENT',
    type: 'legislature',
    title: 'Parliament of India',
    abbreviation: 'Parliament',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'SEC-02',
    level: 'union',
    category: 'legislation',
    summary: 'The supreme federal legislative body of the Republic of India consisting of the President, Lok Sabha, and Rajya Sabha. Enacts central education statutes and votes on the Union budget.',
    legalStatus: 'Union Constitutional Legislature (Article 79)',
    mandate: [
      'Enact primary legislation under List I (Entry 66) and List III (Entry 25)',
      'Scrutinize Union education policies, regulatory conduct, and budget appropriations',
      'Pass constitutional amendments relating to education under Article 368'
    ],
    powers: [
      'Can establish or repeal statutory regulators (UGC, AICTE, NMC, etc.)',
      'Can enact national frameworks governing elementary through doctoral education',
      'Votes demands for grants and passes the annual Appropriation Bill funding central universities'
    ],
    limitations: [
      'Cannot legislate contrary to the Basic Structure or violate Part III Fundamental Rights',
      'Individual MPs cannot issue administrative orders to testing agencies or university vice-chancellors'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'LEG-LOK-SABHA',
    type: 'legislature',
    title: 'Lok Sabha — House of the People',
    abbreviation: 'Lok Sabha',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'legislation',
    summary: 'The directly elected lower house of Parliament possessing exclusive primacy in Money Bills and voting on educational budgetary grants for Union ministries.',
    legalStatus: 'House of Parliament (Article 81)',
    mandate: [
      'Debate, amend, and pass proposed education Bills introduced by the Minister of Education',
      'Vote on Demands for Grants of the Ministry of Education and Ministry of Skill Development',
      'Question ministers on examination security, university vacancies, and scheme implementation'
    ],
    powers: [
      'Exclusive authority over Money Bills (Article 109)',
      'Can move adjournment motions, calling attention notices, and parliamentary questions'
    ],
    limitations: [
      'Ordinary Bills require passage by both Houses or joint sitting under Article 108'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'LEG-RAJYA-SABHA',
    type: 'legislature',
    title: 'Rajya Sabha — Council of States',
    abbreviation: 'Rajya Sabha',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'legislation',
    summary: 'The federal upper house representing States and Union Territories. Plays a crucial review and revisionary role in all ordinary and constitutional education legislation.',
    legalStatus: 'House of Parliament (Article 80)',
    mandate: [
      'Review and debate educational legislation passed by Lok Sabha',
      'Provide federal scrutiny safeguarding State autonomy in Concurrent List educational matters',
      'Participate equally in Constitutional Amendment Bills (Article 368)'
    ],
    powers: [
      'Can introduce, amend, or reject ordinary education legislation',
      'Special powers under Article 249 to authorize Parliament to legislate on State List matters in national interest'
    ],
    limitations: [
      'Cannot reject or amend Money Bills (can only recommend amendments within 14 days)',
      'Cannot vote on Demands for Grants'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'LEG-PRESIDENT-ASSENT',
    type: 'executive',
    title: 'President’s Legislative Role & Assent',
    abbreviation: 'President (Legislative)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'legislation',
    summary: 'Constituent component of Parliament under Article 79. Grants royal assent under Article 111 converting Bills into binding Acts of Parliament, and promulgates Ordinances under Article 123.',
    legalStatus: 'Constitutional Executive & Legislative Head (Articles 79, 111, 123)',
    mandate: [
      'Grant assent or withhold/return Bills under Article 111 (except Money Bills)',
      'Promulgate urgent educational Ordinances under Article 123 when Parliament is in recess',
      'Grant Presidential assent to State education laws under Article 254(2)'
    ],
    powers: [
      'Without Presidential assent, no Bill passed by Parliament can become law',
      'Ordinances possess identical force and effect to an Act of Parliament'
    ],
    limitations: [
      'Exercises powers on the aid and advice of the Union Council of Ministers (Article 74)',
      'Does not conduct day-to-day administration of examinations or university admissions'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'PROC-LAW-MAKING',
    type: 'process',
    title: '10-Step Central Education Law-Making Process',
    abbreviation: 'Statutory Process',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'procedural-reform',
    summary: 'The mandatory procedural journey: Problem Identification → Policy Formulation → Legislative Drafting → Cabinet Approval → Bill Introduction → Committee Scrutiny → Passage → Presidential Assent → Gazette Notification → Subordinate Rules.',
    legalStatus: 'Parliamentary Rules of Procedure & Conduct of Business',
    mandate: [
      'Translates national educational policy into enforceable statutory instruments'
    ],
    powers: [
      'Creates binding statutory rights, regulatory powers, and public spending authorisations'
    ],
    limitations: [
      'An Act does not take effect until formally commenced via Gazette notification under its commencement clause'
    ],
    inputs: ['National Education Policy goals', 'Committee recommendations', 'Public consultations', 'Cabinet Note'],
    outputs: ['Enacted Act of Parliament published in Gazette of India'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'PARL-COMM-EDU',
    type: 'legislature',
    title: 'Parliamentary Standing Committee on Education',
    abbreviation: 'Standing Comm. (Education)',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Department-Related Parliamentary Standing Committee on Education, Women, Children, Youth and Sports. Examines education Bills, Demands for Grants, and annual reports of ministries.',
    legalStatus: 'Parliamentary Committee (Rules of Procedure)',
    mandate: [
      'In-depth clause-by-clause scrutiny of proposed central education legislation',
      'Summon ministry officials, regulators, and academic experts for depositions and inquiries',
      'Submit detailed advisory evaluation reports to both Houses of Parliament'
    ],
    powers: [
      'Can recommend amendments, redrafting, or reconsideration of legislative provisions'
    ],
    limitations: [
      'Recommendations are persuasive and advisory; government and Parliament are not legally mandated to adopt them'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ACT-RTE-2009',
    type: 'legalInstrument',
    title: 'Right of Children to Free and Compulsory Education Act, 2009',
    abbreviation: 'RTE Act, 2009',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'school-education',
    summary: 'Act No. 35 of 2009. Gives effect to Article 21A, establishing legal norms for elementary schools, pupil-teacher ratios, 25% economically weaker section reservation, and prohibition of screening tests.',
    legalStatus: 'Primary Central Act of Parliament',
    establishingLaw: ['Article 21A of the Constitution'],
    mandate: [
      'Guarantee 8 years of free and compulsory elementary schooling in neighborhood schools',
      'Set national quality infrastructure norms and mandate School Management Committees'
    ],
    powers: [
      'Binds all State Governments, local bodies, and recognized private schools across India',
      'Prohibits physical punishment, capitation fees, screening procedures, and unrecognized schools'
    ],
    limitations: [
      'Confined to elementary education (Classes 1-8, ages 6-14); does not govern secondary or higher education'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ACT-UGC-1956',
    type: 'legalInstrument',
    title: 'University Grants Commission Act, 1956',
    abbreviation: 'UGC Act, 1956',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'higher-education',
    summary: 'Act No. 3 of 1956. Enacted under List I Entry 66. Established the UGC to coordinate and determine standards in universities and disburse central development grants.',
    legalStatus: 'Primary Central Act of Parliament',
    mandate: [
      'Maintain national academic standards and coordinate higher education institutions across India',
      'Prescribe qualifications for university teaching staff and minimum course requirements'
    ],
    powers: [
      'Section 22: Exclusive statutory power to specify degrees that universities may confer',
      'Section 12: Powers to inquire, inspect, and disburse development grants',
      'Section 26: Subordinate regulation-making powers'
    ],
    limitations: [
      'Does not govern school boards or directly award degrees itself'
    ],
    sourceIds: ['SRC-UGC-ACT-1956'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ACT-AICTE-1987',
    type: 'legalInstrument',
    title: 'All India Council for Technical Education Act, 1987',
    abbreviation: 'AICTE Act, 1987',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'higher-education',
    summary: 'Act No. 52 of 1987. Established the AICTE for proper planning and coordinated development of technical and management education systems across India.',
    legalStatus: 'Primary Central Act of Parliament',
    mandate: [
      'Regulate engineering, technology, management, architecture, pharmacy, and applied arts education',
      'Prescribe infrastructure standards, faculty ratios, and syllabus guidelines for polytechnics and colleges'
    ],
    powers: [
      'Grants mandatory annual approvals for private unaided technical institutions and polytechnics',
      'Inspects institutions and can withdraw approval for non-compliance with norms'
    ],
    limitations: [
      'Supreme Court rulings (Bharathidasan University case) clarify that university departments do not require prior AICTE approval'
    ],
    sourceIds: ['SRC-AICTE-ACT-1987'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ACT-NMC-2019',
    type: 'legalInstrument',
    title: 'National Medical Commission Act, 2019',
    abbreviation: 'NMC Act, 2019',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Act No. 30 of 2019. Repealed the Indian Medical Council Act, 1956. Established the NMC, autonomous boards (UGMEB, PGMEB, MARB, EMRB), and statutory single medical entrance (NEET-UG).',
    legalStatus: 'Primary Central Act of Parliament',
    mandate: [
      'Regulate medical education, establish medical colleges, and maintain the National Medical Register'
    ],
    powers: [
      'Mandates uniform national entrance examination (NEET-UG) under Section 14',
      'Fixes fee guidelines for 50% seats in private medical colleges under Section 10(1)(i)'
    ],
    limitations: [
      'Does not directly conduct entrance testing itself (delegated to testing agency like NTA)'
    ],
    sourceIds: ['SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ACT-IIT-1961',
    type: 'legalInstrument',
    title: 'Institutes of Technology Act, 1961',
    abbreviation: 'IIT Act, 1961',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'higher-education',
    summary: 'Act No. 59 of 1961. Declares Indian Institutes of Technology to be Institutes of National Importance, establishing their autonomous statutory charters and the national IIT Council.',
    legalStatus: 'Primary Central Act of Parliament',
    mandate: [
      'Confer autonomous degree-awarding authority and governance structures on premier technological institutes'
    ],
    powers: [
      'Institutes have statutory power to frame academic curricula, determine entrance standards, and confer BTech/MTech/PhD degrees'
    ],
    limitations: [
      'IITs operate outside the day-to-day administrative control of the UGC'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ACT-CU-2009',
    type: 'legalInstrument',
    title: 'Central Universities Act, 2009',
    abbreviation: 'Central Universities Act',
    sectionId: 'SEC-02',
    sectionNumber: '02',
    parentId: 'LEG-PARLIAMENT',
    level: 'union',
    category: 'higher-education',
    summary: 'Act No. 25 of 2009. Established 16 new Central Universities and provides the uniform statutory governance template for central university charters in India.',
    legalStatus: 'Primary Central Act of Parliament',
    mandate: [
      'Establish central teaching and research universities with President of India as Visitor'
    ],
    powers: [
      'Empowers universities to affiliate colleges, conduct research, and confer recognized degrees'
    ],
    limitations: [
      'Requires presidential approval (via Visitor) for amendments to First Statutes'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
