import { Section } from "@/components/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h3 className="mb-3 font-mono text-xs tracking-wide text-[var(--accent)] uppercase">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[var(--border)] px-2.5 py-1 text-sm text-[var(--text)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
