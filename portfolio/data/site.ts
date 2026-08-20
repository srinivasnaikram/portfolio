const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Ramavath Srinivas Naik",
  headline:
    "Backend / Full Stack Engineer · Node.js, React, TypeScript, AWS",
  shortTitle: "Backend / Full Stack Engineer",
  intro:
    "Computer Science Engineering graduate (CGPA 8.6) with internship experience building REST APIs, full-stack web apps, and production-style backend services. Open to Backend and Full Stack Engineer roles.",
  email: "srinivasnaik7075@gmail.com",
  githubUrl: "https://github.com/srinivasnaikram",
  linkedinUrl: "https://www.linkedin.com/in/srinivasnaikramavath",
  resumeUrl: `${basePath}/resume/resume.pdf`,
  location: "Macherla, Andhra Pradesh, India",
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#sdet", label: "SDET" },
  { href: "#contact", label: "Contact" },
] as const;

export const seo = {
  title: `${site.name} | Backend / Full Stack Engineer`,
  description:
    "Portfolio of Ramavath Srinivas Naik — B.Tech CSE, RGUKT Ongole. Backend and full-stack internship work with Node.js, React, TypeScript, APIs, and test-reporting platforms.",
};
