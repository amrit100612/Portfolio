export const profile = {
  name: 'Amrit Kumar',
  title: 'Software Engineering • Machine Learning',
  headline: 'B.Tech CSE (Cyber Security) student building practical ML and web applications',
  subheading:
    'I focus on strong CS fundamentals, hands-on implementation, and clear technical communication under pressure. Currently pursuing B.Tech CSE (Cyber Security) at Haldia Institute of Technology (CGPA: 8.02/10).',
  location: 'West Bengal, India',
  phone: '+91 9508043572',
  website: 'https://amritkumar.me',
  email: 'amritkum1209@gmail.com',
  github: 'https://github.com/amrit100612',
  linkedin: 'https://www.linkedin.com/in/amrit100612/',
  leetcode: 'https://leetcode.com/u/mNBmOlhBGQ/',
  resume: '/Amrit_CV_Main.pdf',
  stack: ['Java', 'Python', 'React.js', 'REST APIs', 'scikit-learn', 'Pandas', 'Git', 'Linux'],
  typingRoles: [
    'Software Engineering • Machine Learning',
    'B.Tech CSE (Cyber Security) | Haldia Institute of Technology',
    'Building ML and Web projects with strong CS fundamentals',
  ],
  heroAlternates: [
    'Software Engineering & ML focused student with implementation-first mindset',
    'Java + Python developer with practical ML and frontend project experience',
    'Strong in DSA, OOP, DBMS, OS, and communication under timed problem solving',
  ],
}

export const about = {
  paragraph1:
    'I am Amrit Kumar, a Computer Science and Engineering student (Cyber Security) at Haldia Institute of Technology (Aug 2023 – May 2027) with a CGPA of 8.02/10.',
  paragraph2:
    'My core focus is implementation depth across Java, Python, and JavaScript, backed by fundamentals in DSA, OOP, DBMS, and Operating Systems.',
  paragraph3:
    'I build practical projects in machine learning and web development, contribute in leadership roles, and continuously improve communication through technical problem solving and write-ups.',
}

export const projects = [
  {
    title: 'IRIS Predict — ML Classification Web App',
    type: 'Machine Learning + Web App',
    problem:
      'Classroom ML examples often stop at notebooks and do not provide an interactive experience for users to test models in real time.',
    whyItMatters:
      'Deployable ML apps demonstrate practical engineering ability beyond theory and help communicate model behavior clearly.',
    solution:
      'Built a Streamlit-based classification app on the Iris dataset with an end-to-end workflow from preprocessing to live inference.',
    approach:
      'Implemented feature scaling and train/test validation, then benchmarked KNN, SVM, and Decision Tree models to select robust performance.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    challenges: [
      'Comparing models consistently required stable preprocessing and controlled evaluation steps.',
      'Balancing clarity of outputs with simplicity in the interface.',
    ],
    metrics: [
      'Achieved 96% classification accuracy on evaluation runs.',
      'Enabled real-time inference through an interactive web interface.',
    ],
    deployment: 'Deployed as a Streamlit app for easy live testing.',
    repoUrl: 'https://github.com/amrit100612/IRIS_Predict',
    liveUrl: 'https://iris-predict.streamlit.app/',
  },
  {
    title: 'Weather Detecting Web Application',
    type: 'Frontend + API Integration',
    problem:
      'Users need fast and reliable city-based weather updates with clear visibility of essential environmental signals.',
    whyItMatters:
      'Real-time weather visibility helps users plan daily activities with better context.',
    solution:
      'Built a responsive weather dashboard powered by WeatherAPI.com with live updates and location-aware experience.',
    approach:
      'Integrated REST APIs with asynchronous JavaScript (async/await), added geolocation-based detection, and designed responsive UI cards.',
    stack: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
    challenges: [
      'Handling API latency and errors while keeping the interface responsive.',
      'Presenting multiple metrics (temperature, AQI, humidity, conditions) without clutter.',
    ],
    metrics: [
      'Implemented non-blocking API flow for smoother user interactions.',
      'Delivered geolocation-based auto-detection and richer weather insights including AQI and humidity.',
    ],
    deployment: 'Built as a deployable frontend web application with live API integration.',
    repoUrl: 'https://github.com/amrit100612/Weather',
  },
  {
    title: 'CipherX — Encryption/Decryption CLI Tool',
    type: 'Python + Cryptography',
    problem:
      'Basic secure text transformation tools are often either opaque for learners or too rigid for experimentation.',
    whyItMatters:
      'Hands-on secure coding projects strengthen practical cybersecurity understanding.',
    solution:
      'Designed a modular CLI tool for encryption and decryption workflows with reliable command-line execution.',
    approach:
      'Implemented custom cryptographic transformation logic, input validation, and error handling for bidirectional operations.',
    stack: ['Python', 'Cryptography'],
    challenges: [
      'Designing command-line interactions that remain simple while handling invalid input safely.',
      'Structuring encryption/decryption logic in reusable modular units.',
    ],
    metrics: [
      'Implemented robust input validation and error-safe workflow handling.',
      'Strengthened applied cybersecurity foundations through practical implementation.',
    ],
    deployment: 'CLI-based project focused on local secure workflow execution.',
    repoUrl: 'https://github.com/amrit100612/CipherX',
  },
]

export const dsa = {
  profileUrl: 'https://leetcode.com/u/mNBmOlhBGQ/',
  stats: [
    { label: 'Practice Focus', value: 'Consistency & Correctness' },
    { label: 'Primary Language', value: 'Java' },
    { label: 'Primary Platforms', value: 'LeetCode, CodeChef, HackerRank' },
    { label: 'Current Focus', value: 'Arrays, Strings, Binary Search' },
  ],
  categories: [
    'Arrays',
    'Strings',
    'Binary Search',
    'Two Pointers',
    'Hashing',
    'Recursion',
    'Trees',
    'Graphs',
    'Dynamic Programming',
  ],
  highlights: [
    'Consistent DSA practice on LeetCode with strong emphasis on Arrays, Strings, and Binary Search.',
    'Uses timed problem solving and revision cycles to improve accuracy and communication.',
    'Builds clear, implementation-first Java solutions with edge-case awareness.',
    'Strengthens interview readiness through regular platform-based practice.',
  ],
  academic: [
    'B.Tech CSE (Cyber Security), Haldia Institute of Technology (Aug 2023 – May 2027).',
    'CGPA: 8.02 / 10.',
    'Relevant coursework: Data Structures & Algorithms, Operating Systems, DBMS, OOP, Machine Learning.',
  ],
  certifications: [
    'Deloitte Australia Cyber Security Program (Forage, 2024) — completed virtual industry simulation.',
    'Hacktoberfest 2024 — earned Level 4 badge through open-source contributions.',
    'GirlScript Summer of Code 2025 — active contributor on project GrowCraft.',
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
    category: 'Languages',
    detail: 'Java, Python, C, JavaScript',
  },
  {
    category: 'CS Fundamentals',
    detail: 'Data Structures & Algorithms, OOP, DBMS, Operating Systems',
  },
  {
    category: 'Web',
    detail: 'React.js, HTML5, CSS3, REST APIs',
  },
  {
    category: 'Machine Learning',
    detail: 'scikit-learn, Pandas, NumPy, Matplotlib, Seaborn',
  },
  {
    category: 'Tools',
    detail: 'Git, GitHub, Linux, VS Code, Streamlit Cloud',
  },
]

export const skillChart = [
  { label: 'Java / Python / JavaScript', value: 88 },
  { label: 'Data Structures & Algorithms', value: 86 },
  { label: 'CS Fundamentals', value: 84 },
  { label: 'React + Web Fundamentals', value: 83 },
  { label: 'Machine Learning Tooling', value: 82 },
  { label: 'Developer Tools', value: 85 },
]

export const experienceJourney = [
  {
    title: 'Class Representative — CSE (Cyber Security)',
    period: 'Aug 2023 - Present',
    points: [
      'Representing 60+ students as the primary liaison between faculty and administration.',
      'Organized academic workshops, technical events, and departmental initiatives.',
      'Improved communication and coordination across student and faculty stakeholders.',
    ],
  },
  {
    title: 'Public Relations Team Member — TaruGuardians',
    period: 'Jan 2024 - Present',
    points: [
      'Managed outreach campaigns to increase environmental awareness and student engagement.',
      'Coordinated event promotions, social media drives, and participation initiatives.',
      'Built execution discipline for communication-first campaign delivery.',
    ],
  },
  {
    title: 'Open Source & Technical Growth',
    period: '2024 - Present',
    points: [
      'Completed Deloitte Australia Cyber Security Program (Forage, 2024).',
      'Earned Hacktoberfest 2024 Level 4 badge through open-source contributions.',
      'Contributed in GirlScript Summer of Code 2025 on GrowCraft while maintaining regular DSA practice.',
    ],
  },
]

export const dailyLearningTracker = {
  streak: 'Consistent DSA + project practice mindset',
  blocks: [
    { label: 'DSA in Java', detail: 'Regular LeetCode practice with focus on Arrays, Strings, and Binary Search.' },
    { label: 'Core CS Revision', detail: 'Structured revision of OS, DBMS, OOP, and problem-solving patterns.' },
    { label: 'Project Execution', detail: 'Iterative improvements across ML and web applications with deployment mindset.' },
    { label: 'Communication', detail: 'Refining technical explanation quality for interviews and collaboration.' },
  ],
}

export const blogIdeas = [
  {
    title: 'Designing a Practical DSA Learning System',
    description: 'How structured practice, timed solving, and revision loops improve correctness and communication.',
  },
  {
    title: 'Engineering Tradeoffs in ML Mini-Projects',
    description: 'Lessons from model selection, preprocessing, and interface decisions in beginner-to-intermediate ML apps.',
  },
  {
    title: 'Writing Clearly as a Student Engineer',
    description: 'How technical writing improves collaboration, interview clarity, and product-team readiness.',
  },
]

export const contact = {
  title: 'Let’s connect for software engineering opportunities.',
  message:
    'I am open to software engineering and machine learning opportunities where I can contribute through strong fundamentals, practical implementation, and clear communication. I would be glad to connect.',
}

export const contactForm = {
  heading: 'Send a quick message',
  fields: ['Name', 'Email', 'Message'],
}
