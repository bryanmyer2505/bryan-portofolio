import { image, link } from "framer-motion/client";

export const profile={
  name:"Bryan Myer Setiawan",
  title:"AI Engineer | Data Scientist",
  about:"Fresh Graduate Computer Science student from BINUS University with strong foundations in Artificial Intelligence, Machine Learning, and Data Analytics, strengthened by international academic exposure as an exchange student and working experience as an AI Engineer Intern. Experienced in developing AI-based applications, mentoring students, and managing organization operations. Commited to continuous self development and delivering data-driven solutions.",
  location:"Apt. Mediterania Gajah Mada, Jl. Gajah Mada No. 174, Jakarta",
  email:"bryanmyersetiawan@gmail.com",
  phone:"+62 818 409 888",
  linkedin:"https://www.linkedin.com/in/bryan-myer-setiawan-744531215/",
  github:"https://github.com/bryanmyer2505",
  photo:"/profile.jpg",
  cvPath:"/docs/CV-ATS-Bryan-Myer-Setiawan.pdf",
  portfolioPdfPath:"/docs/Bryan-Myer-Setiawan-Portfolio.pdf"
};

export const skills={
  technical:["Python","Jupyter Notebook","Computer Vision","Natural Language Processing","ML/DL","SQL & Data Analytics","Cloud Technology","Flask","ReactJa"],
  mathematics:["Calculus","Statistics"],
  soft:["Leadership","Time Management","Critical Thinking","Problem Solving","Project Management"],
  linguistics:["English", "Bahasa Indonesia","Mandarin", "Dutch"]
};

export const education=[
  {school:"BINUS University, Alam Sutera — Computer Science Global Class",period:"2022 — 2026",note:"GPA: 3.83 / 4.00"},
  {school:"Xi’an Jiaotong-Liverpool University — Exchange (Spring 2025)",period:"2025",note:""},
  {school:"SMA Karangturi, Semarang — Mathematics and Science",period:"2019 — 2022",note:"Final Score: 90 / 100"}
];

export const experience = {
  professional: [
    {
      role: "AI Engineer Intern",
      company: "HPI Agro, Jakarta",
      period: "Sep 2025 — Feb 2026",
      image: "/img/logo_hpi.jpg",
      bullets: [
        "Develop Computer Vision web app for palm oil fruit grading and generating PDF reports for each classification, boosting operational process transparency and efficiency",
        "Develop dataset of 3657 images across 7 labeled classes; Performed data collection, annotation, and preprocessing.",
        "Develop Object Detection and Classification AI Models: RT-DETR (mAP@50: 93.7% ) and InceptionV3 (acc: 87%)",
        "Utilized Framework: Flask (Backend), ReactJS (Frontend)",
        "Utilized Libraries: OpenCV, TensorFlow, PyTorch, Scikit-learn, Ultralytics, Roboflow, ReportLab",
        "Develop AI-based small projects to help company’s administration processes including, product clustering with Google Gemini API, and AI-assisted content generation using ElevenLabs",
      ]
    }
  ],

  research:[
    {
      role: "Research Paper Author",
      company: "ISEMANTIC 2024 / IEEE Xplore",
      period: "2024",
      image: "/img/logo_IEEE.jpg",
      bullets: [
        "Authored a research paper on image downscaling algorithms and color perception.",
        "Paper accepted at ISEMANTIC 2024 and published on IEEE Xplore."
      ],
      links:[{label:"IEEE Paper",url:"https://ieeexplore.ieee.org/abstract/document/10762067"}],
    },
    {
      role: "Research Paper Author",
      company: "ICGHIT 2025 / IEEE Xplore",
      period: "2025",
      image: "/img/logo_IEEE.jpg",
      bullets: [
        "Authored a research paper on developing authentic handwritten javanese script dataset, and  introduce cross language transfer learning as an efficient method",
        "Paper accepted at ICGHIT 2025 and waiting to be published on IEEE Xplore."
      ],
      links:[{label:"IEEE Paper",url:"https://drive.google.com/file/d/1UMu6sUQcyWfY8-BcSFti_iHhq5MF3pJP/view?usp=sharing"}],
    }

  ],

  certifications: [
    {
      role: "OCI Certified AI Foundations Associate",
      company: "Oracle Cloud",
      period: "2025",
      image: "/img/logo_oracle.png",
      bullets: [
        "Foundational knoledge about AI, ML, and LLMs concepts and related OCI services.",
        "Get started with OCI's AI services and tools."
      ],
      links:[{label:"OCI Certification",url:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=FDEE4503CE6592144869641916F98776E727D215B27E4B46BA43C99A5AB35651"}]
    },

    {
      role: "Alibaba Cloud Associate",
      company: "Alibaba Cloud",
      period: "2024",
      image: "/img/logo_alibaba_cloud.jpg",
      bullets: [
        "Certified in cloud infrastructure and Alibaba Cloud products.",
        "Validated knowledge in cloud deployment and security."
      ],
      links:[{label:"Alibaba Cloud Certification",url:"https://drive.google.com/file/d/1z8QsZLnOZHklv8dU5xMUbHX2NMh3kLYL/view?usp=sharing"}]
    },
  ],

  organizational: [
    {
      role: "General Secretary / Core of Directors",
      company: "BINUS Student Learning Community (BSLC)",
      period: "2024 — 2025",
      image: "/img/logo_bslc.png",
      bullets: [
        "Managed organizational administration documents.",
        "Monitored performance metrics of all members."
      ],
      links:[{label:"General Secretary Certificate",url:"https://drive.google.com/file/d/1YRwrEtHLPj6etKg1gfrgHZi5yrIDYEc8/view?usp=drive_link"}]
    },
    {
      role: "Scholarship Mentor",
      company: "BINUS Student Advisory and Support Center (SASC)",
      period: "2024 - 2025",
      image: "/img/logo_sasc.png",
      bullets: [
        "Become a mentor for other CS students who needed extra learning support.",
        "Recieved a scholarship as the reward for being a mentor."
      ],
      links:[{label:"Mentor Certificate",url:"https://drive.google.com/file/d/19EQVZAexJ-Ik99atgPDXMt0KqB2mGmRK/view?usp=drive_link"}]
    },
    {
      role: "Project Manager",
      company: "BINUS Student Learning Community (BSLC)",
      period: "2023",
      image: "/img/logo_bslc.png",
      bullets: [
        "Lead the project of BSLC Benchmarking 2023",
        "Coordinated internal resources and managed external partnerships.",
        "Designed and executed an engaging event concept."
      ],
      links:[{label:"Project Manager Certificate",url:"https://drive.google.com/file/d/1Oi5TYauOEI-NMPbfet3GX-RcGMxe5GJC/view?usp=sharing"}]
    },
  ]
};

export const projects=[
  {title:"LLM - AI-Based Client-Company Match Predictor",
    description:"Developed an AI-powered recommendation system that analyzes client and company profiles to predict business match suitability using Large Language Models (LLMs). Designed and implemented an end-to-end Retrieval-Augmented Generation (RAG) pipeline, including profile preprocessing, semantic retrieval, prompt engineering, and response generation. Built the backend using Flask and integrated it with a ReactJS frontend, enabling users to submit profiles and receive explainable matching results in real time. Responsible for system architecture, LLM integration, prompt optimization, data analytics, and deployment. The solution improved the efficiency of evaluating client-company compatibility by automating profile analysis and reducing manual assessment effort.",
    tags:["LLM API Integration", "Prompt Engineering", "Retrieval-Augmented Generation", "Data Analytics", "Flask & ReactJS", "Vercel"],
    links:[{label:"Github Repository",url:"https://github.com/bryanmyer2505/AI-client-candidate-match-predictor"}]
  },
  {title:"Computer Vision — RipenX: Palm-Oil Fruit Grading App",
    description:"Developed RipenX, an end-to-end AI-powered web application for automated palm oil fruit grading designed for plantation operations in rural environments. Led the complete AI development lifecycle, including data collection, annotation, preprocessing, model training, backend development, and deployment. Constructed a custom Computer Vision dataset containing 3,657 labeled images across 7 ripeness categories (Ripe, Unripe, Underripe, Overripe, Empty, Rotten, and Empty Bunch). Trained and evaluated multiple deep learning models, achieving 93.7% mAP@50 using RT-DETR for object detection and 87% classification accuracy using InceptionV3. Built a Flask-based backend integrated with a ReactJS frontend, enabling real-time grading, image analysis, and automated PDF report generation to improve operational transparency, consistency, and efficiency compared to manual assessment workflows. Utilized OpenCV, TensorFlow, PyTorch, Scikit-Learn, Ultralytics, Roboflow, and ReportLab throughout the development pipeline.",
    tags:["Computer Vision", "Object Detection", "Image Classification", "Data Collection, Annotation, and Engineering", "Flask & ReactJS", "RT-DETR", "InceptionV3", "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "Ultralytics", "Roboflow","PDF Report Generation"],
    links:[{label:"Github Repository",url:"https://github.com/bryanmyer2505/ripenx-app"}]
  },
  {title:"Computer Vision — Authentic Dataset Development and Exploration of Cross-Language Transfer Learning for Javanese Script Recognition",
    description:"Conducted and published research on handwritten Aksara Jawa character recognition, addressing the scarcity of authentic training data for low-resource script recognition. Led the development of a publicly available dataset consisting of 3,528 authentic handwritten Javanese character images collected from high school students, which was later combined with existing public datasets to create a final dataset of 7,724 images across 20 character classes. Designed and evaluated 27 experimental configurations involving EfficientNet-B0, EfficientNet-B0 with Self-Attention, and ResNet50 architectures using PyTorch and transfer learning from ImageNet, Arabic, and Devanagari pre-trained models. Demonstrated that authentic handwritten data significantly improved model generalization, achieving the highest F1-score of 98.48% using EfficientNet-B0-SA with Devanagari-based cross-language transfer learning. Published the findings in ICGHIT 2025, contributing to the digital preservation and revitalization of Indonesian cultural heritage through AI.",
    tags:["Computer Vision", "Image Classification", "Cross-Language Transfer Learning", "Dataset Development", "EfficientNet-B0", "ResNet50", "Model Configurations", "Data Engineering", "Low-Resource Script Recognition", "PyTorch", "Numpy", "Pandas", "Scikit-learn"],
    links:[{label:"Research Report",url:"https://drive.google.com/file/d/1UMu6sUQcyWfY8-BcSFti_iHhq5MF3pJP/view?usp=sharing"}]
  },
  {title:"Data Analytics (FinTech) — AI-Based Gold Price Prediction based on Financial Data",
    description:"Contributed to a team-based financial analytics project focused on predicting AU9999 gold prices using macroeconomic, financial, and commodity market indicators from 2008–2024. My primary responsibilities included collecting data from multiple financial sources, performing data cleaning, preprocessing, integration, and exploratory data analysis (EDA) to ensure data quality and consistency for model development. Engineered predictive features from inflation indexes, treasury yields, foreign exchange rates, oil prices, stock market indexes, and historical gold prices to identify key drivers of gold price movements. Additionally contributed to machine learning model development and project reporting, assisting in the implementation and evaluation of Random Forest Regressor and Gradient Boosting Regressor models using Scikit-Learn. The Random Forest model achieved the strongest performance with an R² score of 0.99, MAE of 6.57, and RMSE of 8.92. The project demonstrated how data-driven approaches can be applied to financial forecasting and commodity market analysis.",
    tags:["Financial Data Analytics", "Machine Learning", "Predictive Modelling", "Time Series Analysis", "Random Forest", "Gradient Boosting", "Pandas", "Numpy", "Scikit-Learn", "Data Engineering", "FinTech"],
    links:[{label:"Github Repository",url:"https://github.com/bryanmyer2505/Fintech-AI-Based-Gold-Price-Prediction"}]
  },
  {title:"AI & Data Optimization — Metadata Enhancement using LLM and Data Analytics for Game Trend Analysis",
    description:"Developed an AI-powered data enrichment pipeline and product analytics framework for video game content platforms. Built an automated metadata generation system using Google AI Studio (Gemini Flash Lite) and Python to enrich game datasets with genres, descriptions, and player-mode classifications through prompt engineering and API integration. Designed optimized prompting strategies, implemented API rate-limit handling, secure credential management using environment variables, and reduced API consumption by consolidating multiple enrichment tasks into a single request workflow. Additionally conducted large-scale product analytics on gaming content datasets using SQL and Python, developing engagement metrics including Average Clips Generated per Game Session, Download Conversion Rate, Download-to-Share Ratio, Premium User Engagement, and Clip Type Performance. Generated actionable business insights to evaluate AI clipping effectiveness, user behavior, content virality, monetization opportunities, and feature performance, supporting data-driven recommendations for product optimization and user engagement growth.",
    tags:["Generative AI", "LLM API Integration", "Prompt Engineering", "Data Enrichment", "Product Analytics", "Google AI Studio & Gemini API", "MySQL", "Business Intelligence", "Pandas", "Numpy", 'Matplotlib', "Seaborn", "User Engagement Analysis"],
    links:[{label:"Github Repository",url:"https://github.com/bryanmyer2505/Game-AI---Data-Optimization"}]
  }
];
