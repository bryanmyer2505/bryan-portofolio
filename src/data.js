import { image, link } from "framer-motion/client";

export const profile={
  name:"Bryan Myer Setiawan",
  title:"AI Engineer | Data Scientist",
  about:"I am a 7th-semester Computer Science student at BINUS University with a strong work ethic and a commitment to continuous growth in both technical and interpersonal skills. My academic focus is complemented by active involvement in organizational experiences, which have strengthened my leadership and teamwork abilities. I aspire to build a career as an Artificial Intelligence Engineer, Data Scientist, or Data Analyst, where I can apply my expertise to create innovative, data-driven solutions.",
  location:"Apt. Mediterania Gajah Mada, Jl. Gajah Mada No. 174, Jakarta",
  email:"bryanmyersetiawan@gmail.com",
  phone:"+62 818 409 888",
  linkedin:"https://www.linkedin.com/in/bryan-myer-setiawan-744531215/",
  github:"",
  photo:"/profile.jpg",
  cvPath:"/docs/Bryan-Myer-Setiawan-CV-ATS.pdf",
  portfolioPdfPath:"/docs/Bryan-Myer-Setiawan-Portfolio.pdf"
};

export const skills={
  technical:["Python","Jupyter Notebook","Computer Vision","Natural Language Processing","ML/DL","Data Analytics","Cloud Technology","Flask","React Native"],
  mathematics:["Calculus","Statistics"],
  soft:["Leadership","Time Management","Critical Thinking","Problem Solving","Project Management"],
  linguistics:["English", "Bahasa Indonesia","Mandarin"]
};

export const education=[
  {school:"BINUS University, Alam Sutera — Computer Science Global Class",period:"2022 — Present",note:"GPA: 3.79 / 4.00"},
  {school:"Xi’an Jiaotong-Liverpool University — Exchange (Spring 2025)",period:"2025",note:""},
  {school:"SMA Karangturi, Semarang — Mathematics and Science",period:"2019 — 2022",note:"Final Score: 90 / 100"}
];

export const experience = {
  professional: [
    {
      role: "AI Engineer Intern",
      company: "HPI Agro, Jakarta",
      period: "Sep 2025 — Present",
      image: "/img/logo_hpi.jpg",
      bullets: [
        "Develop AI-based web & mobile apps for palm-oil fruit grading usable in rural areas",
        "Develop AI-based small projects to help company’s administration processes"
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
  {title:"Computer Vision — Dataset & Reporting",
    description:"Applied CV techniques and contributed to dataset curation and reporting.",
    tags:["Computer Vision","ML"],
    links:[{label:"Final Report",url:"https://docs.google.com/document/d/1foORBP7Npnf6HiuSEJ9nLXah8wAwHU1rZ_gdZ5cPOhE/edit?usp=sharing"}]
  },
  {title:"Database Systems — Normalization & Design",
    description:"Designed reliable relational schema by eliminating functional dependencies and applying normalization.",
    tags:["Database","Normalization","SQL"],
    links:[{label:"Project Report",url:"https://drive.google.com/drive/folders/1SnfJ84qVV0AUb_Uh6PDqIx2eVJiw7cs1?usp=sharing"}]
  },
  {title:"Data Mining — Merging Datasets & Insights",
    description:"Merged datasets to generate new insights through exploration and analysis.",
    tags:["Data Mining","EDA"],
    links:[{label:"Final Report",url:"https://docs.google.com/document/d/1qoZUvsCmi_CDGyFtxDCTK1sCC088Jwk5/edit?usp=sharing&ouid=101085490274267652557&rtpof=true&sd=true"}]
  },
  {title:"Research Paper — Image Downscaling & Color Perception",
    description:"Paper on image downscaling algorithms & color perception; accepted at ISEMANTIC 2024 and on IEEE Xplore.",
    tags:["Research","Computer Vision"],
    links:[{label:"IEEE Abstract",url:"https://ieeexplore.ieee.org/abstract/document/10762067"}]
  }
];
