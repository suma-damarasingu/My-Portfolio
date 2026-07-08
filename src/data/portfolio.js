import {
  Award,
  BadgeCheck,
  Binary,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  Medal,
  Server,
  Sparkles,
  TerminalSquare,
  Trophy,
  Wrench
} from "lucide-react";
import { href } from "react-router-dom";

export const student = {
  name: "Sumasri Durga",
  role: "Undergraduate Computer Science Student | AI & Full Stack Developer",
  email: "sumasrinivas327@gmail.com",
  phone: "+91 8309030289",
  location: "India",
  resume: "/assets/resume.pdf",
  profileImage: "/assets/profile.jpeg",
  bio: "I'm Damarasingu Sumasri Durga, a Computer Science student and aspiring Software Engineer passionate about Full-Stack Development, Artificial Intelligence, and Problem Solving. I enjoy creating modern web applications, learning new technologies, and turning innovative ideas into real-world solutions through clean and efficient code.",
  objective: "Motivated and detail-oriented final-year B.Tech Computer Science student with a strong foundation in Data Structures & Algorithms, Full-Stack Development, and problem-solving. Seeking an entry-level Software Engineer role where I can apply my technical skills, contribute to innovative projects, and continuously learn while delivering impactful solutions in a collaborative environment.",
  interests: ["Generative AI", "Machine Learning", "RAG Systems", "Web Apps", "Competitive Programming"],
  strengths: ["Problem solving", "Fast learner", "Clear communication", "Time Management", "Team collaboration","Stress Management"],
  languages: ["English", "Hindi", "Telugu"]
};

export const socials = [
  { label: "GitHub", href: "https://github.com/suma-damarasingu", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumasri-damarasingu-808a91297", icon: BriefcaseBusiness },
  { label: "LeetCode", href: "https://leetcode.com/u/Sumasri_537/", icon: Binary },
  { label: "Codechef", href: "https://www.codechef.com/users/sumasri2710", icon: Code2 },
  { label: "Email", href: "mailto:sumasrinivas327@gmail.com", icon: Mail }
];

export const skills = [
  {
    category: "Programming Languages",
    icon: FileCode2,
    items: [
      ["C++(Basics)", 50],
      ["C(BasicS)", 55],
      ["Python(Basics)", 90],
      ["Java(Basics)", 50],
      ["JavaScript(BasicS)", 45]
    ]
  },
  {
    category: "Frontend",
    icon: Layers3,
    items: [
      ["HTML", 94],
      ["CSS", 90],
      ["Tailwind CSS", 88],
      ["React", 86]
    ]
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      ["Node.js", 82],
      ["Express.js", 80]
    ]
  },
  {
    category: "Database",
    icon: Database,
    items: [
      ["MySQL", 82],
      ["MongoDB", 78]
    ]
  },
  {
    category: "AI & ML",
    icon: BrainCircuit,
    items: [
      ["Machine Learning", 84],
      ["Generative AI", 80],
      ["Pinecone", 72],
      ["RAG", 78]
    ]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      ["Git", 86],
      ["GitHub", 88],
      ["VS Code", 92],
      ["Postman", 80],
      ["Antigravity", 68],
      ["Codex", 68]
    ]
  }
];

export const projects = [
  {
    title: "SmartSupport - AI Customer Support Platform",
    category: "AI",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    description: "A full stack support desk with AI ticket classification, summaries, knowledge-base search, and RAG-powered answer suggestions.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Pinecone", "Gemini"],
    features: ["AI triage", "RAG answers", "Role dashboards", "Analytics"],
    github: "https://github.com/",
    demo: "#"
  },
  {
  title: "Secure Password Generator",
  category: "Web Security",
  image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
  description: "A secure password generator and manager that creates strong, customizable passwords, analyzes password strength using entropy calculations, and securely stores encrypted passwords with user authentication.",
  stack: ["React", "Node.js", "Express.js", "MongoDB", "Python", "JWT", "Tailwind CSS"],
  features: [
    "Secure password generation",
    "Password strength analysis",
    "AES-256 encrypted password storage",
    "JWT authentication",
    "Dark & Light mode",
    "Password history and favorites"
  ],
  github: "https://github.com/",
  demo: "#"
},
  {
  title: "Personal Portfolio Website",
  category: "Web Development",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  description: "A modern, fully responsive portfolio website showcasing my skills, projects, certifications, and achievements. It features smooth animations, interactive UI, project filtering, and an integrated contact form for seamless communication.",
  stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion", "EmailJS"],
  features: [
    "Responsive design",
    "Interactive project showcase",
    "Skills & certifications section",
    "Smooth animations",
    "Dark & Light mode",
    "Contact form with EmailJS"
  ],
  github: "https://github.com/",
  demo: "#"
}
];

export const timeline = [
  { title: "Web Development Intern", meta: "Internship - SkillDzire", date: "2024", icon: BriefcaseBusiness, text: "Developed responsive and user-friendly web applications using modern frontend and backend technologies, ensuring clean design and seamless user experience." },
  { title: "MERN Stack Workshop", meta: "Workshop - PurpleLane", date: "2025", icon: Code2, text: "Completed hands-on MERN stack training with deployment workflows." },
  { title: "GenAI + MERN Stack Workshop", meta: "Workshop - PurpleLane", date: "2025", icon: Code2, text: "Strengthened practical skills in React, Node.js, Express.js, MongoDB, and AI-driven application development." },
  { title: "Advanced GenAI & Deep Learning Internship", meta: "Internship - PurpleLane", date: "2026", icon: Code2, text: "Gained hands-on expertise in Generative AI, deep learning, and intelligent application development during an Advanced GenAI & Deep Learning Internship." }

];

export const certifications = [
  ["NPTEL", "Internet of Things", "April 2026", Award,"swayam.pdf"],
  ["Simplilearn", "Introduction to Cyber Security", "Nov 2025", BrainCircuit,"https://simpli-web.app.link/e/HZlQ0TXJu4b"],
  ["Simplilearn", "Fundamentals of SQL", "Sep 2025", Cpu,"https://simpli-web.app.link/e/FOAQGfNLu4b"],
  ["Simplilearn", "Fundamentalls of Database", "Jul 2025", Globe2,"https://simpli-web.app.link/e/Xlf9OvNLu4b"],
  ["Codefobe", "Python Fundamentals", "May 2025", Sparkles,"https://www.linkedin.com/posts/sumasri-damarasingu-808a91297_python-certification-codefobe-activity-7307718993274970112-wRuf?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEfijEgBHEjEXG-ycAxww9Lvw1Io26U8vzg&utm_campaign=whatsapp"]
];

export const achievements = [
  ["LeetCode", "50+ problems solved", Medal],
  ["Codechef", "1000+ problems solved", Medal],
  ["Certifications", "5+ professional certificates", BadgeCheck]
];

export const profiles = [
  ["LeetCode", "50 solved", "Contest rating 1650", Binary,"https://leetcode.com/u/Sumasri_537/"],
  ["CodeChef", "1 star", "Rating 1450", TerminalSquare,"https://www.codechef.com/users/sumasri2710"]
];

export const education = [
  {
    university: "Sasi Institute of Technology and Engineering",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "9.45 / 10",
    coursework: ["Data Structures", "Operating Systems", "DBMS", "Machine Learning", "Computer Networks"],
    graduation: "2027"
  },
  {
    university: "GSR Junior College,Pippara",
    degree: "Intermediate in MPC",
    cgpa: "967 / 1000",
    metricLabel: "Marks",
    graduation: "2023"
  },
  {
    university: "ZPH school ,Pali, Attili mandal, West Godavari",
    degree: "SSC",
    cgpa: "534 / 600",
    metricLabel: "Marks",
    graduation: "2021"
  }

];

