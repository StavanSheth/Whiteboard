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
    "id": "DEM-PRESIDENT",
    "type": "constitutional",
    "title": "President of India (Apex Constitutional Head of State)",
    "abbreviation": "PRESIDENT-OF-INDIA",
    "sectionId": "SEC-DEM-01",
    "sectionNumber": "01",
    "level": "constitutional",
    "category": "legislation",
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
    "id": "DEM-MP-RAJYA-SABHA",
    "type": "legislature",
    "title": "Member of Parliament — Rajya Sabha (245 MPs - States Representation)",
    "abbreviation": "MP-RAJYA-SABHA",
    "sectionId": "SEC-DEM-02",
    "sectionNumber": "02",
    "level": "union",
    "category": "legislation",
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
    "id": "DEM-RS-CHAIRMAN",
    "type": "legislature",
    "title": "Rajya Sabha Presiding Hierarchy (Chairman & Deputy Chairman)",
    "abbreviation": "RS-CHAIRMAN",
    "sectionId": "SEC-DEM-02",
    "sectionNumber": "02",
    "level": "union",
    "category": "legislation",
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
    "id": "DEM-LS-SPEAKER",
    "type": "legislature",
    "title": "Speaker of the Lok Sabha (Presiding Officer of Lower House)",
    "abbreviation": "LS-SPEAKER",
    "sectionId": "SEC-DEM-03",
    "sectionNumber": "03",
    "level": "union",
    "category": "legislation",
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
    "id": "DEM-CABINET-SEC",
    "type": "department",
    "title": "Cabinet Secretariat (Cabinet Secretary of India)",
    "abbreviation": "CABINET-SEC",
    "sectionId": "SEC-DEM-04",
    "sectionNumber": "04",
    "level": "union",
    "category": "executive-administration",
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
    "id": "DEM-PM",
    "type": "executive",
    "title": "Prime Minister of India (Head of Government & Elected MP)",
    "abbreviation": "PRIME-MINISTER",
    "sectionId": "SEC-DEM-04",
    "sectionNumber": "04",
    "level": "union",
    "category": "executive-administration",
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
    "id": "DEM-ARMED-FORCES-CDS",
    "type": "office",
    "title": "Chief of Defence Staff (CDS) & Department of Military Affairs",
    "abbreviation": "CDS-DMA",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "executive-administration",
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
    "id": "DEM-DEF-DRDO-CHAIRMAN",
    "type": "statutoryRegulator",
    "title": "Secretary, Department of Defence R&D & Chairman, DRDO",
    "abbreviation": "DEF-DRDO-CHAIR",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Chief scientific advisor to Raksha Mantri and head of the Defence Research and Development Organisation (DRDO). Directs 50+ national research laboratories developing missiles, radar, combat vehicles, and aerospace systems.",
    "mandate": [
      "Drive indigenous design and technological self-reliance in cutting-edge military hardware.",
      "Direct strategic missile systems (Agni, Prithvi, BrahMos), combat aircraft (Tejas), and naval sonars."
    ],
    "powers": [
      "Allocates R&D funds across 50 national laboratories and academic centres of excellence.",
      "Sanctions technology transfer (ToT) to public and private Indian defence manufacturers."
    ],
    "limitations": [
      "Subject to strategic mission directives from Defence Minister and Cabinet Committee on Security."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77",
      "positionName": "Secretary (Defence R&D) & Chairman, DRDO",
      "cadreOrService": "Distinguished Scientist / Apex Scientific Service (Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Nationwide DRDO research laboratories and missile ranges",
      "tenureOrTerm": "Tenure-based executive contract (typically 2-3 years)",
      "reportsTo": "Raksha Mantri & Prime Minister",
      "subordinatesCountOrScope": "5,000+ defence scientists and 25,000+ technical personnel across 50 labs",
      "checksAndBalances": [
        "Peer scientific review",
        "CAG Defence Audit"
      ],
      "appealForum": "Supreme Court of India",
      "historicalOrigin": "Formed in 1958 by amalgamation of Technical Development Establishment"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-DEF-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister of Defence (Raksha Mantri)",
    "abbreviation": "DEF-MINISTER",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Political and constitutional head of the Ministry of Defence. Member of the Cabinet Committee on Security (CCS), responsible to Parliament for national defence, armed forces policy, strategic procurement, and military budget.",
    "mandate": [
      "Exercise political control and constitutional responsibility over India's Armed Forces under Article 75.",
      "Formulate defence policy, border security strategy, and approve major capital procurements through Defence Acquisition Council (DAC)."
    ],
    "powers": [
      "Chairs the Defence Acquisition Council (DAC) approving procurement for Army, Navy, and Air Force.",
      "Recommends appointments of CDS, Service Chiefs, and Defence Secretary to the Appointments Committee of the Cabinet (ACC)."
    ],
    "limitations": [
      "Supreme Command of Armed Forces vests in the President (Article 53(2)).",
      "Major war deployment and nuclear command decisions require Cabinet Committee on Security (CCS) approval."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75, 77 & 78",
      "positionName": "Union Cabinet Minister of Defence",
      "cadreOrService": "Political Executive (Cabinet Minister / Member of Parliament)",
      "electoralOrSelectionMethod": "Appointed by President on advice of Prime Minister under Article 75",
      "geographicalJurisdiction": "Republic of India & Overseas Strategic Commands",
      "tenureOrTerm": "Pleasure of the President / Concurrent with Lok Sabha term",
      "reportsTo": "Prime Minister & Parliament of India",
      "subordinatesCountOrScope": "Armed Forces (1.4 million active personnel) and ~2.5 lakh civilian staff",
      "discretionaryPowers": [
        "Emergency defence equipment acquisitions",
        "Strategic defence diplomatic dialogues"
      ],
      "checksAndBalances": [
        "Parliamentary Standing Committee on Defence",
        "Audit by CAG of India"
      ],
      "appealForum": "Supreme Court / Parliament of India",
      "historicalOrigin": "Ministry of Defence (established 1947, evolved from Department of Defence 1776)"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-DEF-MOS",
    "type": "executive",
    "title": "Minister of State for Defence (MoS Defence)",
    "abbreviation": "DEF-MOS",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Junior political executive assisting the Raksha Mantri. Oversees delegated departments such as Defence Production, Ex-Servicemen Welfare (DESW), and answers parliamentary queries on behalf of the ministry.",
    "mandate": [
      "Assist Union Cabinet Minister in parliamentary business, veterans' welfare, and indigenous defence production.",
      "Discharge specific delegated portfolios under the Government of India (Allocation of Business) Rules 1961."
    ],
    "powers": [
      "Reviews welfare schemes for 32+ lakh ex-servicemen through Kendriya Sainik Board (KSB).",
      "Supervises Defence Public Sector Undertakings (DPSUs like HAL, BEL, MDL, BDL)."
    ],
    "limitations": [
      "Subordinate to the Union Cabinet Minister; cannot attend Cabinet meetings unless specially invited."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Defence",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on advice of Prime Minister",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Cabinet Minister of Defence & Prime Minister",
      "subordinatesCountOrScope": "Department of Defence Production & Department of Ex-Servicemen Welfare",
      "checksAndBalances": [
        "Cabinet Minister supervision",
        "Parliamentary scrutiny"
      ],
      "appealForum": "Prime Minister / Cabinet",
      "historicalOrigin": "Council of Ministers structural tier under Constitution"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-DEF-SECRETARY",
    "type": "department",
    "title": "Defence Secretary (Secretary, Department of Defence)",
    "abbreviation": "DEF-SECRETARY",
    "sectionId": "SEC-DEM-05",
    "sectionNumber": "05",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Senior-most IAS officer in the Ministry of Defence. Coordinates defence policy, manages the defence budget, coordinates inter-service matters with CDS, and acts as Principal Accounting Officer for the Ministry.",
    "mandate": [
      "Administrative head of Department of Defence and coordinator of all 5 departments of MoD under Allocation of Business Rules.",
      "Chief accounting authority for Defence budget (over Rs 6.2 lakh crore)."
    ],
    "powers": [
      "Signs statutory defence contracts, international government-to-government procurement treaties.",
      "Supervises Defence Estates, National Cadet Corps (NCC), and Border Roads Organisation (BRO)."
    ],
    "limitations": [
      "Military command decisions vest in the CDS and three Service Chiefs."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & 312",
      "positionName": "Defence Secretary to Government of India",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Selected by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Fixed minimum 2-year tenure (extendable under service rules)",
      "reportsTo": "Union Cabinet Minister of Defence & Cabinet Secretary",
      "subordinatesCountOrScope": "Additional Secretaries, Joint Secretaries, Defence Estates, BRO, NCC",
      "checksAndBalances": [
        "Audit by Comptroller and Auditor General (CAG)",
        "Parliamentary Public Accounts Committee"
      ],
      "appealForum": "Central Administrative Tribunal (CAT) / High Court",
      "historicalOrigin": "Established as Secretariat head under Government of India Acts"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
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
    "id": "DEM-CAPF-HEADS",
    "type": "department",
    "title": "Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG, Assam Rifles)",
    "abbreviation": "CAPF-HEADS",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "executive-administration",
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
    "id": "DEM-HOME-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister for Home Affairs (Griha Mantri)",
    "abbreviation": "HOME-MINISTER",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Apex political executive governing national internal security, border management, Centre-State relations, administration of Union Territories, disaster response, and cadre control of the Indian Police Service (IPS).",
    "mandate": [
      "Safeguard territorial integrity and maintain internal peace across all States and UTs under Article 355.",
      "Supervise counter-terrorism, border guarding, intelligence operations, and disaster management under DMA 2005."
    ],
    "powers": [
      "Recommends imposition of President's Rule in States under Article 356.",
      "Directs Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG) and Intelligence Bureau.",
      "Administers citizenship grant, National Investigation Agency (NIA), and Unlawful Activities (Prevention) Act (UAPA)."
    ],
    "limitations": [
      "Public order and police are State subjects under Schedule 7, List II; central forces deployed only in aid of civil authority or border security."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75, 355 & 356",
      "positionName": "Union Cabinet Minister for Home Affairs",
      "cadreOrService": "Political Executive (Cabinet Minister / MP)",
      "electoralOrSelectionMethod": "Appointed by President on advice of Prime Minister",
      "geographicalJurisdiction": "Republic of India & 8 Union Territories",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "10 lakh CAPF personnel, Central Intelligence, and UT administrations",
      "checksAndBalances": [
        "Parliamentary Standing Committee on Home Affairs",
        "Supreme Court judicial review"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Home Department established 1843"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HOME-MOS",
    "type": "executive",
    "title": "Minister of State for Home Affairs (MoS Home)",
    "abbreviation": "HOME-MOS",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Junior political executive assisting the Home Minister. Handles delegated areas including disaster management (NDRF), border area development, official language promotion, and North East region affairs.",
    "mandate": [
      "Discharge statutory and administrative duties delegated by Union Home Minister under Business Rules.",
      "Coordinate disaster response deployments and parliamentary legislative questions."
    ],
    "powers": [
      "Oversees National Disaster Response Force (NDRF) deployments during floods and cyclones.",
      "Reviews Border Area Development Programme (BADP) implementation across border states."
    ],
    "limitations": [
      "Subordinate to Union Home Minister; cannot independently sanction major counter-terror actions or presidential notifications."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Home Affairs",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Home Minister & Prime Minister",
      "subordinatesCountOrScope": "Delegated MHA divisions and national disaster bodies",
      "checksAndBalances": [
        "Home Minister oversight",
        "Parliamentary accountability"
      ],
      "appealForum": "Union Home Minister",
      "historicalOrigin": "Constitutional Council of Ministers framework"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HOME-SECRETARY",
    "type": "department",
    "title": "Union Home Secretary (Secretary, Ministry of Home Affairs)",
    "abbreviation": "HOME-SECRETARY",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Senior-most IAS officer in MHA. Cadre Controlling Authority for the Indian Police Service (IPS). Coordinates national internal security, operational deployment of paramilitary forces, and chairs National Executive Committee (NEC) for Disaster Management.",
    "mandate": [
      "Direct national internal security apparatus, border security coordination, and Centre-State law and order dialogue.",
      "Statutory sanctioning authority for electronic surveillance under Telegraph Act and IT Act Section 69."
    ],
    "powers": [
      "Cadre management, empanelment, and central deputation of all Indian Police Service (IPS) officers nationwide.",
      "Chairs the National Executive Committee under the Disaster Management Act 2005.",
      "Orders internet shutdowns and security intercepts during national emergencies."
    ],
    "limitations": [
      "Interception orders subject to mandatory review by Cabinet Secretary Review Committee under IT rules."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & 312",
      "positionName": "Union Home Secretary to Government of India",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Selected by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Fixed minimum 2-year tenure (extendable under service rules)",
      "reportsTo": "Union Home Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Special Secretaries, Joint Secretaries, DGs of CAPFs, NIA Director General",
      "checksAndBalances": [
        "Review Committee on Interceptions",
        "Judicial scrutiny by High Courts / Supreme Court"
      ],
      "appealForum": "Central Administrative Tribunal / Supreme Court",
      "historicalOrigin": "Chief bureaucratic officer of Home Department since colonial era"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HOME-SPL-SEC-IS",
    "type": "department",
    "title": "Special Secretary (Internal Security) & Director, Intelligence Bureau (IB)",
    "abbreviation": "HOME-IS-IB",
    "sectionId": "SEC-DEM-06",
    "sectionNumber": "06",
    "level": "union",
    "category": "security-law-enforcement",
    "summary": "Leads national domestic intelligence, counter-terrorism, counter-intelligence, and VIP security. Advises Union Home Minister and Prime Minister on covert security threats and internal disturbances.",
    "mandate": [
      "Gather domestic intelligence, monitor insurgent and terrorist networks, and neutralize espionage threats.",
      "Coordinate Multi-Agency Centre (MAC) for real-time 24x7 terror intelligence sharing across state police forces."
    ],
    "powers": [
      "Directs nationwide Intelligence Bureau stations and border intelligence posts.",
      "Conducts background security verifications for constitutional appointees, judges, and high-level civil servants."
    ],
    "limitations": [
      "Operates without statutory police arrest powers; actionable intelligence executed via state police or NIA."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & Schedule 7 List I Entry 8",
      "positionName": "Director, Intelligence Bureau (DIB) / Special Secretary (IS)",
      "cadreOrService": "Indian Police Service (IPS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Fixed 2-year tenure",
      "reportsTo": "Union Home Minister & Prime Minister",
      "subordinatesCountOrScope": "Nationwide IB intelligence cadre and Multi-Agency Centre (MAC)",
      "checksAndBalances": [
        "Cabinet Committee on Security (CCS) oversight",
        "Home Ministry executive supervision"
      ],
      "appealForum": "Executive Hierarchy / Supreme Court",
      "historicalOrigin": "Oldest intelligence agency in the world (founded 1887 as Central Special Branch)"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MEA-FOREIGN-SEC",
    "type": "department",
    "title": "Foreign Secretary of India (Secretary, Ministry of External Affairs)",
    "abbreviation": "MEA-FOREIGN-SEC",
    "sectionId": "SEC-DEM-07",
    "sectionNumber": "07",
    "level": "union",
    "category": "executive-administration",
    "summary": "Senior-most diplomat and administrative head of the Ministry of External Affairs. Controls the Indian Foreign Service (IFS) cadre, directs 190+ diplomatic missions worldwide, and serves as primary diplomatic adviser to Prime Minister and EAM.",
    "mandate": [
      "Execute foreign policy strategy, international treaty negotiations, and strategic bilateral partnerships.",
      "Supervise Indian embassies, high commissions, and permanent missions to the United Nations."
    ],
    "powers": [
      "Directs IFS postings, foreign diplomatic accreditations, and bilateral summit agendas.",
      "Serves as chief spokesperson on strategic national security and foreign diplomatic affairs."
    ],
    "limitations": [
      "Treaty ratifications and major foreign declarations require Union Cabinet approval."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & 312",
      "positionName": "Foreign Secretary of India",
      "cadreOrService": "Indian Foreign Service (IFS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Selected by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Global (190+ Indian Missions and Posts abroad)",
      "tenureOrTerm": "Fixed 2-year tenure (extendable)",
      "reportsTo": "External Affairs Minister, Prime Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Secretaries (West/East/ER), IFS Officers, Ambassadors, High Commissioners",
      "checksAndBalances": [
        "Cabinet Committee on Security (CCS)",
        "CAG diplomatic accounts audit"
      ],
      "appealForum": "Central Administrative Tribunal / Supreme Court",
      "historicalOrigin": "Department of External Affairs established 1946 under interim government"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MEA-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister for External Affairs (EAM)",
    "abbreviation": "MEA-MINISTER",
    "sectionId": "SEC-DEM-07",
    "sectionNumber": "07",
    "level": "union",
    "category": "executive-administration",
    "summary": "Political and constitutional head of the Ministry of External Affairs. Member of the Cabinet Committee on Security (CCS), responsible to Parliament for foreign policy, diplomatic relations, international treaties, and overseas citizen protection.",
    "mandate": [
      "Conduct foreign policy and represent the Republic of India in bilateral, regional, and United Nations multilateral forums under Article 75.",
      "Safeguard national strategic interests, negotiate international treaties, and protect the Indian diaspora abroad."
    ],
    "powers": [
      "Directs Indian diplomatic missions (190+ embassies and high commissions worldwide).",
      "Signs international treaties, extradition pacts, and bilateral agreements on behalf of the President."
    ],
    "limitations": [
      "Major strategic declarations and war-peace decisions require Cabinet Committee on Security (CCS) approval."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75 & 77",
      "positionName": "Union Cabinet Minister for External Affairs",
      "cadreOrService": "Political Executive (Cabinet Minister / Member of Parliament)",
      "electoralOrSelectionMethod": "Appointed by President on advice of Prime Minister under Article 75",
      "geographicalJurisdiction": "Global diplomatic remit & Republic of India",
      "tenureOrTerm": "Pleasure of the President / Concurrent with Lok Sabha term",
      "reportsTo": "Prime Minister of India & Parliament",
      "subordinatesCountOrScope": "Foreign Secretary, IFS cadre, 190+ overseas diplomatic missions",
      "checksAndBalances": [
        "Parliamentary Standing Committee on External Affairs",
        "Cabinet Committee on Security (CCS)"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Department of External Affairs established 1946 under interim government"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MEA-MOS",
    "type": "executive",
    "title": "Minister of State for External Affairs (MoS External Affairs)",
    "abbreviation": "MEA-MOS",
    "sectionId": "SEC-DEM-07",
    "sectionNumber": "07",
    "level": "union",
    "category": "executive-administration",
    "summary": "Junior political executive assisting the External Affairs Minister. Leads bilateral engagements across specific geographical desks (e.g., Africa, Latin America, Gulf), oversees diaspora affairs, and monitors Haj / cultural diplomacy.",
    "mandate": [
      "Support External Affairs Minister in parliamentary debates and bilateral diplomatic exchanges.",
      "Lead Indian delegations to regional forums and coordinate non-resident Indian (NRI) welfare initiatives."
    ],
    "powers": [
      "Conducts bilateral joint commissions with partner nations.",
      "Coordinates emergency evacuation missions (e.g., Operation Ganga, Operation Kaveri) for Indian citizens abroad."
    ],
    "limitations": [
      "Strategic summit outcomes and core treaties require approval of Cabinet Committee on Security and EAM."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for External Affairs",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Global bilateral engagements & Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "External Affairs Minister & Prime Minister",
      "subordinatesCountOrScope": "Assigned geographic and multilateral territorial divisions",
      "checksAndBalances": [
        "EAM supervision",
        "Parliamentary Standing Committee on External Affairs"
      ],
      "appealForum": "Prime Minister / Cabinet",
      "historicalOrigin": "Council of Ministers foreign affairs portfolio"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MEA-PASSPORT-CPV",
    "type": "process",
    "title": "Joint Secretary (CPV) & Chief Passport Officer (Passport Seva)",
    "abbreviation": "MEA-CPV-PASSPORT",
    "sectionId": "SEC-DEM-07",
    "sectionNumber": "07",
    "level": "union",
    "category": "citizen-participation",
    "summary": "Head of the Consular, Passport and Visa (CPV) Division under the Passports Act 1967. Operates the nationwide Passport Seva network (500+ Kendras) issuing ordinary, official, and diplomatic passports to Indian citizens and managing consular aid.",
    "mandate": [
      "Administer Passports Act 1967 and issue biometric and e-passports to Indian citizens.",
      "Deliver consular assistance to distress overseas Indians through MADAD portal and Pravasi Bharatiya Sahayata Kendra."
    ],
    "powers": [
      "Appoints Regional Passport Officers (RPOs) across all Indian states.",
      "Revokes or impounds passports under statutory provisions of Section 10 of Passports Act."
    ],
    "limitations": [
      "Passport impoundments subject to statutory appeal before Appellate Authority and judicial review under Article 226."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Passports Act 1967 & Article 21 (Right to Travel)",
      "positionName": "Chief Passport Officer of India",
      "cadreOrService": "Indian Foreign Service (Joint Secretary Rank, Pay Level 14)",
      "electoralOrSelectionMethod": "Central deputation posting approved by MEA",
      "geographicalJurisdiction": "Pan-India Passport Seva Kendras and overseas consular sections",
      "tenureOrTerm": "3 to 5 years posting tenure",
      "reportsTo": "Secretary (CPV & OIA) & Foreign Secretary",
      "subordinatesCountOrScope": "37 Regional Passport Offices and 500+ PSK / Post Office PSK facilities",
      "checksAndBalances": [
        "Statutory appeals under Passports Act",
        "High Court writ jurisdiction"
      ],
      "appealForum": "Chief Passport Officer (Appellate) / High Court",
      "historicalOrigin": "Indian Passports Act 1920 replaced by Passports Act 1967 following Menaka Gandhi ruling"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MEA-SECRETARIES",
    "type": "department",
    "title": "Secretaries of State (Secretary West, Secretary East & Secretary ER)",
    "abbreviation": "MEA-SEC-STATE",
    "sectionId": "SEC-DEM-07",
    "sectionNumber": "07",
    "level": "union",
    "category": "executive-administration",
    "summary": "Apex IFS officers holding Secretary rank in MEA. Division heads governing broad geopolitical hemispheres: Secretary (West) covering Europe/Americas, Secretary (East) covering ASEAN/Indo-Pacific, and Secretary (Economic Relations) managing trade diplomacy and development partnership (DPA).",
    "mandate": [
      "Direct bilateral relations and regional multilateral groupings (Quad, ASEAN, EU, BRICS, G20).",
      "Oversee Lines of Credit (LoC) and grant assistance to partner nations through Development Partnership Administration."
    ],
    "powers": [
      "Leads senior diplomatic talks, free trade diplomatic negotiations, and multilateral summit working groups.",
      "Authorizes foreign aid project grants across neighboring South Asian and African nations."
    ],
    "limitations": [
      "Subordinate to Foreign Secretary and External Affairs Minister."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & 312",
      "positionName": "Secretary (West / East / Economic Relations / CPV)",
      "cadreOrService": "Indian Foreign Service (IFS - Secretary Rank, Pay Level 17)",
      "electoralOrSelectionMethod": "Selected by ACC",
      "geographicalJurisdiction": "Assigned international regions",
      "tenureOrTerm": "Senior civil service posting",
      "reportsTo": "Foreign Secretary of India",
      "subordinatesCountOrScope": "Joint Secretaries heading regional desks and territorial divisions",
      "checksAndBalances": [
        "Foreign Secretary supervision",
        "Parliamentary oversight"
      ],
      "appealForum": "Central Administrative Tribunal",
      "historicalOrigin": "Evolved with expansion of India's global diplomatic footprint"
    },
    "sourceIds": [
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
    "id": "DEM-MOF-CEA",
    "type": "oversight",
    "title": "Chief Economic Adviser to the Government of India (CEA)",
    "abbreviation": "MOF-CEA",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "funding-finance",
    "summary": "Senior economic advisor to the Government of India, equivalent in rank to a Secretary. Authors the annual Economic Survey of India presented to Parliament, providing authoritative macroeconomic diagnosis, trade analysis, and policy reforms.",
    "mandate": [
      "Author and present the Economic Survey on the eve of the Union Budget.",
      "Advise Prime Minister and Finance Minister on inflation trends, exchange rate stability, and growth policies."
    ],
    "powers": [
      "Head of the Indian Economic Service (IES) cadre.",
      "Presents macroeconomic forecasts, debt sustainability analyses, and fiscal policy papers."
    ],
    "limitations": [
      "Advisory mandate; final fiscal and budgetary allocations decided by Finance Minister and Union Cabinet."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & Allocation of Business Rules",
      "positionName": "Chief Economic Adviser (CEA)",
      "cadreOrService": "Eminent Economist / Cadre Head, Indian Economic Service (IES - Secretary Rank)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Typically 3-year term",
      "reportsTo": "Union Finance Minister & Secretary (Economic Affairs)",
      "subordinatesCountOrScope": "Economic Division, Department of Economic Affairs and IES officers nationwide",
      "checksAndBalances": [
        "Academic scrutiny",
        "Parliamentary examination of Economic Survey"
      ],
      "appealForum": "Finance Minister",
      "historicalOrigin": "Post created in 1956 under Department of Economic Affairs"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOF-FINANCE-SEC",
    "type": "department",
    "title": "Finance Secretary to Government of India",
    "abbreviation": "MOF-FINANCE-SEC",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "funding-finance",
    "summary": "Senior-most of the five Secretaries in the Ministry of Finance (typically Secretary, Expenditure or Economic Affairs). Principal coordinator for the Annual Union Budget, public expenditure management, and inter-departmental fiscal allocation.",
    "mandate": [
      "Lead preparation of the Union Budget under Article 112 with DEA and Revenue departments.",
      "Control central government expenditure, monitor fiscal deficit targets under FRBM Act, and release centrally sponsored scheme funds."
    ],
    "powers": [
      "Chairs the Public Investment Board (PIB) sanctioning mega capital projects above Rs 500 crore.",
      "Sole civil servant signatory on all Indian One Rupee currency notes under Section 22 of RBI Act."
    ],
    "limitations": [
      "Expenditure releases strictly limited to Appropriation Acts passed by Parliament."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 77, 112 & 312",
      "positionName": "Finance Secretary to Government of India",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Designated by ACC based on seniority among MoF secretaries",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Tenure-based senior civil service posting",
      "reportsTo": "Union Finance Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Five MoF departments (Expenditure, DEA, Revenue, DFS, DIPAM)",
      "checksAndBalances": [
        "Comptroller and Auditor General of India (CAG)",
        "Parliamentary Public Accounts Committee"
      ],
      "appealForum": "Central Administrative Tribunal / Supreme Court",
      "historicalOrigin": "Finance Department secretary post created under Charter Act of 1833"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOF-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister of Finance & Corporate Affairs",
    "abbreviation": "MOF-MINISTER",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "funding-finance",
    "summary": "Political and constitutional head of the Ministry of Finance. Member of the Cabinet Committee on Economic Affairs (CCEA) and CCS. Responsible for macroeconomic stability, Annual Union Budget (Article 112), tax policy, and banking oversight.",
    "mandate": [
      "Present the Annual Financial Statement (Union Budget) before Parliament under Article 112.",
      "Mobilize central tax revenues, control fiscal deficit under FRBM Act, and regulate financial institutions."
    ],
    "powers": [
      "Presents the annual Finance Bill containing direct and indirect tax rates.",
      "Chairs the Goods and Services Tax (GST) Council under Article 279A.",
      "Releases central revenues and centrally sponsored scheme grants to States."
    ],
    "limitations": [
      "No tax can be levied or collected without statutory authority of law (Article 265).",
      "No expenditure permitted from Consolidated Fund without parliamentary Appropriation Act (Article 114)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75, 112, 114, 265 & 279A",
      "positionName": "Union Cabinet Minister of Finance",
      "cadreOrService": "Political Executive (Cabinet Minister / MP)",
      "electoralOrSelectionMethod": "Appointed by President on advice of Prime Minister",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "Finance Secretary, 5 MoF Departments, CBDT, CBIC, Enforcement Directorate (ED)",
      "checksAndBalances": [
        "Public Accounts Committee (PAC)",
        "CAG of India constitutional audit"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Finance Department created under Charter Act of 1833"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOF-MOS",
    "type": "executive",
    "title": "Minister of State for Finance (MoS Finance)",
    "abbreviation": "MOF-MOS",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "funding-finance",
    "summary": "Junior political executive assisting the Finance Minister. Answers questions in Parliament regarding revenue collections, public sector bank performance, financial inclusion (Jan Dhan), and coordinates small savings schemes.",
    "mandate": [
      "Support Finance Minister in budgetary presentations, parliamentary debates, and fiscal bill pilotage.",
      "Supervise implementation of credit schemes, microfinance, and financial literacy initiatives."
    ],
    "powers": [
      "Represents MoF in regional banking review meetings and GST Council working groups.",
      "Lays government replies on inflation, customs seizures, and tax compliance before Parliament."
    ],
    "limitations": [
      "Major fiscal policy changes and Budget decisions rest exclusively with Union Finance Minister and Cabinet."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Finance",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Finance Minister & Prime Minister",
      "subordinatesCountOrScope": "Assigned divisions within Department of Financial Services & Revenue",
      "checksAndBalances": [
        "Finance Minister review",
        "Public Accounts Committee scrutiny"
      ],
      "appealForum": "Prime Minister / Cabinet",
      "historicalOrigin": "Council of Ministers economic portfolio"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-MOF-REVENUE-SEC",
    "type": "department",
    "title": "Revenue Secretary (Department of Revenue)",
    "abbreviation": "MOF-REVENUE-SEC",
    "sectionId": "SEC-DEM-08",
    "sectionNumber": "08",
    "level": "union",
    "category": "funding-finance",
    "summary": "Administrative head of the Department of Revenue. Exercises administrative control over direct and indirect taxation boards (CBDT & CBIC), law enforcement agencies including Enforcement Directorate (ED), and serves as ex-officio Secretary to GST Council.",
    "mandate": [
      "Oversee collection of direct taxes (Income Tax, Corporation Tax) and indirect taxes (GST, Customs, Central Excise).",
      "Coordinate enforcement against tax evasion, trade money laundering, and economic offences."
    ],
    "powers": [
      "Administrative authority over Directorate of Enforcement (ED) and Central Economic Intelligence Bureau (CEIB).",
      "Formulates legislative proposals for the annual Finance Bill in consultation with tax boards."
    ],
    "limitations": [
      "No tax can be levied or collected except by statutory authority of law (Article 265)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 77, 265 & 279A",
      "positionName": "Secretary (Revenue), Ministry of Finance",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Tenure-based civil service posting",
      "reportsTo": "Finance Secretary, Finance Minister & GST Council",
      "subordinatesCountOrScope": "CBDT, CBIC, Enforcement Directorate (ED), FIU-IND, CEIB",
      "checksAndBalances": [
        "Judicial review by High Courts / Supreme Court",
        "Appellate tribunals (ITAT/CESTAT)"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "Central Board of Revenue Act 1924"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-RLY-BOARD-MEMBERS",
    "type": "department",
    "title": "Functional Members of Railway Board (Operations, Infra, Traction & Finance)",
    "abbreviation": "RLY-BOARD-MEMBERS",
    "sectionId": "SEC-DEM-09",
    "sectionNumber": "09",
    "level": "union",
    "category": "infrastructure",
    "summary": "Apex domain executives holding ex-officio Secretary rank to Government of India: Member (Operations & Business Development), Member (Infrastructure), Member (Traction & Rolling Stock), and Member (Finance). Direct engineering, electrical, and commercial functions nationwide.",
    "mandate": [
      "Formulate technical standards, rolling stock design, track maintenance protocols, and freight marketing.",
      "Manage railway revenue budgeting, accounting, and capital investments."
    ],
    "powers": [
      "Sanctions rolling stock procurement, track renewal schedules, and new train speed certifications.",
      "Issues technical instructions binding on all 17 Zonal Railways."
    ],
    "limitations": [
      "Collective accountability to Chairman & CEO, Railway Board."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Railway Board Act 1905",
      "positionName": "Member, Railway Board (ex-officio Secretary to GoI)",
      "cadreOrService": "Indian Railway Management Service (IRMS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Selected by ACC based on professional seniority",
      "geographicalJurisdiction": "Nationwide functional directorates",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Chairman & CEO, Railway Board",
      "subordinatesCountOrScope": "Principal Chief Engineers, Chief Operations Managers, and Zonal functional heads",
      "checksAndBalances": [
        "CEO review",
        "Safety statutory audits"
      ],
      "appealForum": "Central Administrative Tribunal",
      "historicalOrigin": "Functional membership established under Indian Railway Board constitution"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-RLY-CRB-CEO",
    "type": "department",
    "title": "Chairman & Chief Executive Officer (CEO), Railway Board",
    "abbreviation": "RLY-CRB-CEO",
    "sectionId": "SEC-DEM-09",
    "sectionNumber": "09",
    "level": "union",
    "category": "infrastructure",
    "summary": "Ex-officio Principal Secretary to Government of India and administrative head of Indian Railways. Leads the apex executive body governing operations, safety, infrastructure, rolling stock, and finance of the national transporter.",
    "mandate": [
      "Executive management of Indian Railways under Railway Board Act 1905 and Allocation of Business Rules.",
      "Ensure passenger safety, train punctuality, freight throughput, and modern signalling deployment."
    ],
    "powers": [
      "Directs 17 Zonal Railway General Managers and heads of all railway production units.",
      "Cadre Controlling Authority for the unified Indian Railway Management Service (IRMS)."
    ],
    "limitations": [
      "Major tariff revisions and capital borrowings require sanction of Railway Minister and Finance Ministry."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Railway Board Act 1905 & Article 77",
      "positionName": "Chairman & CEO, Railway Board (ex-officio Principal Secretary to GoI)",
      "cadreOrService": "Indian Railway Management Service (IRMS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Nationwide Indian Railways network",
      "tenureOrTerm": "Tenure-based executive appointment",
      "reportsTo": "Union Cabinet Minister of Railways & Cabinet Secretary",
      "subordinatesCountOrScope": "Functional Railway Board Members, 17 Zonal GMs, 68 DRMs, 12 lakh personnel",
      "checksAndBalances": [
        "CAG Railway Audit",
        "Commission of Railway Safety"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "Formed under Railway Board Act 1905, restructured in 2020 with CEO post"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-RLY-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister of Railways",
    "abbreviation": "RLY-MINISTER",
    "sectionId": "SEC-DEM-09",
    "sectionNumber": "09",
    "level": "union",
    "category": "infrastructure",
    "summary": "Political and constitutional head of the Ministry of Railways and Indian Railways network. Directs national rail transit policy, high-speed rail corridors (Bullet Train), freight corridors (DFC), railway safety, and passenger fares.",
    "mandate": [
      "Parliamentary accountability for Indian Railways under Article 75 and Railways Act 1989.",
      "Direct capital expansion, network electrification, safety infrastructure (Kavach), and freight growth."
    ],
    "powers": [
      "Approves railway development projects, passenger tariff structures, and new train routes.",
      "Recommends appointment of Railway Board CEO and Members to ACC."
    ],
    "limitations": [
      "Fares and capital allocations subject to overall Union Budget appropriation by Parliament."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75 and Railways Act 1989",
      "positionName": "Union Cabinet Minister of Railways",
      "cadreOrService": "Political Executive (Cabinet Minister / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Nationwide rail network (68,000+ route km across all states)",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "12 lakh railway employees, 17 Zonal Railways, 68 Operating Divisions",
      "checksAndBalances": [
        "Parliamentary Standing Committee on Railways",
        "Commissioner of Railway Safety (Civil Aviation)"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Railway Board Act 1905"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-RLY-MOS",
    "type": "executive",
    "title": "Minister of State for Railways (MoS Railways)",
    "abbreviation": "RLY-MOS",
    "sectionId": "SEC-DEM-09",
    "sectionNumber": "09",
    "level": "union",
    "category": "infrastructure",
    "summary": "Junior political executive assisting the Railway Minister. Monitors passenger amenities, station redevelopment (Amrit Bharat Stations), grievances, and railway safety implementation across regional zones.",
    "mandate": [
      "Support Cabinet Minister in parliamentary legislative work and regional railway inspections.",
      "Oversee public grievances redressal and passenger amenities improvement programs."
    ],
    "powers": [
      "Conducts on-site performance reviews of Zonal Railways and production units (CLW, DLW, ICF).",
      "Monitors RailMadad grievance portal resolution metrics."
    ],
    "limitations": [
      "Policy decisions on tariffs and macro capital outlay rest with Union Cabinet Minister."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Railways",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on advice of Prime Minister",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Cabinet Minister of Railways & Prime Minister",
      "subordinatesCountOrScope": "Delegated railway divisions and public sector enterprises (IRCTC, RVNL)",
      "checksAndBalances": [
        "Cabinet Minister supervision",
        "Parliamentary scrutiny"
      ],
      "appealForum": "Cabinet Minister of Railways",
      "historicalOrigin": "Council of Ministers framework"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-EDU-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister of Education (Shiksha Mantri)",
    "abbreviation": "EDU-MINISTER",
    "sectionId": "SEC-DEM-10",
    "sectionNumber": "10",
    "level": "union",
    "category": "education",
    "summary": "Political and constitutional head of the Ministry of Education. Directs implementation of the National Education Policy (NEP 2020), governs central universities, IITs, IIMs, and oversees school curriculum standards under Right to Education (RTE) Act.",
    "mandate": [
      "Formulate national education policies, academic standards, and research funding frameworks under NEP 2020.",
      "Parliamentary accountability for Central Universities, IITs, NITs, and national examination agencies."
    ],
    "powers": [
      "Recommends appointment of Vice-Chancellors of Central Universities and Directors of IITs to the President (Visitor).",
      "Allocates Union education budgets under Samagra Shiksha and PM-USHA schemes."
    ],
    "limitations": [
      "Education is a Concurrent subject (List III, Entry 25); States maintain independent school and state university systems."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75, 21A & Schedule 7 List III Entry 25",
      "positionName": "Union Cabinet Minister of Education",
      "cadreOrService": "Political Executive (Cabinet Minister / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "55 Central Universities, 23 IITs, 20 IIMs, 31 NITs, CBSE, UGC, NCERT",
      "checksAndBalances": [
        "Parliamentary Standing Committee on Education",
        "Comptroller and Auditor General"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Ministry of Human Resource Development (MHRD, 1985) renamed Ministry of Education in 2020"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-EDU-MOS",
    "type": "executive",
    "title": "Minister of State for Education (MoS Education)",
    "abbreviation": "EDU-MOS",
    "sectionId": "SEC-DEM-10",
    "sectionNumber": "10",
    "level": "union",
    "category": "education",
    "summary": "Junior political executive assisting the Education Minister. Monitors primary literacy missions (NIPUN Bharat), vocational education integration, teacher training programs, and minority / tribal academic scholarships.",
    "mandate": [
      "Assist Union Cabinet Minister in parliamentary discussions, budget defense, and state education minister conferences.",
      "Supervise foundational literacy, midday meal schemes (PM POSHAN), and vocational training rollout."
    ],
    "powers": [
      "Reviews state performance on Performance Grading Index (PGI) in school education.",
      "Conducts regional inspections of Navodaya Vidyalayas and Kendriya Vidyalayas."
    ],
    "limitations": [
      "Statutory policy determinations and Central University charters rest with Union Cabinet Minister."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Education",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on advice of Prime Minister",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Cabinet Minister of Education & Prime Minister",
      "subordinatesCountOrScope": "Delegated directorates and statutory autonomous institutions",
      "checksAndBalances": [
        "Education Minister review",
        "Parliamentary accountability"
      ],
      "appealForum": "Union Cabinet Minister of Education",
      "historicalOrigin": "Council of Ministers framework"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-EDU-SEC-HIGHER",
    "type": "department",
    "title": "Secretary, Department of Higher Education (DHE)",
    "abbreviation": "EDU-SEC-HIGHER",
    "sectionId": "SEC-DEM-10",
    "sectionNumber": "10",
    "level": "union",
    "category": "education",
    "summary": "Senior-most IAS officer directing university and technical education in India. Exercises administrative oversight over University Grants Commission (UGC), AICTE, Central Universities, IITs, IIMs, and National Testing Agency (NTA).",
    "mandate": [
      "Plan and expand higher education infrastructure, research funding, and international university campuses in India.",
      "Administer PM-USHA, national ranking frameworks (NIRF), and National Research Foundation (ANRF)."
    ],
    "powers": [
      "Chairs search-cum-selection committees for national higher education regulatory appointments.",
      "Releases central block grants and capital infrastructure loans (HEFA) to national universities."
    ],
    "limitations": [
      "Universities possess statutory academic autonomy governed by their respective Acts of Parliament."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & 312 and Central Universities Acts",
      "positionName": "Secretary (Higher Education) to Government of India",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Education Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "UGC, AICTE, NTA, 55 Central Universities, IIT Councils",
      "checksAndBalances": [
        "CAG performance audit",
        "Parliamentary Public Accounts Committee"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "Department of Education reorganized into DHE and DoSEL"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-EDU-SEC-SCHOOL",
    "type": "department",
    "title": "Secretary, Department of School Education & Literacy (DoSEL)",
    "abbreviation": "EDU-SEC-SCHOOL",
    "sectionId": "SEC-DEM-10",
    "sectionNumber": "10",
    "level": "union",
    "category": "education",
    "summary": "Senior-most IAS officer in charge of primary, secondary, and senior secondary school education across India. Administers the Right of Children to Free and Compulsory Education (RTE) Act 2009, Samagra Shiksha, CBSE, NCERT, and Kendriya Vidyalayas.",
    "mandate": [
      "Implement universal elementary education under Article 21A and RTE Act 2009.",
      "Direct National Curriculum Framework (NCF) rollout through NCERT and national board examinations through CBSE."
    ],
    "powers": [
      "Approves state annual work plans and budgets for 15+ lakh government schools nationwide.",
      "Exercises administrative control over CBSE, KVS, NVS, and National Council for Teacher Education (NCTE)."
    ],
    "limitations": [
      "State government schools directly administered by State School Education Departments."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 21A & 77 and RTE Act 2009",
      "positionName": "Secretary (School Education & Literacy) to GoI",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Pan-India school ecosystem (26 crore school students)",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Education Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "CBSE, NCERT, KVS, NVS, NIOS, NCTE, National Bal Bhavan",
      "checksAndBalances": [
        "NCPCR child rights statutory oversight",
        "CAG audit"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "Department of School Education established under Ministry of Education"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HLTH-DGHS",
    "type": "department",
    "title": "Director General of Health Services (DGHS)",
    "abbreviation": "HLTH-DGHS",
    "sectionId": "SEC-DEM-11",
    "sectionNumber": "11",
    "level": "union",
    "category": "healthcare",
    "summary": "Principal technical and medical advisor to the Government of India and head of the Central Health Service (CHS). Oversees central hospitals, national disease control institutes (NCDC), quarantine stations, and medical counseling (MCC).",
    "mandate": [
      "Provide expert medical advice on disease epidemics, clinical protocols, and medical education standards.",
      "Conduct centralized NEET counseling for All India Quota undergraduate and postgraduate medical seats."
    ],
    "powers": [
      "Directs National Centre for Disease Control (NCDC) and Emergency Medical Relief (EMR) cell.",
      "Oversees port health organisations, airport health posts, and central medical stores depot."
    ],
    "limitations": [
      "Policy decisions and budgetary allocations subject to approval of Union Health Secretary and Minister."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & Epidemic Diseases Act 1897",
      "positionName": "Director General of Health Services (DGHS)",
      "cadreOrService": "Central Health Service (CHS - Apex Pay Level 17, Eminent Medical Professional)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Senior technical civil service post",
      "reportsTo": "Union Health Secretary & Health Minister",
      "subordinatesCountOrScope": "Central government hospital medical superintendents, CHS doctors, NCDC, MCC",
      "checksAndBalances": [
        "Technical peer review",
        "Health Ministry oversight"
      ],
      "appealForum": "Central Administrative Tribunal",
      "historicalOrigin": "Established as Director General of Indian Medical Service in 1869"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HLTH-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister of Health & Family Welfare",
    "abbreviation": "HLTH-MINISTER",
    "sectionId": "SEC-DEM-11",
    "sectionNumber": "11",
    "level": "union",
    "category": "healthcare",
    "summary": "Political and constitutional head of national public health, medical education, disease eradication, and food safety standards. Directs Ayushman Bharat, National Health Mission (NHM), AIIMS institutions, and medical licensure under NMC.",
    "mandate": [
      "Ensure national public health preparedness, pandemic response, and healthcare access under Article 47.",
      "Parliamentary accountability for tertiary apex medical institutes (AIIMS) and regulatory bodies (NMC, DCI, FSSAI)."
    ],
    "powers": [
      "Formulates National Health Policy and approves major disease control allocations.",
      "Appoints Directors of AIIMS and governing boards of National Medical Commission (NMC)."
    ],
    "limitations": [
      "Public health and sanitation are primarily State subjects under Schedule 7, List II, Entry 6."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 47, 74 & 75 and NMC Act 2019",
      "positionName": "Union Cabinet Minister of Health & Family Welfare",
      "cadreOrService": "Political Executive (Cabinet Minister / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "22 AIIMS institutions, NHM, FSSAI, CDSCO, ICMR, NMC",
      "checksAndBalances": [
        "Parliamentary Standing Committee on Health",
        "Supreme Court public health rulings"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Ministry of Health created 1947"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HLTH-MOS",
    "type": "executive",
    "title": "Minister of State for Health & Family Welfare (MoS Health)",
    "abbreviation": "HLTH-MOS",
    "sectionId": "SEC-DEM-11",
    "sectionNumber": "11",
    "level": "union",
    "category": "healthcare",
    "summary": "Junior political executive assisting the Health Minister. Monitors maternal and child health, immunization drives (Mission Indradhanush), Ayushman Arogya Mandirs (Health & Wellness Centres), and TB elimination programs.",
    "mandate": [
      "Support Cabinet Minister in parliamentary oversight and state health minister coordination.",
      "Supervise universal immunization coverage and primary healthcare infrastructure upgrades."
    ],
    "powers": [
      "Inspects central government hospitals (Safdarjung, RML, Lady Hardinge) and AIIMS regional campuses.",
      "Represents MoHFW in international health conferences and WHO consultative bodies."
    ],
    "limitations": [
      "Statutory drug regulations and national medical policy require Cabinet Minister approval."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Health & Family Welfare",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Cabinet Minister of Health & Prime Minister",
      "subordinatesCountOrScope": "Assigned public health and family welfare directorates",
      "checksAndBalances": [
        "Health Minister review",
        "Parliamentary scrutiny"
      ],
      "appealForum": "Cabinet Minister of Health",
      "historicalOrigin": "Council of Ministers health portfolio"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HLTH-NHA-NMC",
    "type": "statutoryRegulator",
    "title": "CEO, National Health Authority (NHA) & President, National Medical Commission",
    "abbreviation": "HLTH-NHA-NMC",
    "sectionId": "SEC-DEM-11",
    "sectionNumber": "11",
    "level": "union",
    "category": "healthcare",
    "summary": "Statutory heads governing health insurance and medical licensure: CEO of NHA (manages world's largest public health insurance scheme Ayushman Bharat PM-JAY and Ayushman Bharat Digital Mission) and President of NMC (regulates medical colleges, MBBS seats, and medical ethics).",
    "mandate": [
      "Provide Rs 5 lakh annual hospital coverage to 12+ crore vulnerable families under PM-JAY.",
      "Enforce medical education standards, inspect medical colleges, and maintain National Medical Register."
    ],
    "powers": [
      "Empanels public and private hospitals nationwide and defines standard treatment benefit packages.",
      "Sanctions recognition or derecognition of medical colleges and MBBS/MD seat quotas."
    ],
    "limitations": [
      "Decisions appealable before Central Government (MoHFW) and High Courts."
    ],
    "governanceDetails": {
      "constitutionalArticle": "National Medical Commission Act 2019 & NHA Cabinet Resolution",
      "positionName": "CEO, National Health Authority / Chairperson, NMC",
      "cadreOrService": "Secretary rank to GoI / Distinguished Medical Professor",
      "electoralOrSelectionMethod": "Selected by search committee and appointed by ACC",
      "geographicalJurisdiction": "Nationwide health institutions and medical colleges",
      "tenureOrTerm": "4-year statutory term (NMC) / executive tenure (NHA)",
      "reportsTo": "Union Health Secretary & Health Minister",
      "subordinatesCountOrScope": "State Health Agencies (SHAs), 28,000+ empanelled hospitals, 700+ medical colleges",
      "checksAndBalances": [
        "Statutory audit",
        "High Court judicial review under Article 226"
      ],
      "appealForum": "Union Ministry of Health / High Court",
      "historicalOrigin": "NMC replaced Medical Council of India (MCI) in 2020; NHA created 2018"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-HLTH-SECRETARY",
    "type": "department",
    "title": "Union Health Secretary (Secretary, Department of Health & Family Welfare)",
    "abbreviation": "HLTH-SECRETARY",
    "sectionId": "SEC-DEM-11",
    "sectionNumber": "11",
    "level": "union",
    "category": "healthcare",
    "summary": "Senior-most IAS officer in MoHFW. Chief executive administrator for national healthcare delivery, National Health Mission financing, medical equipment procurement, and Central Drugs Standard Control Organisation (CDSCO).",
    "mandate": [
      "Direct national public health programs, medical education expansion, and pharmaceutical regulatory oversight.",
      "Principal accounting authority for Union health budget and international health loans (World Bank, ADB)."
    ],
    "powers": [
      "Signs statutory drug notifications and national disease surveillance emergency orders.",
      "Exercises administrative control over CDSCO (Drugs Controller General of India - DCGI) and ICMR."
    ],
    "limitations": [
      "Technical medical advice rendered independently by Director General of Health Services (DGHS)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & 312 and Drugs & Cosmetics Act 1940",
      "positionName": "Union Health Secretary to Government of India",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Health Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Additional Secretaries, Mission Director NHM, DCGI, AIIMS Governing Bodies",
      "checksAndBalances": [
        "CAG Health Audit",
        "Parliamentary Standing Committee"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "Secretariat post under Department of Health"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-AGRI-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister of Agriculture & Rural Development",
    "abbreviation": "AGRI-MINISTER",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "infrastructure",
    "summary": "Political and constitutional executive governing agrarian policy, Minimum Support Price (MSP) recommendations, farm credit, rural employment under MGNREGA, rural connectivity (PMGSY), and national food grain reserves.",
    "mandate": [
      "Drive agricultural productivity, farm income security, and rural livelihood generation under Article 48.",
      "Parliamentary accountability for PM-KISAN, crop insurance (PMFBY), MGNREGA, and Food Corporation of India (FCI)."
    ],
    "powers": [
      "Announces Minimum Support Prices (MSP) for 22 mandated crops based on CACP recommendations.",
      "Allocates rural employment guarantee outlays under MGNREGA to State Employment Guarantee Funds."
    ],
    "limitations": [
      "Agriculture and land rights are State subjects under Schedule 7, List II, Entries 14 & 18."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 48, 74 & 75 and National Food Security Act 2013",
      "positionName": "Union Cabinet Minister of Agriculture, Farmers Welfare & Rural Development",
      "cadreOrService": "Political Executive (Cabinet Minister / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "ICAR, FCI, CACP, DA&FW, Department of Rural Development",
      "checksAndBalances": [
        "Parliamentary Standing Committee on Agriculture",
        "CAG Audit"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Department of Revenue, Agriculture and Commerce established 1871"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-AGRI-MOS",
    "type": "executive",
    "title": "Minister of State for Agriculture & Rural Development",
    "abbreviation": "AGRI-MOS",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "infrastructure",
    "summary": "Junior political executive assisting the Agriculture and Rural Development Minister. Focuses on organic farming, Kisan Credit Cards (KCC), micro-irrigation, rural housing (PMAY-Gramin), and self-help group livelihoods (DAY-NRLM).",
    "mandate": [
      "Support Cabinet Minister in parliamentary questions, state agriculture minister reviews, and farmer outreach.",
      "Monitor rural housing completion targets and women self-help group bank linkage."
    ],
    "powers": [
      "Reviews implementation of Kisan Sampada Yojana and National Bamboo Mission.",
      "Conducts regional performance audits of rural road construction under PMGSY."
    ],
    "limitations": [
      "National policy decisions on food procurement and MSP sanction require Cabinet Minister approval."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Agriculture and Rural Development",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Cabinet Minister of Agriculture & Prime Minister",
      "subordinatesCountOrScope": "Assigned agriculture and rural developmental divisions",
      "checksAndBalances": [
        "Cabinet Minister review",
        "Parliamentary scrutiny"
      ],
      "appealForum": "Cabinet Minister",
      "historicalOrigin": "Council of Ministers framework"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-AGRI-SEC-AGRI",
    "type": "department",
    "title": "Secretary, Department of Agriculture & Farmers Welfare (DA&FW)",
    "abbreviation": "AGRI-SEC-DAFW",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "infrastructure",
    "summary": "Senior-most IAS officer in charge of agrarian policy, digital agriculture missions, fertilizer subsidies coordination, crop insurance, and agricultural credit. Directs PM-KISAN direct benefit transfers to 11+ crore farmers.",
    "mandate": [
      "Formulate crop production strategies, seed quality standards, and drought mitigation contingency plans.",
      "Administer PM-KISAN Samman Nidhi disbursing Rs 6,000 annually per eligible farmer family."
    ],
    "powers": [
      "Notifies pest control and quarantine regulations under Destructive Insects and Pests Act.",
      "Chairs National Crop Weather Watch Group monitoring monsoon rainfall impact on food grains."
    ],
    "limitations": [
      "Field agricultural extension services implemented directly by State Agriculture Directorates."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 & 312",
      "positionName": "Secretary (Agriculture & Farmers Welfare) to GoI",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Agriculture Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Additional Secretaries, Agriculture Commissioner, CACP, ICAR",
      "checksAndBalances": [
        "CAG Agrarian Audit",
        "Public Accounts Committee"
      ],
      "appealForum": "Central Administrative Tribunal",
      "historicalOrigin": "Established as Secretariat department under GoI Business Rules"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-AGRI-SEC-FOOD",
    "type": "department",
    "title": "Secretary, Food & Public Distribution & Chairman, Food Corporation of India",
    "abbreviation": "AGRI-SEC-FOOD-FCI",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "infrastructure",
    "summary": "Senior civil service executive managing national food security under the National Food Security Act (NFSA 2013). Manages the procurement, central buffer storage, and movement of rice and wheat to supply 81+ crore beneficiaries through the Public Distribution System (PDS).",
    "mandate": [
      "Guarantee subsidized food grains to 67% of India's population under National Food Security Act 2013.",
      "Procure food grains from farmers at MSP and maintain strategic national buffer food reserves in FCI silos."
    ],
    "powers": [
      "Determines food grain allocation quotas for each State and Union Territory.",
      "Directs Food Corporation of India (FCI) and Central Warehousing Corporation (CWC) operations."
    ],
    "limitations": [
      "Fair Price Shop (FPS) licensing and doorstep ration delivery managed directly by State Food Departments."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 and National Food Security Act 2013",
      "positionName": "Secretary (Food and Public Distribution) & Chairman, FCI",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by ACC",
      "geographicalJurisdiction": "Pan-India grain storage and supply chain",
      "tenureOrTerm": "Senior civil service posting",
      "reportsTo": "Union Food Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Food Corporation of India (FCI), Central Warehousing Corporation (CWC)",
      "checksAndBalances": [
        "CAG Food Subsidy Audit",
        "Parliamentary Committee on Food"
      ],
      "appealForum": "Central Administrative Tribunal",
      "historicalOrigin": "Food Corporation Act 1964 and Department of Food"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-AGRI-SEC-RURAL",
    "type": "department",
    "title": "Secretary, Department of Rural Development (DoRD)",
    "abbreviation": "AGRI-SEC-DORD",
    "sectionId": "SEC-DEM-12",
    "sectionNumber": "12",
    "level": "union",
    "category": "infrastructure",
    "summary": "Senior-most IAS officer in the Department of Rural Development. Administers the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA 2005) providing guaranteed wage employment to rural households nationwide.",
    "mandate": [
      "Ensure statutory enforcement of 100 days guaranteed wage employment per rural household under MGNREGA.",
      "Direct Pradhan Mantri Gram Sadak Yojana (PMGSY) connecting habitations with all-weather roads."
    ],
    "powers": [
      "Notifies wage rates for MGNREGA workers across all States under Section 6 of the Act.",
      "Sanctions releases from Central Employment Guarantee Fund to State Governments."
    ],
    "limitations": [
      "Ground execution and muster roll verification vest in Gram Panchayats and District Programme Coordinators."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 and MGNREGA Act 2005",
      "positionName": "Secretary (Rural Development) to Government of India",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Rural Republic of India (6 lakh+ villages)",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Rural Development Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Joint Secretaries, National Rural Infrastructure Development Agency (NRIDA)",
      "checksAndBalances": [
        "Social audits mandated under MGNREGA",
        "CAG Audit"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "Ministry of Rural Development created 1974"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-INFRA-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Ministers (Road Transport, Power & Environment)",
    "abbreviation": "INFRA-MINISTERS",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "infrastructure",
    "summary": "Political executives governing national highway network (Bharatmala), national electrical power grid, renewable energy transitions (solar/wind), petroleum pipelines, and statutory environmental clearances under EPA 1986.",
    "mandate": [
      "Deliver world-class highway infrastructure, uninterrupted 24x7 power supply, and ecological protection.",
      "Parliamentary accountability for NHAI, Central Electricity Authority, and National Green Tribunal statutory norms."
    ],
    "powers": [
      "Approves national expressway alignments, toll concession policies, and highway speed standards.",
      "Sanctions mega power transmission corridors and notifies emission norms for industries."
    ],
    "limitations": [
      "Environmental clearances subject to judicial scrutiny by National Green Tribunal (NGT) and Supreme Court."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75, 48A & National Highways Act 1956",
      "positionName": "Union Cabinet Ministers for Infrastructure, Energy & Environment",
      "cadreOrService": "Political Executive (Cabinet Ministers / MPs)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "NHAI, NTPC, PowerGrid, Central Pollution Control Board (CPCB)",
      "checksAndBalances": [
        "National Green Tribunal (NGT)",
        "Parliamentary Committees"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Infrastructure ministries created under Business Rules"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-INFRA-MOS",
    "type": "executive",
    "title": "Minister of State for Infrastructure & Energy",
    "abbreviation": "INFRA-MOS",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "infrastructure",
    "summary": "Junior political executive assisting the Infrastructure and Energy Ministers. Monitors road safety campaigns, green energy rooftop solar rollout (PM Surya Ghar), afforestation targets (CAMPA), and rural electricity reliability.",
    "mandate": [
      "Support Cabinet Ministers in parliamentary debates, highway toll questions, and interstate grid coordination.",
      "Oversee vehicle emission norms enforcement and renewable energy developer grievance redressal."
    ],
    "powers": [
      "Reviews state highway accident fatality reduction metrics and FASTag toll compliance.",
      "Inspects ultra-mega solar power parks and pumped hydro storage installations."
    ],
    "limitations": [
      "Statutory policy amendments and highway concession agreements require Cabinet Minister sanction."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Infrastructure and Energy",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Cabinet Ministers & Prime Minister",
      "subordinatesCountOrScope": "Assigned infrastructure and renewable energy divisions",
      "checksAndBalances": [
        "Cabinet Minister review",
        "Parliamentary oversight"
      ],
      "appealForum": "Cabinet Minister",
      "historicalOrigin": "Council of Ministers framework"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-INFRA-SEC-MOEFCC",
    "type": "department",
    "title": "Secretary, Ministry of Environment, Forest & Climate Change (MoEFCC)",
    "abbreviation": "INFRA-SEC-MOEFCC",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "infrastructure",
    "summary": "Senior-most civil servant in MoEFCC. Cadre Controlling Authority for the Indian Forest Service (IFS). Governs national environmental clearances (EIA), national parks, forest conservation laws, Central Pollution Control Board (CPCB), and international climate commitments (COP).",
    "mandate": [
      "Administer Environment (Protection) Act 1986, Forest (Conservation) Act 1980, and Wildlife (Protection) Act 1972.",
      "Evaluate environmental impact assessments and grant statutory clearances for industrial and infrastructure projects."
    ],
    "powers": [
      "Cadre management of the Indian Forest Service (IFS) across all State cadres.",
      "Chairs National Authority for Compensatory Afforestation Fund (CAMPA).",
      "Directs Central Pollution Control Board (CPCB) on air and water quality statutory mandates."
    ],
    "limitations": [
      "Decisions and clearances subject to statutory challenge before National Green Tribunal (NGT)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 48A, 51A(g), 77 & 312",
      "positionName": "Secretary (Environment, Forest & Climate Change) to GoI",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India & National Territorial Waters",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Environment Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "CPCB, Forest Survey of India, Wildlife Crime Control Bureau, Indian Forest Service",
      "checksAndBalances": [
        "National Green Tribunal (NGT)",
        "Supreme Court Green Bench"
      ],
      "appealForum": "National Green Tribunal (NGT) / Supreme Court",
      "historicalOrigin": "Department of Environment created 1980, upgraded to full Ministry in 1985"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-INFRA-SEC-MORTH",
    "type": "department",
    "title": "Secretary, MoRTH & Chairman, National Highways Authority of India (NHAI)",
    "abbreviation": "INFRA-SEC-MORTH-NHAI",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "infrastructure",
    "summary": "Senior-most administrative executives governing India's National Highway network. Directs the planning, land acquisition, concession tendering, construction (EPC / HAM models), and electronic tolling across 1.45 lakh km of National Highways.",
    "mandate": [
      "Build access-controlled expressways, economic corridors, and border strategic roads under Bharatmala Pariyojana.",
      "Administer Motor Vehicles Act 1988, Central Motor Vehicles Rules, and FASTag toll systems."
    ],
    "powers": [
      "Awards multi-thousand crore highway construction contracts and public-private partnership concessions.",
      "Directs National Highways Authority of India (NHAI) and National Highways and Infrastructure Development Corporation (NHIDCL)."
    ],
    "limitations": [
      "Highway construction strictly bound by environmental clearances from MoEFCC and forest diversion statutory laws."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 and National Highways Authority of India Act 1988",
      "positionName": "Secretary (Road Transport & Highways) / Chairman, NHAI",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Pan-India National Highways network",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Road Transport Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "NHAI Regional Officers, Project Directors, and highway technical engineers",
      "checksAndBalances": [
        "CAG Infrastructure Audit",
        "Arbitration tribunals and High Courts"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "NHAI operationalized under NHAI Act 1988"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-INFRA-SEC-POWER",
    "type": "department",
    "title": "Secretary, Ministry of Power & Chairperson, Central Electricity Authority",
    "abbreviation": "INFRA-SEC-POWER-CEA",
    "sectionId": "SEC-DEM-13",
    "sectionNumber": "13",
    "level": "union",
    "category": "infrastructure",
    "summary": "Senior civil service executive and statutory authority directing national power generation, transmission, and interstate distribution. Governs the One Nation, One Grid synchronised power system, Central Electricity Authority (CEA), and Central Electricity Regulatory Commission (CERC).",
    "mandate": [
      "Formulate National Electricity Policy and National Tariff Policy under Electricity Act 2003.",
      "Ensure national grid frequency stability, power trading exchanges, and DISCOM financial viability (Revamped Distribution Scheme)."
    ],
    "powers": [
      "Directs National Load Despatch Centre (NLDC / POSOCO) for real-time grid balancing.",
      "Oversees Central Public Sector Enterprises including NTPC, PowerGrid Corporation, NHPC, and REC/PFC."
    ],
    "limitations": [
      "Electricity distribution tariffs set independently by State Electricity Regulatory Commissions (SERCs)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 and Electricity Act 2003",
      "positionName": "Secretary (Power) to GoI / Chairperson, CEA",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17) / Eminent Power Engineer",
      "electoralOrSelectionMethod": "Appointed by ACC",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union Power Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Central Electricity Authority, NTPC, PowerGrid, POSOCO, CERC",
      "checksAndBalances": [
        "Appellate Tribunal for Electricity (APTEL)",
        "CAG Audit"
      ],
      "appealForum": "APTEL / Supreme Court",
      "historicalOrigin": "Electricity (Supply) Act 1948 replaced by Electricity Act 2003"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-LAW-UNION-SEC",
    "type": "department",
    "title": "Union Law Secretary (Department of Legal Affairs & Legislative Department)",
    "abbreviation": "LAW-UNION-SEC",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "judicial",
    "summary": "Apex legal administrator and chief parliamentary draftsman of the Government of India. Heads the Indian Legal Service (ILS) and drafts all Government Bills, Ordinances under Article 123, Constitutional Amendments, and manages central litigation before Supreme Court.",
    "mandate": [
      "Draft all legislative Bills, Ordinances, and statutory rules presented before Parliament of India.",
      "Manage central government litigation before Supreme Court of India through Attorney General and Solicitor General."
    ],
    "powers": [
      "Scrutinizes and legally certifies every draft Bill and Cabinet note before introduction in Parliament.",
      "Administers the Notaries Act 1952 and advocates central welfare policies."
    ],
    "limitations": [
      "Statutory drafting must conform to constitutional mandates and fundamental rights under Part III."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 76, 77 & 123 and Allocation of Business Rules",
      "positionName": "Union Law Secretary / Legislative Secretary to GoI",
      "cadreOrService": "Indian Legal Service (ILS - Apex Pay Level 17 / Senior District Judge on deputation)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Senior legal civil service tenure",
      "reportsTo": "Union Law Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "Draftsmen, Central Agency Section, Law Commission of India",
      "checksAndBalances": [
        "Parliamentary scrutiny of Bills",
        "Judicial review by Supreme Court"
      ],
      "appealForum": "Central Administrative Tribunal",
      "historicalOrigin": "First Law Member of Council appointed 1834 (Lord Macaulay)"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-SPACE-ISRO-DAE",
    "type": "statutoryRegulator",
    "title": "Secretary, Department of Space & Chairman, ISRO / Secretary, DAE",
    "abbreviation": "SPACE-ISRO-DAE",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "summary": "Eminent scientists leading India's strategic frontiers directly reporting to the Prime Minister: Secretary (Department of Space) & Chairman, Indian Space Research Organisation (ISRO) and Secretary (Department of Atomic Energy) & Chairman, Atomic Energy Commission (AEC).",
    "mandate": [
      "Drive India's civilian and strategic space exploration (Chandrayaan, Gaganyaan, Aditya-L1, PSLV/LVM3).",
      "Direct nuclear power generation, uranium fuel reserves, and atomic energy research (BARC, NPCIL)."
    ],
    "powers": [
      "Directs nationwide space centers (VSSC, URSC, SDSC SHAR) and atomic research centers.",
      "Authorizes commercial space satellite launches through NewSpace India Limited (NSIL) and IN-SPACe."
    ],
    "limitations": [
      "Strategic defense and non-proliferation policies governed directly by Prime Minister and CCS."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Allocation of Business Rules under Prime Minister's portfolio",
      "positionName": "Secretary (Space) & Chairman, ISRO / Secretary (Atomic Energy) & Chairman, AEC",
      "cadreOrService": "Apex Scientific Service (Pay Level 17, Distinguished Scientist)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Nationwide strategic space and atomic energy facilities",
      "tenureOrTerm": "Tenure-based executive contract",
      "reportsTo": "Prime Minister of India",
      "subordinatesCountOrScope": "ISRO Centres, Bhabha Atomic Research Centre (BARC), NPCIL, IGCAR",
      "checksAndBalances": [
        "Space Commission / Atomic Energy Commission oversight",
        "CAG Strategic Audit"
      ],
      "appealForum": "Prime Minister / Supreme Court",
      "historicalOrigin": "Atomic Energy Department created 1954; Space Department created 1972"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-TECH-MINISTER",
    "type": "executive",
    "title": "Union Cabinet Minister for Electronics, IT & Law",
    "abbreviation": "TECH-LAW-MINISTER",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "summary": "Political executive governing Digital Public Infrastructure (UPI, Aadhaar, DigiLocker), IT Act, semiconductor manufacturing, judicial appointments coordination, statutory legal drafting, and space/atomic energy under Prime Minister's oversight.",
    "mandate": [
      "Drive India's digital economy, data protection statutory compliance, and electronic manufacturing.",
      "Oversee drafting of parliamentary legislation, constitutional amendments, and government litigation before Supreme Court."
    ],
    "powers": [
      "Pilots key tech and legal bills (Digital Personal Data Protection Act, IT Rules) in Parliament.",
      "Advises President on appointment of Judges to Supreme Court and High Courts under Memorandum of Procedure."
    ],
    "limitations": [
      "Legislative enactments subject to judicial review and basic structure doctrine by Supreme Court."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74, 75, 76 & 124-217 and IT Act 2000",
      "positionName": "Union Cabinet Minister for Electronics & IT, Law & Justice",
      "cadreOrService": "Political Executive (Cabinet Minister / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Prime Minister & Parliament",
      "subordinatesCountOrScope": "MeitY, Ministry of Law & Justice, UIDAI, NIC, CERT-In",
      "checksAndBalances": [
        "Supreme Court judicial review",
        "Parliamentary Committees"
      ],
      "appealForum": "Parliament / Supreme Court",
      "historicalOrigin": "Ministry of Law & Justice is the oldest ministry (Charter Act of 1833)"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-TECH-MOS",
    "type": "executive",
    "title": "Minister of State for Electronics, IT & Law",
    "abbreviation": "TECH-LAW-MOS",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "summary": "Junior political executive assisting the Electronics, IT and Law Minister. Focuses on tech startup ecosystems, cyber safety initiatives, e-Courts phase III expansion, and legal aid clinics through NALSA.",
    "mandate": [
      "Support Cabinet Minister in parliamentary oversight, cyber law regulations, and legal literacy campaigns.",
      "Monitor India Semiconductor Mission and electronics hardware production-linked incentives (PLI)."
    ],
    "powers": [
      "Conducts performance reviews of Software Technology Parks of India (STPI) and C-DAC.",
      "Reviews Nyaya Bandhu pro bono legal services and Gram Nyayalayas progress across states."
    ],
    "limitations": [
      "Statutory rule notifications and judicial appointment memoranda require Cabinet Minister sign-off."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Articles 74 & 75",
      "positionName": "Minister of State for Electronics, IT and Law",
      "cadreOrService": "Political Executive (Council of Ministers / MP)",
      "electoralOrSelectionMethod": "Appointed by President on Prime Minister's advice",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Pleasure of President",
      "reportsTo": "Union Cabinet Minister & Prime Minister",
      "subordinatesCountOrScope": "Assigned IT, telecom, and judicial administration divisions",
      "checksAndBalances": [
        "Cabinet Minister review",
        "Parliamentary accountability"
      ],
      "appealForum": "Cabinet Minister",
      "historicalOrigin": "Council of Ministers framework"
    },
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified"
  },
  {
    "id": "DEM-TECH-SEC-MEITY",
    "type": "department",
    "title": "Secretary, Ministry of Electronics & Information Technology (MeitY)",
    "abbreviation": "TECH-SEC-MEITY",
    "sectionId": "SEC-DEM-14",
    "sectionNumber": "14",
    "level": "union",
    "category": "executive-administration",
    "summary": "Senior-most IAS officer in MeitY. Directs national digital public infrastructure, cyber security response (CERT-In), Aadhaar authority (UIDAI), National Informatics Centre (NIC), and Semiconductor Mission.",
    "mandate": [
      "Direct Digital India programs, government cloud architecture (MeghRaj), and IT Act 2000 administration.",
      "Execute India Semiconductor Mission with Rs 76,000 crore capital incentive allocations."
    ],
    "powers": [
      "Exercises statutory administrative oversight over Unique Identification Authority of India (UIDAI).",
      "Directs Indian Computer Emergency Response Team (CERT-In) on national cyber incident mitigation."
    ],
    "limitations": [
      "Website blocking and data access orders subject to Section 69A IT Act procedural rules and High Court writ review."
    ],
    "governanceDetails": {
      "constitutionalArticle": "Article 77 and Information Technology Act 2000",
      "positionName": "Secretary (Electronics & IT) to Government of India",
      "cadreOrService": "Indian Administrative Service (IAS - Apex Pay Level 17)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "geographicalJurisdiction": "Republic of India",
      "tenureOrTerm": "Senior civil service tenure",
      "reportsTo": "Union IT Minister & Cabinet Secretary",
      "subordinatesCountOrScope": "UIDAI, NIC, CERT-In, CDAC, STPI, C-MET, ERNET",
      "checksAndBalances": [
        "Data Protection Board statutory oversight",
        "CAG Audit"
      ],
      "appealForum": "Central Administrative Tribunal / High Court",
      "historicalOrigin": "Department of Electronics (1970) evolved into MeitY in 2016"
    },
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
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
    "id": "DEM-JUDICIARY-HC",
    "type": "court",
    "title": "High Courts of the States (Chief Justices & Judges across 25 High Courts)",
    "abbreviation": "HIGH-COURT",
    "sectionId": "SEC-DEM-15",
    "sectionNumber": "15",
    "level": "state",
    "category": "oversight-remedies",
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
    "id": "DEM-JUDICIARY-SC",
    "type": "court",
    "title": "Supreme Court of India (Chief Justice of India & 33 Judges)",
    "abbreviation": "SUPREME-COURT",
    "sectionId": "SEC-DEM-15",
    "sectionNumber": "15",
    "level": "constitutional",
    "category": "oversight-remedies",
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
    "id": "DEM-CAG-INDIA",
    "type": "oversight",
    "title": "Comptroller and Auditor General of India (CAG - Constitutional Auditor)",
    "abbreviation": "CAG-INDIA",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "constitutional",
    "category": "funding-finance",
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
    "id": "DEM-CVC-CBI",
    "type": "oversight",
    "title": "Central Vigilance Commission & CBI (Anti-Corruption & Investigation)",
    "abbreviation": "CVC-CBI",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "union",
    "category": "oversight-remedies",
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
    "id": "DEM-ECI",
    "type": "oversight",
    "title": "Election Commission of India (Chief Election Commissioner & ECs)",
    "abbreviation": "ECI",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "constitutional",
    "category": "oversight-remedies",
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
    "id": "DEM-SPSC",
    "type": "statutoryRegulator",
    "title": "State Public Service Commission (Chairman & Members, SPSC / MPSC)",
    "abbreviation": "SPSC-MPSC",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "state",
    "category": "examination",
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
    "id": "DEM-UPSC",
    "type": "statutoryRegulator",
    "title": "Union Public Service Commission (Chairman & Members, UPSC)",
    "abbreviation": "UPSC",
    "sectionId": "SEC-DEM-16",
    "sectionNumber": "16",
    "level": "constitutional",
    "category": "examination",
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
    "id": "DEM-CM",
    "type": "executive",
    "title": "Chief Minister of the State (Head of State Government & MLA)",
    "abbreviation": "CHIEF-MINISTER",
    "sectionId": "SEC-DEM-17",
    "sectionNumber": "17",
    "level": "state",
    "category": "executive-administration",
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
    "id": "DEM-GOVERNOR",
    "type": "constitutional",
    "title": "Governor of the State (Constitutional Head of State)",
    "abbreviation": "GOVERNOR",
    "sectionId": "SEC-DEM-17",
    "sectionNumber": "17",
    "level": "state",
    "category": "legislation",
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
    "id": "DEM-MLA",
    "type": "legislature",
    "title": "Member of Legislative Assembly (MLA — Vidhan Sabha, Directly Elected)",
    "abbreviation": "MLA-VIDHAN-SABHA",
    "sectionId": "SEC-DEM-18",
    "sectionNumber": "18",
    "level": "state",
    "category": "legislation",
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
    "id": "DEM-POL-ADG",
    "type": "office",
    "title": "2. Additional Director General of Police (ADGP)",
    "abbreviation": "POL-ADGP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
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
    "id": "DEM-POL-ASP-DSP",
    "type": "office",
    "title": "6. Assistant / Deputy Superintendent of Police (ASP / DSP / SDPO)",
    "abbreviation": "POL-ASP-DSP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "district",
    "category": "executive-administration",
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
    "id": "DEM-POL-CONSTABLE",
    "type": "office",
    "title": "10. Police Constable (PC) — Frontline Public Contact & Beat Patrol",
    "abbreviation": "POL-CONSTABLE",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-POL-DGP",
    "type": "office",
    "title": "1. Director General of Police (DGP) — State Police Chief",
    "abbreviation": "POL-DGP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
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
    "id": "DEM-POL-DIG",
    "type": "office",
    "title": "4. Deputy Inspector General of Police (DIG)",
    "abbreviation": "POL-DIG",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
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
    "id": "DEM-POL-HC",
    "type": "office",
    "title": "9. Head Constable (HC) — Station Section Commander",
    "abbreviation": "POL-HC",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-POL-IG",
    "type": "office",
    "title": "3. Inspector General of Police (IGP / IG Range)",
    "abbreviation": "POL-IGP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
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
    "id": "DEM-POL-SHO",
    "type": "office",
    "title": "7. Police Inspector / Station House Officer (SHO)",
    "abbreviation": "POL-SHO",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-POL-SP",
    "type": "office",
    "title": "5. Superintendent of Police (SP / SSP) — District Police Chief",
    "abbreviation": "POL-SP",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "district",
    "category": "executive-administration",
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
    "id": "DEM-STATE-HOME-DEPT",
    "type": "department",
    "title": "State Home Department (Additional Chief Secretary — Home)",
    "abbreviation": "STATE-HOME-DEPT",
    "sectionId": "SEC-DEM-19",
    "sectionNumber": "19",
    "level": "state",
    "category": "executive-administration",
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
    "id": "DEM-DIV-COMMISSIONER",
    "type": "office",
    "title": "Divisional Commissioner (Head of Revenue Division)",
    "abbreviation": "DIV-COMMISSIONER",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "state",
    "category": "executive-administration",
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
    "id": "DEM-TALATHI-PATWARI",
    "type": "office",
    "title": "Talathi / Patwari / Village Accountant (Village Land Records)",
    "abbreviation": "TALATHI-PATWARI",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-TEHSILDAR-MAGISTRATE",
    "type": "office",
    "title": "Tehsildar / Talukdar (Executive Magistrate & Taluka Head)",
    "abbreviation": "TEHSILDAR",
    "sectionId": "SEC-DEM-20",
    "sectionNumber": "20",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-ADDL-MUNICIPAL-COMMISSIONER",
    "type": "office",
    "title": "Additional Municipal Commissioners (IAS Functional Chiefs — Projects, Health)",
    "abbreviation": "ADDL-MC",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-MAYOR-COUNCIL",
    "type": "office",
    "title": "Mayor of the City & Corporation General Body (First Citizen of City)",
    "abbreviation": "MAYOR-COUNCIL",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "legislation",
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
    "id": "DEM-MUNICIPAL-COMMISSIONER",
    "type": "office",
    "title": "Municipal Commissioner / BMC Chief (IAS Principal Executive Officer)",
    "abbreviation": "MUNICIPAL-COMMISSIONER",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-WARD-CORPORATOR",
    "type": "legislature",
    "title": "Ward Corporator / Municipal Councillor (227 BMC Wards & Ward Committees)",
    "abbreviation": "WARD-CORPORATOR",
    "sectionId": "SEC-DEM-21",
    "sectionNumber": "21",
    "level": "local",
    "category": "legislation",
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
    "id": "DEM-BDO-BLOCK",
    "type": "office",
    "title": "Block Development Officer (BDO — Panchayat Samiti Intermediate Tier)",
    "abbreviation": "BDO-BLOCK",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-GRAM-SEVAK",
    "type": "office",
    "title": "Gram Sevak / Village Secretary (Village Administrative Staff)",
    "abbreviation": "GRAM-SEVAK",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-SARPANCH",
    "type": "office",
    "title": "Sarpanch / Village Pradhan (Constitutional Head of Gram Panchayat)",
    "abbreviation": "SARPANCH",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "executive-administration",
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
    "id": "DEM-WARD-PANCH",
    "type": "legislature",
    "title": "Ward Panch / Gram Panchayat Member (Village Ward Representative)",
    "abbreviation": "WARD-PANCH",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "local",
    "category": "legislation",
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
    "id": "DEM-ZP-CEO",
    "type": "office",
    "title": "Chief Executive Officer, Zilla Parishad (ZP CEO — IAS District Rural Head)",
    "abbreviation": "ZP-CEO",
    "sectionId": "SEC-DEM-22",
    "sectionNumber": "22",
    "level": "district",
    "category": "executive-administration",
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
    "id": "DEM-CITIZENS",
    "type": "constitutional",
    "title": "Citizen of India (Sovereign People & Electoral Franchise)",
    "abbreviation": "CITIZENS-OF-INDIA",
    "sectionId": "SEC-DEM-23",
    "sectionNumber": "23",
    "level": "constitutional",
    "category": "legislation",
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

export const RELATIONSHIPS_V4: RelationshipEdgeData[] = [
  {
    "id": "REL-V4-001",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-VICE-PRESIDENT",
    "type": "COMMISSIONS",
    "label": "Constitutional Executive Succession & Administration (Article 65)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-002",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-PM",
    "type": "APPOINTS",
    "label": "Appoints Prime Minister commanding Lok Sabha majority (Article 75(1))",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-003",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-JUDICIARY-SC",
    "type": "APPOINTS",
    "label": "Appoints Chief Justice of India & Supreme Court Judges (Article 124(2))",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-004",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-GOVERNOR",
    "type": "APPOINTS",
    "label": "Appoints State Governors across all States by warrant (Article 155)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-005",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-ECI",
    "type": "APPOINTS",
    "label": "Appoints Chief Election Commissioner & ECs (Article 324)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-006",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-CAG-INDIA",
    "type": "APPOINTS",
    "label": "Appoints Comptroller and Auditor General of India (Article 148)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-007",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-UPSC",
    "type": "APPOINTS",
    "label": "Appoints Chairman and Members of UPSC (Article 316)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-008",
    "sourceNodeId": "DEM-PRESIDENT",
    "targetNodeId": "DEM-CVC-CBI",
    "type": "APPOINTS",
    "label": "Appoints Central Vigilance Commissioner under CVC Act 2003",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-009",
    "sourceNodeId": "DEM-VICE-PRESIDENT",
    "targetNodeId": "DEM-RS-CHAIRMAN",
    "type": "HEADS",
    "label": "Ex-Officio Chairman of Rajya Sabha (Article 89)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-010",
    "sourceNodeId": "DEM-RS-CHAIRMAN",
    "targetNodeId": "DEM-MP-RAJYA-SABHA",
    "type": "PRESIDES",
    "label": "Presides over 245 Members of Rajya Sabha (Article 80)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-011",
    "sourceNodeId": "DEM-PM",
    "targetNodeId": "DEM-LS-SPEAKER",
    "type": "COORDINATES",
    "label": "Majority party in Lok Sabha nominates Speaker (Article 93)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-012",
    "sourceNodeId": "DEM-LS-SPEAKER",
    "targetNodeId": "DEM-MP-LOK-SABHA",
    "type": "PRESIDES",
    "label": "Presides over 543 directly elected Lok Sabha MPs",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-013",
    "sourceNodeId": "DEM-MP-LOK-SABHA",
    "targetNodeId": "DEM-PARL-COMMITTEES",
    "type": "FORMS",
    "label": "MPs constitute Parliamentary Standing & Financial Committees (PAC, Estimates)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-014",
    "sourceNodeId": "DEM-PM",
    "targetNodeId": "DEM-CABINET-SEC",
    "type": "DIRECTS",
    "label": "Cabinet Secretary heads Civil Services & Cabinet Secretariat machinery",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-015",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-DOPT-SEC",
    "type": "SUPERVISES",
    "label": "Supervises Department of Personnel & Training (DoPT / IAS Cadre Management)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-016",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-DEF-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Defence)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-017",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-HOME-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Home Affairs)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-018",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-MOF-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Finance)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-019",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-MEA-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (External Affairs)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-020",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-RLY-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Railways)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-021",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-EDU-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Education)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-022",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-HLTH-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Health)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-023",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-AGRI-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Agriculture)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-024",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-INFRA-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Infrastructure)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-025",
    "sourceNodeId": "DEM-CABINET-SEC",
    "targetNodeId": "DEM-TECH-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates Union Cabinet Decisions (Tech & Law)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-026",
    "sourceNodeId": "DEM-DEF-MINISTER",
    "targetNodeId": "DEM-DEF-MOS",
    "type": "DELEGATES",
    "label": "Delegates departmental portfolios to MoS Defence",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-027",
    "sourceNodeId": "DEM-DEF-MOS",
    "targetNodeId": "DEM-DEF-SECRETARY",
    "type": "SUPERVISES",
    "label": "Supervises administrative execution via Defence Secretary",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-028",
    "sourceNodeId": "DEM-DEF-SECRETARY",
    "targetNodeId": "DEM-ARMED-FORCES-CDS",
    "type": "COORDINATES",
    "label": "Directs military command & integrated defence staff",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-029",
    "sourceNodeId": "DEM-ARMED-FORCES-CDS",
    "targetNodeId": "DEM-ARMY-HEADS",
    "type": "COMMANDS",
    "label": "Operational command of Indian Army",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-030",
    "sourceNodeId": "DEM-ARMED-FORCES-CDS",
    "targetNodeId": "DEM-NAVY-AIRFORCE-HEADS",
    "type": "COMMANDS",
    "label": "Operational command of Indian Navy & Air Force",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-031",
    "sourceNodeId": "DEM-DEF-SECRETARY",
    "targetNodeId": "DEM-DEF-DRDO-CHAIRMAN",
    "type": "SUPERVISES",
    "label": "Directs indigenous defence technology & weapons research",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-032",
    "sourceNodeId": "DEM-HOME-MINISTER",
    "targetNodeId": "DEM-HOME-MOS",
    "type": "DELEGATES",
    "label": "Delegates internal security portfolios to MoS Home",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-033",
    "sourceNodeId": "DEM-HOME-MOS",
    "targetNodeId": "DEM-HOME-SECRETARY",
    "type": "SUPERVISES",
    "label": "Supervises internal security administration via Home Secretary",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-034",
    "sourceNodeId": "DEM-HOME-SECRETARY",
    "targetNodeId": "DEM-CAPF-HEADS",
    "type": "COMMANDS",
    "label": "Commands Central Armed Police Forces (CRPF, BSF, CISF, ITBP)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-035",
    "sourceNodeId": "DEM-HOME-SECRETARY",
    "targetNodeId": "DEM-HOME-SPL-SEC-IS",
    "type": "DIRECTS",
    "label": "Directs Intelligence Bureau (IB) & counter-terror operations",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-036",
    "sourceNodeId": "DEM-MEA-MINISTER",
    "targetNodeId": "DEM-MEA-MOS",
    "type": "DELEGATES",
    "label": "Delegates regional diplomacy to MoS External Affairs",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-037",
    "sourceNodeId": "DEM-MEA-MOS",
    "targetNodeId": "DEM-MEA-FOREIGN-SEC",
    "type": "SUPERVISES",
    "label": "Supervises Indian Foreign Service via Foreign Secretary",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-038",
    "sourceNodeId": "DEM-MEA-FOREIGN-SEC",
    "targetNodeId": "DEM-MEA-SECRETARIES",
    "type": "SUPERVISES",
    "label": "Oversees Secretaries West, East & Economic Relations",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-039",
    "sourceNodeId": "DEM-MEA-FOREIGN-SEC",
    "targetNodeId": "DEM-MEA-PASSPORT-CPV",
    "type": "DIRECTS",
    "label": "Directs Central Passport Organization & citizen passport services",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-040",
    "sourceNodeId": "DEM-MOF-MINISTER",
    "targetNodeId": "DEM-MOF-MOS",
    "type": "DELEGATES",
    "label": "Delegates revenue & economic portfolios to MoS Finance",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-041",
    "sourceNodeId": "DEM-MOF-MOS",
    "targetNodeId": "DEM-MOF-FINANCE-SEC",
    "type": "SUPERVISES",
    "label": "Supervises national budget & fiscal policy via Finance Secretary",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-042",
    "sourceNodeId": "DEM-MOF-FINANCE-SEC",
    "targetNodeId": "DEM-MOF-REVENUE-SEC",
    "type": "SUPERVISES",
    "label": "Directs Department of Revenue tax collection",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-043",
    "sourceNodeId": "DEM-MOF-REVENUE-SEC",
    "targetNodeId": "DEM-CBDT-IRS-REVENUE",
    "type": "COMMANDS",
    "label": "Commands CBDT direct taxes & CBIC indirect GST authorities",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-044",
    "sourceNodeId": "DEM-MOF-FINANCE-SEC",
    "targetNodeId": "DEM-MOF-CEA",
    "type": "COORDINATES",
    "label": "Consults Chief Economic Adviser on Annual Economic Survey",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-045",
    "sourceNodeId": "DEM-MOF-FINANCE-SEC",
    "targetNodeId": "DEM-COMMERCE-MINISTER",
    "type": "COORDINATES",
    "label": "Coordinates national trade & industrial policy (DPIIT)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-046",
    "sourceNodeId": "DEM-RLY-MINISTER",
    "targetNodeId": "DEM-RLY-MOS",
    "type": "DELEGATES",
    "label": "Delegates railway operations to MoS Railways",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-047",
    "sourceNodeId": "DEM-RLY-MOS",
    "targetNodeId": "DEM-RLY-CRB-CEO",
    "type": "SUPERVISES",
    "label": "Supervises railway operations via Chairman & CEO Railway Board",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-048",
    "sourceNodeId": "DEM-RLY-CRB-CEO",
    "targetNodeId": "DEM-RLY-BOARD-MEMBERS",
    "type": "COMMANDS",
    "label": "Commands Functional Board Members (Operations, Infra, Finance)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-049",
    "sourceNodeId": "DEM-EDU-MINISTER",
    "targetNodeId": "DEM-EDU-MOS",
    "type": "DELEGATES",
    "label": "Delegates education initiatives to MoS Education",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-050",
    "sourceNodeId": "DEM-EDU-MOS",
    "targetNodeId": "DEM-EDU-SEC-HIGHER",
    "type": "SUPERVISES",
    "label": "Supervises university higher education via Secretary DHE",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-051",
    "sourceNodeId": "DEM-EDU-MOS",
    "targetNodeId": "DEM-EDU-SEC-SCHOOL",
    "type": "SUPERVISES",
    "label": "Supervises national school education via Secretary DoSEL",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-052",
    "sourceNodeId": "DEM-HLTH-MINISTER",
    "targetNodeId": "DEM-HLTH-MOS",
    "type": "DELEGATES",
    "label": "Delegates public health initiatives to MoS Health",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-053",
    "sourceNodeId": "DEM-HLTH-MOS",
    "targetNodeId": "DEM-HLTH-SECRETARY",
    "type": "SUPERVISES",
    "label": "Supervises public healthcare system via Health Secretary",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-054",
    "sourceNodeId": "DEM-HLTH-SECRETARY",
    "targetNodeId": "DEM-HLTH-DGHS",
    "type": "DIRECTS",
    "label": "Directs national medical services & disease surveillance",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-055",
    "sourceNodeId": "DEM-HLTH-SECRETARY",
    "targetNodeId": "DEM-HLTH-NHA-NMC",
    "type": "SUPERVISES",
    "label": "Directs Ayushman Bharat (NHA) & medical education (NMC)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-056",
    "sourceNodeId": "DEM-AGRI-MINISTER",
    "targetNodeId": "DEM-AGRI-MOS",
    "type": "DELEGATES",
    "label": "Delegates agricultural schemes to MoS Agriculture",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-057",
    "sourceNodeId": "DEM-AGRI-MOS",
    "targetNodeId": "DEM-AGRI-SEC-AGRI",
    "type": "SUPERVISES",
    "label": "Supervises farming policies via Secretary DA&FW",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-058",
    "sourceNodeId": "DEM-AGRI-MOS",
    "targetNodeId": "DEM-AGRI-SEC-RURAL",
    "type": "SUPERVISES",
    "label": "Supervises MGNREGA & rural roads via Secretary DoRD",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-059",
    "sourceNodeId": "DEM-AGRI-MOS",
    "targetNodeId": "DEM-AGRI-SEC-FOOD",
    "type": "SUPERVISES",
    "label": "Supervises food security & FCI via Secretary Food",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-060",
    "sourceNodeId": "DEM-INFRA-MINISTER",
    "targetNodeId": "DEM-INFRA-MOS",
    "type": "DELEGATES",
    "label": "Delegates transport & energy schemes to MoS Infrastructure",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-061",
    "sourceNodeId": "DEM-INFRA-MOS",
    "targetNodeId": "DEM-INFRA-SEC-MORTH",
    "type": "SUPERVISES",
    "label": "Supervises National Highway network via NHAI & Secretary MoRTH",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-062",
    "sourceNodeId": "DEM-INFRA-MOS",
    "targetNodeId": "DEM-INFRA-SEC-POWER",
    "type": "SUPERVISES",
    "label": "Supervises national power grid via Secretary Power",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-063",
    "sourceNodeId": "DEM-INFRA-MOS",
    "targetNodeId": "DEM-INFRA-SEC-MOEFCC",
    "type": "SUPERVISES",
    "label": "Supervises environmental clearances via Secretary MoEFCC",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-064",
    "sourceNodeId": "DEM-TECH-MINISTER",
    "targetNodeId": "DEM-TECH-MOS",
    "type": "DELEGATES",
    "label": "Delegates tech & digital portfolios to MoS Tech",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-065",
    "sourceNodeId": "DEM-TECH-MOS",
    "targetNodeId": "DEM-TECH-SEC-MEITY",
    "type": "SUPERVISES",
    "label": "Supervises Digital India & IT via Secretary MeitY",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-066",
    "sourceNodeId": "DEM-TECH-MOS",
    "targetNodeId": "DEM-SPACE-ISRO-DAE",
    "type": "SUPERVISES",
    "label": "Supervises ISRO space exploration & atomic energy programs",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-067",
    "sourceNodeId": "DEM-TECH-MOS",
    "targetNodeId": "DEM-LAW-UNION-SEC",
    "type": "SUPERVISES",
    "label": "Supervises legislative drafting via Union Law Secretary",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-068",
    "sourceNodeId": "DEM-GOVERNOR",
    "targetNodeId": "DEM-CM",
    "type": "APPOINTS",
    "label": "Appoints Chief Minister commanding legislative majority (Article 164)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-069",
    "sourceNodeId": "DEM-CM",
    "targetNodeId": "DEM-CS-STATE",
    "type": "DIRECTS",
    "label": "Directs State Administrative Executive & Chief Secretariat",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-070",
    "sourceNodeId": "DEM-CS-STATE",
    "targetNodeId": "DEM-STATE-HOME-DEPT",
    "type": "SUPERVISES",
    "label": "Supervises State Home Department & internal security",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-071",
    "sourceNodeId": "DEM-MP-LOK-SABHA",
    "targetNodeId": "DEM-MLA",
    "type": "COORDINATES",
    "label": "Parliamentary constituency encompasses 6-9 State Assembly MLA segments",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-072",
    "sourceNodeId": "DEM-MP-RAJYA-SABHA",
    "targetNodeId": "DEM-MLC",
    "type": "COORDINATES",
    "label": "Federal Upper House representation links with State Legislative Councils",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-073",
    "sourceNodeId": "DEM-JUDICIARY-SC",
    "targetNodeId": "DEM-JUDICIARY-HC",
    "type": "SUPERVISES",
    "label": "Appellate & constitutional supervisory jurisdiction across 25 High Courts",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-074",
    "sourceNodeId": "DEM-UPSC",
    "targetNodeId": "DEM-SPSC",
    "type": "COORDINATES",
    "label": "Constitutional civil service recruitment standards & examination models",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-075",
    "sourceNodeId": "DEM-HOME-SECRETARY",
    "targetNodeId": "DEM-STATE-HOME-DEPT",
    "type": "COORDINATES",
    "label": "National internal security directives & modernization funding",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-076",
    "sourceNodeId": "DEM-HOME-SECRETARY",
    "targetNodeId": "DEM-POL-DGP",
    "type": "DIRECTS",
    "label": "IPS Cadre management & national police intelligence coordination",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-077",
    "sourceNodeId": "DEM-MOF-FINANCE-SEC",
    "targetNodeId": "DEM-CS-STATE",
    "type": "ADMINISTERS",
    "label": "Central tax devolution & Finance Commission statutory grants",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-078",
    "sourceNodeId": "DEM-EDU-SEC-SCHOOL",
    "targetNodeId": "DEM-CS-STATE",
    "type": "ADMINISTERS",
    "label": "Samagra Shiksha & National Education Policy state implementation",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-079",
    "sourceNodeId": "DEM-HLTH-SECRETARY",
    "targetNodeId": "DEM-CS-STATE",
    "type": "ADMINISTERS",
    "label": "National Health Mission & public healthcare funding to states",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-080",
    "sourceNodeId": "DEM-AGRI-SEC-AGRI",
    "targetNodeId": "DEM-CS-STATE",
    "type": "ADMINISTERS",
    "label": "PM-KISAN & central agricultural schemes implementation",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-081",
    "sourceNodeId": "DEM-INFRA-SEC-MORTH",
    "targetNodeId": "DEM-CS-STATE",
    "type": "ADMINISTERS",
    "label": "National highway coordination with State PWD departments",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-082",
    "sourceNodeId": "DEM-TECH-SEC-MEITY",
    "targetNodeId": "DEM-CS-STATE",
    "type": "ADMINISTERS",
    "label": "Digital India infrastructure & State e-Governance delivery",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-083",
    "sourceNodeId": "DEM-CS-STATE",
    "targetNodeId": "DEM-DIV-COMMISSIONER",
    "type": "SUPERVISES",
    "label": "Oversees Regional Revenue Divisions comprising 4-7 districts",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-084",
    "sourceNodeId": "DEM-DIV-COMMISSIONER",
    "targetNodeId": "DEM-DM-COLLECTOR",
    "type": "ADMINISTERS",
    "label": "Commands District Magistrate & Collector heading district administration",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-085",
    "sourceNodeId": "DEM-CS-STATE",
    "targetNodeId": "DEM-MUNICIPAL-COMMISSIONER",
    "type": "APPOINTS",
    "label": "Appoints IAS Municipal Commissioner as CEO of Urban Municipal Corporation",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-086",
    "sourceNodeId": "DEM-MUNICIPAL-COMMISSIONER",
    "targetNodeId": "DEM-MAYOR-COUNCIL",
    "type": "COORDINATES",
    "label": "Coordinates executive policies with elected Mayor & Corporation Council",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-087",
    "sourceNodeId": "DEM-MUNICIPAL-COMMISSIONER",
    "targetNodeId": "DEM-ADDL-MUNICIPAL-COMMISSIONER",
    "type": "COMMANDS",
    "label": "Directs functional Additional Municipal Commissioners (Projects, Health)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-088",
    "sourceNodeId": "DEM-STATE-HOME-DEPT",
    "targetNodeId": "DEM-POL-DGP",
    "type": "DIRECTS",
    "label": "State Home controls IPS cadre and state police administration",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-089",
    "sourceNodeId": "DEM-POL-DGP",
    "targetNodeId": "DEM-POL-ADG",
    "type": "COMMANDS",
    "label": "Commands Additional Director General of Police (ADGP)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-090",
    "sourceNodeId": "DEM-POL-ADG",
    "targetNodeId": "DEM-POL-IG",
    "type": "COMMANDS",
    "label": "Commands Inspector General of Police (IG Range)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-091",
    "sourceNodeId": "DEM-POL-IG",
    "targetNodeId": "DEM-POL-DIG",
    "type": "COMMANDS",
    "label": "Commands Deputy Inspector General of Police (DIG Range)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-092",
    "sourceNodeId": "DEM-POL-DIG",
    "targetNodeId": "DEM-POL-SP",
    "type": "COMMANDS",
    "label": "Commands District Superintendent of Police (SP / SSP)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-093",
    "sourceNodeId": "DEM-DM-COLLECTOR",
    "targetNodeId": "DEM-POL-SP",
    "type": "COORDINATES",
    "label": "Coordinates district law & order enforcement (CrPC/BNSS)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-094",
    "sourceNodeId": "DEM-JUDICIARY-HC",
    "targetNodeId": "DEM-JUDICIARY-DISTRICT",
    "type": "SUPERVISES",
    "label": "Supervises Principal District & Sessions Court across all districts",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-095",
    "sourceNodeId": "DEM-CS-STATE",
    "targetNodeId": "DEM-ZP-CEO",
    "type": "APPOINTS",
    "label": "Appoints IAS Chief Executive Officer (CEO) of District Zilla Parishad",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-096",
    "sourceNodeId": "DEM-DM-COLLECTOR",
    "targetNodeId": "DEM-SDM-SUBDIV",
    "type": "ADMINISTERS",
    "label": "Directs Sub-Divisional Magistrate (SDM) heading revenue sub-division",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-097",
    "sourceNodeId": "DEM-SDM-SUBDIV",
    "targetNodeId": "DEM-TEHSILDAR-MAGISTRATE",
    "type": "ADMINISTERS",
    "label": "Directs Tehsildar as Executive Magistrate & Taluka revenue head",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-098",
    "sourceNodeId": "DEM-ADDL-MUNICIPAL-COMMISSIONER",
    "targetNodeId": "DEM-WARD-CORPORATOR",
    "type": "COORDINATES",
    "label": "Delivers civic works in coordination with elected Ward Corporators",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-099",
    "sourceNodeId": "DEM-MLA",
    "targetNodeId": "DEM-WARD-CORPORATOR",
    "type": "COORDINATES",
    "label": "Assembly constituency encompasses municipal wards and ward committees",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-100",
    "sourceNodeId": "DEM-POL-SP",
    "targetNodeId": "DEM-POL-ASP-DSP",
    "type": "COMMANDS",
    "label": "Commands Sub-Divisional Police Officer (ASP / DSP / SDPO)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-101",
    "sourceNodeId": "DEM-POL-ASP-DSP",
    "targetNodeId": "DEM-POL-SHO",
    "type": "COMMANDS",
    "label": "Commands Station House Officer (SHO / Police Inspector)",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-102",
    "sourceNodeId": "DEM-POL-SHO",
    "targetNodeId": "DEM-POL-SI",
    "type": "COMMANDS",
    "label": "Directs Sub-Inspector (SI) as Primary Investigating Officer",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-103",
    "sourceNodeId": "DEM-ZP-CEO",
    "targetNodeId": "DEM-BDO-BLOCK",
    "type": "ADMINISTERS",
    "label": "Directs Block Development Officer (BDO) heading Panchayat Samiti",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-104",
    "sourceNodeId": "DEM-BDO-BLOCK",
    "targetNodeId": "DEM-SARPANCH",
    "type": "COORDINATES",
    "label": "Coordinates rural development schemes with elected Village Sarpanch",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-105",
    "sourceNodeId": "DEM-SARPANCH",
    "targetNodeId": "DEM-WARD-PANCH",
    "type": "PRESIDES",
    "label": "Presides over elected Ward Panchs in Village Gram Panchayat",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-106",
    "sourceNodeId": "DEM-BDO-BLOCK",
    "targetNodeId": "DEM-GRAM-SEVAK",
    "type": "ADMINISTERS",
    "label": "Assigns Village Secretary / Gram Sevak to execute panchayat records",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-107",
    "sourceNodeId": "DEM-SARPANCH",
    "targetNodeId": "DEM-GRAM-SEVAK",
    "type": "SUPERVISES",
    "label": "Supervises Village Gram Sevak for day-to-day administrative execution",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-108",
    "sourceNodeId": "DEM-TEHSILDAR-MAGISTRATE",
    "targetNodeId": "DEM-TALATHI-PATWARI",
    "type": "ADMINISTERS",
    "label": "Directs Village Talathi / Patwari maintaining land records and 7/12 extracts",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-109",
    "sourceNodeId": "DEM-POL-SI",
    "targetNodeId": "DEM-POL-HC",
    "type": "COMMANDS",
    "label": "Directs Head Constable (HC) station section commander",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-110",
    "sourceNodeId": "DEM-POL-HC",
    "targetNodeId": "DEM-POL-CONSTABLE",
    "type": "COMMANDS",
    "label": "Commands Police Constable (PC) for village beat patrol & frontline duty",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-111",
    "sourceNodeId": "DEM-SARPANCH",
    "targetNodeId": "DEM-GRAM-SABHA",
    "type": "REPORTS_TO",
    "label": "Accountable to Sovereign Gram Sabha for village budget and beneficiary lists",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-112",
    "sourceNodeId": "DEM-GRAM-SABHA",
    "targetNodeId": "DEM-CITIZENS",
    "type": "FOUNDS",
    "label": "All adult voting residents of the village constitute the Gram Sabha",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-113",
    "sourceNodeId": "DEM-WARD-CORPORATOR",
    "targetNodeId": "DEM-CITIZENS",
    "type": "COORDINATES",
    "label": "Represents and delivers essential civic services to urban ward residents",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-114",
    "sourceNodeId": "DEM-TALATHI-PATWARI",
    "targetNodeId": "DEM-CITIZENS",
    "type": "ADMINISTERS",
    "label": "Issues land ownership titles, caste/income certificates and crop compensation",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-115",
    "sourceNodeId": "DEM-POL-CONSTABLE",
    "targetNodeId": "DEM-CITIZENS",
    "type": "COORDINATES",
    "label": "Frontline beat policing, public grievance receipt and emergency assistance",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-116",
    "sourceNodeId": "DEM-JUDICIARY-DISTRICT",
    "targetNodeId": "DEM-CITIZENS",
    "type": "COORDINATES",
    "label": "Delivers accessible justice, fundamental rights protection and dispute resolution",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-117",
    "sourceNodeId": "DEM-MEA-PASSPORT-CPV",
    "targetNodeId": "DEM-CITIZENS",
    "type": "ADMINISTERS",
    "label": "Delivers official Indian passports and citizen consular documentation",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-118",
    "sourceNodeId": "DEM-MP-LOK-SABHA",
    "targetNodeId": "DEM-CITIZENS",
    "type": "COORDINATES",
    "label": "543 MPs represent the sovereign citizens of India in Parliament",
    "verificationStatus": "verified"
  },
  {
    "id": "REL-V4-119",
    "sourceNodeId": "DEM-MLA",
    "targetNodeId": "DEM-CITIZENS",
    "type": "COORDINATES",
    "label": "MLAs represent state constituency citizens in Vidhan Sabha",
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


