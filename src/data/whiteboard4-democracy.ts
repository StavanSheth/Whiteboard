import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V4: SectionMeta[] = [
  {
    id: 'SEC-DEM-01',
    number: '01',
    title: 'Sovereign Foundation & Constitutional Roots',
    subtitle: 'Sovereign People of India, Preamble & Universal Adult Suffrage',
    summary: 'The ultimate source of democratic legitimacy under the Constitution of India. Citizens possess universal adult suffrage at age 18, voting directly for Lok Sabha MPs, State MLAs, Municipal Corporators, and Village Panchs.',
    iconName: 'Users',
    expectedSubsections: ['01.1 Preamble & Democratic Sovereignty', '01.2 Universal Adult Suffrage (Age 18+)', '01.3 Citizens Fundamental Rights & Electoral Mandate'],
    expectedAuthorities: ['The People of India', 'Constitution of India']
  },
  {
    id: 'SEC-DEM-02',
    number: '02',
    title: 'Union Legislature (Parliament of India)',
    subtitle: 'Lok Sabha (House of the People) & Rajya Sabha (Council of States)',
    summary: 'The bicameral supreme legislative body of the Union: 543 directly elected Lok Sabha MPs, Speaker, 245 Rajya Sabha MPs, Chairman (Vice-President), Leader of Opposition, and Parliamentary Standing Committees.',
    iconName: 'Landmark',
    expectedSubsections: ['02.1 Parliament of India (Bicameral Apex)', '02.2 Lok Sabha (543 MPs)', '02.3 Speaker of the Lok Sabha', '02.4 Rajya Sabha (245 MPs)', '02.5 Chairman of the Rajya Sabha', '02.6 Parliamentary Standing Committees', '02.7 Leader of Opposition'],
    expectedAuthorities: ['Parliament of India', 'Speaker of Lok Sabha', 'Chairman of Rajya Sabha', 'Members of Parliament']
  },
  {
    id: 'SEC-DEM-03',
    number: '03',
    title: 'Union Political Executive & Apex Offices',
    subtitle: 'President, Vice-President, Prime Minister & Union Cabinet',
    summary: 'The political executive apex of the Central Government: Constitutional Head of State (President), Head of Union Government (Prime Minister commanding Lok Sabha confidence), Union Cabinet Ministers, and Ministers of State.',
    iconName: 'Building2',
    expectedSubsections: ['03.1 President of India (Rashtrapati)', '03.2 Vice-President of India', '03.3 Prime Minister of India (PM)', '03.4 Union Cabinet Ministers', '03.5 Ministers of State (MoS)'],
    expectedAuthorities: ['President of India', 'Vice-President of India', 'Prime Minister of India', 'Union Cabinet']
  },
  {
    id: 'SEC-DEM-04',
    number: '04',
    title: 'Key Union Ministries & Central Apparatus',
    subtitle: 'Cabinet Secretariat, MHA, Finance, Law, DoPT, CAPFs & Central Agencies',
    summary: 'Central civil service and ministerial machinery: Cabinet Secretary, Ministry of Home Affairs (MHA) & CAPFs (CRPF/BSF/CISF/IB), Ministry of Finance & Revenue Boards (CBDT/CBIC), Ministry of Law & Justice, and DoPT.',
    iconName: 'Briefcase',
    expectedSubsections: ['04.1 Cabinet Secretariat', '04.2 Ministry of Home Affairs (MHA)', '04.3 Central Armed Police Forces (CAPFs) & IB', '04.4 Ministry of Finance (MoF)', '04.5 Central Revenue Boards (CBDT & CBIC)', '04.6 Ministry of Law & Justice', '04.7 Ministry of Personnel & DoPT'],
    expectedAuthorities: ['Cabinet Secretariat', 'Ministry of Home Affairs', 'CAPF', 'Ministry of Finance', 'Ministry of Law & Justice']
  },
  {
    id: 'SEC-DEM-05',
    number: '05',
    title: 'State Legislature (Vidhan Mandal)',
    subtitle: 'Vidhan Sabha (Legislative Assembly) & Vidhan Parishad (Council)',
    summary: 'State legislative apparatus: 4,123 directly elected MLAs across State Legislative Assemblies, Assembly Speaker, Leader of Opposition, and bicameral Legislative Councils (MLCs) in 6 states.',
    iconName: 'Landmark',
    expectedSubsections: ['05.1 Legislative Assembly (Vidhan Sabha)', '05.2 Speaker of Vidhan Sabha', '05.3 Legislative Council (Vidhan Parishad)', '05.4 Chairman of Vidhan Parishad', '05.5 Leader of Opposition (State Assembly)'],
    expectedAuthorities: ['Speaker of Vidhan Sabha', 'MLAs of India', 'MLCs of Bicameral States']
  },
  {
    id: 'SEC-DEM-06',
    number: '06',
    title: 'State Political Executive',
    subtitle: 'Governor, Chief Minister & State Council of Ministers',
    summary: 'State-level executive governance: Governor (Constitutional Head of State), Chief Minister (Head of State Government commanding Assembly confidence), and State Council of Ministers.',
    iconName: 'Building2',
    expectedSubsections: ['06.1 Governor of the State', '06.2 Chief Minister of the State (CM)', '06.3 State Cabinet Ministers & Ministers of State'],
    expectedAuthorities: ['Governor of State', 'Chief Minister of State', 'State Cabinet']
  },
  {
    id: 'SEC-DEM-07',
    number: '07',
    title: 'State Secretariat & Government Departments',
    subtitle: 'Chief Secretary, State Home Dept, Finance, Law & General Administration (GAD)',
    summary: 'State administrative engine centered at Mantralaya/Secretariat: Chief Secretary (Senior-most State Civil Servant), State Home Department, State Finance Department, Law & Judiciary Department, and General Administration Department (GAD).',
    iconName: 'Briefcase',
    expectedSubsections: ['07.1 Chief Secretary of the State', '07.2 State Home Department', '07.3 State Finance Department', '07.4 State Law & Judiciary Department', '07.5 General Administration Department (GAD)'],
    expectedAuthorities: ['Chief Secretary', 'State Home Department', 'State Finance Department']
  },
  {
    id: 'SEC-DEM-08',
    number: '08',
    title: 'State Police & Law Enforcement Hierarchy',
    subtitle: 'DGP, Range IG, Police Commissioner, District SP, DySP, Inspector & Constabulary',
    summary: 'The uniform law enforcement command hierarchy under the State Home Department: Director General of Police (DGP/HoPF, Apex IPS), Range IG/DIG, Metropolitan Commissioner of Police (CP), District SP, DySP/SDPO, Police Inspector (SHO), Sub-Inspector (PSI), and Constabulary.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['08.1 Director General of Police (DGP / HoPF)', '08.2 Range IG & DIG of Police', '08.3 Commissioner of Police (Metropolitan CP)', '08.4 Superintendent of Police (District SP/SSP)', '08.5 Deputy SP / SDPO', '08.6 Police Inspector / SHO (Police Station)', '08.7 Sub-Inspector (PSI) & ASI', '08.8 Police Constabulary (Head Constable & Constable)'],
    expectedAuthorities: ['Director General of Police', 'Commissioner of Police', 'Superintendent of Police', 'Police Station SHO']
  },
  {
    id: 'SEC-DEM-09',
    number: '09',
    title: 'Divisional & District Field Administration (Revenue & Magistracy)',
    subtitle: 'Divisional Commissioner, District Collector/DM, SDM, Tehsildar & Talathi',
    summary: 'The territorial civil and revenue spine of India: Divisional Commissioners, District Magistrates / Collectors (784 districts - Executive Magistracy, Land Revenue & Development Coordination), Sub-Divisional Magistrates (SDM), Tehsildars, and village Talathis (7/12 Extract).',
    iconName: 'Briefcase',
    expectedSubsections: ['09.1 Divisional Commissioner (Division Level)', '09.2 District Magistrate / Collector / DC (District Level - 784 DMs)', '09.3 Sub-Divisional Magistrate (SDM)', '09.4 Tehsildar & Executive Magistrate (Taluka)', '09.5 Talathi / Patwari (Village Revenue Cluster)'],
    expectedAuthorities: ['Divisional Commissioner', 'District Collector / DM', 'Tehsildar', 'Talathi']
  },
  {
    id: 'SEC-DEM-10',
    number: '10',
    title: 'Urban Local Self-Government (74th Constitutional Amendment)',
    subtitle: 'Mayor, Standing Committee Chair, Municipal Commissioner, Council President & Corporator',
    summary: 'Decentralized urban governance: Municipal Corporations for major cities (>3 Lakh pop; Mayor & IAS Municipal Commissioner), Municipal Councils for towns (25k-3 Lakh pop; President & Chief Officer), Nagar Panchayats, and Ward Corporators.',
    iconName: 'Building2',
    expectedSubsections: ['10.1 Mayor & Deputy Mayor (Mahanagar Palika Political Head)', '10.2 Standing Committee Chairperson (Financial Sanctioning Authority)', '10.3 Municipal Commissioner (IAS Executive Head of City)', '10.4 Municipal Council President & Chief Officer (Nagar Palika)', '10.5 Nagar Panchayat President & Chief Officer', '10.6 Ward Corporator / Councillor (Elected Ward Representative)'],
    expectedAuthorities: ['Mayor', 'Municipal Commissioner', 'Municipal Council President', 'Ward Corporators']
  },
  {
    id: 'SEC-DEM-11',
    number: '11',
    title: 'Rural Local Self-Government (73rd Constitutional Amendment)',
    subtitle: 'ZP President & CEO, Samiti Chairperson & BDO, Sarpanch, Gram Sevak & Gram Sabha',
    summary: 'Three-tier Panchayati Raj system: Zilla Parishad at district rural level (ZP President & IAS CEO), Panchayat Samiti at block level (Chairperson & BDO), Gram Panchayat at village level (Sarpanch & Gram Sevak), accountable to the sovereign Gram Sabha.',
    iconName: 'Users',
    expectedSubsections: ['11.1 Zilla Parishad President & Vice-President', '11.2 ZP Chief Executive Officer (CEO - IAS)', '11.3 Zilla Parishad Member (Elected Rural Rep)', '11.4 Panchayat Samiti Chairperson & Members', '11.5 Block Development Officer (BDO)', '11.6 Sarpanch & Upa-Sarpanch (Village Head)', '11.7 Gram Sevak (Village Secretary)', '11.8 Ward Panch / Gram Panchayat Member', '11.9 Gram Sabha (Sovereign Assembly of All Village Voters)'],
    expectedAuthorities: ['Zilla Parishad', 'Panchayat Samiti', 'Gram Panchayat', 'Gram Sabha']
  },
  {
    id: 'SEC-DEM-12',
    number: '12',
    title: 'Constitutional Oversight & Recruitment Commissions',
    subtitle: 'ECI, State Election Commission, UPSC & State PSCs (MPSC)',
    summary: 'Autonomous constitutional bodies safeguarding democracy and merit-based civil services: Election Commission of India (National elections), State Election Commissions (Local body polls), Union Public Service Commission (All India Services / Group A recruitment), and State PSCs.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['12.1 Election Commission of India (National Elections, Art 324)', '12.2 State Election Commission (Local Body Elections, Art 243K/243ZA)', '12.3 Union Public Service Commission (UPSC, Art 315)', '12.4 State Public Service Commission (SPSC / MPSC, Art 315)'],
    expectedAuthorities: ['Election Commission of India', 'State Election Commission', 'UPSC', 'State PSC']
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
    summary: 'The ultimate sovereign source of democratic legitimacy in India under the Preamble. Citizens vote directly in national, state, and local elections upon reaching age 18, elect representatives, participate in Gram Sabhas, and enforce fundamental rights.',
    mandate: [
      'Preamble: We, the People of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic.',
      'Article 326: Elections to the House of the People and Legislative Assemblies of States on the basis of adult suffrage.'
    ],
    powers: [
      'Cast secret ballot votes upon reaching age 18 in Lok Sabha, State Legislative Assembly, and Municipal/Panchayat elections.',
      'Directly deliberate, approve budgets, and audit village works in the sovereign Gram Sabha.',
      'Seek judicial protection of Fundamental Rights directly from the Supreme Court (Art 32) and High Courts (Art 226).'
    ],
    limitations: [
      'Subject to fundamental constitutional duties (Art 51A) and statutory citizenship regulations under Citizenship Act 1955.'
    ],
    governanceDetails: {
      positionName: 'Sovereign Citizens & Electors of India',
      cadreOrService: 'Sovereign Electorate',
      constitutionalArticle: 'Preamble & Article 326 of Constitution of India',
      electoralOrSelectionMethod: 'Universal Adult Suffrage (Voter Registration upon attaining 18 years)',
      tenure: 'Lifelong citizenship',
      geographicalJurisdiction: 'Entire Territory of India (3.287 Million km²)',
      reportingTo: 'Sovereign Republic of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CONSTITUTION',
    type: 'constitutional',
    title: 'Constitution of India (Supreme Law of the Land)',
    abbreviation: 'CONSTITUTION',
    sectionId: 'SEC-DEM-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'legislation',
    summary: 'The supreme organic legal charter of the Republic of India. Delineates the structure, powers, limitations, and separation of powers across the Legislature, Executive, and Judiciary at Union and State levels.',
    mandate: [
      'Adopted by the Constituent Assembly on 26 November 1949; came into full effect on 26 January 1950.',
      'Establishes constitutional supremacy, federalism, judicial review, and parliamentary democracy.'
    ],
    powers: [
      'Provides the sole legal source of power for all constitutional offices (President, Governors, PM, Parliament, Courts).',
      'Guarantees Fundamental Rights (Part III) enforceable against the State.',
      'Allocates legislative subjects via Seventh Schedule (Union List, State List, Concurrent List).'
    ],
    limitations: [
      'Basic Structure of the Constitution cannot be abrogated even by Parliamentary amendment (Kesavananda Bharati v. State of Kerala 1973).'
    ],
    governanceDetails: {
      positionName: 'Supreme Organic Law of the Republic of India',
      cadreOrService: 'Supreme Constitutional Document',
      constitutionalArticle: 'Articles 1 to 395 across 25 Parts & 12 Schedules',
      electoralOrSelectionMethod: 'Enacted by Constituent Assembly of India',
      tenure: 'Permanent Grundnorm',
      geographicalJurisdiction: 'Entire Territory of India',
      reportingTo: 'Sovereign People of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 02: UNION LEGISLATURE (PARLIAMENT)
  // ==========================================
  {
    id: 'DEM-PARLIAMENT',
    type: 'legislature',
    title: 'Parliament of India (Sansad)',
    abbreviation: 'SANSAD',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    summary: 'The supreme bicameral legislative body of the Union of India, consisting of the President of India, the Lok Sabha (House of the People), and the Rajya Sabha (Council of States). Enacts federal statutes, passes the national budget, and exercises accountability over the Union Executive.',
    mandate: [
      'Article 79: There shall be a Parliament for the Union which shall consist of the President and two Houses.',
      'Articles 107-117: Legislative procedure, introduction and passing of Bills, and Money Bills.'
    ],
    powers: [
      'Enact statutes on subjects in Union List (List I) and Concurrent List (List III) of the Seventh Schedule.',
      'Approve the Annual Financial Statement (Union Budget under Art 112) and authorize public expenditure.',
      'Amend the Constitution under Article 368 pursuant to procedural majorities.'
    ],
    limitations: [
      'Cannot legislate on exclusive State List subjects unless Articles 249, 250, 252, or 253 apply.',
      'Subject to judicial review by the Supreme Court of India.'
    ],
    governanceDetails: {
      positionName: 'Bicameral Supreme Legislature of the Union',
      cadreOrService: 'Supreme Legislative Body',
      constitutionalArticle: 'Article 79-122 of Constitution of India',
      electoralOrSelectionMethod: 'Composed of President + Lok Sabha (543 MPs) + Rajya Sabha (245 MPs)',
      tenure: 'Continuous body (Rajya Sabha permanent; Lok Sabha 5-year cycle)',
      geographicalJurisdiction: 'Entire Republic of India',
      reportingTo: 'Sovereign Electorate of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MP-LOK-SABHA',
    type: 'legislature',
    title: 'Member of Parliament — Lok Sabha (543 MPs)',
    abbreviation: 'MP-LS',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    summary: 'Directly elected representative representing a territorial Parliamentary Constituency (population ~15 to 25 Lakhs). Lok Sabha commands exclusive power over Money Bills and alone votes on Motions of No-Confidence against the Union Council of Ministers.',
    mandate: [
      'Article 81: Composition of the House of the People (not more than 543 directly elected members).',
      'Article 75(3): Council of Ministers collectively responsible exclusively to the Lok Sabha.'
    ],
    powers: [
      'Debate, introduce Private Member Bills, and vote on all Central legislative statutes.',
      'Exclusive voting power on Demands for Grants and the annual Union Budget (Art 113).',
      'Move No-Confidence Motions to test or remove the Union Government.'
    ],
    limitations: [
      'Subject to Tenth Schedule (Anti-Defection Law) and party whips during designated votes.',
      'Disqualified if holding an office of profit under Government (Art 102).'
    ],
    governanceDetails: {
      positionName: 'Member of Parliament (Lok Sabha)',
      cadreOrService: 'Elected People Representative (Union MP)',
      constitutionalArticle: 'Articles 81, 84, 101-106 of Constitution of India',
      electoralOrSelectionMethod: 'First-Past-The-Post (FPTP) Direct Election by Electorate (Age 18+)',
      tenure: '5 Years (unless House dissolved earlier under Art 85)',
      geographicalJurisdiction: 'Parliamentary Constituency (Single Member)',
      reportingTo: 'Constituency Voters & Speaker of Lok Sabha'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SPEAKER-LS',
    type: 'office',
    title: 'Speaker of the Lok Sabha',
    abbreviation: 'SPEAKER-LS',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    summary: 'The presiding constitutional officer of the Lok Sabha and highest administrative authority of the House. Decides points of order, certifies Money Bills, presides over Joint Sittings of Parliament, and rules on Anti-Defection disqualifications.',
    mandate: [
      'Article 93: Election of Speaker and Deputy Speaker by members of Lok Sabha.',
      'Article 110(4): Certificate of Speaker that a Bill is a Money Bill is final and conclusive.',
      'Article 118: Rules of Procedure and Conduct of Business in Lok Sabha.'
    ],
    powers: [
      'Certify Money Bills with conclusive finality (Art 110).',
      'Preside over Joint Sittings of both Houses of Parliament (Art 118(4)).',
      'Adjudicate disqualification petitions under the Tenth Schedule (Anti-Defection Law).'
    ],
    limitations: [
      'Casts only a casting vote in the event of an equality of votes (Art 100(1)).',
      'Decisions under Tenth Schedule are subject to judicial review (Kihoto Hollohan 1992).'
    ],
    governanceDetails: {
      positionName: 'Speaker of the House of the People',
      cadreOrService: 'Constitutional Parliamentary Presiding Officer',
      constitutionalArticle: 'Articles 93-97, 110(4), 118(4) of Constitution of India',
      electoralOrSelectionMethod: 'Elected by Lok Sabha MPs from amongst themselves by simple majority',
      tenure: 'Holds office until immediately before the first meeting of new Lok Sabha',
      geographicalJurisdiction: 'Lok Sabha Chamber, Parliament House & Parliamentary Secretariat',
      reportingTo: 'Lok Sabha (House of the People)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MP-RAJYA-SABHA',
    type: 'legislature',
    title: 'Member of Parliament — Rajya Sabha (245 MPs)',
    abbreviation: 'MP-RS',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    summary: 'Upper House representative reflecting India\'s federal character. 233 MPs are elected by elected MLAs of States and UTs via Proportional Representation with Single Transferable Vote (STV); 12 are nominated by the President for literature, science, art, and social service.',
    mandate: [
      'Article 80: Composition of the Council of States (238 representatives of States/UTs + 12 nominated).',
      'Article 249: Special power to authorize Parliament to legislate on State List subjects in national interest.',
      'Article 312: Special power to create new All-India Services (IAS, IPS, IFoS).'
    ],
    powers: [
      'Debate, amend, and vote on all Ordinary Bills and Constitutional Amendment Bills.',
      'Pass Article 312 resolutions with 2/3rd majority to create new All-India Services.',
      'Pass Article 249 resolutions to allow Parliament temporary legislation on State List.'
    ],
    limitations: [
      'Cannot reject or amend Money Bills (can only recommend changes within 14 days; Art 109).',
      'Cannot vote on Demands for Grants or express lack of confidence in Government.'
    ],
    governanceDetails: {
      positionName: 'Member of Parliament (Rajya Sabha)',
      cadreOrService: 'Elected / Nominated Federal Representative (Upper House MP)',
      constitutionalArticle: 'Articles 80, 84, 101-106 of Constitution of India',
      electoralOrSelectionMethod: 'Indirect election by elected MLAs of States via Single Transferable Vote (STV) / Presidential nomination',
      tenure: '6 Years (One-third of members retire every second year; permanent house)',
      geographicalJurisdiction: 'State / Union Territory represented',
      reportingTo: 'State Electorate / Assembly & Chairman of Rajya Sabha'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CHAIRMAN-RS',
    type: 'office',
    title: 'Chairman of the Rajya Sabha (Vice-President ex-officio)',
    abbreviation: 'CHAIRMAN-RS',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    summary: 'The Vice-President of India acts ex-officio as the Chairman of the Rajya Sabha under Article 64. Presides over Upper House sittings, regulates debate, and maintains house decorum, assisted by the elected Deputy Chairman.',
    mandate: [
      'Article 64: The Vice-President shall be ex-officio Chairman of the Council of States.',
      'Article 89: Deputy Chairman of the Council of States elected from amongst members.'
    ],
    powers: [
      'Preside over all sittings and debates in the Rajya Sabha.',
      'Adjudicate disqualifications of Rajya Sabha members under the Tenth Schedule.',
      'Cast casting vote in the event of an equality of votes (Art 100(1)).'
    ],
    limitations: [
      'Cannot vote in normal divisions; casts only a casting vote in tie.',
      'Cannot preside over Joint Sittings of Parliament (presided by Lok Sabha Speaker).'
    ],
    governanceDetails: {
      positionName: 'Ex-Officio Chairman, Council of States',
      cadreOrService: 'Constitutional Upper House Presiding Officer',
      constitutionalArticle: 'Articles 64, 89, 90-92 of Constitution of India',
      electoralOrSelectionMethod: 'Held ex-officio by the elected Vice-President of India',
      tenure: '5 Years (concurrent with Vice-Presidential tenure)',
      geographicalJurisdiction: 'Rajya Sabha Chamber, Parliament House',
      reportingTo: 'Constitution of India & Council of States'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PARL-COMMITTEE',
    type: 'office',
    title: 'Parliamentary Standing & Financial Committees (PAC, Estimates, DRSCs)',
    abbreviation: 'PARL-COMM',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'The oversight backbone of Parliament. Includes 24 Department-related Parliamentary Standing Committees (DRSCs) reviewing ministry Demands for Grants and Bills, the Public Accounts Committee (PAC examining CAG audit reports), and the Estimates Committee.',
    mandate: [
      'Rules of Procedure and Conduct of Business in Lok Sabha & Rajya Sabha.',
      'Constitutional oversight of Union executive spending and legislative scrutiny under Art 105.'
    ],
    powers: [
      'Summon Secretaries to Government of India, senior bureaucrats, and demand official records.',
      'Scrutinize ministry expenditure, CAG audit findings, and report financial irregularities to Parliament.',
      'Conduct clause-by-clause stakeholder review on proposed legislative Bills referred by the House.'
    ],
    limitations: [
      'Recommendations are advisory and recommendatory; cannot execute or issue executive orders.',
      'Ministers are excluded from membership of Financial Committees (PAC, Estimates).'
    ],
    governanceDetails: {
      positionName: 'Chairperson & Members of Parliamentary Committees',
      cadreOrService: 'Parliamentary Scrutiny & Inquest Committees',
      constitutionalArticle: 'Article 105 & Rules of Procedure of Parliament',
      electoralOrSelectionMethod: 'Elected via proportional representation or nominated by Speaker / Chairman',
      tenure: '1 Year (annual reconstitution)',
      geographicalJurisdiction: 'Pan-India Ministry Audits & Legislative Oversight',
      reportingTo: 'Lok Sabha & Rajya Sabha'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-LEADER-OPPOSITION-UNION',
    type: 'office',
    title: 'Leader of Opposition (Lok Sabha & Rajya Sabha)',
    abbreviation: 'LOP-UNION',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    summary: 'Leader of the largest non-government party in the House holding at least 10% of seats (54 in Lok Sabha). Accorded statutory Cabinet Minister status under the Salary and Allowances of Leaders of Opposition in Parliament Act 1977. Key member of statutory selection panels (CBI Director, CVC, NHRC, Lokpal).',
    mandate: [
      'Salary and Allowances of Leaders of Opposition in Parliament Act 1977.',
      'Statutory member of high-level selection committees for Lokpal, CVC, CBI, and CEC.'
    ],
    powers: [
      'Participates in selection panels with PM and CJI to appoint Directors of CBI, CVC, and CIC.',
      'Leads debate and accountability scrutiny on President\'s Address and Union Budget.',
      'Holds Cabinet Minister rank, salary, and secretariat facilities.'
    ],
    limitations: [
      'Requires party to hold at least 10% seats of the House to claim formal statutory recognition.'
    ],
    governanceDetails: {
      positionName: 'Leader of the Opposition (Sansad)',
      cadreOrService: 'Statutory Parliamentary Office (Cabinet Minister Status)',
      constitutionalArticle: 'Statutory: Act No. 33 of 1977 & Rules of the House',
      electoralOrSelectionMethod: 'Recognized by the Speaker/Chairman from largest opposition party (min 10% seats)',
      tenure: 'Concurrent with party leadership and House tenure',
      geographicalJurisdiction: 'Parliament of India',
      reportingTo: 'Electorate & Parliament of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 03: UNION POLITICAL EXECUTIVE
  // ==========================================
  {
    id: 'DEM-PRESIDENT',
    type: 'office',
    title: 'President of India (Rashtrapati)',
    abbreviation: 'PRESIDENT',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    summary: 'The Constitutional Head of State, First Citizen of India, and Supreme Commander of the Defence Forces. All executive actions of the Government of India are formally taken in the President\'s name (Art 77). Exercises constitutional functions on the aid and advice of the Union Council of Ministers headed by the Prime Minister (Art 74).',
    mandate: [
      'Article 52: There shall be a President of India.',
      'Article 53: Executive power of the Union is vested in the President, exercised directly or through subordinate officers.',
      'Article 74: Council of Ministers with PM at the head shall aid and advise the President.'
    ],
    powers: [
      'Appoints the Prime Minister, Union Ministers, Chief Justice of India, Supreme Court & High Court Judges, Governors, and CEC.',
      'Grants pardons, reprieves, respites or remissions of punishment under Article 72.',
      'Promulgates Ordinances during parliamentary recess under Article 123 (subject to legislative approval within 6 weeks).',
      'Proclaims National Emergency (Art 352), President\'s Rule (Art 356), and Financial Emergency (Art 360).'
    ],
    limitations: [
      'Bound by the aid and advice of the Union Council of Ministers (42nd & 44th Amendments; can return advice once for reconsideration).',
      'Subject to impeachment under Article 61 for violation of the Constitution.'
    ],
    governanceDetails: {
      positionName: 'President of India / Rashtrapati (Head of State)',
      cadreOrService: 'Supreme Constitutional Office of the Republic',
      constitutionalArticle: 'Articles 52-62, 72, 74, 77, 123, 352-360 of Constitution of India',
      electoralOrSelectionMethod: 'Elected by Electoral College (Elected MPs of Lok Sabha & Rajya Sabha + Elected MLAs of States/UTs via STV)',
      tenure: '5 Years (eligible for re-election)',
      geographicalJurisdiction: 'Entire Republic of India',
      reportingTo: 'The Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-VICE-PRESIDENT',
    type: 'office',
    title: 'Vice-President of India',
    abbreviation: 'VICE-PRESIDENT',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    summary: 'The second-highest constitutional office in India. Acts ex-officio as the Chairman of the Council of States (Rajya Sabha). Discharges the functions of the President in the event of vacancy caused by death, resignation, removal, or illness under Article 65.',
    mandate: [
      'Article 63: There shall be a Vice-President of India.',
      'Article 65: Acts as President or discharges functions during casual vacancies or absence.'
    ],
    powers: [
      'Ex-officio Chairman of the Rajya Sabha under Article 64.',
      'Discharges complete Presidential functions and draws Presidential emoluments during vacancy in Presidency.',
      'Accepts the resignation of the President of India (Art 56(2)).'
    ],
    limitations: [
      'Cannot act as Chairman of Rajya Sabha while discharging functions of the President (Art 64 proviso).',
      'Does not possess direct executive powers in ordinary times outside Rajya Sabha chairmanship.'
    ],
    governanceDetails: {
      positionName: 'Vice-President of India',
      cadreOrService: 'Constitutional Executive Office',
      constitutionalArticle: 'Articles 63-71 of Constitution of India',
      electoralOrSelectionMethod: 'Elected by Electoral College consisting of members of both Houses of Parliament (Lok Sabha + Rajya Sabha) via STV',
      tenure: '5 Years',
      geographicalJurisdiction: 'Entire Republic of India',
      reportingTo: 'The Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PRIME-MINISTER',
    type: 'executive',
    title: 'Prime Minister of India (PM)',
    abbreviation: 'PRIME-MINISTER',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    summary: 'The real political executive and Head of Government of India. Leader of the Union Council of Ministers and head of the Cabinet. Appointed by the President as the leader of the party/coalition commanding majority confidence in the Lok Sabha (min 272 MPs). Directs national policy, foreign affairs, defence command, and central administration.',
    mandate: [
      'Article 75(1): Prime Minister appointed by the President; other Ministers appointed on PM\'s advice.',
      'Article 74(1): Council of Ministers with Prime Minister at head to aid and advise President.',
      'Article 78: Duties of Prime Minister to communicate all executive decisions and legislative proposals to President.'
    ],
    powers: [
      'Selects, allocates, and shuffles portfolios among Union Cabinet Ministers and Ministers of State.',
      'Chairs the Union Cabinet, Cabinet Committee on Security (CCS), NITI Aayog, and Appointments Committee of the Cabinet (ACC).',
      'Recommends dissolution of the Lok Sabha and advises President on all key constitutional appointments.',
      'Chief architect of foreign policy, national security, nuclear command, and economic planning.'
    ],
    limitations: [
      'Must command the continuing majority confidence of the Lok Sabha; resignation mandatory if confidence is lost.',
      'Must be or become an MP in Lok Sabha or Rajya Sabha within six consecutive months (Art 75(5)).',
      'Total Council of Ministers size cannot exceed 15% of Lok Sabha membership (Art 75(1A) — max 82 ministers).'
    ],
    governanceDetails: {
      positionName: 'Prime Minister of India (Head of Government)',
      cadreOrService: 'Elected Member of Parliament (Lok Sabha or Rajya Sabha) & Chief Political Executive',
      constitutionalArticle: 'Articles 74, 75, 78 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President; must command majority confidence in Lok Sabha (272+ MPs)',
      tenure: '5 Years (subject to retaining majority confidence of Lok Sabha)',
      geographicalJurisdiction: 'Entire Republic of India',
      reportingTo: 'Lok Sabha (Parliament of India) & Sovereign People of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CABINET-MINISTER',
    type: 'executive',
    title: 'Union Cabinet Minister (Senior Ministerial Rank)',
    abbreviation: 'CABINET-MIN',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    summary: 'Senior-most rank of government ministers holding core portfolio charges (Home Affairs, Finance, Defence, External Affairs, Law, Education). Attends weekly Cabinet meetings, participates in national policy determination, and answers questions on the floor of Parliament.',
    mandate: [
      'Article 75(1): Appointed by the President on the advice of the Prime Minister.',
      'Article 75(3): Council of Ministers collectively responsible to the House of the People.'
    ],
    powers: [
      'Hold independent political charge of major Union Ministries and shape national policy.',
      'Introduce Government Bills in Parliament and pilot budget demands through the House.',
      'Sanction major public expenditure, policy regulations, and statutory rules for the ministry.'
    ],
    limitations: [
      'Bound by Cabinet collective responsibility: must defend all Cabinet decisions or resign.',
      'Must be an MP of either House within 6 months of appointment (Art 75(5)).'
    ],
    governanceDetails: {
      positionName: 'Union Cabinet Minister (Rank 1 Portfolio Charge)',
      cadreOrService: 'Elected Member of Parliament (Union Political Executive)',
      constitutionalArticle: 'Articles 74, 75 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on advice of Prime Minister',
      tenure: 'Pleasure of President / Tenure of Union Government',
      geographicalJurisdiction: 'Union Ministry Portfolio Nationwide',
      reportingTo: 'Prime Minister & Union Cabinet'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MINISTER-OF-STATE',
    type: 'executive',
    title: 'Minister of State / MoS (Junior Ministerial Rank)',
    abbreviation: 'MOS',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    summary: 'Second and third tier of Union Ministers. Either holds Independent Charge of smaller ministries (e.g. Science & Technology, Statistics) or assists a senior Cabinet Minister in large departments (e.g. MoS Home Affairs, MoS Finance). Does not attend Cabinet meetings unless specifically invited.',
    mandate: [
      'Article 75: Part of the Union Council of Ministers.',
      'Allocation of Business Rules 1961: Specific divisions assigned by Cabinet Minister or PM.'
    ],
    powers: [
      'Dispose of ministerial files, departmental decisions, and public representations as delegated.',
      'Represent the Ministry in Parliament during Question Hour and debates.'
    ],
    limitations: [
      'Subordinate to the Cabinet Minister in charge of the overarching ministry.',
      'Cannot attend Cabinet meetings unless holding Independent Charge and specially summoned.'
    ],
    governanceDetails: {
      positionName: 'Minister of State (MoS) / MoS (Independent Charge)',
      cadreOrService: 'Elected Member of Parliament (Junior Political Executive)',
      constitutionalArticle: 'Articles 74, 75 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on advice of Prime Minister',
      tenure: 'Pleasure of President / Tenure of Union Government',
      geographicalJurisdiction: 'Assigned Departmental Portfolios Nationwide',
      reportingTo: 'Cabinet Minister in charge & Prime Minister'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 04: KEY UNION MINISTRIES & CENTRAL APPARATUS
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
    summary: 'The senior-most civil servant in India and head of the permanent bureaucracy. Serves as Secretary to the Union Cabinet, coordinates inter-ministerial policies, heads the Civil Services Board, and reports directly to the Prime Minister.',
    mandate: [
      'Government of India (Transaction of Business) Rules 1961.',
      'Civil Services Board head and Cadre authority for All India Services.'
    ],
    powers: [
      'Prepares agenda and minutes for Union Cabinet meetings under direction of the PM.',
      'Acts as chief coordinator during national crises, disaster management, and security emergencies.',
      'Heads the Civil Services Board recommending postings of Secretaries and Additional Secretaries to GoI.'
    ],
    limitations: [
      'Civil servant: non-political permanent official; executes political executive decisions.'
    ],
    governanceDetails: {
      positionName: 'Cabinet Secretary of India (Senior-most Civil Servant)',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex Pay Scale Level 18',
      constitutionalArticle: 'Government of India (Allocation of Business) Rules 1961',
      electoralOrSelectionMethod: 'Appointed by Appointments Committee of the Cabinet (ACC) headed by PM',
      tenure: 'Fixed 2-year tenure (extendable under service rules)',
      geographicalJurisdiction: 'Entire Central Administrative Apparatus (Rashtrapati Bhavan / North & South Block)',
      reportingTo: 'Prime Minister of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MHA',
    type: 'department',
    title: 'Ministry of Home Affairs (MHA) & Union Home Secretary',
    abbreviation: 'MHA',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'The premier Union ministry responsible for internal security, border management, Centre-State relations, Union Territories, national intelligence, and federal armed police forces. Politically headed by the Union Home Minister (Rank 2 in Cabinet) and administratively by the Union Home Secretary (Senior IAS). Cadre controlling authority for the Indian Police Service (IPS).',
    mandate: [
      'Seventh Schedule List I Entries 1, 2, 2A & 8: Defence, Armed Forces of Union, deployment in aid of civil power, Central Bureau of Intelligence.',
      'Allocation of Business Rules 1961: Ministry of Home Affairs.'
    ],
    powers: [
      'Commands and deploys all Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG).',
      'Administers the Indian Police Service (IPS) cadre, all-India allocations, and central deputations.',
      'Oversees national intelligence and counter-terrorism through Intelligence Bureau (IB) and NIA.',
      'Coordinates with State Home Departments and monitors law and order across 28 States and 8 UTs.'
    ],
    limitations: [
      'Public Order and Police are primarily State subjects under Seventh Schedule List II Entries 1 & 2.',
      'Central forces deployed in States only in aid of civil authority or with State consent / emergency orders.'
    ],
    governanceDetails: {
      positionName: 'Union Home Minister (Political) & Union Home Secretary (Administrative)',
      cadreOrService: 'Elected MP (Home Minister) / Senior IAS Level 17 (Home Secretary)',
      constitutionalArticle: 'Allocation of Business Rules 1961 & Police Act 1861',
      electoralOrSelectionMethod: 'Minister appointed by President on PM advice; Home Secretary selected by ACC',
      tenure: 'Tenure of Government (Minister) / 2-year fixed tenure (Home Secretary)',
      geographicalJurisdiction: 'Entire Internal Security & Territorial Borders of India',
      reportingTo: 'Prime Minister of India & Union Cabinet'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CAPF',
    type: 'oversight',
    title: 'Central Armed Police Forces & CPOs (CRPF, BSF, CISF, ITBP, SSB, NSG)',
    abbreviation: 'CAPF',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Federal armed law enforcement and security forces totaling over 10 Lakh personnel under the administrative control of MHA. Led by Director Generals (Apex IPS officers). Includes CRPF (internal security/riot control), BSF (Pakistan/Bangladesh borders), CISF (critical infrastructure/airports), ITBP (China border), SSB (Nepal/Bhutan borders), and NSG (counter-terror strike).',
    mandate: [
      'Article 355: Duty of the Union to protect States against external aggression and internal disturbance.',
      'CRPF Act 1949, BSF Act 1968, CISF Act 1968, ITBP Act 1992, SSB Act 2007, NSG Act 1986.'
    ],
    powers: [
      'Guard 15,000+ km of international borders against infiltration, smuggling, and hostile incursions.',
      'Deploy across states during general elections, communal riots, insurgency, and disaster response.',
      'Provide perimeter counter-terrorism security for nuclear plants, airports, metro networks, and VVIPs.'
    ],
    limitations: [
      'Do not hold territorial police station jurisdictions; arrest powers exercised under CrPC/BNSS or special border limits.'
    ],
    governanceDetails: {
      positionName: 'Director Generals of Police (DG CRPF, DG BSF, DG CISF, DG ITBP, DG SSB)',
      cadreOrService: 'Indian Police Service (IPS) — Apex Pay Scale Level 17 / Central Police Officers',
      constitutionalArticle: 'Acts of Parliament (CRPF Act, BSF Act, CISF Act) under MHA',
      electoralOrSelectionMethod: 'Appointed by Appointments Committee of the Cabinet (ACC) on MHA recommendation',
      tenure: 'Up to superannuation (age 60)',
      geographicalJurisdiction: 'Pan-India, International Borders & Critical National Assets',
      reportingTo: 'Union Home Secretary & Union Home Minister'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CENTRAL-AGENCIES',
    type: 'oversight',
    title: 'Central Intelligence & Investigation (IB, CBI, NIA, ED)',
    abbreviation: 'CBI-NIA-IB',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'Apex federal investigation and intelligence agencies: Intelligence Bureau (IB - domestic intelligence under MHA), Central Bureau of Investigation (CBI - anti-corruption/interstate crime under DoPT), National Investigation Agency (NIA - terror offenses under MHA), and Directorate of Enforcement (ED - money laundering under Finance).',
    mandate: [
      'National Investigation Agency Act 2008, Delhi Special Police Establishment Act 1946 (CBI), Prevention of Money Laundering Act 2002 (ED).'
    ],
    powers: [
      'Investigate scheduled terror offenses across any State without requiring State police permission (NIA).',
      'Investigate corruption against Union public servants and interstate crimes on High Court / Supreme Court orders (CBI).',
      'Gather internal security intelligence and counter-espionage nationwide (IB).'
    ],
    limitations: [
      'CBI requires State General Consent for state jurisdiction offenses unless directed by Constitutional Courts.'
    ],
    governanceDetails: {
      positionName: 'Directors of Intelligence Bureau, CBI, NIA, and Enforcement Directorate',
      cadreOrService: 'Indian Police Service (IPS) / Indian Revenue Service (IRS) — Apex Officers',
      constitutionalArticle: 'DSPE Act 1946, NIA Act 2008, PMLA 2002',
      electoralOrSelectionMethod: 'Statutory Selection Committee (CVC + Home Sec + DoPT Sec; or PM + CJI + LoP for CBI Director)',
      tenure: 'Minimum 2-year fixed tenure (extendable up to 5 years under CVC Amendment Act 2021)',
      geographicalJurisdiction: 'Pan-India and Overseas jurisdiction (NIA for attacks on Indian interests abroad)',
      reportingTo: 'MHA / DoPT / Ministry of Finance respectively'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MOF',
    type: 'department',
    title: 'Ministry of Finance & Union Finance Secretary',
    abbreviation: 'FINANCE',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'executive-administration',
    summary: 'The central ministry governing national macroeconomic management, Union Budget preparation, direct and indirect taxation, public expenditure, financial institutions, and Centre-State revenue sharing. Led by Union Finance Minister and five department secretaries (Finance Secretary as senior-most).',
    mandate: [
      'Articles 112-117: Annual Financial Statement and Budgetary financial procedure.',
      'Articles 265-293: Distribution of revenues between Union and States, Finance Commission recommendations.'
    ],
    powers: [
      'Drafts and presents the annual Union Budget to Parliament.',
      'Sanctions all public financial allocations across all Union ministries through Department of Expenditure.',
      'Supervises banking architecture, public sector enterprises, capital markets, and currency issuance.'
    ],
    limitations: [
      'Cannot levy taxes without statutory authority enacted by Parliament (Art 265).',
      'Bound by Fiscal Responsibility and Budget Management (FRBM) Act targets.'
    ],
    governanceDetails: {
      positionName: 'Union Finance Minister & Finance Secretary to GoI',
      cadreOrService: 'Elected MP (Finance Minister) / Senior IAS Level 17 (Finance Secretary)',
      constitutionalArticle: 'Articles 112-117, 265-293 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on advice of PM',
      tenure: 'Tenure of Government (Minister) / Superannuation (Secretary)',
      geographicalJurisdiction: 'Pan-India National Economy & Financial Architecture',
      reportingTo: 'Prime Minister of India & Union Cabinet'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CBDT-CBIC',
    type: 'department',
    title: 'Central Boards of Direct Taxes & Indirect Taxes (CBDT & CBIC)',
    abbreviation: 'CBDT-CBIC',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'executive-administration',
    summary: 'Statutory revenue boards under the Department of Revenue (MoF). Central Board of Direct Taxes (CBDT) administers Income Tax Act 1961 (IRS Income Tax cadre); Central Board of Indirect Taxes and Customs (CBIC) administers GST, Customs, and Central Excise (IRS Customs & Indirect Tax cadre).',
    mandate: [
      'Central Boards of Revenue Act 1963, Income Tax Act 1961, Central Goods and Services Tax Act 2017, Customs Act 1962.'
    ],
    powers: [
      'Administer tax assessments, corporate tax, personal income tax, and international tax treaties (CBDT).',
      'Collect Customs duty, oversee international ports/airports, and enforce Goods & Services Tax (CBIC).',
      'Conduct search, seizure, and anti-evasion raids through Directorate of Revenue Intelligence (DRI) and DGGI.'
    ],
    limitations: [
      'Appeals against board decisions lie to ITAT, CESTAT, High Courts, and Supreme Court.'
    ],
    governanceDetails: {
      positionName: 'Chairmen & Members of CBDT and CBIC',
      cadreOrService: 'Indian Revenue Service (IRS - IT & C&IT) — Apex Level 17',
      constitutionalArticle: 'Central Boards of Revenue Act 1963',
      electoralOrSelectionMethod: 'Selected by Appointments Committee of the Cabinet (ACC)',
      tenure: 'Up to superannuation',
      geographicalJurisdiction: 'Pan-India Revenue Collection & Tax Enforcement',
      reportingTo: 'Revenue Secretary & Union Finance Minister'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MOLJ',
    type: 'department',
    title: 'Ministry of Law & Justice & Attorney General for India',
    abbreviation: 'LAW-MINISTRY',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'legislation',
    summary: 'The Union ministry providing legal advice to GoI, drafting central legislation and ordinances, managing legislative drafting (Legislative Department), and administering judicial appointments and the court system (Department of Justice). Houses the Attorney General for India (Art 76), the highest law officer of the Republic.',
    mandate: [
      'Article 76: Attorney General for India to advise GoI on legal matters.',
      'Allocation of Business Rules 1961: Legislative drafting and administration of justice.'
    ],
    powers: [
      'Drafts all Central Government Bills, Ordinances, and statutory notifications.',
      'Processes judicial appointments to Supreme Court and High Courts pursuant to Collegium recommendations.',
      'Represents Government of India before the Supreme Court of India through the Attorney General.'
    ],
    limitations: [
      'Judicial appointments are subject to the primacy of the Supreme Court Collegium (NJAC judgment 2015).'
    ],
    governanceDetails: {
      positionName: 'Union Minister of Law & Justice, Law Secretary, and Attorney General for India',
      cadreOrService: 'Elected MP (Minister) / Indian Legal Service (Law Sec) / Senior Advocate (AG)',
      constitutionalArticle: 'Articles 76, 124, 217 of Constitution of India',
      electoralOrSelectionMethod: 'Minister on PM advice; AG appointed by President under Art 76',
      tenure: 'Pleasure of President',
      geographicalJurisdiction: 'Federal Legislation & Pan-India Judicial System',
      reportingTo: 'Prime Minister & President of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DOPT',
    type: 'department',
    title: 'Department of Personnel & Training (DoPT)',
    abbreviation: 'DoPT',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'union',
    category: 'executive-administration',
    summary: 'The central personnel management agency for the Government of India under Ministry of Personnel, Public Grievances & Pensions (directly under PM). Cadre controlling authority for the Indian Administrative Service (IAS), Central Secretariat Service (CSS), and anti-corruption machinery (CBI, CVC).',
    mandate: [
      'All India Services Act 1951, Central Civil Services (Conduct) Rules 1964.',
      'Allocation of Business Rules: Recruitment, training, career progression, service rules.'
    ],
    powers: [
      'Determines service rules, conduct rules, promotion quotas, and central deputation tenure for IAS officers.',
      'Secretariat to the Appointments Committee of the Cabinet (ACC) for all Joint Secretary+ postings.',
      'Administers disciplinary rules and vigilance prosecution sanctions against civil servants.'
    ],
    limitations: [
      'Recruitment conducted independently by UPSC to preserve merit-based civil services (Art 320).'
    ],
    governanceDetails: {
      positionName: 'Minister of State (Personnel) & Secretary (Personnel) - DoPT',
      cadreOrService: 'Elected MP (MoS) / Senior IAS Level 17 (Secretary Personnel)',
      constitutionalArticle: 'Article 309-312 of Constitution of India & All India Services Act 1951',
      electoralOrSelectionMethod: 'Secretary appointed by ACC; Portfolio overseen directly by Prime Minister',
      tenure: 'Tenure of Government (Minister) / Fixed 2 years (Secretary)',
      geographicalJurisdiction: 'All India Services (IAS/IPS/IFoS) & Central Civil Services Nationwide',
      reportingTo: 'Prime Minister of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 05: STATE LEGISLATURE
  // ==========================================
  {
    id: 'DEM-MLA',
    type: 'legislature',
    title: 'Member of Legislative Assembly — MLA (4,123 across India)',
    abbreviation: 'MLA',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    summary: 'Directly elected representative of the State Legislative Assembly (Vidhan Sabha) representing an Assembly constituency (population ~1.5 to 3 Lakhs). Enacts state laws, votes on the State Budget, exercises oversight on State Government, and forms the core of the State Council of Ministers.',
    mandate: [
      'Article 170: Composition of the Legislative Assemblies (60 to 500 members chosen by direct election).',
      'Article 164(2): State Council of Ministers collectively responsible to Legislative Assembly.'
    ],
    powers: [
      'Vote and pass State statutes on State List (List II) and Concurrent List (List III).',
      'Debate and pass the State Budget and Demands for Grants under Article 203.',
      'Vote in the Electoral College for the election of the President of India (Art 54) and Rajya Sabha MPs (Art 80).'
    ],
    limitations: [
      'Subject to Tenth Schedule (Anti-Defection Law) and State Assembly floor whips.',
      'Cannot legislate on exclusive Union List matters.'
    ],
    governanceDetails: {
      positionName: 'Member of Legislative Assembly (MLA)',
      cadreOrService: 'Elected State Representative (State MLA)',
      constitutionalArticle: 'Articles 170, 173, 190-195 of Constitution of India',
      electoralOrSelectionMethod: 'First-Past-The-Post (FPTP) Direct Election by Assembly Constituency Electors (Age 18+)',
      tenure: '5 Years (unless Assembly dissolved earlier under Art 174)',
      geographicalJurisdiction: 'State Assembly Constituency',
      reportingTo: 'Constituency Voters & Speaker of Vidhan Sabha'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SPEAKER-VS',
    type: 'office',
    title: 'Speaker of the Legislative Assembly (Vidhan Sabha)',
    abbreviation: 'SPEAKER-VS',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    summary: 'Presiding constitutional officer of the State Legislative Assembly. Controls proceedings, maintains floor discipline, certifies State Money Bills, and rules on Anti-Defection disqualifications.',
    mandate: [
      'Article 178: Election of Speaker and Deputy Speaker by Legislative Assembly.',
      'Article 199(4): Speaker certifies State Money Bills with conclusive authority.'
    ],
    powers: [
      'Certify State Money Bills under Article 199 with finality.',
      'Adjudicate Tenth Schedule anti-defection petitions filed against MLAs.',
      'Cast casting vote in case of tied divisions (Art 189).'
    ],
    limitations: [
      'Decisions under Tenth Schedule subject to judicial review by High Court / Supreme Court.'
    ],
    governanceDetails: {
      positionName: 'Speaker of Vidhan Sabha (State Assembly)',
      cadreOrService: 'Constitutional State Legislative Presiding Officer',
      constitutionalArticle: 'Articles 178-187 of Constitution of India',
      electoralOrSelectionMethod: 'Elected by MLAs from among themselves by simple majority',
      tenure: '5 Years (holds office until new Assembly meets)',
      geographicalJurisdiction: 'Vidhan Sabha Chamber & State Legislature Secretariat',
      reportingTo: 'State Legislative Assembly'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MLC',
    type: 'legislature',
    title: 'Member of Legislative Council — MLC (Bicameral States)',
    abbreviation: 'MLC',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    summary: 'Upper House representative in the 6 bicameral States (Maharashtra, UP, Bihar, Karnataka, Andhra Pradesh, Telangana). Elected via a composite electoral structure: 1/3rd by MLAs, 1/3rd by Local Bodies, 1/12th by Teachers, 1/12th by Registered Graduates, and 1/6th nominated by Governor.',
    mandate: [
      'Article 171: Composition of the Legislative Councils.',
      'Permanent body not subject to dissolution; one-third retire every 2 years.'
    ],
    powers: [
      'Scrutinize and debate state legislation; propose amendments to ordinary Bills.',
      'Question State Ministers and sit on Joint Legislature Committees.'
    ],
    limitations: [
      'Cannot reject Money Bills (can delay maximum 14 days; Art 198).',
      'Cannot vote on State Demands for Grants or remove State Government by No-Confidence.',
      'Does not vote in Presidential elections (Art 54).'
    ],
    governanceDetails: {
      positionName: 'Member of Legislative Council (MLC)',
      cadreOrService: 'Elected / Nominated Upper House State Representative',
      constitutionalArticle: 'Articles 171, 173 of Constitution of India',
      electoralOrSelectionMethod: 'Proportional representation via STV across 5 electoral streams / Governor nomination',
      tenure: '6 Years (One-third retire every two years)',
      geographicalJurisdiction: 'State Graduates / Teachers / Local Authorities / Statewide Constituency',
      reportingTo: 'Electoral Stream & Chairman of Legislative Council'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CHAIRMAN-VP',
    type: 'office',
    title: 'Chairman & Deputy Chairman of Legislative Council (Vidhan Parishad)',
    abbreviation: 'CHAIRMAN-VP',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    summary: 'Presiding constitutional officer of the State Upper House in bicameral States. Elected by MLCs from among themselves to preside over proceedings, maintain order, and decide questions of privilege.',
    mandate: [
      'Article 182: Election of Chairman and Deputy Chairman by Legislative Council.'
    ],
    powers: [
      'Preside over Legislative Council sessions and enforce Council rules of procedure.',
      'Adjudicate disqualifications of MLCs under the Tenth Schedule.'
    ],
    limitations: [
      'Casts casting vote only in case of equal division (Art 189).'
    ],
    governanceDetails: {
      positionName: 'Chairman of Vidhan Parishad',
      cadreOrService: 'Constitutional Upper House Presiding Officer',
      constitutionalArticle: 'Articles 182-185 of Constitution of India',
      electoralOrSelectionMethod: 'Elected by MLCs from among themselves by simple majority',
      tenure: 'Holds office during membership of Council',
      geographicalJurisdiction: 'Vidhan Parishad Chamber',
      reportingTo: 'State Legislative Council'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-LEADER-OPPOSITION-STATE',
    type: 'office',
    title: 'Leader of the Opposition (State Legislative Assembly)',
    abbreviation: 'LOP-STATE',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    summary: 'Leader of the largest non-government party in the State Assembly holding at least 10% of seats. Accorded statutory State Cabinet Minister rank. Serves on statutory selection committees for State Lokayukta, State Information Commission, and State Human Rights Commission.',
    mandate: [
      'State Legislature Salaries and Allowances Acts (Statutory Cabinet Minister Status).'
    ],
    powers: [
      'Member of statutory selection panels for State Chief Information Commissioner and SHRC.',
      'Leads scrutiny on Governor\'s address, state budgets, and public interest issues.'
    ],
    limitations: [
      'Must maintain party strength of at least 10% of Assembly membership.'
    ],
    governanceDetails: {
      positionName: 'Leader of Opposition (State Assembly)',
      cadreOrService: 'Statutory Parliamentary Office (State Cabinet Minister Status)',
      constitutionalArticle: 'State Legislative Assembly Rules & Statutory Acts',
      electoralOrSelectionMethod: 'Recognized by Assembly Speaker from largest opposition party (min 10% seats)',
      tenure: 'Tenure of Legislative Assembly',
      geographicalJurisdiction: 'State Legislature',
      reportingTo: 'State Assembly & Citizens of the State'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 06: STATE POLITICAL EXECUTIVE
  // ==========================================
  {
    id: 'DEM-GOVERNOR',
    type: 'office',
    title: 'Governor of the State',
    abbreviation: 'GOVERNOR',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'executive-administration',
    summary: 'The Constitutional Head of State and representative of the Union in the State. All executive actions of the State Government are taken in the Governor\'s name (Art 166). Acts on the aid and advice of the State Council of Ministers headed by the Chief Minister (Art 163), except where the Constitution vests discretionary powers.',
    mandate: [
      'Article 153: There shall be a Governor for each State.',
      'Article 155: Appointed by the President by warrant under hand and seal.',
      'Article 163: Council of Ministers with Chief Minister at head to aid and advise Governor.'
    ],
    powers: [
      'Appoints the Chief Minister and State Ministers; appoints Advocate General and State Election Commissioner.',
      'Assents to State Bills or reserves Bills for the consideration of the President (Art 200).',
      'Promulgates State Ordinances when Assembly is prorogued under Article 213.',
      'Submits reports to President recommending President\'s Rule under Article 356.'
    ],
    limitations: [
      'Constitutional figurehead bound by aid and advice of State Council of Ministers in normal times (Shamsher Singh 1974).',
      'Holds office during the pleasure of the President (Art 156).'
    ],
    governanceDetails: {
      positionName: 'Governor of the State (Head of State)',
      cadreOrService: 'Constitutional Executive Head of State',
      constitutionalArticle: 'Articles 153-167, 200, 213, 356 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President of India on advice of Union Cabinet',
      tenure: '5 Years (subject to pleasure of the President)',
      geographicalJurisdiction: 'Territory of the State (Raj Bhavan)',
      reportingTo: 'President of India & Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CHIEF-MINISTER',
    type: 'executive',
    title: 'Chief Minister of the State (CM)',
    abbreviation: 'CHIEF-MINISTER',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'executive-administration',
    summary: 'The real political executive and Head of Government of the State. Appointed by the Governor as the leader of the party or coalition commanding majority confidence in the Vidhan Sabha. Directs state policy, departments, developmental schemes, police administration, and state finance.',
    mandate: [
      'Article 164(1): Chief Minister appointed by the Governor; other Ministers on CM advice.',
      'Article 163(1): Council of Ministers with Chief Minister at head to aid and advise Governor.',
      'Article 167: Duty of Chief Minister to communicate all executive decisions and legislative proposals to Governor.'
    ],
    powers: [
      'Selects, allocates, and shuffles portfolios among State Cabinet Ministers and Ministers of State.',
      'Chairs the State Cabinet, State Disaster Management Authority, and Cabinet Committees.',
      'Directs the State civil administrative machinery through the Chief Secretary at Mantralaya.',
      'Recommends dissolution of the Legislative Assembly to the Governor.'
    ],
    limitations: [
      'Must command majority confidence of the Legislative Assembly; must resign if lost.',
      'Must be or become an MLA or MLC within 6 months of appointment (Art 164(4)).',
      'Council of Ministers cannot exceed 15% of Legislative Assembly seats (min 12 ministers; Art 164(1A)).'
    ],
    governanceDetails: {
      positionName: 'Chief Minister of the State (Head of State Government)',
      cadreOrService: 'Elected MLA / MLC & Chief State Political Executive',
      constitutionalArticle: 'Articles 163, 164, 167 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by Governor; must command majority confidence in Vidhan Sabha',
      tenure: '5 Years (subject to continuing majority confidence of Legislative Assembly)',
      geographicalJurisdiction: 'Territory of the State',
      reportingTo: 'State Legislative Assembly & Sovereign People of the State'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STATE-CABINET-MINISTER',
    type: 'executive',
    title: 'State Cabinet Minister & Minister of State',
    abbreviation: 'STATE-MINISTER',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'executive-administration',
    summary: 'Political executive heads of state government portfolios (e.g. Home, Finance, Revenue, PWD, Health, Higher Education, School Education). Appointed by Governor on CM advice; participate in weekly Cabinet decisions and steer departmental legislation.',
    mandate: [
      'Article 164: Member of State Council of Ministers.',
      'Rules of Business of State Government.'
    ],
    powers: [
      'Lead state ministerial departments and formulate department policies and schemes.',
      'Approve departmental budget demands and introduce State Bills in the Legislature.',
      'Sanction major tenders, public works, and administrative decisions.'
    ],
    limitations: [
      'Bound by Cabinet collective responsibility (Art 164(2)).',
      'Must be an MLA or MLC within 6 months of appointment.'
    ],
    governanceDetails: {
      positionName: 'State Cabinet Minister / State Minister of State',
      cadreOrService: 'Elected MLA / MLC (State Political Executive)',
      constitutionalArticle: 'Articles 163, 164 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by Governor on recommendation of Chief Minister',
      tenure: 'Pleasure of Governor / Tenure of State Government',
      geographicalJurisdiction: 'Assigned State Ministerial Portfolio Statewide',
      reportingTo: 'Chief Minister & State Cabinet'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 07: STATE SECRETARIAT & DEPARTMENTS
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
    summary: 'The apex civil servant of the State and head of the permanent administrative machinery. Serves as Secretary to the State Cabinet, chief advisor to the Chief Minister on administrative matters, and head of the State Civil Services Board controlling IAS postings.',
    mandate: [
      'State Government Rules of Business & Allocation of Business Rules.',
      'Head of State Secretariat (Mantralaya) and Cadre Controller for State IAS/IPS allocations.'
    ],
    powers: [
      'Coordinates all State government departments and resolves inter-departmental conflicts.',
      'Heads the State Crisis Management Committee during natural disasters and law-and-order crises.',
      'Supervises Divisional Commissioners, District Collectors, and Heads of Departments across the State.'
    ],
    limitations: [
      'Permanent civil servant; executes policies determined by Chief Minister and Cabinet.'
    ],
    governanceDetails: {
      positionName: 'Chief Secretary to Government of State (Apex Civil Servant)',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex Pay Scale Level 17',
      constitutionalArticle: 'State Rules of Business (Art 166(3)) & AIS Act 1951',
      electoralOrSelectionMethod: 'Appointed by State Government from senior-most IAS officers',
      tenure: 'Up to superannuation (extendable by Central permission)',
      geographicalJurisdiction: 'Entire State Administration (Mantralaya / Secretariat)',
      reportingTo: 'Chief Minister of the State'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STATE-HOME-DEPT',
    type: 'department',
    title: 'State Home Department & Additional Chief Secretary (Home)',
    abbreviation: 'HOME-DEPT',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'The administrative department of the State Government in charge of Law and Order, Police administration, Prisons, Home Guards, and Fire Services. Politically headed by the State Home Minister and administratively led by the Additional Chief Secretary (Home) / Principal Secretary (IAS). Directs the State Police through the Director General of Police (DGP).',
    mandate: [
      'Seventh Schedule List II Entry 1 (Public Order) & Entry 2 (Police).',
      'Police Act 1861 / State Police Acts (e.g. Maharashtra Police Act 1951).'
    ],
    powers: [
      'Formulates state internal security and policing policies, budgets, and police modernization.',
      'Approves transfers, promotions, and disciplinary proceedings for IPS officers and State Police Service.',
      'Issues preventative detention guidelines and sanctions prosecution under special statutes.'
    ],
    limitations: [
      'Operational command of police forces is exercised by the uniform DGP / Commissioners, not civilian secretariat clerks.'
    ],
    governanceDetails: {
      positionName: 'State Home Minister (Political) & Additional Chief Secretary (Home) (Administrative)',
      cadreOrService: 'Elected MLA (Minister) / Senior IAS Level 17 (ACS Home)',
      constitutionalArticle: 'Seventh Schedule List II Entry 2 & State Police Act',
      electoralOrSelectionMethod: 'Minister appointed on CM advice; ACS Home appointed by State Cabinet',
      tenure: 'Tenure of Government (Minister) / Routine cadre posting (Secretary)',
      geographicalJurisdiction: 'Entire State Law and Order & Police Cadre',
      reportingTo: 'Chief Minister & Chief Secretary'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STATE-FINANCE-DEPT',
    type: 'department',
    title: 'State Finance Department & ACS (Finance)',
    abbreviation: 'STATE-FIN',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'state',
    category: 'executive-administration',
    summary: 'The state department managing the Consolidated Fund of the State, preparation of the annual State Budget (Art 202), state tax collection (State GST, Stamp Duty, State Excise), and financial sanctioning for all state development works.',
    mandate: [
      'Article 202-207: State Budget procedure and Money Bills.',
      'State Fiscal Responsibility and Budget Management (FRBM) Act.'
    ],
    powers: [
      'Prepares and coordinates the State Budget presented by the State Finance Minister.',
      'Controls the State Treasury system, revenue monitoring, and borrowing limits under Art 293.',
      'Sanctions expenditure proposals and staff cadre creation across all state departments.'
    ],
    limitations: [
      'Cannot borrow from overseas without Union Government consent (Art 293(3)).'
    ],
    governanceDetails: {
      positionName: 'State Finance Minister & Additional Chief Secretary (Finance)',
      cadreOrService: 'Elected MLA (Minister) / Senior IAS Level 17 (ACS Finance)',
      constitutionalArticle: 'Articles 202-207, 293 of Constitution of India',
      electoralOrSelectionMethod: 'Minister on CM advice; ACS Finance appointed by State Cabinet',
      tenure: 'Tenure of Government (Minister) / Routine posting (Secretary)',
      geographicalJurisdiction: 'State Public Finance & Revenue System',
      reportingTo: 'Chief Minister & State Cabinet'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STATE-LAW-DEPT',
    type: 'department',
    title: 'State Law & Judiciary Department & Advocate General',
    abbreviation: 'STATE-LAW',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'state',
    category: 'legislation',
    summary: 'The legal advisory arm of the State Government, responsible for drafting State legislation, government litigation, and district court infrastructure. Houses the Advocate General for the State (Art 165), the highest law officer of the State.',
    mandate: [
      'Article 165: Advocate General for the State appointed by Governor.',
      'State Government Rules of Business: Legislative drafting and court administration.'
    ],
    powers: [
      'Drafts all State Government Bills, Ordinances, and statutory rules.',
      'Advocate General represents State Government in High Court and Supreme Court and has the right to speak in State Legislature (Art 177).'
    ],
    limitations: [
      'Advocate General cannot vote in the Legislative Assembly or Council (Art 177).'
    ],
    governanceDetails: {
      positionName: 'State Law Minister, Principal Secretary (Law), and Advocate General for the State',
      cadreOrService: 'Elected MLA (Minister) / Judicial Officer / Senior Advocate (Advocate General)',
      constitutionalArticle: 'Articles 165, 177 of Constitution of India',
      electoralOrSelectionMethod: 'Advocate General appointed by Governor under Art 165',
      tenure: 'Pleasure of Governor',
      geographicalJurisdiction: 'State Legal Architecture & High Court Representation',
      reportingTo: 'Chief Minister & Governor of the State'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STATE-GAD',
    type: 'department',
    title: 'General Administration Department (GAD)',
    abbreviation: 'GAD',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'state',
    category: 'executive-administration',
    summary: 'The administrative heart of Mantralaya directly under the Chief Minister. Cadre controlling authority for State IAS, IPS, and State Civil Services. Manages postings, transfers, vigilance, cabinet secretarial affairs, and state protocol.',
    mandate: [
      'State Allocation of Business Rules & Civil Services Conduct Rules.'
    ],
    powers: [
      'Processes appointments and transfers of District Collectors, Municipal Commissioners, and CEOs.',
      'Coordinates cabinet meetings and prepares formal Cabinet notes and orders.',
      'Heads state protocol, state awards, and state vigilance oversight.'
    ],
    limitations: [
      'Transfers of All India Services officers must adhere to Civil Services Board norms pursuant to Prakash Singh and TSR Subramanian rulings.'
    ],
    governanceDetails: {
      positionName: 'Additional Chief Secretary (GAD) under Chief Minister',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex Level 17',
      constitutionalArticle: 'State Allocation of Business Rules',
      electoralOrSelectionMethod: 'Directly appointed by Chief Minister',
      tenure: 'Cadre posting',
      geographicalJurisdiction: 'State Civil Services & Administrative Cadre',
      reportingTo: 'Chief Minister & Chief Secretary'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 08: STATE POLICE & LAW ENFORCEMENT HIERARCHY
  // ==========================================
  {
    id: 'DEM-DGP',
    type: 'department',
    title: 'Director General of Police (DGP / HoPF)',
    abbreviation: 'DGP',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'The apex uniform police officer of the State and Head of Police Force (HoPF). Exercises complete administrative, operational, and disciplinary command over the entire state police apparatus under the supervision of the State Home Department.',
    mandate: [
      'Seventh Schedule List II Entry 2 (Police).',
      'State Police Act (e.g. Maharashtra Police Act 1951, Section 6) & Police Act 1861.',
      'Supreme Court Prakash Singh judgment 2006 (fixed 2-year tenure, UPSC empanelment).'
    ],
    powers: [
      'Directs statewide crime prevention, law and order, counter-insurgency, and traffic policing.',
      'Transfers and posts police officers up to Deputy SP rank; recommends IPS postings to State Government.',
      'Commands state specialized wings: State CID, Anti-Terrorism Squad (ATS), State Reserve Police (SRPF), and State Intelligence.'
    ],
    limitations: [
      'Subject to overall superintendence of the State Government through the State Home Department.',
      'Subject to Police Complaints Authorities (PCA) for civilian complaints.'
    ],
    governanceDetails: {
      positionName: 'Director General of Police & Head of Police Force (HoPF)',
      cadreOrService: 'Indian Police Service (IPS) — Apex Pay Scale Level 17 (3-Star General Officer)',
      constitutionalArticle: 'Police Act 1861 Section 4 / State Police Act',
      electoralOrSelectionMethod: 'Selected by State Cabinet from a panel of 3 senior-most officers empanelled by UPSC',
      tenure: 'Minimum 2-year fixed tenure pursuant to Supreme Court directives (Prakash Singh judgment)',
      geographicalJurisdiction: 'Entire Territory of the State',
      reportingTo: 'Additional Chief Secretary (Home) & State Home Minister'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ADGP-IGP',
    type: 'oversight',
    title: 'Additional DGP & Range Inspector General of Police (IGP / DIG)',
    abbreviation: 'IG-RANGE',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'Senior police leadership overseeing regional police ranges comprising 3 to 6 districts or heading specialized statewide branches (Law & Order, CID, Intelligence, Railways, Traffic).',
    mandate: [
      'Police Act 1861 Section 3 & State Police Manuals.'
    ],
    powers: [
      'Supervises Superintendents of Police (SPs) across all districts within the Police Range.',
      'Inspects district police headquarters, lockups, and monitors major heinous crimes and inter-district gangs.',
      'Coordinates range-level armed reserves and deployment during communal or electoral contingencies.'
    ],
    limitations: [
      'Intermediate supervisory tier; operational day-to-day policing rests with District SPs.'
    ],
    governanceDetails: {
      positionName: 'Special DGP / Additional DGP / Inspector General of Police (Range IG)',
      cadreOrService: 'Indian Police Service (IPS) — Super Time Scale Level 14 / Higher Administrative Grade Level 15',
      constitutionalArticle: 'State Police Act / Police Act 1861 Section 3',
      electoralOrSelectionMethod: 'Promoted by State Government through Departmental Promotion Committee',
      tenure: 'Routine cadre posting (~2-3 years)',
      geographicalJurisdiction: 'Police Range (Multi-District Jurisdiction)',
      reportingTo: 'Director General of Police (DGP)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CP',
    type: 'oversight',
    title: 'Commissioner of Police (Metropolitan Police Commissionerate)',
    abbreviation: 'CP-METRO',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'Head of police in major metropolitan cities (e.g. Mumbai, Delhi, Bengaluru, Hyderabad, Pune) operating under the Commissionerate System. Unlike rural districts where the District Magistrate holds executive magistracy powers, the Commissioner of Police directly exercises both police command and Executive Magistracy powers (CrPC/BNSS 144, preventive detention, licensing).',
    mandate: [
      'State Police Acts / Police Commissionerate Notifications under Section 8 of CrPC / BNSS.',
      'Notification conferring Executive Magistrate powers on Commissioner of Police.'
    ],
    powers: [
      'Directly issue prohibitory orders under Section 144 BNSS/CrPC without requiring DM clearance.',
      'Grant licenses for arms, public entertainment, processions, and hotels.',
      'Commands metropolitan police force through Joint Commissioners, Additional Commissioners, and DCPs.'
    ],
    limitations: [
      'Applies only to notified urban commissionerate areas; outside commissionerates, dual control with DM applies.'
    ],
    governanceDetails: {
      positionName: 'Commissioner of Police (CP / Metropolitan)',
      cadreOrService: 'Indian Police Service (IPS) — ADGP / IGP Rank (Level 14 to 16)',
      constitutionalArticle: 'State Police Act & BNSS / CrPC Section 8 & 20(5)',
      electoralOrSelectionMethod: 'Appointed by State Government with approval of Chief Minister',
      tenure: 'Cadre posting (~2-3 years)',
      geographicalJurisdiction: 'Metropolitan City Police Commissionerate',
      reportingTo: 'Director General of Police (DGP) & State Home Department'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SP',
    type: 'oversight',
    title: 'Superintendent of Police (District SP / SSP)',
    abbreviation: 'SP-DISTRICT',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'district',
    category: 'oversight-remedies',
    summary: 'The police chief of a territorial district. Exercises operational command over the entire district police force, investigative machinery, and police stations. Coordinates directly with the District Magistrate (DM) for maintaining public order and communal peace under the dual-control system.',
    mandate: [
      'Police Act 1861 Section 4: Administration of police throughout local jurisdiction vested in Superintendent of Police under the general control of District Magistrate.',
      'Code of Criminal Procedure / Bharatiya Nagarik Suraksha Sanhita (BNSS).'
    ],
    powers: [
      'Directs all investigation, crime detection, patrols, and police stations across the district.',
      'Commands the District Armed Reserve Police and assigns police bandobast for VIPs and festivals.',
      'Recommends preventive detentions and Section 144 BNSS orders to the District Magistrate.'
    ],
    limitations: [
      'Under Police Act Section 4, functions under the general control and direction of the District Magistrate in matters of public peace.',
      'Cannot issue judicial search warrants independently without magistrate sanction except under emergency CrPC powers.'
    ],
    governanceDetails: {
      positionName: 'Superintendent of Police (SP) / Senior SP (SSP)',
      cadreOrService: 'Indian Police Service (IPS) — Junior Administrative Grade / Selection Grade (Level 11 to 13)',
      constitutionalArticle: 'Police Act 1861 Section 4 & State Police Act',
      electoralOrSelectionMethod: 'Appointed by State Government (Home Department / GAD)',
      tenure: 'Cadre posting (~2-3 years)',
      geographicalJurisdiction: 'Entire Revenue District (excluding any notified Commissionerate)',
      reportingTo: 'Range Inspector General (IGP) / DGP & District Magistrate (for Law & Order coordination)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DYSP-SDPO',
    type: 'oversight',
    title: 'Deputy SP / Sub-Divisional Police Officer (DySP / SDPO)',
    abbreviation: 'DySP-SDPO',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'district',
    category: 'oversight-remedies',
    summary: 'Police officer in charge of a Police Sub-Division comprising 3 to 5 police stations. Conducts supervision over sensitive criminal investigations, monitors law and order, and acts as the immediate field supervisor over Police Station Inspectors.',
    mandate: [
      'State Police Manuals & CrPC/BNSS provisions requiring DSP rank investigation (e.g. SC/ST Prevention of Atrocities Act, anti-corruption offenses).'
    ],
    powers: [
      'Personally investigates serious statutory crimes mandated by law to be handled by DSP rank officers.',
      'Inspects police stations, police diaries, and oversees riot-control deployments in the sub-division.',
      'In cities under Commissionerates, designated as Assistant Commissioner of Police (ACP).'
    ],
    limitations: [
      'Works under the administrative direction of the District Superintendent of Police.'
    ],
    governanceDetails: {
      positionName: 'Sub-Divisional Police Officer (SDPO) / Deputy SP / ACP (Cities)',
      cadreOrService: 'State Police Service (SPS) or Junior IPS Officer (Level 10)',
      constitutionalArticle: 'State Police Act & BNSS / SC-ST PoA Act Section 9',
      electoralOrSelectionMethod: 'Recruited via State PSC (e.g. MPSC) or promoted from Police Inspector; or probationary IPS',
      tenure: 'Field posting (~2-3 years)',
      geographicalJurisdiction: 'Police Sub-Division (Cluster of Talukas / Police Stations)',
      reportingTo: 'Superintendent of Police (District SP) / DCP (in Cities)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POLICE-INSPECTOR',
    type: 'oversight',
    title: 'Police Inspector / Station House Officer (PI / SHO)',
    abbreviation: 'SHO-PI',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'oversight-remedies',
    summary: 'The operational head of a Police Station (Thana). Holds statutory charge under CrPC / BNSS as the "Officer in Charge of a Police Station". Responsible for registering FIRs, maintaining General Diary, supervising investigation, patrolling beats, and ensuring local security.',
    mandate: [
      'BNSS Section 2(o) / CrPC Section 2(s): Definition and duties of Officer in Charge of Police Station.',
      'BNSS Section 173 / CrPC Section 154: Mandatory registration of First Information Report (FIR).'
    ],
    powers: [
      'Register FIRs for cognizable offenses and initiate formal criminal investigations.',
      'Arrest accused persons under statutory conditions without warrant for cognizable crimes.',
      'Search premises, seize stolen property, and submit Charge Sheets / Final Reports to the Judicial Magistrate.'
    ],
    limitations: [
      'Must produce arrested persons before the nearest Judicial Magistrate within 24 hours (Art 22(2) & BNSS 58).',
      'Cannot use third-degree methods; bound by DK Basu guidelines on custodial safety.'
    ],
    governanceDetails: {
      positionName: 'Police Inspector (PI) / Station House Officer (SHO / Senior PI)',
      cadreOrService: 'State Police Subordinate Service — Group B Gazetted / Non-Gazetted',
      constitutionalArticle: 'Code of Criminal Procedure / BNSS Section 173 & Police Act Section 23',
      electoralOrSelectionMethod: 'Promoted from Police Sub-Inspector (PSI) by State Police Board',
      tenure: 'Station posting (~2-3 years)',
      geographicalJurisdiction: 'Territorial Police Station Jurisdiction',
      reportingTo: 'Sub-Divisional Police Officer (DySP / SDPO)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SUB-INSPECTOR',
    type: 'oversight',
    title: 'Sub-Inspector (PSI) & Assistant Sub-Inspector (ASI)',
    abbreviation: 'PSI-ASI',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'oversight-remedies',
    summary: 'The backbone of criminal investigation and field law enforcement. Sub-Inspectors are the lowest rank empowered by law to investigate cognizable offenses, file charge sheets, and command police station shifts. Supported by ASIs for beat management.',
    mandate: [
      'CrPC / BNSS: Investigation of cognizable offenses by officers of rank Sub-Inspector and above.'
    ],
    powers: [
      'Conduct spot panchanamas, record witness statements under Section 180 BNSS / 161 CrPC.',
      'Execute court warrants, investigate burglary, assault, accidents, and prepare case diaries.',
      'Act as Officer in Charge of Police Station in the absence of the Inspector.'
    ],
    limitations: [
      'Must work under station discipline and directions of the SHO / Inspector.'
    ],
    governanceDetails: {
      positionName: 'Police Sub-Inspector (PSI) / Assistant Sub-Inspector (ASI)',
      cadreOrService: 'State Police Subordinate Service — Group C / B Non-Gazetted',
      constitutionalArticle: 'State Police Act & Police Manual Rules',
      electoralOrSelectionMethod: 'Direct recruitment via State Police Recruitment Board (Graduate level) or promotion from Head Constable',
      tenure: 'Station / Beat posting',
      geographicalJurisdiction: 'Police Station Beat / Sector',
      reportingTo: 'Police Inspector / Station House Officer (SHO)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CONSTABULARY',
    type: 'oversight',
    title: 'Head Constable & Police Constable (Constabulary)',
    abbreviation: 'CONSTABLE',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'oversight-remedies',
    summary: 'Comprises over 85% of the Indian police force. The grassroots point of contact between citizens and the police. Performs beat patrolling, traffic regulation, night rounds, guard duties, prisoner escort, riot containment, and intelligence gathering in neighborhoods.',
    mandate: [
      'Police Act 1861 Section 23: Duties of police officers to obey orders, prevent commission of offenses, and detect crimes.'
    ],
    powers: [
      'Patrol assigned beats and maintain surveillance on history-sheeters and anti-social elements.',
      'Assist investigating officers during raids, arrests, and bandobast.',
      'First responders at crime scenes, traffic accidents, and communal flashpoints.'
    ],
    limitations: [
      'Generally not empowered to conduct independent investigation of major cognizable offenses without SI supervision.'
    ],
    governanceDetails: {
      positionName: 'Head Constable (HC) / Police Constable (PC)',
      cadreOrService: 'State Police Constabulary — Group C / D Non-Gazetted',
      constitutionalArticle: 'Police Act 1861 Section 23 & State Police Manual',
      electoralOrSelectionMethod: 'Direct competitive recruitment via State Police Bharti (Physical test + Written test - 12th pass)',
      tenure: 'Lifelong civil service up to age 58/60',
      geographicalJurisdiction: 'Assigned Police Beat / Neighborhood Patrol',
      reportingTo: 'Police Sub-Inspector (PSI) & Police Inspector (SHO)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 09: DIVISIONAL & DISTRICT FIELD ADMINISTRATION
  // ==========================================
  {
    id: 'DEM-DIVISIONAL-COMM',
    type: 'office',
    title: 'Divisional Commissioner (Revenue Division)',
    abbreviation: 'DIV-COMM',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'state',
    category: 'executive-administration',
    summary: 'Senior IAS officer heading an administrative Revenue Division comprising 4 to 7 districts. Acts as the principal supervisor of District Collectors, appellate revenue authority, and regional disaster response coordinator.',
    mandate: [
      'State Land Revenue Code (e.g. Maharashtra Land Revenue Code 1966 Section 6).'
    ],
    powers: [
      'Supervises District Collectors and hears second appeals in land revenue cases.',
      'Coordinates regional developmental works, municipal corporations, and inter-district law and order.',
      'Conducts administrative inquiries into district collectorate irregularities.'
    ],
    limitations: [
      'Regional supervisory tier; direct district statutory authority is vested in the District Collector.'
    ],
    governanceDetails: {
      positionName: 'Divisional Commissioner',
      cadreOrService: 'Indian Administrative Service (IAS) — Super Time Scale Level 14 / HAG Level 15',
      constitutionalArticle: 'State Land Revenue Code Section 6',
      electoralOrSelectionMethod: 'Appointed by State Government (GAD)',
      tenure: 'Cadre posting (~2-3 years)',
      geographicalJurisdiction: 'Revenue Division (Multi-District Jurisdiction)',
      reportingTo: 'Chief Secretary of the State & Revenue Department'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DISTRICT-COLLECTOR',
    type: 'department',
    title: 'District Magistrate / Collector / Deputy Commissioner (784 DMs)',
    abbreviation: 'DM-COLLECTOR',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'executive-administration',
    summary: 'The administrative linchpin of India\'s governance across 784 districts. Wears three constitutional and statutory hats: District Magistrate (DM - head of Executive Magistracy, law and order, CrPC/BNSS 144, jails), District Collector (chief revenue officer, land records, mining, stamp duty), and District Election Officer (DEO - conducting national, state, and local elections under ECI).',
    mandate: [
      'CrPC Section 20 / BNSS Section 14: Executive Magistrates & District Magistrate.',
      'State Land Revenue Code: Chief Officer in charge of land revenue collection and administration.',
      'Representation of the People Act 1951 Section 24: District Election Officer (DEO).',
      'Disaster Management Act 2005: Chairperson of District Disaster Management Authority (DDMA).'
    ],
    powers: [
      'Maintain public peace and issue prohibitory curfew orders under Section 144 BNSS / CrPC.',
      'Head of District Disaster Management Authority (DDMA) with emergency procurement and mobilization powers.',
      'Grant licenses for arms, explosives, petroleum, and cinema halls.',
      'Conduct all Parliamentary and State Assembly elections across the district as District Election Officer (DEO).',
      'Coordinate with District Superintendent of Police (SP) for maintaining district law and order.'
    ],
    limitations: [
      'Separation of Judiciary from Executive (Art 50): Cannot try criminal cases (handled by Judicial Magistrates).',
      'Routine policing operations executed by Superintendent of Police (IPS).'
    ],
    governanceDetails: {
      positionName: 'District Magistrate / Collector / Deputy Commissioner (DM / DC)',
      cadreOrService: 'Indian Administrative Service (IAS) — Junior Administrative Grade / Selection Grade (Level 11 to 13)',
      constitutionalArticle: 'BNSS Section 14, State Land Revenue Code & RPA Act 1951',
      electoralOrSelectionMethod: 'Appointed by State Government (GAD) from IAS cadre',
      tenure: 'Cadre posting (~2-3 years)',
      geographicalJurisdiction: 'Territorial Revenue District (784 Districts in India)',
      reportingTo: 'Divisional Commissioner, Chief Secretary & ECI (during elections)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SDM',
    type: 'office',
    title: 'Sub-Divisional Magistrate (SDM) / Sub-Collector',
    abbreviation: 'SDM',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'district',
    category: 'executive-administration',
    summary: 'Administrative and executive magistrate head of a Sub-Division comprising 2 to 4 talukas/tehsils. Exercises executive magistracy (inquests, preventive proceedings under CrPC 107-110 / BNSS), hears land revenue appeals, and acts as Assistant Returning Officer (ARO) for elections.',
    mandate: [
      'CrPC Section 23 / BNSS Section 16: Sub-Divisional Magistrates.',
      'State Land Revenue Code: Appellate revenue authority over Tehsildars.'
    ],
    powers: [
      'Conduct preventive proceedings to bind down habitual offenders under Section 107/116 CrPC / BNSS.',
      'Conduct executive inquests into custodial deaths, dowry deaths, and police firing incidents (CrPC 176).',
      'Hear first revenue appeals against decisions of Tehsildars on land mutations and tenancy disputes.'
    ],
    limitations: [
      'Works under the administrative direction and supervision of the District Collector / DM.'
    ],
    governanceDetails: {
      positionName: 'Sub-Divisional Magistrate (SDM) / Sub-Collector / Prant Officer',
      cadreOrService: 'Junior IAS Officer (Level 10) or Senior State Civil Service (Deputy Collector)',
      constitutionalArticle: 'BNSS Section 16 & State Land Revenue Code',
      electoralOrSelectionMethod: 'Direct UPSC recruitment (probationary IAS) or State PSC recruitment (Deputy Collector)',
      tenure: 'Field posting (~2-3 years)',
      geographicalJurisdiction: 'Administrative Sub-Division (Cluster of Talukas)',
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
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'local',
    category: 'executive-administration',
    summary: 'The administrative head of a Taluka / Tehsil. Exercises powers of an Executive Magistrate, collects land revenue, issues caste, income, and domicile certificates, manages drought and flood relief, and acts as the immediate field supervisor over village Talathis.',
    mandate: [
      'State Land Revenue Code: Officer in charge of Taluka revenue administration.',
      'CrPC / BNSS: Executive Magistrate for maintenance of local peace.'
    ],
    powers: [
      'Dispute resolution in mutation entries, boundary disputes, and agricultural land tenancy.',
      'Issue official certificates: Caste, Income, Domicile, Non-Creamy Layer, and Solvency certificates.',
      'Act as Taluka Executive Magistrate for local law and order, bandobast, and elections.'
    ],
    limitations: [
      'Appeals against Tehsildar revenue decisions lie before the Sub-Divisional Officer (SDM).'
    ],
    governanceDetails: {
      positionName: 'Tehsildar & Taluka Executive Magistrate',
      cadreOrService: 'State Civil Service (Class 1 / Group A Gazetted Officer)',
      constitutionalArticle: 'State Land Revenue Code & BNSS Section 14',
      electoralOrSelectionMethod: 'Recruited through State PSC (e.g. MPSC) or promoted from Naib Tehsildar',
      tenure: 'Field posting (~2-3 years)',
      geographicalJurisdiction: 'Taluka / Tehsil',
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
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'local',
    category: 'executive-administration',
    summary: 'The grassroots village revenue official managing a cluster of 2 to 5 villages (Saja). Maintains the Record of Rights, 7/12 land extract, crop inspection records, panchanamas for crop loss, and reports village distress to the Tehsildar.',
    mandate: [
      'State Land Revenue Code & Village Records Manual.'
    ],
    powers: [
      'Maintain and update the 7/12 extract (Record of Rights, ownership, crop survey, and bank loan encumbrances).',
      'Record pencil mutations upon sale deeds, inheritance, or partition of agricultural lands.',
      'Conduct crop damage panchanamas during drought, unseasonal rains, or hail for government compensation.'
    ],
    limitations: [
      'Cannot sanction disputed land mutations (handled by Circle Officer / Tehsildar).'
    ],
    governanceDetails: {
      positionName: 'Talathi / Patwari / Village Accountant (Karnam)',
      cadreOrService: 'State Revenue Subordinate Service — Group C',
      constitutionalArticle: 'State Land Revenue Code Section 7',
      electoralOrSelectionMethod: 'Recruited via District Revenue Selection Exam (Talathi Bharti - Graduate level)',
      tenure: 'Village cluster posting',
      geographicalJurisdiction: 'Village Saja (Cluster of 2 to 5 Revenue Villages)',
      reportingTo: 'Revenue Circle Officer & Tehsildar'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 10: URBAN LOCAL SELF-GOVERNMENT (74TH AMENDMENT)
  // ==========================================
  {
    id: 'DEM-MAYOR',
    type: 'office',
    title: 'Mayor & Deputy Mayor (Mahanagar Palika Political Head)',
    abbreviation: 'MAYOR',
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'local',
    category: 'legislation',
    summary: 'The first citizen of the city and presiding officer of the Municipal Corporation General Body. Elected by the ward corporators (or directly in some states). Presides over policy debates, represents the city on ceremonial occasions, and chairs civic general meetings.',
    mandate: [
      'Part IXA of Constitution of India (74th Constitutional Amendment Act 1992).',
      'State Municipal Corporation Acts (e.g. Mumbai Municipal Corporation Act 1888).'
    ],
    powers: [
      'Preside over General Body meetings of the Municipal Corporation and maintain council decorum.',
      'Represent the city at national and international civic forums as First Citizen.',
      'Recommend policy priorities, city master plans, and civic amenities to the administration.'
    ],
    limitations: [
      'Executive powers in major municipal corporations are statutorily vested in the IAS Municipal Commissioner, not the Mayor.'
    ],
    governanceDetails: {
      positionName: 'Mayor of the Municipal Corporation (First Citizen of the City)',
      cadreOrService: 'Elected Urban Representative (Political Head of City)',
      constitutionalArticle: 'Article 243P-243ZG of Constitution of India & Municipal Corporation Act',
      electoralOrSelectionMethod: 'Elected by Ward Corporators from among themselves (or direct election in select states)',
      tenure: '2.5 Years or 5 Years (varies by State Municipal Act rotation rules)',
      geographicalJurisdiction: 'Metropolitan City / Municipal Corporation Area',
      reportingTo: 'General Body of the Corporation & Urban Citizens'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'department',
    title: 'Municipal Commissioner (IAS Executive Head of City)',
    abbreviation: 'MUNICIPAL-COMM',
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'local',
    category: 'executive-administration',
    summary: 'The chief executive authority of a Municipal Corporation under the 74th Amendment. A senior IAS officer appointed by the State Government, the Municipal Commissioner holds statutory executive power to execute civic policies, city infrastructure, budgets, solid waste, and water supply.',
    mandate: [
      'State Municipal Corporation Acts: Entire executive power for carrying out provisions of the Act vested in Commissioner.'
    ],
    powers: [
      'Executes all decisions, public works, road infrastructure, sanitation, and health services in the city.',
      'Prepares the Municipal Budget and submits it to the Standing Committee.',
      'Appoints and disciplines municipal staff and awards civic contracts within statutory thresholds.'
    ],
    limitations: [
      'Major financial contracts exceeding statutory thresholds require sanction from the Standing Committee or General Body.'
    ],
    governanceDetails: {
      positionName: 'Municipal Commissioner & Chief Executive Officer of the City',
      cadreOrService: 'Indian Administrative Service (IAS) — Super Time Scale Level 14 / HAG Level 15',
      constitutionalArticle: '74th Amendment Act & State Municipal Corporation Act',
      electoralOrSelectionMethod: 'Appointed by State Government (Urban Development Department)',
      tenure: 'Cadre posting (~2-3 years)',
      geographicalJurisdiction: 'Municipal Corporation Limits (Major City >3 Lakh Population)',
      reportingTo: 'General Body of Corporation & Principal Secretary (Urban Development Dept)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STANDING-COMM-CHAIR',
    type: 'office',
    title: 'Standing Committee Chairperson (Corporation Financial Executive)',
    abbreviation: 'STANDING-COMM',
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'local',
    category: 'legislation',
    summary: 'The most powerful financial committee in a Municipal Corporation. Scrutinizes and sanctions all civic expenditure, major road/drainage tenders, school budgets, and modifications to the Municipal Budget before submission to the General Body.',
    mandate: [
      'Municipal Corporation Act provisions establishing Standing Committee as the statutory financial authority.'
    ],
    powers: [
      'Approve or reject municipal tenders, infrastructure contracts, and procurement proposals from the Commissioner.',
      'Recommend the annual municipal tax rates, property tax revisions, and budget appropriations to General Body.'
    ],
    limitations: [
      'Cannot execute projects directly; execution rests with the Municipal Commissioner and city engineers.'
    ],
    governanceDetails: {
      positionName: 'Chairperson, Municipal Standing Committee',
      cadreOrService: 'Elected Corporator (Civic Financial Head)',
      constitutionalArticle: 'State Municipal Corporation Act',
      electoralOrSelectionMethod: 'Elected by members of the Standing Committee from among themselves annually',
      tenure: '1 Year (annual election)',
      geographicalJurisdiction: 'Municipal Corporation Financial Budget',
      reportingTo: 'General Body of the Municipal Corporation'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-WARD-CORPORATOR',
    type: 'office',
    title: 'Ward Corporator / Councillor (Elected Ward Representative)',
    abbreviation: 'CORPORATOR',
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'local',
    category: 'legislation',
    summary: 'Directly elected municipal representative representing an urban ward (population ~15,000 to 50,000). Voices grassroots neighborhood grievances regarding roads, water supply, sewage, streetlights, and primary health clinics in General Body meetings.',
    mandate: [
      'Article 243R: Composition of Municipalities by direct election from territorial constituencies (wards).'
    ],
    powers: [
      'Vote in General Body meetings, elect the Mayor, and vote on municipal resolutions and bylaws.',
      'Utilize Ward Corporator Development Funds for local neighborhood infrastructure repairs.',
      'Inspect local civic works, public schools, dispensaries, and sanitation drives in the ward.'
    ],
    limitations: [
      'Cannot issue direct executive orders to municipal engineers or doctors.'
    ],
    governanceDetails: {
      positionName: 'Ward Corporator / Municipal Councillor',
      cadreOrService: 'Elected Urban Local Representative',
      constitutionalArticle: 'Article 243R of Constitution of India',
      electoralOrSelectionMethod: 'First-Past-The-Post (FPTP) Direct Election by Ward Citizens (Age 18+)',
      tenure: '5 Years',
      geographicalJurisdiction: 'Electoral Ward of the Municipal Corporation',
      reportingTo: 'Ward Citizens & General Body of Corporation'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MUNICIPAL-COUNCIL',
    type: 'office',
    title: 'Municipal Council President & Chief Officer (Nagar Palika)',
    abbreviation: 'NAGAR-PALIKA',
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'local',
    category: 'executive-administration',
    summary: 'Governance framework for medium and small towns (population 25,000 to 3 Lakhs). Led by the elected Municipal Council President (Nagaradhyaksha) and an executive Chief Officer (State Municipal Service).',
    mandate: [
      'Article 243Q(1)(b): Municipal Council for smaller urban areas.',
      'State Municipalities Act.'
    ],
    powers: [
      'Administer town roads, street lighting, water supply, town planning, and garbage disposal.',
      'Levy property taxes, market cess, and octroi / entry fees within statutory guidelines.'
    ],
    limitations: [
      'Subject to financial inspection and administrative audit by the District Collector and Directorate of Municipal Administration.'
    ],
    governanceDetails: {
      positionName: 'Municipal Council President (Nagaradhyaksha) & Chief Officer (CO)',
      cadreOrService: 'Elected Town Leader (President) / State Municipal Service Class 1 (Chief Officer)',
      constitutionalArticle: 'Article 243Q(1)(b) of Constitution of India & State Municipalities Act',
      electoralOrSelectionMethod: 'President elected directly by voters or by Councillors; CO appointed by State Government',
      tenure: '5 Years (President) / Routine posting (Chief Officer)',
      geographicalJurisdiction: 'Municipal Town Limits',
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
    sectionId: 'SEC-DEM-10',
    sectionNumber: '10',
    level: 'local',
    category: 'executive-administration',
    summary: 'Urban body for transitional settlements transitioning from rural village to small town (population ~11,000 to 25,000). Features a Nagar Panchayat President and an executive Chief Officer providing basic civic infrastructure.',
    mandate: [
      'Article 243Q(1)(a): Nagar Panchayat for a transitional area from a rural area to an urban area.'
    ],
    powers: [
      'Manage local building permissions, sanitation, primary health posts, and local town drainage.',
      'Supervise local weekly markets, lighting, and town roads.'
    ],
    limitations: [
      'Limited autonomous revenue base; largely dependent on state grants and District Collectorate supervision.'
    ],
    governanceDetails: {
      positionName: 'Nagar Panchayat President & Chief Officer',
      cadreOrService: 'Elected Town Head (President) / State Urban Cadre (Chief Officer)',
      constitutionalArticle: 'Article 243Q(1)(a) of Constitution of India',
      electoralOrSelectionMethod: 'Direct election of Councillors; Chief Officer posted by State Government',
      tenure: '5 Years',
      geographicalJurisdiction: 'Transitional Urban Area',
      reportingTo: 'Sub-Divisional Magistrate (SDM) & District Collector'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 11: RURAL LOCAL SELF-GOVERNMENT (73RD AMENDMENT)
  // ==========================================
  {
    id: 'DEM-ZP-PRESIDENT',
    type: 'office',
    title: 'Zilla Parishad President & Vice-President (District Rural Political Head)',
    abbreviation: 'ZP-PRESIDENT',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'district',
    category: 'legislation',
    summary: 'The political head of the apex district tier of the three-tier Panchayati Raj system under the 73rd Amendment. Elected by Zilla Parishad Members from among themselves. Presides over the ZP General Body, guides rural development policies, and monitors rural health, schools, and roads.',
    mandate: [
      'Part IX of Constitution of India (73rd Constitutional Amendment Act 1992).',
      'State Zilla Parishads and Panchayat Samitis Acts.'
    ],
    powers: [
      'Preside over Zilla Parishad General Body and Standing Committee meetings.',
      'Approve rural developmental plans, PM-GSY rural road proposals, and district rural welfare schemes.',
      'Inspect rural primary schools, health sub-centers, and anganwadis across the district.'
    ],
    limitations: [
      'Executive powers are statutorily vested in the IAS Chief Executive Officer (CEO), not the ZP President.'
    ],
    governanceDetails: {
      positionName: 'Zilla Parishad President (District Rural Political Head)',
      cadreOrService: 'Elected Rural District Representative',
      constitutionalArticle: 'Article 243B & 243C of Constitution of India & State ZP Act',
      electoralOrSelectionMethod: 'Elected by elected Zilla Parishad Members from among themselves',
      tenure: '2.5 Years or 5 Years (subject to state rotation quotas)',
      geographicalJurisdiction: 'Rural District Area (all villages and blocks in district)',
      reportingTo: 'Zilla Parishad General Body & Rural Electorate'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ZP-CEO',
    type: 'department',
    title: 'Chief Executive Officer (CEO), Zilla Parishad (IAS Administrative Head)',
    abbreviation: 'ZP-CEO',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'district',
    category: 'executive-administration',
    summary: 'The administrative chief of the Zilla Parishad. A senior IAS officer appointed by the State Government, the CEO coordinates all rural developmental departments (Zilla Parishad Schools, Primary Health Centres, Rural Water Supply, Agriculture, MGNREGA). Controls the Block Development Officers (BDOs).',
    mandate: [
      'State Zilla Parishad Acts: Entire administrative and executive power of Zilla Parishad vested in CEO.'
    ],
    powers: [
      'Executes all developmental schemes, rural roads, water supply, and watershed projects.',
      'Appoints, transfers, and disciplines ZP primary teachers, health workers, and gram sevaks.',
      'Controls the Zilla Parishad Fund and authorizes all financial disbursements.'
    ],
    limitations: [
      'Must implement policies resolved by the Zilla Parishad General Body and Standing Committees within statutory budget rules.'
    ],
    governanceDetails: {
      positionName: 'Chief Executive Officer (CEO), Zilla Parishad',
      cadreOrService: 'Indian Administrative Service (IAS) — Senior Time Scale / JAG (Level 11 to 12)',
      constitutionalArticle: '73rd Constitutional Amendment & State ZP Act',
      electoralOrSelectionMethod: 'Appointed by State Government (Rural Development Department / GAD)',
      tenure: 'Cadre posting (~2-3 years)',
      geographicalJurisdiction: 'Entire Rural District Jurisdiction',
      reportingTo: 'ZP President, District Collector (coordination) & Secretary (Rural Development)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ZP-MEMBER',
    type: 'legislature',
    title: 'Zilla Parishad Member / Councillor (Elected Rural Division Rep)',
    abbreviation: 'ZP-MEMBER',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'district',
    category: 'legislation',
    summary: 'Directly elected representative representing a rural electoral division (population ~35,000 to 50,000). Sits in the ZP General Body, votes on district rural budgets, and elects the ZP President and Vice-President.',
    mandate: [
      'Article 243C(2): All seats in Panchayats at district level filled by persons chosen by direct election.'
    ],
    powers: [
      'Vote in ZP General Body, participate on Subject Committees (Education, Health, Works, Agriculture).',
      'Allocate division development funds for rural infrastructure and schools.'
    ],
    limitations: [
      'Cannot execute contracts or issue administrative orders directly to ZP officers.'
    ],
    governanceDetails: {
      positionName: 'Zilla Parishad Member / Councillor',
      cadreOrService: 'Elected Rural District Representative',
      constitutionalArticle: 'Article 243C of Constitution of India',
      electoralOrSelectionMethod: 'First-Past-The-Post Direct Election by Rural Division Voters',
      tenure: '5 Years',
      geographicalJurisdiction: 'Zilla Parishad Electoral Division',
      reportingTo: 'Division Rural Electors & ZP General Body'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PS-CHAIRPERSON',
    type: 'office',
    title: 'Panchayat Samiti Chairperson & Deputy Chairperson (Block Rural Head)',
    abbreviation: 'PS-CHAIRPERSON',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'local',
    category: 'legislation',
    summary: 'Political head of the intermediate (Taluka / Block) tier of Panchayati Raj. Elected by Panchayat Samiti Members from among themselves. Chairs block development meetings, monitors block-level government schemes, and supervises block rural staff.',
    mandate: [
      'Article 243B: Panchayats at the intermediate level.',
      'State Panchayat Samiti Acts.'
    ],
    powers: [
      'Preside over monthly Panchayat Samiti meetings and review block development works.',
      'Allocate block grants for agriculture, livestock, rural housing, and drinking water.'
    ],
    limitations: [
      'Executive powers are statutorily vested in the Block Development Officer (BDO).'
    ],
    governanceDetails: {
      positionName: 'Panchayat Samiti Chairperson (Sabhapati)',
      cadreOrService: 'Elected Block Rural Representative',
      constitutionalArticle: 'Article 243B, 243C of Constitution of India',
      electoralOrSelectionMethod: 'Elected by elected Panchayat Samiti members from amongst themselves',
      tenure: '2.5 Years or 5 Years (subject to rotation quotas)',
      geographicalJurisdiction: 'Rural Block / Taluka',
      reportingTo: 'Panchayat Samiti Body & Zilla Parishad President'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-BDO',
    type: 'department',
    title: 'Block Development Officer — BDO (Block Administrative Head)',
    abbreviation: 'BDO',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'local',
    category: 'executive-administration',
    summary: 'The administrative chief and Executive Officer of the Panchayat Samiti at block level (Taluka). Directs block extension officers (Agriculture, Education, Animal Husbandry, Health) and coordinates MGNREGA, housing schemes, and rural sanitation across all villages in the block.',
    mandate: [
      'State Panchayat Samiti Acts & Rural Development Department Rules.'
    ],
    powers: [
      'Execute all block-level rural development, poverty alleviation, and employment guarantee schemes.',
      'Supervise and inspect Gram Sevaks / Village Secretaries across all villages in the block.',
      'Sanction rural development funds and authorize muster rolls under MGNREGA.'
    ],
    limitations: [
      'Works under the administrative direction and control of the Zilla Parishad CEO.'
    ],
    governanceDetails: {
      positionName: 'Block Development Officer (BDO / Executive Officer)',
      cadreOrService: 'State Rural Development Service (Class 1 / Group A Gazetted)',
      constitutionalArticle: 'State Panchayat Samiti Act & 73rd Amendment',
      electoralOrSelectionMethod: 'Recruited via State PSC (e.g. MPSC) or promoted from Extension Officer',
      tenure: 'Block posting (~2-3 years)',
      geographicalJurisdiction: 'Development Block / Taluka',
      reportingTo: 'Panchayat Samiti Chairperson & Zilla Parishad CEO'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PS-MEMBER',
    type: 'legislature',
    title: 'Panchayat Samiti Member (Block Division Representative)',
    abbreviation: 'PS-MEMBER',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'local',
    category: 'legislation',
    summary: 'Directly elected representative representing a block rural electoral division (population ~15,000 to 25,000). Sits in the Panchayat Samiti, votes on block schemes, and elects the Samiti Chairperson.',
    mandate: [
      'Article 243C: Direct election of members at intermediate level.'
    ],
    powers: [
      'Vote on block developmental schemes, approve village water schemes, and review block health sub-centers.'
    ],
    limitations: [
      'No independent executive authority outside the collective Panchayat Samiti body.'
    ],
    governanceDetails: {
      positionName: 'Panchayat Samiti Member',
      cadreOrService: 'Elected Intermediate Panchayat Representative',
      constitutionalArticle: 'Article 243C of Constitution of India',
      electoralOrSelectionMethod: 'Direct Election by Block Division Voters',
      tenure: '5 Years',
      geographicalJurisdiction: 'Block Electoral Division',
      reportingTo: 'Block Electors & Panchayat Samiti'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SARPANCH',
    type: 'office',
    title: 'Sarpanch & Upa-Sarpanch (Elected Village Head)',
    abbreviation: 'SARPANCH',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'local',
    category: 'executive-administration',
    summary: 'The elected executive head of the Gram Panchayat at village level. Elected directly by all registered adult voters of the village (or by elected Ward Panchs depending on state law). Chairs Gram Panchayat meetings and Gram Sabha assemblies, signs village development checks jointly with the Gram Sevak, and leads village development.',
    mandate: [
      'Article 243D: Reservation of seats and offices of Chairpersons for SC, ST, and Women (min 33% to 50%).',
      'State Gram Panchayat Acts (e.g. Maharashtra Village Panchayats Act 1958 Section 30).'
    ],
    powers: [
      'Convene and preside over meetings of the Gram Panchayat and the sovereign Gram Sabha.',
      'Jointly operate the village Gram Panchayat bank account and sign checks with the Gram Sevak.',
      'Coordinate village sanitation, drinking water, street lighting, and disaster relief.',
      'Implement government schemes (PMAY-Gramin housing, Swachh Bharat toilets, village roads).'
    ],
    limitations: [
      'Cannot execute financial disbursements without joint signature of the civil servant Gram Sevak.',
      'Can be removed by Motion of No-Confidence or disqualified by District Collector for financial irregularities.'
    ],
    governanceDetails: {
      positionName: 'Sarpanch & Upa-Sarpanch (Village Head)',
      cadreOrService: 'Elected Grassroots Village Executive Head',
      constitutionalArticle: 'Article 243D of Constitution of India & State Gram Panchayat Act',
      electoralOrSelectionMethod: 'Direct election by all adult voters of the village (or elected by Ward Panchs)',
      tenure: '5 Years',
      geographicalJurisdiction: 'Revenue Village / Gram Panchayat Territory',
      reportingTo: 'Sovereign Village Gram Sabha & Block Development Officer (BDO)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-GRAM-SEVAK',
    type: 'department',
    title: 'Gram Sevak / Village Secretary (Village Administrative Staff)',
    abbreviation: 'GRAM-SEVAK',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'local',
    category: 'executive-administration',
    summary: 'The permanent civil servant and administrative secretary of the Gram Panchayat appointed by the Zilla Parishad CEO. Maintains the cash books, records proceedings of the Gram Sabha, registers births and deaths, and ensures statutory compliance for all village expenditures.',
    mandate: [
      'State Village Panchayats Act: Secretary of the Gram Panchayat appointed by ZP CEO.',
      'Registration of Births and Deaths Act 1969: Local Registrar of Births and Deaths.'
    ],
    powers: [
      'Maintain the books of accounts, voucher registers, and administrative records of the Gram Panchayat.',
      'Joint signatory with the Sarpanch for operating the Gram Panchayat bank account.',
      'Issue official certificates: Birth Certificate, Death Certificate, Property Tax assessment extract.'
    ],
    limitations: [
      'Civil administrative employee; works under the supervision of the Sarpanch and administrative control of the BDO.'
    ],
    governanceDetails: {
      positionName: 'Gram Sevak / Village Development Officer (VDO) / Panchayat Secretary',
      cadreOrService: 'Zilla Parishad Rural Subordinate Service — Group C',
      constitutionalArticle: 'State Gram Panchayat Act & Rules',
      electoralOrSelectionMethod: 'Recruited via Zilla Parishad Staff Selection Exam (Graduate level)',
      tenure: 'Village posting (~3 years)',
      geographicalJurisdiction: 'Gram Panchayat Territory (1 to 2 villages)',
      reportingTo: 'Sarpanch (operational) & Block Development Officer (administrative)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-WARD-PANCH',
    type: 'legislature',
    title: 'Ward Panch / Gram Panchayat Member (Village Ward Representative)',
    abbreviation: 'WARD-PANCH',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'local',
    category: 'legislation',
    summary: 'Elected village ward representative representing a neighborhood ward (population ~300 to 800). Sits on the Gram Panchayat committee (consisting of 7 to 17 members depending on village size) and votes on local resolutions.',
    mandate: [
      'Article 243C: Composition of Panchayats by direct election from wards.'
    ],
    powers: [
      'Participate and vote in monthly Gram Panchayat committee meetings.',
      'Elect the Upa-Sarpanch (Deputy Sarpanch) from among members.',
      'Propose local lane paving, street lighting, and drainage works for their ward.'
    ],
    limitations: [
      'No individual executive powers outside collective committee decisions.'
    ],
    governanceDetails: {
      positionName: 'Ward Panch / Gram Panchayat Member',
      cadreOrService: 'Elected Village Ward Representative',
      constitutionalArticle: 'Article 243C of Constitution of India',
      electoralOrSelectionMethod: 'Direct Election by Ward Voters (Age 18+)',
      tenure: '5 Years',
      geographicalJurisdiction: 'Village Electoral Ward (Wada / Mohalla)',
      reportingTo: 'Ward Residents & Gram Panchayat'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-GRAM-SABHA',
    type: 'constitutional',
    title: 'Gram Sabha (Sovereign Assembly of All Village Voters)',
    abbreviation: 'GRAM-SABHA',
    sectionId: 'SEC-DEM-11',
    sectionNumber: '11',
    level: 'constitutional',
    category: 'legislation',
    summary: 'The constitutional embodiment of direct democracy in India under Article 243A. Comprises every adult citizen residing in the village whose name is registered in the electoral roll. The Gram Sabha ratifies annual village development plans, approves the budget, audits all expenditures (Social Audit), and selects beneficiaries for welfare schemes.',
    mandate: [
      'Article 243A: A Gram Sabha may exercise such powers and perform such functions at the village level as the Legislature of a State may, by law, provide.',
      'Panchayats (Extension to Scheduled Areas) Act 1996 (PESA): Absolute authority over community resources in Tribal Areas.'
    ],
    powers: [
      'Approve the annual village budget, developmental works, and tax assessments before execution.',
      'Conduct mandatory Social Audit of all public works, MGNREGA employment, and public money expenditures.',
      'Select eligible beneficiaries for poverty alleviation and housing schemes (e.g. PMAY-G, ration cards).',
      'In PESA scheduled areas, mandatory prior consent required for land acquisition and minor forest produce.'
    ],
    limitations: [
      'Deliberative and ratifying body; physical execution of resolutions is carried out by the Sarpanch and Gram Sevak.'
    ],
    governanceDetails: {
      positionName: 'Sovereign Village General Assembly (All Registered Electors of Village)',
      cadreOrService: 'Direct Democratic Sovereign Body',
      constitutionalArticle: 'Article 243A of Constitution of India & PESA Act 1996',
      electoralOrSelectionMethod: 'Universal Adult Membership (Automatic enrollment of all adult village voters)',
      tenure: 'Permanent Constitutional Body (Meets at least 4 times a year: 26 Jan, 1 May, 15 Aug, 2 Oct)',
      geographicalJurisdiction: 'Gram Panchayat Village Territory',
      reportingTo: 'Sovereign Citizens of the Village'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 12: CONSTITUTIONAL OVERSIGHT & RECRUITMENT COMMISSIONS
  // ==========================================
  {
    id: 'DEM-ECI',
    type: 'constitutional',
    title: 'Election Commission of India (National & State Assembly Elections)',
    abbreviation: 'ECI',
    sectionId: 'SEC-DEM-12',
    sectionNumber: '12',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'Autonomous constitutional commission established under Article 324. Vested with the superintendence, direction, and control of the preparation of electoral rolls and the conduct of all elections to Parliament, State Legislatures, and the offices of the President and Vice-President. Enforces the Model Code of Conduct (MCC).',
    mandate: [
      'Article 324: Superintendence, direction and control of elections to be vested in an Election Commission.',
      'Representation of the People Acts 1950 & 1951.'
    ],
    powers: [
      'Determine territorial constituencies, poll schedules, and counting procedures nationwide.',
      'Enforce the Model Code of Conduct (MCC) across political parties, ministers, and candidates.',
      'Requisition any government officer, police personnel, and civil administrative machinery on election duty.',
      'Order repolls, countermand elections in the event of booth capturing, and disqualify candidates for corrupt practices.'
    ],
    limitations: [
      'Does not conduct elections to Municipalities and Panchayats (handled by State Election Commissions under Art 243K/243ZA).'
    ],
    governanceDetails: {
      positionName: 'Chief Election Commissioner & Election Commissioners',
      cadreOrService: 'Autonomous Constitutional Commission',
      constitutionalArticle: 'Article 324-329 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on recommendation of Selection Committee (PM + Union Minister + LoP) under CEC Act 2023',
      tenure: '6 Years or until age 65 (CEC removable only by parliamentary impeachment on grounds like a Supreme Court Judge)',
      geographicalJurisdiction: 'Entire Republic of India',
      reportingTo: 'The Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SEC',
    type: 'constitutional',
    title: 'State Election Commission (Local Bodies Election Oversight)',
    abbreviation: 'SEC',
    sectionId: 'SEC-DEM-12',
    sectionNumber: '12',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'Autonomous constitutional commission created under Articles 243K and 243ZA (73rd and 74th Amendments). Holds independent superintendence, direction, and control over electoral rolls and elections to all Rural Panchayats (Zilla Parishad, Panchayat Samiti, Gram Panchayat) and Urban Municipalities (Corporations, Councils, Nagar Panchayats).',
    mandate: [
      'Article 243K: Elections to the Panchayats vested in State Election Commission.',
      'Article 243ZA: Elections to the Municipalities vested in State Election Commission.'
    ],
    powers: [
      'Conduct periodic free and fair elections to all rural and urban local bodies across the State.',
      'Requisition district collectors, municipal commissioners, and police personnel for local election duties.',
      'Enforce local election code of conduct and adjudicate election expenditure limits.'
    ],
    limitations: [
      'Jurisdiction limited strictly to Local Self-Government bodies; national and state polls are handled by ECI.'
    ],
    governanceDetails: {
      positionName: 'State Election Commissioner (SEC)',
      cadreOrService: 'Autonomous Constitutional State Commission',
      constitutionalArticle: 'Articles 243K, 243ZA of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by the Governor of the State',
      tenure: '5 Years or up to age 65 (removable only in like manner and grounds as a High Court Judge; Art 243K(2))',
      geographicalJurisdiction: 'All Rural & Urban Local Self-Government Constituencies across the State',
      reportingTo: 'Constitution of India & Governor of the State'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-UPSC',
    type: 'constitutional',
    title: 'Union Public Service Commission (UPSC)',
    abbreviation: 'UPSC',
    sectionId: 'SEC-DEM-12',
    sectionNumber: '12',
    level: 'constitutional',
    category: 'oversight-remedies',
    summary: 'The premier constitutional recruiting agency for the Government of India under Article 315. Conducts competitive examinations (Civil Services Examination, Engineering Services, NDA, CDS) for recruitment to All India Services (IAS, IPS, IFoS) and Central Civil Services (IFS, IRS, IA&AS). Advises the President on disciplinary matters.',
    mandate: [
      'Article 315: Public Service Commissions for the Union and for the States.',
      'Article 320: Functions of Public Service Commissions (examinations, appointments, promotions, disciplinary matters).'
    ],
    powers: [
      'Conduct the Civil Services Examination (CSE) and select candidates based purely on constitutional merit.',
      'Advise Union Government on promotions, framing of recruitment rules, and disciplinary penalties against civil servants.',
      'Empanel senior-most IPS officers for State DGP selection pursuant to Supreme Court Prakash Singh guidelines.'
    ],
    limitations: [
      'Advisory body; recommendations submitted annually to President (placed before Parliament with reasons for non-acceptance).'
    ],
    governanceDetails: {
      positionName: 'Chairman & Members of UPSC',
      cadreOrService: 'Autonomous Constitutional Commission',
      constitutionalArticle: 'Articles 315-323 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President of India under Art 316',
      tenure: '6 Years or until age 65',
      geographicalJurisdiction: 'Pan-India Central & All India Services Recruitment',
      reportingTo: 'President of India & Parliament of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SPSC',
    type: 'constitutional',
    title: 'State Public Service Commission (SPSC / MPSC)',
    abbreviation: 'SPSC-MPSC',
    sectionId: 'SEC-DEM-12',
    sectionNumber: '12',
    level: 'state',
    category: 'oversight-remedies',
    summary: 'The constitutional recruiting agency for the State Government under Article 315 (e.g. Maharashtra Public Service Commission - MPSC). Conducts competitive examinations for State Civil Services (Deputy Collector, Deputy SP / ACP, Tehsildar, Block Development Officer, State Tax Officers).',
    mandate: [
      'Article 315 & 320: Public Service Commission for the State; competitive recruitment and service advisory.'
    ],
    powers: [
      'Conduct State Civil Services Exams and recommend candidates for Group A and B state civil posts.',
      'Advise State Government on service rules, seniority disputes, and disciplinary punishments of state officers.'
    ],
    limitations: [
      'Members appointed by Governor but removable ONLY by the President of India after Supreme Court inquiry (Art 317).'
    ],
    governanceDetails: {
      positionName: 'Chairman & Members of State Public Service Commission',
      cadreOrService: 'Autonomous Constitutional State Commission',
      constitutionalArticle: 'Articles 315-323 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by Governor under Art 316; removal exclusively by President under Art 317',
      tenure: '6 Years or until age 62',
      geographicalJurisdiction: 'State Civil & Police Services Recruitment',
      reportingTo: 'Governor of the State & State Legislature'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  }
];

export const RELATIONSHIPS_V4: RelationshipEdgeData[] = [
  // ==========================================
  // TIER 1: SOVEREIGN CITIZENS MANDATE (STRICT HIERARCHICAL TRANSITIONS)
  // ==========================================
  {
    id: 'REL-V4-001',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-CONSTITUTION',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Adopted, enacted & gave to themselves the Constitution (Preamble)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-002',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect 543 Lok Sabha MPs directly via adult suffrage (Art 326)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-003',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-MLA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect 4,123 State MLAs directly in assembly elections (Art 170)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-004',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-WARD-CORPORATOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Urban Ward Corporators in municipal elections (Art 243R)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-005',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-GRAM-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'All registered adult village voters constitute the sovereign Gram Sabha (Art 243A)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-006',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-SARPANCH',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Village Sarpanch directly / via elected Ward Panchs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-007',
    sourceNodeId: 'DEM-PEOPLE',
    targetNodeId: 'DEM-ZP-MEMBER',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Zilla Parishad Members from rural district divisions (Art 243C)',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 2 & 3: UNION LEGISLATURE & EXECUTIVE FORMATION
  // ==========================================
  {
    id: 'REL-V4-008',
    sourceNodeId: 'DEM-CONSTITUTION',
    targetNodeId: 'DEM-PARLIAMENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Vests legislative power of the Union in Parliament (Art 79)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-009',
    sourceNodeId: 'DEM-CONSTITUTION',
    targetNodeId: 'DEM-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Vests executive power of the Union in the President (Art 53)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-010',
    sourceNodeId: 'DEM-PARLIAMENT',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Lok Sabha constitutes the Lower House of Parliament',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-011',
    sourceNodeId: 'DEM-PARLIAMENT',
    targetNodeId: 'DEM-MP-RAJYA-SABHA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Rajya Sabha constitutes the Upper House of Parliament',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-012',
    sourceNodeId: 'DEM-MP-LOK-SABHA',
    targetNodeId: 'DEM-SPEAKER-LS',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Speaker from amongst members by simple majority (Art 93)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-013',
    sourceNodeId: 'DEM-SPEAKER-LS',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Regulates debate, recognizes speakers & enforces House discipline',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-014',
    sourceNodeId: 'DEM-MP-LOK-SABHA',
    targetNodeId: 'DEM-PRIME-MINISTER',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Majority of 272+ MPs command confidence to sustain PM in office (Art 75)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-015',
    sourceNodeId: 'DEM-PRIME-MINISTER',
    targetNodeId: 'DEM-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Heads Council of Ministers to aid & advise President (Art 74) & report decisions (Art 78)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-016',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-PRIME-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Appoints Prime Minister under Warrant of Appointment (Art 75(1))',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-017',
    sourceNodeId: 'DEM-PRIME-MINISTER',
    targetNodeId: 'DEM-CABINET-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Selects Cabinet Ministers & allocates ministerial portfolios',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-018',
    sourceNodeId: 'DEM-CABINET-MINISTER',
    targetNodeId: 'DEM-MINISTER-OF-STATE',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Ministers of State assisting in ministry departments',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-019',
    sourceNodeId: 'DEM-VICE-PRESIDENT',
    targetNodeId: 'DEM-CHAIRMAN-RS',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Vice-President acts ex-officio as Chairman of Rajya Sabha (Art 64)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-020',
    sourceNodeId: 'DEM-CHAIRMAN-RS',
    targetNodeId: 'DEM-MP-RAJYA-SABHA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Presides over Rajya Sabha debates & enforces Upper House decorum',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-021',
    sourceNodeId: 'DEM-MP-LOK-SABHA',
    targetNodeId: 'DEM-PARL-COMMITTEE',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elects/nominates members to Departmental & Financial Committees',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-022',
    sourceNodeId: 'DEM-LEADER-OPPOSITION-UNION',
    targetNodeId: 'DEM-CABINET-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Scrutinizes executive policies & questions ministerial actions on floor of House',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 4: KEY CENTRAL MINISTRIES & CENTRAL BUREAUCRACY
  // ==========================================
  {
    id: 'REL-V4-023',
    sourceNodeId: 'DEM-PRIME-MINISTER',
    targetNodeId: 'DEM-CABINET-SEC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Cabinet Secretary & central administrative machinery',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-024',
    sourceNodeId: 'DEM-CABINET-MINISTER',
    targetNodeId: 'DEM-MHA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Union Home Minister exercises political executive command over MHA',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-025',
    sourceNodeId: 'DEM-MHA',
    targetNodeId: 'DEM-CAPF',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs, budgets & deploys Central Armed Police Forces (CRPF, BSF, CISF)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-026',
    sourceNodeId: 'DEM-MHA',
    targetNodeId: 'DEM-CENTRAL-AGENCIES',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Oversees domestic intelligence (IB) and federal counter-terror investigations (NIA)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-027',
    sourceNodeId: 'DEM-CABINET-MINISTER',
    targetNodeId: 'DEM-MOF',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Union Finance Minister directs national fiscal policy & budgeting',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-028',
    sourceNodeId: 'DEM-MOF',
    targetNodeId: 'DEM-CBDT-CBIC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Central Boards of Direct Taxes (CBDT) & Indirect Taxes (CBIC)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-029',
    sourceNodeId: 'DEM-CABINET-MINISTER',
    targetNodeId: 'DEM-MOLJ',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Law Minister directs legislative drafting & judicial administration',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-030',
    sourceNodeId: 'DEM-PRIME-MINISTER',
    targetNodeId: 'DEM-DOPT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'PM holds Ministry of Personnel; DoPT controls All-India Services cadre & ACC',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-031',
    sourceNodeId: 'DEM-PARL-COMMITTEE',
    targetNodeId: 'DEM-MOF',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Public Accounts Committee (PAC) audits government expenditure & CAG reports',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 5 & 6: STATE LEGISLATURE & STATE POLITICAL EXECUTIVE
  // ==========================================
  {
    id: 'REL-V4-032',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-GOVERNOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints State Governor by Warrant under Hand & Seal (Art 155)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-033',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'State MLAs vote in Presidential Electoral College (Art 54)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-034',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-MP-RAJYA-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'State MLAs elect 233 Rajya Sabha MPs by Single Transferable Vote (Art 80)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-035',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-SPEAKER-VS',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Speaker of State Legislative Assembly (Art 178)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-036',
    sourceNodeId: 'DEM-SPEAKER-VS',
    targetNodeId: 'DEM-MLA',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Presides over Vidhan Sabha debate, decorum & Anti-Defection petitions',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-037',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-CHIEF-MINISTER',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Majority of MLAs command confidence to form State Government under CM (Art 164)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-038',
    sourceNodeId: 'DEM-CHIEF-MINISTER',
    targetNodeId: 'DEM-GOVERNOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Aids & advises Governor (Art 163) & communicates state executive decisions (Art 167)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-039',
    sourceNodeId: 'DEM-GOVERNOR',
    targetNodeId: 'DEM-CHIEF-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Appoints Chief Minister and administers oath of office (Art 164(1))',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-040',
    sourceNodeId: 'DEM-CHIEF-MINISTER',
    targetNodeId: 'DEM-STATE-CABINET-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Leads State Cabinet & allocates state portfolios',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-041',
    sourceNodeId: 'DEM-MLC',
    targetNodeId: 'DEM-CHAIRMAN-VP',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Chairman of State Legislative Council (Art 182)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-042',
    sourceNodeId: 'DEM-LEADER-OPPOSITION-STATE',
    targetNodeId: 'DEM-STATE-CABINET-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Scrutinizes state government policies and administrative actions',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 7: STATE SECRETARIAT & GOVERNMENT DEPARTMENTS
  // ==========================================
  {
    id: 'REL-V4-043',
    sourceNodeId: 'DEM-CHIEF-MINISTER',
    targetNodeId: 'DEM-CHIEF-SEC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Chief Secretary & state civil administration via Mantralaya',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-044',
    sourceNodeId: 'DEM-STATE-CABINET-MINISTER',
    targetNodeId: 'DEM-STATE-HOME-DEPT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'State Home Minister directs State Home Department & internal security',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-045',
    sourceNodeId: 'DEM-STATE-CABINET-MINISTER',
    targetNodeId: 'DEM-STATE-FINANCE-DEPT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Finance Minister directs State Finance Department & state budget formulation',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-046',
    sourceNodeId: 'DEM-STATE-CABINET-MINISTER',
    targetNodeId: 'DEM-STATE-LAW-DEPT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'State Law Minister directs state legislative drafting & legal affairs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-047',
    sourceNodeId: 'DEM-CHIEF-MINISTER',
    targetNodeId: 'DEM-STATE-GAD',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'CM directly controls General Administration Department (GAD) for cadre postings',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-048',
    sourceNodeId: 'DEM-MHA',
    targetNodeId: 'DEM-STATE-HOME-DEPT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Centre-State internal security coordination, intelligence sharing & IPS cadre allocations',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 8: STATE POLICE & LAW ENFORCEMENT CHAIN OF COMMAND
  // ==========================================
  {
    id: 'REL-V4-049',
    sourceNodeId: 'DEM-STATE-HOME-DEPT',
    targetNodeId: 'DEM-DGP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Exercises statutory administrative control over State Police Force',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-050',
    sourceNodeId: 'DEM-DGP',
    targetNodeId: 'DEM-ADGP-IGP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Range Inspectors General (IGPs) & specialized statewide branches',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-051',
    sourceNodeId: 'DEM-DGP',
    targetNodeId: 'DEM-CP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Commands Metropolitan Police Commissioners in major cities',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-052',
    sourceNodeId: 'DEM-ADGP-IGP',
    targetNodeId: 'DEM-SP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises District Superintendents of Police (SPs) across the Range',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-053',
    sourceNodeId: 'DEM-SP',
    targetNodeId: 'DEM-DYSP-SDPO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Sub-Divisional Police Officers (SDPOs / DySPs) in district',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-054',
    sourceNodeId: 'DEM-DYSP-SDPO',
    targetNodeId: 'DEM-POLICE-INSPECTOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Police Station Inspectors (SHOs) in the sub-division',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-055',
    sourceNodeId: 'DEM-POLICE-INSPECTOR',
    targetNodeId: 'DEM-SUB-INSPECTOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Assigns investigations & station shifts to Sub-Inspectors (PSI/ASI)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-056',
    sourceNodeId: 'DEM-SUB-INSPECTOR',
    targetNodeId: 'DEM-CONSTABULARY',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Head Constables & Constables on beat patrols, bandobast & sentry duty',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 9: FIELD REVENUE & MAGISTRACY HIERARCHY
  // ==========================================
  {
    id: 'REL-V4-057',
    sourceNodeId: 'DEM-CHIEF-SEC',
    targetNodeId: 'DEM-DIVISIONAL-COMM',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Regional Divisional Commissioners across the State',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-058',
    sourceNodeId: 'DEM-DIVISIONAL-COMM',
    targetNodeId: 'DEM-DISTRICT-COLLECTOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises District Collectors/DMs and hears revenue appeals',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-059',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-SDM',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Sub-Divisional Magistrates (SDMs) across revenue sub-divisions',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-060',
    sourceNodeId: 'DEM-SDM',
    targetNodeId: 'DEM-TEHSILDAR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Taluka Tehsildars & Executive Magistracy',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-061',
    sourceNodeId: 'DEM-TEHSILDAR',
    targetNodeId: 'DEM-TALATHI',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Village Talathis / Patwaris & 7/12 Land Records',
    verificationStatus: 'verified'
  },

  // ==========================================
  // DUAL CONTROL COORDINATION (DM ↔ SP LAW & ORDER COORDINATION)
  // ==========================================
  {
    id: 'REL-V4-062',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-SP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'DM exercises general control over SP for district peace & BNSS 144 orders (Police Act Sec 4)',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 10 & 11: LOCAL GOVERNANCE HIERARCHIES
  // ==========================================
  {
    id: 'REL-V4-063',
    sourceNodeId: 'DEM-WARD-CORPORATOR',
    targetNodeId: 'DEM-MAYOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Mayor from among Corporation members',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-064',
    sourceNodeId: 'DEM-WARD-CORPORATOR',
    targetNodeId: 'DEM-STANDING-COMM-CHAIR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Standing Committee members for financial sanctioning',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-065',
    sourceNodeId: 'DEM-STANDING-COMM-CHAIR',
    targetNodeId: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Sanctions municipal tenders & budget appropriations executed by Commissioner',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-066',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Coordinates district magistracy, elections & disaster relief',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-067',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-MUNICIPAL-COUNCIL',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Inspects Town Municipal Councils under State Municipalities Act',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-068',
    sourceNodeId: 'DEM-SDM',
    targetNodeId: 'DEM-NAGAR-PANCHAYAT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises transitional Nagar Panchayats and civic finances',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-069',
    sourceNodeId: 'DEM-ZP-MEMBER',
    targetNodeId: 'DEM-ZP-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Zilla Parishad President from among members',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-070',
    sourceNodeId: 'DEM-ZP-PRESIDENT',
    targetNodeId: 'DEM-ZP-CEO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Guides district rural policy executed by IAS CEO',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-071',
    sourceNodeId: 'DEM-DISTRICT-COLLECTOR',
    targetNodeId: 'DEM-ZP-CEO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Coordinates district planning, elections & disaster response',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-072',
    sourceNodeId: 'DEM-ZP-CEO',
    targetNodeId: 'DEM-BDO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Block Development Officers across all blocks in district',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-073',
    sourceNodeId: 'DEM-PS-MEMBER',
    targetNodeId: 'DEM-PS-CHAIRPERSON',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Elect Panchayat Samiti Chairperson from among members',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-074',
    sourceNodeId: 'DEM-PS-CHAIRPERSON',
    targetNodeId: 'DEM-BDO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Guides block development plans executed by BDO',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-075',
    sourceNodeId: 'DEM-BDO',
    targetNodeId: 'DEM-GRAM-SEVAK',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Gram Sevaks & inspects village panchayat accounts',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-076',
    sourceNodeId: 'DEM-WARD-PANCH',
    targetNodeId: 'DEM-SARPANCH',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Forms Gram Panchayat executive committee & elects Upa-Sarpanch',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-077',
    sourceNodeId: 'DEM-SARPANCH',
    targetNodeId: 'DEM-GRAM-SEVAK',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Jointly signs village development accounts & directs local staff',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-078',
    sourceNodeId: 'DEM-GRAM-SABHA',
    targetNodeId: 'DEM-SARPANCH',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Direct democracy mandate: approves village budget & conducts Social Audit',
    verificationStatus: 'verified'
  },

  // ==========================================
  // TIER 12: CONSTITUTIONAL OVERSIGHT & RECRUITMENT LINKAGES
  // ==========================================
  {
    id: 'REL-V4-079',
    sourceNodeId: 'DEM-ECI',
    targetNodeId: 'DEM-DISTRICT-COLLECTOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Appoints Collector as District Election Officer (DEO) for national & state polls',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-080',
    sourceNodeId: 'DEM-SEC',
    targetNodeId: 'DEM-WARD-CORPORATOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises & conducts Urban Municipal Corporation Ward elections',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-081',
    sourceNodeId: 'DEM-SEC',
    targetNodeId: 'DEM-SARPANCH',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises & conducts Rural Gram Panchayat & Sarpanch elections',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-082',
    sourceNodeId: 'DEM-UPSC',
    targetNodeId: 'DEM-DOPT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Recommends merit-selected candidates for IAS, IPS, and Central Civil Services to DoPT',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-083',
    sourceNodeId: 'DEM-SPSC',
    targetNodeId: 'DEM-STATE-GAD',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Recommends merit-selected candidates for State Civil & Police services to GAD',
    verificationStatus: 'verified'
  }
];

export const SOURCES_V4: SourceRecord[] = [
  {
    id: 'SRC-V4-CONST',
    name: 'Constitution of India',
    officialUrl: 'https://legislative.gov.in/constitution-of-india',
    documentTitle: 'Constitution of India (As Amended Up To Date)',
    sectionCitation: 'Articles 52-243ZG & Schedules 7, 10, 11, 12',
    lastVerifiedDate: '2026-10-18',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-PRESIDENT', 'DEM-PM', 'DEM-LS-SPEAKER', 'DEM-GOVERNOR', 'DEM-CM', 'DEM-ECI']
  },
  {
    id: 'SRC-V4-POLICE-ACT',
    name: 'The Police Act, 1861 & State Police Acts',
    officialUrl: 'https://www.indiacode.nic.in/handle/123456789/2253',
    documentTitle: 'The Police Act, 1861 (Act No. 5 of 1861) & Corresponding State Police Acts',
    sectionCitation: 'Section 4, 7, 12 & State Police Manuals',
    lastVerifiedDate: '2026-10-18',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-POL-DGP', 'DEM-POL-ADG', 'DEM-POL-IG', 'DEM-POL-DIG', 'DEM-POL-SP', 'DEM-POL-SHO', 'DEM-POL-CONSTABLE']
  },
  {
    id: 'SRC-V4-RPA',
    name: 'Representation of the People Acts (1950 & 1951)',
    officialUrl: 'https://eci.gov.in/electoral-laws/',
    documentTitle: 'Representation of the People Act, 1950 & 1951',
    sectionCitation: 'Act No. 43 of 1950 & Act No. 43 of 1951',
    lastVerifiedDate: '2026-10-18',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-CITIZENS', 'DEM-ECI', 'DEM-MP-LOK-SABHA', 'DEM-MLA']
  },
  {
    id: 'SRC-V4-AIS',
    name: 'All India Services Act, 1951 & Cadre Rules',
    officialUrl: 'https://dopt.gov.in/all-india-services-ais',
    documentTitle: 'All India Services Act, 1951 (Act No. 61 of 1951)',
    sectionCitation: 'Section 3 & AIS (Cadre) Rules',
    lastVerifiedDate: '2026-10-18',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-DOPT-SEC', 'DEM-UPSC', 'DEM-CABINET-SEC', 'DEM-CS-STATE', 'DEM-DM-COLLECTOR', 'DEM-POL-DGP']
  },
  {
    id: 'SRC-V4-BUSINESS-RULES',
    name: 'Government of India Allocation of Business Rules',
    officialUrl: 'https://cabsec.gov.in/allocationofbusinessrules/',
    documentTitle: 'Government of India (Allocation of Business) Rules, 1961',
    sectionCitation: 'Rules made under Article 77(3) of Constitution of India',
    lastVerifiedDate: '2026-10-18',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-PM', 'DEM-CABINET-SEC', 'DEM-MHA-MINISTER', 'DEM-MOF-MINISTER', 'DEM-MOLJ-MINISTER']
  }
];
