// Personal Information
export const personalInfo = {
  name: "Arul Kumar",
  title: "Mobile Application Developer",
  location: "Chennai, India",
  phone: "+91 7824024171",
  email: "arulkumar1551990@gmail.com",
  linkedin: "https://linkedin.com/in/arul-kumar-055b22249/",
  github: "https://github.com/Arulkumar-15",
  discordId: "YOUR_DISCORD_USER_ID", // Replace with your Discord User ID (Right-click your Discord profile → Copy ID)
  summary: "Mobile Application Developer with 1+ years of hands-on experience building cross-platform applications using React Native and Flutter. Specialized in developing scalable, production-ready mobile solutions with expertise in RESTful APIs, Firebase, and state management (Redux). Proven track record of delivering 4 production applications with 500+ combined users.",
};

// Skills Data with Icons
export const skills = {
  mobile: [
    { name: "React Native", level: 90, icon: "⚛️" },
    { name: "Flutter", level: 85, icon: "flutter" },
    { name: "Cross-Platform", level: 88, icon: "📱" },
  ],
  frontend: [
    { name: "React.js", level: 92, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "JavaScript", level: 90, icon: "📜" },
    { name: "TypeScript", level: 88, icon: "typescript" },
    { name: "Tailwind CSS", level: 95, icon: "🎨" },
  ],
  backend: [
    { name: "Node.js", level: 82, icon: "🟢" },
    { name: "Express.js", level: 80, icon: "🚂" },
    { name: "RESTful APIs", level: 85, icon: "🔌" },
    { name: "Firebase", level: 88, icon: "🔥" },
  ],
  database: [
    { name: "Firebase DB", level: 85, icon: "🔥" },
    { name: "Firestore", level: 87, icon: "📊" },
    { name: "SQL", level: 75, icon: "🗄️" },
    { name: "NoSQL", level: 80, icon: "📦" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "🌿" },
    { name: "GitHub", level: 90, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Cursor AI", level: 85, icon: "🤖" },
  ],
};

// Experience Data
export const experience = [
  {
    company: "Zen App Studios",
    location: "Chennai",
    period: "Nov 2024 – Present",
    role: "Mobile Application Developer",
    projects: [
      {
        name: "Motrai",
        tech: "Flutter",
        description: "Vehicle maintenance app tracking service history, repair logs, and fuel expenses",
        achievements: [
          "Built comprehensive vehicle tracking system",
          "Implemented maintenance scheduling features",
          "Integrated expense management functionality",
        ],
      },
      {
        name: "Finvoice",
        tech: "React Native",
        description: "Invoice management app serving 500+ users across 15 countries with multi-language support",
        achievements: [
          "Developed invoice generation and management system",
          "Implemented multi-language support for 15+ countries",
          "Achieved 500+ active users milestone",
        ],
      },
      {
        name: "FieldTrack",
        tech: "Flutter",
        description: "Task management app for 200+ field professionals with 4.5-star Play Store rating",
        achievements: [
          "Created real-time task tracking system",
          "Built offline-first architecture",
          "Achieved 4.5-star rating on Play Store",
        ],
      },
      {
        name: "Jazak.ai",
        tech: "Next.js",
        description: "Scalable microsite platform for 50+ business clients with 10,000+ monthly visits",
        achievements: [
          "Built multi-tenant microsite platform",
          "Implemented SEO optimization",
          "Scaled to 10,000+ monthly visits",
        ],
      },
    ],
  },
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "Finvoice",
    description: "Invoice management application with multi-language support serving 500+ users globally",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    image: "/projects/finvoice.jpg",
    link: "#",
    github: "#",
    stats: {
      users: "500+",
      countries: "15+",
      rating: "4.6"
    }
  },
  {
    id: 2,
    title: "FieldTrack",
    description: "Task management solution for field professionals with offline capabilities",
    tech: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    image: "/projects/fieldtrack.jpg",
    link: "https://play.google.com/store/apps/details?id=com.fieldsalestrack.fieldtrack&pcampaignid=web_share",
    github: "#",
    stats: {
      users: "200+",
      rating: "4.5",
      downloads: "1000+"
    }
  },
  {
    id: 3,
    title: "Motrai",
    description: "Vehicle maintenance tracker with service history and expense management",
    tech: ["Flutter", "Firebase", "Dart", "SQLite"],
    image: "/projects/motrai.jpg",
    link: "https://play.google.com/store/apps/details?id=app.motari&pcampaignid=web_share",
    github: "#",
    stats: {
      features: "15+",
      rating: "4.7"
    }
  },
  {
    id: 4,
    title: "Jazak.ai",
    description: "Scalable microsite platform enabling businesses to create custom web presence",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/jazak.jpg",
    link: "https://jazak.ai/",
    github: "#",
    stats: {
      clients: "50+",
      visits: "10K+/month"
    }
  },
];

// Education Data
export const education = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science and Engineering",
  college: "Prince Dr K Vasudevan College of Engineering and Technology",
  location: "Chennai",
  period: "Sept 2020 – June 2024",
};

// Certifications Data
export const certifications = [
  {
    title: "Mobile App Developer Intern",
    organization: "Blue Silicon Infotech",
    period: "May 2024 – Oct 2024",
    type: "Internship",
  },
  {
    title: "Core Python Programming",
    organization: "Greens Technology",
    period: "2023",
    type: "Certification",
  },
  {
    title: "AR/VR Development",
    organization: "INGAGE Technology",
    period: "2024",
    type: "Certification",
  },
];

// Stats Data
export const stats = [
  {
    label: "Years Experience",
    value: "1+",
    icon: "⏱️",
  },
  {
    label: "Projects Delivered",
    value: "4",
    icon: "🚀",
  },
  {
    label: "Happy Users",
    value: "500+",
    icon: "😊",
  },
  {
    label: "Code Commits",
    value: "1000+",
    icon: "💻",
  },
];

