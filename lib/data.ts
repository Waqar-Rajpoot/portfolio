export const personalInfo = {
  name: "Waqar Rajpoot",
  title: "Full-Stack Developer",
  subtitle: "MERN & Next.js Expert",
  tagline: "Specializing in high-performance, production-ready applications",
  location: "Sahiwal, Punjab, Pakistan",
  email: "waqar.softwaredev@gmail.com",
  phone: "+92 3206913949", // Update with real number
  whatsapp: "923206913949",  // Update with real WhatsApp number (no + or spaces)
  github: "https://github.com/Waqar-Rajpoot",
  linkedin: "https://linkedin.com/in/waqar-rajpoot",
  education: "BSIT — Govt College Sahiwal (2021–2025)",
  bio: `I am a Full-Stack Developer & Problem Solver based in Sahiwal, Punjab. As a self-taught developer, I have a proven track record of transitioning theoretical knowledge into high-impact, production-ready applications. I specialize in MERN Stack and Next.js, with a particular focus on bridging logistics gaps — from live geolocation tracking to complex database management and secure authentication systems.`,
  mission:
    "To build scalable, secure systems that solve real-world problems and deliver exceptional user experiences.",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "6+", label: "Projects Built" },
  { value: "100%", label: "TypeScript" },
  { value: "2", label: "Live Platforms" },
  { value: "∞", label: "Passion" },
];

export const services = [
  {
    icon: "🌐",
    title: "Full-Stack Web Apps",
    description:
      "End-to-end Next.js applications with SSR, SSG, and API Routes. From auth to deployment.",
  },
  {
    icon: "🗄️",
    title: "Database Architecture",
    description:
      "MongoDB schema design, atomic updates, indexing strategies, and high-concurrency solutions.",
  },
  {
    icon: "🔐",
    title: "Auth & Security",
    description:
      "NextAuth.js, JWT, RBAC, 2FA, bcrypt hashing, and secure session management.",
  },
  {
    icon: "📱",
    title: "Responsive UI/UX",
    description:
      "Pixel-perfect, mobile-first interfaces with Tailwind CSS, Shadcn/UI, and Framer Motion.",
  },
  {
    icon: "🔗",
    title: "REST & Server Actions",
    description:
      "Clean API design using Next.js Server Actions, Route Handlers, and middleware layers.",
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    description:
      "Code splitting, lazy loading, ISR/caching, image optimization, and Core Web Vitals.",
  },
];

export const projects = [
  {
    title: "Luminous Food Ordering",
    description:
      "Full-stack food ordering platform with Stripe payments, real-time order tracking, OTP delivery verification, admin & staff dashboards, and AI-powered chat.",
    tech: ["Next.js", "MongoDB", "Stripe", "NextAuth", "Tailwind"],
    github: "https://github.com/Waqar-Rajpoot/luminous-food-ordering",
    live: "https://luminous-food-ordering.vercel.app/",
    category: "Full-Stack",
    featured: true,
  },
  {
    title: "Blood Logistics Platform",
    description:
      "Real-time platform bridging blood donors and hospitals using live geolocation, atomic DB updates for inventory integrity, and secure RBAC with NextAuth.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Geolocation", "NextAuth"],
    github: "https://github.com/Waqar-Rajpoot/Blood-logistic-platform",
    live: "https://blood-logistic-platform.vercel.app/",
    category: "Full-Stack",
    featured: true,
  },
  {
    title: "Luminous Bistro",
    description:
      "Complete restaurant management web app with table booking, menu CRUD, order management, and a premium UI built with SSR for instant loads.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
    github: "https://github.com/Waqar-Rajpoot/Luminous-Bistro",
    live: "#",
    category: "Full-Stack",
    featured: false,
  },
  {
    title: "Luminous Booking",
    description:
      "Table reservation platform allowing customers to book restaurant tables with real-time availability, confirmation emails, and admin management panel.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Nodemailer"],
    github: "https://github.com/Waqar-Rajpoot/luminous-booking",
    live: "#",
    category: "Full-Stack",
    featured: false,
  },
  {
    title: "Blood Donation Community",
    description:
      "Large-scale community platform to connect blood donors across Pakistan. Features donor profiles, blood group filtering, and real-time request system.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    github: "https://github.com/Waqar-Rajpoot/Blood-Donation",
    live: "#",
    category: "Community",
    featured: false,
  },
  {
    title: "Simple Auth System",
    description:
      "Production-grade authentication boilerplate with Next.js — sign up, sign in, email verification, 2FA, and password reset flows.",
    tech: ["Next.js", "NextAuth", "MongoDB", "bcryptjs"],
    github: "https://github.com/Waqar-Rajpoot/Simple-Auth",
    live: "#",
    category: "Auth",
    featured: false,
  },
];

export const techStack = {
  Frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "Next.js API Routes", "Server Actions"],
  Database: ["MongoDB", "Mongoose"],
  Auth: ["NextAuth.js", "JWT", "bcryptjs", "2FA / OTP"],
  Payments: ["Stripe"],
  DevOps: ["Vercel", "Git", "GitHub"],
  Tools: ["VS Code", "Postman", "ImageKit", "Resend"],
};
