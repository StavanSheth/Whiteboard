import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V5: SectionMeta[] = [
  // --- BANKING SYSTEM (Sections 01 - 06) ---
  {
    id: 'SEC-BANK-01',
    number: '01',
    title: 'Central Banking & Apex Monetary Authority',
    subtitle: 'Reserve Bank of India (RBI), Monetary Policy Committee (MPC), and Banking Regulation',
    summary: 'The central monetary and banking regulator of India: RBI established under the RBI Act, 1934, and Banking Regulation Act, 1949. Formulates monetary policy, issues currency, supervises banks, and manages payment systems.',
    iconName: 'Landmark',
    expectedSubsections: ['01.1 RBI Governance & Governor', '01.2 Monetary Policy Committee (MPC)', '01.3 Banking Supervision & Licensing', '01.4 Currency & Payment Systems'],
    expectedAuthorities: ['Reserve Bank of India (RBI)', 'Monetary Policy Committee']
  },
  {
    id: 'SEC-BANK-02',
    number: '02',
    title: 'Government Policy & Public Sector Ownership',
    subtitle: 'Ministry of Finance, Department of Financial Services (DFS), and Financial Inclusion',
    summary: 'The parallel government policy and ownership channel: DFS represents the President of India as the majority shareholder in Public Sector Banks (PSBs), directs priority sector lending, and runs social security schemes (PMJDY).',
    iconName: 'Building2',
    expectedSubsections: ['02.1 Department of Financial Services (DFS)', '02.2 PSB Recapitalization & Board Governance', '02.3 Financial Inclusion Programmes (Jan Dhan)'],
    expectedAuthorities: ['Ministry of Finance', 'Department of Financial Services']
  },
  {
    id: 'SEC-BANK-03',
    number: '03',
    title: 'Commercial Banks & Banking Institutions',
    subtitle: 'Public Sector Banks, Private Banks, Foreign Banks, Small Finance Banks, and RRBs',
    summary: 'The operational banking tier serving retail and corporate customers: 12 Public Sector Banks (SBI, PNB, BoB), Private Sector Banks (HDFC, ICICI, Axis), Regional Rural Banks (RRBs), Small Finance Banks (SFBs), and Payments Banks.',
    iconName: 'Building2',
    expectedSubsections: ['03.1 State Bank of India & Nationalised Banks', '03.2 Private Commercial Banks', '03.3 Small Finance & Payments Banks', '03.4 Regional Rural Banks (RRBs)'],
    expectedAuthorities: ['State Bank of India', 'Indian Banks’ Association (IBA)', 'Commercial Banks']
  },
  {
    id: 'SEC-BANK-04',
    number: '04',
    title: 'Co-operative Credit & Rural Development Apex',
    subtitle: 'NABARD, Urban Co-op Banks, State Co-op Banks, DCCBs, and Primary Societies (PACS)',
    summary: 'Rural and co-operative credit architecture: NABARD providing refinance and inspection, dual regulation of Urban Co-operative Banks (RBI & Registrar of Co-operative Societies), District Central Co-op Banks, and PACS.',
    iconName: 'Building2',
    expectedSubsections: ['04.1 NABARD Refinance & Development', '04.2 Urban Co-operative Banks (UCBs)', '04.3 Three-Tier Rural Co-operative Credit Structure'],
    expectedAuthorities: ['NABARD', 'Registrar of Co-operative Societies', 'State Co-operative Banks']
  },
  {
    id: 'SEC-BANK-05',
    number: '05',
    title: 'Non-Banking Financial Companies (NBFCs)',
    subtitle: 'Scale-based NBFC Regulation (Base, Middle, Upper, Top Layers) and Housing Finance',
    summary: 'Shadow banking and specialized lending institutions: NBFCs (Investment, Infrastructure, Microfinance, Factoring) and Housing Finance Companies (HFCs) regulated under RBI Scale-Based Regulatory (SBR) framework.',
    iconName: 'Layers',
    expectedSubsections: ['05.1 Scale-Based Regulatory Framework (SBR)', '05.2 Housing Finance Companies (HFCs)', '05.3 Systemically Important NBFCs'],
    expectedAuthorities: ['RBI Department of Non-Banking Supervision', 'National Housing Bank (NHB)']
  },
  {
    id: 'SEC-BANK-06',
    number: '06',
    title: 'Customer Protection & Grievance Redressal',
    subtitle: 'Reserve Bank - Integrated Ombudsman Scheme (RB-IOS 2021) and Consumer Commissions',
    summary: 'Three-tiered grievance mechanism for depositors and borrowers: Internal Grievance Redressal (Branch/Bank Nodal Officer) → RBI Integrated Ombudsman Scheme (online CMS portal) → Consumer Disputes Redressal Commissions / High Court.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['06.1 Internal Grievance Mechanism', '06.2 RBI Integrated Ombudsman (RB-IOS 2021)', '06.3 Appellate Authority in RBI', '06.4 Consumer Fora & Debt Recovery'],
    expectedAuthorities: ['RBI Ombudsman Offices', 'Consumer Dispute Redressal Commissions']
  },

  // --- JUDICIAL SYSTEM (Sections 07 - 11) ---
  {
    id: 'SEC-JUD-07',
    number: '07',
    title: 'Supreme Court of India (Apex Constitutional Court)',
    subtitle: 'Articles 124 to 147: Chief Justice of India, Collegium, and Supreme Appellate Authority',
    summary: 'The highest court of the land and apex interpreter of the Constitution. Exercises Original Jurisdiction (Art 131), Appellate Jurisdiction (Art 132-134), Special Leave Petitions (Art 136), Writ Jurisdiction (Art 32), and Advisory Jurisdiction (Art 143). Law declared is binding across all Indian courts (Art 141).',
    iconName: 'Scale',
    expectedSubsections: ['07.1 Chief Justice of India & Composition', '07.2 Original & Writ Jurisdiction (Art 32, 131)', '07.3 Appellate Jurisdiction & SLP (Art 136)', '07.4 Binding Precedent (Art 141) & Court of Record (Art 129)'],
    expectedAuthorities: ['Supreme Court of India', 'Chief Justice of India', 'Supreme Court Collegium']
  },
  {
    id: 'SEC-JUD-08',
    number: '08',
    title: 'High Courts of States & Union Territories',
    subtitle: 'Articles 214 to 231: Constitutional Writ Courts of Record (Bombay High Court Example)',
    summary: 'Apex judicial authority of the State. Exercises plenary Writ Jurisdiction under Article 226 for enforcement of Fundamental Rights and any legal right, Superintendence over all subordinate courts and tribunals under Article 227, and original/appellate commercial jurisdiction.',
    iconName: 'Scale',
    expectedSubsections: ['08.1 High Court of Judicature at Bombay', '08.2 Writ Powers under Article 226 & 227', '08.3 Appellate & Revisionary Jurisdiction', '08.4 Subordinate Judiciary Administration'],
    expectedAuthorities: ['High Court of Judicature at Bombay', 'High Court Benches (Nagpur, Aurangabad, Goa)']
  },
  {
    id: 'SEC-JUD-09',
    number: '09',
    title: 'District & Subordinate Judiciary',
    subtitle: 'Principal District & Sessions Court, Civil Courts, and Criminal Magistrates',
    summary: 'The primary tier of justice delivery: Principal District and Sessions Judge (civil & criminal head of district), Civil Judge Senior Division (unlimited pecuniary claims), Civil Judge Junior Division, Chief Judicial Magistrate (CJM), and Judicial Magistrate First Class (JMFC).',
    iconName: 'Landmark',
    expectedSubsections: ['09.1 Principal District & Sessions Judge', '09.2 Civil Court Hierarchy (Sr/Jr Division)', '09.3 Criminal Court Hierarchy (Sessions, CJM, JMFC)', '09.4 Small Causes & Family Courts'],
    expectedAuthorities: ['District & Sessions Court Pune', 'Civil Court Senior Division', 'Chief Judicial Magistrate']
  },
  {
    id: 'SEC-JUD-10',
    number: '10',
    title: 'Specialized Tribunals & Quasi-Judicial Boards',
    subtitle: 'NCLT/NCLAT, Central Administrative Tribunal (CAT), DRT/DRAT, and NGT',
    summary: 'Specialized adjudicatory bodies established under Article 323A and 323B: National Company Law Tribunal (insolvency/IBC and corporate disputes), Debt Recovery Tribunal (bank NPA recovery), CAT (service matters of civil servants), and National Green Tribunal (environment).',
    iconName: 'Scale',
    expectedSubsections: ['10.1 NCLT & NCLAT (Corporate & Insolvency)', '10.2 Debt Recovery Tribunal (DRT / DRAT)', '10.3 Central Administrative Tribunal (CAT)', '10.4 National Green Tribunal (NGT)'],
    expectedAuthorities: ['NCLT Mumbai Bench', 'Debt Recovery Tribunal', 'Central Administrative Tribunal']
  },
  {
    id: 'SEC-JUD-11',
    number: '11',
    title: 'Citizen Access, Legal Services & Lok Adalats',
    subtitle: 'NALSA, State Legal Services Authority, Lok Adalats, and Free Legal Aid (Art 39A)',
    summary: 'Statutory framework under the Legal Services Authorities Act, 1987, ensuring equal access to justice under Article 39A: Free legal aid for poor, women, and SC/ST, National Lok Adalats for consensual non-appealable settlements, and Permanent Lok Adalats for public utility services.',
    iconName: 'Users',
    expectedSubsections: ['11.1 NALSA & Free Legal Aid (Art 39A)', '11.2 Lok Adalats (Non-appealable Consent Awards)', '11.3 Permanent Lok Adalats for Public Utilities', '11.4 Victim Compensation Schemes'],
    expectedAuthorities: ['National Legal Services Authority (NALSA)', 'Maharashtra State Legal Services Authority (MSLSA)']
  }
];

export const NODES_V5: EducationNode[] = [
  // --- BANKING SYSTEM NODES ---
  {
    id: 'BANK-RBI',
    type: 'bank',
    title: 'Reserve Bank of India',
    abbreviation: 'RBI',
    sectionId: 'SEC-BANK-01',
    sectionNumber: '01',
    level: 'union',
    category: 'funding-finance',
    summary: 'The central bank and supreme monetary authority of India. Regulates banking companies, administers monetary policy, controls currency issuance, supervises the credit system, and operates national payment rails.',
    establishingLaw: ['Reserve Bank of India Act, 1934', 'Banking Regulation Act, 1949', 'Payment and Settlement Systems Act, 2007'],
    mandate: [
      'Maintain price stability while keeping in mind the objective of economic growth.',
      'Regulate and supervise commercial banks, co-operative banks, and NBFCs in the public interest and depositor protection.'
    ],
    powers: [
      'Issue banking licenses and cancel licenses of non-compliant banks.',
      'Fix Cash Reserve Ratio (CRR), Statutory Liquidity Ratio (SLR), and Repo Rate (via MPC).',
      'Conduct statutory inspection of banks; place troubled banks under Prompt Corrective Action (PCA) or moratorium.'
    ],
    limitations: [
      'Does not manage day-to-day loan sanctions or individual branch transactions for retail customers.'
    ],
    bankingJudicialDetails: {
      domain: 'banking',
      regulatoryBodyOrApex: 'Reserve Bank of India (Central Office: Mumbai)',
      tier: 'Apex Central Bank & Regulatory Authority',
      jurisdictionOrScope: 'Pan-India monetary policy, banking regulation, foreign exchange (FEMA), and payment systems',
      appointmentProcess: 'Governor and Deputy Governors appointed by Appointments Committee of the Cabinet (ACC)',
      grievanceOrAppellateRoute: 'Reserve Bank - Integrated Ombudsman Scheme (RB-IOS 2021)'
    },
    sourceIds: ['SRC-RBI-ACT-1934', 'SRC-BR-ACT-1949'],
    verificationStatus: 'verified'
  },
  {
    id: 'BANK-DFS-FINANCE',
    type: 'department',
    title: 'Department of Financial Services (Ministry of Finance)',
    abbreviation: 'DFS-MoF',
    sectionId: 'SEC-BANK-02',
    sectionNumber: '02',
    level: 'union',
    category: 'funding-finance',
    summary: 'Department within the Union Ministry of Finance overseeing government policy, legislative initiatives, capital recapitalization, and state ownership rights in Public Sector Banks, Financial Institutions, and Insurance Companies.',
    establishingLaw: ['Government of India Allocation of Business Rules', 'Banking Companies (Acquisition & Transfer) Acts'],
    mandate: [
      'Administer government shareholding in nationalised banks and State Bank of India.',
      'Spearhead national financial inclusion, social security schemes (Pradhan Mantri Jan Dhan Yojana), and MSME credit support.'
    ],
    powers: [
      'Approve equity infusion and recapitalization bonds for Public Sector Banks.',
      'Advise ACC on appointment of Managing Directors (MDs) and Non-Executive Chairmen in PSBs via Financial Services Institutions Bureau (FSIB).'
    ],
    limitations: [
      'Cannot instruct RBI on technical regulatory, monetary, or risk provisioning norms.'
    ],
    bankingJudicialDetails: {
      domain: 'banking',
      regulatoryBodyOrApex: 'Ministry of Finance, Government of India',
      tier: 'Union Administrative & Policy Department',
      jurisdictionOrScope: 'Public Sector Banks, Financial Institutions (NABARD, SIDBI, EXIM, NHB), and Insurance PSUs',
      appointmentProcess: 'Headed by Secretary (Financial Services), senior IAS officer',
      grievanceOrAppellateRoute: 'CPGRAMS Central Grievance Portal'
    },
    sourceIds: ['SRC-GOI-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'BANK-SBI',
    type: 'bank',
    title: 'State Bank of India',
    abbreviation: 'SBI',
    sectionId: 'SEC-BANK-03',
    sectionNumber: '03',
    level: 'union',
    category: 'funding-finance',
    summary: 'India’s largest commercial bank and a Fortune 500 public sector statutory corporation, holding over 22% market share in deposits and loans, with more than 22,000 branches nationwide.',
    establishingLaw: ['State Bank of India Act, 1955 (Act No. 23 of 1955)'],
    mandate: [
      'Deliver commercial banking services, rural credit, corporate lending, and government treasury transactions across India and abroad.'
    ],
    powers: [
      'Accept public deposits, extend consumer and commercial credit, issue letters of credit, and manage foreign exchange.',
      'Operate as the primary fiscal agent of the Reserve Bank of India and central/state governments.'
    ],
    limitations: [
      'Designated a Domestic Systemically Important Bank (D-SIB); subject to higher Tier-1 capital requirements and strict RBI supervision.'
    ],
    bankingJudicialDetails: {
      domain: 'banking',
      regulatoryBodyOrApex: 'Reserve Bank of India',
      tier: 'Public Sector Commercial Bank / D-SIB',
      jurisdictionOrScope: 'Nationwide retail, agricultural, SME, and wholesale corporate banking',
      appointmentProcess: 'Chairman appointed by ACC on recommendation of FSIB',
      grievanceOrAppellateRoute: 'Branch Manager → Principal Nodal Officer → RBI Integrated Ombudsman'
    },
    sourceIds: ['SRC-SBI-ACT-1955'],
    verificationStatus: 'verified'
  },
  {
    id: 'BANK-NABARD',
    type: 'bank',
    title: 'National Bank for Agriculture and Rural Development',
    abbreviation: 'NABARD',
    sectionId: 'SEC-BANK-04',
    sectionNumber: '04',
    level: 'union',
    category: 'funding-finance',
    summary: 'Apex development financial institution established under an Act of Parliament to provide credit flow and promotional refinance for agriculture, small scale industries, cottage and village industries, and rural crafts.',
    establishingLaw: ['National Bank for Agriculture and Rural Development Act, 1981 (Act No. 61 of 1981)'],
    mandate: [
      'Promote sustainable rural prosperity through credit support, institution building, and rural infrastructure financing (RIDF).'
    ],
    powers: [
      'Provide short-term and long-term refinance to State Co-operative Banks, District Central Co-op Banks, and Regional Rural Banks (RRBs).',
      'Inspect State Co-operative Banks and RRBs under Section 35(6) of the Banking Regulation Act, 1949.'
    ],
    limitations: [
      'Does not provide direct individual retail banking accounts or consumer chequeing services to ordinary citizens.'
    ],
    bankingJudicialDetails: {
      domain: 'banking',
      regulatoryBodyOrApex: 'Reserve Bank of India & Ministry of Finance',
      tier: 'All India Development Financial Institution (AIFI)',
      jurisdictionOrScope: 'Rural agriculture, infrastructure financing (RIDF), and co-operative banking refinance pan-India',
      appointmentProcess: 'Chairman appointed by Government of India in consultation with RBI',
      grievanceOrAppellateRoute: 'Internal Vigilance & Grievance Officer'
    },
    sourceIds: ['SRC-NABARD-ACT-1981'],
    verificationStatus: 'verified'
  },
  {
    id: 'BANK-OMBUDSMAN',
    type: 'process',
    title: 'Reserve Bank - Integrated Ombudsman Scheme',
    abbreviation: 'RB-IOS',
    sectionId: 'SEC-BANK-06',
    sectionNumber: '06',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Single-window, cost-free statutory dispute resolution mechanism established by RBI in November 2021 by integrating earlier Banking, NBFC, and Digital Transactions Ombudsman schemes.',
    establishingLaw: ['Reserve Bank - Integrated Ombudsman Scheme, 2021', 'Banking Regulation Act, 1949 (Sec 35A)'],
    mandate: [
      'Provide expeditious, cost-free, and neutral resolution of customer complaints relating to deficiency in banking and financial services.'
    ],
    powers: [
      'Facilitate conciliation between customer and regulated entity.',
      'Pass binding Awards granting compensation up to Rs. 20 lakhs for direct loss and up to Rs. 1 lakh for harassment and mental anguish.'
    ],
    limitations: [
      'Customer must first lodge a complaint with the bank and wait 30 days without satisfactory resolution before approaching Ombudsman.',
      'Does not adjudicate commercial lending disputes or sub-judice court cases.'
    ],
    bankingJudicialDetails: {
      domain: 'banking',
      regulatoryBodyOrApex: 'Reserve Bank of India',
      tier: 'Statutory Administrative Grievance Mechanism',
      jurisdictionOrScope: 'All Scheduled Commercial Banks, Regional Rural Banks, Urban Co-op Banks, Non-Banking Financial Companies, and Payment System Participants',
      appointmentProcess: 'Ombudsman appointed by RBI from senior CGM / GM ranks',
      grievanceOrAppellateRoute: 'Appellate Authority: Executive Director in-charge of Consumer Education and Protection Department (CEPD), RBI'
    },
    sourceIds: ['SRC-RBI-IOS-2021'],
    verificationStatus: 'verified'
  },

  // --- JUDICIAL SYSTEM NODES ---
  {
    id: 'JUD-SUPREME-COURT',
    type: 'court',
    title: 'Supreme Court of India',
    abbreviation: 'SCI',
    sectionId: 'SEC-JUD-07',
    sectionNumber: '07',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'The apex court of India, guardian of the Constitution, and highest appellate authority under Part V Chapter IV (Articles 124-147). Comprises the Chief Justice of India and up to 33 puisne judges. Its decisions bind all courts in India under Article 141.',
    establishingLaw: ['Constitution of India (Articles 124 to 147)', 'Supreme Court (Number of Judges) Act, 1956'],
    mandate: [
      'Uphold the supremacy of the Constitution and protect Fundamental Rights of citizens through prerogative writs (Article 32).',
      'Act as the final court of appeal on civil, criminal, and constitutional questions.'
    ],
    powers: [
      'Original Jurisdiction in disputes between Union and States (Article 131).',
      'Special Leave to Appeal (Article 136) against any judgment, decree, or sentence of any court or tribunal in India.',
      'Power of Judicial Review to strike down Parliamentary or State legislation violating Fundamental Rights or the Basic Structure.',
      'Court of Record with power to punish for contempt of itself (Article 129); Advisory Jurisdiction upon Presidential reference (Article 143).'
    ],
    limitations: [
      'Cannot exercise legislative powers or enter into pure political policy wisdom reserved for Parliament and Executive.'
    ],
    bankingJudicialDetails: {
      domain: 'judiciary',
      regulatoryBodyOrApex: 'Apex Court of the Republic of India',
      tier: 'Constitutional Apex Court',
      jurisdictionOrScope: 'Pan-India original, appellate, writ, review, and advisory jurisdiction',
      appointmentProcess: 'Appointed by the President of India on recommendation of the Supreme Court Collegium (CJI + 4 senior-most judges)',
      grievanceOrAppellateRoute: 'Review Petition (Art 137) → Curative Petition (Rupa Ashok Hurra precedent)'
    },
    sourceIds: ['SRC-CONST-SUPREME-COURT'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUD-BOMBAY-HC',
    type: 'court',
    title: 'High Court of Judicature at Bombay',
    abbreviation: 'BOMBAY-HC',
    sectionId: 'SEC-JUD-08',
    sectionNumber: '08',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'One of the three chartered High Courts established in 1862. Exercises territorial jurisdiction over the States of Maharashtra and Goa, and the Union Territories of Dadra & Nagar Haveli and Daman & Diu, with benches at Nagpur, Aurangabad, and Panaji.',
    establishingLaw: ['Constitution of India (Articles 214 to 231)', 'Letters Patent of 1862 and 1865'],
    mandate: [
      'Administer justice as the superior constitutional court of record for Maharashtra and Goa.',
      'Exercise extraordinary writ jurisdiction under Article 226 for enforcement of legal and fundamental rights.'
    ],
    powers: [
      'Issue writs of Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari (Article 226).',
      'Power of superintendence over all subordinate courts and tribunals in Maharashtra and Goa (Article 227).',
      'Ordinary Original Civil Jurisdiction within the limits of Greater Mumbai.'
    ],
    limitations: [
      'Appeals lie to the Supreme Court of India under Articles 132, 133, 134, and 136.'
    ],
    bankingJudicialDetails: {
      domain: 'judiciary',
      regulatoryBodyOrApex: 'Supreme Court of India (Appellate Superior)',
      tier: 'Superior Constitutional Court of Record',
      jurisdictionOrScope: 'States of Maharashtra & Goa, and UT of Dadra & Nagar Haveli and Daman & Diu',
      appointmentProcess: 'Judges appointed by President on recommendation of High Court Collegium, CJI & SC Collegium, and Governor/State inputs',
      grievanceOrAppellateRoute: 'Special Leave Petition (SLP) to Supreme Court of India under Article 136'
    },
    sourceIds: ['SRC-CONST-HIGH-COURT', 'SRC-BOMBAY-HC-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUD-DISTRICT-COURT',
    type: 'court',
    title: 'Principal District & Sessions Court (District Judiciary)',
    abbreviation: 'DISTRICT-COURT',
    sectionId: 'SEC-JUD-09',
    sectionNumber: '09',
    level: 'district',
    category: 'oversight-remedies',
    summary: 'The principal court of original civil and criminal jurisdiction in the district under Article 233. Headed by the Principal District and Sessions Judge, presiding over the subordinate judiciary in the district.',
    establishingLaw: ['Constitution of India (Articles 233 to 237)', 'Maharashtra Civil Courts Act, 1869', 'Code of Criminal Procedure, 1973'],
    mandate: [
      'Try major civil suits, testamentary matters, motor accident claims, and adjudicate serious criminal offences (Sessions trials).'
    ],
    powers: [
      'Pass any sentence authorized by law, including life imprisonment and capital punishment (death sentence subject to High Court confirmation under Section 366 CrPC).',
      'Hear civil appeals from Civil Judge Junior/Senior Division, and criminal appeals from Judicial Magistrates (JMFC/CJM).'
    ],
    limitations: [
      'Subject to the administrative and judicial superintendence of the High Court (Article 227).'
    ],
    bankingJudicialDetails: {
      domain: 'judiciary',
      regulatoryBodyOrApex: 'High Court of Judicature at Bombay',
      tier: 'District Judiciary Apex Court',
      jurisdictionOrScope: 'Territorial revenue district (civil disputes & criminal sessions offences)',
      appointmentProcess: 'District Judges appointed by the Governor in consultation with the High Court (Article 233)',
      grievanceOrAppellateRoute: 'First Appeal / Criminal Appeal to the High Court of Bombay'
    },
    sourceIds: ['SRC-CONST-SUB-JUDICIARY', 'SRC-MAHA-CIVIL-COURTS-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUD-NCLT',
    type: 'court',
    title: 'National Company Law Tribunal',
    abbreviation: 'NCLT',
    sectionId: 'SEC-JUD-10',
    sectionNumber: '10',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Quasi-judicial authority established under Section 408 of the Companies Act, 2013, functioning as the Adjudicating Authority for Corporate Insolvency Resolution under the Insolvency and Bankruptcy Code (IBC), 2016.',
    establishingLaw: ['The Companies Act, 2013 (Section 408)', 'Insolvency and Bankruptcy Code, 2016 (IBC)'],
    mandate: [
      'Adjudicate corporate law disputes, mergers, oppression & mismanagement petitions, and corporate debtor insolvency resolutions.'
    ],
    powers: [
      'Admit Corporate Insolvency Resolution Process (CIRP) petitions under Sections 7, 9, 10 of IBC.',
      'Approve resolution plans or order corporate liquidation; impose moratorium on debt recoveries.'
    ],
    limitations: [
      'Does not adjudicate general civil suits or criminal offences outside company law.'
    ],
    bankingJudicialDetails: {
      domain: 'judiciary',
      regulatoryBodyOrApex: 'Ministry of Corporate Affairs & Supreme Court',
      tier: 'Specialized National Quasi-Judicial Tribunal',
      jurisdictionOrScope: 'Company law, corporate insolvency (IBC), and cross-border commercial restructuring',
      appointmentProcess: 'Appointed by Central Government on recommendation of National Selection Committee headed by CJI nominee',
      grievanceOrAppellateRoute: 'Appeals lie to the National Company Law Appellate Tribunal (NCLAT), then to Supreme Court'
    },
    sourceIds: ['SRC-COMPANIES-ACT-2013', 'SRC-IBC-2016'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUD-NALSA',
    type: 'oversight',
    title: 'National Legal Services Authority & Lok Adalats',
    abbreviation: 'NALSA',
    sectionId: 'SEC-JUD-11',
    sectionNumber: '11',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Statutory authority constituted under the Legal Services Authorities Act, 1987, to fulfill the constitutional mandate of Article 39A by providing free legal services to the weaker sections and organizing Lok Adalats for amicable settlement.',
    establishingLaw: ['Legal Services Authorities Act, 1987 (Act No. 39 of 1987)', 'Constitution of India (Article 39A)'],
    mandate: [
      'Ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.',
      'Organize National Lok Adalats to clear pending court backlogs through consensual compromise.'
    ],
    powers: [
      'Provide free advocate services, court fees, and paper charges to women, children, SC/ST, and low-income persons.',
      'Lok Adalat Award has the statutory status of a civil court decree; final and binding on all parties with no appeal permitted under law.'
    ],
    limitations: [
      'Lok Adalats cannot adjudicate non-compoundable criminal offences.'
    ],
    bankingJudicialDetails: {
      domain: 'judiciary',
      regulatoryBodyOrApex: 'Patron-in-Chief: Chief Justice of India; Executive Chairman: Senior SC Judge',
      tier: 'National Statutory Legal Services Authority',
      jurisdictionOrScope: 'Pan-India free legal aid delivery and alternative dispute resolution through Lok Adalats',
      appointmentProcess: 'Statutory appointment under the Legal Services Authorities Act, 1987',
      grievanceOrAppellateRoute: 'High Court writ petition under Article 226 in case of demonstrated fraud'
    },
    sourceIds: ['SRC-LSA-ACT-1987', 'SRC-CONST-ART39A'],
    verificationStatus: 'verified'
  }
];

export const RELATIONSHIPS_V5: RelationshipEdgeData[] = [
  // Banking links
  {
    id: 'REL-V5-001',
    sourceNodeId: 'BANK-RBI',
    targetNodeId: 'BANK-SBI',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Statutory Banking Regulation & PCA Norms',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-002',
    sourceNodeId: 'BANK-DFS-FINANCE',
    targetNodeId: 'BANK-SBI',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Government Majority Shareholder Rights',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-003',
    sourceNodeId: 'BANK-RBI',
    targetNodeId: 'BANK-NABARD',
    type: 'SETS_STANDARDS',
    label: 'Monetary Policy & Development Finance Regulation',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-004',
    sourceNodeId: 'BANK-SBI',
    targetNodeId: 'BANK-OMBUDSMAN',
    type: 'SUBJECT_TO',
    label: 'Customer Complaints escalation to RB-IOS 2021',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-005',
    sourceNodeId: 'BANK-RBI',
    targetNodeId: 'BANK-OMBUDSMAN',
    type: 'ESTABLISHED_BY_LAW',
    label: 'Promulgates Integrated Ombudsman Scheme',
    verificationStatus: 'verified'
  },

  // Banking to Judiciary insolvency link
  {
    id: 'REL-V5-006',
    sourceNodeId: 'BANK-SBI',
    targetNodeId: 'JUD-NCLT',
    type: 'IMPLEMENTS',
    label: 'Petitions for Corporate Insolvency under Section 7 IBC',
    verificationStatus: 'verified'
  },

  // Judicial Hierarchy Links
  {
    id: 'REL-V5-007',
    sourceNodeId: 'JUD-SUPREME-COURT',
    targetNodeId: 'JUD-BOMBAY-HC',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Law declared binds all High Courts (Article 141)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-008',
    sourceNodeId: 'JUD-BOMBAY-HC',
    targetNodeId: 'JUD-DISTRICT-COURT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Superintendence & Appellate Control (Article 227)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-009',
    sourceNodeId: 'JUD-DISTRICT-COURT',
    targetNodeId: 'JUD-BOMBAY-HC',
    type: 'REVIEWS_APPEALS',
    label: 'Appeals against Sessions / Civil decrees lie to High Court',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-010',
    sourceNodeId: 'JUD-BOMBAY-HC',
    targetNodeId: 'JUD-SUPREME-COURT',
    type: 'REVIEWS_APPEALS',
    label: 'Special Leave Petition (SLP) under Article 136',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-011',
    sourceNodeId: 'JUD-NCLT',
    targetNodeId: 'JUD-SUPREME-COURT',
    type: 'REVIEWS_APPEALS',
    label: 'Statutory Appeal via NCLAT to Supreme Court (IBC Sec 62)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-012',
    sourceNodeId: 'JUD-SUPREME-COURT',
    targetNodeId: 'JUD-NALSA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'CJI as Patron-in-Chief guiding Free Legal Aid (Art 39A)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V5-013',
    sourceNodeId: 'JUD-NALSA',
    targetNodeId: 'JUD-DISTRICT-COURT',
    type: 'COORDINATES',
    label: 'District Legal Services Authority (DLSA) & Lok Adalats',
    verificationStatus: 'verified'
  }
];

export const SOURCES_V5: SourceRecord[] = [
  {
    id: 'SRC-RBI-ACT-1934',
    name: 'Reserve Bank of India Act, 1934',
    officialUrl: 'https://rbi.org.in',
    documentTitle: 'The Reserve Bank of India Act, 1934 (Act No. 2 of 1934)',
    sectionCitation: 'Sections 17, 45ZB (Monetary Policy Committee)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BANK-RBI']
  },
  {
    id: 'SRC-BR-ACT-1949',
    name: 'Banking Regulation Act, 1949',
    officialUrl: 'https://rbi.org.in',
    documentTitle: 'The Banking Regulation Act, 1949 (Act No. 10 of 1949)',
    sectionCitation: 'Sections 5, 21, 22, 35A (Directions)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BANK-RBI', 'BANK-OMBUDSMAN']
  },
  {
    id: 'SRC-SBI-ACT-1955',
    name: 'State Bank of India Act, 1955',
    officialUrl: 'https://sbi.co.in',
    documentTitle: 'The State Bank of India Act, 1955 (Act No. 23 of 1955)',
    sectionCitation: 'Sections 3, 19, 33',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BANK-SBI']
  },
  {
    id: 'SRC-NABARD-ACT-1981',
    name: 'NABARD Act, 1981',
    officialUrl: 'https://www.nabard.org',
    documentTitle: 'National Bank for Agriculture and Rural Development Act, 1981',
    sectionCitation: 'Section 4, 21, 35',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BANK-NABARD']
  },
  {
    id: 'SRC-RBI-IOS-2021',
    name: 'Reserve Bank - Integrated Ombudsman Scheme, 2021',
    officialUrl: 'https://cms.rbi.org.in',
    documentTitle: 'The Reserve Bank - Integrated Ombudsman Scheme, 2021',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['BANK-OMBUDSMAN']
  },
  {
    id: 'SRC-CONST-SUPREME-COURT',
    name: 'Constitution of India — Articles 124-147',
    officialUrl: 'https://legislative.gov.in/constitution-of-india',
    documentTitle: 'Part V Chapter IV: The Union Judiciary — Supreme Court',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-SUPREME-COURT']
  },
  {
    id: 'SRC-CONST-HIGH-COURT',
    name: 'Constitution of India — Articles 214-231',
    officialUrl: 'https://legislative.gov.in/constitution-of-india',
    documentTitle: 'Part VI Chapter V: The High Courts in the States',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-BOMBAY-HC']
  },
  {
    id: 'SRC-BOMBAY-HC-RULES',
    name: 'Bombay High Court Appellate & Original Side Rules',
    officialUrl: 'https://bombayhighcourt.nic.in',
    documentTitle: 'High Court of Judicature at Bombay Practice & Procedure Rules',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-BOMBAY-HC']
  },
  {
    id: 'SRC-CONST-SUB-JUDICIARY',
    name: 'Constitution of India — Articles 233-237',
    officialUrl: 'https://legislative.gov.in/constitution-of-india',
    documentTitle: 'Part VI Chapter VI: Subordinate Courts',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-DISTRICT-COURT']
  },
  {
    id: 'SRC-MAHA-CIVIL-COURTS-ACT',
    name: 'Maharashtra Civil Courts Act, 1869',
    officialUrl: 'https://bombayhighcourt.nic.in',
    documentTitle: 'The Maharashtra Civil Courts Act, 1869 (Act No. XIV of 1869)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-DISTRICT-COURT']
  },
  {
    id: 'SRC-COMPANIES-ACT-2013',
    name: 'Companies Act, 2013 (Section 408)',
    officialUrl: 'https://www.mca.gov.in',
    documentTitle: 'The Companies Act, 2013 (Act No. 18 of 2013) — NCLT Establishment',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-NCLT']
  },
  {
    id: 'SRC-IBC-2016',
    name: 'Insolvency and Bankruptcy Code, 2016',
    officialUrl: 'https://www.ibbi.gov.in',
    documentTitle: 'The Insolvency and Bankruptcy Code, 2016 (Act No. 31 of 2016)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-NCLT']
  },
  {
    id: 'SRC-LSA-ACT-1987',
    name: 'Legal Services Authorities Act, 1987',
    officialUrl: 'https://nalsa.gov.in',
    documentTitle: 'The Legal Services Authorities Act, 1987 (Act No. 39 of 1987)',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-NALSA']
  },
  {
    id: 'SRC-CONST-ART39A',
    name: 'Constitution of India — Article 39A',
    officialUrl: 'https://legislative.gov.in/constitution-of-india',
    documentTitle: 'Article 39A: Equal justice and free legal aid',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['JUD-NALSA']
  }
];
