import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V4: SectionMeta[] = [
  {
    id: 'SEC-DEM-01',
    number: '01',
    title: 'Sovereign Foundation & The People of India',
    subtitle: 'Universal Adult Suffrage, Electoral Legitimacy & Sovereign Citizens',
    summary: 'The constitutional root of Indian democracy under the Preamble. Citizens possess universal adult suffrage at age 18, voting directly for Lok Sabha MPs, State MLAs, Municipal Corporators, and Village Panchs.',
    iconName: 'Users',
    expectedSubsections: ['01.1 Preamble & Democratic Sovereignty', '01.2 Universal Adult Suffrage (Age 18+)', '01.3 Citizens Fundamental Rights & Duties'],
    expectedAuthorities: ['The People of India', 'Electorate of India']
  },
  {
    id: 'SEC-DEM-02',
    number: '02',
    title: 'Union Executive Hierarchy (Central Political Leadership)',
    subtitle: 'President, Vice-President, Prime Minister, Cabinet Ministers & Ministers of State',
    summary: 'The political executive apex of the Central Government: Head of State (President), Head of Government (Prime Minister), Union Cabinet Ministers (Rank 1), and Ministers of State / MoS (Rank 2).',
    iconName: 'Landmark',
    expectedSubsections: ['02.1 President of India (Rashtrapati)', '02.2 Vice-President of India', '02.3 Prime Minister of India (PM)', '02.4 Union Cabinet Ministers', '02.5 Ministers of State (MoS)'],
    expectedAuthorities: ['President of India', 'Vice-President of India', 'Prime Minister of India', 'Union Cabinet']
  },
  {
    id: 'SEC-DEM-03',
    number: '03',
    title: 'Union Parliament & Elected Representatives',
    subtitle: 'Lok Sabha MPs, Speaker, Rajya Sabha MPs, Chairman, Leader of Opposition & Committees',
    summary: 'The legislative branch of the Union: Directly elected Lok Sabha MPs (543), Speaker, indirectly elected Rajya Sabha MPs (245), Chairman, Leader of Opposition (LoP), and Parliamentary Committees.',
    iconName: 'Landmark',
    expectedSubsections: ['03.1 Speaker of Lok Sabha', '03.2 Member of Parliament - Lok Sabha (543 MPs)', '03.3 Chairman of Rajya Sabha', '03.4 Member of Parliament - Rajya Sabha (245 MPs)', '03.5 Leader of Opposition (LoP)', '03.6 Parliamentary Standing Committees'],
    expectedAuthorities: ['Speaker of Lok Sabha', 'Chairman of Rajya Sabha', 'Members of Parliament', 'Parliamentary Committees']
  },
  {
    id: 'SEC-DEM-04',
    number: '04',
    title: 'Central Secretariat & Permanent Bureaucracy',
    subtitle: 'Cabinet Secretary, Union Department Secretaries, Joint Secretaries & Directors',
    summary: 'The non-political permanent civil service machinery of the Union: Cabinet Secretary (Senior-most civil servant), Union Ministry Secretaries (IAS), Joint Secretaries, Directors, and Section Officers.',
    iconName: 'Briefcase',
    expectedSubsections: ['04.1 Cabinet Secretary of India', '04.2 Secretary to Government of India', '04.3 Joint Secretaries, Directors & Desk Hierarchy'],
    expectedAuthorities: ['Cabinet Secretariat', 'Secretary to Government of India']
  },
  {
    id: 'SEC-DEM-05',
    number: '05',
    title: 'State Executive Hierarchy (State Political Leadership)',
    subtitle: 'Governor, Chief Minister, State Cabinet Ministers & State Ministers of State',
    summary: 'State-level executive governance: Governor (Constitutional Head of State), Chief Minister (Head of State Government commanding Assembly confidence), and State Council of Ministers.',
    iconName: 'Building2',
    expectedSubsections: ['05.1 Governor of the State', '05.2 Chief Minister of the State (CM)', '05.3 State Cabinet Ministers & Ministers of State'],
    expectedAuthorities: ['Governor of State', 'Chief Minister of State', 'State Cabinet']
  },
  {
    id: 'SEC-DEM-06',
    number: '06',
    title: 'State Legislature & Elected Representatives',
    subtitle: 'Vidhan Sabha Speaker, MLAs, Vidhan Parishad Chairman, MLCs & State LoP',
    summary: 'State legislative apparatus: Directly elected MLAs representing 4,123 constituencies across India, Assembly Speaker, Leader of Opposition, and bicameral Legislative Councils (MLCs) in 6 states.',
    iconName: 'Landmark',
    expectedSubsections: ['06.1 Speaker of Legislative Assembly', '06.2 Member of Legislative Assembly (MLA - 4,123 across India)', '06.3 Leader of Opposition (State Assembly)', '06.4 Chairman of Legislative Council', '06.5 Member of Legislative Council (MLC)'],
    expectedAuthorities: ['Speaker of Vidhan Sabha', 'MLAs of India', 'MLCs of Bicameral States']
  },
  {
    id: 'SEC-DEM-07',
    number: '07',
    title: 'State Field Administration & Revenue Hierarchy',
    subtitle: 'Chief Secretary, Divisional Commissioner, District Collector/DM, SDM, Tehsildar & Talathi',
    summary: 'The territorial administrative spine of India: Chief Secretary at State Secretariat down through Divisional Commissioners, District Magistrates / Collectors (784 districts), Sub-Divisional Magistrates (SDM), Tehsildars, and village Talathis.',
    iconName: 'Briefcase',
    expectedSubsections: ['07.1 Chief Secretary (State Head of Civil Service)', '07.2 Divisional Commissioner (Division Level)', '07.3 District Magistrate / Collector (District Level - 784 DMs)', '07.4 Sub-Divisional Magistrate (SDM)', '07.5 Tehsildar & Executive Magistrate (Taluka)', '07.6 Talathi / Patwari (Village Revenue Cluster)'],
    expectedAuthorities: ['Chief Secretary', 'Divisional Commissioner', 'District Collector / DM', 'Tehsildar', 'Talathi']
  },
  {
    id: 'SEC-DEM-08',
    number: '08',
    title: 'Urban Local Self-Government (74th Amendment)',
    subtitle: 'Mayor, Standing Committee Chair, Municipal Commissioner, Council President, Chief Officer & Corporator',
    summary: 'Decentralized urban governance: Municipal Corporations for major cities (>3 Lakh pop; Mayor & IAS Municipal Commissioner), Municipal Councils for towns (25k-3 Lakh pop; President & Chief Officer), Nagar Panchayats (11k-25k pop), and Ward Corporators.',
    iconName: 'Building2',
    expectedSubsections: ['08.1 Mayor & Deputy Mayor (Mahanagar Palika Political Head)', '08.2 Standing Committee Chairperson (Financial Executive)', '08.3 Municipal Commissioner (IAS Executive Head of City)', '08.4 Municipal Council President & Chief Officer (Nagar Palika)', '08.5 Nagar Panchayat President & Chief Officer', '08.6 Ward Corporator / Councillor (Grassroots Urban Rep)'],
    expectedAuthorities: ['Mayor', 'Municipal Commissioner', 'Municipal Council President', 'Ward Corporators']
  },
  {
    id: 'SEC-DEM-09',
    number: '09',
    title: 'Rural Local Self-Government (73rd Amendment)',
    subtitle: 'ZP President, ZP Members, ZP CEO, Samiti Chairperson, BDO, Sarpanch, Ward Panch, Gram Sevak & Gram Sabha',
    summary: 'Three-tier Panchayati Raj system: Zilla Parishad at district rural level (ZP President & IAS CEO), Panchayat Samiti at block level (Chairperson & BDO), Gram Panchayat at village level (Sarpanch & Gram Sevak), accountable to the sovereign Gram Sabha.',
    iconName: 'Users',
    expectedSubsections: ['09.1 Zilla Parishad President & Vice-President', '09.2 Zilla Parishad Member / Councillor (Elected Rural Rep)', '09.3 Chief Executive Officer (CEO), Zilla Parishad (IAS)', '09.4 Panchayat Samiti Chairperson & Members', '09.5 Block Development Officer (BDO)', '09.6 Sarpanch & Upa-Sarpanch (Village Head)', '09.7 Ward Panch / Gram Panchayat Member', '09.8 Gram Sevak (Village Secretary)', '09.9 Gram Sabha (Sovereign Assembly of All Village Voters)'],
    expectedAuthorities: ['Zilla Parishad', 'Panchayat Samiti', 'Gram Panchayat', 'Gram Sabha']
  },
  {
    id: 'SEC-DEM-10',
    number: '10',
    title: 'Constitutional Electoral Oversight Machinery',
    subtitle: 'Election Commission of India (National) & State Election Commission (Local Bodies)',
    summary: 'Autonomous constitutional oversight ensuring periodic free and fair elections: ECI for Parliament, State Assemblies, President, and VP; State Election Commissions for Urban Municipalities and Rural Panchayats.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['10.1 Election Commission of India (National Elections)', '10.2 State Election Commission (Local Body Elections)'],
    expectedAuthorities: ['Election Commission of India', 'State Election Commission']
  }
];

export const NODES_V4: EducationNode[] = [
  // ==========================================
  // SECTION 01: SOVEREIGN FOUNDATION
  // ==========================================
  {
    id: 'DEM-PEOPLE',
    type: 'constitutional',
    title: 'The People of India (Citizens & Voters)',
    abbreviation: 'CITIZENS',
    sectionId: 'SEC-DEM-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'legislation',
    summary: 'The ultimate sovereign source of democratic legitimacy in India. Citizens vote directly in national, state, and local elections upon reaching age 18, elect representatives, participate in Gram Sabhas, and enforce fundamental rights.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Cast secret ballot votes upon reaching age 18 in general, state assembly, and municipal/panchayat elections.',
      'Directly deliberate, approve budgets, and audit village works in the sovereign Gram Sabha.',
      'Seek judicial protection of Fundamental Rights directly from the Supreme Court and High Courts.'
    ],
    limitations: [
      'Subject to fundamental constitutional duties and statutory citizenship regulations.'
    ],
    governanceDetails: {
      positionName: 'Citizen of India / Elector',
      electoralOrSelectionMethod: 'Universal Adult Suffrage (Voter Registration upon attaining 18 years)',
      tenure: 'Lifelong citizenship',
      geographicalJurisdiction: 'Entire Territory of India (3.287 Million km²)',
      reportingTo: 'Sovereign Republic of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 02: UNION EXECUTIVE HIERARCHY
  // ==========================================
  {
    id: 'DEM-PRESIDENT',
    type: 'office',
    title: 'President of India (Rashtrapati)',
    abbreviation: 'PRESIDENT',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'constitutional',
    category: 'executive-administration',
    summary: 'Head of State of the Republic of India and Supreme Commander of the Armed Forces. All formal executive actions of the Union run in the President\'s name, acting on the aid and advice of the Prime Minister and Council of Ministers.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Formally appoint the Prime Minister, Union Ministers, Chief Justice of India, Governors, CAG, and Election Commissioners.',
      'Grant Presidential Assent to Parliamentary Bills or promulgate Ordinances during legislative recess.',
      'Exercise pardoning powers and proclaim National, State, or Financial Emergencies.'
    ],
    limitations: [
      'Constitutional figurehead; bound by the aid and advice of the Union Cabinet after one reconsideration.',
      'Removable only by Parliamentary Impeachment for violation of the Constitution.'
    ],
    governanceDetails: {
      positionName: 'President of the Republic of India (Head of State — 1 Post)',
      electoralOrSelectionMethod: 'Indirect election by Electoral College (Elected MPs of Lok Sabha & Rajya Sabha + Elected MLAs of all States/UTs)',
      tenure: '5 Years from assumption of office (Eligible for re-election)',
      geographicalJurisdiction: 'Entire Republic of India (1.4+ Billion Citizens)',
      reportingTo: 'Constitution of India (Impeachable by Parliament)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-VICE-PRESIDENT',
    type: 'office',
    title: 'Vice-President of India',
    abbreviation: 'VP-INDIA',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'constitutional',
    category: 'executive-administration',
    summary: 'Second-highest constitutional office in India. Serves as the ex-officio Chairman of the Council of States (Rajya Sabha), presiding over proceedings, and acts as President during vacancies caused by death, resignation, or removal.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Preside over Rajya Sabha debates, maintain parliamentary order, and cast a deciding vote in case of ties.',
      'Assume full presidential authority, duties, and emoluments when acting as President.'
    ],
    limitations: [
      'Cannot preside over Rajya Sabha while discharging the duties of the President of India.'
    ],
    governanceDetails: {
      positionName: 'Vice-President of India & Ex-Officio Chairman, Rajya Sabha (1 Post)',
      electoralOrSelectionMethod: 'Elected by an Electoral College consisting of members of both Houses of Parliament (Lok Sabha + Rajya Sabha)',
      tenure: '5 Years from the date of entering upon office',
      geographicalJurisdiction: 'Entire Republic of India',
      reportingTo: 'Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PRIME-MINISTER',
    type: 'executive',
    title: 'Prime Minister of India (PM)',
    abbreviation: 'PM-INDIA',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'executive-administration',
    summary: 'Real executive head of the Government of India, leader of the Union Council of Ministers, and chief executive decision-maker commanding the majority confidence of the directly elected Lok Sabha.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Select Union Ministers, advise the President on their appointments, and allocate/reshuffle ministerial portfolios.',
      'Preside over Union Cabinet meetings and determine central government national domestic and foreign policies.',
      'Advise the President on high-level appointments, treaty approvals, and dissolution of the Lok Sabha.'
    ],
    limitations: [
      'Must maintain continuous majority confidence in the Lok Sabha; must resign if losing a vote of no-confidence.'
    ],
    governanceDetails: {
      positionName: 'Prime Minister of India (Head of Government — 1 Post)',
      electoralOrSelectionMethod: 'Appointed by President; must command majority confidence in Lok Sabha and be an MP',
      tenure: '5 Years (co-terminus with Lok Sabha) or during confidence of the House',
      geographicalJurisdiction: 'Entire Republic of India (1.4+ Billion Population)',
      reportingTo: 'Lok Sabha (Parliament) & The Sovereign Electorate'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CABINET-MINISTER',
    type: 'executive',
    title: 'Union Cabinet Minister (Senior Ministerial Rank)',
    abbreviation: 'CAB-MINISTER',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'executive-administration',
    summary: 'Senior political executive heading major central ministries (Home Affairs, Finance, Defence, External Affairs, Railways, Education, etc.). Attends weekly Union Cabinet meetings and makes top national policy decisions.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Decide national policy for allocated ministries, approve central schemes, and formulate annual ministerial budget demands.',
      'Pilot major legislative bills through both Houses of Parliament and answer parliamentary questions.'
    ],
    limitations: [
      'Bound by collective cabinet responsibility; total council of ministers capped at 15% of Lok Sabha strength (~81 ministers).'
    ],
    governanceDetails: {
      positionName: 'Union Cabinet Minister (~25 to 35 Senior Ministers)',
      electoralOrSelectionMethod: 'Appointed by President on advice of the Prime Minister; must be an MP of Lok Sabha or Rajya Sabha',
      tenure: 'During pleasure of the President / tenure of the Prime Minister',
      geographicalJurisdiction: 'Nationwide functional portfolios across India',
      reportingTo: 'Prime Minister of India & Lok Sabha'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MINISTER-OF-STATE',
    type: 'executive',
    title: 'Minister of State / MoS (Junior Ministerial Rank)',
    abbreviation: 'MOS-CENTRE',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'executive-administration',
    summary: 'Junior political ministers in the Union Council of Ministers. Either holds Independent Charge of smaller ministries or assists a Cabinet Minister in managing specific departments within a large ministry.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Exercise delegated executive supervision over assigned departments within a ministry.',
      'Answer parliamentary questions and represent the ministry in public briefings and committee hearings.'
    ],
    limitations: [
      'MoS (assisting) does not attend Cabinet meetings unless specially invited for their ministry\'s agenda.'
    ],
    governanceDetails: {
      positionName: 'Minister of State / MoS (Independent Charge) (~40 to 50 Ministers)',
      electoralOrSelectionMethod: 'Appointed by President on recommendation of the Prime Minister; must be an MP',
      tenure: 'During pleasure of President / tenure of Prime Minister',
      geographicalJurisdiction: 'Assigned ministerial departments nationwide',
      reportingTo: 'Respective Cabinet Minister & Prime Minister'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 03: UNION PARLIAMENT & REPRESENTATIVES
  // ==========================================
  {
    id: 'DEM-SPEAKER-LS',
    type: 'office',
    title: 'Speaker of the Lok Sabha',
    abbreviation: 'SPEAKER-LS',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'legislation',
    summary: 'The presiding officer and disciplinary head of the Lok Sabha. Regulates parliamentary debate, maintains floor discipline, certifies Money Bills, decides disqualifications under the Tenth Schedule, and ranks 6th in the national Warrant of Precedence.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Decide whether a legislative proposal is a Money Bill (sole, final, non-justiciable authority).',
      'Adjudicate on disqualification petitions under the Anti-Defection Law (Tenth Schedule).',
      'Preside over Joint Sittings of both Houses of Parliament in case of legislative deadlock.'
    ],
    limitations: [
      'Must act with strict non-partisan neutrality; casts vote only in case of an equality of votes (casting vote).'
    ],
    governanceDetails: {
      positionName: 'Speaker of the House of the People (1 Post)',
      electoralOrSelectionMethod: 'Elected by members of the Lok Sabha from among themselves by a simple majority',
      tenure: 'Holds office from date of election until immediately before the first meeting of the new Lok Sabha',
      geographicalJurisdiction: 'Lok Sabha Chamber & Parliamentary Precincts, New Delhi',
      reportingTo: 'The House of the People (Lok Sabha)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MP-LOK-SABHA',
    type: 'legislature',
    title: 'Member of Parliament — Lok Sabha (543 MPs)',
    abbreviation: 'MP-LOK-SABHA',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'legislation',
    summary: 'Directly elected national grassroots representative representing a single-member territorial Parliamentary Constituency. Makes national laws, questions central ministries, approves taxation/budgets, and utilizes MPLADS development funds for local infrastructure.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Introduce bills, participate in national lawmaking, ask starred/unstarred questions to Union Ministers, and move adjournment motions.',
      'Vote on Union Budgets, Money Bills, and motions of confidence/no-confidence.',
      'Recommend local developmental projects under MPLADS (₹5 Crore annual fund per MP constituency).'
    ],
    limitations: [
      'Subject to party whip and disqualification under the Anti-Defection Law (Tenth Schedule) if voting against party directions.'
    ],
    governanceDetails: {
      positionName: 'Member of Parliament (Lok Sabha MP) — 543 Members across India',
      electoralOrSelectionMethod: 'Direct election by first-past-the-post voting by adult citizens in 543 Parliamentary Constituencies',
      tenure: '5 Years unless Lok Sabha is dissolved earlier',
      geographicalJurisdiction: 'Each MP represents 1 Parliamentary Constituency (~15 to 25+ Lakh Electors, covering 6 to 9 Assembly segments)',
      reportingTo: 'Directly accountable to the Electorate of their Constituency'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CHAIRMAN-RS',
    type: 'office',
    title: 'Chairman & Deputy Chairman of the Rajya Sabha',
    abbreviation: 'CHAIRMAN-RS',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'legislation',
    summary: 'The presiding leadership of the Upper House. The Vice-President is ex-officio Chairman, while the Deputy Chairman is elected from among Rajya Sabha members to preside in the Chairman\'s absence.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Preside over debates in the Council of States, decide points of order, and regulate speaking time of parties.',
      'Cast a deciding vote in case of ties on non-money bills and motions.'
    ],
    limitations: [
      'Chairman cannot preside when a resolution for removal of the Vice-President is under consideration.'
    ],
    governanceDetails: {
      positionName: 'Chairman (Vice-President) & Deputy Chairman of Rajya Sabha (2 Posts)',
      electoralOrSelectionMethod: 'Chairman is ex-officio Vice-President; Deputy Chairman is elected by Rajya Sabha MPs',
      tenure: 'Chairman 5 years; Deputy Chairman 6 years (co-terminus with Rajya Sabha membership)',
      geographicalJurisdiction: 'Rajya Sabha Chamber, Parliament House, New Delhi',
      reportingTo: 'Council of States (Rajya Sabha)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MP-RAJYA-SABHA',
    type: 'legislature',
    title: 'Member of Parliament — Rajya Sabha (245 MPs)',
    abbreviation: 'MP-RAJYA-SABHA',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'legislation',
    summary: 'Indirectly elected federal representative representing the States and Union Territories. Provides federal review of national legislation, represents state interests at the Centre, and includes 12 distinguished members nominated by the President.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Review, amend, and vote on non-money bills and Constitutional Amendment Bills.',
      'Pass special federal resolutions authorizing Parliament to make laws on State List subjects in national interest or create new All India Services.',
      'Recommend local developmental projects under MPLADS fund within their home state.'
    ],
    limitations: [
      'Cannot introduce or amend Money Bills (can only recommend amendments within 14 days); cannot vote on motions of no-confidence.'
    ],
    governanceDetails: {
      positionName: 'Member of Parliament (Rajya Sabha MP) — 245 Members (233 Elected + 12 Nominated)',
      electoralOrSelectionMethod: 'Elected by elected State MLAs via proportional representation by single transferable vote (STV)',
      tenure: '6-Year fixed term; permanent house with 1/3rd of members retiring every 2 years',
      geographicalJurisdiction: 'Representing respective State / UT territory',
      reportingTo: 'State Legislative Assembly & Federal Constitutional System'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-LEADER-OPPOSITION-UNION',
    type: 'office',
    title: 'Leader of the Opposition (Lok Sabha & Rajya Sabha)',
    abbreviation: 'LOP-PARLIAMENT',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'legislation',
    summary: 'Statutory leader of the largest recognized opposition party having not less than 10% of total seats in the House. Enjoys Cabinet Minister rank, leads opposition scrutiny, and sits on high-level statutory selection committees (CBI, CVC, Lokpal, NHRC).',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Serve as statutory member on selection committees for Chief Election Commissioner, Director of CBI, Central Vigilance Commissioner, and Lokpal.',
      'Lead opposition debates, demand discussions on urgent public matters, and scrutinize government policies.'
    ],
    limitations: [
      'Recognition requires party to possess minimum 10% seats of the House (55 seats in Lok Sabha).'
    ],
    governanceDetails: {
      positionName: 'Leader of Opposition (Lok Sabha & Rajya Sabha — 2 Posts)',
      electoralOrSelectionMethod: 'Recognized by the Speaker/Chairman from the largest non-government party with at least 10% seats',
      tenure: 'Holds office while commanding leadership of the qualifying opposition party',
      geographicalJurisdiction: 'Parliament of India',
      reportingTo: 'Parliament and the Citizens of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PARL-COMMITTEE',
    type: 'office',
    title: 'Parliamentary Standing Committees (PAC, Estimates & DRSCs)',
    abbreviation: 'PARL-COMM',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Bipartisan committees of MPs (Public Accounts Committee, Estimates Committee, and 24 Department-related Standing Committees). Conduct in-depth non-partisan scrutiny of ministry expenditures, audit reports of the CAG, and draft legislative bills.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Summon ministry secretaries and public officials, call for official files, and examine expenditure reports.',
      'PAC examines audit reports of the Comptroller and Auditor General (CAG) to identify financial irregularities and waste.',
      'Examine Demands for Grants of Central Ministries before budget approval by Parliament.'
    ],
    limitations: [
      'Recommendations are advisory, not legally binding on the government; cannot examine day-to-day administration.'
    ],
    governanceDetails: {
      positionName: 'Chairpersons & Members of Parliamentary Committees (~30+ Committees)',
      electoralOrSelectionMethod: 'Appointed by Speaker / Chairman; PAC Chairman traditionally belongs to the Opposition party',
      tenure: '1 Year reconstituted annually',
      geographicalJurisdiction: 'All Central Ministries and Union Departments',
      reportingTo: 'Parliament of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 04: CENTRAL CIVIL SECRETARIAT
  // ==========================================
  {
    id: 'DEM-CABINET-SEC',
    type: 'department',
    title: 'Cabinet Secretary & Central Secretariat Hierarchy',
    abbreviation: 'CAB-SEC',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'executive-administration',
    summary: 'The administrative head of the Government of India civil services, ex-officio Chairman of the Civil Services Board, and senior-most civil servant in India. Coordinates all central ministries and advises the Prime Minister on civil administration.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Head the Civil Services Board for senior central administrative postings (Joint Secretary, Additional Secretary, Secretary).',
      'Manage preparation of Union Cabinet agendas, record official Cabinet minutes, and monitor execution of national decisions.'
    ],
    limitations: [
      'Purely executive civil service post; exercises no political or legislative powers.'
    ],
    governanceDetails: {
      positionName: 'Cabinet Secretary of India (Senior-most IAS Officer — 1 Post)',
      electoralOrSelectionMethod: 'Appointed by the Appointments Committee of the Cabinet (ACC) headed by the Prime Minister',
      tenure: 'Fixed 2-year tenure, extendable up to 4 years by Government',
      geographicalJurisdiction: 'All Central Ministries and Union Departments',
      reportingTo: 'Prime Minister of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-UNION-SECRETARY',
    type: 'department',
    title: 'Secretary to Government of India (Department Administrative Head)',
    abbreviation: 'UNION-SEC',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'executive-administration',
    summary: 'The administrative head of a Central Ministry/Department (e.g., Home Secretary, Finance Secretary, Defence Secretary). Serves as chief executive advisor to the Cabinet Minister and the principal accounting officer for public funds.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Principal Accounting Officer of the Ministry: sanctions departmental expenditures and manages budget implementation.',
      'Advise the Minister on policy formulation, administrative rules, and inter-departmental clearances.'
    ],
    limitations: [
      'Subordinate to the political leadership of the Cabinet Minister and overall direction of the Prime Minister.'
    ],
    governanceDetails: {
      positionName: 'Secretary to the Government of India (Apex IAS Grade)',
      electoralOrSelectionMethod: 'Appointed by the Appointments Committee of the Cabinet (ACC)',
      tenure: 'Tenure-based central deputation (typically 2 to 3 years or until retirement at age 60)',
      geographicalJurisdiction: 'Respective Central Ministry nationwide',
      reportingTo: 'Respective Union Cabinet Minister & Cabinet Secretary'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 05: STATE EXECUTIVE HIERARCHY
  // ==========================================
  {
    id: 'DEM-GOVERNOR',
    type: 'office',
    title: 'Governor of the State',
    abbreviation: 'GOVERNOR',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'executive-administration',
    summary: 'Constitutional Head of State. All executive action of the State Government runs in the Governor\'s name. Serves as a vital constitutional bridge between the Centre and the State and Chancellor of State Public Universities.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Appoint the Chief Minister and State Council of Ministers; appoint the Advocate General and State PSC members.',
      'Grant assent to State Bills, reserve State Bills for Presidential consideration, or promulgate State Ordinances during recess.',
      'Recommend imposition of President\'s Rule in case of failure of constitutional machinery in the state.'
    ],
    limitations: [
      'Bound by the aid and advice of the State Council of Ministers headed by the CM in ordinary executive governance.'
    ],
    governanceDetails: {
      positionName: 'Governor of the State (28 States & 8 UTs with LGs/Administrators)',
      electoralOrSelectionMethod: 'Appointed by the President of India by warrant under hand and seal',
      tenure: 'Holds office during the pleasure of the President (normally 5 years)',
      geographicalJurisdiction: 'State Territory (e.g. Maharashtra 3,07,713 km²)',
      reportingTo: 'President of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CHIEF-MINISTER',
    type: 'executive',
    title: 'Chief Minister of the State (CM)',
    abbreviation: 'CHIEF-MINISTER',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'executive-administration',
    summary: 'Real executive head of the State Government, commanding the confidence of the directly elected State Legislative Assembly (Vidhan Sabha), and presiding over the State Council of Ministers.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Select State Ministers, advise the Governor on ministerial appointments, and allocate/reshuffle state portfolios.',
      'Lead state policy formulation, state budget allocation, and inter-departmental state administration.',
      'Advise the Governor on summoning, proroguing, or dissolving the State Legislative Assembly.'
    ],
    limitations: [
      'Must maintain continuous majority confidence in the Legislative Assembly; resigns upon losing a no-confidence vote.'
    ],
    governanceDetails: {
      positionName: 'Chief Minister of the State (Head of State Government — 1 per State)',
      electoralOrSelectionMethod: 'Appointed by Governor; must command majority confidence in Legislative Assembly and be an MLA/MLC',
      tenure: '5 Years or during majority confidence of the Legislative Assembly',
      geographicalJurisdiction: 'State Territory (e.g. Maharashtra ~12.5 Crore citizens)',
      reportingTo: 'State Legislative Assembly & The State Electorate'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STATE-CABINET-MINISTER',
    type: 'executive',
    title: 'State Cabinet Minister & Minister of State',
    abbreviation: 'STATE-MINISTER',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'executive-administration',
    summary: 'Political executive heading state departments (Revenue, Home, Finance, Urban Development, Rural Development, PWD, Health, Education, Agriculture). Decides state departmental policy and oversees field execution.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Approve state departmental projects, schemes, and budget allocations.',
      'Introduce and pilot state legislation in the State Legislative Assembly and Council.'
    ],
    limitations: [
      'Collectively responsible to the State Legislative Assembly; total council capped at 15% of Assembly size (maximum 43 in Maharashtra).'
    ],
    governanceDetails: {
      positionName: 'State Cabinet Minister / State Minister of State (~30 to 43 Ministers)',
      electoralOrSelectionMethod: 'Appointed by Governor on recommendation of the Chief Minister; must be an MLA or MLC',
      tenure: 'During pleasure of Governor / tenure of Chief Minister',
      geographicalJurisdiction: 'Statewide departmental remit',
      reportingTo: 'Chief Minister of the State & Legislative Assembly'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 06: STATE LEGISLATURE & REPRESENTATIVES
  // ==========================================
  {
    id: 'DEM-SPEAKER-VS',
    type: 'office',
    title: 'Speaker of the Legislative Assembly (Vidhan Sabha)',
    abbreviation: 'SPEAKER-VS',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'legislation',
    summary: 'Presiding officer and disciplinary authority of the State Legislative Assembly. Regulates floor proceedings, maintains decorum, certifies State Money Bills, and adjudicates anti-defection petitions under the Tenth Schedule.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Sole and final authority to certify whether a state legislative proposal is a Money Bill.',
      'Adjudicate disqualification petitions against MLAs under the Anti-Defection Law.',
      'Cast a deciding vote in case of ties on state bills and motions.'
    ],
    limitations: [
      'Must act with strict neutrality; casts vote only in case of equality of votes.'
    ],
    governanceDetails: {
      positionName: 'Speaker of the State Legislative Assembly (1 per State Assembly)',
      electoralOrSelectionMethod: 'Elected by MLAs from among themselves by a simple majority',
      tenure: 'Holds office until immediately before the first meeting of the new Assembly',
      geographicalJurisdiction: 'Vidhan Sabha Chamber, State Capital',
      reportingTo: 'State Legislative Assembly'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MLA',
    type: 'legislature',
    title: 'Member of Legislative Assembly — MLA (4,123 across India)',
    abbreviation: 'MLA-STATE',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'legislation',
    summary: 'Directly elected state grassroots representative representing a territorial Assembly Constituency. Enacts state laws on State and Concurrent lists, approves state budgets and taxes, and utilizes MLALADS local development funds (~₹5 Crore/year).',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Introduce state bills, question State Ministers, move cut motions on state budget, and vote on no-confidence motions.',
      'Participate in the election of the President of India and election of Rajya Sabha MPs from the state.',
      'Recommend local constituency infrastructure works under MLA Local Area Development Scheme (MLALADS).'
    ],
    limitations: [
      'Subject to party whip and anti-defection disqualification if defying party voting instructions.'
    ],
    governanceDetails: {
      positionName: 'Member of Legislative Assembly (MLA) — 4,123 across 28 States & 3 UTs (288 in Maharashtra)',
      electoralOrSelectionMethod: 'Direct election by first-past-the-post voting by adult citizens in Assembly Constituencies',
      tenure: '5 Years unless Assembly dissolved earlier',
      geographicalJurisdiction: 'Each MLA represents 1 Assembly Constituency (~1.5 to 5 Lakh Electors; 10 km² urban to 1,000 km² rural)',
      reportingTo: 'Directly accountable to the Electorate of their Constituency'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CHAIRMAN-VP',
    type: 'office',
    title: 'Chairman & Deputy Chairman of Legislative Council (Vidhan Parishad)',
    abbreviation: 'CHAIRMAN-VP',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'legislation',
    summary: 'Presiding officers of the Upper House in 6 bicameral states (Maharashtra, UP, Bihar, Karnataka, AP, Telangana). Elected by MLCs from among themselves to maintain decorum and regulate legislative scrutiny.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Preside over Legislative Council debates, determine points of order, and cast deciding vote in ties.',
      'Direct committee inquiries and maintain dignity of the Upper House.'
    ],
    limitations: [
      'Cannot certify money bills (exclusive power of Vidhan Sabha Speaker).'
    ],
    governanceDetails: {
      positionName: 'Chairman & Deputy Chairman of the Legislative Council (6 States)',
      electoralOrSelectionMethod: 'Elected by Members of the Legislative Council from among themselves',
      tenure: '6 Years (co-terminus with Legislative Council membership)',
      geographicalJurisdiction: 'Vidhan Parishad Chamber, State Capital',
      reportingTo: 'State Legislative Council'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MLC',
    type: 'legislature',
    title: 'Member of Legislative Council — MLC (Bicameral States)',
    abbreviation: 'MLC-STATE',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'legislation',
    summary: 'Indirectly elected and nominated member representing special constituencies: Local Authorities, Teachers, Graduates, State MLAs, and Governor nominations for social service, arts, and science in 6 bicameral states.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Review and delay non-money bills passed by the Assembly, offering expert revisions and scrutiny.',
      'Question State Ministers and serve as Ministers in the State Cabinet.'
    ],
    limitations: [
      'Cannot vote down Money Bills (can only delay for 14 days); permanent body not subject to dissolution; can be abolished by Parliament upon Assembly resolution.'
    ],
    governanceDetails: {
      positionName: 'Member of Legislative Council (MLC) — 78 in Maharashtra',
      electoralOrSelectionMethod: 'Elected by MLAs (1/3rd), Local Bodies (1/3rd), Teachers (1/12th), Graduates (1/12th), and Nominated by Governor (1/6th)',
      tenure: '6-Year fixed term with 1/3rd retiring every 2 years',
      geographicalJurisdiction: 'Statewide designated electoral divisions',
      reportingTo: 'Electoral Colleges & State Legislature'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-LEADER-OPPOSITION-STATE',
    type: 'office',
    title: 'Leader of the Opposition (State Legislative Assembly)',
    abbreviation: 'LOP-STATE',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'legislation',
    summary: 'Leader of the largest recognized opposition party in the State Legislative Assembly having at least 10% seats. Holds Cabinet Minister rank, leads opposition debates, and serves on statutory selection committees for State Lokayukta and State Information Commissioners.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Statutory member on selection panels for State Lokayukta, State Chief Information Commissioner, and State Human Rights Commission.',
      'Lead opposition scrutiny of government policies and demand debates on critical public concerns.'
    ],
    limitations: [
      'Party must hold minimum 10% seats of the Legislative Assembly.'
    ],
    governanceDetails: {
      positionName: 'Leader of the Opposition, State Assembly (1 Post per State)',
      electoralOrSelectionMethod: 'Recognized by the Speaker from the largest opposition party',
      tenure: 'Co-terminus with Assembly / party leadership',
      geographicalJurisdiction: 'State Legislature',
      reportingTo: 'State Legislative Assembly & Citizens'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 07: FIELD ADMINISTRATION & REVENUE HIERARCHY
  // ==========================================
  {
    id: 'DEM-CHIEF-SEC',
    type: 'department',
    title: 'Chief Secretary of the State & Mantralaya Hierarchy',
    abbreviation: 'CHIEF-SEC',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'state',
    category: 'executive-administration',
    summary: 'The administrative head of the State Government, Secretary to the State Cabinet, and leader of the entire state civil service machinery operating from the State Secretariat (e.g. Mantralaya, Mumbai).',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Supervise all Divisional Commissioners, District Collectors, and Departmental Principal Secretaries.',
      'Chair the State Executive Committee of the State Disaster Management Authority (SDMA).',
      'Manage administrative discipline and state civil services cadre postings.'
    ],
    limitations: [
      'Accountable to the Chief Minister and State Council of Ministers.'
    ],
    governanceDetails: {
      positionName: 'Chief Secretary of the State (Senior-most IAS Officer — 1 Post per State)',
      electoralOrSelectionMethod: 'Selected by the Chief Minister from senior IAS officers of Additional Chief Secretary rank',
      tenure: 'Determined by superannuation age (60 years) or formal extension by Government',
      geographicalJurisdiction: 'All administrative departments and districts in the State',
      reportingTo: 'Chief Minister of the State'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DIVISIONAL-COMM',
    type: 'office',
    title: 'Divisional Commissioner (Revenue Division)',
    abbreviation: 'DIV-COMM',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'state',
    category: 'executive-administration',
    summary: 'Senior IAS officer heading an administrative division comprising 4 to 7 revenue districts. Acts as regional supervisory authority between the State Secretariat and District Collectors, inspecting offices and deciding statutory revenue appeals.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Appellate authority against quasi-judicial orders passed by District Collectors.',
      'Coordinate inter-district law-and-order, food distribution, and regional drought/flood disaster management.'
    ],
    limitations: [
      'Supervisory and appellate authority; operational district commands lie with the District Collector.'
    ],
    governanceDetails: {
      positionName: 'Divisional Commissioner (e.g. Konkan, Pune, Nashik, Chhatrapati Sambhajinagar, Amravati, Nagpur)',
      electoralOrSelectionMethod: 'Senior IAS officer of Principal Secretary rank appointed by State Government',
      tenure: 'Cadre tenure (typically 2 to 3 years)',
      geographicalJurisdiction: 'Administrative Division (covers 4 to 7 Districts, ~1.5 to 3 Crore population)',
      reportingTo: 'Additional Chief Secretary (Revenue) & Chief Secretary'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DISTRICT-COLLECTOR',
    type: 'department',
    title: 'District Magistrate / Collector / Deputy Commissioner (784 DMs)',
    abbreviation: 'DM-COLLECTOR',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'district',
    category: 'executive-administration',
    summary: 'The primary field executive authority in India. Combines roles of District Magistrate (law & order under CrPC/BNSS), District Collector (land revenue), District Election Officer (elections), and DDMA Chairperson across 784 districts.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Issue executive orders under Section 144 / preventive detentions; head the district revenue courts.',
      'Direct the Superintendent of Police (SP) on maintenance of general public order.',
      'Requisition personnel and facilities as District Election Officer (DEO) under ECI oversight.'
    ],
    limitations: [
      'Judicial trial powers lie with District Judiciary; does not directly command urban municipal corporation governance.'
    ],
    governanceDetails: {
      positionName: 'District Collector & District Magistrate (784 across India)',
      electoralOrSelectionMethod: 'Indian Administrative Service (IAS) officer posted by State Government',
      tenure: 'Cadre posting tenure (typically 1.5 to 3 years per district)',
      geographicalJurisdiction: 'Revenue District (1,000 to 10,000+ km²; 5 Lakh to 50+ Lakh population)',
      reportingTo: 'Divisional Commissioner & State Revenue Department'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SDM',
    type: 'office',
    title: 'Sub-Divisional Magistrate (SDM) / Sub-Collector',
    abbreviation: 'SDM-SDO',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'district',
    category: 'executive-administration',
    summary: 'Sub-divisional revenue and magistracy head overseeing 2 to 5 Tehsils. The first field appellate authority in land revenue and the frontline executive magistrate for law-and-order.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Exercise Executive Magistrate powers (curfews, inquests into custodial deaths, arms licensing checks).',
      'Act as Electoral Registration Officer (ERO) for Assembly Constituencies.'
    ],
    limitations: [
      'Subordinate to the District Magistrate.'
    ],
    governanceDetails: {
      positionName: 'Sub-Divisional Magistrate / Sub-Divisional Officer (SDO)',
      electoralOrSelectionMethod: 'Junior IAS officer (Sub-Collector) or State Civil Service (Deputy Collector)',
      tenure: 'Cadre posting (1 to 2 years)',
      geographicalJurisdiction: 'Subdivision (covers 2 to 5 Tehsils, ~2 Lakh to 10 Lakh population; ~2,200 Subdivisions in India)',
      reportingTo: 'District Magistrate / Collector'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-TEHSILDAR',
    type: 'office',
    title: 'Tehsildar & Executive Magistrate (Taluka / Tehsil)',
    abbreviation: 'TEHSILDAR',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'district',
    category: 'executive-administration',
    summary: 'Administrative and revenue head of a Taluka / Tehsil (~50 to 150+ villages). Serves as Taluka Executive Magistrate, managing land mutation, revenue recovery, certificates, and local law-and-order.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Hold revenue court for land tenancy and mutation appeals under Land Revenue Code.',
      'Exercise preventive magistracy powers; act as Assistant Returning Officer (ARO) for elections.'
    ],
    limitations: [
      'Appeals against Tehsildar orders lie before the Sub-Divisional Officer (SDO).'
    ],
    governanceDetails: {
      positionName: 'Tehsildar / Talukdar (~6,800+ across India)',
      electoralOrSelectionMethod: 'State Civil Services Examination (Group A / Gazetted)',
      tenure: 'Cadre posting (typically 2 to 3 years)',
      geographicalJurisdiction: 'Taluka / Tehsil boundary (covers 50 to 150+ villages, ~50,000 to 3,00,000 population)',
      reportingTo: 'Sub-Divisional Magistrate (SDM) & District Collector'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-TALATHI',
    type: 'office',
    title: 'Talathi / Patwari (Village Revenue Cluster)',
    abbreviation: 'TALATHI',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'local',
    category: 'executive-administration',
    summary: 'The primary field revenue accountant at village level. Maintains official village land records (Record of Rights / 7/12 Extract), records crop surveys, and assists in government certificate verifications.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Issue certified extracts of land records (7/12 & 8A in Maharashtra; Khatauni in North India).',
      'Conduct Panchanamas for crop damage during floods, droughts, or natural calamities.'
    ],
    limitations: [
      'Purely recording and certifying official; contested title disputes must be decided by Tehsildar or Civil Courts.'
    ],
    governanceDetails: {
      positionName: 'Talathi / Patwari / Village Revenue Officer (VRO)',
      electoralOrSelectionMethod: 'State Staff Selection / Revenue Department recruitment exam (Class III)',
      tenure: 'Service-based (transfers every 3 years within district)',
      geographicalJurisdiction: 'Saza / Halka (covers 1 to 5 revenue villages, ~1,000 to 10,000 population)',
      reportingTo: 'Circle Inspector (Circle Officer) & Tehsildar'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 08: URBAN LOCAL SELF-GOVERNMENT
  // ==========================================
  {
    id: 'DEM-MAYOR',
    type: 'office',
    title: 'Mayor & Deputy Mayor (Mahanagar Palika Political Head)',
    abbreviation: 'MAYOR-CITY',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'legislation',
    summary: 'The political head and First Citizen of a major city (> 3 Lakh pop). Presides over the General Body meetings of elected Corporators, guides civic policy, and leads municipal council debates.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Preside over General Body meetings of the Municipal Corporation, decide civic resolutions, and maintain floor order.',
      'Represent the city in official civic receptions and inter-governmental urban conferences.'
    ],
    limitations: [
      'In most Indian states (except Mayor-in-Council models), real executive administrative authority is vested in the IAS Municipal Commissioner.'
    ],
    governanceDetails: {
      positionName: 'Mayor of the Municipal Corporation (~250+ across India)',
      electoralOrSelectionMethod: 'Elected by elected Ward Corporators (or directly by city voters in selected states)',
      tenure: '2.5 to 5 Years depending on State Municipal Act',
      geographicalJurisdiction: 'City Municipal Limits (> 3 Lakh to 1.2+ Crore population)',
      reportingTo: 'General Body of the Corporation & City Voters'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STANDING-COMM-CHAIR',
    type: 'office',
    title: 'Standing Committee Chairperson (Corporation Financial Executive)',
    abbreviation: 'STANDING-CHAIR',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'executive-administration',
    summary: 'The most powerful financial political committee head in a Municipal Corporation. Scrutinizes all major municipal expenditure, tenders, contracts above statutory limits, and preliminary city budget drafts.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Sanction major municipal civil work tenders and procurement contracts exceeding the Municipal Commissioner\'s financial power.',
      'Review and amend the municipal budget before presentation to the General Body.'
    ],
    limitations: [
      'Subject to overall budgetary allocations approved by the General Body and statutory audit.'
    ],
    governanceDetails: {
      positionName: 'Standing Committee Chairperson (Mahanagar Palika)',
      electoralOrSelectionMethod: 'Elected by members of the Standing Committee from among corporators',
      tenure: '1 Year (re-elected annually)',
      geographicalJurisdiction: 'Entire Municipal Corporation financial expenditure',
      reportingTo: 'Municipal Corporation General Body'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'department',
    title: 'Municipal Commissioner (IAS Executive Head of City)',
    abbreviation: 'MUNICIPAL-COMM',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'executive-administration',
    summary: 'Senior IAS officer serving as the chief executive officer of the Municipal Corporation. Responsible for day-to-day civic administration, water supply, sewage, roads, solid waste, and municipal hospital management.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Execute all municipal policies, award civil contracts up to statutory limits, and direct municipal engineers and doctors.',
      'Prepare and submit the annual municipal budget to the Standing Committee.'
    ],
    limitations: [
      'Must obtain approval of Standing Committee / General Body for contracts exceeding specified financial ceilings.'
    ],
    governanceDetails: {
      positionName: 'Municipal Commissioner (e.g. BMC Mumbai, PMC Pune, BBMP Bengaluru)',
      electoralOrSelectionMethod: 'Senior IAS officer appointed by State Urban Development Department',
      tenure: 'Cadre tenure (typically 2 to 3 years)',
      geographicalJurisdiction: 'Notified City Municipal Corporation Limits (50 to 600+ km²)',
      reportingTo: 'State Urban Development Department & Municipal Corporation'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MUNICIPAL-COUNCIL',
    type: 'office',
    title: 'Municipal Council President & Chief Officer (Nagar Palika)',
    abbreviation: 'MUNICIPAL-COUNCIL',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'executive-administration',
    summary: 'Urban local government for smaller urban towns with population between 25,000 and 3,00,000 (divided into Class A, B, and C). Led by an elected Council President and an appointed administrative Chief Officer (CO).',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Provide town civic amenities: street lighting, town sanitation, public drainage, local roads, parks, and birth/death registration.',
      'Levy town property taxes, water cess, and commercial license fees.'
    ],
    limitations: [
      'Financially reliant on State Finance Commission grants and central urban mission allocations.'
    ],
    governanceDetails: {
      positionName: 'Council President (Political) & Chief Officer (CO - Administrative)',
      electoralOrSelectionMethod: 'Councillors directly elected from town wards; President elected directly or by Councillors; CO appointed from State Municipal Cadre',
      tenure: '5 Years for elected council; CO administrative posting',
      geographicalJurisdiction: 'Town Municipal Limits (10 to 100 km²; 25,000 to 3,00,000 population; part of 5,050 ULBs)',
      reportingTo: 'District Collector & Directorate of Municipal Administration'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-NAGAR-PANCHAYAT',
    type: 'office',
    title: 'Nagar Panchayat President & Chief Officer (Transitional Urban Area)',
    abbreviation: 'NAGAR-PANCHAYAT',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'executive-administration',
    summary: 'Local body for an area in transition from rural agriculture to urban commerce. Covers population typically between 11,000 and 25,000 with more than 50% non-agricultural working population.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Manage transition from rural village infrastructure to basic urban civic amenities (tar roads, street lights, piped water, waste collection).',
      'Collect local property and lighting taxes; regulate commercial conversion of agricultural land.'
    ],
    limitations: [
      'Limited independent tax base; heavily dependent on state transitional grants.'
    ],
    governanceDetails: {
      positionName: 'Nagar Panchayat President & Chief Officer',
      electoralOrSelectionMethod: 'Elected by registered town voters from wards; administrative CO appointed by State',
      tenure: '5 Years from first meeting',
      geographicalJurisdiction: 'Transitional Urban Area (5 to 25 km²; 11,000 to 25,000 population)',
      reportingTo: 'Sub-Divisional Magistrate & District Collector'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-WARD-CORPORATOR',
    type: 'office',
    title: 'Ward Corporator / Councillor (Elected Ward Representative)',
    abbreviation: 'WARD-CORP',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'legislation',
    summary: 'Directly elected grassroots urban representative representing a municipal electoral ward. Serves as the first point of contact for citizens regarding water supply, garbage collection, drainage, road repair, and ward developmental funds.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Vote in General Body meetings, question municipal administration, and propose ward developmental projects.',
      'Recommend works funded by corporator ward discretionary funds (local gutters, community sheds, paving).'
    ],
    limitations: [
      'No executive spending authority; works must be tendered, inspected, and executed by municipal engineers.'
    ],
    governanceDetails: {
      positionName: 'Ward Corporator / Councillor / Ward Member',
      electoralOrSelectionMethod: 'Direct election by registered voters of the Municipal Ward via secret ballot',
      tenure: '5 Years (co-terminus with Municipal Body)',
      geographicalJurisdiction: 'Electoral Ward boundary (covers 5,000 to 50,000+ citizens; metropolitan wards can exceed 1 Lakh)',
      reportingTo: 'Ward Electorate & Municipal Council'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 09: RURAL LOCAL SELF-GOVERNMENT
  // ==========================================
  {
    id: 'DEM-ZP-PRESIDENT',
    type: 'office',
    title: 'Zilla Parishad President & Vice-President (District Rural Political Head)',
    abbreviation: 'ZP-PRESIDENT',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'executive-administration',
    summary: 'The elected political head of rural district local government (Zilla Parishad). Presides over ZP General Body meetings, decides rural development priorities, and reviews primary schools, PHCs, and rural water supply.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Preside over Zilla Parishad General Body meetings and coordinate district rural developmental plans.',
      'Represent the district rural leadership in State Rural Development Department policy reviews.'
    ],
    limitations: [
      'Administrative executive execution and staffing control is vested in the IAS Chief Executive Officer (CEO).'
    ],
    governanceDetails: {
      positionName: 'President & Vice-President, Zilla Parishad (~784 across India)',
      electoralOrSelectionMethod: 'Elected by elected ZP Members from among themselves',
      tenure: '2.5 to 5 Years depending on state legislation',
      geographicalJurisdiction: 'Rural areas of the District (5 Lakh to 30 Lakh rural population)',
      reportingTo: 'Zilla Parishad General Body & Rural Electorate'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ZP-MEMBER',
    type: 'legislature',
    title: 'Zilla Parishad Member / Councillor (Elected Rural Division Rep)',
    abbreviation: 'ZP-MEMBER',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'legislation',
    summary: 'Directly elected district-level rural representative representing an electoral division (~30,000 to 50,000 rural residents). Votes on district rural budgets, chairs subject committees (Health, Education, Agriculture), and monitors rural schemes.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Vote on the annual Zilla Parishad budget and allocations for rural water supply, roads, and schools.',
      'Member/Chairman of ZP Subject Committees (Education, Works, Health, Social Welfare).'
    ],
    limitations: [
      'Executive execution is carried out by ZP department officers under CEO.'
    ],
    governanceDetails: {
      positionName: 'Zilla Parishad Member (~50 to 75 Members per ZP)',
      electoralOrSelectionMethod: 'Direct election by registered rural voters of the ZP electoral division',
      tenure: '5 Years',
      geographicalJurisdiction: 'ZP Electoral Division (~30,000 to 50,000 rural population, covering 10 to 25 villages)',
      reportingTo: 'Rural Division Electorate'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ZP-CEO',
    type: 'department',
    title: 'Chief Executive Officer (CEO), Zilla Parishad (IAS Administrative Head)',
    abbreviation: 'ZP-CEO',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'executive-administration',
    summary: 'Senior IAS officer serving as administrative head of the Zilla Parishad. Responsible for executing all rural development works, administering primary schools, managing rural PHCs, and implementing MGNREGA and PMAY-G schemes.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Execute all Zilla Parishad resolutions, sanction rural civil works, and appoint/transfer primary teachers and rural health staff.',
      'Draw and disburse state and central rural development scheme funds.'
    ],
    limitations: [
      'Must act within budget sanctions approved by the elected Zilla Parishad General Body.'
    ],
    governanceDetails: {
      positionName: 'Chief Executive Officer, Zilla Parishad (Senior IAS / Junior Cadre Selection)',
      electoralOrSelectionMethod: 'Appointed by State Rural Development Department',
      tenure: 'Cadre posting (typically 2 to 3 years)',
      geographicalJurisdiction: 'Rural district jurisdiction (1,000 to 10,000+ km²)',
      reportingTo: 'Divisional Commissioner & State Rural Development Department'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PS-CHAIRPERSON',
    type: 'office',
    title: 'Panchayat Samiti Chairperson & Deputy Chairperson (Block Rural Head)',
    abbreviation: 'PS-CHAIRPERSON',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'executive-administration',
    summary: 'Elected political leader of the intermediate rural tier operating at Community Development Block level. Presides over Panchayat Samiti meetings, coordinates development across 20 to 100 Gram Panchayats, and represents the block in the Zilla Parishad.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Preside over Panchayat Samiti meetings, approve block-level agricultural and sanitation schemes.',
      'Inspect village development works and represent the block at the Zilla Parishad.'
    ],
    limitations: [
      'Administrative executive execution is managed by the Block Development Officer (BDO).'
    ],
    governanceDetails: {
      positionName: 'Panchayat Samiti Chairperson (6,769 Samitis / 7,323 Blocks across India)',
      electoralOrSelectionMethod: 'Elected by elected Panchayat Samiti Members from among themselves',
      tenure: '2.5 to 5 Years depending on state law',
      geographicalJurisdiction: 'Development Block (covers 20 to 100 Gram Panchayats, ~50,000 to 5,00,000 population)',
      reportingTo: 'Panchayat Samiti & Zilla Parishad'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PS-MEMBER',
    type: 'legislature',
    title: 'Panchayat Samiti Member (Block Division Representative)',
    abbreviation: 'PS-MEMBER',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'legislation',
    summary: 'Directly elected block-level rural representative representing an electoral division (~15,000 to 25,000 residents). Participates in block rural planning, reviews agricultural extension, and monitors village welfare scheme execution.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Vote on the Panchayat Samiti budget and scheme allocations.',
      'Elect the Chairperson and Deputy Chairperson of the Panchayat Samiti.'
    ],
    limitations: [
      'Subordinate to the overall planning and budget of the Zilla Parishad.'
    ],
    governanceDetails: {
      positionName: 'Panchayat Samiti Member (~15 to 30 Members per Samiti)',
      electoralOrSelectionMethod: 'Direct election by registered rural voters in the block electoral division',
      tenure: '5 Years',
      geographicalJurisdiction: 'Block Electoral Division (~15,000 to 25,000 population, covering 5 to 10 villages)',
      reportingTo: 'Block Electorate'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-BDO',
    type: 'department',
    title: 'Block Development Officer — BDO (Block Administrative Head)',
    abbreviation: 'BDO-ADMIN',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'executive-administration',
    summary: 'State civil service officer heading development administration at the block level. Coordinates agricultural extension, animal husbandry, rural employment (MGNREGA), and inspects Gram Panchayats.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Sanction village development proposals, supervise Gram Sevaks, and inspect Gram Panchayat records.',
      'Serve as ex-officio Executive Officer of the Panchayat Samiti and implement Samiti decisions.'
    ],
    limitations: [
      'Subordinate to the Chief Executive Officer (CEO), Zilla Parishad.'
    ],
    governanceDetails: {
      positionName: 'Block Development Officer (Group A / Gazetted State Service)',
      electoralOrSelectionMethod: 'State Public Service Commission Examination (e.g. MPSC)',
      tenure: 'Cadre posting (typically 2 to 3 years)',
      geographicalJurisdiction: 'Development Block (7,323 Blocks across India)',
      reportingTo: 'Chief Executive Officer (CEO), Zilla Parishad & District Collector'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SARPANCH',
    type: 'office',
    title: 'Sarpanch & Upa-Sarpanch (Elected Village Head)',
    abbreviation: 'SARPANCH',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'local',
    category: 'executive-administration',
    summary: 'The elected executive head of the Gram Panchayat (~2,55,392 across India). Leads the village panchayat, executes local public works (sanitation, drinking water, streetlights, village roads), and executes resolutions passed by the sovereign Gram Sabha.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Convene and preside over Gram Sabha meetings (mandatory 4-6 times/year) and Gram Panchayat monthly meetings.',
      'Joint signatory with Gram Sevak on the official Gram Panchayat bank account for village development funds.',
      'Issue village residency certificates, no-objection certificates, and verify welfare beneficiaries.'
    ],
    limitations: [
      'Cannot sanction budgets or beneficiary lists without prior ratification by the sovereign Gram Sabha.'
    ],
    governanceDetails: {
      positionName: 'Sarpanch & Deputy Sarpanch (2,55,392 Sarpanchs across ~6,77,673 villages)',
      electoralOrSelectionMethod: 'Direct election by registered village voters (or elected by ward members depending on state law)',
      tenure: '5 Years from the date of the first meeting',
      geographicalJurisdiction: 'Gram Panchayat boundary covering 1 to 5 revenue villages (5 to 50 km²; 1,000 to 10,000 population)',
      reportingTo: 'Gram Sabha (Village Sovereign Assembly) & Block Development Officer'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-WARD-PANCH',
    type: 'legislature',
    title: 'Ward Panch / Gram Panchayat Member (Village Ward Representative)',
    abbreviation: 'WARD-PANCH',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'local',
    category: 'legislation',
    summary: 'The frontline elected village representative representing an electoral ward within the village (typically 200 to 1,000 residents). Directly raises neighborhood water, road, and drainage issues in monthly panchayat meetings.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Vote on monthly Gram Panchayat resolutions and elect the Upa-Sarpanch (Deputy Sarpanch).',
      'Identify eligible poor households for welfare housing (PMAY-G) and ration cards in their ward.'
    ],
    limitations: [
      'No individual executive spending power; decisions must be passed collectively by the Gram Panchayat.'
    ],
    governanceDetails: {
      positionName: 'Ward Panch / Gram Panchayat Member (~7 to 17 members per Gram Panchayat)',
      electoralOrSelectionMethod: 'Direct election by registered voters of the village ward',
      tenure: '5 Years (co-terminus with Gram Panchayat)',
      geographicalJurisdiction: 'Village Electoral Ward (~200 to 1,000 villagers)',
      reportingTo: 'Ward Residents & Gram Sabha'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-GRAM-SEVAK',
    type: 'department',
    title: 'Gram Sevak / Village Secretary (Village Administrative Staff)',
    abbreviation: 'GRAM-SEVAK',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'local',
    category: 'executive-administration',
    summary: 'Appointed administrative secretary of the Gram Panchayat. Maintains official village records, registers births and deaths, prepares development budgets, and manages government scheme disbursements (MGNREGA, PMAY).',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Maintain official minutes of Gram Sabha and Gram Panchayat meetings.',
      'Joint signatory with the Sarpanch on official village government bank accounts.',
      'Register births, deaths, and marriages at village level.'
    ],
    limitations: [
      'Purely administrative official; subordinate to the Sarpanch in local administration and BDO in service hierarchy.'
    ],
    governanceDetails: {
      positionName: 'Gram Sevak / Gram Vikas Adhikari / Panchayat Secretary',
      electoralOrSelectionMethod: 'Selected by Zilla Parishad / State Staff Selection Board (Class III)',
      tenure: 'Permanent civil service post (transfers every 3 years within district)',
      geographicalJurisdiction: 'Gram Panchayat boundary',
      reportingTo: 'Sarpanch (locally) & Block Development Officer (administratively)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-GRAM-SABHA',
    type: 'constitutional',
    title: 'Gram Sabha (Sovereign Assembly of All Voters)',
    abbreviation: 'GRAM-SABHA',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'local',
    category: 'legislation',
    summary: 'The primary constitutional forum of direct democracy in India. Comprises all adult citizens registered on the village electoral roll, exercising direct sovereign oversight over village governance, approving budgets, and auditing works.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Mandatory ratification of the annual Gram Panchayat Development Plan (GPDP) and village budget.',
      'Conduct social audits of all public works and muster rolls (e.g. MGNREGA).',
      'Select and approve beneficiaries for all central and state poverty-alleviation schemes.',
      'Special constitutional veto powers in Scheduled Areas under PESA regarding land acquisition and forest resources.'
    ],
    limitations: [
      'Must convene mandatory periodic meetings (minimum 4 to 6 times a year, e.g. on 26 January, 1 May, 15 August, 2 October).'
    ],
    governanceDetails: {
      positionName: 'Gram Sabha (General Assembly of Registered Village Electors)',
      electoralOrSelectionMethod: 'Automatic membership of every adult resident registered on the electoral roll of the village',
      tenure: 'Permanent sovereign institution (does not dissolve)',
      geographicalJurisdiction: 'Revenue Village / Gram Panchayat boundary',
      reportingTo: 'The People & Sovereign Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 10: CONSTITUTIONAL ELECTORAL OVERSIGHT
  // ==========================================
  {
    id: 'DEM-ECI',
    type: 'constitutional',
    title: 'Election Commission of India (National Election Oversight)',
    abbreviation: 'ECI',
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'Autonomous constitutional authority vested with superintendence, direction, and control of all elections to Parliament (Lok Sabha & Rajya Sabha), State Legislatures (Assemblies & Councils), and the offices of President and Vice-President.',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Enforce the Model Code of Conduct (MCC) across all political parties and candidates.',
      'Depute civil officers as District Election Officers (DEOs), Returning Officers (ROs), and deploy Central Armed Police Forces (CAPF).',
      'Countermand elections or order repolling in cases of booth capturing, violence, or electoral malpractice.'
    ],
    limitations: [
      'Does not conduct local Panchayat or Municipal elections (vested in State Election Commissions).'
    ],
    governanceDetails: {
      positionName: 'Chief Election Commissioner & 2 Election Commissioners (3-Member Apex Commission)',
      electoralOrSelectionMethod: 'Appointed by the President of India under statutory selection committee mechanism',
      tenure: '6 Years or until age 65 (whichever is earlier); removable only by Parliamentary impeachment like a Supreme Court judge',
      geographicalJurisdiction: 'Entire Republic of India',
      reportingTo: 'Constitution of India (Subject to judicial review by Supreme Court)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SEC',
    type: 'constitutional',
    title: 'State Election Commission (Local Bodies Election Oversight)',
    abbreviation: 'STATE-EC',
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'Independent constitutional authority at state level vested with superintendence, direction, and control of all elections to Rural Panchayats (Zilla Parishad, Panchayat Samiti, Gram Panchayat) and Urban Municipalities (Corporations, Councils, Nagar Panchayats).',
    mandate: [],
    establishingLaw: [],
    powers: [
      'Delimit wards, prepare local electoral rolls, notify election schedules, and allot election symbols for local elections.',
      'Issue binding directions to District Collectors, Municipal Commissioners, and Police during local body elections.'
    ],
    limitations: [
      'Jurisdiction limited to local self-governments; does not conduct Parliamentary or Assembly elections.'
    ],
    governanceDetails: {
      positionName: 'State Election Commissioner (1 in each State/UT)',
      electoralOrSelectionMethod: 'Appointed by the Governor of the State',
      tenure: 'Fixed tenure (usually 5 years); removable only in like manner and grounds as a High Court Judge',
      geographicalJurisdiction: 'Entire territory of the State',
      reportingTo: 'Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  }
];

export const RELATIONSHIPS_V4: RelationshipEdgeData[] = [
  // ==========================================
  // 1. SOVEREIGN CITIZEN ELECTORAL MANDATE
  // ==========================================
  {
    id: 'REL-V4-001',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects 543 Lok Sabha MPs by Universal Adult Suffrage',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-002',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-MLA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects 4,123 MLAs across State Legislative Assemblies',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-003',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-WARD-CORPORATOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Urban Ward Corporators in Municipal Elections',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-004',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-GRAM-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'All Adult Citizens Form Sovereign Village Gram Sabha',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-005',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-SARPANCH',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Village Sarpanch directly / via Ward Panchs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-006',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-WARD-PANCH',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Ward Panch from Village Neighborhood Wards',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-007',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-PS-MEMBER',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Panchayat Samiti Members from Block Divisions',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-008',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-ZP-MEMBER',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Zilla Parishad Members from Rural District Divisions',
    verificationStatus: 'verified'
  },

  // ==========================================
  // 2. UNION PARLIAMENT & EXECUTIVE LINKAGES
  // ==========================================
  {
    id: 'REL-V4-009',
    sourceNodeId: 'DEM-MP-LOK-SABHA',
    targetNodeId: 'DEM-SPEAKER-LS',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Speaker from among themselves',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-010',
    sourceNodeId: 'DEM-SPEAKER-LS',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Regulates debate, speaking time & House discipline',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-011',
    sourceNodeId: 'DEM-MP-LOK-SABHA',
    targetNodeId: 'DEM-PRIME-MINISTER',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Majority of MPs command confidence to form Union Government',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-012',
    sourceNodeId: 'DEM-PRIME-MINISTER',
    targetNodeId: 'DEM-PRESIDENT',
    type: 'ADVISES',
    label: 'Aids and advises (Art 74) & communicates decisions (Art 78)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-013',
    sourceNodeId: 'DEM-PRIME-MINISTER',
    targetNodeId: 'DEM-CABINET-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Leads Union Cabinet & allocates ministerial portfolios',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-014',
    sourceNodeId: 'DEM-CABINET-MINISTER',
    targetNodeId: 'DEM-MINISTER-OF-STATE',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Ministers of State assisting in ministry',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-015',
    sourceNodeId: 'DEM-CABINET-MINISTER',
    targetNodeId: 'DEM-UNION-SECRETARY',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Provides political leadership to Department Secretary (IAS)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-016',
    sourceNodeId: 'DEM-PRIME-MINISTER',
    targetNodeId: 'DEM-CABINET-SEC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Cabinet Secretariat & civil administrative machinery',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-017',
    sourceNodeId: 'DEM-MP-LOK-SABHA',
    targetNodeId: 'DEM-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Forms Electoral College for Presidential Election',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-018',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'State MLAs vote in Presidential Electoral College',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-019',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-MP-RAJYA-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects 233 Rajya Sabha MPs by Single Transferable Vote',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-020',
    sourceNodeId: 'DEM-VICE-PRESIDENT',
    targetNodeId: 'DEM-CHAIRMAN-RS',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Ex-Officio Chairman of Rajya Sabha (Art 64)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-021',
    sourceNodeId: 'DEM-CHAIRMAN-RS',
    targetNodeId: 'DEM-MP-RAJYA-SABHA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Presides over debates & regulates House proceedings',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-022',
    sourceNodeId: 'DEM-LEADER-OPPOSITION-UNION',
    targetNodeId: 'DEM-CABINET-MINISTER',
    type: 'AUDITS',
    label: 'Leads opposition scrutiny & questions government policy',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-023',
    sourceNodeId: 'DEM-PARL-COMMITTEE',
    targetNodeId: 'DEM-UNION-SECRETARY',
    type: 'AUDITS',
    label: 'Examines ministry spending, CAG audit reports & demands',
    verificationStatus: 'verified'
  },

  // ==========================================
  // 3. STATE EXECUTIVE & LEGISLATIVE LINKAGES
  // ==========================================
  {
    id: 'REL-V4-024',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-GOVERNOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints Governor by Warrant under Hand & Seal (Art 155)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-025',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-SPEAKER-VS',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Speaker of State Legislative Assembly',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-026',
    sourceNodeId: 'DEM-SPEAKER-VS',
    targetNodeId: 'DEM-MLA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Presides over floor debate, decorum & Anti-Defection rules',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-027',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-CHIEF-MINISTER',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Majority of MLAs form State Government under CM',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-028',
    sourceNodeId: 'DEM-CHIEF-MINISTER',
    targetNodeId: 'DEM-GOVERNOR',
    type: 'ADVISES',
    label: 'Aids and advises in state governance (Art 163)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-029',
    sourceNodeId: 'DEM-CHIEF-MINISTER',
    targetNodeId: 'DEM-STATE-CABINET-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Leads State Cabinet & allocates state portfolios',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-030',
    sourceNodeId: 'DEM-CHIEF-MINISTER',
    targetNodeId: 'DEM-CHIEF-SEC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Heads state administrative machinery via Mantralaya',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-031',
    sourceNodeId: 'DEM-MLC',
    targetNodeId: 'DEM-CHAIRMAN-VP',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Chairman of State Legislative Council',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-032',
    sourceNodeId: 'DEM-LEADER-OPPOSITION-STATE',
    targetNodeId: 'DEM-STATE-CABINET-MINISTER',
    type: 'AUDITS',
    label: 'Leads opposition scrutiny of state government actions',
    verificationStatus: 'verified'
  },

  // ==========================================
  // 4. FIELD ADMINISTRATIVE SPINE (STATE TO VILLAGE)
  // ==========================================
  {
    id: 'REL-V4-033',
    sourceNodeId: 'DEM-CHIEF-SEC',
    targetNodeId: 'DEM-DIVISIONAL-COMM',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Regional Divisional Commissioners',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-034',
    sourceNodeId: 'DEM-DIVISIONAL-COMM',
    targetNodeId: 'DEM-DISTRICT-COLLECTOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises District Collectors across Division',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-035',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-SDM',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Sub-Divisional Magistrates (SDMs)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-036',
    sourceNodeId: 'DEM-SDM',
    targetNodeId: 'DEM-TEHSILDAR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Oversees Taluka Tehsildars & Executive Magistracy',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-037',
    sourceNodeId: 'DEM-TEHSILDAR',
    targetNodeId: 'DEM-TALATHI',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Village Talathis & Land Records (7/12 Extract)',
    verificationStatus: 'verified'
  },

  // ==========================================
  // 5. URBAN LOCAL GOVERNANCE (74TH AMENDMENT)
  // ==========================================
  {
    id: 'REL-V4-038',
    sourceNodeId: 'DEM-WARD-CORPORATOR',
    targetNodeId: 'DEM-MAYOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Mayor from among Corporation members',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-039',
    sourceNodeId: 'DEM-WARD-CORPORATOR',
    targetNodeId: 'DEM-STANDING-COMM-CHAIR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Forms Standing Committee for financial contracts',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-040',
    sourceNodeId: 'DEM-STANDING-COMM-CHAIR',
    targetNodeId: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'AUDITS',
    label: 'Sanctions municipal expenditure & contract tenders',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-041',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'COORDINATES',
    label: 'Coordinates district magistracy, elections & disaster relief',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-042',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-MUNICIPAL-COUNCIL',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Inspects Town Municipal Councils under Municipal Act',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-043',
    sourceNodeId: 'DEM-SDM',
    targetNodeId: 'DEM-NAGAR-PANCHAYAT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises transitional Nagar Panchayats',
    verificationStatus: 'verified'
  },

  // ==========================================
  // 6. RURAL LOCAL GOVERNANCE (73RD AMENDMENT)
  // ==========================================
  {
    id: 'REL-V4-044',
    sourceNodeId: 'DEM-ZP-MEMBER',
    targetNodeId: 'DEM-ZP-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Zilla Parishad President from among Members',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-045',
    sourceNodeId: 'DEM-ZP-PRESIDENT',
    targetNodeId: 'DEM-ZP-CEO',
    type: 'COORDINATES',
    label: 'Guides district rural policy executed by IAS CEO',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-046',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-ZP-CEO',
    type: 'COORDINATES',
    label: 'Coordinates revenue & district rural developmental planning',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-047',
    sourceNodeId: 'DEM-ZP-CEO',
    targetNodeId: 'DEM-BDO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Block Development Officers across all blocks',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-048',
    sourceNodeId: 'DEM-PS-MEMBER',
    targetNodeId: 'DEM-PS-CHAIRPERSON',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects Panchayat Samiti Chairperson from Members',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-049',
    sourceNodeId: 'DEM-PS-CHAIRPERSON',
    targetNodeId: 'DEM-BDO',
    type: 'COORDINATES',
    label: 'Guides block development plans executed by BDO',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-050',
    sourceNodeId: 'DEM-BDO',
    targetNodeId: 'DEM-GRAM-SEVAK',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Gram Sevaks across constituent villages',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-051',
    sourceNodeId: 'DEM-WARD-PANCH',
    targetNodeId: 'DEM-SARPANCH',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Forms Gram Panchayat body; elects Deputy Sarpanch',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-052',
    sourceNodeId: 'DEM-SARPANCH',
    targetNodeId: 'DEM-GRAM-SEVAK',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Jointly signs village development accounts & directs local staff',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-053',
    sourceNodeId: 'DEM-GRAM-SABHA',
    targetNodeId: 'DEM-SARPANCH',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Direct democracy ratification: approves budgets & audits works',
    verificationStatus: 'verified'
  },

  // ==========================================
  // 7. CONSTITUTIONAL ELECTORAL SUPERVISION
  // ==========================================
  {
    id: 'REL-V4-054',
    sourceNodeId: 'DEM-ECI',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'CONDUCTS_EXAM',
    label: 'Conducts General Elections across 543 Parliamentary Constituencies',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-055',
    sourceNodeId: 'DEM-ECI',
    targetNodeId: 'DEM-MLA',
    type: 'CONDUCTS_EXAM',
    label: 'Conducts State Assembly Elections across 4,123 Constituencies',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-056',
    sourceNodeId: 'DEM-ECI',
    targetNodeId: 'DEM-DISTRICT-COLLECTOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Collector acts as District Election Officer (DEO) under ECI',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-057',
    sourceNodeId: 'DEM-SEC',
    targetNodeId: 'DEM-WARD-CORPORATOR',
    type: 'CONDUCTS_EXAM',
    label: 'Conducts Urban Municipal Corporation Ward Elections',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-058',
    sourceNodeId: 'DEM-SEC',
    targetNodeId: 'DEM-SARPANCH',
    type: 'CONDUCTS_EXAM',
    label: 'Conducts Rural Gram Panchayat & Sarpanch Elections',
    verificationStatus: 'verified'
  }
];

export const SOURCES_V4: SourceRecord[] = [
  {
    id: 'SRC-V4-CONST',
    name: 'Constitution of India',
    officialUrl: 'https://legislative.gov.in/constitution-of-india',
    documentTitle: 'The Constitution of India',
    publicationDate: '1950-01-26',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-PEOPLE', 'DEM-PRESIDENT', 'DEM-PRIME-MINISTER', 'DEM-MP-LOK-SABHA', 'DEM-GOVERNOR', 'DEM-CHIEF-MINISTER', 'DEM-MLA']
  },
  {
    id: 'SRC-V4-ECI',
    name: 'Election Commission of India',
    officialUrl: 'https://eci.gov.in',
    documentTitle: 'Electoral Data & Delimitation Orders',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-ECI', 'DEM-MP-LOK-SABHA', 'DEM-MLA']
  },
  {
    id: 'SRC-V4-LGD',
    name: 'Local Government Directory (LGD)',
    officialUrl: 'https://lgdirectory.gov.in',
    documentTitle: 'Directory of Local Bodies, Districts, Blocks and Villages',
    lastVerifiedDate: '2026-10-15',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-DISTRICT-COLLECTOR', 'DEM-MUNICIPAL-CORP', 'DEM-ZILLA-PARISHAD', 'DEM-SARPANCH']
  }
];
