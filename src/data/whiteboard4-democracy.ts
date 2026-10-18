import { EducationNode, RelationshipEdgeData, SourceRecord, SectionMeta } from '../types';

export interface JurisdictionalTier {
  id: string;
  name: string;
  badge: string;
  description: string;
  color: string;
  sectionIds: string[];
}

export const JURISDICTIONAL_TIERS: JurisdictionalTier[] = [
  {
    "id": "TIER-UNION",
    "name": "Union / Central Government Jurisdiction",
    "badge": "Central / Federal Apex",
    "description": "President, Parliament, Prime Minister & Union Council of Ministers, Central Ministries, Defence, Intelligence & CAPF",
    "color": "emerald",
    "sectionIds": [
      "SEC-DEM-01",
      "SEC-DEM-02",
      "SEC-DEM-03",
      "SEC-DEM-04",
      "SEC-DEM-05",
      "SEC-DEM-06",
      "SEC-DEM-07",
      "SEC-DEM-08",
      "SEC-DEM-09",
      "SEC-DEM-10",
      "SEC-DEM-11",
      "SEC-DEM-12",
      "SEC-DEM-13",
      "SEC-DEM-14",
      "SEC-DEM-15"
    ]
  },
  {
    "id": "TIER-STATE",
    "name": "State Government Jurisdiction",
    "badge": "State Executive & Legislature",
    "description": "Governor, Chief Minister & State Council of Ministers, Vidhan Sabha, Vidhan Parishad, State Police 10-Rank Chain of Command",
    "color": "indigo",
    "sectionIds": [
      "SEC-DEM-16",
      "SEC-DEM-17",
      "SEC-DEM-18",
      "SEC-DEM-19"
    ]
  },
  {
    "id": "TIER-DISTRICT",
    "name": "District Administration & Field Magistracy",
    "badge": "Territorial Administration",
    "description": "Divisional Commissioner, District Magistrate & Collector, Sub-Divisional Magistrate, Tehsildar, Village Talathi",
    "color": "amber",
    "sectionIds": [
      "SEC-DEM-20"
    ]
  },
  {
    "id": "TIER-LOCAL",
    "name": "Local Self-Government Jurisdiction",
    "badge": "Urban & Rural Local Bodies",
    "description": "Urban Municipal Corporations (BMC Model) and Rural 3-Tier Panchayati Raj (Zilla Parishad, Panchayat Samiti, Gram Panchayat)",
    "color": "cyan",
    "sectionIds": [
      "SEC-DEM-21",
      "SEC-DEM-22"
    ]
  },
  {
    "id": "TIER-SOVEREIGN",
    "name": "Sovereign Democratic Base",
    "badge": "Constitutional Foundation",
    "description": "Universal Adult Franchise Electors (We, The People of India) & Sovereign Village Gram Sabha",
    "color": "rose",
    "sectionIds": [
      "SEC-DEM-23"
    ]
  }
];

export const SECTION_METAS_V4: SectionMeta[] = [
  {
    "id": "SEC-DEM-01",
    "number": "01",
    "title": "Apex Constitutional Authority (President & Vice-President)",
    "subtitle": "Head of State, Supreme Commander of Armed Forces & Constitutional Grundnorm",
    "summary": "The constitutional apex of the Republic of India. Executive power of the Union is formally vested in the President, exercised on the binding aid and advice of the Council of Ministers.",
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
    "subtitle": "Federal Chamber Representing States & Union Territories",
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
    "subtitle": "Supreme Directly Elected Legislative Chamber of the Republic",
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
    "subtitle": "Supreme Court of India, High Courts & Subordinate District Judiciary",
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
    "subtitle": "State Constitutional Executive & Apex Administrative Secretariat",
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
    "subtitle": "Elected Legislative Assemblies & Legislative Councils",
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
    "subtitle": "DGP to Constable",
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
    "subtitle": "Municipal Commissioner, Mayor & Ward Corporators",
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
    "subtitle": "District Zilla Parishad, Block Samiti & Village Panchayat",
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
    "subtitle": "We, The People of India — The Ultimate Sovereign Foundation",
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
    "summary": "The ceremonial head of the nation and supreme commander of all armed forces. Acts on the official advice of the Prime Minister and Council of Ministers, signing national laws, treaties, and major appointments.",
    "mandate": [],
    "powers": [
      "Formally appoints the Prime Minister and union ministers upon the Prime Minister’s recommendation.",
      "Appoints the Chief Justice of India, Supreme Court judges, State Governors, and the Chief Election Commissioner.",
      "Gives final assent to bills passed by Parliament for them to become law.",
      "Has the power to grant pardons, reprieves, or reduce sentences for convicted persons."
    ],
    "limitations": [
      "Cannot make independent political or policy decisions; must act strictly on the binding advice of the Council of Ministers.",
      "Cannot veto money bills or reject a bill sent back a second time by Parliament.",
      "Cannot govern as an autocrat or hold any personal commercial office of profit."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "President of India",
      "cadreOrService": "Elected Constitutional Head of State",
      "electoralOrSelectionMethod": "Electoral College of elected members of both Houses of Parliament and Legislative Assemblies of States",
      "tenure": "5 years (eligible for re-election)",
      "geographicalJurisdiction": "Territory of India (Sovereign Republic)",
      "reportingTo": "The Constitution of India",
      "superiorAuthority": "The Constitution of India; bound by the collective advice of the Union Cabinet and subject to Supreme Court constitutional review.",
      "removalOrDeElectionMethod": "Can be removed only through Impeachment by Parliament with a two-thirds majority in both the Lok Sabha and Rajya Sabha for violation of the Constitution."
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
    "summary": "The second-highest national dignitary who serves as the presiding head (Chairman) of the Rajya Sabha and steps in as acting President if the President passes away, resigns, or is incapacitated.",
    "mandate": [],
    "powers": [
      "Presides over debates and parliamentary proceedings in the Rajya Sabha.",
      "Decides who speaks in the Rajya Sabha and maintains discipline and order in the chamber.",
      "Casts the deciding tie-breaker vote in case of an exact tie in Rajya Sabha voting.",
      "Discharges all presidential functions and signs official orders during presidential vacancy."
    ],
    "limitations": [
      "Cannot vote in Rajya Sabha except to break an exact 50-50 tie.",
      "Cannot formulate government policy or manage ministry budgets; strictly a presiding dignitary.",
      "Cannot participate in active party politics while serving in the presiding chair."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Vice-President of India & Chairman of Rajya Sabha",
      "cadreOrService": "Elected Constitutional Dignitary",
      "electoralOrSelectionMethod": "Electoral College of members of both Houses of Parliament (system of proportional representation by single transferable vote)",
      "tenure": "5 years",
      "geographicalJurisdiction": "Pan-India / Parliament of India",
      "reportingTo": "The Constitution of India",
      "superiorAuthority": "The Constitution of India; works in coordination with Parliament.",
      "removalOrDeElectionMethod": "Can be removed by a resolution passed by a majority of all the then members of the Rajya Sabha and agreed to by the Lok Sabha."
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
    "summary": "Elected representatives from States and Union Territories who debate, review, revise, and vote on national legislation in the permanent Upper House.",
    "mandate": [],
    "powers": [
      "Debates, amends, and votes on national bills, constitutional amendments, and international treaties.",
      "Questions union ministers on government schemes, public spending, and policy execution.",
      "Participates in presidential and vice-presidential elections."
    ],
    "limitations": [
      "Cannot introduce or reject Money Bills; can only propose recommendations within 14 days.",
      "Cannot vote against party whip without facing disqualification under anti-defection rules.",
      "Cannot issue executive government orders, transfer government officers, or approve district tenders."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Member of Parliament (Rajya Sabha)",
      "cadreOrService": "Elected/Nominated Parliamentary Representative of States",
      "electoralOrSelectionMethod": "Elected by elected MLAs of State Assemblies via proportional representation / Nominated by President (12 members)",
      "tenure": "6 years (staggered, 1/3rd retire every 2 years)",
      "geographicalJurisdiction": "Representing State/UT in Union Parliament",
      "reportingTo": "State Electorate (MLAs) & Parliament of India",
      "superiorAuthority": "The Rajya Sabha Chairman for conduct inside the House; party leadership via whip; and the Supreme Court on election disputes.",
      "removalOrDeElectionMethod": "De-elected/disqualified by the President/Chairman on grounds of holding office of profit, insolvency, criminal conviction exceeding 2 years, or defection."
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
    "summary": "The presiding officers (Chairman and Deputy Chairman) who conduct all daily debates, questions, and voting in the Upper House of Parliament (Rajya Sabha).",
    "mandate": [],
    "powers": [
      "Regulates daily debates, admits questions, and decides points of parliamentary order in Rajya Sabha.",
      "Can suspend unruly MPs who disrupt legislative proceedings in the chamber.",
      "Decides petitions regarding disqualification of MPs under defection rules."
    ],
    "limitations": [
      "Cannot declare a bill to be a Money Bill (that power belongs exclusively to the Lok Sabha Speaker).",
      "Cannot act with party bias; must remain strictly neutral while occupying the chair."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Chairman & Deputy Chairman, Rajya Sabha",
      "cadreOrService": "Constitutional Parliamentary Presiding Officers",
      "electoralOrSelectionMethod": "Ex-officio (Chairman) / Elected by Rajya Sabha members (Deputy Chairman)",
      "tenure": "Term of Vice-Presidency (5 years) / Term of Rajya Sabha membership",
      "geographicalJurisdiction": "Council of States (Rajya Sabha), Sansad Bhavan, New Delhi",
      "reportingTo": "Parliament of India",
      "superiorAuthority": "The collective House (Rajya Sabha) and Parliament rules of procedure.",
      "removalOrDeElectionMethod": "Chairman is removed via Vice-Presidential removal process; Deputy Chairman is removed by a simple majority resolution of Rajya Sabha members."
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
    "summary": "The presiding officer and supreme administrative authority of the Lok Sabha, ensuring orderly lawmaking, protecting parliamentary privilege, and certifying Money Bills.",
    "mandate": [],
    "powers": [
      "Sole and final authority to certify whether a proposed bill is a Money Bill.",
      "Regulates the daily proceedings, admits no-confidence motions, and allocates debate speaking time in the Lok Sabha.",
      "Disciplines, names, and suspends disruptive members from the House floor.",
      "Decides petitions to disqualify Lok Sabha MPs under defection laws."
    ],
    "limitations": [
      "Cannot vote in regular legislative divisions except to break a tie vote.",
      "Cannot act in a partisan manner; is expected to rise above party loyalty once elected Speaker."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Speaker of the Lok Sabha",
      "cadreOrService": "Presiding Officer of the House of the People",
      "electoralOrSelectionMethod": "Elected by Lok Sabha MPs from amongst its members by simple majority",
      "tenure": "From election until immediately before the first meeting of the new Lok Sabha",
      "geographicalJurisdiction": "House of the People (Lok Sabha), Sansad Bhavan, New Delhi",
      "reportingTo": "House of the People (Lok Sabha)",
      "superiorAuthority": "The collective Lok Sabha chamber; decisions on member disqualification are subject to judicial review by the Supreme Court.",
      "removalOrDeElectionMethod": "Can be removed by a resolution passed by an effective majority of all the members of the Lok Sabha after giving 14 days advance notice."
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
    "summary": "Directly elected representatives chosen by local citizens across 543 parliamentary constituencies to represent public interests, vote on national laws, and approve the annual union budget.",
    "mandate": [],
    "powers": [
      "Votes to enact national laws, approve tax changes, and authorize government spending in the annual union budget.",
      "Questions union ministers during Question Hour on issues affecting citizens and constituencies.",
      "Can move and vote on no-confidence motions to test the government’s majority."
    ],
    "limitations": [
      "Cannot personally direct police investigations, arrest citizens, or approve government contract tenders.",
      "Cannot vote against party whip on confidence or money votes without risking seat disqualification.",
      "Has no executive administrative authority over civil servants or district magistracy."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Member of Parliament (Lok Sabha)",
      "cadreOrService": "Directly Elected Parliamentary Representative",
      "electoralOrSelectionMethod": "Direct universal adult suffrage by First-Past-The-Post in territorial constituencies",
      "tenure": "5 years (co-terminus with Lok Sabha unless dissolved earlier)",
      "geographicalJurisdiction": "Parliamentary Constituency (pan-India 543 constituencies)",
      "reportingTo": "Sovereign Electors / Electorate of Constituency",
      "superiorAuthority": "The voters of their parliamentary constituency, the Lok Sabha Speaker inside the House, and the party whip.",
      "removalOrDeElectionMethod": "Defeated by citizen voters during general elections (every 5 years); or disqualified by the Speaker for criminal conviction (2+ years), defection, or bankruptcy."
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
    "summary": "Cross-party scrutiny panels of MPs (Public Accounts Committee, Estimates Committee, etc.) that audit government accounts, investigate financial waste, and examine draft bills in detail.",
    "mandate": [],
    "powers": [
      "Summons government secretaries and civil servants to produce records, testify, and explain spending decisions.",
      "Audits CAG reports to expose corruption, financial leakage, and administrative inefficiency.",
      "Recommends revisions and public safeguards for proposed national bills."
    ],
    "limitations": [
      "Their recommendations and findings are advisory in nature, not binding executive orders.",
      "Cannot prosecute or punish corrupt officials directly; must table reports in Parliament for government action."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Parliamentary Committee System",
      "cadreOrService": "Joint Parliamentary Legislative Committees",
      "electoralOrSelectionMethod": "Proportional representation by single transferable vote among MPs",
      "tenure": "1 year annual reconstitution",
      "geographicalJurisdiction": "Union of India Ministries and PSUs",
      "reportingTo": "Speaker of Lok Sabha & Chairman of Rajya Sabha",
      "superiorAuthority": "Parliament (Lok Sabha Speaker and Rajya Sabha Chairman).",
      "removalOrDeElectionMethod": "Committee tenure expires annually; individual members are replaced or re-nominated by party leaders and the Speaker."
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
    "summary": "The top-ranking civil servant in India who heads the Civil Services, advises the Prime Minister on administration, and coordinates inter-ministerial policies.",
    "mandate": [],
    "powers": [
      "Prepares the agenda and manages records for all Union Cabinet meetings.",
      "Resolves inter-ministerial disputes between different central ministries.",
      "Heads the Senior Selection Board for empanelment and transfers of top IAS and central service officers.",
      "Directs emergency administrative responses during national crises and natural disasters."
    ],
    "limitations": [
      "Cannot formulate political policy; executes decisions approved by the Cabinet and Prime Minister.",
      "Has no legislative authority to make or amend laws.",
      "Cannot overturn a written ministerial or cabinet directive."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Cabinet Secretary of India",
      "cadreOrService": "Indian Administrative Service (IAS) — Apex Senior Civil Servant",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC) chaired by PM",
      "tenure": "Fixed tenure (normally 2-4 years, subject to government extensions)",
      "geographicalJurisdiction": "Pan-India / Central Secretariat, Rashtrapati Bhavan, New Delhi",
      "reportingTo": "Prime Minister of India",
      "superiorAuthority": "Prime Minister of India and the Union Cabinet.",
      "removalOrDeElectionMethod": "Appointed by the Appointments Committee of the Cabinet (ACC); can be transferred, retired, or replaced by the Prime Minister."
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
    "summary": "The senior administrative secretary managing rules, service conditions, postings, vigilance clearances, and career progression for the Indian Administrative Service (IAS) and central civil services.",
    "mandate": [],
    "powers": [
      "Issues rules and notifications governing recruitment, training, promotions, and conduct of civil servants.",
      "Manages vigilance clearance processes required before senior officer appointments.",
      "Advises the Prime Minister on central officer postings and central deputation quotas."
    ],
    "limitations": [
      "Cannot unilaterally discipline or dismiss an All-India Service officer without UPSC consultation and political approval.",
      "Cannot alter service quotas or reservation policies without cabinet and legislative clearance."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Secretary, Department of Personnel and Training (DoPT)",
      "cadreOrService": "Indian Administrative Service (IAS)",
      "electoralOrSelectionMethod": "Appointed by Appointments Committee of the Cabinet (ACC)",
      "tenure": "Standard Secretarial tenure",
      "geographicalJurisdiction": "Pan-India Central Services & AIS Cadres",
      "reportingTo": "Minister of Personnel (Prime Minister of India)",
      "superiorAuthority": "Minister of Personnel (Prime Minister of India) and the Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred or replaced by order of the Appointments Committee of the Cabinet (ACC)."
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
    "summary": "The chief executive leader of the nation who heads the Union Cabinet, directs national policy, allocates ministerial portfolios, and leads the majority in Parliament.",
    "mandate": [],
    "powers": [
      "Selects and dismisses union cabinet ministers and allocates government ministries.",
      "Sets national policy direction across defence, foreign affairs, economy, and social welfare.",
      "Advises the President on major appointments, dissolution of Lok Sabha, and national emergencies.",
      "Heads the Appointments Committee of the Cabinet (ACC) to choose top civil servants, military chiefs, and intelligence heads."
    ],
    "limitations": [
      "Must maintain the confidence of the majority of members in the Lok Sabha to remain in office.",
      "Cannot pass laws or spend tax revenues without Parliamentary approval.",
      "Actions are subject to judicial review and constitutional scrutiny by the Supreme Court of India."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Prime Minister of India",
      "cadreOrService": "Elected Head of Government (Member of Parliament)",
      "electoralOrSelectionMethod": "Appointed by President based on majority in Lok Sabha (Article 75(1))",
      "tenure": "At the pleasure of the President / Dependent on Lok Sabha majority (normally 5 years)",
      "geographicalJurisdiction": "Republic of India (Pan-India)",
      "reportingTo": "President of India (Art 78) & Lok Sabha (Art 75(3))",
      "superiorAuthority": "The sovereign citizens of India, the Constitution of India, and the Lok Sabha majority.",
      "removalOrDeElectionMethod": "Loses office immediately if a No-Confidence Motion passes in the Lok Sabha, or if their political alliance loses the general election."
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
    "summary": "The four-star general who acts as the primary military adviser to the Defence Minister and heads the Department of Military Affairs to unify Army, Navy, and Air Force operations.",
    "mandate": [],
    "powers": [
      "Leads joint military doctrine, joint theatre commands, and logistics integration across all three armed services.",
      "Prioritizes military equipment procurement lists to avoid duplicated weapons spending.",
      "Heads the Chiefs of Staff Committee (COSC) to coordinate tri-service military readiness."
    ],
    "limitations": [
      "Does not exercise direct battlefield operational command over the service chiefs (Army, Navy, Air Force).",
      "Subject to civilian executive supremacy; cannot initiate armed conflicts without political clearance."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Union Cabinet Minister of Defence, Prime Minister, and Cabinet Committee on Security (CCS).",
      "removalOrDeElectionMethod": "Appointed for a fixed tenure by the ACC; can be relieved or retired early by order of the Central Government."
    }
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
    "summary": "The Chief of Army Staff (COAS) and 7 Army Commanders who maintain operational readiness, border defence, and ground force combat capabilities across the nation.",
    "mandate": [],
    "powers": [
      "Exercises direct operational command, tactical deployment, and training of all Indian Army soldiers.",
      "Ensures land border security along international frontiers and counter-insurgency readiness.",
      "Approves internal military postings, unit transfers, and tactical equipment requirements."
    ],
    "limitations": [
      "Cannot deploy troops domestically without requisition from civilian authorities (Magistracy/Home Ministry).",
      "Must strictly uphold civilian supremacy and stay completely detached from political activity."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Chief of Defence Staff (for joint doctrine), Defence Minister, and Prime Minister.",
      "removalOrDeElectionMethod": "Appointed by ACC for a fixed tenure (3 years or age 62); can be removed or retired by the Central Government."
    }
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
    "summary": "The apex scientific secretary leading military research and development for missile systems, radar, combat vehicles, and indigenous defence technologies.",
    "mandate": [],
    "powers": [
      "Sanctions indigenous defence science research projects and manages 50+ DRDO laboratories.",
      "Directs missile testing, radar design, electronic warfare, and aerospace technology programs.",
      "Advises the Armed Forces on indigenous weapon capabilities and technical feasibility."
    ],
    "limitations": [
      "Cannot compel the Armed Forces to buy equipment if it does not meet field trial standards.",
      "Cannot approve private defence export licenses without Ministry of External Affairs clearance."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Formed in 1958 by amalgamation of Technical Development Establishment",
      "superiorAuthority": "Defence Minister and Principal Scientific Adviser to the Government.",
      "removalOrDeElectionMethod": "Appointed on fixed term or extension by ACC; removable by Central Government order."
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
    "summary": "The elected cabinet minister responsible for national defence policy, armed forces readiness, military procurement budgets, and territorial security.",
    "mandate": [],
    "powers": [
      "Oversees defence strategy, border security deployments, and defence industry manufacturing.",
      "Approves major weapon acquisition contracts, defence budgets, and modernization schemes.",
      "Represents India’s defence posture in the Cabinet Committee on Security (CCS)."
    ],
    "limitations": [
      "Cannot take direct operational command of battlefield units (command is exercised by military commanders).",
      "Cannot declare war or sign peace treaties independently without Union Cabinet approval.",
      "Cannot procure equipment without adherence to defence acquisition procedures and financial rules."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Ministry of Defence (established 1947, evolved from Department of Defence 1776)",
      "superiorAuthority": "Prime Minister of India, Cabinet Committee on Security (CCS), and Parliament.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister, or loses office upon defeat of the government."
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
    "summary": "The junior minister who assists the Defence Minister with parliamentary questions, public welfare for veterans, defence public sector units, and routine department files.",
    "mandate": [],
    "powers": [
      "Answers parliamentary queries on defence matters and veteran welfare.",
      "Reviews operations of Defence PSUs (HAL, BEL, shipyards) and Ordnance factories.",
      "Carries out specific duties delegated in writing by the Defence Minister."
    ],
    "limitations": [
      "Cannot overturn decisions of the senior Cabinet Minister of Defence.",
      "Cannot attend Cabinet meetings unless specially invited for agenda items of their department."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers structural tier under Constitution",
      "superiorAuthority": "Union Cabinet Minister of Defence and the Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The senior IAS officer responsible for defence budget administration, civil-military coordination, weapon acquisitions, and policy bureaucracy in the Ministry of Defence.",
    "mandate": [],
    "powers": [
      "Manages the overall financial budget allocation of the Ministry of Defence.",
      "Oversees civil defence policy, defence land management, and international military diplomacy.",
      "Coordinates inter-service administrative matters with the Department of Military Affairs."
    ],
    "limitations": [
      "Has no operational military command over troops or tactical operations.",
      "Cannot reject defence procurements approved by the Defence Acquisition Council (DAC)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Established as Secretariat head under Government of India Acts",
      "superiorAuthority": "Defence Minister, Cabinet Secretary, and Prime Minister.",
      "removalOrDeElectionMethod": "Transferred or replaced by the Appointments Committee of the Cabinet (ACC)."
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
    "summary": "The Chief of Naval Staff (CNS) and Chief of Air Staff (CAS) who command maritime territorial waters and national airspace defence.",
    "mandate": [],
    "powers": [
      "Commands fleet operations, maritime patrol, submarine surveillance, and aircraft carrier strike groups.",
      "Directs fighter squadrons, air defence radar grids, strategic airlift, and airspace sovereignty protection.",
      "Determines tactical operational plans for naval and aerial combat."
    ],
    "limitations": [
      "Cannot procure naval warships or combat aircraft independently without Defence Acquisition Council approval.",
      "Subject to civilian constitutional authority; no independent political role."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Defence Minister, Chief of Defence Staff, and Prime Minister.",
      "removalOrDeElectionMethod": "Appointed by ACC; can be removed or retired early by order of the Central Government."
    }
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
    "summary": "The Directors General (DGs) of federal paramilitary forces (CRPF, BSF, CISF, ITBP, SSB, NSG) who command border security, critical infrastructure protection, and anti-insurgency operations.",
    "mandate": [],
    "powers": [
      "Commands tactical border guarding operations against infiltration (BSF on Pak/Bangladesh, ITBP on China, SSB on Nepal/Bhutan).",
      "Deploys CRPF battalions for anti-Naxalite combat, riot control, and national election security.",
      "Secures national airports, nuclear installations, and metro systems (CISF)."
    ],
    "limitations": [
      "Cannot establish local police stations or register routine FIRs for local street crimes.",
      "Must coordinate deployments with state DGP and district magistrates when operating in states."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Union Home Secretary and Union Home Minister.",
      "removalOrDeElectionMethod": "Appointed by ACC from senior IPS cadre; removable or transferable by Central Government order."
    }
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
    "summary": "The senior cabinet minister responsible for national internal security, border management, intelligence agencies, police modernization, and central armed forces.",
    "mandate": [],
    "powers": [
      "Directs internal security strategy, disaster response, and federal counter-terrorism operations.",
      "Controls Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB, NSG) and the Intelligence Bureau.",
      "Oversees Union Territory administration and federal anti-terror investigations under the NIA."
    ],
    "limitations": [
      "Cannot interfere with regular state police investigations unless the state grants consent or under federal anti-terror statutes.",
      "Cannot dismiss a state government or impose President’s Rule without Cabinet approval and judicial review.",
      "Cannot authorize illegal wiretaps or warrantless detentions violating fundamental rights."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Home Department established 1843",
      "superiorAuthority": "Prime Minister of India and Cabinet Committee on Security (CCS).",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting the Home Minister with border fencing, immigration, civil defence, police modernisation, and replies in Parliament.",
    "mandate": [],
    "powers": [
      "Supervises specific home divisions assigned by the Home Minister.",
      "Answers parliamentary queries regarding crime statistics, border infrastructure, and disaster relief funds."
    ],
    "limitations": [
      "Cannot sign major national security orders without the Home Minister’s approval.",
      "Cannot attend Cabinet meetings without special invitation."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Constitutional Council of Ministers framework",
      "superiorAuthority": "Union Home Minister and the Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The senior IAS officer managing civil administration of the Ministry of Home Affairs, internal security intelligence briefings, and federal-state law and order coordination.",
    "mandate": [],
    "powers": [
      "Issues statutory interception authorizations and federal security alerts.",
      "Coordinates the deployment of central armed police to assist states during elections or major riots.",
      "Serves as the key administrative link during national security crises and disaster relief."
    ],
    "limitations": [
      "Has no power to take political decisions on state boundaries or constitutional revisions.",
      "Actions are subject to judicial scrutiny regarding privacy and civil liberties."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Chief bureaucratic officer of Home Department since colonial era",
      "superiorAuthority": "Union Home Minister and the Cabinet Secretary.",
      "removalOrDeElectionMethod": "Appointed for a fixed tenure of 2 years by ACC; can be transferred or replaced by order of the Central Government."
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
    "summary": "The senior security coordinator who manages intelligence correlation between the Intelligence Bureau (IB), RAW, state special branches, and anti-terror agencies.",
    "mandate": [],
    "powers": [
      "Briefs the Home Minister and Prime Minister daily on domestic intelligence, terrorism, and border threats.",
      "Coordinates joint intelligence operations against hostile networks and illegal trafficking."
    ],
    "limitations": [
      "Does not have statutory police arrest powers (arrests are carried out by state police or NIA).",
      "Cannot use intelligence assets for partisan domestic political surveillance."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Oldest intelligence agency in the world (founded 1887 as Central Special Branch)",
      "superiorAuthority": "Union Home Secretary, Home Minister, and National Security Adviser (NSA).",
      "removalOrDeElectionMethod": "Transferred or replaced by the Appointments Committee of the Cabinet."
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
    "summary": "The top career diplomat (IFS) who heads the diplomatic corps, advises the Prime Minister on strategic relations, and manages international bilateral negotiations.",
    "mandate": [],
    "powers": [
      "Directs the administrative and operational work of Indian ambassadors and high commissioners abroad.",
      "Leads official diplomatic negotiations with foreign counterparts.",
      "Coordinates cross-border policy with the National Security Council and Defence Ministry."
    ],
    "limitations": [
      "Cannot commit the government to political promises without ministerial and cabinet approval.",
      "Executes political foreign policy directions without partisan bias."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Department of External Affairs established 1946 under interim government",
      "superiorAuthority": "External Affairs Minister and the Prime Minister.",
      "removalOrDeElectionMethod": "Appointed for a fixed tenure by ACC; can be transferred or retired by the Central Government."
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
    "summary": "The cabinet minister who leads India’s foreign policy, manages international relations, negotiates bilateral treaties, and protects Indian citizens living abroad.",
    "mandate": [],
    "powers": [
      "Conducts high-level diplomatic negotiations with foreign governments and international organizations.",
      "Directs India’s diplomatic missions and embassies in over 180 countries.",
      "Speaks for the Government of India on foreign affairs in the United Nations and global summits."
    ],
    "limitations": [
      "Cannot sign binding financial or defence treaties without Cabinet approval.",
      "Cannot declare war; works within the collective policy of the Cabinet Committee on Security."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Department of External Affairs established 1946 under interim government",
      "superiorAuthority": "Prime Minister of India and the Union Cabinet.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior foreign minister assisting with diaspora affairs, repatriation of stranded citizens, consular assistance, and regional bilateral delegations.",
    "mandate": [],
    "powers": [
      "Coordinates emergency evacuation and consular support for overseas Indian workers and students.",
      "Represents India at regional bilateral forums and cultural diplomacy summits."
    ],
    "limitations": [
      "Cannot alter core foreign policy doctrines established by the External Affairs Minister and Prime Minister.",
      "Cannot authorize treaty commitments independently."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers foreign affairs portfolio",
      "superiorAuthority": "External Affairs Minister and the Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The administrative head overseeing the nationwide Passport Seva network, issuance of passports to citizens, and processing of visas for foreign visitors.",
    "mandate": [],
    "powers": [
      "Oversees passport offices and Passport Seva Kendras across India.",
      "Sets standards for timely verification, biometric capture, and passport dispatch to applicants.",
      "Revokes or impounds passports of fleeing criminal offenders upon judicial orders."
    ],
    "limitations": [
      "Cannot arbitrarily refuse a passport to an eligible citizen without valid legal cause.",
      "Cannot alter visa fees or international reciprocity policies without ministerial sanction."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Indian Passports Act 1920 replaced by Passports Act 1967 following Menaka Gandhi ruling",
      "superiorAuthority": "Foreign Secretary and Ministry of External Affairs.",
      "removalOrDeElectionMethod": "Transferred or replaced by the Central Government."
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
    "summary": "Senior career diplomats managing geographical desks (East, West, Economic Relations) to build trade, strategic partnerships, and regional cooperation.",
    "mandate": [],
    "powers": [
      "Conducts bilateral trade, security, and diplomatic dialogues with specific groups of nations.",
      "Oversees embassy performance and diplomatic reporting in assigned world regions."
    ],
    "limitations": [
      "Cannot make commitments outside the established bilateral framework approved by the Foreign Secretary."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Evolved with expansion of India's global diplomatic footprint",
      "superiorAuthority": "Foreign Secretary and External Affairs Minister.",
      "removalOrDeElectionMethod": "Transferred or reassigned by the Central Government."
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
    "summary": "The statutory boards (CBDT for Income Tax, CBIC for GST & Customs) manned by Indian Revenue Service (IRS) officers to collect national taxes and prevent smuggling.",
    "mandate": [],
    "powers": [
      "Levies and collects income tax, corporate tax, customs duties, and goods and services tax (GST).",
      "Conducts tax audits, searches, and seizures in cases of suspected tax evasion and undeclared wealth.",
      "Administers digital tax filing platforms and issues taxpayer assessments."
    ],
    "limitations": [
      "Cannot collect taxes beyond what the law explicitly permits.",
      "Cannot harass citizens or conduct searches without reasonable evidence and supervisory authorization.",
      "Tax assessment orders can be challenged in Income Tax Appellate Tribunals and High Courts."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Revenue Secretary, Finance Minister, and Appellate Courts.",
      "removalOrDeElectionMethod": "Board members and commissioners are central civil servants subject to departmental disciplinary action and ACC transfer."
    }
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
    "summary": "The cabinet minister responsible for international trade agreements, export promotion, foreign direct investment (FDI), and intellectual property rights.",
    "mandate": [],
    "powers": [
      "Negotiates Free Trade Agreements (FTAs) and cross-border commerce treaties with other nations.",
      "Promotes industrial corridors, Start-up India incentives, and Ease of Doing Business reforms.",
      "Regulates import/export quotas, anti-dumping duties, and trade remedies."
    ],
    "limitations": [
      "Cannot impose import bans that violate international treaty commitments without Cabinet sanction.",
      "Cannot unilaterally waive environmental or labour standards for private companies."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Prime Minister of India and Union Cabinet.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
    }
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
    "summary": "The chief economic expert who advises the Finance Minister, evaluates macroeconomic trends, and authors the annual Economic Survey of India.",
    "mandate": [],
    "powers": [
      "Authors the Economic Survey analyzing inflation, GDP growth, employment, and fiscal health.",
      "Provides independent economic advice on trade tariffs, subsidies, and capital investment policies."
    ],
    "limitations": [
      "Strictly an advisory role; does not have administrative power to issue tax or budget orders.",
      "Cannot dictate market interest rates or private corporate investments."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Post created in 1956 under Department of Economic Affairs",
      "superiorAuthority": "Union Finance Minister.",
      "removalOrDeElectionMethod": "Appointed on contractual tenure by the Central Government; can be terminated or replaced by order of ACC."
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
    "summary": "The senior-most secretary in the Ministry of Finance who coordinates budget drafting, fiscal deficit targets, and public expenditure control across all central ministries.",
    "mandate": [],
    "powers": [
      "Manages the national budget formulation process and public expenditure limits.",
      "Controls releases of central funds to ministries and state development schemes.",
      "Signs one-rupee notes and currency policy notices as administrative head of finance."
    ],
    "limitations": [
      "Cannot increase government borrowing beyond the limits set by Parliament.",
      "Cannot divert funds earmarked by Parliament for one purpose to another without supplementary grants."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Finance Department secretary post created under Charter Act of 1833",
      "superiorAuthority": "Union Finance Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Transferred or replaced by the Appointments Committee of the Cabinet."
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
    "summary": "The senior cabinet minister who controls the nation’s purse, presents the annual Union Budget, oversees taxation (GST, Income Tax), and regulates financial markets.",
    "mandate": [],
    "powers": [
      "Presents the annual Union Budget and Finance Bill in the Lok Sabha.",
      "Sets national tax policies, customs duties, and central spending allocations.",
      "Heads the GST Council alongside State Finance Ministers to decide uniform goods and services tax rates."
    ],
    "limitations": [
      "Cannot spend tax funds or levy taxes without Parliamentary legislative authorization.",
      "Cannot dictate monetary interest rates independently (that is the statutory responsibility of the RBI MPC).",
      "Subject to GST Council federal consensus with state governments."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Finance Department created under Charter Act of 1833",
      "superiorAuthority": "Prime Minister of India, Union Cabinet, and Parliament.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting the Finance Minister with parliamentary replies, banking grievances, insurance schemes, and disinvestment files.",
    "mandate": [],
    "powers": [
      "Assists in explaining budget proposals and answering financial queries in Parliament.",
      "Supervises specific departments delegated by the Finance Minister."
    ],
    "limitations": [
      "Cannot modify budget tax proposals independently without Cabinet Minister approval."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers economic portfolio",
      "superiorAuthority": "Finance Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The senior administrative secretary heading tax administration, tax evasion investigations, and enforcement agencies (Enforcement Directorate, DRI).",
    "mandate": [],
    "powers": [
      "Supervises the Central Board of Direct Taxes (CBDT) and Central Board of Indirect Taxes & Customs (CBIC).",
      "Coordinates anti-money laundering and economic offence investigations through the Enforcement Directorate (ED).",
      "Proposes administrative tax reforms and anti-evasion measures."
    ],
    "limitations": [
      "Cannot alter tax rates without an Act of Parliament or GST Council notification.",
      "Cannot interfere with quasi-judicial tax assessments or appellate rulings."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Central Board of Revenue Act 1924",
      "superiorAuthority": "Finance Minister and Finance Secretary.",
      "removalOrDeElectionMethod": "Transferred by the Appointments Committee of the Cabinet."
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
    "summary": "Senior technical directors (Members for Infrastructure, Operations, Traction, and Finance) who manage engineering, safety, electricity, and accounts across all zones.",
    "mandate": [],
    "powers": [
      "Oversees track laying, signalling upgrades, locomotive manufacturing, and commercial ticket revenue.",
      "Directs General Managers (GMs) of all 17 railway zones on daily operational efficiency."
    ],
    "limitations": [
      "Cannot modify approved safety rules without the approval of the Commissioner of Railway Safety."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Functional membership established under Indian Railway Board constitution",
      "superiorAuthority": "Chairman & CEO of the Railway Board and Railway Minister.",
      "removalOrDeElectionMethod": "Transferred or replaced by the Central Government."
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
    "summary": "The professional chief executive of Indian Railways who heads the Railway Board and directs technical operations, safety protocols, and daily train movements nationwide.",
    "mandate": [],
    "powers": [
      "Directs the operations of 17 railway zones and all production units across India.",
      "Enforces railway safety standards, track renewal schedules, and accident prevention protocols.",
      "Manages allocation of locomotives, passenger coaches, and freight rakes to priority economic corridors."
    ],
    "limitations": [
      "Cannot bypass railway safety commissioner recommendations or statutory accident inquiry findings.",
      "Works within the financial limits approved by the Ministry of Finance and Parliament."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Formed under Railway Board Act 1905, restructured in 2020 with CEO post",
      "superiorAuthority": "Union Minister of Railways and Appointments Committee of the Cabinet.",
      "removalOrDeElectionMethod": "Appointed by ACC for fixed tenure; can be transferred, retired, or replaced by Central Government order."
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
    "summary": "The cabinet minister responsible for the world’s fourth-largest railway network: passenger safety, track modernization, freight corridors, and passenger fares.",
    "mandate": [],
    "powers": [
      "Sets long-term strategic plans for high-speed rail, track electrification, and train manufacturing.",
      "Approves new passenger train routes, railway stations, and budget allocations for safety works.",
      "Represents Indian Railways policy and performance in Parliament."
    ],
    "limitations": [
      "Cannot personally alter day-to-day train operational schedules or track signalling safety rules.",
      "Cannot award contracts without following transparent public procurement tenders."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Railway Board Act 1905",
      "superiorAuthority": "Prime Minister of India and Parliament.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting with passenger amenities, station cleanliness, grievance redressal, and dedicated freight corridors.",
    "mandate": [],
    "powers": [
      "Monitors passenger complaints, cleanliness drives, and station redevelopment projects.",
      "Answers routine railway queries and safety audit questions in Parliament."
    ],
    "limitations": [
      "Cannot overrule decisions taken by the Cabinet Minister of Railways."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers framework",
      "superiorAuthority": "Railway Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The cabinet minister responsible for national education policy, school literacy missions, university funding, central boards (CBSE), and premier institutes (IITs, IIMs).",
    "mandate": [],
    "powers": [
      "Guides implementation of the National Education Policy across schools and universities.",
      "Oversees central funding for central universities, AICTE, UGC, and national scholarships.",
      "Introduces education bills and regulatory reform frameworks in Parliament."
    ],
    "limitations": [
      "Education is on the Concurrent List; the Central Minister cannot compel state government schools without state cooperation.",
      "Cannot interfere with academic grading, research independence, or day-to-day university curricula."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Ministry of Human Resource Development (MHRD, 1985) renamed Ministry of Education in 2020",
      "superiorAuthority": "Prime Minister of India and Parliament.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting with primary school literacy, vocational training, digital classrooms, and mid-day meal implementation.",
    "mandate": [],
    "powers": [
      "Reviews PM POSHAN (mid-day meal) nutrition standards and digital education initiatives.",
      "Responds to parliamentary questions regarding school infrastructure and literacy rates."
    ],
    "limitations": [
      "Subordinate to the Cabinet Minister of Education; cannot sign major policy files independently."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers framework",
      "superiorAuthority": "Education Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The senior secretary managing universities, national entrance exams (NTA), higher education funding, and global university partnerships.",
    "mandate": [],
    "powers": [
      "Coordinates central university budgets, IITs, IIMs, and Indian Institutes of Science Education.",
      "Directs administrative policy for the University Grants Commission (UGC) and National Testing Agency (NTA).",
      "Promotes research grants, national ranking frameworks (NIRF), and scholarship disbursals."
    ],
    "limitations": [
      "Cannot override autonomous university academic senates on degree awards and curricula."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Department of Education reorganized into DHE and DoSEL",
      "superiorAuthority": "Education Minister and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred by order of the Appointments Committee of the Cabinet."
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
    "summary": "The senior administrative secretary directing school education, teacher training standards, CBSE curriculum frameworks, and national literacy missions.",
    "mandate": [],
    "powers": [
      "Administers central financial assistance to states for primary and secondary school education.",
      "Supervises national organizations including NCERT, CBSE, Kendriya Vidyalaya (KVS), and Navodaya Vidyalaya.",
      "Monitors student learning outcomes and school infrastructure improvements nationwide."
    ],
    "limitations": [
      "Cannot directly hire or dismiss state school teachers (state governments control state education cadres)."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Department of School Education established under Ministry of Education",
      "superiorAuthority": "Education Minister and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred by order of the Appointments Committee of the Cabinet."
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
    "summary": "The chief medical doctor and technical adviser to the government on all public health matters, epidemic protocols, and clinical standards.",
    "mandate": [],
    "powers": [
      "Advises the government on medical protocols, disease containment, quarantine, and treatment guidelines.",
      "Inspects central government hospitals and oversees national medical residency programs.",
      "Heads the technical committee evaluating safety of medical devices and pharmaceutical approvals."
    ],
    "limitations": [
      "Technical advisory authority; does not control administrative civil service appointments or state budget grants."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Established as Director General of Indian Medical Service in 1869",
      "superiorAuthority": "Health Secretary and Union Health Minister.",
      "removalOrDeElectionMethod": "Appointed from the Central Health Service; subject to government service rules and transfer."
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
    "summary": "The cabinet minister leading national healthcare policy, disease control, AIIMS hospital networks, public health insurance (Ayushman Bharat), and drug quality standards.",
    "mandate": [],
    "powers": [
      "Directs national epidemic control, vaccination campaigns, and public health missions.",
      "Oversees expansion of premier medical institutions (AIIMS) and medical education standards under NMC.",
      "Allocates central healthcare budgets to states for primary health centres and free medicines."
    ],
    "limitations": [
      "Public health and hospitals are primarily state subjects; the central minister cannot take over state hospital administration.",
      "Cannot overrule scientific expert bodies on medical drug approvals or clinical trials."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Ministry of Health created 1947",
      "superiorAuthority": "Prime Minister of India and Union Cabinet.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting with family welfare, rural medical outreach, emergency ambulance services, and national health mission monitoring.",
    "mandate": [],
    "powers": [
      "Inspects medical facilities and monitors healthcare scheme enrollments.",
      "Answers parliamentary inquiries on communicable diseases and hospital bed capacity."
    ],
    "limitations": [
      "Cannot take major healthcare policy decisions without the Cabinet Minister’s approval."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers health portfolio",
      "superiorAuthority": "Health Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "Autonomous leadership heading the National Health Authority (implementing cashless Ayushman Bharat insurance) and the National Medical Commission (regulating doctor licensing and medical colleges).",
    "mandate": [],
    "powers": [
      "Registers and regulates medical colleges and licenses all medical practitioners in India.",
      "Sets hospital package rates and manages hospital empanelment under Ayushman Bharat insurance.",
      "Conducts national NEET medical licensing and entrance standards."
    ],
    "limitations": [
      "Cannot deregister a medical college without following transparent due process and independent inspections."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "NMC replaced Medical Council of India (MCI) in 2020; NHA created 2018",
      "superiorAuthority": "Ministry of Health & Family Welfare and the Supreme Court of India.",
      "removalOrDeElectionMethod": "Appointed by Central Government; removable on grounds of proven misbehaviour or conflict of interest."
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
    "summary": "The senior administrative secretary responsible for public health budgeting, drug regulatory policy, medical education bureaucracy, and emergency disease response.",
    "mandate": [],
    "powers": [
      "Directs central healthcare expenditure and allocations under Ayushman Bharat (PM-JAY).",
      "Supervises the Central Drugs Standard Control Organisation (CDSCO) and Food Safety Authority (FSSAI).",
      "Coordinates emergency procurement of vaccines and life-saving medicines during health emergencies."
    ],
    "limitations": [
      "Cannot make medical clinical judgments; relies on expert technical advice from the DGHS."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Secretariat post under Department of Health",
      "superiorAuthority": "Health Minister and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred or replaced by the Appointments Committee of the Cabinet."
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
    "summary": "The cabinet minister responsible for farmers’ welfare, minimum support prices (MSP), agricultural subsidies, crop insurance, and irrigation missions.",
    "mandate": [],
    "powers": [
      "Announces Minimum Support Prices (MSP) for agricultural crops approved by the Cabinet.",
      "Oversees PM-KISAN direct cash transfers, subsidized fertilizer distribution, and crop insurance.",
      "Sets agricultural research priorities to boost crop yields and farmer incomes."
    ],
    "limitations": [
      "Agriculture is a state subject; the central minister cannot regulate local agriculture markets (APMCs) without state consent.",
      "Cannot force farmers to sell to specific private buyers."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Department of Revenue, Agriculture and Commerce established 1871",
      "superiorAuthority": "Prime Minister of India and Union Cabinet.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting with fertilizer distribution, farmer credit schemes, organic farming, and allied animal husbandry.",
    "mandate": [],
    "powers": [
      "Monitors distribution of agricultural seeds, micro-irrigation grants, and soil health cards.",
      "Answers parliamentary queries on crop losses, weather damage, and farmer welfare schemes."
    ],
    "limitations": [
      "Cannot approve major changes to farmer subsidy programs without the Cabinet Minister."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers framework",
      "superiorAuthority": "Agriculture Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The senior IAS officer managing central agricultural subsidies, PM-KISAN transfers, and national crop production monitoring.",
    "mandate": [],
    "powers": [
      "Releases financial funds under PM-KISAN, crop insurance, and farm equipment subsidies.",
      "Monitors rainfall patterns, reservoir levels, and national food grain production forecasts."
    ],
    "limitations": [
      "Cannot arbitrarily stop statutory farmer entitlements without legal justification."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Established as Secretariat department under GoI Business Rules",
      "superiorAuthority": "Agriculture Minister and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred by order of the Appointments Committee of the Cabinet."
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
    "summary": "The secretary and FCI head responsible for procuring food grains from farmers at MSP, maintaining national buffer food stocks, and supplying the Public Distribution System (ration shops).",
    "mandate": [],
    "powers": [
      "Oversees procurement of wheat and rice across the country through the Food Corporation of India (FCI).",
      "Maintains strategic national food grain reserves to prevent famines, price spikes, and shortages.",
      "Directs monthly food grain allocations to states for free/subsidized distribution to 80 crore citizens."
    ],
    "limitations": [
      "Cannot allow food grains to rot in open warehouses; bound by supreme court directives on food security.",
      "Cannot divert subsidized food grains earmarked for poor families into open commercial markets."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Food Corporation Act 1964 and Department of Food",
      "superiorAuthority": "Minister of Consumer Affairs, Food & Public Distribution, and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred or replaced by the Central Government."
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
    "summary": "The senior secretary managing rural employment guarantee (MGNREGA), rural roads (PMGSY), and rural housing schemes across villages nationwide.",
    "mandate": [],
    "powers": [
      "Releases thousands of crores in rural wage funds and material budgets under MGNREGA.",
      "Monitors all-weather road construction connecting unconnected rural habitations (PMGSY).",
      "Tracks pucca house construction for poor rural families under Pradhan Mantri Awas Yojana."
    ],
    "limitations": [
      "Cannot delay wage payments to rural workers beyond statutory timelines without liability for compensation."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Ministry of Rural Development created 1974",
      "superiorAuthority": "Minister of Rural Development and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred by order of the Appointments Committee of the Cabinet."
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
    "summary": "Cabinet ministers directing national highways (NHAI), renewable energy grids, electric power supply, environmental clearances, and urban transit systems.",
    "mandate": [],
    "powers": [
      "Approves national expressways, freight corridors, and economic transit corridors.",
      "Allocates power generation capacity, renewable solar targets, and national transmission grids.",
      "Sets environmental clearance frameworks and urban metro rail expansion schemes."
    ],
    "limitations": [
      "Cannot approve construction projects that violate ecological laws or coastal zone regulations.",
      "Land acquisition requires compliance with fair compensation and rehabilitation laws."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Infrastructure ministries created under Business Rules",
      "superiorAuthority": "Prime Minister of India and Cabinet Committee on Economic Affairs (CCEA).",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting with highway toll policies, green energy incentives, pollution monitoring, and urban municipal transit grants.",
    "mandate": [],
    "powers": [
      "Monitors highway construction progress and resolves localized highway contractor bottlenecks.",
      "Answers parliamentary queries on vehicular pollution, highway accidents, and power outages."
    ],
    "limitations": [
      "Cannot sign major infrastructure concession contracts independently."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers framework",
      "superiorAuthority": "Cabinet Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The top civil servant responsible for forest conservation, wildlife sanctuaries, national air quality standards, and environmental project clearances.",
    "mandate": [],
    "powers": [
      "Approves or rejects environmental, forest, and wildlife clearances for industrial and mining projects.",
      "Oversees National Parks, Project Tiger, and bio-diversity conservation programmes.",
      "Enforces anti-pollution standards through the Central Pollution Control Board (CPCB)."
    ],
    "limitations": [
      "Clearance decisions are subject to judicial challenge and cancellation by the National Green Tribunal (NGT) and Supreme Court."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Department of Environment created 1980, upgraded to full Ministry in 1985",
      "superiorAuthority": "Minister of Environment, Forest & Climate Change, and National Green Tribunal.",
      "removalOrDeElectionMethod": "Transferred by the Appointments Committee of the Cabinet."
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
    "summary": "The senior secretary and NHAI head overseeing highway building contracts, automated FASTag toll collection, road safety rules, and vehicular standards.",
    "mandate": [],
    "powers": [
      "Awards national highway construction contracts through transparent public-private partnerships (HAM/EPC).",
      "Controls toll policies and national road maintenance funds.",
      "Issues motor vehicle safety regulations and Bharat NCAP crash safety standards."
    ],
    "limitations": [
      "Cannot award contracts without technical qualification and vigilance verification.",
      "Highway land acquisition can be challenged in High Courts for inadequate compensation."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "NHAI operationalized under NHAI Act 1988",
      "superiorAuthority": "Minister of Road Transport & Highways and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred by the Appointments Committee of the Cabinet."
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
    "summary": "The administrative secretary managing national electricity grids, interstate power transmission, coal/gas supplies to thermal plants, and clean energy transition.",
    "mandate": [],
    "powers": [
      "Oversees the national power grid to ensure 24/7 grid frequency stability and prevent blackouts.",
      "Directs financial turnaround schemes for state electricity distribution companies (DISCOMs).",
      "Promotes renewable solar, wind, and pumped-hydro clean energy investments."
    ],
    "limitations": [
      "Electricity distribution to homes is managed by state governments; the central secretary cannot set retail household tariffs."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Electricity (Supply) Act 1948 replaced by Electricity Act 2003",
      "superiorAuthority": "Minister of Power and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred by the Appointments Committee of the Cabinet."
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
    "summary": "The senior legal official responsible for drafting all central bills, ordinances, and gazette notifications, and representing the Union of India in courts.",
    "mandate": [],
    "powers": [
      "Scrutinizes and drafts all legislative bills and presidential ordinances before presentation in Parliament.",
      "Engages the Attorney General and central government advocates to defend government policies in court."
    ],
    "limitations": [
      "Strictly an administrative and advisory legal body; cannot overturn judicial rulings of courts."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "First Law Member of Council appointed 1834 (Lord Macaulay)",
      "superiorAuthority": "Minister of Law & Justice and the Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred or replaced by the Central Government."
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
    "summary": "The apex scientific leaders heading India’s space exploration (ISRO satellite launches, Chandrayaan, Gaganyaan) and nuclear energy production (DAE atomic reactors).",
    "mandate": [],
    "powers": [
      "Directs space launch vehicles, satellite communications, earth observation, and planetary science missions.",
      "Manages nuclear power plants, atomic research reactors, and peaceful nuclear technology applications.",
      "Reports directly to the Prime Minister on frontier scientific capabilities."
    ],
    "limitations": [
      "Must adhere strictly to international non-proliferation safety standards and civilian oversight.",
      "Cannot commercialize strategic atomic minerals without central statutory clearance."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Atomic Energy Department created 1954; Space Department created 1972",
      "superiorAuthority": "Prime Minister of India (who holds direct portfolio of Space and Atomic Energy).",
      "removalOrDeElectionMethod": "Appointed by the ACC for a fixed term; removable by order of the Prime Minister."
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
    "summary": "The cabinet minister overseeing Digital India (UPI, Aadhaar), electronics manufacturing incentives, telecommunications, and government legal affairs.",
    "mandate": [],
    "powers": [
      "Promotes electronics chip manufacturing, mobile exports, and IT services growth.",
      "Sets cybersecurity rules, data protection policies, and digital public infrastructure standards.",
      "Directs legal drafting and law reform proposals across the central government."
    ],
    "limitations": [
      "Cannot block internet services or websites without following statutory review committees and due process.",
      "Cannot infringe on citizen data privacy rights protected by Supreme Court rulings."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Ministry of Law & Justice is the oldest ministry (Charter Act of 1833)",
      "superiorAuthority": "Prime Minister of India and Union Cabinet.",
      "removalOrDeElectionMethod": "Dismissed by the President on the advice of the Prime Minister."
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
    "summary": "Junior minister assisting with semiconductor missions, AI initiatives, telecom towers, and software export promotion.",
    "mandate": [],
    "powers": [
      "Assists in reviewing startup incubators, AI compute infrastructure, and digital literacy schemes.",
      "Answers parliamentary queries regarding cybercrime, mobile connectivity, and IT sector jobs."
    ],
    "limitations": [
      "Subordinate to the Cabinet Minister; cannot take independent policy or legal positions."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Council of Ministers framework",
      "superiorAuthority": "Cabinet Minister and Prime Minister.",
      "removalOrDeElectionMethod": "Removed by the President on the advice of the Prime Minister."
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
    "summary": "The senior secretary managing Digital India public platforms, semiconductor incentive packages, CERT-In cybersecurity alerts, and data privacy regulations.",
    "mandate": [],
    "powers": [
      "Allocates thousands of crores in Production-Linked Incentives (PLI) to electronics and chip manufacturers.",
      "Directs national cybersecurity defense through the Indian Computer Emergency Response Team (CERT-In).",
      "Oversees digital identity platforms (UIDAI/Aadhaar), DigiLocker, and national e-governance systems."
    ],
    "limitations": [
      "Cybersecurity and content blocking orders are subject to judicial review by High Courts."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
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
      "historicalOrigin": "Department of Electronics (1970) evolved into MeitY in 2016",
      "superiorAuthority": "Minister of Electronics & IT and Cabinet Secretary.",
      "removalOrDeElectionMethod": "Transferred by the Appointments Committee of the Cabinet."
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
    "summary": "The grassroots courts where citizens directly seek justice: Principal District & Sessions Judges hearing serious civil property suits, commercial claims, and criminal trials.",
    "mandate": [],
    "powers": [
      "Conducts full trials, hears witness evidence, and delivers judgments in civil and criminal cases.",
      "Can award legal sentences, including life imprisonment and capital punishment (subject to High Court confirmation).",
      "Grants bail, anticipatory bail, and issues search and arrest warrants to police."
    ],
    "limitations": [
      "Orders are subject to appeal, revision, and stay by the High Court.",
      "Death sentences cannot be executed without mandatory confirmation by the High Court."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "High Court of the State.",
      "removalOrDeElectionMethod": "Appointed and disciplined by the State Governor in consultation with the High Court Collegium."
    }
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
    "summary": "The highest judicial court in each State, headed by a Chief Justice, exercising supervisory and appellate control over all subordinate district courts.",
    "mandate": [],
    "powers": [
      "Issues constitutional writs to protect fundamental and legal rights within state territory.",
      "Hears civil and criminal appeals against judgments delivered by district and sessions courts.",
      "Supervises the administration, transfers, and discipline of all subordinate district judiciary officers."
    ],
    "limitations": [
      "Judgments can be appealed against and reversed by the Supreme Court of India.",
      "Territorial jurisdiction is restricted to their respective State or Union Territory."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Supreme Court of India and the Constitution of India.",
      "removalOrDeElectionMethod": "Removed by the President of India through parliamentary impeachment (two-thirds majority in both Houses)."
    }
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
    "summary": "The apex constitutional court of the Republic of India, headed by the Chief Justice of India (CJI) and 33 judges, acting as final arbiter of law and guardian of Fundamental Rights.",
    "mandate": [],
    "powers": [
      "Final judicial interpreter of the Constitution; can strike down any law passed by Parliament that violates the Constitution.",
      "Issues binding writs (Habeas Corpus, Mandamus, Quo Warranto) to protect citizens against government abuse of power.",
      "Decides legal disputes between the Central Government and States or between multiple states.",
      "Decisions are binding law on all courts, tribunals, and authorities throughout India."
    ],
    "limitations": [
      "Cannot make laws or create budget policies; acts only when legal disputes or petitions are brought before it.",
      "Cannot act as an executive administrator or take over day-to-day governance.",
      "Judges must adhere to judicial code of conduct and recuse themselves in cases of conflict of interest."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Chief Justice of India & Supreme Court Judges",
      "cadreOrService": "Apex Constitutional Judiciary",
      "electoralOrSelectionMethod": "Appointed by President based on Supreme Court Collegium recommendations",
      "tenure": "Up to age 65 years (removable only by Parliamentary impeachment under Art 124(4))",
      "geographicalJurisdiction": "Entire territory of the Republic of India",
      "reportingTo": "The Constitution of India",
      "superiorAuthority": "The Constitution of India; no higher judicial appeal exists in the country.",
      "removalOrDeElectionMethod": "A judge can be removed only by an order of the President passed after an address by each House of Parliament supported by a two-thirds majority on grounds of proven misbehaviour or incapacity."
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
    "summary": "The independent constitutional watchdog who audits all income and spending of the Central Government, State Governments, and public sector enterprises to prevent public waste and corruption.",
    "mandate": [],
    "powers": [
      "Audits all accounts of tax receipts, government expenditures, and loans at both union and state levels.",
      "Exposes financial irregularities, wasteful spending, and deviations from budget rules in official audit reports.",
      "Submits independent audit reports directly to Parliament (PAC) and State Legislatures."
    ],
    "limitations": [
      "Does not have police arrest or disciplinary powers; highlights financial wrongdoing for legislative and investigative action.",
      "Cannot prevent an expenditure before it occurs; performs post-spending audit."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Comptroller and Auditor General of India",
      "cadreOrService": "Constitutional Supreme Audit Authority",
      "electoralOrSelectionMethod": "Appointed by President of India by Warrant under hand and seal",
      "tenure": "6 years or up to age 65 (removable only like SC judge)",
      "geographicalJurisdiction": "Union and all States/UTs of India",
      "reportingTo": "President of India & Parliament (PAC)",
      "superiorAuthority": "The Constitution of India; independent of executive control.",
      "removalOrDeElectionMethod": "Can be removed only in the same manner and on the same grounds as a Judge of the Supreme Court (parliamentary impeachment)."
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
    "summary": "The apex anti-corruption watchdog (Central Vigilance Commission) and premier criminal investigation agency (Central Bureau of Investigation) investigating corruption, fraud, and interstate crimes.",
    "mandate": [],
    "powers": [
      "Investigates corruption, bribery, economic fraud, and serious federal crimes involving public servants and banks.",
      "Files charge sheets in specialized CBI courts to prosecute corrupt public officials and corporate offenders.",
      "Conducts interstate and international crime inquiries in coordination with Interpol."
    ],
    "limitations": [
      "Requires state government consent to investigate general offenses within a state (unless ordered by the High Court or Supreme Court).",
      "Cannot punish anyone directly; only a court of law can convict and sentence an accused."
    ],
    "sourceIds": [
      "SRC-V4-BUSINESS-RULES"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Superintended by the Central Vigilance Commission (CVC) for anti-corruption, and overseen by the judiciary for criminal trials.",
      "removalOrDeElectionMethod": "CVC and CBI Director have a statutory 2-year tenure fixed by law; removable only on recommendation of a high-powered committee (PM, CJI, Leader of Opposition)."
    }
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
    "summary": "The independent constitutional commission (Chief Election Commissioner & 2 Election Commissioners) that conducts free, fair, and transparent democratic elections across India.",
    "mandate": [],
    "powers": [
      "Controls and directs all elections to Parliament, State Legislative Assemblies, and the offices of President and Vice-President.",
      "Enforces the Model Code of Conduct (MCC) to prevent misuse of government power, money, and media during elections.",
      "Can transfer partisan police officers or bureaucrats during election periods.",
      "Registers political parties and allocates official election symbols."
    ],
    "limitations": [
      "Does not conduct local municipal or panchayat elections (those are conducted by separate State Election Commissions).",
      "Decisions on election disputes can be challenged in the High Court and Supreme Court via election petitions."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Chief Election Commissioner & Election Commissioners",
      "cadreOrService": "Independent Constitutional Commission",
      "electoralOrSelectionMethod": "Appointed by President based on statutory selection committee",
      "tenure": "6 years or up to age 65 (CEC removable only by impeachment like SC Judge)",
      "geographicalJurisdiction": "Entire territory of India",
      "reportingTo": "The Constitution of India",
      "superiorAuthority": "The Constitution of India and the Supreme Court of India.",
      "removalOrDeElectionMethod": "The Chief Election Commissioner can be removed only like a Supreme Court Judge (impeachment by two-thirds majority in Parliament)."
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
    "summary": "The state-level constitutional commission (e.g. MPSC, UPPSC, TNPSC) that recruits officers for State Civil Services, State Police, and administrative departments.",
    "mandate": [],
    "powers": [
      "Conducts state civil services examinations for Deputy Collectors, DSPs, Tehsildars, and state department heads.",
      "Conducts merit-based interviews and recommends candidates for appointment to the state government."
    ],
    "limitations": [
      "Cannot create government posts or dictate reservation policies (set by the State Legislature).",
      "State government makes the final appointment offer based on police and medical verification."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "The Constitution of India; protected against arbitrary dismissal by the State Chief Minister.",
      "removalOrDeElectionMethod": "Even though appointed by the State Governor, a member can be removed ONLY by the President of India following a Supreme Court inquiry."
    }
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
    "summary": "The independent constitutional commission that conducts national competitive examinations (Civil Services, NDA, CDS, CMS) and selects officers purely on merit without political favouritism.",
    "mandate": [],
    "powers": [
      "Conducts the Civil Services Examination (CSE) and other national recruitment tests for All-India and central services.",
      "Advises the government on disciplinary actions, promotions, and integrity cases against senior civil servants.",
      "Protects merit-based selection from political nepotism or interference."
    ],
    "limitations": [
      "Has no power to fix vacancies or salary scales (that is determined by central ministries).",
      "Advice on disciplinary matters is consultative, though the government must explain any disagreement to Parliament."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Chairman & Members, Union Public Service Commission",
      "cadreOrService": "Constitutional Merit Recruiting Body",
      "electoralOrSelectionMethod": "Appointed by President of India",
      "tenure": "6 years or up to age 65",
      "geographicalJurisdiction": "Pan-India All India & Central Services",
      "reportingTo": "President of India & Parliament",
      "superiorAuthority": "The Constitution of India and the President of India.",
      "removalOrDeElectionMethod": "A member can be removed by the President only on grounds of misbehaviour after an inquiry and report by the Supreme Court of India."
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
    "summary": "The elected chief executive and political leader of the State who heads the State Cabinet, directs state administration, and leads the majority in the Vidhan Sabha.",
    "mandate": [],
    "powers": [
      "Selects state cabinet ministers, allocates portfolios, and coordinates state development policies.",
      "Oversees state law and order, police administration, agriculture, public health, and local infrastructure.",
      "Chief spokesperson and decision-maker for the State Government in negotiations with the Centre."
    ],
    "limitations": [
      "Must maintain a majority in the State Legislative Assembly (Vidhan Sabha) to remain in power.",
      "Cannot enact laws on matters reserved exclusively for the Union Parliament (Union List).",
      "Executive decisions are subject to judicial review by the State High Court and Supreme Court."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Chief Minister of the State",
      "cadreOrService": "Elected Head of State Government (MLA/MLC)",
      "electoralOrSelectionMethod": "Appointed by Governor based on legislative majority in Vidhan Sabha",
      "tenure": "5 years (dependent on legislative confidence)",
      "geographicalJurisdiction": "Entire State territory",
      "reportingTo": "Governor of State & State Legislative Assembly (Vidhan Sabha)",
      "superiorAuthority": "The citizen voters of the State, the Vidhan Sabha majority, and the Constitution of India.",
      "removalOrDeElectionMethod": "Loses office if a No-Confidence Motion passes in the Vidhan Sabha, upon defeat in state assembly elections, or if disqualified by court on criminal conviction."
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
    "summary": "The senior-most civil servant in the State who heads the state administrative machinery, advises the Chief Minister, and commands all district collectors and departmental secretaries.",
    "mandate": [],
    "powers": [
      "Coordinates administration across all state departments (Home, Revenue, Health, PWD, Education).",
      "Heads the state civil services board governing transfers and postings of IAS, IPS, and state officers.",
      "Acts as the primary state liaison officer with the central government and leads disaster management."
    ],
    "limitations": [
      "Must execute political policies decided by the elected Chief Minister and State Cabinet.",
      "Has no legislative lawmaking authority."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Chief Secretary to the State Government",
      "cadreOrService": "Indian Administrative Service (IAS) — Apex State Rank",
      "electoralOrSelectionMethod": "Appointed by Chief Minister and State Cabinet",
      "tenure": "Standard senior secretarial tenure (normally 2 years)",
      "geographicalJurisdiction": "Entire State (e.g. State of Maharashtra)",
      "reportingTo": "Chief Minister & Governor of the State",
      "superiorAuthority": "Chief Minister of the State and the State Cabinet.",
      "removalOrDeElectionMethod": "Appointed by the Chief Minister from senior IAS officers; can be transferred or replaced at any time by order of the State Government."
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
    "summary": "The constitutional head of the State, appointed by the President, acting as the vital constitutional link between the Centre and the State and giving assent to state bills.",
    "mandate": [],
    "powers": [
      "Formally appoints the Chief Minister and Council of Ministers based on legislative majority.",
      "Appoints the State Advocate General, State Election Commissioner, and Vice-Chancellors of state universities.",
      "Gives assent to bills passed by the Vidhan Sabha, or reserves them for Presidential consideration.",
      "Can recommend President’s Rule in the state if constitutional machinery collapses."
    ],
    "limitations": [
      "In normal circumstances, must act on the binding aid and advice of the State Chief Minister and Cabinet.",
      "Cannot arbitrarily dismiss an elected state government that retains an active majority on the floor of the Vidhan Sabha."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Governor of the State",
      "cadreOrService": "Constitutional Executive Head of State",
      "electoralOrSelectionMethod": "Appointed by President of India under Presidential Warrant",
      "tenure": "5 years (subject to pleasure of the President)",
      "geographicalJurisdiction": "Territory of the State (e.g. Maharashtra)",
      "reportingTo": "President of India & Constitution of India",
      "superiorAuthority": "President of India and the Constitution of India.",
      "removalOrDeElectionMethod": "Holds office during the pleasure of the President of India; can be recalled or replaced at any time by the Central Government."
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
    "summary": "Directly elected representative chosen by local citizens in an assembly constituency to represent their area, enact state laws, vote on the state budget, and hold the government accountable.",
    "mandate": [],
    "powers": [
      "Votes on state legislation concerning police, health, agriculture, local roads, and municipal laws.",
      "Approves the annual state budget and questions state ministers during legislative debates.",
      "Votes in the election of the President of India and members of the Rajya Sabha."
    ],
    "limitations": [
      "Cannot independently order police arrests or award government contracts.",
      "Subject to anti-defection laws; cannot vote against the party whip without losing their seat."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Member of Legislative Assembly (MLA)",
      "cadreOrService": "Directly Elected State Legislator",
      "electoralOrSelectionMethod": "Direct universal adult franchise by First-Past-The-Post in Assembly constituencies",
      "tenure": "5 years (co-terminus with Vidhan Sabha unless dissolved earlier)",
      "geographicalJurisdiction": "State Assembly Constituency",
      "reportingTo": "Constituency Electors & Vidhan Sabha",
      "superiorAuthority": "Constituency citizen voters, the Vidhan Sabha Speaker, and party whip.",
      "removalOrDeElectionMethod": "Voted out by citizens during assembly elections (every 5 years); or disqualified by the Speaker for defection, criminal conviction (2+ years), or bankruptcy."
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
    "summary": "Member of the State Legislative Council (Vidhan Parishad — Upper House in states that have one) representing teachers, graduates, local bodies, and governor nominees.",
    "mandate": [],
    "powers": [
      "Reviews, debates, and suggests amendments to state bills passed by the Vidhan Sabha.",
      "Debates state policy matters and questions state ministers on governance performance."
    ],
    "limitations": [
      "Cannot vote on Money Bills or introduce no-confidence motions to overthrow the state government.",
      "Can only delay ordinary bills by up to 4 months; Vidhan Sabha can override the council."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Member of Legislative Council (MLC)",
      "cadreOrService": "State Upper House Representative",
      "electoralOrSelectionMethod": "Elected by MLAs (1/3), Local Authorities (1/3), Graduates (1/12), Teachers (1/12) + Governor Nominees (1/6)",
      "tenure": "6 years (staggered, 1/3rd retire every 2 years)",
      "geographicalJurisdiction": "State Upper House (Vidhan Parishad)",
      "reportingTo": "Electoral Bodies & Vidhan Parishad",
      "superiorAuthority": "Vidhan Parishad Chairman and their nominating electors.",
      "removalOrDeElectionMethod": "Term of 6 years (one-third retiring every 2 years); disqualified on defection, criminal conviction, or holding office of profit."
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
    "summary": "Senior police leadership managing specialized statewide police wings: Criminal Investigation (CID), Law & Order, Anti-Terrorism Squad (ATS), Intelligence, and Traffic.",
    "mandate": [],
    "powers": [
      "Commands statewide specialized operational wings and counter-terror operations.",
      "Directs inter-district criminal intelligence and high-profile organized crime investigations."
    ],
    "limitations": [
      "Reports to the DGP; cannot initiate statewide operations without the DGP’s knowledge and clearance."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Director General of Police (DGP).",
      "removalOrDeElectionMethod": "Transferred or reassigned by the State Government on recommendation of the Police Establishment Board."
    }
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
    "summary": "The Sub-Divisional Police Officer (SDPO / DSP / ACP) supervising 3 to 5 local police stations, directing serious criminal investigations, and mentoring frontline officers.",
    "mandate": [],
    "powers": [
      "Conducts direct on-site supervisory investigation of serious crimes (homicide, atrocities, dacoity).",
      "Oversees daily station diary reports and resolves public complaints against police misconduct.",
      "Commands frontline police contingents during local protests and festival security."
    ],
    "limitations": [
      "Cannot transfer officers between police stations (only the District SP has that authority)."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Superintendent of Police (SP).",
      "removalOrDeElectionMethod": "Transferred by State Government / DGP; disciplined under State Police Conduct Rules."
    }
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
    "summary": "The frontline police officer on the street who walks neighborhood beats, patrols public markets, controls traffic, responds to emergency calls, and directly assists citizens.",
    "mandate": [],
    "powers": [
      "Patrols neighborhoods, maintains night vigilance, and responds immediately to citizen emergency calls.",
      "Can detain fleeing suspects on reasonable suspicion of a cognizable crime to hand them over to the station.",
      "Assists in crowd control, traffic management, and guarding vital public installations."
    ],
    "limitations": [
      "Has no legal power to register an FIR or submit final charge sheets in court.",
      "Cannot interrogate suspects without presence of an investigating officer.",
      "Cannot demand money or harass peaceful citizens going about their lawful business."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Head Constable (HC), Sub-Inspector (SI), and SHO.",
      "removalOrDeElectionMethod": "Appointed and dismissed by the District Superintendent of Police (SP) under state police disciplinary rules."
    }
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
    "summary": "The Director General of Police (DGP) is the apex uniformed chief commanding all police forces, law enforcement personnel, and armed battalions across the entire state.",
    "mandate": [],
    "powers": [
      "Highest operational commander of the entire state police force (up to 2,00,000+ personnel).",
      "Formulates state anti-crime strategies, law and order deployments, and emergency riot control.",
      "Heads the Police Establishment Board deciding promotions, transfers, and disciplinary actions for police officers."
    ],
    "limitations": [
      "Cannot bypass statutory criminal procedure laws or human rights standards.",
      "Works under the administrative superintendence of the civilian State Home Department."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "State Home Minister, Chief Minister, and Additional Chief Secretary (Home).",
      "removalOrDeElectionMethod": "Selected from a panel empaneled by UPSC with a minimum 2-year tenure (Prakash Singh directive); removable early only on specific grounds of gross misconduct."
    }
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
    "summary": "Senior supervisory police officer who inspects district police setups, assists Range IGs, and oversees police training or specialized crime branches.",
    "mandate": [],
    "powers": [
      "Reviews crime detection rates, pending murder/robbery cases, and supervisory case diaries.",
      "Can initiate departmental disciplinary inquiries against errant subordinate officers."
    ],
    "limitations": [
      "Cannot overrule orders issued by the Range IG or DGP."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Inspector General of Police (IGP) and DGP.",
      "removalOrDeElectionMethod": "Transferred by the State Government."
    }
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
    "summary": "The experienced senior police officer who manages station general diaries, assists investigating officers, guards the station lockup, and leads beat squads.",
    "mandate": [],
    "powers": [
      "Maintains the daily station register, lockup register, and seized weapon/property custody.",
      "Conducts minor investigations (traffic offenses, non-cognizable reports) delegated by the SHO.",
      "Leads armed guard details, patrol squads, and prisoner escort teams."
    ],
    "limitations": [
      "Cannot lead serious felony murder investigations without specific supervisory authorization.",
      "Must follow orders of the Sub-Inspector and SHO."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Sub-Inspector (SI) and Station House Officer (SHO).",
      "removalOrDeElectionMethod": "Disciplined, demoted, or dismissed by the District SP."
    }
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
    "summary": "The Inspector General of Police (IGP) commanding a Police Range comprising 3 to 6 administrative districts, supervising District SPs on major crime and public order.",
    "mandate": [],
    "powers": [
      "Supervises crime control, communal harmony, and police discipline across several districts in their Range.",
      "Dispatches additional armed police reserves to districts facing major law-and-order emergencies.",
      "Conducts annual operational inspections of district police headquarters."
    ],
    "limitations": [
      "Does not handle routine day-to-day police station investigations (handled by District SP and SHOs)."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Additional Director General of Police (ADGP) and DGP.",
      "removalOrDeElectionMethod": "Transferred or disciplinary action initiated by State Government."
    }
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
    "summary": "The Station House Officer (Police Inspector / Senior Inspector) who commands the local police station, registers public complaints (FIRs), and directs local neighbourhood security.",
    "mandate": [],
    "powers": [
      "In-charge of the local Police Station; authorizes registration of First Information Reports (FIRs).",
      "Commands station sub-inspectors, head constables, and beat constables in anti-crime patrolling.",
      "Exercises statutory powers of criminal investigation, search, seizure, and arrest.",
      "Grants station-level bail in bailable offenses."
    ],
    "limitations": [
      "Cannot refuse to register an FIR for a cognizable crime reported by a citizen (mandatory under law).",
      "Cannot torture or coerce accused persons in custody; must produce arrested persons before a Magistrate within 24 hours.",
      "Cannot settle civil property disputes (police have no civil arbitration authority)."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Deputy Superintendent of Police (DSP) and District Superintendent of Police (SP).",
      "removalOrDeElectionMethod": "Can be suspended or transferred immediately by the District SP on misconduct, or dismissed following a departmental inquiry."
    }
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
    "summary": "The Sub-Inspector of Police (SI) is the primary investigating officer who visits crime scenes, questions witnesses, collects physical evidence, and files charge sheets in court.",
    "mandate": [],
    "powers": [
      "Visits crime scenes, draws panchnamas, collects forensic evidence, and records witness statements.",
      "Arrests criminal suspects and files final charge sheets or closure reports in Magistrate courts.",
      "Commands emergency police mobile patrol vans and beat outposts."
    ],
    "limitations": [
      "Must conduct investigations objectively without planting false evidence or taking bribes.",
      "Cannot detain any citizen without formal entry into the police general diary."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Station House Officer (SHO) and DSP.",
      "removalOrDeElectionMethod": "Suspended by the District SP; dismissed by the Range DIG following departmental trial."
    }
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
    "summary": "The Superintendent of Police (SP / SSP) is the chief of police in the district, responsible for the total safety, crime prevention, and police station management across the entire district.",
    "mandate": [],
    "powers": [
      "Commands all police stations, armed reserves, and traffic units in the district.",
      "Deploys police forces to prevent riots, investigate serious crimes, and maintain public order.",
      "Transfers and disciplines police inspectors, sub-inspectors, and constables within the district.",
      "Coordinates with the District Magistrate (DM) during curfews and public emergencies."
    ],
    "limitations": [
      "Cannot execute executive prohibitory curfew orders (Section 144) without District Magistrate concurrence (in non-commissionerate areas).",
      "Actions are subject to judicial scrutiny by the District Sessions Court and High Court."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Range DIG/IGP, DGP, and coordinated with District Magistrate (DM).",
      "removalOrDeElectionMethod": "Transferred or suspended by the State Government on grounds of administrative failure or misconduct."
    }
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
    "summary": "The civilian government department headed by the State Home Minister and Additional Chief Secretary (Home) that sets police policy, budget, and oversight.",
    "mandate": [],
    "powers": [
      "Allocates state police budgets, infrastructure grants, and modern weaponry procurement.",
      "Approves high-level police officer transfers (SP, DIG, IG, DGP) recommended by the Police Establishment Board.",
      "Directs state prosecution policies and issues statutory parole and remission orders."
    ],
    "limitations": [
      "Cannot direct police officers to register false cases or illegally interfere with ongoing criminal investigations.",
      "Decisions are subject to High Court judicial review and human rights commissions."
    ],
    "sourceIds": [
      "SRC-V4-POLICE-ACT",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "State Chief Minister, State Cabinet, and High Court.",
      "removalOrDeElectionMethod": "Civilian ministers change with government elections; bureaucrats are transferred by the State Government."
    }
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
    "summary": "The senior IAS officer heading a regional Revenue Division (grouping 4 to 6 districts) who hears revenue appeals and supervises District Collectors.",
    "mandate": [],
    "powers": [
      "Supervises the revenue, land reform, and development work of District Collectors in the division.",
      "Hears statutory revenue and land tenancy appeals against orders passed by District Collectors.",
      "Coordinates emergency regional disaster relief, canal water distribution, and drought mitigation."
    ],
    "limitations": [
      "Does not exercise routine day-to-day district law and order powers (handled directly by the DM and SP)."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "State Revenue Secretary, Chief Secretary, and Revenue Minister.",
      "removalOrDeElectionMethod": "Transferred or replaced by the State Government."
    }
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
    "summary": "The District Magistrate & Collector (DM / DC) is the supreme administrative head of the district, responsible for overall law and order, land records, disaster relief, and development schemes.",
    "mandate": [],
    "powers": [
      "Supreme Executive Magistrate of the district; can promulgate prohibitory orders and curfews to maintain peace.",
      "Chief Revenue Officer collecting land revenues, stamp duties, and managing government lands.",
      "District Election Officer conducting parliamentary and assembly elections in the district.",
      "Head of District Disaster Management Authority coordinating all emergency relief."
    ],
    "limitations": [
      "Cannot pass criminal conviction sentences (criminal trials belong strictly to Judicial Magistrates).",
      "Cannot acquire citizen land without adhering to statutory Land Acquisition compensation procedures.",
      "Decisions can be challenged in the High Court and before the Divisional Commissioner."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "District Magistrate & Collector",
      "cadreOrService": "Indian Administrative Service (IAS) — District Head",
      "electoralOrSelectionMethod": "Appointed by State Government from IAS cadre",
      "tenure": "Normally 2 to 3 years per district",
      "geographicalJurisdiction": "Entire Revenue District",
      "reportingTo": "Divisional Commissioner & State Chief Secretary",
      "superiorAuthority": "Divisional Commissioner, State Chief Secretary, and State Government.",
      "removalOrDeElectionMethod": "Transferred, placed on inquiry, or suspended by the State Government."
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
    "summary": "The Sub-Divisional Magistrate (SDM / Sub-Collector / Prant Officer) in charge of a sub-division (group of talukas), hearing land disputes and maintaining public peace.",
    "mandate": [],
    "powers": [
      "Exercises Executive Magistrate powers: handles preventive peace bonds, eviction of encroachers, and inquests.",
      "Supervises Tehsildars, land demarcation surveys, and certificate issuance (caste, income, domicile).",
      "Acts as Returning Officer for Assembly constituency elections."
    ],
    "limitations": [
      "Reports to and is bound by administrative orders of the District Magistrate (DM)."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "District Magistrate & Collector (DM/DC).",
      "removalOrDeElectionMethod": "Transferred by the State Government / Divisional Commissioner."
    }
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
    "summary": "The frontline village revenue official who personally maintains the village land register, records crop surveys, and documents land ownership changes for every farm.",
    "mandate": [],
    "powers": [
      "Maintains primary village land records (khasra, khatauni, 7/12 land extract).",
      "Conducts seasonal crop inspection surveys (Girdawari) to record what crops are cultivated on each farm.",
      "Issues preliminary village damage reports during floods, hailstorms, or pest attacks for compensation."
    ],
    "limitations": [
      "Cannot arbitrarily change land records or ownership names without an authorized mutation order from the Tehsildar.",
      "Cannot demand unauthorized fees or bribe payments from farmers for copies of public land records."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Revenue Inspector (Circle Officer), Tehsildar, and SDM.",
      "removalOrDeElectionMethod": "Appointed and dismissed by the District Collector following disciplinary inquiry."
    }
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
    "summary": "The chief revenue officer and executive magistrate of a Taluka / Tehsil who updates village land records, issues official certificates, and resolves local land boundary disputes.",
    "mandate": [],
    "powers": [
      "In-charge of the Taluka revenue office; certifies land mutation entries, partition, and land ownership records.",
      "Issues official caste certificates, income certificates, and farmer ownership documents (7/12 extract).",
      "Assesses crop drought damage and disburses government relief funds directly to affected farmers.",
      "Exercises executive magistracy powers for maintaining local law and order during protests."
    ],
    "limitations": [
      "Cannot alter land ownership records without giving due notice and hearing to all affected parties.",
      "Decisions can be appealed to the Sub-Divisional Magistrate (SDM) and Collector."
    ],
    "sourceIds": [
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Sub-Divisional Magistrate (SDM) and District Collector.",
      "removalOrDeElectionMethod": "Transferred by the Divisional Commissioner / District Collector; disciplined under state revenue service rules."
    }
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
    "summary": "Senior IAS officers who assist the Municipal Commissioner by heading specific functional portfolios: Mega Projects, Public Health & Civic Hospitals, Water & Sewage, or Education.",
    "mandate": [],
    "powers": [
      "Directs major city infrastructure execution (e.g. coastal roads, metro corridors, sewage treatment plants).",
      "Manages major civic teaching hospitals (e.g. KEM, Sion, Nair in Mumbai) and dispensaries.",
      "Supervises Assistant Municipal Commissioners across multiple municipal administrative wards."
    ],
    "limitations": [
      "Works under the administrative authority and delegated powers of the Municipal Commissioner."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Municipal Commissioner and State Government.",
      "removalOrDeElectionMethod": "Transferred by the State Urban Development Department."
    }
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
    "summary": "The elected political First Citizen of the city who presides over the Municipal Corporation council meetings, represents citizens’ aspirations, and leads civic debates.",
    "mandate": [],
    "powers": [
      "Presides over all meetings of the elected Municipal Corporation Council.",
      "Represents the city at official ceremonial, state, and international delegations.",
      "Directs council debates and forwards citizen resolutions to the Municipal Commissioner for implementation."
    ],
    "limitations": [
      "In most Indian cities (outside the Mayor-in-Council model), executive administrative powers lie with the IAS Commissioner, not the Mayor.",
      "Cannot personally award civic tenders or hire/fire municipal engineers."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "The collective Municipal Corporation Council and the Urban Local Voters.",
      "removalOrDeElectionMethod": "Elected by fellow Ward Corporators for a designated term (typically 2.5 or 5 years); removable by no-confidence vote of corporators or council dissolution."
    }
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
    "summary": "The senior IAS officer who serves as the Principal Executive Chief of the Municipal Corporation, managing the entire city budget, water supply, sewage, roads, and civic hospitals.",
    "mandate": [],
    "powers": [
      "Exercises supreme executive authority over all municipal departments, engineers, and civic personnel.",
      "Prepares and executes the multi-thousand crore municipal city budget.",
      "Awards city infrastructure contracts for bridges, roads, stormwater drains, and waste processing.",
      "Enforces building codes and orders demolition of dangerous or illegal unauthorized constructions."
    ],
    "limitations": [
      "Major city budget allocations and municipal taxes require voting approval from the elected Municipal Council / Standing Committee.",
      "Decisions on building regulations are subject to judicial review by the High Court."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "State Urban Development Department, State Chief Minister, and the Municipal General Body.",
      "removalOrDeElectionMethod": "Appointed and transferred by the State Government; can be recalled by the State or on a resolution passed by a 5/8th majority of the municipal council."
    }
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
    "summary": "The directly elected municipal councillor representing a local neighborhood ward who solves citizens’ daily issues: water pipes, street lights, garbage collection, and road repairs.",
    "mandate": [],
    "powers": [
      "Votes on municipal corporation resolutions, city budgets, and development plans.",
      "Utilizes municipal corporator funds to pave neighborhood roads, fix gutters, install streetlights, and maintain local parks.",
      "Holds ward officers accountable for drainage blockages, water cuts, and illegal dumping in the ward."
    ],
    "limitations": [
      "Cannot directly hire or dismiss municipal cleaning staff or engineers.",
      "Cannot approve unauthorized building construction or violate the city’s Development Plan (DP)."
    ],
    "sourceIds": [
      "SRC-V4-MMC-ACT",
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Ward neighborhood voters and the Municipal Corporation General Body.",
      "removalOrDeElectionMethod": "Elected every 5 years by local ward citizens; removable by the State Government/Court on grounds of disqualification or illegal encroachment."
    }
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
    "summary": "The Block Development Officer (BDO / TDO) who heads the intermediate Block / Taluka Panchayat Samiti, coordinating government welfare schemes across 50 to 100 villages.",
    "mandate": [],
    "powers": [
      "Sanctions and monitors rural welfare schemes: PM Awas rural homes, Swachh Bharat toilets, and farm ponds.",
      "Approves muster rolls and wage disbursements for village works undertaken under MGNREGA.",
      "Inspects village gram panchayat accounts and resolves local village governance grievances."
    ],
    "limitations": [
      "Cannot arbitrarily withhold development funds allocated to an elected Gram Panchayat without cause."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Chief Executive Officer (CEO), Zilla Parishad and District Collector.",
      "removalOrDeElectionMethod": "Transferred by the State Rural Development Department / CEO ZP."
    }
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
    "summary": "The official administrative secretary of the Gram Panchayat who keeps village financial accounts, registers births and deaths, and maintains panchayat meeting records.",
    "mandate": [],
    "powers": [
      "Maintains all official government registers, cash books, and bank accounts of the Gram Panchayat.",
      "Records official minutes and resolutions passed during Gram Sabha and Panchayat meetings.",
      "Issues official Birth, Death, and Marriage certificates for village residents."
    ],
    "limitations": [
      "Cannot approve spending without joint signature of the Sarpanch and approval of the Gram Sabha.",
      "Cannot refuse to register village births and deaths reported in accordance with law."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Block Development Officer (BDO) and Village Sarpanch.",
      "removalOrDeElectionMethod": "Disciplined, transferred, or dismissed by the Chief Executive Officer, Zilla Parishad."
    }
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
    "summary": "The directly elected village head (Sarpanch / Mukhiya) who leads the Gram Panchayat, manages village funds, builds village concrete roads, and ensures drinking water supply.",
    "mandate": [],
    "powers": [
      "Leads the Village Gram Panchayat and presides over mandatory public meetings of the Gram Sabha.",
      "Approves village development works: paving village lanes, street lighting, community halls, and drinking water tanks.",
      "Identifies eligible poor village families for government housing, ration cards, and social pensions.",
      "Jointly signs village development bank cheques along with the Gram Sevak."
    ],
    "limitations": [
      "Cannot spend public panchayat money without approval from the sovereign village assembly (Gram Sabha).",
      "Cannot discriminate against any caste or community in village welfare distribution.",
      "Cannot sell or privatize common village pasture or grazing land (Gaothan/Gauchar)."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "The Village Gram Sabha (all adult voters of the village), and supervised by the BDO and District Collector.",
      "removalOrDeElectionMethod": "Can be removed by a No-Confidence Motion passed by ward members and ratified by the Gram Sabha; or disqualified by the District Collector for corruption or having more than two children (under applicable state laws)."
    }
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
    "summary": "Elected village ward representative who represents local street/neighborhood families in the Gram Panchayat council.",
    "mandate": [],
    "powers": [
      "Voices neighborhood needs (drainage, water tap, street light) in Gram Panchayat meetings.",
      "Votes on Gram Panchayat budgets, contractor works, and welfare beneficiary selection."
    ],
    "limitations": [
      "Has no individual authority to award contracts or sign government cheques."
    ],
    "sourceIds": [
      "SRC-V4-CONST"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "Village Ward Voters and Gram Sabha.",
      "removalOrDeElectionMethod": "Elected every 5 years by ward voters; removable on disqualification by the District Collector."
    }
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
    "summary": "The senior IAS officer who heads the district rural administration (Zilla Parishad), managing rural schools, rural healthcare clinics, drinking water schemes, and poverty programs.",
    "mandate": [],
    "powers": [
      "Principal executive officer executing all rural development and infrastructure schemes across the district.",
      "Supervises Zilla Parishad engineers, rural primary school teachers, and primary health centre (PHC) doctors.",
      "Disburses central and state development funds to block panchayats and village gram panchayats."
    ],
    "limitations": [
      "Annual rural budget plans must be presented to and approved by the elected Zilla Parishad Council."
    ],
    "sourceIds": [
      "SRC-V4-CONST",
      "SRC-V4-AIS"
    ],
    "verificationStatus": "verified",
    "governanceDetails": {
      "superiorAuthority": "State Rural Development Department, Divisional Commissioner, and Zilla Parishad President.",
      "removalOrDeElectionMethod": "Transferred by the State Government."
    }
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
    "summary": "The ultimate sovereign owners of the Republic of India: every adult citizen holding the constitutional right to vote, elect governments, hold representatives accountable, and enjoy fundamental rights.",
    "mandate": [],
    "powers": [
      "Exercises Universal Adult Franchise to vote and elect Lok Sabha MPs, State MLAs, Ward Corporators, and Village Sarpanchs.",
      "Has the right to contest elections for public office upon fulfilling age and legal qualifications.",
      "Can file Right to Information (RTI) applications to inspect government files and demand public transparency.",
      "Can petition the High Courts and Supreme Court (under Article 32 & 226) to strike down illegal government actions."
    ],
    "limitations": [
      "Must uphold the Constitution, respect the national flag, and abide by laws enacted by Parliament.",
      "Cannot take the law into their own hands or engage in violence or hate crimes."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Citizen of the Republic of India",
      "cadreOrService": "Sovereign Electors & Rights-Holders",
      "electoralOrSelectionMethod": "Citizenship by birth, descent, registration, or naturalization (Citizenship Act 1955)",
      "tenure": "Lifelong",
      "geographicalJurisdiction": "Territory of India",
      "reportingTo": "Constitution of India (Self-Governing Sovereign People)",
      "superiorAuthority": "The Constitution of India; in a democracy, the Citizens collectively are the supreme sovereign source from which all government derives its power.",
      "removalOrDeElectionMethod": "Citizenship cannot be arbitrarily revoked; voting rights are only suspended upon legal imprisonment or judicial declaration of unsound mind."
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
    "summary": "The sovereign village assembly comprising EVERY adult registered voter in the village: the direct democracy forum that audits village funds, approves all works, and selects beneficiaries.",
    "mandate": [],
    "powers": [
      "Supreme direct democratic body of the village; approves the annual Gram Panchayat development plan and budget.",
      "Conducts mandatory Social Audits of all village works and public spending (including MGNREGA).",
      "Selects and verifies the official list of poor families eligible for free houses (PMAY), pensions, and ration cards.",
      "Has the power to approve or reject industrial acquisition of tribal land (under PESA Act)."
    ],
    "limitations": [
      "Resolutions must comply with the Constitution and applicable state panchayat statutes.",
      "Cannot violate fundamental rights or pass discriminatory resolutions against minority residents."
    ],
    "governanceDetails": {
      "constitutionalArticle": "",
      "positionName": "Sovereign Village Assembly (Gram Sabha)",
      "cadreOrService": "Direct Deliberative Assembly of Village Electors",
      "electoralOrSelectionMethod": "Universal inclusion of all registered village voters",
      "tenure": "Permanent Sovereign Village Body",
      "geographicalJurisdiction": "Revenue Village / Gram Panchayat boundary",
      "reportingTo": "Sovereign Village Electors",
      "superiorAuthority": "The collective assembly of all adult village citizens; its lawful resolutions are binding on the Sarpanch and Gram Panchayat.",
      "removalOrDeElectionMethod": "The Gram Sabha is a permanent sovereign democratic institution that can never be dissolved; only individual voters change upon migration or death."
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
    "id": "SRC-V4-CONST",
    "name": "Constitution of India",
    "officialUrl": "https://legislative.gov.in/constitution-of-india",
    "documentTitle": "Constitution of India (As Amended Up To Date)",
    "sectionCitation": "Articles 52-243ZG & Schedules 7, 10, 11, 12",
    "lastVerifiedDate": "2026-10-18",
    "sourcePriority": 1,
    "verificationStatus": "verified",
    "relatedNodeIds": [
      "DEM-PRESIDENT",
      "DEM-PM",
      "DEM-LS-SPEAKER",
      "DEM-GOVERNOR",
      "DEM-CM",
      "DEM-ECI",
      "DEM-CITIZENS",
      "DEM-MLA",
      "DEM-MLC"
    ]
  },
  {
    "id": "SRC-V4-POLICE-ACT",
    "name": "The Police Act, 1861 & State Police Acts",
    "officialUrl": "https://www.indiacode.nic.in/handle/123456789/2253",
    "documentTitle": "The Police Act, 1861 (Act No. 5 of 1861) & Corresponding State Police Acts",
    "sectionCitation": "Section 4, 7, 12, 23 & State Police Manuals",
    "lastVerifiedDate": "2026-10-18",
    "sourcePriority": 1,
    "verificationStatus": "verified",
    "relatedNodeIds": [
      "DEM-POL-DGP",
      "DEM-POL-ADG",
      "DEM-POL-IG",
      "DEM-POL-DIG",
      "DEM-POL-SP",
      "DEM-POL-SHO",
      "DEM-POL-CONSTABLE"
    ]
  },
  {
    "id": "SRC-V4-RPA",
    "name": "Representation of the People Acts (1950 & 1951)",
    "officialUrl": "https://eci.gov.in/electoral-laws/",
    "documentTitle": "Representation of the People Act, 1950 & 1951",
    "sectionCitation": "Act No. 43 of 1950 & Act No. 43 of 1951",
    "lastVerifiedDate": "2026-10-18",
    "sourcePriority": 1,
    "verificationStatus": "verified",
    "relatedNodeIds": [
      "DEM-CITIZENS",
      "DEM-ECI",
      "DEM-MP-LOK-SABHA",
      "DEM-MLA"
    ]
  },
  {
    "id": "SRC-V4-AIS",
    "name": "All India Services Act, 1951 & Cadre Rules",
    "officialUrl": "https://dopt.gov.in/all-india-services-ais",
    "documentTitle": "All India Services Act, 1951 (Act No. 61 of 1951)",
    "sectionCitation": "Section 3 & AIS (Cadre) Rules",
    "lastVerifiedDate": "2026-10-18",
    "sourcePriority": 1,
    "verificationStatus": "verified",
    "relatedNodeIds": [
      "DEM-DOPT-SEC",
      "DEM-UPSC",
      "DEM-CABINET-SEC",
      "DEM-CS-STATE",
      "DEM-DM-COLLECTOR",
      "DEM-POL-DGP"
    ]
  },
  {
    "id": "SRC-V4-BUSINESS-RULES",
    "name": "Government of India Allocation of Business Rules",
    "officialUrl": "https://cabsec.gov.in/allocationofbusinessrules/",
    "documentTitle": "Government of India (Allocation of Business) Rules, 1961",
    "sectionCitation": "Rules made under Article 77(3) of Constitution of India",
    "lastVerifiedDate": "2026-10-18",
    "sourcePriority": 1,
    "verificationStatus": "verified",
    "relatedNodeIds": [
      "DEM-PM",
      "DEM-CABINET-SEC",
      "DEM-MHA-MINISTER",
      "DEM-MOF-MINISTER",
      "DEM-MOLJ-MINISTER"
    ]
  },
  {
    "id": "SRC-V4-MMC-ACT",
    "name": "Mumbai Municipal Corporation Act, 1888 (MMC Act)",
    "officialUrl": "https://www.indiacode.nic.in",
    "documentTitle": "The Mumbai Municipal Corporation Act, 1888 (Bombay Act No. III of 1888)",
    "sectionCitation": "Section 4, 54, 64 & 68 (Executive Powers of the Commissioner)",
    "lastVerifiedDate": "2026-10-18",
    "sourcePriority": 1,
    "verificationStatus": "verified",
    "relatedNodeIds": [
      "DEM-MUNICIPAL-COMMISSIONER",
      "DEM-MAYOR-COUNCIL",
      "DEM-ADDL-MUNICIPAL-COMMISSIONER",
      "DEM-WARD-CORPORATOR"
    ]
  }
];
