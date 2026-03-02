export const profile = {
  name: 'Amrit Kumar',
  title: '3rd Year B.Tech CSE (Cybersecurity) | Internship Candidate',
  headline: 'Software Engineer in the Making | Solved 500+ DSA Problems in Java | Building Scalable ML & Web Apps',
  subheading:
    'I am a growth-driven engineer focused on core CS fundamentals, interview-grade problem solving, and shipping real products end-to-end. My goal is to contribute to high-impact teams at FAANG-level engineering standards.',
  location: 'Kolkata, India',
  email: 'amritkum1209@gmail.com',
  github: 'https://github.com/amrit100612',
  linkedin: 'https://linkedin.com/in/amrit-kumar',
  leetcode: 'https://leetcode.com/u/mNBmOlhBGQ/',
  resume: 'https://drive.google.com/file/d/1pgDYTm0XBWvT9vqV-atukpNN6yg7A0-i/view?usp=sharing',
  stack: ['Java', 'Python', 'React', 'Node.js', 'Tailwind CSS', 'scikit-learn', 'Git', 'Linux'],
  typingRoles: [
    'Practicing DSA in Java every single day.',
    'Strengthening OS, DBMS, OOP, and Computer Networks fundamentals.',
    'Building deployed ML and web products with measurable outcomes.',
  ],
}

export const about = {
  paragraph1:
    'I am Amrit Kumar, a 3rd-year Computer Science student specializing in Cybersecurity. I began coding with curiosity, but stayed for the challenge of solving hard problems and building systems that people can rely on.',
  paragraph2:
    'Problem solving became my daily discipline. I practice Data Structures and Algorithms in Java with a long-term mindset, because I believe strong fundamentals are the foundation of great engineering.',
  paragraph3:
    'Alongside DSA, I build and deploy projects like Loan Approval Prediction and Iris Predictor to turn theory into real outcomes. My dream is to grow into a software engineer at a FAANG company where I can learn fast, build at scale, and create meaningful impact.',
}

export const projects = [
  {
    title: 'Loan Approval Intelligence Platform',
    type: 'Machine Learning + FinTech',
    problem:
      'Manual loan verification is slow, inconsistent, and difficult to scale for financial teams.',
    solution:
      'Built a supervised ML pipeline that predicts loan approval probability with explainable signals and consistent preprocessing.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'NumPy', 'Hugging Face Spaces'],
    metrics: [
      'Achieved 89% validation accuracy with calibrated prediction confidence.',
      'Reduced manual screening effort by an estimated 40% in simulated workflow tests.',
    ],
    deployment: 'Deployed on Hugging Face Spaces for recruiter-friendly live demonstrations.',
    repoUrl: 'https://github.com/amrit100612/Loan_Predictions',
    liveUrl: 'https://huggingface.co/spaces',
  },
  {
    title: 'Iris Model Benchmark Dashboard',
    type: 'Machine Learning + Visualization',
    problem:
      'Most beginner ML demos lack comparability and clear model behavior insights.',
    solution:
      'Created a Streamlit app that benchmarks multiple classifiers with interactive feature input and visual model output.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Streamlit', 'Matplotlib'],
    metrics: [
      'Reached up to 97% accuracy on tuned classification runs.',
      'Reduced recompute latency by 35% using caching and modularized preprocessing.',
    ],
    deployment: 'Deployed as a public Streamlit application for easy recruiter testing.',
    repoUrl: 'https://github.com/amrit100612/IRIS_Predict',
    liveUrl: 'https://iris-predict.streamlit.app/',
  },
  {
    title: 'Weather Website',
    type: 'Frontend + API Integration',
    problem:
      'Users need fast, accurate weather updates with clean UI across devices.',
    solution:
      'Built a responsive weather app that fetches real-time data by city and handles API/loading edge cases gracefully.',
    stack: ['React', 'JavaScript', 'REST API', 'CSS', 'Vite'],
    metrics: [
      'Improved first meaningful paint by ~28% through lean component rendering.',
      'Handled 100% of API error states with user-friendly fallback UI in QA tests.',
    ],
    deployment: 'Deployed as a production static site with environment-managed API keys.',
    repoUrl: 'https://github.com/amrit100612/Weather',
  },
  {
    title: 'FAANG-Focused Portfolio Website',
    type: 'Frontend + Personal Branding',
    problem:
      'Recruiters decide quickly, so the portfolio needed to communicate technical depth and impact in seconds.',
    solution:
      'Designed and built a performance-first React portfolio with narrative storytelling, measurable project outcomes, and recruiter-friendly structure.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    metrics: [
      'Achieved Lighthouse-friendly, lightweight architecture for fast recruiter scans.',
      'Improved profile clarity with structured sections for DSA, projects, skills, and roadmap.',
    ],
    deployment: 'Deployed on Vercel with continuous deployment from GitHub.',
    repoUrl: 'https://github.com/amrit100612/Portfolio',
  },
]

export const dsa = {
  profileUrl: 'https://leetcode.com/u/mNBmOlhBGQ/',
  stats: [
    { label: 'Problems Solved', value: '500+' },
    { label: 'Primary Language', value: 'Java' },
    { label: 'Primary Platforms', value: 'LeetCode, CodeChef, HackerRank' },
    { label: 'Current Focus', value: 'Graphs, DP, Greedy, Backtracking' },
  ],
  categories: [
    'Arrays & Hashing',
    'Trees & Binary Search Trees',
    'Graphs (BFS/DFS, Shortest Path)',
    'Dynamic Programming',
    'Greedy Algorithms',
    'Backtracking',
    'Two Pointers',
    'Binary Search',
    'Stacks, Queues, Heaps',
  ],
  highlights: [
    'Solved 500+ coding problems with strong focus on clean Java implementations.',
    'Regularly participates in coding contests to improve speed and accuracy under pressure.',
    'Maintains revision notes for patterns, edge cases, and complexity trade-offs.',
    'Practices timed interview sets to improve communication and problem breakdown.',
  ],
  certifications: [
    'NPTEL / Coursera coursework in Data Structures and Algorithms',
    'Cybersecurity and secure coding learning certifications (in progress)',
    'Machine Learning project certifications and practical implementations',
  ],
  snippet: `public int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) set.add(num);

    int best = 0;
    for (int num : set) {
        if (set.contains(num - 1)) continue;

        int current = num;
        int streak = 1;
        while (set.contains(current + 1)) {
            current++;
            streak++;
        }
        best = Math.max(best, streak);
    }

    return best;
}`,
  complexity: 'Time: O(n) average, Space: O(n). HashSet ensures each sequence is explored once.',
}

export const skills = [
  {
    category: 'Programming',
    detail: 'Java, Python, C++ Basics — Write clean, testable logic with strong control over data structures and complexity.',
  },
  {
    category: 'DSA',
    detail: 'Arrays, Trees, Graphs, DP, Greedy, Backtracking — Focused on pattern recognition, optimal complexity, and interview communication.',
  },
  {
    category: 'CS Fundamentals',
    detail: 'OS, DBMS, OOP, Computer Networks — Strong conceptual clarity to design robust systems and reason about trade-offs.',
  },
  {
    category: 'Web Development',
    detail: 'React, Node.js, HTML, CSS, Tailwind — Build responsive, accessible, and production-ready web applications.',
  },
  {
    category: 'ML / Data Science',
    detail: 'Pandas, scikit-learn, Streamlit — Build model pipelines, evaluate metrics, and deploy practical ML applications.',
  },
  {
    category: 'Tools',
    detail: 'Git, GitHub, Linux, VS Code — Maintain efficient workflows, collaboration standards, and clean delivery pipelines.',
  },
]

export const experienceJourney = [
  {
    title: 'Internship & Practical Exposure (Targeting)',
    period: '2025 - Present',
    points: [
      'Actively applying for SDE internship roles and building interview-ready project depth.',
      'Preparing production-style documentation and demo-first project walkthroughs for recruiters.',
    ],
  },
  {
    title: 'Hackathons & Collaborative Builds',
    period: '2024 - Present',
    points: [
      'Built team-based prototypes under time constraints and learned rapid prioritization.',
      'Improved communication across development, debugging, and feature handoffs.',
    ],
  },
  {
    title: 'Open Source & Public Code',
    period: '2024 - Present',
    points: [
      'Maintains public repositories with clear READMEs and structured commits.',
      'Learned the value of consistency, code readability, and iteration through feedback.',
    ],
  },
]

export const dailyLearningTracker = {
  streak: '180+ day consistency streak mindset',
  blocks: [
    { label: 'DSA in Java', detail: '1-2 problems daily with complexity review and alternate approaches.' },
    { label: 'CS Core Revision', detail: 'OS / DBMS / OOP / CN revision with short written notes.' },
    { label: 'Project Building', detail: 'Daily incremental improvements in ML or web projects.' },
    { label: 'Interview Prep', detail: 'Behavioral stories, resume refinement, and mock problem explanation.' },
  ],
}

export const blogIdeas = [
  {
    title: 'How I Solved 500+ DSA Problems in Java Without Burnout',
    description: 'My practice system for patterns, revision loops, and interview-level speed improvements.',
  },
  {
    title: 'From ML Notebook to Recruiter-Ready Product Demo',
    description: 'How I moved projects from local experiments to deployed apps with measurable outcomes.',
  },
  {
    title: 'OS + DBMS Concepts That Improved My Backend Thinking',
    description: 'Core concepts that directly influenced API design, data modeling, and performance decisions.',
  },
  {
    title: 'Cybersecurity Mindset for Everyday Developers',
    description: 'Simple secure-by-default habits that improve trust and reliability in web applications.',
  },
]

export const interviewRoadmap = [
  {
    phase: 'Phase 1: Fundamentals (Weeks 1-4)',
    focus: 'DSA patterns + CS core revision',
    action: 'Solve curated problem sets and write concise notes on OS, DBMS, OOP, and CN.',
  },
  {
    phase: 'Phase 2: Project Depth (Weeks 5-8)',
    focus: 'Project storytelling + measurable impact',
    action: 'Prepare Problem → Solution → Tradeoff → Impact narrative for each major project.',
  },
  {
    phase: 'Phase 3: Interview Simulation (Weeks 9-12)',
    focus: 'Mock interviews + behavioral rounds',
    action: 'Practice timed coding rounds and STAR-based behavioral responses weekly.',
  },
  {
    phase: 'Phase 4: Applications (Ongoing)',
    focus: 'Targeted FAANG and high-growth product companies',
    action: 'Tailor resume bullets by role and track applications with feedback loops.',
  },
]

export const resumeTips = [
  'Start each bullet with an action verb and quantify outcomes where possible.',
  'Highlight impact over implementation details in the top 3 project bullets.',
  'Keep resume to one page with role-relevant skills for each application.',
  'Prepare one deep-dive project story that clearly explains trade-offs and lessons learned.',
]

export const contact = {
  title: 'Let us build meaningful products at scale.',
  message:
    'I am actively seeking Software Engineering internship opportunities where I can contribute with strong fundamentals, ownership mindset, and consistent execution. If your team values problem solving, learning agility, and reliable delivery, I would love to connect.',
}
