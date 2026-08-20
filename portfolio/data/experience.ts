export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements?: string[];
};

export const experience: Experience[] = [
  {
    company: "QApilot",
    role: "Software Development Intern",
    duration: "Jun 2026 – Aug 2026",
    location: "Remote",
    responsibilities: [
      "Built an Express and React platform to trigger test runs, stream live logs over SSE, and show pass/fail KPIs.",
      "Added REST APIs for report zip, download, and delete, with Sentry and Better Stack for run failures.",
      "Designed a GitLab-to-Jira webhook service mapping push and merge-request events to Jira status updates.",
      "Added configurable workflow mapping, multi-user Jira auth, a React admin UI, systemd deploy, and Sentry monitoring.",
    ],
  },
  {
    company: "Cyient",
    role: "Software Development Intern",
    duration: "May 2025 – Aug 2025",
    location: "Hyderabad, India",
    responsibilities: [
      "Implemented a secure company login system with role-based access and tabular UI for internal use.",
      "Built a Streamlit sales dashboard with filters and interactive charts for internal sales review.",
      "Integrated an in-app chatbot for common support queries.",
      "Developed a school portal with feedback modules and secure PDF/image storage.",
    ],
  },
  {
    company: "IntrnForte",
    role: "Cloud Computing Intern",
    duration: "Oct 2023 – Dec 2023",
    location: "Remote",
    responsibilities: [
      "Completed 10-week project-based training on cloud architecture, virtualization, and IaaS/PaaS/SaaS.",
      "Deployed sample applications on AWS using EC2, S3, Lambda, and API Gateway.",
    ],
  },
];
