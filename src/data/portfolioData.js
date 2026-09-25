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
    'I’m Amrit Kumar, a B.Tech CSE (Cyber Security) student focused on Cybersecurity, AI Security, and Software Development. I have hands-on experience with Python, Java, Linux, Splunk, Scapy, and security tools, and I have built projects around network threat detection, machine learning, and web development while continuously improving my DSA and problem-solving skills. I’m looking to build real-world security solutions and grow as a Cybersecurity Engineer.',
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
    title: 'CipherX — Encryption/Decryption CLI Tool',
    type: 'Python + Applied Cryptography',
    featured: true,
    problem: 'Encryption utilities can be difficult to validate when input handling and cryptographic behavior are fragmented.',
    whyItMatters: 'A tested, documented encryption workflow demonstrates applied cryptography and secure coding discipline.',
    solution: 'Engineered a modular CLI encryption system with a Caesar + XOR hybrid cipher and bidirectional encode/decode handling.',
    approach: 'Applied CIA Triad principles, documented the cryptographic design and threat model, and handled 10+ edge cases across 50+ test cases.',
    stack: ['Python', 'Cryptography', 'CLI', 'Caesar + XOR', 'CIA Triad'],
    challenges: ['Keeping encode/decode behavior consistent across edge cases.', 'Making cryptographic design decisions understandable and testable.'],
    architecture: [
      'Input Layer: CLI parser captures operation mode and payload.',
      'Transformation Layer: Caesar + XOR hybrid cipher performs encoding and decoding.',
      'Validation Layer: Edge-case checks prevent invalid-input crashes.',
      'Documentation Layer: README records cryptographic decisions and threat model.',
    ],
    architectureFlow: ['CLI Input', 'Validation', 'Hybrid Cipher', 'Encoded Output'],
    metrics: ['Zero invalid-input crashes across 50+ test cases.', 'Supports bidirectional encode/decode behavior with 10+ edge cases covered.'],
    deployment: 'Repository: github.com/amrit100612/CipherX.',
  },
  {
    title: 'PCAP Threat Analyzer',
    type: 'Network Security + Threat Detection',
    featured: true,
    problem: 'Raw packet captures are difficult to triage quickly when suspicious traffic is mixed with normal activity.',
    whyItMatters: 'Structured traffic analysis helps surface attack indicators and turn packet data into an actionable investigation.',
    solution: 'Developed a Python network security tool using Scapy, Pandas, and Streamlit to analyze PCAP traffic and detect suspicious activity.',
    approach: 'Implemented detection for port scans, brute-force attacks, and suspicious DNS/HTTP activity, with rule-based risk scoring and CSV reporting.',
    stack: ['Python', 'Scapy', 'Pandas', 'Streamlit'],
    challenges: ['Turning packet-level signals into readable security findings.', 'Balancing detection rules with useful investigation output.'],
    architecture: [
      'Input Layer: PCAP upload and packet parsing with Scapy.',
      'Analysis Layer: Pandas transforms traffic into investigation-ready records.',
      'Detection Layer: Rules identify scans, brute force, and suspicious DNS/HTTP activity.',
      'Reporting Layer: Risk scores and CSV exports summarize findings.',
    ],
    architectureFlow: ['PCAP Input', 'Packet Parsing', 'Threat Rules', 'Risk Report'],
    metrics: ['Detects port scans, brute-force attacks, and suspicious DNS/HTTP activity.', 'Generates automated investigation reports with CSV export.'],
    deployment: 'Repository: github.com/amrit100612/PCAP-Threat-Analyzer.',
  },
  {
    title: 'Loan Approval Prediction using Machine Learning',
    type: 'Machine Learning + Decision Support',
    featured: true,
    problem: 'Manual loan screening can be inconsistent, time-consuming, and difficult to scale reliably.',
    whyItMatters: 'Data-driven decision support increases screening consistency and reduces turnaround time.',
    solution: 'Built and deployed a Streamlit prediction system that evaluates applicant profiles and returns real-time approval output.',
    approach: 'Performed EDA, data cleaning, feature engineering, feature encoding, missing-value treatment, and SMOTE before training and evaluating classifiers.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Streamlit', 'SMOTE'],
    challenges: ['Handling missing and categorical data safely.', 'Selecting a stable classifier after preprocessing and evaluation.'],
    architecture: [
      'Input Layer: User form captures applicant profile and financial attributes.',
      'Processing Layer: EDA, encoding, missing-value treatment, and SMOTE prepare model-ready data.',
      'Model Layer: Candidate classifiers are trained and evaluated for selection.',
      'Deployment Layer: Streamlit serves real-time predictions through a web interface.',
    ],
    architectureFlow: ['Applicant Form', 'EDA & Preprocessing', 'Classifier', 'Live Prediction'],
    metrics: ['Applied feature encoding, missing-value treatment, and SMOTE for model preparation.', 'Deployed the final model to Hugging Face Spaces for real-time prediction.'],
    deployment: 'Repository: github.com/amrit100612/Loan-Prediction.',
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
    title: 'Loan Approval Prediction using Machine Learning',
    category: 'Machine Learning',
    url: 'https://github.com/amrit100612/Loan-Prediction',
    image: '/loan-project.png',
    architecture: ['EDA & Preprocessing', 'Feature Engineering', 'ML Model', 'Streamlit Deployment'],
  },
  {
    title: 'CipherX - Encryption/Decryption CLI Tool',
    category: 'Programming',
    url: 'https://github.com/amrit100612/CipherX',
    image: '/cipherx-project.png',
    architecture: ['CLI Input', 'Caesar + XOR Cipher', 'Validation', 'Threat Model'],
  },
  {
    title: 'PCAP Threat Analyzer',
    category: 'Cybersecurity',
    url: 'https://github.com/amrit100612/PCAP-Threat-Analyzer',
    image: '/cipherx-project.png',
    architecture: ['PCAP Input', 'Scapy Analysis', 'Threat Detection', 'CSV Reporting'],
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
    title: 'CipherX - Encryption/Decryption CLI Tool',
    description: 'Modular Python CLI using a Caesar + XOR hybrid cipher with 10+ edge cases covered across 50+ tests.',
    stack: ['Python', 'Cryptography', 'CLI', 'Caesar + XOR'],
    github: 'https://github.com/amrit100612/CipherX',
    architecture: [
      'Input Layer: CLI parser and payload handling.',
      'Transformation Layer: Caesar + XOR hybrid cipher.',
      'Validation Layer: edge-case and invalid-input handling.',
      'Documentation Layer: cryptographic design and threat model.',
    ],
  },
  {
    title: 'PCAP Threat Analyzer',
    description: 'Scapy, Pandas, and Streamlit tool for detecting network threats and exporting investigation reports.',
    stack: ['Python', 'Scapy', 'Pandas', 'Streamlit'],
    github: 'https://github.com/amrit100612/PCAP-Threat-Analyzer',
    architecture: [
      'Input Layer: PCAP upload and packet parsing.',
      'Analysis Layer: Pandas-based traffic investigation.',
      'Detection Layer: rules for scans and suspicious activity.',
      'Reporting Layer: risk scoring and CSV export.',
    ],
  },
  {
    title: 'Loan Approval Prediction using Machine Learning',
    description: 'Streamlit decision-support app using EDA, feature engineering, SMOTE, and evaluated classifiers.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/amrit100612/Loan-Prediction',
    architecture: [
      'Input Layer: applicant profile capture form.',
      'Processing Layer: EDA, encoding, missing-value treatment, and SMOTE.',
      'Model Layer: trained and evaluated classifiers.',
      'Deployment Layer: Streamlit real-time prediction interface.',
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
