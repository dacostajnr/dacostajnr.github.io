export interface InterviewQuestion {
  question: string
  answer: string
}

export interface InterviewCategory {
  slug: string
  title: string
  summary: string
  level: string
  questions: InterviewQuestion[]
}

const interviewCategories: InterviewCategory[] = [
  {
    slug: 'django-backend',
    title: 'Django Backend',
    summary:
      'API design, reliability, and scaling patterns for production Django services.',
    level: 'Senior',
    questions: [
      {
        question:
          'How would you design a multi-tenant Django API where each tenant has strict data isolation?',
        answer:
          'I would model tenant identity at the request boundary, enforce row-level access in every query path, and back it with database constraints where possible. For larger scale, I would evaluate schema-per-tenant vs shared-schema with tenant keys based on isolation needs, operational cost, and migration complexity.',
      },
      {
        question:
          'What is your strategy for preventing N+1 query issues in Django REST APIs?',
        answer:
          'I profile query counts first, then use select_related for one-to-one or foreign key joins and prefetch_related for many-to-many collections. I also keep serializer logic explicit so expensive nested relations are only loaded when the endpoint truly needs them.',
      },
      {
        question:
          'How do you run safe background processing for long-running jobs in a Django system?',
        answer:
          'I move expensive work into task queues (for example Celery) with idempotent tasks, retries, and dead-letter handling. The API returns immediately with job state, and I expose progress/status endpoints so users can track completion without blocking web workers.',
      },
    ],
  },
  {
    slug: 'nodejs',
    title: 'Node.js',
    summary:
      'Event loop behavior, runtime performance, and resilient service design.',
    level: 'Senior',
    questions: [
      {
        question:
          'How do you diagnose event loop latency problems in a Node.js API under load?',
        answer:
          'I capture runtime telemetry like event loop delay, CPU profiles, and async call stacks to separate blocking CPU work from I/O stalls. Once identified, I either optimize hot code paths, batch expensive operations, or move compute-heavy tasks to worker threads and queues.',
      },
      {
        question:
          'When would you choose worker threads over a queue-based background worker architecture?',
        answer:
          'Worker threads are best for CPU-heavy work that must stay close to request lifecycle and shared memory constraints. Queue workers are better for durable asynchronous jobs, retries, and horizontal scaling across machines.',
      },
      {
        question:
          'What reliability patterns do you apply for external API calls in Node services?',
        answer:
          'I use timeouts, exponential backoff with jitter, circuit breakers for unstable dependencies, and request hedging only where idempotency is guaranteed. I also apply structured logging and tracing so failures are diagnosable across service boundaries.',
      },
    ],
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    summary:
      'Type-driven architecture, safe refactors, and long-term maintainability.',
    level: 'Senior',
    questions: [
      {
        question:
          'How do you use TypeScript to reduce runtime bugs without overengineering types?',
        answer:
          'I prioritize strong typing at system boundaries like API contracts and domain models, then keep internals pragmatic. The goal is to encode invariants that matter most while avoiding type complexity that slows delivery or obscures intent.',
      },
      {
        question:
          'What is your approach to safely evolving a widely used shared type package?',
        answer:
          'I version contracts explicitly, deprecate before removal, and ship codemods or migration docs for consuming teams. For breaking changes, I stage adoption with compatibility layers and CI checks that detect downstream impact early.',
      },
      {
        question:
          'How do you model error handling in TypeScript APIs?',
        answer:
          'I avoid throwing for expected business failures and use typed result patterns where useful, then reserve exceptions for truly exceptional paths. This makes control flow explicit and improves reliability when services integrate across teams.',
      },
    ],
  },
  {
    slug: 'dsa',
    title: 'DSA',
    summary:
      'Core data structures, complexity analysis, and tradeoff-focused problem solving.',
    level: 'Senior',
    questions: [
      {
        question:
          'How do you communicate algorithmic tradeoffs during an interview when multiple solutions are possible?',
        answer:
          'I start with constraints, propose a baseline solution, then compare alternatives by time complexity, memory usage, and implementation risk. Interviewers usually value clear reasoning and pragmatic decision making more than jumping to the fanciest algorithm.',
      },
      {
        question:
          'When would you choose a heap over sorting for top-k problems?',
        answer:
          'If k is much smaller than n or data is streaming, a heap usually gives better incremental performance and memory behavior. Full sorting is simpler and sometimes acceptable when n is small or when ordered output for all elements is already needed.',
      },
      {
        question:
          'How do you verify correctness for a complex graph algorithm in an interview setting?',
        answer:
          'I define invariants early, test edge cases manually, and walk through a small example that exercises cycles or disconnected components. This demonstrates both correctness thinking and the ability to catch subtle implementation mistakes.',
      },
    ],
  },
  {
    slug: 'leetcode',
    title: 'LeetCode',
    summary:
      'Pattern recognition, optimization steps, and interview execution strategy.',
    level: 'Senior',
    questions: [
      {
        question:
          'What is your framework for solving unseen coding questions quickly?',
        answer:
          'I classify the problem into known patterns (two pointers, sliding window, BFS/DFS, DP), write a brute-force baseline, and then improve complexity intentionally. This keeps momentum while making optimization decisions transparent.',
      },
      {
        question:
          'How do you avoid getting stuck on dynamic programming problems?',
        answer:
          'I define state, transitions, and base cases using a tiny example before writing code. If top-down recursion is clearer, I start there with memoization and convert to bottom-up only when space or stack constraints require it.',
      },
      {
        question:
          'How do you balance writing perfect code versus finishing in time?',
        answer:
          'I optimize for correctness and readability first, then improve edge-case handling and micro-optimizations if time remains. In interviews, a complete and well-explained solution usually scores better than an unfinished optimal one.',
      },
    ],
  },
  {
    slug: 'system-design',
    title: 'System Design',
    summary:
      'Architecture tradeoffs, scaling strategies, and reliability at senior level.',
    level: 'Senior',
    questions: [
      {
        question:
          'How do you structure a system design interview response from ambiguous requirements?',
        answer:
          'I begin by clarifying scope, traffic assumptions, and non-functional constraints, then draft a simple baseline architecture before scaling it step by step. This shows I can reason from first principles rather than jumping to complex components too early.',
      },
      {
        question:
          'How do you decide between consistency and availability in distributed systems?',
        answer:
          'I align the decision with business impact of stale data versus failed writes during partitions. Critical financial operations may prefer stronger consistency, while social feeds often prioritize availability with eventual consistency.',
      },
      {
        question:
          'What reliability mechanisms would you include for a high-traffic read-heavy service?',
        answer:
          'I would combine caching tiers, read replicas, graceful degradation paths, and strong observability with SLO-based alerting. For resilience, I include rate limiting, backpressure, and controlled failover tested via game-day scenarios.',
      },
    ],
  },
]

export default interviewCategories
