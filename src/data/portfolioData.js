export const profile = {
  name: 'Amrit Kumar',
  title: 'Hello Folks!',
  headline: 'My name is Amrit Kumar. I am a software engineering and machine learning enthusiast from India.',
  subheading: 'B.Tech CSE (Cyber Security), Haldia Institute of Technology',
  photo: '/amrit-photo.png',
  photoAlt: 'Portrait of Amrit Kumar',
  location: 'West Bengal, India',
  phone: '+91 9508043572',
  website: 'https://amritkumar.me',
  email: 'amritkum1209@gmail.com',
  github: 'https://github.com/amrit100612',
  linkedin: 'https://www.linkedin.com/in/amrit100612/',
  leetcode: 'https://leetcode.com/u/mNBmOlhBGQ/',
  resume: '/Amrit_CV_Main.pdf',
}

export const about = {
  heading: 'Some words about me',
  aboutText:
    'I am a third-year undergraduate student in the Department of Computer Science and Engineering (Cyber Security) at Haldia Institute of Technology, India, originally from Sheikhpura, Bihar.',
  aboutStory:
    "I was fortunate enough to know from a young age that I wanted to be an engineer. The engineering way of thinking came naturally to me. What I did not know was what type of engineer I wanted to be. When push came to shove, I chose Software Engineering.",
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
  },
  {
    title: 'My LeetCode Profile',
    category: 'Programming',
    url: 'https://leetcode.com/u/mNBmOlhBGQ/',
  },
  {
    title: 'My LinkedIn Profile',
    category: 'Programming',
    url: 'https://www.linkedin.com/in/amrit100612/',
  },
  {
    title: 'IRIS Predict - ML Classification App',
    category: 'Machine Learning',
    url: '#',
  },
  {
    title: 'Weather Detecting Web Application',
    category: 'Web Design',
    url: '#',
  },
  {
    title: 'Loan Approval Prediction System',
    category: 'Machine Learning',
    url: '#',
  },
  {
    title: 'CypherX404 - Encryption/Decryption CLI',
    category: 'Programming',
    url: '#',
  },
  {
    title: 'Technical Blogging (Coming Soon)',
    category: 'My Blogs',
    url: '#',
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
  title: 'Contact Me',
  message: 'Open to software engineering and machine learning opportunities with implementation-driven teams.',
  address:
    'Department of Computer Science and Engineering (Cyber Security), Haldia Institute of Technology, West Bengal, India',
}
