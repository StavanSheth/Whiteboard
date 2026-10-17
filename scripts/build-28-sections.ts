import fs from 'fs';
import path from 'path';
import { SectionMeta, EducationNode, RelationshipEdgeData, SourceRecord, FunctionalCategory } from '../src/types';
import { SOURCES_V3 } from '../src/data/whiteboard2-institutions';

export const SECTIONS_28: SectionMeta[] = [
  {
    id: 'SEC-01',
    number: '01',
    title: 'Pre-Primary Foundation (Ages 3 to 6)',
    subtitle: 'Playgroup, Nursery & Kindergarten (LKG / UKG)',
    summary: 'Early childhood developmental foundation. Pure activity-based sensory learning, phonics, foundational literacy & numeracy (FLN) without formal examinations.',
    iconName: 'Sparkles',
    expectedSubsections: ['01.1 Playgroup & Nursery', '01.2 Kindergarten (LKG / UKG)'],
    expectedAuthorities: ['Anganwadis / WCD', 'Pre-School Boards']
  },
  {
    id: 'SEC-02',
    number: '02',
    title: 'Primary to 10th Standard: School Boards',
    subtitle: 'Dedicated Nodes for CBSE, ICSE, State SSC, IGCSE/IB & NIOS',
    summary: 'Classes 1–10 schooling journey with distinct board nodes highlighting curriculum orientation, examination philosophy, practical rigor, and strategic advantages.',
    iconName: 'GraduationCap',
    expectedSubsections: ['02.1 CBSE Board', '02.2 ICSE (CISCE)', '02.3 State SSC Boards', '02.4 IGCSE & IB International', '02.5 NIOS Open School', '02.6 Class 10 Milestone'],
    expectedAuthorities: ['CBSE', 'CISCE', 'State SSC Boards', 'Cambridge / IB', 'NIOS']
  },
  {
    id: 'SEC-03',
    number: '03',
    title: 'After 10th: Stream Selection (11th & 12th)',
    subtitle: 'Science (PCM & PCB), Commerce, Arts / Humanities & Polytechnic Diploma',
    summary: 'The critical branching point after Class 10: subject combinations, focus areas, and prerequisite gateways to higher education.',
    iconName: 'Layers',
    expectedSubsections: ['03.1 Science PCM', '03.2 Science PCB', '03.3 Commerce Stream', '03.4 Humanities Stream', '03.5 Polytechnic 3-Yr Diploma'],
    expectedAuthorities: ['CBSE 12th', 'State HSC', 'ISC', 'Polytechnic DTE']
  },
  {
    id: 'SEC-04',
    number: '04',
    title: 'Computing, Software & Artificial Intelligence',
    subtitle: 'B.Tech CSE & AI, BCA, MCA, Cyber Security & Cloud Systems',
    summary: 'Premier undergraduate and postgraduate computing programmes developing full-stack software, machine learning algorithms, distributed systems and cybersecurity.',
    iconName: 'Cpu',
    expectedSubsections: ['04.1 B.Tech CSE & AI', '04.2 BCA (Bachelor of Computer Applications)', '04.3 MCA (Master of Computer Applications)', '04.4 Cyber Security & Cloud Systems'],
    expectedAuthorities: ['AICTE', 'IITs / NITs', 'NTA (JEE / CUET)']
  },
  {
    id: 'SEC-05',
    number: '05',
    title: 'Core Engineering & Physical Technologies',
    subtitle: 'B.Tech Mechanical, Civil, Electrical, Aerospace & M.Tech Research',
    summary: 'Foundational physical engineering disciplines driving national industrial production, infrastructure megaprojects, power grids, and aerospace development.',
    iconName: 'Settings',
    expectedSubsections: ['05.1 Mechanical & Automation Engg', '05.2 Civil & Infrastructure Engg', '05.3 Electrical & Clean Energy Engg', '05.4 Aerospace Engineering', '05.5 M.Tech & Doctoral Engineering'],
    expectedAuthorities: ['AICTE', 'IITs / NITs', 'State Technical Universities']
  },
  {
    id: 'SEC-06',
    number: '06',
    title: 'Electronics, VLSI & Communications',
    subtitle: 'B.Tech ECE, Semiconductor Fabrication, Embedded Systems & 5G/6G',
    summary: 'Hardware engineering, integrated circuit design (VLSI), chip fabrication under the India Semiconductor Mission, and telecom wireless networks.',
    iconName: 'Radio',
    expectedSubsections: ['06.1 B.Tech Electronics & Comm (ECE)', '06.2 VLSI & Semiconductor Microelectronics', '06.3 Embedded Systems & IoT Networks'],
    expectedAuthorities: ['AICTE', 'India Semiconductor Mission (ISM)', 'IITs']
  },
  {
    id: 'SEC-07',
    number: '07',
    title: 'Aviation, Aerospace & Maritime Technologies',
    subtitle: 'DGCA Commercial Pilot License (CPL), Merchant Navy & Aircraft Maintenance',
    summary: 'High-specialization commercial civil aviation flight training and merchant marine navigation and propulsion engineering under statutory safety regulators.',
    iconName: 'Plane',
    expectedSubsections: ['07.1 Commercial Pilot License (CPL)', '07.2 DGS Merchant Navy (Marine Engg & Nautical)', '07.3 Aircraft Maintenance Engineering (AME)'],
    expectedAuthorities: ['Directorate General of Civil Aviation (DGCA)', 'Directorate General of Shipping (DGS)']
  },
  {
    id: 'SEC-08',
    number: '08',
    title: 'Allopathic Medicine, Surgery & Clinical Residency',
    subtitle: 'MBBS, MD/MS Specialist Residency & Super-Specialty DM/M.Ch',
    summary: 'Apex modern medical education governed by the National Medical Commission: 5.5-year undergraduate MBBS with rotatory internship followed by post-graduate specialist residency.',
    iconName: 'HeartPulse',
    expectedSubsections: ['08.1 MBBS (Bachelor of Medicine & Surgery)', '08.2 MD Clinical Specialist Residency', '08.3 MS Surgical Specialist Residency', '08.4 DM / M.Ch Super-Specialty Fellowship'],
    expectedAuthorities: ['National Medical Commission (NMC)', 'NBE (NEET-PG / NExT)', 'AIIMS New Delhi']
  },
  {
    id: 'SEC-09',
    number: '09',
    title: 'Dental Surgery, Oral Healthcare & Rehabilitation',
    subtitle: 'BDS Dental Surgery, MDS Specialist Disciplines & Clinical Practice',
    summary: 'Professional dental healthcare education regulated by the Dental Council of India: 5-year BDS covering oral diagnosis, restorative dentistry, maxillofacial surgery and orthodontics.',
    iconName: 'Activity',
    expectedSubsections: ['09.1 BDS (Bachelor of Dental Surgery)', '09.2 MDS Specialist Disciplines (Orthodontics, Prosthodontics, Oral Surgery)'],
    expectedAuthorities: ['Dental Council of India (DCI)', 'NTA (NEET-UG)', 'State Medical Universities']
  },
  {
    id: 'SEC-10',
    number: '10',
    title: 'AYUSH Traditional Systems of Medicine',
    subtitle: 'BAMS (Ayurveda), BHMS (Homeopathy), BUMS (Unani) & BNYS (Naturopathy)',
    summary: 'Indigenous and alternative holistic medicine systems regulated by NCISM and NCH: 5.5-year institutional degrees integrating classical pharmacopeia with modern diagnostic pathology.',
    iconName: 'Flower2',
    expectedSubsections: ['10.1 BAMS (Ayurvedic Medicine & Surgery)', '10.2 BHMS (Homeopathic Medicine & Surgery)', '10.3 BUMS (Unani Medicine & Surgery)', '10.4 BNYS (Naturopathy & Yogic Sciences)'],
    expectedAuthorities: ['NCISM', 'National Commission for Homoeopathy (NCH)', 'Ministry of AYUSH']
  },
  {
    id: 'SEC-11',
    number: '11',
    title: 'Pharmacy, Pharmacology & Pharmaceutical Sciences',
    subtitle: 'B.Pharm, Pharm.D (Doctor of Pharmacy) & M.Pharm Formulation',
    summary: 'Drug discovery, clinical pharmacology, pharmaceutical chemistry, industrial manufacturing, and hospital pharmacotherapy under the Pharmacy Council of India.',
    iconName: 'Pill',
    expectedSubsections: ['11.1 B.Pharm (Bachelor of Pharmacy)', '11.2 Pharm.D (Doctor of Pharmacy - 6 Yrs)', '11.3 M.Pharm & Regulatory Affairs'],
    expectedAuthorities: ['Pharmacy Council of India (PCI)', 'State Pharmacy Councils', 'NIPER']
  },
  {
    id: 'SEC-12',
    number: '12',
    title: 'Nursing, Physiotherapy & Allied Healthcare Sciences',
    subtitle: 'B.Sc Nursing, BPT Physiotherapy, Radiology & Clinical Lab Tech',
    summary: 'Critical clinical patient care, physical rehabilitation, diagnostic radiology and medical laboratory sciences under statutory professional councils.',
    iconName: 'Stethoscope',
    expectedSubsections: ['12.1 B.Sc Nursing (4-Year Clinical)', '12.2 BPT (Bachelor of Physiotherapy - 4.5 Yrs)', '12.3 Medical Laboratory & Radiology Technology'],
    expectedAuthorities: ['Indian Nursing Council (INC)', 'State Nursing Councils', 'NCAHP Act Regulators']
  },
  {
    id: 'SEC-13',
    number: '13',
    title: 'Business Management, Leadership & Executive Studies',
    subtitle: 'IIM 5-Yr IPM, BBA, MBA / PGDM, Business Analytics & FinTech',
    summary: 'Corporate strategy, marketing leadership, operations management, financial analysis and quantitative decision sciences from undergraduate to executive tiers.',
    iconName: 'Briefcase',
    expectedSubsections: ['13.1 IIM 5-Year Integrated IPM', '13.2 BBA (Marketing & Strategy)', '13.3 BBA (FinTech & Business Analytics)', '13.4 MBA / PGDM Core Management'],
    expectedAuthorities: ['IIMs', 'AICTE', 'AACSB / AMBA Accredited B-Schools']
  },
  {
    id: 'SEC-14',
    number: '14',
    title: 'Commerce, Accounting & Business Studies',
    subtitle: 'B.Com Accounting & Finance, Banking & Insurance & M.Com',
    summary: 'Foundational commercial education covering financial accounting, corporate taxation, banking regulations, mercantile law, and auditing standards.',
    iconName: 'Calculator',
    expectedSubsections: ['14.1 B.Com Accounting & Finance', '14.2 B.Com Banking & Insurance', '14.3 M.Com Corporate Governance'],
    expectedAuthorities: ['UGC', 'Central & State Public Universities']
  },
  {
    id: 'SEC-15',
    number: '15',
    title: 'Statutory Professional Charters & Financial Qualifications',
    subtitle: 'Chartered Accountancy (CA), CFA Charter, CS, CMA & Actuarial Science',
    summary: 'Elite global and national statutory charters granting monopoly practice rights in corporate auditing, company secretarial governance, cost auditing, and capital markets risk management.',
    iconName: 'Award',
    expectedSubsections: ['15.1 Chartered Accountancy (ICAI)', '15.2 CFA Charter (CFA Institute, USA)', '15.3 Company Secretary (ICSI)', '15.4 CMA (ICMAI)', '15.5 Actuarial Science (IAI / IFoA)'],
    expectedAuthorities: ['ICAI', 'CFA Institute (USA)', 'ICSI', 'ICMAI', 'Institute of Actuaries of India (IAI)']
  },
  {
    id: 'SEC-16',
    number: '16',
    title: 'Legal Education, Judiciary & Dispute Resolution',
    subtitle: '5-Yr Integrated Law (NLUs), 3-Yr LL.B, Judicial Services (PCS-J) & AIBE',
    summary: 'Comprehensive legal education, corporate dispute resolution, constitutional litigation, judicial magistracy examination, and statutory bar licensing.',
    iconName: 'Scale',
    expectedSubsections: ['16.1 5-Year Integrated B.A./BBA LL.B. (NLUs)', '16.2 3-Year LL.B. (Graduate Entry)', '16.3 Corporate, M&A & Insolvency Law', '16.4 Constitutional & Trial Advocacy', '16.5 Judicial Services (PCS-J)', '16.6 LL.M & AIBE Practice Bar'],
    expectedAuthorities: ['Bar Council of India (BCI)', 'Consortium of NLUs', 'High Courts / State PSCs']
  },
  {
    id: 'SEC-17',
    number: '17',
    title: 'Architecture, Spatial Planning & Built Environment',
    subtitle: '5-Yr B.Arch (CoA), Urban Planning (CEPT / SPAs) & Sustainable Design',
    summary: 'Architectural design, structural mechanics, urban planning, landscape architecture, and environmental sustainability governed by the Council of Architecture.',
    iconName: 'Compass',
    expectedSubsections: ['17.1 B.Arch (5-Year Professional Degree)', '17.2 B.Plan (Urban & Regional Planning)', '17.3 M.Arch & Sustainable Built Environment'],
    expectedAuthorities: ['Council of Architecture (CoA)', 'NATA (CoA)', 'School of Planning and Architecture (SPAs)']
  },
  {
    id: 'SEC-18',
    number: '18',
    title: 'Design, Fashion, Film & Creative Media',
    subtitle: 'B.Des (NID), Fashion Tech (NIFT), Film Direction (FTII) & Hospitality (IHM)',
    summary: 'Industrial product design, visual communication, fashion design, cinematic arts, broadcast journalism and international hotel administration.',
    iconName: 'Palette',
    expectedSubsections: ['18.1 B.Des Industrial & Product Design (NID)', '18.2 Fashion Tech & Apparel Design (NIFT)', '18.3 Film Direction & Cinematography (FTII / SRFTI)', '18.4 Hospitality & Hotel Administration (NCHMCT IHM)'],
    expectedAuthorities: ['National Institute of Design (NID)', 'NIFT', 'FTII Pune / SRFTI Kolkata', 'NCHMCT']
  },
  {
    id: 'SEC-19',
    number: '19',
    title: 'Pure Sciences, Mathematics & Fundamental Research',
    subtitle: 'IISc, IISERs, BS-MS Pure Sciences, M.Sc & Ph.D. Research',
    summary: 'Fundamental scientific inquiry across Quantum Physics, Organic/Physical Chemistry, Abstract Mathematics, Computing Sciences and National Research Laboratories.',
    iconName: 'Atom',
    expectedSubsections: ['19.1 BS-MS Dual Degree (IISc & IISERs)', '19.2 Physics & Quantum Technologies', '19.3 Chemical Sciences & Functional Materials', '19.4 Pure Mathematics & Statistics', '19.5 Ph.D. Research Fellowships (CSIR-JRF)'],
    expectedAuthorities: ['Indian Institute of Science (IISc)', 'IISERs', 'CSIR', 'DAE / TIFR', 'DST']
  },
  {
    id: 'SEC-20',
    number: '20',
    title: 'Agriculture, Horticulture & Allied Farm Sciences',
    subtitle: 'ICAR B.Sc (Hons) Agriculture, Horticulture, Forestry & Food Tech',
    summary: 'Agronomic sciences, crop breeding, soil chemistry, farm mechanization, post-harvest processing, and agro-forestry under the Indian Council of Agricultural Research.',
    iconName: 'Sprout',
    expectedSubsections: ['20.1 B.Sc (Hons) Agriculture (4 Yrs)', '20.2 B.Sc Horticulture & Forestry', '20.3 B.Tech Agricultural Engg & Food Tech'],
    expectedAuthorities: ['Indian Council of Agricultural Research (ICAR)', 'State Agricultural Universities (SAUs)']
  },
  {
    id: 'SEC-21',
    number: '21',
    title: 'Veterinary Medicine, Animal Husbandry & Fisheries',
    subtitle: 'B.V.Sc & A.H., Dairy Technology (NDRI) & Fisheries Sciences (CIFE)',
    summary: 'Clinical veterinary surgery, farm animal reproduction, dairy chemistry, aquatic animal health, and industrial fish production under statutory regulatory councils.',
    iconName: 'ShieldAlert',
    expectedSubsections: ['21.1 B.V.Sc & A.H. (Veterinary Medicine & Surgery - 5.5 Yrs)', '21.2 B.Tech Dairy Technology', '21.3 B.F.Sc (Bachelor of Fisheries Science)'],
    expectedAuthorities: ['Veterinary Council of India (VCI)', 'NDRI Karnal', 'ICAR-CIFE Mumbai']
  },
  {
    id: 'SEC-22',
    number: '22',
    title: 'Arts, Humanities, Social Sciences & Behavioral Policy',
    subtitle: 'Economics, Political Science, Psychology, Sociology & Journalism',
    summary: 'Rigorous empirical and humanistic inquiry into social structures, international diplomacy, behavioral cognitive sciences, macroeconomics, and investigative mass journalism.',
    iconName: 'BookMarked',
    expectedSubsections: ['22.1 B.A. (Hons) Economics & Econometrics', '22.2 Political Science & International Relations', '22.3 Psychology (Clinical & Cognitive)', '22.4 Journalism & Mass Communication (BJMC)'],
    expectedAuthorities: ['UGC', 'Central Universities (DU, JNU, BHU)', 'TISS Mumbai']
  },
  {
    id: 'SEC-23',
    number: '23',
    title: 'Teacher Education & Pedagogical Training',
    subtitle: 'D.El.Ed, B.Ed, 4-Yr Integrated Teacher Education (ITEP) & CTET / TET',
    summary: 'Statutory school teacher preparation regulated by the National Council for Teacher Education: pedagogy, child development, curriculum design, and mandatory licensing examinations.',
    iconName: 'School',
    expectedSubsections: ['23.1 D.El.Ed (Diploma in Elementary Education)', '23.2 B.Ed (Bachelor of Education)', '23.3 4-Yr Integrated Teacher Education Programme (ITEP)', '23.4 CTET & State TET Licensure'],
    expectedAuthorities: ['National Council for Teacher Education (NCTE)', 'CBSE (CTET)', 'State SCERTs']
  },
  {
    id: 'SEC-24',
    number: '24',
    title: 'Vocational, Technical Crafts & Skill Ecosystem',
    subtitle: 'ITIs (CTS Trades), Polytechnic Diplomas, NATS/NAPS Apprenticeships & B.Voc',
    summary: 'Grassroots craftsman technical training, engineering diplomas, national industry apprenticeships, and modular vocational skilling degrees aligned with the NSQF ladder.',
    iconName: 'Wrench',
    expectedSubsections: ['24.1 ITI Craftsmen Training Scheme (CTS)', '24.2 Polytechnic 3-Yr Engineering Diplomas', '24.3 National Apprenticeship Schemes (NATS / NAPS)', '24.4 B.Voc Vocational Degrees'],
    expectedAuthorities: ['NCVET', 'DGT / MSDE', 'State Technical Education Boards (DTE)', 'NSDC']
  },
  {
    id: 'SEC-25',
    number: '25',
    title: 'University Archetypes, Accreditation & NEP Framework',
    subtitle: 'Central, State, Deemed, INIs, UGC 2(f)/12(B), NAAC A++, NBA & NHEQF',
    summary: 'The constitutional and regulatory governance framework of Indian higher education: statutory university archetypes, quality accreditation matrix, and NHEQF credit progression.',
    iconName: 'Landmark',
    expectedSubsections: ['25.1 Central & State Public Universities', '25.2 Institutes of National Importance (INIs: IITs, NITs, AIIMS, IIMs)', '25.3 Deemed & State Private Universities', '25.4 UGC 2(f) & 12(B) Statutory Validity', '25.5 NAAC, NBA Tier-1 & NIRF Rankings', '25.6 NHEQF Levels 4.5 to 8.0 & ABC Bank'],
    expectedAuthorities: ['UGC', 'Ministry of Education', 'NAAC', 'NBA', 'AIU']
  },
  {
    id: 'SEC-26',
    number: '26',
    title: 'All-India Civil & Administrative Services',
    subtitle: 'UPSC Civil Services: IAS, IPS, IFS & State PSCs (Deputy Collector & DySP)',
    summary: 'Apex permanent civil executive of India: district administration command, law and order maintenance, diplomatic foreign missions, and state provincial civil services.',
    iconName: 'Shield',
    expectedSubsections: ['26.1 Indian Administrative Service (IAS)', '26.2 Indian Police Service (IPS)', '26.3 Indian Foreign Service (IFS)', '26.4 State Public Service Commissions (State PSCs)'],
    expectedAuthorities: ['Union Public Service Commission (UPSC)', 'DoPT', 'Ministry of Home Affairs', 'State PSCs']
  },
  {
    id: 'SEC-27',
    number: '27',
    title: 'Central Specialist, Technical & Economic Gateways',
    subtitle: 'UPSC ESE (Engineering), IFoS (Forestry), CMS (Medical), IES & Railways IRMS',
    summary: 'Specialized all-India technical and scientific recruitment: Indian Railway management, central engineering megaprojects, forest conservation, central health services, and macroeconomic policy.',
    iconName: 'Cog',
    expectedSubsections: ['27.1 Engineering Services Examination (UPSC ESE / IES)', '27.2 Indian Forest Service (UPSC IFoS)', '27.3 Combined Medical Services (UPSC CMS)', '27.4 Indian Economic Service & Statistical Service (IES/ISS)', '27.5 Indian Railway Management Service (IRMS)'],
    expectedAuthorities: ['UPSC', 'Ministry of Railways (Railway Board)', 'MoEFCC', 'Ministry of Health', 'Ministry of Finance']
  },
  {
    id: 'SEC-28',
    number: '28',
    title: 'Public Finance, Banking, Central Ministries & Uniformed Gateways',
    subtitle: 'RBI Grade B, SEBI Grade A, SBI/IBPS PO, IRS Direct Taxes, SSC CGL & Defence CDS',
    summary: 'Central banking monetary policy, corporate capital markets regulation, commercial banking, direct & indirect taxation, central ministry enforcement, and military commissioned officer services.',
    iconName: 'Building2',
    expectedSubsections: ['28.1 Central Banking Regulators (RBI Grade B & SEBI Grade A)', '28.2 Public Sector Commercial Banking (SBI PO & IBPS PO)', '28.3 Revenue & Taxation (IRS Direct Taxes & GST)', '28.4 Central Ministries & Enforcement (SSC CGL: CSS, CBI, ED, CAG)', '28.5 Commissioned Military Officers (UPSC CDS, AFCAT & SSB)', '28.6 Central Armed Police Forces (CAPF Assistant Commandants)', '28.7 Agnipath Scheme (Agniveer Tri-Services)'],
    expectedAuthorities: ['Reserve Bank of India (RBI)', 'SEBI', 'UPSC', 'Staff Selection Commission (SSC)', 'Ministry of Defence', 'Ministry of Home Affairs']
  }
];

// Re-map all nodes accurately across the 28 sections
export const NODE_SECTION_MAP_28: Record<string, { secId: string; secNum: string }> = {
  // SEC-01
  'PRE-PLAYGROUP-NURSERY': { secId: 'SEC-01', secNum: '01' },
  'PRE-KINDERGARTEN': { secId: 'SEC-01', secNum: '01' },

  // SEC-02
  'BOARD-CBSE': { secId: 'SEC-02', secNum: '02' },
  'BOARD-ICSE': { secId: 'SEC-02', secNum: '02' },
  'BOARD-SSC': { secId: 'SEC-02', secNum: '02' },
  'BOARD-IGCSE-IB': { secId: 'SEC-02', secNum: '02' },
  'BOARD-NIOS': { secId: 'SEC-02', secNum: '02' },
  'SCH-10TH-MILESTONE': { secId: 'SEC-02', secNum: '02' },

  // SEC-03
  'STRM-PCM': { secId: 'SEC-03', secNum: '03' },
  'STRM-PCB': { secId: 'SEC-03', secNum: '03' },
  'STRM-COMMERCE': { secId: 'SEC-03', secNum: '03' },
  'STRM-ARTS': { secId: 'SEC-03', secNum: '03' },
  'STRM-POLYTECHNIC': { secId: 'SEC-03', secNum: '03' },

  // SEC-04: Computing, Software & AI
  'DEG-BTECH': { secId: 'SEC-04', secNum: '04' },
  'BTECH-CS-AI': { secId: 'SEC-04', secNum: '04' },
  'DEG-BCA': { secId: 'SEC-04', secNum: '04' },
  'PG-MCA': { secId: 'SEC-04', secNum: '04' },

  // SEC-05: Core Engineering & Physical Technologies
  'BTECH-MECH': { secId: 'SEC-05', secNum: '05' },
  'BTECH-CIVIL': { secId: 'SEC-05', secNum: '05' },
  'BTECH-EE': { secId: 'SEC-05', secNum: '05' },
  'PG-MTECH': { secId: 'SEC-05', secNum: '05' },

  // SEC-06: Electronics, VLSI & Communications
  'BTECH-ECE': { secId: 'SEC-06', secNum: '06' },

  // SEC-07: Aviation, Aerospace & Maritime Technologies
  'DEG-AVIATION-PILOT': { secId: 'SEC-07', secNum: '07' },
  'DEG-MARITIME-DGS': { secId: 'SEC-07', secNum: '07' },

  // SEC-08: Allopathic Medicine & Surgery
  'DEG-MBBS': { secId: 'SEC-08', secNum: '08' },
  'PG-MD-MEDICINE': { secId: 'SEC-08', secNum: '08' },
  'PG-MS-SURGERY': { secId: 'SEC-08', secNum: '08' },

  // SEC-09: Dental Surgery
  'CLINIC-BDS': { secId: 'SEC-09', secNum: '09' },

  // SEC-10: AYUSH Medicine
  'DEG-AYUSH-DENTAL': { secId: 'SEC-10', secNum: '10' },
  'CLINIC-BAMS': { secId: 'SEC-10', secNum: '10' },
  'CLINIC-BHMS': { secId: 'SEC-10', secNum: '10' },

  // SEC-11: Pharmacy
  'DEG-BPHARM': { secId: 'SEC-11', secNum: '11' },

  // SEC-12: Nursing & Physiotherapy
  'DEG-BSC-NURSING': { secId: 'SEC-12', secNum: '12' },
  'CLINIC-BPT': { secId: 'SEC-12', secNum: '12' },

  // SEC-13: Business Management
  'DEG-BCOM-BBA': { secId: 'SEC-13', secNum: '13' },
  'BBA-MARKETING': { secId: 'SEC-13', secNum: '13' },
  'BBA-FINTECH': { secId: 'SEC-13', secNum: '13' },
  'DEG-IPM': { secId: 'SEC-13', secNum: '13' },
  'PG-MBA': { secId: 'SEC-13', secNum: '13' },

  // SEC-14: Commerce & Business Studies
  'BCOM-FINANCE': { secId: 'SEC-14', secNum: '14' },
  'BCOM-BANKING-INSURANCE': { secId: 'SEC-14', secNum: '14' },

  // SEC-15: Statutory Charters
  'PROF-CA': { secId: 'SEC-15', secNum: '15' },
  'PROF-CFA': { secId: 'SEC-15', secNum: '15' },
  'PROF-CS': { secId: 'SEC-15', secNum: '15' },
  'PROF-CMA': { secId: 'SEC-15', secNum: '15' },
  'PROF-ACTUARIAL': { secId: 'SEC-15', secNum: '15' },

  // SEC-16: Law & Judiciary
  'DEG-LAW-5YR': { secId: 'SEC-16', secNum: '16' },
  'DEG-LAW-3YR': { secId: 'SEC-16', secNum: '16' },
  'LAW-CORP': { secId: 'SEC-16', secNum: '16' },
  'LAW-LITIGATION': { secId: 'SEC-16', secNum: '16' },
  'LAW-IPR-CYBER': { secId: 'SEC-16', secNum: '16' },
  'LAW-JUDICIARY': { secId: 'SEC-16', secNum: '16' },
  'LAW-AIBE': { secId: 'SEC-16', secNum: '16' },
  'PG-LLM': { secId: 'SEC-16', secNum: '16' },

  // SEC-17: Architecture
  'DEG-BARCH': { secId: 'SEC-17', secNum: '17' },

  // SEC-18: Design, Fashion & Media
  'DEG-DESIGN-NID': { secId: 'SEC-18', secNum: '18' },
  'DEG-HOTEL-MGMT': { secId: 'SEC-18', secNum: '18' },

  // SEC-19: Pure Sciences
  'DEG-BSC-PURE': { secId: 'SEC-19', secNum: '19' },
  'BSC-PHYSICS': { secId: 'SEC-19', secNum: '19' },
  'BSC-CHEMISTRY': { secId: 'SEC-19', secNum: '19' },
  'BSC-MATHS': { secId: 'SEC-19', secNum: '19' },
  'PG-MSC-PHD': { secId: 'SEC-19', secNum: '19' },

  // SEC-20: Agriculture & Allied Sciences
  'DEG-BSC-AGRI': { secId: 'SEC-20', secNum: '20' },
  'AGRI-HORTICULTURE-FORESTRY': { secId: 'SEC-20', secNum: '20' },
  'AGRI-ENGG-FOODTECH': { secId: 'SEC-20', secNum: '20' },
  'GATE-AGRI-AFO-NABARD': { secId: 'SEC-20', secNum: '20' },

  // SEC-21: Veterinary & Animal Husbandry
  'DEG-BVSC-AH': { secId: 'SEC-21', secNum: '21' },

  // SEC-22: Arts, Humanities & Social Sciences
  'DEG-BA-HUMANITIES': { secId: 'SEC-22', secNum: '22' },
  'BA-POL-POLICY': { secId: 'SEC-22', secNum: '22' },
  'BA-ECONOMICS': { secId: 'SEC-22', secNum: '22' },
  'BA-PSYCHOLOGY': { secId: 'SEC-22', secNum: '22' },
  'BA-JOURNALISM': { secId: 'SEC-22', secNum: '22' },

  // SEC-23: Teacher Education
  'DEG-TEACHER-BED': { secId: 'SEC-23', secNum: '23' },

  // SEC-24: Vocational & Skill Ecosystem
  'STRM-POLYTECHNIC-REP': { secId: 'SEC-24', secNum: '24' },
  'VOC-ITI-CRAFTSMEN': { secId: 'SEC-24', secNum: '24' },
  'VOC-APPRENTICESHIP-NATS': { secId: 'SEC-24', secNum: '24' },
  'VOC-BVOC-DEGREE': { secId: 'SEC-24', secNum: '24' },

  // SEC-25: Universities, Accreditation & NEP
  'INST-CENTRAL-UNIV': { secId: 'SEC-25', secNum: '25' },
  'INST-STATE-PUBLIC-UNIV': { secId: 'SEC-25', secNum: '25' },
  'INST-INI-IIT-AIIMS': { secId: 'SEC-25', secNum: '25' },
  'INST-DEEMED-PRIVATE-UNIV': { secId: 'SEC-25', secNum: '25' },
  'LIC-BAR-COUNCIL-AIBE': { secId: 'SEC-25', secNum: '25' },
  'LIC-MEDICAL-COUNCIL-NMC': { secId: 'SEC-25', secNum: '25' },
  'LIC-ARCH-COA': { secId: 'SEC-25', secNum: '25' },
  'LIC-ICAI-COP': { secId: 'SEC-25', secNum: '25' },
  'NHEQF-LEVELS-4TO6': { secId: 'SEC-25', secNum: '25' },
  'NHEQF-LEVELS-7TO8': { secId: 'SEC-25', secNum: '25' },
  'ACCR-UGC-2F-12B': { secId: 'SEC-25', secNum: '25' },
  'ACCR-NAAC-NBA-NIRF': { secId: 'SEC-25', secNum: '25' },

  // SEC-26: Civil Services & State PSCs
  'GATE-UPSC-IAS': { secId: 'SEC-26', secNum: '26' },
  'GATE-UPSC-IPS-POLICE': { secId: 'SEC-26', secNum: '26' },
  'GATE-UPSC-IFS': { secId: 'SEC-26', secNum: '26' },
  'GATE-STATE-PSC': { secId: 'SEC-26', secNum: '26' },

  // SEC-27: Technical & Specialist Gateways
  'GATE-UPSC-ESE': { secId: 'SEC-27', secNum: '27' },
  'GATE-UPSC-IFOS': { secId: 'SEC-27', secNum: '27' },
  'GATE-UPSC-CMS': { secId: 'SEC-27', secNum: '27' },
  'GATE-UPSC-IES-ISS': { secId: 'SEC-27', secNum: '27' },
  'GATE-RAILWAYS-IRMS': { secId: 'SEC-27', secNum: '27' },

  // SEC-28: Banking, Finance, Ministries & Uniformed Gateways
  'GATE-BANK-REGULATORS': { secId: 'SEC-28', secNum: '28' },
  'GATE-BANK-COMMERCIAL': { secId: 'SEC-28', secNum: '28' },
  'GATE-TAX-IRS-INCOME-GST': { secId: 'SEC-28', secNum: '28' },
  'GATE-GOV-SSC-CGL': { secId: 'SEC-28', secNum: '28' },
  'GATE-GOV-DEFENCE': { secId: 'SEC-28', secNum: '28' },
  'GATE-AGNIVEER-TRISERVICES': { secId: 'SEC-28', secNum: '28' },
  'GATE-UPSC-CAPF': { secId: 'SEC-28', secNum: '28' },
  'GATE-POLICE-STATE-CAPF': { secId: 'SEC-28', secNum: '28' },
  'GATE-NDA-NA': { secId: 'SEC-28', secNum: '28' },
  'GATE-DEF-TECH-10PLUS2': { secId: 'SEC-28', secNum: '28' }
};

// Newly added nodes for complete coverage across all 28 sections
const NEW_FOCUSED_NODES: EducationNode[] = [
  // SEC-06: Electronics & VLSI
  {
    id: 'BTECH-VLSI-SEMI',
    type: 'institution',
    title: 'B.Tech / M.Tech Semiconductor & VLSI Chip Design',
    abbreviation: 'VLSI & Chips',
    sectionId: 'SEC-06',
    sectionNumber: '06',
    parentId: 'BTECH-ECE',
    level: 'union',
    category: 'higher-education',
    summary: 'Specialized microelectronics and semiconductor fabrication degrees aligned with the India Semiconductor Mission (ISM) for chip design, FPGA architecture, and cleanroom fabrication.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Hardware & Microelectronics Degree',
      examinationTimeline: 'Admissions: JEE Main / Advanced & GATE ECE',
      programmesOffered: ['B.Tech Microelectronics & VLSI', 'M.Tech Semiconductor Tech', 'Cadence / Synopsys EDA Training'],
      careerValue: 'High-demand engineering roles at Qualcomm, Intel, NVIDIA, Texas Instruments, and semiconductor fabs'
    },
    sourceIds: ['SRC-AICTE-ACT-1987'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-17'
  },

  // SEC-09: Dental Surgery MDS
  {
    id: 'PG-MDS-DENTAL',
    type: 'institution',
    title: 'Master of Dental Surgery (MDS Specialist Residency)',
    abbreviation: 'MDS Specialist',
    sectionId: 'SEC-09',
    sectionNumber: '09',
    parentId: 'CLINIC-BDS',
    level: 'union',
    category: 'higher-education',
    summary: '3-year clinical residency following BDS offering specialized master training in Orthodontics, Oral & Maxillofacial Surgery, Prosthodontics, and Periodontics under DCI regulations.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Postgraduate Dental Specialist Degree',
      examinationTimeline: 'Admissions: NEET-MDS conducted annually by NBE',
      programmesOffered: ['MDS Orthodontics', 'MDS Maxillofacial Surgery', 'MDS Conservative Dentistry'],
      careerValue: 'Consultant dental surgeon, hospital dental director, and specialty clinical practice'
    },
    sourceIds: ['SRC-DCI-DENTISTS-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-17'
  },

  // SEC-10: AYUSH Unani & Naturopathy
  {
    id: 'CLINIC-BUMS-BNYS',
    type: 'institution',
    title: 'BUMS (Unani Medicine) & BNYS (Naturopathy & Yogic Sciences)',
    abbreviation: 'BUMS / BNYS',
    sectionId: 'SEC-10',
    sectionNumber: '10',
    parentId: 'DEG-AYUSH-DENTAL',
    level: 'union',
    category: 'higher-education',
    summary: '5.5-year clinical degrees in Unani classical medicine and Naturopathic diagnostic medicine recognized by NCISM and the Ministry of AYUSH.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Traditional Clinical Medicine Degree',
      examinationTimeline: 'Admissions: NEET-UG conducted by NTA',
      programmesOffered: ['BUMS Unani Medicine', 'BNYS Naturopathy & Yoga', 'M.D. AYUSH Clinical'],
      careerValue: 'Registered AYUSH Medical Practitioner, wellness hospital consultant, and AYUSH research scientist'
    },
    sourceIds: ['SRC-NCISM-ACT-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-17'
  },

  // SEC-11: Doctor of Pharmacy (Pharm.D)
  {
    id: 'DEG-PHARMD-CLINICAL',
    type: 'institution',
    title: 'Doctor of Pharmacy (Pharm.D — 6-Year Clinical Degree)',
    abbreviation: 'Pharm.D Clinical',
    sectionId: 'SEC-11',
    sectionNumber: '11',
    parentId: 'DEG-BPHARM',
    level: 'union',
    category: 'higher-education',
    summary: '6-year clinical professional doctorate approved by Pharmacy Council of India focusing on clinical pharmacotherapy, hospital ward rounds, drug interactions, and clinical trials.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Clinical Pharmacy Doctoral Degree',
      examinationTimeline: 'Duration: 5 Years Academic + 1 Year Mandatory Hospital Internship',
      programmesOffered: ['Pharm.D (6 Yrs Post 12th)', 'Pharm.D Post-Baccalaureate (3 Yrs Post B.Pharm)'],
      careerValue: 'Hospital clinical pharmacist, pharmacovigilance scientist, and clinical research associate (CRA)'
    },
    sourceIds: ['SRC-PCI-PHARMACY-ACT'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-17'
  },

  // SEC-21: Dairy Technology & Fisheries
  {
    id: 'DEG-DAIRY-FISHERIES',
    type: 'institution',
    title: 'B.Tech Dairy Technology & B.F.Sc Fisheries Science',
    abbreviation: 'Dairy & Fisheries',
    sectionId: 'SEC-21',
    sectionNumber: '21',
    parentId: 'DEG-BVSC-AH',
    level: 'union',
    category: 'higher-education',
    summary: '4-year professional degrees in industrial dairy processing, milk microbiology, aquaculture, marine fisheries and fish genetics under NDRI and ICAR-CIFE.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Allied Veterinary & Food Science Degree',
      examinationTimeline: 'Admissions: ICAR AIEEA / State CETs',
      programmesOffered: ['B.Tech Dairy Technology', 'B.F.Sc (Bachelor of Fisheries Science)', 'M.Tech Dairy Tech'],
      careerValue: 'Technical plant manager at Amul, Mother Dairy, NDDB, and State Fisheries development corporations'
    },
    sourceIds: ['SRC-VCI-ACT-1984'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-17'
  },

  // SEC-23: Teacher Education ITEP
  {
    id: 'DEG-TEACHER-ITEP-NCTE',
    type: 'institution',
    title: '4-Year Integrated Teacher Education Programme (ITEP)',
    abbreviation: '4-Yr ITEP / NCTE',
    sectionId: 'SEC-23',
    sectionNumber: '23',
    parentId: 'DEG-TEACHER-BED',
    level: 'union',
    category: 'higher-education',
    summary: 'The flagship dual-major holistic teacher education undergraduate degree introduced under NEP 2020: B.A. B.Ed, B.Sc B.Ed, or B.Com B.Ed qualifying directly for secondary teaching.',
    mandate: [],
    powers: [],
    limitations: [],
    institutionDetails: {
      institutionType: 'Integrated Teacher Education Degree',
      examinationTimeline: 'Admissions: National Common Entrance Test (NCET) conducted by NTA',
      programmesOffered: ['B.Sc B.Ed Secondary Stage', 'B.A. B.Ed Middle Stage', 'B.Com B.Ed Preparatory Stage'],
      careerValue: 'Mandatory minimum qualification under NEP 2020 for school teachers in Kendriya Vidyalayas, Navodaya Vidyalayas, and State Govt schools'
    },
    sourceIds: ['SRC-NCTE-ACT-1993', 'SRC-NEP-2020'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-10-17'
  }
];

// Clean and build 28-section dataset
import {
  NODES_V3 as RAW_NODES,
  RELATIONSHIPS_V3 as RAW_RELS
} from '../src/data/whiteboard2-institutions';

const VALID_CATEGORIES = new Set<FunctionalCategory>([
  'legislation',
  'executive-administration',
  'school-education',
  'higher-education',
  'professional-regulation',
  'examination',
  'admissions-counselling',
  'accreditation-ranking',
  'funding-finance',
  'oversight-remedies',
  'procedural-reform'
]);

// Deduplicate raw nodes by ID
const uniqueNodesMap = new Map<string, EducationNode>();
for (const node of RAW_NODES) {
  if (!uniqueNodesMap.has(node.id)) {
    uniqueNodesMap.set(node.id, node);
  }
}

// Remap all existing nodes
const updatedNodes: EducationNode[] = Array.from(uniqueNodesMap.values()).map((node) => {
  const mapping = NODE_SECTION_MAP_28[node.id];
  let cat = node.category;
  if (!VALID_CATEGORIES.has(cat)) {
    cat = 'higher-education';
  }
  if (mapping) {
    return {
      ...node,
      category: cat,
      sectionId: mapping.secId,
      sectionNumber: mapping.secNum
    };
  }
  return {
    ...node,
    category: cat
  };
});

// Append new specialized nodes (if not already present)
const existingIds = new Set(updatedNodes.map((n) => n.id));
for (const n of NEW_FOCUSED_NODES) {
  if (!existingIds.has(n.id)) {
    updatedNodes.push(n);
    existingIds.add(n.id);
  }
}

// Deduplicate and filter relationships
const finalNodeIds = new Set(updatedNodes.map((n) => n.id));
const uniqueRelsMap = new Map<string, RelationshipEdgeData>();

for (const rel of RAW_RELS) {
  const hasSource = finalNodeIds.has(rel.sourceNodeId);
  const hasTarget = finalNodeIds.has(rel.targetNodeId);
  if (!hasSource || !hasTarget) {
    console.warn(`Dropping orphan rel ${rel.id}: source=${rel.sourceNodeId} (${hasSource}), target=${rel.targetNodeId} (${hasTarget})`);
    continue;
  }
  if (!uniqueRelsMap.has(rel.id)) {
    uniqueRelsMap.set(rel.id, rel);
  }
}

const validRels = Array.from(uniqueRelsMap.values());

// Write to whiteboard2-institutions.ts
const targetFile = path.resolve('src/data/whiteboard2-institutions.ts');
const fileContent = `import { EducationNode, RelationshipEdgeData, SectionMeta, SourceRecord } from '../types';

export const SECTION_METAS_V3: SectionMeta[] = ${JSON.stringify(SECTIONS_28, null, 2)};

export const NODES_V3: EducationNode[] = ${JSON.stringify(updatedNodes, null, 2)};

export const RELATIONSHIPS_V3: RelationshipEdgeData[] = ${JSON.stringify(validRels, null, 2)};

export const SOURCES_V3: SourceRecord[] = ${JSON.stringify(SOURCES_V3, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log('Successfully written 28-section whiteboard2-institutions.ts');
console.log('Total Sections:', SECTIONS_28.length);
console.log('Total Nodes:', updatedNodes.length);
console.log('Total Relationships:', validRels.length);
