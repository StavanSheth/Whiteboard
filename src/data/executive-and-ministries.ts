import { EducationNode } from '../types';

export const EXECUTIVE_NODES: EducationNode[] = [
  // SECTION 03: UNION EXECUTIVE & MINISTRY OF EDUCATION
  {
    id: 'EXEC-PRESIDENT',
    type: 'executive',
    title: 'President of India — Executive Head',
    abbreviation: 'President',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'SEC-03',
    level: 'union',
    category: 'executive-administration',
    summary: 'The formal executive head of the Union of India (Article 53). All executive action of the Government of India is expressed to be taken in the name of the President (Article 77).',
    legalStatus: 'Constitutional Executive Head (Articles 53, 74, 77)',
    mandate: [
      'Exercises executive power on the aid and advice of the Union Council of Ministers headed by the Prime Minister',
      'Acts as Visitor to all Central Universities, IITs, NITs, and other premier central institutions'
    ],
    powers: [
      'Appoints Vice-Chancellors and Chancellors of Central Universities in visitorial capacity',
      'Approves First Statutes and can cause visitorial inquiries into university maladministration'
    ],
    limitations: [
      'Does not act unilaterally; operates strictly per constitutional advice of the Council of Ministers'
    ],
    sourceIds: ['SRC-CONST-ROOT', 'SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXEC-PM',
    type: 'executive',
    title: 'Prime Minister of India',
    abbreviation: 'Prime Minister',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'EXEC-PRESIDENT',
    level: 'union',
    category: 'executive-administration',
    summary: 'The head of the Union Government and leader of the Council of Ministers (Article 74). Drives national educational vision, NEP reforms, and chairs inter-ministerial policy coordination.',
    legalStatus: 'Head of Union Government (Articles 74, 75, 78)',
    mandate: [
      'Leads executive policy and guides Cabinet decisions regarding education reforms and funding allocations',
      'Chairs National Council / Cabinet Committees overseeing human resource development and skills'
    ],
    powers: [
      'Recommends ministerial portfolios, including Union Minister of Education, to the President',
      'Directs inter-ministerial alignment across Education, Health, Skills, and Technology'
    ],
    limitations: [
      'Cannot personally alter statutory requirements or override judicial decrees by decree'
    ],
    sourceIds: ['SRC-CONST-ROOT', 'SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXEC-CABINET',
    type: 'executive',
    title: 'Union Cabinet & Council of Ministers',
    abbreviation: 'Union Cabinet',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'EXEC-PM',
    level: 'union',
    category: 'executive-administration',
    summary: 'The supreme collective decision-making body of the Union Government. Approves major education policies (e.g., NEP 2020), national schemes, and approves legislative draft Bills before Parliament.',
    legalStatus: 'Cabinet under Rules of Business (Article 77)',
    mandate: [
      'Collective review and sanction of major national educational schemes and legislative proposals'
    ],
    powers: [
      'Approves creation of autonomous bodies like NTA, approves budgetary outlays for Samagra Shiksha and PM-USHA',
      'Directs Union Government legislative agenda for education sessions'
    ],
    limitations: [
      'Must seek parliamentary approval for primary legislation and budgetary appropriations'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'EXEC-MIN-EDU',
    type: 'executive',
    title: 'Union Minister of Education',
    abbreviation: 'Minister of Education',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'EXEC-CABINET',
    level: 'union',
    category: 'executive-administration',
    summary: 'Cabinet Minister in political charge of the Ministry of Education. Leads national policy formulation, introduces educational Bills in Parliament, and supervises departmental implementation.',
    legalStatus: 'Cabinet Minister (Article 75)',
    mandate: [
      'Political leadership of Department of School Education & Literacy and Department of Higher Education',
      'Answering parliamentary questions and presenting annual budgetary demands for education'
    ],
    powers: [
      'Approves ministerial circulars, scheme guidelines, and policy directives within delegated powers',
      'Oversees central autonomous bodies (CBSE, NCERT, NTA, KVS, NVS) and regulators (UGC, AICTE)'
    ],
    limitations: [
      'Cannot personally enact statutes or overrule judicial rulings on admissions and reservation',
      'Cannot instruct a statutory regulator to violate its own parent Act'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-EDU',
    type: 'department',
    title: 'Ministry of Education (MoE)',
    abbreviation: 'MoE',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'EXEC-MIN-EDU',
    level: 'union',
    category: 'executive-administration',
    summary: 'The premier Union ministry responsible for national education development, split under the Allocation of Business Rules into two major departments: School Education & Literacy, and Higher Education.',
    legalStatus: 'Union Ministry (Allocation of Business Rules, 1961)',
    mandate: [
      'Formulate National Education Policy and coordinate implementation across States and Union Territories',
      'Administer Central Sector and Centrally Sponsored Schemes, national scholarships, and institutional funding'
    ],
    powers: [
      'Funds central universities, IITs, NITs, IIMs, IISERs, and national research programmes',
      'Coordinates national standards, centrally sponsored schemes (Samagra Shiksha, PM-SHRI, PM-USHA)'
    ],
    limitations: [
      'Cannot directly administer state government schools or state university departments'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'DEPT-SE-L',
    type: 'department',
    title: 'Department of School Education & Literacy',
    abbreviation: 'DSEL',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'MIN-EDU',
    level: 'union',
    category: 'school-education',
    summary: 'Department within MoE focused on preschool, elementary, secondary, and adult education, teacher welfare, RTE compliance, and national school networks.',
    legalStatus: 'Government Department',
    leadershipRole: 'Led by Secretary (School Education & Literacy), IAS',
    mandate: [
      'Oversees elementary and secondary school policies, RTE Act enforcement guidelines, and adult literacy',
      'Administratively oversees NCERT, CBSE, NIOS, KVS, NVS, and Central Tibetan School Administration'
    ],
    powers: [
      'Disburses central share of Samagra Shiksha funds to State Implementation Societies',
      'Formulates national curriculum frameworks in collaboration with NCERT'
    ],
    limitations: [
      'State governments retain operational control over state schools, regional curricula, and teacher recruitment'
    ],
    sourceIds: ['SRC-AOB-1961', 'SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'DEPT-HE',
    type: 'department',
    title: 'Department of Higher Education',
    abbreviation: 'DHE',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'MIN-EDU',
    level: 'union',
    category: 'higher-education',
    summary: 'Department within MoE governing universities, technical institutes, autonomous research bodies, statutory councils (UGC, AICTE), and national testing agencies.',
    legalStatus: 'Government Department',
    leadershipRole: 'Led by Secretary (Higher Education), IAS',
    mandate: [
      'Coordinate central university governance, technical and management education policy, and international partnerships',
      'Administratively coordinate statutory regulators (UGC, AICTE) and national testing agency (NTA)'
    ],
    powers: [
      'Disburses block grants and project funding to Central Universities, IITs, NITs, IIMs, and IIITs',
      'Formulates policy directives for national entrance testing and centralized seat allocation'
    ],
    limitations: [
      'Cannot exercise the statutory powers explicitly assigned by Parliament to independent regulators'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ROLE-SECRETARY',
    type: 'executive',
    title: 'Secretary to Government of India',
    abbreviation: 'Secretary (IAS)',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'MIN-EDU',
    level: 'union',
    category: 'executive-administration',
    summary: 'The senior-most civil servant in the department. Acts as administrative head, chief policy advisor to the minister, and accounting officer for all budgetary expenditures.',
    legalStatus: 'Senior Civil Service Executive Rank',
    mandate: [
      'Responsible for department administrative efficiency, scheme implementation, and financial accountability',
      'Exercises delegated statutory and financial powers under General Financial Rules (GFR)'
    ],
    powers: [
      'Sanctions expenditures within delegated ministerial financial powers and signs official notifications',
      'Appears before Public Accounts Committee (PAC) and Parliamentary Standing Committees'
    ],
    limitations: [
      'Bound by cabinet decisions, ministerial approvals, and statutory rules'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'RULE-AOB-1961',
    type: 'legalInstrument',
    title: 'Allocation of Business Rules, 1961',
    abbreviation: 'AoB Rules, 1961',
    sectionId: 'SEC-03',
    sectionNumber: '03',
    parentId: 'MIN-EDU',
    level: 'union',
    category: 'legislation',
    summary: 'Statutory rules issued under Article 77(3) of the Constitution formally demarcating the precise subject-matter jurisdiction allocated to each Union ministry and department.',
    legalStatus: 'Constitutional Executive Rules (Article 77(3))',
    mandate: [
      'Prevents jurisdictional clashes between ministries by defining official remits'
    ],
    powers: [
      'Definitive authority determining which ministry possesses competence over an education matter'
    ],
    limitations: [
      'Cannot grant executive powers that violate an enacted statute of Parliament'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },

  // SECTION 04: OTHER UNION MINISTRIES AFFECTING EDUCATION
  {
    id: 'MIN-WCD',
    type: 'department',
    title: 'Ministry of Women & Child Development',
    abbreviation: 'MoWCD',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'school-education',
    summary: 'Operates India’s vast network of ~1.4 million Anganwadi centers under Mission Saksham Anganwadi and Poshan 2.0, providing early childhood care and preschool education for children below 6.',
    legalStatus: 'Union Ministry',
    mandate: [
      'Early childhood care, child nutrition, and pre-primary informal learning below age 6 under Article 45'
    ],
    powers: [
      'Funds Anganwadi workers, formulates national ECCE curriculum guidelines in coordination with MoE'
    ],
    limitations: [
      'Does not regulate formal school education, Class 10/12 exams, or university standards'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-HFW',
    type: 'department',
    title: 'Ministry of Health & Family Welfare',
    abbreviation: 'MoHFW',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'professional-regulation',
    summary: 'Responsible for national health policy, AIIMS network, central medical institutions, and administrative coordination with the National Medical Commission (NMC).',
    legalStatus: 'Union Ministry',
    mandate: [
      'Oversees medical, dental, and nursing education frameworks and funding for central medical institutes'
    ],
    powers: [
      'Establishes new AIIMS institutes under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)',
      'Conducts Medical Counselling Committee (MCC) seat allocation for 15% All India Quota'
    ],
    limitations: [
      'Academic and recognition standards are governed by statutory bodies (NMC, NDC, INC)'
    ],
    sourceIds: ['SRC-AOB-1961', 'SRC-NMC-ACT-2019'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-MSDE',
    type: 'department',
    title: 'Ministry of Skill Development & Entrepreneurship',
    abbreviation: 'MSDE',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'higher-education',
    summary: 'Coordinates skill development, vocational training, industrial training institutes (ITIs), apprenticeships, and the National Council for Vocational Education and Training (NCVET).',
    legalStatus: 'Union Ministry',
    mandate: [
      'Standardize vocational training, implement National Skills Qualification Framework (NSQF)',
      'Administer Pradhan Mantri Kaushal Vikas Yojana (PMKVY) and Apprenticeship Act, 1961'
    ],
    powers: [
      'Grants recognition to Awarding Bodies and Assessment Agencies in skill education'
    ],
    limitations: [
      'Does not award conventional university bachelor degrees (BTech, BA, BSc)'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-DEFENCE',
    type: 'department',
    title: 'Ministry of Defence (MoD)',
    abbreviation: 'MoD',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'school-education',
    summary: 'Administers Sainik Schools, Rashtriya Military Schools, National Defence Academy (NDA), and armed forces specialized training institutes.',
    legalStatus: 'Union Ministry',
    mandate: [
      'Provide feeder military school education and defence officer leadership training'
    ],
    powers: [
      'Sainik Schools Society oversees Sainik schools affiliated with CBSE'
    ],
    limitations: [
      'Civilian universities and colleges operate outside its administrative jurisdiction'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-LAW',
    type: 'department',
    title: 'Ministry of Law & Justice',
    abbreviation: 'MoL&J',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'legislation',
    summary: 'Responsible for legislative drafting of education Bills, advising departments on legal competence, and coordinating judicial infrastructure.',
    legalStatus: 'Union Ministry',
    mandate: [
      'Drafts Acts, Ordinances, and statutory notifications for the Ministry of Education'
    ],
    powers: [
      'Legal scrutiny of regulatory guidelines and cabinet notes prior to introduction'
    ],
    limitations: [
      'Does not prescribe professional legal education standards (statutory duty of Bar Council of India)'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-AGRI',
    type: 'department',
    title: 'Ministry of Agriculture & Farmers Welfare',
    abbreviation: 'MoA&FW',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'higher-education',
    summary: 'Governs agricultural education and research across India through the Indian Council of Agricultural Research (ICAR) and central/state agricultural universities.',
    legalStatus: 'Union Ministry',
    mandate: [
      'Coordinate and accredit agricultural, horticultural, veterinary, and dairy educational programs'
    ],
    powers: [
      'ICAR accredits agricultural colleges and conducts All India Entrance Examination for Agriculture (AIEEA)'
    ],
    limitations: [
      'Non-agricultural engineering and medical colleges are outside its remit'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-TRIBAL',
    type: 'department',
    title: 'Ministry of Tribal Affairs',
    abbreviation: 'MoTA',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'funding-finance',
    summary: 'Operates Eklavya Model Residential Schools (EMRS) for tribal children and funds national fellowship and overseas scholarships for ST students.',
    legalStatus: 'Union Ministry',
    mandate: [
      'Targeted educational advancement for Scheduled Tribe populations under Article 46'
    ],
    powers: [
      'National Education Society for Tribal Students (NESTS) manages recruitment and standards for EMRS'
    ],
    limitations: [
      'Does not prescribe general national school curricula; adopts CBSE affiliated frameworks'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-SJE',
    type: 'department',
    title: 'Ministry of Social Justice & Empowerment',
    abbreviation: 'MoSJ&E',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'funding-finance',
    summary: 'Administers welfare and scholarship schemes for Scheduled Castes, Other Backward Classes, EWS, and persons with disabilities, and coordinates with RCI.',
    legalStatus: 'Union Ministry',
    mandate: [
      'Educational welfare funding under Article 46, Post-Matric Scholarship for SC students, Top Class Education scheme'
    ],
    powers: [
      'Disburses DBT scholarship funding via National Scholarship Portal (NSP)'
    ],
    limitations: [
      'Does not set academic curriculum or conduct university examinations'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MIN-FINANCE',
    type: 'department',
    title: 'Ministry of Finance (MoF)',
    abbreviation: 'MoF',
    sectionId: 'SEC-04',
    sectionNumber: '04',
    parentId: 'SEC-04',
    level: 'union',
    category: 'funding-finance',
    summary: 'Enforces expenditure control, financial concurrence, General Financial Rules (GFR), and prepares the Union Budget presented to Parliament.',
    legalStatus: 'Union Ministry',
    mandate: [
      'Financial governance and fiscal allocation for all central education schemes'
    ],
    powers: [
      'Department of Expenditure sanctions creation of new educational posts and autonomous bodies'
    ],
    limitations: [
      'Does not evaluate academic merits or prescribe pedagogical content'
    ],
    sourceIds: ['SRC-AOB-1961'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
