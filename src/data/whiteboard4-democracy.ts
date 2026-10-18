import { EducationNode, RelationshipEdgeData, SourceRecord, SectionMeta } from '../types';

export const SECTION_METAS_V4: SectionMeta[] = [
  {
    id: 'SEC-DEM-01',
    number: '01',
    title: 'Apex Constitutional Authority (President & Vice-President)',
    subtitle: 'Head of State, Supreme Commander of Armed Forces & Constitutional Grundnorm',
    summary: 'The constitutional apex of the Republic of India under Articles 52 and 53. Executive power of the Union is formally vested in the President, exercised on the aid and advice of the Council of Ministers under Article 74.',
    iconName: 'Crown',
    expectedSubsections: ['President of India', 'Vice-President of India'],
    expectedAuthorities: ['HUB-DEM-APEX', 'DEM-PRESIDENT', 'DEM-VICE-PRESIDENT']
  },
  {
    id: 'SEC-DEM-02',
    number: '02',
    title: 'Union Parliament Zone (Lok Sabha & Rajya Sabha)',
    subtitle: 'Supreme Legislative Authority of the Union (Articles 79-122)',
    summary: 'Bicameral Parliament consisting of the President, the House of the People (Lok Sabha - 543 directly elected MPs), and the Council of States (Rajya Sabha - 245 representatives of States & UTs).',
    iconName: 'Landmark',
    expectedSubsections: ['Lok Sabha (House of the People)', 'Rajya Sabha (Council of States)'],
    expectedAuthorities: ['HUB-DEM-PARLIAMENT', 'DEM-LS-SPEAKER', 'DEM-MP-LOK-SABHA', 'DEM-RS-CHAIRMAN', 'DEM-MP-RAJYA-SABHA']
  },
  {
    id: 'SEC-DEM-03',
    number: '03',
    title: 'Central Ministries Suite (Home, Finance, Law & Personnel)',
    subtitle: 'Union Cabinet, Strategic Ministries, Central Services & Oversight',
    summary: 'The administrative heart of the Government of India headed by the Prime Minister and Cabinet Ministers, executed by Secretaries to the Government of India under Allocation of Business Rules 1961.',
    iconName: 'Building',
    expectedSubsections: ['Prime Minister & Cabinet Secretariat', 'Ministry of Home Affairs (MHA) & CAPFs', 'Ministry of Finance & Revenue (CBDT/IRS)', 'Ministry of Law and Justice & Attorney General', 'DoPT & Constitutional Commissions'],
    expectedAuthorities: ['HUB-DEM-MINISTRIES', 'DEM-PM', 'DEM-CABINET-SEC', 'DEM-DOPT-SEC', 'DEM-MHA-MINISTER', 'DEM-MHA-SECRETARY', 'DEM-CAPF-HEADS', 'DEM-MOF-MINISTER', 'DEM-CBDT-IRS-REVENUE', 'DEM-MOLJ-MINISTER', 'DEM-AG-INDIA', 'DEM-ECI', 'DEM-UPSC', 'DEM-SPSC']
  },
  {
    id: 'SEC-DEM-04',
    number: '04',
    title: 'State Police Hierarchy Zone (10-Rank Linear Command: DGP to Constable)',
    subtitle: 'Schedule 7, List II, Entry 2 — Complete Law Enforcement Chain of Command',
    summary: 'Full 10-tier linear hierarchy of state police administration under Section 4 of the Police Act 1861, starting from the Director General of Police (DGP) down to the frontline Police Constable on the beat.',
    iconName: 'ShieldAlert',
    expectedSubsections: ['State Home Department', 'Apex Police Headquarters (DGP, ADGP)', 'Field Supervisory Ranks (IG, DIG, SP)', 'Sub-Divisional & Police Station Frontline (SDPO, SHO, SI, HC, Constable)'],
    expectedAuthorities: ['HUB-DEM-POLICE', 'DEM-STATE-HOME-DEPT', 'DEM-POL-DGP', 'DEM-POL-ADG', 'DEM-POL-IG', 'DEM-POL-DIG', 'DEM-POL-SP', 'DEM-POL-ASP-DSP', 'DEM-POL-SHO', 'DEM-POL-SI', 'DEM-POL-HC', 'DEM-POL-CONSTABLE']
  },
  {
    id: 'SEC-DEM-05',
    number: '05',
    title: 'State Legislature Zone (Governor, Vidhan Sabha & Vidhan Parishad)',
    subtitle: 'Articles 153-213 — State Constitutional Executive & Bicameral Legislature',
    summary: 'State constitutional structure: Governor (Constitutional Head), Chief Minister & Cabinet (Executive Head), State Legislative Assembly (Vidhan Sabha - directly elected MLAs), and State Legislative Council (Vidhan Parishad - MLCs).',
    iconName: 'Building2',
    expectedSubsections: ['Governor & Chief Minister', 'Vidhan Sabha (Legislative Assembly)', 'Vidhan Parishad (Legislative Council)', 'State Chief Secretariat'],
    expectedAuthorities: ['HUB-DEM-VIDHAN-SABHA', 'DEM-GOVERNOR', 'DEM-CM', 'DEM-CS-STATE', 'DEM-MLA', 'DEM-MLC']
  },
  {
    id: 'SEC-DEM-06',
    number: '06',
    title: 'District Field Administration & Revenue Magistracy',
    subtitle: 'Territorial Administration from Divisional Commissioner to Village Talathi',
    summary: 'The administrative backbone of Indian field governance: Divisional Commissioner, District Magistrate & Collector (DM/DC), Sub-Divisional Magistrate (SDM), Tehsildar (Executive Magistrate), and Village Talathi / Patwari.',
    iconName: 'MapPin',
    expectedSubsections: ['Divisional Revenue Administration', 'District Collectorate & Magistracy', 'Sub-Division (Prant)', 'Taluka / Tehsil Administration', 'Village Land Records (Saza)'],
    expectedAuthorities: ['HUB-DEM-MAGISTRACY', 'DEM-DIV-COMMISSIONER', 'DEM-DM-COLLECTOR', 'DEM-SDM-SUBDIV', 'DEM-TEHSILDAR-MAGISTRATE', 'DEM-TALATHI-PATWARI']
  },
  {
    id: 'SEC-DEM-07',
    number: '07',
    title: 'Urban Municipal Corporation Zone — BMC Model',
    subtitle: '74th Constitutional Amendment (Article 243W) & Mumbai Municipal Corporation Act',
    summary: 'Urban municipal self-governance exemplified by the Brihanmumbai Municipal Corporation (BMC): Municipal Commissioner (IAS Principal Executive), Mayor & Council (First Citizen), Additional Municipal Commissioners, and 227 Ward Corporators.',
    iconName: 'Building',
    expectedSubsections: ['Municipal Commissionerate (IAS)', 'Mayoral Political Executive', 'Additional Municipal Commissioners', 'Elected Ward Corporators & Ward Committees'],
    expectedAuthorities: ['HUB-DEM-BMC', 'DEM-MUNICIPAL-COMMISSIONER', 'DEM-MAYOR-COUNCIL', 'DEM-ADDL-MUNICIPAL-COMMISSIONER', 'DEM-WARD-CORPORATOR']
  },
  {
    id: 'SEC-DEM-08',
    number: '08',
    title: 'Rural Panchayati Raj Zone (Zilla Parishad to Gram Panchayat)',
    subtitle: '73rd Constitutional Amendment (Articles 243-243O) & 3-Tier Rural Governance',
    summary: 'Decentralized rural self-government: Zilla Parishad CEO (IAS) & District President (District Tier) &rarr; Block Development Officer (BDO) & Panchayat Samiti (Block Tier) &rarr; Sarpanch, Gram Sevak & Ward Panch (Village Tier).',
    iconName: 'Trees',
    expectedSubsections: ['District Zilla Parishad', 'Block Panchayat Samiti', 'Village Gram Panchayat'],
    expectedAuthorities: ['HUB-DEM-PANCHAYAT', 'DEM-ZP-CEO', 'DEM-BDO-BLOCK', 'DEM-SARPANCH', 'DEM-GRAM-SEVAK', 'DEM-WARD-PANCH']
  },
  {
    id: 'SEC-DEM-09',
    number: '09',
    title: 'Sovereign Democratic Base: Citizens & Gram Sabha',
    subtitle: 'We, The People of India — The Ultimate Sovereign Foundation (Articles 326 & 243A)',
    summary: 'The ultimate source of democratic authority in the Indian Republic. Citizens elect representatives across Parliament, Vidhan Sabha, BMC/Municipalities, and Panchayats, and directly deliberate in the Sovereign Village Gram Sabha.',
    iconName: 'Users',
    expectedSubsections: ['Universal Adult Franchise Electors', 'Sovereign Village Assembly (Gram Sabha)'],
    expectedAuthorities: ['HUB-DEM-CITIZEN', 'DEM-CITIZENS', 'DEM-GRAM-SABHA']
  }
];

export const NODES_V4: EducationNode[] = [
  // ==========================================
  // ZONE 1: APEX CONSTITUTIONAL AUTHORITY (Top Center)
  // X: 2150 - 2950, Y: 30 - 320
  // ==========================================
  {
    id: 'HUB-DEM-APEX',
    type: 'sectionHub',
    title: 'SECTION 01: APEX CONSTITUTIONAL AUTHORITY',
    abbreviation: 'HUB-APEX',
    sectionId: 'SEC-DEM-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'legislation',
    position: { x: 2335, y: 40 },
    summary: 'Supreme Constitutional Apex of the Republic of India under Articles 52-78. Formally vests all union executive power in the President of India, exercised on the aid and advice of the Council of Ministers.',
    mandate: [
      'Preserve, protect and defend the Constitution and the law of India (Article 60)',
      'Act as the supreme formal head of the sovereign Republic and Supreme Commander of Armed Forces'
    ],
    powers: [
      'Appoints Prime Minister, Cabinet Ministers, Supreme Court & High Court judges, Governors, and constitutional officers',
      'Exercises executive authority of the Union on binding aid and advice of the Union Council of Ministers (Article 74)'
    ],
    limitations: [
      'Constitutional executive acts are strictly governed by ministerial advice under Article 74',
      'Cannot exercise personal veto over sustained parliamentary legislation passed under reconsidered terms'
    ],
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PRESIDENT',
    type: 'constitutional',
    title: 'President of India (Apex Constitutional Head of State)',
    abbreviation: 'PRESIDENT-OF-INDIA',
    sectionId: 'SEC-DEM-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'legislation',
    position: { x: 2150, y: 160 },
    summary: 'The de jure Supreme Executive Head of the Republic of India and Supreme Commander of the Armed Forces (Articles 52 & 53). All union executive actions are taken in the President\'s name (Art 77). Acts on the binding aid and advice of the Union Council of Ministers headed by the Prime Minister (Art 74). Appoints the Prime Minister, Union Ministers, Governors, Chief Election Commissioner, UPSC Members, and Judges.',
    mandate: [
      'Article 52: There shall be a President of India.',
      'Article 53: Executive power of the Union is vested in the President.',
      'Article 74(1): Binding aid and advice of the Council of Ministers with PM at the head.',
      'Article 77: All executive actions of Government of India taken in President\'s name.'
    ],
    powers: [
      'Appoints the Prime Minister of India (Article 75) and other Ministers on PM\'s advice.',
      'Appoints State Governors, Chief Justice of India, Judges, CEC, and UPSC Members.',
      'Summons and prorogues Parliament sessions; dissolves the Lok Sabha on PM advice.',
      'Promulgates Presidential Ordinances during parliamentary recess (Article 123).',
      'Exercises Clemency, Pardons, and Remissions of sentences (Article 72).'
    ],
    limitations: [
      'Constitutional figurehead; 42nd & 44th Constitutional Amendments make Cabinet advice strictly binding.',
      'Subject to impeachment by Parliament for violation of the Constitution (Article 61).'
    ],
    governanceDetails: {
      positionName: 'President of the Republic of India (Head of State)',
      cadreOrService: 'Elected Supreme Constitutional Head',
      constitutionalArticle: 'Articles 52, 53, 74, 75, 77 of Constitution of India',
      electoralOrSelectionMethod: 'Indirect election by Electoral College (Elected MPs of both Houses + Elected MLAs of States/UTs)',
      tenure: '5 Years (Eligible for re-election)',
      geographicalJurisdiction: 'Territory of India (National)',
      reportingTo: 'Constitution of India (Sworn to preserve, protect, and defend)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-VICE-PRESIDENT',
    type: 'constitutional',
    title: 'Vice-President of India & Ex-Officio Chairman of Rajya Sabha',
    abbreviation: 'VP-OF-INDIA',
    sectionId: 'SEC-DEM-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'legislation',
    position: { x: 2550, y: 160 },
    summary: 'The second-highest constitutional office in India under Article 63. Functions as the Ex-Officio Chairman of the Council of States (Rajya Sabha) under Article 64, presiding over its legislative sessions and maintaining parliamentary decorum. Discharges presidential duties in case of a vacancy or absence.',
    mandate: [
      'Article 63: There shall be a Vice-President of India.',
      'Article 64: The Vice-President shall be ex-officio Chairman of the Council of States.',
      'Article 65: Acts as President during casual vacancies in the office.'
    ],
    powers: [
      'Presides over Rajya Sabha debates, rules on points of order, and admits motions.',
      'Casts tie-breaking vote (Casting Vote) in Rajya Sabha proceedings.',
      'Temporarily acts as President in the event of death, resignation, or removal until a new President is elected.'
    ],
    limitations: [
      'No vote on Rajya Sabha resolutions except in the event of an equality of votes.',
      'Cannot exercise Rajya Sabha chairman powers while acting as President of India.'
    ],
    governanceDetails: {
      positionName: 'Vice-President of India & Ex-Officio Chairman, Rajya Sabha',
      cadreOrService: 'Elected Constitutional Dignitary',
      constitutionalArticle: 'Articles 63, 64, 65, 89 of Constitution of India',
      electoralOrSelectionMethod: 'Elected by Electoral College consisting of members of both Houses of Parliament (STV)',
      tenure: '5 Years',
      geographicalJurisdiction: 'Territory of India / Rajya Sabha',
      reportingTo: 'Constitution of India & Parliament'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // ZONE 4: STATE POLICE HIERARCHY (DEDICATED LEFT COLUMN)
  // X: 150 - 950, Y: 400 - 4300
  // =========================================================================
  {
    id: 'HUB-DEM-POLICE',
    type: 'sectionHub',
    title: 'SECTION 04: STATE POLICE HIERARCHY (10-RANK LINEAR COMMAND)',
    abbreviation: 'HUB-POLICE',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'state',
    category: 'executive-administration',
    position: { x: 3015, y: 400 },
    summary: 'Schedule 7, List II, Entry 2: Complete 10-tier linear hierarchy of state police administration under Section 4 of Police Act 1861, from DGP down to Constable.',
    mandate: [
      'Maintain public order, prevent and detect crime, and enforce criminal statutes across the State',
      'Execute lawful warrants and orders issued by competent judicial authorities and District Magistrates'
    ],
    powers: [
      'Statutory powers of investigation, arrest, and search under the Code of Criminal Procedure / BNSS',
      'Hierarchical discipline and command over all uniformed police personnel under the Police Act 1861'
    ],
    limitations: [
      'Subject to general superintendence and direction of District Magistrate for district peace maintenance under Section 4',
      'Must strictly respect constitutional safeguards, fundamental rights, and statutory custody guidelines'
    ],
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-STATE-HOME-DEPT',
    type: 'department',
    title: 'State Home Department (Additional Chief Secretary — Home)',
    abbreviation: 'STATE-HOME-ACS',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'state',
    category: 'executive-administration',
    position: { x: 3040, y: 510 },
    summary: 'The administrative department of the State Government possessing statutory authority over the State Police, prisons, home guards, and public order under State List Entry 1 & 2. Led by the State Home Minister politically and the Additional Chief Secretary (Home) administratively.',
    mandate: [
      'Schedule 7, List II (State List) Entry 1: Public order.',
      'Schedule 7, List II (State List) Entry 2: Police (including railway and village police).',
      'State Police Acts and Rules of Business of State Government.'
    ],
    powers: [
      'Superintends and finances the State Police force; issues notifications for police commissioners and jurisdictions.',
      'Transfers and posts senior IPS and State Police Service officers in consultation with the Police Establishment Board.',
      'Issues preventive detention confirmations (e.g. under NSA, MPDA) and sanction for criminal prosecutions.'
    ],
    limitations: [
      'Administrative superintendence must conform to Supreme Court Prakash Singh guidelines on police operational autonomy.'
    ],
    governanceDetails: {
      positionName: 'Additional Chief Secretary (ACS) / Principal Secretary — Home Department',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex / HAG+ Scale (Pay Level 16/17)',
      constitutionalArticle: 'Schedule 7, List II Entry 1 & 2 & State Rules of Business',
      electoralOrSelectionMethod: 'Appointed by State Government headed by Chief Minister',
      tenure: 'Post governed by State Civil Services Board',
      geographicalJurisdiction: 'Entire State Territory',
      reportingTo: 'State Home Minister, Chief Minister & Chief Secretary'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-DGP',
    type: 'executive',
    title: '1. Director General of Police (DGP) — State Police Chief',
    abbreviation: 'POL-DGP',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'state',
    category: 'executive-administration',
    position: { x: 3040, y: 990 },
    summary: 'The highest-ranking police officer in the State, holding overall operational and administrative command of the entire state police force under Section 4 of the Police Act 1861. Head of Police Force (HoPF) selected from a UPSC empaneled shortlist with a statutory 2-year fixed tenure pursuant to the Supreme Court Prakash Singh judgment.',
    mandate: [
      'Section 4, Police Act 1861: The administration of the police throughout the general police-district is vested in the Director-General of Police.',
      'Supreme Court Judgment in Prakash Singh v. Union of India (2006): 2-year fixed tenure.'
    ],
    powers: [
      'Overall administrative, discipline, and operational command over all uniformed personnel in the state.',
      'Appoints and transfers police officers up to Deputy SP; chairs the State Police Establishment Board.',
      'Authorizes major law-and-order mobilization, anti-naxalite operations, and state-wide crime crackdowns.'
    ],
    limitations: [
      'Subject to general policy superintendence of the State Government; operational autonomy protected by Prakash Singh directives.'
    ],
    governanceDetails: {
      positionName: 'Director General of Police (DGP) & Head of Police Force (HoPF)',
      cadreOrService: 'Indian Police Service (IPS) — Apex Scale (Pay Level 17)',
      constitutionalArticle: 'Section 4 of Police Act 1861 & Art 311 of Constitution of India',
      electoralOrSelectionMethod: 'Selected by State Govt from panel of 3 senior-most officers empaneled by UPSC',
      tenure: 'Minimum 2-year fixed tenure (Prakash Singh directive)',
      geographicalJurisdiction: 'Entire State Police Jurisdiction',
      reportingTo: 'State Home Minister & Additional Chief Secretary (Home)'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-ADG',
    type: 'department',
    title: '2. Additional Director General of Police (ADGP)',
    abbreviation: 'POL-ADGP',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'state',
    category: 'executive-administration',
    position: { x: 3040, y: 1470 },
    summary: 'Senior police leadership commanding state-wide functional wings: Law & Order, Criminal Investigation Department (CID), Intelligence Wing, Anti-Terror Squad (ATS), Highway Police, and Special Task Forces. Also serves as Commissioner of Police in major metropolitan cities (e.g. Pune, Thane, Ahmedabad).',
    mandate: [
      'State Police Act & Police Manual: Heading specialized executive formations and major commissionerates.'
    ],
    powers: [
      'Directs state-wide intelligence collection, organized crime prosecutions, and specialized investigations.',
      'Coordinates inter-district force deployment during communal emergencies and state elections.'
    ],
    limitations: [
      'Operates under the direct operational command of the DGP.'
    ],
    governanceDetails: {
      positionName: 'Additional Director General of Police (ADGP) / Metropolitan Police Commissioner',
      cadreOrService: 'Indian Police Service (IPS) — HAG+ Scale (Pay Level 16)',
      constitutionalArticle: 'State Police Act / Code of Criminal Procedure (CrPC) Section 20',
      electoralOrSelectionMethod: 'Promoted by State Government from IG rank based on seniority & merit',
      tenure: 'Administrative posting (~2-3 years)',
      geographicalJurisdiction: 'State-wide functional wing or Metropolitan Police Commissionerate',
      reportingTo: 'Director General of Police (DGP)'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-IG',
    type: 'department',
    title: '3. Inspector General of Police (IGP / IG Range)',
    abbreviation: 'POL-IG',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'state',
    category: 'executive-administration',
    position: { x: 3040, y: 1950 },
    summary: 'Heads a territorial Police Range consisting of 3 to 6 revenue districts. Supervises District Superintendents of Police (SPs), conducts annual inspections of district police headquarters, and mobilizes inter-district reinforcements during public disorders.',
    mandate: [
      'Police Act 1861 Section 4: Administration of police in a local range.'
    ],
    powers: [
      'Superintends investigation of heinous crimes across the Range.',
      'Transfers police inspectors and officers between districts within the Range.',
      'Coordinates with the Divisional Commissioner for divisional peace and public tranquility.'
    ],
    limitations: [
      'Reports to the ADG (Law & Order) and the State DGP.'
    ],
    governanceDetails: {
      positionName: 'Inspector General of Police (IGP) — Range Head',
      cadreOrService: 'Indian Police Service (IPS) — Super Time Scale (Pay Level 14)',
      constitutionalArticle: 'Police Act 1861 & State Police Regulations',
      electoralOrSelectionMethod: 'Promoted from DIG rank based on merit and seniority',
      tenure: 'Range posting (~2-3 years)',
      geographicalJurisdiction: 'Territorial Police Range (Cluster of 3-6 Districts)',
      reportingTo: 'ADG (Law & Order) & Director General of Police (DGP)'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-DIG',
    type: 'department',
    title: '4. Deputy Inspector General of Police (DIG)',
    abbreviation: 'POL-DIG',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'state',
    category: 'executive-administration',
    position: { x: 3040, y: 2430 },
    summary: 'Senior supervisory police officer who either assists the Inspector General in running a large police range, heads a specialized range, or commands a major city as Joint Commissioner of Police. Directly inspects district crime records and ensures police integrity.',
    mandate: [
      'Police Act 1861 Section 4 & State Police Manual.'
    ],
    powers: [
      'Reviews heinous crime dossiers and monitors progress of organized crime chargesheets.',
      'Exercises disciplinary authority over Sub-Inspectors and Inspectors across the range.'
    ],
    limitations: [
      'Supervisory tier; field executive command rests with the District SP.'
    ],
    governanceDetails: {
      positionName: 'Deputy Inspector General of Police (DIG)',
      cadreOrService: 'Indian Police Service (IPS) — Selection Grade / Super Time (Pay Level 13A)',
      constitutionalArticle: 'Police Act 1861',
      electoralOrSelectionMethod: 'Promoted from SP (Selection Grade) based on annual appraisal records',
      tenure: 'Posting (~2-3 years)',
      geographicalJurisdiction: 'Police Range or City Joint Commissionerate',
      reportingTo: 'Inspector General of Police (IG)'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-SP',
    type: 'executive',
    title: '5. Superintendent of Police (SP / SSP) — District Police Chief',
    abbreviation: 'POL-SP',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'district',
    category: 'executive-administration',
    position: { x: 3040, y: 2910 },
    summary: 'The operational head of the police force in a revenue district under Section 4 of the Police Act 1861. Exercises administrative control over all police stations, armed police reserves, traffic branches, and crime branch units in the district. Under Section 4, police administration is under the general control and direction of the District Magistrate.',
    mandate: [
      'Section 4, Police Act 1861: District police administration under general control and direction of District Magistrate.',
      'Code of Criminal Procedure 1973 (CrPC) / Bharatiya Nagarik Suraksha Sanhita (BNSS).'
    ],
    powers: [
      'Directs crime prevention, maintenance of public peace, and law enforcement in the district.',
      'Transfers and posts Sub-Inspectors and Station House Officers (SHOs) within the district.',
      'Mobilizes district armed reserve force and orders anti-riot measures.'
    ],
    limitations: [
      'Under Police Act Section 4, functions under general oversight of District Magistrate for law and order.',
      'Requires judicial / executive magistrate orders for Section 144 CrPC / BNSS curfews.'
    ],
    governanceDetails: {
      positionName: 'Superintendent of Police (SP) / Senior Superintendent of Police (SSP)',
      cadreOrService: 'Indian Police Service (IPS) — Junior Administrative Grade / Selection Grade (Pay Level 11-13)',
      constitutionalArticle: 'Section 4, Police Act 1861 & State Police Regulations',
      electoralOrSelectionMethod: 'Appointed by State Government from IPS cadre or promoted State Police Service (DySP)',
      tenure: 'Minimum 2-year tenure (Prakash Singh directive)',
      geographicalJurisdiction: 'Revenue District Police Jurisdiction',
      reportingTo: 'Inspector General (operational) & District Magistrate (general law & order direction)'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-ASP-DSP',
    type: 'department',
    title: '6. Assistant / Deputy Superintendent of Police (ASP / DSP / SDPO)',
    abbreviation: 'POL-DSP',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'district',
    category: 'executive-administration',
    position: { x: 3040, y: 3390 },
    summary: 'Gazetted police officer commanding a Police Sub-Division (comprising 3 to 6 police stations), known as Sub-Divisional Police Officer (SDPO) in rural districts or Assistant Commissioner of Police (ACP) in commissionerate cities. Conducts statutory supervision of serious investigations.',
    mandate: [
      'Police Act 1861 & CrPC / BNSS provisions mandating investigation of heinous offenses by Gazetted Officer.'
    ],
    powers: [
      'Supervises police stations in the sub-division; inspects station diaries and lockups.',
      'Statutorily investigates sensitive offenses under the SC/ST (Prevention of Atrocities) Act and POCSO Act.',
      'Leads armed police deployment during communal or political flashpoints in the sub-division.'
    ],
    limitations: [
      'Under operational command of District SP; coordinates with Sub-Divisional Magistrate (SDM).'
    ],
    governanceDetails: {
      positionName: 'Sub-Divisional Police Officer (SDPO) / Deputy SP (DySP) / Assistant SP (ASP)',
      cadreOrService: 'Direct IPS (as ASP, Pay Level 10) OR State Police Service (SPS, recruited via State PSC Exam)',
      constitutionalArticle: 'State Police Act & SC/ST (PoA) Act Rules',
      electoralOrSelectionMethod: 'UPSC Civil Services Exam (for IPS) or State PSC Combined Competitive Exam (for SPS)',
      tenure: 'Sub-divisional posting (~2-3 years)',
      geographicalJurisdiction: 'Police Sub-Division (3-6 Police Stations)',
      reportingTo: 'District Superintendent of Police (SP)'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-SHO',
    type: 'department',
    title: '7. Police Inspector / Station House Officer (SHO)',
    abbreviation: 'POL-SHO',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'local',
    category: 'executive-administration',
    position: { x: 3040, y: 3870 },
    summary: 'The Officer-in-Charge of a Police Station under Section 2(o) of CrPC / BNSS. The critical frontline pillar of criminal justice administration where citizens lodge First Information Reports (FIRs) under Section 154 CrPC. Commands all station personnel, investigations, and night patrols.',
    mandate: [
      'Section 2(o), CrPC 1973: Definition of Officer-in-Charge of a Police Station.',
      'Section 154, CrPC / BNSS: Mandatory registration of First Information Report (FIR) for cognizable offenses.'
    ],
    powers: [
      'Registers FIRs, initiates formal criminal investigations, and orders searches under Section 165 CrPC.',
      'Authorizes warrantless arrest in cognizable offenses under Section 41 CrPC / BNSS.',
      'Submits Final Report / Chargesheet to the jurisdictional Judicial Magistrate under Section 173 CrPC.'
    ],
    limitations: [
      'Must produce every arrested person before the nearest Judicial Magistrate within 24 hours (Article 22(2) & Section 57 CrPC).',
      'Mandatory adherence to DK Basu arrest guidelines and CCTV monitoring.'
    ],
    governanceDetails: {
      positionName: 'Station House Officer (SHO) / Police Inspector (PI) / Senior PI',
      cadreOrService: 'State Police Subordinate Service — Class I / Class II Non-Gazetted',
      constitutionalArticle: 'Section 2(o) & 154 CrPC / BNSS & Article 22 of Constitution of India',
      electoralOrSelectionMethod: 'Promoted from Sub-Inspector rank based on service record and physical/mental fitness',
      tenure: 'Station posting (~1 to 2 years)',
      geographicalJurisdiction: 'Territorial Police Station Limits',
      reportingTo: 'Sub-Divisional Police Officer (SDPO) & District SP'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-SI',
    type: 'department',
    title: '8. Sub-Inspector of Police (SI) — Primary Investigating Officer',
    abbreviation: 'POL-SI',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'local',
    category: 'executive-administration',
    position: { x: 3040, y: 4350 },
    summary: 'The foundational investigating officer (IO) in the Indian criminal justice system empowered by law to investigate cognizable cases, draw panchanamas (seizure memos), record witness statements under Section 161 CrPC, and file chargesheets in court.',
    mandate: [
      'Section 156 & 157 CrPC: Procedure for investigation by police officer.',
      'Police Manual: In-charge of police outposts and second-in-command of police station.'
    ],
    powers: [
      'Examines witnesses, arrests suspects, recovers evidentiary property, and prepares inquest reports.',
      'Supervises beat constables and commands police patrol mobile vans (Dial 112).'
    ],
    limitations: [
      'Cannot file chargesheet without review and endorsement by the Station House Officer (SHO).'
    ],
    governanceDetails: {
      positionName: 'Sub-Inspector of Police (PSI / SI)',
      cadreOrService: 'State Police Subordinate Service — Group C Executive (Two Stars)',
      constitutionalArticle: 'Section 156, 161, 165 CrPC / BNSS',
      electoralOrSelectionMethod: 'Direct recruitment via State Police Recruitment Board (Graduate Exam + Physical Efficiency Test)',
      tenure: 'Station assignment (~2 years)',
      geographicalJurisdiction: 'Assigned Police Station Beats & Case Investigations',
      reportingTo: 'Station House Officer (SHO) / Police Inspector'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-HC',
    type: 'department',
    title: '9. Head Constable (HC) — Station Section Commander',
    abbreviation: 'POL-HC',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'local',
    category: 'executive-administration',
    position: { x: 3040, y: 4830 },
    summary: 'Senior non-commissioned police rank (wearing 3 chevrons). Acts as Station Duty Officer in charge of general diary entries, arms and ammunition kote, lockup custody, escorting prisoners to judicial courts, and heading beat patrol parties.',
    mandate: [
      'State Police Regulations: Station administration and beat supervision.'
    ],
    powers: [
      'Writes the Station Diary (Rojnamcha) recording every station occurrence.',
      'Investigates minor offenses (motor vehicle violations, simple thefts, petty brawls) when authorized by State rules.',
      'Commands armed sentry guards and prisoner escorts.'
    ],
    limitations: [
      'Cannot independently investigate heinous crimes without specific authorization.'
    ],
    governanceDetails: {
      positionName: 'Head Constable (HC) / Police Havildar',
      cadreOrService: 'State Police Constabulary — Group C (3 Chevrons)',
      constitutionalArticle: 'State Police Manual',
      electoralOrSelectionMethod: 'Promoted from Police Constable based on seniority and promotional qualifying exam',
      tenure: 'Station / Unit posting (~3 years)',
      geographicalJurisdiction: 'Police Station Beat / Guard Area',
      reportingTo: 'Sub-Inspector & Police Inspector (SHO)'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-POL-CONSTABLE',
    type: 'department',
    title: '10. Police Constable (PC) — Frontline Public Contact & Beat Patrol',
    abbreviation: 'POL-CONSTABLE',
    sectionId: 'SEC-DEM-04',
    sectionNumber: '04',
    level: 'local',
    category: 'executive-administration',
    position: { x: 3040, y: 5310 },
    summary: 'The fundamental bedrock of Indian policing comprising over 70% of the total police strength. The primary interface between the citizen and the state machinery. Responsible for foot patrols, surveillance of history-sheeters, crowd control, traffic regulation, and emergency response.',
    mandate: [
      'Police Act 1861 Section 23: Duties of police officers to obey orders, collect intelligence, prevent commission of offenses, and apprehend offenders.'
    ],
    powers: [
      'Maintains vigil in residential and market beats; gathers grassroots intelligence.',
      'Apprehends suspects in flagrante delicto (caught in the act) and preserves crime scenes.',
      'Responds as first responder to Dial 112 citizen distress calls.'
    ],
    limitations: [
      'No independent statutory powers of investigation or filing chargesheets.',
      'Must operate strictly under the direction of superior officers.'
    ],
    governanceDetails: {
      positionName: 'Police Constable (PC / Sipahi / Constable)',
      cadreOrService: 'State Police Constabulary — Group C / D Foundational Rank',
      constitutionalArticle: 'Section 23, Police Act 1861',
      electoralOrSelectionMethod: 'Direct recruitment via State Police Bharti (12th Pass + Rigorous Physical Test)',
      tenure: 'Beat / Unit posting (~3-5 years)',
      geographicalJurisdiction: 'Assigned Urban / Rural Police Beat (Mohalla / Village Cluster)',
      reportingTo: 'Head Constable, Sub-Inspector & SHO'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // ZONE 2: UNION PARLIAMENT ZONE (LOK SABHA & RAJYA SABHA)
  // X: 1450 - 2350, Y: 400 - 1100
  // =========================================================================
  {
    id: 'HUB-DEM-PARLIAMENT',
    type: 'sectionHub',
    title: 'SECTION 02: UNION PARLIAMENT ZONE (LOK SABHA & RAJYA SABHA)',
    abbreviation: 'HUB-PARLIAMENT',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    position: { x: 265, y: 400 },
    summary: 'Supreme Legislative Body of the Union (Articles 79-122). Enacts central laws, approves Union Budgets, and holds the Council of Ministers collectively accountable.',
    mandate: [
      'Enact union legislation, amend the Constitution, and deliberate national policy matters',
      'Exercise parliamentary scrutiny and financial control over the Union Executive'
    ],
    powers: [
      'Exclusive jurisdiction over Union List (List I) and Concurrent List (List III) subjects',
      'Passes the Annual Financial Statement (Budget) and holds the Council of Ministers accountable via confidence motions'
    ],
    limitations: [
      'Statutes subject to judicial review for basic structure and constitutional compliance',
      'Cannot legislate on exclusive State List (List II) subjects except during emergencies or under Article 249/252'
    ],
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-LS-SPEAKER',
    type: 'legislature',
    title: 'Speaker of the Lok Sabha (Presiding Officer of Lower House)',
    abbreviation: 'SPEAKER-LS',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    position: { x: 100, y: 510 },
    summary: 'The constitutional presiding officer of the House of the People (Article 93). Represents the collective authority of the House, certifies Money Bills (whose certification is final under Article 110), presides over Joint Sittings of Parliament (Article 118), and adjudicates anti-defection petitions under the 10th Schedule.',
    mandate: [
      'Article 93: Election of Speaker and Deputy Speaker of the Lok Sabha.',
      'Article 110(4): Final authority to certify a legislative Bill as a Money Bill.',
      'Article 118(4): Presides over joint sitting of both Houses of Parliament.',
      'Tenth Schedule: Adjudicates disqualification of MPs on grounds of defection.'
    ],
    powers: [
      'Decides parliamentary agenda, admits notices, questions, and No-Confidence Motions.',
      'Sole and final authority to certify whether a proposed bill is a Money Bill.',
      'Maintains order in the House; can suspend disorderly members.'
    ],
    limitations: [
      'Does not vote in the first instance; exercises a casting vote only in case of an equality of votes (Article 100(1)).',
      'Decisions under Tenth Schedule subject to judicial review (Kihoto Hollohan judgment).'
    ],
    governanceDetails: {
      positionName: 'Speaker of the Lok Sabha (Presiding Officer)',
      cadreOrService: 'Elected Member of Parliament (Elected by Lok Sabha MPs)',
      constitutionalArticle: 'Articles 93, 100, 110, 118 & 10th Schedule of Constitution',
      electoralOrSelectionMethod: 'Elected by majority vote of Lok Sabha Members from amongst themselves',
      tenure: 'Term of Lok Sabha (Remains in office until first meeting of newly elected House)',
      geographicalJurisdiction: 'Parliament of India (Sansad Bhavan, New Delhi)',
      reportingTo: 'House of the People (Lok Sabha)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MP-LOK-SABHA',
    type: 'legislature',
    title: 'Member of Parliament — Lok Sabha (543 Elected MPs)',
    abbreviation: 'MP-LOK-SABHA',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    position: { x: 100, y: 1050 },
    summary: 'Directly elected representative of the citizens from single-member territorial constituencies under universal adult suffrage (Article 81 & 326). Holds primary legislative, financial, and executive accountability powers. The Prime Minister and Council of Ministers must maintain confidence in this House.',
    mandate: [
      'Article 81: Composition of the House of the People (up to 543 elected territorial seats).',
      'Article 326: Elections based on Universal Adult Suffrage (every citizen age 18+).',
      'Article 109 & 113: Exclusive power over Money Bills and Demands for Grants (Budget).'
    ],
    powers: [
      'Vote on Central Legislation, Union Budgets, and Demands for Grants.',
      'Introduce Private Member Bills, ask Parliamentary Questions, and initiate Call-Attention Motions.',
      'Move and vote on No-Confidence Motions to bring down an incumbent Government.'
    ],
    limitations: [
      'Subject to anti-defection law under Tenth Schedule (party whip).',
      'Disqualified upon criminal conviction with 2+ years imprisonment under RPA Section 8.'
    ],
    governanceDetails: {
      positionName: 'Member of Parliament (MP) — Lok Sabha',
      cadreOrService: 'Directly Elected People\'s Representative',
      constitutionalArticle: 'Articles 81, 84, 101, 102, 326 of Constitution of India',
      electoralOrSelectionMethod: 'Direct Universal Adult Franchise (First-Past-The-Post in single-member constituencies)',
      tenure: '5 Years (unless House is dissolved earlier)',
      geographicalJurisdiction: 'Parliamentary Constituency (representing ~1.5 to 2.5 million citizens)',
      reportingTo: 'Constituency Electors & Speaker of Lok Sabha'
    },
    sourceIds: ['SRC-V4-CONST', 'SRC-V4-RPA'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-RS-CHAIRMAN',
    type: 'legislature',
    title: 'Rajya Sabha Presiding Hierarchy (Chairman & Deputy Chairman)',
    abbreviation: 'RS-PRESIDING',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    position: { x: 480, y: 510 },
    summary: 'Presiding hierarchy of the Council of States. Headed by the Vice-President of India as Ex-Officio Chairman (Art 89(1)), assisted by the Deputy Chairman elected by Rajya Sabha members from among themselves (Art 89(2)) to conduct proceedings in the Chairman\'s absence.',
    mandate: [
      'Article 89: The Chairman and Deputy Chairman of the Council of States.'
    ],
    powers: [
      'Regulates legislative debates, admits special mentions, and decides questions of privilege.',
      'Rules on admissibility of amendments to Ordinary and Constitutional Amendment Bills.'
    ],
    limitations: [
      'Cannot certify Money Bills (exclusive prerogative of Lok Sabha Speaker).'
    ],
    governanceDetails: {
      positionName: 'Chairman & Deputy Chairman of the Council of States',
      cadreOrService: 'Constitutional Parliamentary Presiding Officers',
      constitutionalArticle: 'Articles 89, 90, 91 of Constitution of India',
      electoralOrSelectionMethod: 'Chairman is Ex-Officio (VP); Deputy Chairman elected by Rajya Sabha members',
      tenure: 'Term of Rajya Sabha membership (Deputy Chairman: 6 years)',
      geographicalJurisdiction: 'Rajya Sabha (Parliament of India)',
      reportingTo: 'Council of States (Rajya Sabha)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MP-RAJYA-SABHA',
    type: 'legislature',
    title: 'Member of Parliament — Rajya Sabha (245 MPs - States\' Voice)',
    abbreviation: 'MP-RAJYA-SABHA',
    sectionId: 'SEC-DEM-02',
    sectionNumber: '02',
    level: 'union',
    category: 'legislation',
    position: { x: 480, y: 1050 },
    summary: 'Upper House representative reflecting India\'s federal character. 233 MPs are elected by elected MLAs of States and UTs via Proportional Representation with Single Transferable Vote (STV); 12 are nominated by the President for literature, science, art, and social service. Permanent House not subject to dissolution.',
    mandate: [
      'Article 80: Composition of the Council of States (238 state/UT reps + 12 nominated).',
      'Article 249: Special power to authorize Parliament to legislate on State List subjects in national interest.',
      'Article 312: Special power to create new All-India Services (IAS, IPS, IFoS).'
    ],
    powers: [
      'Debate, amend, and vote on Ordinary Bills and Constitutional Amendment Bills.',
      'Pass Article 312 resolutions with 2/3rd majority to create new All-India Services.',
      'Pass Article 249 resolutions to allow Parliament temporary legislation on State List.'
    ],
    limitations: [
      'Cannot reject or amend Money Bills (can only recommend changes within 14 days; Art 109).',
      'Cannot vote on Demands for Grants or express lack of confidence in Government.'
    ],
    governanceDetails: {
      positionName: 'Member of Parliament (MP) — Rajya Sabha',
      cadreOrService: 'Indirectly Elected / Nominated Federal Representative',
      constitutionalArticle: 'Articles 80, 84, 101, 102 of Constitution of India',
      electoralOrSelectionMethod: 'Elected by elected MLAs of States/UTs (Proportional Representation via Single Transferable Vote)',
      tenure: '6 Years (One-third of members retire every 2nd year; Permanent House)',
      geographicalJurisdiction: 'Electoral representation of the respective State/UT at Union level',
      reportingTo: 'State Legislative Assembly Electors & Chairman of Rajya Sabha'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // ZONE 3: CENTRAL MINISTRIES SUITE (RIGHT COLUMN)
  // X: 2800 - 4300, Y: 400 - 1400
  // =========================================================================
  {
    id: 'HUB-DEM-MINISTRIES',
    type: 'sectionHub',
    title: 'SECTION 03: CENTRAL MINISTRIES SUITE (HOME, FINANCE, LAW, DOPT)',
    abbreviation: 'HUB-MINISTRIES',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1245, y: 400 },
    summary: 'Executive machinery of the Union Government headed by the Prime Minister and Union Cabinet, directing internal security (MHA), fiscal revenue (MOF), legal counsel (MOLJ), and civil services (DoPT/UPSC).',
    mandate: [
      'Formulate and execute Union Government policies across designated ministerial portfolios',
      'Administer central statutory schemes and oversee attached departments and subordinate directorates'
    ],
    powers: [
      'Issue executive notifications, rules, and statutory guidelines under Government of India Transaction of Business Rules',
      'Direct national civil services (IAS, IPS, IRS) and allocate central budgetary resources'
    ],
    limitations: [
      'Subordinate to parliamentary legislation and financial appropriations',
      'Actions are subject to judicial review under Articles 32 and 226'
    ],
    sourceIds: ['SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-PM',
    type: 'executive',
    title: 'Prime Minister of India (Head of Government & Elected MP)',
    abbreviation: 'PRIME-MINISTER',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1080, y: 510 },
    summary: 'The de facto Chief Executive of the Republic of India and Head of Government under Article 74 & 75. Must be an elected Member of Parliament (traditionally Lok Sabha MP representing a constituency). Advises the President on ministerial appointments and portfolio allocations; chairs the Union Cabinet and National Security Council.',
    mandate: [
      'Article 74(1): There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President.',
      'Article 75(1): The Prime Minister shall be appointed by the President and the other Ministers on the advice of the PM.',
      'Article 78: Duties of Prime Minister to communicate all decisions of the Council of Ministers to the President.'
    ],
    powers: [
      'Leads the Union Cabinet and determines the national policy agenda across all ministries.',
      'Advises the President on summoning/proroguing Parliament and dissolving the Lok Sabha.',
      'Supreme operational control over the nuclear command authority and national security apparatus.'
    ],
    limitations: [
      'Collectively responsible along with the Council of Ministers to the House of the People / Lok Sabha (Art 75(3)).',
      'Must resign if the Government loses a Vote of Confidence in the Lok Sabha.'
    ],
    governanceDetails: {
      positionName: 'Prime Minister of India & Leader of Lok Sabha / Council of Ministers',
      cadreOrService: 'Elected Member of Parliament (Lok Sabha / Rajya Sabha)',
      constitutionalArticle: 'Articles 74, 75, 78 of Constitution of India',
      electoralOrSelectionMethod: 'Directly elected as MP by Citizens; appointed PM by President as leader of majority party/coalition',
      tenure: 'Term of Lok Sabha (5 Years), dependent on majority confidence',
      geographicalJurisdiction: 'Republic of India (Executive Government)',
      reportingTo: 'House of the People (Lok Sabha) & President of India (Art 78)'
    },
    sourceIds: ['SRC-V4-CONST', 'SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CABINET-SEC',
    type: 'department',
    title: 'Cabinet Secretariat (Cabinet Secretary of India)',
    abbreviation: 'CABINET-SEC',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1460, y: 510 },
    summary: 'The administrative apex of the Republic of India and senior-most civil servant in the Government of India (ranked #11 on the Table of Precedence). Directly reports to the Prime Minister. Administers the Government of India (Allocation of Business) Rules 1961, manages the Cabinet agenda, and acts as ex-officio head of the Civil Services Board.',
    mandate: [
      'Government of India (Transaction of Business) Rules 1961 & Allocation of Business Rules 1961.',
      'Head of Civil Services Board for All India Services (IAS, IPS, IFoS).'
    ],
    powers: [
      'Coordinates policy across all central ministries and resolves inter-ministerial conflicts.',
      'Prepares minutes and enforces implementation of all Union Cabinet decisions.',
      'Chairs the National Crisis Management Committee (NCMC) during national emergencies and disasters.'
    ],
    limitations: [
      'Permanent executive officer; strictly apolitical civil servant executing decisions of the Union Cabinet.'
    ],
    governanceDetails: {
      positionName: 'Cabinet Secretary to the Government of India (Senior-most Civil Servant)',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex Scale (Pay Level 18 / Cabinet Secretary Scale)',
      constitutionalArticle: 'Article 77(3) of Constitution of India & Allocation of Business Rules',
      electoralOrSelectionMethod: 'Appointed by Appointments Committee of the Cabinet (ACC) headed by Prime Minister',
      tenure: 'Fixed tenure by Government notification (typically 2-4 years)',
      geographicalJurisdiction: 'Government of India (Rashtrapati Bhavan / South Block, New Delhi)',
      reportingTo: 'Prime Minister of India'
    },
    sourceIds: ['SRC-V4-AIS', 'SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DOPT-SEC',
    type: 'department',
    title: 'Department of Personnel and Training (DoPT Secretary)',
    abbreviation: 'DOPT-SECRETARY',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1460, y: 2050 },
    summary: 'The central personnel authority of the Government of India, operating under the Prime Minister\'s Ministry of Personnel, Public Grievances and Pensions. Controls the All India Services (IAS, IPS, IFoS), civil service rules, disciplinary codes, anti-corruption vigilance policy, and liaison with UPSC.',
    mandate: [
      'All India Services Act 1951 & Civil Services (Classification, Control and Appeal) Rules.',
      'Cadre Controlling Authority for the Indian Administrative Service (IAS).'
    ],
    powers: [
      'Determines civil service recruitment vacancies, cadre allocations, and central deputation panels.',
      'Administers Central Vigilance policy, integrity rules, and civil service training (LBSNAA Mussoorie).'
    ],
    limitations: [
      'Works under the Appointments Committee of the Cabinet (ACC) chaired by the Prime Minister.'
    ],
    governanceDetails: {
      positionName: 'Secretary, Department of Personnel and Training (DoPT)',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex Scale (Pay Level 17)',
      constitutionalArticle: 'Article 309, 311, 312 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by Appointments Committee of the Cabinet (ACC)',
      tenure: 'Central posting (~2 years)',
      geographicalJurisdiction: 'Government of India (North Block, New Delhi)',
      reportingTo: 'Minister of Personnel (Prime Minister) & Cabinet Secretary'
    },
    sourceIds: ['SRC-V4-AIS'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MHA-MINISTER',
    type: 'executive',
    title: 'Union Home Minister (Ministry of Home Affairs - MHA)',
    abbreviation: 'HOME-MINISTER',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1080, y: 1050 },
    summary: 'Senior Union Cabinet Minister overseeing internal security, border management, Centre-State relations, administration of Union Territories, and central intelligence and law enforcement agencies. Exercises constitutional authority over Central Armed Police Forces.',
    mandate: [
      'Government of India (Allocation of Business) Rules 1961: Internal Security & Union Police matters.',
      'Article 355: Duty of the Union to protect every State against external aggression and internal disturbance.'
    ],
    powers: [
      'Formulates national internal security strategy and counter-terrorism policies.',
      'Commands and deploys Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG).',
      'Controls intelligence agencies (Intelligence Bureau - IB) and anti-terror agencies (NIA).'
    ],
    limitations: [
      'Public order and police are State List subjects (Schedule 7, List II Entry 1 & 2); cannot supersede state police without constitutional emergency or state consent.'
    ],
    governanceDetails: {
      positionName: 'Union Minister of Home Affairs (Cabinet Minister)',
      cadreOrService: 'Elected Member of Parliament (Cabinet Rank)',
      constitutionalArticle: 'Articles 74 & 75 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on advice of Prime Minister from among MPs',
      tenure: 'Pleasure of Prime Minister / Lok Sabha majority',
      geographicalJurisdiction: 'Republic of India (National Internal Security)',
      reportingTo: 'Prime Minister of India & Lok Sabha'
    },
    sourceIds: ['SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MOF-MINISTER',
    type: 'executive',
    title: 'Union Finance Minister (Ministry of Finance - MOF)',
    abbreviation: 'FINANCE-MINISTER',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1080, y: 2050 },
    summary: 'Union Cabinet Minister in charge of economic management, taxation, national fiscal policy, banking system, and presentation of the Annual Financial Statement (Union Budget) to Parliament under Article 112.',
    mandate: [
      'Article 112: Annual Financial Statement laid before both Houses of Parliament.',
      'Articles 265 to 281: Distribution of revenues between Union and States.'
    ],
    powers: [
      'Presents the Union Budget and Finance Bill introducing direct and indirect tax rates.',
      'Oversees the Department of Revenue, Department of Economic Affairs, and Department of Expenditure.',
      'Coordinates national GST policy as Vice-Chair/member of the GST Council.'
    ],
    limitations: [
      'Taxation and expenditure proposals require parliamentary approval by Lok Sabha under Article 265.'
    ],
    governanceDetails: {
      positionName: 'Union Minister of Finance & Corporate Affairs (Cabinet Minister)',
      cadreOrService: 'Elected Member of Parliament (Cabinet Rank)',
      constitutionalArticle: 'Articles 74, 75, 112 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on advice of Prime Minister from among MPs',
      tenure: 'Pleasure of Prime Minister / Lok Sabha majority',
      geographicalJurisdiction: 'Republic of India (National Economy & Fiscal Policy)',
      reportingTo: 'Prime Minister of India & Lok Sabha'
    },
    sourceIds: ['SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MOLJ-MINISTER',
    type: 'executive',
    title: 'Union Law Minister (Ministry of Law and Justice - MOLJ)',
    abbreviation: 'LAW-MINISTER',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1460, y: 1050 },
    summary: 'Union Cabinet Minister overseeing legislative drafting, legal affairs, administration of justice, legal aid, and liaison with the higher judiciary and Election Commission.',
    mandate: [
      'Allocation of Business Rules 1961: Legislative Department & Department of Legal Affairs.'
    ],
    powers: [
      'Drafts all Government Bills, Ordinances, and statutory rules.',
      'Processes judicial appointments to the Supreme Court and High Courts under the Collegium system.'
    ],
    limitations: [
      'Independence of the Judiciary (Article 50): Cannot direct or interfere in judicial adjudications.'
    ],
    governanceDetails: {
      positionName: 'Union Minister of Law and Justice (Cabinet Minister)',
      cadreOrService: 'Elected Member of Parliament (Cabinet Rank)',
      constitutionalArticle: 'Articles 74, 75 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on advice of Prime Minister from among MPs',
      tenure: 'Pleasure of Prime Minister',
      geographicalJurisdiction: 'Republic of India (Legal & Legislative Affairs)',
      reportingTo: 'Prime Minister of India'
    },
    sourceIds: ['SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CAPF-HEADS',
    type: 'department',
    title: 'Directors General — Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG)',
    abbreviation: 'CAPF-DG',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1080, y: 1550 },
    summary: 'Senior IPS officers serving in Apex Scale as Directors General of federal armed police formations. Responsible for national border security (BSF, ITBP, SSB), critical infrastructure protection (CISF), counter-insurgency & election security deployment (CRPF), and elite counter-terror intervention (NSG).',
    mandate: [
      'Central Reserve Police Force Act 1949, Border Security Force Act 1968, CISF Act 1968.',
      'Entry 2A of List I (Union List): Deployment of armed forces of the Union in aid of civil power.'
    ],
    powers: [
      'Operational and administrative command of over 1 million armed personnel across federal forces.',
      'Deploy battalions in aid of civil power during elections, riots, and counter-terror operations on MHA requisition.'
    ],
    limitations: [
      'When deployed in states in aid of civil power, operate in coordination with local Executive Magistrates and State Police.'
    ],
    governanceDetails: {
      positionName: 'Director General (DG), Central Armed Police Force',
      cadreOrService: 'Indian Police Service (IPS) — Apex Scale (Pay Level 17)',
      constitutionalArticle: 'Entry 2A, List I (Union List), 7th Schedule',
      electoralOrSelectionMethod: 'Empaneled by MHA and appointed by Appointments Committee of the Cabinet (ACC)',
      tenure: 'Up to superannuation (Age 60)',
      geographicalJurisdiction: 'National borders, central infrastructure, and operational deployment areas',
      reportingTo: 'Union Home Secretary & Union Home Minister'
    },
    sourceIds: ['SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CBDT-IRS-REVENUE',
    type: 'department',
    title: 'Central Board of Direct Taxes (CBDT / IRS Revenue Hierarchy)',
    abbreviation: 'CBDT-IRS',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'union',
    category: 'executive-administration',
    position: { x: 1080, y: 2550 },
    summary: 'Statutory authority under the Central Boards of Revenue Act 1963 administering direct taxes (Income Tax, Corporation Tax). Staffed by the Indian Revenue Service (IRS). Linear hierarchy: Principal Chief Commissioner of Income Tax (PCCIT) &rarr; Chief Commissioner (CCIT) &rarr; Commissioner / Pr. Commissioner (CIT) &rarr; Joint / Additional Commissioner (JCIT) &rarr; Assistant / Deputy Commissioner (ACIT) &rarr; Income Tax Officer (ITO) &rarr; Tax Inspector.',
    mandate: [
      'Income-tax Act 1961 & Central Boards of Revenue Act 1963.',
      'Article 265: No tax shall be levied or collected except by authority of law.'
    ],
    powers: [
      'Assess income tax returns, conduct search and seizure operations, and freeze illicit bank accounts.',
      'Issues statutory assessment orders, tax penalties, and criminal prosecution for tax evasion.'
    ],
    limitations: [
      'Subject to statutory tax appeals before CIT(Appeals), Income Tax Appellate Tribunal (ITAT), and High Courts.'
    ],
    governanceDetails: {
      positionName: 'Chairman, CBDT & Indian Revenue Service (IRS) Cadre Hierarchy',
      cadreOrService: 'Indian Revenue Service (IRS — Direct Taxes) — Apex to Senior Time Scale',
      constitutionalArticle: 'Central Boards of Revenue Act 1963 & Income-tax Act 1961',
      electoralOrSelectionMethod: 'IRS recruited through UPSC Civil Services Examination',
      tenure: 'Permanent civil service cadre',
      geographicalJurisdiction: 'Income Tax Regions and Assessment Circles across India',
      reportingTo: 'Revenue Secretary & Union Finance Minister'
    },
    sourceIds: ['SRC-V4-BUSINESS-RULES'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-AG-INDIA',
    type: 'constitutional',
    title: 'Attorney General for India (First Law Officer of the Republic)',
    abbreviation: 'ATTORNEY-GENERAL',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'constitutional',
    category: 'legislation',
    position: { x: 1460, y: 1550 },
    summary: 'The highest legal officer in the country appointed by the President under Article 76. Qualified to be appointed a Judge of the Supreme Court. Advises the Government of India upon legal matters, represents the Union in all Supreme Court litigation, and has the right of audience in all courts in India.',
    mandate: [
      'Article 76: Attorney-General for India appointed by the President.',
      'Article 88: Right of Attorney-General to speak and take part in proceedings of either House of Parliament.'
    ],
    powers: [
      'Appears on behalf of the Government of India in all cases in the Supreme Court.',
      'Represents the President in Article 143 Presidential Reference matters before the Supreme Court.',
      'Addresses Parliament on constitutional and statutory matters (without voting right).'
    ],
    limitations: [
      'Does not hold the right to vote in Parliament (Article 88).',
      'Holds office during the pleasure of the President of India (Article 76(4)).'
    ],
    governanceDetails: {
      positionName: 'Attorney General for India (Highest Law Officer of Union)',
      cadreOrService: 'Constitutional Legal Officer (Senior Advocate of Supreme Court)',
      constitutionalArticle: 'Articles 76 & 88 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President on advice of the Union Cabinet',
      tenure: 'Pleasure of the President (traditionally linked to Government term)',
      geographicalJurisdiction: 'All Courts in the Territory of India & Parliament',
      reportingTo: 'President of India & Union Ministry of Law and Justice'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ECI',
    type: 'constitutional',
    title: 'Election Commission of India (Chief Election Commissioner & ECs)',
    abbreviation: 'ECI-CEC',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'constitutional',
    category: 'oversight-remedies',
    position: { x: 1460, y: 3550 },
    summary: 'Autonomous constitutional authority under Article 324 vested with superintendence, direction, and control of all elections to Parliament, State Legislatures, and the offices of President and Vice-President. Enforces the Model Code of Conduct (MCC) and registers political parties.',
    mandate: [
      'Article 324: Superintendence, direction, and control of elections to be vested in an Election Commission.',
      'Representation of the People Act 1950 & 1951.'
    ],
    powers: [
      'Announces national and state election schedules; enforces Model Code of Conduct (MCC).',
      'Commands all civil and police officers on election duty under deemed central deputation.',
      'Allots election symbols, monitors campaign expenditure, and registers political parties.'
    ],
    limitations: [
      'Supreme Court judicial review over election petitions; does not conduct Panchayat/Municipal elections (handled by State Election Commissions under Art 243K/243ZA).'
    ],
    governanceDetails: {
      positionName: 'Chief Election Commissioner of India (CEC) & Election Commissioners',
      cadreOrService: 'Constitutional Oversight Head (Rank equivalent to Supreme Court Judge)',
      constitutionalArticle: 'Articles 324-329 of Constitution of India & RPA Acts',
      electoralOrSelectionMethod: 'Appointed by President on advice of Selection Committee under Chief Election Commissioner Act 2023',
      tenure: '6 Years or until Age 65 (Removal only by parliamentary impeachment like SC Judge)',
      geographicalJurisdiction: 'Republic of India (Nirvachan Sadan, New Delhi)',
      reportingTo: 'Constitution of India & Parliament of India'
    },
    sourceIds: ['SRC-V4-CONST', 'SRC-V4-RPA'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-UPSC',
    type: 'constitutional',
    title: 'Union Public Service Commission (Chairman & Members, UPSC)',
    abbreviation: 'UPSC-CHAIRMAN',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'constitutional',
    category: 'oversight-remedies',
    position: { x: 1460, y: 2550 },
    summary: 'The central recruiting agency of India established under Article 315 of the Constitution. Conducts nationwide competitive examinations for appointment to the All-India Services (IAS, IPS, IFoS), Central Civil Services (IFS, IRS), and Defence forces (NDA, CDS). Mandatory consultation on disciplinary matters under Article 320.',
    mandate: [
      'Article 315: Public Service Commission for the Union.',
      'Article 320: Functions of Public Service Commissions (Recruitment and Disciplinary Consultation).'
    ],
    powers: [
      'Conducts annual Civil Services Examination (CSE) and other national recruitments.',
      'Advises the President on promotions, cadre transfers, and major disciplinary penalties for All India Services.'
    ],
    limitations: [
      'Consultative and recruiting body; actual appointment orders are issued by the President / DoPT.'
    ],
    governanceDetails: {
      positionName: 'Chairman and Members, Union Public Service Commission (UPSC)',
      cadreOrService: 'Constitutional Commission Dignitary',
      constitutionalArticle: 'Articles 315-323 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by President of India (at least half must have held 10+ years government service)',
      tenure: '6 Years or until Age 65 (Ineligible for further employment under Central/State Govt)',
      geographicalJurisdiction: 'Republic of India (Dholpur House, New Delhi)',
      reportingTo: 'President of India (Annual Report submitted to Parliament)'
    },
    sourceIds: ['SRC-V4-CONST', 'SRC-V4-AIS'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SPSC',
    type: 'constitutional',
    title: 'State Public Service Commission (Chairman & Members, MPSC / SPSC)',
    abbreviation: 'SPSC-CHAIRMAN',
    sectionId: 'SEC-DEM-03',
    sectionNumber: '03',
    level: 'state',
    category: 'oversight-remedies',
    position: { x: 1460, y: 3050 },
    summary: 'State constitutional recruiting body under Article 315 (e.g. Maharashtra Public Service Commission - MPSC). Conducts competitive examinations for State Civil Services (Deputy Collector / Tehsildar) and State Police Service (Deputy SP).',
    mandate: [
      'Article 315 & 320: State Public Service Commission.'
    ],
    powers: [
      'Conducts state civil services examinations; recommends merit list to State Government for appointments.',
      'Mandatory consultation by State Government on disciplinary penalties against State Gazetted officers.'
    ],
    limitations: [
      'Appointed by Governor but can ONLY be removed by order of the President of India after SC inquiry (Art 317).'
    ],
    governanceDetails: {
      positionName: 'Chairman and Members, State Public Service Commission (MPSC / SPSC)',
      cadreOrService: 'State Constitutional Commission Dignitary',
      constitutionalArticle: 'Articles 315-323 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by Governor of the State (Removal exclusively by President of India under Art 317)',
      tenure: '6 Years or until Age 62',
      geographicalJurisdiction: 'State Territory',
      reportingTo: 'Governor of the State (Annual Report submitted to State Legislature)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // ZONE 5: STATE LEGISLATURE ZONE (VIDHAN SABHA & PARISHAD)
  // X: 1450 - 2100, Y: 1300 - 2000
  // =========================================================================
  {
    id: 'HUB-DEM-VIDHAN-SABHA',
    type: 'sectionHub',
    title: 'SECTION 05: STATE LEGISLATURE ZONE (VIDHAN SABHA & VIDHAN PARISHAD)',
    abbreviation: 'HUB-VIDHAN-SABHA',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    position: { x: 2225, y: 400 },
    summary: 'State Constitutional Governance & Legislative Machinery (Articles 153-213). Features the Governor, Chief Minister & Cabinet, directly elected Vidhan Sabha MLAs, and upper house Vidhan Parishad MLCs.',
    mandate: [
      'Enact state laws, vote on the State Budget, and hold the State Council of Ministers accountable',
      'Represent regional constituencies and articulate citizen grievances within the state'
    ],
    powers: [
      'Exclusive authority over State List (List II) and concurrent powers over List III subjects',
      'Passes state money bills and controls state executive administration'
    ],
    limitations: [
      'State enactments subject to President\'s assent if conflicting with Union law on Concurrent subjects (Article 254)',
      'Subordinate to constitutional basic structure and fundamental rights'
    ],
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-GOVERNOR',
    type: 'constitutional',
    title: 'Governor of the State (Constitutional Head of State)',
    abbreviation: 'GOVERNOR-STATE',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    position: { x: 2060, y: 510 },
    summary: 'The constitutional Head of the State appointed by the President of India under Article 153 & 155. Executive power of the State is vested in the Governor (Article 154), exercised on the aid and advice of the State Council of Ministers headed by the Chief Minister (Article 163), except in discretionary matters.',
    mandate: [
      'Article 153: There shall be a Governor for each State.',
      'Article 154: Executive power of the State is vested in the Governor.',
      'Article 163: Council of Ministers to aid and advise the Governor.',
      'Article 164: Appoints Chief Minister and other Ministers on CM\'s advice.'
    ],
    powers: [
      'Appoints the Chief Minister and Council of Ministers; swears in the State Government.',
      'Appoints State Advocate General, State Election Commissioner, and State PSC Chairman.',
      'Grants pardons, reprieves, and remissions of punishment under State laws (Article 161).',
      'Promulgates State Ordinances when Legislature is in recess (Article 213).'
    ],
    limitations: [
      'Constitutional head; bound by aid and advice of State Cabinet on all non-discretionary matters.',
      'Holds office during the pleasure of the President of India (Article 156).'
    ],
    governanceDetails: {
      positionName: 'Governor of the State (Constitutional Head of State)',
      cadreOrService: 'Presidentially Appointed Constitutional Dignitary',
      constitutionalArticle: 'Articles 153-164, 200, 213 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by Warrant under the hand and seal of the President of India',
      tenure: '5 Years (Subject to pleasure of the President)',
      geographicalJurisdiction: 'Territory of the respective State',
      reportingTo: 'President of India & Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CM',
    type: 'executive',
    title: 'Chief Minister of the State (Head of State Government & MLA)',
    abbreviation: 'CHIEF-MINISTER',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'executive-administration',
    position: { x: 2440, y: 510 },
    summary: 'The de facto Chief Executive of the State Government and Head of the State Council of Ministers under Article 163 & 164. Directly elected as an MLA (or MLC). Recommends appointment and portfolios of State Ministers, leads the State Cabinet, and directs state policy.',
    mandate: [
      'Article 163(1): Council of Ministers with Chief Minister at the head to aid and advise the Governor.',
      'Article 164(1): Chief Minister appointed by the Governor; other Ministers appointed on CM\'s advice.',
      'Article 167: Duties of Chief Minister to furnish information to the Governor.'
    ],
    powers: [
      'Directs state policies, development schemes, infrastructure projects, and state budgets.',
      'Heads the State Cabinet; oversees all state administrative departments.',
      'Advises Governor on summoning/proroguing State Assembly and dissolving the Vidhan Sabha.'
    ],
    limitations: [
      'Council of Ministers is collectively responsible to the State Legislative Assembly (Vidhan Sabha; Art 164(2)).',
      'Must maintain legislative majority confidence to remain in office.'
    ],
    governanceDetails: {
      positionName: 'Chief Minister of the State (Head of State Government)',
      cadreOrService: 'Elected Member of Legislative Assembly / Council (MLA / MLC)',
      constitutionalArticle: 'Articles 163, 164, 167 of Constitution of India',
      electoralOrSelectionMethod: 'Elected as MLA by citizens; appointed CM by Governor as majority leader',
      tenure: 'Term of Legislative Assembly (5 Years), dependent on majority confidence',
      geographicalJurisdiction: 'Territory of the State',
      reportingTo: 'State Legislative Assembly (Vidhan Sabha) & Governor (Art 167)'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MLA',
    type: 'legislature',
    title: 'Member of Legislative Assembly (MLA — Vidhan Sabha, Directly Elected)',
    abbreviation: 'MLA-VIDHAN-SABHA',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    position: { x: 2060, y: 1530 },
    summary: 'Directly elected representative of the citizens to the State Legislative Assembly (Vidhan Sabha) under universal adult suffrage (Article 170 & 326). E.g., 288 MLAs in Maharashtra. Enacts state legislation across State List and Concurrent List, passes State Budgets, and holds Government accountable.',
    mandate: [
      'Article 170: Composition of the Legislative Assemblies (direct election from territorial constituencies).',
      'Article 246(3): Exclusive power to make laws for State on matters in List II (State List).'
    ],
    powers: [
      'Debates, amends, and votes on State Bills, State Budgets, and taxation proposals.',
      'Introduces constituency issues, questions state ministers, and moves adjournment motions.',
      'Votes in the election of the President of India (Art 54) and Rajya Sabha MPs (Art 80).'
    ],
    limitations: [
      'Subject to Tenth Schedule anti-defection provisions under Speaker\'s adjudication.',
      'State laws are subject to Presidential assent if conflicting with Central laws (Article 254).'
    ],
    governanceDetails: {
      positionName: 'Member of Legislative Assembly (MLA) — Vidhan Sabha',
      cadreOrService: 'Directly Elected State People\'s Representative',
      constitutionalArticle: 'Articles 170, 173, 190, 191, 326 of Constitution of India',
      electoralOrSelectionMethod: 'Direct Election by Citizens under Universal Adult Suffrage (FPTP in Assembly constituency)',
      tenure: '5 Years (unless Assembly is dissolved earlier)',
      geographicalJurisdiction: 'Assembly Constituency (representing ~200,000 to 400,000 citizens)',
      reportingTo: 'Constituency Electors & Speaker of Vidhan Sabha'
    },
    sourceIds: ['SRC-V4-CONST', 'SRC-V4-RPA'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MLC',
    type: 'legislature',
    title: 'Member of Legislative Council (MLC — Vidhan Parishad, Upper House)',
    abbreviation: 'MLC-VIDHAN-PARISHAD',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'legislation',
    position: { x: 2440, y: 1530 },
    summary: 'Member of the State Legislative Council (Vidhan Parishad) in bicameral states (e.g. Maharashtra, UP, Bihar, Karnataka). Composed of representatives elected by MLAs, Local Authorities, Graduates, Teachers, and Governor nominees.',
    mandate: [
      'Article 171: Composition of the Legislative Councils of States.',
      'Article 197: Restriction on powers of Legislative Council as to Bills other than Money Bills.'
    ],
    powers: [
      'Scrutinizes and debates state legislation passed by the Legislative Assembly.',
      'Deliberates on state policies and represents specialized functional constituencies (Teachers, Graduates, Local Bodies).'
    ],
    limitations: [
      'Cannot defeat Money Bills; can delay Ordinary Bills for at most 4 months total.'
    ],
    governanceDetails: {
      positionName: 'Member of Legislative Council (MLC) — Vidhan Parishad',
      cadreOrService: 'Indirectly Elected / Nominated State Upper House Member',
      constitutionalArticle: 'Articles 171 & 173 of Constitution of India',
      electoralOrSelectionMethod: 'Elected by MLAs (1/3rd), Local Bodies (1/3rd), Graduates (1/12th), Teachers (1/12th) & Nominated by Governor (1/6th)',
      tenure: '6 Years (One-third retire every 2 years; Permanent House)',
      geographicalJurisdiction: 'State of Maharashtra / Bicameral State',
      reportingTo: 'Chairman, Maharashtra Legislative Council'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CS-STATE',
    type: 'department',
    title: 'Chief Secretary to the State Government (Administrative Head of State)',
    abbreviation: 'CHIEF-SECRETARY',
    sectionId: 'SEC-DEM-05',
    sectionNumber: '05',
    level: 'state',
    category: 'executive-administration',
    position: { x: 2250, y: 1030 },
    summary: 'The administrative leader of the State Civil Services and senior-most IAS officer in the state government. Secretary to the State Cabinet, head of the General Administration Department (GAD), and chair of the State Civil Services Board. Directs state administrative machinery and field governance.',
    mandate: [
      'State Rules of Business under Article 166(3) of Constitution of India.',
      'All India Services Act 1951: Cadre management and discipline of state cadre civil servants.'
    ],
    powers: [
      'Coordinates all state government departments, secretariats, and directorates.',
      'Advises the Chief Minister on senior administrative postings (Divisional Commissioners, Collectors, Dept Secretaries).',
      'Chairs the State Disaster Management Executive Committee during floods, droughts, and emergencies.'
    ],
    limitations: [
      'Apolitical civil servant implementing policy decisions of the State Cabinet.'
    ],
    governanceDetails: {
      positionName: 'Chief Secretary to the State Government',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex Scale (Pay Level 17)',
      constitutionalArticle: 'Article 166(3) Rules of Business & Article 311 of Constitution of India',
      electoralOrSelectionMethod: 'Appointed by State Government headed by Chief Minister from senior-most IAS officers',
      tenure: 'Post governed by State executive order (typically 2-3 years)',
      geographicalJurisdiction: 'Entire State Administration (State Secretariat - Mantralaya / Sachivalaya)',
      reportingTo: 'Chief Minister of the State'
    },
    sourceIds: ['SRC-V4-AIS'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // ZONE 6: DISTRICT FIELD ADMINISTRATION & REVENUE MAGISTRACY
  // X: 1450 - 2100, Y: 2200 - 3350
  // =========================================================================
  {
    id: 'HUB-DEM-MAGISTRACY',
    type: 'sectionHub',
    title: 'SECTION 06: DISTRICT ADMINISTRATION & REVENUE MAGISTRACY',
    abbreviation: 'HUB-MAGISTRACY',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'district',
    category: 'executive-administration',
    position: { x: 3615, y: 400 },
    summary: 'The territorial backbone of Indian civil governance: Divisional Commissioner, District Magistrate & Collector (DM/DC), Sub-Divisional Magistrate (SDM), Tehsildar, and Village Talathi / Patwari.',
    mandate: [
      'Administer district land revenue, maintain public peace, and coordinate all state government departments',
      'Ensure crisis and disaster management across sub-divisions, tehsils, and revenue villages'
    ],
    powers: [
      'Preventive magisterial powers under Section 144 CrPC / BNSS and supervisory control over police under Section 4 Police Act',
      'Head of district development administration, revenue collection, and statutory licensing'
    ],
    limitations: [
      'Executive decisions subject to writ jurisdiction of the High Court and statutory appellate tribunals',
      'Cannot exercise regular judicial trial powers separated under Article 50'
    ],
    sourceIds: ['SRC-V4-AIS', 'SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DIV-COMMISSIONER',
    type: 'department',
    title: 'Divisional Commissioner (Head of Revenue Division)',
    abbreviation: 'DIV-COMMISSIONER',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'state',
    category: 'executive-administration',
    position: { x: 3640, y: 510 },
    summary: 'Senior IAS officer (Principal Secretary / Secretary rank) heading an administrative Revenue Division comprising 4 to 7 revenue districts (e.g. Konkan, Pune, Nashik, Chhatrapati Sambhajinagar divisions). Supervises District Collectors, hears appellate land revenue appeals, and coordinates inter-district administration.',
    mandate: [
      'State Land Revenue Code: Appellate revenue authority over District Collectors.',
      'State Police Acts: Coordination of divisional law and order with Range IG.'
    ],
    powers: [
      'Hears 2nd appeals on land disputes, tenancy claims, and agricultural land conversions.',
      'Supervises public distribution system, rural employment, and election logistics across the Division.',
      'Coordinates regional disaster relief and major regional infrastructure projects.'
    ],
    limitations: [
      'Supervisory and appellate tier; direct field implementation rests with District Collectors.'
    ],
    governanceDetails: {
      positionName: 'Divisional Commissioner (Revenue Division Head)',
      cadreOrService: 'Indian Administrative Service (IAS) — Super Time / HAG Scale (Pay Level 14/15)',
      constitutionalArticle: 'State Land Revenue Code & CrPC provisions',
      electoralOrSelectionMethod: 'Appointed by State Government from senior IAS cadre officers',
      tenure: 'Divisional posting (~2-3 years)',
      geographicalJurisdiction: 'Revenue Division (Cluster of 4-7 Districts)',
      reportingTo: 'Revenue Secretary & Chief Secretary'
    },
    sourceIds: ['SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-DM-COLLECTOR',
    type: 'executive',
    title: 'District Magistrate & Collector (DM / DC / District Collector)',
    abbreviation: 'DM-COLLECTOR',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'district',
    category: 'executive-administration',
    position: { x: 3640, y: 1030 },
    summary: 'The administrative linchpin of field governance in India. Triple-hatted role: (1) District Collector (head of land revenue, survey, recovery, and custodian of government lands); (2) District Magistrate (head of executive magistracy, Section 144 CrPC, preventive detention, arms licenses, general superintendence of police under Police Act S.4); (3) District Election Officer (conducts parliamentary and assembly elections).',
    mandate: [
      'Code of Criminal Procedure 1973 (CrPC) Section 20 / BNSS: District Magistrate.',
      'Section 4, Police Act 1861: Police administration under general control and direction of DM.',
      'State Land Revenue Code: District Collector & Chief Revenue Officer.',
      'Representation of the People Act 1950/1951: District Election Officer (DEO).'
    ],
    powers: [
      'Imposes curfew and prohibitory orders under Section 144 CrPC / BNSS during threats to public order.',
      'Exercises general superintendence and direction over the District SP for law and order.',
      'Issues arms licenses, explosive permits, cinema licenses, and preventive detention orders.',
      'Coordinates all line departments (Health, PWD, Agriculture, Education, Disaster Management).'
    ],
    limitations: [
      'Separation of Judiciary from Executive (Article 50): DM handles Executive Magistracy; judicial criminal trials are conducted exclusively by Judicial Magistrates under the High Court.'
    ],
    governanceDetails: {
      positionName: 'District Collector & District Magistrate (DM / DC) & District Election Officer (DEO)',
      cadreOrService: 'Indian Administrative Service (IAS) — Senior Time / Selection Grade (Pay Level 11-13)',
      constitutionalArticle: 'CrPC Section 20, Police Act S.4, RPA 1951 Section 24, State Land Revenue Code',
      electoralOrSelectionMethod: 'Appointed by State Government from IAS cadre or promoted State Civil Service (Deputy Collector)',
      tenure: 'District assignment (~2 to 3 years)',
      geographicalJurisdiction: 'Revenue District (Territorial District Jurisdiction)',
      reportingTo: 'Divisional Commissioner, Chief Secretary & State Government'
    },
    sourceIds: ['SRC-V4-AIS', 'SRC-V4-POLICE-ACT', 'SRC-V4-RPA'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SDM-SUBDIV',
    type: 'department',
    title: 'Sub-Divisional Magistrate / Sub-Divisional Officer (SDM / SDO / Prant)',
    abbreviation: 'SDM-SUBDIV',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'district',
    category: 'executive-administration',
    position: { x: 3640, y: 1550 },
    summary: 'Executive Magistrate and administrative head of a Sub-Division (comprising 2 to 4 Talukas/Tehsils). Exercises executive magisterial powers under Sections 107-110, 133, and 145 CrPC, handles land acquisition, hears revenue appeals against Tehsildar orders, and coordinates field revenue administration.',
    mandate: [
      'Code of Criminal Procedure 1973 Section 20 & 23: Sub-Divisional Magistrate.',
      'State Land Revenue Code: Sub-Divisional Officer (SDO) / Prant Officer.'
    ],
    powers: [
      'Passes conditional orders for removal of public nuisances under Section 133 CrPC.',
      'Conducts inquests into custodial deaths and dowry deaths under Section 176 CrPC.',
      'Exercises appellate jurisdiction over revenue and mutation entries decided by Tehsildar.'
    ],
    limitations: [
      'Reports to the District Magistrate; executive magisterial decisions subject to Sessions Court / High Court revision.'
    ],
    governanceDetails: {
      positionName: 'Sub-Divisional Magistrate (SDM) / Sub-Divisional Officer (SDO) / Prant Officer',
      cadreOrService: 'Direct IAS (Junior Time Scale, Pay Level 10) OR State Civil Service (Deputy Collector / PCS)',
      constitutionalArticle: 'CrPC Section 20, 23 & State Land Revenue Code',
      electoralOrSelectionMethod: 'UPSC Civil Services Exam (IAS) or State PSC Class-1 Exam (Deputy Collector)',
      tenure: 'Sub-divisional assignment (~2 years)',
      geographicalJurisdiction: 'Sub-Division (Cluster of 2-4 Talukas)',
      reportingTo: 'District Collector & District Magistrate (DM)'
    },
    sourceIds: ['SRC-V4-AIS', 'SRC-V4-POLICE-ACT'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-TEHSILDAR-MAGISTRATE',
    type: 'department',
    title: 'Tehsildar / Talukdar (Executive Magistrate & Taluka Head)',
    abbreviation: 'TEHSILDAR',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'district',
    category: 'executive-administration',
    position: { x: 3640, y: 2070 },
    summary: 'The administrative chief of a Taluka / Tehsil, serving as Executive Magistrate under Section 20 CrPC, Assistant Electoral Registration Officer (AERO), and chief revenue and recovery officer. Manages circle revenue officers, issues caste and income certificates, and executes disaster relief.',
    mandate: [
      'State Land Revenue Code: Tehsildar as Chief Taluka Revenue Officer and Mamlatdar.',
      'CrPC Section 20: Executive Magistrate of the Tehsil.'
    ],
    powers: [
      'Maintains land records (Record of Rights - 7/12 extract), decides mutation entries (Ferfar).',
      'Presides over Mamlatdar Courts deciding boundary disputes and farm road access rights.',
      'Issues official certificates (Caste, Domicile, Non-Creamy Layer, Income, Solvency).'
    ],
    limitations: [
      'Revenue court orders appealable before the Sub-Divisional Officer (SDO).'
    ],
    governanceDetails: {
      positionName: 'Tehsildar / Mamlatdar / Executive Magistrate',
      cadreOrService: 'State Civil Service — Class I / Class II Gazetted Revenue Service',
      constitutionalArticle: 'State Land Revenue Code, Mamlatdar Courts Act & CrPC Section 20',
      electoralOrSelectionMethod: 'Recruited via State Public Service Commission (State PSC) or promoted Naib Tehsildar',
      tenure: 'Taluka posting (~2-3 years)',
      geographicalJurisdiction: 'Taluka / Tehsil Jurisdiction',
      reportingTo: 'Sub-Divisional Officer (SDO) & District Collector'
    },
    sourceIds: ['SRC-V4-AIS'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-TALATHI-PATWARI',
    type: 'department',
    title: 'Talathi / Patwari / Village Accountant (Village Land Records)',
    abbreviation: 'TALATHI-PATWARI',
    sectionId: 'SEC-DEM-06',
    sectionNumber: '06',
    level: 'local',
    category: 'executive-administration',
    position: { x: 3640, y: 2590 },
    summary: 'The grass-roots village revenue official custodian of all village land records, land ownership mutations, crop inspection registers (Pik Pahani), and agricultural damage assessments (Panchnama) during natural calamities.',
    mandate: [
      'State Land Revenue Code: Village Accountant maintaining Record of Rights under Section 148.'
    ],
    powers: [
      'Maintains and updates Village Land Registers, Record of Rights (7/12 & 8A extracts).',
      'Enters mutation notes (Pencil entries / Ferfar) on sale deeds, inheritance, or bank mortgages.',
      'Conducts ground crop inspection and prepares drought/flood relief crop loss panchnamas.'
    ],
    limitations: [
      'Mutations subject to statutory certification by the Circle Officer / Naib Tehsildar.'
    ],
    governanceDetails: {
      positionName: 'Talathi / Patwari / Village Accountant / Lekhpal',
      cadreOrService: 'District Subordinate Revenue Cadre — Group C Non-Gazetted',
      constitutionalArticle: 'State Land Revenue Code & Rules',
      electoralOrSelectionMethod: 'Recruited by District Selection Committee / State Staff Selection Board',
      tenure: 'Saza (circle of 2-4 villages) posting (~3 years)',
      geographicalJurisdiction: 'Talathi Saza (Cluster of 1-3 Revenue Villages)',
      reportingTo: 'Circle Officer, Circle Inspector & Tehsildar'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // ZONE 7: URBAN MUNICIPAL CORPORATION ZONE (BMC MODEL)
  // X: 2900 - 3900, Y: 2200 - 3200
  // =========================================================================
  {
    id: 'HUB-DEM-BMC',
    type: 'sectionHub',
    title: 'SECTION 07: URBAN MUNICIPAL CORPORATION — BMC (BRIHANMUMBAI MODEL)',
    abbreviation: 'HUB-BMC',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'local',
    category: 'executive-administration',
    position: { x: 4240, y: 400 },
    summary: 'Urban municipal self-governance under 74th Amendment (Art 243W) and Mumbai Municipal Corporation Act (MMC Act 1888), highlighting the Commissioner-Council structure of India\'s richest civic body.',
    mandate: [
      'Deliver civic infrastructure, urban sanitation, public health, primary education, and roads in Brihanmumbai',
      'Implement urban planning, building regulations, and property tax administration under MMC Act 1888'
    ],
    powers: [
      'Statutory executive powers vested in the Municipal Commissioner by Section 64 of MMC Act 1888',
      'Deliberative authority and budget sanction vested in the Municipal Corporation and Standing Committee'
    ],
    limitations: [
      'Subject to superintendence and policy directives of the State Urban Development Department',
      'All major capital projects and loan sanctions subject to Corporation and Standing Committee approvals'
    ],
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'executive',
    title: 'Municipal Commissioner / BMC Chief (IAS Principal Executive Officer)',
    abbreviation: 'BMC-COMMISSIONER',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'local',
    category: 'executive-administration',
    position: { x: 4240, y: 510 },
    summary: 'The statutory Principal Executive Officer of the Municipal Corporation (e.g. BMC Mumbai). A senior IAS officer (Additional Chief Secretary / Principal Secretary rank) in whom the entire executive power of the corporation is vested by statute (Section 54 of the MMC Act 1888). Runs the municipal administration, water supply, health, coastal roads, and annual civic budget (~₹50,000+ Crore).',
    mandate: [
      '74th Constitutional Amendment Act 1992 (Article 243W & 12th Schedule).',
      'Mumbai Municipal Corporation Act 1888 (Section 54: Entire executive power vests in Commissioner).'
    ],
    powers: [
      'Executes all resolutions and infrastructure projects approved by the elected General Body.',
      'Prepares and presents the annual Municipal Budget; manages civic hospitals, water reservoirs, and sewage.',
      'Acts as planning authority: sanctions building plans, evicts encroachments, issues trade permits.'
    ],
    limitations: [
      'Accountable to the elected Corporation Council for budgetary allocations and civic bylaws.'
    ],
    governanceDetails: {
      positionName: 'Municipal Commissioner & Chief Executive Officer (BMC / City Corporation)',
      cadreOrService: 'Indian Administrative Service (IAS) — Apex / HAG+ Scale (Pay Level 16/17)',
      constitutionalArticle: 'Article 243W & 12th Schedule of Constitution & State Municipal Corp Acts',
      electoralOrSelectionMethod: 'Appointed by State Government from IAS cadre',
      tenure: 'City posting (~2 to 3 years)',
      geographicalJurisdiction: 'Brihanmumbai Municipal Corporation Limits (Greater Mumbai / City)',
      reportingTo: 'State Urban Development Department & Elected Municipal Council'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-MAYOR-COUNCIL',
    type: 'legislature',
    title: 'Mayor of the City & Corporation General Body (First Citizen of City)',
    abbreviation: 'BMC-MAYOR',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'local',
    category: 'legislation',
    position: { x: 4240, y: 1030 },
    summary: 'The elected political head and First Citizen of the city. Elected by the municipal corporators, presiding over the General Body meetings and Standing Committee of the Municipal Corporation. Deliberates on municipal policies, reviews civic works, and represents the city.',
    mandate: [
      'Article 243R & 243S: Composition of Municipalities and Ward Committees.',
      '12th Schedule of Constitution of India: 18 urban municipal functional domains.'
    ],
    powers: [
      'Presides over monthly Corporation meetings; debates city development, health, and education.',
      'Approves municipal taxation rates, developmental contracts, and city master plans.',
      'Represents the city in civic functions, international municipal partnerships, and state delegations.'
    ],
    limitations: [
      'Under the Commissioner-type municipal model, executive implementation is vested in the Municipal Commissioner, not the Mayor.'
    ],
    governanceDetails: {
      positionName: 'Mayor of the City & President of Municipal Corporation Council',
      cadreOrService: 'Elected Urban Political Dignitary (First Citizen of the City)',
      constitutionalArticle: 'Articles 243Q, 243R, 243S, 243W & 12th Schedule',
      electoralOrSelectionMethod: 'Elected by majority vote of elected Ward Corporators',
      tenure: '2.5 to 5 Years (governed by State Municipal Corporation Act)',
      geographicalJurisdiction: 'Municipal Corporation City Limits',
      reportingTo: 'City Electors & General Body of Corporators'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ADDL-MUNICIPAL-COMMISSIONER',
    type: 'department',
    title: 'Additional Municipal Commissioners (IAS Functional Chiefs — Projects, Health, City)',
    abbreviation: 'ADDL-MC-BMC',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'local',
    category: 'executive-administration',
    position: { x: 4240, y: 1550 },
    summary: 'Senior IAS officers (typically 4 in BMC: Projects, Western Suburbs, Eastern Suburbs, City) assisting the Municipal Commissioner in executing mega infrastructure (Coastal Road, Sewage Disposal), public health hospitals (KEM, Sion, Nair), and ward administration.',
    mandate: [
      'Mumbai Municipal Corporation Act 1888: Delegation of Commissioner\'s powers.'
    ],
    powers: [
      'Commands zonal Deputy Municipal Commissioners (DMCs) and Assistant Municipal Commissioners (Ward Officers).',
      'Sanctions engineering contracts, hospital tenders, and road reconstruction projects.'
    ],
    limitations: [
      'Functions under the administrative and statutory authority of the Municipal Commissioner.'
    ],
    governanceDetails: {
      positionName: 'Additional Municipal Commissioner (AMC) — Projects / City / Suburbs',
      cadreOrService: 'Indian Administrative Service (IAS) — Super Time Scale (Pay Level 14)',
      constitutionalArticle: 'MMC Act 1888 & State Urban Development Rules',
      electoralOrSelectionMethod: 'Appointed by State Government from senior IAS cadre',
      tenure: 'City posting (~2-3 years)',
      geographicalJurisdiction: 'Designated Zones / Portfolios within Municipal Corporation',
      reportingTo: 'Municipal Commissioner'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-WARD-CORPORATOR',
    type: 'legislature',
    title: 'Ward Corporator / Municipal Councillor (227 BMC Wards & Ward Committees)',
    abbreviation: 'WARD-CORPORATOR',
    sectionId: 'SEC-DEM-07',
    sectionNumber: '07',
    level: 'local',
    category: 'legislation',
    position: { x: 4240, y: 2070 },
    summary: 'Directly elected urban ward representative representing an electoral ward (e.g. 227 wards in BMC Mumbai, ~50,000 citizens per ward). Sits in the General Body and Ward Committees under Article 243S, addresses local water, sewage, and street grievances, and utilizes Councillor Ward Funds.',
    mandate: [
      'Article 243R: Election of Municipal Councillors directly by ward voters.',
      'Article 243S: Constitution of Ward Committees in urban areas.'
    ],
    powers: [
      'Votes on resolutions in the Municipal Corporation General Body and Ward Committee.',
      'Recommends local civic works (paving, LED lighting, drainage) from municipal ward funds.',
      'Certifies local residential identity, hardship, and welfare scheme eligibility.'
    ],
    limitations: [
      'Legislative representative; execution carried out by Assistant Municipal Commissioner (Ward Officer / Ward A-T).'
    ],
    governanceDetails: {
      positionName: 'Ward Corporator / Municipal Councillor (Nagar Sevak)',
      cadreOrService: 'Directly Elected Urban Local Representative',
      constitutionalArticle: 'Article 243R, 243S of Constitution of India',
      electoralOrSelectionMethod: 'Direct Election by Urban Ward Voters under Universal Adult Suffrage',
      tenure: '5 Years',
      geographicalJurisdiction: 'Municipal Electoral Ward (Ward 1 to 227 in BMC)',
      reportingTo: 'Ward Citizens & Municipal Corporation General Body'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // ZONE 8: RURAL PANCHAYATI RAJ (ZILLA PARISHAD TO GRAM PANCHAYAT)
  // X: 1450 - 2100, Y: 3500 - 4350
  // =========================================================================
  {
    id: 'HUB-DEM-PANCHAYAT',
    type: 'sectionHub',
    title: 'SECTION 08: RURAL PANCHAYATI RAJ (3-TIER LOCAL GOVERNANCE)',
    abbreviation: 'HUB-PANCHAYAT',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'district',
    category: 'executive-administration',
    position: { x: 4620, y: 400 },
    summary: '73rd Constitutional Amendment (Articles 243-243O) & 11th Schedule: 3-tier decentralized rural self-governance from Zilla Parishad down to Village Gram Panchayat.',
    mandate: [
      'Plan and implement rural economic development and social justice schemes under 11th Schedule',
      'Deliver local civic amenities, rural water supply, sanitation, and primary education'
    ],
    powers: [
      'Levy authorized local village taxes, fees, and tolls under State Panchayati Raj Acts',
      'Execute central and state rural development programs (e.g. MGNREGS, rural roads)'
    ],
    limitations: [
      'Financially dependent on State Finance Commission awards and central grant allocations',
      'Panchayat resolutions subject to state government audit and statutory oversight'
    ],
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-ZP-CEO',
    type: 'executive',
    title: 'Chief Executive Officer, Zilla Parishad (ZP CEO — IAS District Rural Head)',
    abbreviation: 'ZP-CEO',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'district',
    category: 'executive-administration',
    position: { x: 4620, y: 510 },
    summary: 'The administrative chief of rural development and Panchayati Raj in the district under the 73rd Constitutional Amendment. A senior IAS officer exercising executive powers over primary education (Zilla Parishad schools), rural health (PHCs), rural roads, and drinking water supply.',
    mandate: [
      '73rd Constitutional Amendment Act 1992 (Article 243G & 11th Schedule).',
      'State Zilla Parishads and Panchayat Samitis Acts: Executive power vested in the CEO.'
    ],
    powers: [
      'Commands all district rural development departments: Rural Water, Agriculture, Women & Child, Education.',
      'Appoints and transfers Zilla Parishad cadre employees (Primary teachers, Gram Sevaks, Anganwadi supervisors).',
      'Executes central and state rural development schemes (MGNREGA, PMAY-Gramin, Jal Jeevan Mission).'
    ],
    limitations: [
      'Executes resolutions of the elected Zilla Parishad General Body headed by the ZP President.'
    ],
    governanceDetails: {
      positionName: 'Chief Executive Officer (CEO), Zilla Parishad',
      cadreOrService: 'Indian Administrative Service (IAS) — Senior Time Scale (Pay Level 11-12)',
      constitutionalArticle: 'Article 243G & 11th Schedule of Constitution & State ZP Acts',
      electoralOrSelectionMethod: 'Appointed by State Government from IAS cadre',
      tenure: 'District assignment (~2 to 3 years)',
      geographicalJurisdiction: 'Rural District Jurisdiction (Excluding Municipal Corporation areas)',
      reportingTo: 'Divisional Commissioner & State Rural Development Department'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-BDO-BLOCK',
    type: 'department',
    title: 'Block Development Officer (BDO — Panchayat Samiti Intermediate Tier)',
    abbreviation: 'BDO-BLOCK',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'executive-administration',
    position: { x: 4620, y: 1030 },
    summary: 'Executive Officer of the intermediate Panchayati Raj tier (Panchayat Samiti / Block) under Article 243B. Coordinates rural development across 40 to 100 villages, supervises Gram Sevaks, and inspects village development projects.',
    mandate: [
      'Article 243B: Intermediate tier of Panchayats (Panchayat Samiti).',
      'State Panchayati Raj Acts: Executive Officer to Panchayat Samiti.'
    ],
    powers: [
      'Sanctions developmental funds and welfare scheme subsidies across village panchayats.',
      'Directs MGNREGA employment projects and releases village scheme payments.',
      'Supervises Gram Sevaks and monitors Gram Panchayat statutory compliance.'
    ],
    limitations: [
      'Under direct administrative control of Zilla Parishad CEO; executes decisions of Panchayat Samiti.'
    ],
    governanceDetails: {
      positionName: 'Block Development Officer (BDO) / Taluka Development Officer (TDO)',
      cadreOrService: 'State Rural Development Service — Class I Gazetted Officer',
      constitutionalArticle: 'Article 243B & 243G of Constitution of India',
      electoralOrSelectionMethod: 'Recruited via State PSC Combined Competitive Exam or promoted Extension Officer',
      tenure: 'Block posting (~2-3 years)',
      geographicalJurisdiction: 'Development Block (CD Block / Taluka Rural)',
      reportingTo: 'Chief Executive Officer, Zilla Parishad'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-SARPANCH',
    type: 'executive',
    title: 'Sarpanch / Village Pradhan (Constitutional Head of Gram Panchayat)',
    abbreviation: 'SARPANCH',
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'executive-administration',
    position: { x: 4620, y: 1550 },
    summary: 'The elected constitutional head and political executive of the Gram Panchayat under Article 243D. Directly elected by all village adult voters (or by Ward Panchs, depending on state law). Chairs meetings of the Gram Panchayat and convenes mandatory sessions of the Sovereign Village Gram Sabha.',
    mandate: [
      '73rd Constitutional Amendment Act 1992 (Article 243C & 243D).',
      'State Village Panchayats Act: Head of the Village Panchayat.'
    ],
    powers: [
      'Joint signatory with the Gram Sevak for village bank accounts and public development expenditures.',
      'Executes village sanitation, drinking water, street lighting, and internal concrete roads.',
      'Convenes Gram Sabha meetings and presents annual accounts and development budgets for social audit.'
    ],
    limitations: [
      'Subject to mandatory social audit by the Gram Sabha; can be removed for corruption or by No-Confidence Motion.'
    ],
    governanceDetails: {
      positionName: 'Sarpanch / Village Pradhan / Mukhiya',
      cadreOrService: 'Directly Elected Village Constitutional Head',
      constitutionalArticle: 'Articles 243C, 243D, 243G & 11th Schedule of Constitution',
      electoralOrSelectionMethod: 'Direct Election by Village Electors (or indirect election by Ward Panchs)',
      tenure: '5 Years',
      geographicalJurisdiction: 'Gram Panchayat Territory (Revenue Village)',
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
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'executive-administration',
    position: { x: 4620, y: 2070 },
    summary: 'The permanent civil servant and administrative secretary of the Gram Panchayat appointed by the ZP CEO. Maintains the cash books, records Gram Sabha proceedings, registers births and deaths, and ensures statutory compliance for all village expenditures.',
    mandate: [
      'State Village Panchayats Act: Secretary of the Gram Panchayat appointed by ZP CEO.',
      'Registration of Births and Deaths Act 1969: Local Registrar of Births and Deaths.'
    ],
    powers: [
      'Maintains books of accounts, voucher registers, and administrative records of the Gram Panchayat.',
      'Joint signatory with the Sarpanch for operating the Gram Panchayat bank account.',
      'Issues official certificates: Birth Certificate, Death Certificate, Property Tax assessment extract.'
    ],
    limitations: [
      'Civil servant under operational supervision of the Sarpanch and administrative control of the BDO.'
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
    sectionId: 'SEC-DEM-08',
    sectionNumber: '08',
    level: 'local',
    category: 'legislation',
    position: { x: 4620, y: 2590 },
    summary: 'Elected village ward representative representing a neighborhood ward (population ~300 to 800). Sits on the Gram Panchayat committee (consisting of 7 to 17 members) and votes on local resolutions.',
    mandate: [
      'Article 243C: Composition of Panchayats by direct election from wards.'
    ],
    powers: [
      'Participates and votes in monthly Gram Panchayat committee meetings.',
      'Elects the Upa-Sarpanch (Deputy Sarpanch) from among members.',
      'Proposes local lane paving, street lighting, and drainage works for their ward.'
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

  // =========================================================================
  // ZONE 9: SOVEREIGN DEMOCRATIC BASE: CITIZENS & GRAM SABHA (BOTTOM CENTER)
  // X: 1800 - 2900, Y: 4700 - 5050
  // =========================================================================
  {
    id: 'HUB-DEM-CITIZEN',
    type: 'sectionHub',
    title: 'SECTION 09: SOVEREIGN DEMOCRATIC BASE (WE, THE PEOPLE OF INDIA)',
    abbreviation: 'HUB-CITIZEN',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'constitutional',
    category: 'legislation',
    position: { x: 2335, y: 5850 },
    summary: 'The ultimate fountainhead of constitutional sovereignty under the Preamble & Article 326. Adult citizens exercise direct franchise electing the Union Parliament, State Assemblies, BMC/Municipalities, and Panchayats.',
    mandate: [
      'Exercise sovereign constitutional power through universal adult suffrage under Article 326',
      'Participate in direct grassroots democracy through village Gram Sabhas and ward committee forums'
    ],
    powers: [
      'Elect representatives to the Lok Sabha, Vidhan Sabha, Municipal Corporations, and Village Panchayats',
      'Enforce fundamental rights under Article 32 (Supreme Court) and Article 226 (High Court) via prerogative writs'
    ],
    limitations: [
      'Subject to statutory rule of law and reasonable restrictions under Article 19(2)-(6)',
      'Bound by constitutional fundamental duties articulated under Article 51A'
    ],
    sourceIds: ['SRC-V4-CONST', 'SRC-V4-RPA'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-GRAM-SABHA',
    type: 'constitutional',
    title: 'Gram Sabha (Sovereign Assembly of All Village Voters)',
    abbreviation: 'GRAM-SABHA',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'constitutional',
    category: 'legislation',
    position: { x: 2550, y: 5970 },
    summary: 'The constitutional embodiment of direct democracy in India under Article 243A. Comprises every adult citizen residing in the village whose name is registered in the electoral roll. The Gram Sabha ratifies annual village development plans, approves the budget, audits all expenditures (Social Audit), and selects beneficiaries for welfare schemes.',
    mandate: [
      'Article 243A: Gram Sabha may exercise powers and functions at village level as State Legislature provides.',
      'Panchayats (Extension to Scheduled Areas) Act 1996 (PESA): Absolute authority over community resources in Tribal Areas.'
    ],
    powers: [
      'Approves the annual village budget, developmental works, and tax assessments before execution.',
      'Conducts mandatory Social Audit of all public works, MGNREGA employment, and public money expenditures.',
      'Selects eligible beneficiaries for poverty alleviation and housing schemes (e.g. PMAY-G, ration cards).',
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
      tenure: 'Permanent Constitutional Assembly',
      geographicalJurisdiction: 'Revenue Village Boundary',
      reportingTo: 'Sovereign Electors & Constitution of India'
    },
    sourceIds: ['SRC-V4-CONST'],
    verificationStatus: 'verified'
  },
  {
    id: 'DEM-CITIZENS',
    type: 'constitutional',
    title: 'Citizen of India (Sovereign People & Electoral Franchise)',
    abbreviation: 'SOVEREIGN-CITIZENS',
    sectionId: 'SEC-DEM-09',
    sectionNumber: '09',
    level: 'constitutional',
    category: 'legislation',
    position: { x: 2150, y: 5970 },
    summary: 'We, The People of India — the ultimate sovereign fountainhead of the Republic from whom the Constitution derives its authority (Preamble). Sovereign adult citizens exercise direct voting power under Article 326 (Universal Adult Suffrage) to elect Members of Parliament (Lok Sabha), Members of Legislative Assemblies (MLAs), Urban Corporators (BMC), and Village Panchayats, holding all public authorities democratically accountable.',
    mandate: [
      'Preamble: We, The People of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic...',
      'Article 326: Elections to the House of the People and to the Legislative Assemblies of States to be on the basis of adult suffrage (Age 18+).',
      'Part III (Articles 12-35): Enjoys non-negotiable Fundamental Rights (Articles 14, 19, 21, 21A, 25, 32).'
    ],
    powers: [
      'Directly elects Members of the Lok Sabha (Union Government mandate) and State Legislative Assemblies (MLAs).',
      'Directly elects Urban Ward Corporators (BMC) and Village Ward Panchs / Sarpanches.',
      'Holds constitutional right to petition the Supreme Court (Article 32) and High Courts (Article 226) via Writ Petitions.',
      'Exercises Right to Information (RTI Act 2005) demanding accountability from all public offices.'
    ],
    limitations: [
      'Subject to reasonable restrictions under Article 19(2)-(6) for national security, public order, and morality.',
      'Expected to observe Fundamental Duties under Article 51A.'
    ],
    governanceDetails: {
      positionName: 'Sovereign Citizen of the Republic of India',
      cadreOrService: 'Constitutional Sovereign Fountainhead',
      constitutionalArticle: 'Preamble, Part II (Citizenship), Part III (Fundamental Rights), Article 326',
      electoralOrSelectionMethod: 'Birth / Naturalization under Citizenship Act 1955 & Universal Adult Suffrage',
      tenure: 'Lifelong',
      geographicalJurisdiction: 'Territory of India & Consular Protection Abroad',
      reportingTo: 'Sovereign Republic of India'
    },
    sourceIds: ['SRC-V4-CONST', 'SRC-V4-RPA'],
    verificationStatus: 'verified'
  }
];

export const RELATIONSHIPS_V4: RelationshipEdgeData[] = [
  // ==========================================
  // APEX CONSTITUTIONAL APPOINTMENTS & BRANCHING
  // ==========================================
  {
    id: 'REL-V4-001',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-PM',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints Prime Minister (Art 75(1))',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-002',
    sourceNodeId: 'DEM-PM',
    targetNodeId: 'DEM-PRESIDENT',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Renders binding Aid & Advice (Art 74) & reports Cabinet decisions (Art 78)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-003',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-GOVERNOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints State Governors by Warrant under hand & seal (Art 155)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-004',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-AG-INDIA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints Attorney General for India (Art 76)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-005',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-ECI',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints Chief Election Commissioner & ECs (Art 324)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-006',
    sourceNodeId: 'DEM-PRESIDENT',
    targetNodeId: 'DEM-UPSC',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints Chairman & Members of UPSC (Art 316)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-007',
    sourceNodeId: 'DEM-VICE-PRESIDENT',
    targetNodeId: 'DEM-RS-CHAIRMAN',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Ex-Officio Chairman of Rajya Sabha (Art 64 & 89)',
    verificationStatus: 'verified'
  },

  // ==========================================
  // STATE POLICE COMMAND (SOLID DOWNWARD HIERARCHY)
  // ==========================================
  {
    id: 'REL-V4-010',
    sourceNodeId: 'DEM-STATE-HOME-DEPT',
    targetNodeId: 'DEM-POL-DGP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'State Government superintendence of Police under Police Act S.4',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-011',
    sourceNodeId: 'DEM-POL-DGP',
    targetNodeId: 'DEM-POL-ADG',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Assigns operational wings (CID, Intelligence, Traffic, Law & Order)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-012',
    sourceNodeId: 'DEM-POL-ADG',
    targetNodeId: 'DEM-POL-IG',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs regional range operations & mobile strike reserves',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-013',
    sourceNodeId: 'DEM-POL-IG',
    targetNodeId: 'DEM-POL-DIG',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises range crime reviews & inspection reports',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-014',
    sourceNodeId: 'DEM-POL-DIG',
    targetNodeId: 'DEM-POL-SP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs District Superintendents on organized crime & discipline',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-015',
    sourceNodeId: 'DEM-POL-SP',
    targetNodeId: 'DEM-POL-ASP-DSP',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Allocates Sub-Divisional charges & supervisory cases',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-016',
    sourceNodeId: 'DEM-POL-ASP-DSP',
    targetNodeId: 'DEM-POL-SHO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises police station investigations, lockups & station diaries',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-017',
    sourceNodeId: 'DEM-POL-SHO',
    targetNodeId: 'DEM-POL-SI',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Assigns case investigations, warrants, and chargesheet preparation',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-018',
    sourceNodeId: 'DEM-POL-SI',
    targetNodeId: 'DEM-POL-HC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Commands beat surveillance, prisoner escort, and station diary maintenance',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-019',
    sourceNodeId: 'DEM-POL-HC',
    targetNodeId: 'DEM-POL-CONSTABLE',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs foot patrol beats, crowd control & emergency 112 response',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-020',
    sourceNodeId: 'DEM-POL-CONSTABLE',
    targetNodeId: 'DEM-CITIZENS',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Frontline protection, public safety & law enforcement at grassroots',
    verificationStatus: 'verified'
  },

  // ==========================================
  // PARLIAMENT ZONE RELATIONSHIPS
  // ==========================================
  {
    id: 'REL-V4-025',
    sourceNodeId: 'DEM-LS-SPEAKER',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'LEGISLATES',
    label: 'Presides over 543 elected MPs and regulates parliamentary proceedings',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-026',
    sourceNodeId: 'DEM-RS-CHAIRMAN',
    targetNodeId: 'DEM-MP-RAJYA-SABHA',
    type: 'LEGISLATES',
    label: 'Presides over 245 Upper House representatives of States',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-027',
    sourceNodeId: 'DEM-PM',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Prime Minister serves as elected MP in Lok Sabha (Leader of the House)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-028',
    sourceNodeId: 'DEM-MP-LOK-SABHA',
    targetNodeId: 'DEM-PM',
    type: 'LEGISLATES',
    label: 'Lok Sabha majority confidence sustains Prime Minister & Cabinet in office (Art 75(3))',
    verificationStatus: 'verified'
  },

  // ==========================================
  // CENTRAL MINISTRIES SUITE RELATIONSHIPS
  // ==========================================
  {
    id: 'REL-V4-030',
    sourceNodeId: 'DEM-PM',
    targetNodeId: 'DEM-CABINET-SEC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Cabinet Secretariat, inter-ministerial coordination & civil services',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-031',
    sourceNodeId: 'DEM-PM',
    targetNodeId: 'DEM-MHA-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Recommends appointment & allocates Home portfolio to Union Home Minister',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-032',
    sourceNodeId: 'DEM-PM',
    targetNodeId: 'DEM-MOF-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Recommends appointment & allocates Finance portfolio',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-033',
    sourceNodeId: 'DEM-PM',
    targetNodeId: 'DEM-MOLJ-MINISTER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Recommends appointment & allocates Law and Justice portfolio',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-034',
    sourceNodeId: 'DEM-PM',
    targetNodeId: 'DEM-DOPT-SEC',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Minister of Personnel (PM) directs civil service personnel policy & AIS rules',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-035',
    sourceNodeId: 'DEM-MHA-MINISTER',
    targetNodeId: 'DEM-MHA-SECRETARY',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs administrative policies & internal security execution',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-036',
    sourceNodeId: 'DEM-MHA-SECRETARY',
    targetNodeId: 'DEM-CAPF-HEADS',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Administrative superintendence & operational tasking of CAPF forces',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-037',
    sourceNodeId: 'DEM-MHA-SECRETARY',
    targetNodeId: 'DEM-STATE-HOME-DEPT',
    type: 'COORDINATES',
    isAdvisory: true,
    label: 'Federal security coordination, intelligence sharing & CAPF deployments (Art 355)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-038',
    sourceNodeId: 'DEM-MOF-MINISTER',
    targetNodeId: 'DEM-CBDT-IRS-REVENUE',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Superintends direct taxation policy & revenue collection targets',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-039',
    sourceNodeId: 'DEM-MOLJ-MINISTER',
    targetNodeId: 'DEM-AG-INDIA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Coordinates Union litigation & constitutional advice with Attorney General',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-040',
    sourceNodeId: 'DEM-DOPT-SEC',
    targetNodeId: 'DEM-UPSC',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Requisitions annual civil service vacancies (IAS, IPS, IRS) to UPSC',
    verificationStatus: 'verified'
  },

  // ==========================================
  // STATE LEGISLATURE (VIDHAN SABHA & PARISHAD)
  // ==========================================
  {
    id: 'REL-V4-045',
    sourceNodeId: 'DEM-GOVERNOR',
    targetNodeId: 'DEM-CM',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Appoints Chief Minister (Art 164(1)) & administers Oath of Office',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-046',
    sourceNodeId: 'DEM-CM',
    targetNodeId: 'DEM-GOVERNOR',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Aids and advises the Governor (Art 163) & communicates state decisions (Art 167)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-047',
    sourceNodeId: 'DEM-CM',
    targetNodeId: 'DEM-MLA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Chief Minister serves as elected MLA (or MLC) leading the Assembly majority',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-048',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-CM',
    type: 'LEGISLATES',
    label: 'Vidhan Sabha majority confidence sustains State Government in office (Art 164(2))',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-049',
    sourceNodeId: 'DEM-MLA',
    targetNodeId: 'DEM-MLC',
    type: 'LEGISLATES',
    label: 'MLAs elect one-third of the members of the Vidhan Parishad (Art 171(3)(d))',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-050',
    sourceNodeId: 'DEM-CM',
    targetNodeId: 'DEM-CS-STATE',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs State Administration & chairs State Cabinet through Chief Secretary',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-051',
    sourceNodeId: 'DEM-CS-STATE',
    targetNodeId: 'DEM-STATE-HOME-DEPT',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Administrative superintendence over State Home Department & public order',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-052',
    sourceNodeId: 'DEM-CS-STATE',
    targetNodeId: 'DEM-SPSC',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Requisitions state civil service vacancies (Deputy Collector, DySP) to SPSC/MPSC',
    verificationStatus: 'verified'
  },

  // ==========================================
  // DISTRICT ADMINISTRATION & MAGISTRACY
  // ==========================================
  {
    id: 'REL-V4-055',
    sourceNodeId: 'DEM-CS-STATE',
    targetNodeId: 'DEM-DIV-COMMISSIONER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Commands Divisional Commissioners for regional development and revenue oversight',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-056',
    sourceNodeId: 'DEM-DIV-COMMISSIONER',
    targetNodeId: 'DEM-DM-COLLECTOR',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs District Collectors and hears revenue appeals against Collectorate orders',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-057',
    sourceNodeId: 'DEM-DM-COLLECTOR',
    targetNodeId: 'DEM-SDM-SUBDIV',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Delegates sub-divisional executive magistracy & land acquisition to SDM',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-058',
    sourceNodeId: 'DEM-SDM-SUBDIV',
    targetNodeId: 'DEM-TEHSILDAR-MAGISTRATE',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Supervises Taluka revenue collection, mutation trials & executive orders',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-059',
    sourceNodeId: 'DEM-TEHSILDAR-MAGISTRATE',
    targetNodeId: 'DEM-TALATHI-PATWARI',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Commands Village Talathis for Record of Rights (7/12) & crop assessments',
    verificationStatus: 'verified'
  },

  // Cross-Cluster Coordination: DM & District SP
  {
    id: 'REL-V4-060',
    sourceNodeId: 'DEM-DM-COLLECTOR',
    targetNodeId: 'DEM-POL-SP',
    type: 'COORDINATES',
    isAdvisory: true,
    label: 'General control & direction of police for district law & order (Police Act S.4 / CrPC S.144)',
    verificationStatus: 'verified'
  },

  // ==========================================
  // URBAN MUNICIPAL CORPORATION — BMC MODEL
  // ==========================================
  {
    id: 'REL-V4-065',
    sourceNodeId: 'DEM-CS-STATE',
    targetNodeId: 'DEM-MUNICIPAL-COMMISSIONER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'State Urban Development Department superintends municipal governance policy',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-066',
    sourceNodeId: 'DEM-MUNICIPAL-COMMISSIONER',
    targetNodeId: 'DEM-MAYOR-COUNCIL',
    type: 'LEGISLATES',
    label: 'Submits municipal budget & executes resolutions of elected General Body',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-067',
    sourceNodeId: 'DEM-MUNICIPAL-COMMISSIONER',
    targetNodeId: 'DEM-ADDL-MUNICIPAL-COMMISSIONER',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Directs Additional Municipal Commissioners for Projects, Health & City Zones',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-068',
    sourceNodeId: 'DEM-MAYOR-COUNCIL',
    targetNodeId: 'DEM-WARD-CORPORATOR',
    type: 'LEGISLATES',
    label: 'Presides over Council of 227 Ward Corporators for civic bylaws',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-069',
    sourceNodeId: 'DEM-ADDL-MUNICIPAL-COMMISSIONER',
    targetNodeId: 'DEM-WARD-CORPORATOR',
    type: 'COORDINATES',
    isAdvisory: true,
    label: 'Coordinates with Ward Committees and allocates Ward Development Works',
    verificationStatus: 'verified'
  },

  // ==========================================
  // RURAL PANCHAYATI RAJ RELATIONSHIPS
  // ==========================================
  {
    id: 'REL-V4-075',
    sourceNodeId: 'DEM-DM-COLLECTOR',
    targetNodeId: 'DEM-ZP-CEO',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Coordinates district developmental planning and disaster relief with ZP CEO',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-076',
    sourceNodeId: 'DEM-ZP-CEO',
    targetNodeId: 'DEM-BDO-BLOCK',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Administrative command of Block Development Officers for rural schemes',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-077',
    sourceNodeId: 'DEM-BDO-BLOCK',
    targetNodeId: 'DEM-SARPANCH',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Sanctions block funding & monitors Gram Panchayat scheme execution',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-078',
    sourceNodeId: 'DEM-BDO-BLOCK',
    targetNodeId: 'DEM-GRAM-SEVAK',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Direct administrative control over Gram Sevaks for village cash books',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-079',
    sourceNodeId: 'DEM-SARPANCH',
    targetNodeId: 'DEM-WARD-PANCH',
    type: 'LEGISLATES',
    label: 'Chairs monthly Gram Panchayat committee of elected ward members',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-080',
    sourceNodeId: 'DEM-SARPANCH',
    targetNodeId: 'DEM-GRAM-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'Convenes Sovereign Gram Sabha and submits village accounts for Social Audit',
    verificationStatus: 'verified'
  },

  // ==========================================
  // CITIZEN FRANCHISE & PARTICIPATORY SOVEREIGNTY
  // ==========================================
  {
    id: 'REL-V4-085',
    sourceNodeId: 'DEM-CITIZENS',
    targetNodeId: 'DEM-MP-LOK-SABHA',
    type: 'LEGISLATES',
    label: 'Direct universal adult election of 543 Lok Sabha MPs (Art 326)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-086',
    sourceNodeId: 'DEM-CITIZENS',
    targetNodeId: 'DEM-MLA',
    type: 'LEGISLATES',
    label: 'Direct universal adult election of State Legislative Assembly MLAs (Art 326)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-087',
    sourceNodeId: 'DEM-CITIZENS',
    targetNodeId: 'DEM-WARD-CORPORATOR',
    type: 'LEGISLATES',
    label: 'Direct election of Ward Corporators in city municipal elections (Art 243R)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-088',
    sourceNodeId: 'DEM-CITIZENS',
    targetNodeId: 'DEM-SARPANCH',
    type: 'LEGISLATES',
    label: 'Direct election of Village Sarpanch in rural elections (Art 243C)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-089',
    sourceNodeId: 'DEM-CITIZENS',
    targetNodeId: 'DEM-WARD-PANCH',
    type: 'LEGISLATES',
    label: 'Direct election of Village Ward Panchs representing local wards',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-090',
    sourceNodeId: 'DEM-CITIZENS',
    targetNodeId: 'DEM-GRAM-SABHA',
    type: 'CONSTITUTIONALLY_EMPOWERS',
    label: 'All adult registered village voters automatically constitute the Sovereign Gram Sabha (Art 243A)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-091',
    sourceNodeId: 'DEM-ECI',
    targetNodeId: 'DEM-CITIZENS',
    type: 'COORDINATES',
    isAdvisory: true,
    label: 'Guarantees free and fair universal adult franchise & voter registration (Art 324)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-092',
    sourceNodeId: 'DEM-CBDT-IRS-REVENUE',
    targetNodeId: 'DEM-CITIZENS',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Assesses income tax returns and provides taxpayer services to citizens',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-093',
    sourceNodeId: 'DEM-TALATHI-PATWARI',
    targetNodeId: 'DEM-CITIZENS',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Issues land record certificates (7/12 extract) & panchnamas to citizen farmers',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-V4-094',
    sourceNodeId: 'DEM-WARD-CORPORATOR',
    targetNodeId: 'DEM-CITIZENS',
    type: 'ADMINISTRATIVELY_OVERSEES',
    label: 'Provides grassroots civic amenities, drainage, water & street lighting',
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
    relatedNodeIds: ['DEM-PRESIDENT', 'DEM-PM', 'DEM-LS-SPEAKER', 'DEM-GOVERNOR', 'DEM-CM', 'DEM-ECI', 'DEM-CITIZENS', 'DEM-MLA', 'DEM-MLC']
  },
  {
    id: 'SRC-V4-POLICE-ACT',
    name: 'The Police Act, 1861 & State Police Acts',
    officialUrl: 'https://www.indiacode.nic.in/handle/123456789/2253',
    documentTitle: 'The Police Act, 1861 (Act No. 5 of 1861) & Corresponding State Police Acts',
    sectionCitation: 'Section 4, 7, 12, 23 & State Police Manuals',
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
  },
  {
    id: 'SRC-V4-MMC-ACT',
    name: 'Mumbai Municipal Corporation Act, 1888 (MMC Act)',
    officialUrl: 'https://www.indiacode.nic.in',
    documentTitle: 'The Mumbai Municipal Corporation Act, 1888 (Bombay Act No. III of 1888)',
    sectionCitation: 'Section 4, 54, 64 & 68 (Executive Powers of the Commissioner)',
    lastVerifiedDate: '2026-10-18',
    sourcePriority: 1,
    verificationStatus: 'verified',
    relatedNodeIds: ['DEM-MUNICIPAL-COMMISSIONER', 'DEM-MAYOR-COUNCIL', 'DEM-ADDL-MUNICIPAL-COMMISSIONER', 'DEM-WARD-CORPORATOR']
  }
];
