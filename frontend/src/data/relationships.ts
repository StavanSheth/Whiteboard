import { RelationshipEdgeData } from '../types';

export const RELATIONSHIPS_DATA: RelationshipEdgeData[] = [
  // ROOT TO SECTION HUBS
  { id: 'REL-ROOT-00', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-00', type: 'COORDINATES', label: 'Establishes Scope & Navigation', verificationStatus: 'verified' },
  { id: 'REL-ROOT-01', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-01', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Supreme Legal Grundnorm', verificationStatus: 'verified' },
  { id: 'REL-ROOT-02', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-02', type: 'LEGISLATES', label: 'Federal Legislative Authority', verificationStatus: 'verified' },
  { id: 'REL-ROOT-03', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-03', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Union Executive Administration', verificationStatus: 'verified' },
  { id: 'REL-ROOT-04', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-04', type: 'COORDINATES', label: 'Inter-Ministerial Portfolios', verificationStatus: 'verified' },
  { id: 'REL-ROOT-05', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-05', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'State & UT Governance (MH Deep-dive)', verificationStatus: 'verified' },
  { id: 'REL-ROOT-06', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-06', type: 'IMPLEMENTS', label: 'Local & District Administration', verificationStatus: 'verified' },
  { id: 'REL-ROOT-07', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-07', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Early Childhood & School Bodies', verificationStatus: 'verified' },
  { id: 'REL-ROOT-08', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-08', type: 'SETS_STANDARDS', label: 'Higher Education Governance & Universities', verificationStatus: 'verified' },
  { id: 'REL-ROOT-09', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-09', type: 'ESTABLISHED_BY_LAW', label: '14 Professional Regulators', verificationStatus: 'verified' },
  { id: 'REL-ROOT-10', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-10', type: 'CONDUCTS_EXAM', label: 'Testing & Recruitment Authorities', verificationStatus: 'verified' },
  { id: 'REL-ROOT-11', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-11', type: 'ACCREDITS', label: 'Quality, Accreditation & Rankings', verificationStatus: 'verified' },
  { id: 'REL-ROOT-12', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-12', type: 'FUNDS', label: 'Finance, Budgets & Scholarships', verificationStatus: 'verified' },
  { id: 'REL-ROOT-13', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-13', type: 'JUDICIALLY_REVIEWS', label: 'Oversight, Rights & Appeals', verificationStatus: 'verified' },
  { id: 'REL-ROOT-14', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-14', type: 'IMPLEMENTS', label: 'Decision-to-Rule Engine', verificationStatus: 'verified' },
  { id: 'REL-ROOT-15', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-15', type: 'SETS_STANDARDS', label: 'Authority Rights Matrix', verificationStatus: 'verified' },
  { id: 'REL-ROOT-16', sourceNodeId: 'ROOT-IND-EDU-GOV', targetNodeId: 'SEC-16', type: 'COORDINATES', label: 'Cross-Board Register & Taxonomy', verificationStatus: 'verified' },

  // SECTION 01: CONSTITUTIONAL FOUNDATIONS
  { id: 'REL-CONST-01', sourceNodeId: 'SEC-01', targetNodeId: 'CONST-ROOT', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Establishes Grundnorm', verificationStatus: 'verified' },
  { id: 'REL-CONST-02', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-21A', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Fundamental Right to Education (6-14)', verificationStatus: 'verified' },
  { id: 'REL-CONST-03', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-45', type: 'ADVISES', label: 'Directive Principle: ECCE below 6', isAdvisory: true, verificationStatus: 'verified' },
  { id: 'REL-CONST-04', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-46', type: 'ADVISES', label: 'Directive Principle: Educational Welfare of Weaker Sections', isAdvisory: true, verificationStatus: 'verified' },
  { id: 'REL-CONST-05', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-246', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Distributes Legislative Powers', verificationStatus: 'verified' },
  { id: 'REL-CONST-06', sourceNodeId: 'ART-246', targetNodeId: 'LIST-I-ENTRY-66', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Exclusive Union Power: Higher Ed Standards', verificationStatus: 'verified' },
  { id: 'REL-CONST-07', sourceNodeId: 'ART-246', targetNodeId: 'LIST-III-ENTRY-25', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Concurrent Power: Education & Universities', verificationStatus: 'verified' },
  { id: 'REL-CONST-08', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-254', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Repugnancy Rule: Union Law Prevails', verificationStatus: 'verified' },
  { id: 'REL-CONST-09', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-368', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Constituent Amendment Power', verificationStatus: 'verified' },
  { id: 'REL-CONST-10', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-14', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Equality & Arbitrariness Prohibition', verificationStatus: 'verified' },
  { id: 'REL-CONST-11', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-15', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Authorizes Reservations (Clauses 4, 5, 6)', verificationStatus: 'verified' },
  { id: 'REL-CONST-12', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-30', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Minority Institutional Rights', verificationStatus: 'verified' },
  { id: 'REL-CONST-13', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-32-226', type: 'JUDICIALLY_REVIEWS', label: 'Writ Remedies for Judicial Review', verificationStatus: 'verified' },
  { id: 'REL-CONST-14', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-73-162', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Union & State Executive Extent', verificationStatus: 'verified' },
  { id: 'REL-CONST-15', sourceNodeId: 'CONST-ROOT', targetNodeId: 'ART-350A', type: 'ADVISES', label: 'Mother Tongue Primary Instruction', isAdvisory: true, verificationStatus: 'verified' },

  // SECTION 02: PARLIAMENT & LAWS
  { id: 'REL-LEG-01', sourceNodeId: 'SEC-02', targetNodeId: 'LEG-PARLIAMENT', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Enacts Central Statutes', verificationStatus: 'verified' },
  { id: 'REL-LEG-02', sourceNodeId: 'LEG-PARLIAMENT', targetNodeId: 'LEG-LOK-SABHA', type: 'LEGISLATES', label: 'Directly Elected Chamber (Money Bills)', verificationStatus: 'verified' },
  { id: 'REL-LEG-03', sourceNodeId: 'LEG-PARLIAMENT', targetNodeId: 'LEG-RAJYA-SABHA', type: 'LEGISLATES', label: 'Federal Chamber of States', verificationStatus: 'verified' },
  { id: 'REL-LEG-04', sourceNodeId: 'LEG-PARLIAMENT', targetNodeId: 'LEG-PRESIDENT-ASSENT', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Presidential Assent (Article 111)', verificationStatus: 'verified' },
  { id: 'REL-LEG-05', sourceNodeId: 'LEG-PARLIAMENT', targetNodeId: 'PROC-LAW-MAKING', type: 'IMPLEMENTS', label: 'Operates 10-Step Law-Making Procedure', verificationStatus: 'verified' },
  { id: 'REL-LEG-06', sourceNodeId: 'LEG-PARLIAMENT', targetNodeId: 'PARL-COMM-EDU', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Detailed Legislative Committee Scrutiny', verificationStatus: 'verified' },
  
  // PARLIAMENT TO STATUTES
  { id: 'REL-LEG-ACT-01', sourceNodeId: 'ART-21A', targetNodeId: 'ACT-RTE-2009', type: 'ESTABLISHED_BY_LAW', label: 'Enacted under Article 21A', verificationStatus: 'verified' },
  { id: 'REL-LEG-ACT-02', sourceNodeId: 'LIST-I-ENTRY-66', targetNodeId: 'ACT-UGC-1956', type: 'ESTABLISHED_BY_LAW', label: 'Enacted under Union Entry 66', verificationStatus: 'verified' },
  { id: 'REL-LEG-ACT-03', sourceNodeId: 'LIST-I-ENTRY-66', targetNodeId: 'ACT-AICTE-1987', type: 'ESTABLISHED_BY_LAW', label: 'Enacted under Union Entry 66', verificationStatus: 'verified' },
  { id: 'REL-LEG-ACT-04', sourceNodeId: 'LIST-III-ENTRY-25', targetNodeId: 'ACT-NMC-2019', type: 'ESTABLISHED_BY_LAW', label: 'Enacted under Concurrent Entry 25 & List I', verificationStatus: 'verified' },
  { id: 'REL-LEG-ACT-05', sourceNodeId: 'LEG-PARLIAMENT', targetNodeId: 'ACT-IIT-1961', type: 'LEGISLATES', label: 'Declares IITs as INIs', verificationStatus: 'verified' },
  { id: 'REL-LEG-ACT-06', sourceNodeId: 'LEG-PARLIAMENT', targetNodeId: 'ACT-CU-2009', type: 'LEGISLATES', label: 'Enacts Central Universities Charters', verificationStatus: 'verified' },

  // SECTION 03 & 04: EXECUTIVE & MINISTRIES
  { id: 'REL-EXEC-01', sourceNodeId: 'SEC-03', targetNodeId: 'EXEC-PRESIDENT', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Union Executive Head (Art 53)', verificationStatus: 'verified' },
  { id: 'REL-EXEC-02', sourceNodeId: 'EXEC-PRESIDENT', targetNodeId: 'EXEC-PM', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Appoints Prime Minister (Art 75)', verificationStatus: 'verified' },
  { id: 'REL-EXEC-03', sourceNodeId: 'EXEC-PM', targetNodeId: 'EXEC-CABINET', type: 'COORDINATES', label: 'Heads Cabinet & Council of Ministers', verificationStatus: 'verified' },
  { id: 'REL-EXEC-04', sourceNodeId: 'EXEC-CABINET', targetNodeId: 'EXEC-MIN-EDU', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Allocates Education Portfolio', verificationStatus: 'verified' },
  { id: 'REL-EXEC-05', sourceNodeId: 'EXEC-MIN-EDU', targetNodeId: 'MIN-EDU', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Political Direction of Ministry', verificationStatus: 'verified' },
  { id: 'REL-EXEC-06', sourceNodeId: 'MIN-EDU', targetNodeId: 'DEPT-SE-L', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Department of School Education & Literacy', verificationStatus: 'verified' },
  { id: 'REL-EXEC-07', sourceNodeId: 'MIN-EDU', targetNodeId: 'DEPT-HE', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Department of Higher Education', verificationStatus: 'verified' },
  { id: 'REL-EXEC-08', sourceNodeId: 'MIN-EDU', targetNodeId: 'ROLE-SECRETARY', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Senior Civil Service Leadership', verificationStatus: 'verified' },
  { id: 'REL-EXEC-09', sourceNodeId: 'MIN-EDU', targetNodeId: 'RULE-AOB-1961', type: 'SUBJECT_TO', label: 'Governed by AoB Rules 1961', verificationStatus: 'verified' },

  // SECTION 04 MINISTRIES
  { id: 'REL-MIN-01', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-WCD', type: 'COORDINATES', label: 'Anganwadi Care & ECCE', verificationStatus: 'verified' },
  { id: 'REL-MIN-02', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-HFW', type: 'COORDINATES', label: 'Medical & Dental Education (NMC/AIIMS)', verificationStatus: 'verified' },
  { id: 'REL-MIN-03', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-MSDE', type: 'COORDINATES', label: 'Vocational Training & ITIs (NCVET)', verificationStatus: 'verified' },
  { id: 'REL-MIN-04', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-DEFENCE', type: 'COORDINATES', label: 'Sainik Schools & NDA', verificationStatus: 'verified' },
  { id: 'REL-MIN-05', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-LAW', type: 'ADVISES', label: 'Legal Scrutiny & NLU Interaction', isAdvisory: true, verificationStatus: 'verified' },
  { id: 'REL-MIN-06', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-AGRI', type: 'COORDINATES', label: 'Agricultural Universities (ICAR)', verificationStatus: 'verified' },
  { id: 'REL-MIN-07', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-TRIBAL', type: 'FUNDS', label: 'Eklavya Residential Schools (EMRS)', verificationStatus: 'verified' },
  { id: 'REL-MIN-08', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-SJE', type: 'FUNDS', label: 'Post-Matric SC Scholarships', verificationStatus: 'verified' },
  { id: 'REL-MIN-09', sourceNodeId: 'SEC-04', targetNodeId: 'MIN-FINANCE', type: 'FUNDS', label: 'Expenditure Sanctions & GFR Rules', verificationStatus: 'verified' },

  // SECTION 05 & 06: STATE & LOCAL (MAHARASHTRA)
  { id: 'REL-ST-01', sourceNodeId: 'SEC-05', targetNodeId: 'ST-GOVERNOR', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Constitutional Head & State Chancellor', verificationStatus: 'verified' },
  { id: 'REL-ST-02', sourceNodeId: 'ST-GOVERNOR', targetNodeId: 'ST-CM', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Appoints CM & Council of Ministers', verificationStatus: 'verified' },
  { id: 'REL-ST-03', sourceNodeId: 'ST-GOVERNOR', targetNodeId: 'ST-LEGISLATURE', type: 'LEGISLATES', label: 'State Assembly & Council Legislation', verificationStatus: 'verified' },
  { id: 'REL-ST-04', sourceNodeId: 'ST-CM', targetNodeId: 'MH-GOV-ROOT', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Government of Maharashtra Portfolios', verificationStatus: 'verified' },
  { id: 'REL-ST-05', sourceNodeId: 'MH-GOV-ROOT', targetNodeId: 'MH-DEPT-SCHOOL', type: 'ADMINISTRATIVELY_OVERSEES', label: 'School Education & Sports Department', verificationStatus: 'verified' },
  { id: 'REL-ST-06', sourceNodeId: 'MH-DEPT-SCHOOL', targetNodeId: 'MH-MSBSHSE', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Statutory State Board (SSC/HSC)', verificationStatus: 'verified' },
  { id: 'REL-ST-07', sourceNodeId: 'MH-DEPT-SCHOOL', targetNodeId: 'MH-SCERT', type: 'ADVISES', label: 'State Academic Authority (Sec 29 RTE)', isAdvisory: true, verificationStatus: 'verified' },
  { id: 'REL-ST-08', sourceNodeId: 'MH-GOV-ROOT', targetNodeId: 'MH-DEPT-HTE', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Higher & Technical Education Department', verificationStatus: 'verified' },
  { id: 'REL-ST-09', sourceNodeId: 'MH-DEPT-HTE', targetNodeId: 'MH-DTE', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Directorate of Technical Education', verificationStatus: 'verified' },
  { id: 'REL-ST-10', sourceNodeId: 'MH-DEPT-HTE', targetNodeId: 'MH-CET-CELL', type: 'ADMINISTRATIVELY_OVERSEES', label: 'State CET Cell for Professional Admissions', verificationStatus: 'verified' },
  { id: 'REL-ST-11', sourceNodeId: 'SEC-05', targetNodeId: 'UT-ADMIN-LG', type: 'ADMINISTRATIVELY_OVERSEES', label: 'UT Direct Administration', verificationStatus: 'verified' },

  // SECTION 06 DISTRICT & LOCAL
  { id: 'REL-DIST-01', sourceNodeId: 'SEC-06', targetNodeId: 'DIST-COLLECTOR', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Chairs District RTE & Exam Law/Order', verificationStatus: 'verified' },
  { id: 'REL-DIST-02', sourceNodeId: 'DIST-COLLECTOR', targetNodeId: 'DEO-OFFICE', type: 'ADMINISTRATIVELY_OVERSEES', label: 'District Education Officer (Inspection/Recognition)', verificationStatus: 'verified' },
  { id: 'REL-DIST-03', sourceNodeId: 'DEO-OFFICE', targetNodeId: 'BEO-OFFICE', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Block Education Officer Sub-district Operations', verificationStatus: 'verified' },
  { id: 'REL-DIST-04', sourceNodeId: 'SEC-06', targetNodeId: 'LOCAL-MUNICIPAL', type: 'IMPLEMENTS', label: 'Civic Urban Primary Schools (Art 243W)', verificationStatus: 'verified' },
  { id: 'REL-DIST-05', sourceNodeId: 'SEC-06', targetNodeId: 'LOCAL-PANCHAYAT', type: 'IMPLEMENTS', label: 'Rural ZP Schools (Art 243G)', verificationStatus: 'verified' },
  { id: 'REL-DIST-06', sourceNodeId: 'ACT-RTE-2009', targetNodeId: 'RTE-SMC', type: 'ESTABLISHED_BY_LAW', label: 'Mandated under RTE Section 21', verificationStatus: 'verified' },
  { id: 'REL-DIST-07', sourceNodeId: 'SEC-06', targetNodeId: 'INST-PRINCIPAL', type: 'IMPLEMENTS', label: 'School Head / Academic Administration', verificationStatus: 'verified' },

  // SECTION 07 SCHOOL EDUCATION BODIES
  { id: 'REL-SCH-01', sourceNodeId: 'DEPT-SE-L', targetNodeId: 'GOV-NCERT', type: 'ADVISES', label: 'Apex Academic Advisor & NCF Designer', isAdvisory: true, verificationStatus: 'verified' },
  { id: 'REL-SCH-02', sourceNodeId: 'DEPT-SE-L', targetNodeId: 'GOV-CBSE', type: 'ADMINISTRATIVELY_OVERSEES', label: 'National Affiliating Board (Class 10/12)', verificationStatus: 'verified' },
  { id: 'REL-SCH-03', sourceNodeId: 'SEC-07', targetNodeId: 'GOV-CISCE', type: 'RECOGNISES_APPROVES', label: 'Recognized National School Board (ICSE/ISC)', verificationStatus: 'verified' },
  { id: 'REL-SCH-04', sourceNodeId: 'DEPT-SE-L', targetNodeId: 'GOV-NIOS', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Open Schooling Framework', verificationStatus: 'verified' },
  { id: 'REL-SCH-05', sourceNodeId: 'DEPT-SE-L', targetNodeId: 'NET-KVS', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Kendriya Vidyalaya Network', verificationStatus: 'verified' },
  { id: 'REL-SCH-06', sourceNodeId: 'DEPT-SE-L', targetNodeId: 'NET-NVS', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Jawahar Navodaya Vidyalaya Network', verificationStatus: 'verified' },
  { id: 'REL-SCH-07', sourceNodeId: 'SEC-07', targetNodeId: 'GOV-NCTE', type: 'SETS_STANDARDS', label: 'Teacher Qualification Standards (B.Ed/ITEP)', verificationStatus: 'verified' },
  { id: 'REL-SCH-08', sourceNodeId: 'SEC-07', targetNodeId: 'ECCE-ECOSYSTEM', type: 'IMPLEMENTS', label: 'Foundational Stage Framework (Age 3-8)', verificationStatus: 'verified' },

  // SECTION 08 HIGHER EDUCATION & UNIVERSITIES
  { id: 'REL-HE-01', sourceNodeId: 'ACT-UGC-1956', targetNodeId: 'GOV-UGC', type: 'ESTABLISHED_BY_LAW', label: 'Statutory Regulator for Universities', verificationStatus: 'verified' },
  { id: 'REL-HE-02', sourceNodeId: 'ACT-AICTE-1987', targetNodeId: 'GOV-AICTE', type: 'ESTABLISHED_BY_LAW', label: 'Statutory Council for Technical Education', verificationStatus: 'verified' },
  { id: 'REL-HE-03', sourceNodeId: 'GOV-UGC', targetNodeId: 'RULE-DEGREE-AWARDS', type: 'SETS_STANDARDS', label: 'Section 22 Degree Specification Monopoly', verificationStatus: 'verified' },
  { id: 'REL-HE-04', sourceNodeId: 'RULE-DEGREE-AWARDS', targetNodeId: 'UNIV-CENTRAL', type: 'AWARDS_QUALIFICATION', label: 'Confer Degrees by Parliamentary Charter', verificationStatus: 'verified' },
  { id: 'REL-HE-05', sourceNodeId: 'RULE-DEGREE-AWARDS', targetNodeId: 'UNIV-STATE-PUB', type: 'AWARDS_QUALIFICATION', label: 'Confer Degrees by State Act', verificationStatus: 'verified' },
  { id: 'REL-HE-06', sourceNodeId: 'RULE-DEGREE-AWARDS', targetNodeId: 'UNIV-DEEMED', type: 'AWARDS_QUALIFICATION', label: 'Confer Degrees under Sec 3 UGC Act', verificationStatus: 'verified' },
  { id: 'REL-HE-07', sourceNodeId: 'RULE-DEGREE-AWARDS', targetNodeId: 'UNIV-STATE-PVT', type: 'AWARDS_QUALIFICATION', label: 'Unitary Degrees under State Private Act', verificationStatus: 'verified' },
  { id: 'REL-HE-08', sourceNodeId: 'SEC-08', targetNodeId: 'INST-INI', type: 'AWARDS_QUALIFICATION', label: 'Autonomous Parliamentary INI Degrees (IITs/AIIMS)', verificationStatus: 'verified' },
  { id: 'REL-HE-09', sourceNodeId: 'UNIV-STATE-PUB', targetNodeId: 'INST-AUTONOMOUS', type: 'RECOGNISES_APPROVES', label: 'Grants Autonomous Academic Status', verificationStatus: 'verified' },
  { id: 'REL-HE-10', sourceNodeId: 'UNIV-STATE-PUB', targetNodeId: 'INST-AFFILIATED', type: 'RECOGNISES_APPROVES', label: 'Affiliates Colleges & Confers Final Degrees', verificationStatus: 'verified' },

  // SECTION 09 PROFESSIONAL REGULATORS
  { id: 'REL-REG-01', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-NMC', type: 'SETS_STANDARDS', label: 'Medical Standards (MBBS / NEET)', verificationStatus: 'verified' },
  { id: 'REL-REG-02', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-NCISM', type: 'SETS_STANDARDS', label: 'Ayurveda & Unani Education (BAMS)', verificationStatus: 'verified' },
  { id: 'REL-REG-03', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-NCH', type: 'SETS_STANDARDS', label: 'Homoeopathy Education (BHMS)', verificationStatus: 'verified' },
  { id: 'REL-REG-04', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-NDC', type: 'SETS_STANDARDS', label: 'Dental Education Standards (BDS)', verificationStatus: 'verified' },
  { id: 'REL-REG-05', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-PCI', type: 'SETS_STANDARDS', label: 'Pharmacy Education & Pharmacist Licensing', verificationStatus: 'verified' },
  { id: 'REL-REG-06', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-INC', type: 'SETS_STANDARDS', label: 'Nursing Standards & Curriculum', verificationStatus: 'verified' },
  { id: 'REL-REG-07', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-BCI', type: 'SETS_STANDARDS', label: 'Law Education & Advocate Enrolment (AIBE)', verificationStatus: 'verified' },
  { id: 'REL-REG-08', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-COA', type: 'SETS_STANDARDS', label: 'Architecture Education & Architect Register (NATA)', verificationStatus: 'verified' },
  { id: 'REL-REG-09', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-RCI', type: 'SETS_STANDARDS', label: 'Disability Special Education (B.Ed Spl)', verificationStatus: 'verified' },
  { id: 'REL-REG-10', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-VCI', type: 'SETS_STANDARDS', label: 'Veterinary Education Standards (BVSc)', verificationStatus: 'verified' },
  { id: 'REL-REG-11', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-ICAR', type: 'ACCREDITS', label: 'Accredits Agricultural Education (NAEAB)', verificationStatus: 'verified' },
  { id: 'REL-REG-12', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-NCVET', type: 'RECOGNISES_APPROVES', label: 'Regulates Vocational Awarding Bodies', verificationStatus: 'verified' },
  { id: 'REL-REG-13', sourceNodeId: 'SEC-09', targetNodeId: 'GOV-ICAI', type: 'AWARDS_QUALIFICATION', label: 'Chartered Accountant Qualification & CoP', verificationStatus: 'verified' },

  // SECTION 10 EXAMINATIONS
  { id: 'REL-EXAM-01', sourceNodeId: 'DEPT-HE', targetNodeId: 'GOV-NTA', type: 'ADMINISTRATIVELY_OVERSEES', label: 'Autonomous Testing Agency Creation', verificationStatus: 'verified' },
  { id: 'REL-EXAM-02', sourceNodeId: 'GOV-NTA', targetNodeId: 'EXAM-JEE-MAIN', type: 'CONDUCTS_EXAM', label: 'Conducts Engineering Entrance Test', verificationStatus: 'verified' },
  { id: 'REL-EXAM-03', sourceNodeId: 'GOV-NTA', targetNodeId: 'EXAM-NEET-UG', type: 'CONDUCTS_EXAM', label: 'Conducts Medical Entrance Test for NMC', verificationStatus: 'verified' },
  { id: 'REL-EXAM-04', sourceNodeId: 'GOV-NTA', targetNodeId: 'EXAM-CUET-UG', type: 'CONDUCTS_EXAM', label: 'Conducts Common University Test', verificationStatus: 'verified' },
  { id: 'REL-EXAM-05', sourceNodeId: 'GOV-NTA', targetNodeId: 'EXAM-UGC-NET', type: 'CONDUCTS_EXAM', label: 'Conducts National Eligibility Test for UGC', verificationStatus: 'verified' },
  { id: 'REL-EXAM-06', sourceNodeId: 'SEC-10', targetNodeId: 'GOV-UPSC', type: 'CONSTITUTIONALLY_EMPOWERS', label: 'Constitutional Commission (Art 315)', verificationStatus: 'verified' },
  { id: 'REL-EXAM-07', sourceNodeId: 'GOV-UPSC', targetNodeId: 'EXAM-UPSC-CSE', type: 'CONDUCTS_EXAM', label: 'Conducts Civil Services Recruitment', verificationStatus: 'verified' },
  { id: 'REL-EXAM-08', sourceNodeId: 'SEC-10', targetNodeId: 'GOV-SSC', type: 'CONDUCTS_EXAM', label: 'Conducts CGL/CHSL Staff Recruitment', verificationStatus: 'verified' },
  { id: 'REL-EXAM-09', sourceNodeId: 'SEC-10', targetNodeId: 'GOV-RRB', type: 'CONDUCTS_EXAM', label: 'Conducts Railway Technical/NTPC Exams', verificationStatus: 'verified' },
  { id: 'REL-EXAM-10', sourceNodeId: 'SEC-10', targetNodeId: 'GOV-IBPS', type: 'CONDUCTS_EXAM', label: 'Conducts Common Bank Exams (PO/Clerk)', verificationStatus: 'verified' },
  { id: 'REL-EXAM-11', sourceNodeId: 'SEC-10', targetNodeId: 'GOV-SBI-RECRUIT', type: 'CONDUCTS_EXAM', label: 'Independent SBI Recruitment', verificationStatus: 'verified' },
  { id: 'REL-EXAM-12', sourceNodeId: 'SEC-10', targetNodeId: 'GOV-RBI-RECRUIT', type: 'CONDUCTS_EXAM', label: 'Independent RBI Grade B Recruitment', verificationStatus: 'verified' },

  // SECTION 11 QUALITY & RANKINGS
  { id: 'REL-QUAL-01', sourceNodeId: 'SEC-11', targetNodeId: 'FRAMEWORK-THREE-PILLARS', type: 'COORDINATES', label: 'Pillars: Recognition vs Accreditation vs Ranking', verificationStatus: 'verified' },
  { id: 'REL-QUAL-02', sourceNodeId: 'GOV-UGC', targetNodeId: 'GOV-NAAC', type: 'ESTABLISHED_BY_LAW', label: 'Established under UGC Act Sec 12(ccc)', verificationStatus: 'verified' },
  { id: 'REL-QUAL-03', sourceNodeId: 'GOV-AICTE', targetNodeId: 'GOV-NBA', type: 'ESTABLISHED_BY_LAW', label: 'Autonomous Technical Programme Accreditation', verificationStatus: 'verified' },
  { id: 'REL-QUAL-04', sourceNodeId: 'MIN-EDU', targetNodeId: 'GOV-NIRF', type: 'RANKS', label: 'Launched Annual National Ranking Framework', verificationStatus: 'verified' },
  { id: 'REL-QUAL-05', sourceNodeId: 'SEC-11', targetNodeId: 'INST-IQAC', type: 'IMPLEMENTS', label: 'Internal Institutional Quality Cell', verificationStatus: 'verified' },

  // SECTION 12 FINANCE
  { id: 'REL-FIN-01', sourceNodeId: 'SEC-12', targetNodeId: 'FIN-UNION-BUDGET', type: 'LEGISLATES', label: 'Constitutional Budgetary Appropriation', verificationStatus: 'verified' },
  { id: 'REL-FIN-02', sourceNodeId: 'FIN-UNION-BUDGET', targetNodeId: 'FIN-SCHEME-CSS', type: 'FUNDS', label: 'Funds Samagra Shiksha & PM-USHA', verificationStatus: 'verified' },
  { id: 'REL-FIN-03', sourceNodeId: 'SEC-12', targetNodeId: 'FIN-SCHOLARSHIPS', type: 'FUNDS', label: 'National Scholarship Portal (NSP DBT)', verificationStatus: 'verified' },
  { id: 'REL-FIN-04', sourceNodeId: 'SEC-12', targetNodeId: 'FIN-RESEARCH-COUNCILS', type: 'FUNDS', label: 'Peer-Reviewed Extramural Research Grants', verificationStatus: 'verified' },
  { id: 'REL-FIN-05', sourceNodeId: 'SEC-12', targetNodeId: 'GOV-CAG', type: 'AUDITS', label: 'Supreme Financial Audit (Articles 148-151)', verificationStatus: 'verified' },
  { id: 'REL-FIN-06', sourceNodeId: 'GOV-CAG', targetNodeId: 'MIN-EDU', type: 'AUDITS', label: 'Audits Ministry & Autonomous Accounts', verificationStatus: 'verified' },

  // SECTION 13 OVERSIGHT & REMEDIES
  { id: 'REL-OVR-01', sourceNodeId: 'SEC-13', targetNodeId: 'CRT-SC', type: 'JUDICIALLY_REVIEWS', label: 'Apex Court of Record (Article 32)', verificationStatus: 'verified' },
  { id: 'REL-OVR-02', sourceNodeId: 'SEC-13', targetNodeId: 'CRT-HC', type: 'JUDICIALLY_REVIEWS', label: 'State Constitutional Writs (Article 226)', verificationStatus: 'verified' },
  { id: 'REL-OVR-03', sourceNodeId: 'ACT-RTE-2009', targetNodeId: 'GOV-NCPCR', type: 'ESTABLISHED_BY_LAW', label: 'Statutory RTE Child Rights Monitor (Sec 31)', verificationStatus: 'verified' },
  { id: 'REL-OVR-04', sourceNodeId: 'SEC-13', targetNodeId: 'GOV-CVC', type: 'AUDITS', label: 'Vigilance & Anti-Corruption Scrutiny', verificationStatus: 'verified' },
  { id: 'REL-OVR-05', sourceNodeId: 'SEC-13', targetNodeId: 'GOV-CIC', type: 'REVIEWS_APPEALS', label: 'RTI Transparency Second Appeals', verificationStatus: 'verified' },
  { id: 'REL-OVR-06', sourceNodeId: 'SEC-13', targetNodeId: 'PROC-COMPLAINT-FLOW', type: 'IMPLEMENTS', label: 'Structured Dispute Routing Algorithm', verificationStatus: 'verified' },

  // SECTION 14 REFORM ENGINE
  { id: 'REL-REF-01', sourceNodeId: 'SEC-14', targetNodeId: 'ENGINE-REFORM-7STEPS', type: 'IMPLEMENTS', label: 'The 7-Stage Reform Engine', verificationStatus: 'verified' },
  { id: 'REL-REF-02', sourceNodeId: 'ENGINE-REFORM-7STEPS', targetNodeId: 'INSTRUMENTS-INVENTORY', type: 'COORDINATES', label: 'Select from 11 Legal Instruments', verificationStatus: 'verified' },
  { id: 'REL-REF-03', sourceNodeId: 'ENGINE-REFORM-7STEPS', targetNodeId: 'WALKTHROUGH-ENTRANCE-EXAM', type: 'IMPLEMENTS', label: 'Demonstrates Entrance Exam Amendment', verificationStatus: 'verified' },

  // CROSS-BOARD TIES (WHITEBOARDS 2 & 3)
  { id: 'REL-XB-01', sourceNodeId: 'ACT-IIT-1961', targetNodeId: 'INST-INI', type: 'CONNECTS_TO_BOARD_2', label: 'Connects to IIT Institution Profile (Board 2)', verificationStatus: 'verified' },
  { id: 'REL-XB-02', sourceNodeId: 'EXAM-JEE-MAIN', targetNodeId: 'EXAM-UPSC-CSE', type: 'CONNECTS_TO_BOARD_3', label: 'Connects to Engineering to Civil Services Career Route (Board 3)', verificationStatus: 'verified' },
  { id: 'REL-XB-03', sourceNodeId: 'GOV-NMC', targetNodeId: 'EXAM-NEET-UG', type: 'CONNECTS_TO_BOARD_3', label: 'Connects to Medical Career Admission Route (Board 3)', verificationStatus: 'verified' },
  { id: 'REL-XB-04', sourceNodeId: 'GOV-BCI', targetNodeId: 'EXAM-AIBE', type: 'CONNECTS_TO_BOARD_3', label: 'Connects to Legal Practice Enrolment (Board 3)', verificationStatus: 'verified' },
  { id: 'REL-XB-05', sourceNodeId: 'MH-CET-CELL', targetNodeId: 'MH-DTE', type: 'ADMINISTERS_ADMISSION', label: 'Centralized CAP Seat Allotment (Maha CET)', verificationStatus: 'verified' }
];
