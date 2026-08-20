export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Bootstrap", "Streamlit", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Webhooks", "Supabase"],
  },
  {
    category: "Testing",
    items: ["Playwright", "Allure"],
  },
  {
    category: "Payments & email",
    items: ["Stripe", "Resend"],
  },
  {
    category: "Cloud & tools",
    items: [
      "AWS (EC2, S3, Lambda, API Gateway)",
      "Vercel",
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Linux",
      "systemd",
    ],
  },
  {
    category: "Observability",
    items: ["Sentry", "Better Stack", "PostHog"],
  },
];
