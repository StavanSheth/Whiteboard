/**
 * Whiteboard 7: How to Judge a Person - Human Connection, Character Assessment & Social Intelligence
 * Grounded in Adam Grant's organizational psychology framework, social cognitive theory,
 * and the Google AI Pro / NotebookLM dual-track learning methodology.
 *
 * 7 Primary Branches:
 * 1. Foundations of Human Connection (HC-*) -> Lesson 1
 * 2. Relationship Types: Ally, Pal, Companion (RT-*) -> Lesson 2
 * 3. Conversation Design & Rapport Building (CB-*) -> Lesson 3
 * 4. Trust, Vulnerability & Reciprocity (TR-*) -> Lesson 4
 * 5. Character Assessment, Manipulation & Power (CA-*) -> Lesson 5
 * 6. Intuition & Judgment (IJ-*) -> Lesson 6
 * 7. Practical Applications (AP-*) -> Lesson 7
 */

import { EducationNode, RelationshipEdgeData, SourceRecord, SectionMeta } from '../types';

export const SECTION_METAS_V7: SectionMeta[] = [
  {
    id: 'SEC-JUDGE-01',
    number: '01',
    title: 'Foundations of Human Connection & The Science of Resonance',
    subtitle: 'What a vibe means, flow-like engagement, and distinguishing conversational pleasure from trust',
    summary: 'Scientific foundations of human resonance. A pleasant interaction or effortless vibe demonstrates conversational chemistry, but does not constitute evidence of integrity, reliability, or psychological safety.',
    iconName: 'Sparkles',
    expectedSubsections: ['The Anatomy of a Vibe', 'Conversational Flow State', 'The Vibe vs Trust Fallacy', 'Presence & Attunement'],
    expectedAuthorities: ['JUDGE-HC-001', 'JUDGE-HC-002', 'JUDGE-HC-003', 'JUDGE-HC-004']
  },
  {
    id: 'SEC-JUDGE-02',
    number: '02',
    title: 'Relationship Types: Ally, Pal, and Companion',
    subtitle: 'The tripartite relationship taxonomy: shared goals, shared interests, and shared values',
    summary: 'Adam Grant\'s relationship taxonomy categorizing human bonds into Allies (linked by mutual objectives), Pals (connected by recreational activities/hobbies), and Companions (anchored in deep core values). Misaligned expectations between these tiers cause relationship strain.',
    iconName: 'Users',
    expectedSubsections: ['The Tripartite Taxonomy', 'The Ally (Shared Goals)', 'The Pal (Shared Interests)', 'The Companion (Shared Values)', 'Expectation Misalignment Traps'],
    expectedAuthorities: ['JUDGE-RT-000', 'JUDGE-RT-001', 'JUDGE-RT-002', 'JUDGE-RT-003', 'JUDGE-RT-004']
  },
  {
    id: 'SEC-JUDGE-03',
    number: '03',
    title: 'Conversation Design & Diagnostic Inquiry',
    subtitle: 'Bypassing small talk through curiosity, psychological safety, and targeted questioning',
    summary: 'Intentional dialogue engineering. Replacing perfunctory pleasantries with open, diagnostic questions that reveal internal motivations, learning habits, and authentic priorities without inducing interrogation defensiveness.',
    iconName: 'MessageSquare',
    expectedSubsections: ['Surface Small Talk vs Deep Talk', 'The Three Diagnostic Questions', 'Active Listening vs Conversational Narcissism', 'Designing Safe Openings'],
    expectedAuthorities: ['JUDGE-CB-001', 'JUDGE-CB-002', 'JUDGE-CB-003', 'JUDGE-CB-004', 'JUDGE-CB-005']
  },
  {
    id: 'SEC-JUDGE-04',
    number: '04',
    title: 'Trust, Vulnerability & Reciprocity Dynamics',
    subtitle: 'Calibrated disclosure, psychological boundaries, and incremental mutual exposure',
    summary: 'The mechanics of interpersonal trust. Vulnerability without boundaries is oversharing or emotional manipulation; healthy trust is built through step-by-step reciprocal disclosure tested over time across varying contexts.',
    iconName: 'ShieldCheck',
    expectedSubsections: ['Voluntary Vulnerability', 'Boundary Setting & Emotional Flooding', 'Reciprocal Disclosure Loop', 'The Asymmetrical Confession Trap'],
    expectedAuthorities: ['JUDGE-TR-001', 'JUDGE-TR-002', 'JUDGE-TR-003', 'JUDGE-TR-004']
  },
  {
    id: 'SEC-JUDGE-05',
    number: '05',
    title: 'Character Assessment, Manipulation & Power Dynamics',
    subtitle: 'Kissing up vs kicking down, asymmetry observations, and the role-model benchmark',
    summary: 'Evaluating true character through structural power discrepancies. How a person treats service staff, subordinates, and those who can do nothing for them reveals fundamental moral architecture far more accurately than how they interact with authority figures.',
    iconName: 'AlertTriangle',
    expectedSubsections: ['Kissing Up vs Kicking Down', 'The Power Asymmetry Lens', 'Stated Values vs Observed Actions', 'The Role Model Inquiry', 'The Toxic Giver / Strategic Flatterer'],
    expectedAuthorities: ['JUDGE-CA-001', 'JUDGE-CA-002', 'JUDGE-CA-003', 'JUDGE-CA-004', 'JUDGE-CA-005']
  },
  {
    id: 'SEC-JUDGE-06',
    number: '06',
    title: 'Intuition, Cognitive Biases & Evidence Updating',
    subtitle: 'Treating first impressions as hypotheses rather than verdicts; overcoming the halo effect',
    summary: 'Bayesian updating of social judgment. First impressions and intuitive gut vibes are cognitive shortcuts prone to charm, similarity bias, and halo effects. Sound judgment requires gathering longitudinal behavioral evidence and willingly revising initial perceptions.',
    iconName: 'Compass',
    expectedSubsections: ['The Halo Effect & Charisma Distortion', 'Similarity Bias & In-Group Blindspots', 'Bayesian Evidence Updating', 'Gut Feelings as Hypotheses'],
    expectedAuthorities: ['JUDGE-IJ-001', 'JUDGE-IJ-002', 'JUDGE-IJ-003', 'JUDGE-IJ-004']
  },
  {
    id: 'SEC-JUDGE-07',
    number: '07',
    title: 'Practical Real-World Applications & Life Scenarios',
    subtitle: 'Applying character assessment across friendships, dating, hiring, leadership, and mentorship',
    summary: 'Translating principles into concrete social intelligence. Diagnostic frameworks for selecting life partners, identifying workplace takers vs givers, forming resilient teams, and preventing toxic relationship entanglements.',
    iconName: 'Briefcase',
    expectedSubsections: ['Friendship Selection & Pruning', 'Dating & Romantic Partner Vetting', 'Hiring & Team Culture Selection', 'Mentorship & Advisory Networks', 'Handling Unaligned Bonds'],
    expectedAuthorities: ['JUDGE-AP-001', 'JUDGE-AP-002', 'JUDGE-AP-003', 'JUDGE-AP-004', 'JUDGE-AP-005']
  }
];

export const NODES_V7: EducationNode[] = [
  // ==========================================
  // SECTION 1: FOUNDATIONS OF HUMAN CONNECTION
  // ==========================================
  {
    id: 'JUDGE-HC-001',
    type: 'process',
    title: 'The Anatomy of a Vibe: Neurological Resonance',
    abbreviation: 'VIBE',
    sectionId: 'SEC-JUDGE-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'education',
    summary: 'A "vibe" is subconscious behavioral synchrony and perceived emotional ease, not proof of moral integrity or long-term alignment.',
    mandate: [
      'Explain emotional resonance and behavioral mimicry during initial interpersonal contact',
      'Differentiate rapid cognitive ease from deep psychological safety'
    ],
    powers: [
      'Establishes immediate conversational rapport',
      'Reduces initial social friction and anxiety in unfamiliar settings'
    ],
    limitations: [
      'Provides zero diagnostic information about ethical integrity or loyalty',
      'Vulnerable to deliberate mimicry by high-charm manipulators'
    ],
    characterAssessmentDetails: {
      conceptId: 'HC-001',
      branch: 'Foundations',
      relatedLesson: 'Lesson 1: The science and psychology of connection',
      definition: 'A subjective state of positive emotional resonance, behavioral synchrony, and cognitive ease during interpersonal interaction.',
      principle: 'Conversational chemistry is a measure of mutual comfort and communication rhythm, not a measure of character or trustworthiness.',
      techniqueOrQuestion: 'Notice when an effortless vibe is present, and immediately categorize it as rapport rather than trust: "Do I feel safe because this person is trustworthy, or simply because they are charming and articulate?"',
      practicalScenario: 'Meeting a charismatic candidate during a hiring interview who shares your sense of humor and conversational cadence. You feel an instant click, but their past project references indicate a history of undermining teammates.',
      limitationsAndCaveats: 'Chemistry can be easily fabricated by skilled communicators. Over-indexing on early vibes leads to severe hiring and dating blindspots.',
      crossLinks: ['JUDGE-HC-003', 'JUDGE-IJ-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-HC-002',
    type: 'process',
    title: 'Conversational Flow State & Attunement',
    abbreviation: 'FLOW',
    sectionId: 'SEC-JUDGE-01',
    sectionNumber: '01',
    parentId: 'JUDGE-HC-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Psychological flow in dialogue occurs when two people exchange thoughts with low self-monitoring and high reciprocity.',
    mandate: [
      'Facilitate open cognitive exploration where time distortion occurs during dialogue',
      'Foster mutual curiosity without defensive posture'
    ],
    powers: [
      'Unlocks creative problem solving and collaborative brainstorming',
      'Allows both parties to lower self-presentation defenses'
    ],
    limitations: [
      'Can be mistaken for deep mutual commitment',
      'Disappears rapidly when conflicting incentives emerge'
    ],
    characterAssessmentDetails: {
      conceptId: 'HC-002',
      branch: 'Foundations',
      relatedLesson: 'Lesson 1: The science and psychology of connection',
      definition: 'A state of deep shared engagement in conversation characterized by temporal distortion, high responsiveness, and seamless back-and-forth exchanges.',
      principle: 'Flow is an optimal experiential state of communication, but it can exist purely within intellectual or entertainment domains without moral alignment.',
      techniqueOrQuestion: 'Assess whether the flow is bilateral or performative: "Are we both building upon each other\'s ideas, or is one person dominating the conversational spotlight while the other simply feeds cues?"',
      practicalScenario: 'Discussing philosophy or technology with an acquaintance for three hours late into the night. While the flow was exhilarating, neither party made commitments or shared vulnerable personal truths.',
      limitationsAndCaveats: 'Great debaters and performers can generate conversational flow with almost anyone. Flow confirms conversational agility, not mutual reliability.',
      crossLinks: ['JUDGE-CB-001', 'JUDGE-TR-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-HC-003',
    type: 'oversight',
    title: 'The Vibe vs. Trust Fallacy',
    abbreviation: 'VIBE-FALLACY',
    sectionId: 'SEC-JUDGE-01',
    sectionNumber: '01',
    parentId: 'JUDGE-HC-001',
    level: 'constitutional',
    category: 'education',
    summary: 'The critical cognitive error of conflating an enjoyable, entertaining conversation with verified trustworthiness and dependability.',
    mandate: [
      'Guard against cognitive conflation of charismatic warmth with moral reliability',
      'Enforce behavioral verification before extending vulnerability or resources'
    ],
    powers: [
      'Prevents premature vulnerability and resource commitments',
      'Protects teams and individuals from superficial charmers and takers'
    ],
    limitations: [
      'Can lead to initial skepticism if not balanced with warmth',
      'Requires active mental effort to resist the halo effect'
    ],
    characterAssessmentDetails: {
      conceptId: 'HC-003',
      branch: 'Foundations',
      relatedLesson: 'Lesson 1: The science and psychology of connection',
      definition: 'The cognitive bias wherein an individual assumes that because someone is engaging, fun, or emotionally easy to converse with, they are also honest, ethical, and dependable.',
      principle: 'Enjoyable conversations are evidence of social skill; trust is evidence of consistent integrity over time under adversity.',
      techniqueOrQuestion: 'The Trust Audit Test: "If this person\'s self-interest directly collided with mine tomorrow, what actual evidence do I have that they would act fairly rather than opportunistically?"',
      practicalScenario: 'Investing in a startup co-founder because dinners with them are always lively and inspirational, only to discover later that they fail to meet deadlines and obscure financial books.',
      limitationsAndCaveats: 'Do not swing into cynical paranoia. The goal is not to eliminate fun conversations, but to separate social chemistry from financial, emotional, or professional reliance.',
      crossLinks: ['JUDGE-TR-001', 'JUDGE-CA-001', 'JUDGE-IJ-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-HC-004',
    type: 'process',
    title: 'Presence & Psychological Attunement',
    abbreviation: 'ATTUNE',
    sectionId: 'SEC-JUDGE-01',
    sectionNumber: '01',
    parentId: 'JUDGE-HC-001',
    level: 'constitutional',
    category: 'education',
    summary: 'The discipline of focused listening and emotional tracking that signals respect without transactional expectations.',
    mandate: [
      'Provide undivided attention in dialogue without device distraction',
      'Track subtle emotional micro-expressions and shifts in vocal tone'
    ],
    powers: [
      'Signals safety and invites authentic disclosure',
      'Reveals discrepancies between a person\'s spoken words and underlying feelings'
    ],
    limitations: [
      'Emotionally demanding over prolonged interactions',
      'Can be weaponized by manipulative listeners to extract leverage'
    ],
    characterAssessmentDetails: {
      conceptId: 'HC-004',
      branch: 'Foundations',
      relatedLesson: 'Lesson 1: The science and psychology of connection',
      definition: 'The behavioral practice of dedicating undivided perceptual attention and emotional resonance to another human being without multitasking or agenda deflection.',
      principle: 'True attunement cannot be faked over time; people instinctively detect when attention is authentic versus instrumental.',
      techniqueOrQuestion: 'Observe eye contact, body orientation, and whether the person checks their phone when an alert sounds: "Is their presence conditional on my status, or do they grant complete focus regardless?"',
      practicalScenario: 'Having coffee with a senior mentor who puts their phone face-down in their bag and does not look around the room for more important people while you speak.',
      limitationsAndCaveats: 'High attunement does not guarantee agreement; it only guarantees accurate perceptual reception.',
      crossLinks: ['JUDGE-CB-003', 'JUDGE-CA-002']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 2: RELATIONSHIP TYPES
  // ==========================================
  {
    id: 'JUDGE-RT-000',
    type: 'constitutional',
    title: 'The Tripartite Taxonomy of Human Bonds',
    abbreviation: 'TAXONOMY',
    sectionId: 'SEC-JUDGE-02',
    sectionNumber: '02',
    level: 'constitutional',
    category: 'education',
    summary: 'Adam Grant\'s framework dividing social ties into Allies (Shared Goals), Pals (Shared Interests), and Companions (Shared Values).',
    mandate: [
      'Classify human relationships by their foundational adhesive mechanism',
      'Eliminate friction caused by applying wrong expectations to specific bonds'
    ],
    powers: [
      'Clarifies relationship boundaries and expected behavioral norms',
      'Prevents deep heartbreak and professional disillusionment'
    ],
    limitations: [
      'Relationships can transition between categories over time and shared experience',
      'Does not capture temporary transactional interactions'
    ],
    characterAssessmentDetails: {
      conceptId: 'RT-000',
      branch: 'Relationship Types',
      relatedLesson: 'Lesson 2: Ally, Pal, and Companion',
      definition: 'A structural classification of human relationships based on the primary underlying adhesive that binds the two individuals together: Objectives (Ally), Hobbies/Entertainment (Pal), or Moral Principles (Companion).',
      principle: 'Mismatched expectations cause the vast majority of relationship heartbreak and workplace resentment; clarity of classification restores peace.',
      techniqueOrQuestion: 'The Tripartite Audit: "If we remove the project (Goal) and the fun (Interest), do our foundational life principles and ethics (Values) still connect us?"',
      practicalScenario: 'A professional co-worker whom you considered a close friend suddenly stops answering messages when they change companies. You treated them as a Companion; in reality, the bond was rooted as an Ally.',
      limitationsAndCaveats: 'Bonds are dynamic, not static cages. An Ally can graduate into a Companion, but this requires longitudinal testing of shared values beyond mutual utility.',
      crossLinks: ['JUDGE-RT-001', 'JUDGE-RT-002', 'JUDGE-RT-003', 'JUDGE-RT-004']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-RT-001',
    type: 'department',
    title: 'The Ally: Shared Goals & Strategic Alignment',
    abbreviation: 'ALLY',
    sectionId: 'SEC-JUDGE-02',
    sectionNumber: '02',
    parentId: 'JUDGE-RT-000',
    level: 'constitutional',
    category: 'education',
    summary: 'Bonds anchored in mutual objectives, professional collaboration, or common adversity. When the goal ends, the bond naturally cools.',
    mandate: [
      'Drive tactical cooperation and mutual support toward a shared milestone',
      'Provide mutual leverage in competitive or high-stakes environments'
    ],
    powers: [
      'Highly effective for career execution and team achievements',
      'Establishes clear reciprocity and accountability'
    ],
    limitations: [
      'Dissolves or diminishes when shared goals diverge or are completed',
      'Cannot bear heavy personal emotional vulnerability without awkwardness'
    ],
    characterAssessmentDetails: {
      conceptId: 'RT-001',
      branch: 'Relationship Types',
      relatedLesson: 'Lesson 2: Ally, Pal, and Companion',
      definition: 'A relationship founded upon mutual goals, common missions, or shared opposition to an obstacle.',
      principle: 'Allies are united by destination. They have your back because your success accelerates their own, or because you are fighting the same battle.',
      techniqueOrQuestion: 'Identify the common objective: "What is the specific goal we are pursuing together? If this project disappeared tomorrow, would our interaction remain active or fade?"',
      practicalScenario: 'Two startup executives fighting for market share in an aggressive industry. They communicate daily, protect each other in board meetings, and push through grueling work sprints.',
      limitationsAndCaveats: 'Do not demand personal companionship from an ally. Confusing an ally for a companion leads to feelings of betrayal when they make decisions based on strategic self-interest.',
      crossLinks: ['JUDGE-RT-004', 'JUDGE-AP-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-RT-002',
    type: 'department',
    title: 'The Pal: Shared Interests & Experiential Joy',
    abbreviation: 'PAL',
    sectionId: 'SEC-JUDGE-02',
    sectionNumber: '02',
    parentId: 'JUDGE-RT-000',
    level: 'constitutional',
    category: 'education',
    summary: 'Bonds anchored in hobbies, recreation, sports, humor, and fun. Essential for joy and decompression, but not designed for crisis counseling.',
    mandate: [
      'Provide lighthearted social connection and recreational engagement',
      'Foster laughter, shared leisure, and stress reduction'
    ],
    powers: [
      'Energizes daily life without heavy emotional burdens',
      'Easy to maintain around shared activities and venues'
    ],
    limitations: [
      'Struggles when serious life crises, grief, or ethical conflicts occur',
      'Can feel dismissive if forced to engage with heavy vulnerability'
    ],
    characterAssessmentDetails: {
      conceptId: 'RT-002',
      branch: 'Relationship Types',
      relatedLesson: 'Lesson 2: Ally, Pal, and Companion',
      definition: 'A relationship founded upon shared activities, recreational interests, humor, sports, or hobbies.',
      principle: 'Pals are united by entertainment and shared activities. They make life joyful, but their commitment is indexed to the fun of the activity.',
      techniqueOrQuestion: 'The Decompression Test: "Do we enjoy playing tennis, watching films, or bantering together? Do I feel recharged after hanging out, without needing to unpack deep existential dilemmas?"',
      practicalScenario: 'A group of friends who meet every Saturday morning for cycling and breakfast. They share banter, race each other, and enjoy coffee, but rarely discuss their deepest insecurities or marriage struggles.',
      limitationsAndCaveats: 'Never look down on a pal bond as shallow. Pals are vital for human mental health. The mistake is asking a pal to be a therapist or life counselor.',
      crossLinks: ['JUDGE-RT-004', 'JUDGE-AP-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-RT-003',
    type: 'department',
    title: 'The Companion: Shared Values & Moral Anchoring',
    abbreviation: 'COMPANION',
    sectionId: 'SEC-JUDGE-02',
    sectionNumber: '02',
    parentId: 'JUDGE-RT-000',
    level: 'constitutional',
    category: 'education',
    summary: 'The rarest, deepest bond. Grounded in shared core values, moral principles, and unconditional psychological safety.',
    mandate: [
      'Provide unconditional psychological support across decades and life stages',
      'Hold up an honest moral mirror when you stray from your highest self'
    ],
    powers: [
      'Survives geographic distance, career changes, and life transitions',
      'Withstands deep conflict, vulnerability, and personal failure'
    ],
    limitations: [
      'Extremely rare; typically limited to a handful of individuals in a lifetime',
      'Requires substantial emotional investment and complete authenticity'
    ],
    characterAssessmentDetails: {
      conceptId: 'RT-003',
      branch: 'Relationship Types',
      relatedLesson: 'Lesson 2: Ally, Pal, and Companion',
      definition: 'A relationship founded upon shared core values, ethical alignment, mutual unconditional regard, and authentic emotional safety.',
      principle: 'Companions are united by values. Even if your goals diverge and you no longer share the same daily hobbies, you remain deeply bonded because your fundamental ethical orientation is identical.',
      techniqueOrQuestion: 'The 3 AM Crisis / Truth-Teller Test: "If I suffered a catastrophic career failure or moral crisis, could I call this person at 3 AM knowing they would offer compassion while holding me accountable to truth?"',
      practicalScenario: 'A childhood friend whom you only see twice a year due to living on different continents, but within five minutes of meeting you resume total vulnerability and complete trust with zero posturing.',
      limitationsAndCaveats: 'True companions are rare. You cannot force a pal or ally to become a companion simply by over-disclosing your trauma.',
      crossLinks: ['JUDGE-RT-004', 'JUDGE-TR-001', 'JUDGE-AP-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-RT-004',
    type: 'oversight',
    title: 'Expectation Misalignment & Boundary Traps',
    abbreviation: 'MISALIGN',
    sectionId: 'SEC-JUDGE-02',
    sectionNumber: '02',
    parentId: 'JUDGE-RT-000',
    level: 'constitutional',
    category: 'education',
    summary: 'The friction that occurs when one party treats a bond as a Companion while the other perceives it as an Ally or Pal.',
    mandate: [
      'Audit mismatched assumptions in personal and professional relationships',
      'Recalibrate expectations to match the actual nature of the bond'
    ],
    powers: [
      'Cures resentment and eliminates feelings of one-sided betrayal',
      'Preserves valuable ally and pal relationships by setting realistic limits'
    ],
    limitations: [
      'Requires accepting that someone may value you less intimately than you value them',
      'Demands emotional maturity and restraint'
    ],
    characterAssessmentDetails: {
      conceptId: 'RT-004',
      branch: 'Relationship Types',
      relatedLesson: 'Lesson 2: Ally, Pal, and Companion',
      definition: 'The interpersonal friction, disappointment, and sense of betrayal caused by projecting Companion expectations onto an Ally or Pal relationship.',
      principle: 'Bitterness is the gap between expectations and reality; aligning your expectations with the bond\'s true category dissolves resentment.',
      techniqueOrQuestion: 'The Category Audit: "Am I angry with this person because they broke an explicit commitment, or because I expected Companion loyalty from an Ally or Pal?"',
      practicalScenario: 'Feeling bitter because a gym buddy (Pal) did not visit you in the hospital after major surgery, or because a business colleague (Ally) chose a better job opportunity that left your team short-staffed.',
      limitationsAndCaveats: 'Category mismatch is not always malicious. Often both people are decent; they simply define the boundary of the relationship differently.',
      crossLinks: ['JUDGE-RT-001', 'JUDGE-RT-002', 'JUDGE-RT-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 3: CONVERSATION DESIGN
  // ==========================================
  {
    id: 'JUDGE-CB-001',
    type: 'process',
    title: 'Surface Small Talk vs. Deep Talk Engineering',
    abbreviation: 'DEEP-TALK',
    sectionId: 'SEC-JUDGE-03',
    sectionNumber: '03',
    level: 'constitutional',
    category: 'education',
    summary: 'Moving beyond scripted societal scripts ("What do you do?") into questions that reveal values, struggles, and passions.',
    mandate: [
      'Deconstruct shallow conversational scripts and ritualized pleasantries',
      'Design conversational entry points that probe worldview and emotional reality'
    ],
    powers: [
      'Accelerates authentic connection in minutes rather than months',
      'Disarms superficial self-marketing and executive posturing'
    ],
    limitations: [
      'Must be executed with warmth to avoid feeling like a formal interrogation',
      'Inappropriate in strictly regulated procedural interactions'
    ],
    characterAssessmentDetails: {
      conceptId: 'CB-001',
      branch: 'Conversation Design',
      relatedLesson: 'Lesson 3: Asking better questions',
      definition: 'The intentional practice of steering dialogue away from transactional role summaries toward personal narratives, learning curves, and core beliefs.',
      principle: 'People are bored by scripts. Asking meaningful, unexpected questions signals authentic interest and invites genuine disclosure.',
      techniqueOrQuestion: 'The Pivot Technique: Replace "What do you do for work?" with "What project or curiosity is consuming your brain right now outside of work?"',
      practicalScenario: 'At a corporate conference mixer, instead of asking about company titles, you ask: "What was the most surprising thing you learned this month that changed your perspective?"',
      limitationsAndCaveats: 'Read the room. If the other person shows signs of acute stress or discomfort, step back to lighter topics. Depth cannot be forced.',
      crossLinks: ['JUDGE-CB-002', 'JUDGE-TR-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-CB-002',
    type: 'process',
    title: 'The Three Diagnostic Questions',
    abbreviation: '3-QUESTIONS',
    sectionId: 'SEC-JUDGE-03',
    sectionNumber: '03',
    parentId: 'JUDGE-CB-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Targeted inquiries that reveal character, learning humility, and moral perspective without generating defensiveness.',
    mandate: [
      'Evaluate intellectual humility and responsiveness to feedback',
      'Examine sources of personal inspiration and role-model selection',
      'Uncover past mistakes and genuine capacity for self-correction'
    ],
    powers: [
      'Exposes narcissism, rigidity, or authentic wisdom in under ten minutes',
      'Provides actionable data on how the person handles growth and challenge'
    ],
    limitations: [
      'Can be rehearsed by career politicians and PR-trained individuals',
      'Requires active follow-up questions to test sincerity'
    ],
    characterAssessmentDetails: {
      conceptId: 'CB-002',
      branch: 'Conversation Design',
      relatedLesson: 'Lesson 3: Asking better questions',
      definition: 'A trio of psychological questions designed to diagnose learning capacity, values orientation, and intellectual humility.',
      principle: 'What someone admires reveals their aspirational character; how they talk about their mistakes reveals their self-awareness.',
      techniqueOrQuestion: 'Question 1: "What is an opinion you held strongly five years ago that you have changed your mind about?" Question 2: "Who has shaped your standards of excellence the most?" Question 3: "What is the most useful piece of critical feedback you have ever received?"',
      practicalScenario: 'In an executive interview, the candidate says they have never changed their mind because their instincts are always right. This immediately flags intellectual rigidity and inability to adapt.',
      limitationsAndCaveats: 'Listen not just to the answer, but to the humility of the tone. A fabricated answer often highlights a superficial "humble brag" rather than real vulnerability.',
      crossLinks: ['JUDGE-CA-004', 'JUDGE-IJ-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-CB-003',
    type: 'process',
    title: 'Active Listening vs. Conversational Narcissism',
    abbreviation: 'SHIFT-RESP',
    sectionId: 'SEC-JUDGE-03',
    sectionNumber: '03',
    parentId: 'JUDGE-CB-001',
    level: 'constitutional',
    category: 'education',
    summary: 'The distinction between "shift responses" (grabbing the spotlight) and "support responses" (encouraging the other person to go deeper).',
    mandate: [
      'Identify whether conversational turns are used to explore or self-aggrandize',
      'Cultivate supportive questioning that validates the speaker\'s narrative'
    ],
    powers: [
      'Quickly unmasks covert ego and self-absorption',
      'Deepens psychological comfort and conversational depth'
    ],
    limitations: [
      'Over-supporting without ever sharing can create an unbalanced dynamic',
      'Requires genuine curiosity rather than mechanical adherence'
    ],
    characterAssessmentDetails: {
      conceptId: 'CB-003',
      branch: 'Conversation Design',
      relatedLesson: 'Lesson 3: Asking better questions',
      definition: 'The behavioral pattern of using communication turns: Shift responses continually pivot the topic back to oneself, while Support responses encourage the speaker to expand.',
      principle: 'A giver listens to understand; a taker listens only to find an entry point to talk about themselves.',
      techniqueOrQuestion: 'The Shift/Support Tally: When you share an experience, observe whether they say: "That reminds me of when I did..." (Shift) versus "What did you do next, and how did that make you feel?" (Support).',
      practicalScenario: 'You mention you are training for a half-marathon. Person A says: "I ran a full marathon in Boston three years ago, it was brutal." Person B says: "What inspired you to sign up for that distance?"',
      limitationsAndCaveats: 'Sharing relatable stories is a normal part of connection (reciprocity); conversational narcissism occurs when the topic is never returned to the original speaker.',
      crossLinks: ['JUDGE-CA-005', 'JUDGE-TR-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-CB-004',
    type: 'process',
    title: 'Designing Safe Conversational Openings',
    abbreviation: 'SAFE-OPEN',
    sectionId: 'SEC-JUDGE-03',
    sectionNumber: '03',
    parentId: 'JUDGE-CB-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Framing personal questions with options for opt-out to avoid feelings of emotional coercion or boundary violation.',
    mandate: [
      'Establish conversational safety before asking personal or introspective questions',
      'Provide clear off-ramps so the respondent never feels cornered'
    ],
    powers: [
      'Builds rapid rapport without triggering defensive walls',
      'Demonstrates high emotional intelligence and respect for boundaries'
    ],
    limitations: [
      'Can feel overly tentative if over-engineered',
      'Requires calibrated social intuition'
    ],
    characterAssessmentDetails: {
      conceptId: 'CB-004',
      branch: 'Conversation Design',
      relatedLesson: 'Lesson 3: Asking better questions',
      definition: 'The conversational practice of prefacing introspective inquiries with permission and optionality so the speaker feels in complete control of their disclosure level.',
      principle: 'Safety precedes depth. When people feel zero pressure to disclose, their willingness to disclose naturally increases.',
      techniqueOrQuestion: 'Use the Permission Framing: "Feel free to pass if you prefer, but I\'m curious: what has been the most challenging part of your current transition?"',
      practicalScenario: 'Meeting a new team member who recently relocated. Instead of prying into family reasons, you offer an open, low-pressure question allowing them to share as much or as little as they want.',
      limitationsAndCaveats: 'Do not use permission framing as a manipulative pretense to pry into private matters.',
      crossLinks: ['JUDGE-TR-002', 'JUDGE-CB-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 4: TRUST & VULNERABILITY
  // ==========================================
  {
    id: 'JUDGE-TR-001',
    type: 'process',
    title: 'Voluntary Vulnerability as a Trust Catalyst',
    abbreviation: 'VULN',
    sectionId: 'SEC-JUDGE-04',
    sectionNumber: '04',
    level: 'constitutional',
    category: 'education',
    summary: 'Sharing authentic imperfections or uncertainties to signal safety, inviting mutual honesty and lowering pretense.',
    mandate: [
      'Demonstrate that strength includes acknowledging knowledge gaps and mistakes',
      'Invite collaborative problem solving rather than projecting omniscient competence'
    ],
    powers: [
      'Dismantles competitive posturing and imposter syndrome in groups',
      'Accelerates the transition from superficial acquaintance to authentic bond'
    ],
    limitations: [
      'Must be earned and context-appropriate; early oversharing repels',
      'Can be weaponized if shared with unverified, opportunistic actors'
    ],
    characterAssessmentDetails: {
      conceptId: 'TR-001',
      branch: 'Trust & Vulnerability',
      relatedLesson: 'Lesson 4: Trust, vulnerability, and reciprocity',
      definition: 'The intentional, voluntary revelation of one\'s authentic uncertainties, mistakes, or emotional truths without self-pity or manipulative intent.',
      principle: 'Vulnerability is not weakness; it is the courage to be seen authentically. It catalyzes trust when paired with demonstrated competence.',
      techniqueOrQuestion: 'The Calibrated Confession: Share a genuine past learning failure or current question: "I\'m not entirely sure how to solve this specific aspect yet. What do you think?"',
      practicalScenario: 'A newly appointed leader who admits to their team: "I understand the overarching strategic vision, but I rely completely on your domain expertise to execute the engineering details."',
      limitationsAndCaveats: 'The Pratfall Effect: Vulnerability increases liking only if the person has already demonstrated basic competence. Vulnerability without competence looks like incompetence.',
      crossLinks: ['JUDGE-TR-002', 'JUDGE-TR-003', 'JUDGE-HC-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-TR-002',
    type: 'oversight',
    title: 'Boundaries vs. Emotional Flooding (Oversharing)',
    abbreviation: 'BOUNDARIES',
    sectionId: 'SEC-JUDGE-04',
    sectionNumber: '04',
    parentId: 'JUDGE-TR-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Distinguishing healthy calibrated vulnerability from "emotional dumping" or manufactured intimacy used to manipulate.',
    mandate: [
      'Enforce personal boundaries that preserve self-respect and emotional safety',
      'Detect artificial, unearned intimacy deployed to extract reciprocal disclosures'
    ],
    powers: [
      'Protects against boundary violators, energy vampires, and predatory manipulators',
      'Preserves professional dignity and clarity of role'
    ],
    limitations: [
      'Can be misperceived as coldness if communicated aggressively',
      'Requires constant vigilance in high-intimacy settings'
    ],
    characterAssessmentDetails: {
      conceptId: 'TR-002',
      branch: 'Trust & Vulnerability',
      relatedLesson: 'Lesson 4: Trust, vulnerability, and reciprocity',
      definition: 'The clear distinction between calibrated vulnerability (which serves connection and growth) and emotional flooding (which offloads unintegrated trauma onto an unprepared listener).',
      principle: 'Vulnerability without boundaries is not connection; it is emotional dumping or manufactured intimacy designed to bypass normal trust verification.',
      techniqueOrQuestion: 'The Pacing Test: "Has this person earned the right to hear this part of my story? Is this disclosure relevant to our shared context, or am I seeking a savior/therapist?"',
      practicalScenario: 'Meeting someone for a first business lunch who immediately spends 45 minutes describing their bitter divorce, psychiatric diagnoses, and financial ruins. This signals severe boundary impairment.',
      limitationsAndCaveats: 'Oversharing often stems from anxiety or loneliness rather than malice. However, boundarylessness is an acute risk factor in professional and personal partnerships.',
      crossLinks: ['JUDGE-TR-004', 'JUDGE-CA-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-TR-003',
    type: 'process',
    title: 'The Reciprocal Disclosure Loop',
    abbreviation: 'RECIPROCITY',
    sectionId: 'SEC-JUDGE-04',
    sectionNumber: '04',
    parentId: 'JUDGE-TR-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Trust evolves through progressive, step-by-step mutual vulnerability tested incrementally over time.',
    mandate: [
      'Advance intimacy incrementally: disclose, observe response, await reciprocal return',
      'Halt depth progression if reciprocity is withheld or exploited'
    ],
    powers: [
      'Builds unshakeable, battle-tested trust over time',
      'Prevents asymmetrical vulnerability exposure'
    ],
    limitations: [
      'Requires patience; cannot be rushed over a single weekend or workshop',
      'Both parties must possess baseline emotional maturity'
    ],
    characterAssessmentDetails: {
      conceptId: 'TR-003',
      branch: 'Trust & Vulnerability',
      relatedLesson: 'Lesson 4: Trust, vulnerability, and reciprocity',
      definition: 'The dynamic psychological spiral where one party takes a minor vulnerability risk, the second responds with empathy and equivalent disclosure, confirming safety and unlocking the next depth tier.',
      principle: 'Trust is built in drops and lost in buckets. Healthy relationships operate on calibrated step-by-step disclosure, not instant emotional inundation.',
      techniqueOrQuestion: 'The Stepping Stone Strategy: Share a minor vulnerability (Level 2 out of 10). Wait to see if they meet you there before offering a Level 4 disclosure.',
      practicalScenario: 'In a new friendship, you admit you felt insecure during a presentation. They respond by sharing a similar experience where their mind went blank. Safety is established for the next step.',
      limitationsAndCaveats: 'If you disclose and the other person responds with judgment, indifference, or weaponizes the information in gossip, immediately halt the loop.',
      crossLinks: ['JUDGE-TR-001', 'JUDGE-TR-004']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-TR-004',
    type: 'oversight',
    title: 'The Asymmetrical Disclosure Trap',
    abbreviation: 'ASYMM-TRAP',
    sectionId: 'SEC-JUDGE-04',
    sectionNumber: '04',
    parentId: 'JUDGE-TR-001',
    level: 'constitutional',
    category: 'education',
    summary: 'A dangerous imbalance where one person shares all their vulnerabilities while the other remains completely opaque and holds emotional leverage.',
    mandate: [
      'Monitor informational and emotional asymmetry in close interactions',
      'Prevent covert power imbalances where one party becomes the confessor and the other the judge'
    ],
    powers: [
      'Eliminates blackmail, emotional manipulation, and covert dominance',
      'Ensures mutual vulnerability parity in romantic and professional bonds'
    ],
    limitations: [
      'Therapists and coaches naturally have asymmetric disclosure; must distinguish professional from personal relationships',
      'Requires enforcing a sudden pause in sharing'
    ],
    characterAssessmentDetails: {
      conceptId: 'TR-004',
      branch: 'Trust & Vulnerability',
      relatedLesson: 'Lesson 4: Trust, vulnerability, and reciprocity',
      definition: 'A toxic relational pattern where one person continually reveals secrets, fears, and flaws while the other shares nothing substantive, generating a profound power asymmetry.',
      principle: 'Intimacy without parity is leverage. Healthy relationships require mutual exposure, not one-sided emotional surveillance.',
      techniqueOrQuestion: 'The Parity Check: "Do I know this person\'s real struggles, insecurities, and values anywhere near as deeply as they know mine?"',
      practicalScenario: 'A direct report who pours out their personal marital problems to their executive manager over drinks. The manager shares nothing about their own life, creating an unhealthy psychological dependency.',
      limitationsAndCaveats: 'In mentorship or therapy, asymmetry is appropriate. In friendships, dating, and peer co-founders, asymmetry is a red-alert risk factor.',
      crossLinks: ['JUDGE-CA-002', 'JUDGE-TR-002']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 5: CHARACTER & POWER DYNAMICS
  // ==========================================
  {
    id: 'JUDGE-CA-001',
    type: 'constitutional',
    title: 'Kissing Up vs. Kicking Down: The Dual Face',
    abbreviation: 'KICK-DOWN',
    sectionId: 'SEC-JUDGE-05',
    sectionNumber: '05',
    level: 'constitutional',
    category: 'education',
    summary: 'The definitive hallmark of toxic character: deference and charm displayed toward superiors, paired with contempt and impatience toward subordinates.',
    mandate: [
      'Expose Machiavellian actors who present an immaculate persona to superiors',
      'Protect organizational culture and teams from toxic middle management'
    ],
    powers: [
      'The single most accurate diagnostic signal of manipulative, taker behavior',
      'Cuts through charismatic executive presentations and flattering charm'
    ],
    limitations: [
      'Requires observing the individual across multiple operational tiers',
      'Manipulators work hard to conceal this behavior from senior eyes'
    ],
    characterAssessmentDetails: {
      conceptId: 'CA-001',
      branch: 'Character & Manipulation',
      relatedLesson: 'Lesson 5: Character, manipulation, and power',
      definition: 'The behavioral pattern of flattering, deferring to, and serving those in positions of power or influence, while dismissing, abusing, or ignoring those with lower status.',
      principle: 'Anyone can be charming to someone they need; true character is revealed by how someone treats someone they will never need.',
      techniqueOrQuestion: 'The 360 Degree Character Test: "Ask the receptionist, the intern, the waiter, and the driver how this person treated them when no executives were looking."',
      practicalScenario: 'An executive candidate who is brilliant, complimentary, and articulate during dinner with the CEO, but snaps with snide impatience at the waiter who brought the wrong side dish.',
      limitationsAndCaveats: 'A bad day or momentary impatience can happen to anyone. Look for the pattern: is their warmth strictly correlated with the other person\'s rank and utility?',
      crossLinks: ['JUDGE-CA-002', 'JUDGE-CA-003', 'JUDGE-AP-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-CA-002',
    type: 'oversight',
    title: 'The Power Asymmetry Lens',
    abbreviation: 'POWER-ASYMM',
    sectionId: 'SEC-JUDGE-05',
    sectionNumber: '05',
    parentId: 'JUDGE-CA-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Evaluating behavior in situations where there are zero immediate consequences for being rude, selfish, or ungenerous.',
    mandate: [
      'Analyze moral conduct in low-accountability and high-power contexts',
      'Identify whether ethical behavior is intrinsically motivated or purely transactional'
    ],
    powers: [
      'Separates internalized morality from strategic performance',
      'Predicts future leadership behavior before formal power is awarded'
    ],
    limitations: [
      'Requires subtle observation in naturalistic settings',
      'Cannot be tested via formal questionnaires'
    ],
    characterAssessmentDetails: {
      conceptId: 'CA-002',
      branch: 'Character & Manipulation',
      relatedLesson: 'Lesson 5: Character, manipulation, and power',
      definition: 'The analytical framework of measuring a person\'s ethics specifically when they hold an insurmountable advantage in leverage, status, or power over the other party.',
      principle: 'Power does not corrupt; power reveals. When fear of consequences is removed, true character is unmasked.',
      techniqueOrQuestion: 'Observe behavior when the other person is powerless: "How do they handle a customer service dispute, an intern\'s mistake, or a service worker\'s delay?"',
      practicalScenario: 'A venture capitalist who regularly leaves founders waiting for 45 minutes on Zoom without an apology, because they know the founders desperately need their funding.',
      limitationsAndCaveats: 'High-power individuals face extreme time constraints and demands. Distinguish between necessary operational brevity and callous disrespect.',
      crossLinks: ['JUDGE-CA-001', 'JUDGE-CA-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-CA-003',
    type: 'oversight',
    title: 'Stated Values vs. Observed Behavioral Patterns',
    abbreviation: 'VALUE-SPLIT',
    sectionId: 'SEC-JUDGE-05',
    sectionNumber: '05',
    parentId: 'JUDGE-CA-001',
    level: 'constitutional',
    category: 'education',
    summary: 'The integrity gap between who someone claims to be in social rhetoric and how they actually behave under pressure and resource constraints.',
    mandate: [
      'Benchmark vocal moral virtue against real personal trade-offs',
      'Detect virtue signaling and hypocrisy in interpersonal and workplace domains'
    ],
    powers: [
      'Prevents trusting empty mission statements and charismatic slogans',
      'Identifies whether principles survive financial and status cost'
    ],
    limitations: [
      'Requires longitudinal tracking over months or quarters',
      'Demands objective record-keeping of past commitments'
    ],
    characterAssessmentDetails: {
      conceptId: 'CA-003',
      branch: 'Character & Manipulation',
      relatedLesson: 'Lesson 5: Character, manipulation, and power',
      definition: 'The quantifiable divergence between an individual\'s loudly proclaimed moral principles and their real-world allocations of time, capital, and loyalty under pressure.',
      principle: 'Values are not what you say on your LinkedIn bio or dating profile; values are what you are willing to pay for or sacrifice for when it hurts.',
      techniqueOrQuestion: 'The Cost Test: "What did following this value actually cost this person in money, status, or convenience over the past year?"',
      practicalScenario: 'A co-founder who claims "our people come first and work-life balance is our core value," yet sends demanding Slack messages at 11 PM on Sunday expecting instant replies.',
      limitationsAndCaveats: 'No human is 100% congruent at all times. Look for patterns of chronic hypocrisy where values are used solely as marketing camouflage.',
      crossLinks: ['JUDGE-CA-001', 'JUDGE-IJ-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-CA-004',
    type: 'process',
    title: 'The Role-Model Benchmark Question',
    abbreviation: 'ROLE-MODEL',
    sectionId: 'SEC-JUDGE-05',
    sectionNumber: '05',
    parentId: 'JUDGE-CA-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Analyzing who an individual admires, emulates, and quotes to decode their internal moral compass and subconscious aspirations.',
    mandate: [
      'Discover aspirational moral standards through their chosen heroes and idols',
      'Identify whether they celebrate ruthless dominance or ethical excellence'
    ],
    powers: [
      'Bypasses scripted self-descriptions to reveal real character templates',
      'Reveals whether their hero is a conqueror, a trickster, or a principled builder'
    ],
    limitations: [
      'People may pick politically correct figures (e.g. Gandhi or Lincoln) to impress you',
      'Requires asking WHY they admire them, not just who'
    ],
    characterAssessmentDetails: {
      conceptId: 'CA-004',
      branch: 'Character & Manipulation',
      relatedLesson: 'Lesson 5: Character, manipulation, and power',
      definition: 'A diagnostic inquiry assessing the specific qualities an individual venerates in their heroes, mentors, and historical icons.',
      principle: 'Show me your heroes, and I will show you your trajectory. People instinctively emulate what they celebrate.',
      techniqueOrQuestion: 'The Follow-Up Probe: "Who is a leader or mentor you admire most, and specifically what difficult ethical choice did they make that earned your respect?"',
      practicalScenario: 'When asked who they look up to, an investor enthusiastically praises a ruthless corporate raider solely because "he crushed his competitors and made billions by cutting everyone," revealing their inner mercenary ethos.',
      limitationsAndCaveats: 'If they name a conventional icon, push deeper: "What specifically about their flaws and how they handled failure resonated with you?"',
      crossLinks: ['JUDGE-CB-002', 'JUDGE-CA-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-CA-005',
    type: 'oversight',
    title: 'The Strategic Giver & Covert Flatterer',
    abbreviation: 'TAKER-MASK',
    sectionId: 'SEC-JUDGE-05',
    sectionNumber: '05',
    parentId: 'JUDGE-CA-001',
    level: 'constitutional',
    category: 'education',
    summary: 'A taker disguised as a generous benefactor who gives small gifts or flattery upfront to induce immense subconscious indebtedness.',
    mandate: [
      'Detect predatory reciprocity and artificial favors engineered to extract leverage',
      'Examine whether generosity is unconditional or weaponized'
    ],
    powers: [
      'Protects against psychological entrapment and debt entrapment',
      'Reveals hidden strings attached to seemingly generous gifts or introductions'
    ],
    limitations: [
      'Must not become so cynical that genuine acts of generosity are spurned',
      'Requires testing whether a simple refusal of a favor triggers anger'
    ],
    characterAssessmentDetails: {
      conceptId: 'CA-005',
      branch: 'Character & Manipulation',
      relatedLesson: 'Lesson 5: Character, manipulation, and power',
      definition: 'A transactional operator who simulates authentic generosity through unrequested favors, excessive praise, or gifts to create an unwritten debt they later call in with exorbitant interest.',
      principle: 'True givers give to add value without tracking debits; takers give strategically to create psychological leverage and guilt.',
      techniqueOrQuestion: 'The Polite Decline Test: Politely decline an unrequested favor or advice: "Thank you so much, but I won\'t be needing that." Observe if they respond with grace or concealed irritation.',
      practicalScenario: 'An acquaintance connects you with three high-level contacts unasked, then two weeks later demands that you publicly endorse their controversial product or invest in their venture.',
      limitationsAndCaveats: 'Do not reject genuine givers. Genuine givers are happy when you thrive and do not bring up past favors when asking for assistance.',
      crossLinks: ['JUDGE-TR-003', 'JUDGE-CA-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 6: INTUITION & JUDGMENT
  // ==========================================
  {
    id: 'JUDGE-IJ-001',
    type: 'process',
    title: 'The Halo Effect & Charisma Distortion',
    abbreviation: 'HALO-EFFECT',
    sectionId: 'SEC-JUDGE-06',
    sectionNumber: '06',
    level: 'constitutional',
    category: 'education',
    summary: 'The psychological cognitive distortion where perceived physical attractiveness, eloquence, or confidence blind an observer to severe ethical red flags.',
    mandate: [
      'De-bias character assessment from physical, vocal, and stylistic presentation',
      'Prevent charismatic charm from overriding analytical rigor'
    ],
    powers: [
      'Dramatically reduces hiring and partnership error rates',
      'Protects organizations from charismatic sociopaths and narcissists'
    ],
    limitations: [
      'Counter-intuitively, do not assume an attractive or articulate person is automatically dishonest',
      'Requires conscious decoupling of style from substance'
    ],
    characterAssessmentDetails: {
      conceptId: 'IJ-001',
      branch: 'Intuition & Judgment',
      relatedLesson: 'Lesson 6: Intuition and first impressions',
      definition: 'A cognitive bias in which an observer\'s overall positive impression of a person in one domain (e.g. eloquence, attractiveness, pedigree) unduly influences their feelings in unrelated domains (integrity, reliability).',
      principle: 'Charisma is a loudspeaker; it amplifies the messenger, but says nothing about the moral quality of the message or the person.',
      techniqueOrQuestion: 'The Transcribe Test: "If I read a verbatim transcript of what this person just said without hearing their deep voice, charming smile, or impressive credentials, does it still make sense and sound ethical?"',
      practicalScenario: 'A dashing founder with an elite pedigree who raises millions because "he looks the part," while an introverted, less polished engineer with a vastly superior, working product is overlooked.',
      limitationsAndCaveats: 'Overcoming the halo effect requires systematic evaluation sheets and multi-rater panels rather than relying on individual interview impressions.',
      crossLinks: ['JUDGE-HC-003', 'JUDGE-IJ-002']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-IJ-002',
    type: 'oversight',
    title: 'Similarity Bias & In-Group Blindspots',
    abbreviation: 'SIMILARITY',
    sectionId: 'SEC-JUDGE-06',
    sectionNumber: '06',
    parentId: 'JUDGE-IJ-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Our unconscious tendency to give an unearned pass to people who share our background, alumni networks, political views, or hobbies.',
    mandate: [
      'Eliminate tribal favoritism in hiring, partnerships, and leadership promotions',
      'Audit why someone "feels like one of us" versus their objective track record'
    ],
    powers: [
      'Fosters diverse, high-integrity teams with complementary strengths',
      'Neutralizes the "country club" / affinity fraud vulnerabilities'
    ],
    limitations: [
      'Shared cultural context can speed communication; must preserve efficiency while eliminating favoritism',
      'Requires institutional blind testing'
    ],
    characterAssessmentDetails: {
      conceptId: 'IJ-002',
      branch: 'Intuition & Judgment',
      relatedLesson: 'Lesson 6: Intuition and first impressions',
      definition: 'The subconscious propensity to judge individuals more favorably and attribute positive intent simply because they share our demographic, educational, cultural, or subcultural background.',
      principle: 'Familiarity breeds comfort, not competence. Shared affinity is the primary vehicle for affinity fraud and corporate nepotism.',
      techniqueOrQuestion: 'The Stranger Inversion: "If a stranger who went to a rival school and had an opposite communication style took this exact same action, would I judge it as acceptable or as a red flag?"',
      practicalScenario: 'Giving a lenient evaluation to a junior employee who went to your alma mater and loves golf, while harshly grading a quiet colleague from a different background who delivered superior metrics.',
      limitationsAndCaveats: 'Recognizing shared culture is human nature. The danger arises when shared identity replaces behavioral evidence.',
      crossLinks: ['JUDGE-IJ-001', 'JUDGE-AP-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-IJ-003',
    type: 'process',
    title: 'Bayesian Evidence Updating in Judgment',
    abbreviation: 'BAYESIAN',
    sectionId: 'SEC-JUDGE-06',
    sectionNumber: '06',
    parentId: 'JUDGE-IJ-001',
    level: 'constitutional',
    category: 'education',
    summary: 'The scientific mindset of treating first impressions as initial hypotheses that must be actively updated as longitudinal evidence arrives.',
    mandate: [
      'Prevent confirmation bias from cementing premature opinions about people',
      'Enforce regular revision of character evaluations based on new actions'
    ],
    powers: [
      'Allows you to forgive honest mistakes and catch covert decline early',
      'Creates a learning, adaptable social intelligence system'
    ],
    limitations: [
      'Demands that you admit when your initial gut read was dead wrong',
      'Requires mental energy and emotional flexibility'
    ],
    characterAssessmentDetails: {
      conceptId: 'IJ-003',
      branch: 'Intuition & Judgment',
      relatedLesson: 'Lesson 6: Intuition and first impressions',
      definition: 'The probabilistic method of forming a provisional estimate of character (prior), actively seeking disconfirming evidence, and shifting your confidence level (posterior) as real behavior is observed.',
      principle: 'Strong opinions, loosely held. An initial impression is a hypothesis to be tested, never a final verdict.',
      techniqueOrQuestion: 'The Hypothesis Reversal: "What specific behavior would I need to see to change my mind from negative to positive (or positive to negative) about this person?"',
      practicalScenario: 'Initially disliking a colleague because they seemed abrupt in a morning meeting, but learning later that they were managing a family medical emergency while silently protecting your team\'s budget from cuts.',
      limitationsAndCaveats: 'Do not confuse Bayesian updating with making endless excuses for a chronic abuser or taker. When pattern evidence repeatedly confirms toxicity, update your probability to zero trust.',
      crossLinks: ['JUDGE-IJ-004', 'JUDGE-CA-003']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-IJ-004',
    type: 'process',
    title: 'Intuitive Gut Feelings as Hypotheses',
    abbreviation: 'GUT-HYPOTH',
    sectionId: 'SEC-JUDGE-06',
    sectionNumber: '06',
    parentId: 'JUDGE-IJ-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Using your gut as an alert system that prompts investigation, rather than an infallible oracle that dictates decisions.',
    mandate: [
      'Honor somatic gut signals without blindly executing impulsive actions',
      'Investigate the root cause of an intuitive uneasy feeling'
    ],
    powers: [
      'Capitalizes on subconscious pattern recognition without falling for bias',
      'Maintains emotional safety while preserving analytical fairness'
    ],
    limitations: [
      'Gut feelings are easily influenced by fatigue, hunger, or past unrelated trauma',
      'Requires emotional regulation before acting'
    ],
    characterAssessmentDetails: {
      conceptId: 'IJ-004',
      branch: 'Intuition & Judgment',
      relatedLesson: 'Lesson 6: Intuition and first impressions',
      definition: 'The cognitive discipline of treating visceral intuition as a signal to pay attention and investigate, rather than an infallible conclusion about another human being.',
      principle: 'Intuition is pattern recognition operating beneath conscious threshold. It is a spark of curiosity or caution, not a judge\'s gavel.',
      techniqueOrQuestion: 'The Signal Investigation: When you feel a weird vibe: "My gut feels unsettled. What concrete word, pause, tone, or physical cue triggered this reaction? Let me watch for that specific pattern."',
      practicalScenario: 'Feeling an inexplicable hesitation before signing a partnership deal. Instead of backing out immediately or ignoring the feeling, you conduct deep back-channel reference checks and discover undisclosed litigation.',
      limitationsAndCaveats: 'Unexamined gut feelings are often just disguised prejudice or anxiety. Never use "my gut says so" as justification to harm or fire someone without tangible evidence.',
      crossLinks: ['JUDGE-IJ-003', 'JUDGE-HC-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 7: PRACTICAL APPLICATIONS
  // ==========================================
  {
    id: 'JUDGE-AP-001',
    type: 'department',
    title: 'Friendship Selection, Auditing & Pruning',
    abbreviation: 'FRIEND-AUDIT',
    sectionId: 'SEC-JUDGE-07',
    sectionNumber: '07',
    level: 'constitutional',
    category: 'education',
    summary: 'Curating your inner circle by auditing which relationships provide authentic mutual nourishment versus chronic energetic drainage.',
    mandate: [
      'Establish criteria for deep companion friendships vs casual activity pals',
      'Gracefully deprioritize draining, one-sided, or manipulative friendships'
    ],
    powers: [
      'Protects mental health, emotional vitality, and moral trajectory',
      'Concentrates time on people who genuinely celebrate your growth'
    ],
    limitations: [
      'Pruning friends can induce temporary loneliness or social guilt',
      'Must avoid cold, dramatic "friend breakups" when gradual fading is wiser'
    ],
    characterAssessmentDetails: {
      conceptId: 'AP-001',
      branch: 'Practical Applications',
      relatedLesson: 'Lesson 7: Applying the framework',
      definition: 'The deliberate life practice of categorizing and investing in social ties based on authentic reciprocity, ethical resonance, and mutual psychological growth.',
      principle: 'You become the average of the five people you spend the most time with. Choosing friends is choosing your future moral character.',
      techniqueOrQuestion: 'The Post-Hangout Energy Audit: "When I leave an encounter with this person, do I feel energized, inspired, and grounded—or do I feel drained, cynical, and diminished?"',
      practicalScenario: 'Realizing that a ten-year friend only calls when they need to vent or complain about their life, never asking about yours or celebrating your milestones. You step down the bond from Companion to occasional Pal.',
      limitationsAndCaveats: 'All good friends go through seasons of grief or depression where they cannot give back. Do not abandon companions during hard times; prune chronic takers.',
      crossLinks: ['JUDGE-RT-000', 'JUDGE-RT-004']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-AP-002',
    type: 'department',
    title: 'Dating & Long-Term Romantic Vetting',
    abbreviation: 'DATING-VET',
    sectionId: 'SEC-JUDGE-07',
    sectionNumber: '07',
    parentId: 'JUDGE-AP-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Evaluating prospective life partners beyond initial romantic chemistry to test conflict resolution, humility, and moral integrity.',
    mandate: [
      'Screen romantic partners for emotional maturity and repair capacity',
      'Ensure core values on money, family, and ethics align before commitment'
    ],
    powers: [
      'Prevents disastrous marriages and toxic co-dependencies',
      'Builds partnerships capable of surviving financial, health, and aging crises'
    ],
    limitations: [
      'Must balance analytical vetting with spontaneous romantic affection',
      'Requires personal self-awareness of one\'s own attachment flaws'
    ],
    characterAssessmentDetails: {
      conceptId: 'AP-002',
      branch: 'Practical Applications',
      relatedLesson: 'Lesson 7: Applying the framework',
      definition: 'The application of character assessment principles to romantic selection, focusing on how a partner fights, apologizes, and behaves when life is inconvenient.',
      principle: 'Love is a decision built on companion values, not merely a neurochemical explosion of vibe chemistry.',
      techniqueOrQuestion: 'The Stress & Disagreement Test: "How does this person behave when they are exhausted, hungry, stuck in traffic, or when we disagree on an important boundary?"',
      practicalScenario: 'Dating someone deeply charming who suddenly Stonewalls for three days after a minor disagreement, refusing to communicate until you beg for forgiveness. This indicates an inability to practice psychological repair.',
      limitationsAndCaveats: 'Nobody is perfect; do not search for a mythical flawless human. Look for repair capacity: do they apologize sincerely and change their behavior after insight?',
      crossLinks: ['JUDGE-HC-003', 'JUDGE-TR-003', 'JUDGE-CA-001']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-AP-003',
    type: 'department',
    title: 'Hiring, Team Building & Taker Detection',
    abbreviation: 'HIRING-TEAMS',
    sectionId: 'SEC-JUDGE-07',
    sectionNumber: '07',
    parentId: 'JUDGE-AP-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Designing interviews and reference checks to keep toxic givers and Machiavellian takers off the team, fostering a culture of psychological safety.',
    mandate: [
      'Identify and screen out toxic high-performers who undermine team trust',
      'Hire givers who elevate their peers and share credit freely'
    ],
    powers: [
      'Protects team velocity, retention, and psychological safety',
      'Prevents organizational culture rot from within'
    ],
    limitations: [
      'Requires institutional discipline to pass on skilled candidates with toxic character',
      'Demands thorough back-channel reference interviews'
    ],
    characterAssessmentDetails: {
      conceptId: 'AP-003',
      branch: 'Practical Applications',
      relatedLesson: 'Lesson 7: Applying the framework',
      definition: 'The organizational application of social intelligence to recruit individuals with high integrity, learning agility, and collaborative instincts while filtering out extractive takers.',
      principle: 'One toxic taker can destroy the psychological safety and productivity of an entire team of givers; screening them out is paramount.',
      techniqueOrQuestion: 'The Credit & Blame Inquiry: "In your last major career win, who specifically helped you achieve it and what did they do? In your biggest project setback, what was your personal responsibility?"',
      practicalScenario: 'A candidate who uses "I" exclusively when describing triumphs ("I doubled revenue, I built the engine"), but pivots to "they" or "the team" when discussing failures ("they failed to market it properly").',
      limitationsAndCaveats: 'Do not hire agreeable pushovers. What you want are "disagreeable givers"—people who challenge assumptions and tell hard truths because they care deeply about the mission.',
      crossLinks: ['JUDGE-CA-001', 'JUDGE-CB-002']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-AP-004',
    type: 'department',
    title: 'Mentorship & Advisory Network Curation',
    abbreviation: 'MENTOR-NET',
    sectionId: 'SEC-JUDGE-07',
    sectionNumber: '07',
    parentId: 'JUDGE-AP-001',
    level: 'constitutional',
    category: 'education',
    summary: 'Selecting mentors who challenge your thinking with care, rather than sycophants who flatter you or narcissists who use you as an audience.',
    mandate: [
      'Build a board of personal advisors grounded in intellectual and ethical rigor',
      'Avoid guru-worship and transactional advisory arrangements'
    ],
    powers: [
      'Accelerates personal and professional mastery by decades',
      'Provides an objective reality check during moments of hubris or despair'
    ],
    limitations: [
      'Great mentors are busy; you must provide value and respect their time',
      'Must be willing to hear uncomfortable truths without defensiveness'
    ],
    characterAssessmentDetails: {
      conceptId: 'AP-004',
      branch: 'Practical Applications',
      relatedLesson: 'Lesson 7: Applying the framework',
      definition: 'The intentional selection of senior guides and peers who provide caring criticism, wisdom, and perspective without demanding subservience.',
      principle: 'A great mentor does not create clones; they challenge you to become the highest, most rigorous version of yourself.',
      techniqueOrQuestion: 'The Caring Challenger Test: "Does this mentor tell me what I want to hear, or what I need to hear? Do they ask probing questions, or do they simply lecture about their past glories?"',
      practicalScenario: 'Choosing an advisor who criticizes your product roadmap with precise, tough questions while offering to connect you with three engineers who can help solve the architectural flaw.',
      limitationsAndCaveats: 'Avoid mentors who require praise, financial kickbacks, or emotional fealty in exchange for guidance.',
      crossLinks: ['JUDGE-RT-001', 'JUDGE-CA-004']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  },
  {
    id: 'JUDGE-AP-005',
    type: 'process',
    title: 'Handling Unaligned Bonds: The Graceful De-escalation',
    abbreviation: 'DE-ESCALATE',
    sectionId: 'SEC-JUDGE-07',
    sectionNumber: '07',
    parentId: 'JUDGE-AP-001',
    level: 'constitutional',
    category: 'education',
    summary: 'The strategic methodology for stepping down intimacy and access without burning bridges or initiating unnecessary conflict.',
    mandate: [
      'Recalibrate access when an individual proves to be unsafe or misaligned',
      'Preserve professional courtesy while eliminating vulnerability exposure'
    ],
    powers: [
      'Disengages toxic dynamics cleanly with minimal collateral damage',
      'Maintains emotional equilibrium and peace of mind'
    ],
    limitations: [
      'Aggressive personalities may push back or demand explanations',
      'Requires holding boundaries calmly and repeatedly'
    ],
    characterAssessmentDetails: {
      conceptId: 'AP-005',
      branch: 'Practical Applications',
      relatedLesson: 'Lesson 7: Applying the framework',
      definition: 'The behavioral practice of smoothly stepping a relationship down from Companion to Pal, or from Pal to distant Ally, through boundary enforcement and reduced vulnerability.',
      principle: 'You do not owe everyone a front-row seat in your life. You can wish someone well while locking your front door.',
      techniqueOrQuestion: 'The Grey Rock / Warm Boundary Technique: Respond with politeness, slow your response cadence, and share zero personal secrets: "Thank you for thinking of me! I\'m at capacity with current projects, but I wish you great success."',
      practicalScenario: 'A former colleague who has become increasingly bitter, manipulative, and intrusive. Rather than engaging in a dramatic blowup, you gracefully transition to slow, professional email replies and decline dinner invites.',
      limitationsAndCaveats: 'If physical, financial, or severe legal danger is present, graceful de-escalation is insufficient; immediate no-contact and legal boundaries must be enacted.',
      crossLinks: ['JUDGE-RT-004', 'JUDGE-TR-002']
    },
    sourceIds: ['SRC-AG-001'],
    verificationStatus: 'verified'
  }
];

export const RELATIONSHIPS_V7: RelationshipEdgeData[] = [
  // SECTION 1: FOUNDATIONS
  {
    id: 'REL-JUDGE-001',
    sourceNodeId: 'JUDGE-HC-001',
    targetNodeId: 'JUDGE-HC-002',
    type: 'LEADS_TO',
    label: 'Deepens chemistry into conversational flow state',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-002',
    sourceNodeId: 'JUDGE-HC-001',
    targetNodeId: 'JUDGE-HC-003',
    type: 'REQUIRES_CAUTION',
    label: 'High chemistry risks false assumption of trust',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-003',
    sourceNodeId: 'JUDGE-HC-004',
    targetNodeId: 'JUDGE-HC-002',
    type: 'SUPPORTS',
    label: 'Undivided presence enables genuine flow',
    verificationStatus: 'verified'
  },

  // SECTION 2: RELATIONSHIP TAXONOMY
  {
    id: 'REL-JUDGE-004',
    sourceNodeId: 'JUDGE-RT-000',
    targetNodeId: 'JUDGE-RT-001',
    type: 'IS_A',
    label: 'Taxonomy branch: Bonds anchored in shared goals',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-005',
    sourceNodeId: 'JUDGE-RT-000',
    targetNodeId: 'JUDGE-RT-002',
    type: 'IS_A',
    label: 'Taxonomy branch: Bonds anchored in shared interests',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-006',
    sourceNodeId: 'JUDGE-RT-000',
    targetNodeId: 'JUDGE-RT-003',
    type: 'IS_A',
    label: 'Taxonomy branch: Bonds anchored in shared values',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-007',
    sourceNodeId: 'JUDGE-RT-001',
    targetNodeId: 'JUDGE-RT-004',
    type: 'REQUIRES_CAUTION',
    label: 'Expecting Companion loyalty from Ally causes friction',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-008',
    sourceNodeId: 'JUDGE-RT-002',
    targetNodeId: 'JUDGE-RT-004',
    type: 'REQUIRES_CAUTION',
    label: 'Expecting Companion depth from Pal causes disappointment',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-009',
    sourceNodeId: 'JUDGE-RT-003',
    targetNodeId: 'JUDGE-TR-001',
    type: 'SUPPORTS',
    label: 'Companion bond provides bedrock for authentic vulnerability',
    verificationStatus: 'verified'
  },

  // SECTION 3: CONVERSATION DESIGN
  {
    id: 'REL-JUDGE-010',
    sourceNodeId: 'JUDGE-CB-001',
    targetNodeId: 'JUDGE-CB-002',
    type: 'SUPPORTS',
    label: 'Deep talk structure utilizes diagnostic questions',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-011',
    sourceNodeId: 'JUDGE-CB-001',
    targetNodeId: 'JUDGE-CB-003',
    type: 'CONTRASTS_WITH',
    label: 'Deep talk demands support responses over shift responses',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-012',
    sourceNodeId: 'JUDGE-CB-004',
    targetNodeId: 'JUDGE-CB-001',
    type: 'SUPPORTS',
    label: 'Permission framing ensures psychological safety',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-013',
    sourceNodeId: 'JUDGE-CB-002',
    targetNodeId: 'JUDGE-CA-004',
    type: 'LEADS_TO',
    label: 'Diagnostic inquiry reveals role model choices',
    verificationStatus: 'verified'
  },

  // SECTION 4: TRUST & VULNERABILITY
  {
    id: 'REL-JUDGE-014',
    sourceNodeId: 'JUDGE-TR-001',
    targetNodeId: 'JUDGE-TR-002',
    type: 'REQUIRES_CAUTION',
    label: 'Vulnerability without boundaries becomes emotional dumping',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-015',
    sourceNodeId: 'JUDGE-TR-001',
    targetNodeId: 'JUDGE-TR-003',
    type: 'LEADS_TO',
    label: 'Calibrated vulnerability sparks reciprocal loop',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-016',
    sourceNodeId: 'JUDGE-TR-003',
    targetNodeId: 'JUDGE-TR-004',
    type: 'CONTRASTS_WITH',
    label: 'Balanced loop prevents asymmetrical power leverage',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-017',
    sourceNodeId: 'JUDGE-TR-002',
    targetNodeId: 'JUDGE-CA-005',
    type: 'SUPPORTS',
    label: 'Boundaries block predatory strategic givers',
    verificationStatus: 'verified'
  },

  // SECTION 5: CHARACTER & POWER
  {
    id: 'REL-JUDGE-018',
    sourceNodeId: 'JUDGE-CA-001',
    targetNodeId: 'JUDGE-CA-002',
    type: 'HAS_ATTRIBUTE',
    label: 'Kissing up / kicking down operates via power asymmetry',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-019',
    sourceNodeId: 'JUDGE-CA-001',
    targetNodeId: 'JUDGE-CA-003',
    type: 'CONTRASTS_WITH',
    label: 'Flattery contradicts loudly proclaimed moral values',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-020',
    sourceNodeId: 'JUDGE-CA-004',
    targetNodeId: 'JUDGE-CA-003',
    type: 'SUPPORTS',
    label: 'Admired heroes reveal genuine underlying values',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-021',
    sourceNodeId: 'JUDGE-CA-005',
    targetNodeId: 'JUDGE-CA-001',
    type: 'IS_A',
    label: 'Strategic giving is a calculated mechanism of the taker',
    verificationStatus: 'verified'
  },

  // SECTION 6: INTUITION & JUDGMENT
  {
    id: 'REL-JUDGE-022',
    sourceNodeId: 'JUDGE-IJ-001',
    targetNodeId: 'JUDGE-HC-003',
    type: 'SUPPORTS',
    label: 'Charisma amplification feeds the Vibe vs Trust fallacy',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-023',
    sourceNodeId: 'JUDGE-IJ-001',
    targetNodeId: 'JUDGE-IJ-002',
    type: 'HAS_ATTRIBUTE',
    label: 'Halo effect compounds with in-group similarity bias',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-024',
    sourceNodeId: 'JUDGE-IJ-004',
    targetNodeId: 'JUDGE-IJ-003',
    type: 'LEADS_TO',
    label: 'Intuitive alerts must convert into Bayesian hypotheses',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-025',
    sourceNodeId: 'JUDGE-IJ-003',
    targetNodeId: 'JUDGE-CA-003',
    type: 'SUPPORTS',
    label: 'Observed behavior updates prior assumptions about character',
    verificationStatus: 'verified'
  },

  // SECTION 7: PRACTICAL APPLICATIONS
  {
    id: 'REL-JUDGE-026',
    sourceNodeId: 'JUDGE-RT-000',
    targetNodeId: 'JUDGE-AP-001',
    type: 'APPLIES_TO',
    label: 'Taxonomy guides intentional friendship pruning',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-027',
    sourceNodeId: 'JUDGE-CA-001',
    targetNodeId: 'JUDGE-AP-002',
    type: 'APPLIES_TO',
    label: 'Power asymmetry lens screens romantic candidates',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-028',
    sourceNodeId: 'JUDGE-CA-001',
    targetNodeId: 'JUDGE-AP-003',
    type: 'APPLIES_TO',
    label: 'Kissing up / kicking down screens toxic workplace hires',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-029',
    sourceNodeId: 'JUDGE-CB-002',
    targetNodeId: 'JUDGE-AP-004',
    type: 'APPLIES_TO',
    label: 'Diagnostic inquiries select caring, truth-telling mentors',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-030',
    sourceNodeId: 'JUDGE-RT-004',
    targetNodeId: 'JUDGE-AP-005',
    type: 'LEADS_TO',
    label: 'Recognizing misalignment triggers graceful de-escalation',
    verificationStatus: 'verified'
  },

  // INTER-BRANCH CROSS LINKS
  {
    id: 'REL-JUDGE-031',
    sourceNodeId: 'JUDGE-HC-003',
    targetNodeId: 'JUDGE-CA-001',
    type: 'REQUIRES_CAUTION',
    label: 'Superficial charm can mask toxic interpersonal abuse',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-032',
    sourceNodeId: 'JUDGE-CB-003',
    targetNodeId: 'JUDGE-CA-005',
    type: 'LEADS_TO',
    label: 'Conversational narcissism exposes transactional takers',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-033',
    sourceNodeId: 'JUDGE-TR-004',
    targetNodeId: 'JUDGE-CA-002',
    type: 'HAS_ATTRIBUTE',
    label: 'Asymmetric vulnerability creates exploitable power leverage',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-034',
    sourceNodeId: 'JUDGE-IJ-003',
    targetNodeId: 'JUDGE-AP-002',
    type: 'APPLIES_TO',
    label: 'Longitudinal evidence updating safeguards romantic commitment',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-JUDGE-035',
    sourceNodeId: 'JUDGE-AP-005',
    targetNodeId: 'JUDGE-TR-002',
    type: 'SUPPORTS',
    label: 'De-escalation relies on firm personal boundary setting',
    verificationStatus: 'verified'
  }
];

export const SOURCES_V7: SourceRecord[] = [
  {
    id: 'SRC-AG-001',
    name: 'Adam Grant: Social Intelligence & Relationship Selection',
    officialUrl: 'https://adamgrant.net/podcasts/rethinking/',
    documentTitle: 'Master Learning Framework: Human Connection, Character Assessment & Relationship Types',
    sectionCitation: 'Lessons 1-7: Foundations, Taxonomy, Inquiry, Vulnerability, Power, Intuition, Applications',
    publicationDate: '2024-01-15',
    lastVerifiedDate: '2026-10-20',
    sourcePriority: 1,
    verificationStatus: 'verified',
    notes: 'Comprehensive interview transcript and structured synthesis on how to assess character, manage vulnerability, and categorize human bonds into Allies, Pals, and Companions.',
    relatedNodeIds: [
      'JUDGE-HC-001', 'JUDGE-HC-002', 'JUDGE-HC-003', 'JUDGE-HC-004',
      'JUDGE-RT-000', 'JUDGE-RT-001', 'JUDGE-RT-002', 'JUDGE-RT-003', 'JUDGE-RT-004',
      'JUDGE-CB-001', 'JUDGE-CB-002', 'JUDGE-CB-003', 'JUDGE-CB-004',
      'JUDGE-TR-001', 'JUDGE-TR-002', 'JUDGE-TR-003', 'JUDGE-TR-004',
      'JUDGE-CA-001', 'JUDGE-CA-002', 'JUDGE-CA-003', 'JUDGE-CA-004', 'JUDGE-CA-005',
      'JUDGE-IJ-001', 'JUDGE-IJ-002', 'JUDGE-IJ-003', 'JUDGE-IJ-004',
      'JUDGE-AP-001', 'JUDGE-AP-002', 'JUDGE-AP-003', 'JUDGE-AP-004', 'JUDGE-AP-005'
    ]
  },
  {
    id: 'SRC-GRANT-GIVE-TAKE',
    name: 'Give and Take: Why Helping Others Drives Our Success',
    officialUrl: 'https://www.penguinrandomhouse.com/books/312484/give-and-take-by-adam-grant/',
    documentTitle: 'Give and Take: A Revolutionary Approach to Success',
    sectionCitation: 'Chapters 2 & 3: The Peacock and the Panda; The Ripple Effect',
    publicationDate: '2013-04-09',
    lastVerifiedDate: '2026-10-20',
    sourcePriority: 2,
    verificationStatus: 'verified',
    notes: 'Research on Givers, Matchers, and Takers; behavioral signatures of kissing up vs kicking down, and detecting strategic reciprocity.',
    relatedNodeIds: ['JUDGE-CA-001', 'JUDGE-CA-005', 'JUDGE-AP-003']
  },
  {
    id: 'SRC-BROWN-DARING',
    name: 'Brené Brown: The Anatomy of Trust & Vulnerability Boundaries',
    officialUrl: 'https://brenebrown.com/book/daring-greatly/',
    documentTitle: 'Daring Greatly: How the Courage to Be Vulnerable Transforms Living and Leading',
    sectionCitation: 'Chapter 2: Debunking the Vulnerability Myths',
    publicationDate: '2012-09-11',
    lastVerifiedDate: '2026-10-20',
    sourcePriority: 3,
    verificationStatus: 'verified',
    notes: 'Foundational framework establishing that vulnerability without boundaries is not connection, but emotional flooding or manipulative floodlighting.',
    relatedNodeIds: ['JUDGE-TR-001', 'JUDGE-TR-002', 'JUDGE-TR-003']
  }
];
