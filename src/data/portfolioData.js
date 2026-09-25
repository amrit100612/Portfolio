export const profile = {
  name: 'Amrit Kumar',
  title: 'Cybersecurity Analyst | ML & Software Engineering',
  headline: 'I’m a cybersecurity-focused student building secure software, analyzing threats, and applying machine learning to practical defense problems.',
  subheading: 'Fourth-year B.Tech CSE (Cyber Security) • Haldia Institute of Technology • CGPA 8.08/10',
  photo: '/amrit-photo.png.png',
  photoAlt: 'Portrait of Amrit Kumar',
  location: 'West Bengal, India',
  phone: '+91 9508043572',
  website: 'https://amritkumar.me',
  email: 'amritkum1209@gmail.com',
  github: 'https://github.com/amrit100612',
  githubImage: '/github-link.jpg',
  linkedin: 'https://www.linkedin.com/in/amrit100612/',
  linkedinImage: '/linkedin-link.webp',
  leetcode: 'https://leetcode.com/u/Amrit1209/',
  leetcodeImage: '/leetcode-link.png',
  resume: 'https://drive.google.com/uc?export=download&id=1jrCMgLgiCTVDSsS0eQBBm9ydl8QlV9dY',
}

export const about = {
  heading: 'ABOUT THE ENGINEER',
  aboutText:
    'I am a fourth-year undergraduate student in Computer Science and Engineering (Cyber Security) at Haldia Institute of Technology, India, originally from Sheikhpura, Bihar.',
  aboutStory:
    'My path is shaped by curiosity for applied cryptography, network security, vulnerability analysis, and the practical side of defense. I care about building software that is not only functional, but resilient, well-structured, and hard to misuse.',
  aboutStory2:
    'When I am not studying security concepts or coding, I am sharpening my strategy through chess, staying disciplined at the gym, and contributing to projects that turn theory into action.',
  interestsText:
    'I enjoy competitive programming, thoughtful problem solving, and exploring how secure design principles can improve everyday software. I also love chess and the discipline it brings to my thinking.',
  interestsMusic:
    'Music keeps me grounded, but my strongest energy comes from building, learning, and improving the systems around me.',
  skillsText:
    'I continue to grow in penetration testing, incident response, secure development practices, and systems thinking through hands-on projects and technical study.',
  techStack: [
    'Python, Java, C, Bash',
    'Applied Cryptography, Network Security, OWASP Top 10',
    'Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn',
    'Linux, Wireshark, Nmap, TryHackMe, Streamlit',
  ],
}

export const projects = [
  {
    title: 'IRIS Predict — ML Classification Web App',
    type: 'Machine Learning + Web App',
    featured: true,
    problem: 'Most beginner ML work stays in notebooks and does not translate into real user-facing products.',
    whyItMatters: 'Shipping an interactive ML app demonstrates production mindset, not just model training knowledge.',
    solution: 'Engineered and deployed a Streamlit classification app that converts user inputs into live model predictions.',
    approach: 'Standardized preprocessing, compared KNN/SVM/Decision Tree, and selected the best-performing model through repeatable evaluation.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    challenges: ['Consistent preprocessing for fair model comparison.', 'Balancing UX simplicity and model transparency.'],
    architecture: [
      'Presentation Layer: Streamlit UI for feature input and prediction rendering.',
      'Inference Layer: Trained model pipeline performs scaling and classification.',
      'Data Layer: Iris dataset preprocessing and train/test split flow.',
      'Evaluation Layer: Accuracy tracking and model comparison.',
    ],
    architectureFlow: ['Streamlit UI', 'Preprocessing', 'Model Inference', 'Prediction Output'],
    metrics: ['Delivered 96% classification accuracy on evaluation runs.', 'Enabled real-time browser-based inference with immediate prediction feedback.'],
    deployment: 'Deployed on Streamlit Cloud for public access and live testing.',
  },
  {
    title: 'Weather Detecting Web Application',
    type: 'Frontend + API Integration',
    featured: true,
    problem: 'Weather tools are often slow, cluttered, or missing location-aware convenience.',
    whyItMatters: 'Fast and readable weather insights directly improve daily planning and usability.',
    solution: 'Built a responsive JavaScript weather dashboard with real-time API integration and clear metric cards.',
    approach: 'Implemented async/await data fetching, geolocation-first city detection, and resilient error handling for unstable API states.',
    stack: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
    challenges: ['Handling API latency and errors gracefully.', 'Displaying many weather metrics without clutter.'],
    architecture: [
      'UI Layer: Responsive cards for search and weather visualization.',
      'Service Layer: Async API integration with robust error handling.',
      'Location Layer: Browser geolocation for auto city detection.',
      'State Layer: Client-side state drives weather metric rendering.',
    ],
    architectureFlow: ['User Input/Geo', 'API Service', 'State Update', 'Weather Cards'],
    metrics: ['Implemented non-blocking request handling for smoother UI responsiveness.', 'Surfaced richer weather signals including AQI, humidity, and condition summaries.'],
    deployment: 'Deployed as a frontend web app with live Weather API integration.',
  },
  {
    title: 'Loan Approval Prediction System',
    type: 'Machine Learning + Decision Support',
    featured: true,
    problem: 'Manual loan screening can be inconsistent, time-consuming, and difficult to scale reliably.',
    whyItMatters: 'Data-driven decision support increases screening consistency and reduces turnaround time.',
    solution: 'Built an ML-powered approval prediction workflow that evaluates applicant profiles and returns instant eligibility output.',
    approach: 'Applied data cleaning, feature engineering, and comparative modeling with Logistic Regression and Random Forest.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Streamlit'],
    challenges: ['Handling missing and categorical data safely.', 'Balancing model interpretability and predictive performance.'],
    architecture: [
      'Input Layer: User form captures applicant profile and financial attributes.',
      'Processing Layer: Data cleaning and feature engineering prepare model-ready vectors.',
      'Model Layer: Logistic Regression / Random Forest generates approval classification.',
      'Output Layer: Prediction result displayed with clear decision feedback.',
    ],
    architectureFlow: ['User Input Form', 'Data Cleaning & Feature Engineering', 'ML Model', 'Prediction Result'],
    metrics: ['Improved model stability through structured preprocessing and feature preparation.', 'Reduced manual review effort by automating first-pass approval prediction.'],
    deployment: 'Packaged as a Streamlit app for interactive decision-support testing.',
  },
  {
    title: 'CipherX — Encryption/Decryption CLI Tool',
    type: 'Python + Cybersecurity',
    featured: true,
    problem: 'CLI cryptography exercises are often fragmented and fragile for real learning workflows.',
    whyItMatters: 'A reliable encryption utility strengthens hands-on cybersecurity fundamentals and secure coding discipline.',
    solution: 'Engineered a modular Python CLI using a Caesar + XOR hybrid cipher with bidirectional encode/decode handling.',
    approach: 'Applied CIA Triad principles, documented the cryptographic design and threat model, and covered 10+ edge cases across 50+ tests.',
    stack: ['Python', 'Cryptography', 'CLI', 'CIA Triad'],
    challenges: ['Designing clear command usage while preventing invalid input paths.', 'Keeping cryptographic behavior predictable across edge cases.'],
    architecture: [
      'Input Layer: CLI parser captures operation mode, key parameters, and payload.',
      'Validation Layer: Input guards verify command correctness and required fields.',
      'Crypto Layer: Modular encryption/decryption engine executes transformation logic.',
      'Output Layer: Processed secure text and status feedback are returned to terminal.',
    ],
    architectureFlow: ['CLI Input', 'Validation', 'Crypto Engine', 'Secure Output'],
    metrics: ['Implemented robust validation to prevent invalid command execution paths.', 'Improved usability with deterministic command behavior and structured error messaging.'],
    deployment: 'Delivered as a local Python CLI with a live Streamlit demo at cipherx404.streamlit.app.',
  },
  {
    title: 'PCAP Threat Analyzer',
    type: 'Network Security + Threat Detection',
    featured: true,
    problem: 'Raw packet captures are difficult to triage quickly when suspicious traffic is mixed with normal activity.',
    whyItMatters: 'Structured traffic analysis helps surface attack indicators and turn packet data into an actionable investigation.',
    solution: 'Built a Python-based network security tool that analyzes PCAP traffic and detects port scans, brute-force attacks, and suspicious DNS/HTTP activity.',
    approach: 'Combined Scapy packet parsing, Pandas-based analysis, rule-based risk scoring, and automated CSV investigation reports.',
    stack: ['Python', 'Scapy', 'Pandas', 'Streamlit'],
    challenges: ['Turning packet-level signals into readable security findings.', 'Balancing detection rules with useful investigation output.'],
    architecture: [
      'Input Layer: PCAP upload and packet capture parsing with Scapy.',
      'Analysis Layer: Pandas transforms traffic into investigation-ready records.',
      'Detection Layer: Rules identify scans, brute force, and suspicious DNS/HTTP activity.',
      'Reporting Layer: Risk scores and CSV exports summarize findings.',
    ],
    architectureFlow: ['PCAP Input', 'Packet Parsing', 'Threat Rules', 'Risk Report'],
    metrics: ['Detects multiple common network attack patterns with rule-based scoring.', 'Exports structured investigation reports for follow-up analysis.'],
    deployment: 'Deployed as a Streamlit app at pcap-threat-analyzer.streamlit.app.',
  },
]

export const works = [
  {
    title: 'My GitHub Profile',
    category: 'Programming',
    url: 'https://github.com/amrit100612',
    image: '/github-link.jpg',
    architecture: ['Portfolio Card', 'External Link Router', 'GitHub Profile'],
  },
  {
    title: 'My LeetCode Profile',
    category: 'Programming',
    url: 'https://leetcode.com/u/Amrit1209/',
    image: '/leetcode-link.png',
    architecture: ['Portfolio Card', 'External Link Router', 'LeetCode Profile'],
  },
  {
    title: 'My LinkedIn Profile',
    category: 'Programming',
    url: 'https://www.linkedin.com/in/amrit100612/',
    image: '/linkedin-link.webp',
    architecture: ['Portfolio Card', 'External Link Router', 'LinkedIn Profile'],
  },
  {
    title: 'IRIS Predict - ML Classification App',
    category: 'Machine Learning',
    url: 'https://github.com/amrit100612/IRIS_Predict',
    image: '/iris-project.webp',
    architecture: ['Streamlit UI', 'Preprocessing', 'Model Inference', 'Prediction Output'],
  },
  {
    title: 'Weather Detecting Web Application',
    category: 'Web Design',
    url: 'https://github.com/amrit100612/Weather',
    image: '/weather-project.png',
    architecture: ['UI Layer', 'API Service', 'State Update', 'Weather Cards'],
  },
  {
    title: 'Loan Approval Prediction System',
    category: 'Machine Learning',
    url: 'https://github.com/amrit100612/Loan-Prediction',
    image: '/loan-project.png',
    architecture: ['Input Form', 'Feature Engineering', 'ML Model', 'Approval Output'],
  },
  {
    title: 'CypherX404 - Encryption/Decryption CLI',
    category: 'Programming',
    url: 'https://github.com/amrit100612/CipherX',
    image: '/cipherx-project.png',
    architecture: ['CLI Input', 'Validation', 'Crypto Engine', 'Secure Output'],
  },
]

export const dsa = {
  profileUrl: 'https://leetcode.com/u/Amrit1209/',
  highlights: [
    'Solved 150+ algorithmic problems with focus on arrays, strings, binary search, and hash maps.',
    'Implementation-first Java solutions with edge-case awareness.',
  ],
}

export const skills = [
  { category: 'Languages', detail: 'Python, Java, C, Bash' },
  { category: 'Cybersecurity', detail: 'Cryptography, Network Security, OWASP Top 10, Vulnerability Analysis, Penetration Testing, Risk Assessment, Incident Response, Secure Coding' },
  { category: 'CS Fundamentals', detail: 'DSA, OOP, DBMS, Operating Systems, TCP/IP Networking' },
  { category: 'Machine Learning', detail: 'Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Feature Engineering, Model Evaluation' },
  { category: 'Tools', detail: 'Git, GitHub, Linux, VS Code, Streamlit, Wireshark, Nmap, TryHackMe' },
  { category: 'Web & Data', detail: 'React.js, HTML5, CSS3, REST APIs, SQL, SQLite' },
]

export const experienceJourney = [
  { title: 'ISOEH — Advanced Python and Cloud Security', period: 'Jan 2026 - Feb 2026', points: ['Completed hands-on training in machine learning, data analysis, and model deployment using Python.', 'Designed and deployed a Loan Approval Prediction System with Streamlit.'] },
  { title: 'Class Representative — CSE (Cyber Security)', period: 'Aug 2023 - Present', points: ['Representing 60+ students and coordinating with faculty.'] },
]

export const dailyLearningTracker = {
  streak: 'Consistent DSA + project execution mindset',
  blocks: [
    { label: 'DSA in Java', detail: 'Regular LeetCode practice and revision loops across 150+ problems.' },
    { label: 'Security Practice', detail: 'Threat detection, network analysis, cryptography, and web exploitation labs.' },
  ],
}

export const blogIdeas = [
  { title: 'Designing a Practical DSA Learning System', description: 'How timed solving and revision loops improve correctness.' },
  { title: 'Engineering Tradeoffs in ML Mini-Projects', description: 'Lessons from preprocessing, model selection, and UX.' },
]

export const contact = {
  title: 'CONTACT ME',
  message: "Open to cybersecurity analyst, secure software engineering, and threat-informed development opportunities. Let’s build something resilient together.",
  address:
    'Department of Computer Science and Engineering (Cyber Security), Haldia Institute of Technology, West Bengal, India',
}

export const heroRoles = [
  'Cybersecurity Analyst',
  'Secure Software Enthusiast',
  'Threat Detection Builder',
  'Python & Java Developer',
  'Problem Solver',
]

export const aboutFacts = [
  { icon: 'fas fa-shield-halved', title: 'Security-Minded', detail: 'Defense-first mindset' },
  { icon: 'fas fa-network-wired', title: 'Systems Curious', detail: 'Networking & internals' },
  { icon: 'fas fa-chess-knight', title: 'Strategic Thinker', detail: 'Planning & discipline' },
  { icon: 'fas fa-code-branch', title: 'Open Source Contributor', detail: 'Building in public' },
]

export const premiumSkills = [
  { label: 'Security Foundations', detail: 'Threat detection, cryptography, network security, secure coding', level: 88 },
  { label: 'Programming', detail: 'Python, Java, C, Bash', level: 90 },
  { label: 'Web & Apps', detail: 'React.js, HTML5, CSS3, REST APIs, Streamlit', level: 84 },
  { label: 'Data & Tools', detail: 'Scikit-learn, Pandas, NumPy, Git, Linux, Wireshark, Nmap', level: 86 },
]

export const projectCards = [
  {
    title: 'Weather Detecting Web App',
    description: 'Real-time weather dashboard with geolocation and REST API integration.',
    stack: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
    github: 'https://github.com/amrit100612/Weather',
    live: 'https://github.com/amrit100612/Weather',
    architecture: [
      'Presentation Layer: responsive weather dashboard UI.',
      'Service Layer: API integration and response parsing.',
      'Location Layer: geolocation-based city detection.',
      'State Layer: dynamic metric rendering.',
    ],
  },
  {
    title: 'CipherX - Encryption/Decryption Tool',
    description: 'Modular Python CLI utility for secure encryption/decryption workflows.',
    stack: ['Python', 'Cryptography', 'CLI'],
    github: 'https://github.com/amrit100612/CipherX',
    live: 'https://cipherx404.streamlit.app',
    architecture: [
      'Input Layer: command parser and option handling.',
      'Validation Layer: secure input checks.',
      'Crypto Layer: transformation engine.',
      'Output Layer: deterministic terminal feedback.',
    ],
  },
  {
    title: 'IRIS Predict - ML Classification App',
    description: 'Interactive Streamlit app for multi-model Iris classification.',
    stack: ['Python', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/amrit100612/IRIS_Predict',
    live: 'https://github.com/amrit100612/IRIS_Predict',
    architecture: [
      'UI Layer: user input and output visualization.',
      'Preprocessing Layer: data cleaning and scaling.',
      'Inference Layer: trained model prediction pipeline.',
      'Evaluation Layer: model comparison metrics.',
    ],
  },
  {
    title: 'Loan Approval Prediction System',
    description: 'ML model-driven decision support system for loan approval prediction.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/amrit100612/Loan-Prediction',
    live: 'https://github.com/amrit100612/Loan-Prediction',
    architecture: [
      'Input Layer: applicant profile capture form.',
      'Processing Layer: feature engineering and cleaning.',
      'Model Layer: classification for eligibility.',
      'Output Layer: clear decision and confidence display.',
    ],
  },
  {
    title: 'PCAP Threat Analyzer',
    description: 'Network security tool for PCAP analysis, threat detection, risk scoring, and CSV reporting.',
    stack: ['Python', 'Scapy', 'Pandas', 'Streamlit'],
    github: 'https://github.com/amrit100612/PCAP-Threat-Analyzer',
    live: 'https://pcap-threat-analyzer.streamlit.app',
    architecture: [
      'Input Layer: PCAP upload and packet parsing.',
      'Analysis Layer: Pandas-based traffic investigation.',
      'Detection Layer: rules for scans, brute force, and suspicious activity.',
      'Reporting Layer: risk scoring and CSV export.',
    ],
  },
]

export const achievements = [
  {
    icon: 'fas fa-trophy',
    title: 'Deloitte Australia Cyber Security Program (2024)',
    description: 'Completed a Forage simulation covering threat detection, log analysis, and incident reporting.',
  },
  {
    icon: 'fas fa-award',
    title: 'Hacktoberfest 2024 - Level 4 Badge',
    description: 'Placed in the top 15% globally through documentation, bug fixes, and feature contributions.',
  },
  {
    icon: 'fas fa-seedling',
    title: 'GirlScript Summer of Code 2025 - GrowCraft',
    description: 'Active contributor with 3+ pull requests improving feature functionality and code readability.',
  },
  {
    icon: 'fas fa-code',
    title: 'LeetCode - 150+ Algorithmic Problems',
    description: 'Consistent practice across arrays, strings, binary search, and hash maps.',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'TryHackMe Security Labs',
    description: 'Practiced Linux fundamentals, network security, cryptography, and web exploitation.',
  },
]
