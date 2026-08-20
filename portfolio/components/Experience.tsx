import { Section } from "@/components/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="History" title="Experience">
      <ol className="relative space-y-8 border-l border-[var(--border)] pl-6">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative">
            <span
              className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
            <h3 className="text-lg font-semibold text-[var(--text)]">
              {item.role}
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {item.company} · {item.location}
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--accent)]">
              {item.duration}
            </p>
            <h4 className="mt-4 text-xs font-medium tracking-wide text-[var(--text)] uppercase">
              Responsibilities
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
              {item.responsibilities.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {item.achievements && item.achievements.length > 0 ? (
              <>
                <h4 className="mt-4 text-xs font-medium tracking-wide text-[var(--text)] uppercase">
                  Achievements
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                  {item.achievements.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
