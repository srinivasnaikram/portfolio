export type Project = {
  id: string;
  name: string;
  category: "Testing" | "Automation" | "Full Stack";
  description: string;
  problem: string;
  technologies: string[];
  features: string[];
  githubUrl: string | null;
  liveDemoUrl: string | null;
};

export const projects: Project[] = [
  {
    id: "allure-platform",
    name: "Allure Report Manager and Playwright Platform",
    category: "Testing",
    description:
      "Internship work at QApilot: an Express and React platform to run tests, stream live logs, and view pass/fail KPIs, with REST APIs for report zip, download, and delete.",
    problem:
      "Test execution, live logs, and report files were hard to operate from one place.",
    technologies: [
      "TypeScript",
      "Express.js",
      "React",
      "Playwright",
      "Allure",
      "Sentry",
      "Better Stack",
    ],
    features: [
      "Trigger test runs from a web UI",
      "Stream live logs over SSE",
      "Pass/fail KPIs and report zip/download/delete APIs",
      "Failure monitoring with Sentry and Better Stack",
    ],
    githubUrl: null,
    liveDemoUrl: null,
  },
  {
    id: "gitlab-jira",
    name: "GitLab to Jira Webhook Bridge",
    category: "Automation",
    description:
      "Internship work at QApilot: a webhook service that maps GitLab push and merge-request events to Jira status transitions.",
    problem:
      "Jira tickets were updated manually after GitLab activity, which delayed status changes.",
    technologies: [
      "Node.js",
      "Express.js",
      "GitLab Webhooks",
      "Jira Cloud REST API",
      "React",
      "systemd",
      "Sentry",
    ],
    features: [
      "Separate handling for GitLab push vs merge-request payloads",
      "Configurable mapping from events to Jira statuses",
      "Multi-user Jira auth and React admin UI",
      "systemd deployment and Sentry monitoring",
    ],
    githubUrl: null,
    liveDemoUrl: null,
  },
  {
    id: "resumesaas",
    name: "ResumeSaaS",
    category: "Full Stack",
    description:
      "A SaaS resume platform with Free (1 resume) and Pro (unlimited) plans, including signup, login, dashboard, and resume create/manage flows.",
    problem:
      "Building and managing multiple resumes needed auth, plans, payments, and email in one product.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Vercel",
      "PostHog",
      "Resend",
      "Sentry",
    ],
    features: [
      "Supabase Auth and Postgres for users and plans",
      "Stripe Checkout with webhooks to activate Pro",
      "Resend for signup and payment emails",
      "PostHog conversion events and Sentry error tracking",
    ],
    githubUrl: "https://github.com/srinivasnaikram/resumesaas",
    liveDemoUrl: "https://resumesaas-theta.vercel.app/",
  },
  {
    id: "hostel-admin",
    name: "Hostel Admin Management System",
    category: "Full Stack",
    description:
      "An admin platform for tenant records, fee tracking, and role-based admin/staff dashboards for daily hostel operations.",
    problem:
      "Hostel staff needed a single place to manage tenants, fees, and role-based access.",
    technologies: ["React", "Node.js"],
    features: [
      "Tenant records and fee tracking",
      "Admin and staff dashboards with role-based access",
    ],
    githubUrl: "https://github.com/srinivasnaikram/Hostel-Admin-App",
    liveDemoUrl: null,
  },
];

export const projectFilters = [
  "All",
  "Testing",
  "Automation",
  "Full Stack",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];
