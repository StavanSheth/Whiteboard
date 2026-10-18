import { EducationNode, RelationshipEdgeData, SourceRecord, SectionMeta } from '../types';

export const SECTION_METAS_V4: SectionMeta[] = [
  {
    "id": "SEC-DEM-01",
    "number": "01",
    "title": "Apex Constitutional Authority (President & Vice-President)",
    "subtitle": "Head of State, Supreme Commander of Armed Forces & Constitutional Grundnorm",
    "summary": "The constitutional apex of the Republic of India under Articles 52 and 53. Executive power of the Union is formally vested in the President, exercised on the binding aid and advice of the Council of Ministers under Article 74.",
    "iconName": "Crown",
    "expectedSubsections": [
      "President of India",
      "Vice-President of India"
    ],
    "expectedAuthorities": [
      "HUB-DEM-APEX",
      "DEM-PRESIDENT",
      "DEM-VICE-PRESIDENT"
    ]
  },
  {
    "id": "SEC-DEM-02",
    "number": "02",
    "title": "Rajya Sabha (Council of States — Upper House)",
    "subtitle": "Federal Chamber Representing States & Union Territories (Articles 80-84)",
    "summary": "The permanent Upper House of Indian Parliament consisting of 245 members representing the States and Union Territories, presided over by the Vice-President of India as ex-officio Chairman.",
    "iconName": "Landmark",
    "expectedSubsections": [
      "Rajya Sabha Presiding Hierarchy",
      "Members of Rajya Sabha (245 MPs)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-RAJYA-SABHA",
      "DEM-RS-CHAIRMAN",
      "DEM-MP-RAJYA-SABHA"
    ]
  },
  {
    "id": "SEC-DEM-03",
    "number": "03",
    "title": "Lok Sabha & Parliamentary Committees (House of the People)",
    "subtitle": "Supreme Directly Elected Legislative Chamber of the Republic (Articles 81-122)",
    "summary": "The directly elected lower chamber of 543 MPs chosen through universal adult franchise, headed by the Speaker of Lok Sabha, holding the executive strictly accountable through parliamentary questions, debates, and standing financial committees (PAC, Estimates).",
    "iconName": "Vote",
    "expectedSubsections": [
      "Speaker of Lok Sabha",
      "Directly Elected Lok Sabha MPs (543)",
      "Parliamentary Standing Committees"
    ],
    "expectedAuthorities": [
      "HUB-DEM-LOK-SABHA",
      "DEM-LS-SPEAKER",
      "DEM-MP-LOK-SABHA",
      "DEM-PARL-COMMITTEES"
    ]
  },
  {
    "id": "SEC-DEM-04",
    "number": "04",
    "title": "Prime Minister's Office & Cabinet Secretariat",
    "subtitle": "Apex Political & Administrative Executive of the Union of India",
    "summary": "The executive command center headed by the Prime Minister (chief executive of the republic) and the Cabinet Secretary (senior-most civil servant), coordinating inter-ministerial policy, allocation of business, and civil service administration.",
    "iconName": "Building",
    "expectedSubsections": [
      "Prime Minister of India",
      "Cabinet Secretariat",
      "Department of Personnel & Training (DoPT)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-PMO-CABINET",
      "DEM-PM",
      "DEM-CABINET-SEC",
      "DEM-DOPT-SEC"
    ]
  },
  {
    "id": "SEC-DEM-05",
    "number": "05",
    "title": "Ministry of Defence & Armed Forces Command",
    "subtitle": "Defence Ministry, Chief of Defence Staff & Tri-Service Military Command",
    "summary": "National sovereignty and military defence administration: Union Defence Minister, Defence Secretary, Chief of Defence Staff (CDS), and the 3 operational armed services (Indian Army, Indian Navy, Indian Air Force).",
    "iconName": "Shield",
    "expectedSubsections": [
      "Ministry of Defence",
      "Chief of Defence Staff (CDS)",
      "Indian Army",
      "Indian Navy & Air Force"
    ],
    "expectedAuthorities": [
      "HUB-DEM-DEFENCE",
      "DEM-MOD-MINISTER",
      "DEM-ARMED-FORCES-CDS",
      "DEM-ARMY-HEADS",
      "DEM-NAVY-AIRFORCE-HEADS"
    ]
  },
  {
    "id": "SEC-DEM-06",
    "number": "06",
    "title": "Ministry of Home Affairs & Central Armed Police Forces",
    "subtitle": "Internal Security, Border Management, Intelligence & CAPF Paramilitary",
    "summary": "Domestic internal security, federal counter-insurgency, intelligence, and border security executed through Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG, Assam Rifles).",
    "iconName": "ShieldAlert",
    "expectedSubsections": [
      "Ministry of Home Affairs",
      "Central Armed Police Forces (CAPFs)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-HOME-AFFAIRS",
      "DEM-MHA-MINISTER",
      "DEM-CAPF-HEADS"
    ]
  },
  {
    "id": "SEC-DEM-07",
    "number": "07",
    "title": "Ministry of External Affairs & Diplomatic Missions",
    "subtitle": "Foreign Relations, Global Bilateral Treaties & Indian Foreign Service",
    "summary": "Sovereign diplomatic representation of India abroad: conduct of foreign policy, bilateral diplomacy, international treaty negotiations, and administration of embassies and high commissions.",
    "iconName": "Globe",
    "expectedSubsections": [
      "Ministry of External Affairs & Diplomatic Cadre"
    ],
    "expectedAuthorities": [
      "HUB-DEM-EXTERNAL-AFFAIRS",
      "DEM-MEA-MINISTER"
    ]
  },
  {
    "id": "SEC-DEM-08",
    "number": "08",
    "title": "Ministry of Finance & Revenue Authorities",
    "subtitle": "Macroeconomic Fiscal Policy, Direct Taxes (CBDT) & Indirect Taxes (CBIC)",
    "summary": "National macroeconomic planning, annual union budget formulation, expenditure control, direct tax collection (Income Tax / CBDT), indirect tax enforcement (GST & Customs / CBIC), and industrial commerce.",
    "iconName": "Coins",
    "expectedSubsections": [
      "Ministry of Finance",
      "CBDT & CBIC Revenue Boards",
      "Ministry of Commerce & Industry"
    ],
    "expectedAuthorities": [
      "HUB-DEM-FINANCE",
      "DEM-MOF-MINISTER",
      "DEM-CBDT-IRS-REVENUE",
      "DEM-COMMERCE-MINISTER"
    ]
  },
  {
    "id": "SEC-DEM-09",
    "number": "09",
    "title": "Ministry of Railways & Railway Board",
    "subtitle": "National Railway Network, Passenger Mobility & Freight Logistics Corridors",
    "summary": "Operation and strategic expansion of Indian Railways: Union Minister of Railways, Railway Board CEO, 17 Zonal Railway General Managers, and Divisional Railway Managers managing the world’s largest passenger network.",
    "iconName": "Train",
    "expectedSubsections": [
      "Ministry of Railways & Railway Board"
    ],
    "expectedAuthorities": [
      "HUB-DEM-RAILWAYS",
      "DEM-RAILWAYS-MINISTER"
    ]
  },
  {
    "id": "SEC-DEM-10",
    "number": "10",
    "title": "Ministry of Education & National Academic Regulators",
    "subtitle": "National Education Policy, School Standards (CBSE) & University Governance (UGC)",
    "summary": "Human resource and education policy governing early childhood to higher education research: Department of School Education (DSEL), Department of Higher Education (DHE), NCERT, CBSE, and UGC.",
    "iconName": "GraduationCap",
    "expectedSubsections": [
      "Ministry of Education (Higher & School Departments)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-EDUCATION",
      "DEM-EDUCATION-MINISTER"
    ]
  },
  {
    "id": "SEC-DEM-11",
    "number": "11",
    "title": "Ministry of Health & Family Welfare",
    "subtitle": "National Health Policy, AIIMS Apex Medical Hubs & Public Health Missions",
    "summary": "National health administration: disease control, primary healthcare via National Health Mission (NHM), tertiary apex hospitals (AIIMS), drug regulatory standards, and medical education governance under NMC.",
    "iconName": "HeartPulse",
    "expectedSubsections": [
      "Ministry of Health & Family Welfare"
    ],
    "expectedAuthorities": [
      "HUB-DEM-HEALTH",
      "DEM-HEALTH-MINISTER"
    ]
  },
  {
    "id": "SEC-DEM-12",
    "number": "12",
    "title": "Agriculture, Rural Development & Food Security",
    "subtitle": "Agrarian Policy, Rural Infrastructure (MGNREGA), Jal Shakti & PDS Food Distribution",
    "summary": "Sustaining India’s rural and agrarian heartland: PM-KISAN, ICAR scientific agriculture, rural infrastructure and employment under MGNREGA, Jal Jeevan Mission, and national public food distribution (FCI).",
    "iconName": "Wheat",
    "expectedSubsections": [
      "Agriculture & ICAR",
      "Rural Development & MGNREGA",
      "Food & Public Distribution (PDS)",
      "Jal Jeevan Mission"
    ],
    "expectedAuthorities": [
      "HUB-DEM-AGRI-RURAL",
      "DEM-AGRI-MINISTER",
      "DEM-RURAL-MINISTER",
      "DEM-CONSUMER-FOOD-MINISTER",
      "DEM-JALSHAKTI-MINISTER"
    ]
  },
  {
    "id": "SEC-DEM-13",
    "number": "13",
    "title": "Core Infrastructure, Energy & Environment",
    "subtitle": "National Highways (NHAI), Power Grids, Petroleum, Urban Transit & Ecology",
    "summary": "Strategic national infrastructure and ecological conservation: National Highway network under NHAI, national power grid and renewables, oil/gas refineries, urban metro transit under MoHUA, and environmental clearances under MoEFCC.",
    "iconName": "Radio",
    "expectedSubsections": [
      "Road Transport & NHAI",
      "Power & Clean Energy",
      "Petroleum & Natural Gas",
      "Environment & Climate Change",
      "Housing & Urban Affairs"
    ],
    "expectedAuthorities": [
      "HUB-DEM-INFRASTRUCTURE",
      "DEM-MORTH-MINISTER",
      "DEM-POWER-MINISTER",
      "DEM-PETROLEUM-MINISTER",
      "DEM-MOEFCC-MINISTER",
      "DEM-MOHUA-MINISTER"
    ]
  },
  {
    "id": "SEC-DEM-14",
    "number": "14",
    "title": "Technology, Law & Scientific Departments",
    "subtitle": "Digital India (MeitY), Legal Drafting, Attorney General, Labour & Space/Atomic Energy",
    "summary": "Cutting-edge digital public infrastructure (MeitY/UIDAI), statutory law drafting and apex legal counsel (AG of India), labor welfare codes (EPFO/ESIC), and frontier space/nuclear programs (ISRO & DAE).",
    "iconName": "Cpu",
    "expectedSubsections": [
      "Electronics & IT (MeitY)",
      "Law & Justice & Attorney General",
      "Labour & Social Security",
      "Space & Atomic Energy (ISRO/DAE)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-TECH-LAW",
      "DEM-MEITY-MINISTER",
      "DEM-MOLJ-MINISTER",
      "DEM-AG-INDIA",
      "DEM-LABOUR-MINISTER",
      "DEM-SCIENCE-DEPT"
    ]
  },
  {
    "id": "SEC-DEM-15",
    "number": "15",
    "title": "Apex & Higher Judiciary",
    "subtitle": "Supreme Court of India, High Courts & Subordinate District Judiciary (Articles 124-237)",
    "summary": "The unified independent judicial pillar: Supreme Court headed by Chief Justice of India, 25 High Courts with constitutional writ jurisdiction, and territorial District & Sessions Courts protecting fundamental rights.",
    "iconName": "Scale",
    "expectedSubsections": [
      "Supreme Court of India",
      "High Courts of States",
      "Subordinate District Judiciary"
    ],
    "expectedAuthorities": [
      "HUB-DEM-JUDICIARY",
      "DEM-JUDICIARY-SC",
      "DEM-JUDICIARY-HC",
      "DEM-JUDICIARY-DISTRICT"
    ]
  },
  {
    "id": "SEC-DEM-16",
    "number": "16",
    "title": "Independent Constitutional & Vigilance Commissions",
    "subtitle": "Guardians of Elections (ECI), Public Accounts (CAG), Merit Service (UPSC) & Integrity (CVC/CBI)",
    "summary": "Autonomous constitutional oversight bodies safeguarding the democratic and institutional integrity of the Republic: free and fair elections (ECI), statutory public audits (CAG), civil service recruitment (UPSC), and anti-corruption vigilance (CVC/CBI).",
    "iconName": "CheckCircle2",
    "expectedSubsections": [
      "Election Commission of India",
      "Comptroller & Auditor General",
      "Union & State Public Service Commissions",
      "Central Vigilance Commission & CBI"
    ],
    "expectedAuthorities": [
      "HUB-DEM-COMMISSIONS",
      "DEM-ECI",
      "DEM-CAG-INDIA",
      "DEM-UPSC",
      "DEM-CVC-CBI",
      "DEM-SPSC"
    ]
  },
  {
    "id": "SEC-DEM-17",
    "number": "17",
    "title": "State Executive & Chief Secretariat",
    "subtitle": "State Constitutional Executive (Articles 153-167) & Apex Administrative Secretariat",
    "summary": "State executive governance: Governor (constitutional head appointed by President), Chief Minister & Cabinet (elected executive head), and the State Chief Secretary directing all provincial government departments.",
    "iconName": "Building2",
    "expectedSubsections": [
      "Governor of the State",
      "Chief Minister & Cabinet",
      "Chief Secretary to State Government"
    ],
    "expectedAuthorities": [
      "HUB-DEM-STATE-EXECUTIVE",
      "DEM-GOVERNOR",
      "DEM-CM",
      "DEM-CS-STATE"
    ]
  },
  {
    "id": "SEC-DEM-18",
    "number": "18",
    "title": "State Legislature (Vidhan Sabha & Vidhan Parishad)",
    "subtitle": "Elected Legislative Assemblies & Legislative Councils (Articles 168-212)",
    "summary": "State lawmaking bodies: Legislative Assembly (Vidhan Sabha — directly elected MLAs representing territorial constituencies) and Legislative Council (Vidhan Parishad — Upper House where applicable).",
    "iconName": "Layers",
    "expectedSubsections": [
      "Vidhan Sabha (Legislative Assembly)",
      "Vidhan Parishad (Legislative Council)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-STATE-LEGISLATURE",
      "DEM-MLA",
      "DEM-MLC"
    ]
  },
  {
    "id": "SEC-DEM-19",
    "number": "19",
    "title": "State Police Hierarchy (10-Rank Linear Command)",
    "subtitle": "Schedule 7, List II, Entry 2 & Police Act 1861: DGP to Constable",
    "summary": "Full 10-tier linear chain of command of state law enforcement: DGP at state apex down through ADGP, IGP, DIG, SP (District Chief), ASP/DSP, SHO (Inspector), Sub-Inspector (lead investigator), Head Constable, and Police Constable on the beat.",
    "iconName": "Siren",
    "expectedSubsections": [
      "State Home Department",
      "Police Headquarters (DGP/ADGP)",
      "Field Supervisory Ranks (IG/DIG/SP)",
      "Frontline Police Station (SHO/SI/HC/Constable)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-POLICE",
      "DEM-STATE-HOME-DEPT",
      "DEM-POL-DGP",
      "DEM-POL-ADG",
      "DEM-POL-IG",
      "DEM-POL-DIG",
      "DEM-POL-SP",
      "DEM-POL-ASP-DSP",
      "DEM-POL-SHO",
      "DEM-POL-SI",
      "DEM-POL-HC",
      "DEM-POL-CONSTABLE"
    ]
  },
  {
    "id": "SEC-DEM-20",
    "number": "20",
    "title": "District Field Revenue Magistracy",
    "subtitle": "Territorial Administration: Divisional Commissioner down to Village Talathi",
    "summary": "The bedrock territorial administration of India: Divisional Commissioner, District Magistrate & Collector (DM/DC), Sub-Divisional Magistrate (SDM), Tehsildar (Executive Magistrate), and Village Talathi / Patwari maintaining land records.",
    "iconName": "MapPin",
    "expectedSubsections": [
      "Divisional Commissioner",
      "District Magistrate & Collector",
      "Sub-Divisional Magistrate (SDM)",
      "Tehsildar (Taluka Head)",
      "Village Talathi / Patwari"
    ],
    "expectedAuthorities": [
      "HUB-DEM-MAGISTRACY",
      "DEM-DIV-COMMISSIONER",
      "DEM-DM-COLLECTOR",
      "DEM-SDM-SUBDIV",
      "DEM-TEHSILDAR-MAGISTRATE",
      "DEM-TALATHI-PATWARI"
    ]
  },
  {
    "id": "SEC-DEM-21",
    "number": "21",
    "title": "Urban Municipal Corporations (BMC Model)",
    "subtitle": "74th Constitutional Amendment: Municipal Commissioner, Mayor & Ward Corporators",
    "summary": "Grassroots urban governance: Municipal Commissioner (IAS Principal Executive), Mayor & Municipal Corporation Council, Standing Committees, Assistant Municipal Commissioners, and Ward Corporators elected across municipal wards.",
    "iconName": "Building",
    "expectedSubsections": [
      "Municipal Commissioner & Additional Commissioners",
      "Mayor & Municipal Council",
      "Ward Corporators (Elected Wards)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-URBAN-LOCAL",
      "DEM-MUNICIPAL-COMMISSIONER",
      "DEM-MAYOR-COUNCIL",
      "DEM-ADDL-MUNICIPAL-COMMISSIONER",
      "DEM-WARD-CORPORATOR"
    ]
  },
  {
    "id": "SEC-DEM-22",
    "number": "22",
    "title": "Rural Panchayati Raj (3-Tier Local Bodies)",
    "subtitle": "73rd Constitutional Amendment: District Zilla Parishad, Block Samiti & Village Panchayat",
    "summary": "Grassroots rural self-government: District Zilla Parishad (ZP CEO), Intermediate Block Panchayat Samiti (Block Development Officer), and Village Gram Panchayat (Sarpanch, Gram Sevak & Ward Panchs).",
    "iconName": "Trees",
    "expectedSubsections": [
      "District Zilla Parishad (CEO)",
      "Block Panchayat Samiti (BDO)",
      "Village Gram Panchayat (Sarpanch & Gram Sevak)",
      "Ward Panchs"
    ],
    "expectedAuthorities": [
      "HUB-DEM-RURAL-PANCHAYAT",
      "DEM-ZP-CEO",
      "DEM-BDO-BLOCK",
      "DEM-SARPANCH",
      "DEM-GRAM-SEVAK",
      "DEM-WARD-PANCH"
    ]
  },
  {
    "id": "SEC-DEM-23",
    "number": "23",
    "title": "Sovereign Democratic Base (Citizens & Gram Sabha)",
    "subtitle": "We, The People of India — The Ultimate Sovereign Foundation (Articles 326 & 243A)",
    "summary": "The ultimate source of democratic authority in the Republic of India: Citizens exercise universal adult franchise to elect parliamentary, state, and local representatives, and deliberate directly in the Sovereign Village Gram Sabha.",
    "iconName": "Users",
    "expectedSubsections": [
      "Universal Adult Franchise Electors (Citizens)",
      "Sovereign Village Assembly (Gram Sabha)"
    ],
    "expectedAuthorities": [
      "HUB-DEM-CITIZENS",
      "DEM-CITIZENS",
      "DEM-GRAM-SABHA"
    ]
  }
];

export const NODES_V4: EducationNode[] = [
  {
    "id": "HUB-DEM-APEX",
    "type": "sectionHub",
    "title": "SECTION 01: APEX CONSTITUTIONAL AUTHORITY",
    "abbreviation": "HUB-APEX",
    "sectionId": "SEC-DEM-01",
    "sectionNumber": "01",
    "level": "constitutional",
    "category": "legislation",
    "summary": "Supreme Constitutional Apex of the Republic of India under Articles 52-78. Formally vests all union executive power in the President of India, exercised on the binding aid and advice of the Council of Ministers.",
    "mandate": [
      "Preserve, protect and defend the Constitution and the law of India (Article 60)",
      "Act as supreme formal head of the sovereign Republic and Supreme Commander of Armed Forces"
    ],
    "powers": [
      "Appoints Prime Minister, Cabinet Ministers, Supreme Court & High Court judges, Governors, and constitutional officers",
      "Exercises executive authority of the Union on binding aid and advice of the Union Council of Ministers (Article 74)"
    ],
    "limitations": [
      "Constitutional executive acts are strictly governed by ministerial advice under Article 74",
      "Cannot exercise personal veto over sustained parliamentary legislation passed under reconsidered terms"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-PRESIDENT",
    "type": "constitutional",
    "title": "President of India (Apex Constitutional Head of State)",
    "abbreviation": "PRESIDENT-OF-INDIA",
    "sectionId": "SEC-DEM-01",
    "sectionNumber": "01",
    "level": "constitutional",
    "category": "legislation",
    "position": {
      "x": 150,
      "y": 220
    },
    "summary": "The de jure Supreme Executive Head of the Republic of India and Supreme Commander of the Armed Forces (Articles 52 & 53). All union executive actions are taken in the President's name (Art 77). Acts on the binding aid and advice of the Union Council of Ministers headed by the Prime Minister (Art 74).",
    "mandate": [
      "Article 52: There shall be a President of India.",
      "Article 53: Executive power of the Union is vested in the President and exercised directly or through subordinate officers.",
      "Article 74(1): Binding aid and advice of Council of Ministers headed by PM.",
      "Article 77: All executive actions of Government of India expressed to be taken in President name."
    ],
    "powers": [
      "Appoints Prime Minister of India (Article 75) and other Ministers on PM advice.",
      "Appoints State Governors, Chief Justice of India, Judges, CEC, CAG, and UPSC Members.",
      "Summons and prorogues Parliament sessions; dissolves the Lok Sabha on PM advice.",
      "Promulgates Presidential Ordinances during parliamentary recess (Article 123).",
      "Exercises Clemency, Pardons, and Remissions of sentences (Article 72)."
    ],
    "limitations": [
      "Bound by advice of the Union Council of Ministers after one reconsideration (44th Amendment).",
      "Can only act upon ministerial advice in normal circumstances, not as an autocrat."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 52-62, 72, 74, 77, 123",
      "positionName": "President of India",
      "cadreOrService": "Elected Constitutional Head of State",
      "electoralOrSelectionMethod": "Electoral College of elected members of both Houses of Parliament and Legislative Assemblies of States",
      "tenure": "5 years (eligible for re-election)",
      "geographicalJurisdiction": "Territory of India (Sovereign Republic)",
      "reportingTo": "The Constitution of India"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-VICE-PRESIDENT",
    "type": "constitutional",
    "title": "Vice-President of India & Ex-Officio Chairman of Rajya Sabha",
    "abbreviation": "VICE-PRESIDENT",
    "sectionId": "SEC-DEM-01",
    "sectionNumber": "01",
    "level": "constitutional",
    "category": "legislation",
    "position": {
      "x": 150,
      "y": 380
    },
    "summary": "Second highest constitutional office of the Republic of India (Article 63). Serves ex-officio as the Chairman of the Council of States (Rajya Sabha) under Article 64, and discharges the functions of the President during vacancies caused by death, resignation, or removal (Article 65).",
    "mandate": [
      "Article 63: There shall be a Vice-President of India.",
      "Article 64: Vice-President shall be ex-officio Chairman of the Council of States (Rajya Sabha).",
      "Article 65: Acts as President in casual vacancies or during absence until a new President takes office."
    ],
    "powers": [
      "Presides over proceedings, debates, and conduct of business in the Rajya Sabha.",
      "Maintains order and decorum in the House; gives casting vote in case of equality of votes.",
      "Adjudicates questions of disqualification of Rajya Sabha members under the Tenth Schedule (Anti-Defection Law)."
    ],
    "limitations": [
      "Cannot preside over Rajya Sabha when a resolution for removal from office is under consideration.",
      "Cannot draw salary as Vice-President; receives salary and allowances as Chairman of Rajya Sabha."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 63-71, 89",
      "positionName": "Vice-President of India & Chairman of Rajya Sabha",
      "cadreOrService": "Elected Constitutional Dignitary",
      "electoralOrSelectionMethod": "Electoral College of members of both Houses of Parliament (system of proportional representation by single transferable vote)",
      "tenure": "5 years",
      "geographicalJurisdiction": "Pan-India / Parliament of India",
      "reportingTo": "The Constitution of India"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-RAJYA-SABHA",
    "type": "sectionHub",
    "title": "SECTION 02: RAJYA SABHA (COUNCIL OF STATES)",
    "abbreviation": "HUB-RAJYA-SABHA",
    "sectionId": "SEC-DEM-02",
    "sectionNumber": "02",
    "level": "constitutional",
    "category": "legislation",
    "summary": "The Upper House of the Parliament of India representing the States and Union Territories under Articles 80-84, presided over by the Vice-President of India.",
    "mandate": [
      "Permanent Council of States not subject to dissolution (Article 83)",
      "Safeguards federal rights of States in national lawmaking and constitutional amendments"
    ],
    "powers": [
      "Co-equal powers with Lok Sabha in ordinary and constitutional amendment legislation",
      "Special exclusive power to authorize Parliament to legislate on State List subjects (Article 249) and create All India Services (Article 312)"
    ],
    "limitations": [
      "Cannot vote on Money Bills or hold exclusive power over national supply/budgets (Article 109)",
      "Cannot pass a motion of no-confidence to dismiss the Council of Ministers"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-RS-CHAIRMAN",
    "type": "legislature",
    "title": "Rajya Sabha Presiding Hierarchy (Chairman & Deputy Chairman)",
    "abbreviation": "RS-CHAIRMAN",
    "sectionId": "SEC-DEM-02",
    "sectionNumber": "02",
    "level": "union",
    "category": "legislation",
    "position": {
      "x": 150,
      "y": 720
    },
    "summary": "The presiding officers of the Council of States (Article 89). The Vice-President is ex-officio Chairman, assisted by an elected Deputy Chairman from amongst the MPs of the Rajya Sabha, ensuring smooth legislative conduct and house discipline.",
    "mandate": [
      "Article 89: Council of States shall choose a member to be Deputy Chairman.",
      "Maintain parliamentary dignity, interpret Rules of Procedure and Conduct of Business in Rajya Sabha."
    ],
    "powers": [
      "Interprets rules and constitutional provisions within the House.",
      "Accepts or rejects privilege motions, calling attention notices, and adjournment discussions.",
      "Casts the deciding vote in the event of a tie."
    ],
    "limitations": [
      "Cannot vote in the first instance; only possesses a casting vote in case of an equality of votes."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 64, 89-92",
      "positionName": "Chairman & Deputy Chairman, Rajya Sabha",
      "cadreOrService": "Constitutional Parliamentary Presiding Officers",
      "electoralOrSelectionMethod": "Ex-officio (Chairman) / Elected by Rajya Sabha members (Deputy Chairman)",
      "tenure": "Term of Vice-Presidency (5 years) / Term of Rajya Sabha membership",
      "geographicalJurisdiction": "Council of States (Rajya Sabha), Sansad Bhavan, New Delhi",
      "reportingTo": "Parliament of India"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MP-RAJYA-SABHA",
    "type": "legislature",
    "title": "Member of Parliament — Rajya Sabha (245 MPs - States Representation)",
    "abbreviation": "MP-RAJYA-SABHA",
    "sectionId": "SEC-DEM-02",
    "sectionNumber": "02",
    "level": "union",
    "category": "legislation",
    "position": {
      "x": 150,
      "y": 880
    },
    "summary": "Representatives of States and Union Territories in the Council of States (Article 80). 233 members elected by elected MLAs of States/UTs using proportional representation by single transferable vote, plus 12 members nominated by the President for literature, science, art, and social service. Permanent House not subject to dissolution; one-third members retire every second year.",
    "mandate": [
      "Article 80: Composition of the Council of States (238 elected + 12 nominated).",
      "Article 83(1): Permanent House, one-third of members retiring every second year.",
      "Safeguard state interests in central federal legislation and national policy."
    ],
    "powers": [
      "Scrutinizes, amends, and passes legislative bills (except Money Bills).",
      "Article 249: Can authorize Parliament to make laws on State List subjects in national interest by 2/3 majority.",
      "Article 312: Can create new All-India Services common to Union and States by 2/3 majority resolution.",
      "Participates in presidential elections, vice-presidential elections, and constitutional amendments."
    ],
    "limitations": [
      "Money Bills cannot be introduced in Rajya Sabha and cannot be rejected/amended (must return within 14 days under Article 109).",
      "Cannot vote on Demands for Grants (Budget cuts/voting restricted to Lok Sabha under Article 113)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 80, 83(1), 84, 101-104, 249, 312",
      "positionName": "Member of Parliament (Rajya Sabha)",
      "cadreOrService": "Elected/Nominated Parliamentary Representative of States",
      "electoralOrSelectionMethod": "Elected by elected MLAs of State Assemblies via proportional representation / Nominated by President (12 members)",
      "tenure": "6 years (staggered, 1/3rd retire every 2 years)",
      "geographicalJurisdiction": "Representing State/UT in Union Parliament",
      "reportingTo": "State Electorate (MLAs) & Parliament of India"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-RPA"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-LOK-SABHA",
    "type": "sectionHub",
    "title": "SECTION 03: LOK SABHA & PARLIAMENTARY COMMITTEES",
    "abbreviation": "HUB-LOK-SABHA",
    "sectionId": "SEC-DEM-03",
    "sectionNumber": "03",
    "level": "constitutional",
    "category": "legislation",
    "summary": "The directly elected House of the People (543 MPs) and Parliamentary Standing Committees exercising primary legislative and financial authority under Articles 81-122.",
    "mandate": [
      "Direct representation of the Sovereign Citizens of India (Article 81)",
      "Enacts Union legislation and enforces parliamentary accountability on the executive"
    ],
    "powers": [
      "Exclusive authority to pass Money Bills and vote demands for grants (Articles 109-113)",
      "Exercises continuous oversight via Standing Committees (PAC, Estimates, COPU) and retains power to dismiss government via No-Confidence motion"
    ],
    "limitations": [
      "Subject to 5-year dissolution terms (Article 83)",
      "All statutes subject to judicial review under Basic Structure Doctrine"
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-RPA"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-LS-SPEAKER",
    "type": "legislature",
    "title": "Speaker of the Lok Sabha (Presiding Officer of Lower House)",
    "abbreviation": "LS-SPEAKER",
    "sectionId": "SEC-DEM-03",
    "sectionNumber": "03",
    "level": "union",
    "category": "legislation",
    "position": {
      "x": 150,
      "y": 1040
    },
    "summary": "The principal presiding officer and constitutional guardian of the House of the People (Article 93). Holds sole constitutional authority under Article 110(3) to certify whether a bill is a Money Bill. Presides over joint sittings of Parliament (Article 118). Adjudicates defection petitions under Tenth Schedule.",
    "mandate": [
      "Article 93: Election of Speaker and Deputy Speaker by Lok Sabha.",
      "Article 110(3): Final authority to certify a Bill as a Money Bill.",
      "Article 118(4): Presides over Joint Sittings of both Houses of Parliament.",
      "Tenth Schedule: Sole quasi-judicial authority to disqualify members on grounds of defection."
    ],
    "powers": [
      "Certifies Money Bills (conclusive and cannot be questioned in any court or Rajya Sabha).",
      "Allocates time for discussions, admits motions, and decides questions of privilege.",
      "Maintains order in the House; can suspend disorderly members.",
      "Heads the Business Advisory Committee and Rules Committee."
    ],
    "limitations": [
      "Decisions under the Tenth Schedule are subject to judicial review (Kihoto Hollohan v. Zachillhu).",
      "Cannot vote in the first instance; only exercises casting vote in case of equality of votes (Article 100)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 93-97, 100, 110(3), 118(4), Tenth Schedule",
      "positionName": "Speaker of the Lok Sabha",
      "cadreOrService": "Presiding Officer of the House of the People",
      "electoralOrSelectionMethod": "Elected by Lok Sabha MPs from amongst its members by simple majority",
      "tenure": "From election until immediately before the first meeting of the new Lok Sabha",
      "geographicalJurisdiction": "House of the People (Lok Sabha), Sansad Bhavan, New Delhi",
      "reportingTo": "House of the People (Lok Sabha)"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MP-LOK-SABHA",
    "type": "legislature",
    "title": "Member of Parliament — Lok Sabha (543 Elected MPs)",
    "abbreviation": "MP-LOK-SABHA",
    "sectionId": "SEC-DEM-03",
    "sectionNumber": "03",
    "level": "union",
    "category": "legislation",
    "position": {
      "x": 150,
      "y": 1200
    },
    "summary": "The directly elected popular representatives of the sovereign people of India in the House of the People (Article 81). 543 MPs elected from single-member territorial constituencies across the nation under universal adult franchise (Article 326). Represents constituent grievances, passes national legislation, and enforces executive accountability through Motions of No-Confidence.",
    "mandate": [
      "Article 81: Composition of the House of the People (not more than 530 from States, 20 from UTs).",
      "Article 75(3): The Council of Ministers is collectively responsible to the Lok Sabha.",
      "Exercise parliamentary control over executive administration and public taxation."
    ],
    "powers": [
      "Introduces and passes ordinary legislation, constitutional amendments, and Money Bills.",
      "Votes on Demands for Grants and passes the Annual Finance Bill and Appropriation Bill.",
      "Can move and vote on Motions of No-Confidence against the Union Council of Ministers.",
      "Participates in Question Hour, Zero Hour, and Parliamentary Standing Committees."
    ],
    "limitations": [
      "Disqualified if absent for 60 consecutive days without permission (Article 101(4)).",
      "Subject to disqualification under Tenth Schedule for defying party whip or defecting.",
      "Subject to disqualification under Section 8 of RPA 1951 upon conviction of 2+ years imprisonment."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 81, 84, 101-106, 326",
      "positionName": "Member of Parliament (Lok Sabha)",
      "cadreOrService": "Directly Elected Parliamentary Representative",
      "electoralOrSelectionMethod": "Direct universal adult suffrage by First-Past-The-Post in territorial constituencies",
      "tenure": "5 years (co-terminus with Lok Sabha unless dissolved earlier)",
      "geographicalJurisdiction": "Parliamentary Constituency (pan-India 543 constituencies)",
      "reportingTo": "Sovereign Electors / Electorate of Constituency"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-RPA"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-PARL-COMMITTEES",
    "type": "legislature",
    "title": "Parliamentary Standing & Financial Committees (PAC, Estimates, COPU)",
    "abbreviation": "PARL-COMMITTEES",
    "sectionId": "SEC-DEM-03",
    "sectionNumber": "03",
    "level": "union",
    "category": "legislation",
    "position": {
      "x": 150,
      "y": 1360
    },
    "summary": "The institutional watchdog mechanisms of Parliament: Public Accounts Committee (PAC - examines CAG reports, traditionally chaired by senior opposition MP), Estimates Committee, Committee on Public Undertakings (COPU), and 24 Departmentally-Related Standing Committees.",
    "mandate": [
      "Examine accounts showing the appropriation of sums granted by Parliament.",
      "Scrutinize annual budgets, demands for grants, and legislative bills of corresponding ministries."
    ],
    "powers": [
      "Summons departmental secretaries and officials to testify on financial irregularities.",
      "Examines efficiency, economy, and administrative improvements in ministries.",
      "Submits authoritative oversight reports to both Houses of Parliament."
    ],
    "limitations": [
      "Recommendations are advisory and cannot issue direct executive vetoes.",
      "Post-facto financial scrutiny rather than day-to-day administrative interference."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 105, 118",
      "positionName": "Parliamentary Committee System",
      "cadreOrService": "Joint Parliamentary Legislative Committees",
      "electoralOrSelectionMethod": "Proportional representation by single transferable vote among MPs",
      "tenure": "1 year annual reconstitution",
      "geographicalJurisdiction": "Union of India Ministries and PSUs",
      "reportingTo": "Speaker of Lok Sabha & Chairman of Rajya Sabha"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-PMO-CABINET",
    "type": "sectionHub",
    "title": "SECTION 04: PRIME MINISTER'S OFFICE & CABINET SECRETARIAT",
    "abbreviation": "HUB-PMO",
    "sectionId": "SEC-DEM-04",
    "sectionNumber": "04",
    "level": "union",
    "category": "executive-administration",
    "summary": "The political and bureaucratic apex of the Union Government: Prime Minister as Head of Government and Cabinet Secretariat coordinating all central ministries under Allocation of Business Rules 1961.",
    "mandate": [
      "Chief executive direction of the Government of India under Articles 74 and 75",
      "Administrative coordination of all ministries and All India Services (AIS) under Allocation of Business Rules"
    ],
    "powers": [
      "Prime Minister recommends appointment and dismissal of ministers to the President",
      "Cabinet Secretary oversees all central secretaries and chairs Committee of Secretaries"
    ],
    "limitations": [
      "Bound by collective ministerial responsibility to the Lok Sabha (Article 75(3))",
      "Executive orders must conform to constitutional provisions and parliamentary enactments"
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-PM",
    "type": "executive",
    "title": "Prime Minister of India (Head of Government & Elected MP)",
    "abbreviation": "PRIME-MINISTER",
    "sectionId": "SEC-DEM-04",
    "sectionNumber": "04",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 220
    },
    "summary": "The de facto Executive Head of the Government of India and primus inter pares (first among equals) of the Union Cabinet (Article 75). Appointed by the President as the leader of the party/coalition with majority in the Lok Sabha. Chief advisor to the President, head of Council of Ministers, and Chairman of NITI Aayog.",
    "mandate": [
      "Article 74(1): Head of Union Council of Ministers whose aid and advice is binding on President.",
      "Article 75(1): Appointed by President; other Ministers appointed by President on PM advice.",
      "Article 78: Communicates all decisions of Council of Ministers to President; furnishes all information on administration."
    ],
    "powers": [
      "Allocates and reshuffles portfolios among Union Ministers.",
      "Presides over Union Cabinet meetings and steers national policy and foreign affairs.",
      "Advises the President on appointments of Chief Justice, Governors, Election Commissioners, and Chiefs of Armed Forces.",
      "Advises President on prorogation and dissolution of the Lok Sabha."
    ],
    "limitations": [
      "Must maintain the confidence of the Lok Sabha; must resign if a No-Confidence Motion is passed.",
      "Must be or become a member of either House of Parliament within 6 months of appointment (Article 75(5))."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75, 78",
      "positionName": "Prime Minister of India",
      "cadreOrService": "Elected Head of Government (Member of Parliament)",
      "electoralOrSelectionMethod": "Appointed by President based on majority in Lok Sabha (Article 75(1))",
      "tenure": "At the pleasure of the President / Dependent on Lok Sabha majority (normally 5 years)",
      "geographicalJurisdiction": "Republic of India (Pan-India)",
      "reportingTo": "President of India (Art 78) & Lok Sabha (Art 75(3))"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CABINET-SEC",
    "type": "department",
    "title": "Cabinet Secretariat (Cabinet Secretary of India)",
    "abbreviation": "CABINET-SEC",
    "sectionId": "SEC-DEM-04",
    "sectionNumber": "04",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 220
    },
    "summary": "The apex administrative civil service office in the Government of India. The Cabinet Secretary is the senior-most civil servant, ex-officio Chairman of the Civil Services Board, head of the Cabinet Secretariat, and administrative advisor to the Prime Minister. Manages inter-ministerial coordination and administration of Allocation of Business Rules 1961.",
    "mandate": [
      "Manage secretarial assistance to the Union Cabinet and Cabinet Committees.",
      "Administer the Government of India (Transaction of Business) Rules 1961 and Allocation of Business Rules 1961.",
      "Ex-officio head of the Indian Administrative Service and Civil Services Board."
    ],
    "powers": [
      "Prepares agenda and records minutes for Union Cabinet meetings.",
      "Resolves inter-ministerial disputes and coordinates inter-departmental policy deadlocks.",
      "Chairs the National Crisis Management Committee (NCMC) during national disasters/emergencies.",
      "Recommends senior appointments (Secretaries, Directors General) to Appointments Committee of the Cabinet (ACC)."
    ],
    "limitations": [
      "Civil service coordinator with no independent ministerial political authority.",
      "Operates under the direct operational command and political direction of the Prime Minister."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77(3), Allocation of Business Rules 1961",
      "positionName": "Cabinet Secretary of India",
      "cadreOrService": "Indian Administrative Service (IAS) — Apex Senior Civil Servant",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC) chaired by PM",
      "tenure": "Fixed tenure (normally 2-4 years, subject to government extensions)",
      "geographicalJurisdiction": "Pan-India / Central Secretariat, Rashtrapati Bhavan, New Delhi",
      "reportingTo": "Prime Minister of India"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-DOPT-SEC",
    "type": "department",
    "title": "Department of Personnel and Training (DoPT Secretary)",
    "abbreviation": "DOPT-SECRETARY",
    "sectionId": "SEC-DEM-04",
    "sectionNumber": "04",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 380
    },
    "summary": "The cadre controlling authority for the Indian Administrative Service (IAS) and Central Secretariat Service (CSS). Regulates recruitment, service conditions, training, discipline, and anti-corruption vigilance policies for central government employees. Administratively oversees UPSC, SSC, and Central Vigilance Commission.",
    "mandate": [
      "Administer the All India Services Act 1951 and AIS Cadre Rules.",
      "Formulate recruitment policies, cadre allocation, promotion guidelines, and service conduct rules.",
      "Act as the administrative department for Central Bureau of Investigation (CBI) and CVC."
    ],
    "powers": [
      "Allocates cadres to UPSC-selected IAS officers across States and Joint Cadres.",
      "Issues Presidential sanction for prosecution of All-India Service officers in corruption cases.",
      "Formulates Central Civil Services (Conduct) Rules and Leave Rules."
    ],
    "limitations": [
      "Cannot unilaterally overrule UPSC statutory recommendations on disciplinary matters.",
      "Subject to judicial review by the Central Administrative Tribunal (CAT) under Article 323A."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 309, 311, 312, AIS Act 1951",
      "positionName": "Secretary, Department of Personnel and Training (DoPT)",
      "cadreOrService": "Indian Administrative Service (IAS)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "tenure": "Standard Secretarial tenure",
      "geographicalJurisdiction": "Pan-India Central Services & AIS Cadres",
      "reportingTo": "Minister of Personnel (Prime Minister of India)"
    },
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-DEFENCE",
    "type": "sectionHub",
    "title": "SECTION 05: MINISTRY OF DEFENCE & ARMED FORCES",
    "abbreviation": "HUB-DEFENCE",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "executive-administration",
    "summary": "Comprehensive military command and defence administration: Ministry of Defence, Chief of Defence Staff (CDS), Indian Army, Indian Navy, and Indian Air Force.",
    "mandate": [
      "Protect the sovereignty, territorial integrity, and borders of the Republic of India",
      "Strategic military deterrence, coastal security, and aerospace defence"
    ],
    "powers": [
      "Directs 1.4 million active military personnel and operational strike commands",
      "Conducts joint military operations, indigenous defence manufacturing, and strategic border management"
    ],
    "limitations": [
      "Strictly subordinate to civilian constitutional executive control (Article 53(2))",
      "Military operations require Cabinet Committee on Security (CCS) political authorization"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOD-MINISTER",
    "type": "executive",
    "title": "Ministry of Defence (Union Defence Minister & Defence Secretary)",
    "abbreviation": "MOD-MINISTER",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 540
    },
    "summary": "Charged with coordinating and supervising all agencies and functions of government relating directly to national security and the Indian Armed Forces (Army, Navy, Air Force). Coordinates defence production, DRDO research, and ex-servicemen welfare.",
    "mandate": [
      "Ensure defence of India and every part thereof including preparation for defence.",
      "Executive governance over the Indian Army, Indian Navy, Indian Air Force, and Coast Guard."
    ],
    "powers": [
      "Procures military weapon systems and signs strategic bilateral defence treaties.",
      "Directs Defence Research and Development Organisation (DRDO) and ordnance manufacturing.",
      "Allocates the annual national Defence Budget across armed forces headquarters."
    ],
    "limitations": [
      "Operational deployments governed under Cabinet Committee on Security (CCS) chaired by PM.",
      "Armed forces cannot take over civil administration without formal executive requisition."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-ARMED-FORCES-CDS",
    "type": "office",
    "title": "Chief of Defence Staff (CDS) & Department of Military Affairs",
    "abbreviation": "CDS-DMA",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 540
    },
    "summary": "Principal military advisor to the Defence Minister on tri-service matters and Permanent Chairman of Chiefs of Staff Committee. Heads the Department of Military Affairs (DMA) to drive jointness, integrated theatre commands, and tri-service synergy.",
    "mandate": [
      "Promote joint procurement, training, and operational doctrines among Army, Navy, and Air Force.",
      "Establish Integrated Theatre Commands for joint warfighting capabilities."
    ],
    "powers": [
      "Prioritizes military equipment procurement and capital acquisitions for all three wings.",
      "Coordinates tri-service agencies: Defence Cyber Agency, Defence Space Agency, and Special Forces."
    ],
    "limitations": [
      "Does not exercise direct operational field command over service headquarters (remains advisory and structural)."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-ARMY-HEADS",
    "type": "office",
    "title": "Indian Army (Chief of Army Staff & 7 Operational Commands)",
    "abbreviation": "INDIAN-ARMY",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 700
    },
    "summary": "The land-based branch and the largest component of the Indian Armed Forces under the command of the Chief of Army Staff (COAS, 4-star General). Divided into 7 operational and training commands across India.",
    "mandate": [
      "Safeguard territorial integrity against external aggression and cross-border threats.",
      "Provide Aid to Civil Authority during severe natural disasters and grave internal security crises."
    ],
    "powers": [
      "Commands 1.2+ million active soldiers and field corps across northern, western, and eastern borders.",
      "Deploys counter-insurgency formations under statutory authorizations (e.g., AFSPA where invoked)."
    ],
    "limitations": [
      "Subordinate to civilian political executive command under the Union Cabinet and MoD."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-NAVY-AIRFORCE-HEADS",
    "type": "office",
    "title": "Indian Navy & Indian Air Force (CNS & CAS Air Commands)",
    "abbreviation": "NAVY-AIRFORCE",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 700
    },
    "summary": "Indian Navy under Chief of Naval Staff (Admiral) protecting maritime borders, EEZ, and sea lanes in the Indian Ocean; and Indian Air Force under Chief of Air Staff (Air Chief Marshal) securing national airspace and providing tactical air power.",
    "mandate": [
      "Secure the maritime sovereignty and air defence borders of the Indian Republic.",
      "Provide swift strategic airlift, disaster relief, and anti-piracy deterrence."
    ],
    "powers": [
      "Deploys aircraft carriers, nuclear and conventional submarines, and guided missile destroyers.",
      "Controls frontline combat fighter squadrons, air defence missile nets, and military radar grids."
    ],
    "limitations": [
      "Civilian executive authorization strictly required for sovereign cross-border strikes."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-HOME-AFFAIRS",
    "type": "sectionHub",
    "title": "SECTION 06: MINISTRY OF HOME AFFAIRS & CAPFs",
    "abbreviation": "HUB-MHA",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "executive-administration",
    "summary": "National internal security, border guarding, central counter-terrorism, and administration of Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG, Assam Rifles).",
    "mandate": [
      "Maintain domestic peace, public order coordination, and border security",
      "Command and deployment of 1 million CAPF paramilitary personnel across India"
    ],
    "powers": [
      "Oversees federal intelligence (IB) and anti-terror prosecution (NIA)",
      "Allocates IPS cadre officers to states and deploys central security battalions in aid of civil power"
    ],
    "limitations": [
      "Law and order is primarily a State subject under Schedule 7, List II, Entry 1 & 2",
      "CAPF deployments in states require statutory coordination with State Home Departments"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MHA-MINISTER",
    "type": "executive",
    "title": "Ministry of Home Affairs (Union Home Minister & Home Secretary)",
    "abbreviation": "MHA-MINISTER",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 860
    },
    "summary": "Responsible for internal security, border management, Centre-State relations, disaster management, and administrative control over Union Territories. Controls the 1-million-strong Central Armed Police Forces (CAPFs) and coordinates with State Police.",
    "mandate": [
      "Maintain internal peace, border integrity, and national counter-terrorism architecture.",
      "Administer the Foreigners Act, Unlawful Activities (Prevention) Act, and citizenship laws."
    ],
    "powers": [
      "Deploys CAPFs to assist states in law and order, counter-insurgency, and national elections.",
      "Supervises national intelligence and counter-terror agencies: Intelligence Bureau (IB) and NIA."
    ],
    "limitations": [
      "Public Order and Police are state subjects under Seventh Schedule, List II, Entry 1 & 2.",
      "Cannot deploy federal police inside a state without invitation or exceptional constitutional grounds."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CAPF-HEADS",
    "type": "department",
    "title": "Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG, Assam Rifles)",
    "abbreviation": "CAPF-HEADS",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 860
    },
    "summary": "Paramilitary and armed police forces under MHA command: CRPF (internal security/riots), BSF (Pakistan/Bangladesh borders), CISF (airports, metros, vital installations), ITBP (China border), SSB (Nepal/Bhutan borders), NSG (counter-terror commandos), and Assam Rifles.",
    "mandate": [
      "Border security, counter-insurgency, anti-Naxal operations, and vital infrastructure security."
    ],
    "powers": [
      "Conducts combat patrols, arrests suspects in declared border belts and scheduled territories.",
      "Secures polling booths nationwide during General and Assembly elections under ECI deputation."
    ],
    "limitations": [
      "Regular criminal prosecution and FIR registration powers reside in State Police stations."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-EXTERNAL-AFFAIRS",
    "type": "sectionHub",
    "title": "SECTION 07: MINISTRY OF EXTERNAL AFFAIRS",
    "abbreviation": "HUB-MEA",
    "sectionId": "SEC-DEM-07",
    "sectionNumber": "07",
    "level": "union",
    "category": "executive-administration",
    "summary": "The diplomatic nerve center of India: formulation and execution of foreign policy, bilateral diplomacy, multilateral multilateral representation, and administration of IFS missions worldwide.",
    "mandate": [
      "Conduct of external affairs and international relations under Schedule 7, List I, Entry 10-14",
      "Protect sovereign interests of the Indian Republic and overseas diaspora globally"
    ],
    "powers": [
      "Negotiates international treaties, protocols, and bilateral security agreements",
      "Directs Indian Foreign Service (IFS) officers across worldwide embassies and consulates"
    ],
    "limitations": [
      "International treaties requiring internal law changes must be enacted by Parliament (Article 253)",
      "Foreign policy spending subject to parliamentary budgetary approval"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MEA-MINISTER",
    "type": "executive",
    "title": "Ministry of External Affairs (External Affairs Minister & Foreign Secretary)",
    "abbreviation": "MEA-MINISTER",
    "sectionId": "SEC-DEM-07",
    "sectionNumber": "07",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 1020
    },
    "summary": "Conducts the external relations and foreign policy of the Republic of India. Controls the Indian Foreign Service (IFS), overseas embassies, high commissions, consulates, passport issuance (Passport Seva), and international treaties.",
    "mandate": [
      "Represent India in United Nations, multilateral forums, and bilateral diplomatic missions.",
      "Negotiate treaties, manage passport issuance, and protect Indian citizens abroad."
    ],
    "powers": [
      "Conducts diplomatic negotiations and executes bilateral extradition and trade agreements.",
      "Supervises Indian diplomatic missions across 190+ countries worldwide."
    ],
    "limitations": [
      "Major strategic treaties require approval of Cabinet Committee on Security and Parliament."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-FINANCE",
    "type": "sectionHub",
    "title": "SECTION 08: MINISTRY OF FINANCE & REVENUE",
    "abbreviation": "HUB-FINANCE",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "executive-administration",
    "summary": "National macroeconomic planning, annual union budget preparation, public expenditure management, direct taxation (CBDT), indirect taxation (CBIC / GST & Customs), and industrial commerce.",
    "mandate": [
      "Preparation and presentation of the Annual Financial Statement under Article 112",
      "Collection of central direct and indirect tax revenues to finance national governance"
    ],
    "powers": [
      "Directs IRS-IT and IRS-Customs & GST cadres and financial intelligence units",
      "Formulates fiscal stimulus, manages foreign exchange reserves with RBI, and regulates government procurement"
    ],
    "limitations": [
      "No tax can be levied or collected except by statutory authority of law (Article 265)",
      "Union expenditure strictly governed by Appropriation Acts passed by Parliament"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOF-MINISTER",
    "type": "executive",
    "title": "Ministry of Finance (Union Finance Minister & Finance Secretary)",
    "abbreviation": "MOF-MINISTER",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "funding-finance",
    "position": {
      "x": 960,
      "y": 1020
    },
    "summary": "Manages national public finances, prepares the Annual Union Budget (Article 112), controls direct/indirect tax policies, coordinates monetary policy with RBI, and regulates financial institutions and public sector banking.",
    "mandate": [
      "Article 112: Present Annual Financial Statement (Union Budget) before Parliament.",
      "Manage Union expenditure, fiscal deficit targets under FRBM Act, and revenue mobilization."
    ],
    "powers": [
      "Drafts the annual Finance Bill containing all tax rates, exemptions, and surcharges.",
      "Releases funds to Central Ministries and centrally sponsored schemes to States.",
      "Enforces anti-money laundering regulations through Enforcement Directorate (ED)."
    ],
    "limitations": [
      "Cannot levy taxes without parliamentary legislation (Article 265).",
      "Cannot withdraw money from the Consolidated Fund of India without an Appropriation Act (Article 114)."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CBDT-IRS-REVENUE",
    "type": "department",
    "title": "Central Boards of Direct & Indirect Taxes (CBDT & CBIC / IRS Cadres)",
    "abbreviation": "CBDT-CBIC-REVENUE",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "funding-finance",
    "position": {
      "x": 600,
      "y": 1180
    },
    "summary": "Statutory boards under the Central Board of Revenue Act 1963: CBDT (administers Income Tax Act through IRS-IT officers) and CBIC (administers Central Goods & Services Tax - CGST, Customs, and Excise through IRS-C&CE officers).",
    "mandate": [
      "Levy and collect personal income tax, corporate tax, customs duties, and central GST."
    ],
    "powers": [
      "Conducts tax assessments, search and seizure operations, and audits of suspected tax evasion.",
      "Issues binding circulars and administrative guidance to field tax assessment officers."
    ],
    "limitations": [
      "Assessments subject to statutory appeal before CIT (Appeals), ITAT / CESTAT, and High Courts."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-COMMERCE-MINISTER",
    "type": "executive",
    "title": "Ministry of Commerce & Industry (Commerce Minister & DPIIT)",
    "abbreviation": "COMMERCE-MINISTER",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 1180
    },
    "summary": "Formulates national trade policy, administers patents and trademarks (DPIIT), promotes Foreign Direct Investment (FDI), and negotiates Free Trade Agreements (FTAs) with global trading partners.",
    "mandate": [
      "Expand export merchandise and services, promote ease of doing business, and protect domestic IP."
    ],
    "powers": [
      "Formulates Foreign Trade Policy (FTP) through Directorate General of Foreign Trade (DGFT).",
      "Grants industrial patents, design rights, and geographical indications (GI)."
    ],
    "limitations": [
      "Tariff changes must align with WTO commitments and Finance Ministry revenue notifications."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-RAILWAYS",
    "type": "sectionHub",
    "title": "SECTION 09: MINISTRY OF RAILWAYS & RAILWAY BOARD",
    "abbreviation": "HUB-RAILWAYS",
    "sectionId": "SEC-DEM-09",
    "sectionNumber": "09",
    "level": "union",
    "category": "executive-administration",
    "summary": "National railway transportation network: Railway Board CEO, 17 Zonal Railway Administrations, and 68 Operating Divisions running over 13,000 passenger trains daily.",
    "mandate": [
      "Operation, maintenance, and modernization of the national railway transport network",
      "Affordable passenger mobility and nationwide industrial freight logistics"
    ],
    "powers": [
      "Administers Indian Railway Management Service (IRMS) and national rail property",
      "Approves dedicated freight corridors, high-speed rail corridors, and rolling stock manufacturing"
    ],
    "limitations": [
      "Tariff policies subject to national parliamentary oversight and audit by CAG",
      "Safety protocols subject to statutory inspection by Commissioner of Railway Safety (CRS)"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-RAILWAYS-MINISTER",
    "type": "executive",
    "title": "Ministry of Railways (Railway Minister & Railway Board / CEO)",
    "abbreviation": "RAILWAYS-MINISTER",
    "sectionId": "SEC-DEM-09",
    "sectionNumber": "09",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 1340
    },
    "summary": "Heads Indian Railways, the fourth largest national railway network in the world. Governed through the Railway Board (Chairman & CEO) supervising 17 Zonal Railways, 68 Operating Divisions (DRMs), and Dedicated Freight Corridors (DFCCIL).",
    "mandate": [
      "Provide passenger, freight, and suburban rail transport network across India."
    ],
    "powers": [
      "Sets passenger fares, freight tariffs, and superintends Railway Protection Force (RPF).",
      "Approves new railway lines, track electrification, rolling stock (Vande Bharat), and station upgrades."
    ],
    "limitations": [
      "Safety oversights governed independently by the Commission of Railway Safety (under Civil Aviation Ministry)."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-EDUCATION",
    "type": "sectionHub",
    "title": "SECTION 10: MINISTRY OF EDUCATION",
    "abbreviation": "HUB-EDUCATION",
    "sectionId": "SEC-DEM-10",
    "sectionNumber": "10",
    "level": "union",
    "category": "executive-administration",
    "summary": "National educational policy and standards: Department of Higher Education (DHE) and Department of School Education and Literacy (DSEL), overseeing UGC, CBSE, NCERT, and central universities.",
    "mandate": [
      "Implementation of National Education Policy (NEP) and Right to Education Act (Article 21A)",
      "Promote equitable access to quality education, literacy, and research excellence"
    ],
    "powers": [
      "Funds and administers Central Universities, IITs, IIMs, and national research institutes",
      "Sets national curriculum frameworks (NCF) and school examination standards via CBSE/NCERT"
    ],
    "limitations": [
      "Education is in the Concurrent List (Schedule 7, List III, Entry 25); states exercise concurrent jurisdiction",
      "University autonomous academic freedoms protected by statutory charters"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-EDUCATION-MINISTER",
    "type": "executive",
    "title": "Ministry of Education (MoE: School Education DSEL & Higher Education DHE)",
    "abbreviation": "EDUCATION-MINISTER",
    "sectionId": "SEC-DEM-10",
    "sectionNumber": "10",
    "level": "union",
    "category": "higher-education",
    "position": {
      "x": 600,
      "y": 1660
    },
    "summary": "Responsible for the implementation of the National Education Policy (NEP 2020). Divided into Department of School Education & Literacy (CBSE, NCERT, Kendriya Vidyalayas) and Department of Higher Education (UGC, AICTE, IITs, IIMs, Central Universities).",
    "mandate": [
      "Ensure right to education under Article 21A, universal literacy, and world-class higher education standards."
    ],
    "powers": [
      "Funds central universities, institutes of national importance, and autonomous regulatory councils.",
      "Conducts nationwide entrance exams via National Testing Agency (NTA)."
    ],
    "limitations": [
      "Education is on Concurrent List (Entry 25); states govern state schools and state public universities."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-HEALTH",
    "type": "sectionHub",
    "title": "SECTION 11: MINISTRY OF HEALTH & FAMILY WELFARE",
    "abbreviation": "HUB-HEALTH",
    "sectionId": "SEC-DEM-11",
    "sectionNumber": "11",
    "level": "union",
    "category": "executive-administration",
    "summary": "Public health policy, tertiary medical institutions (AIIMS), epidemic disease prevention, drug regulatory quality, and national healthcare financing through National Health Mission and Ayushman Bharat.",
    "mandate": [
      "Improve public health, nutrition standards, and affordable healthcare access (Article 47)",
      "Control communicable and non-communicable diseases and coordinate national medical research"
    ],
    "powers": [
      "Finances national healthcare infrastructure and emergency disease control programs",
      "Oversees National Medical Commission (NMC) standards and Central Drugs Standard Control Organisation (CDSCO)"
    ],
    "limitations": [
      "Public health and sanitation are primarily State subjects under Schedule 7, List II, Entry 6",
      "Field public hospital administration depends on state healthcare departments"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HEALTH-MINISTER",
    "type": "executive",
    "title": "Ministry of Health and Family Welfare (MoHFW: Health & Research / AIIMS)",
    "abbreviation": "HEALTH-MINISTER",
    "sectionId": "SEC-DEM-11",
    "sectionNumber": "11",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 1660
    },
    "summary": "Formulates national healthcare policies, implements National Health Mission (NHM) and Ayushman Bharat (PM-JAY), regulates food safety (FSSAI) and pharmaceuticals (CDSCO), and controls apex medical institutions (AIIMS, ICMR).",
    "mandate": [
      "Promote public health, medical education standards (NMC), and disease prevention."
    ],
    "powers": [
      "Approves new AIIMS institutions, oversees Central Drugs Standard Control Organisation (CDSCO).",
      "Provides subsidized public health insurance to 500+ million citizens under Ayushman Bharat."
    ],
    "limitations": [
      "Public health and hospitals are primarily state subjects under Seventh Schedule, List II, Entry 6."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-AGRI-RURAL",
    "type": "sectionHub",
    "title": "SECTION 12: AGRICULTURE, RURAL DEVELOPMENT & FOOD SECURITY",
    "abbreviation": "HUB-AGRI-RURAL",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "executive-administration",
    "summary": "Agrarian economy, rural employment generation, water security, and national food distribution: PM-KISAN, ICAR research, MGNREGA rural employment, Jal Jeevan Mission, and FCI foodgrain operations.",
    "mandate": [
      "Support agrarian livelihoods, food security, and rural poverty alleviation",
      "Ensure nationwide minimum support price (MSP) procurement and public foodgrain distribution"
    ],
    "powers": [
      "Transfers direct income support to 110+ million farming families (PM-KISAN)",
      "Finances 100 days statutory wage employment per rural household under MGNREGA Act 2005"
    ],
    "limitations": [
      "Agriculture and land administration are State subjects under Schedule 7, List II, Entry 14 & 18",
      "Execution of rural schemes depends on State and Panchayati Raj institutions"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-AGRI-MINISTER",
    "type": "executive",
    "title": "Ministry of Agriculture & Farmers Welfare (MoA&FW: PM-KISAN, ICAR)",
    "abbreviation": "AGRI-MINISTER",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 1820
    },
    "summary": "Responsible for agricultural development, crop insurance (PMFBY), income support (PM-KISAN), agricultural credit, and research through the Indian Council of Agricultural Research (ICAR).",
    "mandate": [
      "Enhance farmer income, farm productivity, soil health, and national food crop security."
    ],
    "powers": [
      "Recommends Minimum Support Prices (MSP) through Commission for Agricultural Costs & Prices (CACP).",
      "Disburses direct benefit cash transfers to 110+ million registered farmer beneficiaries."
    ],
    "limitations": [
      "Agriculture is a state subject under List II, Entry 14; field implementation relies on State Agriculture Departments."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-RURAL-MINISTER",
    "type": "executive",
    "title": "Ministries of Rural Development & Panchayati Raj (MGNREGA & PRIs)",
    "abbreviation": "RURAL-MINISTER",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 1820
    },
    "summary": "Drives rural poverty alleviation through the Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGA), rural roads (PMGSY), and institutional empowerment of Panchayati Raj Institutions (73rd Amendment).",
    "mandate": [
      "Guarantee 100 days wage employment to rural households and empower Gram Panchayats."
    ],
    "powers": [
      "Transfers wage and material funds directly to bank accounts of rural workers.",
      "Assesses and rates Panchayat performance across India through national devolution metrics."
    ],
    "limitations": [
      "Panchayat laws and elections are governed by respective State Legislatures and State Election Commissions."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-JALSHAKTI-MINISTER",
    "type": "executive",
    "title": "Ministry of Jal Shakti (Jal Jeevan Mission & River Development)",
    "abbreviation": "JALSHAKTI-MINISTER",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 1980
    },
    "summary": "Integrates water resources management, Namami Gange (National Mission for Clean Ganga), inter-state river water disputes, and Jal Jeevan Mission providing piped drinking water to every rural household.",
    "mandate": [
      "Ensure water security, rural tap water supply, and ecological rejuvenation of river basins."
    ],
    "powers": [
      "Sets up Inter-State River Water Disputes Tribunals under Article 262.",
      "Supervises Central Water Commission (CWC) and Central Ground Water Board (CGWB)."
    ],
    "limitations": [
      "Water supply, irrigation, and drainage are state subjects under List II, Entry 17."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CONSUMER-FOOD-MINISTER",
    "type": "executive",
    "title": "Ministry of Consumer Affairs, Food & Public Distribution (FCI & PDS / Ration)",
    "abbreviation": "CONSUMER-FOOD",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 2460
    },
    "summary": "Runs the world's largest food welfare security network under the National Food Security Act (NFSA / PMGKAY). Purchases foodgrains via Food Corporation of India (FCI) and distributes subsidized rations through 500,000+ Fair Price Shops.",
    "mandate": [
      "Procure foodgrains from farmers at MSP, maintain national buffer stocks, and ensure subsidized food grains to 800+ million citizens."
    ],
    "powers": [
      "Manages nationwide movement of food grains via special freight rakes to state food godowns.",
      "Enforces Consumer Protection Act 2019 through Central Consumer Protection Authority (CCPA)."
    ],
    "limitations": [
      "Beneficiary identification and ration shop licensing executed by State Food & Civil Supplies Departments."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-INFRASTRUCTURE",
    "type": "sectionHub",
    "title": "SECTION 13: CORE INFRASTRUCTURE, ENERGY & ENVIRONMENT",
    "abbreviation": "HUB-INFRASTRUCTURE",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "executive-administration",
    "summary": "Strategic national connectivity and ecology: National Highway network (NHAI), civil aviation (DGCA/AAI), major sea ports, national power grid, petroleum refining, and environmental clearances (MoEFCC).",
    "mandate": [
      "Build modern physical infrastructure, highway networks, clean energy grids, and port corridors",
      "Balance national industrial growth with statutory environmental conservation (Article 48A)"
    ],
    "powers": [
      "Constructs and tolls 145,000+ km of National Highways via NHAI",
      "Grants statutory Environmental and Forest Clearances and regulates national civil aviation and power grids"
    ],
    "limitations": [
      "Land acquisition for infrastructure governed by RFCTLARR Act 2013 and state laws",
      "Environmental decisions subject to National Green Tribunal (NGT) judicial review"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MORTH-MINISTER",
    "type": "executive",
    "title": "Ministry of Road Transport and Highways (MoRTH & NHAI)",
    "abbreviation": "MORTH-MINISTER",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 1340
    },
    "summary": "Develops and maintains the National Highways network spanning 145,000+ km through the National Highways Authority of India (NHAI). Enforces the Motor Vehicles Act, vehicular emissions, and national road safety policies.",
    "mandate": [
      "Plan, construct, and manage national expressways, economic corridors, and highways."
    ],
    "powers": [
      "Awards toll concessions, public-private partnership (PPP) road contracts, and collects FASTag tolls.",
      "Notifies Bharat Stage (BS-VI) emission norms and national driving license/registration standards."
    ],
    "limitations": [
      "State highways and rural roads belong to State Public Works Departments (PWD) and Panchayats."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POWER-MINISTER",
    "type": "executive",
    "title": "Ministries of Power & New and Renewable Energy (Power, MNRE & Grid)",
    "abbreviation": "POWER-MNRE",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 1500
    },
    "summary": "Oversees electricity generation, transmission, and distribution across India. Regulates the unified National Grid (PowerGrid / POSOCO) and drives renewable solar, wind, and green hydrogen targets under MNRE.",
    "mandate": [
      "Ensure uninterrupted quality power across national grid and promote renewable transition."
    ],
    "powers": [
      "Sets National Electricity Policy through Central Electricity Authority (CEA) and CERC.",
      "Provides financial restructuring schemes to state electricity distribution companies (DISCOMs)."
    ],
    "limitations": [
      "Retail electricity distribution and retail consumer tariffs determined by State Electricity Regulatory Commissions (SERCs)."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-PETROLEUM-MINISTER",
    "type": "executive",
    "title": "Ministry of Petroleum & Natural Gas (MoPNG & Oil PSUs)",
    "abbreviation": "PETROLEUM-MINISTER",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 1500
    },
    "summary": "Manages exploration, refining, and distribution of petroleum, natural gas, and liquefied fuels. Directs major oil and gas public sector undertakings (ONGC, IOCL, BPCL, HPCL, GAIL) and national strategic crude reserves.",
    "mandate": [
      "Maintain energy security through domestic crude exploration and strategic foreign supply contracts."
    ],
    "powers": [
      "Awards oil & gas exploration blocks under Open Acreage Licensing Policy (OALP).",
      "Regulates city gas distribution (CGD) licenses and piped natural gas networks."
    ],
    "limitations": [
      "Petroleum crude and retail fuels remain currently outside the GST regime (subject to state VAT)."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOEFCC-MINISTER",
    "type": "executive",
    "title": "Ministry of Environment, Forest & Climate Change (MoEFCC & CPCB)",
    "abbreviation": "MOEFCC-MINISTER",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 1980
    },
    "summary": "Governs environmental protection, wildlife conservation (Project Tiger/Elephant), forestry, pollution control (Central Pollution Control Board - CPCB), and international climate commitments under Paris Agreement.",
    "mandate": [
      "Administer Environment (Protection) Act 1986, Forest (Conservation) Act, and Wildlife Protection Act."
    ],
    "powers": [
      "Grants mandatory Environmental Clearances (EC) and Forest Clearances for industrial and infrastructure projects.",
      "Cadre controlling authority for the Indian Forest Service (IFS)."
    ],
    "limitations": [
      "Decisions subject to legal review and appeals before the National Green Tribunal (NGT)."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOHUA-MINISTER",
    "type": "executive",
    "title": "Ministry of Housing and Urban Affairs (MoHUA: Smart Cities, Metro Rail)",
    "abbreviation": "MOHUA-MINISTER",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 960,
      "y": 2300
    },
    "summary": "Responsible for national urban development policy, Smart Cities Mission, Atal Mission for Rejuvenation & Urban Transformation (AMRUT), Pradhan Mantri Awas Yojana - Urban (PMAY-U), and urban rapid transit (Metro Rail networks).",
    "mandate": [
      "Formulate urban planning standards, fund urban rejuvenation, and expand mass rapid transit systems."
    ],
    "powers": [
      "Allocates central equity and grants for city metro rail corporations.",
      "Enforces Real Estate (Regulation and Development) Act (RERA) model frameworks across states."
    ],
    "limitations": [
      "Urban local governance is governed by municipal acts passed by respective State Legislatures."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-TECH-LAW",
    "type": "sectionHub",
    "title": "SECTION 14: TECHNOLOGY, LAW & SCIENTIFIC DEPARTMENTS",
    "abbreviation": "HUB-TECH-LAW",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "summary": "Digital public infrastructure (MeitY), statutory law drafting, Attorney General apex counsel, labour welfare codes (EPFO/ESIC), and frontier space/nuclear programs (ISRO & DAE).",
    "mandate": [
      "Pioneer digital governance, maintain legal soundness of union acts, and protect labor welfare",
      "Advance national capabilities in outer space exploration and civil nuclear power"
    ],
    "powers": [
      "Oversees Aadhaar UIDAI digital identity, cyber security (CERT-In), and semiconductor mission",
      "Launches satellite launch vehicles (ISRO) and manages civilian nuclear reactor fleet (DAE)"
    ],
    "limitations": [
      "Digital surveillance and personal data systems subject to constitutional privacy rights (Article 21)",
      "Statutes drafted must comply with constitutional basic structure parameters"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MEITY-MINISTER",
    "type": "executive",
    "title": "Ministry of Electronics & Information Technology (MeitY: Digital India, UIDAI)",
    "abbreviation": "MEITY-MINISTER",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 2140
    },
    "summary": "Promotes digital public infrastructure (UPI, Aadhaar, DigiLocker), cyber security through CERT-In, electronics hardware manufacturing (Semiconductor Mission), and administers the Information Technology Act and DPDP Act.",
    "mandate": [
      "Drive Digital India initiatives, protect national cyberspace, and regulate personal data protection."
    ],
    "powers": [
      "Issues blocking orders for malicious/unlawful internet content under Section 69A of IT Act.",
      "Supervises Unique Identification Authority of India (UIDAI / Aadhaar)."
    ],
    "limitations": [
      "Online content restrictions subject to fundamental speech review under Article 19(2) (Shreya Singhal ruling)."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOLJ-MINISTER",
    "type": "executive",
    "title": "Ministry of Law and Justice (Union Law Minister & Legal Affairs)",
    "abbreviation": "MOLJ-MINISTER",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "legislation",
    "position": {
      "x": 960,
      "y": 2140
    },
    "summary": "Drafts government bills, ordinances, and constitutional amendments through the Legislative Department, advises ministries on constitutional law through Department of Legal Affairs, and handles judicial appointments administration.",
    "mandate": [
      "Draft all Union Bills, statutory rules, regulations, and Presidential ordinances.",
      "Administer the Legal Services Authorities Act (NALSA) providing free legal aid to underprivileged citizens."
    ],
    "powers": [
      "Scrutinizes legislative validity of all government proposals before Cabinet submission.",
      "Processes Supreme Court Collegium recommendations for appointment of High Court and Supreme Court judges."
    ],
    "limitations": [
      "Cannot instruct judges or interfere in active judicial adjudication."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-AG-INDIA",
    "type": "constitutional",
    "title": "Attorney General for India (First Law Officer of the Republic)",
    "abbreviation": "ATTORNEY-GENERAL",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "legislation",
    "position": {
      "x": 600,
      "y": 2300
    },
    "summary": "The highest legal officer of the Government of India (Article 76). Appointed by the President; qualified to be appointed a Judge of the Supreme Court. Advises the Union Government on complex constitutional and legal questions and represents the Republic before the Supreme Court.",
    "mandate": [
      "Article 76: Advise the Government of India upon legal matters referred by the President.",
      "Perform other legal duties assigned by the President or under the Constitution."
    ],
    "powers": [
      "Right of audience in all courts in the territory of India (Article 76(3)).",
      "Right to speak and participate in proceedings of both Houses of Parliament and Committees (Article 88)."
    ],
    "limitations": [
      "Does not have a right to vote in Parliament (Article 88).",
      "Cannot advise or hold a brief against the Government of India.",
      "Holds office during the pleasure of the President (traditionally resigns when government changes)."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-LABOUR-MINISTER",
    "type": "executive",
    "title": "Ministry of Labour and Employment (Labour Codes, EPFO & ESIC)",
    "abbreviation": "LABOUR-MINISTER",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 600,
      "y": 2460
    },
    "summary": "Protects workers' interests, administers social security schemes through Employees' Provident Fund Organisation (EPFO) and Employees' State Insurance Corporation (ESIC), and enforces 4 consolidated Labour Codes.",
    "mandate": [
      "Ensure occupational safety, wage standards, social security pensions, and industrial dispute resolution."
    ],
    "powers": [
      "Fixes national floor level minimum wages and superintends Central Industrial Relations Machinery (CIRM).",
      "Administers retirement savings of 60+ million organized sector employees in EPFO."
    ],
    "limitations": [
      "Labor is on Concurrent List (Entry 22-24); states administer state labor welfare boards and inspectorates."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-SCIENCE-DEPT",
    "type": "department",
    "title": "Departments of Space & Atomic Energy (ISRO, DAE & Nuclear Power)",
    "abbreviation": "SPACE-ATOMIC-ENERGY",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "position": {
      "x": 780,
      "y": 2620
    },
    "summary": "Direct departments operating under the direct charge of the Prime Minister: Department of Space (ISRO - satellite launch vehicles, Chandrayaan, Gaganyaan) and Department of Atomic Energy (DAE - BARC, NPCIL commercial nuclear reactors).",
    "mandate": [
      "Develop indigenous space technology, planetary exploration, and safe civil nuclear power generation."
    ],
    "powers": [
      "Launches national remote sensing, communication, and navigation satellites (NavIC).",
      "Controls uranium fuel fabrication and commercial nuclear electricity generation (NPCIL)."
    ],
    "limitations": [
      "Nuclear installations subject to safety audits by the Atomic Energy Regulatory Board (AERB)."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-JUDICIARY",
    "type": "sectionHub",
    "title": "SECTION 15: APEX & HIGHER JUDICIARY",
    "abbreviation": "HUB-JUDICIARY",
    "sectionId": "SEC-DEM-15",
    "sectionNumber": "15",
    "level": "constitutional",
    "category": "oversight-remedies",
    "summary": "The unified independent judicial pillar: Supreme Court of India, 25 High Courts, and Subordinate District Judiciary exercising judicial review under Articles 124-237.",
    "mandate": [
      "Custodians and ultimate interpreters of the Constitution of India (Article 141)",
      "Protectors of Fundamental Rights through prerogative writs under Article 32 and Article 226"
    ],
    "powers": [
      "Strikes down parliamentary laws violating Basic Structure of Constitution",
      "Orders are binding on all authorities across the territory of India (Article 144)"
    ],
    "limitations": [
      "Cannot perform legislative policymaking or executive administration (Separation of Powers)",
      "Decisions must be grounded in constitutional texts and statutory jurisprudence"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-JUDICIARY-SC",
    "type": "court",
    "title": "Supreme Court of India (Chief Justice of India & 33 Judges)",
    "abbreviation": "SUPREME-COURT",
    "sectionId": "SEC-DEM-15",
    "sectionNumber": "15",
    "level": "constitutional",
    "category": "oversight-remedies",
    "position": {
      "x": 1400,
      "y": 220
    },
    "summary": "Apex judicial authority and final court of appeal under Articles 124-147. Guardian of Fundamental Rights (Article 32) and ultimate interpreter of the Constitution. Law declared by Supreme Court is binding on all courts in India (Article 141).",
    "mandate": [
      "Article 32: Constitutional remedies for enforcement of Fundamental Rights.",
      "Article 131: Original jurisdiction in Centre-State and Inter-State disputes.",
      "Article 136: Special Leave Petitions against any judgment or order in India."
    ],
    "powers": [
      "Strikes down laws violating Fundamental Rights or the Basic Structure Doctrine.",
      "Article 142: Passes orders necessary for doing complete justice in any cause or matter.",
      "Issues prerogative writs: Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari."
    ],
    "limitations": [
      "Cannot formulate legislative policy; restricted to interpreting statutes and testing constitutional validity."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 124-147",
      "positionName": "Chief Justice of India & Supreme Court Judges",
      "cadreOrService": "Apex Constitutional Judiciary",
      "electoralOrSelectionMethod": "Appointed by President based on Supreme Court Collegium recommendations",
      "tenure": "Up to age 65 years (removable only by Parliamentary impeachment under Art 124(4))",
      "geographicalJurisdiction": "Entire territory of the Republic of India",
      "reportingTo": "The Constitution of India"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-JUDICIARY-HC",
    "type": "court",
    "title": "High Courts of the States (Chief Justices & Judges across 25 High Courts)",
    "abbreviation": "HIGH-COURT",
    "sectionId": "SEC-DEM-15",
    "sectionNumber": "15",
    "level": "state",
    "category": "oversight-remedies",
    "position": {
      "x": 1400,
      "y": 380
    },
    "summary": "The highest court of civil and criminal appeal and constitutional review in each State or group of States (Articles 214-231). Exercises wider writ jurisdiction under Article 226 than Supreme Court (for fundamental rights and any other legal purpose) and superintends all subordinate courts (Article 227).",
    "mandate": [
      "Article 226: Issue directions, orders or writs for enforcement of rights and any other legal purpose.",
      "Article 227: Superintendence over all courts and tribunals throughout territories in relation to which it exercises jurisdiction."
    ],
    "powers": [
      "Hears original civil disputes, public interest litigations (PIL), and criminal murder references.",
      "Controls postings, promotions, and disciplinary oversight of District Judiciary officers."
    ],
    "limitations": [
      "Judgments subject to appellate jurisdiction and Special Leave Petitions before the Supreme Court."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-JUDICIARY-DISTRICT",
    "type": "court",
    "title": "Subordinate District & Sessions Judiciary (District Judges & Magistrates)",
    "abbreviation": "DISTRICT-JUDICIARY",
    "sectionId": "SEC-DEM-15",
    "sectionNumber": "15",
    "level": "district",
    "category": "oversight-remedies",
    "position": {
      "x": 1400,
      "y": 540
    },
    "summary": "Principal trial and appellate court at the district level (Articles 233-237). Headed by Principal District & Sessions Judge, civil judges (Senior & Junior Division), and Judicial Magistrates of First Class (JMFC) trying criminal offenses under IPC / BNS.",
    "mandate": [
      "Trial of civil suits, property partitions, contracts, and criminal trials for serious penal offences."
    ],
    "powers": [
      "Passes sentences authorized by law including life imprisonment and capital punishment (subject to High Court confirmation).",
      "Grants regular bail, anticipatory bail, and civil injunctions."
    ],
    "limitations": [
      "Decisions subject to first and second appeals before the respective State High Court."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-COMMISSIONS",
    "type": "sectionHub",
    "title": "SECTION 16: INDEPENDENT CONSTITUTIONAL & VIGILANCE COMMISSIONS",
    "abbreviation": "HUB-COMMISSIONS",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "constitutional",
    "category": "oversight-remedies",
    "summary": "Autonomous constitutional watchdogs safeguarding democracy and public integrity: Election Commission of India (ECI), Comptroller and Auditor General (CAG), UPSC, and anti-corruption vigilance (CVC/CBI).",
    "mandate": [
      "Guarantee integrity of parliamentary and state elections (Article 324)",
      "Audit all public expenditures from Consolidated Fund of India (Article 149)",
      "Conduct meritocratic recruitments for civil services (Article 320)"
    ],
    "powers": [
      "Enforces Model Code of Conduct and superintends election machinery across all states",
      "Submits annual audit reports directly to Parliament and conducts independent vigilance inquiries"
    ],
    "limitations": [
      "Audit reports require legislative examination by Public Accounts Committee (PAC)",
      "Staffing and prosecution sanctions require statutory procedural adherence"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-ECI",
    "type": "oversight",
    "title": "Election Commission of India (Chief Election Commissioner & ECs)",
    "abbreviation": "ECI",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "constitutional",
    "category": "oversight-remedies",
    "position": {
      "x": 1400,
      "y": 700
    },
    "summary": "Independent constitutional authority under Article 324 vested with superintendence, direction, and control of elections to Parliament, State Legislatures, and the offices of President and Vice-President. Enforces the Model Code of Conduct (MCC) and registers political parties.",
    "mandate": [
      "Article 324: Superintendence, direction and control of elections.",
      "Article 326: Ensure free, fair, and periodic elections on universal adult suffrage.",
      "Administer Representation of the People Acts 1950 & 1951."
    ],
    "powers": [
      "Notifies election schedules, monitors election expenditure, and censures MCC violations.",
      "Requisitions government staff and police forces for election duties (deemed on deputation to ECI under Section 28A RPA 1951).",
      "Allots election symbols and adjudicates intra-party symbol disputes under Symbols Order 1968."
    ],
    "limitations": [
      "Cannot adjudicate election petitions after declaration of results (must be filed in High Court under Article 329(b)).",
      "Does not conduct local municipal or panchayat elections (handled by State Election Commissions under Art 243K/243ZA)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 324-329, RPA 1950 & 1951",
      "positionName": "Chief Election Commissioner & Election Commissioners",
      "cadreOrService": "Independent Constitutional Commission",
      "electoralOrSelectionMethod": "Appointed by President based on statutory selection committee",
      "tenure": "6 years or up to age 65 (CEC removable only by impeachment like SC Judge)",
      "geographicalJurisdiction": "Entire territory of India",
      "reportingTo": "The Constitution of India"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-RPA"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CAG-INDIA",
    "type": "oversight",
    "title": "Comptroller and Auditor General of India (CAG - Constitutional Auditor)",
    "abbreviation": "CAG-INDIA",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "constitutional",
    "category": "funding-finance",
    "position": {
      "x": 1400,
      "y": 860
    },
    "summary": "The supreme audit institution of India under Articles 148-151. Audits all receipts and expenditure of the Government of India and the state governments, including autonomous bodies and public sector corporations. CAG audit reports are tabled before Parliament (PAC) and State Assemblies.",
    "mandate": [
      "Article 148: There shall be a Comptroller and Auditor General of India.",
      "Article 149: Perform duties and exercise powers in relation to accounts of Union and States.",
      "Article 151: Submit audit reports to President and Governors to be laid before Legislatures."
    ],
    "powers": [
      "Inspects any government office, accounts book, treasury, or store of the Union and States.",
      "Conducts Financial Audits, Compliance Audits, and Performance Audits on major welfare schemes and defence procurement."
    ],
    "limitations": [
      "Post-audit examination authority with no power to halt active spending or disallow executive contracts directly."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 148-151",
      "positionName": "Comptroller and Auditor General of India",
      "cadreOrService": "Constitutional Supreme Audit Authority",
      "electoralOrSelectionMethod": "Appointed by President of India by Warrant under hand and seal",
      "tenure": "6 years or up to age 65 (removable only like SC judge)",
      "geographicalJurisdiction": "Union and all States/UTs of India",
      "reportingTo": "President of India & Parliament (PAC)"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-UPSC",
    "type": "statutoryRegulator",
    "title": "Union Public Service Commission (Chairman & Members, UPSC)",
    "abbreviation": "UPSC",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "constitutional",
    "category": "examination",
    "position": {
      "x": 1400,
      "y": 1020
    },
    "summary": "Independent constitutional recruiting agency under Article 315. Conducts examinations for appointment to the All-India Services (IAS, IPS, IFoS), Central Civil Services (IFS, IRS, IA&AS), and Defence Services (NDA, CDS). Consulted on disciplinary matters and promotion guidelines (Article 320).",
    "mandate": [
      "Article 315: Public Service Commission for the Union and for each State.",
      "Article 320: Duty to conduct examinations for appointments to services of the Union.",
      "Ensure absolute meritocracy, confidentiality, and integrity in civil service recruitment."
    ],
    "powers": [
      "Conducts Civil Services Examination (CSE), Engineering Services (ESE), and Combined Medical Services.",
      "Advises the President on suitability of officers for promotion, deputation, and disciplinary penalties."
    ],
    "limitations": [
      "Advisory body; recommendations are generally accepted but government can table explanatory reasons for non-acceptance in Parliament."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 315-323",
      "positionName": "Chairman & Members, Union Public Service Commission",
      "cadreOrService": "Constitutional Merit Recruiting Body",
      "electoralOrSelectionMethod": "Appointed by President of India",
      "tenure": "6 years or up to age 65",
      "geographicalJurisdiction": "Pan-India All India & Central Services",
      "reportingTo": "President of India & Parliament"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CVC-CBI",
    "type": "oversight",
    "title": "Central Vigilance Commission & CBI (Anti-Corruption & Investigation)",
    "abbreviation": "CVC-CBI",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "union",
    "category": "oversight-remedies",
    "position": {
      "x": 1400,
      "y": 1180
    },
    "summary": "Central Vigilance Commission (CVC - statutory apex anti-corruption watchdog under CVC Act 2003) exercising superintendence over Central Bureau of Investigation (CBI) for offenses under Prevention of Corruption Act 1988.",
    "mandate": [
      "Investigate corruption allegations against central civil servants, bank executives, and ministers."
    ],
    "powers": [
      "CBI registers FIRs, conducts raids, and prosecutes anti-corruption and major economic crimes nationwide.",
      "CVC superintends vigilance administration across all public sector banks and ministries."
    ],
    "limitations": [
      "CBI requires General Consent or High Court / Supreme Court orders to investigate offences in state territories."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-SPSC",
    "type": "statutoryRegulator",
    "title": "State Public Service Commission (Chairman & Members, SPSC / MPSC)",
    "abbreviation": "SPSC-MPSC",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "state",
    "category": "examination",
    "position": {
      "x": 1400,
      "y": 1340
    },
    "summary": "Constitutional recruiting body for each State under Article 315 (e.g. Maharashtra Public Service Commission - MPSC). Conducts competitive examinations for Deputy Collectors, DySPs, Tehsildars, and state civil servants.",
    "mandate": [
      "Conduct examinations for appointments to the services of the State.",
      "Advise State Government on disciplinary matters and promotion guidelines for state officers."
    ],
    "powers": [
      "Conducts State Civil Services Examinations and interview boards.",
      "Recommends merit lists directly to the State Governor and Chief Secretariat."
    ],
    "limitations": [
      "Members removable only by the President of India on grounds of misbehavior after Supreme Court inquiry (Article 317)."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-STATE-EXECUTIVE",
    "type": "sectionHub",
    "title": "SECTION 17: STATE EXECUTIVE & CHIEF SECRETARIAT",
    "abbreviation": "HUB-STATE-EXEC",
    "sectionId": "SEC-DEM-17",
    "sectionNumber": "17",
    "level": "state",
    "category": "executive-administration",
    "summary": "Provincial constitutional executive: Governor (Head of State appointed by President), Chief Minister & State Cabinet, and State Chief Secretary leading the provincial civil administration.",
    "mandate": [
      "Exercise executive authority of the State under Articles 153-167",
      "Preserve state public administration, implement state laws, and direct provincial welfare programs"
    ],
    "powers": [
      "Chief Minister allocates portfolios and heads Council of Ministers responsible to Vidhan Sabha",
      "Chief Secretary commands all IAS/IPS cadre officers and state departmental secretaries"
    ],
    "limitations": [
      "Executive actions taken on aid and advice of Council of Ministers (Article 163)",
      "Governor acts as constitutional link to Union and exercises discretionary reserve powers"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-GOVERNOR",
    "type": "constitutional",
    "title": "Governor of the State (Constitutional Head of State)",
    "abbreviation": "GOVERNOR",
    "sectionId": "SEC-DEM-17",
    "sectionNumber": "17",
    "level": "state",
    "category": "legislation",
    "position": {
      "x": 1850,
      "y": 220
    },
    "summary": "The constitutional executive head of the State (Article 153 & 154). Appointed by the President by warrant under hand and seal (Article 155). All state executive actions are expressed to be taken in the Governor's name (Article 166). Acts on the binding aid and advice of the State Council of Ministers headed by the Chief Minister (Article 163).",
    "mandate": [
      "Article 153: There shall be a Governor for each State.",
      "Article 154: Executive power of the State is vested in the Governor.",
      "Article 163: Council of Ministers with CM at head to aid and advise Governor.",
      "Article 164: Appoints the Chief Minister and other Ministers on CM advice."
    ],
    "powers": [
      "Assents to, withholds assent, or reserves State Bills for Presidential consideration (Article 200).",
      "Promulgates Governor's Ordinances during legislative recess (Article 213).",
      "Recommends President's Rule under Article 356 in case of breakdown of constitutional machinery.",
      "Appoints State Advocate General, SPSC Chairman/Members, and State Election Commissioner."
    ],
    "limitations": [
      "Bound by ministerial aid and advice in all normal constitutional functions (Article 163).",
      "Holds office during the pleasure of the President (Article 156(1))."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 153-167, 200, 213, 356",
      "positionName": "Governor of the State",
      "cadreOrService": "Constitutional Executive Head of State",
      "electoralOrSelectionMethod": "Appointed by President of India under Presidential Warrant",
      "tenure": "5 years (subject to pleasure of the President)",
      "geographicalJurisdiction": "Territory of the State (e.g. Maharashtra)",
      "reportingTo": "President of India & Constitution of India"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CM",
    "type": "executive",
    "title": "Chief Minister of the State (Head of State Government & MLA)",
    "abbreviation": "CHIEF-MINISTER",
    "sectionId": "SEC-DEM-17",
    "sectionNumber": "17",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 1850,
      "y": 380
    },
    "summary": "The de facto Executive Head of the State Government and leader of the ruling party/coalition in the Vidhan Sabha (Article 164). Head of the State Council of Ministers, principal advisor to the Governor, and chief architect of state developmental policies and legislative agendas.",
    "mandate": [
      "Article 163: Head of State Council of Ministers advising the Governor.",
      "Article 164: Appointed by Governor; advises on appointment and portfolios of other Ministers.",
      "Article 167: Duties of Chief Minister to communicate all state administrative decisions to Governor."
    ],
    "powers": [
      "Allocates portfolios to State Cabinet Ministers and chairs State Cabinet meetings.",
      "Advises Governor on summoning, proroguing, or dissolving the Vidhan Sabha.",
      "Directs the State Chief Secretariat and heads state planning boards and disaster authorities."
    ],
    "limitations": [
      "Council of Ministers is collectively responsible to the Vidhan Sabha (Article 164(2)).",
      "Must maintain legislative majority; loses office upon passage of No-Confidence Motion."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 163, 164, 167",
      "positionName": "Chief Minister of the State",
      "cadreOrService": "Elected Head of State Government (MLA/MLC)",
      "electoralOrSelectionMethod": "Appointed by Governor based on legislative majority in Vidhan Sabha",
      "tenure": "5 years (dependent on legislative confidence)",
      "geographicalJurisdiction": "Entire State territory",
      "reportingTo": "Governor of State & State Legislative Assembly (Vidhan Sabha)"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CS-STATE",
    "type": "department",
    "title": "Chief Secretary to the State Government (Administrative Head of State)",
    "abbreviation": "CHIEF-SECRETARY",
    "sectionId": "SEC-DEM-17",
    "sectionNumber": "17",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 1850,
      "y": 540
    },
    "summary": "The apex civil servant of the State Government. Ex-officio Secretary to the State Cabinet, head of the State Civil Services (IAS, IPS, State Services), and principal administrative advisor to the Chief Minister. Coordinates all state administrative departments, Divisional Commissioners, and District Collectors.",
    "mandate": [
      "Heads the State Civil Secretariat (Mantralaya) and coordinates inter-departmental policies.",
      "Administer the State Government Rules of Business under Article 166.",
      "Directs state disaster management operations as head of State Executive Committee."
    ],
    "powers": [
      "Issues administrative orders in the name of the Governor across all state departments.",
      "Chairs Civil Services Board for IAS and IPS transfers and postings within the State.",
      "Supervises Divisional Commissioners and District Magistrates in revenue and law enforcement."
    ],
    "limitations": [
      "Executive civil service head without political portfolio authority; executes policies approved by the State Cabinet."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 166, State Rules of Business",
      "positionName": "Chief Secretary to the State Government",
      "cadreOrService": "Indian Administrative Service (IAS) — Apex State Rank",
      "electoralOrSelectionMethod": "Appointed by Chief Minister and State Cabinet",
      "tenure": "Standard senior secretarial tenure (normally 2 years)",
      "geographicalJurisdiction": "Entire State (e.g. State of Maharashtra)",
      "reportingTo": "Chief Minister & Governor of the State"
    },
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-STATE-LEGISLATURE",
    "type": "sectionHub",
    "title": "SECTION 18: STATE LEGISLATURE (VIDHAN SABHA & PARISHAD)",
    "abbreviation": "HUB-STATE-LEG",
    "sectionId": "SEC-DEM-18",
    "sectionNumber": "18",
    "level": "state",
    "category": "legislation",
    "summary": "State lawmaking bodies: Legislative Assembly (Vidhan Sabha — directly elected MLAs) and Legislative Council (Vidhan Parishad — Upper House where applicable) under Articles 168-212.",
    "mandate": [
      "Enact laws on State List (List II) and Concurrent List (List III) subjects under Schedule 7",
      "Vote state budgets and hold the State Council of Ministers politically accountable"
    ],
    "powers": [
      "Passes state legislation on police, public health, local government, land, and agriculture",
      "Exercises financial oversight through State Public Accounts Committees"
    ],
    "limitations": [
      "State laws conflicting with Union statutes on Concurrent List subjects are void under Article 254",
      "Subject to 5-year dissolution terms and constitutional gubernatorial assent"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MLA",
    "type": "legislature",
    "title": "Member of Legislative Assembly (MLA — Vidhan Sabha, Directly Elected)",
    "abbreviation": "MLA-VIDHAN-SABHA",
    "sectionId": "SEC-DEM-18",
    "sectionNumber": "18",
    "level": "state",
    "category": "legislation",
    "position": {
      "x": 1850,
      "y": 700
    },
    "summary": "Directly elected popular representatives in the State Legislative Assembly (Vidhan Sabha) under universal adult suffrage (Article 170 & 326). Enacts state legislation on List II (Police, Health, Local Bodies, Land) and List III subjects, votes on the State Budget, and holds the State Cabinet accountable.",
    "mandate": [
      "Article 170: Composition of the Legislative Assembly (60 to 500 directly elected members).",
      "Article 164(2): State Council of Ministers collectively responsible to Legislative Assembly.",
      "Represent territorial assembly constituencies and pass state statutes."
    ],
    "powers": [
      "Introduces, debates, and passes State Bills and constitutional amendment ratifications.",
      "Votes on Demands for Grants and passes State Appropriation and Finance Bills.",
      "Can table No-Confidence Motions against the State Chief Minister and Council of Ministers."
    ],
    "limitations": [
      "Subject to disqualification under Tenth Schedule for defection or defying party whip.",
      "Cannot introduce Money Bills without the prior recommendation of the Governor (Article 199)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 170, 173, 190-195, 326",
      "positionName": "Member of Legislative Assembly (MLA)",
      "cadreOrService": "Directly Elected State Legislator",
      "electoralOrSelectionMethod": "Direct universal adult franchise by First-Past-The-Post in Assembly constituencies",
      "tenure": "5 years (co-terminus with Vidhan Sabha unless dissolved earlier)",
      "geographicalJurisdiction": "State Assembly Constituency",
      "reportingTo": "Constituency Electors & Vidhan Sabha"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-RPA"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MLC",
    "type": "legislature",
    "title": "Member of Legislative Council (MLC — Vidhan Parishad, Upper House)",
    "abbreviation": "MLC-VIDHAN-PARISHAD",
    "sectionId": "SEC-DEM-18",
    "sectionNumber": "18",
    "level": "state",
    "category": "legislation",
    "position": {
      "x": 1850,
      "y": 860
    },
    "summary": "Members of the State Legislative Council (Vidhan Parishad) in bicameral states (Article 171). Composed of representatives elected by MLAs, Local Authorities (Municipalities/Panchayats), Graduates, Teachers, and Governor nominees (literature, science, social service). Permanent chamber not subject to dissolution; one-third members retire every 2 years.",
    "mandate": [
      "Article 171: Composition of Legislative Councils in states having bicameral legislatures.",
      "Article 172(2): Permanent House, one-third retiring every second year.",
      "Provide seasoned review and revision of legislative measures passed by Vidhan Sabha."
    ],
    "powers": [
      "Scrutinizes ordinary bills, suggests amendments, and can delay ordinary bills for up to 4 months.",
      "Raises public questions and debates during legislative sessions."
    ],
    "limitations": [
      "Cannot reject or stall Money Bills (must return within 14 days under Article 198).",
      "Vidhan Sabha can override MLC rejection of ordinary bills on second passage (Article 197)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 169, 171, 172(2), 198",
      "positionName": "Member of Legislative Council (MLC)",
      "cadreOrService": "State Upper House Representative",
      "electoralOrSelectionMethod": "Elected by MLAs (1/3), Local Authorities (1/3), Graduates (1/12), Teachers (1/12) + Governor Nominees (1/6)",
      "tenure": "6 years (staggered, 1/3rd retire every 2 years)",
      "geographicalJurisdiction": "State Upper House (Vidhan Parishad)",
      "reportingTo": "Electoral Bodies & Vidhan Parishad"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-POLICE",
    "type": "sectionHub",
    "title": "SECTION 19: STATE POLICE HIERARCHY (10-RANK COMMAND)",
    "abbreviation": "HUB-POLICE",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
    "summary": "Linear 10-tier chain of command of state law enforcement under Police Act 1861: Director General of Police (DGP) down to frontline Police Constable.",
    "mandate": [
      "Maintenance of public order, crime prevention, and investigation of penal offences",
      "Execution of warrants, maintenance of law, and protection of citizen life and property"
    ],
    "powers": [
      "Directs state-wide police force, armed police battalions, and criminal investigation department (CID)",
      "Exercises statutory powers of arrest, search, and charge-sheet filing under CrPC / Bharatiya Nagarik Suraksha Sanhita"
    ],
    "limitations": [
      "Strictly accountable to Rule of Law, human rights commissions, and judicial oversight",
      "Subordinate to statutory direction of State Executive and District Magistracy"
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-STATE-HOME-DEPT",
    "type": "department",
    "title": "State Home Department (Additional Chief Secretary — Home)",
    "abbreviation": "STATE-HOME-DEPT",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 220
    },
    "summary": "The administrative department of the State Government exercising statutory superintendence over the State Police under Section 4 of the Police Act 1861. Headed by the Additional Chief Secretary (Home) / Principal Secretary (Home), reporting to the State Home Minister. Manages police budgeting, IPS cadre management, transfers, and law-and-order policy.",
    "mandate": [
      "Section 4, Police Act 1861: Superintendence of police vested in State Government.",
      "Exercise administrative oversight over police force, jails, home guards, and prosecution."
    ],
    "powers": [
      "Approves state police budgets, modernization grants, and vehicle/equipment procurement.",
      "Issues orders for transfers and postings of SPs, DIGs, IGs, and ADGs on Police Establishment Board advice.",
      "Notifies police commissionerates, ranges, and jurisdiction of new police stations."
    ],
    "limitations": [
      "Civilian department with no direct day-to-day operational field tactical command over police investigation."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-DGP",
    "type": "office",
    "title": "1. Director General of Police (DGP) — State Police Chief",
    "abbreviation": "POL-DGP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 380
    },
    "summary": "The supreme uniformed head of the state police force (Head of Police Force — HoPF). Senior-most IPS officer in the State. Vested with the administration of the police throughout the state under Section 4 of the Police Act 1861. Exercises operational command over all police personnel, armed reserves, and specialized wings.",
    "mandate": [
      "Section 4, Police Act 1861: Administration of the police throughout the general police district.",
      "Supreme operational command of entire state police force."
    ],
    "powers": [
      "Directs statewide crime prevention, anti-terror operations, and intelligence deployment.",
      "Issues State Police Standing Orders and service disciplinary regulations.",
      "Deploys State Reserve Police Force (SRPF) battalions during major law-and-order crises."
    ],
    "limitations": [
      "Subject to statutory superintendence of the State Home Department.",
      "Appointment from UPSC-empanelled senior officers with a minimum tenure mandated by Prakash Singh directives."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-ADG",
    "type": "office",
    "title": "2. Additional Director General of Police (ADGP)",
    "abbreviation": "POL-ADGP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 540
    },
    "summary": "Second highest uniformed police rank in the state. Senior IPS officer heading critical state-level specialized wings: Law & Order, Criminal Investigation Department (CID), State Intelligence Department (SID), Anti-Terrorism Squad (ATS), Traffic, Railways, or Prisons.",
    "mandate": [
      "Direct specialized statewide functional wings and assist DGP in strategic police administration."
    ],
    "powers": [
      "ADG (Law & Order) coordinates daily statewide law-and-order and central force mobilization.",
      "ADG (CID) superintends inter-district crime investigations and specialized forensics."
    ],
    "limitations": [
      "Operates under the overall operational command and directions of the State DGP."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-IG",
    "type": "office",
    "title": "3. Inspector General of Police (IGP / IG Range)",
    "abbreviation": "POL-IGP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 700
    },
    "summary": "Senior supervisory IPS officer heading a Police Range comprising 3 to 6 contiguous revenue districts, or serving as Joint Commissioner of Police in major metropolitan Commissionerates.",
    "mandate": [
      "Supervise district policing and crime control across multiple revenue districts in the Range."
    ],
    "powers": [
      "Directs joint multi-district manhunts, anti-gang operations, and riot containment.",
      "Hears service appeals against disciplinary penalties imposed by district SPs."
    ],
    "limitations": [
      "Field administrative supervisor; does not directly conduct routine day-to-day station investigations."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-DIG",
    "type": "office",
    "title": "4. Deputy Inspector General of Police (DIG)",
    "abbreviation": "POL-DIG",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 860
    },
    "summary": "Senior IPS officer serving as Range DIG, Additional Commissioner of Police (Addl CP) in city commissionerates, or head of state specialized units (e.g. Crime Branch, Anti-Corruption Bureau).",
    "mandate": [
      "Maintain direct oversight over District Superintendents of Police within the Range."
    ],
    "powers": [
      "Conducts annual formal inspections of district police offices and police stations.",
      "Assesses performance appraisals and transfers police sub-inspectors within the Range."
    ],
    "limitations": [
      "Reports to the Range IG and State Police Headquarters."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-SP",
    "type": "office",
    "title": "5. Superintendent of Police (SP / SSP) — District Police Chief",
    "abbreviation": "POL-SP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "district",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 1020
    },
    "summary": "The operational commander and administrative head of police in a revenue district (Section 4, Police Act 1861). Senior IPS/SPS officer responsible for all crime prevention, law and order, station administration, and traffic across the entire district.",
    "mandate": [
      "Section 4, Police Act 1861: Police administration of a district vested in District SP under general control of District Magistrate.",
      "Head all police personnel, district armed reserves, and special branch in the district."
    ],
    "powers": [
      "Operational command of all police stations (30-60 stations) in the district.",
      "Authorizes deployment of armed police reserves, imposes section 144 police bandobast, and registers special crime reports.",
      "Appointing and disciplinary authority for police constables and head constables."
    ],
    "limitations": [
      "Under Police Act 1861, operates under the general regulatory coordination of the District Magistrate in matters of public peace."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-ASP-DSP",
    "type": "office",
    "title": "6. Assistant / Deputy Superintendent of Police (ASP / DSP / SDPO)",
    "abbreviation": "POL-ASP-DSP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "district",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 1180
    },
    "summary": "Sub-Divisional Police Officer (SDPO) supervising a cluster of 4 to 8 police stations within a district sub-division. Junior IPS officer (ASP) or senior State Police Service officer (DSP) providing direct supervisory oversight over frontline station house officers.",
    "mandate": [
      "Supervise investigation of heinous crimes (murder, dacoity, atrocities) under statutory mandates."
    ],
    "powers": [
      "Personally visits scenes of grave crimes and supervises investigation diaries.",
      "Mandatory investigating officer for offenses under SC/ST (Prevention of Atrocities) Act."
    ],
    "limitations": [
      "Sub-divisional supervisory officer; does not hold independent station diary charge."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-SHO",
    "type": "office",
    "title": "7. Police Inspector / Station House Officer (SHO)",
    "abbreviation": "POL-SHO",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 1340
    },
    "summary": "The officer in charge of a Police Station under Section 2(o) of the Code of Criminal Procedure (CrPC / BNSS). Holds statutory charge of the police station, the General Diary (GD), FIR registration, lock-up, and all investigating officers.",
    "mandate": [
      "Section 2(o) CrPC / BNSS: Officer in charge of a police station.",
      "Section 154 CrPC: Mandatory registration of First Information Report (FIR) on cognizable offences."
    ],
    "powers": [
      "Exercises all statutory powers of investigation, arrest, search, and seizure within police station jurisdiction.",
      "Supervises Sub-Inspectors and assigns criminal case investigations.",
      "Files police final reports / charge sheets before the competent Judicial Magistrate under Section 173 CrPC."
    ],
    "limitations": [
      "Subject to supervisory checks by SDPO and judicial oversight of the jurisdictional Magistrate."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-SI",
    "type": "office",
    "title": "8. Sub-Inspector of Police (SI) — Primary Investigating Officer",
    "abbreviation": "POL-SI",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 1500
    },
    "summary": "The frontline backbone of Indian criminal investigation. Sub-Inspector is the lowest-ranking officer legally empowered to conduct formal investigation under CrPC, draw up panchnamas, record witness statements, effect arrests, and submit charge sheets.",
    "mandate": [
      "Primary investigating officer for cognizable offenses assigned by the Station House Officer.",
      "Lead field crime scene forensics, witness examination, and evidence collection."
    ],
    "powers": [
      "Arrests accused persons without warrant in cognizable offences (Section 41 CrPC).",
      "Conducts searches of premises with or without warrant under exigent statutory grounds.",
      "Records statements under Section 161 CrPC and presents witnesses for judicial recording."
    ],
    "limitations": [
      "Every arrest and search subject to strict procedural compliance (D.K. Basu guidelines and BNSS safeguards)."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-HC",
    "type": "office",
    "title": "9. Head Constable (HC) — Station Section Commander",
    "abbreviation": "POL-HC",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 1660
    },
    "summary": "Senior non-commissioned officer in the police station. Serves as Station Writer (maintaining General Diary, Station Diary, and Malkhana custody of seized property), leads beat patrol teams, and acts as Station House Officer in SHO/SI temporary absence.",
    "mandate": [
      "Maintain station records, evidence lockers (malkhana), and lead constable sections on field duty."
    ],
    "powers": [
      "Can investigate specified minor criminal offences under state police amendment rules.",
      "Commands armed sentry guards at police stations and sensitive vital installations."
    ],
    "limitations": [
      "Cannot investigate major cognizable offences (murder, dacoity, rape) reserved for SI and above."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-POL-CONSTABLE",
    "type": "office",
    "title": "10. Police Constable (PC) — Frontline Public Contact & Beat Patrol",
    "abbreviation": "POL-CONSTABLE",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 2300,
      "y": 1820
    },
    "summary": "The fundamental frontline face of Indian law enforcement, constituting over 70% of the entire police strength. Executes beat patrols, serves summons/warrants, guards lockups, manages traffic, collects local intelligence, and maintains street-level order.",
    "mandate": [
      "Perform beat patrols, maintain visible police presence, and protect citizens and public order."
    ],
    "powers": [
      "Can arrest persons committing cognizable offences in view under Section 43 CrPC.",
      "Regulates public gatherings, road traffic, and assists investigating officers in cordoning crime scenes."
    ],
    "limitations": [
      "Does not possess statutory powers to record formal FIRs or conduct independent formal case investigation."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-MAGISTRACY",
    "type": "sectionHub",
    "title": "SECTION 20: DISTRICT FIELD REVENUE MAGISTRACY",
    "abbreviation": "HUB-MAGISTRACY",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "district",
    "category": "executive-administration",
    "summary": "The administrative backbone of Indian field governance: Divisional Commissioner, District Magistrate & Collector (DM/DC), SDM, Tehsildar, and Village Talathi / Patwari.",
    "mandate": [
      "Territorial governance, land revenue administration, and maintenance of public order (Section 144)",
      "Coordinates disaster relief, elections, and all departmental programs within the district"
    ],
    "powers": [
      "DM commands district executive magistracy and acts as Chief Electoral Officer for elections",
      "Tehsildar issues caste/income certificates and presides over taluka revenue dispute settlement"
    ],
    "limitations": [
      "Executive orders subject to judicial review by High Courts under Article 226",
      "Strict separation of executive magistracy from judicial trials under Article 50"
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-DIV-COMMISSIONER",
    "type": "office",
    "title": "Divisional Commissioner (Head of Revenue Division)",
    "abbreviation": "DIV-COMMISSIONER",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "state",
    "category": "executive-administration",
    "position": {
      "x": 2750,
      "y": 220
    },
    "summary": "Senior IAS officer (Principal Secretary rank) heading a Revenue Division encompassing 4 to 7 districts (e.g. Konkan, Pune, Nagpur divisions). Supervises District Collectors, serves as regional appellate revenue authority, and coordinates regional inter-district development.",
    "mandate": [
      "Supervise district revenue administration, land acquisition appeals, and regional disaster response."
    ],
    "powers": [
      "Hears revenue appeals against orders of District Collectors under State Land Revenue Codes.",
      "Supervises major infrastructure land acquisition and regional municipal corporation audits."
    ],
    "limitations": [
      "Regional supervisory authority; does not execute direct day-to-day district magistracy."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-DM-COLLECTOR",
    "type": "office",
    "title": "District Magistrate & Collector (DM / DC / District Collector)",
    "abbreviation": "DM-COLLECTOR",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "district",
    "category": "executive-administration",
    "position": {
      "x": 2750,
      "y": 380
    },
    "summary": "The undisputed administrative pivot of Indian district governance. An IAS officer exercising a trinity of distinct powers: 1. District Collector (chief revenue officer and land records head); 2. District Magistrate (head of executive magistracy under Section 20 CrPC); and 3. District Election Officer (DEO).",
    "mandate": [
      "Section 20 CrPC / BNSS: District Magistrate in charge of executive magistracy across the district.",
      "State Land Revenue Code: Head of district land revenue assessment, collection, and land records.",
      "Disaster Management Act 2005: Chairperson, District Disaster Management Authority (DDMA)."
    ],
    "powers": [
      "Promulgates Section 144 CrPC curfew orders and issues arms and explosives licenses.",
      "Exercises preventive detention powers under National Security Act (NSA) and state preventive acts.",
      "Commands district administrative machinery during general elections as District Election Officer (DEO).",
      "Coordinates with District Superintendent of Police for public peace and riot prevention."
    ],
    "limitations": [
      "Article 50: Cannot exercise judicial trial magistracy (only executive preventive magistracy).",
      "Judicial review by High Court under writ jurisdiction (Habeas Corpus against preventive detention)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 239/312, Section 20 CrPC, State Land Revenue Codes",
      "positionName": "District Magistrate & Collector",
      "cadreOrService": "Indian Administrative Service (IAS) — District Head",
      "electoralOrSelectionMethod": "Appointed by State Government from IAS cadre",
      "tenure": "Normally 2 to 3 years per district",
      "geographicalJurisdiction": "Entire Revenue District",
      "reportingTo": "Divisional Commissioner & State Chief Secretary"
    },
    "sourceIds": [
      "SRC-V4-AIS",
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-SDM-SUBDIV",
    "type": "office",
    "title": "Sub-Divisional Magistrate / Sub-Divisional Officer (SDM / SDO / Prant)",
    "abbreviation": "SDM-SUBDIV",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "district",
    "category": "executive-administration",
    "position": {
      "x": 2750,
      "y": 540
    },
    "summary": "Administrative and revenue head of a Sub-Division comprising 2 to 4 Talukas/Tehsils. IAS officer on field posting or senior State Civil Service officer. Exercises executive magistracy under Sections 107, 133, and 144 CrPC, and serves as Returning Officer for Assembly elections.",
    "mandate": [
      "Section 23 CrPC: Sub-Divisional Magistrate for revenue sub-division.",
      "Supervise Tehsildars, hear revenue appeals, and handle local law-and-order emergencies."
    ],
    "powers": [
      "Conducts proceedings for removal of public nuisances under Section 133 CrPC.",
      "Inquires into custodial deaths, dowry deaths, and police firing panchnamas (Section 176 CrPC).",
      "Acts as Returning Officer (RO) for State Legislative Assembly elections."
    ],
    "limitations": [
      "Operates under the direct operational superintendence of the District Collector."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-TEHSILDAR-MAGISTRATE",
    "type": "office",
    "title": "Tehsildar / Talukdar (Executive Magistrate & Taluka Head)",
    "abbreviation": "TEHSILDAR",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 2750,
      "y": 700
    },
    "summary": "The administrative and executive head of a Taluka / Tehsil (covering 80-150 villages). Officer of State Civil Service. Exercises statutory powers as Executive Magistrate (Section 21 CrPC) and Assistant Returning Officer. Manages the Taluka Tehsil Office, crop failure panchnamas, and caste/income certificates.",
    "mandate": [
      "Head of Taluka revenue administration, land revenue collection, and executive magistracy.",
      "Issues domicile, caste, and income certificates to citizens."
    ],
    "powers": [
      "Conducts eviction of unauthorized encroachments on government land.",
      "Summons witnesses and records depositions in disputed land mutation cases.",
      "Authorizes emergency relief distribution during droughts, floods, and hailstorms."
    ],
    "limitations": [
      "Revenue orders appealable before Sub-Divisional Officer (SDO) and District Collector."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-TALATHI-PATWARI",
    "type": "office",
    "title": "Talathi / Patwari / Village Accountant (Village Land Records)",
    "abbreviation": "TALATHI-PATWARI",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 2750,
      "y": 860
    },
    "summary": "The foundational revenue official at the grassroots village level (Saza), typically covering 2 to 5 villages. Maintains the definitive record of land rights (Record of Rights — 7/12 extract in Maharashtra, Khasra/Khatauni in North India), crop surveys, mutation entries, and tax collection.",
    "mandate": [
      "Maintain up-to-date Village Land Records, mutation registers, and crop inspection registers.",
      "Prepare primary field panchnamas for agricultural disaster damage."
    ],
    "powers": [
      "Enters mutation notes (Ferfar) upon land sale, inheritance, or bank mortgage.",
      "Issues verified copies of 7/12 land records and agricultural possession certificates to farmers."
    ],
    "limitations": [
      "Cannot sanction disputed mutation entries (must submit to Circle Officer / Tehsildar).",
      "Cannot unilaterally change land ownership titles without registered sale deed or court succession order."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-URBAN-LOCAL",
    "type": "sectionHub",
    "title": "SECTION 21: URBAN MUNICIPAL CORPORATIONS (BMC MODEL)",
    "abbreviation": "HUB-URBAN-LOCAL",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "executive-administration",
    "summary": "Urban decentralized governance under 74th Amendment: Municipal Commissioner (IAS Executive Chief), Mayor, Standing Committee, Assistant Commissioners, and Ward Corporators.",
    "mandate": [
      "Provide municipal civic amenities: water supply, sewerage, solid waste, roads, and primary healthcare",
      "Formulate and execute town planning and urban infrastructure development schemes"
    ],
    "powers": [
      "Levies and collects property taxes, water charges, and building development fees",
      "Municipal Commissioner exercises statutory executive power to sanction civic works and tenders"
    ],
    "limitations": [
      "Financial allocations dependent on state government grants and State Finance Commission",
      "Resolutions must conform to State Municipal Corporation Acts"
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-MMC-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MUNICIPAL-COMMISSIONER",
    "type": "office",
    "title": "Municipal Commissioner / BMC Chief (IAS Principal Executive Officer)",
    "abbreviation": "MUNICIPAL-COMMISSIONER",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 3200,
      "y": 220
    },
    "summary": "The principal executive officer of the Municipal Corporation under Section 54 of the Mumbai Municipal Corporation Act 1888 (MMC Act). Senior IAS officer (Principal Secretary / Addl Chief Secretary rank). The entire executive power of the corporation is vested directly in the Commissioner, independent of the Mayor.",
    "mandate": [
      "Section 54, MMC Act: Entire executive power for carrying out provisions of the Act vested in Commissioner.",
      "Head municipal administration, city budget (50,000+ crores), public health, roads, and water supply."
    ],
    "powers": [
      "Prepares and executes the municipal annual budget and awards civic infrastructure contracts.",
      "Demolishes unauthorized constructions and regulates building permissions (Development Control Regulations).",
      "Appoints and disciplines municipal staff below Deputy Municipal Commissioner rank."
    ],
    "limitations": [
      "Major tax rate changes and large capital borrowings require sanction of the Corporation General Body.",
      "Subject to superintendence of the State Urban Development Department."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MAYOR-COUNCIL",
    "type": "office",
    "title": "Mayor of the City & Corporation General Body (First Citizen of City)",
    "abbreviation": "MAYOR-COUNCIL",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "legislation",
    "position": {
      "x": 3200,
      "y": 380
    },
    "summary": "The First Citizen of the city and political presiding officer of the Municipal Corporation General Body under the MMC Act. Elected by the 227 directly elected Ward Corporators. Presides over Corporation meetings, debates civic policies, and represents the city diplomatically.",
    "mandate": [
      "Preside over Corporation General Body meetings and ensure democratic accountability of civic spending."
    ],
    "powers": [
      "Presides over debates on civic policy, property tax revisions, and developmental budgets.",
      "Chairs ceremonial functions and receives visiting heads of state and dignitaries."
    ],
    "limitations": [
      "Under the Commissionerate model (MMC Act), executive powers reside in the IAS Commissioner, not the Mayor."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-ADDL-MUNICIPAL-COMMISSIONER",
    "type": "office",
    "title": "Additional Municipal Commissioners (IAS Functional Chiefs — Projects, Health)",
    "abbreviation": "ADDL-MC",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 3200,
      "y": 540
    },
    "summary": "Senior IAS officers (typically 4 in BMC) assisting the Municipal Commissioner under Section 56A MMC Act. Each AMC heads a functional portfolio: Projects (Coastal Road, Metro connectivity), Western Suburbs, Eastern Suburbs, and City & Public Health.",
    "mandate": [
      "Direct functional wings and major engineering projects of the Municipal Corporation."
    ],
    "powers": [
      "Approves tenders up to specified financial delegations (multi-crore project works).",
      "Supervises 24 Administrative Ward Assistant Commissioners (Ward Officers)."
    ],
    "limitations": [
      "Operates under the delegated powers and overall authority of the Municipal Commissioner."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-WARD-CORPORATOR",
    "type": "legislature",
    "title": "Ward Corporator / Municipal Councillor (227 BMC Wards & Ward Committees)",
    "abbreviation": "WARD-CORPORATOR",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "legislation",
    "position": {
      "x": 3200,
      "y": 700
    },
    "summary": "Directly elected municipal representative from an electoral ward in city elections under universal adult franchise (Article 243R & MMC Act). In Mumbai, 227 Corporators form the Corporation General Body and participate in 24 Ward Committees and the powerful Standing Committee.",
    "mandate": [
      "Article 243R: Constitution and composition of Municipalities.",
      "Represent ward citizens, resolve drainage, drinking water, street lighting, and local road grievances."
    ],
    "powers": [
      "Votes on municipal budget and major expenditure in Corporation General Body and Standing Committee.",
      "Allocates Corporator Ward Development Funds for grassroots civic amenities."
    ],
    "limitations": [
      "Subject to anti-defection rules and disqualification provisions under State Municipal Acts."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT",
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-RURAL-PANCHAYAT",
    "type": "sectionHub",
    "title": "SECTION 22: RURAL PANCHAYATI RAJ (3-TIER LOCAL BODIES)",
    "abbreviation": "HUB-RURAL-PANCHAYAT",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "executive-administration",
    "summary": "Grassroots rural self-government under 73rd Amendment: District Zilla Parishad (CEO), Block Panchayat Samiti (BDO), and Village Gram Panchayat (Sarpanch, Gram Sevak & Ward Panchs).",
    "mandate": [
      "Democratic decentralization: economic development and social justice in rural India (Article 243G)",
      "Execution of 29 subjects under 11th Schedule: agriculture, rural housing, drinking water, and rural roads"
    ],
    "powers": [
      "Zilla Parishad administers district rural health, primary education, and MGNREGA works",
      "Gram Panchayat plans village works and sanctions local construction and sanitation amenities"
    ],
    "limitations": [
      "Subject to statutory audit and administrative supervision by District Collectorate",
      "Financial autonomy limited; largely reliant on central and state tied grants"
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-ZP-CEO",
    "type": "office",
    "title": "Chief Executive Officer, Zilla Parishad (ZP CEO — IAS District Rural Head)",
    "abbreviation": "ZP-CEO",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "district",
    "category": "executive-administration",
    "position": {
      "x": 3560,
      "y": 220
    },
    "summary": "The administrative head of rural district governance under the 73rd Constitutional Amendment and State Zilla Parishad Acts. IAS officer heading the apex tier of Panchayati Raj. Directs primary rural schools, primary health centres (PHCs), rural water supply, and rural road schemes across the district.",
    "mandate": [
      "Article 243B & State ZP Acts: Executive head of district rural local government.",
      "Supervise Block Development Officers and village panchayat rural development works."
    ],
    "powers": [
      "Disburses rural development grants and executes MGNREGA works across the district.",
      "Appoints and disciplines primary teachers, village health staff, and Gram Sevaks."
    ],
    "limitations": [
      "Works in constitutional partnership with the elected Zilla Parishad President and Standing Committees."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-BDO-BLOCK",
    "type": "office",
    "title": "Block Development Officer (BDO — Panchayat Samiti Intermediate Tier)",
    "abbreviation": "BDO-BLOCK",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 3560,
      "y": 380
    },
    "summary": "The executive officer of the intermediate tier of Panchayati Raj (Panchayat Samiti / Block level, covering 40-70 villages). Officer of State Rural Development Service. Implements rural housing schemes, sanitation (Swachh Bharat), and superintends Village Gram Sevaks.",
    "mandate": [
      "Executive officer of Panchayat Samiti under Article 243C.",
      "Approve village gram panchayat development plans and monitor welfare scheme progress."
    ],
    "powers": [
      "Releases funds to Gram Panchayats upon physical completion of village infrastructure works.",
      "Conducts annual audit inspections of Gram Panchayat accounts."
    ],
    "limitations": [
      "Reports to the Chief Executive Officer of the Zilla Parishad."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-SARPANCH",
    "type": "office",
    "title": "Sarpanch / Village Pradhan (Constitutional Head of Gram Panchayat)",
    "abbreviation": "SARPANCH",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 3560,
      "y": 540
    },
    "summary": "The elected political and executive head of the Village Gram Panchayat under Article 243C. Directly or indirectly elected by adult village voters. Presides over Gram Panchayat meetings, oversees village sanitation, drinking water, street lights, and presents reports to the Gram Sabha.",
    "mandate": [
      "Article 243C: Composition of Panchayats.",
      "Constitutional head of the village tier of rural democratic self-government."
    ],
    "powers": [
      "Joint signatory for Gram Panchayat bank accounts along with the Gram Sevak.",
      "Allots housing plots under PMAY-G and sanctions village drainage and lighting projects."
    ],
    "limitations": [
      "Accountable to the sovereign Village Assembly (Gram Sabha); decisions must be approved by Gram Sabha.",
      "Can be removed by a No-Confidence Motion passed by Ward Panchs."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-GRAM-SEVAK",
    "type": "office",
    "title": "Gram Sevak / Village Secretary (Village Administrative Staff)",
    "abbreviation": "GRAM-SEVAK",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "executive-administration",
    "position": {
      "x": 3560,
      "y": 700
    },
    "summary": "The administrative employee and official secretary of the Gram Panchayat, appointed by the Zilla Parishad. Maintains birth, death, and marriage registers, prepares agendas and minutes for Gram Sabha meetings, and maintains cash books.",
    "mandate": [
      "Maintain all official records, financial cash books, and registers of the Gram Panchayat.",
      "Serve as Secretary to the Village Gram Sabha and record resolutions verbatim."
    ],
    "powers": [
      "Issues official Birth, Death, and Marriage certificates at the village level.",
      "Maintains muster rolls and job cards for MGNREGA workers."
    ],
    "limitations": [
      "Administrative secretary with no independent executive political discretion; executes Panchayat decisions."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-WARD-PANCH",
    "type": "legislature",
    "title": "Ward Panch / Gram Panchayat Member (Village Ward Representative)",
    "abbreviation": "WARD-PANCH",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "legislation",
    "position": {
      "x": 3560,
      "y": 860
    },
    "summary": "Directly elected representative of an individual village ward in the Gram Panchayat (typically 7 to 17 members per Panchayat). Participates in monthly Panchayat meetings, passes village development resolutions, and represents ward residents.",
    "mandate": [
      "Represent local ward households and debate village civic priorities."
    ],
    "powers": [
      "Votes on village budgets, development plans, and contractor payments.",
      "Can move No-Confidence Motions against the Sarpanch if legal grounds exist."
    ],
    "limitations": [
      "Subject to disqualification for non-attendance or disqualifications under State Panchayat Acts."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "HUB-DEM-CITIZENS",
    "type": "sectionHub",
    "title": "SECTION 23: SOVEREIGN DEMOCRATIC BASE (CITIZENS & GRAM SABHA)",
    "abbreviation": "HUB-CITIZENS",
    "sectionId": "SEC-DEM-23",
    "sectionNumber": "23",
    "level": "constitutional",
    "category": "legislation",
    "summary": "The ultimate sovereign origin of authority: 950+ million adult citizens exercising franchise to elect representatives and participating directly in village Gram Sabhas.",
    "mandate": [
      "We, the People of India: the fountainhead of constitutional sovereignty (Preamble)",
      "Universal adult suffrage without discrimination under Article 326"
    ],
    "powers": [
      "Directly elects 543 Lok Sabha MPs, 4,000+ MLAs, 250,000+ Gram Panchayats, and Municipal Corporators",
      "Gram Sabha exercises direct deliberative power and mandatory social audit of village expenditure"
    ],
    "limitations": [
      "Constitutional rights exercised within reasonable restrictions prescribed by law (Article 19(2))",
      "Direct deliberative participation operationalized primarily at village Gram Sabha tier"
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-RPA"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-CITIZENS",
    "type": "constitutional",
    "title": "Citizen of India (Sovereign People & Electoral Franchise)",
    "abbreviation": "CITIZENS-OF-INDIA",
    "sectionId": "SEC-DEM-23",
    "sectionNumber": "23",
    "level": "constitutional",
    "category": "legislation",
    "position": {
      "x": 4000,
      "y": 220
    },
    "summary": "The sovereign origin and foundation of all constitutional and executive authority in the Republic of India (Preamble: \"We, The People of India\"). Every citizen aged 18+ possesses the constitutional right of universal adult franchise (Article 326) to directly elect representatives to the Lok Sabha, State Legislative Assembly (Vidhan Sabha), Municipal Corporation, and Gram Panchayat.",
    "mandate": [
      "Preamble: Sovereign authority resides in the people of India.",
      "Article 326: Universal adult suffrage for every citizen not disqualified on grounds of non-residence, unsoundness of mind, or crime.",
      "Part III: Guaranteed Fundamental Rights (Equality, Speech, Life, Liberty, Religion, Constitutional Remedies)."
    ],
    "powers": [
      "Elects 543 Members of Parliament to the Lok Sabha in national general elections.",
      "Elects Members of Legislative Assembly (MLAs) in state assembly elections.",
      "Elects Ward Corporators in municipal elections and Sarpanchs/Panchs in rural local elections.",
      "Petitions Supreme Court (Article 32) and High Courts (Article 226) for enforcement of rights.",
      "Demands information from public authorities under Right to Information Act 2005 (RTI)."
    ],
    "limitations": [
      "Must observe Fundamental Duties under Article 51A (respect national flag, constitution, public property).",
      "Subject to reasonable restrictions on freedoms under Article 19(2)-(6)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Preamble, Articles 5-11, 14, 19, 21, 32, 51A, 326",
      "positionName": "Citizen of the Republic of India",
      "cadreOrService": "Sovereign Electors & Rights-Holders",
      "electoralOrSelectionMethod": "Citizenship by birth, descent, registration, or naturalization (Citizenship Act 1955)",
      "tenure": "Lifelong",
      "geographicalJurisdiction": "Territory of India",
      "reportingTo": "Constitution of India (Self-Governing Sovereign People)"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-RPA"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-GRAM-SABHA",
    "type": "constitutional",
    "title": "Gram Sabha (Sovereign Assembly of All Village Voters)",
    "abbreviation": "GRAM-SABHA",
    "sectionId": "SEC-DEM-23",
    "sectionNumber": "23",
    "level": "local",
    "category": "legislation",
    "position": {
      "x": 4000,
      "y": 380
    },
    "summary": "The sole direct democracy institution recognized in the Constitution of India (Article 243A). Consists of ALL adult registered voters of the village. The Gram Sabha holds supreme deliberative authority: it approves the annual village budget, selects welfare beneficiaries (PMAY-G, pensions), and conducts social audits of Panchayat works.",
    "mandate": [
      "Article 243A: A Gram Sabha may exercise such powers and perform such functions at the village level as the Legislature of a State may, by law, provide.",
      "Direct deliberative democracy and mandatory social audit of village administration."
    ],
    "powers": [
      "Approves the Annual Development Plan and Budget of the Gram Panchayat.",
      "Identifies and approves the final list of beneficiaries for government poverty schemes.",
      "Conducts mandatory Social Audits of all MGNREGA works and public expenditure in the village.",
      "Issues mandatory consent for land acquisition in Scheduled Areas under PESA Act 1996."
    ],
    "limitations": [
      "Resolutions must conform to state statutory acts and constitutional boundaries."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 243(b), 243A, PESA Act 1996",
      "positionName": "Sovereign Village Assembly (Gram Sabha)",
      "cadreOrService": "Direct Deliberative Assembly of Village Electors",
      "electoralOrSelectionMethod": "Universal inclusion of all registered village voters",
      "tenure": "Permanent Sovereign Village Body",
      "geographicalJurisdiction": "Revenue Village / Gram Panchayat boundary",
      "reportingTo": "Sovereign Village Electors"
    },
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified"
  }
];

// ==========================================
// RELATIONSHIPS: ONLY SECTION HUB HEADERS LINKED
// INTERNAL ENTITIES ARE COMPLETELY FREESTANDING
// ==========================================
export const RELATIONSHIPS_V4: RelationshipEdgeData[] = [
  {
    "id": "REL-DEM-01",
    "sourceNodeId": "HUB-DEM-APEX",
    "targetNodeId": "HUB-DEM-RAJYA-SABHA",
    "type": "CONSTITUTIONALLY_EMPOWERS",
    "label": "Article 79: Parliament consists of President and Council of States (Rajya Sabha)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-02",
    "sourceNodeId": "HUB-DEM-APEX",
    "targetNodeId": "HUB-DEM-LOK-SABHA",
    "type": "CONSTITUTIONALLY_EMPOWERS",
    "label": "Article 79: Parliament consists of President and House of the People (Lok Sabha)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-03",
    "sourceNodeId": "HUB-DEM-APEX",
    "targetNodeId": "HUB-DEM-PMO-CABINET",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Articles 74, 75 & 77: President appoints Prime Minister; union executive power exercised on Cabinet advice",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-04",
    "sourceNodeId": "HUB-DEM-APEX",
    "targetNodeId": "HUB-DEM-JUDICIARY",
    "type": "CONSTITUTIONALLY_EMPOWERS",
    "label": "Articles 124 & 217: Presidential Warrant appointment of Chief Justice of India and Judges",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-05",
    "sourceNodeId": "HUB-DEM-APEX",
    "targetNodeId": "HUB-DEM-COMMISSIONS",
    "type": "CONSTITUTIONALLY_EMPOWERS",
    "label": "Articles 148, 316, 324: President appoints CAG, UPSC Members, and Election Commissioners",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-06",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-DEFENCE",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: Cabinet Committee on Security superintendence of Armed Forces",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-07",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-HOME-AFFAIRS",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: Internal security, border guarding CAPFs & central intelligence",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-08",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-EXTERNAL-AFFAIRS",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: Foreign policy, international treaties & diplomatic missions",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-09",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-FINANCE",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: Union budget, economic policy, national taxation & revenue administration",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-10",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-RAILWAYS",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: National rail network, passenger mobility & logistics corridor",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-11",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-EDUCATION",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: National Education Policy, university regulation & school standards",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-12",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-HEALTH",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: National health missions, public healthcare & medical standards",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-13",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-AGRI-RURAL",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: Agricultural policy, rural development, food distribution & water security",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-14",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-INFRASTRUCTURE",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: National highway network, aviation safety, ports, power & petroleum",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-15",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-TECH-LAW",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Allocation of Business: Digital India governance, legal drafting, civil services & space research",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-16",
    "sourceNodeId": "HUB-DEM-PMO-CABINET",
    "targetNodeId": "HUB-DEM-STATE-EXECUTIVE",
    "type": "COORDINATES",
    "label": "Articles 256 & 257: Union-State executive coordination, Finance Commission transfers & national policy",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-17",
    "sourceNodeId": "HUB-DEM-STATE-EXECUTIVE",
    "targetNodeId": "HUB-DEM-STATE-LEGISLATURE",
    "type": "COORDINATES",
    "label": "Articles 163, 164, 174: State Cabinet responsibility to Legislative Assembly & gubernatorial summons",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-18",
    "sourceNodeId": "HUB-DEM-STATE-EXECUTIVE",
    "targetNodeId": "HUB-DEM-POLICE",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "Schedule 7, List II, Entry 2: State Home Department command of State Police hierarchy",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-19",
    "sourceNodeId": "HUB-DEM-STATE-EXECUTIVE",
    "targetNodeId": "HUB-DEM-MAGISTRACY",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "State Chief Secretariat & Revenue Department command of District Collectorate & Magistracy",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-20",
    "sourceNodeId": "HUB-DEM-MAGISTRACY",
    "targetNodeId": "HUB-DEM-URBAN-LOCAL",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "District administrative coordination, disaster management & statutory urban municipal oversight",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-21",
    "sourceNodeId": "HUB-DEM-MAGISTRACY",
    "targetNodeId": "HUB-DEM-RURAL-PANCHAYAT",
    "type": "ADMINISTRATIVELY_OVERSEES",
    "label": "District administrative supervision, rural development scheme execution & electoral verification",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-22",
    "sourceNodeId": "HUB-DEM-CITIZENS",
    "targetNodeId": "HUB-DEM-LOK-SABHA",
    "type": "LEGISLATES",
    "label": "Article 326: Sovereign Citizens directly elect 543 Members of Parliament (Lok Sabha) via adult franchise",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-23",
    "sourceNodeId": "HUB-DEM-CITIZENS",
    "targetNodeId": "HUB-DEM-STATE-LEGISLATURE",
    "type": "LEGISLATES",
    "label": "Article 326: Sovereign Citizens directly elect Members of Legislative Assembly (MLAs) across constituencies",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-24",
    "sourceNodeId": "HUB-DEM-CITIZENS",
    "targetNodeId": "HUB-DEM-URBAN-LOCAL",
    "type": "LEGISLATES",
    "label": "74th Constitutional Amendment: Urban citizens directly elect Municipal Ward Corporators",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-DEM-25",
    "sourceNodeId": "HUB-DEM-CITIZENS",
    "targetNodeId": "HUB-DEM-RURAL-PANCHAYAT",
    "type": "LEGISLATES",
    "label": "73rd Amendment & Art 243A: Rural citizens directly elect Sarpanch/Panchs and participate in Sovereign Gram Sabha",
    "verificationStatus": "verified"
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


