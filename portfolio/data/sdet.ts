export const sdetWorkflow = [
  "Application",
  "Playwright",
  "Automated Tests",
  "Allure Reports",
  "CI/CD",
  "Test Results",
] as const;

export const sdetCopy = {
  heading: "Quality engineering",
  intro:
    "At QApilot I worked on a Playwright- and Allure-oriented platform: trigger runs, stream logs, and inspect reports. Automation is most useful when those results also flow through CI/CD so failures are visible next to the code.",
  points: [
    {
      title: "Automation",
      body: "Browser and API tests (for example with Playwright) encode expected behavior so regressions are caught before release.",
    },
    {
      title: "Reporting",
      body: "Allure (or similar) turns raw run output into traces that developers and QA can inspect together.",
    },
    {
      title: "CI/CD",
      body: "Pipelines run the suite on each change, publish artifacts, and keep quality checks next to the code.",
    },
  ],
};
