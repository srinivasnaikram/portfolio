import { Section } from "@/components/Section";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education" eyebrow="Study" title="Education">
      <ul className="space-y-5">
        {education.map((item) => (
          <li
            key={`${item.school}-${item.degree}`}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h3 className="text-lg font-semibold text-[var(--text)]">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.school}</p>
            <p className="mt-1 font-mono text-xs text-[var(--accent)]">
              {item.graduationYear}
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">{item.details}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
