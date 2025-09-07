export const DEFAULT_CONTENT = {
  home: {
    title: "Dr. Sarah Chen",
    subtitle: "Senior Data Scientist & AI Research Lead",
    description: "Transforming complex data into actionable insights with 8+ years of experience in machine learning, deep learning, and statistical modeling."
  },
  about: {
    content: "I'm a passionate Data Scientist with a Ph.D. in Computer Science and extensive experience in building end-to-end ML solutions. I specialize in natural language processing, computer vision, and predictive analytics. My work has helped organizations increase revenue by 40% through data-driven decision making and automated ML pipelines.\n\nI believe in the power of data to solve real-world problems and am constantly exploring new technologies and methodologies to push the boundaries of what's possible with AI.",
    image: null,
    stats: [
      { label: "Years Experience", value: "8+" },
      { label: "ML Models Deployed", value: "50+" },
      { label: "Publications", value: "15" },
      { label: "Team Size Led", value: "12" }
    ]
  },
  skills: [
    { id: 1, name: "Python", level: 95, category: "Programming" },
    { id: 2, name: "Machine Learning", level: 92, category: "AI/ML" },
    { id: 3, name: "Deep Learning", level: 88, category: "AI/ML" },
    { id: 4, name: "TensorFlow", level: 90, category: "Frameworks" },
    { id: 5, name: "PyTorch", level: 85, category: "Frameworks" },
    { id: 6, name: "SQL", level: 93, category: "Data" },
    { id: 7, name: "R", level: 80, category: "Programming" },
    { id: 8, name: "AWS", level: 87, category: "Cloud" },
    { id: 9, name: "Docker", level: 82, category: "DevOps" },
    { id: 10, name: "Tableau", level: 85, category: "Visualization" },
    { id: 11, name: "Apache Spark", level: 78, category: "Big Data" },
    { id: 12, name: "NLP", level: 90, category: "AI/ML" }
  ],
  projects: [
    {
      id: 1,
      title: "Predictive Customer Analytics Platform",
      description: "Built an end-to-end ML platform that predicts customer churn with 94% accuracy, resulting in $2M annual savings. Implemented real-time scoring using Apache Kafka and deployed on AWS EKS.",
      image: null,
      tech: ["Python", "TensorFlow", "AWS", "Kafka", "Docker"],
      github: "https://github.com/example/customer-analytics",
      demo: "https://demo.example.com",
      featured: true
    },
    {
      id: 2,
      title: "NLP-Powered Content Recommendation Engine",
      description: "Developed a sophisticated recommendation system using transformer models and collaborative filtering. Increased user engagement by 35% and content discovery by 50%.",
      image: null,
      tech: ["PyTorch", "BERT", "Redis", "FastAPI", "PostgreSQL"],
      github: "https://github.com/example/content-rec",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "Computer Vision Quality Control System",
      description: "Created an automated quality control system for manufacturing using CNN models. Reduced defect detection time by 80% and improved accuracy to 99.2%.",
      image: null,
      tech: ["OpenCV", "TensorFlow", "Flask", "MongoDB", "Raspberry Pi"],
      github: "https://github.com/example/quality-control",
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: "Real-time Fraud Detection API",
      description: "Built a high-performance fraud detection system processing 10K+ transactions per second with sub-100ms latency. Reduced false positives by 60%.",
      image: null,
      tech: ["Scikit-learn", "Apache Kafka", "Redis", "FastAPI", "Kubernetes"],
      github: "https://github.com/example/fraud-detection",
      demo: null,
      featured: false
    }
  ],
  experience: [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "TechCorp AI",
      period: "2021 - Present",
      description: "Lead a team of 8 data scientists developing ML solutions for Fortune 500 clients. Architected scalable ML pipelines processing 1TB+ daily data.",
      achievements: [
        "Increased model accuracy by 25% through advanced feature engineering",
        "Reduced infrastructure costs by 40% through optimization",
        "Mentored 12 junior data scientists"
      ]
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "DataFlow Solutions",
      period: "2019 - 2021",
      description: "Developed predictive models for e-commerce and fintech clients. Specialized in time series forecasting and anomaly detection.",
      achievements: [
        "Built recommendation system serving 2M+ users",
        "Improved forecast accuracy by 30%",
        "Published 5 research papers"
      ]
    },
    {
      id: 3,
      title: "ML Research Engineer",
      company: "AI Innovations Lab",
      period: "2018 - 2019",
      description: "Conducted cutting-edge research in deep learning and computer vision. Collaborated with academic institutions on breakthrough AI technologies.",
      achievements: [
        "Developed novel CNN architecture",
        "Filed 3 patents in computer vision",
        "Presented at 8 international conferences"
      ]
    }
  ],
  contact: {
    email: "sarah.chen@example.com",
    github: "https://github.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen-ds",
    twitter: "https://twitter.com/sarahchen_ai",
    location: "San Francisco, CA"
  }
};