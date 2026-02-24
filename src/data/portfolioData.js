export const profile = {
  name: 'Amrit Kumar',
  title: 'Software Engineer Intern Candidate | B.Tech CSE (Cybersecurity)',
  headline: 'Engineering secure, scalable software systems from model to production.',
  subheading:
    'Third-year CSE student building full-stack and ML-driven products with a systems-first mindset focused on reliability, performance, and clean architecture.',
  location: 'Kolkata, India',
  email: 'amritkum1209@gmail.com',
  github: 'https://github.com/amrit100612',
  linkedin: 'https://linkedin.com/in/amrit-kumar',
  leetcode: 'https://leetcode.com/u/mNBmOlhBGQ/',
  resume: 'https://drive.google.com/file/d/1pgDYTm0XBWvT9vqV-atukpNN6yg7A0-i/view?usp=sharing',
  stack: ['Python', 'JavaScript', 'React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
  typingRoles: [
    'Building production-grade backend systems.',
    'Practicing DSA for interview-level rigor.',
    'Applying ML with measurable business impact.',
  ],
}

export const about = {
  paragraph1:
    'I started coding by automating small personal tasks in Python, then moved into machine learning projects where I learned to treat data quality, model evaluation, and reproducibility as engineering problems—not just notebook experiments.',
  paragraph2:
    'As my projects matured, I shifted toward full-stack architecture: reliable APIs, fault-tolerant integrations, and user interfaces that surface meaningful outcomes. My cybersecurity specialization shapes my approach to secure defaults, input validation, and defense-in-depth from day one.',
  paragraph3:
    'I am currently focused on becoming a high-leverage software engineer for internship roles by combining strong computer science fundamentals, systems thinking, and an iterative build-measure-improve mindset.',
}

export const projects = [
  {
    title: 'Loan Approval Intelligence Platform',
    type: 'Machine Learning + FinTech Risk Modeling',
    problem:
      'Manual loan screening is slow and inconsistent. Financial teams need faster, data-backed underwriting signals without sacrificing interpretability.',
    context:
      'Designed as a decision-support layer for retail lending workflows to triage high-risk applications before manual review.',
    architecture:
      'Built a training and inference pipeline with feature preprocessing, model comparison, and a Streamlit decision console. Added model artifact versioning and threshold tuning for risk bands.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'NumPy'],
    challenges: [
      'Class imbalance caused unstable recall for minority default cases.',
      'Feature leakage risk from post-approval fields required strict data contracts.',
      'Non-technical users needed explainable outcomes, not raw probabilities.',
    ],
    optimizations: [
      'Applied stratified sampling and class weighting to improve minority-class sensitivity.',
      'Created a reusable preprocessing pipeline to prevent training-serving skew.',
      'Added feature contribution summaries and calibrated confidence labels.',
    ],
    metrics: [
      'Improved F1 score from baseline model by ~18% on validation data.',
      'Reduced model inference latency to under 120ms per request in local benchmark.',
    ],
    deployment:
      'Deployed via Streamlit Cloud with environment-based secrets and reproducible dependency lockfile.',
    future:
      'Upgrade to a FastAPI microservice + async queue for batch scoring and audit logging.',
    repoUrl: 'https://github.com/amrit100612/Loan_Predictions',
  },
  {
    title: 'Iris Model Benchmark Dashboard',
    type: 'ML Evaluation + Frontend Engineering',
    problem:
      'Beginner ML demos often hide the tradeoffs between model families, making results hard to trust or compare.',
    context:
      'Created an interactive benchmark app to compare classifiers with standardized preprocessing and evaluation.',
    architecture:
      'Implemented a modular experiment runner that trains multiple models, captures metrics, and renders confusion matrices and decision boundaries in a clean UI.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'Matplotlib'],
    challenges: [
      'Maintaining deterministic results across repeated runs.',
      'Keeping UI responsive while recomputing multiple models.',
    ],
    optimizations: [
      'Cached preprocessed datasets and memoized repeated transformations.',
      'Separated visualization concerns from model orchestration for cleaner maintenance.',
    ],
    metrics: [
      'Cut dashboard recompute time by ~35% after introducing caching.',
      'Achieved consistent metric variance within expected statistical range across seeded runs.',
    ],
    deployment:
      'Packaged with environment pinning and one-command startup for recruiter demos.',
    future:
      'Extend to multiclass imbalance scenarios and add CI checks for metric regression.',
    repoUrl: 'https://github.com/amrit100612/IRIS_Predict',
  },
  {
    title: 'Weather Intelligence Web App',
    type: 'Frontend + API Integration',
    problem:
      'Weather apps frequently fail under unreliable networks or API failures, creating inconsistent user experience.',
    context:
      'Developed a resilient weather dashboard for location-based forecasts and air quality insights.',
    architecture:
      'Client app integrates geolocation, weather APIs, and fallback state management with robust async request handling.',
    stack: ['JavaScript', 'React', 'REST APIs', 'CSS', 'Vite'],
    challenges: [
      'Handling geolocation permission denial gracefully.',
      'Managing partial API responses and rate-limit errors.',
    ],
    optimizations: [
      'Implemented request-level timeout and retry strategy for transient failures.',
      'Added normalized response adapter to avoid rendering-time branching complexity.',
    ],
    metrics: [
      'Reduced failed user flows during API instability through fallback UX states.',
      'Improved first meaningful render using lean component structure and conditional loading.',
    ],
    deployment:
      'Hosted as a static frontend with environment-specific API key handling.',
    future:
      'Move to server-side proxy for key protection and response caching.',
    repoUrl: 'https://github.com/amrit100612/Weather',
  },
]

export const dsa = {
  profileUrl: 'https://leetcode.com/u/mNBmOlhBGQ/',
  stats: [
    { label: 'Problems Solved', value: '150+' },
    { label: 'Primary Platform', value: 'LeetCode' },
    { label: 'Current Focus', value: 'Graphs + DP + Sliding Window' },
    { label: 'Target by Dec 2026', value: '200+ High-Quality Problems' },
  ],
  categories: [
    'Arrays & Hashing',
    'Two Pointers',
    'Binary Search',
    'Stacks & Queues',
    'Trees & Graphs',
    'Dynamic Programming',
    'Greedy',
    'Heap / Priority Queue',
  ],
  roadmap: [
    'Complete blind-75 + grind-75 with written complexity notes.',
    'Solve 4 timed mock interview sets every month.',
    'Revisit failed problems after 7-day and 30-day intervals.',
    'Publish weekly pattern notes to build retrieval speed under pressure.',
  ],
  snippet: `function longestConsecutive(nums) {
  const set = new Set(nums)
  let best = 0

  for (const num of set) {
    if (set.has(num - 1)) continue

    let current = num
    let streak = 1
    while (set.has(current + 1)) {
      current += 1
      streak += 1
    }
    best = Math.max(best, streak)
  }

  return best
}`,
  complexity: 'Time: O(n) average, Space: O(n). Each element starts a sequence once, avoiding repeated scans.',
}

export const systemDesign = [
  {
    title: 'Design WhatsApp (Mini Overview)',
    components: [
      'Gateway: WebSocket + HTTP edge for message ingress',
      'Messaging Service: fan-out, delivery state, retries',
      'Presence Service: online status and last-seen signals',
      'Media Service: object storage + CDN links for attachments',
    ],
    databases: 'Messages in sharded NoSQL store; user metadata in relational DB.',
    loadBalancing: 'L4 load balancer for persistent socket sessions, sticky routing at edge.',
    caching: 'Redis for session state, presence lookups, and recent chats.',
    tradeoffs:
      'Prioritize availability and low latency over strict global ordering; reconcile eventual consistency in read receipts.',
  },
  {
    title: 'Design Netflix (Mini Overview)',
    components: [
      'API Gateway + BFF layer for device-specific responses',
      'Recommendation Service with offline feature pipelines',
      'Playback Service with adaptive bitrate streaming',
      'Content Metadata + Search indexing pipeline',
    ],
    databases: 'Metadata in distributed SQL/NoSQL, viewing events in append-only analytics store.',
    loadBalancing: 'Global traffic steering + regional failover and autoscaled stateless services.',
    caching: 'CDN edge caching for video chunks + Redis for personalized metadata.',
    tradeoffs:
      'Heavy caching improves latency and cost but introduces cache invalidation complexity for freshness.',
  },
  {
    title: 'Design Rate Limiter (Mini Overview)',
    components: [
      'Limit Decision API at gateway middleware',
      'Counter Store with atomic increments and expiry',
      'Policy Manager for per-user and per-route limits',
      'Metrics + alerting for abuse spikes',
    ],
    databases: 'Redis for token-bucket counters; long-term audit logs in PostgreSQL.',
    loadBalancing: 'Stateless limit checkers behind LB with shared distributed counter backend.',
    caching: 'Policy config cached at edge nodes with short TTL.',
    tradeoffs:
      'Token bucket handles bursts gracefully but needs careful distributed clock handling for fairness.',
  },
]

export const skills = [
  {
    category: 'Languages',
    detail: 'Python, JavaScript, SQL | Writes production-style code with testing and readability in mind.',
  },
  {
    category: 'Frontend',
    detail: 'React, Vite, TailwindCSS | Builds responsive, accessible UIs with component-driven architecture.',
  },
  {
    category: 'Backend',
    detail: 'Node.js, Express, FastAPI | Designs REST APIs, auth flows, and async processing pipelines.',
  },
  {
    category: 'Databases',
    detail: 'PostgreSQL, Redis | Models relational schemas and uses caching for low-latency paths.',
  },
  {
    category: 'DevOps',
    detail: 'Docker, CI basics, environment-based config | Focuses on reproducible deployment and runtime reliability.',
  },
  {
    category: 'Machine Learning',
    detail: 'scikit-learn, Pandas, model evaluation | Turns ML prototypes into explainable product features.',
  },
  {
    category: 'Security',
    detail: 'Input validation, auth fundamentals, secure defaults | Applies cybersecurity-first engineering decisions.',
  },
  {
    category: 'Tools',
    detail: 'Git, GitHub, Postman, Linux CLI | Maintains disciplined workflows and debugging habits.',
  },
]

export const blogIdeas = [
  {
    title: 'From Notebook to Production: Hardening an ML Model API',
    description: 'How to move from experimentation to reliable serving with validation, monitoring, and rollback strategy.',
  },
  {
    title: 'Designing a Redis-Backed Rate Limiter for Public APIs',
    description: 'Compare fixed window, sliding window, and token bucket for real traffic patterns.',
  },
  {
    title: 'What I Learned Solving 150+ DSA Problems Intentionally',
    description: 'Pattern recognition, error logs, and revision systems that improved interview speed.',
  },
  {
    title: 'Secure-by-Default Frontend Engineering',
    description: 'Practical checklist for API key safety, input sanitation, and client-side threat awareness.',
  },
  {
    title: 'Building a Low-Latency URL Shortener: Tradeoffs and Benchmarks',
    description: 'Cache strategy, data model choices, and bottlenecks discovered in load tests.',
  },
]

export const contact = {
  title: 'Let us build impactful software together.',
  message:
    'I am actively seeking Software Development Engineer Internship opportunities where I can contribute to production systems, learn from strong engineering teams, and ship reliable products at scale.',
}
