import { EducationNode, RelationshipEdgeData, SourceRecord, SectionMeta } from '../types';

export const SECTION_METAS_V6: SectionMeta[] = [
  {
    id: 'SEC-SD-01',
    number: '01',
    title: 'Foundations & Architecture Principles',
    subtitle: 'System Definition, 5-Stage Alien Bank Evolution & Compute vs Data Intensive Models',
    summary: 'Core philosophy: A System is Components working toward a Common Goal. Evolution from single cashier code optimization to horizontal scaling, shared database, and load balancing.',
    iconName: 'Layers',
    expectedSubsections: ['System Definition', 'Alien Bank Evolution', 'Requirements Classification', 'Data vs Compute Intensive'],
    expectedAuthorities: ['SD-SYS-DEF', 'SD-BANK-LLD', 'SD-BANK-VSCALE', 'SD-BANK-HSCALE', 'SD-BANK-CENTRAL-DB', 'SD-BANK-LB', 'SD-REQ-FUNC', 'SD-REQ-NONFUNC', 'SD-DATA-INTENSIVE', 'SD-COMPUTE-INTENSIVE']
  },
  {
    id: 'SEC-SD-02',
    number: '02',
    title: 'Networking, Protocols & Communication',
    subtitle: 'DNS Resolution, TCP vs UDP, HTTP Evolutions & Real-Time Transport',
    summary: 'How machines communicate across networks: Domain resolution hierarchies, reliable TCP versus fast UDP, HTTP/1.1 to HTTP/3 QUIC, and real-time WebSockets, SSE, and WebRTC.',
    iconName: 'Network',
    expectedSubsections: ['DNS Resolution', 'Transport Protocols', 'HTTP Generations', 'Real-Time Communication'],
    expectedAuthorities: ['SD-NET-DNS', 'SD-NET-DNS-CACHE', 'SD-NET-TCP', 'SD-NET-UDP', 'SD-NET-HTTP2', 'SD-NET-HTTP3', 'SD-NET-WEBSOCKET', 'SD-NET-SSE', 'SD-NET-POLLING', 'SD-NET-WEBRTC']
  },
  {
    id: 'SEC-SD-03',
    number: '03',
    title: 'API Architecture & Data Serialization',
    subtitle: 'API Gateways, RESTful Paradigms, HTTP Verbs & Serialization Standards',
    summary: 'Decoupling clients from backends: Uniform resource endpoints, idempotency guarantees, API Gateways, JSON vs XML vs Protocol Buffers, and Telesko Course API design.',
    iconName: 'Workflow',
    expectedSubsections: ['API Gateway', 'RESTful Paradigms', 'HTTP Methods & Idempotency', 'Data Serialization', 'Telesko API Design'],
    expectedAuthorities: ['SD-API-GATEWAY', 'SD-API-REST', 'SD-API-IDEMPOTENT', 'SD-API-JSON', 'SD-API-XML', 'SD-API-PROTOBUF', 'SD-API-TELESKO-DESIGN']
  },
  {
    id: 'SEC-SD-04',
    number: '04',
    title: 'Storage Paradigms & Database Models',
    subtitle: 'Relational SQL vs NoSQL Variants, Normalization & Object Stores',
    summary: 'Choosing the right persistence technology: ACID relational tables, document stores, key-value caches, wide-column engines, graph databases, and object blob stores.',
    iconName: 'Database',
    expectedSubsections: ['Relational SQL', 'Normalization vs Denormalization', 'Document Stores', 'Key-Value Stores', 'Columnar Stores', 'Graph Databases', 'Object Storage'],
    expectedAuthorities: ['SD-DB-SQL', 'SD-DB-ACID', 'SD-DB-NORMALIZATION', 'SD-DB-NOSQL-DOC', 'SD-DB-NOSQL-KV', 'SD-DB-NOSQL-COL', 'SD-DB-NOSQL-GRAPH', 'SD-DB-BLOB-S3']
  },
  {
    id: 'SEC-SD-05',
    number: '05',
    title: 'Caching Architecture & Eviction Policies',
    subtitle: 'Multi-Tier Caching, Read/Write Strategies, Eviction Rules & Edge Anomalies',
    summary: 'Accelerating data retrieval by bridging RAM and disk latencies: Cache-Aside, Write-Through, Write-Behind, eviction policies (LRU, LFU, FIFO), TTLs, and Bloom Filters.',
    iconName: 'Zap',
    expectedSubsections: ['Cache Tiers', 'Cache Invalidation & TTL', 'Caching Strategies', 'Eviction Policies', 'Cache Anomalies'],
    expectedAuthorities: ['SD-CACHE-TIERS', 'SD-CACHE-TTL', 'SD-CACHE-ASIDE', 'SD-CACHE-READ-THROUGH', 'SD-CACHE-WRITE-THROUGH', 'SD-CACHE-WRITE-BEHIND', 'SD-CACHE-LRU', 'SD-CACHE-LFU', 'SD-CACHE-AVALANCHE', 'SD-CACHE-BLOOM-FILTER']
  },
  {
    id: 'SEC-SD-06',
    number: '06',
    title: 'Scaling Strategies & Application Compute',
    subtitle: 'Vertical Scaling vs Horizontal Scaling, Statelessness & Microservices',
    summary: 'Scaling compute elasticity: Overcoming single-node vertical hardware ceilings, horizontal scale-out clusters, stateless session management, and microservice decoupling.',
    iconName: 'Maximize2',
    expectedSubsections: ['Vertical Scaling', 'Horizontal Scaling', 'Stateless Architecture', 'Monolith vs Microservices'],
    expectedAuthorities: ['SD-SCALE-VERTICAL', 'SD-SCALE-HORIZONTAL', 'SD-SCALE-STATELESS', 'SD-SCALE-MICROSERVICES']
  },
  {
    id: 'SEC-SD-07',
    number: '07',
    title: 'Load Balancing & Traffic Distribution',
    subtitle: 'L4 vs L7 Balancing, Health Probes & Algorithmic Routing Topologies',
    summary: 'Distributing inbound requests cleanly: Transport vs application routing, active/passive health checks, Round Robin, Least Connections, Latency routing, and Consistent Hashing.',
    iconName: 'GitBranch',
    expectedSubsections: ['Load Balancer Tiers', 'Health Probes', 'Round Robin & Weighted', 'Least Connections', 'Consistent Hashing'],
    expectedAuthorities: ['SD-LB-L4', 'SD-LB-L7', 'SD-LB-HEALTH-CHECK', 'SD-LB-ROUND-ROBIN', 'SD-LB-LEAST-CONN', 'SD-LB-LATENCY', 'SD-LB-CONSISTENT-HASH']
  },
  {
    id: 'SEC-SD-08',
    number: '08',
    title: 'Replication, Consistency & CAP Theorem',
    subtitle: 'Single/Multi-Leader Topologies, Quorums, CAP Theorem & PACELC Trade-Offs',
    summary: 'Handling distributed database copies: Master-replica flows, replication lag, multi-datacenter active-active, leaderless quorums, CAP theorem proofs, and PACELC trade-offs.',
    iconName: 'Copy',
    expectedSubsections: ['Single-Leader Replication', 'Multi-Leader Replication', 'Leaderless Quorums', 'Replication Lag', 'CAP Theorem', 'PACELC Theorem'],
    expectedAuthorities: ['SD-REP-SINGLE-LEADER', 'SD-REP-MULTI-LEADER', 'SD-REP-LEADERLESS', 'SD-REP-LAG', 'SD-THM-CAP', 'SD-THM-CP', 'SD-THM-AP', 'SD-THM-PACELC']
  },
  {
    id: 'SEC-SD-09',
    number: '09',
    title: 'Sharding, Partitioning & Distribution',
    subtitle: 'Horizontal Partitioning, Range vs Hash Routing & Cross-Shard Joins',
    summary: 'Partitioning massive datasets across machines: Range-based partitions, hash-based distribution, directory lookups, virtual node rings, and managing cross-shard joins.',
    iconName: 'Grid',
    expectedSubsections: ['Horizontal Sharding', 'Range Partitioning', 'Hash Partitioning', 'Consistent Hash Ring', 'Cross-Shard Joins'],
    expectedAuthorities: ['SD-SHARD-HORIZ', 'SD-SHARD-RANGE', 'SD-SHARD-HASH', 'SD-SHARD-RING-VIRTUAL', 'SD-SHARD-CROSS-JOIN']
  },
  {
    id: 'SEC-SD-10',
    number: '10',
    title: 'Asynchronous Messaging & Event-Driven Queues',
    subtitle: 'Message Brokers, Work Queues, Pub/Sub, Priority Queues & Dead Letter Queues',
    summary: 'Decoupling time-sensitive workflows: Producer-consumer pipelines, FIFO vs Priority Queues, fan-out Pub/Sub, message delivery semantics, retries, and Dead Letter Queues.',
    iconName: 'Mail',
    expectedSubsections: ['Async Decoupling', 'Message Brokers', 'Work Queues', 'Pub/Sub Model', 'Priority Queues', 'Delivery Guarantees', 'Dead Letter Queue'],
    expectedAuthorities: ['SD-ASYNC-DECOUPLING', 'SD-MQ-BROKER', 'SD-MQ-WORK-QUEUE', 'SD-MQ-PUBSUB', 'SD-MQ-PRIORITY', 'SD-MQ-DELIVERY-SEMANTICS', 'SD-MQ-DEAD-LETTER-QUEUE']
  },
  {
    id: 'SEC-SD-11',
    number: '11',
    title: 'Reliability, Fault Tolerance & Observability',
    subtitle: 'Circuit Breakers, Rate Limiters, Three Pillars of Observability & Alerting',
    summary: 'Keeping systems resilient in production: Circuit breakers preventing cascading outages, token bucket rate limiters, structured metrics/logs/traces, and proactive alerting.',
    iconName: 'ShieldAlert',
    expectedSubsections: ['High Availability & SLAs', 'Circuit Breaker Pattern', 'Rate Limiting & Throttling', 'Observability Pillars', 'Proactive Alerting'],
    expectedAuthorities: ['SD-RES-SLA-NINES', 'SD-RES-CIRCUIT-BREAKER', 'SD-RES-RATE-LIMITER', 'SD-OBS-METRICS', 'SD-OBS-LOGGING', 'SD-OBS-TRACING', 'SD-OBS-ALERTING']
  },
  {
    id: 'SEC-SD-12',
    number: '12',
    title: 'End-to-End Real-World Case Study: Video Streaming Platform',
    subtitle: 'YouTube / Netflix Architecture: Ingestion, Transcoding, CDN & Metadata Caching',
    summary: 'Complete end-to-end video platform architecture from the transcript: Adaptive bitrate client (HLS/DASH), CDN edge nodes, chunked upload, FFmpeg transcoders, Redis view counting, and recommendation pipeline.',
    iconName: 'PlaySquare',
    expectedSubsections: ['Client Adaptive Streaming', 'CDN Edge Caching', 'Chunked Video Ingestion', 'Distributed Transcoding Engine', 'Playlist & Segment Storage', 'Metadata & View Counter', 'Recommendation Pipeline'],
    expectedAuthorities: ['SD-CASE-CLIENT-HLS', 'SD-CASE-CDN-EDGE', 'SD-CASE-UPLOAD-INGEST', 'SD-CASE-TRANSCODING-PIPELINE', 'SD-CASE-SEGMENT-STORAGE', 'SD-CASE-VIEW-COUNTER', 'SD-CASE-RECOMMENDER']
  }
];

export const SOURCES_V6: SourceRecord[] = [
  {
    id: 'SRC-SD-TRANSCRIPT-MAIN',
    name: 'Telusko System Design Masterclass (Evan & Akshai)',
    officialUrl: 'https://www.youtube.com/telusko',
    documentTitle: 'System Design Course: From Alien Bank Evolution to YouTube Architecture',
    sectionCitation: 'Full 5-Hour Course Transcripts (src/SystemDesign.md)',
    publicationDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    lastVerifiedDate: '2026-10-20',
    sourcePriority: 1,
    verificationStatus: 'verified',
    notes: 'Primary ground truth transcript covering foundations, networking, databases, caching, scaling, replication, sharding, message queues, reliability, and end-to-end streaming system design.',
    relatedNodeIds: ['SD-SYS-DEF', 'SD-BANK-LLD', 'SD-BANK-VSCALE', 'SD-BANK-HSCALE', 'SD-BANK-CENTRAL-DB', 'SD-BANK-LB']
  },
  {
    id: 'SRC-SD-CAP-THEOREM',
    name: 'Brewer CAP Theorem & PACELC Formulation',
    officialUrl: 'https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/',
    documentTitle: 'CAP Twelve Years Later: How the Rules Have Changed (Eric Brewer)',
    sectionCitation: 'Consistency, Availability, and Partition Tolerance in Distributed Systems',
    publicationDate: '2000-07-01',
    effectiveDate: '2012-05-30',
    lastVerifiedDate: '2026-10-20',
    sourcePriority: 1,
    verificationStatus: 'verified',
    notes: 'Mathematical proof and practical engineering trade-offs governing distributed databases and partitioning.',
    relatedNodeIds: ['SD-THM-CAP', 'SD-THM-CP', 'SD-THM-AP', 'SD-THM-PACELC']
  },
  {
    id: 'SRC-SD-HTTP-SPEC',
    name: 'IETF RFC Standards for Web Protocols',
    officialUrl: 'https://datatracker.ietf.org/',
    documentTitle: 'RFC 9110 (HTTP Semantics), RFC 7540 (HTTP/2), RFC 9000 (QUIC / HTTP/3)',
    sectionCitation: 'Network standards governing modern web and API communication',
    publicationDate: '2022-06-01',
    effectiveDate: '2022-06-01',
    lastVerifiedDate: '2026-10-20',
    sourcePriority: 2,
    verificationStatus: 'verified',
    notes: 'Defines multiplexing, transport streams, idempotency, and status codes referenced in transcript.',
    relatedNodeIds: ['SD-NET-TCP', 'SD-NET-UDP', 'SD-NET-HTTP2', 'SD-NET-HTTP3', 'SD-API-REST']
  }
];

export const NODES_V6: EducationNode[] = [
  // ==========================================
  // SECTION 1: FOUNDATIONS & ARCHITECTURE
  // ==========================================
  {
    id: 'SD-SYS-DEF',
    type: 'sectionHub',
    title: 'System Design Core Definition',
    abbreviation: 'SYSTEM-DEF',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'infrastructure',
    summary: 'A System is defined as Components working together towards a Common Goal. Anyone can write code that works; system design makes it work for millions of users at once.',
    mandate: [
      'Deconstruct complex multi-tiered applications into coherent interacting modules',
      'Balance scalability, latency, availability, and financial infrastructure costs',
      'Establish predictable operational baselines under extreme concurrent loads'
    ],
    powers: [
      'Unifies compute, storage, networking, and asynchronous processing',
      'Transforms single-user application code into horizontally scalable architecture',
      'Aligns business requirements with engineering trade-offs'
    ],
    limitations: [
      'Cannot overcome fundamentally broken or buggy application logic',
      'Every added architectural component introduces operational complexity and failure modes',
      'Premature over-engineering drastically inflates cloud expenditure without real user need'
    ],
    inputs: ['Business Use Cases', 'Traffic Projections', 'Data Access Patterns'],
    outputs: ['Architectural Blueprints', 'Component Schemas', 'Deployment Topologies'],
    establishingLaw: ['First Principles of Software Architecture'],
    systemDesignDetails: {
      category: 'foundations',
      definition: 'System = Components + Common Goal. The architectural process of defining hardware/software components, modules, interfaces, and data for a system to satisfy specified requirements.',
      roleAndWork: 'Sets the foundational mental model: software engineering is not merely syntax, but designing systems that scale gracefully from 10 to 10,000,000 concurrent users.',
      workingMechanism: 'Identifies core functional requirements, analyzes read/write traffic ratios, classifies data vs compute bottlenecks, and orchestrates specialized tiers (cache, app server, DB).',
      exampleUseCase: 'Evan Reddi quote from transcript: "Anyone can write code that works. System design is what makes it work for million people at once."',
      explanation: 'Without system design, an application collapses under peak concurrency even if the code passes all unit tests.',
      dependencies: ['Business Requirements', 'Traffic Estimates'],
      tradeOffs: ['System resilience vs Architectural complexity', 'Development velocity vs Long-term scalability'],
      transcriptTimestamp: '[00:00:39]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-BANK-LLD',
    type: 'process',
    title: 'Alien Bank Issue 1: Code Optimization (LLD & DSA)',
    abbreviation: 'BANK-LLD',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'local',
    category: 'education',
    summary: 'Issue 1 in Alien Bank: A single cashier takes 10 mins per customer (serving only 6/hr). Solved by training cashier to count cash faster and type faster (Code optimization via LLD and DSA).',
    mandate: [
      'Optimize algorithm complexity and inner loops before scaling hardware',
      'Eliminate O(N^2) bottlenecks and redundant disk/memory allocations',
      'Benchmark single-thread baseline execution latency'
    ],
    powers: [
      'Reduces latency by up to 50% without spending a dime on new servers',
      'Improves algorithmic time and space complexity (Big-O optimization)',
      'Maximizes CPU instructions executed per clock cycle'
    ],
    limitations: [
      'Has a hard physical ceiling: a human or CPU core cannot execute infinitely fast',
      'Cannot solve concurrency limits when multiple customers arrive simultaneously'
    ],
    inputs: ['Raw Application Code', 'Performance Profiles'],
    outputs: ['Optimized Execution Paths', 'Reduced CPU Cycles'],
    establishingLaw: ['Low-Level Design (LLD) & Algorithm Analysis'],
    systemDesignDetails: {
      category: 'foundations',
      definition: 'Low-Level Design (LLD) and algorithmic optimization focused on streamlining execution loops, data structures, and code-level efficiency.',
      roleAndWork: 'First line of defense against slowness: optimizes the application code itself before throwing expensive infrastructure at the problem.',
      workingMechanism: 'Replaces inefficient loops (O(N^2) -> O(N log N)), optimizes database query index usage, and reduces in-memory object cloning.',
      exampleUseCase: 'Alien Bank Cashier trained to count cash and type receipts faster, cutting customer processing time from 10 mins to 5 mins.',
      explanation: 'Transcript note: Before scaling servers, always verify your code quality and DSA. A slow algorithm scaled across 10 servers is just 10 slow algorithms burning money.',
      dependencies: ['SD-SYS-DEF'],
      tradeOffs: ['High initial engineering effort vs zero infrastructure cost', 'Hard ceiling limit on single-thread execution speed'],
      transcriptTimestamp: '[00:07:10]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-BANK-VSCALE',
    type: 'process',
    title: 'Alien Bank Issue 2: Vertical Scaling (Upgrading Desk)',
    abbreviation: 'BANK-VSCALE',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'local',
    category: 'infrastructure',
    summary: 'Issue 2: Customer count increases. Cashier is at peak skill. Solved by giving cashier a bigger desk, cash counting machine, and pre-filled deposit slips (Vertical Scaling).',
    mandate: [
      'Equip existing node with superior hardware resources (CPU, RAM, NVMe, GPUs)',
      'Automate auxiliary manual workflows with hardware accelerators',
      'Reduce per-request processing time from 5 mins to 3 mins'
    ],
    powers: [
      'Zero architectural code changes required (drop-in server upgrade)',
      'No network serialization latency between distributed services',
      'Simplest implementation for growing single-server systems'
    ],
    limitations: [
      'Strict hardware limit: Motherboards have maximum socket and RAM limits',
      'Costs scale exponentially rather than linearly',
      'Single Point of Failure (SPOF): If the super-server dies, the whole bank goes down'
    ],
    inputs: ['Growing Request Volume', 'Hardware Upgrades'],
    outputs: ['Higher Single-Node Throughput'],
    establishingLaw: ['Vertical Scaling (Scale-Up) Architecture'],
    systemDesignDetails: {
      category: 'scaling',
      definition: 'Scaling up a system by enhancing the computing power, memory, and specialized hardware of the existing machine.',
      roleAndWork: 'Boosts processing capacity per transaction without altering application code or distributed coordination.',
      workingMechanism: 'Upgrades the server CPU cores, increases RAM, and adds hardware peripherals like hardware cash counting machines.',
      exampleUseCase: 'Alien Bank Cashier provided with a cash-counting machine, bigger desk, and pre-filled customer slip forms, reducing transaction time from 5 to 3 mins.',
      explanation: 'Transcript note: Upgrading the table and adding machines is vertical scaling. But remember, every machine has a maximum hardware ceiling.',
      dependencies: ['SD-BANK-LLD'],
      tradeOffs: ['Zero code refactoring vs Exponential cost & Hardware ceiling', 'Simple maintenance vs Single Point of Failure (SPOF)'],
      transcriptTimestamp: '[00:09:36]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-BANK-HSCALE',
    type: 'process',
    title: 'Alien Bank Issue 3: Horizontal Scaling (Multiple Counters)',
    abbreviation: 'BANK-HSCALE',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'union',
    category: 'infrastructure',
    summary: 'Issue 3: Customers wait 27 minutes in a single queue. Upgrading desk reached its ceiling. Solved by adding Counter 2 (Horizontal Scaling / Adding Parallel Servers).',
    mandate: [
      'Scale capacity horizontally by provisioning additional parallel server instances',
      'Distribute incoming client queue across independent commodity machines',
      'Eliminate wait queues by processing requests concurrently'
    ],
    powers: [
      'Theoretical infinite scaling: Can keep adding nodes as demand expands',
      'Fault tolerance: If Counter 1 takes a break, Counter 2 remains operational',
      'Linear cost scaling using commodity cloud virtual machines'
    ],
    limitations: [
      'Introduces distributed state synchronization challenges',
      'Requires independent shared data tier to prevent data discrepancies',
      'Requires load distribution layer to balance incoming clients'
    ],
    inputs: ['Surplus Customer Traffic', 'Commodity Server Nodes'],
    outputs: ['Concurrent Request Execution', 'Dramatically Reduced Wait Times'],
    establishingLaw: ['Horizontal Scaling (Scale-Out) Architecture'],
    systemDesignDetails: {
      category: 'scaling',
      definition: 'Scaling out by deploying multiple parallel server instances working in tandem to handle inbound request volume.',
      roleAndWork: 'Overcomes the vertical hardware ceiling by dividing traffic among multiple concurrent compute nodes.',
      workingMechanism: 'Spawns Counter 1 and Counter 2. Customer 1 visits Counter 1; Customer 2 visits Counter 2 simultaneously.',
      exampleUseCase: 'Alien Bank opens Cash Counter 2 so the 10th customer does not have to wait 27 minutes for a single cashier.',
      explanation: 'Transcript note: Horizontal scaling allows endless scale, but immediately creates two new problems: Data Discrepancy (Issue 4) and Uneven Traffic Distribution (Issue 5).',
      dependencies: ['SD-BANK-VSCALE'],
      tradeOffs: ['Infinite horizontal scale vs Distributed state coordination', 'Fault tolerance vs Data consistency complexities'],
      transcriptTimestamp: '[00:11:21]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-BANK-CENTRAL-DB',
    type: 'institution',
    title: 'Alien Bank Issue 4: Centralized Database (Data Consistency)',
    abbreviation: 'BANK-CENTRAL-DB',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'union',
    category: 'infrastructure',
    summary: 'Issue 4: Counter 1 and Counter 2 maintain separate records, causing data discrepancy (double withdrawal exploit). Solved by introducing a Shared Centralized Database.',
    mandate: [
      'Provide a Single Source of Truth (SSOT) across all compute servers',
      'Prevent double spending, data race conditions, and out-of-sync state',
      'Guarantee transactional integrity across concurrent transactions'
    ],
    powers: [
      'Guarantees all counters validate and mutate the same ledger',
      'Enables Counter 2 to instantly observe deposits made at Counter 1',
      'Enforces consistency and ACID transactional boundaries'
    ],
    limitations: [
      'The centralized database becomes the new central bottleneck under heavy traffic',
      'Database connection limits and lock contention limit write scaling',
      'If the central database fails, all application servers stop working'
    ],
    inputs: ['Deposit & Withdrawal Transactions from all Counters'],
    outputs: ['Consistent Account Balances', 'Unified Transaction Log'],
    establishingLaw: ['Single Source of Truth & Shared Storage Tier'],
    systemDesignDetails: {
      category: 'storage-databases',
      definition: 'A centralized data storage system accessible by all application servers to preserve data consistency and eliminate discrepancies.',
      roleAndWork: 'Acts as the unified state repository so that any server can process any client request with full knowledge of current state.',
      workingMechanism: 'Counter 1 deposits cash into Central DB. Counter 2 queries Central DB to check current balance before approving a withdrawal.',
      exampleUseCase: 'Alien Bank connects Counter 1 and Counter 2 to a shared bank ledger to stop a rogue customer from withdrawing money twice from un-synced counters.',
      explanation: 'Transcript note: Data discrepancy is a catastrophic flaw. A centralized database ensures that whichever counter serves you, your balance is accurate.',
      dependencies: ['SD-BANK-HSCALE'],
      tradeOffs: ['Strong consistency vs Centralized database bottleneck', 'Single source of truth vs Single point of failure'],
      transcriptTimestamp: '[00:13:34]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-BANK-LB',
    type: 'statutoryRegulator',
    title: 'Alien Bank Issue 5: Load Balancer (The Middleman)',
    abbreviation: 'BANK-LB',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'union',
    category: 'infrastructure',
    summary: 'Issue 5: Customers enter near Counter 1; Counter 1 is overwhelmed while Counter 2 sits idle. Solved by placing a Middleman at the entrance: The Load Balancer.',
    mandate: [
      'Inspect load across all active servers and distribute incoming requests evenly',
      'Monitor server health: detect crashed or stalled nodes and reroute traffic',
      'Maximize hardware utilization and minimize average client wait times'
    ],
    powers: [
      'Eliminates hotspots by preventing any single server from becoming overwhelmed',
      'Provides dynamic failover: Automatically reroutes traffic if a counter breaks down',
      'Decouples client knowledge of internal backend server topologies'
    ],
    limitations: [
      'Load balancer itself can become a single point of failure if not deployed in active-passive pairs',
      'Layer 7 inspection adds microsecond overhead to request round-trips',
      'Session stickiness requires extra state tracking'
    ],
    inputs: ['Incoming Client Traffic Stream', 'Server Health Telemetry'],
    outputs: ['Evenly Distributed Traffic', 'Failover Routing Signals'],
    establishingLaw: ['Load Balancing & Traffic Distribution Principles'],
    systemDesignDetails: {
      category: 'load-balancing',
      definition: 'A reverse-proxy traffic manager that distributes incoming network traffic across multiple backend servers based on server health and algorithms.',
      roleAndWork: 'Ensures optimal resource utilization, prevents server starvation/hotspots, and provides automated high availability failover.',
      workingMechanism: 'Middleman stands at the bank door. Checks queue lengths at Counter 1 and Counter 2, and directs arriving customers to the least loaded counter.',
      exampleUseCase: 'Alien Bank entrance middleman prevents Counter 1 from having 10 people while Counter 2 has 0 people. When Counter 1 breaks, middleman sends all customers to Counter 2.',
      explanation: 'Transcript note: The middleman performs two jobs: 1) Checks server health, 2) Distributes requests equally. This is the exact definition of a Load Balancer.',
      dependencies: ['SD-BANK-HSCALE', 'SD-BANK-CENTRAL-DB'],
      tradeOffs: ['Balanced server utilization vs Network hop overhead', 'High availability routing vs Load balancer high availability redundancy requirement'],
      transcriptTimestamp: '[00:14:57]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-DATA-INTENSIVE',
    type: 'department',
    title: 'Data-Intensive Systems',
    abbreviation: 'DATA-INTENSIVE',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'union',
    category: 'higher-education',
    summary: 'Systems where the primary bottleneck is data volume, complexity, mutations, and speed of retrieval (e.g., Instagram, YouTube, e-Commerce), rather than raw CPU calculations.',
    mandate: [
      'Ingest, store, transform, index, and retrieve massive volumes of user data',
      'Optimize database queries, indexing, partitioning, and caching layers',
      'Deliver low-latency media and feed reads to millions of concurrent users'
    ],
    powers: [
      'Supports high Read/Write QPS across terabytes to petabytes of data',
      'Employs multi-tier caching (Redis, CDN) to bypass heavy relational joins',
      'Scales storage horizontally through sharding and replica distribution'
    ],
    limitations: [
      'Requires heavy caching and database replication infrastructure',
      'Storage and bandwidth egress costs dominate infrastructure budgets',
      'Data consistency across globally distributed replicas requires careful CAP trade-offs'
    ],
    inputs: ['Media Uploads', 'User Posts', 'Query Filters', 'Clickstreams'],
    outputs: ['Personalized Feeds', 'Fast Query Responses', 'Media Streams'],
    establishingLaw: ['Data-Intensive Application Architecture'],
    systemDesignDetails: {
      category: 'foundations',
      definition: 'An application where the primary complexity and resource consumption lies in data storage, data velocity, caching, and database retrieval.',
      roleAndWork: 'Focuses engineering investment into databases, indexing, CDN edge caching, and sharding rather than heavy GPU/CPU clusters.',
      workingMechanism: 'User posts photo/video -> written to blob store -> metadata saved to DB -> cached in Redis -> served via CDN to followers.',
      exampleUseCase: 'Instagram & YouTube: Users upload photos/videos and browse feeds. The compute is trivial (rendering JSON/HTML), but data volume and I/O are massive.',
      explanation: 'Transcript note: Always ask first: Is this application data-intensive or compute-intensive? If data-intensive, focus on DB, cache, and CDN.',
      dependencies: ['SD-SYS-DEF'],
      tradeOffs: ['Massive data caching vs Memory RAM costs', 'Eventual consistency vs Complex synchronization'],
      transcriptTimestamp: '[00:36:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-COMPUTE-INTENSIVE',
    type: 'department',
    title: 'Compute-Intensive Systems',
    abbreviation: 'COMPUTE-INTENSIVE',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'union',
    category: 'higher-education',
    summary: 'Systems where the primary bottleneck is intense mathematical calculation, CPU/GPU processing, or complex algorithms (e.g., Flight Simulators, AI model training, Video 3D rendering).',
    mandate: [
      'Perform complex mathematical computations, simulations, and real-time physics',
      'Utilize specialized multi-core CPUs, GPUs, and parallel processing clusters',
      'Deliver deterministic computational outputs under strict latency constraints'
    ],
    powers: [
      'Executes billions of floating-point operations per second (FLOPS)',
      'Parallelizes matrix multiplications and algorithmic graph passes',
      'Handles physics simulation, aerodynamics, and generative AI inferences'
    ],
    limitations: [
      'Database and caching improvements provide virtually zero benefit',
      'Requires expensive GPU/TPU compute instances',
      'Thermal and power limitations constrain single-box compute scalability'
    ],
    inputs: ['Raw Coordinates', 'Simulation Parameters', 'Neural Network Tensors'],
    outputs: ['Flight Physics State', 'Rendered Video Frames', 'Inference Predictions'],
    establishingLaw: ['High-Performance Computing (HPC) Architecture'],
    systemDesignDetails: {
      category: 'foundations',
      definition: 'An application where the primary bottleneck is CPU/GPU cycles, complex calculations, and heavy mathematical processing rather than I/O.',
      roleAndWork: 'Focuses engineering investment into algorithmic parallelization, multi-threading, GPU clusters, and SIMD hardware acceleration.',
      workingMechanism: 'Raw inputs fed to specialized compute workers -> calculations executed across CUDA cores -> results returned or streamed.',
      exampleUseCase: 'Flight Simulator: Needs to compute aerodynamics, wind vectors, and physics 120 times a second. Adding more databases does not help; upgrading CPU/GPU does.',
      explanation: 'Transcript note: In a simulator or rendering engine, computation is king. Caching does not solve a simulation that must compute new physics every millisecond.',
      dependencies: ['SD-SYS-DEF'],
      tradeOffs: ['Massive computational power vs High GPU hardware costs', 'Raw computation speed vs Thermal and power ceilings'],
      transcriptTimestamp: '[00:45:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-REQ-FUNC',
    type: 'legalInstrument',
    title: 'Functional Requirements',
    abbreviation: 'REQ-FUNC',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'legislation',
    summary: 'The explicit features, APIs, and behaviors a system must offer its end users (e.g., User can deposit cash, order product, post a comment, stream a video).',
    mandate: [
      'Enumerate core user-facing capabilities and business transactions',
      'Define clear API inputs, business validations, and expected outputs',
      'Establish acceptance criteria for product features'
    ],
    powers: [
      'Guides database entity-relationship schema design',
      'Dictates endpoint routing and user interaction flows',
      'Provides unambiguous definition of system completion'
    ],
    limitations: [
      'Does NOT address whether the system will survive under heavy traffic',
      'Focusing exclusively on functional requirements leads to immediate crash in production'
    ],
    inputs: ['Product Vision', 'User Stories'],
    outputs: ['API Endpoints', 'Database Schemas', 'Feature Logic'],
    establishingLaw: ['Software Requirements Engineering'],
    systemDesignDetails: {
      category: 'foundations',
      definition: 'Statements of services the system should provide, how the system should react to particular inputs, and how it behaves in specific situations.',
      roleAndWork: 'Defines WHAT the system does from a user perspective.',
      workingMechanism: 'Product manager defines user actions: 1) User logs in, 2) User deposits cash, 3) User generates PDF receipt.',
      exampleUseCase: 'Alien Bank functional requirements: Customer can deposit money, withdraw money, and receive a paper receipt.',
      explanation: 'Transcript note: Functional requirements are straightforward features. But system design interviews test whether you know the Non-Functional requirements!',
      dependencies: ['SD-SYS-DEF'],
      tradeOffs: ['Feature richness vs Development velocity and testing scope'],
      transcriptTimestamp: '[00:01:47]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-REQ-NONFUNC',
    type: 'legalInstrument',
    title: 'Non-Functional Requirements (NFRs)',
    abbreviation: 'REQ-NONFUNC',
    sectionId: 'SEC-SD-01',
    sectionNumber: '01',
    level: 'constitutional',
    category: 'legislation',
    summary: 'The operational quality attributes that govern HOW the system performs: Latency, Throughput (QPS), Availability (SLA), Fault Tolerance, Scalability, and Consistency.',
    mandate: [
      'Specify latency budgets (e.g., P99 latency < 200ms)',
      'Define uptime availability targets (e.g., 99.99% "four nines")',
      'Dictate data durability and disaster recovery RTO / RPO metrics'
    ],
    powers: [
      'Forces architectural decisions: Caching, replication, load balancing, sharding',
      'Prevents catastrophic system outages during peak flash sales and rush hours',
      'Protects brand reputation and user retention through reliable performance'
    ],
    limitations: [
      'Every 9 added to availability (99.9% -> 99.99% -> 99.999%) exponentially escalates cost',
      'Strict zero-latency consistency conflicts with high availability (CAP theorem)'
    ],
    inputs: ['SLA Commitments', 'Peak Concurrency Forecasts', 'Business Risk Thresholds'],
    outputs: ['Architecture Topology', 'Redundancy Plans', 'Sizing Calculations'],
    establishingLaw: ['System Architecture Quality Standards'],
    systemDesignDetails: {
      category: 'foundations',
      definition: 'Criteria that can be used to judge the operation of a system, rather than specific behaviors (e.g., scalability, latency, availability, fault tolerance).',
      roleAndWork: 'Defines HOW WELL the system performs under stress.',
      workingMechanism: 'Analyzes target QPS, sets latency percentiles (P50, P95, P99), defines uptime SLAs, and designs failover mechanisms.',
      exampleUseCase: 'Alien Bank NFR: Customer must not wait more than 3 minutes; Bank must operate 99.9% of the year; Transactions must be ACID consistent.',
      explanation: 'Transcript note: The question in an interview will be: What are the latency requirements? What if a server crashes? How will you handle rush hour? That is NFR.',
      dependencies: ['SD-REQ-FUNC'],
      tradeOffs: ['Extreme availability vs Exponential infrastructure and licensing cost', 'Sub-millisecond latency vs Strong consistency'],
      transcriptTimestamp: '[00:02:40]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 2: NETWORKING & PROTOCOLS
  // ==========================================
  {
    id: 'SD-NET-DNS',
    type: 'sectionHub',
    title: 'Domain Name System (DNS)',
    abbreviation: 'DNS',
    sectionId: 'SEC-SD-02',
    sectionNumber: '02',
    level: 'union',
    category: 'infrastructure',
    summary: 'The phonebook of the internet. Translates human-readable domain names (e.g., telusko.com) into machine-routable IP addresses (e.g., 142.250.190.46) via a hierarchical resolution chain.',
    mandate: [
      'Resolve domain names into IPv4/IPv6 destination addresses',
      'Distribute resolution workload across root, TLD, and authoritative nameservers',
      'Cache lookup records locally across browser, OS, and recursive resolvers'
    ],
    powers: [
      'Shields end users from memorizing numerical IP addresses',
      'Enables GeoDNS and Anycast routing to direct users to the geographically nearest server',
      'Supports blue/green deployments and weighted traffic migrations via DNS record updates'
    ],
    limitations: [
      'DNS caching TTL delays immediate global propagation of IP address changes',
      'Vulnerable to DNS spoofing and DDoS attacks on root/authoritative servers',
      'DNS cannot detect server health at the millisecond application level'
    ],
    inputs: ['Domain Name (e.g., telusko.com)'],
    outputs: ['Server IP Address (e.g., 192.0.2.1)'],
    establishingLaw: ['RFC 1034 & RFC 1035'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'A hierarchical and distributed naming system for computers, services, and other resources connected to the Internet or other Internet Protocol (IP) networks.',
      roleAndWork: 'First step in every web request: converts the URL typed by user into an IP address so client packets know where to go.',
      workingMechanism: 'Browser cache -> OS resolver -> ISP / Recursive Resolver -> Root Server (.) -> TLD Server (.com) -> Authoritative Nameserver (ns1.telusko.com) -> Returns IP.',
      exampleUseCase: 'User types telusko.com. DNS resolves it across 350+ million registered global domains in under 20ms using hierarchical caching.',
      explanation: 'Transcript note: There are more than 350 million domains. Storing them in a single flat server is impossible. DNS uses hierarchical delegation (Root -> TLD -> Authoritative).',
      dependencies: ['SD-SYS-DEF'],
      tradeOffs: ['Long TTL reduces DNS queries vs Slow failover propagation', 'Short TTL enables fast IP switching vs High recursive DNS lookup traffic'],
      transcriptTimestamp: '[01:00:02]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-NET-TCP',
    type: 'process',
    title: 'TCP Protocol & 3-Way Handshake',
    abbreviation: 'TCP',
    sectionId: 'SEC-SD-02',
    sectionNumber: '02',
    level: 'union',
    category: 'infrastructure',
    summary: 'Connection-oriented transport protocol guaranteeing reliable, in-order packet delivery via 3-way handshake (SYN, SYN-ACK, ACK), flow control, and automatic retransmission.',
    mandate: [
      'Establish a verified bidirectional connection between client and server',
      'Guarantee 100% data transmission without packet loss or corruption',
      'Ensure bytes arrive in the exact order they were transmitted'
    ],
    powers: [
      'Automatic packet retransmission upon packet loss detection',
      'Congestion control prevents flooding bottlenecked network links',
      'Backbone protocol for HTTP/1.1, HTTP/2, database connections, and APIs'
    ],
    limitations: [
      'Handshake latency overhead: 1.5 RTT delay before sending first data byte',
      'Head-of-Line (HoL) blocking: If packet #2 is lost, packets #3 and #4 must wait',
      'High protocol header overhead compared to lightweight UDP'
    ],
    inputs: ['Raw Application Bytes', 'Destination IP and Port'],
    outputs: ['Ordered Byte Stream', 'Delivery Acknowledgments'],
    establishingLaw: ['RFC 793 Transmission Control Protocol'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'A connection-oriented communications protocol that facilitates the exchange of messages between computing devices in a network.',
      roleAndWork: 'Ensures zero data loss for critical web transactions, financial operations, APIs, and document transfers.',
      workingMechanism: 'Client sends SYN -> Server responds SYN-ACK -> Client returns ACK -> Connection Established -> Data stream transmitted with Sequence Numbers.',
      exampleUseCase: 'Online banking, e-commerce checkout, and REST APIs: losing a single packet could mean losing money or corrupting order data.',
      explanation: 'Transcript note: TCP ensures that whatever you send will definitely reach the other end in order. If a packet is lost, it retries automatically.',
      dependencies: ['SD-NET-DNS'],
      tradeOffs: ['Guaranteed packet delivery vs Latency overhead of 3-way handshake', 'In-order delivery vs Head-of-line blocking on packet loss'],
      transcriptTimestamp: '[00:25:35]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN', 'SRC-SD-HTTP-SPEC'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-NET-UDP',
    type: 'process',
    title: 'UDP Protocol (Low-Latency Datagrams)',
    abbreviation: 'UDP',
    sectionId: 'SEC-SD-02',
    sectionNumber: '02',
    level: 'union',
    category: 'infrastructure',
    summary: 'Connectionless, lightweight transport protocol that fires packets without handshakes or retransmissions. Ideal for real-time video streaming, VoIP, and gaming where speed trumps perfection.',
    mandate: [
      'Transmit packets immediately with minimal header overhead (8 bytes vs 20+ bytes TCP)',
      'Eliminate connection handshake delay and head-of-line blocking',
      'Deliver real-time audio, video, and gaming sensor telemetry'
    ],
    powers: [
      'Zero round-trip handshake delay (fire and forget)',
      'No retransmission latency: dropped frames are simply skipped',
      'Foundation for modern HTTP/3 (QUIC) and WebRTC media channels'
    ],
    limitations: [
      'No delivery guarantee: packets can be dropped silently',
      'No ordering guarantee: packet 4 can arrive before packet 2',
      'Application code must handle any needed error recovery'
    ],
    inputs: ['Real-Time Audio/Video Frames', 'Game State Packets'],
    outputs: ['Ultra-Low Latency Datagram Stream'],
    establishingLaw: ['RFC 768 User Datagram Protocol'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'A communications protocol that offers a limited amount of service when messages are exchanged between computers in a network with no formal handshake.',
      roleAndWork: 'Prioritizes raw speed and real-time freshness over 100% lossless delivery.',
      workingMechanism: 'Client packages datagram with destination port and sends immediately. Server receives packets as they arrive; missing packets are ignored.',
      exampleUseCase: 'Live video streaming (Cricket match) or Discord voice call: If 2 frames drop in a 60fps video, user barely notices; waiting 500ms to retransmit would ruin live experience.',
      explanation: 'Transcript note: In video streaming and gaming, real-time speed matters more than perfection. Dropping a frame is fine; buffering is unacceptable.',
      dependencies: ['SD-NET-DNS'],
      tradeOffs: ['Ultra-low latency vs Potential packet loss', 'Zero handshake overhead vs No ordering guarantees'],
      transcriptTimestamp: '[04:50:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-NET-HTTP2',
    type: 'process',
    title: 'HTTP/2 Protocol (Multiplexing)',
    abbreviation: 'HTTP/2',
    sectionId: 'SEC-SD-02',
    sectionNumber: '02',
    level: 'union',
    category: 'infrastructure',
    summary: 'Binary protocol upgrade over HTTP/1.1 introducing multiplexing over a single TCP connection, HPACK header compression, and server push to drastically reduce page load latencies.',
    mandate: [
      'Multiplex hundreds of concurrent HTTP requests and responses over a single TCP connection',
      'Eliminate HTTP/1.1 browser limit of 6 connections per domain',
      'Compress repetitive HTTP headers using HPACK differential tables'
    ],
    powers: [
      'Stops connection churn and redundant 3-way handshakes',
      'Allows prioritization of critical CSS/JS over background images',
      'Binary framing eliminates whitespace and text parsing overhead'
    ],
    limitations: [
      'TCP-level Head-of-Line blocking: If a single packet drops on the TCP link, ALL multiplexed HTTP streams pause',
      'Complex protocol implementation compared to text-based HTTP/1.1'
    ],
    inputs: ['Multiple Concurrent Resource Requests'],
    outputs: ['Multiplexed Binary Frames', 'Compressed HTTP Headers'],
    establishingLaw: ['RFC 7540 HTTP/2'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'A major revision of the HTTP network protocol used by the World Wide Web, derived from the earlier SPDY protocol.',
      roleAndWork: 'Accelerates web application loading by transmitting multiple parallel assets over one TCP connection.',
      workingMechanism: 'Breaks HTTP requests into binary frames labeled with Stream IDs. Sends frames concurrently over one TCP socket; receiver interleaves and reassembles them.',
      exampleUseCase: 'Webpage with 80 icons, CSS, and JS files loads instantly over 1 connection instead of creating 14 separate slow TCP connections.',
      explanation: 'Transcript note: In HTTP/1.1, loading 20 images opened multiple connections and blocked each other. HTTP/2 sends them all simultaneously through one pipe.',
      dependencies: ['SD-NET-TCP'],
      tradeOffs: ['Full multiplexing over single connection vs TCP-level head-of-line blocking on packet loss'],
      transcriptTimestamp: '[01:15:02]'
    },
    sourceIds: ['SRC-SD-HTTP-SPEC'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-NET-HTTP3',
    type: 'process',
    title: 'HTTP/3 & QUIC Protocol',
    abbreviation: 'HTTP/3-QUIC',
    sectionId: 'SEC-SD-02',
    sectionNumber: '02',
    level: 'union',
    category: 'infrastructure',
    summary: 'Next-generation web protocol replacing TCP with QUIC over UDP. Eliminates TCP Head-of-Line blocking, enables 0-RTT connection resumption, and provides seamless mobile connection migration.',
    mandate: [
      'Solve TCP Head-of-Line blocking once and for all at the transport layer',
      'Enable 0-RTT (Zero Round-Trip Time) handshake for returning clients',
      'Provide connection survival when user switches from Wi-Fi to mobile 5G'
    ],
    powers: [
      'Each stream in QUIC is independent: packet loss on stream A never blocks stream B',
      'Built-in TLS 1.3 encryption integrated into the initial handshake',
      'Connection ID allows uninterrupted video playback when switching network interfaces'
    ],
    limitations: [
      'Higher CPU usage on servers due to UDP user-space processing',
      'Some corporate firewalls block UDP port 443 traffic'
    ],
    inputs: ['Client TLS Requests over UDP'],
    outputs: ['Lossless Independent Streams', 'Instant Connection Resumption'],
    establishingLaw: ['RFC 9000 & RFC 9114'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'The third major version of the Hypertext Transfer Protocol, using QUIC over UDP rather than TCP.',
      roleAndWork: 'Provides the fastest possible web and video streaming transport across mobile and lossy cellular networks.',
      workingMechanism: 'QUIC runs over UDP in user space, embedding independent stream recovery and TLS 1.3 encryption directly into transport frames.',
      exampleUseCase: 'YouTube mobile app streaming video while riding in a car switching between Wi-Fi and cell towers without buffering or dropping connection.',
      explanation: 'Transcript note: HTTP/3 solves the fatal flaw of HTTP/2 by moving to UDP. If one packet drops, only that one stream pauses, not the entire page.',
      dependencies: ['SD-NET-UDP'],
      tradeOffs: ['Zero HoL blocking and connection migration vs Higher server CPU load for UDP handling'],
      transcriptTimestamp: '[01:15:02]'
    },
    sourceIds: ['SRC-SD-HTTP-SPEC'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-NET-WEBSOCKET',
    type: 'process',
    title: 'WebSockets (Full-Duplex Communication)',
    abbreviation: 'WEBSOCKET',
    sectionId: 'SEC-SD-02',
    sectionNumber: '02',
    level: 'state',
    category: 'infrastructure',
    summary: 'Persistent, bi-directional, full-duplex TCP communication protocol initiated via HTTP handshake. Allows server to push data instantly to client without polling.',
    mandate: [
      'Maintain an open TCP channel for instant bidirectional message exchange',
      'Eliminate HTTP polling header overhead (2 bytes frame header vs 800 bytes HTTP headers)',
      'Power real-time interactive experiences: chat, stock tickers, gaming, collaborative whiteboards'
    ],
    powers: [
      'Server can push updates to client with sub-10ms latency',
      'Drastically reduces server CPU consumption compared to frequent short polling',
      'Keeps active connection state alive using lightweight ping/pong heartbeats'
    ],
    limitations: [
      'Stateful connection: Servers must hold open sockets in memory (RAM limit)',
      'Requires sticky sessions or a shared pub/sub redis backplane to broadcast across servers',
      'Firewalls and proxies occasionally drop idle persistent connections'
    ],
    inputs: ['HTTP 101 Upgrade Request', 'Real-time JSON/Binary Messages'],
    outputs: ['Persistent Duplex Socket', 'Instant Server Push Messages'],
    establishingLaw: ['RFC 6455 The WebSocket Protocol'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'A computer communications protocol, providing full-duplex communication channels over a single TCP connection.',
      roleAndWork: 'Enables genuine two-way real-time communication between web client and server.',
      workingMechanism: 'Client sends HTTP GET with `Upgrade: websocket`. Server responds `101 Switching Protocols`. Socket remains open indefinitely for bidirectional framed data.',
      exampleUseCase: 'WhatsApp Web or Live Chat: When a friend sends you a message, the server immediately pushes it down the open socket onto your screen.',
      explanation: 'Transcript note: Polling wastes huge server resources asking "Any new messages? Any new messages?". WebSockets keep a channel open so the server tells you when there is a message.',
      dependencies: ['SD-NET-TCP'],
      tradeOffs: ['Instant real-time push vs High server memory consumption for millions of idle sockets', 'Requires Redis Pub/Sub backplane for multi-server broadcasts'],
      transcriptTimestamp: '[03:05:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 3: API ARCHITECTURE & SERIALIZATION
  // ==========================================
  {
    id: 'SD-API-GATEWAY',
    type: 'sectionHub',
    title: 'API Gateway & Reverse Proxy',
    abbreviation: 'API-GATEWAY',
    sectionId: 'SEC-SD-03',
    sectionNumber: '03',
    level: 'union',
    category: 'infrastructure',
    summary: 'A single entry point for all clients that encapsulates internal microservices, handles authentication, SSL termination, rate limiting, request validation, and smart routing.',
    mandate: [
      'Act as the public front door for all mobile, web, and third-party API clients',
      'Verify JWT / OAuth tokens and enforce rate limiting before traffic hits backend servers',
      'Aggregate responses from multiple backend microservices into a single payload'
    ],
    powers: [
      'Hides internal microservices topology and private IP addressing',
      'Offloads SSL/TLS termination and CORS headers from application workers',
      'Provides dynamic path-based routing (`/users` -> UserService, `/orders` -> OrderService)'
    ],
    limitations: [
      'Can become a bottleneck or Single Point of Failure if not scaled horizontally',
      'Adds a few milliseconds of latency to every API call',
      'Configuration logic can become convoluted with complex routing rules'
    ],
    inputs: ['External Client API Requests'],
    outputs: ['Authenticated, Routed Internal Service Calls'],
    establishingLaw: ['Microservices API Gateway Pattern'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'An API management tool that sits between a client and a collection of backend services, acting as a single entry point.',
      roleAndWork: 'Shields internal microservices from the public internet and centralizes cross-cutting concerns (Auth, Rate Limiting, SSL, Logging).',
      workingMechanism: 'Client hits api.telusko.com/courses -> Gateway validates JWT auth token -> checks rate limit -> proxies call to Course Service on private subnet -> returns response.',
      exampleUseCase: 'Netflix / E-commerce mobile app: Instead of mobile app making 15 separate calls to 15 microservices, it makes 1 call to API Gateway, which fans out and returns combined data.',
      explanation: 'Transcript note: In application code, we hide the complexity of dealing with databases and expose clean endpoints. The API Gateway orchestrates these endpoints for the world.',
      dependencies: ['SD-NET-HTTP2'],
      tradeOffs: ['Centralized security and routing vs Gateway bottleneck and configuration complexity'],
      transcriptTimestamp: '[00:23:01]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-API-REST',
    type: 'process',
    title: 'RESTful API Architecture',
    abbreviation: 'REST',
    sectionId: 'SEC-SD-03',
    sectionNumber: '03',
    level: 'state',
    category: 'education',
    summary: 'Resource-oriented architectural style using standard HTTP verbs (GET, POST, PUT, DELETE), stateless communication, and clear hierarchical URI naming conventions.',
    mandate: [
      'Represent system entities as nouns in URI paths (`/courses`, `/lessons`, `/comments`)',
      'Use standard HTTP status codes (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Error)',
      'Ensure complete statelessness: each request contains all auth and contextual data needed'
    ],
    powers: [
      'Universal compatibility: Any programming language or platform can consume REST APIs',
      'Cacheable: HTTP GET responses can be cached by browsers, proxies, and CDNs',
      'Decouples client frontend evolution completely from backend data schemas'
    ],
    limitations: [
      'Over-fetching: Client receives 30 fields when it only needs user name',
      'Under-fetching: Requires multiple round-trips to fetch nested resources',
      'Statelessness requires sending auth tokens on every single request'
    ],
    inputs: ['HTTP Requests with URI Paths and JSON Bodies'],
    outputs: ['JSON Payloads with Standard HTTP Status Codes'],
    establishingLaw: ['Roy Fielding REST Dissertation (2000)'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'Representational State Transfer (REST): an architectural style for providing standards between computer systems on the web.',
      roleAndWork: 'Standardizes how web and mobile applications interact with backend data entities.',
      workingMechanism: 'Endpoints represent resources: `GET /api/courses` (fetch), `POST /api/courses` (create), `PUT /api/courses/:id` (update), `DELETE /api/courses/:id` (remove).',
      exampleUseCase: 'Telesko platform REST APIs designed in transcript: `GET /students`, `POST /courses/:id/comments`, `GET /courses/:id/lessons`.',
      explanation: 'Transcript note: In REST, we structure our endpoints logically around entities and operations. We use JSON objects so any client can consume it easily.',
      dependencies: ['SD-API-GATEWAY'],
      tradeOffs: ['Universal simplicity and standard caching vs Potential over-fetching/under-fetching compared to GraphQL'],
      transcriptTimestamp: '[00:24:01]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-API-PROTOBUF',
    type: 'process',
    title: 'Protocol Buffers (Protobuf) & gRPC',
    abbreviation: 'PROTOBUF',
    sectionId: 'SEC-SD-03',
    sectionNumber: '03',
    level: 'state',
    category: 'infrastructure',
    summary: 'Language-neutral, platform-neutral binary serialization mechanism by Google. Drastically smaller, faster, and strongly-typed compared to text-based JSON and XML.',
    mandate: [
      'Define strict interface schemas in `.proto` files with field tags and types',
      'Serialize structured data into compact binary representations',
      'Power ultra-high-speed inter-service RPC communication inside microservices clusters'
    ],
    powers: [
      'Up to 6x-10x faster serialization and deserialization speed than JSON',
      'Payload size is 30%-50% smaller than JSON (omits repeating string keys)',
      'Strict backward and forward compatibility through numbered field tags'
    ],
    limitations: [
      'Not human-readable: Cannot inspect raw payloads in browser network tab without tooling',
      'Requires compiling `.proto` schemas into target programming languages',
      'Browser support requires gRPC-Web proxy translation'
    ],
    inputs: ['Compiled Typed Objects', 'Schema Definitions'],
    outputs: ['Compact Binary Byte Stream'],
    establishingLaw: ['Google Protocol Buffers & gRPC Standards'],
    systemDesignDetails: {
      category: 'networking-apis',
      definition: 'A method of serializing structured data developed by Google, used extensively for inter-service RPC communications.',
      roleAndWork: 'Replaces verbose text JSON for internal microservice-to-microservice communication where throughput and latency are paramount.',
      workingMechanism: 'Schema defined in `.proto` -> compiled to Java/Go/Python -> data serialized to binary using tag numbers instead of field names -> sent over HTTP/2.',
      exampleUseCase: 'Internal microservice fleet: OrderService calling InventoryService millions of times an hour saves massive CPU and network bandwidth using Protobuf over JSON.',
      explanation: 'Transcript note: When XML was introduced it was heavy; JSON made it simpler. But for high-throughput internal servers, binary Protobuf is vastly faster.',
      dependencies: ['SD-API-REST'],
      tradeOffs: ['Extreme speed and compactness vs Lack of human readability and tooling complexity'],
      transcriptTimestamp: '[01:15:02]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 4: DATABASES & STORAGE
  // ==========================================
  {
    id: 'SD-DB-SQL',
    type: 'sectionHub',
    title: 'Relational SQL Databases (RDBMS)',
    abbreviation: 'SQL-RDBMS',
    sectionId: 'SEC-SD-04',
    sectionNumber: '04',
    level: 'union',
    category: 'infrastructure',
    summary: 'Structured data store organizing records in tables with fixed schemas, columns, relationships, and ACID transaction guarantees (e.g., PostgreSQL, MySQL).',
    mandate: [
      'Enforce strong schema validation, unique constraints, and foreign key relationships',
      'Guarantee ACID (Atomicity, Consistency, Isolation, Durability) for financial ledger records',
      'Execute complex relational JOIN queries across multiple entities'
    ],
    powers: [
      'Rock-solid data integrity: Impossible to insert orphan records or invalid data types',
      'Declarative SQL language supports sophisticated aggregations and reporting',
      'Maturity: Decades of battle-tested index optimizations (B-Trees) and reliability'
    ],
    limitations: [
      'Horizontal write scaling is complex (requires sharding or multi-master layers)',
      'Schema migrations on massive tables (billions of rows) require careful zero-downtime execution',
      'Relational joins across multiple distributed nodes are extremely slow'
    ],
    inputs: ['Structured SQL Queries (SELECT, INSERT, UPDATE, DELETE)'],
    outputs: ['ACID-Compliant Tabular Result Sets'],
    establishingLaw: ['Codd Relational Model & SQL Standards'],
    systemDesignDetails: {
      category: 'storage-databases',
      definition: 'A database that stores and provides access to data points that are related to one another, based on the relational model.',
      roleAndWork: 'Primary datastore for core transactional business data where consistency is non-negotiable (users, balances, orders).',
      workingMechanism: 'Data stored in normalized tables with primary/foreign keys. Storage engine uses B+ Trees on disk and Write-Ahead Logs (WAL) for durability.',
      exampleUseCase: 'Alien Bank balance ledger or Telesko student enrollment: If student pays fee, payment record and course enrollment must commit together atomically.',
      explanation: 'Transcript note: In SQL, everything is organized in rows and columns. When you need transactions and strong relationships, SQL is the gold standard.',
      dependencies: ['SD-BANK-CENTRAL-DB'],
      tradeOffs: ['Guaranteed ACID consistency vs Harder horizontal write scaling'],
      transcriptTimestamp: '[00:21:06]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-DB-NOSQL-DOC',
    type: 'institution',
    title: 'Document NoSQL Databases',
    abbreviation: 'NOSQL-DOC',
    sectionId: 'SEC-SD-04',
    sectionNumber: '04',
    level: 'state',
    category: 'higher-education',
    summary: 'Schema-flexible database storing data as self-contained JSON/BSON documents (e.g., MongoDB, CouchDB). Eliminates expensive relational joins by embedding nested data.',
    mandate: [
      'Store dynamic, polymorphic, or rapidly evolving nested data structures',
      'Enable developers to store complete application domain models in a single document',
      'Scale out easily through built-in sharding and replica sets'
    ],
    powers: [
      'Dynamic schema: Different documents in the same collection can have different fields',
      'Fast reads: A single read retrieves user profile, settings, and addresses without joins',
      'Natural match for modern web development using JSON'
    ],
    limitations: [
      'Denormalization can lead to data duplication and update anomalies',
      'Complex multi-document ACID transactions have higher latency than native SQL',
      'Uncontrolled schema flexibility can result in messy data quality over time'
    ],
    inputs: ['JSON / BSON Document Payloads'],
    outputs: ['Hierarchical Document Objects'],
    establishingLaw: ['Document Store Model'],
    systemDesignDetails: {
      category: 'storage-databases',
      definition: 'A type of nonrelational database that is designed to store and query data as JSON-like documents.',
      roleAndWork: 'Ideal for content management, catalogs, user profiles, and nested structures like blogs with comments.',
      workingMechanism: 'Documents stored with unique `_id`. Queries inspect inner document fields and arrays using specialized index paths.',
      exampleUseCase: 'Telesko Course Catalog: A course has metadata, a list of lesson objects, and attached resources all embedded in one clean document.',
      explanation: 'Transcript note: If your data is nested and doesn\'t require relational joins across 12 tables, a document database like MongoDB makes reading very fast.',
      dependencies: ['SD-DB-SQL'],
      tradeOffs: ['Fast single-query reads of nested data vs Duplicate data updates across documents'],
      transcriptTimestamp: '[02:15:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-DB-NOSQL-KV',
    type: 'institution',
    title: 'Key-Value NoSQL Stores',
    abbreviation: 'NOSQL-KV',
    sectionId: 'SEC-SD-04',
    sectionNumber: '04',
    level: 'state',
    category: 'infrastructure',
    summary: 'The simplest and fastest database paradigm. Stores data as an opaque value indexed by a unique string key (e.g., Redis, DynamoDB, Memcached) with sub-millisecond O(1) lookups.',
    mandate: [
      'Deliver ultra-low latency reads and writes by primary key (O(1) hash map access)',
      'Store ephemeral session states, user shopping carts, and caching layers',
      'Scale horizontally effortlessly by hashing keys across distributed partitions'
    ],
    powers: [
      'Sub-millisecond latency (in-memory engines like Redis achieve 100k+ ops/sec/core)',
      'Rich data structures in Redis: Strings, Hashes, Lists, Sets, Sorted Sets, Bitmaps',
      'Native TTL support for automatic session expiration'
    ],
    limitations: [
      'No query flexibility: Cannot query by value attributes (e.g., "Find users where age > 25")',
      'All access patterns must be modeled around known unique keys',
      'In-memory key-value stores are limited by RAM capacity'
    ],
    inputs: ['Key (string)', 'Value (string/JSON/binary)'],
    outputs: ['Value Lookup in O(1) Time'],
    establishingLaw: ['Hash Map Storage Model'],
    systemDesignDetails: {
      category: 'storage-databases',
      definition: 'A data storage paradigm designed for storing, retrieving, and managing associative arrays (dictionaries / hash tables).',
      roleAndWork: 'Serves as the high-speed caching and fast state tracking layer in modern architectures.',
      workingMechanism: 'Hash function maps string key to an in-memory bucket pointer. Read and write operations execute in O(1) constant time.',
      exampleUseCase: 'User session authentication: Storing `session:xyz123 -> {userId: 42, role: "admin"}` with a 2-hour TTL.',
      explanation: 'Transcript note: Key-value stores are like giant dictionaries. You give it a key, it gives you the value in microseconds. No tables, no joins, pure speed.',
      dependencies: ['SD-DB-SQL'],
      tradeOffs: ['Blazing O(1) speed vs Zero secondary querying capability (key lookups only)'],
      transcriptTimestamp: '[02:20:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-DB-BLOB-S3',
    type: 'institution',
    title: 'Object & Blob Storage (AWS S3 / GCS)',
    abbreviation: 'BLOB-STORAGE',
    sectionId: 'SEC-SD-04',
    sectionNumber: '04',
    level: 'union',
    category: 'infrastructure',
    summary: 'Distributed storage designed for massive, unstructured binary data (videos, images, audio, database backups). Offers 99.999999999% (11 9s) durability and virtually infinite scale.',
    mandate: [
      'Store media files, video chunks, and large artifacts outside relational databases',
      'Provide presigned upload and download URLs to bypass application servers',
      'Serve as the authoritative origin storage for Content Delivery Networks (CDNs)'
    ],
    powers: [
      'Stores petabytes of unstructured files at a fraction of database disk costs',
      'Massive durability through automated cross-datacenter replication',
      'Direct client-to-S3 upload offloads gigabytes of network traffic from backend servers'
    ],
    limitations: [
      'High latency compared to local disk: 20-50ms first-byte latency',
      'Objects are immutable: updating 1 byte requires re-uploading the whole file',
      'No complex searching or indexing: lookups are strictly by bucket name and object key'
    ],
    inputs: ['Raw Video/Image Binary Streams', 'File Metadata'],
    outputs: ['Public or Presigned File URLs', 'Durable Binary Storage'],
    establishingLaw: ['Object Storage Architecture'],
    systemDesignDetails: {
      category: 'storage-databases',
      definition: 'A computer data storage architecture that manages data as objects, as opposed to file systems (files in folders) or block storage (sectors).',
      roleAndWork: 'Offloads all heavy media storage from application databases, keeping databases lean and fast.',
      workingMechanism: 'Client requests presigned URL -> uploads 4K video directly to S3 -> S3 triggers event notification -> transcoders fetch video and write output chunks back to S3.',
      exampleUseCase: 'YouTube / Netflix video storage: Storing millions of 4K video chunks in S3 buckets rather than clogging a PostgreSQL database.',
      explanation: 'Transcript note: Never store 500MB video files inside SQL database tables! Save the video in S3/Blob storage, and store only the URL string in your database.',
      dependencies: ['SD-DB-SQL'],
      tradeOffs: ['Cheap, virtually infinite durable storage vs Immutability and higher lookup latency'],
      transcriptTimestamp: '[04:47:32]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 5: CACHING ARCHITECTURE
  // ==========================================
  {
    id: 'SD-CACHE-TIERS',
    type: 'sectionHub',
    title: 'Multi-Tier Caching Architecture',
    abbreviation: 'CACHE-TIERS',
    sectionId: 'SEC-SD-05',
    sectionNumber: '05',
    level: 'union',
    category: 'infrastructure',
    summary: 'Strategic placement of high-speed in-memory caches across the architecture: Browser cache -> CDN Edge -> API Gateway -> Application In-Memory -> Distributed Redis Cluster.',
    mandate: [
      'Serve frequently accessed reads in sub-milliseconds from RAM instead of disk',
      'Shield underlying databases from overwhelming query traffic spikes',
      'Maximize cache hit ratio (Target: > 90% hits)'
    ],
    powers: [
      'RAM latency (10-100 nanoseconds) is 10,000x faster than disk I/O (millisecond)',
      'Absorbs sudden flash-crowd spikes without spinning up dozens of new databases',
      'Reduces end-to-end API response time from 300ms to 5ms'
    ],
    limitations: [
      'RAM is volatile and significantly more expensive per gigabyte than SSDs',
      'Introduces data consistency challenges: Cache can hold stale data when DB updates',
      'Requires well-designed eviction policies and invalidation triggers'
    ],
    inputs: ['Read Request Keys'],
    outputs: ['Cached Data Payload (Hit) OR Cache Miss Forwarding'],
    establishingLaw: ['Memory Hierarchy & Latency Numbers Every Programmer Should Know'],
    systemDesignDetails: {
      category: 'caching',
      definition: 'A hardware or software component that stores data so that future requests for that data can be served faster.',
      roleAndWork: 'The #1 latency reducer in system design: bridges the speed gap between CPU and slow database disks.',
      workingMechanism: 'Request arrives -> checks Cache. If HIT: return immediately in 1ms. If MISS: query DB (50ms) -> write result to cache -> return to user.',
      exampleUseCase: 'Telesko platform homepage: 10,000 students opening telusko.com load course cards from Redis cache instead of hitting 12 SQL tables 10,000 times.',
      explanation: 'Transcript note: If a DB query joins 12 tables, it takes time. In order to make frequently used data fast, we put a cache in the middle.',
      dependencies: ['SD-BANK-CENTRAL-DB'],
      tradeOffs: ['Sub-millisecond read speed vs Risk of serving stale data', 'Database load reduction vs RAM memory cost'],
      transcriptTimestamp: '[00:27:54]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CACHE-ASIDE',
    type: 'process',
    title: 'Cache-Aside Strategy (Lazy Loading)',
    abbreviation: 'CACHE-ASIDE',
    sectionId: 'SEC-SD-05',
    sectionNumber: '05',
    level: 'state',
    category: 'infrastructure',
    summary: 'The most popular caching pattern. The application code coordinates between cache and database: reads cache first; on miss, reads DB and populates cache; on write, updates DB and invalidates cache.',
    mandate: [
      'Cache only requested data on-demand (lazy loading prevents caching cold records)',
      'Keep cache failure non-fatal: if cache dies, application falls back directly to database',
      'Invalidate or delete cache entries when corresponding database records mutate'
    ],
    powers: [
      'Resilient: Cache cluster failure does not crash the application (graceful degradation)',
      'Memory efficient: Unread records never waste valuable RAM space',
      'Works with any database engine without custom DB plugins'
    ],
    limitations: [
      'Cache Miss Penalty: Three network trips on miss (App -> Cache -> App -> DB -> App -> Cache)',
      'Risk of stale data if DB is updated directly without invalidating the cache key'
    ],
    inputs: ['Read / Write Operations from App'],
    outputs: ['Lazy-Loaded Cache Keys', 'Consistent Invalidation'],
    establishingLaw: ['Cache-Aside Architecture Pattern'],
    systemDesignDetails: {
      category: 'caching',
      definition: 'A caching pattern where the application code explicitly checks the cache, queries the database on miss, and populates the cache.',
      roleAndWork: 'Ensures only actively used data consumes RAM, while providing seamless database fallback if the cache goes down.',
      workingMechanism: '1) App checks Cache. 2) Hit? Return data. 3) Miss? App queries DB, writes to Cache with TTL, returns to client. 4) Write? App updates DB, deletes Cache key.',
      exampleUseCase: 'E-commerce product page: Product details cached on first view. When merchant updates price in DB, price cache key is deleted so next user gets fresh price.',
      explanation: 'Transcript note: Lazy loading means we only put data in cache when someone actually asks for it. Don\'t preload everything into cache.',
      dependencies: ['SD-CACHE-TIERS'],
      tradeOffs: ['Only active data in RAM vs Cache miss latency penalty on first access'],
      transcriptTimestamp: '[02:40:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CACHE-WRITE-BEHIND',
    type: 'process',
    title: 'Write-Behind / Write-Back Caching',
    abbreviation: 'WRITE-BEHIND',
    sectionId: 'SEC-SD-05',
    sectionNumber: '05',
    level: 'state',
    category: 'infrastructure',
    summary: 'High-speed write pattern: Application writes data to in-memory cache immediately, returns success to user in 1ms, and asynchronously batches writes to database in background.',
    mandate: [
      'Maximize write throughput for write-heavy applications',
      'Batch multiple individual writes into single efficient bulk database inserts',
      'Absorbs massive write spikes (e.g. YouTube view counters, video game high scores)'
    ],
    powers: [
      'Blazing write performance: Client never waits for slow disk database writes',
      'Drastically reduces database write operations through write coalescing',
      'Protects databases from write-lock contention under heavy concurrency'
    ],
    limitations: [
      'Risk of Data Loss: If the cache crashes before flushing to database, queued writes are lost forever',
      'Complex failure recovery and transaction management'
    ],
    inputs: ['High-Frequency Write Operations'],
    outputs: ['Instant Confirmation', 'Asynchronously Flushed DB Batches'],
    establishingLaw: ['Write-Back Caching Semantics'],
    systemDesignDetails: {
      category: 'caching',
      definition: 'A caching pattern where the application writes data only to the cache, and the cache asynchronously writes the data to the backing store after a delay or in batches.',
      roleAndWork: 'Unlocks massive write throughput by absorbing write bursts in RAM and coalescing them before writing to disk.',
      workingMechanism: 'Client writes update -> Cache stores in RAM and returns 200 OK immediately -> Background daemon flushes batches of 1,000 updates to DB every 5 seconds.',
      exampleUseCase: 'YouTube video view counter: When 100,000 people watch a viral video in 1 minute, incrementing an SQL row 100,000 times would lock the database. Write-behind increments Redis in RAM, flushing +100,000 to DB once every minute.',
      explanation: 'Transcript note: Because write-behind is asynchronous, if your cache node crashes before saving to DB, you lose data! Use it only when raw speed beats absolute durability.',
      dependencies: ['SD-CACHE-TIERS'],
      tradeOffs: ['Blazing write throughput vs Risk of data loss on sudden power/node failure'],
      transcriptTimestamp: '[02:45:01]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CACHE-LRU',
    type: 'process',
    title: 'LRU & LFU Cache Eviction Policies',
    abbreviation: 'CACHE-EVICT',
    sectionId: 'SEC-SD-05',
    sectionNumber: '05',
    level: 'state',
    category: 'education',
    summary: 'Algorithms to evict data when cache memory is full: LRU (Least Recently Used) discards items not accessed for the longest time; LFU (Least Frequently Used) discards items with lowest access count.',
    mandate: [
      'Prevent cache out-of-memory (OOM) crashes by systematically evicting entries',
      'Retain hottest, most valuable data in constrained RAM budgets',
      'Combine eviction policies with TTL (Time-To-Live) expiration'
    ],
    powers: [
      'LRU uses a Doubly-Linked List + Hash Map to achieve O(1) eviction and updates',
      'LFU accurately protects evergreen popular content from sudden bursts of cold data',
      'Ensures predictable memory utilization under continuous write workloads'
    ],
    limitations: [
      'LRU can be polluted by a one-off batch scan that accesses every record once',
      'LFU has high memory overhead tracking frequency counters and historical decay'
    ],
    inputs: ['Memory Allocation Threshold Signals'],
    outputs: ['Evicted Cold Keys', 'Freed RAM Space'],
    establishingLaw: ['Cache Replacement Policies'],
    systemDesignDetails: {
      category: 'caching',
      definition: 'Algorithmic rules that a cache system follows to discard data when the cache capacity reaches its maximum memory limit.',
      roleAndWork: 'Ensures that limited RAM stores only the most valuable, frequently requested data.',
      workingMechanism: 'LRU: Accessing a key moves it to the head of a doubly linked list. When full, the tail node (oldest unread) is pruned in O(1) time.',
      exampleUseCase: 'Akshai transcript example: "I am a gadget guy. I keep viewing secondary screens and clothes, but only searched for a plant once. Under LFU, the plant record is evicted, while clothes and gadgets stay in cache."',
      explanation: 'Transcript note: When cache fills up, we must eliminate data to make room. LRU checks when it was last accessed; LFU checks how many times it was accessed.',
      dependencies: ['SD-CACHE-TIERS'],
      tradeOffs: ['O(1) LRU simplicity vs Vulnerability to one-off sequential scans', 'LFU frequency accuracy vs Counter tracking overhead'],
      transcriptTimestamp: '[02:50:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CACHE-BLOOM-FILTER',
    type: 'process',
    title: 'Cache Penetration & Bloom Filters',
    abbreviation: 'BLOOM-FILTER',
    sectionId: 'SEC-SD-05',
    sectionNumber: '05',
    level: 'state',
    category: 'education',
    summary: 'Space-efficient probabilistic data structure that tests whether an element is definitely NOT in a set or MIGHT be in a set. Prevents cache penetration attacks from hitting the database.',
    mandate: [
      'Stop malicious or non-existent key requests from penetrating cache to slam the database',
      'Return instant "Key does not exist" in sub-microsecond time with 0 database reads',
      'Operate in a few megabytes of RAM for millions of keys using bit arrays'
    ],
    powers: [
      'Zero false negatives: If Bloom filter says NO, the item is 100% guaranteed not to exist',
      'Extremely compact: Stores no actual strings, only k hashed bit flags',
      'Shields databases from attackers generating random fake IDs'
    ],
    limitations: [
      'Possibility of false positives (filter says YES when item is not there)',
      'Items cannot be deleted easily from standard Bloom filters (requires Counting Bloom Filter)'
    ],
    inputs: ['Requested Entity Key'],
    outputs: ['Definite False (Skip DB) OR Probable True (Check DB)'],
    establishingLaw: ['Burton Howard Bloom (1970)'],
    systemDesignDetails: {
      category: 'caching',
      definition: 'A probabilistic data structure based on hashing used to test set membership with zero false negatives and controllable false positives.',
      roleAndWork: 'Protects the database from Cache Penetration attacks where non-existent IDs are queried at scale.',
      workingMechanism: 'Key passed through 3 hash functions -> sets 3 bits to 1 in bit array. When query arrives: if ANY of the 3 bits is 0, key definitely doesn\'t exist -> reject immediately without touching DB.',
      exampleUseCase: 'Malicious bot queries `user_id = -99999` 100,000 times/sec. Normal cache misses every time and hits DB. Bloom Filter detects invalid key in 0.01ms and rejects.',
      explanation: 'Transcript note: Without a filter, queries for missing keys bypass the cache and hit the database directly, crashing the database (Cache Penetration).',
      dependencies: ['SD-CACHE-TIERS'],
      tradeOffs: ['Complete database protection with minimal RAM vs Tiny percentage of false positives'],
      transcriptTimestamp: '[02:55:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 6: SCALING STRATEGIES & COMPUTE
  // ==========================================
  {
    id: 'SD-SCALE-VERTICAL',
    type: 'sectionHub',
    title: 'Vertical Scaling (Scale-Up)',
    abbreviation: 'V-SCALE',
    sectionId: 'SEC-SD-06',
    sectionNumber: '06',
    level: 'local',
    category: 'infrastructure',
    summary: 'Adding more compute power, RAM, and faster disk drives to a single existing server. Fast to execute, requires no distributed code changes, but limited by physical hardware ceilings.',
    mandate: [
      'Maximize single-box compute throughput without software refactoring',
      'Eliminate network latency between multi-tiered distributed services',
      'Serve as initial scaling phase for early-stage applications'
    ],
    powers: [
      'Zero distributed architecture complexity: No distributed transactions, no consensus',
      'Simplifies deployment pipeline: 1 server to maintain, patch, and monitor',
      'High single-thread performance with direct in-memory communication'
    ],
    limitations: [
      'Strict hardware limit: Motherboards have maximum socket, core, and RAM capacities',
      'Costs scale exponentially rather than linearly (a 128-core box costs 10x more than 4 32-core boxes)',
      'Single point of failure (SPOF): When the hardware fails, 100% of the service goes dark'
    ],
    inputs: ['Server Hardware Spec Sheet', 'Growing Application Load'],
    outputs: ['Upgraded Single-Node Capacity'],
    establishingLaw: ['Vertical Scaling Hardware Model'],
    systemDesignDetails: {
      category: 'scaling',
      definition: 'The process of upgrading an existing machine with more CPU cores, RAM, and storage capacity to handle increased workload.',
      roleAndWork: 'Extends single-server operational life without distributed software refactoring.',
      workingMechanism: 'Server admin upgrades AWS EC2 instance type from t3.medium (2 CPU, 4GB) to c5.9xlarge (36 CPU, 72GB).',
      exampleUseCase: 'Alien Bank Issue 2: Upgrading cashier desk and adding a cash counting machine instead of hiring a second cashier.',
      explanation: 'Transcript note: In vertical scaling, we do not add multiple servers; we upgrade our current server. But after a particular limit, you cannot upgrade further.',
      dependencies: ['SD-BANK-VSCALE'],
      tradeOffs: ['Zero code changes vs Exponential hardware cost and Single Point of Failure'],
      transcriptTimestamp: '[00:18:07]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-SCALE-HORIZONTAL',
    type: 'institution',
    title: 'Horizontal Scaling (Scale-Out)',
    abbreviation: 'H-SCALE',
    sectionId: 'SEC-SD-06',
    sectionNumber: '06',
    level: 'union',
    category: 'infrastructure',
    summary: 'Scaling by provisioning additional commodity server instances in parallel behind a load balancer. Enables virtually infinite scalability and high availability, but requires stateless application architecture.',
    mandate: [
      'Scale compute elastically in response to dynamic real-time traffic spikes',
      'Provide continuous high availability: if node 3 fails, nodes 1, 2, and 4 absorb traffic',
      'Achieve linear infrastructure cost scaling using commodity cloud hardware'
    ],
    powers: [
      'Virtually limitless scale: Can run 10, 100, or 10,000 parallel instances',
      'Zero-downtime rolling deployments: update 1 node at a time while others serve traffic',
      'Self-healing elasticity through cloud Auto-Scaling Groups'
    ],
    limitations: [
      'Application code MUST be stateless: cannot store user sessions in local server memory',
      'Requires load balancers, centralized databases, and distributed caching',
      'Network communication latency between distributed microservices'
    ],
    inputs: ['Incoming Client Traffic Stream', 'Commodity Virtual Machines'],
    outputs: ['Parallelized Request Execution', 'High Availability Compute Pool'],
    establishingLaw: ['Distributed Systems Scale-Out Principle'],
    systemDesignDetails: {
      category: 'scaling',
      definition: 'Adding more machines into your pool of resources (scaling out) to distribute processing load across multiple servers.',
      roleAndWork: 'The core foundation of modern cloud scalability: solves the physical limits of single-server vertical hardware.',
      workingMechanism: 'Traffic arrives at Load Balancer -> evenly distributed across Server 1, Server 2, Server 3 -> all servers fetch state from shared Cache/DB.',
      exampleUseCase: 'Alien Bank Issue 3: Opening Counter 2 so the queue can be divided between Cashier 1 and Cashier 2.',
      explanation: 'Transcript note: Horizontal scaling means adding more servers. This is how Google, Amazon, and Netflix handle millions of concurrent users without breaking.',
      dependencies: ['SD-SCALE-VERTICAL', 'SD-BANK-LB'],
      tradeOffs: ['Limitless elastic scale and fault tolerance vs Distributed architectural complexity and statelessness requirement'],
      transcriptTimestamp: '[00:18:33]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-SCALE-STATELESS',
    type: 'process',
    title: 'Stateless Application Architecture',
    abbreviation: 'STATELESS-SVC',
    sectionId: 'SEC-SD-06',
    sectionNumber: '06',
    level: 'union',
    category: 'infrastructure',
    summary: 'Designing backend application servers to store zero client session data in local server memory. Sessions are stored in a centralized cache (Redis) or signed JWTs, allowing any server to handle any request.',
    mandate: [
      'Decouple client identity and state from individual server node lifecycles',
      'Enable the load balancer to route requests to ANY available server interchangeably',
      'Allow instant auto-scaling: servers can spin up or terminate without dropping user sessions'
    ],
    powers: [
      'True elasticity: Can kill or spawn 50 servers in minutes during traffic surges',
      'Zero sticky-session lock-in: No server affinity bottlenecks',
      'Survives sudden server crashes without logging out active users'
    ],
    limitations: [
      'Adds network hop latency to retrieve session data from Redis/database on every request',
      'JWT tokens cannot be easily revoked before expiration without a distributed token blacklist'
    ],
    inputs: ['Incoming Stateless HTTP Requests with JWT/SessionID'],
    outputs: ['State-Independent Request Processing'],
    establishingLaw: ['12-Factor App: VI. Processes (Execute as Stateless Processes)'],
    systemDesignDetails: {
      category: 'scaling',
      definition: 'An architectural design where each request from a client contains all the information needed to service the request, and servers retain no client state between transactions.',
      roleAndWork: 'The mandatory prerequisite for frictionless horizontal scaling.',
      workingMechanism: 'User logs in -> session token written to shared Redis -> user sends request to Server 2 -> Server 2 validates token against Redis -> processes request.',
      exampleUseCase: 'User browses e-commerce site. Request 1 handled by Server A, Request 2 handled by Server B. User never notices because cart is stored in Redis, not Server A.',
      explanation: 'Transcript note: If Counter 1 holds your balance in its private notebook, you can never go to Counter 2. Moving data to a shared store makes the counters stateless.',
      dependencies: ['SD-SCALE-HORIZONTAL'],
      tradeOffs: ['Frictionless auto-scaling and server failover vs Redis lookup hop on every request'],
      transcriptTimestamp: '[00:13:34]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 7: LOAD BALANCING
  // ==========================================
  {
    id: 'SD-LB-L4',
    type: 'process',
    title: 'Layer 4 (L4) Transport Load Balancing',
    abbreviation: 'LB-L4',
    sectionId: 'SEC-SD-07',
    sectionNumber: '07',
    level: 'union',
    category: 'infrastructure',
    summary: 'Load balancing at the Transport Layer (TCP/UDP level). Routes packets based purely on IP address and port without inspecting application HTTP payload data. Blazing fast, low CPU overhead.',
    mandate: [
      'Route network packets based on Source IP, Source Port, Destination IP, Destination Port',
      'Handle millions of packets per second with minimal CPU usage',
      'Direct raw TCP/UDP streams (database connections, gaming packets, VoIP)'
    ],
    powers: [
      'Near wire-speed routing performance (sub-millisecond overhead)',
      'Does not decrypt SSL/TLS packets: passes raw encrypted bytes directly to backends',
      'Extremely high throughput capacity (e.g. AWS Network Load Balancer NLB)'
    ],
    limitations: [
      'Cannot make smart application routing decisions based on URL paths (`/api` vs `/static`)',
      'Cannot inspect HTTP headers, cookies, or request payload contents',
      'Cannot perform SSL termination at the load balancer level'
    ],
    inputs: ['Raw TCP / UDP Packets'],
    outputs: ['Hardware-Accelerated Packet Forwarding'],
    establishingLaw: ['OSI Model Layer 4 Transport'],
    systemDesignDetails: {
      category: 'load-balancing',
      definition: 'A load balancer that operates at the intermediate transport layer of the OSI model, routing packets based on IP and port without inspecting application data.',
      roleAndWork: 'Provides raw high-throughput traffic distribution for non-HTTP services or entry-tier packet routing.',
      workingMechanism: 'Inspects packet header: sees destination port 3306 (MySQL) -> uses NAT to forward packet directly to Database Server 3 without reading SQL inside.',
      exampleUseCase: 'Distributing thousands of raw TCP database connections across a read-replica MySQL cluster.',
      explanation: 'Transcript note: Layer 4 does not look at the content of your message. It only checks IP and port, making it super fast.',
      dependencies: ['SD-BANK-LB'],
      tradeOffs: ['Ultra-high throughput and low CPU usage vs Zero application/URL routing awareness'],
      transcriptTimestamp: '[00:19:14]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-LB-L7',
    type: 'sectionHub',
    title: 'Layer 7 (L7) Application Load Balancing',
    abbreviation: 'LB-L7',
    sectionId: 'SEC-SD-07',
    sectionNumber: '07',
    level: 'union',
    category: 'infrastructure',
    summary: 'Intelligent load balancing at the Application Layer (HTTP/HTTPS level). Inspects URL paths, HTTP headers, cookies, and HTTP methods to make sophisticated routing decisions.',
    mandate: [
      'Inspect HTTP/HTTPS payloads to make context-aware routing decisions',
      'Terminate SSL/TLS certificates centrally to offload decryption work from web servers',
      'Support path-based routing (`/video` -> MediaService, `/auth` -> AuthService)'
    ],
    powers: [
      'Smart path-based and host-based routing (`api.telusko.com` vs `images.telusko.com`)',
      'Cookie-based session stickiness when legacy applications require state affinity',
      'Built-in HTTP gzip/brotli compression and response caching'
    ],
    limitations: [
      'Higher CPU consumption due to full SSL decryption and HTTP header parsing',
      'Adds a few milliseconds of latency compared to raw Layer 4 routing'
    ],
    inputs: ['HTTP / HTTPS Requests with Headers and URIs'],
    outputs: ['Decrypted, Path-Routed Backend Calls'],
    establishingLaw: ['OSI Model Layer 7 Application'],
    systemDesignDetails: {
      category: 'load-balancing',
      definition: 'A load balancer that operates at the high-level application layer of the OSI model, making routing decisions based on HTTP content.',
      roleAndWork: 'The standard intelligent traffic router in modern web and microservice architectures (e.g., NGINX, AWS ALB).',
      workingMechanism: 'Terminates SSL -> inspects path -> if `/courses` route to Course Microservice; if `/images` route to S3 bucket; if header `User-Agent: Mobile` route to Mobile API.',
      exampleUseCase: 'Telesko platform: Directing student video stream requests to dedicated Streaming servers while routing text blog queries to lightweight Node.js servers.',
      explanation: 'Transcript note: Layer 7 understands the actual application context (headers, URLs, cookies) and makes intelligent routing choices.',
      dependencies: ['SD-LB-L4'],
      tradeOffs: ['Intelligent content-based routing and SSL termination vs Higher CPU utilization and slight latency overhead'],
      transcriptTimestamp: '[00:19:14]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-LB-ROUND-ROBIN',
    type: 'process',
    title: 'Round Robin & Weighted Algorithms',
    abbreviation: 'LB-ROUND-ROBIN',
    sectionId: 'SEC-SD-07',
    sectionNumber: '07',
    level: 'state',
    category: 'infrastructure',
    summary: 'Standard load balancing algorithm that distributes requests sequentially across backend servers: Request 1 -> Server A, Request 2 -> Server B, Request 3 -> Server C. Weighted variant allocates proportionally based on server hardware specs.',
    mandate: [
      'Distribute traffic evenly in simple cyclic order across healthy nodes',
      'Weighted variant allows a powerful 16-core server to take 4x the requests of a 4-core server',
      'Provide zero-overhead, deterministic assignment without tracking connection state'
    ],
    powers: [
      'Simple, lightweight O(1) algorithm with zero memory tracking overhead',
      'Ensures uniform traffic volume when all requests have identical processing workloads',
      'Weighted Round Robin cleanly handles heterogeneous hardware fleets'
    ],
    limitations: [
      'Assumes all requests require equal processing time (a 5-second report query is treated the same as a 2ms ping)',
      'Can lead to server overloading if long-running requests randomly bunch up on the same server'
    ],
    inputs: ['Incoming Client Request Sequence'],
    outputs: ['Cyclic Server Allocation (1, 2, 3, 1, 2, 3)'],
    establishingLaw: ['Round Robin Scheduling'],
    systemDesignDetails: {
      category: 'load-balancing',
      definition: 'One of the simplest methods for distributing client requests across a group of servers in sequential circular order.',
      roleAndWork: 'Default general-purpose algorithm for stateless web servers handling uniform lightweight requests.',
      workingMechanism: 'Maintains an integer counter: `serverIndex = (counter++) % serverCount`. Routes next request to that index.',
      exampleUseCase: 'Alien Bank middleman directing arriving customers: Customer 1 to Cashier 1, Customer 2 to Cashier 2, Customer 3 to Cashier 3 in simple rotation.',
      explanation: 'Transcript note: In round robin, we simply follow the next counter. But what if Server 1 is weak and Server 3 is powerful? That\'s why we have Weighted Round Robin.',
      dependencies: ['SD-LB-L7'],
      tradeOffs: ['Zero-computation simplicity vs Inability to account for uneven request execution times'],
      transcriptTimestamp: '[03:00:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-LB-LEAST-CONN',
    type: 'process',
    title: 'Least Connections Algorithm',
    abbreviation: 'LB-LEAST-CONN',
    sectionId: 'SEC-SD-07',
    sectionNumber: '07',
    level: 'state',
    category: 'infrastructure',
    summary: 'Dynamic load balancing algorithm that routes traffic to the server currently maintaining the fewest active open connections. Highly effective for long-lived connections (WebSockets, database pools).',
    mandate: [
      'Direct traffic to the least burdened server based on live active connection counts',
      'Prevent server overload caused by clusters of long-lived or heavy transactions',
      'Automatically adjust to servers processing complex requests at different speeds'
    ],
    powers: [
      'Naturally balances servers when request execution times vary drastically (e.g. 10ms vs 10 seconds)',
      'Prevents any single server from accumulating hundreds of lingering connections',
      'The gold-standard algorithm for persistent WebSocket chat connections and sticky sessions'
    ],
    limitations: [
      'Requires load balancer to maintain real-time active state and counters for every backend node',
      'Does not measure actual CPU load (a server with 5 heavy video encoding tasks may be busier than one with 20 idle ping connections)'
    ],
    inputs: ['Live Active Connection Telemetry'],
    outputs: ['Traffic Routed to Lowest Active Connection Node'],
    establishingLaw: ['Least Connections Load Balancing Strategy'],
    systemDesignDetails: {
      category: 'load-balancing',
      definition: 'A dynamic load balancing algorithm where requests are routed to the server with the lowest number of active connections at that moment.',
      roleAndWork: 'Ensures optimal load distribution when requests have widely variable durations.',
      workingMechanism: 'Load balancer tracks active connections per server. Incoming request arrives -> checks table: Server 1 has 12 connections, Server 2 has 5 -> routes to Server 2.',
      exampleUseCase: 'Persistent WebSocket chat servers: Server 1 has 5,000 connected chat users; Server 2 has 1,200. Least Connections routes new incoming chat sessions to Server 2.',
      explanation: 'Transcript note: The least connection algorithm works exceptionally well when there are sticky sessions and persistent channels like WebSockets.',
      dependencies: ['SD-LB-L7'],
      tradeOffs: ['Adaptive balancing for variable workloads vs State-tracking overhead on load balancer'],
      transcriptTimestamp: '[03:15:01]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-LB-CONSISTENT-HASH',
    type: 'process',
    title: 'Consistent Hashing & Virtual Nodes',
    abbreviation: 'CONSISTENT-HASH',
    sectionId: 'SEC-SD-07',
    sectionNumber: '07',
    level: 'state',
    category: 'infrastructure',
    summary: 'Distributed hashing technique mapping servers and keys to a 360-degree circular hash ring [0, 2^32 - 1]. Adding or removing a server relocates only k/N keys (where k is keys, N is servers), preventing catastrophic cache churn.',
    mandate: [
      'Map keys and cache/database servers to the same circular hash ring space',
      'Ensure adding or removing a node relocates only an average of K/N keys',
      'Prevent massive cache stampedes and re-indexing storms during server scaling'
    ],
    powers: [
      'Only 1/N of keys are remapped when a node is added or fails (versus traditional `hash(key) % N` where 100% of keys move)',
      'Virtual Nodes (v-nodes) ensure uniform, non-skewed key distribution across physical servers',
      'Foundation for distributed caches, DynamoDB, Cassandra, and Content Delivery Networks'
    ],
    limitations: [
      'More complex to implement than modular hashing',
      'Without virtual nodes, servers can develop uneven "hotspot" distribution arcs on the ring'
    ],
    inputs: ['Resource Key (e.g., UserID)', 'Circular Hash Ring Topologies'],
    outputs: ['Deterministic Node Assignment with Minimal Churn'],
    establishingLaw: ['Karger et al. Consistent Hashing (MIT 1997)'],
    systemDesignDetails: {
      category: 'load-balancing',
      definition: 'A special kind of hashing such that when a hash table is resized, only K/n keys need to be remapped on average.',
      roleAndWork: 'Eliminates catastrophic cache wipeout when scaling distributed cache or database clusters.',
      workingMechanism: 'Nodes and keys hashed onto ring [0, 2^32-1]. Key routes to the first node encountered clockwise. Virtual nodes (e.g., 200 virtual replicas per physical node) guarantee uniform spread.',
      exampleUseCase: 'Distributed cache cluster with 4 Redis nodes. If Node 3 crashes, traditional hashing invalidates 100% of cached items, crashing the database. Consistent hashing relocates only Node 3\'s 25% of keys to Node 4.',
      explanation: 'Transcript note: If we use modular hash `hash(key) % 4` and add 1 server, every single key changes partition! Consistent hashing on a circle moves only adjacent keys.',
      dependencies: ['SD-LB-L7'],
      tradeOffs: ['Minimal key remapping on cluster changes vs Complexity of virtual node ring management'],
      transcriptTimestamp: '[03:50:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 8: REPLICATION & CAP THEOREM
  // ==========================================
  {
    id: 'SD-REP-SINGLE-LEADER',
    type: 'sectionHub',
    title: 'Single-Leader Replication (Master-Replica)',
    abbreviation: 'REP-SINGLE-LEADER',
    sectionId: 'SEC-SD-08',
    sectionNumber: '08',
    level: 'union',
    category: 'infrastructure',
    summary: 'Database replication architecture where all writes and mutations go to a designated Leader (Master), and read queries are distributed across multiple follower Replicas.',
    mandate: [
      'Scale read throughput by adding multiple read-only follower replicas',
      'Maintain authoritative write order via leader Write-Ahead Log (WAL) streaming',
      'Provide automatic or manual failover: promote a replica to leader if leader dies'
    ],
    powers: [
      'Simple concurrency model: No write conflicts (only the leader accepts writes)',
      'Reads can scale to tens of thousands of queries/sec by adding follower replicas',
      'Followers can be located in different physical availability zones for disaster recovery'
    ],
    limitations: [
      'All writes must funnel through the single leader (write capacity ceiling)',
      'Replication Lag: Asynchronous replication means followers can serve slightly stale data',
      'Leader failover can lead to split-brain scenarios if dual leaders are promoted'
    ],
    inputs: ['Client Writes (to Leader)', 'Client Reads (to Replicas)'],
    outputs: ['Authoritative Mutation Log', 'Replicated Read Pools'],
    establishingLaw: ['Primary-Replica Replication Pattern'],
    systemDesignDetails: {
      category: 'replication-consistency',
      definition: 'A replication model where one database node is designated as the leader to accept all writes, and replicates its changes to one or more followers.',
      roleAndWork: 'The standard scaling pattern for read-heavy applications (95% reads, 5% writes).',
      workingMechanism: 'Client writes to Leader -> Leader writes WAL and streams replication log to Followers -> Followers update local state -> Client reads load-balanced across Followers.',
      exampleUseCase: 'Telesko platform: Admin adds a course (write to Leader). 10,000 students browse course list (reads distributed across 4 Follower replicas).',
      explanation: 'Transcript note: In databases, 90% of operations are reads. By sending writes to one leader and reading from followers, we scale read throughput easily.',
      dependencies: ['SD-DB-SQL'],
      tradeOffs: ['High read scalability and zero write conflicts vs Leader write bottleneck and replica lag'],
      transcriptTimestamp: '[03:25:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-REP-MULTI-LEADER',
    type: 'institution',
    title: 'Multi-Leader Replication (Active-Active)',
    abbreviation: 'REP-MULTI-LEADER',
    sectionId: 'SEC-SD-08',
    sectionNumber: '08',
    level: 'union',
    category: 'infrastructure',
    summary: 'Distributed replication topology where multiple nodes in different data centers act as leaders, accepting concurrent writes and asynchronously syncing changes with other leaders.',
    mandate: [
      'Enable low-latency local writes across globally distributed data centers (US, EU, Asia)',
      'Provide continuous write availability: if Data Center A loses power, Data Center B continues accepting writes',
      'Detect and resolve concurrent write conflicts across leaders'
    ],
    powers: [
      'Users experience low write latency by connecting to their regional leader',
      'Survives entire data center catastrophic blackouts without write downtime',
      'Scales overall write volume across geographic clusters'
    ],
    limitations: [
      'Write Conflicts: Two users can simultaneously edit the same record in US and EU',
      'Requires conflict resolution strategies (Last-Write-Wins, CRDTs, or manual resolution)',
      'High operational complexity and replication network bandwidth'
    ],
    inputs: ['Global Concurrent Writes across Multiple Data Centers'],
    outputs: ['Asynchronously Synchronized Cross-Region Databases'],
    establishingLaw: ['Active-Active Multi-Master Topologies'],
    systemDesignDetails: {
      category: 'replication-consistency',
      definition: 'A replication approach where more than one node can accept writes and replicates those writes to other leaders and their followers.',
      roleAndWork: 'Enables global enterprise applications to accept writes locally in different continents with zero transatlantic write latency.',
      workingMechanism: 'User in India writes to Mumbai Leader -> Mumbai leader updates local followers and syncs async to London Leader. If both leaders mutate same record, conflict resolver executes.',
      exampleUseCase: 'Google Docs collaborative editing or multinational retail bank with active branches in London and New York.',
      explanation: 'Transcript note: In multi-leader replication, leaders in each data center update their followers and send changes to other leaders. Even if one leader breaks, the other works.',
      dependencies: ['SD-REP-SINGLE-LEADER'],
      tradeOffs: ['Global low write latency and multi-region resilience vs Complex write conflict resolution'],
      transcriptTimestamp: '[03:35:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-THM-CAP',
    type: 'sectionHub',
    title: 'The CAP Theorem',
    abbreviation: 'CAP-THEOREM',
    sectionId: 'SEC-SD-08',
    sectionNumber: '08',
    level: 'constitutional',
    category: 'legislation',
    summary: 'Fundamental theorem of distributed systems: In the presence of a Network Partition (P), a distributed system MUST choose between Consistency (C) and Availability (A). It is impossible to guarantee both.',
    mandate: [
      'Recognize that network partitions (dropped packets, severed cables) are inevitable in distributed systems',
      'Deliberately choose whether the system sacrifices consistency or availability during a network split',
      'Align business domain risk with engineering trade-offs (Banking -> CP; Social Feeds -> AP)'
    ],
    powers: [
      'Prevents dangerous misconceptions that any distributed system can be "100% consistent AND 100% available always"',
      'Provides clear mathematical framework for choosing between CP and AP databases',
      'Guides database selection (e.g. MongoDB/HBase vs Cassandra/DynamoDB)'
    ],
    limitations: [
      'Applies strictly when a network partition occurs; when network is healthy, PACELC applies',
      'Oversimplified binary view (Consistency and Availability exist on spectrums in modern systems)'
    ],
    inputs: ['Network Partition Event (Severed link between Node 1 and Node 2)'],
    outputs: ['Guaranteed Consistency (Return Error) OR Guaranteed Availability (Return Stale Data)'],
    establishingLaw: ['Eric Brewer CAP Theorem (2000) & Seth Gilbert / Nancy Lynch Proof (2002)'],
    systemDesignDetails: {
      category: 'replication-consistency',
      definition: 'A theorem stating that a distributed data store can only simultaneously provide at most two out of the following three guarantees: Consistency, Availability, and Partition Tolerance.',
      roleAndWork: 'The core governing law of distributed databases: forces architects to decide what breaks when networks split.',
      workingMechanism: 'Network cable cuts communication between Node A and Node B. Write arrives at Node A: If CP -> reject write or error until network heals. If AP -> accept write on Node A, Node B serves stale data.',
      exampleUseCase: 'ATM Withdrawal (CP): If ATM loses network to bank, it rejects withdrawal to prevent overdrawing money. Instagram Likes (AP): If node is partitioned, show cached likes; eventual consistency is fine.',
      explanation: 'Transcript note: You cannot choose CA in a distributed system because network partition (P) is inevitable. You must choose CP (Consistency) or AP (Availability).',
      dependencies: ['SD-REP-SINGLE-LEADER'],
      tradeOffs: ['Consistency (fresh accurate data, potential errors) vs Availability (always responds, potential stale data)'],
      transcriptTimestamp: '[04:00:01]'
    },
    sourceIds: ['SRC-SD-CAP-THEOREM'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-THM-CP',
    type: 'institution',
    title: 'CP Architecture (Consistency + Partition Tolerance)',
    abbreviation: 'CAP-CP',
    sectionId: 'SEC-SD-08',
    sectionNumber: '08',
    level: 'union',
    category: 'infrastructure',
    summary: 'Systems that prioritize data consistency over availability during a partition. If nodes cannot communicate to verify the latest state, the system returns an error or blocks the request rather than serving stale or conflicting data.',
    mandate: [
      'Guarantee that every read receives the most recent write or an explicit error',
      'Refuse transactions if quorum consensus cannot be reached across partition boundaries',
      'Power financial ledgers, inventory reservation, and distributed consensus (Zookeeper, etcd)'
    ],
    powers: [
      'Absolute protection against double spending, inventory overselling, and data corruption',
      'Provides Linearizability and serializable transactional isolation',
      'Single definitive truth across all surviving operational nodes'
    ],
    limitations: [
      'System appears unavailable to clients on partitioned minority nodes (returns 500 or timeout errors)',
      'Higher write latency due to synchronous two-phase commit or consensus round-trips'
    ],
    inputs: ['Financial & Mission-Critical Transactions'],
    outputs: ['Strongly Consistent State OR Explicit Error'],
    establishingLaw: ['Brewer CP Formulation'],
    systemDesignDetails: {
      category: 'replication-consistency',
      definition: 'A distributed system configuration that guarantees Consistency and Partition Tolerance, trading away Availability when communication fails.',
      roleAndWork: 'Mandatory choice for banking, payments, e-commerce checkout inventory, and distributed consensus.',
      workingMechanism: 'Partition occurs between Node 1 and Node 2. Request arrives at Node 2 to withdraw $100. Node 2 cannot reach Node 1 to lock record -> throws error "Service unavailable, retry later".',
      exampleUseCase: 'Alien Bank Central Ledger: If Counter 2 cannot reach the central database, it halts operations rather than letting a customer withdraw non-existent funds.',
      explanation: 'Transcript note: In CP systems, we would rather return an error to the user than give them incorrect, out-of-sync, or stale data.',
      dependencies: ['SD-THM-CAP'],
      tradeOffs: ['Zero data corruption vs Reduced availability during network partitions'],
      transcriptTimestamp: '[04:02:00]'
    },
    sourceIds: ['SRC-SD-CAP-THEOREM'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-THM-AP',
    type: 'institution',
    title: 'AP Architecture (Availability + Partition Tolerance)',
    abbreviation: 'CAP-AP',
    sectionId: 'SEC-SD-08',
    sectionNumber: '08',
    level: 'union',
    category: 'infrastructure',
    summary: 'Systems that prioritize availability over consistency during a partition. Every non-failing node continues accepting reads and writes, serving potentially stale data and resolving conflicts asynchronously once the network heals.',
    mandate: [
      'Guarantee that every client request receives a non-error response, even during network splits',
      'Accept writes locally on partitioned nodes and queue synchronization for later',
      'Power high-availability platforms: Social media feeds, YouTube comments, streaming catalogs'
    ],
    powers: [
      'System never goes down: 100% uptime perception for end users',
      'Low write latency: writes are acknowledged locally without waiting for global consensus',
      'Survives massive cross-region fiber cuts without user disruption'
    ],
    limitations: [
      'Clients can read stale or outdated data during a network partition',
      'Requires automated conflict resolution algorithms (Last-Write-Wins, Vector Clocks, CRDTs)'
    ],
    inputs: ['Social Feeds, View Counts, Comments, Likes'],
    outputs: ['Always-Available Response with Eventual Consistency'],
    establishingLaw: ['Brewer AP Formulation'],
    systemDesignDetails: {
      category: 'replication-consistency',
      definition: 'A distributed system configuration that guarantees Availability and Partition Tolerance, trading away immediate Consistency.',
      roleAndWork: 'Mandatory choice for consumer platforms, social networks, and streaming services where downtime destroys user engagement.',
      workingMechanism: 'Partition cuts communication between US and Asia. Asian user likes video -> Asian node increments local like counter and returns 200 OK. When network heals, counter syncs to US.',
      exampleUseCase: 'YouTube Video Views & Comments: If an Asian server is disconnected from US, users can still watch the video and post comments. When network restores, comments merge.',
      explanation: 'Transcript note: In AP systems, availability is king. Showing a post with 49 likes instead of 50 likes for 2 minutes is completely acceptable to keep the app working.',
      dependencies: ['SD-THM-CAP'],
      tradeOffs: ['100% operational availability vs Eventual consistency and temporary stale reads'],
      transcriptTimestamp: '[04:03:00]'
    },
    sourceIds: ['SRC-SD-CAP-THEOREM'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 9: SHARDING & PARTITIONING
  // ==========================================
  {
    id: 'SD-SHARD-HORIZ',
    type: 'sectionHub',
    title: 'Database Sharding (Horizontal Partitioning)',
    abbreviation: 'SHARDING',
    sectionId: 'SEC-SD-09',
    sectionNumber: '09',
    level: 'union',
    category: 'infrastructure',
    summary: 'Splitting a monolithic database table into smaller, faster, independent chunks (shards) spread across different physical database servers based on a chosen Shard Key.',
    mandate: [
      'Overcome single-server database storage and memory ceilings',
      'Distribute read and write query load across dozens of database instances',
      'Keep individual database shard sizes small (< 2TB) for fast backups and indexing'
    ],
    powers: [
      'Enables linear database capacity scaling to hundreds of terabytes',
      'Multiplies write throughput by N (where N is number of shards)',
      'Contains failures: If Shard 3 crashes, users on Shards 1, 2, and 4 are completely unaffected'
    ],
    limitations: [
      'Cross-shard joins are extremely slow or unsupported',
      'Distributed transactions across multiple shards require two-phase commit (2PC)',
      'Uneven shard keys create "hotspot shards" that bottleneck the whole system'
    ],
    inputs: ['Incoming Record with Shard Key (e.g., UserID)'],
    outputs: ['Routed Query to Specific Database Node'],
    establishingLaw: ['Database Sharding Architecture'],
    systemDesignDetails: {
      category: 'sharding-partitioning',
      definition: 'A database architecture pattern in which horizontal partitions of a database are stored across separate database server instances.',
      roleAndWork: 'Scales databases beyond single-machine storage and write-throughput limits.',
      workingMechanism: 'Application or Sharding Proxy inspects Shard Key: computes `hash(userId) % ShardCount` -> routes query to Database Shard 3.',
      exampleUseCase: 'Twitter / X: Users partitioned by `user_id`. Shard 1 holds users 1-1,000,000; Shard 2 holds users 1,000,001-2,000,000.',
      explanation: 'Transcript note: When your database grows so massive that a single machine cannot hold the data, you must partition the data across multiple machines.',
      dependencies: ['SD-DB-SQL'],
      tradeOffs: ['Infinite database scaling and parallelized I/O vs Complexity of cross-shard joins and resharding'],
      transcriptTimestamp: '[03:45:01]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-SHARD-HASH',
    type: 'process',
    title: 'Hash-Based Partitioning',
    abbreviation: 'SHARD-HASH',
    sectionId: 'SEC-SD-09',
    sectionNumber: '09',
    level: 'state',
    category: 'infrastructure',
    summary: 'Partitioning strategy where a cryptographic or uniform hash function (e.g. MurmurHash, MD5) is applied to the shard key (`hash(key) % N`) to scatter data evenly across all database nodes.',
    mandate: [
      'Distribute records evenly across all available shards to prevent hotspots',
      'Ensure random scattering of sequentially generated IDs (e.g., auto-incrementing integers)',
      'Maximize utilization of all provisioned database disk and memory hardware'
    ],
    powers: [
      'Eliminates range-based hot-spotting (e.g. all new users hitting the "new" shard)',
      'Deterministic routing: O(1) calculation to identify which shard holds the record',
      'Works seamlessly for non-ordered data access patterns'
    ],
    limitations: [
      'Range queries (`SELECT * WHERE age BETWEEN 20 AND 30`) must fan out to ALL shards',
      'Resharding penalty: Adding a new shard requires redistributing almost all records unless consistent hashing is used'
    ],
    inputs: ['Arbitrary Shard Key (UUID, Email, UserID)'],
    outputs: ['Uniformly Distributed Shard Index [0..N-1]'],
    establishingLaw: ['Hash-Based Partitioning Algorithm'],
    systemDesignDetails: {
      category: 'sharding-partitioning',
      definition: 'A partitioning strategy that uses a hash value of the partition key to determine the target partition.',
      roleAndWork: 'Guarantees that no single database server is starved or overloaded.',
      workingMechanism: 'Take `user_id: "akshai"` -> pass to Murmur3 hash -> yields `34892109` -> modulo 4 shards = Shard 1.',
      exampleUseCase: 'Alien Bank user accounts: Hashing user account numbers scatters accounts uniformly across 4 database servers so no single cashier or DB gets overwhelmed.',
      explanation: 'Transcript note: If we partition by name (A-M, N-Z), names starting with S may overwhelm one server. Hashing the key scrambles and distributes data equally.',
      dependencies: ['SD-SHARD-HORIZ'],
      tradeOffs: ['Even load distribution vs Inefficient range scans across multiple shards'],
      transcriptTimestamp: '[03:50:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 10: MESSAGE QUEUES & ASYNC
  // ==========================================
  {
    id: 'SD-ASYNC-DECOUPLING',
    type: 'sectionHub',
    title: 'Synchronous vs Asynchronous Communication',
    abbreviation: 'ASYNC-DECOUPLE',
    sectionId: 'SEC-SD-10',
    sectionNumber: '10',
    level: 'union',
    category: 'infrastructure',
    summary: 'The distinction between blocking synchronous calls (client waits for response before proceeding) and non-blocking asynchronous decoupling (client pushes task to a queue and immediately moves forward).',
    mandate: [
      'Identify time-consuming background tasks and remove them from the user request path',
      'Eliminate cascading timeouts between interdependent microservices',
      'Provide instant sub-100ms response times to end users'
    ],
    powers: [
      'User experiences instant confirmation without waiting for multi-second background jobs',
      'Temporal Decoupling: Producer service and consumer service do not need to be online at the same time',
      'Peak smoothing: Inbound spikes are safely buffered in memory queues without crashing workers'
    ],
    limitations: [
      'Client does not get immediate feedback on whether the background job succeeded or failed',
      'Requires status polling, WebSockets, or webhook callbacks to notify user of final outcome'
    ],
    inputs: ['Synchronous User HTTP Request', 'Asynchronous Task Message'],
    outputs: ['Immediate HTTP 202 Accepted Response', 'Queued Background Work'],
    establishingLaw: ['Asynchronous Event-Driven Architecture'],
    systemDesignDetails: {
      category: 'queues-messaging',
      definition: 'A communication pattern where the sender emits a message and continues execution without waiting for the recipient to process it.',
      roleAndWork: 'Decouples service dependencies and prevents slow auxiliary services from degrading core user checkout/upload flows.',
      workingMechanism: 'Order Service receives order -> saves to DB -> fires event to Message Queue -> immediately returns "Order Placed" to user. Email and Inventory workers pick up event later.',
      exampleUseCase: 'E-commerce purchase: User clicks "Buy Now". User must NOT wait 4 seconds for an email to send, PDF invoice to generate, and delivery courier API to respond. Async queues handle them in background.',
      explanation: 'Transcript note: Synchronous means waiting for confirmation. Asynchronous means putting the task down and moving forward immediately.',
      dependencies: ['SD-API-REST'],
      tradeOffs: ['Instant user response and fault isolation vs Delayed eventual consistency and status tracking complexity'],
      transcriptTimestamp: '[04:05:07]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-MQ-BROKER',
    type: 'institution',
    title: 'Message Queues & Brokers (Kafka / RabbitMQ)',
    abbreviation: 'MQ-BROKER',
    sectionId: 'SEC-SD-10',
    sectionNumber: '10',
    level: 'union',
    category: 'infrastructure',
    summary: 'Dedicated middleware infrastructure acting as a buffer between message producers and consumers. Stores messages safely, guarantees delivery, and balances workload across worker pools.',
    mandate: [
      'Ingest high-velocity event streams from producers without dropping data',
      'Buffer messages during peak traffic surges until consumer worker pools catch up',
      'Manage topic partitions, consumer group offsets, and acknowledgment signals'
    ],
    powers: [
      'Load Leveling (Backpressure): Protects slow downstream databases from crashing during spikes',
      'Durability: Messages are committed to disk or replicated memory',
      'Pub/Sub fan-out: One event can be consumed independently by 10 different microservices'
    ],
    limitations: [
      'Adds infrastructure overhead: ZooKeeper/KRaft clusters, broker nodes, consumer rebalancing',
      'Consumers must be idempotent to handle potential duplicate message delivery'
    ],
    inputs: ['Producer Messages (JSON, Avro, Protobuf)'],
    outputs: ['Ordered Buffered Queues', 'Consumer Stream Partitions'],
    establishingLaw: ['Enterprise Integration Patterns: Message Broker'],
    systemDesignDetails: {
      category: 'queues-messaging',
      definition: 'An architectural pattern and software infrastructure that enables components to communicate asynchronously by sending messages to queues.',
      roleAndWork: 'The shock absorber of modern systems: decouples producers and consumers in time and scale.',
      workingMechanism: 'OrderService publishes `{orderId: 101}` to Kafka Topic `orders` -> Kafka appends to partition log -> EmailWorker, InventoryWorker, and AnalyticsWorker consume independently.',
      exampleUseCase: 'Black Friday flash sale: 50,000 orders/second overwhelm payment gateways. Message broker buffers all 50,000 orders safely, letting payment workers process them steadily at 5,000/sec.',
      explanation: 'Transcript note: The message queue is like a broker. It stores the request, takes charge of retries if a worker fails, and feeds tasks one by one.',
      dependencies: ['SD-ASYNC-DECOUPLING'],
      tradeOffs: ['Backpressure protection and decoupled scale vs Operational complexity of running Kafka/RabbitMQ clusters'],
      transcriptTimestamp: '[00:31:40]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-MQ-PRIORITY',
    type: 'process',
    title: 'Priority Queues',
    abbreviation: 'MQ-PRIORITY',
    sectionId: 'SEC-SD-10',
    sectionNumber: '10',
    level: 'state',
    category: 'infrastructure',
    summary: 'Message queue variation that breaks strict FIFO ordering by processing high-priority messages (e.g. VIP payments, fraud alerts, system alarms) ahead of low-priority bulk tasks.',
    mandate: [
      'Ensure mission-critical messages bypass standard queues and execute first',
      'Prevent low-value background tasks (e.g. newsletter emails) from blocking urgent password resets',
      'Assign explicit priority scores to messages at publication time'
    ],
    powers: [
      'Critical system alarms and OTPs are delivered in < 1 second even with 1,000,000 messages in queue',
      'Allows tiered SLAs for Premium vs Free tier users',
      'Balances latency-critical workflows against batch processing'
    ],
    limitations: [
      'Risk of Starvation: If high-priority messages arrive continuously, low-priority tasks may never execute',
      'Sorting and heap maintenance adds overhead to queue operations'
    ],
    inputs: ['Messages with Priority Headers (e.g., Priority: HIGH / NORMAL / LOW)'],
    outputs: ['Priority-Ordered Consumption Stream'],
    establishingLaw: ['Priority Queue Data Structure & SLA Scheduling'],
    systemDesignDetails: {
      category: 'queues-messaging',
      definition: 'An abstract data type similar to a regular queue where each element has a priority, and elements with higher priority are served before elements with lower priority.',
      roleAndWork: 'Guarantees SLA compliance for critical operations when queues are congested.',
      workingMechanism: 'Queue maintains binary heap or multiple tiered FIFO queues (P0, P1, P2). Workers always poll P0 first; only when P0 is empty do they process P1 and P2.',
      exampleUseCase: 'Video transcoding: When a VIP creator uploads a breaking news video, it is tagged Priority-1 and processed immediately, bypassing 500 queued casual videos.',
      explanation: 'Transcript note: Sometimes we cannot follow FIFO. If task 2 and 4 are critical, consumer must get them first. This is where we attach priority to the queue.',
      dependencies: ['SD-MQ-BROKER'],
      tradeOffs: ['Immediate execution of critical tasks vs Risk of starvation for low-priority messages'],
      transcriptTimestamp: '[04:15:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-MQ-DEAD-LETTER-QUEUE',
    type: 'process',
    title: 'Dead Letter Queues (DLQ) & Poison Pills',
    abbreviation: 'MQ-DLQ',
    sectionId: 'SEC-SD-10',
    sectionNumber: '10',
    level: 'state',
    category: 'infrastructure',
    summary: 'Specialized isolation queue where unprocessable, corrupt, or repeatedly failing messages (Poison Pills) are rerouted after reaching maximum retry thresholds, preventing worker crash loops.',
    mandate: [
      'Isolate malformed or poison pill messages that crash consumer workers',
      'Prevent bad messages from blocking the entire queue in an endless retry loop',
      'Preserve failed messages for developer debugging and manual replay'
    ],
    powers: [
      'Guarantees queue throughput: 1 bad message cannot halt 100,000 good messages',
      'Preserves full error payload, stack trace, and timestamp for post-mortem analysis',
      'Enables automated alerts to on-call engineers when DLQ depth exceeds threshold'
    ],
    limitations: [
      'Requires engineers to actively monitor and drain the DLQ',
      'Failed messages remain unfulfilled until investigated and replayed'
    ],
    inputs: ['Messages Exceeding Max Retry Threshold (e.g., 3 Retries)'],
    outputs: ['Isolated DLQ Storage', 'On-Call Alert Signals'],
    establishingLaw: ['Enterprise Integration Patterns: Dead Letter Channel'],
    systemDesignDetails: {
      category: 'queues-messaging',
      definition: 'A service implementation to store messages that cannot be processed successfully, isolating them from the main queue.',
      roleAndWork: 'Protects consumer worker fleets from poison pill crash loops.',
      workingMechanism: 'Message fails processing -> worker increments retry counter -> retries with exponential backoff -> on 3rd failure, broker moves message to Dead Letter Queue -> main queue proceeds.',
      exampleUseCase: 'A malformed order payload with a null `currency` crashes the worker. Instead of retrying forever and blocking all orders, it is moved to DLQ so engineers can inspect it.',
      explanation: 'Transcript note: The message queue takes care of retries when requests fail. If it permanently fails, it is quarantined into a Dead Letter Queue.',
      dependencies: ['SD-MQ-BROKER'],
      tradeOffs: ['Total pipeline crash resilience vs Requirement for manual inspection and redelivery tooling'],
      transcriptTimestamp: '[00:32:19]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 11: RELIABILITY & OBSERVABILITY
  // ==========================================
  {
    id: 'SD-RES-CIRCUIT-BREAKER',
    type: 'sectionHub',
    title: 'Circuit Breaker Pattern',
    abbreviation: 'CIRCUIT-BREAKER',
    sectionId: 'SEC-SD-11',
    sectionNumber: '11',
    level: 'union',
    category: 'infrastructure',
    summary: 'Resilience pattern that wraps network calls to downstream services. If the failure rate crosses a threshold, the breaker trips (OPEN), immediately failing calls locally to stop cascading outages.',
    mandate: [
      'Stop cascading failures: prevent one slow/dead service from exhausting threads across the entire system',
      'Give struggling downstream services breathing room to recover without being hammered by retries',
      'Provide instant fallback responses (e.g. cached data or friendly defaults)'
    ],
    powers: [
      'Three operational states: CLOSED (normal), OPEN (tripped / instant fail), HALF-OPEN (canary probe)',
      'Fails in 0.1ms locally without waiting for multi-second downstream network timeouts',
      'Self-healing: automatically tests downstream recovery and closes when healthy'
    ],
    limitations: [
      'Requires fallback logic for every integrated downstream dependency',
      'Threshold tuning (failure percentage, timeout window) requires careful testing'
    ],
    inputs: ['Downstream RPC / HTTP Response Telemetry'],
    outputs: ['Circuit State Transitions', 'Instant Fallback Responses'],
    establishingLaw: ['Michael Nygard (Release It! Design and Deploy Production-Ready Software)'],
    systemDesignDetails: {
      category: 'resilience-fault-tolerance',
      definition: 'A design pattern used in software development to detect failures and encapsulate the logic of preventing a failure from constantly recurring during maintenance or temporary outages.',
      roleAndWork: 'Prevents localized service crashes from taking down the entire distributed application.',
      workingMechanism: 'CLOSED: Traffic flows. 50% calls fail in 10s? -> Breaker trips to OPEN. Next calls fail immediately with fallback. After 30s -> HALF-OPEN: sends 1 test call. Success? Closes breaker. Fails? Re-opens.',
      exampleUseCase: 'Telesko Recommendation Service crashes. Circuit breaker opens: Course Page immediately displays static popular courses fallback instead of freezing for 10 seconds.',
      explanation: 'Transcript note: When adding new features or microservices, you must monitor whether one failing service breaks everything else. Circuit breakers isolate the failure.',
      dependencies: ['SD-API-GATEWAY'],
      tradeOffs: ['Prevents catastrophic cascading outages vs Temporary fallback functionality during outages'],
      transcriptTimestamp: '[04:30:01]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-RES-RATE-LIMITER',
    type: 'process',
    title: 'Rate Limiting & Throttling',
    abbreviation: 'RATE-LIMITER',
    sectionId: 'SEC-SD-11',
    sectionNumber: '11',
    level: 'state',
    category: 'infrastructure',
    summary: 'Traffic control mechanism enforcing rate limits on clients (e.g. max 100 requests per minute per IP/API Key). Protects systems from DDoS attacks, brute force, and abusive scraping.',
    mandate: [
      'Cap request volume per user, IP, or API token within defined time windows',
      'Return standard HTTP 429 Too Many Requests when limits are breached',
      'Ensure equitable shared infrastructure utilization among all tenants'
    ],
    powers: [
      'Token Bucket & Leaky Bucket algorithms allow short bursts while enforcing long-term limits',
      'Sliding Window Log prevents boundary burst exploits at midnight/minute edges',
      'Protects expensive endpoints (e.g. AI inference, payments) from resource exhaustion'
    ],
    limitations: [
      'Distributed rate limiting requires shared Redis counters, adding network lookup overhead',
      'Legitimate spike traffic can occasionally be throttled if thresholds are too strict'
    ],
    inputs: ['Client IP / User Token / API Key'],
    outputs: ['Allowed Request Pass-Through OR HTTP 429 Rejection'],
    establishingLaw: ['Token Bucket Algorithm & IETF RFC 6585 (HTTP 429)'],
    systemDesignDetails: {
      category: 'resilience-fault-tolerance',
      definition: 'A mechanism that limits the rate at which network traffic is sent or received by a network interface or service.',
      roleAndWork: 'Guards APIs against denial of service attacks, brute-force bots, and runaway client scripts.',
      workingMechanism: 'Client makes call -> Gateway checks Redis `token_bucket:user123`. Has tokens? Decrement 1 token, allow request. Zero tokens? Reject with HTTP 429 and `Retry-After: 30`.',
      exampleUseCase: 'Telesko login endpoint: Allows max 5 login attempts per minute per IP to stop hackers from brute-forcing student passwords.',
      explanation: 'Transcript note: Without rate limiting, a single rogue script or DDoS bot can send 100,000 requests and take down your entire server pool.',
      dependencies: ['SD-API-GATEWAY'],
      tradeOffs: ['Complete API abuse protection vs Occasional false-positive throttling of rapid legitimate users'],
      transcriptTimestamp: '[04:32:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-OBS-METRICS',
    type: 'process',
    title: 'The Three Pillars of Observability',
    abbreviation: 'OBSERVABILITY',
    sectionId: 'SEC-SD-11',
    sectionNumber: '11',
    level: 'union',
    category: 'oversight-remedies',
    summary: 'The three telemetry foundations required to understand and debug complex distributed systems: Metrics (aggregable numbers over time), Structured Logs (event records), and Distributed Tracing (request journey across services).',
    mandate: [
      'Track real-time system health via Metrics (CPU, Memory, QPS, Latency P95/P99, Error Rates)',
      'Record detailed structured JSON Logs for debugging edge cases and reproduction',
      'Trace end-to-end request flows across distributed microservices using Trace and Span IDs'
    ],
    powers: [
      'Reduces Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR) from hours to minutes',
      'Distributed tracing pinpoint precisely which microservice or database query caused a 2-second delay',
      'Enables proactive anomaly detection before users notice outages'
    ],
    limitations: [
      'High telemetry storage cost: Storing 100% of logs and traces at scale requires gigabytes per day',
      'Requires trace sampling (e.g. sample 5% of successful requests, 100% of error requests)'
    ],
    inputs: ['Telemetry Agents (OpenTelemetry, Prometheus, Datadog)'],
    outputs: ['Real-Time Dashboards', 'Flame Graphs', 'Anomaly Alerts'],
    establishingLaw: ['Three Pillars of Observability Framework'],
    systemDesignDetails: {
      category: 'observability',
      definition: 'A measure of how well internal states of a system can be inferred from knowledge of its external outputs (Metrics, Logs, and Traces).',
      roleAndWork: 'Gives engineering teams full visibility into system behavior, bottlenecks, and failure causes in production.',
      workingMechanism: 'Metrics: Prometheus scrapes server counters every 15s. Logs: Fluentd ships JSON logs to Elasticsearch. Tracing: OpenTelemetry attaches `trace_id` header to HTTP requests across all microservices.',
      exampleUseCase: 'Checkout is taking 4 seconds. Distributed trace flame graph immediately reveals: UserService (10ms) -> PaymentService (20ms) -> FraudCheckService (3,800ms bottleneck!).',
      explanation: 'Transcript note: As you add components (Load Balancer, App Servers, Queues, DBs), monitoring is mandatory. If an error occurs, you must know the exact stack trace and reproduction steps.',
      dependencies: ['SD-API-GATEWAY'],
      tradeOffs: ['Full system transparency and rapid debugging vs Telemetry storage costs and network overhead'],
      transcriptTimestamp: '[04:35:17]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },

  // ==========================================
  // SECTION 12: REAL-WORLD CASE STUDY: VIDEO STREAMING
  // ==========================================
  {
    id: 'SD-CASE-CLIENT-HLS',
    type: 'sectionHub',
    title: 'Adaptive Bitrate Client (HLS / DASH)',
    abbreviation: 'CLIENT-HLS',
    sectionId: 'SEC-SD-12',
    sectionNumber: '12',
    level: 'union',
    category: 'education',
    summary: 'The client playback application (Web, Mobile, Smart TV) dynamically adjusting video stream quality in real time based on detected network bandwidth using HLS (HTTP Live Streaming) or MPEG-DASH.',
    mandate: [
      'Inspect client network bandwidth and device screen resolution continuously',
      'Fetch playlist index files (`.m3u8` / `.mpd`) listing available video resolutions',
      'Request sequential 2-6 second chunk segments seamlessly across quality tiers'
    ],
    powers: [
      'Zero buffering: Automatically drops from 4K to 720p or 360p if user enters an elevator or tunnel',
      'Smoothly ramps back up to 1080p / 4K when Wi-Fi bandwidth improves',
      'Uses standard HTTP/HTTPS ports (80/443), easily passing through corporate firewalls'
    ],
    limitations: [
      'Client player must buffer 2-3 segments in advance, introducing slight live streaming latency',
      'Video playback depends entirely on pre-transcoded chunk segments hosted on CDN'
    ],
    inputs: ['User Network Bandwidth', 'Master Playlist (.m3u8)'],
    outputs: ['Smooth Uninterrupted Video Playback'],
    establishingLaw: ['Apple HLS RFC 8216 & ISO/IEC MPEG-DASH'],
    systemDesignDetails: {
      category: 'case-study',
      definition: 'A technique used in streaming multimedia over computer networks where the source content is encoded at multiple bit rates and segment chunks.',
      roleAndWork: 'Eliminates video buffering by dynamically shifting video resolution up or down based on real-time internet speeds.',
      workingMechanism: 'Client requests master playlist -> sees streams for 360p, 720p, 1080p, 4K -> tests download speed -> requests segment `chunk_001_1080p.ts`. Bandwidth drops? Requests `chunk_002_720p.ts` seamlessly.',
      exampleUseCase: 'YouTube & Netflix video players: You start watching in 1080p on home Wi-Fi; you walk outside onto mobile 4G; the video resolution imperceptibly shifts to 720p without freezing.',
      explanation: 'Transcript note: In our streaming platform, the client machine pulls chunks one by one. If network drops, it pulls lower quality chunks so playback never pauses.',
      dependencies: ['SD-CASE-CDN-EDGE'],
      tradeOffs: ['Zero video buffering vs Client complexity in adaptive stream switching'],
      transcriptTimestamp: '[04:52:56]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CASE-CDN-EDGE',
    type: 'institution',
    title: 'Content Delivery Network (CDN Edge Nodes)',
    abbreviation: 'CDN-EDGE',
    sectionId: 'SEC-SD-12',
    sectionNumber: '12',
    level: 'union',
    category: 'infrastructure',
    summary: 'A globally distributed network of Edge Point of Presence (PoP) proxy servers caching video chunks and static assets geographically close to end users, slashing latency and origin server load.',
    mandate: [
      'Cache static assets and video chunk segments within 10-20ms of end users globally',
      'Serve > 95% of all video bandwidth directly from edge cache without touching origin storage',
      'Provide Anycast routing to direct clients to the closest operational edge server'
    ],
    powers: [
      'Reduces video start latency from 400ms (transoceanic) to 15ms (local edge)',
      'Shields origin S3 storage buckets from petabytes of repetitive streaming traffic',
      'Absorbs massive DDoS attacks at the global edge network tier'
    ],
    limitations: [
      'Cold/rarely watched long-tail videos experience CDN miss penalty (must fetch from origin S3)',
      'Bandwidth egress pricing across global CDN providers dominates operational costs'
    ],
    inputs: ['Global Video Chunk Requests'],
    outputs: ['Ultra-Low Latency Media Streams (< 20ms)'],
    establishingLaw: ['Distributed Edge Caching & Anycast Routing'],
    systemDesignDetails: {
      category: 'case-study',
      definition: 'A geographically distributed network of proxy servers and their data centers, providing high availability and performance by distributing service spatially.',
      roleAndWork: 'The core delivery backbone of video streaming: makes global video playback instantaneous.',
      workingMechanism: 'User in Mumbai requests video chunk -> GeoDNS directs to Mumbai CDN Edge. Cached? Served in 10ms. Not cached? CDN fetches from S3 origin in US, caches in Mumbai, and serves to user.',
      exampleUseCase: 'Hotstar streaming IPL Cricket or Netflix releasing Stranger Things: Millions of users stream the identical video chunks simultaneously from local ISP edge servers.',
      explanation: 'Transcript note: If 10 million users stream from the origin server, the network link saturates and crashes. CDNs put the video chunks right next to the user\'s city.',
      dependencies: ['SD-NET-DNS', 'SD-DB-BLOB-S3'],
      tradeOffs: ['Sub-20ms global delivery and origin shielding vs High bandwidth egress costs'],
      transcriptTimestamp: '[04:49:16]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CASE-UPLOAD-INGEST',
    type: 'process',
    title: 'Resumable Chunked Video Ingestion',
    abbreviation: 'UPLOAD-INGEST',
    sectionId: 'SEC-SD-12',
    sectionNumber: '12',
    level: 'state',
    category: 'infrastructure',
    summary: 'Video upload pipeline supporting chunked multipart uploads with presigned S3 URLs, pause/resume capability, and checksum validation for multi-gigabyte master video files.',
    mandate: [
      'Accept large video uploads (5GB - 50GB) reliably over fluctuating user internet connections',
      'Upload directly from client to S3 using presigned URLs, bypassing application servers',
      'Allow upload resumption from the last verified chunk if user connection drops'
    ],
    powers: [
      'Zero application server bandwidth bottlenecks during multi-gigabyte uploads',
      'Parallel chunk uploads: Slices a 10GB video into 100MB parts uploaded concurrently',
      'Validates MD5 checksums per chunk to guarantee zero file corruption'
    ],
    limitations: [
      'Client must coordinate multipart assembly calls with storage API',
      'Temporary storage costs for incomplete or abandoned uploads'
    ],
    inputs: ['Raw Master Video Files (MP4, MOV, MKV)'],
    outputs: ['Complete Raw Video in S3 Storage', 'Upload Completed Notification Event'],
    establishingLaw: ['S3 Multipart Upload Protocol'],
    systemDesignDetails: {
      category: 'case-study',
      definition: 'An ingestion service that allows large files to be uploaded in independent, parallel parts with resume capabilities.',
      roleAndWork: 'Ensures robust, resilient user uploads for massive media assets without bottlenecking application servers.',
      workingMechanism: 'Client requests upload -> API Gateway generates Presigned S3 Multipart URLs -> Client streams chunks directly to S3 -> S3 triggers `ObjectCreated` event to Kafka.',
      exampleUseCase: 'YouTube Studio creator uploads a 4K 15GB podcast. If home Wi-Fi drops at 85%, reconnecting resumes at 85% instead of restarting from 0%.',
      explanation: 'Transcript note: In our system design, the client uploads video into temporary storage. Once upload finishes, the event goes to a message queue.',
      dependencies: ['SD-DB-BLOB-S3', 'SD-API-GATEWAY'],
      tradeOffs: ['Reliable multi-GB uploads and direct-to-S3 bandwidth offload vs Client-side multipart coordination'],
      transcriptTimestamp: '[04:47:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CASE-TRANSCODING-PIPELINE',
    type: 'process',
    title: 'Distributed Transcoding & Chunking Engine',
    abbreviation: 'TRANSCODE-PIPELINE',
    sectionId: 'SEC-SD-12',
    sectionNumber: '12',
    level: 'union',
    category: 'infrastructure',
    summary: 'Compute worker cluster consuming jobs from message queues. Uses FFmpeg to transcode master video into multiple codecs (H.264, VP9, AV1), resolutions (4K, 1080p, 720p, 360p), and slices them into 2-6s chunks.',
    mandate: [
      'Convert raw uncompressed master videos into standardized web/mobile formats',
      'Encode each video into multiple quality resolutions (4K, 1440p, 1080p, 720p, 480p, 360p)',
      'Slice video streams into 2-second to 6-second segments and generate playlist manifest files'
    ],
    powers: [
      'Horizontal auto-scaling: Spins up dozens of GPU/CPU transcoders during peak upload hours',
      'Enables Adaptive Bitrate Streaming by generating identical time-sliced chunk segments',
      'Compresses videos using modern codecs to reduce global CDN streaming bandwidth by 40%'
    ],
    limitations: [
      'Heavy compute resource consumption: Transcoding a 4K video takes significant CPU/GPU time',
      'Storage amplification: A single 1GB raw video turns into 4GB of multi-resolution chunks'
    ],
    inputs: ['Raw Master Video in S3', 'Transcoding Job Parameters from Kafka'],
    outputs: ['Transcoded Chunk Segments (.ts/.m4s)', 'Master Playlists (.m3u8)'],
    establishingLaw: ['Digital Video Encoding (FFmpeg / H.264 / H.265 / AV1)'],
    systemDesignDetails: {
      category: 'case-study',
      definition: 'The process of taking an existing video file, decoding it, and encoding it into multiple formats, resolutions, and small chunks for streaming.',
      roleAndWork: 'The core processing engine of a video platform: converts 1 raw file into streamable segments for all devices.',
      workingMechanism: 'Kafka job arrives -> Transcoder pulls raw video -> splits into tasks -> worker 1 encodes 1080p; worker 2 encodes 720p -> slices into 4s chunks -> uploads chunks to S3.',
      exampleUseCase: 'YouTube video processing bar: "Processing HD version (95%)". The background transcoders are encoding 1080p and 4K chunks and uploading them to S3.',
      explanation: 'Transcript note: The video protocol divides the video into small chunks called segments. Transcoding transforms the video into different resolutions and creates these segments.',
      dependencies: ['SD-CASE-UPLOAD-INGEST', 'SD-MQ-BROKER'],
      tradeOffs: ['Multi-resolution compatibility for all devices vs Heavy compute transcoding costs and storage duplication'],
      transcriptTimestamp: '[04:56:18]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CASE-VIEW-COUNTER',
    type: 'process',
    title: 'High-Throughput View Count Service',
    abbreviation: 'VIEW-COUNTER',
    sectionId: 'SEC-SD-12',
    sectionNumber: '12',
    level: 'state',
    category: 'infrastructure',
    summary: 'Write-behind aggregation service that absorbs millions of concurrent video views in Redis in-memory counters / HyperLogLog, periodically flushing aggregated totals to the primary database to eliminate row lock contention.',
    mandate: [
      'Ingest millions of video play events per second without locking database rows',
      'Deduplicate repetitive fake views using Redis HyperLogLog and IP/user fingerprints',
      'Flush aggregated batch view counts to permanent PostgreSQL database every 10-60 seconds'
    ],
    powers: [
      'Handles viral video traffic (e.g. 100,000 views/sec) with sub-millisecond Redis `INCR`',
      'Zero database write-lock contention on hot video rows',
      'Near-real-time view count display with minimal infrastructure overhead'
    ],
    limitations: [
      'Slight delay (eventual consistency): View count displayed may lag real-time by a few seconds',
      'Requires fraud detection filters to discard bot and auto-play views'
    ],
    inputs: ['Video Playback Telemetry Events (Heartbeats at 30 seconds)'],
    outputs: ['Aggregated Real-Time View Count', 'Periodic SQL Batch Updates'],
    establishingLaw: ['Write Coalescing & Probabilistic Data Structures (HyperLogLog)'],
    systemDesignDetails: {
      category: 'case-study',
      definition: 'A specialized distributed counter service designed to handle millions of concurrent writes to the same counter record without database locking.',
      roleAndWork: 'Solves the "Hot Key / Hot Row" problem in video platforms and social networks.',
      workingMechanism: 'User watches 30s -> client emits view event -> API increments Redis `INCR video:101:views`. Background cron flushes `UPDATE videos SET views = views + 4500 WHERE id = 101` to SQL DB every 30s.',
      exampleUseCase: 'YouTube PSY - Gangnam Style or MrBeast video launch: Millions of simultaneous views increment in Redis RAM without crashing the relational database.',
      explanation: 'Transcript note: Direct database writes for every view would lock the table row and bring down the bank or video platform. We buffer counts in Redis and write in batches.',
      dependencies: ['SD-CACHE-WRITE-BEHIND', 'SD-DB-NOSQL-KV'],
      tradeOffs: ['Blazing write scale without DB row locks vs Slight eventual consistency lag in displayed view counter'],
      transcriptTimestamp: '[02:45:01]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  },
  {
    id: 'SD-CASE-RECOMMENDER',
    type: 'institution',
    title: 'Search & Recommendation Pipeline',
    abbreviation: 'RECOMMENDER',
    sectionId: 'SEC-SD-12',
    sectionNumber: '12',
    level: 'union',
    category: 'higher-education',
    summary: 'Machine learning and vector search pipeline indexing video metadata, tags, and user watch histories to generate personalized home feeds and search query results.',
    mandate: [
      'Index video titles, tags, and transcripts in Elasticsearch / Vector DBs for fast search',
      'Generate candidate recommendation sets based on collaborative filtering and user history',
      'Rank candidate videos using real-time machine learning scoring models'
    ],
    powers: [
      'Sub-50ms full-text and semantic video search across billions of videos',
      'Drives > 70% of total platform watch time through personalized recommendations',
      'Continuously adapts to user feedback signals (click-through rate, watch percentage)'
    ],
    limitations: [
      'Computationally expensive ML inference pipeline',
      'Cold-start problem for newly uploaded videos with zero historical watch metrics'
    ],
    inputs: ['User Watch History', 'Video Embeddings', 'Search Queries'],
    outputs: ['Personalized Feed Recommendations', 'Ranked Search Results'],
    establishingLaw: ['Collaborative Filtering & Vector Search Information Retrieval'],
    systemDesignDetails: {
      category: 'case-study',
      definition: 'An automated algorithm that predicts the rating or preference a user would give to an item, generating personalized suggestions.',
      roleAndWork: 'The engagement engine of YouTube/Netflix: keeps users watching by matching them with relevant content.',
      workingMechanism: 'Candidate Generation (retrieves top 500 candidate videos via Vector Search) -> Scoring & Ranking (ML model scores based on user history) -> Diversity Re-ranking -> Output Feed.',
      exampleUseCase: 'YouTube Homepage: When you open YouTube, the recommendation service serves a custom-tailored list of 20 videos based on your recent searches and watch patterns.',
      explanation: 'Transcript note: A video platform is not just storage and streaming. Users need to find content through fast search and intelligent recommendations.',
      dependencies: ['SD-CASE-CLIENT-HLS', 'SD-DB-SQL'],
      tradeOffs: ['High user engagement and retention vs Heavy ML inference compute and vector indexing costs'],
      transcriptTimestamp: '[04:45:00]'
    },
    sourceIds: ['SRC-SD-TRANSCRIPT-MAIN'],
    verificationStatus: 'verified'
  }
];

export const RELATIONSHIPS_V6: RelationshipEdgeData[] = [
  // Section 1: Foundations & Alien Bank Evolution
  {
    id: 'REL-SD-01',
    sourceNodeId: 'SD-SYS-DEF',
    targetNodeId: 'SD-BANK-LLD',
    type: 'CONTAINS',
    label: 'Initial Optimization Step (LLD/DSA)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-02',
    sourceNodeId: 'SD-BANK-LLD',
    targetNodeId: 'SD-BANK-VSCALE',
    type: 'PROGRESSES_TO',
    label: 'Hardware Ceiling Reached -> Scale Up Desk',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-03',
    sourceNodeId: 'SD-BANK-VSCALE',
    targetNodeId: 'SD-BANK-HSCALE',
    type: 'PROGRESSES_TO',
    label: 'Single Server Peak -> Scale Out Counters',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-04',
    sourceNodeId: 'SD-BANK-HSCALE',
    targetNodeId: 'SD-BANK-CENTRAL-DB',
    type: 'DEPENDS_ON',
    label: 'Multiple Counters Require Shared DB',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-05',
    sourceNodeId: 'SD-BANK-HSCALE',
    targetNodeId: 'SD-BANK-LB',
    type: 'DEPENDS_ON',
    label: 'Traffic Distribution via Middleman',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-06',
    sourceNodeId: 'SD-SYS-DEF',
    targetNodeId: 'SD-REQ-FUNC',
    type: 'CONTAINS',
    label: 'Requirements Analysis',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-07',
    sourceNodeId: 'SD-REQ-FUNC',
    targetNodeId: 'SD-REQ-NONFUNC',
    type: 'SETS_STANDARDS',
    label: 'SLA, Latency & Scale Guardrails',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-08',
    sourceNodeId: 'SD-SYS-DEF',
    targetNodeId: 'SD-DATA-INTENSIVE',
    type: 'CONTAINS',
    label: 'System Type Classification',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-09',
    sourceNodeId: 'SD-SYS-DEF',
    targetNodeId: 'SD-COMPUTE-INTENSIVE',
    type: 'CONTAINS',
    label: 'System Type Classification',
    verificationStatus: 'verified'
  },

  // Section 2: Networking & Protocols
  {
    id: 'REL-SD-10',
    sourceNodeId: 'SD-NET-DNS',
    targetNodeId: 'SD-NET-TCP',
    type: 'RESOLVES_TO',
    label: 'IP Resolved -> Connects via TCP Handshake',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-11',
    sourceNodeId: 'SD-NET-TCP',
    targetNodeId: 'SD-NET-HTTP2',
    type: 'SETS_STANDARDS',
    label: 'Transports Multiplexed Streams',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-12',
    sourceNodeId: 'SD-NET-TCP',
    targetNodeId: 'SD-NET-WEBSOCKET',
    type: 'ESTABLISHED_BY_LAW',
    label: 'Upgrades to Full-Duplex Socket',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-13',
    sourceNodeId: 'SD-NET-UDP',
    targetNodeId: 'SD-NET-HTTP3',
    type: 'SETS_STANDARDS',
    label: 'QUIC Protocol Runs Over UDP',
    verificationStatus: 'verified'
  },

  // Section 3: API Architecture & Serialization
  {
    id: 'REL-SD-14',
    sourceNodeId: 'SD-NET-HTTP2',
    targetNodeId: 'SD-API-GATEWAY',
    type: 'ROUTES_TRAFFIC_TO',
    label: 'HTTPS Requests Ingested at Gateway',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-15',
    sourceNodeId: 'SD-API-GATEWAY',
    targetNodeId: 'SD-API-REST',
    type: 'CONTAINS',
    label: 'Exposes Uniform RESTful Endpoints',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-16',
    sourceNodeId: 'SD-API-GATEWAY',
    targetNodeId: 'SD-API-PROTOBUF',
    type: 'DIRECTS',
    label: 'Routes to Internal Microservices via Protobuf',
    verificationStatus: 'verified'
  },

  // Section 4: Databases & Storage
  {
    id: 'REL-SD-17',
    sourceNodeId: 'SD-API-REST',
    targetNodeId: 'SD-DB-SQL',
    type: 'WRITES_TO',
    label: 'Transactional Entities Persisted to SQL',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-18',
    sourceNodeId: 'SD-API-REST',
    targetNodeId: 'SD-DB-NOSQL-DOC',
    type: 'WRITES_TO',
    label: 'Dynamic Hierarchical Catalogs Saved to Docs',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-19',
    sourceNodeId: 'SD-API-REST',
    targetNodeId: 'SD-DB-BLOB-S3',
    type: 'WRITES_TO',
    label: 'Heavy Media Assets Stored in S3',
    verificationStatus: 'verified'
  },

  // Section 5: Caching Architecture
  {
    id: 'REL-SD-20',
    sourceNodeId: 'SD-API-REST',
    targetNodeId: 'SD-CACHE-TIERS',
    type: 'READS_FROM',
    label: 'Inspects In-Memory Cache Before DB',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-21',
    sourceNodeId: 'SD-CACHE-TIERS',
    targetNodeId: 'SD-CACHE-ASIDE',
    type: 'CONTAINS',
    label: 'Lazy Loading Query Coordination',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-22',
    sourceNodeId: 'SD-CACHE-ASIDE',
    targetNodeId: 'SD-DB-SQL',
    type: 'FALLS_BACK_TO',
    label: 'Cache Miss Queries Relational DB',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-23',
    sourceNodeId: 'SD-CACHE-TIERS',
    targetNodeId: 'SD-CACHE-WRITE-BEHIND',
    type: 'CONTAINS',
    label: 'High-Throughput Write Coalescing',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-24',
    sourceNodeId: 'SD-CACHE-TIERS',
    targetNodeId: 'SD-CACHE-LRU',
    type: 'SETS_STANDARDS',
    label: 'Evicts Stale Keys When RAM is Full',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-25',
    sourceNodeId: 'SD-CACHE-TIERS',
    targetNodeId: 'SD-CACHE-BLOOM-FILTER',
    type: 'SETS_STANDARDS',
    label: 'Filters Non-Existent Keys to Stop DB Flooding',
    verificationStatus: 'verified'
  },

  // Section 6 & 7: Scaling & Load Balancing
  {
    id: 'REL-SD-26',
    sourceNodeId: 'SD-SCALE-VERTICAL',
    targetNodeId: 'SD-SCALE-HORIZONTAL',
    type: 'PROGRESSES_TO',
    label: 'Hardware Limit Triggers Scale-Out Cluster',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-27',
    sourceNodeId: 'SD-SCALE-HORIZONTAL',
    targetNodeId: 'SD-SCALE-STATELESS',
    type: 'DEPENDS_ON',
    label: 'Horizontal Nodes Require Statelessness',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-28',
    sourceNodeId: 'SD-SCALE-HORIZONTAL',
    targetNodeId: 'SD-LB-L7',
    type: 'DEPENDS_ON',
    label: 'Inbound Traffic Distributed by Load Balancer',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-29',
    sourceNodeId: 'SD-LB-L7',
    targetNodeId: 'SD-LB-ROUND-ROBIN',
    type: 'CONTAINS',
    label: 'Uniform Routing Algorithm',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-30',
    sourceNodeId: 'SD-LB-L7',
    targetNodeId: 'SD-LB-LEAST-CONN',
    type: 'CONTAINS',
    label: 'Adaptive Routing for Variable Connections',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-31',
    sourceNodeId: 'SD-LB-L7',
    targetNodeId: 'SD-LB-CONSISTENT-HASH',
    type: 'CONTAINS',
    label: 'Minimal Re-Mapping on Scaling Nodes',
    verificationStatus: 'verified'
  },

  // Section 8: Replication & CAP Theorem
  {
    id: 'REL-SD-32',
    sourceNodeId: 'SD-DB-SQL',
    targetNodeId: 'SD-REP-SINGLE-LEADER',
    type: 'PROGRESSES_TO',
    label: 'Primary Node Replicates to Read Followers',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-33',
    sourceNodeId: 'SD-REP-SINGLE-LEADER',
    targetNodeId: 'SD-REP-MULTI-LEADER',
    type: 'PROGRESSES_TO',
    label: 'Global Data Centers Deploy Active-Active Leaders',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-34',
    sourceNodeId: 'SD-REP-SINGLE-LEADER',
    targetNodeId: 'SD-THM-CAP',
    type: 'SUBJECT_TO',
    label: 'Replication Governed by CAP Bounds',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-35',
    sourceNodeId: 'SD-THM-CAP',
    targetNodeId: 'SD-THM-CP',
    type: 'CONTAINS',
    label: 'Consistency Priority (Banking, Ledgers)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-36',
    sourceNodeId: 'SD-THM-CAP',
    targetNodeId: 'SD-THM-AP',
    type: 'CONTAINS',
    label: 'Availability Priority (Social Feeds, Views)',
    verificationStatus: 'verified'
  },

  // Section 9: Sharding
  {
    id: 'REL-SD-37',
    sourceNodeId: 'SD-DB-SQL',
    targetNodeId: 'SD-SHARD-HORIZ',
    type: 'SHARDS_ACROSS',
    label: 'Massive Tables Partitioned Across Shards',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-38',
    sourceNodeId: 'SD-SHARD-HORIZ',
    targetNodeId: 'SD-SHARD-HASH',
    type: 'CONTAINS',
    label: 'Uniform Scattering via Shard Key Hashing',
    verificationStatus: 'verified'
  },

  // Section 10: Message Queues & Asynchronous Events
  {
    id: 'REL-SD-39',
    sourceNodeId: 'SD-SCALE-STATELESS',
    targetNodeId: 'SD-ASYNC-DECOUPLING',
    type: 'PUBLISHES_EVENT_TO',
    label: 'Heavy Tasks Offloaded from Request Thread',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-40',
    sourceNodeId: 'SD-ASYNC-DECOUPLING',
    targetNodeId: 'SD-MQ-BROKER',
    type: 'DEPENDS_ON',
    label: 'Buffered in Message Broker (Kafka/RabbitMQ)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-41',
    sourceNodeId: 'SD-MQ-BROKER',
    targetNodeId: 'SD-MQ-PRIORITY',
    type: 'CONTAINS',
    label: 'Urgent Tasks Bypass Standard FIFO Queue',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-42',
    sourceNodeId: 'SD-MQ-BROKER',
    targetNodeId: 'SD-MQ-DEAD-LETTER-QUEUE',
    type: 'CONTAINS',
    label: 'Poison Pill Failures Quarantined to DLQ',
    verificationStatus: 'verified'
  },

  // Section 11: Resilience & Observability
  {
    id: 'REL-SD-43',
    sourceNodeId: 'SD-API-GATEWAY',
    targetNodeId: 'SD-RES-CIRCUIT-BREAKER',
    type: 'DEPENDS_ON',
    label: 'Circuit Breaker Wraps Downstream Microservices',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-44',
    sourceNodeId: 'SD-API-GATEWAY',
    targetNodeId: 'SD-RES-RATE-LIMITER',
    type: 'DEPENDS_ON',
    label: 'Rate Limiter Throttles Abusive Clients',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-45',
    sourceNodeId: 'SD-OBS-METRICS',
    targetNodeId: 'SD-LB-L7',
    type: 'MONITORS',
    label: 'Monitors Cluster Latency, Errors & Health',
    verificationStatus: 'verified'
  },

  // Section 12: Real-World Case Study (YouTube Video Platform Flow)
  {
    id: 'REL-SD-46',
    sourceNodeId: 'SD-CASE-CLIENT-HLS',
    targetNodeId: 'SD-CASE-CDN-EDGE',
    type: 'READS_FROM',
    label: 'Client Fetches Cached Video Chunks (10ms)',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-47',
    sourceNodeId: 'SD-CASE-CDN-EDGE',
    targetNodeId: 'SD-CASE-TRANSCODING-PIPELINE',
    type: 'FALLS_BACK_TO',
    label: 'CDN Cache Miss Fetches Transcoded Chunks from S3',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-48',
    sourceNodeId: 'SD-CASE-CLIENT-HLS',
    targetNodeId: 'SD-CASE-UPLOAD-INGEST',
    type: 'WRITES_TO',
    label: 'Creator Uploads Raw Master Video in Chunks',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-49',
    sourceNodeId: 'SD-CASE-UPLOAD-INGEST',
    targetNodeId: 'SD-MQ-BROKER',
    type: 'PUBLISHES_EVENT_TO',
    label: 'Upload Completed Event Dispatched to Kafka',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-50',
    sourceNodeId: 'SD-MQ-BROKER',
    targetNodeId: 'SD-CASE-TRANSCODING-PIPELINE',
    type: 'CONSUMES_FROM',
    label: 'Transcoders Consume Job & Encode 4K/1080p Chunks',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-51',
    sourceNodeId: 'SD-CASE-CLIENT-HLS',
    targetNodeId: 'SD-CASE-VIEW-COUNTER',
    type: 'WRITES_TO',
    label: '30s Playback Increments Redis View Counter',
    verificationStatus: 'verified'
  },
  {
    id: 'REL-SD-52',
    sourceNodeId: 'SD-CASE-CLIENT-HLS',
    targetNodeId: 'SD-CASE-RECOMMENDER',
    type: 'READS_FROM',
    label: 'Home Feed Fetches Personalized Video Recommendations',
    verificationStatus: 'verified'
  }
];
