export interface DecisionRow {
  id: string;
  decision: string;
  parliament: string;
  unionExecutive: string;
  stateGovernment: string;
  regulator: string;
  boardOrExamAgency: string;
  universityOrInstitution: string;
  legalAnnotation: string;
}

export const DECISION_MATRIX_DATA: DecisionRow[] = [
  {
    id: 'DM-01',
    decision: 'Amend the Constitution',
    parliament: 'Yes, under Article 368 with special two-thirds majority',
    unionExecutive: 'No, not unilaterally (proposes amendment Bills through Parliament)',
    stateGovernment: 'State ratification required where Seventh Schedule lists are affected (at least 50% states)',
    regulator: 'No power whatsoever',
    boardOrExamAgency: 'No power whatsoever',
    universityOrInstitution: 'No power whatsoever',
    legalAnnotation: 'Constituent power reserved exclusively to Parliament and State Legislatures under Article 368.'
  },
  {
    id: 'DM-02',
    decision: 'Enact central education legislation',
    parliament: 'Yes, within constitutional competence (List I Entry 66, List III Entry 25)',
    unionExecutive: 'Proposes and drafts policy Bills; cannot enact an Act alone',
    stateGovernment: 'No, cannot enact central legislation (may provide consultations)',
    regulator: 'No, cannot enact primary Acts (can only frame subordinate regulations)',
    boardOrExamAgency: 'No, operates within assigned administrative mandate',
    universityOrInstitution: 'No, governs internal matters under establishing charter',
    legalAnnotation: 'Primary lawmaking is the exclusive constitutional prerogative of Parliament.'
  },
  {
    id: 'DM-03',
    decision: 'Enact State education legislation',
    parliament: 'No unilateral State legislation by Parliament alone (subject to President rule Art 356 or Art 249)',
    unionExecutive: 'No, matters fall within State legislative sphere',
    stateGovernment: 'Yes, within constitutional competence (List II and List III Entry 25)',
    regulator: 'No power',
    boardOrExamAgency: 'No power',
    universityOrInstitution: 'No power',
    legalAnnotation: 'State Legislatures enact State University Acts and Fee Regulation Acts.'
  },
  {
    id: 'DM-04',
    decision: 'Issue executive education policy',
    parliament: 'No, not as an ordinary legislative act (scrutinizes policies in debate)',
    unionExecutive: 'Yes, within Union executive authority (National Education Policy / Schemes)',
    stateGovernment: 'Yes, within State executive authority (State resolutions and directives)',
    regulator: 'Only within its lawful statutory mandate',
    boardOrExamAgency: 'Only within delegated operational mandate',
    universityOrInstitution: 'Only within internal institutional authority',
    legalAnnotation: 'Executive power co-extensive with legislative competence under Articles 73 and 162.'
  },
  {
    id: 'DM-05',
    decision: 'Set school curriculum',
    parliament: 'Not usually through direct subject-level administration',
    unionExecutive: 'Conditional, through competent national academic authorities (NCERT, MoE policy)',
    stateGovernment: 'Conditional, through competent State academic authorities (SCERTs)',
    regulator: 'Conditional where a specific statutory mandate applies (e.g. NCTE for teacher training)',
    boardOrExamAgency: 'Yes, within the relevant board framework (CBSE, CISCE, State Boards)',
    universityOrInstitution: 'Yes, for university lab schools or internal academic courses',
    legalAnnotation: 'RTE Section 29 designates competent Academic Authorities (NCERT / SCERTs).'
  },
  {
    id: 'DM-06',
    decision: 'Set higher-education standards',
    parliament: 'Through legislation establishing statutory frameworks (Entry 66)',
    unionExecutive: 'Conditional, through policy directives issued under governing statutes',
    stateGovernment: 'Conditional, under state university laws (subordinate to List I Entry 66)',
    regulator: 'Yes, primary statutory power (UGC Act Sec 12/26, AICTE Act Sec 10, NMC Act Sec 10)',
    boardOrExamAgency: 'Only for assigned exam and board operational matters',
    universityOrInstitution: 'Within academic autonomy and applicable national regulations',
    legalAnnotation: 'List I Entry 66 gives national statutory regulators supreme standards-setting authority.'
  },
  {
    id: 'DM-07',
    decision: 'Conduct an entrance examination',
    parliament: 'No general operational role',
    unionExecutive: 'Conditional through designated autonomous bodies (NTA, UPSC)',
    stateGovernment: 'Conditional through designated State CET cells or State PSCs',
    regulator: 'Conditional where assigned by statute (e.g., NMC mandates NEET)',
    boardOrExamAgency: 'Yes, when designated (NTA, UPSC, SSC, Maha CET Cell)',
    universityOrInstitution: 'Yes, for institution-specific entrance tests or autonomous admissions',
    legalAnnotation: 'Testing agencies conduct tests; eligibility rules belong to regulators/ministries.'
  },
  {
    id: 'DM-08',
    decision: 'Decide admission eligibility',
    parliament: 'Through primary legislation where applicable (e.g., Section 14 NMC Act)',
    unionExecutive: 'Conditional under the relevant legal framework and reservation policies',
    stateGovernment: 'Conditional under State admission and domicile reservation rules',
    regulator: 'Conditional within regulatory authority (minimum marks, subjects, age)',
    boardOrExamAgency: 'Implements assigned eligibility rules; cannot alter criteria unilaterally',
    universityOrInstitution: 'Applies lawful programme-specific criteria within regulatory ceilings',
    legalAnnotation: 'Eligibility criteria must have statutory backing and adhere to Article 14 equality.'
  },
  {
    id: 'DM-09',
    decision: 'Allocate admission seats',
    parliament: 'No routine direct seat allocation',
    unionExecutive: 'Through designated authorities where applicable (MCC, JoSAA, CSAB)',
    stateGovernment: 'Through designated State authorities where applicable (State CET Cell, DME)',
    regulator: 'Only where statute explicitly provides seat allotment mandates',
    boardOrExamAgency: 'If formally designated as a centralized counselling authority',
    universityOrInstitution: 'Yes, where the institution controls admissions and conducts own counselling',
    legalAnnotation: 'Seat allocation is conducted via centralized counselling portals per rank and preferences.'
  },
  {
    id: 'DM-10',
    decision: 'Award a university degree',
    parliament: 'No routine individual award',
    unionExecutive: 'No general direct power',
    stateGovernment: 'No general direct power',
    regulator: 'Does not ordinarily award degrees itself (UGC specifies degree nomenclatures)',
    boardOrExamAgency: 'No, unless it is also a legally authorized university awarding institution',
    universityOrInstitution: 'Yes, exclusive statutory power under Section 22 of the UGC Act 1956',
    legalAnnotation: 'Section 22 UGC Act restricts degree conferral to statutory universities and INIs.'
  },
  {
    id: 'DM-11',
    decision: 'Accredit an institution/programme',
    parliament: 'Can establish the legal framework',
    unionExecutive: 'Conditional via policy frameworks',
    stateGovernment: 'Conditional via state quality bodies',
    regulator: 'If empowered by statute (e.g., UGC created NAAC; AICTE created NBA)',
    boardOrExamAgency: 'Only if designated for that specific quality function',
    universityOrInstitution: 'Internal quality processes (IQAC); not external accreditation by itself',
    legalAnnotation: 'Accreditation evaluates quality against defined benchmarks; distinct from recognition.'
  },
  {
    id: 'DM-12',
    decision: 'Rank institutions',
    parliament: 'No ordinary direct ranking role',
    unionExecutive: 'Can establish a national framework (Ministry of Education created NIRF)',
    stateGovernment: 'Can establish State ranking frameworks (e.g., Gujarat GSIRF)',
    regulator: 'Only if authorized by government',
    boardOrExamAgency: 'Only if assigned',
    universityOrInstitution: 'Can publish internal data; cannot substitute for an external ranking framework',
    legalAnnotation: 'Ranking is a comparative metric; it is neither an accreditation nor an operating permit.'
  },
  {
    id: 'DM-13',
    decision: 'Issue professional licence / registration',
    parliament: 'Can legislate establishing statutory councils (Advocates Act, NMC Act)',
    unionExecutive: 'Conditional through applicable statutory council mechanisms',
    stateGovernment: 'Conditional through State licensing councils (State Medical / Bar / Nursing Councils)',
    regulator: 'Yes, if the relevant statute assigns it (BCI, NMC, PCI, CoA, ICAI)',
    boardOrExamAgency: 'No general power (awards exam scores, not professional practice licenses)',
    universityOrInstitution: 'No general power (awards degrees, which must then be registered with councils)',
    legalAnnotation: 'A degree certifies academic completion; a council registration authorizes professional practice.'
  },
  {
    id: 'DM-14',
    decision: 'Fund institutions or schemes',
    parliament: 'Authorizes public expenditure through Appropriation Bills (Art 114)',
    unionExecutive: 'Yes, through approved central schemes, ministry allocations, and GFR rules',
    stateGovernment: 'Yes, through State budgetary powers and state education grants',
    regulator: 'Only where funding and grant disbursement is assigned by parent statute (e.g. UGC Sec 12)',
    boardOrExamAgency: 'Only where funding is assigned',
    universityOrInstitution: 'Manages endowment and received funds within applicable financial rules',
    legalAnnotation: 'All public funding requires constitutional legislative appropriation.'
  },
  {
    id: 'DM-15',
    decision: 'Administratively review an unlawful decision',
    parliament: 'Can amend the governing law to rectify policy gaps',
    unionExecutive: 'Administrative review where authorized by service or business rules',
    stateGovernment: 'Administrative review where authorized by state rules',
    regulator: 'Statutory review where parent Act provides review/appellate tribunals',
    boardOrExamAgency: 'Review under examination bye-laws and grievance portals',
    universityOrInstitution: 'Institutional review through Executive Council / Vice-Chancellor / Ombudsman',
    legalAnnotation: 'Internal administrative remedies must be exercised in accordance with natural justice.'
  },
  {
    id: 'DM-16',
    decision: 'Judicially review legality & constitutionality',
    parliament: 'No, not as a court of law',
    unionExecutive: 'No, executive cannot exercise judicial review of its own legality',
    stateGovernment: 'No',
    regulator: 'No',
    boardOrExamAgency: 'No',
    universityOrInstitution: 'No',
    legalAnnotation: 'Judicial review is the exclusive constitutional prerogative of Supreme Court (Art 32) and High Courts (Art 226).'
  }
];
