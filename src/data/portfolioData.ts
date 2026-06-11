export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string; // fallback CSS gradient class or mock URL
  features: string[];
  challenges: string;
  improvements: string[];
  gallery: string[]; // array of secondary gradients/colors representing pictures
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  iconName: string; // corresponding Lucide icon or text
  color: string; // Tailwind glow border color class (e.g., 'border-cyan-500/30 shadow-cyan-500/20 text-cyan-400')
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export const portfolioData = {
  personalInfo: {
    name: "MD Shahriar Kabir",
    title: "MERN Stack Developer",
    tagline: "Transforming ideas into powerful web applications through the MERN Stack. Focused on delivering fast, intuitive, and visually engaging experiences that solve real-world problems.",
    typingTexts: [
      "MERN Stack Specialist",
      "Next.js Architect",
      "Full Stack Innovator",
      "UX/UI Animation Enthusiast"
    ],
    socials: {
      github: "https://github.com/md-shahriar-kabir",
      linkedin: "https://www.linkedin.com/in/shahriarkabir04/",
      facebook: "https://www.facebook.com/shariarkabir88",
      // twitter: "https://twitter.com/shahriar_kabir"
    },
    resumeUrl: "/shahriar-kabir-resume.pdf", // Anchor to trigger download or view resume
  },
  
  about: {
    story: [
      "My programming journey began with a curiosity about how the web works, which quickly evolved into a burning passion for creating fully functional, interactive web applications. As a dedicated MERN Stack Developer, I thrive on turning complex logic into beautiful, user-centric interfaces that load within milliseconds.",
      "I love engineering every piece of the stack—from planning the MongoDB schema and building secure Node/Express REST APIs to styling premium frontend layouts in React and Next.js. My goals focus on delivering world-class freelancing services to clients worldwide, maintaining code elegance, and exploring state-of-the-art animations that redefine standard web interactions.",
      "Beyond technical development, I am deeply committed to education. I love teaching coding, sharing knowledge with aspiring developers, and mentoring others through technical challenges. When I am not writing code or debugging databases, you can find me exploring video games, researching cutting-edge tech trends, and drinking good coffee."
    ],
    hobbies: [
      { name: "Gaming", icon: "Gamepad" },
      { name: "Tech Blogging", icon: "BookOpen" },
      { name: "Open Source", icon: "Github" },
      { name: "Teaching", icon: "GraduationCap" }
    ]
  },

  skillCategories: [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 92, iconName: "Atom", color: "from-cyan-400 to-blue-500 glow-cyan" },
        { name: "Next.js", level: 88, iconName: "Layers", color: "from-zinc-100 to-zinc-400 glow-white" },
        { name: "JavaScript", level: 95, iconName: "Code", color: "from-yellow-400 to-orange-500 glow-yellow" },
        { name: "Tailwind CSS", level: 90, iconName: "Palette", color: "from-sky-400 to-indigo-500 glow-sky" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 86, iconName: "Server", color: "from-green-400 to-emerald-600 glow-green" },
        { name: "Express.js", level: 85, iconName: "Cpu", color: "from-gray-300 to-slate-500 glow-slate" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 88, iconName: "Database", color: "from-green-500 to-emerald-700 glow-emerald" },
        { name: "Firebase", level: 80, iconName: "Flame", color: "from-amber-400 to-orange-500 glow-orange" }
      ]
    },
    {
      category: "Authentication",
      skills: [
        { name: "JWT (JsonWebToken)", level: 85, iconName: "Shield", color: "from-red-400 to-rose-600 glow-red" },
        { name: "Better Auth", level: 83, iconName: "Key", color: "from-orange-400 to-amber-500 glow-amber" }
      ]
    },
    {
      category: "Tools & Deployments",
      skills: [
        { name: "Git", level: 88, iconName: "GitBranch", color: "from-orange-600 to-red-600 glow-orange" },
        { name: "GitHub", level: 90, iconName: "Github", color: "from-purple-500 to-indigo-600 glow-purple" },
        { name: "Vercel", level: 85, iconName: "ExternalLink", color: "from-zinc-200 to-slate-400 glow-light" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      institution: "World University of Bangladesh (WUB)",
      degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
      year: "2013 - 2017",
      description: "Focusing on Software Engineering, Data Structures, Algorithms, Artificial Intelligence, and Web Technologies. Actively participating in programming clubs and technical events."
    },
    {
      institution: "Programming Hero",
      degree: "Complete Web Development Course (MERN Stack)",
      year: "2023 (6 Months)",
      description: "Intensive training program mastering Frontend and Backend architectures. Built over 15 full-stack applications with focus on REST APIs, security, deployment, and high-performance databases."
    },
    {
      institution: "Institute of Science, Trade & Technology (ISTT)",
      degree: "Diploma in Data Telecom. & Networking",
      year: "2008 - 2012",
      description: "Focusing on Data Communication, Computer Networks, Telecommunication Systems, Networking Devices & Hardware, Wireless Communication, Network Security, OSI and TCP/IP Models."
    }
  ] as EducationEntry[],

  experience: [
    {
      role: "Senior SEO Specialist",
      company: "I-Map WebSolutions",
      duration: "2023 - 2025",
      responsibilities: [
        "At I Map Web Solutions Ltd., the Senior SEO Specialist is responsible for improving website rankings and increasing organic traffic through effective SEO strategies.",
        "The role includes keyword research, on-page and technical SEO, content optimization, and competitor analysis.",
        "I have also handle site audits, fix SEO issues, improve page speed, and ensure proper indexing. Regular performance tracking using tools like Google Analytics and Search Console is required.", 
        "The role involves working with content and development teams to build SEO-friendly websites and maintaining strong search visibility through updated SEO best practices."
      ],
      technologies: ["AHREF", "Semrush", "Google Analytics", "Google Tag Manager", "Google Search Console",]
    },
    {
      role: "Assistant Manager of IT",
      company: "Capitec Asset Management Limited",
      duration: "2021 - 2023",
      responsibilities: [
        "Creating free learning tutorials and articles about MERN Stack, React state management, and modern Web Animation libraries.",
        "Building reusable open-source component packages and UI kits for the developer community.",
        "Providing online mentorship and one-on-one debugging sessions to junior web developers to fast-track their development skills."
      ],
      technologies: ["G", "React", "Next.js", "Git", "GitHub", "Tailwind CSS"]
    }
  ] as ExperienceEntry[],

  projects: [
    {
      id: "study-nook",
      title: "Study Nook",
      shortDescription: "A real-time collaborative web application designed for group study and task planning.",
      description: "Study Nook is a premium collaborative workspace created for students and remote study groups. It provides real-time virtual rooms with synchronized study timers, dynamic group chats, interactive task boards (Kanban style), and a live multi-user collaborative whiteboard. Built with a sleek dark futuristic theme, it eliminates distraction and maximizes productivity using seamless websocket connections.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "JWT"],
      liveUrl: "https://studynook-pi.vercel.app/",
      githubUrl: "https://github.com/shahriar-kabir/study-nook-client",
      image: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-950",
      features: [
        "Synchronized Pomodoro timers for study rooms to maintain work-rest cycles.",
        "Interactive canvas whiteboard allowing multiple students to draw, edit, and wipe simultaneously.",
        "Real-time instant text messaging and active student indicator inside study rooms.",
        "A robust Kanban Board to assign tasks, drag-and-drop status, and monitor deadline alerts."
      ],
      challenges: "Synchronizing the state of a multi-user canvas whiteboard across high-latency connections. Heavy drawing sequences created noticeable lag and database race conditions.",
      improvements: [
        "Implemented local debouncing on drawing canvas vectors and throttled drawing packets sent through WebSockets.",
        "Integrated lightweight database updates by saving board state snapshots in Mongo every 10 seconds rather than on every stroke.",
        "Upgraded drawing engine to use hardware-accelerated canvas contexts, reducing CPU loads by 40%."
      ],
      gallery: [
        "bg-gradient-to-br from-indigo-950 to-blue-900",
        "bg-gradient-to-br from-purple-950 to-purple-800",
        "bg-gradient-to-br from-cyan-950 to-emerald-950"
      ]
    },
    {
      id: "github-issues-tracker",
      title: "GitHub Issues Tracker",
      shortDescription: "An advanced dashboard for repo analytics and seamless issue management.",
      description: "GitHub Issues Tracker is an immersive developer-centric dashboard designed to organize and streamline repository tracking. Integrating with the GitHub GraphQL & REST APIs, it provides stunning visualization of commit pipelines, issues open/closed status, pull request review requests, and interactive charts displaying team performance metrics over time.",
      techStack: ["Next.js", "Tailwind CSS", "GitHub API", "Recharts", "Framer Motion", "JWT"],
      liveUrl: "https://github-tracker-pro.vercel.app",
      githubUrl: "https://github.com/shahriar-kabir/github-issues-tracker",
      image: "bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950",
      features: [
        "Real-time issue tracking with automated label matching and repository filters.",
        "Cinematic data analytics graphs charting issue resolution rates, pull requests, and commit histories.",
        "Secure OAuth login with GitHub to access private and public repository configurations directly.",
        "Custom desktop notifications when issues are assigned, closed, or mentioned in commits."
      ],
      challenges: "Managing rapid API rate limits under GitHub's standard authorization when pulling high volumes of commits and issues from complex open-source projects.",
      improvements: [
        "Designed a custom server-side caching layer inside Next.js API Routes using memory cache to store repository stats for 5 minutes.",
        "Optimized queries by migrating the pipeline to GitHub GraphQL API v4, pulling only necessary nodes instead of full REST payloads.",
        "Implemented optimistic UI updates to instantly display state changes while API requests synchronize in the background."
      ],
      gallery: [
        "bg-gradient-to-br from-slate-950 to-slate-800",
        "bg-gradient-to-br from-indigo-950 to-blue-900",
        "bg-gradient-to-br from-cyan-900 to-indigo-900"
      ]
    },
    {
      id: "job-application-tracker",
      title: "Job Application Tracker",
      shortDescription: "Interactive Kanban workspace to monitor and manage job applications.",
      description: "Job Application Tracker is a productivity platform designed to help job seekers manage their professional pipeline. Combining clean database schemas with an interactive drag-and-drop board, it enables candidates to organize applications (Applied, Interviewing, Offered, Rejected), track recruiter contacts, log follow-up reminders, and visualize pipeline ratios through rich analytical reports.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Framer Motion", "Recharts"],
      liveUrl: "https://job-application-tracker-red-five.vercel.app/",
      githubUrl: "https://github.com/md-shahriar-kabir/job-application-tracker",
      image: "bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950",
      features: [
        "Fluid drag-and-drop interface powered by Framer Motion to move job cards across funnel phases.",
        "Embedded calendar system scheduling automatic email reminders for scheduled interviews.",
        "Detailed statistical analytical boards charting application success ratios and response times.",
        "Secure document hosting allowing users to store cover letters and resumes linked to each job card."
      ],
      challenges: "Ensuring high-end drag-and-drop performance on mobile viewports while keeping database card positions persistent across concurrent sessions.",
      improvements: [
        "Implemented Framer Motion's high-performance layout projections for buttery drag gestures.",
        "Built custom touch-event interceptors preventing page scroll behavior during card drags on smaller responsive screens.",
        "Configured a batch-update endpoint in Node.js to update database indices for all shifted cards in a single network request."
      ],
      gallery: [
        "bg-gradient-to-br from-teal-950 to-emerald-900",
        "bg-gradient-to-br from-slate-900 to-teal-950",
        "bg-gradient-to-br from-emerald-950 to-indigo-950"
      ]
    },
    {
      id: "eid-countdown",
      title: "Eid Countdown App",
      shortDescription: "A beautiful, cinematic celebration countdown app with interactive cards.",
      description: "The Eid Countdown App is an immersive, highly interactive single-page application featuring smooth particle effects, starry dynamic skies, and beautiful mathematical countdowns leading up to Eid celebrations. Built with premium audio integrations, local prayer schedules, and an interactive greeting card generator that lets users customize, animate, and share festive greetings with family.",
      techStack: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Web Audio API"],
      liveUrl: "https://eid-countdown-cel.vercel.app",
      githubUrl: "https://github.com/shahriar-kabir/eid-countdown",
      image: "bg-gradient-to-br from-purple-950 via-pink-900 to-rose-950",
      features: [
        "Cinematic counting display down to milliseconds with floating crescent animation.",
        "Starry night sky generator with interactive shooting stars matching user mouse clicks.",
        "Built-in web player playing high-fidelity ambient nature soundtracks and festive tunes.",
        "A customized greeting canvas where users can input custom texts and export beautiful custom images."
      ],
      challenges: "Exporting HTML/CSS stylized cards as standalone high-quality PNGs client-side without relying on expensive server-side rendering setups.",
      improvements: [
        "Implemented the lightweight `html2canvas` library directly on the client browser.",
        "Created an asset preloading system verifying that custom web fonts and decorative vector curves are cached before capturing canvas states.",
        "Optimized image scaling settings on canvas renders to deliver crisp resolution on high-DPI retina displays."
      ],
      gallery: [
        "bg-gradient-to-br from-purple-950 to-pink-900",
        "bg-gradient-to-br from-rose-950 to-amber-950",
        "bg-gradient-to-br from-indigo-950 to-purple-900"
      ]
    },
    {
      id: "tile-gallery",
      title: "Tile Gallery Website",
      shortDescription: "A highly immersive, interactive horizontal scrolling 3D tile art showcase.",
      description: "Tile Gallery is a high-performance visual exhibition showcasing intricate architectural tile art and textures. Inspired by premium showcase websites, it implements customized 3D tilt effects, parallax horizontal scrolling, and fluid page transitions using GSAP and Lenis scrolling, making exploration feel like walking through a physical museum.",
      techStack: ["Next.js", "Tailwind CSS", "GSAP", "ScrollTrigger", "Lenis", "Framer Motion"],
      liveUrl: "https://tile-gallery-showcase.vercel.app",
      githubUrl: "https://github.com/shahriar-kabir/tile-gallery",
      image: "bg-gradient-to-br from-cyan-950 via-sky-900 to-blue-950",
      features: [
        "Buttery horizontal grid layouts powered by GSAP ScrollTrigger to translate vertical scroll into smooth x-axis motions.",
        "Responsive 3D rotation and dynamic glare highlights tracking mouse coordinate points.",
        "Elegant photo expansion overlay with smooth layout transformations (Flip animations) utilizing GSAP.",
        "Cinematic image blur-in preloading system to ensure visual fidelity during gallery loads."
      ],
      challenges: "Maintaining solid 60fps performance during complex 3D transformation calculations and scroll parallax effects on legacy mobile browsers.",
      improvements: [
        "Integrated Lenis scrolling to decouple scroll inputs from render ticks, delivering smooth hardware-accelerated layouts.",
        "Applied CSS properties (`will-change`, `transform3d`) to individual gallery cards, offloading card rendering calculations onto the GPU.",
        "Implemented full image viewport lazy loading, fetching details only when they are close to appearing on-screen."
      ],
      gallery: [
        "bg-gradient-to-br from-cyan-950 to-blue-900",
        "bg-gradient-to-br from-sky-950 to-slate-900",
        "bg-gradient-to-br from-teal-950 to-indigo-950"
      ]
    }
  ] as Project[]
};
