export const profile = {
  name: 'Amrit Kumar',
  title: 'Hello Folks!',
  headline: 'My name is Amrit Kumar. I am a software engineering and machine learning enthusiast from India.',
  subheading: 'B.Tech CSE (Cyber Security), Haldia Institute of Technology',
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
  leetcode: 'https://leetcode.com/u/mNBmOlhBGQ/',
  leetcodeImage: '/leetcode-link.png',
  resume: 'https://drive.google.com/uc?export=download&id=1wXMAaruPpVl6NYEjtAl21K0_aU-embKB',
}

export const about = {
  heading: 'SOME WORDS ABOUT ME',
  aboutText:
    'I am a third-year undergraduate student in Computer Science and Engineering (Cyber Security) at Haldia Institute of Technology, India, originally from Sheikhpura, Bihar.',
  aboutStory:
    'From writing my first line of code to building ML models and exploring cybersecurity, I have always been driven by one thing - solving real problems with technology. I believe that the best code is not just functional, it is secure, efficient, and meaningful.',
  aboutStory2:
    'When I am not coding, you will find me calculating moves on the chessboard, pushing limits at the gym, or contributing to open source projects. I bring the same discipline and strategic thinking into everything I do.',
  interestsText:
    "I like watching movies, playing video games (mostly First/Third Person Shooting Games), Competitive Programming and loads of other stuff. My hobby is playing chess and hitting the gym. When I am not writing code, I am either outsmarting opponents on the chessboard or lifting weights at the gym because a sharp mind needs a strong body.",
  interestsMusic:
    'I love music. I am an ardent listener of songs, ranging from Classical and Sufi to Hindi and English. Sometimes I also hit the outdoor field to chase real thrills, taste raw competition, and celebrate wins that no screen can replicate.',
  skillsText:
    'On my way, I have learnt a range of programming languages such as C, Python, and Java.',
  techStack: [
    'Java, Python, C, JavaScript',
    'HTML5, CSS3, REST APIs',
    'scikit-learn, Pandas, NumPy, Streamlit',
    'Git, GitHub, Linux, VS Code',
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
    title: 'CypherX404 — Encryption/Decryption CLI Tool',
    type: 'Python + Cybersecurity',
    featured: true,
    problem: 'CLI cryptography exercises are often fragmented and fragile for real learning workflows.',
    whyItMatters: 'A reliable encryption utility strengthens hands-on cybersecurity fundamentals and secure coding discipline.',
    solution: 'Developed a modular Python CLI that performs encryption/decryption with safe input handling and clear terminal output.',
    approach: 'Separated parser, validation, and crypto engine layers to improve maintainability, reliability, and command predictability.',
    stack: ['Python', 'Cryptography', 'CLI'],
    challenges: ['Designing clear command usage while preventing invalid input paths.', 'Keeping module boundaries clean between parsing, crypto logic, and error handling.'],
    architecture: [
      'Input Layer: CLI parser captures operation mode, key parameters, and payload.',
      'Validation Layer: Input guards verify command correctness and required fields.',
      'Crypto Layer: Modular encryption/decryption engine executes transformation logic.',
      'Output Layer: Processed secure text and status feedback are returned to terminal.',
    ],
    architectureFlow: ['CLI Input', 'Validation', 'Crypto Engine', 'Secure Output'],
    metrics: ['Implemented robust validation to prevent invalid command execution paths.', 'Improved usability with deterministic command behavior and structured error messaging.'],
    deployment: 'Delivered as a local Python CLI for secure text workflow experimentation.',
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
    url: 'https://leetcode.com/u/mNBmOlhBGQ/',
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
    url: 'https://github.com/amrit100612/Loan_Predictions',
    image: '/loan-project.png',
    architecture: ['Input Form', 'Feature Engineering', 'ML Model', 'Approval Output'],
  },
  {
    title: 'CypherX404 - Encryption/Decryption CLI',
    category: 'Programming',
    url: 'https://github.com/amrit100612/CipherX_404',
    image: '/cipherx-project.png',
    architecture: ['CLI Input', 'Validation', 'Crypto Engine', 'Secure Output'],
  },
]

export const dsa = {
  profileUrl: 'https://leetcode.com/u/mNBmOlhBGQ/',
  highlights: [
    'Consistent DSA practice with arrays, strings, and binary search focus.',
    'Implementation-first Java solutions with edge-case awareness.',
  ],
}

export const skills = [
  { category: 'Languages', detail: 'Java, Python, C, JavaScript' },
  { category: 'CS Fundamentals', detail: 'DSA, OOP, DBMS, Operating Systems' },
  { category: 'Web', detail: 'HTML5, CSS3, REST APIs' },
  { category: 'Machine Learning', detail: 'scikit-learn, Pandas, NumPy, Streamlit' },
  { category: 'Tools', detail: 'Git, GitHub, Linux, VS Code' },
]

export const experienceJourney = [
  { title: 'Class Representative — CSE (Cyber Security)', period: 'Aug 2023 - Present', points: ['Representing 60+ students and coordinating with faculty.'] },
  { title: 'Public Relations Team Member — TaruGuardians', period: 'Jan 2024 - Present', points: ['Managed outreach campaigns and event promotions.'] },
]

export const dailyLearningTracker = {
  streak: 'Consistent DSA + project execution mindset',
  blocks: [
    { label: 'DSA in Java', detail: 'Regular LeetCode practice and revision loops.' },
    { label: 'Core CS Revision', detail: 'Structured revision of OS, DBMS, OOP.' },
  ],
}

export const blogIdeas = [
  { title: 'Designing a Practical DSA Learning System', description: 'How timed solving and revision loops improve correctness.' },
  { title: 'Engineering Tradeoffs in ML Mini-Projects', description: 'Lessons from preprocessing, model selection, and UX.' },
]

export const contact = {
  title: 'CONTACT ME',
  message: "Open to Cyber Security, Software Engineering and Machine Learning opportunities. Let's build something secure and meaningful together.",
  address:
    'Department of Computer Science and Engineering (Cyber Security), Haldia Institute of Technology, West Bengal, India',
}

export const heroRoles = [
  'Cyber Security Student',
  'Java Programmer',
  'ML Enthusiast',
  'Problem Solver',
  'Chess Player',
]

export const aboutFacts = [
  { icon: 'fas fa-chess-knight', title: 'Chess Player', detail: 'Strategic Thinker' },
  { icon: 'fas fa-dumbbell', title: 'Gym Enthusiast', detail: 'Discipline & Focus' },
  { icon: 'fas fa-code-branch', title: 'Open Source Contributor', detail: 'Hacktoberfest Level 4' },
  { icon: 'fas fa-user-shield', title: 'Cyber Security Enthusiast', detail: 'Deloitte Program' },
]

export const premiumSkills = [
  { label: 'Languages', detail: 'Java, Python, C, JavaScript', level: 90 },
  { label: 'Web', detail: 'React.js, HTML5, CSS3', level: 84 },
  { label: 'Machine Learning', detail: 'Scikit-learn, Pandas, NumPy, Matplotlib', level: 80 },
  { label: 'Tools', detail: 'Git, GitHub, Linux, VS Code, Streamlit', level: 86 },
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
    github: 'https://github.com/amrit100612/CipherX_404',
    live: 'https://github.com/amrit100612/CipherX_404',
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
    github: 'https://github.com/amrit100612/Loan_Predictions',
    live: 'https://github.com/amrit100612/Loan_Predictions',
    architecture: [
      'Input Layer: applicant profile capture form.',
      'Processing Layer: feature engineering and cleaning.',
      'Model Layer: classification for eligibility.',
      'Output Layer: clear decision and confidence display.',
    ],
  },
]

export const achievements = [
  {
    icon: 'fas fa-trophy',
    title: 'Deloitte Australia Cyber Security Program (2024)',
    description: 'Completed practical cybersecurity simulation and risk analysis tasks.',
  },
  {
    icon: 'fas fa-award',
    title: 'Hacktoberfest 2024 - Level 4 Badge',
    description: 'Recognized for active open-source contributions during Hacktoberfest.',
  },
  {
    icon: 'fas fa-seedling',
    title: 'GirlScript Summer of Code 2025 - GrowCraft',
    description: 'Contributed to collaborative development and issue resolution workflows.',
  },
  {
    icon: 'fas fa-code',
    title: 'LeetCode - Consistent DSA Problem Solver',
    description: 'Maintained regular DSA problem-solving practice and consistency.',
  },
]
