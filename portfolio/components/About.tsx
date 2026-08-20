import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About me">
      <div className="max-w-3xl space-y-4 text-[0.975rem] leading-relaxed text-[var(--muted)]">
        <p>
          I am a Computer Science Engineering graduate from RGUKT Ongole (CGPA
          8.6/10) with internship experience in software development. I have
          built REST APIs, full-stack web apps, and internal product modules
          using Node.js, TypeScript, React, Python, and AWS.
        </p>
        <p>
          At QApilot I worked on an Express and React test-reporting platform
          and a GitLab-to-Jira webhook service. That work included Playwright
          and Allure-oriented test operations, live logs, and monitoring. At
          Cyient I delivered four internal modules, including authentication,
          dashboards, a school portal, and an in-app chatbot.
        </p>
        <p>
          I am looking for Backend and Full Stack Engineer roles. I also have
          hands-on exposure to test automation and reporting from internship
          work, which is useful for SDET-adjacent quality engineering.
        </p>
      </div>
    </Section>
  );
}
