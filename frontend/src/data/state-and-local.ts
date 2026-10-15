import { EducationNode } from '../types';

export const STATE_AND_LOCAL_NODES: EducationNode[] = [
  // SECTION 05: STATE & UNION TERRITORY GOVERNANCE
  {
    id: 'ST-GOVERNOR',
    type: 'executive',
    title: 'Governor of the State',
    abbreviation: 'Governor',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'SEC-05',
    level: 'state',
    category: 'executive-administration',
    summary: 'Constitutional head of the State executive (Article 153). Acts on the aid and advice of the Council of Ministers, and ex-officio Chancellor of all State Public Universities under state university statutes.',
    legalStatus: 'Constitutional Executive Head (Articles 153, 163, 166)',
    mandate: [
      'Grants assent to State education legislation under Article 200, or reserves Bills for Presidential assent under Article 254(2)',
      'Acts as Chancellor of State Universities, appointing Vice-Chancellors upon Search Committee recommendations'
    ],
    powers: [
      'Appoints Vice-Chancellors and presides over annual university convocations',
      'Can hear statutory appeals and cause chancellery inquiries into university governance irregularities'
    ],
    limitations: [
      'Operates on the aid and advice of the State Council of Ministers in executive matters',
      'Cannot unilaterally override central regulations on minimum qualifications framed by UGC/NMC'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ST-CM',
    type: 'executive',
    title: 'Chief Minister & State Council of Ministers',
    abbreviation: 'Chief Minister',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'ST-GOVERNOR',
    level: 'state',
    category: 'executive-administration',
    summary: 'The elected executive leadership of the State Government. Allocates state education portfolios, directs state budget allocations, and introduces state university legislation.',
    legalStatus: 'State Executive Leadership (Articles 163, 164)',
    mandate: [
      'Determine state educational priorities, fee concessions, state scholarship schemes, and recruitment'
    ],
    powers: [
      'Approves State Cabinet decisions for establishing new state universities, CET cells, or medical colleges'
    ],
    limitations: [
      'Subject to constitutional limits in Concurrent List Entry 25 and Entry 66 of List I'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'ST-LEGISLATURE',
    type: 'legislature',
    title: 'State Legislature (Vidhan Sabha & Vidhan Parishad)',
    abbreviation: 'State Legislature',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'ST-GOVERNOR',
    level: 'state',
    category: 'legislation',
    summary: 'Enacts State education laws under List II and List III (Concurrent List, Entry 25), including State University Acts, School Board Acts, and Private University Acts.',
    legalStatus: 'State Constitutional Legislature (Articles 168, 246)',
    mandate: [
      'Enact state statutes regulating admissions, fees, and state university governance'
    ],
    powers: [
      'Passes state public universities Acts (e.g., Maharashtra Public Universities Act, 2016)',
      'Votes on the State Education Budget and grants for state-aided schools and colleges'
    ],
    limitations: [
      'Subordinate to parliamentary statutes under Article 254 unless reserved for and granted Presidential assent'
    ],
    sourceIds: ['SRC-CONST-246', 'SRC-CONST-254'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },

  // MAHARASHTRA FLAGSHIP BRANCH
  {
    id: 'MH-GOV-ROOT',
    type: 'department',
    title: 'Government of Maharashtra — Education Departments',
    abbreviation: 'GoM Education',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'ST-CM',
    level: 'state',
    category: 'executive-administration',
    summary: 'The administrative government of Maharashtra, executing state education policies through distinct departments: School Education & Sports, and Higher & Technical Education.',
    legalStatus: 'State Government Administration',
    mandate: [
      'Administer the state educational machinery for over 100,000 schools and hundreds of higher education institutes'
    ],
    powers: [
      'Formulates state school curriculum frameworks, oversees fee regulatory authorities, and funds Zilla Parishad schools'
    ],
    limitations: [
      'Must maintain conformity with central regulatory standards prescribed by UGC, AICTE, and NMC'
    ],
    sourceIds: ['SRC-MH-CET-ACT-2015'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MH-DEPT-SCHOOL',
    type: 'department',
    title: 'School Education & Sports Department, Maharashtra',
    abbreviation: 'MH School Edu Dept',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'MH-GOV-ROOT',
    level: 'state',
    category: 'school-education',
    summary: 'Governs pre-primary through senior secondary education in Maharashtra, overseeing Directorates of Primary and Secondary Education, MSBSHSE Pune, and SCERT.',
    legalStatus: 'State Administrative Department',
    mandate: [
      'Implement RTE in Maharashtra, grant NOCs to CBSE/ICSE schools, supervise SSC and HSC board exams'
    ],
    powers: [
      'Issues Government Resolutions (GRs) regulating school fees, calendar, and staff sanction'
    ],
    limitations: [
      'Cannot arbitrarily revoke affiliation of central board schools without adhering to statutory procedure'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MH-MSBSHSE',
    type: 'schoolBoard',
    title: 'Maharashtra State Board of Secondary & Higher Secondary Education',
    abbreviation: 'MSBSHSE (State Board)',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'MH-DEPT-SCHOOL',
    level: 'state',
    category: 'examination',
    summary: 'Autonomous statutory body headquartered in Pune with 9 divisional boards (Pune, Mumbai, Nagpur, etc.). Conducts the Secondary School Certificate (SSC / Class 10) and Higher Secondary Certificate (HSC / Class 12) examinations.',
    legalStatus: 'Statutory Board (Maharashtra Act No. XLI of 1965)',
    mandate: [
      'Prescribe syllabus and textbooks for SSC and HSC courses in Maharashtra',
      'Conduct Class 10 and Class 12 state board examinations for over 3 million candidates annually'
    ],
    powers: [
      'Grants affiliation to junior colleges and secondary schools in Maharashtra',
      'Awards valid SSC and HSC marksheets and certificates recognized globally for higher education admission'
    ],
    limitations: [
      'Does not conduct university semester exams or central competitive tests like JEE or NEET'
    ],
    relatedExaminations: ['EXAM-MH-SSC', 'EXAM-MH-HSC'],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MH-SCERT',
    type: 'institution',
    title: 'State Council of Educational Research & Training, Maharashtra',
    abbreviation: 'SCERT Maharashtra',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'MH-DEPT-SCHOOL',
    level: 'state',
    category: 'school-education',
    summary: 'Designated Academic Authority under Section 29 of the RTE Act for Maharashtra. Formulates the State Curriculum Framework, designs textbooks (Balbharati), and trains teachers.',
    legalStatus: 'Autonomous State Academic Authority',
    mandate: [
      'Formulate curriculum and evaluation procedures for elementary and secondary education in the State'
    ],
    powers: [
      'Approves Balbharati syllabus and conducts state-level learning achievement surveys'
    ],
    limitations: [
      'Cannot conduct public board examinations or award formal leaving certificates'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MH-DEPT-HTE',
    type: 'department',
    title: 'Higher & Technical Education Department, Maharashtra',
    abbreviation: 'MH HTE Dept',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'MH-GOV-ROOT',
    level: 'state',
    category: 'higher-education',
    summary: 'Department in Mantralaya overseeing universities, engineering, pharmacy, polytechnics, architecture, management colleges, DTE, DHE, and State CET Cell.',
    legalStatus: 'State Administrative Department',
    mandate: [
      'Administer the Maharashtra Public Universities Act, 2016, and allocate state development grants'
    ],
    powers: [
      'Notifies centralized admission processes (CAP) and sets reservation rules for state-quota seats'
    ],
    limitations: [
      'Cannot overrule central standards prescribed by UGC and AICTE'
    ],
    sourceIds: ['SRC-MH-CET-ACT-2015'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MH-DTE',
    type: 'department',
    title: 'Directorate of Technical Education, Maharashtra',
    abbreviation: 'DTE Maharashtra',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'MH-DEPT-HTE',
    level: 'state',
    category: 'higher-education',
    summary: 'Executive directorate responsible for supervising post-SSC diploma polytechnics, degree engineering, pharmacy, and management colleges across Maharashtra.',
    legalStatus: 'State Executive Directorate',
    mandate: [
      'Approve seat matrix and ensure compliance with AICTE and state government guidelines'
    ],
    powers: [
      'Coordinates institutional approvals, verifies eligibility for CAP admission rounds'
    ],
    limitations: [
      'Does not award university degrees directly (awarded by affiliated universities like Mumbai, Pune)'
    ],
    sourceIds: ['SRC-MH-CET-ACT-2015'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'MH-CET-CELL',
    type: 'examinationAgency',
    title: 'State Common Entrance Test Cell, Maharashtra',
    abbreviation: 'Maha CET Cell',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'MH-DEPT-HTE',
    level: 'state',
    category: 'examination',
    summary: 'Statutory examination and counselling authority established under the Maharashtra Act No. XXVIII of 2015. Conducts MHT CET, MBA CET, MCA CET, Law CET, and Centralized Admission Process (CAP).',
    legalStatus: 'Statutory Examination & Admissions Agency',
    mandate: [
      'Conduct state entrance tests for professional degree and postgraduate courses across Maharashtra',
      'Execute single-window Centralized Admission Process (CAP) allocating seats based on merit and reservation'
    ],
    powers: [
      'Publishes official information brochures, admit cards, normalization percentiles, and merit lists',
      'Verifies candidate documents and executes computerized merit-preference seat allotments'
    ],
    limitations: [
      'Cannot invent reservation criteria or disregard governing court judgments and state reservation statutes',
      'Does not award academic degrees (awarded by the university to which candidate is admitted)'
    ],
    relatedExaminations: ['EXAM-MHT-CET', 'EXAM-MH-MBA-CET', 'EXAM-MH-LAW-CET'],
    sourceIds: ['SRC-MH-CET-ACT-2015'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'UT-ADMIN-LG',
    type: 'executive',
    title: 'Union Territory Governance & Administrators / LGs',
    abbreviation: 'UT Administration',
    sectionId: 'SEC-05',
    sectionNumber: '05',
    parentId: 'SEC-05',
    level: 'union-territory',
    category: 'executive-administration',
    summary: 'Governs education in UTs with legislature (Delhi, Puducherry, J&K) and UTs without legislature (Ladakh, Chandigarh, etc.) through Lieutenant Governors / Administrators and Union Home/Education ministries.',
    legalStatus: 'Union Territory Constitutional Governance (Part VIII, Articles 239, 239AA)',
    mandate: [
      'Ensure education delivery in territories directly under the President of India'
    ],
    powers: [
      'Lieutenant Governors and UT directorates administer school systems, college admissions, and scholarships'
    ],
    limitations: [
      'In UTs without legislatures, Parliament is the sole legislative body for all subjects'
    ],
    sourceIds: ['SRC-CONST-ROOT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },

  // SECTION 06: LOCAL & DISTRICT EDUCATION ADMINISTRATION
  {
    id: 'DIST-COLLECTOR',
    type: 'department',
    title: 'District Collector & District Magistrate',
    abbreviation: 'District Collector',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'SEC-06',
    level: 'district',
    category: 'executive-administration',
    summary: 'The administrative head of the district. Coordinates district development, chairs the District RTE Implementation Committee, and enforces law & order during public examinations.',
    legalStatus: 'District Executive Authority',
    mandate: [
      'Supervise overall district educational schemes (Samagra Shiksha, Mid-Day Meal/PM-POSHAN)',
      'Impose Section 144 / CrPC preventive measures around examination centers to prevent paper leaks'
    ],
    powers: [
      'Enforces anti-cheating protocols and resolves inter-departmental bottlenecks'
    ],
    limitations: [
      'Does not evaluate teacher pedagogical skills or prescribe curriculum syllabus'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'DEO-OFFICE',
    type: 'department',
    title: 'District Education Officer (DEO / Primary & Secondary)',
    abbreviation: 'DEO',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'DIST-COLLECTOR',
    level: 'district',
    category: 'school-education',
    summary: 'The principal field-level executive officer in charge of school administration, teacher transfers, school inspections, RTE 25% quota implementation, and board examination logistics.',
    legalStatus: 'District Administrative Office',
    mandate: [
      'Inspect government and recognized private schools for infrastructure and teacher norm compliance',
      'Execute admissions under Section 12(1)(c) of RTE Act for disadvantaged children'
    ],
    powers: [
      'Issues Certificates of Recognition under Section 18 of RTE Act to eligible elementary schools',
      'Can initiate derecognition proceedings against schools charging capitation fees or violating norms'
    ],
    limitations: [
      'Appeals against DEO orders lie to the Divisional Deputy Director or Director of Education'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'BEO-OFFICE',
    type: 'department',
    title: 'Block Education Officer (BEO) / Taluka Education Office',
    abbreviation: 'BEO',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'DEO-OFFICE',
    level: 'local',
    category: 'school-education',
    summary: 'Operational sub-district officer administering clusters of primary and upper-primary schools, monitoring midday meal delivery, and gathering enrollment statistics.',
    legalStatus: 'Block Level Administrative Office',
    mandate: [
      'Grassroots school monitoring, verification of teacher attendance, and textbook distribution'
    ],
    powers: [
      'Conducts physical visits and reports infrastructure deficits to DEO and Zilla Parishad'
    ],
    limitations: [
      'Has no independent statutory authority to cancel school registrations or alter board results'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'LOCAL-MUNICIPAL',
    type: 'department',
    title: 'Municipal Corporations & Urban Local Bodies',
    abbreviation: 'Municipal Corporations',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'SEC-06',
    level: 'local',
    category: 'school-education',
    summary: 'Urban local bodies (e.g., BMC, PMC) operating civic elementary schools, constructing school buildings, and maintaining neighborhood primary school registers under Twelfth Schedule (Art. 243W).',
    legalStatus: 'Urban Local Government (Part IXA)',
    mandate: [
      'Provide free primary schooling in urban municipal jurisdictions, especially for slum and low-income areas'
    ],
    powers: [
      'Employs civic school teachers, administers civic education committees'
    ],
    limitations: [
      'Must follow the academic curriculum prescribed by the State Academic Authority (SCERT)'
    ],
    sourceIds: ['SRC-CONST-ROOT', 'SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'LOCAL-PANCHAYAT',
    type: 'department',
    title: 'Panchayati Raj Institutions (Zilla Parishad & Panchayat Samiti)',
    abbreviation: 'Panchayati Raj / ZP',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'SEC-06',
    level: 'local',
    category: 'school-education',
    summary: 'Rural three-tier local governance under Eleventh Schedule (Art. 243G). In Maharashtra, Zilla Parishads operate rural schools, recruit primary teachers, and manage school funds.',
    legalStatus: 'Rural Local Government (Part IX)',
    mandate: [
      'Maintain rural primary and upper primary schools within their territorial jurisdiction'
    ],
    powers: [
      'Education Committee of Zilla Parishad manages local school infrastructure and teacher welfare'
    ],
    limitations: [
      'Operates under the oversight of the State School Education Department and RTE regulations'
    ],
    sourceIds: ['SRC-CONST-ROOT', 'SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'RTE-SMC',
    type: 'institution',
    title: 'School Management Committee (SMC)',
    abbreviation: 'SMC (RTE Sec 21)',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'SEC-06',
    level: 'local',
    category: 'school-education',
    summary: 'Statutory community body mandated in every government and aided elementary school under Section 21 of the RTE Act. 75% of members must be parents/guardians (with 50% women).',
    legalStatus: 'Statutory School Body (RTE Act, Section 21)',
    mandate: [
      'Monitor the working of the school, ensure teachers maintain regularity and punctuality',
      'Prepare and recommend the School Development Plan (SDP) under Section 22',
      'Monitor the utilization of school development grants and mid-day meal operations'
    ],
    powers: [
      'Can inspect school facilities, review pupil attendance, and bring irregularities to BEO/DEO notice'
    ],
    limitations: [
      'Has monitoring and participatory powers; cannot recruit teachers or change prescribed curricula'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  },
  {
    id: 'INST-PRINCIPAL',
    type: 'institution',
    title: 'Headteachers, Principals & School Administration',
    abbreviation: 'School Principal',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'SEC-06',
    level: 'institutional',
    category: 'school-education',
    summary: 'Day-to-day administrative and academic leader of the individual school. Ensures delivery of curriculum, maintains pupil records, implements board instructions, and manages student discipline.',
    legalStatus: 'Institutional Academic Leader',
    mandate: [
      'Ensure classroom teaching adheres to syllabus, conduct continuous and comprehensive assessment (CCE)',
      'Maintain admission register, issue transfer certificates, coordinate board exam centers'
    ],
    powers: [
      'Controls school internal academic schedule, verifies candidate exam eligibility'
    ],
    limitations: [
      'Cannot deny admission under RTE, expel elementary school children, or administer capitation fees'
    ],
    sourceIds: ['SRC-RTE-ACT-2009'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-14'
  }
];
