export interface CoursePathwayItem {
  targetId: string;
  targetTitle: string;
  category: 'Postgraduate' | 'Cross-Discipline Combo' | 'Civil Services' | 'Police & Security' | 'Banking & Finance' | 'Central Ministries' | 'Defence & Military' | 'Railways' | 'State Administration' | 'Professional Charter';
  badgeColor: string;
  rationale: string;
  timeline: string;
  topOutcome: string;
}

export const COURSE_PATHWAYS_MAP: Record<string, CoursePathwayItem[]> = {
  // Engineering (B.Tech & its specializations)
  'DEG-BTECH': [
    {
      targetId: 'PG-MBA',
      targetTitle: 'IIM MBA / PGDM in Management',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'Engineers take CAT/GMAT for 2-Year IIM MBA for Product Management & Executive leadership',
      timeline: '2 Years (CAT in Nov -> July Enrolment)',
      topOutcome: 'Product Head, Strategy Consultant (McKinsey/BCG), CXO'
    },
    {
      targetId: 'DEG-LAW-3YR',
      targetTitle: '3-Year LL.B. (Technology Patent & Cyber Law)',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'Combines technical STEM degree with legal qualification for patent drafting, IP litigation & AI regulations',
      timeline: '3 Years (CUET-PG / NLSAT)',
      topOutcome: 'Patent Attorney, IP Litigation Partner, AI Regulatory Counsel'
    },
    {
      targetId: 'COMBO-BTECH-CFA',
      targetTitle: 'B.Tech + CFA Charter (Quant Finance)',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      rationale: 'Engineers combine software/math with CFA charter for Algorithmic Trading & FinTech models',
      timeline: '2.5–3 Years (Concurrent with work/studies)',
      topOutcome: 'Quantitative Hedge Fund Trader, FinTech Architect'
    },
    {
      targetId: 'PG-MTECH',
      targetTitle: 'M.Tech / M.E. via GATE Exam',
      category: 'Postgraduate',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      rationale: 'Advanced engineering specialization in IITs/IISc with MHRD monthly stipend (₹12,400/mo)',
      timeline: '2 Years (GATE exam in Feb)',
      topOutcome: 'Senior R&D Scientist at ISRO/DRDO, Semiconductor Architect'
    },
    {
      targetId: 'GATE-UPSC-IAS',
      targetTitle: 'Indian Administrative Service (IAS)',
      category: 'Civil Services',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'Engineers take UPSC Civil Services for district governance, infrastructure development & union ministries',
      timeline: '1-Year Exam Cycle -> 2 Yrs LBSNAA Training',
      topOutcome: 'District Magistrate -> Ministry Secretary -> Cabinet Secretary of India'
    },
    {
      targetId: 'GATE-UPSC-IPS-POLICE',
      targetTitle: 'Indian Police Service (IPS) & CAPF',
      category: 'Police & Security',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
      rationale: 'Engineers spearhead Cybercrime units, Digital Forensics, Intelligence (IB/RAW) & Armed Police command',
      timeline: '1-Year Exam Cycle -> 2 Yrs SVPNPA Training',
      topOutcome: 'Superintendent of Police (SP) -> State DGP, Director IB, Director CBI'
    },
    {
      targetId: 'GATE-TAX-IRS-INCOME-GST',
      targetTitle: 'IRS (Income Tax & Customs / GST)',
      category: 'Banking & Finance',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      rationale: 'Engineers lead AI data analytics for tax evasion detection and cross-border customs surveillance',
      timeline: '1-Year Exam Cycle -> NADT Nagpur Training',
      topOutcome: 'Commissioner of Income Tax -> Member/Chairman CBDT & CBIC'
    },
    {
      targetId: 'GATE-BANK-REGULATORS',
      targetTitle: 'RBI Grade B & SEBI Information Technology',
      category: 'Banking & Finance',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      rationale: 'Engineers join RBI & SEBI for Fintech oversight, Core Banking Security & Algorithmic market regulation',
      timeline: 'Annual Recruitment (Phase 1, Phase 2, Interview)',
      topOutcome: 'Manager -> Chief General Manager -> Executive Director -> Deputy Governor'
    },
    {
      targetId: 'GATE-BANK-COMMERCIAL',
      targetTitle: 'Bank PO & Specialist IT Officer (SBI / IBPS)',
      category: 'Banking & Finance',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      rationale: 'Engineers enter as Scale-I Probationary Officers and IT Specialist Officers across nationalized banks',
      timeline: '6–8 Months Cycle',
      topOutcome: 'Branch Manager -> AGM -> CGM -> MD & CEO of Nationalized Banks'
    },
    {
      targetId: 'GATE-GOV-SSC-CGL',
      targetTitle: 'SSC CGL: Central Ministries, CBI & ED',
      category: 'Central Ministries',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'Engineers recruit as Assistant Section Officers in MEA/CSS, CBI Sub-Inspectors & Enforcement Officers',
      timeline: 'Tier 1 CBT -> Tier 2 Comprehensive Exam',
      topOutcome: 'Central Secretariat Director, CBI Superintendent of Police, ED Director'
    },
    {
      targetId: 'GATE-GOV-DEFENCE',
      targetTitle: 'CDS & AFCAT: Commissioned Military Officers',
      category: 'Defence & Military',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'Engineers enter Technical & Flying Branches of Army, Navy & Air Force with immediate officer rank',
      timeline: 'UPSC Written -> 5-Day SSB -> 1.5 Yrs Academy',
      topOutcome: 'Lieutenant to General & Chief of Defence Staff (CDS)'
    },
    {
      targetId: 'GATE-RAILWAYS-IRMS',
      targetTitle: 'Indian Railways Management Service (IRMS)',
      category: 'Railways',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      rationale: 'Engineers lead Railway divisions, train operations, signalling networks and high-speed rail corridors',
      timeline: 'UPSC Examination -> NAIR Vadodara Training',
      topOutcome: 'Divisional Railway Manager (DRM) -> General Manager -> Chairman & CEO Railway Board'
    },
    {
      targetId: 'GATE-STATE-PSC',
      targetTitle: 'State Civil Services (MPSC / UPPSC / BPSC)',
      category: 'State Administration',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
      rationale: 'Engineers qualify for Deputy Collector, DySP, and State Public Works / Irrigation executive cadres',
      timeline: 'State Prelims -> State Mains -> Interview',
      topOutcome: 'Deputy Collector / DySP -> Inducted into IAS/IPS after 10–14 years'
    }
  ],

  // Medicine & Surgery (MBBS)
  'DEG-MBBS': [
    {
      targetId: 'PG-MD-MEDICINE',
      targetTitle: 'MD Specialist Clinical Residency (3 Years)',
      category: 'Postgraduate',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      rationale: 'Doctors enter 3-year clinical residency in Cardiology, Pediatrics, Radiology, Dermatology via NEET-PG / INI-CET',
      timeline: '3 Years (NEP / NExT 2)',
      topOutcome: 'Consultant Specialist Physician; prerequisite for DM Super-Specialty'
    },
    {
      targetId: 'PG-MS-SURGERY',
      targetTitle: 'MS Surgical Residency (3 Years)',
      category: 'Postgraduate',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      rationale: 'Doctors enter 3-year surgical residency in General Surgery, Orthopedics, Neurosurgery, OB-GYN',
      timeline: '3 Years (NEET-PG / INI-CET)',
      topOutcome: 'Consultant Specialist Surgeon; prerequisite for M.Ch Super-Specialty'
    },
    {
      targetId: 'PG-MBA',
      targetTitle: 'IIM MBA in Healthcare & Hospital Administration',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'Doctors pursue MBA for Hospital Administration, MedTech Ventures & Pharma Leadership',
      timeline: '2 Years (CAT/GMAT)',
      topOutcome: 'Hospital CEO, Healthcare VC Partner, HealthTech Founder'
    },
    {
      targetId: 'GATE-UPSC-IAS',
      targetTitle: 'Indian Administrative Service (IAS: Health Policy)',
      category: 'Civil Services',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'Doctors clear UPSC CSE for District Administration and formulation of National Health Missions',
      timeline: '1-Year Exam Cycle -> 2 Yrs LBSNAA Training',
      topOutcome: 'District Collector -> Union Health Secretary -> Cabinet Secretary'
    },
    {
      targetId: 'GATE-GOV-DEFENCE',
      targetTitle: 'Armed Forces Medical Services (AFMS)',
      category: 'Defence & Military',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
      rationale: 'Doctors commissioned directly as Captain (Army) / Surgeon Lieutenant (Navy) / Flight Lieutenant (Air Force)',
      timeline: 'AFMS Interview & Medical Board',
      topOutcome: 'Command Hospital Commandant -> Director General Armed Forces Medical Services (DGAFMS)'
    },
    {
      targetId: 'GATE-UPSC-IPS-POLICE',
      targetTitle: 'IPS (Forensics, Police Hospitals & Medico-Legal)',
      category: 'Police & Security',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      rationale: 'Doctors enter IPS specializing in homicide investigations, forensic toxicology and central police hospitals',
      timeline: '1-Year UPSC Cycle',
      topOutcome: 'Superintendent of Police -> State DGP, Director CBI'
    },
    {
      targetId: 'GATE-STATE-PSC',
      targetTitle: 'State Civil & Health Services',
      category: 'State Administration',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
      rationale: 'Doctors appointed as Chief Medical Officers (CMO) or Provincial Administrative Officers',
      timeline: 'State PSC Exam Cycle',
      topOutcome: 'District Chief Medical Officer -> State Health Director'
    }
  ],

  // Commerce & Management (B.Com / BBA)
  'DEG-BCOM-BBA': [
    {
      targetId: 'PG-MBA',
      targetTitle: 'IIM MBA / PGDM in Finance & Strategy',
      category: 'Postgraduate',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'Commerce graduates take CAT for Tier-1 IIM MBA for Investment Banking & Private Equity',
      timeline: '2 Years (CAT in Nov)',
      topOutcome: 'Investment Banking VP, Corporate Strategy Director, Management Consultant'
    },
    {
      targetId: 'PROF-CA',
      targetTitle: 'Chartered Accountant (ICAI CA Final)',
      category: 'Professional Charter',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'Pursued concurrently with B.Com; statutory authority to audit companies under Companies Act 2013',
      timeline: '3–4 Years (Intermediate + 2-Yr Articleship + Final)',
      topOutcome: 'Statutory Audit Partner, Corporate CFO, Forensic Auditor'
    },
    {
      targetId: 'PROF-CFA',
      targetTitle: 'Chartered Financial Analyst (CFA Institute USA)',
      category: 'Professional Charter',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      rationale: 'Global gold standard for Portfolio Management, Equity Research and Mutual Fund management',
      timeline: '2.5–3 Years (Levels I, II, III)',
      topOutcome: 'Mutual Fund Portfolio Manager, Equity Research Head'
    },
    {
      targetId: 'DEG-LAW-3YR',
      targetTitle: '3-Year LL.B. (Corporate, M&A & Tax Law)',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      rationale: 'B.Com + LL.B. is the premier qualification for Mergers & Acquisitions, NCLT insolvency & corporate litigation',
      timeline: '3 Years (CUET-PG / NLSAT)',
      topOutcome: 'Corporate Law Partner (AZB/CAM), NCLT Insolvency Litigator'
    },
    {
      targetId: 'PROF-ACTUARIAL',
      targetTitle: 'Actuarial Science (IAI / IFoA)',
      category: 'Professional Charter',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'Quantitative mathematical modeling of insurance risk, solvency reserves and pension liabilities',
      timeline: '4–6 Years (13 Professional Papers)',
      topOutcome: 'Appointed Actuary, Chief Risk Officer (CRO) (₹40–80+ LPA)'
    },
    {
      targetId: 'GATE-BANK-REGULATORS',
      targetTitle: 'RBI Grade B & SEBI Grade A Officer',
      category: 'Banking & Finance',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      rationale: 'Commerce & finance background feeds directly into RBI monetary policy and SEBI capital market regulation',
      timeline: 'Annual Recruitment Cycle',
      topOutcome: 'Manager -> CGM -> Executive Director -> Deputy Governor of RBI'
    },
    {
      targetId: 'GATE-BANK-COMMERCIAL',
      targetTitle: 'SBI PO & IBPS Bank Management Cadre',
      category: 'Banking & Finance',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      rationale: 'Graduates enter public sector commercial banking as Scale-I Assistant Managers',
      timeline: '6–8 Months Cycle',
      topOutcome: 'Branch Manager -> DGM -> CGM -> MD & CEO of Nationalized Banks'
    },
    {
      targetId: 'GATE-TAX-IRS-INCOME-GST',
      targetTitle: 'IRS (Income Tax & GST Inspection)',
      category: 'Banking & Finance',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      rationale: 'Commerce students excel in statutory tax law, balance sheet investigations and transfer pricing audits',
      timeline: 'UPSC CSE (Group A) or SSC CGL (Group B)',
      topOutcome: 'Income Tax Commissioner -> Chairman CBDT / CBIC'
    },
    {
      targetId: 'GATE-GOV-SSC-CGL',
      targetTitle: 'SSC CGL: Assistant Audit Officer (CAG) & Tax',
      category: 'Central Ministries',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'Only gazetted Group B post in SSC CGL: Assistant Audit Officer in CAG of India & Tax Inspectors',
      timeline: 'Tier 1 CBT -> Tier 2 Comprehensive Exam',
      topOutcome: 'Senior Audit Officer (CAG), Income Tax Inspector, Enforcement Officer'
    },
    {
      targetId: 'GATE-UPSC-IAS',
      targetTitle: 'Indian Administrative Service (IAS: Finance & Commerce)',
      category: 'Civil Services',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'Commerce graduates take UPSC CSE with Commerce & Accountancy optional for IAS administration',
      timeline: '1-Year Exam Cycle',
      topOutcome: 'District Magistrate -> Finance Ministry Secretary -> Cabinet Secretary'
    }
  ],

  // Humanities & Social Sciences (B.A.)
  'DEG-BA-HUMANITIES': [
    {
      targetId: 'DEG-LAW-3YR',
      targetTitle: '3-Year LL.B. (Constitutional & Public Interest Law)',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'Premier feeder into 3-Year LL.B. at DU Faculty of Law, GLC Mumbai and NLSIU for Supreme Court advocacy',
      timeline: '3 Years (CUET-PG / NLSAT)',
      topOutcome: 'Supreme Court Advocate on Record (AoR), Constitutional Jurist, High Court Judge'
    },
    {
      targetId: 'GATE-UPSC-IAS',
      targetTitle: 'Indian Administrative Service (IAS)',
      category: 'Civil Services',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'Humanities subjects (History, Pol Sci, Geography, Sociology) overlap 75% with UPSC General Studies syllabus',
      timeline: '1-Year Exam Cycle -> 2 Yrs LBSNAA Training',
      topOutcome: 'Sub-Divisional Magistrate -> District Collector -> Chief Secretary -> Cabinet Secretary'
    },
    {
      targetId: 'GATE-UPSC-IFS',
      targetTitle: 'Indian Foreign Service (IFS: Diplomacy & Envoys)',
      category: 'Civil Services',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      rationale: 'International Relations & Political Science graduates excel in foreign bilateral treaties and diplomacy',
      timeline: '1-Year UPSC Cycle -> SSIFS Training',
      topOutcome: 'Third Secretary -> Ambassador / High Commissioner -> Foreign Secretary of India'
    },
    {
      targetId: 'GATE-UPSC-IPS-POLICE',
      targetTitle: 'Indian Police Service (IPS) & CAPF',
      category: 'Police & Security',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
      rationale: 'Humanities graduates command district police administrations, intelligence wings and paramilitary commands',
      timeline: '1-Year UPSC Cycle -> SVPNPA Training',
      topOutcome: 'Superintendent of Police -> State DGP, Director IB, Director CBI'
    },
    {
      targetId: 'PG-MBA',
      targetTitle: 'IIM MBA (Academic Diversity Category)',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'Top IIMs grant up to 5% bonus diversity points to non-engineering humanities graduates',
      timeline: '2 Years (CAT/GMAT)',
      topOutcome: 'Chief Human Resources Officer (CHRO), Brand Strategy Director, ESG Lead'
    },
    {
      targetId: 'GATE-STATE-PSC',
      targetTitle: 'State Civil Services (Deputy Collector & DySP)',
      category: 'State Administration',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
      rationale: 'Humanities graduates clear State PSCs in English or State regional language for provincial administration',
      timeline: 'State PSC Annual Cycle',
      topOutcome: 'Deputy Collector / SDM -> Inducted into IAS/IPS after 10–14 years'
    },
    {
      targetId: 'GATE-BANK-REGULATORS',
      targetTitle: 'RBI Grade B General & Policy Cadre',
      category: 'Banking & Finance',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      rationale: 'Economics & humanities graduates clear RBI Grade B Phase 2 Economic & Social Issues paper with distinction',
      timeline: 'Annual Recruitment Cycle',
      topOutcome: 'Manager -> CGM -> Executive Director -> Deputy Governor'
    },
    {
      targetId: 'GATE-GOV-SSC-CGL',
      targetTitle: 'SSC CGL: Central Ministries (ASO in MEA/CSS)',
      category: 'Central Ministries',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      rationale: 'Graduates enter Central Secretariat Service and Ministry of External Affairs as Assistant Section Officers',
      timeline: 'Tier 1 CBT -> Tier 2 Comprehensive Exam',
      topOutcome: 'Section Officer -> Under Secretary -> Director in Central Ministries'
    },
    {
      targetId: 'GATE-GOV-DEFENCE',
      targetTitle: 'CDS & AFCAT Commissioned Officers',
      category: 'Defence & Military',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      rationale: 'Humanities graduates clear UPSC CDS for Indian Military Academy (IMA) and Officers Training Academy (OTA)',
      timeline: 'UPSC Written -> 5-Day SSB -> Academy',
      topOutcome: 'Lieutenant to General & Chief of Defence Staff (CDS)'
    }
  ],

  // Pure Sciences (B.Sc)
  'DEG-BSC-PURE': [
    {
      targetId: 'PG-MSC-PHD',
      targetTitle: 'M.Sc & Ph.D. Research (IIT JAM & CSIR-NET)',
      category: 'Postgraduate',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      rationale: 'Direct research career at IISc, IITs, TIFR and CSIR national laboratories with JRF monthly scholarship',
      timeline: '2 Yrs M.Sc + 3–5 Yrs Ph.D.',
      topOutcome: 'Principal Scientist at CSIR/BARC, Tenured University Professor'
    },
    {
      targetId: 'PG-MCA',
      targetTitle: '2-Year MCA (Master of Computer Applications)',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      rationale: 'B.Sc Mathematics/Statistics graduates take NIMCET for direct entry into 2-Year MCA in NITs',
      timeline: '2 Years (NIMCET in June)',
      topOutcome: 'Software Architect, Machine Learning Engineer, IT Manager'
    },
    {
      targetId: 'PG-MBA',
      targetTitle: 'IIM MBA in Business Analytics & Strategy',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'Science graduates combine experimental rigor with business analytics for biotech & pharma leadership',
      timeline: '2 Years (CAT/GMAT)',
      topOutcome: 'Business Intelligence Director, Pharma Commercialization Lead'
    },
    {
      targetId: 'GATE-UPSC-IAS',
      targetTitle: 'UPSC Civil Services (Science Optionals)',
      category: 'Civil Services',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'B.Sc graduates take Physics, Chemistry or Mathematics as optional subject with high objective scoring potential',
      timeline: '1-Year Exam Cycle',
      topOutcome: 'District Magistrate -> Ministry Secretary -> Cabinet Secretary'
    },
    {
      targetId: 'GATE-GOV-DEFENCE',
      targetTitle: 'CDS / AFCAT: Air Force & Navy Technical',
      category: 'Defence & Military',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
      rationale: 'B.Sc Physics & Maths is the mandatory eligibility criteria for Indian Air Force Flying Branch via CDS/AFCAT',
      timeline: 'Written -> 5-Day SSB -> Flight Medicals',
      topOutcome: 'Fighter Pilot, Wing Commander -> Air Chief Marshal'
    },
    {
      targetId: 'GATE-BANK-COMMERCIAL',
      targetTitle: 'SBI PO & IBPS Bank Management Cadre',
      category: 'Banking & Finance',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      rationale: 'Science graduates excel in high-speed quantitative aptitude and reasoning sections of Bank PO exams',
      timeline: '6–8 Months Cycle',
      topOutcome: 'Branch Manager -> Chief Manager -> MD & CEO of Nationalized Banks'
    }
  ],

  // Law (5-Year & 3-Year LL.B.)
  'DEG-LAW-5YR': [
    {
      targetId: 'LAW-JUDICIARY',
      targetTitle: 'State Judicial Services Examination (PCS-J)',
      category: 'State Administration',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'Law graduates take Judicial Services directly after degree for entry into the judicial magistracy',
      timeline: '1–2 Years (State High Court notification)',
      topOutcome: 'Civil Judge (Junior Division) -> Chief Judicial Magistrate -> District & Sessions Judge -> High Court Judge'
    },
    {
      targetId: 'LAW-AIBE',
      targetTitle: 'Bar Council of India: AIBE Licensure',
      category: 'Professional Charter',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'Mandatory statutory examination to receive Certificate of Practice (COP) for courtroom advocacy',
      timeline: 'Post graduation (100 Questions)',
      topOutcome: 'Licensed Courtroom Advocate across all Indian Courts'
    },
    {
      targetId: 'GATE-BANK-REGULATORS',
      targetTitle: 'SEBI Grade A Legal & RBI Legal Division',
      category: 'Banking & Finance',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      rationale: 'Specialist legal officers responsible for securities fraud prosecution, takeover code enforcement & banking compliance',
      timeline: 'Annual Legal Recruitment',
      topOutcome: 'Legal Officer -> Chief General Manager (Legal) -> Executive Director'
    },
    {
      targetId: 'GATE-BANK-COMMERCIAL',
      targetTitle: 'Law Specialist Officer (Scale-I/II in PSBs)',
      category: 'Banking & Finance',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      rationale: 'Appointed across public sector banks to handle loan recoveries, SARFAESI proceedings and NCLT filings',
      timeline: 'IBPS SO Annual Exam',
      topOutcome: 'Chief Legal Officer, General Manager (Law)'
    },
    {
      targetId: 'GATE-GOV-DEFENCE',
      targetTitle: 'Army Judge Advocate General (JAG Branch)',
      category: 'Defence & Military',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      rationale: 'Direct SSB interview (no written exam) for law graduates for military court martials and armed forces legal advice',
      timeline: 'Bi-annual SSB Recruitment',
      topOutcome: 'Captain to Major General & Judge Advocate General of the Indian Army'
    },
    {
      targetId: 'GATE-UPSC-IAS',
      targetTitle: 'UPSC Civil Services (Law Optional)',
      category: 'Civil Services',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      rationale: 'Law graduates have distinct advantage in Constitutional Law, Administrative Law and Governance papers',
      timeline: '1-Year Exam Cycle',
      topOutcome: 'District Magistrate -> Ministry of Law & Justice Secretary -> Cabinet Secretary'
    }
  ],

  // Computer Applications (BCA)
  'DEG-BCA': [
    {
      targetId: 'PG-MCA',
      targetTitle: '2-Year Master of Computer Applications (MCA)',
      category: 'Postgraduate',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      rationale: 'BCA graduates take NIMCET or State CETs for direct admission into top 2-Year MCA programs at NITs',
      timeline: '2 Years (NIMCET in June)',
      topOutcome: 'Senior Software Engineer, Cloud Solutions Architect, IT Manager'
    },
    {
      targetId: 'PG-MBA',
      targetTitle: 'Tech-MBA / Product Management MBA',
      category: 'Cross-Discipline Combo',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'BCA graduates combine coding background with business strategy for tech product management',
      timeline: '2 Years (CAT/XAT)',
      topOutcome: 'Technical Product Manager, IT Consulting Lead'
    },
    {
      targetId: 'GATE-BANK-COMMERCIAL',
      targetTitle: 'IBPS SO IT Specialist Officer & Bank PO',
      category: 'Banking & Finance',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      rationale: 'BCA graduates qualify for Scale-I IT Specialist Officers and general Probationary Officer exams',
      timeline: 'Annual Recruitment Cycle',
      topOutcome: 'Chief Information Security Officer (CISO), GM Technology'
    },
    {
      targetId: 'GATE-GOV-SSC-CGL',
      targetTitle: 'SSC CGL: Central Ministries & Cyber Intelligence',
      category: 'Central Ministries',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'BCA graduates recruit as Assistant Section Officers, CBI Cyber Forensics and Intelligence Bureau cadres',
      timeline: 'Tier 1 CBT -> Tier 2 Comprehensive Exam',
      topOutcome: 'Central Secretariat Director, CBI Cybercrime Investigator'
    }
  ],

  // Polytechnic Engineering Diploma
  'STRM-POLYTECHNIC': [
    {
      targetId: 'DEG-BTECH',
      targetTitle: 'Direct Lateral Entry to 2nd Year B.Tech',
      category: 'Postgraduate',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      rationale: 'AICTE statutory lateral entry grants admission directly into 3rd semester B.Tech bypassing 11th/12th/JEE',
      timeline: '3 Years B.Tech (Total 6 Yrs from 10th)',
      topOutcome: 'Full Graduate Degree in Engineering, eligibility for all graduate careers'
    },
    {
      targetId: 'GATE-GOV-SSC-CGL',
      targetTitle: 'SSC Junior Engineer (SSC JE: Civil / Mech / Elec)',
      category: 'Central Ministries',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      rationale: 'Diploma engineers recruit directly as Junior Engineers in CPWD, Military Engineer Services (MES) & BRO',
      timeline: 'Paper 1 CBT -> Paper 2 Written Technical',
      topOutcome: 'Junior Engineer -> Assistant Engineer -> Executive Engineer'
    },
    {
      targetId: 'GATE-RAILWAYS-IRMS',
      targetTitle: 'RRB Junior Engineer (RRB JE Technical)',
      category: 'Railways',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      rationale: 'Diploma engineers recruited by Railway Recruitment Boards for Track, Locomotive and Signalling engineering',
      timeline: 'CBT 1 -> CBT 2 Technical Exam',
      topOutcome: 'Junior Engineer -> Senior Section Engineer -> Assistant Divisional Engineer'
    },
    {
      targetId: 'GATE-GOV-DEFENCE',
      targetTitle: 'Air Force Airmen Technical & Navy Artificer Apprentice',
      category: 'Defence & Military',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      rationale: 'Technical diploma holders join Indian Air Force and Indian Navy in specialized technical trade cadres',
      timeline: 'Technical Trades Exam -> Medical Board',
      topOutcome: 'Junior Commissioned Officer (JCO) / Master Warrant Officer'
    }
  ]
};

// Aliases so specializations map to their parent degree pathways
COURSE_PATHWAYS_MAP['BTECH-CS-AI'] = COURSE_PATHWAYS_MAP['DEG-BTECH'];
COURSE_PATHWAYS_MAP['BTECH-ECE'] = COURSE_PATHWAYS_MAP['DEG-BTECH'];
COURSE_PATHWAYS_MAP['BTECH-MECH'] = COURSE_PATHWAYS_MAP['DEG-BTECH'];
COURSE_PATHWAYS_MAP['BTECH-CIVIL'] = COURSE_PATHWAYS_MAP['DEG-BTECH'];
COURSE_PATHWAYS_MAP['BTECH-EE'] = COURSE_PATHWAYS_MAP['DEG-BTECH'];

COURSE_PATHWAYS_MAP['BCOM-FINANCE'] = COURSE_PATHWAYS_MAP['DEG-BCOM-BBA'];
COURSE_PATHWAYS_MAP['BBA-MARKETING'] = COURSE_PATHWAYS_MAP['DEG-BCOM-BBA'];
COURSE_PATHWAYS_MAP['BBA-FINTECH'] = COURSE_PATHWAYS_MAP['DEG-BCOM-BBA'];
COURSE_PATHWAYS_MAP['BCOM-BANKING-INSURANCE'] = COURSE_PATHWAYS_MAP['DEG-BCOM-BBA'];

COURSE_PATHWAYS_MAP['BA-POL-POLICY'] = COURSE_PATHWAYS_MAP['DEG-BA-HUMANITIES'];
COURSE_PATHWAYS_MAP['BA-ECONOMICS'] = COURSE_PATHWAYS_MAP['DEG-BA-HUMANITIES'];
COURSE_PATHWAYS_MAP['BA-PSYCHOLOGY'] = COURSE_PATHWAYS_MAP['DEG-BA-HUMANITIES'];
COURSE_PATHWAYS_MAP['BA-JOURNALISM'] = COURSE_PATHWAYS_MAP['DEG-BA-HUMANITIES'];

COURSE_PATHWAYS_MAP['BSC-PHYSICS'] = COURSE_PATHWAYS_MAP['DEG-BSC-PURE'];
COURSE_PATHWAYS_MAP['BSC-CHEMISTRY'] = COURSE_PATHWAYS_MAP['DEG-BSC-PURE'];
COURSE_PATHWAYS_MAP['BSC-MATHS'] = COURSE_PATHWAYS_MAP['DEG-BSC-PURE'];

COURSE_PATHWAYS_MAP['DEG-LAW-3YR'] = COURSE_PATHWAYS_MAP['DEG-LAW-5YR'];
COURSE_PATHWAYS_MAP['LAW-CORP'] = COURSE_PATHWAYS_MAP['DEG-LAW-5YR'];
COURSE_PATHWAYS_MAP['LAW-LITIGATION'] = COURSE_PATHWAYS_MAP['DEG-LAW-5YR'];
COURSE_PATHWAYS_MAP['LAW-IPR-CYBER'] = COURSE_PATHWAYS_MAP['DEG-LAW-5YR'];
