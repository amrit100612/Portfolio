export const profile = {
  name: 'Amrit Kumar',
  title: 'Software Engineering • Machine Learning',
  headline: 'B.Tech CSE (Cyber Security) student building practical ML and web applications',
  subheading: 'Focused on implementation depth, strong CS fundamentals, and practical product building.',
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
  paragraph1: 'I am Amrit Kumar, a Computer Science and Engineering student (Cyber Security) with a strong implementation-first mindset.',
  paragraph2: 'My focus is software engineering and machine learning projects that deliver measurable and user-facing outcomes.',
  paragraph3: 'I enjoy problem solving, clean architecture, and continuous technical growth through practical work.',
}

export const projects = [
  {
    title: 'IRIS Predict — ML Classification Web App',
    type: 'Machine Learning + Web App',
    featured: true,
    problem: 'Notebook-only ML projects often fail to provide interactive user experience.',
    whyItMatters: 'Deployable ML apps demonstrate practical engineering ability beyond theory.',
    solution: 'Built a Streamlit app with preprocessing and live inference workflow.',
    approach: 'Benchmarked KNN, SVM, and Decision Tree with a reproducible evaluation pipeline.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    challenges: ['Consistent preprocessing for fair model comparison.', 'Balancing UX simplicity and model transparency.'],
    architecture: [
      'Presentation Layer: Streamlit UI for feature input and prediction rendering.',
      'Inference Layer: Trained model pipeline performs scaling and classification.',
      'Data Layer: Iris dataset preprocessing and train/test split flow.',
      'Evaluation Layer: Accuracy tracking and model comparison.',
    ],
    architectureFlow: ['Streamlit UI', 'Preprocessing', 'Model Inference', 'Prediction Output'],
    metrics: ['Achieved 96% classification accuracy.', 'Enabled real-time inference via web app.'],
    deployment: 'Streamlit Cloud deployment.',
  },
  {
    title: 'Weather Detecting Web Application',
    type: 'Frontend + API Integration',
    featured: true,
    problem: 'Users need quick and clear weather updates with key metrics.',
    whyItMatters: 'Real-time weather visibility improves daily decision-making.',
    solution: 'Built a responsive weather app using live Weather API endpoints.',
    approach: 'Integrated async/await API calls and geolocation-based lookup.',
    stack: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
    challenges: ['Handling API latency and errors gracefully.', 'Displaying many weather metrics without clutter.'],
    architecture: [
      'UI Layer: Responsive cards for search and weather visualization.',
      'Service Layer: Async API integration with robust error handling.',
      'Location Layer: Browser geolocation for auto city detection.',
      'State Layer: Client-side state drives weather metric rendering.',
    ],
    architectureFlow: ['User Input/Geo', 'API Service', 'State Update', 'Weather Cards'],
    metrics: ['Implemented non-blocking API flow.', 'Delivered geolocation-based insights and AQI display.'],
    deployment: 'Frontend web deployment with live API integration.',
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
  { category: 'Web', detail: 'React.js, HTML5, CSS3, REST APIs' },
  { category: 'Machine Learning', detail: 'scikit-learn, Pandas, NumPy' },
  { category: 'Tools', detail: 'Git, GitHub, Linux, VS Code, Streamlit Cloud' },
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
  title: 'Let’s connect for software engineering opportunities.',
  message: 'Open to software engineering and machine learning opportunities with implementation-driven teams.',
}
